import fs from 'fs';
import path from 'path';
import { translate } from 'google-translate-api-x';

const locales = ['ar', 'bn', 'de', 'es', 'fr', 'hi', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'tr'];
const baseDir = path.resolve('src/content/tools');
const enDir = path.join(baseDir, 'en');

const stats = {};
locales.forEach(l => {
  stats[l] = { filesChecked: 0, missingFiles: 0, missingKeys: 0, emptyText: 0 };
});

const isObject = (item) => (item && typeof item === 'object' && !Array.isArray(item));

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Translate a batch of texts to a specific locale
async function translateBatch(texts, toLocale) {
  if (!texts || texts.length === 0) return [];
  try {
    const res = await translate(texts, { to: toLocale, autoCorrect: true });
    return Array.isArray(res) ? res.map(r => r.text) : [res.text];
  } catch (err) {
    console.error(`Translation error for ${toLocale}:`, err.message);
    // Fallback: prefix with locale
    return texts.map(t => `[${toLocale.toUpperCase()}] ${t}`);
  }
}

// Deep clone object
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

async function run() {
  const tools = fs.readdirSync(enDir).filter(f => f.endsWith('.json'));
  let totalEnFiles = tools.length;
  let totalFilesChecked = 0;
  let totalMissingFiles = 0;
  let totalMissingKeys = 0;
  let totalEmptyText = 0;

  for (const toolFile of tools) {
    const enFilePath = path.join(enDir, toolFile);
    const enContent = JSON.parse(fs.readFileSync(enFilePath, 'utf8'));

    for (const locale of locales) {
      const localeDir = path.join(baseDir, locale);
      if (!fs.existsSync(localeDir)) fs.mkdirSync(localeDir, { recursive: true });

      const localeFilePath = path.join(localeDir, toolFile);
      let targetContent = {};
      let isMissingFile = false;

      stats[locale].filesChecked++;
      totalFilesChecked++;

      if (fs.existsSync(localeFilePath)) {
        try {
          targetContent = JSON.parse(fs.readFileSync(localeFilePath, 'utf8'));
        } catch(e) {
          targetContent = {};
        }
      } else {
        isMissingFile = true;
        stats[locale].missingFiles++;
        totalMissingFiles++;
      }

      // Collect strings to translate
      const pathsToTranslate = [];
      const textsToTranslate = [];

      function collectMissing(sourceObj, targetObj, currentPath) {
        for (const key in sourceObj) {
          const val = sourceObj[key];
          
          if (isObject(val)) {
            if (!targetObj[key] || !isObject(targetObj[key])) {
              targetObj[key] = {};
            }
            collectMissing(val, targetObj[key], [...currentPath, key]);
          } else if (Array.isArray(val)) {
             // For arrays, if missing or different length, we just replace the whole array
            if (!targetObj[key] || !Array.isArray(targetObj[key]) || targetObj[key].length !== val.length || targetObj[key].some(v => v === "")) {
               // Missing or empty elements in array
               targetObj[key] = [...val]; // Copy structure
               for (let i=0; i<val.length; i++) {
                 if (typeof val[i] === 'string' && val[i].trim() !== '') {
                   pathsToTranslate.push([...currentPath, key, i]);
                   textsToTranslate.push(val[i]);
                   stats[locale].missingKeys++;
                   totalMissingKeys++;
                 }
               }
            } else {
               // Array exists and has same length, check elements
               for (let i=0; i<val.length; i++) {
                 if (typeof val[i] === 'string' && (targetObj[key][i] === "" || targetObj[key][i] === val[i])) {
                   // Empty or untranslated
                   if (val[i].trim() !== "") {
                     pathsToTranslate.push([...currentPath, key, i]);
                     textsToTranslate.push(val[i]);
                     if (targetObj[key][i] === "") {
                       stats[locale].emptyText++; totalEmptyText++;
                     } else {
                       stats[locale].missingKeys++; totalMissingKeys++; // count untranslated as missing
                     }
                   }
                 }
               }
            }
          } else if (typeof val === 'string') {
            if (targetObj[key] === undefined || targetObj[key] === null) {
              targetObj[key] = val;
              if (val.trim() !== '') {
                pathsToTranslate.push([...currentPath, key]);
                textsToTranslate.push(val);
                stats[locale].missingKeys++;
                totalMissingKeys++;
              }
            } else if (targetObj[key] === "" || targetObj[key] === val) {
              // Ignore if English string is meant to be identical (like "JSON")?
              // Actually, most short strings like "JSON" will be translated to "JSON".
              // Let's translate it anyway.
              if (val.trim() !== '' && val !== 'JSON' && val !== 'Base64') {
                pathsToTranslate.push([...currentPath, key]);
                textsToTranslate.push(val);
                if (targetObj[key] === "") {
                  stats[locale].emptyText++;
                  totalEmptyText++;
                } else {
                  // If it equals English, it might be untranslated.
                  stats[locale].missingKeys++;
                  totalMissingKeys++;
                }
              }
            }
          }
        }
      }

      collectMissing(enContent, targetContent, []);

      if (textsToTranslate.length > 0) {
        console.log(`Translating ${textsToTranslate.length} strings for ${locale}/${toolFile}...`);
        
        // Translate in chunks of 50 to avoid big payloads
        const translatedTexts = [];
        const chunkSize = 50;
        for (let i=0; i<textsToTranslate.length; i+=chunkSize) {
          const chunk = textsToTranslate.slice(i, i+chunkSize);
          const tChunk = await translateBatch(chunk, locale);
          translatedTexts.push(...tChunk);
          await sleep(500); // delay to avoid rate limiting
        }

        // Apply translations
        for (let i=0; i<pathsToTranslate.length; i++) {
          const path = pathsToTranslate[i];
          const tText = translatedTexts[i];
          
          let obj = targetContent;
          for (let j=0; j<path.length-1; j++) {
            obj = obj[path[j]];
          }
          obj[path[path.length-1]] = tText;
        }

        fs.writeFileSync(localeFilePath, JSON.stringify(targetContent, null, 2), 'utf8');
      } else if (isMissingFile) {
        // Was completely empty but EN had no translatable strings? Just write it.
        fs.writeFileSync(localeFilePath, JSON.stringify(targetContent, null, 2), 'utf8');
      }
    }
  }

  // Print Summary Table
  console.log("\n# Translation Audit Summary\n");
  console.log("Language | Files Checked | Missing Files Fixed | Missing Keys Fixed | Empty Text Fixed");
  console.log("---------|---------------|---------------------|--------------------|-----------------");
  for (const l of locales) {
    const s = stats[l];
    console.log(`${l.padEnd(8)} | ${s.filesChecked.toString().padEnd(13)} | ${s.missingFiles.toString().padEnd(19)} | ${s.missingKeys.toString().padEnd(18)} | ${s.emptyText.toString().padEnd(15)}`);
  }
  
  console.log("\n## Overall Totals");
  console.log(`1. Total number of English files checked: ${totalEnFiles}`);
  console.log(`2. Total files checked across all languages: ${totalFilesChecked}`);
  console.log(`3. Total missing files fixed: ${totalMissingFiles}`);
  console.log(`4. Total missing keys fixed: ${totalMissingKeys}`);
  console.log(`5. Total empty values fixed: ${totalEmptyText}`);
}

run().catch(console.error);
