# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tools-functional.spec.ts >> Functional Tool Testing >> JSON Formatter works
- Location: tests\tools-functional.spec.ts:27:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "\"hello\": \"world\""
Received string:    "{\"hello\":\"world\"}"
```

# Page snapshot

```yaml
- generic [ref=e1]:
    - generic [ref=e2]:
        - banner [ref=e3]:
            - generic [ref=e4]:
                - generic [ref=e5]:
                    - link "Aftara Tools" [ref=e6] [cursor=pointer]:
                        - /url: /
                    - navigation [ref=e7]:
                        - link "Home" [ref=e8] [cursor=pointer]:
                            - /url: /
                - generic [ref=e9]:
                    - combobox [ref=e11]:
                        - option "EN" [selected]
                        - option "ES"
                        - option "FR"
                        - option "DE"
                        - option "PT"
                        - option "IT"
                        - option "RU"
                        - option "TR"
                        - option "AR"
                        - option "HI"
                        - option "ID"
                        - option "JA"
                        - option "KO"
                        - option "NL"
                        - option "PL"
                    - button "Toggle theme" [ref=e12]
        - main [ref=e16]:
            - generic [ref=e17]:
                - generic [ref=e18]:
                    - navigation [ref=e19]:
                        - link "Home" [ref=e20] [cursor=pointer]:
                            - /url: /
                        - generic [ref=e21]: ">"
                        - link "developer tools" [ref=e22] [cursor=pointer]:
                            - /url: /category/developer-tools
                        - generic [ref=e23]: ">"
                        - generic [ref=e24]: JSON Formatter
                    - heading "JSON Formatter" [level=1] [ref=e25]
                    - paragraph [ref=e26]: Format, validate, and beautify JSON data instantly.
                    - generic [ref=e28]:
                        - generic [ref=e29]:
                            - textbox "Paste JSON here..." [ref=e30]: '{"hello":"world"}'
                            - textbox "Formatted JSON..." [ref=e31]: '{ "hello": "world" }'
                        - button "Format JSON" [active] [ref=e32]
                - generic [ref=e33]:
                    - generic [ref=e34]:
                        - heading "Related Tools" [level=2] [ref=e35]
                        - generic [ref=e36]:
                            - link [ref=e37] [cursor=pointer]:
                                - /url: /base64-encode-decode
                                - heading "Base64 Encoder / Decoder" [level=3] [ref=e38]
                                - paragraph [ref=e39]: Encode or decode Base64 strings.
                                - generic [ref=e40]:
                                    - text: Open Tool
                                    - generic [aria-hidden] [ref=e41]: →
                            - link [ref=e42] [cursor=pointer]:
                                - /url: /url-encode-decode
                                - heading "URL Encoder / Decoder" [level=3] [ref=e43]
                                - paragraph [ref=e44]: Encode or decode URL parameters.
                                - generic [ref=e45]:
                                    - text: Open Tool
                                    - generic [aria-hidden] [ref=e46]: →
                    - generic [ref=e47]:
                        - heading "Popular Tools" [level=2] [ref=e48]
                        - generic [ref=e49]:
                            - link [ref=e50] [cursor=pointer]:
                                - /url: /age-calculator
                                - heading "Age Calculator" [level=3] [ref=e51]
                                - paragraph [ref=e52]: Calculate your exact age in years, months and days.
                            - link [ref=e53] [cursor=pointer]:
                                - /url: /percentage-calculator
                                - heading "Percentage Calculator" [level=3] [ref=e54]
                                - paragraph [ref=e55]: Calculate percentages quickly and accurately.
                            - link [ref=e56] [cursor=pointer]:
                                - /url: /date-difference-calculator
                                - heading "Date Difference Calculator" [level=3] [ref=e57]
                                - paragraph [ref=e58]: Calculate the exact time difference between two dates.
                            - link [ref=e59] [cursor=pointer]:
                                - /url: /days-between-dates
                                - heading "Days Between Dates" [level=3] [ref=e60]
                                - paragraph [ref=e61]: Calculate the exact number of days between two dates.
        - contentinfo [ref=e62]:
            - generic [ref=e63]:
                - generic [ref=e64]: © 2026 Aftara Tools. All rights reserved.
                - navigation [ref=e65]:
                    - link "About" [ref=e66] [cursor=pointer]:
                        - /url: /about
                    - link "Contact" [ref=e67] [cursor=pointer]:
                        - /url: /contact
                    - link "Privacy" [ref=e68] [cursor=pointer]:
                        - /url: /privacy
                    - link "Terms" [ref=e69] [cursor=pointer]:
                        - /url: /terms
    - alert [ref=e70]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { toolsRegistry } from '../src/lib/tools/registry';
  3  |
  4  | // Get all published tools
  5  | const publishedTools = Object.values(toolsRegistry).filter(t => t.locales['en']?.reviewStatus === 'reviewed');
  6  |
  7  | test.describe('Functional Tool Testing', () => {
  8  |
  9  |   test('Age Calculator calculates correctly', async ({ page }) => {
  10 |     await page.goto('/age-calculator');
  11 |
  12 |     // Check if the page loaded
  13 |     await expect(page.locator('h1')).toContainText('Age Calculator');
  14 |
  15 |     // Age Calculator typically has date inputs
  16 |     const inputs = page.locator('input[type="date"], input[type="number"]');
  17 |     if (await inputs.count() > 0) {
  18 |       // Just assert it has the functional UI elements ready
  19 |       await expect(inputs.first()).toBeVisible();
  20 |       const calculateBtn = page.locator('button', { hasText: /calculate|get age/i }).first();
  21 |       if (await calculateBtn.count() > 0) {
  22 |         await expect(calculateBtn).toBeVisible();
  23 |       }
  24 |     }
  25 |   });
  26 |
  27 |   test('JSON Formatter works', async ({ page }) => {
  28 |     await page.goto('/json-formatter');
  29 |     await expect(page.locator('h1')).toContainText('JSON Formatter');
  30 |
  31 |     const textarea = page.locator('textarea').first();
  32 |     if (await textarea.count() > 0) {
  33 |       await textarea.fill('{"hello":"world"}');
  34 |       const formatBtn = page.locator('button', { hasText: /format/i }).first();
  35 |       if (await formatBtn.count() > 0) {
  36 |         await formatBtn.click();
  37 |         const output = await textarea.inputValue();
> 38 |         expect(output).toContain('"hello": "world"');
     |                        ^ Error: expect(received).toContain(expected) // indexOf
  39 |       }
  40 |     }
  41 |   });
  42 |
  43 |   test('Percentage Calculator works', async ({ page }) => {
  44 |     await page.goto('/percentage-calculator');
  45 |     await expect(page.locator('h1')).toContainText('Percentage Calculator');
  46 |
  47 |     const inputs = page.locator('input[type="number"]');
  48 |     if (await inputs.count() >= 2) {
  49 |       await inputs.nth(0).fill('50');
  50 |       await inputs.nth(1).fill('200');
  51 |
  52 |       const calcBtn = page.locator('button', { hasText: /calculate/i }).first();
  53 |       if (await calcBtn.count() > 0) {
  54 |         await calcBtn.click();
  55 |
  56 |         // Output should be 100
  57 |         const bodyText = await page.locator('body').innerText();
  58 |         expect(bodyText).toMatch(/100/);
  59 |       }
  60 |     }
  61 |   });
  62 |
  63 |   // Generic render & console error test for ALL tools
  64 |   test.describe('Site-wide Tool Smoke Tests', () => {
  65 |     for (const tool of publishedTools) {
  66 |       test(`Tool: ${tool.id} renders interactively without crashing`, async ({ page }) => {
  67 |         const consoleErrors: string[] = [];
  68 |
  69 |         page.on('console', msg => {
  70 |           if (msg.type() === 'error') {
  71 |             consoleErrors.push(msg.text());
  72 |           }
  73 |         });
  74 |
  75 |         page.on('pageerror', exception => {
  76 |           consoleErrors.push(exception.message);
  77 |         });
  78 |
  79 |         const response = await page.goto(`/${tool.id}`);
  80 |         expect(response?.status()).toBe(200);
  81 |
  82 |         // The React Client Component should be mounted if inputs/buttons exist
  83 |         const hasInputs = await page.locator('input, textarea, select, button').count();
  84 |         expect(hasInputs).toBeGreaterThan(0);
  85 |
  86 |         // Wait for potential hydration errors
  87 |         await page.waitForTimeout(200);
  88 |
  89 |         // Assert no fatal React crashes (which would trigger console errors)
  90 |         expect(consoleErrors).toEqual([]);
  91 |       });
  92 |     }
  93 |   });
  94 |
  95 | });
  96 |
```
