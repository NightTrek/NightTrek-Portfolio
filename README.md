# Daniel Steigman’s portfolio

Personal portfolio at https://www.ntrek.dev, built with Next.js Pages Router,
React, TypeScript, Tailwind CSS, and Framer Motion. Hosted on Vercel.

## Development

Use Node.js 24 and pnpm 9.11.0, as pinned in this repository.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Verification

```sh
pnpm lint
pnpm check-types
pnpm audit --audit-level low
pnpm build
pnpm start --hostname 127.0.0.1 --port 3100
# In another terminal:
pnpm test
```

The integration tests expect a production server on port 3100. Override with
`TEST_ORIGIN` when needed. They check routes, internal links, anchors, referenced
assets, canonical metadata, sitemap configuration, retired starter pages, and
phone-contact regressions in source and delivered HTML/JavaScript. Asset OCR and
browser interaction/accessibility checks remain separate manual review steps.

## Content and assets

- Homepage sections: `src/components/LandingPageParts/`
- Case studies: `src/pages/{codex,cline,stable,nugbase,dual4t}.tsx`
- Metadata: `src/layouts/Meta.tsx` and `src/utils/AppConfig.ts`
- Static assets: `public/`
- Sitemap generation: `next-sitemap.config.js`, run after each build

Use public sources for externally verifiable claims and keep customer-specific
private details out of content. Project screenshots must be authentic, not
reconstructed product UI. Do not add personal telephone contact information.

## Review workflow

Open draft pull requests for review. A PR can create a Vercel preview; merging
main may update production. Do not merge or promote a deployment without approval.

Based on the MIT-licensed ixartz Next.js Boilerplate. See LICENSE.
