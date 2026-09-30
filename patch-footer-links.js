const fs = require('fs');

const translations = {
  es: { disclaimer: "Aviso legal", privacySettings: "Configuración de privacidad" },
  fr: { disclaimer: "Mentions légales", privacySettings: "Paramètres de confidentialité" },
  de: { disclaimer: "Haftungsausschluss", privacySettings: "Datenschutzeinstellungen" },
  pt: { disclaimer: "Aviso Legal", privacySettings: "Configurações de privacidade" },
  it: { disclaimer: "Avvertenze", privacySettings: "Impostazioni sulla privacy" },
  ru: { disclaimer: "Отказ от ответственности", privacySettings: "Настройки конфиденциальности" },
  tr: { disclaimer: "Yasal Uyarı", privacySettings: "Gizlilik Ayarları" },
  ar: { disclaimer: "إخلاء المسؤولية", privacySettings: "إعدادات الخصوصية" },
  hi: { disclaimer: "अस्वीकरण", privacySettings: "गोपनीयता सेटिंग्स" },
  id: { disclaimer: "Penafian", privacySettings: "Pengaturan Privasi" },
  ja: { disclaimer: "免責事項", privacySettings: "プライバシー設定" },
  ko: { disclaimer: "면책 조항", privacySettings: "개인정보 설정" },
  nl: { disclaimer: "Disclaimer", privacySettings: "Privacy-instellingen" },
  pl: { disclaimer: "Zastrzeżenia prawne", privacySettings: "Ustawienia prywatności" },
  bn: { disclaimer: "দাবিত্যাগ", privacySettings: "গোপনীয়তা সেটিংস" }
};

for (const [loc, texts] of Object.entries(translations)) {
  const filePath = `messages/${loc}.json`;
  if (fs.existsSync(filePath)) {
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!data.Footer) data.Footer = {};
    data.Footer.disclaimer = texts.disclaimer;
    data.Footer.privacySettings = texts.privacySettings;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
}

console.log('Successfully patched Footer translations for all locales');
