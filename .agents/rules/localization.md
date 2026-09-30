---
trigger: always_on
---

# STRICT MULTILINGUAL LOCALIZATION & ENGLISH-CONTENT VALIDATION

This is a multilingual tools website. Every localized route MUST be fully
localized according to its active locale.

Do NOT consider a page localized simply because its URL/slug is translated.

## 1. NO ENGLISH FALLBACK ON LOCALIZED PAGES

When the user visits a localized route such as:

/es/...
/de/...
/fr/...
/it/...
/nl/...
/pl/...
/pt/...
/ru/...
/tr/...
/ko/...

the page MUST NOT display English user-facing text unless the text is
intentionally a brand name, technical identifier, standardized abbreviation,
or another explicitly approved exception.

For example, this is WRONG:

/es/calculadora-de-edad

H1:
"Free Online Age Calculator"

This is CORRECT:

/es/calculadora-de-edad

H1:
"Calculadora de Edad"

Likewise:

/de/altersrechner

WRONG:
"Free Online Age Calculator"

CORRECT:
"Altersrechner"

## 2. LOCALIZE THE ENTIRE PAGE

Localization applies to EVERY user-visible element, including:

- H1
- H2/H3 headings
- subtitles
- introductory paragraphs
- tool descriptions
- labels
- input placeholders
- buttons
- dropdown options
- tabs
- result labels
- validation messages
- error messages
- success messages
- reset/clear buttons
- copy/download/share buttons
- breadcrumbs
- navigation
- category names
- related tools
- FAQ questions
- FAQ answers
- examples
- instructions
- "How it works"
- "How to use"
- CTA text
- footer text
- tooltips
- aria-labels where user-visible/accessibility-relevant
- image alt text
- empty states
- loading states
- modal content
- confirmation messages

Do NOT leave individual English strings behind.

## 3. SEO MUST ALSO BE LOCALIZED

Every localized route MUST have locale-specific:

- `<title>`
- meta description
- canonical URL
- H1
- primary keyword
- secondary keywords
- Open Graph title
- Open Graph description
- image alt text
- structured-data text where applicable
- FAQ content

Do not simply translate the URL while keeping English SEO content.

Example:

EN:

Title:
"Free Online Age Calculator"

H1:
"Free Online Age Calculator"

ES:

Title:
"Calculadora de Edad Online"

H1:
"Calculadora de Edad"

DE:

Title:
"Altersrechner"

H1:
"Altersrechner"

The exact wording should follow natural terminology and search intent for
the target language.

## 4. DO NOT MECHANICALLY TRANSLATE SEO KEYWORDS

Do not assume that the English H1 should be translated word-for-word.

The localized version should use natural terminology used by people in that
language/market.

For example:

English:
"Free Online Age Calculator"

Spanish:
"Calculadora de Edad"

German:
"Altersrechner"

The wording may differ between locales while the underlying tool remains the
same.

## 5. TRANSLATION SOURCE OF TRUTH

All reusable UI strings MUST come from the locale translation system.

Example:

messages/en.json
messages/es.json
messages/de.json
messages/fr.json
messages/it.json
messages/nl.json
messages/pl.json
messages/pt.json
messages/ru.json
messages/tr.json
messages/ko.json

Never hardcode English user-facing strings directly inside components when
a localized translation key should be used.

WRONG:

<Button>Calculate Age</Button>

CORRECT:

<Button>{t("ageCalculator.calculate")}</Button>

## 6. TOOL-SPECIFIC CONTENT MUST BE LOCALIZED

Every tool has its own localized content.

For every tool and every supported locale, verify:

- tool name
- H1
- SEO title
- meta description
- introduction
- instructions
- input labels
- output labels
- buttons
- examples
- FAQ
- related tools
- CTA
- validation/errors

Do NOT use the English tool configuration as a fallback for localized
content when a translation is expected to exist.

## 7. DETECT ENGLISH LEFTOVERS

After implementing or modifying a localized page, scan the rendered page
for English text.

Examples of strings that must be detected if they appear unexpectedly:

- Free Online
- Calculator
- Converter
- Calculate
- Convert
- Copy
- Download
- Reset
- Clear
- Result
- Enter
- Select
- Date of Birth
- Age
- Years
- Months
- Days
- How It Works
- How to Use
- Frequently Asked Questions
- Related Tools
- Read More
- Learn More
- Next
- Previous
- Back
- Submit
- Search
- Tools
- Categories
- Home
- About
- Contact

Do NOT rely only on searching source files.

Check the ACTUAL RENDERED USER INTERFACE.

## 8. CHECK BOTH SERVER AND CLIENT COMPONENTS

The localization check MUST cover:

- Server Components
- Client Components
- shared components
- layouts
- metadata generation
- structured data
- dynamic tool components
- modals
- interactive calculators/converters
- validation logic
- error states
- loading states

A localized Server Component must not accidentally pass English strings
into a Client Component.

## 9. DYNAMIC TOOL CONTENT

If tool content is generated from a configuration/data object, the
configuration must support localization.

WRONG:

{
name: "Free Online Age Calculator",
description: "Calculate your age..."
}

when that same object is directly rendered for every locale.

CORRECT:

{
translations: {
en: {
name: "Free Online Age Calculator",
description: "Calculate your age..."
},
es: {
name: "Calculadora de Edad",
description: "Calcula tu edad..."
},
de: {
name: "Altersrechner",
description: "Berechne dein Alter..."
}
}
}

Use the active locale to select the appropriate content.

## 10. PREVENT SILENT ENGLISH FALLBACKS

Do NOT silently fall back to English for a translated string.

If a translation key is missing:

1. Detect the missing key.
2. Add the correct translation.
3. Verify the page again.
4. Only use English fallback for explicitly approved technical/brand
   exceptions.

A missing translation is a bug, not an acceptable fallback.

## 11. LOCALE CONSISTENCY

A page must not contain mixed-language content.

WRONG:

Spanish:
"Calculadora de Edad"

English:
"Calculate Age"

English:
"How It Works"

Spanish:
"Preguntas frecuentes"

This is a localization failure.

CORRECT:

Spanish:
"Calculadora de Edad"

"Calcular Edad"

"Cómo funciona"

"Preguntas frecuentes"

The same principle applies to every supported locale.

## 12. LANGUAGE-AWARE ROUTE VALIDATION

For every localized route:

1. Detect the locale from the route.
2. Load that locale's translations.
3. Render the page.
4. Verify all visible content.
5. Verify metadata.
6. Verify interactive states.
7. Verify error/empty/loading states.
8. Scan for unexpected English.
9. Fix missing translations.
10. Re-run the validation.

Example:

/en/age-calculator
→ English

/es/calculadora-de-edad
→ Spanish

/de/altersrechner
→ German

/fr/calculateur-age
→ French

Do not allow the route language and page language to differ.

## 13. BATCH VALIDATION FOR ALL TOOLS

This rule applies to ALL tools, not only one tool.

When implementing or updating the multilingual system, validate every
supported locale against every tool.

Conceptually validate:

100 tools × all supported locales

Do not fix only the tool currently being viewed.

If one common component contains English text, fix the shared component so
the correction applies to every tool.

## 14. FINAL ACCEPTANCE TEST

A localized page is NOT considered complete until all of the following are
true:

[ ] URL/slug matches the locale
[ ] H1 is localized
[ ] Page title is localized
[ ] Meta description is localized
[ ] Introduction is localized
[ ] Tool UI is localized
[ ] Buttons are localized
[ ] Inputs/placeholders are localized
[ ] Results are localized
[ ] Errors are localized
[ ] Loading/empty states are localized
[ ] FAQ is localized
[ ] Related tools are localized
[ ] Breadcrumbs are localized
[ ] Navigation is localized
[ ] Footer is localized
[ ] CTA is localized
[ ] Alt text is localized
[ ] Structured data is localized where applicable
[ ] No unexpected English remains
[ ] No mixed-language content remains
[ ] No missing translation keys remain
[ ] Interactive client components use the active locale
[ ] Server-rendered content uses the active locale
[ ] Metadata uses the active locale

## 15. IMPORTANT EXAMPLE

If the English page contains:

"Free Online Text Case Converter"

then the Spanish page MUST NOT show:

"Free Online Text Case Converter"

just because the tool itself is the same.

It must use the appropriate Spanish wording, for example:

"Convertidor de Mayúsculas y Minúsculas"

Similarly, German must use natural German terminology rather than retaining
the English phrase.

The underlying functionality, calculations, algorithms, component
architecture, and data structures may remain shared.

ONLY the user-facing content should change according to the active locale.

## GOLDEN RULE

A localized URL with English content is NOT a localized page.

The active locale must control the COMPLETE user-facing experience:

ROUTE
→ PAGE
→ SEO
→ H1
→ CONTENT
→ TOOL UI
→ RESULTS
→ ERRORS
→ FAQ
→ RELATED TOOLS
→ NAVIGATION
→ FOOTER
→ METADATA

Everything must match the active language.
