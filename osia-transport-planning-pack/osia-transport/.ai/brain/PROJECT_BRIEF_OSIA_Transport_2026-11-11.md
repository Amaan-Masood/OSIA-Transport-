# PROJECT BRIEF — OSIA Transport LLC SPC Website
**Version:** 2.0 (supersedes the earlier single-page brief) | **Date:** 2026-11-11 | **Phase:** 1 DISCOVER (Gate 1 report at the end)
**Profile:** P1 (small business MVP) | **Mode:** A (greenfield) | **Owner/Decision-maker:** Akasha Azhar (NextaSol) for client OSIA Transport
**Delegation:** Human said "decide it / set it" → AI CTO decided autonomously. Every decision is recorded in an ADR. Anything not supplied by the client is tagged `ASSUMED` or `OWNER-CONFIRM`.

> This brief doubles as the PRD for this project (brochure/lead-gen site: no accounts, no payments, no database).

---

## 1. Goal and success metrics
**Goal:** turn Abu Dhabi searches and direct visits into **phone calls and WhatsApp enquiries** for water supply, wastewater, crane and trailer services. Conversion first, SEO second, brand third.

**Primary conversion events (tracked from day 1, consent-gated):** `click_call`, `click_whatsapp`, `submit_quote_form` (with `service` parameter, never name/phone).
**Targets:** no lead-volume target is invented. Baseline is measured for 30 days after launch, then targets are set (see RISK R13 and RUNBOOK §7).
**Technical targets (binding):** Lighthouse mobile Performance ≥ 90, Accessibility ≥ 95, SEO = 100, Best Practices ≥ 95; LCP < 2.5 s, CLS < 0.1, INP < 200 ms; initial JS ≤ 170 KB gzip (target ≤ 110 KB).

## 2. Business facts (source: client's `About.txt`)
| Field | Value | Source |
|---|---|---|
| Legal name | OSIA Transport LLC SPC | About.txt |
| Base | Abu Dhabi, UAE (no street address supplied) | About.txt |
| Phone / WhatsApp | +971 50 412 7930 (same number) | About.txt |
| Email | osiatransportllc@gmail.com | About.txt |
| Hours | 24/7 customer support | About.txt |
| Tagline | Reliable Service. Safe Operations. Trusted Partnership. | About.txt |
| Mission / Vision / Values | as written in About.txt (use verbatim) | About.txt |
| Sectors | construction, infrastructure, oil & gas, industrial, commercial, government | About.txt |

## 3. Services (exactly what About.txt lists)
1. **Sweet water supply** (drinking/potable) — tanker service for construction sites, labour camps, industrial and commercial projects
2. **Non-drinking water supply**
3. **Salt water supply**
4. **Wastewater collection & drainage** — vacuum tanker, septic tank cleaning, safe transport and disposal, drainage support
5. **Mobile crane rental** — 25 T, 50 T, 100 T, 200 T, certified operators
6. **Low bed trailer** — heavy machinery, construction equipment, oversized cargo
7. **Flatbed trailer** — transportation

Service-type colour logic (tokens): **water services → blue accent; lifting + haulage → orange accent.**

## 4. Content truth table (anti-hallucination gate — BINDING for the coding agent)
The earlier brief contained items that the client never supplied. Rule: **if a claim is not `SUPPLIED`, the site must not state it as fact.** Build it as a typed placeholder with `confirmed: false` and keep it hidden in production until the owner confirms (build fails if an unconfirmed item is rendered in a production build).

| Claim | Status | Action |
|---|---|---|
| Crane sizes 25/50/100/200 T, certified operators, 24/7 support, competitive pricing, on-time delivery, safety-focused | SUPPLIED | use |
| Vacuum tanker, septic cleaning, safe disposal | SUPPLIED | use |
| **Tanker capacities 1,000–10,000 gallons** (and the "10,000 Gal" hero stat) | **ASSUMED** (copied from competitor patterns, not from client) | hide until owner confirms real fleet sizes |
| **Coverage areas** (Musaffah, Khalifa City, Yas, Saadiyat, MBZ, Baniyas, Shahama, Al Ain, Ruwais) | **ASSUMED** | owner confirms list; only confirmed areas get pages |
| **3 testimonials** (site engineer, ops manager, facility manager) | **NOT SUPPLIED — invented in earlier brief** | removed. Fake reviews are deceptive and risk Google/consumer-protection problems. Use real quotes with written permission, or show nothing |
| "Same-day dispatch", "fast response" | ASSUMED | owner confirms the promise; otherwise say "24/7 dispatch" only |
| "Fully-compliant disposal", any licence/permit/approval wording | **OWNER-CONFIRM (legal)** | competitor sites advertise Abu Dhabi tanker registrations/approvals; owner must state exactly which licences, registrations and approved disposal sites OSIA holds. Publish only what is documented |
| "Lift planning support", "route/permits support", "steel/timber/palletised cargo" | ASSUMED | owner confirms |
| Salt water for landscaping/irrigation (earlier brief) | **REMOVED** | salt water is not suitable for irrigation; use construction, dust control, compaction, industrial cleaning — owner confirms |
| "Trusted by construction and industrial clients" | ASSUMED | keep only with named/approved client logos, else rephrase to "built for construction and industrial work" |
| Logo, fleet photos, trade licence number, domain name, social links | **NOT SUPPLIED** | see §12 asset checklist |

## 5. Audience and user intent (UX intake)
1. **Q1 Primary user + main task:** site engineer / procurement officer / camp or facility manager who needs a tanker or crane **today** → call or WhatsApp within 30 seconds. Secondary: villa owner (sweet water, septic).
2. **Q2 Device/network:** mobile-first (assume mid-range Android, patchy data, in a truck or on site). Desktop for procurement research.
3. **Q3 Languages:** English at launch. Arabic (RTL) is a **Phase 2 candidate** (government and some local clients). Build with CSS logical properties and a locale-ready route structure now. `ASSUMED` — owner to confirm.
4. **Q4 Brand:** no logo supplied. Colours from the earlier brief (navy, orange, blue), contrast-corrected (ADR_05).
5. **Q5 Feel:** *industrial, dependable, fast.* Reference: spec-sheet clarity (capacity numbers up front) + the call/WhatsApp-first layout seen on local competitors.

## 6. Competitor analysis (live-checked 2026-11-11)
| Site | What it does well | Weakness / lesson |
|---|---|---|
| abudhabiwatertanker.com | Sweet/salt/sewage split, capacity table, long coverage-area list, FAQ with concrete numbers, call + WhatsApp on every block, leads with licensing/registration trust | Testimonials look generic/templated; one long page; **trust through licensing is their main hook → OSIA must show its own real credentials** |
| nafkogroup.com | **One URL per service** (water tankers, flatbed, heavy machinery, sewage), Arabic version, address + 24/7 emergency number | Thin keyword-stuffed copy; no capacity visuals |
| starlandtransport.com (Dubai) | Simple 3-service nav | WordPress template leftovers, placeholder text, links to another domain. **Correction: it is NOT a crane site** (earlier brief said so). Not a model to follow |
| almerzaam.com, oriongroup.ae, pro-theme transaero | Could not be fetched (robots / error) | Not analysed; treat earlier notes about them as unverified |
**Gap OSIA can own:** the only one in this set combining **water + wastewater + cranes (25–200 T) + low bed/flatbed** under one clean, fast, spec-led site with one URL per service.

## 7. Scope — information architecture (DECISION: multi-page static site, ADR_02)
The earlier brief asked for a single page. One URL cannot rank for seven services × several areas. Decision: **static multi-page site; the home page keeps the one-page storytelling (all sections in the earlier order).**
```
/                                   home (hero, services, why us, fleet, process, areas, FAQ teaser, CTA, contact)
/services/                          hub
/services/sweet-water-supply-abu-dhabi/
/services/non-drinking-water-supply-abu-dhabi/
/services/salt-water-supply-abu-dhabi/
/services/wastewater-collection-abu-dhabi/
/services/mobile-crane-rental-abu-dhabi/      (25/50/100/200 T table; per-tonnage pages = Phase 2)
/services/low-bed-trailer-abu-dhabi/
/services/flatbed-trailer-abu-dhabi/
/areas/                             hub + only OWNER-CONFIRMED areas, each with genuinely unique content
/about/  /contact/  /faq/  /privacy-policy/  /terms/  /404  /sitemap.xml  /robots.txt  /llms.txt
```
Phase 1 area pages (if confirmed): Musaffah, Khalifa City, Mohammed Bin Zayed City. Others in Phase 2. **Never** clone area pages by swapping the place name (thin/doorway content).

### Home page section order (from the earlier brief, kept)
Topbar → sticky navbar → hero → services ticker → services grid (7 + custom card) → about → why choose us (6) → fleet & equipment (dark) → process (4 steps) → coverage areas → FAQ → CTA band → contact (form + info) → footer. Floating WhatsApp button + back-to-top.
**Testimonials section: removed until real testimonials exist** (section is feature-flagged, default off).

## 7b. Extra features added after brainstorming (value over the earlier brief)
1. **Service-aware quote form:** fields change per service (crane: load weight, lift height/radius, date; water: water type, capacity, one-off/recurring; wastewater: type, volume; trailer: cargo dimensions/weight, from → to). Message to WhatsApp stays structured → better leads, fewer back-and-forth calls.
2. **Sticky mobile bottom bar** (Call | WhatsApp, 64 px) instead of only a floating bubble. Thumb-zone, always visible.
3. **Hero "quick quote" selector:** pick a service → opens WhatsApp prefilled with that service.
4. **Procurement block:** "Documents on request" (trade licence, insurance, HSE/safety policy, operator certificates) and optional downloadable company profile (Phase 2, needs client documents).
5. **Capacity-first design:** capacity numerals as the signature visual (tonnage; gallons only once confirmed).
6. **Fallbacks:** if WhatsApp does not open, show `tel:` and `mailto:` buttons (desktop users without WhatsApp are otherwise lost).
7. **Analytics for calls/WhatsApp clicks** (GA4, consent-gated, no PII) so the owner can see what the site produces and so Google Ads can be tuned later.
8. **Single source of truth** `src/content/site.ts` for name/phone/email/services/areas/FAQ → page copy, JSON-LD and sitemap all derive from it (NAP consistency for local SEO).
9. **llms.txt + clean semantic HTML** so AI assistants can read services and contact info accurately.
10. **Staging environment** (noindex + password) before production.

## 8. Contact → WhatsApp integration (no backend, ADR_03)
- Single function `buildWhatsAppUrl(payload)` builds `https://wa.me/971504127930?text=<encodeURIComponent(message)>`.
- Message format (English, structured):
```
*New Quote Request — OSIA Transport LLC SPC*
Name: …
Phone: …
Service: …
Location/Area: …
Details: …
(service-specific lines)
Source: website form
```
- Validate with Zod (name ≤ 80, phone pattern for UAE/intl, location ≤ 120, details ≤ 600, strip control characters). Open with `window.open(url, '_blank', 'noopener,noreferrer')` **synchronously inside the submit handler** (mobile browsers block async popups); also render a visible "Open WhatsApp" link + `tel:` + `mailto:` as fallback; show toast; reset form.
- Nothing is stored or sent to any server. Privacy page says so.
- Generic WhatsApp links elsewhere: `https://wa.me/971504127930?text=Hello%20OSIA%20Transport!%20I%20need%20a%20quote.` (build from the same function; per-service variants).
- Phone is clickable `tel:+971504127930` everywhere.

## 9. Design system summary (details in DESIGN_TOKENS.json, UI_SPEC.md, ADR_05)
- Fonts: **Barlow Condensed** (headings, uppercase) + **Barlow** (body), **self-hosted** woff2 (no Google Fonts hotlink: faster, no third-party request, privacy-friendly).
- Icons: **Lucide** (tree-shaken SVG) + inline WhatsApp SVG. **Font Awesome dropped** (heavy, third-party).
- Colours (contrast-verified): navy `#0A1B2E`, safety-orange `#FF7A1A`, water-blue `#1391E5`, WhatsApp green `#25D366`, surfaces `#F4F7FB` / `#EDF3FA`.
- **Contrast corrections to the earlier palette:** white-on-orange is 2.61:1 (fails) → orange buttons use **navy text** (6.66:1); orange text on white → `#C2410C` (5.18:1); blue text on white → `#0B6FB8` (5.28:1); white on WhatsApp green is 1.98:1 → **navy text/icon** on green (8.76:1).
- Gradients: the earlier "orange→blue card border gradient" is replaced by a **solid 4 px top border colour-coded by service type** (purposeful, not decorative).
- Motion: fade-up reveal and number counters kept, `transform/opacity` only, 150–250 ms, **disabled under `prefers-reduced-motion`**, final values always present in the HTML (no-JS and SEO safe).
- Signature element: capacity-first spec-sheet look (large tonnage/gallon numerals on a blueprint grid).

## 10. SEO plan (technical + local)
**Technical:** static pre-rendered HTML (fast, crawlable), one H1 per page, unique title + meta description per page, canonical URLs, `sitemap.xml`, `robots.txt`, Open Graph/Twitter cards, `lang="en"`, breadcrumb schema, internal links hub → service → area, descriptive image alt text, WebP/AVIF with explicit width/height, no render-blocking third-party scripts.
**Structured data (JSON-LD, generated from `site.ts`):** `LocalBusiness` (service-area business; `areaServed`; opening hours 24/7; telephone; email; **no invented street address**; **no fake `aggregateRating`**), `Service` on each service page, `FAQPage`, `BreadcrumbList`, `WebSite`.
**Title pattern:** `{Service} in Abu Dhabi | {key proof} | OSIA Transport` (≤ 60 chars). **Meta description:** 140–155 chars with a call to action.
**Keywords (from the earlier brief, kept):** water tanker Abu Dhabi, sweet water supply Abu Dhabi, water tanker rental, non-drinking water supply UAE, salt water supply Abu Dhabi, wastewater collection / septic tank cleaning Abu Dhabi, mobile crane rental Abu Dhabi (25/50/100/200 ton), low bed trailer rental Abu Dhabi, flatbed trailer transportation UAE. Use them naturally in headings and copy; **no keyword stuffing**.
**Local SEO (off-site, owner tasks, biggest lead driver):**
1. **Google Business Profile** as a service-area business (hide address if no storefront); categories matching the main services; add services, photos, 24/7 hours, WhatsApp/phone; ask real customers for reviews.
2. NAP (name/phone/email) identical everywhere (site, GBP, directories).
3. Bing Places + UAE business directories.
4. Search Console + Bing Webmaster: submit sitemap after launch.
5. Real fleet and job photos (also for GBP). 
6. Optional later: Google Ads landing on service pages (the competitor link in the template shows Ads in use).

## 11. Compliance and legal
- UAE data-protection law (PDPL) and cookie transparency: privacy policy page; analytics only after consent; form data never stored by the site.
- Display company legal name; add trade licence number in footer (`OWNER-CONFIRM`).
- No regulatory claims (licences, registrations, approved disposal) without documents from the client.
- Credits: any stock/illustration used must be licensed; prefer original SVG illustrations until real photos arrive.

## 12. Assets and inputs needed from the client (Gate 7 blockers; build can start with placeholders)
- [ ] Logo (vector/PNG) — else a typographic wordmark is built
- [ ] Domain name and registrar access (`.ae` or `.com`) — until then `SITE_URL` is an env variable
- [ ] Hosting plan type on Hostinger (verify static hosting + `.htaccess` support; Git/FTP availability)
- [ ] Real photos: tanker(s), each crane size, low bed, flatbed (landscape, ≥ 1600 px)
- [ ] Confirmed tanker capacities and coverage areas
- [ ] Licences/registrations to display (exact wording) and trade licence number
- [ ] Real testimonials with permission (optional)
- [ ] Business-domain email (e.g. info@domain) instead of Gmail (deliverability + trust)
- [ ] Google Business Profile owner access
- [ ] Is anyone answering the single mobile 24/7? A second number/backup is recommended
- [ ] Arabic version: yes/no/later
- [ ] Social profile URLs (optional)

## 13. Acceptance criteria (Definition of Done for this project)
Functional
- [ ] All routes in §7 build and open; no broken links; no console errors
- [ ] All 7 services present with details and WhatsApp CTAs; `tel:` clickable everywhere
- [ ] Sticky mobile call/WhatsApp bar and floating WhatsApp button on all pages
- [ ] Service-aware form builds the structured WhatsApp message; fallbacks work; validation errors are announced
- [ ] FAQ accordion works (one open at a time, keyboard accessible)
- [ ] Counters animate and respect reduced motion; final values are in HTML
- [ ] Unconfirmed content (§4) cannot render in a production build
Quality gates (A-SDLC Definition of Done, adapted to a static site)
- [ ] lint, typecheck (strict), unit + component tests (≥ 80 % on `src/lib` and interactive components), Playwright E2E, axe = 0 violations, Lighthouse CI budgets met
- [ ] Zero High/Critical in dependency scan (osv/npm audit), SAST (CodeQL), secret scan (Gitleaks)
- [ ] Security headers deployed and verified (CSP, HSTS, nosniff, Referrer-Policy, Permissions-Policy, frame-ancestors)
- [ ] IDOR T1–T5: **N/A — no authenticated resources or object IDs** (recorded in THREAT_MODEL)
- [ ] RUNBOOK, RELEASE_NOTES, PROGRESS updated

## 14. Gate 1 report (DISCOVER)
| Item | Status |
|---|---|
| Project type, users, devices, languages, brand, feel | ✅ answered or `ASSUMED` (§5) |
| Competitor analysis (3–5) + differentiation | ✅ 3 analysed live, 3 not reachable (§6) |
| Requirements without guessing | ✅ unsupplied facts quarantined (§4) |
| Open items | §12 (none block Phase 2–5; they block Phase 7 DEPLOY) |
**Gate 1: PASSED (autonomous, per delegation).** → Gate 2 DESIGN: see TRD, UI_SPEC, DESIGN_TOKENS. Gate 3 DECIDE: see TECH_STACK + ADRs.
