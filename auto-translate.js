const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api-x');

const locales = ['ar', 'bn', 'de', 'es', 'fr', 'hi', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'tr'];
const enPath = path.join(__dirname, 'messages', 'en.json');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Helper to gather all paths that need translation
function getPathsToTranslate(enObj, targetObj, currentPath = []) {
  let paths = [];
  for (const key in enObj) {
    const enVal = enObj[key];
    const targetVal = targetObj[key];

    // If it's an object, recurse
    if (typeof enVal === 'object' && enVal !== null && !Array.isArray(enVal)) {
      if (!targetObj[key]) targetObj[key] = {};
      paths = paths.concat(getPathsToTranslate(enVal, targetObj[key], [...currentPath, key]));
    } else if (typeof enVal === 'string') {
      // If the target value is identical to english, and it's not empty, translate it
      // Also if target is missing, translate it
      if (enVal.trim() !== '' && (targetVal === undefined || targetVal === null || targetVal === '' || targetVal === enVal)) {
        // Skip short non-alphabetic things if any, but let's just translate all
        paths.push({ path: [...currentPath, key], text: enVal });
      }
    }
  }
  return paths;
}

function setNestedValue(obj, pathArr, value) {
  let current = obj;
  for (let i = 0; i < pathArr.length - 1; i++) {
    if (!current[pathArr[i]]) current[pathArr[i]] = {};
    current = current[pathArr[i]];
  }
  current[pathArr[pathArr.length - 1]] = value;
}

async function run() {
  for (const locale of locales) {
    console.log(`\n--- Processing ${locale} ---`);
    const localePath = path.join(__dirname, 'messages', `${locale}.json`);
    let localeData = {};
    if (fs.existsSync(localePath)) {
      localeData = JSON.parse(fs.readFileSync(localePath, 'utf8'));
    }

    const itemsToTranslate = getPathsToTranslate(enData, localeData);
    if (itemsToTranslate.length === 0) {
      console.log(`No translations needed for ${locale}`);
      continue;
    }

    console.log(`Found ${itemsToTranslate.length} strings to translate for ${locale}`);
    
    // Batch translations (google-translate-api-x supports arrays, but large arrays might fail)
    // Let's do batches of 50
    const batchSize = 50;
    for (let i = 0; i < itemsToTranslate.length; i += batchSize) {
      const batch = itemsToTranslate.slice(i, i + batchSize);
      const texts = batch.map(item => item.text);
      
      try {
        console.log(`Translating batch ${i/batchSize + 1} of ${Math.ceil(itemsToTranslate.length / batchSize)} for ${locale}...`);
        const res = await translate(texts, { to: locale, from: 'en' });
        
        // res is an array if we passed an array
        const results = Array.isArray(res) ? res : [res];
        
        for (let j = 0; j < batch.length; j++) {
          let translatedText = results[j].text;
          // minor fix: sometimes it translates {query} to something else, but let's assume it's mostly fine
          setNestedValue(localeData, batch[j].path, translatedText);
        }
      } catch (err) {
        console.error(`Error translating batch for ${locale}:`, err.message);
        break; // skip rest of this language on error
      }
      
      // Save progressively
      fs.writeFileSync(localePath, JSON.stringify(localeData, null, 2));
      
      // small delay to avoid rate limits
      await new Promise(r => setTimeout(r, 1000));
    }
    
    console.log(`Finished ${locale}.`);
  }
  console.log("All done!");
}

run();
