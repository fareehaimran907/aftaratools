import fs from 'fs';
import path from 'path';

const translations = {
  en: "Home",
  ar: "الصفحة الرئيسية",
  bn: "হোম",
  de: "Startseite",
  es: "Inicio",
  fr: "Accueil",
  hi: "होम",
  id: "Beranda",
  it: "Home",
  ja: "ホーム",
  ko: "홈",
  nl: "Home",
  pl: "Strona główna",
  pt: "Início",
  ru: "Главная",
  tr: "Ana Sayfa"
};

for (const lang of Object.keys(translations)) {
  const filePath = path.join(process.cwd(), 'messages', `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!data.Navigation) data.Navigation = {};
    data.Navigation.home = translations[lang];
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
  }
}
