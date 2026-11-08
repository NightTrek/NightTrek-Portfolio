# Case-study design review

## Direction

Preserve the portfolio’s dark background, mint accent, existing type families,
and numbered sections. Make the case studies read like a record of work rather
than a product landing page. This revision covers OpenAI/Codex, Cline, and Stable
Finance; it does not replace the homepage or older project pages.

- Shared case-study titles: 28px on mobile, 40px from 768px. Cline previously
  used 48/76px; Codex inherited 48/68px from the custom Tailwind scale.
- Body copy: 16/17px, 1.7 line height, with a bounded reading column.
- Role and dates accompany the introduction. Native section links, source
  links, and previous/next project navigation support scanning and review.
- Remove Codex’s full-height background artwork, slogan tiles, Cline’s fake
  terminal, and repeated glass cards. No invented screenshots replace them.
- Keep historical outcomes in context and distinguish Daniel’s contribution
  from team outcomes. The MCP marketplace comparison describes launch, not today.
- Preserve the public onboarding and enablement account without adding private
  customer processes, internal metrics, deal terms, or unsupported deliverables.

## References

These informed hierarchy and interaction choices, not a copied visual layout:

- Brittany Chiang: quiet role/date/project hierarchy and concrete work.
  https://brittanychiang.com
- Paco Coursey: restrained typography, ordinary section names, software links.
  https://paco.me
- Nielsen Norman Group: scannable project context, role, and supported outcomes.
  https://www.nngroup.com/articles/ux-design-portfolios/
- Vercel interface guidelines: native links, focus, touch targets, motion.
  https://vercel.com/design/guidelines
- WCAG reflow: narrow-screen review at 320 CSS pixels.
  https://www.w3.org/WAI/WCAG21/Understanding/reflow

## Regression checks

The route tests assert one page title, metadata, labeled section targets,
next-project navigation, the shared title scale, reduced-motion styles, and the
absence of the former Codex background/slogan. Browser review is still needed
for layout, scrolling, focus and navigation; source checks are not a substitute.

Shared interaction repairs include a 44px mobile menu target, visible keyboard
focus, selectable page text, reduced-motion support, and the Next.js 16 smooth
scroll declaration so route transitions do not scroll through a new page.
The global hover style no longer inserts a border that shifts links.
