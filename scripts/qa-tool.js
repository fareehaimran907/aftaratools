const fs = require('fs');
const path = require('path');

const locales = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ru', 'tr', 'ar', 'hi', 'id', 'ja', 'ko', 'nl', 'pl', 'bn'];
const toolSlug = process.argv[2];

if (!toolSlug) {
  console.error("Please provide a tool slug (e.g., node scripts/qa-tool.js age-calculator)");
  process.exit(1);
}

// Ensure content files exist for all locales
console.log(`\n=== QA Report for ${toolSlug} ===\n`);

let missingContent = 0;
for (const locale of locales) {
  const filePath = path.join(__dirname, '..', 'src', 'content', 'tools', locale, `${toolSlug}.json`);
  if (!fs.existsSync(filePath)) {
    console.warn(`[WARNING] Missing JSON content for locale: ${locale}`);
    missingContent++;
  } else {
    // Basic validation
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (!data.primaryKeyword || !(data.title || data.seoTitle) || !data.h1) {
        console.error(`[ERROR] Invalid JSON schema for ${locale}: Missing primary fields.`);
      } else {
        console.log(`[PASS] JSON content for ${locale} is well-formed.`);
      }
    } catch (e) {
      console.error(`[ERROR] Malformed JSON in ${locale}:`, e.message);
    }
  }
}

console.log(`\nQA Summary: ${16 - missingContent}/16 content files present.\n`);
console.log('To fully verify URLs, structured data, and hreflang, ensure the Next.js server is running and run SEO spider tools.');
