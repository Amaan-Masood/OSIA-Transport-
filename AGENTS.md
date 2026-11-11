# AGENTS.md — rules for the coding agent (Antigravity / Cursor / Claude Code)
Project: OSIA Transport LLC SPC website. Framework: A-SDLC (8 phase gates). Planning (Phases 1–3) is DONE. You start at **Phase 4 SCAFFOLD**.

## Read first, every session
1. `.ai/brain/PROGRESS.md` → "Resume Here"
2. `.ai/brain/TRD_*.md` (§9 AI Coding Agent Instructions are BINDING)
3. `.ai/brain/PROJECT_BRIEF_*.md` (§4 content truth table is BINDING)
4. `.ai/brain/ADR_*.md` — never override an ADR; write a new ADR (same format) first.
5. `.ai/brain/DESIGN_TOKENS.json`, `UI_SPEC.md`, `TEST_PLAN.md`, `THREAT_MODEL_*.md`

## Hard rules
- Never guess requirements or facts. If something is missing, add a `TODO-OWNER` marker and a `confirmed:false` flag; production build must fail on them. Do not invent testimonials, ratings, clients, addresses, licences, capacities, areas.
- Phone/WhatsApp/email/legal name live ONLY in `src/content/site.ts`. WhatsApp URLs only via `buildWhatsAppUrl`.
- No WordPress, no UI library, no Font Awesome, no Google Fonts links, no third-party scripts except GA4 after consent. No new dependency without a one-line justification in the PR.
- No raw hex, off-scale spacing/font sizes, `dangerouslySetInnerHTML`, `eval`, inline event handlers, `localStorage` for anything except the consent choice.
- Colours: never white text on orange or WhatsApp green (use navy). See ADR_05.
- Phase gates: do not start the next phase until the current gate report is written in PROGRESS.md.
- Every change: implement → tests → lint/typecheck → security scan → commit message (conventional commits). Definition of Done: lint, `tsc` strict, tests (≥ 80 % on `src/lib` + interactive components), axe 0, Lighthouse budgets, zero High/Critical in scans, docs updated.
- Update `.ai/brain/PROGRESS.md` at the end of every session and commit it.

## First task (Phase 4)
Scaffold per TRD §2, pin versions, run the three spikes (CSP hashes, Hostinger, images), then tokens → base layout → shared components → pages. Stop at Gate 4 and report.
