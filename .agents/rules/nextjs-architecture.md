---
trigger: glob
globs: "app/**/*.tsx, app/**/*.ts, content/**/*.json, lib/**/*.ts, messages/**/*.json, seo/**/*.json"
description: "Apply the Antigravity Tool Website Next.js server/client, localization, SEO, and content architecture rules."
---

# NEXT.JS TOOL ARCHITECTURE

## SERVER COMPONENTS

Keep landing-page marketing content server-rendered.

Server-render:
- metadata
- breadcrumbs
- H1
- hero
- SEO sections
- feature content
- FAQs
- related tools
- popular tools
- structured data
- internal links

## CLIENT COMPONENTS

Use Client Components only for genuine browser interactivity:
- form state
- calculations
- event handlers
- clipboard
- local session history
- share interactions
- interactive controls

Do not make the entire landing page a Client Component just because the
interactive tool is client-side.

Preferred architecture:

ToolLandingPage
├── Breadcrumb
├── Hero
├── ToolWorkspace (client)
├── SEO content
├── FAQ
├── RelatedTools
└── CTA

## CONTENT SEPARATION

UI translations:
messages/[locale].json

SEO/marketing content:
content/tools/[slug]/[locale].json

Do not place long marketing copy into UI translation files.

## REGISTRY

Tool metadata belongs in:
lib/tools/registry.ts

Categories belong in:
lib/tools/categories.ts

Follow existing registry conventions before adding fields.

## LOCALIZATION

Use the route locale and existing i18n system.

Never hardcode user-visible text.

All user-visible strings must have keys in all 16 locales.

## RTL

Arabic must use correct RTL layout and logical CSS properties.

Do not manually create separate Arabic components unless genuinely required.

## CJK

For Japanese/Korean text-processing tools, use Intl.Segmenter or an equivalent
appropriate segmentation strategy.

## SEO

Metadata must be generated on the server.

Canonical URLs must self-reference the current locale.

Hreflang must be reciprocal and only reference published/indexable pages.

Structured data must represent visible content only.

## PERFORMANCE

Avoid unnecessary hydration.

Avoid large client bundles.

Keep the initial tool workspace usable without loading unnecessary below-fold
features.

## ACCESSIBILITY

Interactive client components must remain:
- keyboard accessible
- properly labeled
- screen-reader friendly
- focus-visible
- error accessible
