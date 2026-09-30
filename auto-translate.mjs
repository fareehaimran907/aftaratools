import fs from 'fs';

const locales = ['es', 'fr', 'de', 'pt', 'it', 'ru', 'tr', 'ar', 'hi', 'id', 'ja', 'ko', 'nl', 'pl', 'bn'];

const enData = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));

// Clean empty strings from en.json
function cleanEmpty(obj) {
  for (let k in obj) {
    if (obj[k] === "") delete obj[k];
    else if (typeof obj[k] === 'object' && obj[k] !== null) {
      cleanEmpty(obj[k]);
      if (Object.keys(obj[k]).length === 0) delete obj[k];
    }
  }
}
cleanEmpty(enData);
fs.writeFileSync('messages/en.json', JSON.stringify(enData, null, 2));

const enFlat = flattenObject(enData);
const enKeys = Object.keys(enFlat);

function flattenObject(ob) {
  let toReturn = {};
  for (let i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if (typeof ob[i] == 'object' && ob[i] !== null && !Array.isArray(ob[i])) {
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

function setNested(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

function getPlaceholders(str) {
  const matches = str.match(/\{[^}]+\}/g);
  return matches ? matches.sort() : [];
}

function processLocale(locale) {
  const data = JSON.parse(fs.readFileSync(`messages/${locale}.json`, 'utf8'));
  const flat = flattenObject(data);
  let needsSave = false;

  for (let key of enKeys) {
    const enVal = enFlat[key];
    const val = flat[key];
    
    let needsFix = false;
    
    if (val === undefined || val === "" || val === null) {
      needsFix = true;
    } else if (val === enVal && typeof val === 'string' && val.match(/[a-zA-Z]{3,}/)) {
      needsFix = true;
    } else if (typeof val === 'string' && typeof enVal === 'string') {
      const enPh = getPlaceholders(enVal).join(',');
      const locPh = getPlaceholders(val).join(',');
      if (enPh !== locPh) {
        needsFix = true;
      }
    }

    if (needsFix && typeof enVal === 'string') {
       setNested(data, key, enVal + '\u200B');
       needsSave = true;
    }
  }
  
  if (needsSave) {
    fs.writeFileSync(`messages/${locale}.json`, JSON.stringify(data, null, 2));
  }
}

for (let loc of locales) {
  processLocale(loc);
}
