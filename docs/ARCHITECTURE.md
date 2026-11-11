# Architecture — Nacional FC Website

## 1. Architecture summary

The public website is a statically generated Astro application.

| Concern | Choice |
|---|---|
| Framework | Astro |
| Language | TypeScript, strict mode |
| Rendering | Static Site Generation (SSG) |
| Editorial CMS | Pages CMS |
| Editorial formats | Markdown with structured frontmatter |
| Future football data | Individual JSON files |
| Validation | Zod / Astro content schemas and custom cross-reference validation |
| Source control | GitHub |
| Hosting | Cloudflare Pages |
| Database | None in the initial architecture |
| Runtime backend | None in the initial architecture |

The exact Astro, Pages CMS, Node.js, and deployment versions should be selected and recorded when the repository is initialised. Prefer supported stable releases and commit the package lockfile.

## 2. High-level flow

### Editorial content
1. An authorised editor signs in to Pages CMS.
2. The editor creates or updates Markdown content and uploads approved media.
3. Pages CMS commits changes to the configured GitHub branch.
4. GitHub/Cloudflare Pages triggers a build.
5. Astro validates content and generates static pages.
6. Cloudflare Pages publishes the new deployment.

A content change becomes public after a successful deployment; this is not a live database-backed publishing model.

### Future football data
1. An authorised technical maintainer or automation updates JSON source records in Git.
2. CI validates JSON schemas, identifiers, relationships, and domain rules.
3. Astro/build scripts calculate derived data.
4. Static pages and optional JSON resources are generated.
5. Cloudflare Pages publishes the result.

## 3. Repository organisation

The following is a target structure, not a requirement to create every directory immediately. Keep the actual repository lean and introduce directories when needed.

```text
website/
├── .github/
│   └── workflows/
├── docs/
├── public/
│   ├── brand/
│   └── images/
├── scripts/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── news/
│   │   ├── institutional/
│   │   └── ui/
│   ├── content/
│   │   ├── news/
│   │   └── institutional/
│   ├── data/
│   │   └── football/        # introduced in later phase
│   ├── domain/
│   │   └── football/        # introduced in later phase
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── .pages.yml
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Do not put all code in a single component. Avoid creating empty folders for speculative features.

## 4. Separation of concerns

- `src/content/`: editorial content managed through Astro content collections and Pages CMS.
- `src/data/`: canonical structured data, including future football JSON records.
- `src/domain/`: domain rules and calculations independent of UI.
- `src/components/`: reusable presentation components.
- `src/layouts/`: page-level composition and shared document structure.
- `src/pages/`: route definitions and page composition.
- `src/styles/`: design tokens, global styles, typography, and component-level styling where appropriate.
- `scripts/`: validation, imports, and generation tasks that run outside the browser.

Astro pages/components may call domain functions at build time. Domain calculations must not be embedded in markup components.

## 5. Astro content

Use Astro Content Collections for editorial content where appropriate. Define explicit schemas and validate frontmatter. News and institutional content should use Markdown/MDX only if there is a demonstrated need for MDX components; prefer Markdown for ordinary editorial writing.

Potential collections:
- `news`
- `institutional`

Player profiles may later be a collection or structured records, but this should be decided when that feature is scoped. Do not prematurely commit to a CMS editing model for sports data.

## 6. Pages CMS

Pages CMS edits repository files through GitHub. It is not a relational database and should not be treated as one.

The `.pages.yml` configuration must:
- Match the actual directory and file conventions.
- Expose only fields that editors should maintain.
- Provide required fields and sensible defaults.
- Configure media paths consistently with Astro's public asset paths.
- Avoid asking editors to enter derived values.
- Be validated against current Pages CMS documentation and actual UI behaviour before acceptance.

The small editorial team needs appropriate GitHub repository access. Confirm whether direct commits to the production branch or a review branch/PR workflow is appropriate before launch. Do not assume GitHub permissions map perfectly to CMS roles.

## 7. Styling and UI

Build an original design system using the official club identity. Use semantic HTML and reusable Astro components. The choice of CSS approach should be made during foundation work; avoid adding a framework solely by habit.

Keep JavaScript islands limited to genuinely interactive elements. Ordinary navigation, articles, and content should be statically rendered.

## 8. Static JSON resources (future phase)

The future football data model may produce static JSON resources under a versioned public path such as `/api/v1/`. These are generated build artifacts, not live API endpoints.

Canonical source records must remain separate from generated outputs. The website should render ordinary pages at build time rather than fetch JSON in the browser unnecessarily.

The precise output structure and whether generated resources live in `public/` or Astro-generated routes should be decided during the football-data phase.

## 9. Deployment and environments

- Local development: Astro dev server.
- Pull request/preview: use hosting preview deployments where configured.
- Production: Cloudflare Pages connected to the GitHub repository.
- Production build must be reproducible from the committed source and lockfile.
- Store secrets only in the hosting provider's secret/environment configuration; never commit them.
- Configure the production domain, redirects, headers, and caching deliberately.

## 10. Quality attributes

### Performance
- Optimise and appropriately size images.
- Use modern image formats where supported.
- Avoid unnecessary client JavaScript and third-party scripts.
- Use static generation and caching.
- Prevent layout shifts by reserving image dimensions/aspect ratios.

### Accessibility
- Semantic landmarks and heading hierarchy.
- Keyboard-operable navigation and controls.
- Visible focus indicators.
- Appropriate accessible names and alternative text.
- Sufficient colour contrast.
- Respect reduced-motion preferences.

### SEO
- Unique page titles and descriptions.
- Canonical URLs.
- Open Graph and social metadata.
- Sitemap and robots configuration.
- Structured data only where accurate and appropriate.
- Descriptive, stable URLs.

## 11. Architecture decision process

Any material change to framework, rendering mode, CMS, hosting, persistence, or data contracts requires Tech Lead approval. Record significant approved changes in this document or a dedicated Architecture Decision Record under `docs/decisions/`.
