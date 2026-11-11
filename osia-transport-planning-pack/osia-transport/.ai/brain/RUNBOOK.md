# RUNBOOK — OSIA Transport website
## 1. Environments
local (`next dev`) → staging (`staging.<domain>`, noindex + basic auth) → production (`<domain>`).
## 2. First-time hosting setup (verify each item in the Hostinger spike)
1. Domain pointed to Hostinger; SSL issued; force HTTPS enabled.
2. Create a **restricted FTP/SFTP account** whose root is the site's `public_html` (or staging folder). Never use the main hPanel credentials in CI.
3. Add GitHub Environments `staging` and `production` with secrets: `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD` (or SSH key), `FTP_DIR`; variables: `SITE_URL`, `GA_ID`, `DEPLOY_ENV`. Production requires manual approval.
4. Enable 2FA on hPanel/Hostinger, registrar, GitHub, Google (GBP/Search Console/Analytics).
5. Business email on the domain; SPF, DKIM, DMARC records.
## 3. Release
1. PR → CI green (lint, types, tests, scans, build, Lighthouse).
2. Merge to `main` → deploy to **staging** automatically.
3. Check staging on a real phone; run header and integrity checks.
4. Approve production deploy → upload `out/` → post-deploy synthetic checks → update RELEASE_NOTES.
5. First launch only: submit `sitemap.xml` in Google Search Console and Bing Webmaster.
## 4. Rollback
Redeploy the previous CI artifact (last 10 kept) via the `deploy.yml` "redeploy artifact" input; or restore from Hostinger backup. Re-run integrity check.
## 5. Content changes
Edit `src/content/site.ts` (single source) → PR → deploy. Never edit files on the server.
## 6. Monitoring
Uptime monitor on `/` and one service page; **content-integrity check**: homepage HTML contains `tel:+971504127930` and `wa.me/971504127930`; alert by email/WhatsApp to owner and NextaSol. Review GA4 events weekly (`click_call`, `click_whatsapp`, `submit_quote_form`).
## 7. After 30 days
Set lead targets from the baseline; review Search Console queries; add pages (per-tonnage crane, more areas) only where real content exists.
## 8. Incidents
- **Site down:** check Hostinger status/hPanel, DNS, SSL expiry; redeploy last good artifact; inform owner.
- **Wrong phone/number or defaced page:** treat as security incident: rotate FTP/GitHub/hPanel credentials, redeploy from CI, review access logs, enable/verify 2FA.
- **Leads not arriving:** test WhatsApp link on Android + iPhone, check GA4 events, confirm owner's WhatsApp number is active.
## 9. Renewals
Domain, hosting plan, business email: calendar reminders 30 days before expiry. SSL auto-renewal: verify monthly.
## 10. Google Business Profile
Owner-managed; keep NAP identical to `site.ts`; add real photos monthly; reply to every review.
