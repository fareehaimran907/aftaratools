---
trigger: model_decision
description: "Apply whenever researching, writing, localizing, or reviewing SEO content for Antigravity Tool Website tool pages."
---

# MULTILINGUAL SEO RULES

For every requested tool, SEO content must be researched and written separately
for all supported locales.

Supported locales:
en, ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr

## SEARCH RESEARCH

Research each locale using that locale's actual search terminology.

Do not:
- translate English keywords and assume they are searched
- invent search volume
- invent keyword difficulty
- invent rankings
- invent CPC
- invent traffic

Research:
- primary keyword
- 8–15 secondary/long-tail keywords
- alternate names
- common misspellings
- native-script and Latin variants where relevant
- PAA questions
- related searches
- autocomplete where available
- search intent
- SERP features
- top ranking pages
- terminology used in that market

Save research to:

/seo/keywords/[tool-slug].json

## CONTENT

Every locale must have independently written, native-quality content.

Do not publish:
- literal translations
- placeholder content
- English left in non-English pages
- repetitive templated paragraphs
- keyword-stuffed copy

Adapt:
- terminology
- tone
- examples
- currency
- units
- dates
- number formatting
- cultural context
- regional terminology

## SEO FIELDS

Every locale requires:
- unique SEO title
- unique meta description
- unique H1
- primary keyword
- secondary keywords
- localized slug when research supports it
- image alt
- OG text

Primary keyword should naturally occur in:
- title
- H1
- first 100 words
- relevant H2
- meta description
- slug where appropriate
- image alt

## PAGE CONTENT

Write complete:
- introduction
- what-is
- how-to-use
- how-it-works
- worked example
- result interpretation
- use cases
- tips
- limitations
- FAQ
- related tools
- CTA
- disclaimers where required

FAQ:
- 6–10 questions
- based on actual search intent
- native to the locale
- useful and complete answers
- do not simply translate the English questions

## REGIONAL RULES

pt:
- default to pt-BR unless research supports another market

es:
- choose one regional variant based on research and remain consistent

ar:
- Modern Standard Arabic
- RTL
- appropriate Arabic search terminology

bn:
- determine Bangladesh vs West Bengal terminology from research

hi:
- Devanagari
- include natural Hinglish variants where users actually search that way

ja/ko:
- native terminology
- natural formality
- appropriate segmentation for text tools

## YMYL

For finance, medical, health, tax, legal, insurance, and similar tools:
- verify factual claims against authoritative sources
- do not invent statistics
- clearly state assumptions
- add appropriate disclaimers
- flag pages for human/native-speaker review
