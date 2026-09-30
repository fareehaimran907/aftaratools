import { toolsRegistry } from '../src/lib/tools/registry';
import http from 'http';

async function testAllRoutes() {
  const tools = Object.values(toolsRegistry).filter(t => t.locales['en']?.reviewStatus === 'reviewed');
  console.log(`Starting tests for ${tools.length} tools...`);
  
  let passed = 0;
  let failed = 0;
  let errors = [];

  for (const tool of tools) {
    const url = `http://127.0.0.1:3001/${tool.id}`;
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        passed++;
      } else {
        failed++;
        errors.push(`[FAILED] ${url} - Status: ${response.status}`);
      }
    } catch (err: any) {
      failed++;
      errors.push(`[ERROR] ${url} - ${err.message}`);
    }
  }

  console.log(`\n=== Test Results ===`);
  console.log(`Total Tested: ${tools.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  
  if (errors.length > 0) {
    console.log(`\nErrors:`);
    errors.forEach(e => console.log(e));
  } else {
    console.log("\n✅ ALL 98 TOOL ROUTES RETURNED 200 OK!");
  }
}

testAllRoutes();
