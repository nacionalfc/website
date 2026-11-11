# Design System — Nacional FC

## 1. Design objective

Create an original, professional, responsive website for the official Nacional Futebol Clube of Manaus. WP Club Manager's Victory theme may inform sports-club information architecture, but the design must not be a literal reproduction.

The initial release is focused on Home, News, and Institutional pages. The design system must support future player, match, competition, and statistics components without a redesign.

## 2. Brand source of truth

The club's official visual identity and assets are supplied by the project owner.

Use the supplied:
- Official crest and logo variants.
- Royal-blue and white brand colours.
- Brand typography and font files/guidance.
- Approved photography and media.
- Clear-space, minimum-size, background, and other logo usage rules.

Do not invent official hex values. Do not redraw, approximate, recolour, distort, or replace the official crest. Do not present generic stock photography as an image of the club, its players, supporters, stadium, or history.

Keep source brand assets in a clearly documented location such as `public/brand/`, subject to the owner's asset organisation and licensing requirements.

## 3. Visual direction

- Royal blue and white are the principal identity colours.
- Use white and neutral surfaces to support readability.
- Use blue for navigation, calls to action, selected states, and identity elements.
- Use darker/lighter blue variants only where consistent with the supplied identity and contrast requirements.
- Avoid introducing unrelated accent colours.
- Prefer strong photography, confident typography, clear spacing, and restrained decoration.
- Avoid cluttered card grids, excessive gradients, gratuitous animation, and unnecessary carousels.
- The result should feel like the club's own digital platform, not a generic theme.

## 4. Typography

Use official brand typography if specified and supplied. Otherwise propose a readable web-safe/hosted pairing for Tech Lead approval.

Requirements:
- Strong, compact display headings where appropriate.
- Highly readable body text.
- Comfortable line length for articles (target approximately 65–80 characters per line on desktop).
- Responsive type sizes using fluid scaling where appropriate.
- Clear hierarchy for page title, section title, metadata, captions, and body copy.
- Tabular numerals for future scores/statistics where useful.

Do not load unnecessary font weights or external font services without approval.

## 5. Layout and responsive behaviour

Use a mobile-first approach. Define breakpoints based on layout needs rather than assuming a device list. A reasonable initial test matrix:
- Small mobile: 320–374px.
- Standard mobile: 375–767px.
- Tablet: 768–1023px.
- Desktop: 1024px and above.
- Wide desktop: 1440px and above.

Requirements:
- No horizontal overflow.
- Navigation works with touch and keyboard; never rely on hover.
- Content remains readable without zooming.
- Images maintain intended aspect ratios and do not distort.
- Grids collapse appropriately.
- Touch targets are comfortably sized.
- Header/footer remain usable on narrow screens.
- Do not hide essential content on mobile.

## 6. Initial page patterns

### Home
Recommended hierarchy:
1. Global header and navigation.
2. Hero using approved club photography/brand assets and a clear institutional message.
3. Featured/latest news.
4. Club introduction or institutional highlight.
5. Optional approved call to action.
6. Footer and contact/social information.

Do not display empty future-match or statistics widgets in the MVP. Leave room in the component architecture for their later introduction.

### News listing
- Clear page heading and introduction if approved.
- Featured article where editorially selected.
- Responsive article grid/list.
- Category and publication date.
- Pagination or another crawlable navigation approach when needed.
- Clear empty state only if appropriate.

### News article
- Clear headline, category, publication date, and byline.
- Featured image with appropriate alternative text.
- Readable article body.
- Optional related articles.
- Social metadata and canonical URL.
- Avoid distracting sidebars on mobile.

### Institutional pages
- Consistent page hero/title treatment.
- Clear heading hierarchy.
- Historical timeline only when verified dates and assets are supplied.
- Flexible text/image sections.
- Contact and facility information only when confirmed.

## 7. Components

Build reusable components where they express repeated design patterns, for example:
- Site header and footer.
- Responsive navigation.
- Container and section wrapper.
- Button/link styles.
- Section heading.
- News card and featured article.
- Article metadata/header.
- Breadcrumbs where useful.
- Institutional page hero.
- Image/caption treatment.

Do not create abstractions for one-off elements without a clear reuse case.

## 8. Accessibility

Target WCAG 2.2 AA.

- Use semantic HTML landmarks.
- Maintain logical heading order.
- Provide visible focus indicators.
- Ensure keyboard access to navigation and controls.
- Provide accessible names for icon-only controls.
- Supply useful alt text for informative images; use empty alt for decorative images.
- Check contrast for text, controls, and focus indicators.
- Respect `prefers-reduced-motion`.
- Do not communicate status by colour alone.
- Ensure mobile menu state is announced and operable.

## 9. Motion and interaction

Motion should be restrained and purposeful. Avoid autoplaying carousels and large motion effects. Any animation must respect reduced-motion preferences and must not delay access to content.

## 10. Image handling

- Prefer supplied, approved club imagery.
- Use Astro image optimisation where appropriate.
- Provide responsive image sizes and modern formats where supported.
- Reserve image dimensions/aspect ratios to prevent layout shift.
- Use descriptive filenames and meaningful alt text.
- Keep image focal points in mind for mobile crops.
- Respect copyright and usage permissions.

## 11. Performance

- Prefer static HTML and CSS.
- Minimise client-side JavaScript.
- Avoid large UI libraries for simple interactions.
- Avoid layout shifts.
- Lazy-load below-the-fold imagery where appropriate; do not lazy-load the primary LCP image indiscriminately.
- Measure performance on representative mobile conditions.

## 12. Design acceptance

Before acceptance:
- Compare desktop, tablet, and mobile screenshots.
- Verify the supplied identity assets are used correctly.
- Test navigation with keyboard, mouse, and touch.
- Check text and controls for contrast.
- Verify no horizontal overflow.
- Check image loading, cropping, and layout stability.
- Confirm that all copy and imagery are approved or clearly marked as non-production placeholders.
