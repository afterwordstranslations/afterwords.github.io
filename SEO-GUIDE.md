# SEO Guide for afterwords.gr

A practical guide to monitoring, maintaining, and improving your website's search engine performance.

---

## Table of Contents

1. [What's Already Set Up](#1-whats-already-set-up)
2. [Google Search Console](#2-google-search-console)
3. [Google Analytics](#3-google-analytics)
4. [Testing Social Media Previews](#4-testing-social-media-previews)
5. [Testing Rich Results (Structured Data)](#5-testing-rich-results-structured-data)
6. [Page Speed & Performance](#6-page-speed--performance)
7. [Writing Blog Posts for SEO](#7-writing-blog-posts-for-seo)
8. [Monthly SEO Checklist](#8-monthly-seo-checklist)
9. [When to Contact Your Developer](#9-when-to-contact-your-developer)
10. [Useful Free Tools at a Glance](#10-useful-free-tools-at-a-glance)

---

## 1. What's Already Set Up

Your website includes the following SEO features, all of which work automatically:

| Feature | What It Does |
|---------|-------------|
| **Page Titles & Descriptions** | Every page has a unique title and description optimized for search engines |
| **Open Graph Tags** | Controls how your pages look when shared on Facebook and LinkedIn |
| **Twitter Cards** | Controls how your pages look when shared on X (Twitter) |
| **Structured Data (JSON-LD)** | Tells Google about your business, services, and blog posts for rich search results |
| **XML Sitemap** | Automatically lists all your pages for search engines at `afterwords.gr/sitemap.xml` |
| **Robots.txt** | Tells search engines which pages to crawl |
| **RSS Feed** | Publishes blog updates at `afterwords.gr/blog/feed.xml` |
| **Canonical URLs** | Prevents duplicate content issues |
| **Breadcrumb Schema** | Enables breadcrumb navigation in Google search results |

**You don't need to configure any of these.** They update automatically when new pages or blog posts are added.

---

## 2. Google Search Console

Google Search Console (GSC) is your most important SEO tool. It shows you exactly how Google sees your website.

### Getting Started

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with the Google account that has access to the property `afterwords.gr`
3. The site is already verified

### What to Check Regularly

#### Performance Report
- **Path:** Performance > Search results
- **What it shows:** Which search queries bring people to your site, how many clicks and impressions you get, and your average position
- **Tip:** Look for queries where you rank on page 2 (positions 11-20) — these are opportunities to improve with better content

#### Index Coverage
- **Path:** Pages
- **What it shows:** Which pages Google has indexed and any errors
- **Action:** If you see "Not indexed" errors, check if those pages should be indexed. If yes, contact your developer

#### Sitemaps
- **Path:** Sitemaps
- **What it shows:** Whether Google has successfully read your sitemap
- **Your sitemap URL:** `https://afterwords.gr/sitemap.xml`
- **Action:** If not already submitted, enter the URL above and click Submit

### Requesting Indexing for New Content

When you publish a new blog post or page:

1. Go to the **URL Inspection** tool (top search bar in GSC)
2. Paste the full URL of the new page (e.g., `https://afterwords.gr/blog/your-new-post`)
3. Click **Request Indexing**
4. Google will typically index the page within 1-3 days

---

## 3. Google Analytics

Google Analytics tracks who visits your site, where they come from, and what they do.

### Getting Started

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with the Google account connected to the site
3. Select the `afterwords.gr` property

### Key Reports to Check

| Report | Path | What to Look For |
|--------|------|-----------------|
| **Traffic overview** | Reports > Life cycle > Acquisition > Overview | Total users, where they come from (Google, social, direct) |
| **Top pages** | Reports > Life cycle > Engagement > Pages and screens | Which pages get the most visits |
| **Traffic sources** | Reports > Life cycle > Acquisition > Traffic acquisition | Whether organic (Google) traffic is growing |
| **Geography** | Reports > User > Demographics > Overview | Which countries your visitors come from |

### Key Metrics to Track

- **Organic users** — visitors from search engines (should grow over time)
- **Engagement rate** — percentage of visitors who interact with your site (above 50% is good)
- **Average session duration** — how long people stay (above 1 minute is good for a service site)

---

## 4. Testing Social Media Previews

When you share a page on social media, the title, description, and image that appear are controlled by your Open Graph tags. Use these tools to test and debug them:

### Facebook / LinkedIn

1. Go to the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Paste your page URL and click **Debug**
3. You'll see exactly how the page will look when shared
4. If the preview looks wrong or outdated, click **Scrape Again** to refresh Facebook's cache

### X (Twitter)

1. Go to the [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Paste your URL and click **Preview card**
3. You should see a large image card with your page title and description

### What a Good Preview Looks Like

- A clear, relevant image (not broken or missing)
- The page title (not the URL)
- A meaningful description
- The site name "Afterwords"

---

## 5. Testing Rich Results (Structured Data)

Your site includes structured data that can make your Google search listings more attractive (with breadcrumbs, business info, article details, etc.).

### How to Test

1. Go to the [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Paste any page URL from your site
3. Click **Test URL**
4. You should see detected structured data types like:
   - **Organization** (on the homepage)
   - **LocalBusiness** (on the homepage)
   - **Service** (on service pages)
   - **BlogPosting** (on blog posts)
   - **BreadcrumbList** (on all inner pages)

### What to Look For

- All items should show a green checkmark
- If you see warnings (yellow), they're usually about optional fields and are not critical
- If you see errors (red), contact your developer

---

## 6. Page Speed & Performance

Page speed affects both user experience and SEO rankings. Google rewards fast-loading sites.

### How to Test

1. Go to [PageSpeed Insights](https://pagespeed.web.dev)
2. Enter `https://afterwords.gr` and click **Analyze**
3. You'll get scores for both Mobile and Desktop

### Understanding Your Scores

| Score | Rating | Action Needed |
|-------|--------|--------------|
| 90-100 | Good | No action needed |
| 50-89 | Needs Improvement | Review recommendations, contact developer if scores drop |
| 0-49 | Poor | Contact developer — this is hurting your SEO |

### Key Metrics

- **Largest Contentful Paint (LCP)** — how fast the main content loads. Should be under 2.5 seconds
- **Cumulative Layout Shift (CLS)** — visual stability. Should be under 0.1
- **First Input Delay (FID)** — responsiveness. Should be under 100ms

### Tips

- Test both the homepage AND a service page AND a blog post — they may have different scores
- Test on mobile — Google uses mobile-first indexing, so mobile score matters more
- Run the test 2-3 times, as scores can vary slightly between runs

---

## 7. Writing Blog Posts for SEO

Blog posts are one of the best ways to improve your search rankings over time. Here are guidelines for writing SEO-friendly content.

### Blog Post Frontmatter

Every blog post starts with metadata at the top of the file. Here's what each field does:

```
---
title: "Your Blog Post Title"
date: "2026-04-08"
excerpt: "A 1-2 sentence summary of the post. This appears in search results."
image: "/your-image.jpg"
author: "aggeliki"
---
```

### SEO Writing Checklist

#### Title
- Keep it under 60 characters (longer titles get cut off in search results)
- Include the main keyword naturally
- Make it compelling — it's the first thing people see in Google
- Examples:
  - Good: "Apostille Guide: How to Legalize Documents for Use Abroad"
  - Bad: "Blog Post About Apostilles"

#### Excerpt / Meta Description
- Keep it between 120-155 characters
- Summarize what the reader will learn
- Include the main keyword
- End with a reason to click
- This is what appears under the title in Google search results

#### Content Structure
- Use **one H1** (this is your title — it's added automatically)
- Use **H2 headings** for main sections
- Use **H3 headings** for subsections
- Keep paragraphs short (2-4 sentences)
- Use bullet points and numbered lists where appropriate
- Aim for at least 800-1,500 words for SEO-focused articles

#### Keywords
- Choose one primary keyword per post (e.g., "certified translation Greece")
- Use it in: the title, excerpt, first paragraph, and 2-3 headings
- Use related keywords naturally throughout the text
- Don't stuff keywords — write naturally for humans first

#### Images
- Use a relevant hero image for each post
- Place images in the `/public/` folder
- Reference them in frontmatter as `/your-image.jpg`
- Choose descriptive file names (e.g., `certified-translation-document.jpg` not `IMG_4523.jpg`)

#### Internal Links
- Link to your service pages where relevant (e.g., mention "certified translations" and link to `/certified-translations`)
- Link to related blog posts
- This helps both users and search engines understand your site structure

### Content Ideas That Drive Traffic

Focus on questions your clients actually ask:

- "How to get a document translated for [authority/ministry]"
- "What is a certified/sworn translation?"
- "How long does a translation take?"
- "How much does translation cost in Greece?"
- Guides for specific document types (birth certificates, diplomas, contracts)
- Industry-specific guides (pharmaceutical submissions, maritime documentation)

---

## 8. Monthly SEO Checklist

Spend 30 minutes per month on these tasks:

### Week 1: Check Search Console
- [ ] Review **Performance** report — are clicks and impressions trending up?
- [ ] Check **Pages** report for any new indexing errors
- [ ] Look at top queries — any new keywords appearing?

### Week 2: Check Analytics
- [ ] Review traffic trends — is organic traffic growing?
- [ ] Check top pages — are service pages getting traffic?
- [ ] Look at geographic data — are you reaching the right markets?

### Week 3: Content
- [ ] Publish or plan a new blog post (aim for 1-2 per month)
- [ ] Request indexing for any new pages in Search Console
- [ ] Share new posts on social media

### Week 4: Technical
- [ ] Run PageSpeed Insights — have scores changed?
- [ ] Test a social media preview — does it look correct?
- [ ] Check Rich Results Test for any new errors

---

## 9. When to Contact Your Developer

Reach out to your developer when:

- **Google Search Console shows indexing errors** that you can't resolve
- **PageSpeed scores drop below 50** on mobile
- **Rich Results Test shows red errors** on any page
- **You want to add new pages or services** to the website
- **You need URL redirects** (e.g., if you rename a service page)
- **You want to add new structured data types** (e.g., FAQ schema, review schema)
- **You notice broken social media previews** that persist after clearing the cache
- **You want to implement new features** like multi-language support

---

## 10. Useful Free Tools at a Glance

| Tool | URL | Purpose |
|------|-----|---------|
| Google Search Console | [search.google.com/search-console](https://search.google.com/search-console) | Monitor search performance, indexing, and errors |
| Google Analytics | [analytics.google.com](https://analytics.google.com) | Track website traffic and user behavior |
| Google PageSpeed Insights | [pagespeed.web.dev](https://pagespeed.web.dev) | Test page loading speed and performance |
| Google Rich Results Test | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) | Validate structured data markup |
| Facebook Sharing Debugger | [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/) | Test and refresh Facebook/LinkedIn previews |
| Twitter Card Validator | [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator) | Test Twitter/X card previews |
| Google Trends | [trends.google.com](https://trends.google.com) | Research keyword popularity and trends |
| AnswerThePublic | [answerthepublic.com](https://answerthepublic.com) | Discover questions people ask about your topics |
| Ahrefs Free Webmaster Tools | [ahrefs.com/webmaster-tools](https://ahrefs.com/webmaster-tools) | Site audit and backlink monitoring (free tier) |

---

*Last updated: April 2026*
