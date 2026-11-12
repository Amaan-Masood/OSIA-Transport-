# Security audit and hardening - 2026-11-13

Local code/build review aur fixes complete hain. Koi confirmed SQL injection endpoint, credential leak ya existing attack ka evidence nahi mila. Yeh static marketing site hai: no database, authentication, file upload, server actions or HTTP quote API. Form browser mein validate hota hai aur WhatsApp kholta hai. Client validation server-side protection ka replacement nahi; future API ke liye server validation and rate limits required honge.

## Findings and fixes

| ID | Severity / confidence | Evidence | Remediation |
|---|---|---|---|
| SEC-01 | P2 / Confirmed | validation.ts checked minimum length before trimming; whitespace-only name/location could pass | Normalize first, then required checks; bound raw input before transforms |
| SEC-02 | P2 / Confirmed | Optional quote fields had no max length; service accepted arbitrary strings; direct WhatsApp builder skipped validation | Bounds on every field, configured service allowlist, validation in message builder, HTML input caps |
| SEC-03 | P2 / Confirmed hardening gap; no untrusted runtime source found | JsonLd.tsx inserted JSON directly into a script element | HTML-safe JSON serializer, safe script text rendering, malicious closing-tag regression test |
| SEC-04 | P1 / Confirmed in local production-CSP browser reproduction | First-only placeholder replacement populated a comment instead of the actual CSP header; hashes were also computed after trimming | Replace all placeholders, reject unresolved tokens, verify hashes inside the actual CSP header; preserve exact bytes and inspect attributes only |
| SEC-05 | P2 / Confirmed | No automatic artifact/header gate or CI workflow in the repository | Build verifies all inline hashes, baseline headers and private artifacts; pinned-action CI on push/PR and weekly schedule |
| SEC-06 | P3 / Confirmed | .gitignore omitted plain .env and key formats; accidental source upload lacked complete directory blocks | Expanded ignore patterns and Apache private-source blocks; static-only HTTP methods |
| SEC-07 | Operational / Needs verification | No hosting access/error/WAF logs or production server configuration available | Hosting investigation and deployed-header verification remain necessary; no claim that a breach occurred or that live protection is active |

## Boundaries and evidence

- User explicitly requested both audit and remediation. Existing unrelated tsconfig.json edits were retained. Work is on audit/security-2026-11-13.
- Reviewed app routes, form and validation/message helpers, structured-data rendering, outbound URLs, dependencies, static export, hosting template and build scripts. UI styling and business feature completeness were outside this security-focused scope.
- All rendered text uses React escaping; quote payloads are plain data in encodeURIComponent, not HTML or SQL. No database queries, command execution, arbitrary server fetch or user upload handler were found.
- Existing CSP denies framing, plugins and base injection; HTTPS/HSTS, nosniff and referrer restrictions retained. New Apache rules deny non-read methods and accidental private source paths. Apache/LiteSpeed enforcement requires a hosting deployment; localhost Next dev does not apply .htaccess.
- Dependency audit: zero known vulnerabilities at audit time. This does not establish that every dependency is vulnerability-free.
- Regression tests include whitespace/control bypass, oversized optional fields, unsupported services, Unicode, SQL/XSS-shaped strings kept as data, JSON-LD script termination, and exact CSP hashes.
- GitHub workflow is prepared locally; scheduled checks activate only after it is pushed to the repository's default branch. Nothing was pushed or deployed.

## Live incident investigation / remaining work

1. Deploy only out/ to the authorized static host. Verify response headers and that /.env, /.git/config, /package.json and private directories return 403/404; normal pages and Next navigation must work. Test non-read methods return 403.
2. Inspect hosting access/error/WAF logs for traversal/XSS/SQL-shaped probes, unexpected uploads and changed files. A suspicious request alone does not prove compromise. Compare deployed content and contact numbers to a known build.
3. Enable hosting/CDN WAF and rate limits on the account if available; verify backups, restricted deploy credentials and 2FA on hosting/domain/GitHub. These controls cannot be installed inside a static React form.
4. If an incident is confirmed, preserve logs, revoke exposed credentials, restore a verified build and investigate the hosting account. Do not log full WhatsApp payloads or customer phone numbers in analytics.

## Primary references

- https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html
- https://nextjs.org/docs/app/guides/static-exports

Browser evidence: production CSP applied to the static export through a local response-header test. Blank form input was blocked; HTML/SQL-shaped text remained data in one WhatsApp query parameter; a newly injected inline script was blocked; valid form submission worked with no page errors. This verifies browser policy behavior, not real Apache/LiteSpeed configuration. See .ai/reviews/security-browser-results.json.
