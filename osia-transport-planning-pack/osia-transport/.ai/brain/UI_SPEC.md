# UI_SPEC — OSIA Transport website
Tokens: DESIGN_TOKENS.json (binding). Library: none (custom). Signature: capacity-first spec-sheet look.

## Users and primary task
| Persona | Need | Primary task | Path |
|---|---|---|---|
| Site engineer / foreman (mobile, on site) | water or crane **now** | call or WhatsApp in < 30 s | any page → bottom bar |
| Procurement officer (desktop) | compare vendors, check capacity and credentials | find capacity table, documents, contact | service page → about → contact |
| Camp / facility manager | recurring supply, wastewater removal | request scheduled service | service page → form |
| Villa owner | sweet water or septic tonight | WhatsApp with location | home → hero quick quote |

## Routes and navigation (key CTA per page)
| Route | Primary CTA | Secondary |
|---|---|---|
| `/` | WhatsApp quote (hero quick quote) | Call |
| `/services/` | pick a service | WhatsApp |
| `/services/<service>/` | WhatsApp with service prefilled | Call, form |
| `/areas/…` | WhatsApp with area prefilled | services links |
| `/about/` | Contact | documents on request |
| `/faq/` | WhatsApp ("ask us") | — |
| `/contact/` | form → WhatsApp | call, email |
Navbar: Home, Services (dropdown on desktop / list on mobile), About, Fleet (home anchor), Process (home anchor), FAQ, Contact + "Get a Quote" button. Mobile: hamburger + permanent bottom bar (Call | WhatsApp).

## Components inventory
Button (primary navy, cta orange, whatsapp green, ghost; heights 40/48; min tap 44), Badge, Card (service, why-us, capacity, area chip), Section header, Capacity numeral block, Spec table (sticky header, numbers right-aligned, mobile → cards), Accordion, Navbar + mobile drawer, Bottom bar, Floating WhatsApp, Back-to-top, Toast (`role="status"`), Form fields (input, select, textarea, with inline errors), Quote form (service-aware), Fleet chips, Process steps, Marquee/ticker (pausable, reduced-motion = static), Map facade, Footer, Cookie/consent banner.

## Screens × States matrix
| Screen/component | Loading | Empty | Error | Success | Disabled | Notes |
|---|---|---|---|---|---|---|
| Home / service pages (static) | n/a (pre-rendered) | n/a | 404 page with call/WhatsApp | n/a | n/a | no layout shift; images have width/height |
| Quote form | submit button shows spinner without width change | initial: helper text per field | inline errors (icon + text, `aria-invalid`, `aria-describedby`) + summary `aria-live` | toast "Opening WhatsApp…" + fallback block | submit disabled while pending | service change swaps fields, preserves common fields |
| Accordion | n/a | n/a | n/a | open/closed | n/a | one open at a time |
| Map facade | placeholder with "Load map" button | hidden when no location | "Map unavailable — open in Google Maps" link | iframe loaded after click | n/a | only if owner supplies location |
| Counters | final value in HTML | n/a | n/a | animates once in view | reduced-motion: static | |
| Consent banner | n/a | n/a | n/a | choice stored in `localStorage` (preference only, no PII) | n/a | GA4 loads only after Accept |
| Mobile drawer | n/a | n/a | n/a | open/closed | n/a | focus trap, Esc closes, returns focus |

## Data behaviour
Validation per service (Zod); no pagination; no real-time; no optimistic updates; analytics events without PII.

## Languages and direction
LTR English now. Use CSS logical properties from day one (`margin-inline`, `padding-inline`) so Arabic RTL (Phase 2) needs no refactor. Locale-ready route plan: `/ar/…` later.

## Layout and look
- 12-column grid desktop, container 1200, section padding 48 mobile / 96 desktop, card padding 16/24, radius 12.
- Hero: H1 (display 60/72 desktop, 36 mobile), sub-headline, two CTAs (orange "Get a Quote on WhatsApp", navy "Call +971 50 412 7930"), trust badges **only from confirmed/SUPPLIED claims** (24/7 support, certified operators, safety-focused), capacity numerals strip (25–200 T crane range; 24/7; 7 services).
- Blueprint grid texture only on dark sections (fleet, footer); no gradients/glass.
- Services grid: water cards get blue top border; lifting/haulage cards get orange top border; each card: icon, title, 2-line description, 3 bullets, WhatsApp link with service prefilled.
- Fleet section (dark): crane tonnage cards (25/50/100/200 T) with large numerals; trailer types; tanker capacity chips **render only when confirmed**.
- Process: Call/WhatsApp → Quote & schedule → Dispatch & delivery → Job done & support.
- Imagery: real photos when supplied; until then original SVG equipment illustrations (flagged `PLACEHOLDER`). No stock filler.

## Accessibility (WCAG 2.2 AA)
Semantic landmarks, skip link, visible `:focus-visible` (2 px ring, offset 2, ≥ 3:1: `water-text` on light, `on-dark-water` on dark), 44 px targets, labels on all controls, no colour-only status, reduced motion, 200 % zoom, `lang="en"`.

## Assumptions
English only at launch; no testimonials; no tanker gallon capacities until confirmed; map optional; consent banner required because of GA4.
