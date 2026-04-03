# Deployment Guide — afterwords.gr on Fly.io

This guide covers the full setup, deployment, DNS configuration, and ongoing operations for the Afterwords website hosted on Fly.io.

## Architecture Overview

```
GitHub repo (main branch)
  │
  ├─ push to main ──→ GitHub Actions ──→ fly deploy ──→ afterwords.gr (production)
  │
  ├─ PR opened ─────→ GitHub Actions ──→ fly deploy ──→ pr-<N>.preview.afterwords.gr
  │
  └─ PR closed ─────→ GitHub Actions ──→ fly destroy ──→ preview app removed
```

- **Runtime:** Next.js standalone (SSR) in a Docker container
- **Region:** Amsterdam (`ams`) — optimized for Greek/EU audience
- **Scaling:** Auto-stop when idle, auto-start on request. Stopped machines cost nothing.

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

## DNS Configuration (Papaki.gr)

### Step 1: Register custom domains with Fly

```bash
fly certs create afterwords.gr -a afterwords-web
fly certs create www.afterwords.gr -a afterwords-web
```

Fly will provision Let's Encrypt TLS certificates automatically once DNS is pointed.

### Step 2: Check certificate status

```bash
fly certs show afterwords.gr -a afterwords-web
```

Wait until it shows `Ready`. This happens automatically once DNS propagates.

### Step 3: Configure DNS records at Papaki.gr

**Production (afterwords.gr):**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | `@` | *(Fly IPv4 from step 4 above)* | 300 |
| AAAA | `@` | *(Fly IPv6 from step 4 above)* | 300 |
| CNAME | `www` | `afterwords.gr` | 300 |

**Preview deployments (*.preview.afterwords.gr):**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | `*.preview` | *(same Fly IPv4)* | 300 |
| AAAA | `*.preview` | *(same Fly IPv6)* | 300 |

The wildcard record routes all `pr-<N>.preview.afterwords.gr` traffic to Fly, which matches by hostname (SNI) to the correct preview app.

### Cutover strategy

1. Lower TTL on existing DNS records to 300s
2. Wait for the old TTL to expire (check with `dig afterwords.gr`)
3. Replace the records with the Fly IPs
4. Verify: `curl -I https://afterwords.gr`
5. Once confirmed, disable GitHub Pages in repo settings

## Deploying

### Production

Push or merge to `main`. That's it. The `deploy.yml` workflow:

1. Checks out the code
2. Builds the Docker image on Fly's remote builders
3. Deploys to the `afterwords-web` app

Monitor in real time:

```bash
fly logs -a afterwords-web
```

Or check the GitHub Actions tab for build logs.

### Preview deployments

Open a pull request. The `preview.yml` workflow:

1. Creates a Fly app named `afterwords-preview-pr-<N>` (if it doesn't exist)
2. Provisions a TLS cert for `pr-<N>.preview.afterwords.gr`
3. Builds and deploys
4. Comments on the PR with the preview URL

When the PR is closed or merged, the preview app is automatically destroyed.

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
| `.github/workflows/deploy.yml` | Production deployment workflow |
| `.github/workflows/preview.yml` | PR preview deployment workflow |

## Costs (Fly.io)

With `auto_stop_machines = "stop"` and `min_machines_running = 0`:

- **Idle:** $0 (stopped machines are free)
- **Active (shared-cpu-1x, 256MB):** ~$1.94/month if running 24/7
- **Bandwidth:** 100GB/month free outbound, then $0.02/GB
- **Remote builder:** free tier covers small projects

For a low-traffic site, expect **$3–5/month** total.

## Troubleshooting

### Build fails in GitHub Actions

Check the Actions tab for logs. Common issues:
- Missing `FLY_API_TOKEN` secret
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

Ensure DNS records point to Fly IPs. Certificate provisioning requires DNS to be correctly configured. It uses HTTP-01 validation, so the domain must resolve to Fly.

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
