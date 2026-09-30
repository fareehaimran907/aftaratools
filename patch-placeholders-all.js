const fs = require('fs');

const translations = {
  es: {
    formNamePlaceholder: "Juan Pérez",
    formEmailPlaceholder: "juan@ejemplo.com",
    formSubjectPlaceholder: "¿Cómo podemos ayudar?",
    formMessagePlaceholder: "Escribe tu mensaje aquí..."
  },
  fr: {
    formNamePlaceholder: "Jean Dupont",
    formEmailPlaceholder: "jean@exemple.com",
    formSubjectPlaceholder: "Comment pouvons-nous aider ?",
    formMessagePlaceholder: "Écrivez votre message ici..."
  },
  de: {
    formNamePlaceholder: "Max Mustermann",
    formEmailPlaceholder: "max@beispiel.de",
    formSubjectPlaceholder: "Wie können wir helfen?",
    formMessagePlaceholder: "Schreiben Sie hier Ihre Nachricht..."
  },
  pt: {
    formNamePlaceholder: "João Silva",
    formEmailPlaceholder: "joao@exemplo.com",
    formSubjectPlaceholder: "Como podemos ajudar?",
    formMessagePlaceholder: "Escreva sua mensagem aqui..."
  },
  it: {
    formNamePlaceholder: "Mario Rossi",
    formEmailPlaceholder: "mario@esempio.it",
    formSubjectPlaceholder: "Come possiamo aiutare?",
    formMessagePlaceholder: "Scrivi qui il tuo messaggio..."
  },
  ru: {
    formNamePlaceholder: "Иван Иванов",
    formEmailPlaceholder: "ivan@example.com",
    formSubjectPlaceholder: "Чем мы можем помочь?",
    formMessagePlaceholder: "Напишите ваше сообщение здесь..."
  },
  tr: {
    formNamePlaceholder: "Ahmet Yılmaz",
    formEmailPlaceholder: "ahmet@ornek.com",
    formSubjectPlaceholder: "Nasıl yardımcı olabiliriz?",
    formMessagePlaceholder: "Mesajınızı buraya yazın..."
  },
  ar: {
    formNamePlaceholder: "أحمد محمد",
    formEmailPlaceholder: "ahmed@example.com",
    formSubjectPlaceholder: "كيف يمكننا المساعدة؟",
    formMessagePlaceholder: "اكتب رسالتك هنا..."
  },
  hi: {
    formNamePlaceholder: "राहुल कुमार",
    formEmailPlaceholder: "rahul@example.com",
    formSubjectPlaceholder: "हम कैसे मदद कर सकते हैं?",
    formMessagePlaceholder: "अपना संदेश यहाँ लिखें..."
  },
  id: {
    formNamePlaceholder: "Budi Santoso",
    formEmailPlaceholder: "budi@contoh.com",
    formSubjectPlaceholder: "Bagaimana kami bisa membantu?",
    formMessagePlaceholder: "Tulis pesan Anda di sini..."
  },
  ja: {
    formNamePlaceholder: "山田太郎",
    formEmailPlaceholder: "yamada@example.com",
    formSubjectPlaceholder: "どのようにお手伝いできますか？",
    formMessagePlaceholder: "ここにメッセージを入力してください..."
  },
  ko: {
    formNamePlaceholder: "홍길동",
    formEmailPlaceholder: "hong@example.com",
    formSubjectPlaceholder: "무엇을 도와드릴까요?",
    formMessagePlaceholder: "여기에 메시지를 작성하세요..."
  },
  nl: {
    formNamePlaceholder: "Jan Jansen",
    formEmailPlaceholder: "jan@voorbeeld.nl",
    formSubjectPlaceholder: "Hoe kunnen we helpen?",
    formMessagePlaceholder: "Schrijf hier uw bericht..."
  },
  pl: {
    formNamePlaceholder: "Jan Kowalski",
    formEmailPlaceholder: "jan@przyklad.pl",
    formSubjectPlaceholder: "W czym możemy pomóc?",
    formMessagePlaceholder: "Wpisz swoją wiadomość tutaj..."
  },
  bn: {
    formNamePlaceholder: "আব্দুর রহমান",
    formEmailPlaceholder: "abdur@example.com",
    formSubjectPlaceholder: "আমরা কীভাবে সাহায্য করতে পারি?",
    formMessagePlaceholder: "এখানে আপনার বার্তা লিখুন..."
  }
};

const locales = Object.keys(translations);

for (let loc of locales) {
  const filePath = `messages/${loc}.json`;
  if (fs.existsSync(filePath)) {
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!data.Contact) data.Contact = {};
    Object.assign(data.Contact, translations[loc]);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
}

console.log('Successfully patched all locales with native Contact placeholders');
