## ADR #05 — Client palette kept, contrast-corrected; display-size token extension
ADR #: 05
Status: Accepted
Date: 2026-11-11

Context:
- Earlier brief palette: navy #0A1B2E, orange #FF7A1A, blue #1391E5, WhatsApp green #25D366. Measured contrast: white on orange 2.61:1, white on green 1.98:1, orange text on white 2.61:1, blue text on white 3.38:1 — all fail WCAG AA text (4.5:1).
- frontend-ui-upgrade allows custom brand colours only after the contrast script passes.

Decision:
- Keep the hues; change pairings: navy text on orange (6.66:1) and on green (8.76:1); `accent-text #C2410C` (5.18:1) for orange text on light; `water-text #0B6FB8` (5.28:1) for blue text on light. Orange/blue used as large graphics or on the dark navy surface. All pairs verified in `contrast-report.txt`.
- Radius capped at 12 (scale 6/8/12) instead of 14–16; gradients replaced by solid service-colour top borders.
- Token extension: display sizes 60/72 only for hero H1 and capacity numerals (signature element); everything else stays on the 12–48 scale.

Alternatives:
- Option A — keep white text on orange: fails accessibility and readability in sunlight on mobile.
- Option B — darken orange until white passes (~#C2410C): loses the safety-orange identity for CTAs.

Consequences:
- Positive: accessible, high-contrast CTAs; brand hues preserved.
- Negative: navy-on-orange buttons differ from the usual white-on-orange look.
- Follow-ups: re-run contrast script if any token changes; Lighthouse/axe gates enforce.
