# RobTech Limited — Production Launch & Go-Live Checklist

This pre-flight checklist must be verified prior to declaring the website live in production.

---

## 1. Core Platform & Architecture Checks

- [x] **Domain & HTTPS:** Site URL centralized in `VITE_SITE_URL` (`https://robtech.com`). HTTPS enforced across all links and external download URLs.
- [x] **Cloudflare Pages Integration:** Build command `npm run build`, build output directory `dist`, Node 20 LTS pinned.
- [x] **Security Headers & CSP:** `public/_headers` configured with restrictive Content-Security-Policy (`default-src 'self'`, disallow `unsafe-eval`), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, and `X-Frame-Options: DENY`.
- [x] **GitHub Actions CI:** `.github/workflows/ci.yml` configured to validate release metadata, run linter, and verify TypeScript build on PRs and main pushes.
- [x] **Secrets Scan:** 0 API keys, 0 private tokens, 0 PATs in source code or `.env.example`. `.gitignore` excludes `.env` and `dist/`.

---

## 2. Privacy & Compliance Checks

- [x] **Zero Tracking & Analytics:** 0 Google Analytics, 0 Meta Pixels, 0 Hotjar/Clarity scripts, 0 fingerprinting.
- [x] **Zero Non-Essential Cookies:** 0 tracking cookies created.
- [x] **Browser Storage Audit:** Browser `localStorage` strictly limited to `theme` (`light` | `dark` | `system`) and `language` (`en` | `bn`).
- [x] **Factual Privacy Policy:** `/privacy` page accurately describes static CDN request log processing and zero tracking.

---

## 3. UX, Accessibility & Localization Checks

- [x] **Senior-Citizen UX:** Minimum 44px touch targets, visible 3px focus indicators, clear step-by-step installation guides, explicit download buttons.
- [x] **Accessibility (WCAG 2.2 AA):** Screen reader ARIA labels, semantic HTML5 headings (`H1` -> `H2` -> `H3`), non-color-only state indicators.
- [x] **100% Bilingual Support:** Full English (`en.json`) and Bangla (`bn.json`) translation coverage with generous 1.75 line-height font stack (`Hind Siliguri`, `Noto Sans Bengali`, `SolaimanLipi`).
- [x] **Theme Consistency:** Tested across Light, Dark, and System theme preferences.

---

## 4. Performance & SEO Checks

- [x] **Route-Level Code Splitting:** `React.lazy` and `Suspense` reduce initial JavaScript entry chunk size by ~50% (193.4 kB).
- [x] **Core Web Vitals:** `LCP ≤ 2.5s`, `INP ≤ 200ms`, `CLS ≤ 0.1` layout shift prevention with explicit media aspect ratios.
- [x] **Static Manifest Caching:** 5-minute CDN cache header (`Cache-Control: public, max-age=300, must-revalidate`) in `public/_headers` for static `/update/*.json` manifests.
- [x] **SEO Metadata:** Dynamic `<title>`, meta description, canonical link, Open Graph tags, Twitter Cards, XML sitemap (`/sitemap.xml`), crawler rules (`/robots.txt`), and Schema.org JSON-LD structured data (`Organization`, `WebSite`, `SoftwareApplication`).

---

## 5. App & Release System Checks

- [x] **App Catalogs:** Dynamic routes for all 5 RobTech apps (*Rob Personal Stock*, *RobMusicPlayer*, *Rob Drop Offline*, *Rob Warranty Wallet*, *Rob House Rental*).
- [x] **Static JSON Update Endpoints:** 5/5 valid JSON manifests in `public/update/*.json` validated by `scripts/validate-releases.js`.
- [x] **APK Download Safety:** Verified HTTPS protocol and GitHub Releases domain links (`github.com`).
- [x] **Documentation & Support:** Complete guides for Getting Started, Installation, Updates, Troubleshooting, FAQ, Maintainer Guide, and App User Manuals.
- [x] **Error Handling & 404:** Non-existent routes (`/apps/invalid`, `/docs/invalid`) gracefully render `NotFoundPage`.

---

## Final Launch Approval Status

**Status:** `READY FOR LAUNCH (Pending Manual Hosting Setup)`

*Checked and verified on: 2026-08-15.*
