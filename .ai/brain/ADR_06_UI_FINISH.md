# ADR 06 ? UI finish and validation tooling
Status: Accepted
Date: 2026-11-13

Context: The owner requested final UI polish and completion of outstanding dependency and lint checks. Existing implementation had replaced the original orange palette with blue and used remote fonts.

Decision: Retain the existing navy/blue direction, darken blue and WhatsApp green for readable white labels, and serve licensed Barlow fonts locally. Use ESLint with Next core-web-vitals and TypeScript rules. Add tsx as a development dependency to run existing tests reproducibly. Upgrade Zod and Sharp to patched releases; override Next's PostCSS and the linter's minimatch with patched versions. Keep the existing Next 15 framework and separate dev/production build caches.

Dependency justification: ESLint, eslint-config-next and FlatCompat provide the missing lint gate; tsx replaces an unpinned download at test runtime. Font license is retained in public/fonts/OFL.txt.

Validation: Existing quote schema tests cover Zod compatibility; production build validates PostCSS integration. No automatic major framework migration.
