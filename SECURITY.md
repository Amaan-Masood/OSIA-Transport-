# OSIA Transport security record

Last reviewed: 2026-11-13. Update this file whenever security behavior changes.

## Status and scope

Local security fixes are implemented. Deployment, live headers, hosting controls and incident investigation remain unverified. No hosting access/error/WAF logs were available; live attack or breach status is unknown.

This is a static website. The quote form validates inputs in the browser and opens WhatsApp. There is currently no database, login, upload handler, quote HTTP API or server action. Client validation can be bypassed by someone controlling their own browser. Any future backend needs server validation, authorization and abuse controls.

## Implemented controls

| Control | Behavior | Source |
|---|---|---|
| Required input validation | Normalize control characters and whitespace before checking required name/location | `src/lib/validation.ts` |
| Input limits | Name 80, phone 20, service 160, location 120, details/cargo 600, other optional fields 80 characters; raw values bounded before normalization | `src/lib/validation.ts` |
| Service allowlist | Accept only configured service titles | `src/lib/validation.ts` |
| Message validation | Direct quote-message callers also use the shared validation schema | `src/lib/whatsapp.ts` |
| URL encoding | Quote message is encoded in one WhatsApp text parameter; HTML/SQL-shaped input remains text | `src/lib/whatsapp.ts` |
| Safe JSON-LD | Escape HTML-sensitive characters and Unicode line separators to prevent script-tag termination | `src/lib/serializeJsonLd.ts` |
| Content Security Policy | Hash exact inline script contents and insert hashes in the actual policy header; reject unresolved placeholders | `scripts/build-htaccess.mjs` |
| Export gate | Verify inline hashes and baseline security rules; reject detected private artifact patterns from export | `scripts/check-security.mjs` |
| Hosting rules prepared | HTTPS/HSTS, nosniff, framing/referrer/permissions restrictions, directory listing disabled, private source/dotfile blocks, GET/HEAD/OPTIONS-only methods | `deploy/htaccess.template` |
| Secret hygiene | Ignore environment files and common key formats | `.gitignore` |
| CI security checks | Pinned actions run dependency audit, lint, types, tests and build on push/PR and weekly | `.github/workflows/security.yml` |

Hosting rules require compatible Apache/LiteSpeed enforcement. CI activates after the workflow is pushed. Input validation alone is not a general injection defense; reassess SQL/NoSQL injection, CSRF, authorization and uploads when those features are introduced.

## Verification and repeat checks

The preceding hardening run passed 20 tests, lint, TypeScript and production build. Dependency audit reported zero known vulnerabilities at that time, which is a dated result rather than a guarantee about future advisories.

A local browser run applied the generated production CSP to the static export: blank required inputs were rejected, HTML/SQL-shaped text stayed in one WhatsApp parameter, valid submission worked, and an unapproved inline script was blocked. This verifies browser behavior, not the live host configuration.

Run from `Website/`:

```powershell
npm ci
npm audit --audit-level=low
npm run lint
npm run typecheck
npm test
npm run build
```

The build generates `out/.htaccess` and runs the export security gate. After exported HTML/scripts change, rebuild and deploy HTML, assets and the matching generated `.htaccess` together.

Evidence and decisions:

- [Audit report](.ai/audit/AUDIT_REPORT.md)
- [Structured findings](.ai/audit/findings.json)
- [Browser results](.ai/reviews/security-browser-results.json)
- [Remaining work](.ai/audit/REMEDIATION_BACKLOG.md)
- [Security architecture decision](.ai/brain/ADR_07_SECURITY_HARDENING.md)

## Remaining hosting and incident work

1. Deploy only the contents of `out/`, including generated `.htaccess`. Keep repository files, logs, backups and keys outside the public web root.
2. Verify real HTTPS responses contain the generated CSP and security headers. Confirm normal pages/navigation and valid quote submission work. Verify `/.env`, `/.git/config` and `/package.json` return 403/404 and unsupported methods are rejected.
3. Configure available hosting/CDN WAF and rate limits, account 2FA, restricted deployment access and restorable backups. These require hosting/account access.
4. Review access, error, deployment and WAF logs for suspicious requests, successful private-file access, unexpected uploads/account changes and altered deployed content. Compare deployed files and contact details with a trusted build. A blocked probe alone does not prove compromise.
5. If compromise is confirmed, preserve evidence before cleanup, restrict affected access, revoke exposed credentials, investigate the entry point and restore a verified build. Redact customer information and credentials from reports.

## Reporting and maintenance

Report suspected vulnerabilities privately to the project owner using an existing private channel. Include the affected path, reproduction steps and redacted evidence. Do not publish credentials or customer data in public issues.

Review new advisories, resolve failed security checks and repeat live verification after deployment or hosting changes. Record future fixes, verification dates and remaining work in this file.
