const fs = require('fs');
const content = fs.readFileSync('src/lib/tools/registry.ts', 'utf8');
const matches = [...content.matchAll(/categoryId:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log(Array.from(new Set(matches)));
