# 1. EXECUTIVE SUMMARY
Validation audit of 16-language tool content for the `tool-website` project.
All 126 tools were inspected across 16 locales (2016 files total) to validate translation completeness, language purity, slug localization, and character count requirements.

# 2. GLOBAL STATISTICS
- Total tools discovered: 126
- Total expected locale files: 2016
- Total existing locale files: 2016
- Total missing locale files: 0

- Total PASS: 147
- Total FAIL: 337
- Total WARNING: 1532

- Files with wrong language: 0
- Files with mixed language: 1845
- Files below 1500 characters: 337
- Files between 1501–1700 characters: 131
- Files above 1700 characters: 1548

- Total slug issues: 1375
- Total duplicate slugs: 0
- Total routing mismatches: 1375

# 3. COMPLETE TOOL MATRIX
*(✅ PASS | ❌ FAIL | ⚠️ WARNING)*

| Tool | EN | AR | BN | DE | ES | FR | HI | ID | IT | JA | KO | NL | PL | PT | RU | TR |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| age-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| area-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| average-calculator | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ |
| barcode-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| base64-encode-decode | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| basic-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| bcrypt-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| bedtime-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| binary-to-decimal | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| bionic-reading-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| bmi-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| bmr-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| board-foot-calculator | ✅ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| body-fat-calculator | ✅ | ❌ | ❌ | ❌ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ❌ | ❌ |
| break-even-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| calorie-calculator | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ⚠️ | ❌ |
| character-counter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| color-palette-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| color-picker | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| compound-interest-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| concrete-calculator | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ❌ |
| contrast-checker | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| cost-per-square-foot-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| countdown-timer | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| css-minifier | ✅ | ⚠️ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| currency-converter | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| data-storage-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| date-difference-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| days-between-dates | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| days-until-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| decimal-to-binary | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| decking-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| discount-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| emi-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| fence-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| final-grade-calculator | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ |
| flip-a-coin | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| fraction-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| gpa-calculator | ✅ | ⚠️ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ❌ |
| grade-calculator | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ |
| hash-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| height-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| hex-to-decimal | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| hex-to-rgb | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| hourly-to-salary-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| html-encode-decode | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| html-minifier | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| investment-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ❌ | ⚠️ | ⚠️ | ⚠️ |
| js-minifier | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| json-formatter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| jwt-decoder | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| length-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ⚠️ |
| loan-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| lorem-ipsum-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| macro-calculator | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ⚠️ | ❌ |
| markdown-editor | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| markup-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| md5-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| md5-hash-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| months-between-dates | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| morse-code-translator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| mortgage-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| mulch-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| number-base-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| overtime-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| pace-calculator | ✅ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ |
| paint-calculator | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| password-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| percentage-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| percentage-change-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| percentage-decrease-calculator | ✅ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| percentage-difference-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| percentage-increase-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| pin-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| plant-spacing-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| pomodoro-timer | ✅ | ✅ | ⚠️ | ⚠️ | ✅ | ✅ | ⚠️ | ✅ | ✅ | ⚠️ | ⚠️ | ⚠️ | ✅ | ✅ | ✅ | ✅ |
| profit-margin-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| qr-code-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| random-number-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| ratio-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ |
| rgb-to-hex | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| roi-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| roll-a-die | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| roman-numeral-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| running-distance-calculator | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ❌ |
| salary-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| salary-to-hourly-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| scientific-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| sha1-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| sha1-hash-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| sha256-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| sha256-hash-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| sha512-hash-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| simple-interest-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| sleep-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| speed-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| speed-distance-time-calculator | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ⚠️ | ❌ |
| spin-the-wheel | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| sql-formatter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| square-footage-calculator | ✅ | ❌ | ❌ | ⚠️ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| step-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| stopwatch | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| strong-password-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| tax-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| temperature-converter | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| test-grade-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| text-case-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| tile-calculator | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ❌ |
| time-difference-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| time-duration-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| time-zone-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| tip-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| truth-or-dare-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| unix-timestamp-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| url-encode-decode | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| uuid-generator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| volume-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| wake-up-time-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| water-intake-calculator | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ⚠️ | ⚠️ | ❌ | ❌ |
| weeks-between-dates | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| weight-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ |
| word-counter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| work-hours-calculator | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| world-time-converter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| xml-formatter | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| yes-or-no-wheel | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

# 4. MISSING LOCALE REPORT
TOOLS WITH MISSING LANGUAGE FILES
---------------------------------
No missing language files.
Total affected tools: 0

# 5. WRONG / MIXED LANGUAGE REPORT
TOOLS WITH WRONG / MIXED LANGUAGE CONTENT
-----------------------------------------
All 126 tools exhibit mixed language across non-English locales because the `relatedTools` array (and frequently the `slug` field) contains unlocalized English string values.
Total affected tools: 126
Total affected locale files: 1845

# 6. BELOW 1500 CHARACTER REPORT
TOOLS BELOW 1500 CHARACTERS
---------------------------
1. area-converter: ja, ko, nl, pl, pt, ru, tr
2. average-calculator: ar, bn, hi, id, it, pl, pt, ru, tr
3. barcode-generator: ja, ko
4. base64-encode-decode: ja, ko
5. basic-calculator: ja, ko
6. bionic-reading-converter: ja, ko
7. bmi-calculator: ja, ko
8. bmr-calculator: ja, ko, nl, pl, pt, ru, tr
9. board-foot-calculator: ar, bn, de, es, hi, id, it, ja, ko, nl
10. body-fat-calculator: ar, bn, de, hi, id, ko, nl, ru, tr
11. calorie-calculator: ar, bn, hi, id, it, ja, ko, nl, pl, tr
12. character-counter: ja, ko
13. color-palette-generator: ja, ko
14. color-picker: ja, ko
15. concrete-calculator: ar, bn, hi, id, it, ja, ko, nl, pl, ru, tr
16. contrast-checker: ja, ko
17. cost-per-square-foot-calculator: ja, ko
18. css-minifier: ja, ko
19. currency-converter: ar, bn, hi, ja, ko, nl, pl, pt, ru, tr
20. decking-calculator: ja, ko
21. emi-calculator: ja, ko
22. fence-calculator: ja, ko
23. final-grade-calculator: ar, bn, ja, ko, nl, tr
24. flip-a-coin: ja, ko
25. gpa-calculator: bn, hi, id, it, ja, ko, nl, pl, pt, tr
26. grade-calculator: ar, bn, hi, id, it, nl, pl, pt, ru, tr
27. hash-generator: ko
28. height-converter: ja, ko, nl, pl, pt, ru, tr
29. hex-to-rgb: ja
30. hourly-to-salary-calculator: ja, ko
31. html-encode-decode: ja, ko
32. investment-calculator: ja, ko, pl
33. js-minifier: ja, ko
34. jwt-decoder: ja, ko
35. length-converter: ja, ko, ru
36. loan-calculator: ja
37. lorem-ipsum-generator: ja, ko
38. macro-calculator: ar, bn, id, ja, ko, nl, pl, tr
39. md5-generator: ja, ko
40. md5-hash-generator: ja, ko
41. morse-code-translator: ja, ko
42. mulch-calculator: ja, ko
43. pace-calculator: ar, bn, de, fr, hi, id, it, nl, pl, pt, ru, tr
44. paint-calculator: ar, bn, hi, id, ja, ko, nl, pl, pt, ru, tr
45. password-generator: ja, ko
46. percentage-calculator: ja, ko
47. percentage-change-calculator: ja, ko
48. percentage-decrease-calculator: ar, bn, de, fr, hi, id, it, ko, nl, pl, pt, ru, tr
49. percentage-difference-calculator: ja, ko
50. percentage-increase-calculator: ja, ko
51. pin-generator: ja, ko
52. plant-spacing-calculator: ja, ko
53. qr-code-generator: ja, ko
54. random-number-generator: ja, ko
55. ratio-calculator: it, nl, pl, pt, ru, tr
56. rgb-to-hex: ja, ko
57. roll-a-die: ja, ko
58. running-distance-calculator: ar, bn, hi, id, it, ja, ko, nl, pl, ru, tr
59. salary-to-hourly-calculator: ja, ko
60. scientific-calculator: ja, ko
61. sha1-generator: ja, ko
62. sha1-hash-generator: ja
63. sha256-generator: ko
64. simple-interest-calculator: ja, ko
65. speed-distance-time-calculator: ar, bn, hi, id, ja, ko, nl, pl, tr
66. spin-the-wheel: ja, ko
67. sql-formatter: ja, ko
68. square-footage-calculator: ar, bn, es, hi, id, it, ko, nl, pl, pt, ru, tr
69. step-calculator: ja, ko
70. temperature-converter: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
71. test-grade-calculator: ja, ko
72. text-case-converter: ja
73. tile-calculator: ar, bn, hi, id, ja, ko, nl, pl, ru, tr
74. truth-or-dare-generator: ja, ko
75. url-encode-decode: ja, ko
76. water-intake-calculator: ar, bn, hi, id, ja, ko, nl, ru, tr
77. weight-converter: hi, ja, ko, pl, pt, ru, tr
78. word-counter: ja, ko
79. xml-formatter: ja, ko
80. yes-or-no-wheel: ja, ko

Total affected tools: 80
Total affected locale files: 337

# 7. BORDERLINE 1501–1700 CHARACTER REPORT
- area-converter: fr, id, it
- average-calculator: de, es, fr
- board-foot-calculator: fr
- body-fat-calculator: es, fr, it, pl, pt
- calorie-calculator: de, es, fr, pt, ru
- concrete-calculator: de, es, fr, pt
- css-minifier: ar
- currency-converter: de, fr, id, it
- fence-calculator: ar
- final-grade-calculator: fr, hi, id, it, pl, pt, ru
- gpa-calculator: de, es, fr, ru
- grade-calculator: de, es, fr
- hash-generator: ja
- height-converter: ar, bn, hi, id, it
- hex-to-rgb: ko
- html-encode-decode: ar
- html-minifier: ja, ko
- investment-calculator: ar, bn, it, nl, pt, ru, tr
- length-converter: ar, bn, hi, id, nl, pl, pt, tr
- loan-calculator: ko
- lorem-ipsum-generator: ar
- macro-calculator: de, es, hi, it, pt, ru
- markdown-editor: ja, ko
- md5-generator: ar
- mortgage-calculator: ja, ko
- mulch-calculator: ar
- pace-calculator: es
- paint-calculator: de, es, it
- percentage-increase-calculator: ar, bn, pl
- plant-spacing-calculator: ar
- random-number-generator: ar
- running-distance-calculator: de, es, fr, pt
- sha1-generator: ar
- sha1-hash-generator: ko
- sha256-hash-generator: ja, ko
- sha512-hash-generator: ja, ko
- speed-distance-time-calculator: de, es, fr, it, pt, ru
- sql-formatter: ar
- square-footage-calculator: de, fr
- step-calculator: ar
- strong-password-generator: ja, ko
- text-case-converter: ko
- tile-calculator: de, es, fr, it, pt
- uuid-generator: ja, ko
- water-intake-calculator: de, es, fr, it, pl, pt
- weight-converter: ar, bn, id, it, nl
- xml-formatter: ar

# 8. SLUG AUDIT REPORT
A widespread issue exists where localized files retain the English slug. This is flagged as a Warning (if potentially intentional) or Fail (invalid chars).
Total slug issues: 1375

# 9. PER-LANGUAGE SUMMARY
- **English**: Checked: 126, Complete: 126, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 0, Slug Issues: 0
- **Arabic**: Checked: 126, Complete: 108, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 18, Slug Issues: 101
- **Bengali**: Checked: 126, Complete: 107, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 19, Slug Issues: 120
- **German**: Checked: 126, Complete: 121, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 5, Slug Issues: 79
- **Spanish**: Checked: 126, Complete: 123, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 3, Slug Issues: 78
- **French**: Checked: 126, Complete: 123, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 3, Slug Issues: 78
- **Hindi**: Checked: 126, Complete: 108, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 18, Slug Issues: 120
- **Indonesian**: Checked: 126, Complete: 109, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 17, Slug Issues: 83
- **Italian**: Checked: 126, Complete: 114, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 12, Slug Issues: 78
- **Japanese**: Checked: 126, Complete: 55, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 71, Slug Issues: 120
- **Korean**: Checked: 126, Complete: 54, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 72, Slug Issues: 120
- **Dutch**: Checked: 126, Complete: 104, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 22, Slug Issues: 86
- **Polish**: Checked: 126, Complete: 105, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 21, Slug Issues: 78
- **Portuguese**: Checked: 126, Complete: 112, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 14, Slug Issues: 78
- **Russian**: Checked: 126, Complete: 107, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 19, Slug Issues: 78
- **Turkish**: Checked: 126, Complete: 103, Missing files: 0, Wrong/Mixed: 0, <1500 chars: 23, Slug Issues: 78

# 10. TOOLS WITH ISSUES SUMMARY
Almost all tools have identical issues (unlocalized `relatedTools` and slugs). See detailed reports below.

# 11. PER-TOOL DETAILED REPORTS
**age-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: None
**area-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko, nl, pl, pt, ru, tr | Slug Issues: ar, bn, hi, ja, ko
**average-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, hi, id, it, pl, pt, ru, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**barcode-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**base64-encode-decode** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**basic-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**bcrypt-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**bedtime-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko
**binary-to-decimal** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**bionic-reading-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**bmi-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**bmr-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko, nl, pl, pt, ru, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**board-foot-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, de, es, hi, id, it, ja, ko, nl | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**body-fat-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, de, hi, id, ko, nl, ru, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**break-even-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko, nl
**calorie-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, hi, id, it, ja, ko, nl, pl, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**character-counter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**color-palette-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**color-picker** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**compound-interest-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, hi, ja, ko
**concrete-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, hi, id, it, ja, ko, nl, pl, ru, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**contrast-checker** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**cost-per-square-foot-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**countdown-timer** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, de, hi, ja, ko, nl
**css-minifier** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: None
**currency-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, hi, ja, ko, nl, pl, pt, ru, tr | Slug Issues: ar, bn, hi, ja, ko
**data-storage-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, hi, ja, ko
**date-difference-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko
**days-between-dates** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko
**days-until-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, hi, id, ja, ko
**decimal-to-binary** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**decking-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**discount-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko
**emi-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, hi, ja, ko, nl
**fence-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**final-grade-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, ja, ko, nl, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**flip-a-coin** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**fraction-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**gpa-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: bn, hi, id, it, ja, ko, nl, pl, pt, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**grade-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, hi, id, it, nl, pl, pt, ru, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**hash-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**height-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko, nl, pl, pt, ru, tr | Slug Issues: ar, bn, hi, ja, ko
**hex-to-decimal** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**hex-to-rgb** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**hourly-to-salary-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, hi, ja, ko
**html-encode-decode** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**html-minifier** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: None
**investment-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko, pl | Slug Issues: ar, bn, hi, ja, ko
**js-minifier** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**json-formatter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: None
**jwt-decoder** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**length-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko, ru | Slug Issues: ar, bn, hi, ja, ko
**loan-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja | Slug Issues: ar, bn, hi, ja, ko
**lorem-ipsum-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**macro-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, id, ja, ko, nl, pl, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**markdown-editor** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**markup-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko, nl
**md5-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**md5-hash-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**months-between-dates** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, hi, id, ja, ko
**morse-code-translator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**mortgage-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, hi, ja, ko
**mulch-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**number-base-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**overtime-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**pace-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, de, fr, hi, id, it, nl, pl, pt, ru, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**paint-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, hi, id, ja, ko, nl, pl, pt, ru, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**password-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**percentage-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**percentage-change-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**percentage-decrease-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, de, fr, hi, id, it, ko, nl, pl, pt, ru, tr | Slug Issues: ar, bn, hi, ja, ko
**percentage-difference-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**percentage-increase-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, hi, ja, ko
**pin-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**plant-spacing-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**pomodoro-timer** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, de, hi, ja, ko, nl
**profit-margin-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko
**qr-code-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: None
**random-number-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**ratio-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: it, nl, pl, pt, ru, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**rgb-to-hex** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**roi-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko, nl
**roll-a-die** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**roman-numeral-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**running-distance-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, hi, id, it, ja, ko, nl, pl, ru, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**salary-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko
**salary-to-hourly-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, hi, ja, ko
**scientific-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**sha1-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**sha1-hash-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**sha256-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**sha256-hash-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**sha512-hash-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**simple-interest-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: bn, hi, ja, ko
**sleep-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko
**speed-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, hi, ja, ko
**speed-distance-time-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, hi, id, ja, ko, nl, pl, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**spin-the-wheel** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**sql-formatter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**square-footage-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, es, hi, id, it, ko, nl, pl, pt, ru, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**step-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**stopwatch** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, id, ja, ko, nl
**strong-password-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**tax-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**temperature-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | Slug Issues: ar, bn, hi, ja, ko
**test-grade-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**text-case-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**tile-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, hi, id, ja, ko, nl, pl, ru, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**time-difference-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, hi, id, ja, ko
**time-duration-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, hi, ja, ko
**time-zone-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko
**tip-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko
**truth-or-dare-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**unix-timestamp-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko, nl
**url-encode-decode** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**uuid-generator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**volume-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, hi, ja, ko
**wake-up-time-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko
**water-intake-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ar, bn, hi, id, ja, ko, nl, ru, tr | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**weeks-between-dates** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, hi, id, ja, ko
**weight-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: hi, ja, ko, pl, pt, ru, tr | Slug Issues: ar, bn, hi, ja, ko
**word-counter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**work-hours-calculator** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr
**world-time-converter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: None | Slug Issues: bn, hi, ja, ko
**xml-formatter** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: None
**yes-or-no-wheel** | Missing: None | Mixed: All non-EN (relatedTools) | Short: ja, ko | Slug Issues: ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr

============================================================
# 12. FINAL LOCALIZATION & SEO CONTENT HEALTH
============================================================

Tool Coverage: 126/126
Locale Coverage: 2016/2016

Language Purity: 8.5%
Character Requirement: 83.3%
Slug Health: 31.8%

Missing Translations: 0
Wrong-Language Files: 0
Mixed-Language Files: 1845
Below 1500 Characters: 337
Borderline Files: 131
Slug Issues: 1375

Overall Localization Health: 0.7/10
