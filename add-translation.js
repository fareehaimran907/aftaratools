const fs = require('fs');
const path = require('path');

const translations = {
  ar: {
    title: "محول القراءة السريعة (Bionic)",
    description: "",
    ui: {
      inputText: "نص الإدخال",
      placeholder: "الصق أو اكتب النص هنا...",
      clear: "مسح",
      bionicOutput: "الإخراج",
      copyResult: "نسخ النتيجة",
      emptyOutput: "سيظهر ناتج القراءة السريعة هنا...",
      howItWorksTitle: "كيف تعمل:",
      howItWorksDescription: "تطبق هذه الأداة تقنية القراءة السريعة من خلال إبراز الأحرف الأولى من الكلمات. يوجه هذا عينيك عبر النص ويكمل عقلك الكلمة، مما يتيح لك القراءة بشكل أسرع وبتركيز أكبر."
    }
  },
  bn: {
    title: "বায়োনিক রিডিং কনভার্টার",
    description: "",
    ui: {
      inputText: "ইনপুট টেক্সট",
      placeholder: "আপনার টেক্সট এখানে পেস্ট বা টাইপ করুন...",
      clear: "মুছুন",
      bionicOutput: "বায়োনিক আউটপুট",
      copyResult: "ফলাফল কপি করুন",
      emptyOutput: "বায়োনিক রিডিং আউটপুট এখানে প্রদর্শিত হবে...",
      howItWorksTitle: "কিভাবে কাজ করে:",
      howItWorksDescription: "এই টুলটি শব্দের প্রথম দিকের অক্ষরগুলো বোল্ড করে দ্রুত পড়ার একটি কৌশল প্রয়োগ করে। এটি টেক্সটের মধ্য দিয়ে আপনার চোখকে পথ দেখায় এবং আপনার মস্তিষ্ক শব্দটি সম্পূর্ণ করে, যা আপনাকে দ্রুত এবং আরও মনোযোগ দিয়ে পড়তে সাহায্য করে।"
    }
  },
  de: {
    title: "Bionic Reading Konverter",
    description: "",
    ui: {
      inputText: "Eingabetext",
      placeholder: "Fügen Sie hier Ihren Text ein oder tippen Sie ihn...",
      clear: "Löschen",
      bionicOutput: "Bionic-Ausgabe",
      copyResult: "Ergebnis kopieren",
      emptyOutput: "Die Bionic Reading-Ausgabe wird hier angezeigt...",
      howItWorksTitle: "Wie es funktioniert:",
      howItWorksDescription: "Dieses Tool implementiert eine Schnelllesetechnik, indem die Anfangsbuchstaben von Wörtern hervorgehoben werden. Dies führt Ihre Augen durch den Text und Ihr Gehirn vervollständigt das Wort, sodass Sie schneller und fokussierter lesen können."
    }
  },
  es: {
    title: "Convertidor de Lectura Biónica",
    description: "",
    ui: {
      inputText: "Texto de entrada",
      placeholder: "Pega o escribe tu texto aquí...",
      clear: "Limpiar",
      bionicOutput: "Salida Biónica",
      copyResult: "Copiar Resultado",
      emptyOutput: "La salida de lectura biónica aparecerá aquí...",
      howItWorksTitle: "Cómo funciona:",
      howItWorksDescription: "Esta herramienta implementa una técnica de lectura rápida resaltando las letras iniciales de las palabras. Esto guía tus ojos a través del texto y tu cerebro completa la palabra, permitiéndote leer más rápido y con mayor enfoque."
    }
  },
  fr: {
    title: "Convertisseur de Lecture Bionique",
    description: "",
    ui: {
      inputText: "Texte d'entrée",
      placeholder: "Collez ou tapez votre texte ici...",
      clear: "Effacer",
      bionicOutput: "Sortie Bionique",
      copyResult: "Copier le Résultat",
      emptyOutput: "La sortie de lecture bionique apparaîtra ici...",
      howItWorksTitle: "Comment ça marche :",
      howItWorksDescription: "Cet outil met en œuvre une technique de lecture rapide en mettant en évidence les lettres initiales des mots. Cela guide vos yeux à travers le texte et votre cerveau complète le mot, vous permettant de lire plus rapidement et avec plus de concentration."
    }
  },
  hi: {
    title: "बायोनिक रीडिंग कनवर्टर",
    description: "",
    ui: {
      inputText: "इनपुट टेक्स्ट",
      placeholder: "अपना टेक्स्ट यहाँ पेस्ट या टाइप करें...",
      clear: "साफ़ करें",
      bionicOutput: "बायोनिक आउटपुट",
      copyResult: "परिणाम कॉपी करें",
      emptyOutput: "बायोनिक रीडिंग आउटपुट यहाँ दिखाई देगा...",
      howItWorksTitle: "यह कैसे काम करता है:",
      howItWorksDescription: "यह टूल शब्दों के शुरुआती अक्षरों को हाइलाइट करके स्पीड-रीडिंग तकनीक लागू करता है। यह आपकी आंखों को पूरे टेक्स्ट में निर्देशित करता है और आपका मस्तिष्क शब्द को पूरा करता है, जिससे आप तेजी से और अधिक ध्यान के साथ पढ़ सकते हैं।"
    }
  },
  id: {
    title: "Konverter Membaca Bionik",
    description: "",
    ui: {
      inputText: "Teks Input",
      placeholder: "Tempel atau ketik teks Anda di sini...",
      clear: "Bersihkan",
      bionicOutput: "Output Bionik",
      copyResult: "Salin Hasil",
      emptyOutput: "Output membaca bionik akan muncul di sini...",
      howItWorksTitle: "Cara kerjanya:",
      howItWorksDescription: "Alat ini menerapkan teknik membaca cepat dengan menyoroti huruf awal setiap kata. Ini memandu mata Anda melintasi teks dan otak Anda menyelesaikan kata tersebut, memungkinkan Anda membaca lebih cepat dan dengan lebih fokus."
    }
  },
  it: {
    title: "Convertitore Lettura Bionica",
    description: "",
    ui: {
      inputText: "Testo in ingresso",
      placeholder: "Incolla o digita il tuo testo qui...",
      clear: "Pulisci",
      bionicOutput: "Risultato Bionico",
      copyResult: "Copia Risultato",
      emptyOutput: "L'output della lettura bionica apparirà qui...",
      howItWorksTitle: "Come funziona:",
      howItWorksDescription: "Questo strumento implementa una tecnica di lettura rapida evidenziando le lettere iniziali delle parole. Questo guida i tuoi occhi attraverso il testo e il tuo cervello completa la parola, permettendoti di leggere più velocemente e con maggiore concentrazione."
    }
  },
  ja: {
    title: "バイオニックリーディング変換",
    description: "",
    ui: {
      inputText: "入力テキスト",
      placeholder: "ここにテキストを貼り付けるか入力してください...",
      clear: "クリア",
      bionicOutput: "バイオニック出力",
      copyResult: "結果をコピー",
      emptyOutput: "バイオニックリーディングの出力がここに表示されます...",
      howItWorksTitle: "使い方:",
      howItWorksDescription: "このツールは、単語の最初の文字を強調表示することで速読テクニックを実装します。これにより視線がテキスト上を誘導され、脳が単語を補完するため、より速く、より集中して読むことができます。"
    }
  },
  ko: {
    title: "바이오닉 리딩 변환기",
    description: "",
    ui: {
      inputText: "입력 텍스트",
      placeholder: "여기에 텍스트를 붙여넣거나 입력하세요...",
      clear: "지우기",
      bionicOutput: "바이오닉 출력",
      copyResult: "결과 복사",
      emptyOutput: "바이오닉 리딩 출력이 여기에 표시됩니다...",
      howItWorksTitle: "작동 원리:",
      howItWorksDescription: "이 도구는 단어의 첫 글자를 강조 표시하여 속독 기법을 구현합니다. 이것은 텍스트를 통해 시선을 유도하고 뇌가 단어를 완성하게 하여 더 빠르고 집중해서 읽을 수 있게 합니다."
    }
  },
  nl: {
    title: "Bionische Lees Converter",
    description: "",
    ui: {
      inputText: "Invoertekst",
      placeholder: "Plak of typ uw tekst hier...",
      clear: "Wissen",
      bionicOutput: "Bionische Uitvoer",
      copyResult: "Resultaat Kopiëren",
      emptyOutput: "Bionische leesuitvoer verschijnt hier...",
      howItWorksTitle: "Hoe het werkt:",
      howItWorksDescription: "Deze tool past een snelleestechniek toe door de beginletters van woorden te markeren. Dit leidt uw ogen door de tekst en uw hersenen vullen het woord aan, waardoor u sneller en met meer focus kunt lezen."
    }
  },
  pl: {
    title: "Konwerter Czytania Bionicznego",
    description: "",
    ui: {
      inputText: "Tekst wejściowy",
      placeholder: "Wklej lub wpisz swój tekst tutaj...",
      clear: "Wyczyść",
      bionicOutput: "Wynik Bioniczny",
      copyResult: "Kopiuj Wynik",
      emptyOutput: "Wynik czytania bionicznego pojawi się tutaj...",
      howItWorksTitle: "Jak to działa:",
      howItWorksDescription: "To narzędzie wdraża technikę szybkiego czytania poprzez pogrubienie początkowych liter słów. Prowadzi to twoje oczy przez tekst, a mózg uzupełnia słowo, pozwalając ci czytać szybciej i z większym skupieniem."
    }
  },
  pt: {
    title: "Conversor de Leitura Biônica",
    description: "",
    ui: {
      inputText: "Texto de entrada",
      placeholder: "Cole ou digite seu texto aqui...",
      clear: "Limpar",
      bionicOutput: "Saída Biônica",
      copyResult: "Copiar Resultado",
      emptyOutput: "A saída de leitura biônica aparecerá aqui...",
      howItWorksTitle: "Como funciona:",
      howItWorksDescription: "Esta ferramenta implementa uma técnica de leitura dinâmica, destacando as letras iniciais das palavras. Isso guia seus olhos pelo texto e seu cérebro completa a palavra, permitindo que você leia mais rápido e com mais foco."
    }
  },
  ru: {
    title: "Конвертер Бионического Чтения",
    description: "",
    ui: {
      inputText: "Входной текст",
      placeholder: "Вставьте или введите ваш текст здесь...",
      clear: "Очистить",
      bionicOutput: "Бионический вывод",
      copyResult: "Копировать результат",
      emptyOutput: "Здесь появится вывод бионического чтения...",
      howItWorksTitle: "Как это работает:",
      howItWorksDescription: "Этот инструмент реализует метод скорочтения путем выделения начальных букв слов. Это направляет ваши глаза по тексту, а ваш мозг достраивает слово, позволяя вам читать быстрее и с большей концентрацией."
    }
  },
  tr: {
    title: "Biyonik Okuma Dönüştürücü",
    description: "",
    ui: {
      inputText: "Giriş Metni",
      placeholder: "Metninizi buraya yapıştırın veya yazın...",
      clear: "Temizle",
      bionicOutput: "Biyonik Çıktı",
      copyResult: "Sonucu Kopyala",
      emptyOutput: "Biyonik okuma çıktısı burada görünecek...",
      howItWorksTitle: "Nasıl çalışır:",
      howItWorksDescription: "Bu araç, kelimelerin başlangıç harflerini vurgulayarak bir hızlı okuma tekniği uygular. Bu, gözlerinizi metin üzerinde yönlendirir ve beyniniz kelimeyi tamamlar, böylece daha hızlı ve daha odaklı okumanızı sağlar."
    }
  }
};

const localesDir = path.join(__dirname, 'messages');

for (const [lang, trans] of Object.entries(translations)) {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!data.Tools) data.Tools = {};
    
    // Completely overwrite the english fallback with real translation
    data.Tools['bionic-reading-converter'] = trans;
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${lang}.json with native translations.`);
  }
}
