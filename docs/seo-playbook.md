# Google SEO Playbook for Aftara Tools Platform

This document outlines the specific SEO strategies and technical implementations applied to this platform to maximize organic traffic and comply with Google's search policies (specifically regarding scaled content).

## 1. Localized URL Architecture (Hreflang)

**Implementation:**

- English is treated as the default root (`/age-calculator`) to preserve URL authority.
- Other languages use strict subdirectories (`/es/age-calculator`, `/ru/age-calculator`).
- Strict routing configuration in `src/i18n/routing.ts` ensures no infinite redirect loops.

**Why Google Likes It:**
Google explicitly recommends this structure. It avoids the duplicate content issues that arise from query-string-based translation (`?lang=es`) and clearly defines the targeted linguistic audience.

## 2. Preventing Scaled Content Penalties (YMYL & Utility)

**Implementation:**

- **No programmatic spam:** Every single tool (all 100) is a bespoke, hand-crafted React component solving the specific problem. No iframe embedding of third-party widgets.
- **YMYL Flagging:** Tools dealing with finance or health (e.g., `salary-calculator`, `bmi-calculator`) are explicitly flagged in `registry.ts` as `ymyl: true` to eventually trigger enhanced disclaimers, protecting against Google's Your Money or Your Life quality raters.

**Why Google Likes It:**
Google's March 2024 update specifically targeted "scaled content abuse." Building 100 thin pages using a single generic template would be flagged as spam. Providing 100 unique interactive components proves legitimate utility to the user.

## 3. Metadata & Server-Side Generation (SSG)

**Implementation:**

- **Static Generation:** The entire site (over 170+ pages across locales) is statically generated at build time (`generateStaticParams`).
- **Dynamic Metadata:** The `generateMetadata` function injects precise `<title>`, `<meta description>`, and `<link rel="alternate" hreflang="...">` tags based on the tool's registry entry.

**Why Google Likes It:**
SSG guarantees instant Time To First Byte (TTFB), acing Core Web Vitals. Googlebot does not need to execute heavy JavaScript to index the content or discover the localized alternates.

## 4. Internal Linking & Category Hubs

**Implementation:**

- **Category Hubs:** `src/app/[locale]/category/[category]/page.tsx` automatically aggregates tools by category.
- **Related Tools:** The `registry.ts` explicitly maps `relatedToolIds`, ensuring that contextually relevant internal links exist between similar tools (e.g., "Square Footage" links to "Paint Calculator").

**Why Google Likes It:**
Reduces crawl depth and distributes PageRank efficiently. It also keeps users on-site longer, signaling high engagement.

## 5. Next Steps for Hardening

To further cement rankings, the following should be executed post-launch:

1. **XML Sitemaps:** Generate dynamic `sitemap.xml` for each locale, mapped correctly.
2. **JSON-LD Structured Data:** Add `SoftwareApplication` or `WebApplication` schema to every tool page.
3. **Editorial Trust Pages:** Publish an "About Us" and "Methodology" page outlining how financial/health formulas are calculated to satisfy E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
