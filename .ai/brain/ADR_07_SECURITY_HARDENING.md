# ADR 07 - Static-site security gates
Status: Accepted
Date: 2026-11-13

The owner explicitly authorized security review and fixes. Retain the static export with no new backend or dependency. Validate normalized, bounded quote inputs in both the form schema and message builder; allow only configured service titles. Render escaped JSON-LD as script text. Preserve the ADR 04 hash-based CSP, replace all placeholders and verify hashes inside the actual header. Build fails on missing policy hashes or private artifacts. Add pinned read-only CI checks for tests, lint, types, dependencies and export verification.

Hosting WAF/rate limiting, deployed Apache header/path verification and access-log incident investigation remain external controls. Client-side validation cannot protect a future HTTP API; require server validation and anti-abuse controls when introducing one. No new server-side attack surface is added.
