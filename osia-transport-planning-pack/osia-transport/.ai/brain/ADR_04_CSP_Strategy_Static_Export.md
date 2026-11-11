## ADR #04 — Strict CSP for a static Next.js export (hash pipeline, Astro fallback)
ADR #: 04
Status: Accepted
Date: 2026-11-11

Context:
- A-SDLC web rules require CSP and forbid inline-script exceptions. Static export cannot use per-request nonces, and Next.js emits small inline scripts for hydration.

Decision:
- Post-build script scans `out/**/*.html`, computes SHA-256 of every inline `<script>`, and writes the union into the CSP header in `.htaccess`. `script-src 'self' <hashes> https://www.googletagmanager.com` (GA4 only after consent). **`'unsafe-inline'` for scripts is not allowed** (Security Officer veto).
- `style-src 'self'; style-src-attr 'unsafe-inline'` (React style attributes only; no inline style blocks).
- `frame-src` only for the click-to-load Google Map; `frame-ancestors 'none'`.

Alternatives:
- Option A — `'unsafe-inline'`: rejected.
- Option B — Astro (no inline scripts): **fallback**. Trigger: Phase 4 spike shows the hash pipeline is brittle or breaks hydration → write ADR superseding ADR_01 before changing stack.

Consequences:
- Positive: real XSS defence-in-depth on a static site.
- Negative: build step complexity; CSP must be regenerated every build; test that CSP matches built HTML (CI).
- Follow-ups: CI test "every inline script hash present in CSP".
