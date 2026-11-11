## ADR #03 — Lead capture via WhatsApp deep link, no backend
ADR #: 03
Status: Accepted
Date: 2026-11-11

Context:
- Owner's main booking channel is WhatsApp (+971 50 412 7930). Hosting is static. No data should be stored.

Decision:
- The form builds a structured text message client-side and opens `wa.me/971504127930?text=…` synchronously on submit, with visible fallbacks (`tel:`, `mailto:`). Nothing is posted to any server. GA4 event `submit_quote_form` carries only the service name.

Alternatives:
- Option A — PHP mail endpoint on Hostinger: email backup for desktop users; adds a server endpoint (spam, header injection, rate limiting). Candidate for Phase 2.
- Option B — third-party form service: extra vendor, privacy and CSP surface.

Consequences:
- Positive: zero stored personal data, no server attack surface, instant contact on the owner's phone.
- Negative: users without WhatsApp rely on fallbacks; no lead log (mitigated by GA4 events and WhatsApp history).
- Follow-ups: decide on Phase 2 email backup after 30 days of data.
