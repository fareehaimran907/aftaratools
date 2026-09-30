import fs from 'fs';
import path from 'path';

const locales = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ru', 'tr', 'ar', 'hi', 'id', 'ja', 'ko', 'nl', 'pl'];
const messagesDir = path.join(process.cwd(), 'messages');

const enContent = JSON.parse(fs.readFileSync(path.join(messagesDir, 'en.json'), 'utf-8'));

function checkKeys(obj, refObj, pathPrefix = '') {
  let hasError = false;
  for (const key in refObj) {
    const currentPath = pathPrefix ? `${pathPrefix}.${key}` : key;
    if (!(key in obj)) {
      console.error(`Missing key: ${currentPath}`);
      hasError = true;
    } else if (typeof refObj[key] === 'object' && refObj[key] !== null) {
      if (checkKeys(obj[key], refObj[key], currentPath)) {
        hasError = true;
      }
    }
  }
  return hasError;
}

let failed = false;

for (const locale of locales) {
  if (locale === 'en') continue;
  const filePath = path.join(messagesDir, `${locale}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing locale file: ${locale}.json`);
    failed = true;
    continue;
  }
  const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  console.log(`Checking ${locale}.json...`);
  if (checkKeys(content, enContent)) {
    failed = true;
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log("i18n check passed!");
}
