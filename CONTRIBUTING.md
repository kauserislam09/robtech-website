# Contributing to RobTech Limited Web Platform

Thank you for contributing to **RobTech Limited**. We welcome high-quality code contributions that align with our principles: **Simplicity, Usefulness, Reliability, Accessibility, and Privacy-by-Default**.

---

## 1. Project Structure Overview

```text
robtech-website/
├── .github/workflows/ci.yml       # GitHub Actions CI Workflow
├── docs/                          # Guides & Maintainer Manuals
│   └── maintainers/
├── public/
│   ├── update/                    # Static Update JSON Endpoints
│   ├── _headers                   # Cloudflare CSP & Security Headers
│   ├── robots.txt                 # Search Crawler Rules
│   └── sitemap.xml                # Route Sitemap
├── scripts/
│   └── validate-releases.js       # Release Metadata Validator
├── src/
│   ├── components/                # UI, App, Docs, Navigation
│   ├── data/                      # Products, Releases, Docs Data
│   ├── locales/                   # English & Bangla Dictionaries
│   ├── pages/                     # Route Views
│   ├── styles/                    # Design System CSS Tokens & Reset
│   ├── types/                     # TypeScript Model Interfaces
│   └── utils/                     # Security & Validation Helpers
└── package.json
```

---

## 2. Local Setup & Commands

1. **Clone & Install:**
   ```bash
   git clone https://github.com/robtech-limited/robtech-website.git
   cd robtech-website
   npm install
   ```

2. **Local Development Server:**
   ```bash
   npm run dev
   ```

3. **Validation & Quality Checks:**
   ```bash
   # Run code linter
   npm run lint

   # Run release metadata validator
   npm run validate:releases

   # Run production build & type check
   npm run build
   ```

---

## 3. Pull Request Guidelines

Before submitting a Pull Request (PR), ensure:
- [ ] Code passes `npm run lint` and `npm run build` with 0 errors.
- [ ] Any modified release metadata passes `npm run validate:releases`.
- [ ] UI changes maintain WCAG 2.2 AA accessibility (high contrast, 44px+ touch targets, visible focus indicators).
- [ ] New user-facing text includes both **English** (`en.json`) and **Bangla** (`bn.json`) translations.
- [ ] No tracking scripts, analytics, advertising pixels, or secrets are introduced.
