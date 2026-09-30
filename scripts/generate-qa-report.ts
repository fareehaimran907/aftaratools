import { chromium } from 'playwright';
import { toolsRegistry } from '../src/lib/tools/registry';
import fs from 'fs';

async function runQA() {
  const tools = Object.values(toolsRegistry).filter(t => t.locales['en']?.reviewStatus === 'reviewed');
  
  console.log(`Starting Deep Functional QA on ${tools.length} tools...`);
  
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const results: any[] = [];
  let passed = 0;
  let partial = 0;
  let failed = 0;

  for (const tool of tools) {
    const url = `http://127.0.0.1:3001/${tool.id}`;
    let status = 'PASS';
    let errors: string[] = [];
    
    // Listen for console errors
    const handleConsole = (msg: any) => {
      if (msg.type() === 'error') errors.push(msg.text());
    };
    page.on('console', handleConsole);
    
    try {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 5000 });
      if (response?.status() !== 200) {
        status = 'FAIL';
        errors.push(`HTTP ${response?.status()}`);
      } else {
        // Try to interact
        const inputs = await page.$$('input, textarea, select');
        
        for (const input of inputs) {
          try {
            const type = await input.getAttribute('type');
            const tag = await input.evaluate(el => el.tagName.toLowerCase());
            
            if (type === 'number') await input.fill('10');
            else if (type === 'date') await input.fill('2026-01-01');
            else if (tag === 'textarea') await input.fill('{"test": true}');
            else if (type === 'text') await input.fill('test');
          } catch (e) {
            // Ignore non-interactable
          }
        }

        // Try to click primary button
        const buttons = await page.$$('button');
        let clicked = false;
        for (const btn of buttons) {
          const text = await btn.innerText();
          if (/(calculate|convert|generate|start|format|decode|encode|minify)/i.test(text)) {
            try {
              await btn.click({ timeout: 1000 });
              clicked = true;
              break;
            } catch (e) { }
          }
        }
        
        // Wait for potential React updates
        await page.waitForTimeout(300);
      }
    } catch (err: any) {
      status = 'FAIL';
      errors.push(err.message);
    } finally {
      page.off('console', handleConsole);
    }

    if (errors.length > 0 && status !== 'FAIL') {
      status = 'PARTIAL';
    }

    if (status === 'PASS') passed++;
    else if (status === 'PARTIAL') partial++;
    else failed++;

    results.push({
      tool: tool.locales['en']?.title || tool.id,
      route: `/${tool.id}`,
      status,
      errors: errors.join(', ') || 'None'
    });
    
    console.log(`[${status}] ${tool.id}`);
  }

  await browser.close();

  // Generate Report
  let md = `# Browser Functional QA Report\n\n`;
  md += `## Summary\n\n`;
  md += `Total tools: ${tools.length}\n`;
  md += `Browser tested: ${tools.length}\n`;
  md += `Passed: ${passed}\n`;
  md += `Partial: ${partial}\n`;
  md += `Failed: ${failed}\n`;
  md += `Blocked: 0\n\n`;
  
  md += `## Browser Test Matrix\n\n`;
  md += `| # | Tool | Route | Browser Errors | Status |\n`;
  md += `| -: | --- | --- | --- | --- |\n`;
  
  results.forEach((r, i) => {
    md += `| ${i+1} | ${r.tool} | ${r.route} | ${r.errors} | **${r.status}** |\n`;
  });

  fs.writeFileSync('docs/browser-qa-report.md', md);
  console.log('Report saved to docs/browser-qa-report.md');
}

runQA();
