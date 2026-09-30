import fs from 'fs';
import path from 'path';

const langs = ['en', 'ar', 'bn', 'de', 'es', 'fr', 'hi', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'tr'];

const translations = {
  en: {
    Navigation: { categories: "Categories", about: "About Us", contact: "Contact" },
    Footer: {
      tagline: "The premium productivity platform for all your daily calculation, conversion, and generation needs.",
      popularTools: "Popular Tools", company: "Company", privacy: "Privacy Policy",
      terms: "Terms of Service", cookie: "Cookie Policy", allRightsReserved: "All rights reserved.",
      builtWith: "Built with Next.js", madeWithHeart: "Made with ❤️"
    }
  },
  ar: {
    Navigation: { categories: "الفئات", about: "معلومات عنا", contact: "اتصل بنا" },
    Footer: {
      tagline: "منصة الإنتاجية المميزة لجميع احتياجاتك اليومية من الحسابات والتحويلات والتوليد.",
      popularTools: "أدوات شائعة", company: "الشركة", privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة", cookie: "سياسة ملفات تعريف الارتباط", allRightsReserved: "كل الحقوق محفوظة.",
      builtWith: "مبني بـ Next.js", madeWithHeart: "صُنع بـ ❤️"
    }
  },
  bn: {
    Navigation: { categories: "বিভাগ", about: "আমাদের সম্পর্কে", contact: "যোগাযোগ" },
    Footer: {
      tagline: "আপনার সমস্ত দৈনন্দিন গণনা, রূপান্তর এবং জেনারেশনের প্রয়োজনের জন্য প্রিমিয়াম প্রোডাক্টিভিটি প্ল্যাটফর্ম।",
      popularTools: "জনপ্রিয় টুলস", company: "কোম্পানি", privacy: "গোপনীয়তা নীতি",
      terms: "পরিষেবার শর্তাবলী", cookie: "কুকি নীতি", allRightsReserved: "সর্বস্বত্ব সংরক্ষিত।",
      builtWith: "Next.js দিয়ে তৈরি", madeWithHeart: "❤️ দিয়ে তৈরি"
    }
  },
  de: {
    Navigation: { categories: "Kategorien", about: "Über uns", contact: "Kontakt" },
    Footer: {
      tagline: "Die Premium-Produktivitätsplattform für all Ihre täglichen Berechnungs-, Konvertierungs- und Generierungsanforderungen.",
      popularTools: "Beliebte Tools", company: "Unternehmen", privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen", cookie: "Cookie-Richtlinie", allRightsReserved: "Alle Rechte vorbehalten.",
      builtWith: "Erstellt mit Next.js", madeWithHeart: "Gemacht mit ❤️"
    }
  },
  es: {
    Navigation: { categories: "Categorías", about: "Acerca de", contact: "Contacto" },
    Footer: {
      tagline: "La plataforma de productividad premium para todas tus necesidades diarias de cálculo, conversión y generación.",
      popularTools: "Herramientas populares", company: "Empresa", privacy: "Política de Privacidad",
      terms: "Términos de Servicio", cookie: "Política de Cookies", allRightsReserved: "Todos los derechos reservados.",
      builtWith: "Creado con Next.js", madeWithHeart: "Hecho con ❤️"
    }
  },
  fr: {
    Navigation: { categories: "Catégories", about: "À propos", contact: "Contact" },
    Footer: {
      tagline: "La plateforme de productivité premium pour tous vos besoins quotidiens en matière de calcul, conversion et génération.",
      popularTools: "Outils populaires", company: "Entreprise", privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation", cookie: "Politique relative aux Cookies", allRightsReserved: "Tous droits réservés.",
      builtWith: "Créé avec Next.js", madeWithHeart: "Fait avec ❤️"
    }
  },
  hi: {
    Navigation: { categories: "श्रेणियाँ", about: "हमारे बारे में", contact: "संपर्क करें" },
    Footer: {
      tagline: "आपकी सभी दैनिक गणना, रूपांतरण और जनरेशन आवश्यकताओं के लिए प्रीमियम उत्पादकता प्लेटफ़ॉर्म।",
      popularTools: "लोकप्रिय उपकरण", company: "कंपनी", privacy: "गोपनीयता नीति",
      terms: "सेवा की शर्तें", cookie: "कुकी नीति", allRightsReserved: "सर्वाधिकार सुरक्षित।",
      builtWith: "Next.js के साथ निर्मित", madeWithHeart: "❤️ के साथ निर्मित"
    }
  },
  id: {
    Navigation: { categories: "Kategori", about: "Tentang Kami", contact: "Kontak" },
    Footer: {
      tagline: "Platform produktivitas premium untuk semua kebutuhan komputasi, konversi, dan generasi harian Anda.",
      popularTools: "Alat Populer", company: "Perusahaan", privacy: "Kebijakan Privasi",
      terms: "Ketentuan Layanan", cookie: "Kebijakan Cookie", allRightsReserved: "Seluruh hak cipta dilindungi undang-undang.",
      builtWith: "Dibuat dengan Next.js", madeWithHeart: "Dibuat dengan ❤️"
    }
  },
  it: {
    Navigation: { categories: "Categorie", about: "Chi siamo", contact: "Contatti" },
    Footer: {
      tagline: "La piattaforma di produttività premium per tutte le tue esigenze quotidiane di calcolo, conversione e generazione.",
      popularTools: "Strumenti popolari", company: "Azienda", privacy: "Informativa sulla Privacy",
      terms: "Termini di Servizio", cookie: "Informativa sui Cookie", allRightsReserved: "Tutti i diritti riservati.",
      builtWith: "Realizzato con Next.js", madeWithHeart: "Fatto con ❤️"
    }
  },
  ja: {
    Navigation: { categories: "カテゴリ", about: "私たちについて", contact: "お問い合わせ" },
    Footer: {
      tagline: "日々の計算、変換、生成のニーズに応えるプレミアム生産性プラットフォーム。",
      popularTools: "人気のツール", company: "企業", privacy: "プライバシーポリシー",
      terms: "利用規約", cookie: "Cookieポリシー", allRightsReserved: "無断転載を禁じます。",
      builtWith: "Next.jsで構築", madeWithHeart: "❤️で作られました"
    }
  },
  ko: {
    Navigation: { categories: "카테고리", about: "회사 소개", contact: "연락처" },
    Footer: {
      tagline: "귀하의 일상적인 계산, 변환 및 생성 요구를 위한 프리미엄 생산성 플랫폼.",
      popularTools: "인기 도구", company: "회사", privacy: "개인정보처리방침",
      terms: "서비스 이용약관", cookie: "쿠키 정책", allRightsReserved: "판권 소유.",
      builtWith: "Next.js로 구축", madeWithHeart: "❤️로 제작됨"
    }
  },
  nl: {
    Navigation: { categories: "Categorieën", about: "Over ons", contact: "Contact" },
    Footer: {
      tagline: "Hét premium productiviteitsplatform voor al je dagelijkse berekenings-, conversie- en generatiebehoeften.",
      popularTools: "Populaire tools", company: "Bedrijf", privacy: "Privacybeleid",
      terms: "Servicevoorwaarden", cookie: "Cookiebeleid", allRightsReserved: "Alle rechten voorbehouden.",
      builtWith: "Gebouwd met Next.js", madeWithHeart: "Gemaakt met ❤️"
    }
  },
  pl: {
    Navigation: { categories: "Kategorie", about: "O nas", contact: "Kontakt" },
    Footer: {
      tagline: "Platforma produktywności premium dla wszystkich codziennych potrzeb w zakresie obliczeń, konwersji i generowania.",
      popularTools: "Popularne narzędzia", company: "Firma", privacy: "Polityka Prywatności",
      terms: "Warunki Świadczenia Usług", cookie: "Polityka Plików Cookie", allRightsReserved: "Wszelkie prawa zastrzeżone.",
      builtWith: "Zbudowano za pomocą Next.js", madeWithHeart: "Stworzone z ❤️"
    }
  },
  pt: {
    Navigation: { categories: "Categorias", about: "Sobre Nós", contact: "Contato" },
    Footer: {
      tagline: "A plataforma de produtividade premium para todas as suas necessidades diárias de cálculo, conversão e geração.",
      popularTools: "Ferramentas Populares", company: "Empresa", privacy: "Política de Privacidade",
      terms: "Termos de Serviço", cookie: "Política de Cookies", allRightsReserved: "Todos os direitos reservados.",
      builtWith: "Construído com Next.js", madeWithHeart: "Feito com ❤️"
    }
  },
  ru: {
    Navigation: { categories: "Категории", about: "О нас", contact: "Контакты" },
    Footer: {
      tagline: "Платформа премиум-класса для всех ваших ежедневных вычислений, конвертаций и генераций.",
      popularTools: "Популярные инструменты", company: "Компания", privacy: "Политика Конфиденциальности",
      terms: "Условия Обслуживания", cookie: "Политика Использования Файлов Cookie", allRightsReserved: "Все права защищены.",
      builtWith: "Создано с помощью Next.js", madeWithHeart: "Сделано с ❤️"
    }
  },
  tr: {
    Navigation: { categories: "Kategoriler", about: "Hakkımızda", contact: "İletişim" },
    Footer: {
      tagline: "Tüm günlük hesaplama, dönüştürme ve oluşturma ihtiyaçlarınız için premium üretkenlik platformu.",
      popularTools: "Popüler Araçlar", company: "Şirket", privacy: "Gizlilik Politikası",
      terms: "Hizmet Şartları", cookie: "Çerez Politikası", allRightsReserved: "Tüm hakları saklıdır.",
      builtWith: "Next.js ile oluşturuldu", madeWithHeart: "❤️ ile yapıldı"
    }
  }
};

for (const lang of langs) {
  const filePath = path.join(process.cwd(), 'messages', `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.Navigation = translations[lang].Navigation;
    data.Footer = translations[lang].Footer;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
  }
}
