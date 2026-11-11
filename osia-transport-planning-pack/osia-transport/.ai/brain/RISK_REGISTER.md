# RISK_REGISTER — OSIA Transport website
| ID | Risk | L | I | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|
| R1 | Unverified licence/regulatory/compliance claims published | M | H | claims gate; owner documents; wording approved | Owner + AI QA | Open |
| R2 | Fake testimonials/ratings (earlier brief) | H→L | H | removed; only real, permissioned | AI CTO | Mitigated |
| R3 | No real fleet photos/logo → generic look | H | M | SVG illustrations placeholder; shoot list | Owner | Open |
| R4 | Thin/duplicate area pages (doorway content) | M | M | only confirmed areas with unique content | AI CTO | Open |
| R5 | CSP vs Next inline scripts | M | M | hash pipeline spike; Astro fallback (ADR_04) | AI Architect | Open |
| R6 | Hostinger plan limits (`.htaccess`, deploy method, bandwidth) | M | M | Phase 4 Hostinger spike; static files only | AI DevOps | Open |
| R7 | Leads lost (no WhatsApp, popup blocked) | M | M | synchronous open + tel/mailto fallbacks; GA4 events | AI Executor | Open |
| R8 | Phone/WhatsApp swapped by attacker | L | H | 2FA, CI-only deploy, integrity monitor | Owner + DevOps | Open |
| R9 | Domain not decided → canonical/sitemap wrong | M | M | `SITE_URL` env; production build fails without it | Owner | Open |
| R10 | PDPL/cookie compliance gaps | M | M | consent before GA4; privacy page; no PII stored | AI CTO | Open |
| R11 | Gmail address (spoofing, deliverability, low trust) | M | L | domain email + SPF/DKIM/DMARC | Owner | Open |
| R12 | Supply-chain compromise of npm packages | L | H | minimal deps, lockfile, scans, pinned Actions | AI Security | Open |
| R13 | No baseline → unrealistic lead targets | M | L | measure 30 days then set targets | Akasha | Open |
| R14 | Single mobile number for 24/7 | H | H | confirm coverage/backup; call forwarding | Owner | Open |
| R15 | Arabic demand missed | M | M | RTL-ready build; decide Phase 2 | Owner | Open |
