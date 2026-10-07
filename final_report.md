# EXECUTIVE SUMMARY
This is a read-only validation audit of the 16-language tool content for the `tool-website` project.
All tools have been inspected across 16 supported locales to determine translation completeness, language purity, slug consistency, and character requirements.

# GLOBAL STATISTICS
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

# COMPLETE TOOL MATRIX

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

# MISSING LOCALE REPORT
TOOLS WITH MISSING LANGUAGE FILES
---------------------------------

No missing language files.

Total affected tools: 0
Total missing locale files: 0

# WRONG / MIXED LANGUAGE REPORT
TOOLS WITH WRONG / MIXED LANGUAGE CONTENT
-----------------------------------------

1. age-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

2. area-converter
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

3. average-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English

4. barcode-generator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

5. base64-encode-decode
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English

6. basic-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

7. bcrypt-generator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

8. bedtime-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English

9. binary-to-decimal
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

10. bionic-reading-converter
   ar:
      - slug → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[1] → English
   hi:
      - slug → English
   id:
      - slug → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[1] → English
   nl:
      - slug → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[1] → English

11. bmi-calculator
   ar:
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[1] → English
      - relatedTools[2] → English

12. bmr-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

13. board-foot-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English

14. body-fat-calculator
   ar:
      - slug → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[2] → English

15. break-even-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[2] → English

16. calorie-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English

17. character-counter
   ar:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English

18. color-palette-generator
   ar:
      - slug → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[1] → English
   id:
      - slug → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[1] → English
   nl:
      - slug → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[1] → English

19. color-picker
   ar:
      - relatedTools[2] → English
   bn:
      - relatedTools[2] → English
   de:
      - relatedTools[2] → English
   es:
      - relatedTools[2] → English
   fr:
      - relatedTools[2] → English
   hi:
      - relatedTools[2] → English
   id:
      - relatedTools[2] → English
   it:
      - relatedTools[2] → English
   ja:
      - relatedTools[2] → English
   ko:
      - relatedTools[2] → English
   nl:
      - relatedTools[2] → English
   pl:
      - relatedTools[2] → English
   pt:
      - relatedTools[2] → English
   ru:
      - relatedTools[2] → English
   tr:
      - relatedTools[2] → English

20. compound-interest-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[2] → English

21. concrete-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

22. contrast-checker
   ar:
      - slug → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[1] → English
   id:
      - slug → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[1] → English
   nl:
      - slug → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[1] → English

23. cost-per-square-foot-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English

24. countdown-timer
   ar:
      - relatedTools[2] → English
   bn:
      - relatedTools[2] → English
   de:
      - relatedTools[2] → English
   es:
      - relatedTools[2] → English
   fr:
      - relatedTools[2] → English
   hi:
      - relatedTools[2] → English
   id:
      - relatedTools[2] → English
   it:
      - relatedTools[2] → English
   ja:
      - relatedTools[2] → English
   ko:
      - relatedTools[2] → English
   nl:
      - relatedTools[2] → English
   pl:
      - relatedTools[2] → English
   pt:
      - relatedTools[2] → English
   ru:
      - relatedTools[2] → English
   tr:
      - relatedTools[2] → English

25. currency-converter
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

26. data-storage-converter
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

27. date-difference-calculator
   ar:
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[1] → English
      - relatedTools[2] → English

28. days-between-dates
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English

29. days-until-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

30. decimal-to-binary
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

31. decking-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

32. discount-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English

33. emi-calculator
   ar:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

34. fence-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

35. final-grade-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English

36. flip-a-coin
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

37. fraction-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

38. gpa-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

39. grade-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English

40. hash-generator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - seoTitle → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

41. height-converter
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English

42. hex-to-decimal
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

43. hourly-to-salary-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

44. html-encode-decode
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English

45. html-minifier
   ar:
      - relatedTools[2] → English
   bn:
      - relatedTools[2] → English
   de:
      - relatedTools[2] → English
   es:
      - relatedTools[2] → English
   fr:
      - relatedTools[2] → English
   hi:
      - relatedTools[2] → English
   id:
      - relatedTools[2] → English
   it:
      - relatedTools[2] → English
   ja:
      - relatedTools[2] → English
   ko:
      - relatedTools[2] → English
   nl:
      - relatedTools[2] → English
   pl:
      - relatedTools[2] → English
   pt:
      - relatedTools[2] → English
   ru:
      - relatedTools[2] → English
   tr:
      - relatedTools[2] → English

46. investment-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

47. js-minifier
   ar:
      - relatedTools[2] → English
   bn:
      - relatedTools[2] → English
   de:
      - relatedTools[2] → English
   es:
      - relatedTools[2] → English
   fr:
      - relatedTools[2] → English
   hi:
      - relatedTools[2] → English
   id:
      - relatedTools[2] → English
   it:
      - relatedTools[2] → English
   ja:
      - relatedTools[2] → English
   ko:
      - relatedTools[2] → English
   nl:
      - relatedTools[2] → English
   pl:
      - relatedTools[2] → English
   pt:
      - relatedTools[2] → English
   ru:
      - relatedTools[2] → English
   tr:
      - relatedTools[2] → English

48. json-formatter
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - secondaryKeywords[4] → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
      - ogImageText → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

49. jwt-decoder
   ar:
      - relatedTools[0] → English
   bn:
      - relatedTools[0] → English
   de:
      - relatedTools[0] → English
   es:
      - relatedTools[0] → English
   fr:
      - relatedTools[0] → English
   hi:
      - relatedTools[0] → English
   id:
      - relatedTools[0] → English
   it:
      - relatedTools[0] → English
   ja:
      - relatedTools[0] → English
   ko:
      - relatedTools[0] → English
   nl:
      - relatedTools[0] → English
   pl:
      - relatedTools[0] → English
   pt:
      - relatedTools[0] → English
   ru:
      - relatedTools[0] → English
   tr:
      - relatedTools[0] → English

50. length-converter
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English

51. loan-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

52. lorem-ipsum-generator
   ar:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English

53. macro-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

54. markdown-editor
   ar:
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[1] → English
      - relatedTools[2] → English

55. markup-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

56. md5-generator
   ar:
      - relatedTools[0] → English
   bn:
      - relatedTools[0] → English
   de:
      - relatedTools[0] → English
   es:
      - relatedTools[0] → English
   fr:
      - relatedTools[0] → English
   hi:
      - relatedTools[0] → English
   id:
      - relatedTools[0] → English
   it:
      - relatedTools[0] → English
   ja:
      - relatedTools[0] → English
   ko:
      - relatedTools[0] → English
   nl:
      - relatedTools[0] → English
   pl:
      - relatedTools[0] → English
   pt:
      - relatedTools[0] → English
   ru:
      - relatedTools[0] → English
   tr:
      - relatedTools[0] → English

57. md5-hash-generator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English

58. months-between-dates
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

59. morse-code-translator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

60. mortgage-calculator
   ar:
      - slug → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[2] → English
      - relatedTools[3] → English

61. mulch-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

62. number-base-converter
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English

63. overtime-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
   bn:
      - slug → English
      - relatedTools[0] → English
   de:
      - slug → English
      - relatedTools[0] → English
   es:
      - slug → English
      - relatedTools[0] → English
   fr:
      - slug → English
      - relatedTools[0] → English
   hi:
      - slug → English
      - relatedTools[0] → English
   id:
      - slug → English
      - relatedTools[0] → English
   it:
      - slug → English
      - relatedTools[0] → English
   ja:
      - slug → English
      - relatedTools[0] → English
   ko:
      - slug → English
      - relatedTools[0] → English
   nl:
      - slug → English
      - relatedTools[0] → English
   pl:
      - slug → English
      - relatedTools[0] → English
   pt:
      - slug → English
      - relatedTools[0] → English
   ru:
      - slug → English
      - relatedTools[0] → English
   tr:
      - slug → English
      - relatedTools[0] → English

64. pace-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English

65. paint-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English

66. password-generator
   ar:
      - slug → English
      - relatedTools[0] → English
   bn:
      - slug → English
      - relatedTools[0] → English
   de:
      - slug → English
      - relatedTools[0] → English
   es:
      - slug → English
      - relatedTools[0] → English
   fr:
      - slug → English
      - relatedTools[0] → English
   hi:
      - slug → English
      - relatedTools[0] → English
   id:
      - slug → English
      - relatedTools[0] → English
   it:
      - slug → English
      - relatedTools[0] → English
   ja:
      - slug → English
      - relatedTools[0] → English
   ko:
      - slug → English
      - relatedTools[0] → English
   nl:
      - slug → English
      - relatedTools[0] → English
   pl:
      - slug → English
      - relatedTools[0] → English
   pt:
      - slug → English
      - relatedTools[0] → English
   ru:
      - slug → English
      - relatedTools[0] → English
   tr:
      - slug → English
      - relatedTools[0] → English

67. percentage-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

68. percentage-change-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

69. percentage-decrease-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

70. percentage-difference-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

71. percentage-increase-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

72. pin-generator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

73. plant-spacing-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

74. profit-margin-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[2] → English

75. qr-code-generator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English

76. random-number-generator
   ar:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[1] → English
      - relatedTools[2] → English

77. ratio-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

78. rgb-to-hex
   ar:
      - relatedTools[2] → English
   bn:
      - relatedTools[2] → English
   de:
      - relatedTools[2] → English
   es:
      - relatedTools[2] → English
   fr:
      - relatedTools[2] → English
   hi:
      - relatedTools[2] → English
   id:
      - relatedTools[2] → English
   it:
      - relatedTools[2] → English
   ja:
      - relatedTools[2] → English
   ko:
      - relatedTools[2] → English
   nl:
      - relatedTools[2] → English
   pl:
      - relatedTools[2] → English
   pt:
      - relatedTools[2] → English
   ru:
      - relatedTools[2] → English
   tr:
      - relatedTools[2] → English

79. roi-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[2] → English

80. roll-a-die
   ar:
      - relatedTools[0] → English
   bn:
      - relatedTools[0] → English
   de:
      - relatedTools[0] → English
   es:
      - relatedTools[0] → English
   fr:
      - relatedTools[0] → English
   hi:
      - relatedTools[0] → English
   id:
      - relatedTools[0] → English
   it:
      - relatedTools[0] → English
   ja:
      - relatedTools[0] → English
   ko:
      - relatedTools[0] → English
   nl:
      - relatedTools[0] → English
   pl:
      - relatedTools[0] → English
   pt:
      - relatedTools[0] → English
   ru:
      - relatedTools[0] → English
   tr:
      - relatedTools[0] → English

81. roman-numeral-converter
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[3] → English

82. running-distance-calculator
   ar:
      - slug → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[2] → English

83. salary-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[2] → English

84. salary-to-hourly-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

85. scientific-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

86. sha1-generator
   ar:
      - relatedTools[0] → English
   bn:
      - relatedTools[0] → English
   de:
      - relatedTools[0] → English
   es:
      - relatedTools[0] → English
   fr:
      - relatedTools[0] → English
   hi:
      - relatedTools[0] → English
   id:
      - relatedTools[0] → English
   it:
      - relatedTools[0] → English
   ja:
      - relatedTools[0] → English
   ko:
      - relatedTools[0] → English
   nl:
      - relatedTools[0] → English
   pl:
      - relatedTools[0] → English
   pt:
      - relatedTools[0] → English
   ru:
      - relatedTools[0] → English
   tr:
      - relatedTools[0] → English

87. sha1-hash-generator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English

88. sha256-generator
   ar:
      - slug → English
   bn:
      - slug → English
   de:
      - slug → English
   es:
      - slug → English
   fr:
      - slug → English
   hi:
      - slug → English
   id:
      - slug → English
   it:
      - slug → English
   ja:
      - slug → English
   ko:
      - slug → English
   nl:
      - slug → English
   pl:
      - slug → English
   pt:
      - slug → English
   ru:
      - slug → English
   tr:
      - slug → English

89. sha256-hash-generator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English

90. sha512-hash-generator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - secondaryKeywords[0] → English
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English

91. simple-interest-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[2] → English

92. sleep-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English

93. speed-converter
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

94. speed-distance-time-calculator
   ar:
      - slug → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[2] → English

95. spin-the-wheel
   ar:
      - relatedTools[1] → English
   bn:
      - relatedTools[1] → English
   de:
      - relatedTools[1] → English
   es:
      - relatedTools[1] → English
   fr:
      - relatedTools[1] → English
   hi:
      - relatedTools[1] → English
   id:
      - relatedTools[1] → English
   it:
      - relatedTools[1] → English
   ja:
      - relatedTools[1] → English
   ko:
      - relatedTools[1] → English
   nl:
      - relatedTools[1] → English
   pl:
      - relatedTools[1] → English
   pt:
      - relatedTools[1] → English
   ru:
      - relatedTools[1] → English
   tr:
      - relatedTools[1] → English

96. sql-formatter
   ar:
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[1] → English
      - relatedTools[2] → English

97. square-footage-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - primaryKeyword → English
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English

98. step-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English

99. stopwatch
   ar:
      - relatedTools[2] → English
   bn:
      - relatedTools[2] → English
   de:
      - relatedTools[2] → English
   es:
      - relatedTools[2] → English
   fr:
      - relatedTools[2] → English
   hi:
      - relatedTools[2] → English
   id:
      - relatedTools[2] → English
   it:
      - relatedTools[2] → English
   ja:
      - relatedTools[2] → English
   ko:
      - relatedTools[2] → English
   nl:
      - primaryKeyword → English
      - relatedTools[2] → English
   pl:
      - relatedTools[2] → English
   pt:
      - relatedTools[2] → English
   ru:
      - relatedTools[2] → English
   tr:
      - relatedTools[2] → English

100. strong-password-generator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

101. tax-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[2] → English

102. temperature-converter
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

103. test-grade-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English

104. text-case-converter
   ar:
      - slug → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[1] → English
   id:
      - slug → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[1] → English
   nl:
      - slug → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[1] → English

105. tile-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

106. time-difference-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

107. time-duration-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

108. time-zone-converter
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

109. tip-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English

110. truth-or-dare-generator
   ar:
      - slug → English
      - relatedTools[0] → English
   bn:
      - slug → English
      - relatedTools[0] → English
   de:
      - slug → English
      - relatedTools[0] → English
   es:
      - slug → English
      - relatedTools[0] → English
   fr:
      - slug → English
      - relatedTools[0] → English
   hi:
      - slug → English
      - relatedTools[0] → English
   id:
      - secondaryKeywords[3] → English
      - slug → English
      - relatedTools[0] → English
   it:
      - slug → English
      - relatedTools[0] → English
   ja:
      - slug → English
      - relatedTools[0] → English
   ko:
      - slug → English
      - relatedTools[0] → English
   nl:
      - slug → English
      - relatedTools[0] → English
   pl:
      - slug → English
      - relatedTools[0] → English
   pt:
      - slug → English
      - relatedTools[0] → English
   ru:
      - slug → English
      - relatedTools[0] → English
   tr:
      - slug → English
      - relatedTools[0] → English

111. unix-timestamp-converter
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

112. url-encode-decode
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

113. uuid-generator
   ar:
      - relatedTools[0] → English
      - relatedTools[2] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[2] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[2] → English

114. volume-converter
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

115. wake-up-time-calculator
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English

116. water-intake-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English

117. weeks-between-dates
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

118. weight-converter
   ar:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
      - relatedTools[3] → English

119. word-counter
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
   bn:
      - relatedTools[0] → English
      - relatedTools[1] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
   hi:
      - relatedTools[0] → English
      - relatedTools[1] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ja:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ko:
      - relatedTools[0] → English
      - relatedTools[1] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English

120. work-hours-calculator
   ar:
      - slug → English
      - relatedTools[0] → English
   bn:
      - slug → English
      - relatedTools[0] → English
   de:
      - slug → English
      - relatedTools[0] → English
   es:
      - slug → English
      - relatedTools[0] → English
   fr:
      - slug → English
      - relatedTools[0] → English
   hi:
      - slug → English
      - relatedTools[0] → English
   id:
      - slug → English
      - relatedTools[0] → English
   it:
      - slug → English
      - relatedTools[0] → English
   ja:
      - slug → English
      - relatedTools[0] → English
   ko:
      - slug → English
      - relatedTools[0] → English
   nl:
      - slug → English
      - relatedTools[0] → English
   pl:
      - slug → English
      - relatedTools[0] → English
   pt:
      - slug → English
      - relatedTools[0] → English
   ru:
      - slug → English
      - relatedTools[0] → English
   tr:
      - slug → English
      - relatedTools[0] → English

121. world-time-converter
   ar:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   bn:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   de:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   es:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   fr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   hi:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   id:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   it:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ja:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ko:
      - slug → English
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   nl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pl:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   pt:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   ru:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English
   tr:
      - relatedTools[0] → English
      - relatedTools[1] → English
      - relatedTools[2] → English

122. xml-formatter
   ar:
      - relatedTools[2] → English
   bn:
      - relatedTools[2] → English
   de:
      - relatedTools[2] → English
   es:
      - relatedTools[2] → English
   fr:
      - relatedTools[2] → English
   hi:
      - relatedTools[2] → English
   id:
      - relatedTools[2] → English
   it:
      - relatedTools[2] → English
   ja:
      - relatedTools[2] → English
   ko:
      - relatedTools[2] → English
   nl:
      - relatedTools[2] → English
   pl:
      - relatedTools[2] → English
   pt:
      - relatedTools[2] → English
   ru:
      - relatedTools[2] → English
   tr:
      - relatedTools[2] → English

123. yes-or-no-wheel
   ar:
      - relatedTools[2] → English
   bn:
      - relatedTools[2] → English
   de:
      - relatedTools[2] → English
   es:
      - relatedTools[2] → English
   fr:
      - relatedTools[2] → English
   hi:
      - relatedTools[2] → English
   id:
      - relatedTools[2] → English
   it:
      - relatedTools[2] → English
   ja:
      - relatedTools[2] → English
   ko:
      - relatedTools[2] → English
   nl:
      - relatedTools[2] → English
   pl:
      - relatedTools[2] → English
   pt:
      - relatedTools[2] → English
   ru:
      - relatedTools[2] → English
   tr:
      - relatedTools[2] → English

Total affected tools: 123
Total affected locale files: 1845

# BELOW 1500 CHARACTER REPORT
TOOLS BELOW 1500 CHARACTERS
---------------------------

1. area-converter
   ja → 754 characters
   ko → 840 characters
   ru → 1192 characters
   tr → 1315 characters
   pl → 1325 characters
   nl → 1391 characters
   pt → 1454 characters

2. average-calculator
   ar → 1080 characters
   bn → 1209 characters
   hi → 1295 characters
   tr → 1306 characters
   id → 1319 characters
   pl → 1375 characters
   pt → 1447 characters
   it → 1456 characters
   ru → 1484 characters

3. barcode-generator
   ja → 1422 characters
   ko → 1478 characters

4. base64-encode-decode
   ko → 1064 characters
   ja → 1106 characters

5. basic-calculator
   ja → 1061 characters
   ko → 1180 characters

6. bionic-reading-converter
   ja → 1358 characters
   ko → 1406 characters

7. bmi-calculator
   ja → 1207 characters
   ko → 1330 characters

8. bmr-calculator
   ja → 622 characters
   ko → 678 characters
   tr → 1333 characters
   nl → 1381 characters
   pl → 1429 characters
   pt → 1482 characters
   ru → 1495 characters

9. board-foot-calculator
   ko → 618 characters
   ja → 641 characters
   ar → 1056 characters
   bn → 1236 characters
   nl → 1291 characters
   id → 1298 characters
   hi → 1353 characters
   de → 1474 characters
   es → 1482 characters
   it → 1498 characters

10. body-fat-calculator
   ko → 625 characters
   ar → 1121 characters
   bn → 1295 characters
   tr → 1315 characters
   nl → 1361 characters
   id → 1369 characters
   hi → 1394 characters
   de → 1489 characters
   ru → 1497 characters

11. calorie-calculator
   ja → 646 characters
   ko → 650 characters
   ar → 1224 characters
   tr → 1336 characters
   bn → 1351 characters
   nl → 1396 characters
   hi → 1419 characters
   id → 1423 characters
   pl → 1455 characters
   it → 1482 characters

12. character-counter
   ko → 884 characters
   ja → 926 characters

13. color-palette-generator
   ja → 1412 characters
   ko → 1475 characters

14. color-picker
   ja → 1387 characters
   ko → 1476 characters

15. concrete-calculator
   ja → 625 characters
   ko → 647 characters
   ar → 1075 characters
   nl → 1328 characters
   id → 1341 characters
   tr → 1354 characters
   bn → 1355 characters
   hi → 1382 characters
   pl → 1420 characters
   ru → 1469 characters
   it → 1498 characters

16. contrast-checker
   ja → 1486 characters
   ko → 1500 characters

17. cost-per-square-foot-calculator
   ja → 1292 characters
   ko → 1326 characters

18. css-minifier
   ko → 934 characters
   ja → 993 characters

19. currency-converter
   ja → 761 characters
   ko → 831 characters
   ru → 1262 characters
   pl → 1313 characters
   tr → 1366 characters
   bn → 1395 characters
   nl → 1398 characters
   pt → 1435 characters
   ar → 1450 characters
   hi → 1494 characters

20. decking-calculator
   ko → 899 characters
   ja → 909 characters

21. emi-calculator
   ja → 1083 characters
   ko → 1230 characters

22. fence-calculator
   ko → 921 characters
   ja → 937 characters

23. final-grade-calculator
   ja → 703 characters
   ko → 710 characters
   ar → 1291 characters
   tr → 1456 characters
   bn → 1457 characters
   nl → 1490 characters

24. flip-a-coin
   ja → 1123 characters
   ko → 1267 characters

25. gpa-calculator
   ja → 634 characters
   ko → 650 characters
   tr → 1350 characters
   bn → 1351 characters
   pl → 1388 characters
   hi → 1390 characters
   id → 1390 characters
   nl → 1399 characters
   it → 1450 characters
   pt → 1468 characters

26. grade-calculator
   ar → 1037 characters
   tr → 1285 characters
   id → 1312 characters
   bn → 1329 characters
   nl → 1341 characters
   pl → 1355 characters
   hi → 1357 characters
   pt → 1441 characters
   ru → 1443 characters
   it → 1480 characters

27. hash-generator
   ko → 1492 characters

28. height-converter
   ko → 866 characters
   ja → 869 characters
   ru → 1305 characters
   pt → 1357 characters
   pl → 1389 characters
   tr → 1403 characters
   nl → 1484 characters

29. hex-to-rgb
   ja → 1384 characters

30. hourly-to-salary-calculator
   ja → 1030 characters
   ko → 1109 characters

31. html-encode-decode
   ko → 1008 characters
   ja → 1065 characters

32. investment-calculator
   ja → 776 characters
   ko → 816 characters
   pl → 1458 characters

33. js-minifier
   ko → 1074 characters
   ja → 1116 characters

34. jwt-decoder
   ko → 955 characters
   ja → 1002 characters

35. length-converter
   ja → 783 characters
   ko → 820 characters
   ru → 1387 characters

36. loan-calculator
   ja → 1401 characters

37. lorem-ipsum-generator
   ko → 1000 characters
   ja → 1023 characters

38. macro-calculator
   ja → 636 characters
   ko → 670 characters
   ar → 1267 characters
   tr → 1362 characters
   nl → 1416 characters
   id → 1435 characters
   bn → 1452 characters
   pl → 1481 characters

39. md5-generator
   ko → 950 characters
   ja → 1016 characters

40. md5-hash-generator
   ja → 1461 characters
   ko → 1483 characters

41. morse-code-translator
   ja → 1243 characters
   ko → 1275 characters

42. mulch-calculator
   ja → 895 characters
   ko → 943 characters

43. pace-calculator
   ar → 1072 characters
   bn → 1242 characters
   hi → 1251 characters
   tr → 1262 characters
   nl → 1289 characters
   id → 1338 characters
   pl → 1338 characters
   ru → 1377 characters
   pt → 1420 characters
   it → 1439 characters
   de → 1478 characters
   fr → 1484 characters

44. paint-calculator
   ja → 656 characters
   ko → 664 characters
   ar → 1148 characters
   nl → 1326 characters
   tr → 1329 characters
   bn → 1341 characters
   id → 1391 characters
   hi → 1393 characters
   pl → 1413 characters
   pt → 1477 characters
   ru → 1488 characters

45. password-generator
   ko → 1373 characters
   ja → 1397 characters

46. percentage-calculator
   ja → 1124 characters
   ko → 1174 characters

47. percentage-change-calculator
   ja → 1164 characters
   ko → 1219 characters

48. percentage-decrease-calculator
   ko → 647 characters
   ar → 1063 characters
   tr → 1132 characters
   bn → 1160 characters
   pl → 1218 characters
   hi → 1234 characters
   nl → 1253 characters
   ru → 1265 characters
   pt → 1297 characters
   id → 1343 characters
   de → 1359 characters
   it → 1397 characters
   fr → 1457 characters

49. percentage-difference-calculator
   ja → 1025 characters
   ko → 1148 characters

50. percentage-increase-calculator
   ja → 805 characters
   ko → 890 characters

51. pin-generator
   ja → 1308 characters
   ko → 1390 characters

52. plant-spacing-calculator
   ja → 899 characters
   ko → 918 characters

53. qr-code-generator
   ko → 1009 characters
   ja → 1053 characters

54. random-number-generator
   ja → 886 characters
   ko → 895 characters

55. ratio-calculator
   tr → 1242 characters
   nl → 1362 characters
   pl → 1372 characters
   it → 1435 characters
   ru → 1438 characters
   pt → 1457 characters

56. rgb-to-hex
   ja → 1268 characters
   ko → 1435 characters

57. roll-a-die
   ja → 1213 characters
   ko → 1280 characters

58. running-distance-calculator
   ja → 618 characters
   ko → 629 characters
   ar → 1081 characters
   bn → 1300 characters
   tr → 1308 characters
   hi → 1374 characters
   id → 1397 characters
   nl → 1432 characters
   pl → 1437 characters
   ru → 1449 characters
   it → 1490 characters

59. salary-to-hourly-calculator
   ja → 922 characters
   ko → 1029 characters

60. scientific-calculator
   ja → 1165 characters
   ko → 1270 characters

61. sha1-generator
   ko → 1008 characters
   ja → 1062 characters

62. sha1-hash-generator
   ja → 1477 characters

63. sha256-generator
   ko → 1058 characters

64. simple-interest-calculator
   ja → 937 characters
   ko → 1162 characters

65. speed-distance-time-calculator
   ja → 656 characters
   ko → 670 characters
   ar → 1140 characters
   bn → 1349 characters
   tr → 1351 characters
   hi → 1352 characters
   nl → 1447 characters
   id → 1456 characters
   pl → 1490 characters

66. spin-the-wheel
   ja → 1289 characters
   ko → 1324 characters

67. sql-formatter
   ko → 958 characters
   ja → 977 characters

68. square-footage-calculator
   ko → 614 characters
   ar → 1059 characters
   bn → 1242 characters
   tr → 1277 characters
   id → 1323 characters
   hi → 1329 characters
   nl → 1395 characters
   ru → 1398 characters
   it → 1465 characters
   pt → 1473 characters
   pl → 1480 characters
   es → 1496 characters

69. step-calculator
   ja → 878 characters
   ko → 905 characters

70. temperature-converter
   ja → 668 characters
   ko → 767 characters
   ar → 1105 characters
   hi → 1161 characters
   ru → 1214 characters
   bn → 1257 characters
   it → 1314 characters
   nl → 1315 characters
   pl → 1323 characters
   de → 1325 characters
   id → 1350 characters
   pt → 1354 characters
   es → 1423 characters
   tr → 1441 characters
   fr → 1462 characters

71. test-grade-calculator
   ja → 1070 characters
   ko → 1070 characters

72. text-case-converter
   ja → 1494 characters

73. tile-calculator
   ja → 641 characters
   ko → 653 characters
   ar → 1110 characters
   bn → 1331 characters
   tr → 1347 characters
   id → 1381 characters
   nl → 1391 characters
   hi → 1415 characters
   ru → 1465 characters
   pl → 1490 characters

74. truth-or-dare-generator
   ja → 1382 characters
   ko → 1409 characters

75. url-encode-decode
   ko → 1022 characters
   ja → 1074 characters

76. water-intake-calculator
   ja → 635 characters
   ko → 638 characters
   ar → 1155 characters
   bn → 1370 characters
   tr → 1372 characters
   hi → 1403 characters
   nl → 1412 characters
   id → 1421 characters
   ru → 1469 characters

77. weight-converter
   ja → 762 characters
   ko → 790 characters
   ru → 1253 characters
   pl → 1361 characters
   hi → 1425 characters
   pt → 1451 characters
   tr → 1469 characters

78. word-counter
   ja → 1137 characters
   ko → 1197 characters

79. xml-formatter
   ko → 966 characters
   ja → 1042 characters

80. yes-or-no-wheel
   ja → 1254 characters
   ko → 1311 characters

Total affected tools: 80
Total affected locale files: 337

# BORDERLINE 1501–1700 CHARACTER REPORT
TOOLS BETWEEN 1501-1700 CHARACTERS
----------------------------------

area-converter
   id → 1535 characters
   it → 1572 characters
   fr → 1583 characters

average-calculator
   de → 1529 characters
   es → 1555 characters
   fr → 1571 characters

board-foot-calculator
   fr → 1522 characters

body-fat-calculator
   pl → 1517 characters
   pt → 1566 characters
   it → 1586 characters
   es → 1652 characters
   fr → 1658 characters

calorie-calculator
   pt → 1505 characters
   ru → 1516 characters
   fr → 1546 characters
   es → 1556 characters
   de → 1616 characters

concrete-calculator
   de → 1501 characters
   pt → 1518 characters
   fr → 1539 characters
   es → 1547 characters

css-minifier
   ar → 1616 characters

currency-converter
   it → 1524 characters
   id → 1546 characters
   de → 1627 characters
   fr → 1662 characters

fence-calculator
   ar → 1614 characters

final-grade-calculator
   id → 1571 characters
   hi → 1572 characters
   pt → 1596 characters
   ru → 1626 characters
   pl → 1636 characters
   it → 1657 characters
   fr → 1667 characters

gpa-calculator
   fr → 1522 characters
   ru → 1530 characters
   de → 1591 characters
   es → 1600 characters

grade-calculator
   fr → 1515 characters
   de → 1550 characters
   es → 1608 characters

hash-generator
   ja → 1508 characters

height-converter
   ar → 1595 characters
   hi → 1605 characters
   it → 1607 characters
   bn → 1693 characters
   id → 1696 characters

hex-to-rgb
   ko → 1509 characters

html-encode-decode
   ar → 1629 characters

html-minifier
   ja → 1516 characters
   ko → 1551 characters

investment-calculator
   ru → 1504 characters
   pt → 1565 characters
   nl → 1570 characters
   bn → 1577 characters
   ar → 1643 characters
   tr → 1644 characters
   it → 1685 characters

length-converter
   pl → 1559 characters
   hi → 1562 characters
   tr → 1564 characters
   bn → 1597 characters
   ar → 1613 characters
   nl → 1627 characters
   pt → 1634 characters
   id → 1673 characters

loan-calculator
   ko → 1553 characters

lorem-ipsum-generator
   ar → 1528 characters

macro-calculator
   hi → 1533 characters
   ru → 1549 characters
   it → 1551 characters
   pt → 1563 characters
   de → 1577 characters
   es → 1662 characters

markdown-editor
   ko → 1551 characters
   ja → 1582 characters

md5-generator
   ar → 1665 characters

mortgage-calculator
   ja → 1590 characters
   ko → 1659 characters

mulch-calculator
   ar → 1612 characters

pace-calculator
   es → 1505 characters

paint-calculator
   it → 1507 characters
   de → 1540 characters
   es → 1584 characters

percentage-increase-calculator
   ar → 1544 characters
   bn → 1668 characters
   pl → 1689 characters

plant-spacing-calculator
   ar → 1631 characters

random-number-generator
   ar → 1689 characters

running-distance-calculator
   pt → 1532 characters
   de → 1571 characters
   es → 1585 characters
   fr → 1623 characters

sha1-generator
   ar → 1638 characters

sha1-hash-generator
   ko → 1531 characters

sha256-hash-generator
   ja → 1604 characters
   ko → 1614 characters

sha512-hash-generator
   ja → 1595 characters
   ko → 1639 characters

speed-distance-time-calculator
   it → 1539 characters
   ru → 1572 characters
   pt → 1581 characters
   fr → 1617 characters
   es → 1656 characters
   de → 1694 characters

sql-formatter
   ar → 1675 characters

square-footage-calculator
   de → 1526 characters
   fr → 1542 characters

step-calculator
   ar → 1656 characters

strong-password-generator
   ja → 1522 characters
   ko → 1565 characters

text-case-converter
   ko → 1509 characters

tile-calculator
   pt → 1525 characters
   it → 1584 characters
   de → 1609 characters
   es → 1616 characters
   fr → 1660 characters

uuid-generator
   ko → 1512 characters
   ja → 1564 characters

water-intake-calculator
   pl → 1514 characters
   pt → 1592 characters
   it → 1601 characters
   de → 1610 characters
   es → 1645 characters
   fr → 1667 characters

weight-converter
   ar → 1505 characters
   bn → 1531 characters
   nl → 1535 characters
   it → 1635 characters
   id → 1641 characters

xml-formatter
   ar → 1613 characters

# SLUG AUDIT REPORT
SLUG ISSUES
-----------

Tool: area-converter

AR:
slug = area-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = area-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = area-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = area-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = area-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: average-calculator

AR:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = average-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: barcode-generator

AR:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = barcode-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: base64-encode-decode

AR:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = base64-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: basic-calculator

AR:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = basic-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: bcrypt-generator

AR:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = bcrypt-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: bedtime-calculator

BN:
slug = bedtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = bedtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = bedtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = bedtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: binary-to-decimal

AR:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = binary-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: bionic-reading-converter

AR:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = bionic-reading-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: bmi-calculator

AR:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = bmi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: bmr-calculator

AR:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = bmr-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: board-foot-calculator

AR:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = board-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: body-fat-calculator

AR:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = body-fat-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: break-even-calculator

BN:
slug = break-even-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = break-even-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = break-even-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = break-even-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = break-even-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: calorie-calculator

AR:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = calorie-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: character-counter

AR:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = character-counter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: color-palette-generator

AR:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = color-palette-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: color-picker

AR:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = color-picker
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: compound-interest-calculator

AR:
slug = compound-interest-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = compound-interest-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = compound-interest-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = compound-interest-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = compound-interest-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: concrete-calculator

AR:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = concrete-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: contrast-checker

AR:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = contrast-checker
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: cost-per-square-foot-calculator

AR:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = cost-per-square-foot-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: countdown-timer

BN:
slug = countdown-timer
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = countdown-timer
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = countdown-timer
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = countdown-timer
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = countdown-timer
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = countdown-timer
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: currency-converter

AR:
slug = currency-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = currency-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = currency-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = currency-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = currency-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: data-storage-converter

AR:
slug = data-storage-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = data-storage-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = data-storage-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = data-storage-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = data-storage-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: date-difference-calculator

BN:
slug = date-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = date-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = date-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = date-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: days-between-dates

BN:
slug = days-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = days-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = days-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = days-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: days-until-calculator

AR:
slug = days-until-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = days-until-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = days-until-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = days-until-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = days-until-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = days-until-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: decimal-to-binary

AR:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = decimal-to-binary
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: decking-calculator

AR:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = decking-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: discount-calculator

BN:
slug = discount-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = discount-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = discount-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = discount-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: emi-calculator

AR:
slug = emi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = emi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = emi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = emi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = emi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = emi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: fence-calculator

AR:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = fence-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: final-grade-calculator

AR:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = final-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: flip-a-coin

AR:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = flip-a-coin
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: fraction-calculator

AR:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = fraction-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: gpa-calculator

AR:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = gpa-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: grade-calculator

AR:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: hash-generator

AR:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: height-converter

AR:
slug = height-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = height-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = height-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = height-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = height-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: hex-to-decimal

AR:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = hex-to-decimal
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: hex-to-rgb

AR:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = hex-to-rgb
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: hourly-to-salary-calculator

AR:
slug = hourly-to-salary-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = hourly-to-salary-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = hourly-to-salary-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = hourly-to-salary-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = hourly-to-salary-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: html-encode-decode

AR:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = html-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: investment-calculator

AR:
slug = investment-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = investment-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = investment-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = investment-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = investment-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: js-minifier

AR:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = js-minifier
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: jwt-decoder

AR:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = jwt-decoder
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: length-converter

AR:
slug = length-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = length-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = length-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = length-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = length-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: loan-calculator

AR:
slug = loan-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = loan-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = loan-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = loan-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = loan-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: lorem-ipsum-generator

AR:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = lorem-ipsum-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: macro-calculator

AR:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = macro-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: markdown-editor

AR:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = markdown-editor
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: markup-calculator

BN:
slug = markup-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = markup-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = markup-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = markup-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = markup-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: md5-generator

AR:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = md5-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: md5-hash-generator

AR:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = md5-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: months-between-dates

AR:
slug = months-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = months-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = months-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = months-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = months-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = months-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: morse-code-translator

AR:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = morse-code-translator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: mortgage-calculator

AR:
slug = mortgage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = mortgage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = mortgage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = mortgage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = mortgage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: mulch-calculator

AR:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = mulch-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: number-base-converter

AR:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = number-base-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: overtime-calculator

AR:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = overtime-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: pace-calculator

AR:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = pace-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: paint-calculator

AR:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = paint-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: password-generator

AR:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: percentage-calculator

AR:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = percentage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: percentage-change-calculator

AR:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = percentage-change-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: percentage-decrease-calculator

AR:
slug = percentage-decrease-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = percentage-decrease-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = percentage-decrease-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = percentage-decrease-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = percentage-decrease-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: percentage-difference-calculator

AR:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = percentage-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: percentage-increase-calculator

AR:
slug = percentage-increase-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = percentage-increase-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = percentage-increase-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = percentage-increase-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = percentage-increase-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: pin-generator

AR:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = pin-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: plant-spacing-calculator

AR:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = plant-spacing-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: pomodoro-timer

BN:
slug = pomodoro-timer
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = pomodoro-timer
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = pomodoro-timer
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = pomodoro-timer
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = pomodoro-timer
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = pomodoro-timer
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: profit-margin-calculator

BN:
slug = profit-margin-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = profit-margin-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = profit-margin-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = profit-margin-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: random-number-generator

AR:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = random-number-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: ratio-calculator

AR:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = ratio-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: rgb-to-hex

AR:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = rgb-to-hex
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: roi-calculator

BN:
slug = roi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = roi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = roi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = roi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = roi-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: roll-a-die

AR:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = roll-a-die
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: roman-numeral-converter

AR:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = roman-numeral-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: running-distance-calculator

AR:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = running-distance-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: salary-calculator

BN:
slug = salary-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = salary-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = salary-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = salary-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: salary-to-hourly-calculator

AR:
slug = salary-to-hourly-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = salary-to-hourly-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = salary-to-hourly-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = salary-to-hourly-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = salary-to-hourly-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: scientific-calculator

AR:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = scientific-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: sha1-generator

AR:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = sha1-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: sha1-hash-generator

AR:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = sha1-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: sha256-generator

AR:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = sha256-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: sha256-hash-generator

AR:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = sha256-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: sha512-hash-generator

AR:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = sha512-hash-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: simple-interest-calculator

BN:
slug = simple-interest-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = simple-interest-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = simple-interest-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = simple-interest-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: sleep-calculator

BN:
slug = sleep-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = sleep-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = sleep-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = sleep-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: speed-converter

AR:
slug = speed-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = speed-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = speed-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = speed-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = speed-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: speed-distance-time-calculator

AR:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = speed-distance-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: spin-the-wheel

AR:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = spin-the-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: sql-formatter

AR:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = sql-formatter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: square-footage-calculator

AR:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = square-footage-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: step-calculator

AR:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = step-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: stopwatch

BN:
slug = stopwatch
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = stopwatch
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = stopwatch
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = stopwatch
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = stopwatch
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = stopwatch
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: strong-password-generator

AR:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = strong-password-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: tax-calculator

AR:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = tax-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: temperature-converter

AR:
slug = temperature-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = temperature-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = temperature-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = temperature-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = temperature-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: test-grade-calculator

AR:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = test-grade-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: text-case-converter

AR:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = text-case-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: tile-calculator

AR:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = tile-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: time-difference-calculator

AR:
slug = time-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = time-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = time-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = time-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = time-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = time-difference-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: time-duration-calculator

AR:
slug = time-duration-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = time-duration-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = time-duration-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = time-duration-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = time-duration-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: time-zone-converter

BN:
slug = time-zone-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = time-zone-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = time-zone-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = time-zone-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: tip-calculator

BN:
slug = tip-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = tip-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = tip-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = tip-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: truth-or-dare-generator

AR:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = truth-or-dare-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: unix-timestamp-converter

BN:
slug = unix-timestamp-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = unix-timestamp-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = unix-timestamp-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = unix-timestamp-converter
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = unix-timestamp-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: url-encode-decode

AR:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = url-encode-decode
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: uuid-generator

AR:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = uuid-generator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: volume-converter

AR:
slug = volume-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = volume-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = volume-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = volume-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = volume-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: wake-up-time-calculator

BN:
slug = wake-up-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = wake-up-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = wake-up-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = wake-up-time-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: water-intake-calculator

AR:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = water-intake-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: weeks-between-dates

AR:
slug = weeks-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = weeks-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = weeks-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = weeks-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = weeks-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = weeks-between-dates
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: weight-converter

AR:
slug = weight-converter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = weight-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = weight-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = weight-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = weight-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: word-counter

AR:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = word-counter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: work-hours-calculator

AR:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = work-hours-calculator
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: world-time-converter

BN:
slug = world-time-converter
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = world-time-converter
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = world-time-converter
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = world-time-converter
Issue: Suspiciously identical to English slug
Status: WARNING

Tool: yes-or-no-wheel

AR:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

BN:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

DE:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

ES:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

FR:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

HI:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

ID:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

IT:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

JA:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

KO:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

NL:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

PL:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

PT:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

RU:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

TR:
slug = yes-or-no-wheel
Issue: Suspiciously identical to English slug
Status: WARNING

# PER-LANGUAGE SUMMARY

ENGLISH
Tools checked: 126
Complete: 126
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 0
Slug issues: 0

ARABIC
Tools checked: 126
Complete: 108
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 18
Slug issues: 101

BENGALI
Tools checked: 126
Complete: 107
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 19
Slug issues: 120

GERMAN
Tools checked: 126
Complete: 121
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 5
Slug issues: 79

SPANISH
Tools checked: 126
Complete: 123
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 3
Slug issues: 78

FRENCH
Tools checked: 126
Complete: 123
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 3
Slug issues: 78

HINDI
Tools checked: 126
Complete: 108
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 18
Slug issues: 120

INDONESIAN
Tools checked: 126
Complete: 109
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 17
Slug issues: 83

ITALIAN
Tools checked: 126
Complete: 114
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 12
Slug issues: 78

JAPANESE
Tools checked: 126
Complete: 55
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 71
Slug issues: 120

KOREAN
Tools checked: 126
Complete: 54
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 72
Slug issues: 120

DUTCH
Tools checked: 126
Complete: 104
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 22
Slug issues: 86

POLISH
Tools checked: 126
Complete: 105
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 21
Slug issues: 78

PORTUGUESE
Tools checked: 126
Complete: 112
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 14
Slug issues: 78

RUSSIAN
Tools checked: 126
Complete: 107
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 19
Slug issues: 78

TURKISH
Tools checked: 126
Complete: 103
Missing files: 0
Wrong/Mixed-language files: 0
Below 1500 chars: 23
Slug issues: 78

# TOOLS WITH ISSUES SUMMARY

| Tool | Missing Locale | Wrong Language | <1500 Chars | Slug Issue |
|---|---|---|---|---|
| age-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | — |
| area-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ru, tr, pl, nl, pt | ar, bn, hi, ja, ko |
| average-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ar, bn, hi, tr, id, pl, pt, it, ru | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| barcode-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| base64-encode-decode | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| basic-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| bcrypt-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| bedtime-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko |
| binary-to-decimal | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| bionic-reading-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| bmi-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| bmr-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, tr, nl, pl, pt, ru | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| board-foot-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja, ar, bn, nl, id, hi, de, es, it | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| body-fat-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ar, bn, tr, nl, id, hi, de, ru | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| break-even-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko, nl |
| calorie-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ar, tr, bn, nl, hi, id, pl, it | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| character-counter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| color-palette-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| color-picker | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| compound-interest-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, hi, ja, ko |
| concrete-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ar, nl, id, tr, bn, hi, pl, ru, it | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| contrast-checker | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| cost-per-square-foot-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| countdown-timer | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, de, hi, ja, ko, nl |
| css-minifier | — | — | ko, ja | — |
| currency-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ru, pl, tr, bn, nl, pt, ar, hi | ar, bn, hi, ja, ko |
| data-storage-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, hi, ja, ko |
| date-difference-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko |
| days-between-dates | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko |
| days-until-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, hi, id, ja, ko |
| decimal-to-binary | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| decking-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| discount-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko |
| emi-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, hi, ja, ko, nl |
| fence-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| final-grade-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ar, tr, bn, nl | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| flip-a-coin | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| fraction-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| gpa-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, tr, bn, pl, hi, id, nl, it, pt | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| grade-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ar, tr, id, bn, nl, pl, hi, pt, ru, it | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| hash-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| height-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja, ru, pt, pl, tr, nl | ar, bn, hi, ja, ko |
| hex-to-decimal | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| hex-to-rgb | — | — | ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| hourly-to-salary-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, hi, ja, ko |
| html-encode-decode | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| html-minifier | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | — |
| investment-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, pl | ar, bn, hi, ja, ko |
| js-minifier | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| json-formatter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | — |
| jwt-decoder | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| length-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ru | ar, bn, hi, ja, ko |
| loan-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja | ar, bn, hi, ja, ko |
| lorem-ipsum-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| macro-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ar, tr, nl, id, bn, pl | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| markdown-editor | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| markup-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko, nl |
| md5-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| md5-hash-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| months-between-dates | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, hi, id, ja, ko |
| morse-code-translator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| mortgage-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, hi, ja, ko |
| mulch-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| number-base-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| overtime-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| pace-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ar, bn, hi, tr, nl, id, pl, ru, pt, it, de, fr | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| paint-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ar, nl, tr, bn, id, hi, pl, pt, ru | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| password-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| percentage-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| percentage-change-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| percentage-decrease-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ar, tr, bn, pl, hi, nl, ru, pt, id, de, it, fr | ar, bn, hi, ja, ko |
| percentage-difference-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| percentage-increase-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, hi, ja, ko |
| pin-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| plant-spacing-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| pomodoro-timer | — | — | — | bn, de, hi, ja, ko, nl |
| profit-margin-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko |
| qr-code-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | — |
| random-number-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| ratio-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | tr, nl, pl, it, ru, pt | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| rgb-to-hex | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| roi-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko, nl |
| roll-a-die | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| roman-numeral-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| running-distance-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ar, bn, tr, hi, id, nl, pl, ru, it | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| salary-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko |
| salary-to-hourly-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, hi, ja, ko |
| scientific-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| sha1-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| sha1-hash-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| sha256-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| sha256-hash-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| sha512-hash-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| simple-interest-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | bn, hi, ja, ko |
| sleep-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko |
| speed-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, hi, ja, ko |
| speed-distance-time-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ar, bn, tr, hi, nl, id, pl | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| spin-the-wheel | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| sql-formatter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| square-footage-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ar, bn, tr, id, hi, nl, ru, it, pt, pl, es | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| step-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| stopwatch | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, id, ja, ko, nl |
| strong-password-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| tax-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| temperature-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ar, hi, ru, bn, it, nl, pl, de, id, pt, es, tr, fr | ar, bn, hi, ja, ko |
| test-grade-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| text-case-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| tile-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ar, bn, tr, id, nl, hi, ru, pl | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| time-difference-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, hi, id, ja, ko |
| time-duration-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, hi, ja, ko |
| time-zone-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko |
| tip-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko |
| truth-or-dare-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| unix-timestamp-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko, nl |
| url-encode-decode | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| uuid-generator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| volume-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, hi, ja, ko |
| wake-up-time-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko |
| water-intake-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ar, bn, tr, hi, nl, id, ru | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| weeks-between-dates | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, hi, id, ja, ko |
| weight-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko, ru, pl, hi, pt, tr | ar, bn, hi, ja, ko |
| word-counter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| work-hours-calculator | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |
| world-time-converter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | — | bn, hi, ja, ko |
| xml-formatter | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ko, ja | — |
| yes-or-no-wheel | — | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr | ja, ko | ar, bn, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, tr |

# PER-TOOL DETAILED REPORTS

============================================================
TOOL: age-calculator
SLUG/ID: age-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 7696 ✅
ar → 5284 ✅
bn → 5753 ✅
de → 8568 ✅
es → 8438 ✅
fr → 8906 ✅
hi → 6225 ✅
id → 6618 ✅
it → 8543 ✅
ja → 2646 ✅
ko → 3111 ✅
nl → 7106 ✅
pl → 6714 ✅
pt → 8229 ✅
ru → 6311 ✅
tr → 6262 ✅

Slug Status:
All slugs OK.

============================================================
TOOL: area-converter
SLUG/ID: area-converter
============================================================

Locale Coverage:
9/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3388 ✅
ar → 5372 ✅
bn → 5337 ✅
de → 1719 ✅
es → 1739 ✅
fr → 1583 ⚠️ Borderline
hi → 5930 ✅
id → 1535 ⚠️ Borderline
it → 1572 ⚠️ Borderline
ja → 754 ❌
ko → 840 ❌
nl → 1391 ❌
pl → 1325 ❌
pt → 1454 ❌
ru → 1192 ❌
tr → 1315 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: average-calculator
SLUG/ID: average-calculator
============================================================

Locale Coverage:
7/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2390 ✅
ar → 1080 ❌
bn → 1209 ❌
de → 1529 ⚠️ Borderline
es → 1555 ⚠️ Borderline
fr → 1571 ⚠️ Borderline
hi → 1295 ❌
id → 1319 ❌
it → 1456 ❌
ja → 2935 ✅
ko → 3984 ✅
nl → 2034 ✅
pl → 1375 ❌
pt → 1447 ❌
ru → 1484 ❌
tr → 1306 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: barcode-generator
SLUG/ID: barcode-generator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2739 ✅
ar → 2393 ✅
bn → 2932 ✅
de → 3244 ✅
es → 3448 ✅
fr → 3530 ✅
hi → 2853 ✅
id → 3031 ✅
it → 3421 ✅
ja → 1422 ❌
ko → 1478 ❌
nl → 3070 ✅
pl → 3232 ✅
pt → 3289 ✅
ru → 3124 ✅
tr → 2968 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: base64-encode-decode
SLUG/ID: base64-encode-decode
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2550 ✅
ar → 1820 ✅
bn → 1962 ✅
de → 2250 ✅
es → 2231 ✅
fr → 2172 ✅
hi → 2066 ✅
id → 2034 ✅
it → 2197 ✅
ja → 1106 ❌
ko → 1064 ❌
nl → 2044 ✅
pl → 2045 ✅
pt → 2189 ✅
ru → 2171 ✅
tr → 1973 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: basic-calculator
SLUG/ID: basic-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2316 ✅
ar → 2000 ✅
bn → 2364 ✅
de → 2850 ✅
es → 2635 ✅
fr → 2797 ✅
hi → 2359 ✅
id → 2560 ✅
it → 2703 ✅
ja → 1061 ❌
ko → 1180 ❌
nl → 2643 ✅
pl → 2573 ✅
pt → 2561 ✅
ru → 2553 ✅
tr → 2419 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: bcrypt-generator
SLUG/ID: bcrypt-generator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3099 ✅
ar → 2798 ✅
bn → 3349 ✅
de → 3678 ✅
es → 3746 ✅
fr → 3844 ✅
hi → 3274 ✅
id → 3440 ✅
it → 3652 ✅
ja → 1723 ✅
ko → 1760 ✅
nl → 3527 ✅
pl → 3436 ✅
pt → 3426 ✅
ru → 3530 ✅
tr → 3435 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: bedtime-calculator
SLUG/ID: bedtime-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4646 ✅
ar → 3752 ✅
bn → 4321 ✅
de → 5054 ✅
es → 5049 ✅
fr → 5077 ✅
hi → 4460 ✅
id → 4949 ✅
it → 4787 ✅
ja → 2030 ✅
ko → 2280 ✅
nl → 4870 ✅
pl → 4369 ✅
pt → 4710 ✅
ru → 4726 ✅
tr → 4517 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: binary-to-decimal
SLUG/ID: binary-to-decimal
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 8884 ✅
ar → 7714 ✅
bn → 9567 ✅
de → 9987 ✅
es → 10221 ✅
fr → 10484 ✅
hi → 9611 ✅
id → 9590 ✅
it → 10192 ✅
ja → 4400 ✅
ko → 4708 ✅
nl → 9850 ✅
pl → 10605 ✅
pt → 19125 ✅
ru → 10020 ✅
tr → 10315 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: bionic-reading-converter
SLUG/ID: bionic-reading-converter
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2574 ✅
ar → 2407 ✅
bn → 2718 ✅
de → 3074 ✅
es → 3069 ✅
fr → 3201 ✅
hi → 3221 ✅
id → 2845 ✅
it → 3152 ✅
ja → 1358 ❌
ko → 1406 ❌
nl → 2868 ✅
pl → 2856 ✅
pt → 2978 ✅
ru → 2985 ✅
tr → 2889 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: bmi-calculator
SLUG/ID: bmi-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2425 ✅
ar → 2325 ✅
bn → 2691 ✅
de → 2938 ✅
es → 2807 ✅
fr → 2970 ✅
hi → 2679 ✅
id → 2812 ✅
it → 2837 ✅
ja → 1207 ❌
ko → 1330 ❌
nl → 2699 ✅
pl → 2697 ✅
pt → 2744 ✅
ru → 2786 ✅
tr → 2629 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: bmr-calculator
SLUG/ID: bmr-calculator
============================================================

Locale Coverage:
9/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2621 ✅
ar → 2731 ✅
bn → 2784 ✅
de → 3197 ✅
es → 3023 ✅
fr → 3332 ✅
hi → 2810 ✅
id → 3081 ✅
it → 3042 ✅
ja → 622 ❌
ko → 678 ❌
nl → 1381 ❌
pl → 1429 ❌
pt → 1482 ❌
ru → 1495 ❌
tr → 1333 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: board-foot-calculator
SLUG/ID: board-foot-calculator
============================================================

Locale Coverage:
6/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 1708 ✅
ar → 1056 ❌
bn → 1236 ❌
de → 1474 ❌
es → 1482 ❌
fr → 1522 ⚠️ Borderline
hi → 1353 ❌
id → 1298 ❌
it → 1498 ❌
ja → 641 ❌
ko → 618 ❌
nl → 1291 ❌
pl → 1973 ✅
pt → 2028 ✅
ru → 2060 ✅
tr → 1856 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: body-fat-calculator
SLUG/ID: body-fat-calculator
============================================================

Locale Coverage:
7/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2618 ✅
ar → 1121 ❌
bn → 1295 ❌
de → 1489 ❌
es → 1652 ⚠️ Borderline
fr → 1658 ⚠️ Borderline
hi → 1394 ❌
id → 1369 ❌
it → 1586 ⚠️ Borderline
ja → 3324 ✅
ko → 625 ❌
nl → 1361 ❌
pl → 1517 ⚠️ Borderline
pt → 1566 ⚠️ Borderline
ru → 1497 ❌
tr → 1315 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: break-even-calculator
SLUG/ID: break-even-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3184 ✅
ar → 4298 ✅
bn → 4956 ✅
de → 5533 ✅
es → 5483 ✅
fr → 5683 ✅
hi → 5208 ✅
id → 8087 ✅
it → 5354 ✅
ja → 2385 ✅
ko → 2545 ✅
nl → 5254 ✅
pl → 5047 ✅
pt → 5141 ✅
ru → 5401 ✅
tr → 5113 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug

============================================================
TOOL: calorie-calculator
SLUG/ID: calorie-calculator
============================================================

Locale Coverage:
6/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2889 ✅
ar → 1224 ❌
bn → 1351 ❌
de → 1616 ⚠️ Borderline
es → 1556 ⚠️ Borderline
fr → 1546 ⚠️ Borderline
hi → 1419 ❌
id → 1423 ❌
it → 1482 ❌
ja → 646 ❌
ko → 650 ❌
nl → 1396 ❌
pl → 1455 ❌
pt → 1505 ⚠️ Borderline
ru → 1516 ⚠️ Borderline
tr → 1336 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: character-counter
SLUG/ID: character-counter
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2436 ✅
ar → 2168 ✅
bn → 2474 ✅
de → 2815 ✅
es → 2922 ✅
fr → 3055 ✅
hi → 2591 ✅
id → 1915 ✅
it → 2122 ✅
ja → 926 ❌
ko → 884 ❌
nl → 1863 ✅
pl → 1903 ✅
pt → 2108 ✅
ru → 1969 ✅
tr → 1802 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: color-palette-generator
SLUG/ID: color-palette-generator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2747 ✅
ar → 2436 ✅
bn → 2834 ✅
de → 3200 ✅
es → 3159 ✅
fr → 3480 ✅
hi → 2716 ✅
id → 2982 ✅
it → 3076 ✅
ja → 1412 ❌
ko → 1475 ❌
nl → 3043 ✅
pl → 3032 ✅
pt → 3000 ✅
ru → 3125 ✅
tr → 2817 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: color-picker
SLUG/ID: color-picker
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2639 ✅
ar → 2413 ✅
bn → 2797 ✅
de → 3037 ✅
es → 3067 ✅
fr → 3255 ✅
hi → 2806 ✅
id → 2859 ✅
it → 3055 ✅
ja → 1387 ❌
ko → 1476 ❌
nl → 2965 ✅
pl → 2967 ✅
pt → 2975 ✅
ru → 2935 ✅
tr → 2820 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: compound-interest-calculator
SLUG/ID: compound-interest-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 6057 ✅
ar → 4321 ✅
bn → 4346 ✅
de → 5293 ✅
es → 5419 ✅
fr → 5659 ✅
hi → 4571 ✅
id → 5095 ✅
it → 5512 ✅
ja → 1836 ✅
ko → 2084 ✅
nl → 5060 ✅
pl → 4984 ✅
pt → 5127 ✅
ru → 5047 ✅
tr → 4879 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: concrete-calculator
SLUG/ID: concrete-calculator
============================================================

Locale Coverage:
5/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2871 ✅
ar → 1075 ❌
bn → 1355 ❌
de → 1501 ⚠️ Borderline
es → 1547 ⚠️ Borderline
fr → 1539 ⚠️ Borderline
hi → 1382 ❌
id → 1341 ❌
it → 1498 ❌
ja → 625 ❌
ko → 647 ❌
nl → 1328 ❌
pl → 1420 ❌
pt → 1518 ⚠️ Borderline
ru → 1469 ❌
tr → 1354 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: contrast-checker
SLUG/ID: contrast-checker
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2860 ✅
ar → 2619 ✅
bn → 3019 ✅
de → 3366 ✅
es → 3375 ✅
fr → 3516 ✅
hi → 3013 ✅
id → 3133 ✅
it → 3407 ✅
ja → 1486 ❌
ko → 1500 ❌
nl → 3157 ✅
pl → 3182 ✅
pt → 3354 ✅
ru → 3149 ✅
tr → 3148 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: cost-per-square-foot-calculator
SLUG/ID: cost-per-square-foot-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2729 ✅
ar → 2422 ✅
bn → 2607 ✅
de → 3226 ✅
es → 3197 ✅
fr → 3263 ✅
hi → 2674 ✅
id → 3042 ✅
it → 3240 ✅
ja → 1292 ❌
ko → 1326 ❌
nl → 3196 ✅
pl → 3200 ✅
pt → 3037 ✅
ru → 3103 ✅
tr → 2896 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: countdown-timer
SLUG/ID: countdown-timer
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4395 ✅
ar → 3650 ✅
bn → 4493 ✅
de → 4929 ✅
es → 4949 ✅
fr → 4788 ✅
hi → 4562 ✅
id → 4742 ✅
it → 4675 ✅
ja → 2129 ✅
ko → 2142 ✅
nl → 4368 ✅
pl → 4317 ✅
pt → 4597 ✅
ru → 4510 ✅
tr → 4518 ✅

Slug Status:
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug

============================================================
TOOL: css-minifier
SLUG/ID: css-minifier
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ✅
bn → Bengali ✅
de → German ✅
es → Spanish ✅
fr → French ✅
hi → Hindi ✅
id → Indonesian ✅
it → Italian ✅
ja → Japanese ✅
ko → Korean ✅
nl → Dutch ✅
pl → Polish ✅
pt → Portuguese ✅
ru → Russian ✅
tr → Turkish ✅

Character Count:
en → 2636 ✅
ar → 1616 ⚠️ Borderline
bn → 1884 ✅
de → 2112 ✅
es → 2064 ✅
fr → 2124 ✅
hi → 2034 ✅
id → 1908 ✅
it → 2015 ✅
ja → 993 ❌
ko → 934 ❌
nl → 1920 ✅
pl → 1946 ✅
pt → 1976 ✅
ru → 2029 ✅
tr → 1815 ✅

Slug Status:
All slugs OK.

============================================================
TOOL: currency-converter
SLUG/ID: currency-converter
============================================================

Locale Coverage:
6/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4343 ✅
ar → 1450 ❌
bn → 1395 ❌
de → 1627 ⚠️ Borderline
es → 1711 ✅
fr → 1662 ⚠️ Borderline
hi → 1494 ❌
id → 1546 ⚠️ Borderline
it → 1524 ⚠️ Borderline
ja → 761 ❌
ko → 831 ❌
nl → 1398 ❌
pl → 1313 ❌
pt → 1435 ❌
ru → 1262 ❌
tr → 1366 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: data-storage-converter
SLUG/ID: data-storage-converter
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 8910 ✅
ar → 8467 ✅
bn → 9749 ✅
de → 10183 ✅
es → 10593 ✅
fr → 10958 ✅
hi → 9954 ✅
id → 51977 ✅
it → 10366 ✅
ja → 4791 ✅
ko → 5041 ✅
nl → 9953 ✅
pl → 11035 ✅
pt → 17474 ✅
ru → 9867 ✅
tr → 9273 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: date-difference-calculator
SLUG/ID: date-difference-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 5440 ✅
ar → 4278 ✅
bn → 4871 ✅
de → 5618 ✅
es → 5893 ✅
fr → 5675 ✅
hi → 5024 ✅
id → 5427 ✅
it → 5510 ✅
ja → 2164 ✅
ko → 2292 ✅
nl → 5511 ✅
pl → 5329 ✅
pt → 5526 ✅
ru → 5244 ✅
tr → 5146 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: days-between-dates
SLUG/ID: days-between-dates
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 5096 ✅
ar → 4004 ✅
bn → 4683 ✅
de → 5427 ✅
es → 5551 ✅
fr → 5277 ✅
hi → 4799 ✅
id → 5250 ✅
it → 5216 ✅
ja → 2147 ✅
ko → 2178 ✅
nl → 5031 ✅
pl → 4799 ✅
pt → 5111 ✅
ru → 4896 ✅
tr → 4810 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: days-until-calculator
SLUG/ID: days-until-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4686 ✅
ar → 4143 ✅
bn → 4713 ✅
de → 5395 ✅
es → 5552 ✅
fr → 5615 ✅
hi → 4612 ✅
id → 5364 ✅
it → 5616 ✅
ja → 2927 ✅
ko → 3129 ✅
nl → 5126 ✅
pl → 5055 ✅
pt → 5339 ✅
ru → 5076 ✅
tr → 4796 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: decimal-to-binary
SLUG/ID: decimal-to-binary
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 8717 ✅
ar → 7761 ✅
bn → 9804 ✅
de → 9910 ✅
es → 10053 ✅
fr → 10423 ✅
hi → 9362 ✅
id → 9543 ✅
it → 9987 ✅
ja → 4405 ✅
ko → 4625 ✅
nl → 9732 ✅
pl → 10384 ✅
pt → 13670 ✅
ru → 9841 ✅
tr → 9869 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: decking-calculator
SLUG/ID: decking-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2890 ✅
ar → 2642 ✅
bn → 3013 ✅
de → 3492 ✅
es → 2211 ✅
fr → 2316 ✅
hi → 1940 ✅
id → 1930 ✅
it → 2118 ✅
ja → 909 ❌
ko → 899 ❌
nl → 2048 ✅
pl → 2000 ✅
pt → 2030 ✅
ru → 2122 ✅
tr → 2011 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: discount-calculator
SLUG/ID: discount-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3043 ✅
ar → 3686 ✅
bn → 4122 ✅
de → 4961 ✅
es → 4953 ✅
fr → 5041 ✅
hi → 4276 ✅
id → 7892 ✅
it → 4800 ✅
ja → 2157 ✅
ko → 2237 ✅
nl → 4864 ✅
pl → 4574 ✅
pt → 4642 ✅
ru → 4770 ✅
tr → 4650 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: emi-calculator
SLUG/ID: emi-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 5086 ✅
ar → 2109 ✅
bn → 2282 ✅
de → 2970 ✅
es → 2790 ✅
fr → 2671 ✅
hi → 2164 ✅
id → 2616 ✅
it → 2572 ✅
ja → 1083 ❌
ko → 1230 ❌
nl → 2539 ✅
pl → 2548 ✅
pt → 2408 ✅
ru → 2675 ✅
tr → 2382 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug

============================================================
TOOL: fence-calculator
SLUG/ID: fence-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2897 ✅
ar → 1614 ⚠️ Borderline
bn → 1883 ✅
de → 2162 ✅
es → 2291 ✅
fr → 2331 ✅
hi → 1991 ✅
id → 1892 ✅
it → 2237 ✅
ja → 937 ❌
ko → 921 ❌
nl → 1997 ✅
pl → 2079 ✅
pt → 2159 ✅
ru → 2167 ✅
tr → 1877 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: final-grade-calculator
SLUG/ID: final-grade-calculator
============================================================

Locale Coverage:
10/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2596 ✅
ar → 1291 ❌
bn → 1457 ❌
de → 1781 ✅
es → 1750 ✅
fr → 1667 ⚠️ Borderline
hi → 1572 ⚠️ Borderline
id → 1571 ⚠️ Borderline
it → 1657 ⚠️ Borderline
ja → 703 ❌
ko → 710 ❌
nl → 1490 ❌
pl → 1636 ⚠️ Borderline
pt → 1596 ⚠️ Borderline
ru → 1626 ⚠️ Borderline
tr → 1456 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: flip-a-coin
SLUG/ID: flip-a-coin
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2332 ✅
ar → 2015 ✅
bn → 2408 ✅
de → 2788 ✅
es → 2690 ✅
fr → 2711 ✅
hi → 2438 ✅
id → 2614 ✅
it → 2643 ✅
ja → 1123 ❌
ko → 1267 ❌
nl → 2552 ✅
pl → 2521 ✅
pt → 2514 ✅
ru → 2625 ✅
tr → 2393 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: fraction-calculator
SLUG/ID: fraction-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 6563 ✅
ar → 5207 ✅
bn → 6154 ✅
de → 7209 ✅
es → 7127 ✅
fr → 7637 ✅
hi → 6407 ✅
id → 7112 ✅
it → 7109 ✅
ja → 3445 ✅
ko → 4490 ✅
nl → 6907 ✅
pl → 6965 ✅
pt → 6909 ✅
ru → 6842 ✅
tr → 6354 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: gpa-calculator
SLUG/ID: gpa-calculator
============================================================

Locale Coverage:
6/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2425 ✅
ar → 5391 ✅
bn → 1351 ❌
de → 1591 ⚠️ Borderline
es → 1600 ⚠️ Borderline
fr → 1522 ⚠️ Borderline
hi → 1390 ❌
id → 1390 ❌
it → 1450 ❌
ja → 634 ❌
ko → 650 ❌
nl → 1399 ❌
pl → 1388 ❌
pt → 1468 ❌
ru → 1530 ⚠️ Borderline
tr → 1350 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: grade-calculator
SLUG/ID: grade-calculator
============================================================

Locale Coverage:
6/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2633 ✅
ar → 1037 ❌
bn → 1329 ❌
de → 1550 ⚠️ Borderline
es → 1608 ⚠️ Borderline
fr → 1515 ⚠️ Borderline
hi → 1357 ❌
id → 1312 ❌
it → 1480 ❌
ja → 3193 ✅
ko → 2108 ✅
nl → 1341 ❌
pl → 1355 ❌
pt → 1441 ❌
ru → 1443 ❌
tr → 1285 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: hash-generator
SLUG/ID: hash-generator
============================================================

Locale Coverage:
15/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2785 ✅
ar → 2448 ✅
bn → 2971 ✅
de → 3282 ✅
es → 3228 ✅
fr → 3535 ✅
hi → 2958 ✅
id → 2963 ✅
it → 3212 ✅
ja → 1508 ⚠️ Borderline
ko → 1492 ❌
nl → 3152 ✅
pl → 3098 ✅
pt → 3174 ✅
ru → 3141 ✅
tr → 2996 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: height-converter
SLUG/ID: height-converter
============================================================

Locale Coverage:
9/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3389 ✅
ar → 1595 ⚠️ Borderline
bn → 1693 ⚠️ Borderline
de → 1847 ✅
es → 1918 ✅
fr → 1751 ✅
hi → 1605 ⚠️ Borderline
id → 1696 ⚠️ Borderline
it → 1607 ⚠️ Borderline
ja → 869 ❌
ko → 866 ❌
nl → 1484 ❌
pl → 1389 ❌
pt → 1357 ❌
ru → 1305 ❌
tr → 1403 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: hex-to-decimal
SLUG/ID: hex-to-decimal
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 8705 ✅
ar → 8158 ✅
bn → 9825 ✅
de → 10133 ✅
es → 10525 ✅
fr → 10550 ✅
hi → 9702 ✅
id → 9700 ✅
it → 10203 ✅
ja → 4555 ✅
ko → 4817 ✅
nl → 9763 ✅
pl → 10231 ✅
pt → 10033 ✅
ru → 10188 ✅
tr → 9492 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: hex-to-rgb
SLUG/ID: hex-to-rgb
============================================================

Locale Coverage:
15/16

Language:
en → English ✅
ar → Arabic ✅
bn → Bengali ✅
de → German ✅
es → Spanish ✅
fr → French ✅
hi → Hindi ✅
id → Indonesian ✅
it → Italian ✅
ja → Japanese ✅
ko → Korean ✅
nl → Dutch ✅
pl → Polish ✅
pt → Portuguese ✅
ru → Russian ✅
tr → Turkish ✅

Character Count:
en → 2455 ✅
ar → 2307 ✅
bn → 2590 ✅
de → 2887 ✅
es → 2902 ✅
fr → 2996 ✅
hi → 2605 ✅
id → 2805 ✅
it → 2896 ✅
ja → 1384 ❌
ko → 1509 ⚠️ Borderline
nl → 2834 ✅
pl → 2822 ✅
pt → 2837 ✅
ru → 2975 ✅
tr → 2756 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: hourly-to-salary-calculator
SLUG/ID: hourly-to-salary-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4617 ✅
ar → 1896 ✅
bn → 2185 ✅
de → 2545 ✅
es → 2481 ✅
fr → 2613 ✅
hi → 2295 ✅
id → 2428 ✅
it → 2497 ✅
ja → 1030 ❌
ko → 1109 ❌
nl → 2289 ✅
pl → 2628 ✅
pt → 2315 ✅
ru → 2601 ✅
tr → 2358 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: html-encode-decode
SLUG/ID: html-encode-decode
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2670 ✅
ar → 1629 ⚠️ Borderline
bn → 1970 ✅
de → 2140 ✅
es → 2186 ✅
fr → 2135 ✅
hi → 1991 ✅
id → 1926 ✅
it → 2128 ✅
ja → 1065 ❌
ko → 1008 ❌
nl → 1953 ✅
pl → 2007 ✅
pt → 2099 ✅
ru → 2088 ✅
tr → 1942 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: html-minifier
SLUG/ID: html-minifier
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2653 ✅
ar → 2496 ✅
bn → 2873 ✅
de → 3283 ✅
es → 3331 ✅
fr → 3391 ✅
hi → 2865 ✅
id → 3042 ✅
it → 3248 ✅
ja → 1516 ⚠️ Borderline
ko → 1551 ⚠️ Borderline
nl → 3128 ✅
pl → 3098 ✅
pt → 3107 ✅
ru → 2973 ✅
tr → 1836 ✅

Slug Status:
All slugs OK.

============================================================
TOOL: investment-calculator
SLUG/ID: investment-calculator
============================================================

Locale Coverage:
13/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4645 ✅
ar → 1643 ⚠️ Borderline
bn → 1577 ⚠️ Borderline
de → 1777 ✅
es → 1793 ✅
fr → 1829 ✅
hi → 1766 ✅
id → 1805 ✅
it → 1685 ⚠️ Borderline
ja → 776 ❌
ko → 816 ❌
nl → 1570 ⚠️ Borderline
pl → 1458 ❌
pt → 1565 ⚠️ Borderline
ru → 1504 ⚠️ Borderline
tr → 1644 ⚠️ Borderline

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: js-minifier
SLUG/ID: js-minifier
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2721 ✅
ar → 1794 ✅
bn → 2152 ✅
de → 2257 ✅
es → 2270 ✅
fr → 2286 ✅
hi → 2150 ✅
id → 2086 ✅
it → 2185 ✅
ja → 1116 ❌
ko → 1074 ❌
nl → 2079 ✅
pl → 2126 ✅
pt → 2168 ✅
ru → 2215 ✅
tr → 1971 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: json-formatter
SLUG/ID: json-formatter
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 5212 ✅
ar → 3258 ✅
bn → 3150 ✅
de → 3761 ✅
es → 4823 ✅
fr → 4034 ✅
hi → 3470 ✅
id → 3215 ✅
it → 3147 ✅
ja → 1900 ✅
ko → 2026 ✅
nl → 3035 ✅
pl → 3233 ✅
pt → 3180 ✅
ru → 3575 ✅
tr → 3791 ✅

Slug Status:
All slugs OK.

============================================================
TOOL: jwt-decoder
SLUG/ID: jwt-decoder
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2705 ✅
ar → 1707 ✅
bn → 1839 ✅
de → 2097 ✅
es → 2022 ✅
fr → 2075 ✅
hi → 1952 ✅
id → 1886 ✅
it → 1956 ✅
ja → 1002 ❌
ko → 955 ❌
nl → 1869 ✅
pl → 1896 ✅
pt → 1968 ✅
ru → 1992 ✅
tr → 1845 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: length-converter
SLUG/ID: length-converter
============================================================

Locale Coverage:
13/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4081 ✅
ar → 1613 ⚠️ Borderline
bn → 1597 ⚠️ Borderline
de → 1749 ✅
es → 1919 ✅
fr → 1874 ✅
hi → 1562 ⚠️ Borderline
id → 1673 ⚠️ Borderline
it → 1712 ✅
ja → 783 ❌
ko → 820 ❌
nl → 1627 ⚠️ Borderline
pl → 1559 ⚠️ Borderline
pt → 1634 ⚠️ Borderline
ru → 1387 ❌
tr → 1564 ⚠️ Borderline

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: loan-calculator
SLUG/ID: loan-calculator
============================================================

Locale Coverage:
15/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 5348 ✅
ar → 2726 ✅
bn → 2943 ✅
de → 3722 ✅
es → 3870 ✅
fr → 3670 ✅
hi → 2969 ✅
id → 3469 ✅
it → 3621 ✅
ja → 1401 ❌
ko → 1553 ⚠️ Borderline
nl → 3586 ✅
pl → 3469 ✅
pt → 3439 ✅
ru → 3694 ✅
tr → 3380 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: lorem-ipsum-generator
SLUG/ID: lorem-ipsum-generator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2813 ✅
ar → 1528 ⚠️ Borderline
bn → 1913 ✅
de → 2098 ✅
es → 2085 ✅
fr → 2184 ✅
hi → 1985 ✅
id → 1986 ✅
it → 2025 ✅
ja → 1023 ❌
ko → 1000 ❌
nl → 1899 ✅
pl → 1996 ✅
pt → 2012 ✅
ru → 2083 ✅
tr → 1838 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: macro-calculator
SLUG/ID: macro-calculator
============================================================

Locale Coverage:
8/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2939 ✅
ar → 1267 ❌
bn → 1452 ❌
de → 1577 ⚠️ Borderline
es → 1662 ⚠️ Borderline
fr → 1713 ✅
hi → 1533 ⚠️ Borderline
id → 1435 ❌
it → 1551 ⚠️ Borderline
ja → 636 ❌
ko → 670 ❌
nl → 1416 ❌
pl → 1481 ❌
pt → 1563 ⚠️ Borderline
ru → 1549 ⚠️ Borderline
tr → 1362 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: markdown-editor
SLUG/ID: markdown-editor
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2623 ✅
ar → 2419 ✅
bn → 2883 ✅
de → 3151 ✅
es → 3196 ✅
fr → 3353 ✅
hi → 2953 ✅
id → 2981 ✅
it → 3065 ✅
ja → 1582 ⚠️ Borderline
ko → 1551 ⚠️ Borderline
nl → 2962 ✅
pl → 2977 ✅
pt → 3048 ✅
ru → 3207 ✅
tr → 2996 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: markup-calculator
SLUG/ID: markup-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3025 ✅
ar → 4027 ✅
bn → 4699 ✅
de → 5368 ✅
es → 5233 ✅
fr → 5142 ✅
hi → 4844 ✅
id → 10200 ✅
it → 5123 ✅
ja → 2328 ✅
ko → 2393 ✅
nl → 4891 ✅
pl → 4653 ✅
pt → 4867 ✅
ru → 4900 ✅
tr → 4723 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug

============================================================
TOOL: md5-generator
SLUG/ID: md5-generator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2553 ✅
ar → 1665 ⚠️ Borderline
bn → 1878 ✅
de → 2114 ✅
es → 2041 ✅
fr → 2161 ✅
hi → 1931 ✅
id → 1892 ✅
it → 1994 ✅
ja → 1016 ❌
ko → 950 ❌
nl → 1891 ✅
pl → 1946 ✅
pt → 1981 ✅
ru → 1970 ✅
tr → 1834 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: md5-hash-generator
SLUG/ID: md5-hash-generator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2573 ✅
ar → 2377 ✅
bn → 2729 ✅
de → 3065 ✅
es → 3117 ✅
fr → 3231 ✅
hi → 2865 ✅
id → 2876 ✅
it → 3018 ✅
ja → 1461 ❌
ko → 1483 ❌
nl → 2890 ✅
pl → 2883 ✅
pt → 2966 ✅
ru → 2939 ✅
tr → 2847 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: months-between-dates
SLUG/ID: months-between-dates
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 5160 ✅
ar → 4396 ✅
bn → 5124 ✅
de → 6006 ✅
es → 6013 ✅
fr → 6079 ✅
hi → 5251 ✅
id → 5506 ✅
it → 5813 ✅
ja → 3132 ✅
ko → 3508 ✅
nl → 5727 ✅
pl → 5706 ✅
pt → 5652 ✅
ru → 5601 ✅
tr → 5129 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: morse-code-translator
SLUG/ID: morse-code-translator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2445 ✅
ar → 2036 ✅
bn → 2487 ✅
de → 2823 ✅
es → 2810 ✅
fr → 2781 ✅
hi → 2548 ✅
id → 2655 ✅
it → 2712 ✅
ja → 1243 ❌
ko → 1275 ❌
nl → 2703 ✅
pl → 2638 ✅
pt → 2648 ✅
ru → 2580 ✅
tr → 2428 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: mortgage-calculator
SLUG/ID: mortgage-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 6105 ✅
ar → 2833 ✅
bn → 3172 ✅
de → 3817 ✅
es → 3824 ✅
fr → 3755 ✅
hi → 3155 ✅
id → 3567 ✅
it → 3704 ✅
ja → 1590 ⚠️ Borderline
ko → 1659 ⚠️ Borderline
nl → 3585 ✅
pl → 3715 ✅
pt → 3524 ✅
ru → 3688 ✅
tr → 3408 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: mulch-calculator
SLUG/ID: mulch-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2754 ✅
ar → 1612 ⚠️ Borderline
bn → 1860 ✅
de → 2118 ✅
es → 2265 ✅
fr → 2238 ✅
hi → 1908 ✅
id → 1942 ✅
it → 2167 ✅
ja → 895 ❌
ko → 943 ❌
nl → 1960 ✅
pl → 2097 ✅
pt → 2275 ✅
ru → 2113 ✅
tr → 1837 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: number-base-converter
SLUG/ID: number-base-converter
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 9059 ✅
ar → 7948 ✅
bn → 9803 ✅
de → 10388 ✅
es → 10545 ✅
fr → 10985 ✅
hi → 9832 ✅
id → 9921 ✅
it → 10421 ✅
ja → 4319 ✅
ko → 4726 ✅
nl → 10115 ✅
pl → 10402 ✅
pt → 10181 ✅
ru → 10588 ✅
tr → 9752 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: overtime-calculator
SLUG/ID: overtime-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3586 ✅
ar → 3883 ✅
bn → 4288 ✅
de → 5138 ✅
es → 4966 ✅
fr → 5552 ✅
hi → 4453 ✅
id → 4982 ✅
it → 5158 ✅
ja → 1965 ✅
ko → 2094 ✅
nl → 4693 ✅
pl → 4855 ✅
pt → 5020 ✅
ru → 5309 ✅
tr → 4516 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: pace-calculator
SLUG/ID: pace-calculator
============================================================

Locale Coverage:
4/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2601 ✅
ar → 1072 ❌
bn → 1242 ❌
de → 1478 ❌
es → 1505 ⚠️ Borderline
fr → 1484 ❌
hi → 1251 ❌
id → 1338 ❌
it → 1439 ❌
ja → 3176 ✅
ko → 4064 ✅
nl → 1289 ❌
pl → 1338 ❌
pt → 1420 ❌
ru → 1377 ❌
tr → 1262 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: paint-calculator
SLUG/ID: paint-calculator
============================================================

Locale Coverage:
5/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2872 ✅
ar → 1148 ❌
bn → 1341 ❌
de → 1540 ⚠️ Borderline
es → 1584 ⚠️ Borderline
fr → 2227 ✅
hi → 1393 ❌
id → 1391 ❌
it → 1507 ⚠️ Borderline
ja → 656 ❌
ko → 664 ❌
nl → 1326 ❌
pl → 1413 ❌
pt → 1477 ❌
ru → 1488 ❌
tr → 1329 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: password-generator
SLUG/ID: password-generator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2579 ✅
ar → 2352 ✅
bn → 2857 ✅
de → 2953 ✅
es → 3016 ✅
fr → 3237 ✅
hi → 2728 ✅
id → 2844 ✅
it → 2910 ✅
ja → 1397 ❌
ko → 1373 ❌
nl → 2950 ✅
pl → 2787 ✅
pt → 2831 ✅
ru → 2779 ✅
tr → 2770 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: percentage-calculator
SLUG/ID: percentage-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2261 ✅
ar → 2015 ✅
bn → 2211 ✅
de → 2590 ✅
es → 2628 ✅
fr → 2664 ✅
hi → 2206 ✅
id → 2472 ✅
it → 2595 ✅
ja → 1124 ❌
ko → 1174 ❌
nl → 2511 ✅
pl → 2383 ✅
pt → 2590 ✅
ru → 2367 ✅
tr → 2231 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: percentage-change-calculator
SLUG/ID: percentage-change-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2429 ✅
ar → 2216 ✅
bn → 2362 ✅
de → 2904 ✅
es → 2784 ✅
fr → 3019 ✅
hi → 2419 ✅
id → 2687 ✅
it → 2891 ✅
ja → 1164 ❌
ko → 1219 ❌
nl → 2842 ✅
pl → 2632 ✅
pt → 2777 ✅
ru → 2751 ✅
tr → 2428 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: percentage-decrease-calculator
SLUG/ID: percentage-decrease-calculator
============================================================

Locale Coverage:
3/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4005 ✅
ar → 1063 ❌
bn → 1160 ❌
de → 1359 ❌
es → 4258 ✅
fr → 1457 ❌
hi → 1234 ❌
id → 1343 ❌
it → 1397 ❌
ja → 3249 ✅
ko → 647 ❌
nl → 1253 ❌
pl → 1218 ❌
pt → 1297 ❌
ru → 1265 ❌
tr → 1132 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: percentage-difference-calculator
SLUG/ID: percentage-difference-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2396 ✅
ar → 1847 ✅
bn → 2189 ✅
de → 2723 ✅
es → 2543 ✅
fr → 2735 ✅
hi → 2158 ✅
id → 2450 ✅
it → 2609 ✅
ja → 1025 ❌
ko → 1148 ❌
nl → 2671 ✅
pl → 2438 ✅
pt → 2487 ✅
ru → 2503 ✅
tr → 2182 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: percentage-increase-calculator
SLUG/ID: percentage-increase-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4139 ✅
ar → 1544 ⚠️ Borderline
bn → 1668 ⚠️ Borderline
de → 2140 ✅
es → 2026 ✅
fr → 2073 ✅
hi → 1759 ✅
id → 1825 ✅
it → 1862 ✅
ja → 805 ❌
ko → 890 ❌
nl → 1730 ✅
pl → 1689 ⚠️ Borderline
pt → 1775 ✅
ru → 1726 ✅
tr → 1747 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: pin-generator
SLUG/ID: pin-generator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2539 ✅
ar → 2440 ✅
bn → 2757 ✅
de → 3105 ✅
es → 3039 ✅
fr → 3287 ✅
hi → 2663 ✅
id → 2881 ✅
it → 2993 ✅
ja → 1308 ❌
ko → 1390 ❌
nl → 2986 ✅
pl → 2940 ✅
pt → 2991 ✅
ru → 2985 ✅
tr → 2777 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: plant-spacing-calculator
SLUG/ID: plant-spacing-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2895 ✅
ar → 1631 ⚠️ Borderline
bn → 1968 ✅
de → 2264 ✅
es → 2342 ✅
fr → 2388 ✅
hi → 2039 ✅
id → 2055 ✅
it → 2308 ✅
ja → 899 ❌
ko → 918 ❌
nl → 2034 ✅
pl → 2145 ✅
pt → 2243 ✅
ru → 2282 ✅
tr → 1901 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: pomodoro-timer
SLUG/ID: pomodoro-timer
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ✅
bn → Bengali ✅
de → German ✅
es → Spanish ✅
fr → French ✅
hi → Hindi ✅
id → Indonesian ✅
it → Italian ✅
ja → Japanese ✅
ko → Korean ✅
nl → Dutch ✅
pl → Polish ✅
pt → Portuguese ✅
ru → Russian ✅
tr → Turkish ✅

Character Count:
en → 4747 ✅
ar → 4127 ✅
bn → 4730 ✅
de → 4981 ✅
es → 5298 ✅
fr → 5235 ✅
hi → 4985 ✅
id → 5406 ✅
it → 5057 ✅
ja → 2144 ✅
ko → 2320 ✅
nl → 4769 ✅
pl → 4662 ✅
pt → 4951 ✅
ru → 4875 ✅
tr → 5070 ✅

Slug Status:
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug

============================================================
TOOL: profit-margin-calculator
SLUG/ID: profit-margin-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3264 ✅
ar → 4010 ✅
bn → 4649 ✅
de → 5233 ✅
es → 5291 ✅
fr → 5334 ✅
hi → 4915 ✅
id → 11227 ✅
it → 5024 ✅
ja → 2218 ✅
ko → 2371 ✅
nl → 4828 ✅
pl → 4488 ✅
pt → 4699 ✅
ru → 4885 ✅
tr → 4544 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: qr-code-generator
SLUG/ID: qr-code-generator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2748 ✅
ar → 1897 ✅
bn → 1996 ✅
de → 2256 ✅
es → 2219 ✅
fr → 2237 ✅
hi → 2106 ✅
id → 1986 ✅
it → 2135 ✅
ja → 1053 ❌
ko → 1009 ❌
nl → 2023 ✅
pl → 2074 ✅
pt → 2144 ✅
ru → 2135 ✅
tr → 1954 ✅

Slug Status:
All slugs OK.

============================================================
TOOL: random-number-generator
SLUG/ID: random-number-generator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2537 ✅
ar → 1689 ⚠️ Borderline
bn → 2026 ✅
de → 2260 ✅
es → 2238 ✅
fr → 2311 ✅
hi → 2030 ✅
id → 2024 ✅
it → 2153 ✅
ja → 886 ❌
ko → 895 ❌
nl → 2145 ✅
pl → 2122 ✅
pt → 2173 ✅
ru → 2172 ✅
tr → 1973 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: ratio-calculator
SLUG/ID: ratio-calculator
============================================================

Locale Coverage:
10/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 7156 ✅
ar → 6098 ✅
bn → 7267 ✅
de → 8191 ✅
es → 8126 ✅
fr → 8144 ✅
hi → 7512 ✅
id → 8044 ✅
it → 1435 ❌
ja → 4179 ✅
ko → 4550 ✅
nl → 1362 ❌
pl → 1372 ❌
pt → 1457 ❌
ru → 1438 ❌
tr → 1242 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: rgb-to-hex
SLUG/ID: rgb-to-hex
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2441 ✅
ar → 2150 ✅
bn → 2497 ✅
de → 2788 ✅
es → 2728 ✅
fr → 2847 ✅
hi → 2465 ✅
id → 2666 ✅
it → 2716 ✅
ja → 1268 ❌
ko → 1435 ❌
nl → 2651 ✅
pl → 2842 ✅
pt → 2705 ✅
ru → 2783 ✅
tr → 2549 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: roi-calculator
SLUG/ID: roi-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3317 ✅
ar → 4067 ✅
bn → 4540 ✅
de → 5162 ✅
es → 4958 ✅
fr → 5306 ✅
hi → 4722 ✅
id → 8572 ✅
it → 4976 ✅
ja → 2417 ✅
ko → 2402 ✅
nl → 4995 ✅
pl → 4709 ✅
pt → 4743 ✅
ru → 4881 ✅
tr → 4756 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug

============================================================
TOOL: roll-a-die
SLUG/ID: roll-a-die
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2323 ✅
ar → 2191 ✅
bn → 2493 ✅
de → 2905 ✅
es → 2724 ✅
fr → 2809 ✅
hi → 2444 ✅
id → 2601 ✅
it → 2681 ✅
ja → 1213 ❌
ko → 1280 ❌
nl → 2885 ✅
pl → 2549 ✅
pt → 2646 ✅
ru → 2651 ✅
tr → 2433 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: roman-numeral-converter
SLUG/ID: roman-numeral-converter
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 8066 ✅
ar → 7144 ✅
bn → 8166 ✅
de → 9482 ✅
es → 9177 ✅
fr → 9688 ✅
hi → 8269 ✅
id → 8820 ✅
it → 9340 ✅
ja → 3968 ✅
ko → 4475 ✅
nl → 9092 ✅
pl → 8988 ✅
pt → 8902 ✅
ru → 8868 ✅
tr → 8573 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: running-distance-calculator
SLUG/ID: running-distance-calculator
============================================================

Locale Coverage:
5/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2534 ✅
ar → 1081 ❌
bn → 1300 ❌
de → 1571 ⚠️ Borderline
es → 1585 ⚠️ Borderline
fr → 1623 ⚠️ Borderline
hi → 1374 ❌
id → 1397 ❌
it → 1490 ❌
ja → 618 ❌
ko → 629 ❌
nl → 1432 ❌
pl → 1437 ❌
pt → 1532 ⚠️ Borderline
ru → 1449 ❌
tr → 1308 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: salary-calculator
SLUG/ID: salary-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3163 ✅
ar → 3910 ✅
bn → 4504 ✅
de → 5289 ✅
es → 5312 ✅
fr → 5465 ✅
hi → 4715 ✅
id → 6154 ✅
it → 5417 ✅
ja → 2209 ✅
ko → 2173 ✅
nl → 5129 ✅
pl → 5079 ✅
pt → 5155 ✅
ru → 4903 ✅
tr → 4802 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: salary-to-hourly-calculator
SLUG/ID: salary-to-hourly-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4704 ✅
ar → 1828 ✅
bn → 2051 ✅
de → 2202 ✅
es → 2222 ✅
fr → 2253 ✅
hi → 2093 ✅
id → 2052 ✅
it → 2198 ✅
ja → 922 ❌
ko → 1029 ❌
nl → 1984 ✅
pl → 2275 ✅
pt → 2084 ✅
ru → 2084 ✅
tr → 2021 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: scientific-calculator
SLUG/ID: scientific-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2620 ✅
ar → 2283 ✅
bn → 2572 ✅
de → 3220 ✅
es → 2922 ✅
fr → 3162 ✅
hi → 2518 ✅
id → 2722 ✅
it → 2950 ✅
ja → 1165 ❌
ko → 1270 ❌
nl → 3027 ✅
pl → 2891 ✅
pt → 2869 ✅
ru → 2876 ✅
tr → 2741 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: sha1-generator
SLUG/ID: sha1-generator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2612 ✅
ar → 1638 ⚠️ Borderline
bn → 1923 ✅
de → 2105 ✅
es → 2067 ✅
fr → 2192 ✅
hi → 1981 ✅
id → 1902 ✅
it → 1984 ✅
ja → 1062 ❌
ko → 1008 ❌
nl → 1907 ✅
pl → 1947 ✅
pt → 2008 ✅
ru → 2001 ✅
tr → 1889 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: sha1-hash-generator
SLUG/ID: sha1-hash-generator
============================================================

Locale Coverage:
15/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2637 ✅
ar → 2325 ✅
bn → 2726 ✅
de → 3039 ✅
es → 3077 ✅
fr → 3235 ✅
hi → 2843 ✅
id → 2886 ✅
it → 3049 ✅
ja → 1477 ❌
ko → 1531 ⚠️ Borderline
nl → 2870 ✅
pl → 2897 ✅
pt → 3017 ✅
ru → 2952 ✅
tr → 2843 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: sha256-generator
SLUG/ID: sha256-generator
============================================================

Locale Coverage:
15/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2896 ✅
ar → 1800 ✅
bn → 2009 ✅
de → 2271 ✅
es → 2211 ✅
fr → 2340 ✅
hi → 2085 ✅
id → 2047 ✅
it → 2122 ✅
ja → 2493 ✅
ko → 1058 ❌
nl → 2043 ✅
pl → 2155 ✅
pt → 2134 ✅
ru → 2154 ✅
tr → 2012 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: sha256-hash-generator
SLUG/ID: sha256-hash-generator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2921 ✅
ar → 2601 ✅
bn → 2945 ✅
de → 3205 ✅
es → 3272 ✅
fr → 3531 ✅
hi → 3057 ✅
id → 3124 ✅
it → 3219 ✅
ja → 1604 ⚠️ Borderline
ko → 1614 ⚠️ Borderline
nl → 3151 ✅
pl → 3205 ✅
pt → 3242 ✅
ru → 3190 ✅
tr → 3048 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: sha512-hash-generator
SLUG/ID: sha512-hash-generator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2854 ✅
ar → 2547 ✅
bn → 2976 ✅
de → 3241 ✅
es → 3369 ✅
fr → 3543 ✅
hi → 2978 ✅
id → 3147 ✅
it → 3264 ✅
ja → 1595 ⚠️ Borderline
ko → 1639 ⚠️ Borderline
nl → 3170 ✅
pl → 3211 ✅
pt → 3226 ✅
ru → 3282 ✅
tr → 2961 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: simple-interest-calculator
SLUG/ID: simple-interest-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2348 ✅
ar → 1717 ✅
bn → 1891 ✅
de → 1899 ✅
es → 1944 ✅
fr → 1867 ✅
hi → 2203 ✅
id → 2147 ✅
it → 2077 ✅
ja → 937 ❌
ko → 1162 ❌
nl → 1966 ✅
pl → 1906 ✅
pt → 1899 ✅
ru → 1919 ✅
tr → 2023 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: sleep-calculator
SLUG/ID: sleep-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4892 ✅
ar → 4281 ✅
bn → 4788 ✅
de → 5003 ✅
es → 5158 ✅
fr → 5011 ✅
hi → 5160 ✅
id → 5409 ✅
it → 4897 ✅
ja → 2168 ✅
ko → 2402 ✅
nl → 4716 ✅
pl → 4541 ✅
pt → 4651 ✅
ru → 4706 ✅
tr → 4733 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: speed-converter
SLUG/ID: speed-converter
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 8270 ✅
ar → 7668 ✅
bn → 9247 ✅
de → 9829 ✅
es → 9756 ✅
fr → 9926 ✅
hi → 9056 ✅
id → 15945 ✅
it → 9523 ✅
ja → 3992 ✅
ko → 4238 ✅
nl → 9165 ✅
pl → 9118 ✅
pt → 15813 ✅
ru → 9061 ✅
tr → 8485 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: speed-distance-time-calculator
SLUG/ID: speed-distance-time-calculator
============================================================

Locale Coverage:
7/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 1896 ✅
ar → 1140 ❌
bn → 1349 ❌
de → 1694 ⚠️ Borderline
es → 1656 ⚠️ Borderline
fr → 1617 ⚠️ Borderline
hi → 1352 ❌
id → 1456 ❌
it → 1539 ⚠️ Borderline
ja → 656 ❌
ko → 670 ❌
nl → 1447 ❌
pl → 1490 ❌
pt → 1581 ⚠️ Borderline
ru → 1572 ⚠️ Borderline
tr → 1351 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: spin-the-wheel
SLUG/ID: spin-the-wheel
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2497 ✅
ar → 2270 ✅
bn → 2623 ✅
de → 3055 ✅
es → 3033 ✅
fr → 3217 ✅
hi → 2697 ✅
id → 2755 ✅
it → 3012 ✅
ja → 1289 ❌
ko → 1324 ❌
nl → 2881 ✅
pl → 2793 ✅
pt → 2897 ✅
ru → 2924 ✅
tr → 2747 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: sql-formatter
SLUG/ID: sql-formatter
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2438 ✅
ar → 1675 ⚠️ Borderline
bn → 1951 ✅
de → 2125 ✅
es → 2071 ✅
fr → 2118 ✅
hi → 2059 ✅
id → 1966 ✅
it → 1959 ✅
ja → 977 ❌
ko → 958 ❌
nl → 2016 ✅
pl → 2023 ✅
pt → 1992 ✅
ru → 2089 ✅
tr → 1907 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: square-footage-calculator
SLUG/ID: square-footage-calculator
============================================================

Locale Coverage:
4/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2730 ✅
ar → 1059 ❌
bn → 1242 ❌
de → 1526 ⚠️ Borderline
es → 1496 ❌
fr → 1542 ⚠️ Borderline
hi → 1329 ❌
id → 1323 ❌
it → 1465 ❌
ja → 3107 ✅
ko → 614 ❌
nl → 1395 ❌
pl → 1480 ❌
pt → 1473 ❌
ru → 1398 ❌
tr → 1277 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: step-calculator
SLUG/ID: step-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2544 ✅
ar → 1656 ⚠️ Borderline
bn → 1930 ✅
de → 2244 ✅
es → 2408 ✅
fr → 2401 ✅
hi → 1976 ✅
id → 2063 ✅
it → 2217 ✅
ja → 878 ❌
ko → 905 ❌
nl → 2058 ✅
pl → 2079 ✅
pt → 2200 ✅
ru → 2161 ✅
tr → 2004 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: stopwatch
SLUG/ID: stopwatch
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4524 ✅
ar → 3924 ✅
bn → 4915 ✅
de → 4684 ✅
es → 4960 ✅
fr → 5014 ✅
hi → 4877 ✅
id → 5166 ✅
it → 4589 ✅
ja → 2306 ✅
ko → 2313 ✅
nl → 4565 ✅
pl → 4359 ✅
pt → 4649 ✅
ru → 4420 ✅
tr → 4724 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug

============================================================
TOOL: strong-password-generator
SLUG/ID: strong-password-generator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2936 ✅
ar → 2718 ✅
bn → 3164 ✅
de → 3365 ✅
es → 3574 ✅
fr → 3709 ✅
hi → 3080 ✅
id → 3260 ✅
it → 3428 ✅
ja → 1522 ⚠️ Borderline
ko → 1565 ⚠️ Borderline
nl → 3267 ✅
pl → 3256 ✅
pt → 3269 ✅
ru → 3226 ✅
tr → 3151 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: tax-calculator
SLUG/ID: tax-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3442 ✅
ar → 3792 ✅
bn → 4262 ✅
de → 4993 ✅
es → 4932 ✅
fr → 5009 ✅
hi → 4255 ✅
id → 8379 ✅
it → 4907 ✅
ja → 1954 ✅
ko → 1947 ✅
nl → 4833 ✅
pl → 4874 ✅
pt → 4828 ✅
ru → 4971 ✅
tr → 4374 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: temperature-converter
SLUG/ID: temperature-converter
============================================================

Locale Coverage:
1/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3365 ✅
ar → 1105 ❌
bn → 1257 ❌
de → 1325 ❌
es → 1423 ❌
fr → 1462 ❌
hi → 1161 ❌
id → 1350 ❌
it → 1314 ❌
ja → 668 ❌
ko → 767 ❌
nl → 1315 ❌
pl → 1323 ❌
pt → 1354 ❌
ru → 1214 ❌
tr → 1441 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: test-grade-calculator
SLUG/ID: test-grade-calculator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2375 ✅
ar → 2127 ✅
bn → 2348 ✅
de → 2773 ✅
es → 2998 ✅
fr → 2820 ✅
hi → 2342 ✅
id → 2503 ✅
it → 2730 ✅
ja → 1070 ❌
ko → 1070 ❌
nl → 2640 ✅
pl → 2551 ✅
pt → 2578 ✅
ru → 2523 ✅
tr → 2291 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: text-case-converter
SLUG/ID: text-case-converter
============================================================

Locale Coverage:
15/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2633 ✅
ar → 2457 ✅
bn → 2850 ✅
de → 3215 ✅
es → 3327 ✅
fr → 3419 ✅
hi → 2836 ✅
id → 2996 ✅
it → 3222 ✅
ja → 1494 ❌
ko → 1509 ⚠️ Borderline
nl → 3027 ✅
pl → 3227 ✅
pt → 3231 ✅
ru → 3211 ✅
tr → 2941 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: tile-calculator
SLUG/ID: tile-calculator
============================================================

Locale Coverage:
6/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2913 ✅
ar → 1110 ❌
bn → 1331 ❌
de → 1609 ⚠️ Borderline
es → 1616 ⚠️ Borderline
fr → 1660 ⚠️ Borderline
hi → 1415 ❌
id → 1381 ❌
it → 1584 ⚠️ Borderline
ja → 641 ❌
ko → 653 ❌
nl → 1391 ❌
pl → 1490 ❌
pt → 1525 ⚠️ Borderline
ru → 1465 ❌
tr → 1347 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: time-difference-calculator
SLUG/ID: time-difference-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 5725 ✅
ar → 4640 ✅
bn → 5646 ✅
de → 6284 ✅
es → 6427 ✅
fr → 6402 ✅
hi → 5588 ✅
id → 6006 ✅
it → 6270 ✅
ja → 3119 ✅
ko → 3498 ✅
nl → 5912 ✅
pl → 6005 ✅
pt → 6111 ✅
ru → 5961 ✅
tr → 5652 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: time-duration-calculator
SLUG/ID: time-duration-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4895 ✅
ar → 4401 ✅
bn → 4889 ✅
de → 5771 ✅
es → 5942 ✅
fr → 5714 ✅
hi → 4900 ✅
id → 5243 ✅
it → 5561 ✅
ja → 2936 ✅
ko → 3435 ✅
nl → 5320 ✅
pl → 5472 ✅
pt → 5625 ✅
ru → 5529 ✅
tr → 5128 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: time-zone-converter
SLUG/ID: time-zone-converter
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 5022 ✅
ar → 4172 ✅
bn → 4972 ✅
de → 4903 ✅
es → 5267 ✅
fr → 5049 ✅
hi → 5039 ✅
id → 5397 ✅
it → 4888 ✅
ja → 2234 ✅
ko → 2343 ✅
nl → 4622 ✅
pl → 4690 ✅
pt → 4976 ✅
ru → 4694 ✅
tr → 4748 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: tip-calculator
SLUG/ID: tip-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2830 ✅
ar → 3878 ✅
bn → 4172 ✅
de → 4914 ✅
es → 4712 ✅
fr → 4742 ✅
hi → 4498 ✅
id → 7131 ✅
it → 4531 ✅
ja → 2222 ✅
ko → 2412 ✅
nl → 4560 ✅
pl → 4273 ✅
pt → 4426 ✅
ru → 4247 ✅
tr → 4440 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: truth-or-dare-generator
SLUG/ID: truth-or-dare-generator
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2561 ✅
ar → 2269 ✅
bn → 2654 ✅
de → 3139 ✅
es → 2999 ✅
fr → 3088 ✅
hi → 2691 ✅
id → 3007 ✅
it → 2912 ✅
ja → 1382 ❌
ko → 1409 ❌
nl → 2835 ✅
pl → 2923 ✅
pt → 2933 ✅
ru → 2975 ✅
tr → 2738 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: unix-timestamp-converter
SLUG/ID: unix-timestamp-converter
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 5805 ✅
ar → 4829 ✅
bn → 5698 ✅
de → 5916 ✅
es → 6041 ✅
fr → 6028 ✅
hi → 5531 ✅
id → 5779 ✅
it → 5738 ✅
ja → 2618 ✅
ko → 2799 ✅
nl → 5646 ✅
pl → 5649 ✅
pt → 5740 ✅
ru → 5683 ✅
tr → 5584 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug

============================================================
TOOL: url-encode-decode
SLUG/ID: url-encode-decode
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2603 ✅
ar → 1758 ✅
bn → 2017 ✅
de → 2190 ✅
es → 2375 ✅
fr → 2269 ✅
hi → 2097 ✅
id → 2050 ✅
it → 2240 ✅
ja → 1074 ❌
ko → 1022 ❌
nl → 1993 ✅
pl → 2146 ✅
pt → 2274 ✅
ru → 2180 ✅
tr → 2083 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: uuid-generator
SLUG/ID: uuid-generator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2782 ✅
ar → 2554 ✅
bn → 2872 ✅
de → 3308 ✅
es → 3368 ✅
fr → 3427 ✅
hi → 2937 ✅
id → 2953 ✅
it → 3200 ✅
ja → 1564 ⚠️ Borderline
ko → 1512 ⚠️ Borderline
nl → 3159 ✅
pl → 3167 ✅
pt → 3202 ✅
ru → 3141 ✅
tr → 3034 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: volume-converter
SLUG/ID: volume-converter
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 8043 ✅
ar → 7284 ✅
bn → 8254 ✅
de → 9217 ✅
es → 9561 ✅
fr → 9666 ✅
hi → 8563 ✅
id → 9043 ✅
it → 9365 ✅
ja → 3801 ✅
ko → 3985 ✅
nl → 8674 ✅
pl → 8982 ✅
pt → 13600 ✅
ru → 8685 ✅
tr → 8260 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: wake-up-time-calculator
SLUG/ID: wake-up-time-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4702 ✅
ar → 3929 ✅
bn → 4428 ✅
de → 5148 ✅
es → 5165 ✅
fr → 5140 ✅
hi → 4769 ✅
id → 5021 ✅
it → 4794 ✅
ja → 1942 ✅
ko → 2222 ✅
nl → 4744 ✅
pl → 4440 ✅
pt → 4765 ✅
ru → 4826 ✅
tr → 4546 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: water-intake-calculator
SLUG/ID: water-intake-calculator
============================================================

Locale Coverage:
7/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2741 ✅
ar → 1155 ❌
bn → 1370 ❌
de → 1610 ⚠️ Borderline
es → 1645 ⚠️ Borderline
fr → 1667 ⚠️ Borderline
hi → 1403 ❌
id → 1421 ❌
it → 1601 ⚠️ Borderline
ja → 635 ❌
ko → 638 ❌
nl → 1412 ❌
pl → 1514 ⚠️ Borderline
pt → 1592 ⚠️ Borderline
ru → 1469 ❌
tr → 1372 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: weeks-between-dates
SLUG/ID: weeks-between-dates
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 5296 ✅
ar → 4563 ✅
bn → 5381 ✅
de → 5991 ✅
es → 6248 ✅
fr → 6284 ✅
hi → 5424 ✅
id → 5674 ✅
it → 6213 ✅
ja → 3017 ✅
ko → 3235 ✅
nl → 5678 ✅
pl → 5749 ✅
pt → 5886 ✅
ru → 5840 ✅
tr → 5580 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: weight-converter
SLUG/ID: weight-converter
============================================================

Locale Coverage:
9/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 3835 ✅
ar → 1505 ⚠️ Borderline
bn → 1531 ⚠️ Borderline
de → 1738 ✅
es → 1739 ✅
fr → 1774 ✅
hi → 1425 ❌
id → 1641 ⚠️ Borderline
it → 1635 ⚠️ Borderline
ja → 762 ❌
ko → 790 ❌
nl → 1535 ⚠️ Borderline
pl → 1361 ❌
pt → 1451 ❌
ru → 1253 ❌
tr → 1469 ❌

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: word-counter
SLUG/ID: word-counter
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2265 ✅
ar → 2035 ✅
bn → 2380 ✅
de → 2639 ✅
es → 2802 ✅
fr → 2840 ✅
hi → 2454 ✅
id → 2454 ✅
it → 2643 ✅
ja → 1137 ❌
ko → 1197 ❌
nl → 2454 ✅
pl → 2379 ✅
pt → 2658 ✅
ru → 2492 ✅
tr → 2505 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: work-hours-calculator
SLUG/ID: work-hours-calculator
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4977 ✅
ar → 3779 ✅
bn → 4255 ✅
de → 5032 ✅
es → 4877 ✅
fr → 4900 ✅
hi → 4367 ✅
id → 4887 ✅
it → 4842 ✅
ja → 1966 ✅
ko → 2017 ✅
nl → 4703 ✅
pl → 4777 ✅
pt → 4715 ✅
ru → 4881 ✅
tr → 4473 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
TOOL: world-time-converter
SLUG/ID: world-time-converter
============================================================

Locale Coverage:
16/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 4806 ✅
ar → 4061 ✅
bn → 4325 ✅
de → 4789 ✅
es → 4985 ✅
fr → 4993 ✅
hi → 4707 ✅
id → 5012 ✅
it → 4695 ✅
ja → 2230 ✅
ko → 2310 ✅
nl → 4405 ✅
pl → 4715 ✅
pt → 4771 ✅
ru → 4346 ✅
tr → 4550 ✅

Slug Status:
BN: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug

============================================================
TOOL: xml-formatter
SLUG/ID: xml-formatter
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2730 ✅
ar → 1613 ⚠️ Borderline
bn → 1822 ✅
de → 2091 ✅
es → 1961 ✅
fr → 2021 ✅
hi → 1962 ✅
id → 1888 ✅
it → 1920 ✅
ja → 1042 ❌
ko → 966 ❌
nl → 1877 ✅
pl → 1947 ✅
pt → 1860 ✅
ru → 1955 ✅
tr → 1880 ✅

Slug Status:
All slugs OK.

============================================================
TOOL: yes-or-no-wheel
SLUG/ID: yes-or-no-wheel
============================================================

Locale Coverage:
14/16

Language:
en → English ✅
ar → Arabic ⚠️ Mixed/English content detected
bn → Bengali ⚠️ Mixed/English content detected
de → German ⚠️ Mixed/English content detected
es → Spanish ⚠️ Mixed/English content detected
fr → French ⚠️ Mixed/English content detected
hi → Hindi ⚠️ Mixed/English content detected
id → Indonesian ⚠️ Mixed/English content detected
it → Italian ⚠️ Mixed/English content detected
ja → Japanese ⚠️ Mixed/English content detected
ko → Korean ⚠️ Mixed/English content detected
nl → Dutch ⚠️ Mixed/English content detected
pl → Polish ⚠️ Mixed/English content detected
pt → Portuguese ⚠️ Mixed/English content detected
ru → Russian ⚠️ Mixed/English content detected
tr → Turkish ⚠️ Mixed/English content detected

Character Count:
en → 2364 ✅
ar → 2134 ✅
bn → 2440 ✅
de → 2954 ✅
es → 2748 ✅
fr → 2875 ✅
hi → 2549 ✅
id → 2607 ✅
it → 2641 ✅
ja → 1254 ❌
ko → 1311 ❌
nl → 2683 ✅
pl → 2556 ✅
pt → 2634 ✅
ru → 2759 ✅
tr → 2559 ✅

Slug Status:
AR: Suspiciously identical to English slug
BN: Suspiciously identical to English slug
DE: Suspiciously identical to English slug
ES: Suspiciously identical to English slug
FR: Suspiciously identical to English slug
HI: Suspiciously identical to English slug
ID: Suspiciously identical to English slug
IT: Suspiciously identical to English slug
JA: Suspiciously identical to English slug
KO: Suspiciously identical to English slug
NL: Suspiciously identical to English slug
PL: Suspiciously identical to English slug
PT: Suspiciously identical to English slug
RU: Suspiciously identical to English slug
TR: Suspiciously identical to English slug

============================================================
LOCALIZATION & SEO CONTENT HEALTH
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
