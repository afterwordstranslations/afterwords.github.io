# Deployment Guide — afterwords.gr on Fly.io

This guide covers the full setup, deployment, DNS configuration, and ongoing operations for the Afterwords website hosted on Fly.io.

## Architecture Overview

```
GitHub repo
  │
  ├─ PR opened/updated ──→ checks (type-check + build) ──→ fly deploy ──→ afterwords-preview-pr-<N>.fly.dev
  │
  ├─ PR closed ───────────→ fly destroy ──→ preview app removed
  │
  └─ push to main ────────→ checks (type-check + build) ──→ fly deploy ──→ afterwords.gr (production)
```

- **Runtime:** Next.js standalone (SSR) in a Docker container
- **Region:** Amsterdam (`ams`) — optimized for Greek/EU audience
- **Scaling:** Auto-stop when idle, auto-start on request. Stopped machines cost nothing.
- **CI checks:** Type-check (`tsc --noEmit`) and build (`next build`) must pass before any deployment.

## Initial Setup (One-Time)

### 1. Install the Fly CLI

```bash
brew install flyctl
```

### 2. Authenticate

```bash
fly auth login
```

### 3. Create the Fly app

```bash
fly apps create afterwords-web
```

### 4. Allocate IP addresses

```bash
fly ips allocate-v4 --shared -a afterwords-web
fly ips allocate-v6 -a afterwords-web
```

Note the IPs — you'll need them for DNS:

```bash
fly ips list -a afterwords-web
```

### 5. Set Fly secrets

These are available as runtime environment variables inside the container:

```bash
fly secrets set \
  NEXT_PUBLIC_SITE_URL=https://afterwords.gr \
  NEXT_PUBLIC_GA_MEASUREMENT_ID=G-5NHQFR2NKS \
  NEXT_PUBLIC_HELPSCOUT_BEACON_ID=59d3cf5c-2a28-4cd5-a299-7cc71501140d \
  -a afterwords-web
```

### 6. Configure GitHub repository

Go to **Settings → Secrets and variables → Actions** in the GitHub repo.

**Secrets** (sensitive, masked in logs):

| Name | Value | How to get it |
|------|-------|---------------|
| `FLY_API_TOKEN` | Fly.io org deploy token | `fly tokens create org` |
| `GA_MEASUREMENT_ID` | `G-5NHQFR2NKS` | Google Analytics |
| `HELPSCOUT_BEACON_ID` | `59d3cf5c-2a28-4cd5-a299-7cc71501140d` | HelpScout dashboard |

**Variables** (non-sensitive, visible in logs):

| Name | Value |
|------|-------|
| `SITE_URL` | `https://afterwords.gr` |

### 7. Create the production environment

Go to **Settings → Environments → New environment**:
- Name: `production`
- Deployment branches: restrict to `main` only

This ensures only pushes to `main` can trigger production deployments.

### 8. Enable branch protection (recommended)

Go to **Settings → Branches → Add rule** for `main`:
- Require status checks to pass: enable **"Type Check & Build"**
- Do not allow force pushes

This prevents merging PRs that fail checks.

## DNS Configuration (Cloudflare)

DNS for `afterwords.gr` is managed in Cloudflare.

### Step 1: Register custom domains with Fly

```bash
fly certs create afterwords.gr -a afterwords-web
fly certs create www.afterwords.gr -a afterwords-web
```

Fly will provision Let's Encrypt TLS certificates automatically once DNS is pointed.

### Step 2: Configure DNS records in Cloudflare

**Production (afterwords.gr):**

| Type | Name | Value | Proxy |
|------|------|-------|-------|
| A | `@` | *(Fly IPv4 from `fly ips list`)* | DNS only (grey cloud) |
| AAAA | `@` | *(Fly IPv6 from `fly ips list`)* | DNS only (grey cloud) |
| CNAME | `www` | `afterwords.gr` | DNS only (grey cloud) |

**Important:** Keep proxy **off** (DNS only / grey cloud). Fly needs direct access to provision and renew Let's Encrypt certificates. Cloudflare proxy would intercept TLS and break Fly's certificate validation.

### Step 3: Check certificate status

```bash
fly certs show afterwords.gr -a afterwords-web
```

Wait until it shows `Ready`. This happens automatically once DNS propagates.

### Cutover strategy

1. Lower TTL on existing DNS records to 300s
2. Wait for the old TTL to expire (check with `dig afterwords.gr`)
3. Replace the records with the Fly IPs
4. Verify: `curl -I https://afterwords.gr`
5. Once confirmed, disable GitHub Pages in repo settings
6. Remove `.github/workflows/nextjs.yml` (the old GitHub Pages workflow)

## Deploying

### Production

Push or merge to `main`. The `deploy.yml` workflow:

1. Runs checks (type-check + build)
2. Builds the Docker image on Fly's remote builders
3. Deploys to the `afterwords-web` app

Monitor in real time:

```bash
fly logs -a afterwords-web
```

Or check the GitHub Actions tab for build logs.

### Preview deployments

Open a pull request. The `preview.yml` workflow:

1. Runs checks (type-check + build)
2. Creates a Fly app named `afterwords-preview-pr-<N>` (if it doesn't exist)
3. Builds and deploys
4. Comments on the PR with the preview URL

Preview URLs use Fly's default domain: `https://afterwords-preview-pr-<N>.fly.dev`

TLS is automatic on `.fly.dev` — no DNS or certificate setup needed.

When the PR is closed or merged, the preview app is automatically destroyed.

**Fork safety:** The workflow only runs for PRs from the same repository, not from forks.

## CI Checks

Both the preview and production workflows run these checks before deploying:

| Check | Command | What it catches |
|-------|---------|-----------------|
| Type check | `tsc --noEmit` | Type errors |
| Build | `next build` | Build failures, missing imports, SSR errors |

If either check fails, the deployment is skipped.

**Note:** Lint (`next lint`) is currently disabled due to a Next.js 16 compatibility issue and pre-existing lint errors. It can be re-enabled after fixing those errors.

## Operations

### View logs

```bash
# Production
fly logs -a afterwords-web

# Preview app
fly logs -a afterwords-preview-pr-42
```

### Check app status

```bash
fly status -a afterwords-web
```

### SSH into a running machine

```bash
fly ssh console -a afterwords-web
```

### Restart the app

```bash
fly apps restart afterwords-web
```

### Scale up (if needed)

```bash
# Keep one machine always running (eliminates cold starts)
fly scale count 1 --app afterwords-web

# Increase memory
fly scale memory 512 --app afterwords-web
```

To revert to auto-stop behavior, set `min_machines_running = 0` in `fly.toml` and redeploy.

### View allocated IPs

```bash
fly ips list -a afterwords-web
```

### Manage TLS certificates

```bash
# List certificates
fly certs list -a afterwords-web

# Check certificate status
fly certs show afterwords.gr -a afterwords-web

# Add a new domain
fly certs create subdomain.afterwords.gr -a afterwords-web

# Remove a domain
fly certs remove subdomain.afterwords.gr -a afterwords-web
```

### Manage secrets

```bash
# List secret names (values are never shown)
fly secrets list -a afterwords-web

# Set or update a secret
fly secrets set KEY=value -a afterwords-web

# Remove a secret
fly secrets unset KEY -a afterwords-web
```

Changing a secret triggers an automatic redeployment.

### Clean up stuck preview apps

If a preview app wasn't destroyed (e.g., workflow failure):

```bash
# List all apps
fly apps list

# Manually destroy
fly apps destroy afterwords-preview-pr-42 --yes
```

## Environment Variables Reference

| Variable | Used in | Purpose | Set where |
|----------|---------|---------|-----------|
| `NEXT_PUBLIC_SITE_URL` | RSS feed, meta tags | Canonical site URL | Fly secrets + GH Actions variable |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Root layout | Google Analytics tracking | Fly secrets + GH Actions secret |
| `NEXT_PUBLIC_HELPSCOUT_BEACON_ID` | Root layout | HelpScout chat widget | Fly secrets + GH Actions secret |

All `NEXT_PUBLIC_*` variables are inlined at build time by Next.js. They are passed as Docker build args in GitHub Actions. The Fly secrets serve as a fallback for any server-side runtime usage.

## Key Files

| File | Purpose |
|------|---------|
| `fly.toml` | Fly.io app configuration (region, scaling, health checks) |
| `Dockerfile` | Multi-stage Docker build for Next.js standalone |
| `.dockerignore` | Files excluded from Docker build context |
| `.env.example` | Documents required environment variables |
| `.github/workflows/deploy.yml` | Production deployment workflow (checks + deploy) |
| `.github/workflows/preview.yml` | PR preview deployment workflow (checks + deploy + destroy) |

## Costs (Fly.io)

With `auto_stop_machines = "stop"` and `min_machines_running = 0`:

- **Idle:** $0 (stopped machines are free)
- **Active (shared-cpu-1x, 256MB):** ~$1.94/month if running 24/7
- **Bandwidth:** 100GB/month free outbound, then $0.02/GB
- **Remote builder:** free tier covers small projects
- **Preview apps:** $0 when idle (auto-stopped), destroyed on PR close

For a low-traffic site, expect **$3–5/month** total.

## Troubleshooting

### CI checks fail

Check the GitHub Actions tab for the specific error:
- **Type check fails:** Fix TypeScript errors shown in the log
- **Build fails:** Check for missing imports, SSR-incompatible code, or environment variable issues

### Build fails in GitHub Actions

Common issues:
- Missing `FLY_API_TOKEN` secret → "no access token available"
- npm dependency issues (try `npm ci` locally first)
- Docker build errors (test locally with `docker build .`)

### Site returns 502

The machine might be starting up (cold start). Wait 2-3 seconds and retry. If persistent:

```bash
fly logs -a afterwords-web
fly status -a afterwords-web
```

### TLS certificate not provisioning

```bash
fly certs show afterwords.gr -a afterwords-web
```

Ensure DNS records point to Fly IPs with **proxy off** (DNS only) in Cloudflare. Certificate provisioning requires direct access — Cloudflare proxy intercepts TLS and breaks Fly's HTTP-01 validation.

### Preview app not created

Check that the PR is from the same repository (not a fork). The workflow has fork protection:
```yaml
if: github.event.pull_request.head.repo.full_name == github.repository
```

### Images not optimized

With standalone mode, Next.js uses `sharp` for image optimization. If images appear unoptimized, check that `sharp` installed correctly in the Docker build. The `node:20-alpine` base image includes the necessary native dependencies.

### Blog pages return 404

The Dockerfile copies `src/content/` into the runner stage because the blog system reads MDX files from disk at runtime. If blog pages 404, verify the content directory exists in the container:

```bash
fly ssh console -a afterwords-web
ls src/content/blog/
```
