

This package includes the tool-development rules plus the mandatory route-locale
rule.

Copy the `.agents` folder into the root of your Antigravity Tool Website.

Important behavior:
- `/de/[tool]` must render German throughout the entire page.
- `/fr/[tool]` must render French.
- `/ar/[tool]` must render Arabic + RTL.
- No valid non-English locale may silently fall back to English.
- Missing translations must fail QA and be fixed.

Use:
TOOL: age-calculator

to trigger the tool workflow.
