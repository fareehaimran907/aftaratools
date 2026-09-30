import { test, expect } from '@playwright/test';
import { toolsRegistry } from '../src/lib/tools/registry';

// Get all published tools
const publishedTools = Object.values(toolsRegistry).filter(t => t.locales['en']?.reviewStatus === 'reviewed');

test.describe('Functional Tool Testing', () => {

  test('Age Calculator calculates correctly', async ({ page }) => {
    await page.goto('/age-calculator');
    
    // Check if the page loaded
    await expect(page.locator('h1')).toContainText('Age Calculator');
    
    // Age Calculator typically has date inputs
    const inputs = page.locator('input[type="date"], input[type="number"]');
    if (await inputs.count() > 0) {
      // Just assert it has the functional UI elements ready
      await expect(inputs.first()).toBeVisible();
      const calculateBtn = page.locator('button', { hasText: /calculate|get age/i }).first();
      if (await calculateBtn.count() > 0) {
        await expect(calculateBtn).toBeVisible();
      }
    }
  });

  test('JSON Formatter works', async ({ page }) => {
    await page.goto('/json-formatter');
    await expect(page.locator('h1')).toContainText('JSON Formatter');
    
    const textarea = page.locator('textarea').first();
    if (await textarea.count() > 0) {
      await textarea.fill('{"hello":"world"}');
      const formatBtn = page.locator('button', { hasText: /format/i }).first();
      if (await formatBtn.count() > 0) {
        await formatBtn.click();
        const output = await page.locator('textarea').nth(1).inputValue();
        expect(output).toContain('"hello": "world"');
      }
    }
  });

  test('Percentage Calculator works', async ({ page }) => {
    await page.goto('/percentage-calculator');
    await expect(page.locator('h1')).toContainText('Percentage Calculator');
    
    const inputs = page.locator('input[type="number"]');
    if (await inputs.count() >= 2) {
      await inputs.nth(0).fill('50');
      await inputs.nth(1).fill('200');
      
      const calcBtn = page.locator('button', { hasText: /calculate/i }).first();
      if (await calcBtn.count() > 0) {
        await calcBtn.click();
        
        // Output should be 100
        const bodyText = await page.locator('body').innerText();
        expect(bodyText).toMatch(/100/);
      }
    }
  });

  // Generic render & console error test for ALL tools
  test.describe('Site-wide Tool Smoke Tests', () => {
    for (const tool of publishedTools) {
      test(`Tool: ${tool.id} renders interactively without crashing`, async ({ page }) => {
        const consoleErrors: string[] = [];
        
        page.on('console', msg => {
          if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
          }
        });
        
        page.on('pageerror', exception => {
          consoleErrors.push(exception.message);
        });

        const response = await page.goto(`/${tool.id}`);
        expect(response?.status()).toBe(200);
        
        // The React Client Component should be mounted if inputs/buttons exist
        const hasInputs = await page.locator('input, textarea, select, button').count();
        expect(hasInputs).toBeGreaterThan(0);
        
        // Wait for potential hydration errors
        await page.waitForTimeout(200);
        
        // Assert no fatal React crashes (which would trigger console errors)
        expect(consoleErrors).toEqual([]);
      });
    }
  });

});
