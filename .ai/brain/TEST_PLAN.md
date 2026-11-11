# TEST_PLAN — OSIA Transport website
| Layer | Tool | What | Gate |
|---|---|---|---|
| Static | ESLint (+ jsx-a11y), Prettier, `tsc --noEmit` strict, Stylelint/ESLint token rules | zero errors; no raw hex/off-scale values; `alt` required | PR |
| Unit | Vitest | `whatsapp.ts` (encoding, newlines, `& # %`, Arabic/emoji, max length), `validation.ts`, `schema.ts` (JSON-LD fields), `seo.ts`, claims gate, NAP uniqueness | PR, ≥ 80 % `src/lib` |
| Component | Testing Library | navbar/drawer focus, accordion one-open, form errors/fallbacks, counters reduced-motion | PR |
| E2E | Playwright against built `out/` | all routes 200; no console errors; hrefs for `tel:` and `wa.me`; form opens expected URL (popup intercepted); keyboard-only flows; no horizontal scroll at 360/768/1024/1440 | PR + staging |
| A11y | axe-core in Playwright | 0 violations per route and width | PR |
| SEO | custom script | unique title/description, one H1, canonical, sitemap = routes, JSON-LD parse, production has no `noindex`, staging has | PR |
| Performance | Lighthouse CI | mobile Perf ≥ 90, A11y ≥ 95, SEO 100, BP ≥ 95; LCP/CLS/INP and JS budgets | PR + staging |
| Security | Gitleaks, osv-scanner/`npm audit --audit-level=high`, CodeQL, header check on staging (`curl -I` asserts), CSP-hash check | zero High/Critical; headers present; every inline script hash in CSP | PR + deploy |
| Content | `check-claims.mjs` | no unconfirmed claims, no `TODO-OWNER`, no fake rating in production build | production build |
| Post-deploy | synthetic check | homepage reachable, HTTPS, `tel:+971504127930` present, WhatsApp link present | every deploy + scheduled |
| IDOR T1–T5 | — | **N/A** (no authenticated resources); documented | Gate 6 |
**Mutation-verify** the security-relevant tests once (claims gate, NAP uniqueness, CSP-hash check): break the code on purpose and confirm the test fails.
**Manual before launch:** real-phone test on Android + iPhone (call, WhatsApp, form, bottom bar), slow-3G run, screen-reader smoke test.
