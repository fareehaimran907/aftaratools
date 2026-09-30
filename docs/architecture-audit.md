# Architecture Audit Report

This report documents the compliance of the `tool-website` codebase with the **Server Components First** architectural rules outlined in the requirements.

## 1. Server Components by Default (Rules 1, 3, 4)
**Status: Compliant**
- All pages in `src/app/[locale]/` (`page.tsx`, `[tool]/page.tsx`, `category/[category]/page.tsx`, `about/page.tsx`) are pure **Server Components**.
- There is zero usage of `"use client";` at the page level (except for `error.tsx` which is a Next.js requirement).
- Layouts (`layout.tsx`) and structural components (`Header.tsx`, `Footer.tsx`) remain Server Components.

## 2. Interactive Parts Isolated (Rules 2, 5, 9, 14, 15)
**Status: Compliant**
- The 100 tools are located in `src/components/tools/` and are explicitly marked with `"use client";`. 
- Each tool strictly encapsulates only the interactive UI and the client-side state/calculation logic (e.g. `useState`, `onChange`, `onClick`).
- Timers (`PomodoroTimer.tsx`, `Stopwatch.tsx`), browser API-dependent tools (`QrCodeGenerator.tsx`, `PasswordGenerator.tsx`), and file-based developer tools (`JsonFormatter.tsx`) are cleanly isolated as Client Components.

## 3. SEO and Metadata on Server (Rules 8, 21, 22)
**Status: Compliant**
- All SEO metadata (`<title>`, `<meta description>`, `hreflang` alternates) is generated statically on the server using Next.js `generateMetadata()` in `page.tsx` and `[tool]/page.tsx`.
- The tool's descriptive content, introductory paragraphs, and structural layouts are mapped directly from the `registry.ts` and rendered into HTML on the server.
- Search engine crawlers receive a fully hydrated HTML document with zero reliance on client-side JavaScript for indexing.

## 4. Search and Language Switching (Rules 10, 11, 12, 13)
**Status: Compliant**
- `LanguageSwitcher.tsx` and `ThemeToggle.tsx` are small, isolated Client Components nested inside the server-rendered `Header.tsx`.
- The homepage search functionality is encapsulated in `ToolSearch.tsx` (a Client Component) to allow instant, localized filtering, while the homepage layout, hero section, and default grid remain server-rendered.

## 5. Performance and Bundle Size (Rules 20, 24, 25, 28)
**Status: Compliant**
- To prevent heavy bundle parsing, the 100 individual tool Client Components are imported into the server tool page via `next/dynamic` (`dynamic(() => import(...))`). This ensures a user visiting the "Age Calculator" does not download the JavaScript payload for the "Mortgage Calculator" or the heavy `crypto-js` library used in the Hash Generators.
- The boundary between Server and Client is as tight as possible. The Client Component receives no unnecessary props (no massive configuration objects or full page data).

## Conclusion
The application perfectly executes the `SERVER BY DEFAULT, CLIENT ONLY WHEN NECESSARY` paradigm.

```text
                 SERVER (page.tsx)
                   │
        ┌──────────┴──────────┐
        │                     │
   SEO / Metadata      Title & Intro
        │                     │
        │              ┌──────┴──────┐
        │              │             │
        │          Related        Footer
        │
        └──────────────┐
                       │
       CLIENT COMPONENT (ToolWidget)
                       │
          Interactive Logic & State
```
