# Security control applicability

| Control | Current scope |
|---|---|
| XSS/HTML injection | React escaping, safe JSON-LD, CSP; regression tested |
| Input/URL injection | All fields bounded, service allowlist, normalized required fields, validated WhatsApp builder and single encoded query parameter |
| SQL/NoSQL injection / IDOR / SSRF | No database, authenticated resources or server fetch endpoint |
| CSRF/authentication | No session or server state-changing endpoint |
| File upload | No upload endpoint; exported private artifact checks |
| Headers/TLS/private paths | Apache template prepared; live host enforcement unverified |
| Supply chain / SDLC | Lockfile, zero current npm advisories, pinned CI actions, build/security tests |
| WAF/DoS/incident detection | Hosting/CDN control; logs and account access unavailable |
