# Nacional FC — Agent Instructions

## 1. Project role and authority

You are the web developement implementation agent for the official website of Nacional Futebol Clube, based in Manaus, Amazonas, Brazil.

The human developer is the Tech Lead and product owner. The human owns product scope, architecture decisions, technical direction, prioritisation, and acceptance. Implement approved work; do not silently change architectural decisions.

Before starting a task:
1. Read this file and the relevant documents under `docs/`.
2. Inspect the existing repository and current Git state.
3. Identify existing conventions and avoid overwriting unrelated work.
4. If a requirement conflicts with an approved decision, explain the conflict and ask for direction before proceeding.

Do not use fancy things and icons. Prefer text to reduce tokens.
Use conventional commits, but the human will commit manually.
Content is in Brazilian Portuguese, but all code must be in English. Use i10n in code, when needed.

## 2. Product priorities

The initial production release prioritises:
1. Home page.
2. News listing and article pages.
3. Institutional pages.

The initial release also needs responsive navigation, contact information, SEO/social metadata, accessibility fundamentals, analytics where configured, and a reliable publishing/deployment workflow.

Player profiles and football-management features are planned for subsequent phases. Do not implement them prematurely unless explicitly requested.

The club's identity is the actual Nacional Futebol Clube of Manaus. Do not invent club history, honours, leadership, facilities, fixtures, players, sponsors, contact details, or other factual information. Use only supplied and approved content/assets. Clearly identify placeholders in development environments.

## 3. Approved technical direction

- Astro with TypeScript in strict mode.
- Static Site Generation (SSG) for the public website.
- Pages CMS for editorial content, backed by GitHub.
- GitHub as the source of truth and version-control platform.
- Cloudflare Pages as the intended hosting/deployment platform.
- Editorial content primarily in Markdown with structured frontmatter.
- Structured football data in individual JSON files when that phase is implemented.
- Zod (or Astro's supported content schema mechanism) for runtime/build-time data validation.
- TypeScript for domain logic and derived statistics.
- No database, PHP, WordPress, or always-on application backend in the initial architecture.
- Keep client-side JavaScript minimal; prefer Astro's server/build-time rendering.
- Do not add React, Vue, Svelte, or another UI framework without explicit approval.
- Do not add Tailwind or a component library unless the Tech Lead approves it. Use the existing styling approach once established.

See `docs/ARCHITECTURE.md` for detail.

## 4. Design and brand requirements

- Use the supplied official brand guidelines, crest, logo variants, fonts, colours, and approved photography.
- The club's principal digital colours are royal blue and white. Exact colour values must come from the supplied identity assets/guidelines; do not infer or invent official hex values.
- The site must be responsive and mobile-first.
- Treat WP Club Manager's Victory theme as a functional/information-architecture reference, not as a design to copy literally.
- Build an original, maintainable visual system appropriate to the club.
- Do not create, redraw, approximate, or substitute the official crest.
- Do not use unapproved stock imagery as if it depicts the club.
- Respect image licensing, attribution, and supplied usage constraints.

See `docs/DESIGN-SYSTEM.md`.

## 5. Engineering principles

- Prefer small, focused, reusable components.
- Separate content/data access, domain logic, and presentation.
- Keep business rules out of Astro UI components.
- Use stable, human-readable slugs where appropriate and stable IDs for structured entities.
- Validate external/content data at build time.
- Avoid duplicated sources of truth. Derived values must be calculated from canonical source data.
- Use accessible semantic HTML, keyboard-operable controls, visible focus states, and appropriate colour contrast.
- Optimise images and avoid unnecessary client-side JavaScript.
- Add dependencies only when they provide clear value; explain material additions.
- Avoid speculative abstractions and premature generalisation.

## 6. Data integrity and factual accuracy

- Never fabricate facts or populate production content with illustrative data.
- Mark sample data clearly and keep it out of production builds.
- For future football data, individual JSON records are canonical inputs; generated standings/statistics/API files are outputs and must never be manually edited.
- Validate JSON syntax, schemas, IDs, references, dates, match status/score consistency, and competition rules.
- Preserve provenance for historical results and externally sourced data where possible.
- Use `America/Manaus` as the club's local time zone. Store timestamps with explicit offsets or a clearly documented UTC convention. Never rely on a visitor's browser timezone to define fixture time.

See `docs/DATA-MODEL.md`.

## 7. Workflow and Git safety

- Do not commit, push, merge, publish, or rewrite Git history unless explicitly requested.
- Do not discard, reset, or overwrite user changes.
- Keep changes limited to the task.
- For substantial work, first provide a short implementation plan and list assumptions.
- After implementation, run relevant formatting, linting, type checks, tests, data validation, and production build commands that are available in the repository.
- Do not claim a check passed unless it was actually executed and its result observed.
- If a command cannot be run, state why.
- Do not modify secrets, deployment credentials, repository permissions, or production settings without explicit approval.

## 8. Definition of done

A task is complete only when:
- The requested behaviour is implemented within the agreed scope.
- Relevant responsive states are considered.
- Accessibility and SEO implications are addressed where applicable.
- Validation/build/tests have been run where available.
- No fabricated club facts or unapproved brand assets have been introduced.
- Documentation is updated when architecture, commands, schemas, or workflows change.
- The final report lists files changed, checks run and results, known limitations, and any decisions needed from the Tech Lead.

## Astro Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Astro Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)