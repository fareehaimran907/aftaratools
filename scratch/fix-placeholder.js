const fs = require('fs');
const locales = ['ar', 'bn', 'de', 'es', 'fr', 'hi', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'tr'];

for (const locale of locales) {
  const filePath = `messages/${locale}.json`;
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let data = JSON.parse(content);
  
  if (data.Page) {
    if (data.Page.whatIs) data.Page.whatIs = data.Page.whatIs.replace(/\{[^}]+\}/g, '{title}');
    if (data.Page.howToUse) data.Page.howToUse = data.Page.howToUse.replace(/\{[^}]+\}/g, '{title}');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Fixed {title} placeholder in ${locale}.json`);
  }
}
