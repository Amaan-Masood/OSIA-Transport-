# TRD — OSIA Transport LLC SPC website
**Date:** 2026-11-11 | **Phase:** 2 DESIGN → 3 DECIDE | **Inputs:** PROJECT_BRIEF, TECH_STACK, ADR_01–05, DESIGN_TOKENS.json, UI_SPEC.md

## 1. Architecture
```
Visitor (mobile/desktop)
   │  HTTPS
   ▼
Hostinger web hosting (static files in public_html, .htaccess headers, HTTPS redirect, CDN/cache)
   │  serves pre-rendered HTML/CSS/JS/fonts/images (out/)
   ├── tel:+971504127930            → phone dialler
   ├── https://wa.me/971504127930…  → WhatsApp (message built in the browser)
   └── GA4 (only after consent)     → call/WhatsApp/form events (no PII)

Build/deploy:  GitHub repo → GitHub Actions (lint, types, tests, scans, build, Lighthouse CI)
               → artifact out/ (kept for rollback) → SFTP/FTPS (or hPanel Git) → staging → production
Off-site SEO:  Google Business Profile, Search Console, directories (owner tasks)
```
Trust boundaries: browser ⇄ static host (read-only). There is no server-side code, no database, no secrets in the product. Secrets exist only in CI (deploy credentials) and the owner's accounts (hosting, domain, Google, GitHub).

## 2. Repository structure (Phase 4 creates exactly this)
```
osia-transport/
├─ AGENTS.md                       # rules for the coding agent (Antigravity)
├─ .ai/brain/                      # all artifacts in this folder
├─ .github/workflows/ci.yml  deploy.yml  dependabot.yml
├─ deploy/htaccess.template
├─ scripts/                        # build-htaccess.mjs, optimize-images.mjs, check-claims.mjs, verify-csp.mjs
├─ public/                         # robots.txt (generated), llms.txt, favicon.svg, og-default.jpg, fonts/ (woff2)
├─ src/
│  ├─ app/                         # App Router routes (see sitemap); layout.tsx; not-found.tsx; sitemap.ts; robots.ts
│  ├─ components/                  # ui/ (Button, Card, Accordion, Badge…), sections/, forms/, seo/JsonLd.tsx
│  ├─ content/site.ts              # SINGLE SOURCE OF TRUTH: business, services, areas, faqs, claims (confirmed flags)
│  ├─ lib/                         # whatsapp.ts, validation.ts (Zod), schema.ts, seo.ts, analytics.ts, format.ts
│  └─ styles/                      # tokens.css generated from DESIGN_TOKENS.json (@theme), globals.css
├─ tests/                          # unit/ component/ e2e/ (Playwright + axe)
├─ next.config.ts  tailwind (v4 CSS-first)  tsconfig.json (strict)  eslint.config.*  vitest.config.ts  playwright.config.ts  lighthouserc.json
└─ package.json  package-lock.json
```
Path alias `@/` → `src/`. No default exports except where Next requires them.

## 3. Rendering and SEO implementation
- All routes statically generated. `export const dynamic = 'force-static'` on `sitemap.ts`/`robots.ts`. `generateStaticParams` for services and areas.
- Per-page `metadata` via a single helper `buildMetadata({title, description, path, image})` (canonical = `SITE_URL + path`, OG/Twitter, `robots: index,follow` in production; staging adds noindex).
- JSON-LD rendered by `<JsonLd data={…} />` from `lib/schema.ts` using values from `site.ts`: `LocalBusiness` (service-area; `areaServed`; `openingHoursSpecification` all days 00:00–23:59; `telephone`; `email`; **no `streetAddress` unless supplied; no `aggregateRating`/`review` unless real**), `Service`, `FAQPage`, `BreadcrumbList`, `WebSite`.
- One H1 per page; heading order never skipped; descriptive link text; images: explicit `width/height`, `alt` required (lint rule), hero image preloaded, others lazy.
- `SITE_URL`, `GA_ID`, `DEPLOY_ENV` come from build-time env (no secrets). Defaults must not leak a fake domain into production: build fails if `DEPLOY_ENV=production` and `SITE_URL` is unset.

## 4. Component and behaviour rules
- Navbar: sticky, `aria-current`, hamburger with focus trap, skip-to-content first.
- Accordion: native `<details>`/`<summary>` or ARIA-correct button pattern; one open at a time.
- Counters: IntersectionObserver; final value rendered in HTML; `prefers-reduced-motion` → no animation.
- Mobile bottom bar (Call | WhatsApp), floating WhatsApp button on ≥768 px, back-to-top.
- Map: **click-to-load facade** (no iframe until clicked); only if owner supplies a Google Maps location; otherwise omit.
- Quote form: see §6 and ADR_03.

## 5. Security controls (OWASP Top 10:2025 mapping)
| Risk | Control in this project |
|---|---|
| A01 Broken access control | N/A (no auth/resources); `Options -Indexes`, dotfiles blocked |
| A02 Misconfiguration | `.htaccess` headers (CSP, HSTS, nosniff, Referrer-Policy, Permissions-Policy, frame-ancestors, COOP); CI test verifies them on staging; no source maps in production |
| A03 Supply chain | lockfile, `npm ci`, Dependabot, osv/npm audit gate, CodeQL, Gitleaks, pinned GitHub Actions by SHA, minimal dependencies |
| A04 Crypto | HTTPS only, HSTS; no secrets or crypto in client |
| A05 Injection/XSS | no `dangerouslySetInnerHTML`; form text only goes into a URL via `encodeURIComponent`; Zod limits; CSP hashes |
| A06 Insecure design | STRIDE done (THREAT_MODEL); claims gate prevents false statements |
| A07 Auth failures | N/A site; **2FA on hosting, domain, GitHub, Google accounts** (operational control) |
| A08 Integrity | deploy only from CI artifact; verify deployed build hash; synthetic check that the phone number in HTML equals `site.ts` |
| A09 Logging/alerting | uptime monitor + content-integrity check (RUNBOOK); GA4 events (no PII) |
| A10 Exceptional conditions | `not-found.tsx`, error boundary on form, user-friendly fallback links |

## 6. Quote form → WhatsApp (implementation contract)
- `lib/validation.ts`: Zod schema per service (discriminated union by `service`). Common: `name` 2–80 chars, `phone` normalised (accept `05x…`, `+971…`, other international), `location` ≤ 120, `details` ≤ 600. Strip `\u0000–\u001F`, trim, collapse whitespace.
- `lib/whatsapp.ts`: `buildMessage(payload)` and `buildWhatsAppUrl(payload)`; the **only** place that knows the WhatsApp number (from `site.ts`). Unit-tested with Arabic/emoji/long input, newline handling, `&`, `#`, `%`.
- UI: errors inline + summary announced (`aria-live`); on valid submit call `window.open(url,'_blank','noopener,noreferrer')` synchronously, then toast, then reset; show fallback block (Open WhatsApp link, Call, Email).
- Analytics: `submit_quote_form {service}` only.

## 7. Performance
Budgets from frontend-ui-upgrade §7 (see PROJECT_BRIEF §1). Fonts: preload only Barlow Condensed 700 and Barlow 400; other weights `font-display: swap`. Image script outputs AVIF + WebP + fallback JPEG with `srcset`. Critical CSS small (Tailwind purge). No client JS on pages without interactivity beyond navbar/accordion/form/counters.

## 8. Environments and deployment
| Env | URL | Rules |
|---|---|---|
| local | localhost | `next dev` |
| staging | `staging.<domain>` (Hostinger subdomain) | `noindex` header + robots disallow + HTTP basic auth |
| production | `<domain>` | indexable; deploy requires green CI + manual approval |
Deploy: `deploy.yml` builds, verifies, uploads `out/` to the **restricted FTP/SFTP account whose root is the site's `public_html`**; credentials only in GitHub Environments secrets. Rollback: redeploy previous artifact (kept 10 builds) or restore from Hostinger backup. Details: RUNBOOK. Verify Hostinger capabilities in the Phase 4 spike; do not assume.

## 9. 🤖 AI Coding Agent Instructions
<!-- BINDING for Antigravity / Cursor / Claude Code. Non-negotiable. Implement exactly. -->

### IDOR-Sensitive Endpoints (T1–T5)
| Endpoint | Owner Field | Check |
|---|---|---|
| none — static site, no authenticated resources or object IDs | n/a | IDOR suite **N/A**; record this in TEST_PLAN and the Gate 6 report |

### Security Controls (Mandatory)
- No secrets in the repo or client bundle; only `NEXT_PUBLIC_*`-style public config (`SITE_URL`, `GA_ID`), never keys.
- Validation: Zod on the form; never render user text as HTML.
- No inline event handlers; no `eval`; no `dangerouslySetInnerHTML`.
- External scripts: GA4 only, loaded after consent; no other third-party scripts/fonts/CDNs.
- Headers/CSP: generate from `deploy/htaccess.template` via `scripts/build-htaccess.mjs`; CI fails if any inline script hash is missing from CSP.
- Dependencies: justify every new package in the PR; prefer none.

### Business Rules (never bypass in code)
1. **Phone/WhatsApp/email/legal name exist only in `src/content/site.ts`** → enforce in `lib/whatsapp.ts` and `JsonLd`; a test fails if another literal phone number appears in `src/`.
2. **Unconfirmed claims never render in production** (tanker capacities, areas, licences, testimonials, "same-day") → enforce in `content/site.ts` (`confirmed` flag) + `scripts/check-claims.mjs` in the build.
3. **No invented facts, reviews, ratings, clients, addresses, licence numbers.** Use `TODO-OWNER` markers that fail the production build.
4. WhatsApp URL is built only by `buildWhatsAppUrl`.
5. Water services use water tokens; lifting/haulage use orange tokens; never white text on orange or green (ADR_05).
6. Production robots/sitemap/canonical must use the real domain; staging must be `noindex`.

### Response Format
Not applicable (no API).

### Tests Required
- Unit: `whatsapp.ts`, `validation.ts`, `schema.ts`, `seo.ts`, claims gate, NAP uniqueness.
- Component: navbar, accordion, form (errors, fallbacks, reduced motion).
- E2E (Playwright on built `out/`): every route 200, no console errors, correct `tel:`/`wa.me` hrefs, form opens expected URL, axe 0 violations at 360/768/1024/1440, keyboard flow, no horizontal scroll.
- SEO tests: unique title/description/one H1/canonical per page; sitemap lists all routes; JSON-LD parses; no `noindex` in production build.
- Lighthouse CI budgets (PROJECT_BRIEF §1).
- Coverage ≥ 80 % on `src/lib` and interactive components.

## 10. 🎨 UI Design System (BINDING for Phase 5 BUILD)
### Component Library
None; custom components on Tailwind v4 (marketing/brand-critical row of the selection table).
### Palette preset
Custom client brand (navy/orange/blue), contrast-verified, see `contrast-report.txt` and ADR_05.
### Tokens
`.ai/brain/DESIGN_TOKENS.json` → generate `src/styles/tokens.css` (`@theme`). Lint bans raw hex and off-scale spacing/font sizes outside the token file.
### UI Spec
`.ai/brain/UI_SPEC.md`
### Component Rules
- Every component takes colour/type/spacing/radius/motion from tokens only.
- UI gates (frontend-ui-upgrade §10) are part of Definition of Done.
- Brand constraints: client navy/orange/blue (not NextaSol navy/cyan).
- No unmodified library defaults; no lorem ipsum; no stock-photo filler.

## 11. Gate 2 (DESIGN) and Gate 3 (DECIDE) reports
Gate 2: architecture ✅ | threat model ✅ (THREAT_MODEL) | tokens ✅ | UI_SPEC ✅ | AI coding instructions ✅ | stack proposal ✅.
Gate 3: stack locked ✅ (TECH_STACK Lock Record) | ADR_01–05 accepted ✅.
**Both PASSED under delegation.** Next: Phase 4 SCAFFOLD (spikes first). Security Officer sign-off: pending CSP spike result (ADR_04).
