# RobTech Limited — Official Web Platform

Brand tagline: **Technology Made Simple.**

This repository contains the official public web platform, product system, documentation center, and static update distribution server for **RobTech Limited**.

---

## Technical Architecture & Core Principles

```text
                 GitHub Repository
                        │
                        │ Push
                        ↓
                Cloudflare Pages
                        │
                        ↓
                 Production Build
                        │
                        ↓
                RobTech Website
                        │
             ┌──────────┼──────────┐
             ↓          ↓          ↓
          Apps       Docs       Updates
                                  │
                                  ↓
                           Release Metadata
                                  │
                                  ↓
                           GitHub Releases
                                  │
                                  ↓
                                  APK
```

1. **Tech Stack:** React 19, TypeScript (Strict Mode with `verbatimModuleSyntax`), Vite, React Router 7, Lucide Icons.
2. **Design System:** Custom CSS tokens (`src/styles/tokens.css`), WCAG 2.2 AA contrast compliance, responsive spacing scale, visible 3px focus indicators, minimum 44px touch targets for senior-friendly UX.
3. **Bilingual Localization:** 100% bilingual support for English and Bangla (`en.json`, `bn.json`) with generous 1.75 line-height font fallbacks (`Hind Siliguri`, `Noto Sans Bengali`, `SolaimanLipi`).
4. **Static & Free Delivery:** Static JSON endpoints (`public/update/<app-id>.json`) for Android app update checks. Free to operate initially on Cloudflare Pages with zero backend or API rate-limit dependency.
5. **Security & Privacy:** Restrictive Content Security Policy (CSP), HTTPS download URL verification, zero tracking pixels, zero analytics scripts, zero non-essential cookies.
6. **Performance & SEO:** Route-level code splitting (`React.lazy`), dynamic Open Graph metadata, canonical URLs, hreflang annotations, JSON-LD Schema.org structured data, XML sitemap, and robots.txt.
7. **CI/CD Pipeline:** Automated GitHub Actions workflow (`.github/workflows/ci.yml`) running code linting, static release metadata validation, and production TypeScript builds on every PR and push.

---

## Architectural Decision: Service Workers & PWA

> **Note on Service Worker & PWA Caching:**
> RobTech Limited intentionally does **NOT** register an offline PWA service worker that caches `/update/*.json` endpoints. Caching static release manifests in a browser service worker cache risks serving stale release metadata to users and Android update checkers. Update manifests use a 5-minute CDN cache header (`public, max-age=300, must-revalidate`) for rapid update propagation.

---

## Development & Maintenance Commands

```bash
# Start local development server
npm run dev

# Run static release metadata schema & security validator
npm run validate:releases

# Run code linter
npm run lint

# Production build & type check
npm run build
```

---

## Deployment & Documentation

- [Cloudflare Pages Deployment Guide](docs/maintainers/deployment.md)
- [Android Release & Metadata Workflow](docs/maintainers/releasing.md)
- [Android App Update API Contract](docs/ANDROID_UPDATE_CONTRACT.md)
- [Contributing Guidelines](CONTRIBUTING.md)
