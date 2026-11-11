# Paste this as the FIRST prompt in Antigravity (open the project folder first)

You are operating under the A-SDLC framework. This repository already contains the planning artifacts for Phases 1–3 in `.ai/brain/` and the rules in `AGENTS.md`.

1. Read `AGENTS.md`, `.ai/brain/PROGRESS.md`, `TRD_*`, `PROJECT_BRIEF_*`, `TECH_STACK_*`, all `ADR_*`, `DESIGN_TOKENS.json`, `UI_SPEC.md`, `THREAT_MODEL_*`, `TEST_PLAN.md`.
2. Start Phase 4 SCAFFOLD exactly as TRD §2 and PROGRESS.md "Resume Here" describe. Pin current stable versions and record them in `TECH_STACK_*`.
3. Run the 3 spikes (CSP hash pipeline, Hostinger `.htaccess`/deploy, image pipeline). Record results; if the CSP spike fails, do NOT switch stack silently — write the superseding ADR per ADR_04 and ask me.
4. Do not invent any business fact. Use the `confirmed` flags and `TODO-OWNER` markers from the brief §4.
5. Work in small commits; run lint, typecheck, tests and scans before each commit; update PROGRESS.md.
6. Stop after Gate 4 (scaffold builds, CI green, tokens + base layout + shared components in place) and show me the gate report. Do not continue to Phase 5 without my approval.
