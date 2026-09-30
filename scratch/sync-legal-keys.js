const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync('./messages/en.json', 'utf8'));
const locales = ['es', 'fr', 'de', 'pt', 'it', 'ru', 'tr', 'ar', 'hi', 'id', 'ja', 'ko', 'nl', 'pl', 'bn'];

const keysToSync = ['About', 'Contact', 'Privacy', 'Terms', 'Cookie'];

locales.forEach(locale => {
  const file = `./messages/${locale}.json`;
  if (fs.existsSync(file)) {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    
    keysToSync.forEach(key => {
      data[key] = { ...en[key] }; // Just copy the English object for now to prevent crashes
    });
    
    data.Footer = data.Footer || {};
    data.Footer.cookie = en.Footer.cookie;

    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    console.log(`Synced ${key} to ${locale}.json`);
  }
});
