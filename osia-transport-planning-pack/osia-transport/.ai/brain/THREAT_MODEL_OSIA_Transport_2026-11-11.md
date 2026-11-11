# THREAT MODEL (STRIDE) — OSIA Transport website
**Scope:** static site on Hostinger + CI/CD + owner accounts. **Assets:** lead flow (phone/WhatsApp number shown on site), brand reputation, domain, Google Business Profile, deploy credentials.
**Data flow:** browser → static host (read-only). Form data stays in the browser and goes only to WhatsApp via the user's own app.
**Most realistic attack:** someone gets into hosting/FTP/GitHub/domain/GBP and **swaps the phone or WhatsApp number** (silent lead theft) or injects malicious JS.

| STRIDE | Threat | Likelihood | Impact | Mitigation | Residual |
|---|---|---|---|---|---|
| S | Domain/GBP/hosting account takeover; look-alike phishing domain | Med | High | 2FA everywhere (hosting, registrar, Google, GitHub), strong unique passwords/password manager, registrar lock, SPF/DKIM/DMARC on domain email, monitor look-alikes later | Low |
| T | Tampered build/deploy (stolen FTP creds, malicious npm package) | Med | High | CI-only deploys, restricted FTP account (root = site dir), secrets in GitHub Environments, lockfile + Dependabot + osv + CodeQL + pinned Actions, **post-deploy integrity check: homepage HTML must contain the exact `tel:` number from `site.ts`** | Low |
| T | Number swapped in content | Low | High | single source of truth, PR review, integrity monitor alert | Low |
| R | Repudiation | n/a | Low | no accounts or transactions | — |
| I | Info disclosure: source maps, `.env`, backups, directory listing, PII in analytics | Low | Med | no source maps in prod, dotfile/extension block, `Options -Indexes`, GA4 events without PII, deploy only `out/` | Low |
| D | Traffic spike / shared hosting limits / bot load | Med | Med | static files, long cache headers, CDN/cache (verify), uptime monitor, GBP and phone as fallback channels | Med (accept) |
| E | Elevation of privilege | n/a | — | no server code, no auth | — |
| XSS | Injection via form | Low | Low | form text never rendered as HTML; encoded into URL only; Zod; CSP with script hashes (ADR_04) | Low |
| Ops | Single mobile number for "24/7" → missed leads | High | High | owner to confirm coverage/backup number, call-forwarding, second number later | Med |
| Legal | False claims (licences, reviews, capacities) | Med | High | content truth table, claims gate, owner sign-off | Low |

**IDOR T1–T5:** not applicable (no authenticated resources, no object identifiers, no API). Recorded as N/A for Gate 6.
**Security Officer position:** approve for build; **veto on deploy** until CSP spike (ADR_04), 2FA confirmation and the integrity monitor are in place.
