# TOOL PAGE WORKFLOW

Use this workflow whenever the user asks to create or substantially modify a
tool landing page.

The permanent rules in `.agents/rules/` are mandatory. This file defines the
execution sequence.

## INPUT

Expected request:

TOOL: <tool-slug>

Example:

TOOL: age-calculator

Process only that tool unless the user explicitly requests a batch.

## PHASE 1 — INSPECT

Read:
- actual tool component
- calculation/processing logic
- validation
- inputs
- outputs
- existing translations
- registry entry
- category
- existing content
- related tools
- shared ToolLayout/ToolPanel/ToolResult
- metadata/SEO helpers

Read an existing finished tool to copy project conventions.

## PHASE 2 — FUNCTIONALITY

Determine:
- exact inputs
- exact outputs
- formulas
- algorithms
- units
- limits
- edge cases
- errors
- browser/client dependencies
- privacy/data behavior

Fix genuine bugs that affect correctness or usability.

Do not invent functionality.

## PHASE 3 — SEO RESEARCH

For each of the 16 locales:
1. Research actual search terminology.
2. Determine primary keyword.
3. Collect secondary/long-tail keywords.
4. Research PAA/related questions.
5. Analyze top results.
6. Identify search intent.
7. Identify local terminology.
8. Identify content gaps.

Save to:

/seo/keywords/[tool-slug].json

Never fabricate unavailable metrics.

## PHASE 4 — CONTENT

Write complete final content for all 16 locales.

Do not stop at metadata.

Each locale must contain the complete landing-page content required by the
tool-development rule.

Write natively for the locale rather than translating an English page.

Adapt:
- terminology
- examples
- units
- currency
- dates
- tone
- FAQs
- regional conventions

## PHASE 5 — LANDING PAGE

Use the shared ToolLandingPage.

Order:
1. Breadcrumb
2. H1 + value proposition
3. Working tool above the fold
4. Trust strip where true
5. What is it?
6. How to use
7. How it works
8. Worked example
9. Result interpretation
10. Use cases
11. Tips/limitations
12. FAQ
13. Related tools
14. Popular tools
15. CTA/disclaimer

## PHASE 6 — IMPLEMENTATION

Implement:
- content files
- UI translations
- registry
- category
- related tools
- reciprocal links
- metadata
- canonical
- hreflang
- JSON-LD
- sitemap
- localized slugs if justified
- redirects if URLs change
- language switcher

Keep marketing content server-rendered.

Keep only interactive tool behavior in Client Components.

## PHASE 7 — LOCALIZATION QA

Verify all 16:
- content exists
- translations exist
- no empty strings
- no accidental English
- correct formatting
- Arabic RTL
- Japanese/Korean behavior
- correct locale routing

Run:

npm run check:locales

## PHASE 8 — FUNCTIONAL QA

Test:
- valid input
- empty input
- invalid input
- extreme input
- boundary input
- reset
- copy where applicable
- mobile layout
- keyboard operation
- errors

## PHASE 9 — SEO QA

Verify:
- unique title
- unique meta description
- unique H1
- canonical
- hreflang reciprocity
- sitemap
- robots
- OG
- structured data
- internal links
- localized URLs

## PHASE 10 — BUILD

Run the project's relevant:
- typecheck
- lint
- test
- production build
- locale checks

Do not claim success without actually running available checks.

## PHASE 11 — FINAL REPORT

Report:
1. Tool summary
2. Files changed
3. Functionality fixes
4. All 16 locale content status
5. SEO research status
6. QA checklist PASS/FAIL
7. Assumptions
8. Native-speaker review needs
9. Manual follow-up actions

Never report a skipped check as PASS.
