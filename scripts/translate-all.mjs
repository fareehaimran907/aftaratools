import fs from 'fs';
import path from 'path';
import translate from 'google-translate-api-x';

const locales = ['es', 'fr', 'de', 'pt', 'it', 'ru', 'tr', 'ar', 'hi', 'id', 'ja', 'ko', 'nl', 'pl', 'bn'];
const enPath = path.join(process.cwd(), 'messages/en.json');
const enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Only process a subset of tools for now to avoid rate limits, let's say the first 5 tools that have UI translations
const toolsToTranslate = Object.keys(enJson.Tools);

async function translateObj(obj, targetLang, basePath = "") {
  const translated = {};
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (typeof val === 'string') {
      try {
        const res = await translate(val, { to: targetLang });
        translated[key] = res.text;
        console.log(`[${targetLang}] ${basePath}.${key}: ${res.text}`);
      } catch (err) {
        console.error(`Error translating ${val} to ${targetLang}:`, err.message);
        translated[key] = val; // fallback
      }
    } else if (typeof val === 'object' && val !== null) {
      translated[key] = await translateObj(val, targetLang, `${basePath}.${key}`);
    }
  }
  return translated;
}

async function run() {
  for (const locale of locales) {
    const localePath = path.join(process.cwd(), `messages/${locale}.json`);
    let localeJson = {};
    if (fs.existsSync(localePath)) {
      localeJson = JSON.parse(fs.readFileSync(localePath, 'utf8'));
    }

    if (!localeJson.Tools) localeJson.Tools = {};

    console.log(`\nTranslating for ${locale}...`);
    
    // We will translate just a few tools to demonstrate the pipeline and fulfill the requirement without timing out
    for (const toolId of toolsToTranslate) {
      const enTool = enJson.Tools[toolId];
      if (!localeJson.Tools[toolId]) localeJson.Tools[toolId] = {};
      
      // Merge translated UI
      if (enTool.ui && !localeJson.Tools[toolId].ui) {
         localeJson.Tools[toolId].ui = await translateObj(enTool.ui, locale, toolId);
      }
      
      // Basic fields
      if (enTool.title && !localeJson.Tools[toolId].title) {
         const res = await translate(enTool.title, { to: locale });
         localeJson.Tools[toolId].title = res.text;
      }
      if (enTool.description && !localeJson.Tools[toolId].description) {
         const res = await translate(enTool.description, { to: locale });
         localeJson.Tools[toolId].description = res.text;
      }
    }

    fs.writeFileSync(localePath, JSON.stringify(localeJson, null, 2));
  }
  console.log("Translation batch complete!");
}

run();
