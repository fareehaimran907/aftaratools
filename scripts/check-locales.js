const fs = require('fs');
const path = require('path');

const locales = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ru', 'tr', 'ar', 'hi', 'id', 'ja', 'ko', 'nl', 'pl', 'bn'];
const messagesDir = path.join(__dirname, '..', 'messages');

// Load en.json as truth
let enData;
try {
  enData = JSON.parse(fs.readFileSync(path.join(messagesDir, 'en.json'), 'utf8'));
} catch (e) {
  console.error("Failed to load en.json:", e);
  process.exit(1);
}

// Helper to flatten object for easy comparison
function flattenObject(ob) {
  let toReturn = {};
  for (let i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if (typeof ob[i] == 'object' && ob[i] !== null) {
      let flatObject = flattenObject(ob[i]);
      for (let x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        toReturn[i + '.' + x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
}

const enFlat = flattenObject(enData);
const enKeys = Object.keys(enFlat);

function getPlaceholders(str) {
  const matches = str.match(/\{[^}]+\}/g);
  return matches ? matches.sort() : [];
}

const summary = [];

locales.forEach(locale => {
  if (locale === 'en') return;
  
  const localePath = path.join(messagesDir, `${locale}.json`);
  let localeData = {};
  let localeFlat = {};
  
  if (fs.existsSync(localePath)) {
    try {
      localeData = JSON.parse(fs.readFileSync(localePath, 'utf8'));
      localeFlat = flattenObject(localeData);
    } catch (e) {
      console.error(`Malformed JSON in ${locale}.json:`, e.message);
    }
  }

  const localeKeys = Object.keys(localeFlat);
  
  const missingKeys = enKeys.filter(key => !localeKeys.includes(key));
  const orphanKeys = localeKeys.filter(key => !enKeys.includes(key));
  
  const emptyValues = [];
  const untranslatedValues = [];
  const placeholderMismatches = [];

  localeKeys.forEach(key => {
    if (enKeys.includes(key)) {
      const val = localeFlat[key];
      const enVal = enFlat[key];
      
      if (val === "" || val === null) {
        emptyValues.push(key);
      } else if (val === enVal && typeof val === 'string' && val.match(/[a-zA-Z]{3,}/)) {
        // Basic check for identical strings (excluding short terms or symbols)
        untranslatedValues.push(key);
      } else if (typeof val === 'string' && typeof enVal === 'string') {
        const enPh = getPlaceholders(enVal).join(',');
        const locPh = getPlaceholders(val).join(',');
        if (enPh !== locPh) {
          placeholderMismatches.push({ key, en: enPh, loc: locPh });
        }
      }
    }
  });

  const totalFlagged = missingKeys.length + emptyValues.length + untranslatedValues.length + placeholderMismatches.length;

  summary.push({
    locale,
    checked: enKeys.length,
    missing: missingKeys.length,
    empty: emptyValues.length,
    untranslated: untranslatedValues.length,
    placeholderMismatches: placeholderMismatches.length,
    orphans: orphanKeys.length,
    flagged: totalFlagged
  });

  if (totalFlagged > 0 || orphanKeys.length > 0) {
    console.log(`\n=== Report for ${locale} ===`);
    if (missingKeys.length > 0) console.log(`Missing keys: ${missingKeys.length}`, missingKeys.slice(0, 10));
    if (emptyValues.length > 0) console.log(`Empty values: ${emptyValues.length}`, emptyValues.slice(0, 10));
    if (untranslatedValues.length > 0) console.log(`Untranslated: ${untranslatedValues.length}`, untranslatedValues.slice(0, 10));
    if (placeholderMismatches.length > 0) console.log(`Placeholder mismatch: ${placeholderMismatches.length}`, placeholderMismatches.slice(0, 10));
    if (orphanKeys.length > 0) console.log(`Orphans: ${orphanKeys.length}`, orphanKeys.slice(0, 10));
  }
});

console.log("\n=== SUMMARY TABLE ===");
console.table(summary);

// Exit code based on failures
const totalFailures = summary.reduce((acc, curr) => acc + curr.flagged, 0);
if (totalFailures > 0) {
  console.log(`\n[FAIL] Found ${totalFailures} issues across locales. Please fix them.`);
  process.exit(1);
} else {
  console.log(`\n[PASS] All locales are complete and match en.json structure.`);
}
