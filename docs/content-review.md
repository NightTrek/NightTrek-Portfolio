# Portfolio content review

This change preserves the existing visual direction and focuses on narrative,
case-study pages, links, metadata, and regression checks.

## Sources and attribution

- Career responsibilities and first-person contributions are Daniel’s account.
  Team outcomes are credited to the team rather than framed as solo work.
- Cline’s July 31, 2025 announcement reports 2.7 million installs across VS
  Marketplace and Open VSX. The site calls them installs, not active users:
  https://cline.bot/blog/cline-raises-32m-series-a-and-seed-funding-building-the-open-source-ai-coding-agent-that-enterprises-trust
- Cline marketplace size is Daniel’s firsthand description of the launch period,
  not a claim about today’s ranking or an independently verified comparison.
- Shared Linux NFS home-directory support is publicly documented:
  https://learn.chatgpt.com/docs/environments/network-file-systems
  https://github.com/openai/codex/releases/tag/rust-v0.166.0
  Daniel’s contribution is his account; the release is a team outcome.
- NVIDIA’s publicly described adoption:
  https://blogs.nvidia.com/blog/openai-codex-gpt-5-5-ai-agents/

No private customer configurations, account ranks, deal figures, internal-tool
metrics, acquisition claim, or unconfirmed future role are included. No invented
Stable product screenshots are used. Legacy MCP repository links are held pending
maintenance review rather than presented as production-ready work.

## Validation

- Lint, TypeScript and production build pass.
- Four interaction tests cover rapid/repeated selection, cancellation, and
  document-level Escape handling. Four integration tests cover public source
  phone patterns, routes/assets/anchors,
  retired starter content, canonical metadata and sitemap configuration.
- Full and production dependency audits pass with zero findings. Scoped overrides
  update Glob/minimatch consumers after testing Sucrase compilation, rimraf
  async/sync glob operations, TypeScript ESLint matching, and cancellation. The
  existing low-threshold audit gate is unchanged.
- Existing live assets were independently checked for telephone exposure in text,
  images and sampled video frames; none was found. The regression test supplements
  that audit and does not replace future visual asset review.
- Desktop and 390px mobile views inspected. Captioned, screenshot-based desktop
  and mobile walkthrough videos were prepared separately. Normal menu navigation
  and Cline/Stable selectors were exercised. Deterministic unit coverage checks
  sub-150ms selection sequences that cannot be reliably timed with manual UI input.
  The PR stays in draft for content-disclosure and walkthrough review.

## Link changes

The missing Stable page and Flowerpatch anchor now exist. The broken scheduling
link is replaced by Daniel’s LinkedIn profile. A live Flowerpatch CTA was removed
because its certificate could not be verified. Legacy HTTP D3 scripts now use
HTTPS. Canonical/OG URLs and sitemap origin use www.ntrek.dev. Starter blog routes
are retired rather than publishing placeholder posts.
