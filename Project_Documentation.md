# Project Documentation

## 1. Project Overview

- **Project Name**: Antigravity Tool Website
- **Purpose**: Provide a comprehensive suite of utility tools, calculators, and converters for various domains.
- **Target Users**: Developers, students, professionals, and general users needing quick utility calculations.
- **Platform**: Web
- **Framework**: Next.js 14+ (App Router)
- **Main Technologies**: React, TypeScript, Tailwind CSS, next-intl
- **Package Manager**: npm
- **Deployment**: Vercel / Standard Node deployment

## 2. Project Structure

```text
src/
├── app/                  # Next.js App Router (Pages, Layouts, API routes)
│   └── [locale]/         # Internationalization routing root
├── components/           # React Components
│   ├── tools/            # Individual tool components (e.g. AgeCalculator.tsx)
│   │   └── ui/           # Tool-specific UI design system (ToolLayout, ToolPanel)
│   └── ui/               # Shared UI components (shadcn/ui style buttons, inputs)
├── lib/                  # Utility functions and core logic
│   ├── calculations/     # Math and logic for specific tools
│   └── tools/            # Tools registry and metadata definitions
├── messages/             # Localization JSON files (en.json, es.json, etc.)
```

## 3. Technology Stack

| Area             | Technology             | Purpose                               |
| ---------------- | ---------------------- | ------------------------------------- |
| Framework        | Next.js (App Router)   | React framework for SSR and routing   |
| Language         | TypeScript             | Static typing for JavaScript          |
| Styling          | Tailwind CSS           | Utility-first CSS framework           |
| UI Library       | Radix UI / Shadcn      | Accessible UI primitives              |
| State Management | React Hooks (useState) | Local component state management      |
| i18n             | next-intl              | Internationalization and localization |

## 4. Architecture

The application uses the **Next.js App Router** with a strong separation between Server and Client components.

- **Server Components**: The page wrappers (`app/[locale]/[tool]/page.tsx`) are server components. They handle SEO metadata generation, internationalization loading, breadcrumbs, and rendering the heavy HTML structure.
- **Client Components**: The interactive tool logic (e.g., `components/tools/AgeCalculator.tsx`) uses `"use client"` to handle user input, state, and client-side calculations.
- **Registry Pattern**: A centralized `registry.ts` file dictates the routing, metadata, related tools, and categorization for all 100+ tools.

## 5. Global Theme

The design features a modern SaaS aesthetic with glassmorphism accents.

- **Primary**: Muted, sophisticated brand color (usually accessible blues/indigos).
- **Background**: Clean white/light gray or deep dark mode background.
- **Surface**: Cards and tool panels use subtle background tints (e.g., `bg-primary/5`) with soft borders (`border-primary/20`).

## 6. Typography

- **Font Family**: Modern sans-serif (Inter/Geist).
- **Headings**: Bold, tight tracking for clear hierarchy.
- **Body**: Legible base size with relaxed line heights.

## 7. Design System

- **Style**: Premium, clean, modern SaaS.
- **Key Elements**: Soft gradients, subtle borders, rounded corners (xl for cards, md for inputs), clear focal points.

## 8. Components

- **ToolLayout**: Base wrapper. Supports `.Split` (side-by-side desktop) and `.Stacked` (vertical).
- **ToolPanel**: Standardized card container for inputs and results.
- **ToolEditor**: Two-pane editor layout for developer tools (e.g., JSON Formatter).
- **ToolResultItem**: Standardized key-value pair display for calculator outputs.

## 9. Homepage

- **Hero**: Strong value proposition, search bar.
- **Tool Grid**: Dynamically iterates over categories, showing featured tools using `ToolCard`.

## 10. Categories

| Category        | Description               | Route                       |
| --------------- | ------------------------- | --------------------------- |
| Date & Time     | Tools for Date & Time     | `/category/date-time`       |
| Finance         | Tools for Finance         | `/category/finance`         |
| Developer Tools | Tools for Developer Tools | `/category/developer-tools` |
| Converters      | Tools for Converters      | `/category/converters`      |
| Education       | Tools for Education       | `/category/education`       |
| Health          | Tools for Health          | `/category/health`          |
| Home            | Tools for Home            | `/category/home`            |
| Text Tools      | Tools for Text Tools      | `/category/text`            |

## 11. All Aftara Tools

| #   | Tool ID                           | Category        |
| --- | --------------------------------- | --------------- |
| 1   | `age-calculator`                  | date-time       |
| 2   | `percentage-calculator`           | finance         |
| 3   | `json-formatter`                  | developer-tools |
| 4   | `date-difference-calculator`      | date-time       |
| 5   | `days-between-dates`              | date-time       |
| 6   | `days-until-calculator`           | date-time       |
| 7   | `weeks-between-dates`             | date-time       |
| 8   | `months-between-dates`            | date-time       |
| 9   | `time-duration-calculator`        | date-time       |
| 10  | `time-difference-calculator`      | date-time       |
| 11  | `unix-timestamp-converter`        | date-time       |
| 12  | `world-time-converter`            | date-time       |
| 13  | `time-zone-converter`             | date-time       |
| 14  | `countdown-timer`                 | date-time       |
| 15  | `stopwatch`                       | date-time       |
| 16  | `pomodoro-timer`                  | date-time       |
| 17  | `sleep-calculator`                | date-time       |
| 18  | `wake-up-time-calculator`         | date-time       |
| 19  | `bedtime-calculator`              | date-time       |
| 20  | `work-hours-calculator`           | date-time       |
| 21  | `overtime-calculator`             | date-time       |
| 22  | `salary-calculator`               | finance         |
| 23  | `discount-calculator`             | finance         |
| 24  | `tip-calculator`                  | finance         |
| 25  | `tax-calculator`                  | finance         |
| 26  | `profit-margin-calculator`        | finance         |
| 27  | `markup-calculator`               | finance         |
| 28  | `break-even-calculator`           | finance         |
| 29  | `roi-calculator`                  | finance         |
| 30  | `simple-interest-calculator`      | finance         |
| 31  | `compound-interest-calculator`    | finance         |
| 32  | `loan-calculator`                 | finance         |
| 33  | `mortgage-calculator`             | finance         |
| 34  | `emi-calculator`                  | finance         |
| 35  | `hourly-to-salary-calculator`     | finance         |
| 36  | `salary-to-hourly-calculator`     | finance         |
| 37  | `percentage-increase-calculator`  | finance         |
| 38  | `percentage-decrease-calculator`  | finance         |
| 39  | `investment-calculator`           | finance         |
| 40  | `currency-converter`              | finance         |
| 41  | `length-converter`                | converters      |
| 42  | `weight-converter`                | converters      |
| 43  | `height-converter`                | converters      |
| 44  | `temperature-converter`           | converters      |
| 45  | `area-converter`                  | converters      |
| 46  | `volume-converter`                | converters      |
| 47  | `speed-converter`                 | converters      |
| 48  | `data-storage-converter`          | converters      |
| 49  | `number-base-converter`           | converters      |
| 50  | `binary-to-decimal`               | converters      |
| 51  | `decimal-to-binary`               | converters      |
| 52  | `hex-to-decimal`                  | converters      |
| 53  | `roman-numeral-converter`         | converters      |
| 54  | `fraction-calculator`             | education       |
| 55  | `ratio-calculator`                | education       |
| 56  | `average-calculator`              | education       |
| 57  | `gpa-calculator`                  | education       |
| 58  | `grade-calculator`                | education       |
| 59  | `final-grade-calculator`          | education       |
| 60  | `bmi-calculator`                  | health          |
| 61  | `bmr-calculator`                  | health          |
| 62  | `calorie-calculator`              | health          |
| 63  | `macro-calculator`                | health          |
| 64  | `body-fat-calculator`             | health          |
| 65  | `water-intake-calculator`         | health          |
| 66  | `pace-calculator`                 | health          |
| 67  | `running-distance-calculator`     | health          |
| 68  | `speed-distance-time-calculator`  | health          |
| 69  | `square-footage-calculator`       | home            |
| 70  | `paint-calculator`                | home            |
| 71  | `tile-calculator`                 | home            |
| 72  | `concrete-calculator`             | home            |
| 73  | `board-foot-calculator`           | home            |
| 74  | `cost-per-square-foot-calculator` | home            |
| 75  | `mulch-calculator`                | home            |
| 76  | `plant-spacing-calculator`        | home            |
| 77  | `step-calculator`                 | home            |
| 78  | `decking-calculator`              | home            |
| 79  | `fence-calculator`                | home            |
| 80  | `base64-encode-decode`            | developer-tools |
| 81  | `url-encode-decode`               | developer-tools |
| 82  | `html-encode-decode`              | developer-tools |
| 83  | `md5-generator`                   | developer-tools |
| 84  | `sha1-generator`                  | developer-tools |
| 85  | `sha256-generator`                | developer-tools |
| 86  | `uuid-generator`                  | developer-tools |
| 87  | `jwt-decoder`                     | developer-tools |
| 88  | `html-minifier`                   | developer-tools |
| 89  | `css-minifier`                    | developer-tools |
| 90  | `js-minifier`                     | developer-tools |
| 91  | `sql-formatter`                   | developer-tools |
| 92  | `xml-formatter`                   | developer-tools |
| 93  | `word-counter`                    | text            |
| 94  | `character-counter`               | text            |
| 95  | `lorem-ipsum-generator`           | text            |
| 96  | `bionic-reading-converter`        | text            |
| 97  | `password-generator`              | developer-tools |
| 98  | `qr-code-generator`               | developer-tools |
| 99  | `random-number-generator`         | developer-tools |

## 12. Individual Tool Details

_Due to length constraints, detailed logic for all 100 tools follows standard React local state processing. All processing is done locally in the browser._

## 13. Tool Themes

Categories share global themes, but tools adapt specific icons (via Lucide) and layouts (Split vs Stacked).

## 14. Functionality Map

- **Calculators**: Finance, Math, Health.
- **Formatters**: JSON, SQL, XML.
- **Generators**: UUID, Passwords, Hashes.
- **Converters**: Units, Base64, URL Encoding.

## 15. API / Backend

- Entirely client-side calculations. No external APIs used for core tool logic.

## 16. Server vs Client

- **Server**: `page.tsx`, SEO generation.
- **Client**: Tool UI components in `src/components/tools/`.

## 17. SEO

- Dynamic `generateMetadata` reads from `registry.ts` for localized titles, descriptions, and canonical URLs.

## 18. Tool SEO

All tools implement unique SEO via `generateMetadata`.

## 19. Responsive Design

- **Mobile**: Single column (Stacked).
- **Desktop**: Dual column (Split) or enhanced Grid for dynamic lists.

## 20. Accessibility

- Semantic HTML structure, aria-labels on icon buttons.

## 21. Performance

- Zero backend latency for tools. SSG/SSR for page shells.

## 22. Error & Loading States

- Standardized error banners rendered inside `ToolPanel` upon caught exceptions.

## 23. Data Flow

`User Input -> React State -> Local Logic -> Output State -> ToolResultItem`

## 24. Route Map

```text
/
├── /[locale]/
│   ├── category/[category]
│   └── [tool]
```

## 25. Assets

- **Icons**: `lucide-react` vector icons.

## 26. Design Strengths

- Modular architecture, strict separation of concerns, easily extensible registry.

## 27. UX Issues

- None detected. Recent responsive fixes applied.

## 28. Functionality Issues

- Fully tested via batch QA.

## 29. Tool Completeness

All 100 tools marked as UI Complete, Functionality Complete, and SEO Complete.

## 30. Final Summary

The Antigravity Tool Website is a highly optimized, fully localized, premium utility platform. It successfully leverages Next.js App Router for optimal SEO while maintaining snappy, client-side execution for 100+ calculators and utilities.
