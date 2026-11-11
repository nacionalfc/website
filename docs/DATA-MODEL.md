# Content and Data Model

## 1. Purpose

This document defines the content/data boundaries for the Nacional FC website. The MVP uses editorial content. Structured football data is a later phase and is described here to guide compatible architecture without expanding the initial launch scope.

## 2. Two data domains

### Editorial content
Managed by authorised editors through Pages CMS and stored in GitHub:
- News articles.
- Institutional pages.
- Approved editorial images and media.

Use Markdown with structured frontmatter and Astro Content Collections schemas.

### Football domain data
Introduced after the MVP and maintained by technical maintainers, Git workflow, or automation:
- Clubs/teams.
- Seasons.
- Competitions.
- Matches.
- Match events.
- Players and (when required) roster membership.
- Derived standings and player statistics.

Use individual JSON source files, validated with Zod/TypeScript. Pages CMS is not expected to manage match data in the initial design.

## 3. Editorial content conventions

### News
Suggested fields:
- `title` — required string.
- `slug` — stable URL slug, or derive from filename using a documented convention.
- `publishedAt` — ISO 8601 timestamp with explicit offset, or a clearly documented date-only convention.
- `updatedAt` — optional timestamp.
- `summary` — short editorial summary.
- `category` — controlled string/enum once categories are agreed.
- `author` — approved author/byline.
- `featuredImage` — path to approved image.
- `featuredImageAlt` — meaningful alternative text.
- `draft` — boolean, if supported by the publishing workflow.
- `body` — Markdown content.

Avoid duplicate sources for the slug. Decide whether the filename or frontmatter is canonical and enforce it.

### Institutional pages
Suggested fields:
- `title`
- `slug`
- `description`
- `heroImage` (optional)
- `heroImageAlt` (optional)
- `order` (optional, for navigation/list ordering)
- `draft`
- `body`

Use approved, fact-checked institutional material only.

### Players (later phase)
Do not assume player profiles belong in the initial launch. When implemented, separate editorial biography/profile data from match-derived statistics. Avoid manually storing totals that can be derived from match records.

## 4. Football JSON design principles

When the football phase begins:
- Store one match per JSON file, grouped by season.
- Use stable IDs for entities and references.
- Use slugs for public URLs where appropriate.
- Store canonical source data only.
- Generate standings, aggregate statistics, and public JSON outputs.
- Never manually edit generated outputs.
- Validate schema and cross-file references in CI.
- Preserve historical records and provenance.
- Do not fabricate fixtures, scores, lineups, or player events.

Example target organisation:

```text
src/data/football/
├── clubs/
├── teams/
├── players/
├── seasons/
├── competitions/
└── matches/
    └── 2026/
```

The exact split between club and team entities should be finalised when the actual competition/team structure is confirmed. Avoid over-modelling if the initial scope is only the senior team.

## 5. Illustrative match contract (not real club data)

```json
{
  "id": "match-2026-example-001",
  "slug": "nacional-example-opponent",
  "seasonId": "2026",
  "competitionId": "competition-example",
  "status": "scheduled",
  "kickoff": "2026-11-21T16:00:00-04:00",
  "venue": {
    "name": "Venue name",
    "city": "Manaus",
    "state": "AM",
    "country": "BR"
  },
  "homeTeamId": "nacional-fc",
  "awayTeamId": "opponent-example",
  "score": null,
  "events": [],
  "lineups": null,
  "report": null,
  "source": {
    "type": "manual",
    "reference": null,
    "verified": false
  }
}
```

This is a schema-design illustration only. It is not a confirmed fixture or venue booking.

Suggested match statuses:
- `scheduled`
- `played`
- `postponed`
- `cancelled`
- `abandoned` (include only if required by competition operations)

A completed match must have a valid score. A scheduled/postponed/cancelled match must not be presented as having a final score. Define treatment of abandoned matches explicitly before implementing standings.

## 6. Time and dates

The club's local time zone is `America/Manaus` (UTC-4).

- Store match kickoff timestamps with explicit offsets, or use UTC consistently and convert for display.
- Do not store ambiguous local timestamps without a timezone convention.
- Display fixture times in the club's local timezone unless product requirements say otherwise.
- Editorial publication dates should use a consistent, documented convention.
- Test date formatting around timezone boundaries.

## 7. Validation

The future validation pipeline should check:

### File/schema validation
- Valid JSON.
- Required fields and allowed enum values.
- Correct primitive types.
- Valid ISO timestamps.
- Non-negative integer scores and event minutes.
- Status/score consistency.

### Cross-reference validation
- Every referenced season exists.
- Every competition exists.
- Every team exists.
- Every player referenced by an event/lineup exists.
- Home and away teams differ.
- IDs are unique.
- Match IDs and slugs are unique.
- Match competition/season associations are valid.

### Domain validation
- Only played matches contribute to standings.
- Competition points and tie-breakers are configurable per competition.
- Corrections to historical results retain provenance.
- Goals, own goals, penalties, shootout events, and player attribution are modelled consistently before player statistics are calculated.

## 8. Derived data

Derived outputs may include:
- Competition standings.
- Team form and results.
- Player appearances and goals.
- Top scorers.
- Season summaries.
- Static JSON resources for external consumers.

All derived outputs must be reproducible from canonical source records and domain rules. Do not edit them manually.

## 9. Static JSON endpoints

A versioned public path such as `/api/v1/` is a possible future output contract, for example:
- `/api/v1/matches/2026.json`
- `/api/v1/matches/2026/{match-id}.json`
- `/api/v1/competitions/{competition-id}/standings.json`
- `/api/v1/players/{player-id}/statistics.json`

These are static files generated during the build, not runtime APIs. Confirm exact route/output generation strategy when implementing the feature. Do not create empty or misleading endpoints in the MVP.
