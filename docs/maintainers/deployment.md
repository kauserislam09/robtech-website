# RobTech Limited — Production Deployment Guide

This document explains how to deploy the RobTech web platform to **Cloudflare Pages** via GitHub integration.

---

## Target Deployment Architecture

```text
GitHub Repository (main branch)
            ↓
  GitHub Actions CI (Build & Validate)
            ↓
   Cloudflare Pages (Static Hosting)
            ↓
  https://robtech.com (Production Website)
```

---

## 1. Cloudflare Pages Initial Setup

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select the official RobTech GitHub repository.
4. Configure Build Settings:
   - **Framework preset:** `Vite` (or None / Custom)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave default)
   - **Node.js Version:** `20` (add environment variable `NODE_VERSION = 20`)

---

## 2. Environment Variables

Configure the following environment variables in Cloudflare Pages Dashboard (**Settings** > **Environment variables**):

| Variable Name | Value Example | Usage |
|---|---|---|
| `VITE_SITE_URL` | `https://robtech.com` | Canonical URL and SEO metadata generation |
| `NODE_VERSION` | `20` | Pins Cloudflare build environment to Node 20 LTS |

> [!IMPORTANT]
> Never put API keys or secrets in environment variables. All values must be public safe placeholders or production domain URLs.

---

## 3. Branching & Deployment Strategy

- **Production Branch:** `main` (Pushes to `main` trigger live production deployments).
- **Preview Deployments:** Pull requests to `main` trigger automatic Cloudflare Pages preview deployments with unique URLs for review before merging.

---

## 4. Rollback Procedure

If a deployed build exhibits unexpected issues:

1. Open Cloudflare Dashboard > **Workers & Pages** > **robtech-website** > **Deployments**.
2. Locate the last known good deployment.
3. Click the three dots `...` next to the build and select **Rollback to this deployment**.
4. In GitHub, revert the breaking commit on `main` to ensure future pushes remain stable.
