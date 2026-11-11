# Tech Stack: OSIA Transport LLC SPC website (2026-11-11)
Profile: **P1** (small business site, no sensitive data) | Mode: **A** greenfield | Scale tier (v2.2 §4.9): **1 (starter)**

## Parameters (filled / ASSUMED)
| Parameter | Value |
|---|---|
| project_type | marketing-site (lead generation) |
| users_and_scale | low-to-moderate traffic; local Abu Dhabi/UAE search; spikes only from Ads |
| latency_requirement | LCP < 2.5 s on mid-range Android, slow 4G |
| team_size / timeline | 1 developer + AI agent; short MVP |
| team_skills | TypeScript/React (NextaSol standard) |
| compliance | UAE PDPL (privacy/cookies); no PCI, no HIPAA |
| data_sensitivity | none stored (name/phone only pass to WhatsApp client-side) |
| tenancy | single-tenant |
| seo_required | **yes** |
| offline_required | no |
| devices_and_network | mid-range Android, variable data |
| languages | English now; Arabic RTL Phase 2 (ASSUMED) |
| ai_features | none |
| integrations | WhatsApp deep link, GA4 (consent-gated), Google Business Profile (off-site) |
| deployment_constraints | **Hostinger web hosting (shared/static), no WordPress (client constraint)**; plan type to verify |
| client_editing | ASSUMED **no** — content changes through `src/content/site.ts` by NextaSol; revisit if owner wants self-edit |
| existing_code_or_infra | none |

## Stack Decision Matrix
| Layer | Choice | Rule source | Alternative | Reasoning | Status |
|---|---|---|---|---|---|
| Frontend framework | **Next.js (App Router) + TypeScript strict, static export** (`output: 'export'`, `trailingSlash: true`) | v2.2 §4.4 Rule 1 (seo_required / marketing-site) | **Astro** (Rule 3 alternative) | Pre-rendered HTML = best SEO; deploys as plain files to Hostinger `public_html`; NextaSol standard | Rule |
| Backend | **None** (static) | — | PHP mail endpoint (Phase 2, optional) | No accounts, DB or secrets needed; smaller attack surface | Rule (not needed) |
| Mobile/Desktop | n/a | — | — | Web only | — |
| Database | None | v2.2 §4.5 | — | No data stored | — |
| Cache/Queue | HTTP cache headers + Hostinger CDN/LiteSpeed cache (verify) | v2.2 §1364 | Cloudflare in front | Static assets with hashed filenames, 1-year immutable | Rule |
| Auth | None | v2.2 §4.6 | — | No users | — |
| UI library | **None (custom components)** | frontend-ui-upgrade §2 (marketing/brand-critical) | shadcn/ui | Libraries cause templated marketing pages | Rule |
| Styling | **Tailwind CSS v4 with `@theme` tokens from DESIGN_TOKENS.json** | frontend-ui-upgrade §2 | CSS modules | Token discipline, small CSS output | Rule |
| Icons | Lucide (tree-shaken) + inline WhatsApp SVG | frontend-ui-upgrade §2 | Font Awesome | Lighter, no 3rd-party font/CSS | Tie-break |
| Fonts | Barlow Condensed + Barlow, self-hosted woff2, subset | frontend-ui-upgrade §4 | Google Fonts link | Performance + privacy | Rule |
| Forms/validation | React Hook Form optional + **Zod** (shared schema) | frontend-ui-upgrade §2 | native only | Typed, testable | Rule |
| Animation | CSS transitions + IntersectionObserver (no motion library) | frontend-ui-upgrade §4 | Framer Motion | Zero extra JS | Rule |
| AI feature stack / memory | none | ai-agent-architecture | — | Not in scope | — |
| Voice/telephony | none (`tel:` + `wa.me`) | — | — | — | — |
| Cloud/Infra | **Hostinger web hosting (static files)** | v2.2 §4.7 Rule 4 (budget) + client choice | Cloudflare Pages / Vercel | Client constraint; cheap; SEO unaffected | Assumed (verify plan) |
| CI/CD | **GitHub Actions** → build → deploy `out/` to Hostinger via SFTP/FTPS (or hPanel Git, verify) | v2.2 CI/CD default | manual upload | Repeatable, tested, rollback artifact | Rule |
| Tests | Vitest + Testing Library; Playwright + axe; Lighthouse CI | frontend-ui-upgrade §10 | — | Gates for a11y/perf | Rule |
| Security scans | CodeQL, osv-scanner/`npm audit`, Gitleaks, Dependabot | A-SDLC DevSecOps pipeline | — | Supply-chain (OWASP 2025 A03) | Rule |
| Analytics | GA4 after consent; events for call/WhatsApp/form | — | Cloudflare Web Analytics (no events) | Lead attribution | Assumed |
| IaC | none (P1) | orchestrator §4 | Terraform | Not needed for static hosting | Rule |

**Pinned versions:** pinned at Phase 4 SCAFFOLD to the **current stable major** of Node (Active LTS), Next.js, React, Tailwind, TypeScript, verified with `npm view <pkg> version` the same day, then locked by `package-lock.json` and recorded here. (Not guessed in this document.)

## Deviations (each has an ADR)
- None from the deterministic rules. Design-token extension (display sizes 60/72) and palette contrast overrides → ADR_05. Multi-page instead of the single-page brief → ADR_02.

## Rejected
- **WordPress**: excluded by the client; also not needed (`client_editing` = no).
- **Single `index.html` with embedded CSS/JS** (earlier brief): fine for a prototype (P0) but weak for SEO (one URL), no tests, no CSP hardening, hard to maintain. Replaced by a real project (ADR_01/02).

## Phase 4 SCAFFOLD spikes (must pass before Phase 5)
1. **CSP spike:** generate script hashes for Next's inline hydration scripts at build and emit them into `.htaccess`. If this proves brittle → trigger ADR_04 fallback (switch to Astro, which emits no inline scripts).
2. **Hostinger spike:** confirm on the real plan: `.htaccess` headers work, HTTPS redirect, deploy method (SFTP/Git), `Options -Indexes`, brotli/gzip, 404 handling with `trailingSlash`.
3. **Image pipeline spike:** build-time AVIF/WebP + `srcset` script with `sharp` (Next image optimisation is off in static export).

## Stack Lock Record
Locked at: Gate 3 (2026-11-11) | Approved by: **AI CTO under human delegation ("decide it / set it")**
Re-evaluation: only via A-SDLC v2.2 §4.8 (problem statement → AI CTO approval → impact analysis → human approval for major change).
