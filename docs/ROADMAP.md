# Delivery Roadmap

## Guiding principle

Launch a polished, useful institutional and editorial website first. Add sports-management features in later increments as the season and operational needs require them.

The phases below are proposed delivery slices, not fixed dates. The Tech Lead controls sequencing and acceptance.

## Phase 0 — Repository and project setup

### Work
- Create GitHub repository and local working copy.
- Initialise Astro with strict TypeScript and minimal starter.
- Commit package lockfile.
- Add `AGENTS.md` and project documentation.
- Add supplied brand assets and document their usage.
- Establish formatting/type-check/build commands.
- Configure basic GitHub Actions checks.
- Connect Cloudflare Pages preview/production deployment when ready.

### Acceptance
- Clean install works.
- Local development server runs.
- Production build succeeds.
- CI runs on pull requests.
- No unapproved framework or dependency is introduced.

## Phase 1 — Design foundation

### Work
- Translate supplied brand guidelines into design tokens.
- Establish typography, spacing, containers, and responsive rules.
- Implement base layout, header, navigation, and footer.
- Implement shared buttons, links, section headings, and image patterns.
- Establish metadata and SEO primitives.

### Acceptance
- Visual identity matches supplied materials.
- Header/navigation works across mobile, tablet, and desktop.
- Keyboard navigation and focus states work.
- No horizontal overflow.
- Components are reusable without over-abstraction.

## Phase 2 — MVP content and pages

### Work
- Configure Astro content collections for news and institutional content.
- Configure Pages CMS collections and media handling.
- Build homepage.
- Build news index and article template.
- Build institutional page template and agreed initial pages.
- Add contact/social details once approved.
- Add sitemap, robots, canonical URLs, and social metadata.

### Acceptance
- Editors can maintain agreed content through Pages CMS.
- Content schema validation works.
- New/updated editorial content triggers a successful deployment.
- All initial pages render correctly.
- No fabricated facts or placeholder content remains in production.
- Club representative approves content and visual identity.

## Phase 3 — Launch readiness

### Work
- Accessibility review.
- Responsive visual review.
- Performance and image optimisation.
- SEO and social preview validation.
- Analytics configuration if approved.
- Domain and redirect configuration.
- Production deployment verification.
- Editorial handover/documentation.

### Acceptance
- Production URL and domain work.
- HTTPS and redirects are correct.
- Main user journeys work.
- Build/deployment can be repeated.
- Editorial team understands publishing workflow.
- Launch approval is obtained.

## Phase 4 — Football data foundation (post-MVP)

### Work
- Confirm team/competition/season scope.
- Define JSON contracts and stable IDs.
- Add Zod schemas and cross-reference validation.
- Add match repository and domain services.
- Establish Git review workflow for match data.
- Add import/automation conventions.
- Decide static JSON output contract and versioning.

### Acceptance
- Invalid data fails CI.
- Referential integrity is checked.
- Canonical data is distinct from generated output.
- No actual match data is fabricated.
- Historical corrections and provenance are supported.

## Phase 5 — Sports features

### Work
- Fixtures and results.
- Match detail pages and reports.
- Competition standings calculated from completed matches.
- Player profiles and derived statistics.
- Match events and lineups if the data-entry process is agreed.
- Optional static JSON resources for other consumers.

### Acceptance
- Results and standings match verified source records and competition rules.
- Derived statistics are reproducible.
- Match pages and data are responsive and accessible.
- Editors/maintainers have a documented and sustainable data workflow.

## Ongoing quality gates

For every phase:
- Review the diff.
- Run relevant checks.
- Test responsive states.
- Validate accessibility implications.
- Update documentation when decisions change.
- Obtain Tech Lead acceptance before merging/publishing.
