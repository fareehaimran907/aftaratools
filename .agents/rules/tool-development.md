---
trigger: always_on
description: "Mandatory rules for creating, modifying, fixing, refactoring, localizing, designing, or reviewing any tool in the Antigravity Tool Website."
---

# TOOL DEVELOPMENT RULES

These rules apply EVERY TIME you create a new tool or modify an existing one,
including small edits. A tool is not "done" until every checklist item below
passes. Do not ask whether to follow them; always follow them.

## PROJECT FACTS

- Next.js App Router, TypeScript, Tailwind, Radix/shadcn.
- Tool logic is client-side; SEO/marketing content should be server-rendered.
- Routes: app/[locale]/[tool]/page.tsx
- Tool metadata: lib/tools/registry.ts, lib/tools/categories.ts
- Shared UI: ToolLayout, ToolPanel, ToolResult
- Locales: en, ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
- UI strings: messages/[locale].json; en.json is the source of truth.
- Page/SEO content: content/tools/[slug]/[locale].json
- Glossary: /seo/glossary/[locale].json
- Keyword research: /seo/keywords/[tool-slug].json

## CORE PRINCIPLES

- The real codebase is the source of truth.
- Read existing conventions before implementing.
- Do not invent tool functionality, formulas, statistics, rankings, reviews,
  sources, privacy claims, or SEO metrics.
- Do not change unrelated tools.
- Never publish thin, empty, placeholder, or untranslated content.
- A tool is incomplete until the completion checklist passes.
- Prefer shared components and existing design tokens over one-off systems.

## NEW TOOL

1. Read registry.ts, categories.ts, shared UI, and an existing finished tool.
2. Build the tool component with correct logic, validation, edge cases, and errors.
3. Register slug, category, icon, related tools, and popular flag if applicable.
4. Research SEO/search intent for all 16 locales.
5. Write complete production-ready content for all 16 locales.
6. Add all required UI strings to all 16 message files.
7. Wire category, related, popular, homepage, sitemap, hreflang, metadata,
   structured data, and internal links.
8. Run all QA and completion checks.

## EXISTING TOOL

For any bug fix, feature, UI change, refactor, or content change:

1. Read the current component, registry entry, category, and content first.
2. Make only the necessary change.
3. If behavior, inputs, outputs, formulas, labels, or steps change, update
   affected SEO content in ALL 16 locales.
4. New/renamed UI strings: add to en.json first, then all other locales.
5. Audit the landing page against the completion checklist.
6. Run all QA checks.

## LOCALIZATION

- Never hardcode user-visible text.
- Every label, placeholder, button, error, tooltip, aria-label, unit name, and
  result text must come from messages/[locale].json.
- Every required key must exist in all 16 locales and have a non-empty value.
- Preserve placeholders, HTML tags, and key structure.
- Use native-quality transcreation, not literal translation.
- Use /seo/glossary/[locale].json for consistent terminology.
- pt = pt-BR unless documented research supports another market.
- ar = Modern Standard Arabic and RTL.
- hi = Devanagari, with natural Hinglish search terms where appropriate.
- es must use one documented regional variant consistently.
- Adapt examples, currency, units, dates, number formatting, and tone.
- Use Intl APIs for locale formatting; never manually build localized numbers.
- Use logical CSS properties for RTL.
- Keep URLs, code, JSON, hashes, and technical identifiers LTR.
- For Japanese/Korean text tools, use Intl.Segmenter where appropriate.
- Country-specific tools must not present one country's rules as universal.
- Run `npm run check:locales` after changes and require it to pass.

## MANDATORY MULTILINGUAL CONTENT

For every NEW tool, all 16 files must exist and contain complete final content:

content/tools/[slug]/en.json
content/tools/[slug]/ar.json
content/tools/[slug]/bn.json
content/tools/[slug]/de.json
content/tools/[slug]/es.json
content/tools/[slug]/fr.json
content/tools/[slug]/hi.json
content/tools/[slug]/id.json
content/tools/[slug]/it.json
content/tools/[slug]/ja.json
content/tools/[slug]/ko.json
content/tools/[slug]/nl.json
content/tools/[slug]/pl.json
content/tools/[slug]/pt.json
content/tools/[slug]/ru.json
content/tools/[slug]/tr.json

Each locale must contain actual production-ready website copy, not merely
translated metadata or placeholders.

Required content includes, where applicable:
- SEO metadata
- H1
- hero/value proposition
- intro
- what-is section
- how-to-use
- how-it-works
- worked example
- result interpretation
- features
- use cases
- tips
- limitations
- FAQ
- related tools
- CTA
- disclaimer
- image alt text
- OG image text

## TRANSLATION SAFETY

### New tools

All required user-visible strings and SEO content must be complete in all 16
locales. Never leave English placeholders, TODO, TBD, empty values, or
machine-translation placeholders.

### Existing tools

Do not rewrite unrelated existing translations merely because they could be
improved. If an unrelated existing translation looks wrong, report it as
"suspect" instead of silently changing it.

If the current change makes a translation inaccurate, update it in all 16
locales. Missing required translations must be added immediately.

## SEO CONTENT

Each locale has unique content researched with that locale's own search
terminology, not translated English keywords.

Required fields:
- seoTitle
- metaDescription
- h1
- primaryKeyword
- secondaryKeywords
- slug
- intro/value proposition
- whatIs
- howToUse
- howItWorks
- workedExample
- resultInterpretation where relevant
- useCases
- tipsAndLimitations
- faq
- relatedTools
- disclaimer where relevant
- lastReviewed
- imageAlt
- ogImage text

Rules:
- Use only researched keywords.
- If volume data is unavailable, write "not available"; never invent it.
- Primary keyword should naturally appear in title, H1, first 100 words,
  relevant H2, meta description, URL slug where appropriate, and image alt.
- No keyword stuffing.
- Content must be original and genuinely useful.
- Never invent claims, statistics, sources, or reviews.
- Typical content target: 800–1,500 words for finance/health/education and
  500–1,000 for simple utilities, but never pad content to hit a number.
- If research has not been completed, research first and save:
  /seo/keywords/[tool-slug].json

## LANDING PAGE STRUCTURE

Use the shared ToolLandingPage.

Order:
1. Breadcrumb
2. H1 + one-sentence value proposition + working tool above the fold
3. Trust strip only where claims are true
4. What is [tool]?
5. How to use
6. How it works + worked example
7. Result interpretation
8. Use cases
9. Tips and limitations
10. FAQ
11. Related tools
12. Popular tools
13. Closing CTA + disclaimer

Marketing content must use the shared template. Do not create per-tool
marketing components unless a genuine tool-specific interactive component is
required.

## DESIGN

- Keep the shared design system, tokens, dark mode, and typography.
- Use category accent color and icon.
- Make each tool feel distinctive without breaking brand consistency.
- Avoid excessive gradients, neon colors, glassmorphism, 3D, animation, or
  visual clutter.
- Large readable inputs.
- Clear result card with copy/reset actions where applicable.
- Responsive from 320px upward.
- Accessible labels, ARIA, focus states, AA contrast, keyboard operation.
- Do not let SEO content push the working tool below the fold.

## INTERNAL LINKING

- 4–6 contextually relevant related tools.
- Same category first, then adjacent categories.
- Use localized descriptive anchor text.
- Popular tools come from the registry popular flag, excluding the current tool.
- If A relates to B, maintain reciprocity where possible and within limits.
- Link from category page, 3+ related tools, and homepage popular list when
  flagged.
- Use correct locale prefix and localized slug.
- Update category lists/counts when tools are added or moved.
- No orphan pages.

## TECHNICAL SEO

Every locale page must have:
- unique metadata
- self-referencing canonical
- robots
- Open Graph
- og:locale and alternates
- Twitter card
- social image
- reciprocal hreflang
- x-default where appropriate
- server-rendered WebApplication/SoftwareApplication, FAQPage, BreadcrumbList
  only when valid and visible
- correct html lang and dir
- sitemap URL and locale alternates
- real crawlable language-switcher links

Only include published/indexable locales in hreflang and sitemap.

If a locale is not ready, use noindex and exclude it from hreflang/sitemap.
Never publish a thin page.

Do not auto-redirect based on IP or Accept-Language.

## NEXT.JS ARCHITECTURE

Prefer Server Components for:
- metadata
- hero
- breadcrumbs
- SEO content
- features
- FAQ
- related tools
- structured data
- internal links

Only the interactive tool workspace should normally be a Client Component.

Do not add "use client" to the whole landing page simply because the tool is
interactive.

Preferred:
ToolLandingPage (server)
├── SEO/content sections (server)
└── ToolWorkspace (client)

## PERFORMANCE

- Server-render all marketing content.
- Minimize client JavaScript and hydration.
- Lazy-load below-the-fold media where appropriate.
- Use per-script subsetted fonts with font-display: swap.
- Target LCP < 2.5s, INP < 200ms, CLS < 0.1 where realistically achievable.

## ACCESSIBILITY

Verify:
- keyboard navigation
- visible focus
- semantic HTML
- labels
- screen-reader-friendly results
- accessible errors
- accessible accordions
- sufficient contrast
- accessible language switcher

## RUNTIME SAFETY

The i18n fallback to en is only a safety net. Missing keys must still fail
the build/check. Never use fallback behavior as a reason to leave translations
missing.


## ROUTE LOCALE IS AUTHORITATIVE

The `[locale]` URL segment is the authoritative language for the entire page.

Examples:

/en/age-calculator → English
/de/age-calculator → German
/es/age-calculator → Spanish
/fr/age-calculator → French
/ar/age-calculator → Arabic + RTL
/ja/age-calculator → Japanese
/ko/age-calculator → Korean

A localized route must NEVER render the English UI merely because English is
the fallback locale.

### FULL PAGE LOCALIZATION

When a user opens `/de/[tool]`, every user-visible part of the page must be
German, including:

- navigation
- breadcrumbs
- category name
- tool title
- H1
- descriptions
- labels
- placeholders
- buttons
- validation/error messages
- helper text and tooltips
- result labels and result messages
- units where localization is applicable
- reset/copy/share controls
- FAQ
- related tools
- popular tools
- CTA
- footer
- language selector
- SEO content
- metadata
- structured-data language fields
- accessibility labels
- empty/loading states

English is allowed only where an English term is intentionally required, such
as a proper brand name, technical identifier, URL, code, standardized
abbreviation, or documented search keyword.

### LOCALE MUST FLOW THROUGH THE TOOL

The locale must be passed from the route into every component that renders
user-visible content.

Preferred:

app/[locale]/[tool]/page.tsx
        ↓
locale
        ↓
ToolLandingPage
        ↓
ToolWorkspace
        ↓
localized translation/content helpers

Do not allow ToolWorkspace to silently default to `en`.
Do not hardcode `locale = "en"` inside a tool component.

### VALID LOCALE CHECK

Before rendering:

1. Read `[locale]` from route params.
2. Verify it is one of the 16 supported locales.
3. Load `messages/[locale].json`.
4. Load `content/tools/[slug]/[locale].json`.
5. Pass locale into localized child components.
6. Set `<html lang>` correctly.
7. Set `dir="rtl"` for Arabic and `dir="ltr"` for the other supported locales
   unless a specific component requires otherwise.

Supported locales:

en, ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr

### NO ENGLISH FALLBACK FOR VALID LOCALES

English fallback is only a development safety mechanism for a missing key.

It must NOT make a valid localized route appear in English.

If `/de/age-calculator` renders English because a German translation is
missing, this is a localization failure.

Correct behavior:
- report the missing key
- fail locale validation
- add the missing German translation
- re-run the checks

Never silently accept English output on a valid non-English route.

### SEO CONTENT MUST MATCH ROUTE LOCALE

For `/de/age-calculator`, use:

content/tools/age-calculator/de.json

For `/fr/age-calculator`, use:

content/tools/age-calculator/fr.json

Never use the English SEO content file for a non-English route unless an
explicit implementation requirement says so.

### TOOL-SPECIFIC UI

The interactive tool must also use the active route locale.

For `/de/age-calculator`, user-visible strings such as date-of-birth,
calculate, years, months, days, reset, invalid date, and result labels must
come from the German locale.

Calculation logic remains language-independent; displayed text does not.

### NUMBER / DATE / CURRENCY FORMATTING

Use the active locale with Intl APIs, for example:

Intl.NumberFormat(locale)
Intl.DateTimeFormat(locale)
Intl.RelativeTimeFormat(locale)

Never manually build localized number/date strings.

Currency must follow the tool's configured regional/currency rules and must not
be inferred solely from the language code.

### LANGUAGE SWITCHER

The language selector must preserve the current tool.

Example:

/en/age-calculator
→ /de/age-calculator
→ /fr/age-calculator
→ /ja/age-calculator

Use real crawlable `<a href>` links.

### HTML LANGUAGE

The root HTML element must match the route:

/de/* → lang="de"
/fr/* → lang="fr"
/ar/* → lang="ar"
/ja/* → lang="ja"

Arabic:
lang="ar"
dir="rtl"

Other supported locales:
dir="ltr"

### LOCALIZATION QA

Directly test every supported locale route.

The test must verify that the visible UI language matches the URL locale.

Example:

/de/age-calculator
Expected: German
Actual: English
Result: FAIL

Do not mark the tool complete until this is fixed.

Add these to the completion checklist:

[ ] `/en/[tool]` renders English
[ ] `/ar/[tool]` renders Arabic and RTL
[ ] `/bn/[tool]` renders Bengali
[ ] `/de/[tool]` renders German
[ ] `/es/[tool]` renders Spanish
[ ] `/fr/[tool]` renders French
[ ] `/hi/[tool]` renders Hindi
[ ] `/id/[tool]` renders Indonesian
[ ] `/it/[tool]` renders Italian
[ ] `/ja/[tool]` renders Japanese
[ ] `/ko/[tool]` renders Korean
[ ] `/nl/[tool]` renders Dutch
[ ] `/pl/[tool]` renders Polish
[ ] `/pt/[tool]` renders Portuguese
[ ] `/ru/[tool]` renders Russian
[ ] `/tr/[tool]` renders Turkish
[ ] No valid non-English locale silently falls back to English
[ ] Tool UI language matches the `[locale]` route
[ ] SEO content language matches the `[locale]` route
[ ] `<html lang>` matches the `[locale]` route
[ ] Arabic RTL is correct
[ ] Language switcher preserves the current tool

## COMPLETION CHECKLIST

Report every item as PASS or FAIL:

[ ] Tool works with valid, invalid, empty, and extreme inputs
[ ] No hardcoded user-visible strings
[ ] All 16 message locales complete; check:locales passes
[ ] All 16 SEO content files complete and schema-valid
[ ] Keyword research saved
[ ] Primary keyword placed correctly
[ ] Unique title, meta description, and H1 in every locale
[ ] FAQ with 6–10 useful items in every locale
[ ] Related tools and popular tools rendered
[ ] Related links are reciprocal where required
[ ] Registry/category updated
[ ] Canonical, hreflang, sitemap, OG, and JSON-LD correct
[ ] RTL Arabic verified
[ ] CJK Japanese/Korean verified where relevant
[ ] Responsive at 320px, tablet, desktop
[ ] Accessibility verified
[ ] Build passes
[ ] No critical console errors
[ ] Native-speaker review locales flagged for finance/health/tax/legal

## FINAL REPORT

Keep it short. Include:
- files created/changed
- checklist PASS/FAIL
- assumptions
- suspect translations
- locales requiring human review
- manual actions such as Search Console submission

## GLOBAL RULES

- Do not change unrelated tools.
- Never invent volumes, rankings, statistics, sources, or reviews.
- Never silently skip a required rule.
- If a rule cannot be followed, explain why in the final report.
