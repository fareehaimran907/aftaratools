const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, 'messages');
const enPath = path.join(messagesDir, 'en.json');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Recursive merge: target is EN (source of truth for structure), source is LOCALE
function mergeMessages(target, source) {
  const result = Array.isArray(target) ? [] : {};
  
  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      if (source && source.hasOwnProperty(key) && typeof source[key] !== 'object') {
        // If primitive exists in source, use it
        result[key] = source[key];
      } else if (typeof target[key] === 'object' && target[key] !== null) {
        // Recurse into object
        result[key] = mergeMessages(target[key], source ? source[key] : undefined);
      } else {
        // Fallback to target (EN)
        result[key] = target[key];
      }
    }
  }
  return result;
}

const files = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json') && f !== 'en.json');

for (const file of files) {
  const filePath = path.join(messagesDir, file);
  try {
    const localeData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const mergedData = mergeMessages(enData, localeData);
    
    // Some tools might have been renamed completely by the translator, e.g. "Tip" instead of "tip-calculator".
    // We will just let the structural merge pull in EN for missing keys, 
    // effectively adding back "tip-calculator" in English for those locales.
    
    fs.writeFileSync(filePath, JSON.stringify(mergedData, null, 2));
    console.log(`Synced ${file}`);
  } catch (err) {
    console.error(`Error syncing ${file}:`, err.message);
  }
}
