# 100 Tools Platform

A fast, fully localized, highly-SEO-optimized platform hosting 100 free online tools.

## Architecture & Tech Stack

- **Framework**: Next.js 16 (App Router, React 19)
- **Styling**: Tailwind CSS v4, `shadcn/ui` conventions (Lucide React icons)
- **Internationalization**: `next-intl` (SSG and registry-based translations)
- **Routing**: `[locale]/[tool]/page.tsx` dynamic segments
- **Monetization**: Ready for Google AdSense (`<AdBanner />`, `<AdInContent />`)
- **Theme**: Light & Dark mode via `next-themes`

## Project Status

**100 / 100 Tools Implemented:**
- Date & Time (21)
- Finance (20)
- Unit Converters (13)
- Education & Math (6)
- Health & Fitness (9)
- Home & Construction (11)
- Developer Tools (14)
- Generators & Text (6)

## Setup & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (SSG generation)
npm run build
npm run start
```

## Adding a New Tool

1. Create a React component in `src/components/tools/YourTool.tsx`.
2. Register the tool metadata (including title, description for SEO) in `src/lib/tools/registry.ts`.
3. Add a dynamic import and `switch` case in `src/app/[locale]/[tool]/page.tsx` (`ToolWidget`).

## Localization

Translations are split into:
- Core UI elements (`messages/en.json`, `messages/es.json`, etc.)
- Tool specific metadata and introductory SEO content (stored directly in `src/lib/tools/registry.ts`).

Adding a language requires updating `src/i18n/routing.ts` and adding the locale messages.

## SEO Note

URLs are strictly formatted for optimal localized ranking (e.g., `/` for English, `/es/` for Spanish) with zero redirect chains, respecting Google's spam policies by ensuring each tool page provides a unique, highly usable calculator widget.
