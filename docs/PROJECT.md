# Nacional FC Website — Project Brief

## 1. Project overview

Build the official public website for **Nacional Futebol Clube**, based in Manaus, Amazonas, Brazil.

The website will provide an authoritative digital presence for the club, with institutional information and editorial news at launch. Football-management functionality will be introduced incrementally as the sporting season approaches.

The implementation is an original Astro theme. WP Club Manager and its Victory theme are references for sports-club information architecture and feature expectations, not implementation dependencies or visual templates to copy.

## 2. Product goals

- Establish a professional, recognisable online presence for the club.
- Present accurate institutional information and club history.
- Allow authorised editors to publish news without developer involvement.
- Provide a responsive, accessible experience across mobile, tablet, and desktop.
- Establish a maintainable foundation for future player, fixture, result, competition, and statistics features.
- Keep infrastructure and operational complexity low.

## 3. Audiences

- Supporters and local community.
- Members and prospective members.
- Players, families, and staff.
- Press and media.
- Sponsors and commercial partners.
- Visitors seeking official club information.

## 4. Launch scope (MVP)

### Required
- Home page.
- News index/listing.
- Individual news article pages.
- Institutional pages, initially including club history and other approved information.
- Contact information once supplied; provisional social profile links use the owner-provided `nacional1913` handle.
- Responsive global header, navigation, and footer.
- Pages CMS editorial workflow for news and agreed institutional content.
- SEO metadata, canonical URLs, Open Graph/social metadata, sitemap, and robots configuration.
- Analytics if the club supplies/approves the relevant account and configuration.
- Production build and deployment pipeline.

### Explicitly deferred
- Player profiles and squad management.
- Fixtures, results, match centre, and match reports.
- Competition tables and player statistics.
- Live scores or real-time integrations.
- Member accounts, payments, e-commerce, ticketing, and other transactional features.
- A database or custom backend.

The deferred features must be anticipated architecturally without delaying the MVP.

## 5. Content and editorial ownership

Pages CMS is intended for non-technical editorial work, initially:
- News articles.
- Institutional pages.
- Potentially selected reusable editorial content such as homepage featured content, subject to the CMS schema and editing experience.

The initial editorial team is small (approximately 1–3 people). GitHub access and Pages CMS authentication/permissions must be considered when setting up the workflow.

Football records are not part of the initial Pages CMS workflow. When introduced, match data will be maintained as JSON through Git, reviewed changes, or automation.

## 6. Brand and visual identity

The club already has its visual identity and assets. The implementation must use the supplied official materials:
- Crest and logo variants.
- Official royal-blue and white colour values.
- Typography and brand guidelines.
- Approved photography and other media.
- Brand usage rules.

Do not infer exact colour values or recreate the crest. The final design should be original, modern, editorially clear, and recognisably Nacional FC.

## 7. Product principles

- Mobile-first responsive design.
- Content clarity over decoration.
- Strong club identity without generic sports-template styling.
- Fast static pages and minimal client-side JavaScript.
- Accessibility as a baseline requirement.
- Structured content and predictable URLs.
- No unnecessary infrastructure.
- Incremental delivery with a polished MVP before sports features.

## 8. Success criteria

The MVP is ready for launch when:
- All agreed pages are complete and populated with club-approved content.
- Editors can create, edit, preview/review as supported, and publish news through the agreed workflow.
- The site works at common mobile, tablet, and desktop viewport sizes.
- Navigation, forms/links, and interactive controls work with keyboard and touch.
- Production build and deployment succeed.
- SEO metadata and social previews are configured.
- No placeholder or fabricated club information remains.
- The club's authorised representative approves branding and content.
