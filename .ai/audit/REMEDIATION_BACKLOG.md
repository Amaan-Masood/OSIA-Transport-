# Remediation backlog

Implemented: SEC-01 through SEC-06 (input/builder validation, safe JSON-LD, exact CSP hashes, export checks, private-artifact protection and pinned CI). See AUDIT_REPORT.md and security regression tests.

Pending external verification: SEC-07 - hosting logs and deployed Apache/LiteSpeed headers; WAF/rate limiting, backups and 2FA. Requires owner hosting access/logs. Estimate: 1-2 hours for deployment verification and log triage, longer if an actual incident is found.

Not applicable to the current static site: SQL/NoSQL injection, IDOR, authentication/CSRF session flaws, server-side request forgery, unrestricted file uploads. Reassess if any backend, database or upload feature is introduced.
