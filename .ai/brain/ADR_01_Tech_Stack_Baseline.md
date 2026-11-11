## ADR #01 — Tech stack baseline: Next.js static export + Tailwind on Hostinger
ADR #: 01
Status: Accepted
Date: 2026-11-11

Context:
- Public brochure/lead-gen site for OSIA Transport. SEO is a hard requirement. Must run on normal Hostinger web hosting. WordPress is excluded by the client. No login, database or payments.
- Deterministic rule A-SDLC v2.2 §4.4 Rule 1 (SEO-critical/marketing site) selects Next.js (App Router) + TypeScript.

Decision:
- Next.js App Router, TypeScript strict, **static export** (`output: 'export'`, `trailingSlash: true`), Tailwind CSS v4 tokens, custom components (no UI library), Lucide icons, self-hosted fonts, Zod validation. Output folder `out/` is plain HTML/CSS/JS deployed to `public_html`.
- No backend and no database; lead capture is a WhatsApp deep link (ADR_03).

Alternatives:
- Option A — **Astro** (v2.2 Rule 3 alternative): zero-JS by default, no inline scripts (easiest strict CSP), excellent Lighthouse. Rejected as default because Rule 1 matches first and Next.js is the NextaSol standard. **Named fallback** (see ADR_04).
- Option B — WordPress + Elementor: rejected by client; heavier attack surface and plugin supply chain.
- Option C — hand-written single `index.html`: rejected (one URL, no tests, weak SEO/security posture).
- Option D — Next.js with Node server on Hostinger: rejected; needs Node hosting plan and adds runtime attack surface for no benefit.

Consequences:
- Positive: pre-rendered HTML for crawlers, tiny runtime, cheap hosting, no server to patch, easy rollback (previous build artifact).
- Negative: no server-side headers/middleware (headers must live in `.htaccess`); Next image optimisation disabled (own build script); inline hydration scripts complicate CSP (ADR_04); content edits require a rebuild/deploy.
- Follow-ups: Phase 4 spikes (CSP, Hostinger, images). Pin versions at scaffold.
