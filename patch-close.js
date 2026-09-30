const fs = require('fs');

const closeTranslations = {
  en: "Close",
  es: "Cerrar",
  fr: "Fermer",
  de: "Schließen",
  pt: "Fechar",
  it: "Chiudi",
  ru: "Закрыть",
  tr: "Kapat",
  ar: "إغلاق",
  hi: "बंद करें",
  id: "Tutup",
  ja: "閉じる",
  ko: "닫기",
  nl: "Sluiten",
  pl: "Zamknij",
  bn: "বন্ধ করুন"
};

for (const [loc, translation] of Object.entries(closeTranslations)) {
  const filePath = `messages/${loc}.json`;
  if (fs.existsSync(filePath)) {
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!data.Consent) data.Consent = {};
    data.Consent.close = translation;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
}

console.log('Successfully patched Close translations for all locales');
