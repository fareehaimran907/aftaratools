const fs = require('fs');
const path = require('path');

const translations = {
  ar: {
    metaTitle: "Aftara Tools: حاسبات ومحولات مجانية على الإنترنت",
    metaDescription: "أدوات مجانية على الإنترنت من Aftara: حاسبات، محولات وحدات، أدوات نصوص ومطورين. سريعة، سهلة الاستخدام، ومتوفرة بـ 16 لغة.",
    heroH1: "أدوات مجانية على الإنترنت للمهام اليومية",
    heroSub: "يجمع Aftara Tools بين الحاسبات المجانية والمحولات والمولدات وأدوات التنسيق في مكان واحد. اختر أداة، وأدخل أرقامك أو نصك، واحصل على النتيجة فورًا في متصفحك. لا يلزم التسجيل، وكل أداة متوفرة بـ 16 لغة.",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools هو منتج من Aftara. أدوات مجانية على الإنترنت بـ 16 لغة.",
    PrivacyIntro: "في Aftara Tools، خصوصيتك هي أولويتنا القصوى. توضح سياسة الخصوصية هذه كيف نتعامل (وكيف لا نتعامل صراحة) مع بياناتك الشخصية.",
    TermsIntro: "من خلال الوصول إلى Aftara Tools واستخدامه، فإنك توافق على الامتثال لشروط وأحكام الاستخدام التالية والالتزام بها.",
    TermsLiability: "لن تتحمل Aftara Tools بأي حال من الأحوال المسؤولية عن أي أضرار خاصة أو مباشرة أو غير مباشرة أو تبعية أو عرضية أو أي أضرار من أي نوع تنشأ عن أو فيما يتعلق باستخدام أدواتنا. ويشمل ذلك الخسائر المالية أو القرارات الطبية المتخذة بناءً على حاسباتنا.",
    TermsAcceptable: "أنت توافق على استخدام أدواتنا لأغراض قانونية فقط. يجب ألا تحاول استخراج البيانات، أو تنفيذ هجمات DDoS، أو تعطيل الخدمة أو الشبكات المتصلة بـ Aftara Tools.",
    DisclaimerIntro: "المعلومات والأدوات المقدمة على Aftara Tools هي لأغراض إعلامية وتعليمية عامة فقط."
  },
  bn: {
    metaTitle: "Aftara Tools: বিনামূল্যে অনলাইন ক্যালকুলেটর এবং কনভার্টার",
    metaDescription: "Aftara থেকে বিনামূল্যে অনলাইন সরঞ্জাম: ক্যালকুলেটর, ইউনিট কনভার্টার, টেক্সট এবং ডেভেলপার ইউটিলিটি। দ্রুত, সহজে ব্যবহারযোগ্য, এবং ১৬টি ভাষায় উপলব্ধ।",
    heroH1: "দৈনন্দিন কাজের জন্য বিনামূল্যে অনলাইন টুলস",
    heroSub: "Aftara Tools বিনামূল্যে ক্যালকুলেটর, কনভার্টার, জেনারেটর এবং ফর্মেটারগুলিকে এক জায়গায় নিয়ে আসে। একটি টুল বাছুন, আপনার নম্বর বা টেক্সট লিখুন এবং তাৎক্ষণিকভাবে আপনার ব্রাউজারে ফলাফল পান। কোনো সাইন-আপের প্রয়োজন নেই, এবং প্রতিটি টুল ১৬টি ভাষায় উপলব্ধ।",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools হলো Aftara-এর একটি পণ্য। ১৬টি ভাষায় বিনামূল্যে অনলাইন সরঞ্জাম।",
    PrivacyIntro: "Aftara Tools-এ, আপনার গোপনীয়তা আমাদের সর্বোচ্চ অগ্রাধিকার। এই গোপনীয়তা নীতিটি রূপরেখা দেয় কিভাবে আমরা আপনার ব্যক্তিগত ডেটা পরিচালনা করি (এবং স্পষ্টভাবে পরিচালনা করি না)।",
    TermsIntro: "Aftara Tools অ্যাক্সেস এবং ব্যবহার করে, আপনি নিম্নলিখিত শর্তাবলী মেনে চলতে এবং আবদ্ধ হতে সম্মত হন।",
    TermsLiability: "আমাদের সরঞ্জামগুলি ব্যবহারের কারণে উদ্ভূত কোনো বিশেষ, প্রত্যক্ষ, পরোক্ষ, আনুষঙ্গিক বা কোনো ধরনের ক্ষতির জন্য Aftara Tools দায়ী থাকবে না। এর মধ্যে আমাদের ক্যালকুলেটরের উপর ভিত্তি করে আর্থিক ক্ষতি বা চিকিৎসাজনিত সিদ্ধান্ত অন্তর্ভুক্ত রয়েছে।",
    TermsAcceptable: "আপনি আমাদের সরঞ্জামগুলি শুধুমাত্র আইনি উদ্দেশ্যে ব্যবহার করতে সম্মত হন। আপনাকে অবশ্যই Aftara Tools এর সাথে সংযুক্ত পরিষেবা বা নেটওয়ার্কগুলিকে ব্যাহত, স্ক্র্যাপ বা ডিডস করার চেষ্টা করতে হবে না।",
    DisclaimerIntro: "Aftara Tools-এ প্রদত্ত তথ্য এবং সরঞ্জামগুলি শুধুমাত্র সাধারণ তথ্যমূলক এবং শিক্ষামূলক উদ্দেশ্যে।"
  },
  de: {
    metaTitle: "Aftara Tools: Kostenlose Online-Rechner & Konverter",
    metaDescription: "Kostenlose Online-Tools von Aftara: Rechner, Einheitenumrechner, Text- und Entwickler-Dienstprogramme. Schnell, einfach zu bedienen und in 16 Sprachen verfügbar.",
    heroH1: "Kostenlose Online-Tools für alltägliche Aufgaben",
    heroSub: "Aftara Tools vereint kostenlose Rechner, Konverter, Generatoren und Formatierer an einem Ort. Wählen Sie ein Tool, geben Sie Ihre Zahlen oder Ihren Text ein und erhalten Sie sofort ein Ergebnis in Ihrem Browser. Es ist keine Anmeldung erforderlich und jedes Tool ist in 16 Sprachen verfügbar.",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools ist ein Produkt von Aftara. Kostenlose Online-Tools in 16 Sprachen.",
    PrivacyIntro: "Bei Aftara Tools hat Ihre Privatsphäre oberste Priorität. Diese Datenschutzrichtlinie beschreibt, wie wir mit Ihren personenbezogenen Daten umgehen (und ausdrücklich NICHT umgehen).",
    TermsIntro: "Durch den Zugriff auf und die Nutzung von Aftara Tools erklären Sie sich damit einverstanden, die folgenden Nutzungsbedingungen einzuhalten und an diese gebunden zu sein.",
    TermsLiability: "In keinem Fall haftet Aftara Tools für besondere, direkte, indirekte, Folge- oder Nebenschäden oder Schäden jeglicher Art, die aus oder in Verbindung mit der Nutzung unserer Tools entstehen. Dies umfasst finanzielle Verluste oder medizinische Entscheidungen, die auf der Grundlage unserer Rechner getroffen werden.",
    TermsAcceptable: "Sie stimmen zu, unsere Tools nur für rechtmäßige Zwecke zu nutzen. Sie dürfen nicht versuchen, den Dienst oder die mit Aftara Tools verbundenen Netzwerke zu scrapen, mit DDoS anzugreifen oder anderweitig zu stören.",
    DisclaimerIntro: "Die auf Aftara Tools bereitgestellten Informationen und Tools dienen nur allgemeinen Informations- und Bildungszwecken."
  },
  es: {
    metaTitle: "Aftara Tools: Calculadoras y Conversores Online Gratis",
    metaDescription: "Herramientas online gratuitas de Aftara: calculadoras, conversores de unidades, utilidades de texto y para desarrolladores. Rápidas, fáciles de usar y disponibles en 16 idiomas.",
    heroH1: "Herramientas Online Gratis para Tareas Diarias",
    heroSub: "Aftara Tools reúne calculadoras, conversores, generadores y formateadores gratuitos en un solo lugar. Elija una herramienta, ingrese sus números o texto y obtenga un resultado al instante en su navegador. No se necesita registro y cada herramienta está disponible en 16 idiomas.",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools es un producto de Aftara. Herramientas online gratuitas en 16 idiomas.",
    PrivacyIntro: "En Aftara Tools, su privacidad es nuestra principal prioridad. Esta Política de Privacidad describe cómo manejamos (y explícitamente NO manejamos) sus datos personales.",
    TermsIntro: "Al acceder y utilizar Aftara Tools, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso.",
    TermsLiability: "En ningún caso Aftara Tools será responsable de ningún daño especial, directo, indirecto, consecuente o incidental, ni de ningún daño en absoluto que surja de o en conexión con el uso de nuestras herramientas. Esto incluye pérdidas financieras o decisiones médicas tomadas en base a nuestras calculadoras.",
    TermsAcceptable: "Usted acepta utilizar nuestras herramientas únicamente con fines lícitos. No debe intentar realizar scraping, ataques DDoS o interrumpir de otro modo el servicio o las redes conectadas a Aftara Tools.",
    DisclaimerIntro: "La información y las herramientas proporcionadas en Aftara Tools son únicamente para fines informativos y educativos generales."
  },
  fr: {
    metaTitle: "Aftara Tools : Calculatrices et Convertisseurs en Ligne Gratuits",
    metaDescription: "Outils en ligne gratuits d'Aftara : calculatrices, convertisseurs d'unités, utilitaires de texte et pour développeurs. Rapides, faciles à utiliser et disponibles en 16 langues.",
    heroH1: "Outils en Ligne Gratuits pour les Tâches Quotidiennes",
    heroSub: "Aftara Tools rassemble des calculatrices, convertisseurs, générateurs et formateurs gratuits en un seul endroit. Choisissez un outil, entrez vos nombres ou votre texte, et obtenez un résultat instantanément dans votre navigateur. Aucune inscription n'est nécessaire, et chaque outil est disponible en 16 langues.",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools est un produit d'Aftara. Outils en ligne gratuits en 16 langues.",
    PrivacyIntro: "Chez Aftara Tools, votre confidentialité est notre priorité absolue. Cette politique de confidentialité décrit comment nous traitons (et ne traitons explicitement PAS) vos données personnelles.",
    TermsIntro: "En accédant et en utilisant Aftara Tools, vous acceptez de respecter et d'être lié par les conditions d'utilisation suivantes.",
    TermsLiability: "En aucun cas Aftara Tools ne pourra être tenu responsable de tout dommage spécial, direct, indirect, consécutif ou accessoire, ou de tout dommage quel qu'il soit, résultant de ou en relation avec l'utilisation de nos outils. Cela inclut les pertes financières ou les décisions médicales prises sur la base de nos calculatrices.",
    TermsAcceptable: "Vous acceptez d'utiliser nos outils uniquement à des fins légales. Vous ne devez pas tenter de récupérer des données, de lancer des attaques DDoS ou de perturber le service ou les réseaux connectés à Aftara Tools.",
    DisclaimerIntro: "Les informations et outils fournis sur Aftara Tools sont destinés uniquement à des fins d'information générale et d'éducation."
  },
  hi: {
    metaTitle: "Aftara Tools: मुफ़्त ऑनलाइन कैलकुलेटर और कन्वर्टर्स",
    metaDescription: "Aftara के मुफ़्त ऑनलाइन टूल: कैलकुलेटर, यूनिट कन्वर्टर्स, टेक्स्ट और डेवलपर उपयोगिताएँ। तेज़, उपयोग में आसान और 16 भाषाओं में उपलब्ध।",
    heroH1: "रोजमर्रा के कार्यों के लिए मुफ़्त ऑनलाइन टूल्स",
    heroSub: "Aftara Tools मुफ़्त कैलकुलेटर, कन्वर्टर्स, जेनरेटर और फ़ॉर्मेटर्स को एक ही स्थान पर लाता है। एक टूल चुनें, अपने नंबर या टेक्स्ट दर्ज करें, और तुरंत अपने ब्राउज़र में परिणाम प्राप्त करें। किसी साइन-अप की आवश्यकता नहीं है, और प्रत्येक टूल 16 भाषाओं में उपलब्ध है।",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools, Aftara का एक उत्पाद है। 16 भाषाओं में मुफ़्त ऑनलाइन टूल।",
    PrivacyIntro: "Aftara Tools में, आपकी गोपनीयता हमारी सर्वोच्च प्राथमिकता है। यह गोपनीयता नीति रूपरेखा देती है कि हम आपके व्यक्तिगत डेटा को कैसे संभालते हैं (और स्पष्ट रूप से कैसे नहीं संभालते हैं)।",
    TermsIntro: "Aftara Tools को एक्सेस और उपयोग करके, आप उपयोग की निम्नलिखित नियम और शर्तों का पालन करने और उनसे बाध्य होने के लिए सहमत होते हैं।",
    TermsLiability: "किसी भी स्थिति में Aftara Tools किसी भी विशेष, प्रत्यक्ष, अप्रत्यक्ष, परिणामी या आकस्मिक क्षति या हमारे टूल के उपयोग के संबंध में या उससे उत्पन्न होने वाली किसी भी क्षति के लिए उत्तरदायी नहीं होगा। इसमें हमारे कैलकुलेटर के आधार पर किए गए वित्तीय नुकसान या चिकित्सा निर्णय शामिल हैं।",
    TermsAcceptable: "आप हमारे टूल का उपयोग केवल कानूनी उद्देश्यों के लिए करने के लिए सहमत हैं। आपको Aftara Tools से जुड़ी सेवा या नेटवर्क को स्क्रैप करने, DDoS करने या अन्यथा बाधित करने का प्रयास नहीं करना चाहिए।",
    DisclaimerIntro: "Aftara Tools पर दी गई जानकारी और उपकरण केवल सामान्य सूचनात्मक और शैक्षिक उद्देश्यों के लिए हैं।"
  },
  id: {
    metaTitle: "Aftara Tools: Kalkulator & Konverter Online Gratis",
    metaDescription: "Alat online gratis dari Aftara: kalkulator, konverter unit, utilitas teks dan pengembang. Cepat, mudah digunakan, dan tersedia dalam 16 bahasa.",
    heroH1: "Alat Online Gratis untuk Tugas Sehari-hari",
    heroSub: "Aftara Tools menyatukan kalkulator, konverter, generator, dan pemformat gratis di satu tempat. Pilih alat, masukkan angka atau teks Anda, dan dapatkan hasilnya secara instan di browser Anda. Tidak perlu mendaftar, dan setiap alat tersedia dalam 16 bahasa.",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools adalah produk dari Aftara. Alat online gratis dalam 16 bahasa.",
    PrivacyIntro: "Di Aftara Tools, privasi Anda adalah prioritas utama kami. Kebijakan Privasi ini menguraikan bagaimana kami menangani (dan secara eksplisit TIDAK menangani) data pribadi Anda.",
    TermsIntro: "Dengan mengakses dan menggunakan Aftara Tools, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan penggunaan berikut.",
    TermsLiability: "Dalam keadaan apa pun, Aftara Tools tidak akan bertanggung jawab atas kerugian khusus, langsung, tidak langsung, konsekuensial, atau insidental, atau kerugian apa pun yang timbul dari atau sehubungan dengan penggunaan alat kami. Ini termasuk kerugian finansial atau keputusan medis yang dibuat berdasarkan kalkulator kami.",
    TermsAcceptable: "Anda setuju untuk menggunakan alat kami hanya untuk tujuan yang sah. Anda tidak boleh mencoba melakukan scraping, DDoS, atau mengganggu layanan atau jaringan yang terhubung ke Aftara Tools.",
    DisclaimerIntro: "Informasi dan alat yang disediakan di Aftara Tools hanya untuk tujuan informasi dan pendidikan umum."
  },
  it: {
    metaTitle: "Aftara Tools: Calcolatrici e Convertitori Online Gratuiti",
    metaDescription: "Strumenti online gratuiti di Aftara: calcolatrici, convertitori di unità, utilità di testo e per sviluppatori. Veloci, facili da usare e disponibili in 16 lingue.",
    heroH1: "Strumenti Online Gratuiti per le Attività Quotidiane",
    heroSub: "Aftara Tools riunisce calcolatrici, convertitori, generatori e formattatori gratuiti in un unico posto. Scegli uno strumento, inserisci i tuoi numeri o il tuo testo e ottieni un risultato istantaneamente nel tuo browser. Non è necessaria alcuna registrazione e ogni strumento è disponibile in 16 lingue.",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools è un prodotto di Aftara. Strumenti online gratuiti in 16 lingue.",
    PrivacyIntro: "In Aftara Tools, la tua privacy è la nostra massima priorità. Questa Informativa sulla privacy delinea come gestiamo (e come esplicitamente NON gestiamo) i tuoi dati personali.",
    TermsIntro: "Accedendo e utilizzando Aftara Tools, accetti di rispettare e di essere vincolato dai seguenti termini e condizioni d'uso.",
    TermsLiability: "In nessun caso Aftara Tools sarà responsabile per danni speciali, diretti, indiretti, consequenziali o incidentali o danni di qualsiasi tipo derivanti da o in connessione con l'uso dei nostri strumenti. Ciò include perdite finanziarie o decisioni mediche prese in base alle nostre calcolatrici.",
    TermsAcceptable: "Accetti di utilizzare i nostri strumenti solo per scopi legali. Non devi tentare di raschiare, fare DDoS o altrimenti interrompere il servizio o le reti collegate ad Aftara Tools.",
    DisclaimerIntro: "Le informazioni e gli strumenti forniti su Aftara Tools sono solo per scopi informativi ed educativi generali."
  },
  ja: {
    metaTitle: "Aftara Tools: 無料のオンライン電卓とコンバーター",
    metaDescription: "Aftaraの無料オンラインツール：電卓、単位変換器、テキスト、開発者用ユーティリティ。高速で使いやすく、16言語に対応しています。",
    heroH1: "日常業務のための無料オンラインツール",
    heroSub: "Aftara Toolsは、無料の電卓、コンバーター、ジェネレーター、フォーマッターを1か所に集めています。ツールを選択し、数値やテキストを入力すると、ブラウザですぐに結果が得られます。サインアップは不要で、すべてのツールが16言語で利用可能です。",
    "100Tools": "Aftara Tools",
    tagline: "Aftara ToolsはAftaraの製品です。16言語で利用できる無料のオンラインツール。",
    PrivacyIntro: "Aftara Toolsでは、お客様のプライバシーが最優先事項です。このプライバシーポリシーでは、個人データの取り扱い（および明示的な取り扱わないこと）について説明します。",
    TermsIntro: "Aftara Toolsにアクセスして使用することにより、以下の利用規約に従い、拘束されることに同意するものとします。",
    TermsLiability: "いかなる場合においても、Aftara Toolsは、当社のツールの使用に起因または関連して生じる、特別、直接、間接、結果的、または付随的な損害、あるいはその他のいかなる損害についても責任を負いません。これには、当社の計算機に基づいて行われた経済的損失や医療上の決定が含まれます。",
    TermsAcceptable: "お客様は、合法的な目的でのみ当社のツールを使用することに同意するものとします。スクレイピング、DDoS攻撃、またはAftara Toolsに接続されているサービスやネットワークを妨害しようとしてはなりません。",
    DisclaimerIntro: "Aftara Toolsで提供される情報とツールは、一般的な情報提供および教育目的のみを目的としています。"
  },
  ko: {
    metaTitle: "Aftara Tools: 무료 온라인 계산기 및 변환기",
    metaDescription: "Aftara의 무료 온라인 도구: 계산기, 단위 변환기, 텍스트 및 개발자 유틸리티. 빠르고 사용하기 쉬우며 16개 언어로 제공됩니다.",
    heroH1: "일상적인 작업을 위한 무료 온라인 도구",
    heroSub: "Aftara Tools는 무료 계산기, 변환기, 생성기 및 포맷터를 한 곳에 모았습니다. 도구를 선택하고 숫자나 텍스트를 입력하면 브라우저에서 즉시 결과를 얻을 수 있습니다. 가입이 필요 없으며 모든 도구는 16개 언어로 제공됩니다.",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools는 Aftara의 제품입니다. 16개 언어로 제공되는 무료 온라인 도구.",
    PrivacyIntro: "Aftara Tools에서는 귀하의 개인 정보 보호를 최우선으로 생각합니다. 이 개인 정보 보호 정책은 당사가 귀하의 개인 데이터를 취급하는 방법(및 명시적으로 취급하지 않는 방법)을 설명합니다.",
    TermsIntro: "Aftara Tools에 액세스하고 사용함으로써 귀하는 다음 이용 약관을 준수하고 이에 구속되는 데 동의합니다.",
    TermsLiability: "어떠한 경우에도 Aftara Tools는 당사 도구의 사용으로 인해 또는 그와 관련하여 발생하는 특별, 직접, 간접, 결과적 또는 부수적 손해 또는 기타 모든 손해에 대해 책임을 지지 않습니다. 여기에는 당사의 계산기를 기반으로 한 재정적 손실 또는 의료적 결정이 포함됩니다.",
    TermsAcceptable: "귀하는 합법적인 목적으로만 당사 도구를 사용하는 데 동의합니다. Aftara Tools에 연결된 서비스나 네트워크를 스크랩하거나 DDoS 공격을 가하거나 방해하려고 시도해서는 안 됩니다.",
    DisclaimerIntro: "Aftara Tools에서 제공되는 정보와 도구는 일반적인 정보 제공 및 교육 목적으로만 제공됩니다."
  },
  nl: {
    metaTitle: "Aftara Tools: Gratis Online Rekenmachines & Converters",
    metaDescription: "Gratis online tools van Aftara: rekenmachines, eenheidsconverters, tekst- en ontwikkelaarshulpprogramma's. Snel, gebruiksvriendelijk en beschikbaar in 16 talen.",
    heroH1: "Gratis Online Tools voor Dagelijkse Taken",
    heroSub: "Aftara Tools brengt gratis rekenmachines, converters, generatoren en formatters samen op één plek. Kies een tool, voer uw cijfers of tekst in en krijg direct resultaat in uw browser. Aanmelden is niet nodig en elke tool is beschikbaar in 16 talen.",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools is een product van Aftara. Gratis online tools in 16 talen.",
    PrivacyIntro: "Bij Aftara Tools is uw privacy onze topprioriteit. Dit privacybeleid schetst hoe we omgaan (en expliciet NIET omgaan) met uw persoonlijke gegevens.",
    TermsIntro: "Door Aftara Tools te openen en te gebruiken, stemt u ermee in te voldoen aan en gebonden te zijn aan de volgende gebruiksvoorwaarden.",
    TermsLiability: "In geen geval zal Aftara Tools aansprakelijk zijn voor enige speciale, directe, indirecte, gevolg- of incidentele schade of welke schade dan ook die voortvloeit uit of verband houdt met het gebruik van onze tools. Dit omvat financiële verliezen of medische beslissingen die zijn genomen op basis van onze rekenmachines.",
    TermsAcceptable: "U stemt ermee in onze tools alleen voor wettige doeleinden te gebruiken. U mag niet proberen te scrapen, DDoS-aanvallen uit te voeren of anderszins de service of netwerken die zijn verbonden met Aftara Tools te verstoren.",
    DisclaimerIntro: "De informatie en tools op Aftara Tools zijn uitsluitend voor algemene informatieve en educatieve doeleinden."
  },
  pl: {
    metaTitle: "Aftara Tools: Darmowe Kalkulatory i Konwertery Online",
    metaDescription: "Darmowe narzędzia online od Aftara: kalkulatory, konwertery jednostek, narzędzia tekstowe i deweloperskie. Szybkie, łatwe w użyciu i dostępne w 16 językach.",
    heroH1: "Darmowe Narzędzia Online do Codziennych Zadań",
    heroSub: "Aftara Tools łączy darmowe kalkulatory, konwertery, generatory i formatery w jednym miejscu. Wybierz narzędzie, wprowadź liczby lub tekst i natychmiast uzyskaj wynik w przeglądarce. Rejestracja nie jest wymagana, a każde narzędzie jest dostępne w 16 językach.",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools to produkt firmy Aftara. Darmowe narzędzia online w 16 językach.",
    PrivacyIntro: "W Aftara Tools Twoja prywatność jest naszym najwyższym priorytetem. Niniejsza Polityka prywatności określa, w jaki sposób postępujemy (i wyraźnie NIE postępujemy) z Twoimi danymi osobowymi.",
    TermsIntro: "Uzyskując dostęp do Aftara Tools i korzystając z nich, zgadzasz się przestrzegać poniższych warunków użytkowania i być nimi związanym.",
    TermsLiability: "W żadnym wypadku Aftara Tools nie ponosi odpowiedzialności za jakiekolwiek szkody szczególne, bezpośrednie, pośrednie, wtórne lub przypadkowe, ani za jakiekolwiek szkody wynikające z lub w związku z korzystaniem z naszych narzędzi. Obejmuje to straty finansowe lub decyzje medyczne podjęte w oparciu o nasze kalkulatory.",
    TermsAcceptable: "Zgadzasz się korzystać z naszych narzędzi wyłącznie w celach zgodnych z prawem. Nie wolno Ci podejmować prób scrapowania, ataków DDoS ani w inny sposób zakłócać działania usługi lub sieci połączonych z Aftara Tools.",
    DisclaimerIntro: "Informacje i narzędzia udostępniane w Aftara Tools służą wyłącznie ogólnym celom informacyjnym i edukacyjnym."
  },
  pt: {
    metaTitle: "Aftara Tools: Calculadoras e Conversores Online Gratuitos",
    metaDescription: "Ferramentas online gratuitas da Aftara: calculadoras, conversores de unidades, utilitários de texto e desenvolvedor. Rápidas, fáceis de usar e disponíveis em 16 idiomas.",
    heroH1: "Ferramentas Online Gratuitas para Tarefas Diárias",
    heroSub: "O Aftara Tools reúne calculadoras, conversores, geradores e formatadores gratuitos em um só lugar. Escolha uma ferramenta, insira seus números ou texto e obtenha um resultado instantaneamente no seu navegador. Não é necessário se inscrever, e cada ferramenta está disponível em 16 idiomas.",
    "100Tools": "Aftara Tools",
    tagline: "O Aftara Tools é um produto da Aftara. Ferramentas online gratuitas em 16 idiomas.",
    PrivacyIntro: "No Aftara Tools, sua privacidade é nossa prioridade. Esta Política de Privacidade descreve como lidamos (e explicitamente NÃO lidamos) com seus dados pessoais.",
    TermsIntro: "Ao acessar e usar o Aftara Tools, você concorda em cumprir e ser regido pelos seguintes termos e condições de uso.",
    TermsLiability: "Em nenhum caso o Aftara Tools será responsável por quaisquer danos especiais, diretos, indiretos, consequenciais ou incidentais, ou quaisquer danos que surjam de ou em conexão com o uso de nossas ferramentas. Isso inclui perdas financeiras ou decisões médicas tomadas com base em nossas calculadoras.",
    TermsAcceptable: "Você concorda em usar nossas ferramentas apenas para fins legais. Você não deve tentar raspar (scrape), fazer ataques DDoS ou interromper o serviço ou as redes conectadas ao Aftara Tools.",
    DisclaimerIntro: "As informações e ferramentas fornecidas no Aftara Tools são apenas para fins informativos e educacionais gerais."
  },
  ru: {
    metaTitle: "Aftara Tools: Бесплатные онлайн-калькуляторы и конвертеры",
    metaDescription: "Бесплатные онлайн-инструменты от Aftara: калькуляторы, конвертеры единиц измерения, текстовые и разработческие утилиты. Быстрые, простые в использовании и доступные на 16 языках.",
    heroH1: "Бесплатные онлайн-инструменты для повседневных задач",
    heroSub: "Aftara Tools объединяет бесплатные калькуляторы, конвертеры, генераторы и форматеры в одном месте. Выберите инструмент, введите числа или текст и мгновенно получите результат в своем браузере. Регистрация не требуется, и каждый инструмент доступен на 16 языках.",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools — это продукт Aftara. Бесплатные онлайн-инструменты на 16 языках.",
    PrivacyIntro: "В Aftara Tools ваша конфиденциальность является нашим главным приоритетом. В этой Политике конфиденциальности описывается, как мы обрабатываем (и явно НЕ обрабатываем) ваши личные данные.",
    TermsIntro: "Получая доступ к Aftara Tools и используя его, вы соглашаетесь соблюдать следующие условия использования.",
    TermsLiability: "Ни при каких обстоятельствах Aftara Tools не несет ответственности за любые особые, прямые, косвенные, косвенные или случайные убытки, а также любые убытки, возникающие в результате или в связи с использованием наших инструментов. Это включает в себя финансовые потери или медицинские решения, принятые на основе наших калькуляторов.",
    TermsAcceptable: "Вы соглашаетесь использовать наши инструменты только в законных целях. Вы не должны пытаться парсить данные, устраивать DDoS-атаки или иным образом нарушать работу службы или сетей, подключенных к Aftara Tools.",
    DisclaimerIntro: "Информация и инструменты, предоставляемые на Aftara Tools, предназначены только для общих информационных и образовательных целей."
  },
  tr: {
    metaTitle: "Aftara Tools: Ücretsiz Çevrimiçi Hesap Makineleri ve Dönüştürücüler",
    metaDescription: "Aftara'dan ücretsiz çevrimiçi araçlar: hesap makineleri, birim dönüştürücüler, metin ve geliştirici yardımcı programları. Hızlı, kullanımı kolay ve 16 dilde mevcut.",
    heroH1: "Günlük Görevler İçin Ücretsiz Çevrimiçi Araçlar",
    heroSub: "Aftara Tools ücretsiz hesap makinelerini, dönüştürücüleri, üreteçleri ve biçimlendiricileri tek bir yerde toplar. Bir araç seçin, sayılarınızı veya metninizi girin ve tarayıcınızda anında sonuç alın. Kayıt olmanız gerekmez ve her araç 16 dilde mevcuttur.",
    "100Tools": "Aftara Tools",
    tagline: "Aftara Tools bir Aftara ürünüdür. 16 dilde ücretsiz çevrimiçi araçlar.",
    PrivacyIntro: "Aftara Tools'ta gizliliğiniz en büyük önceliğimizdir. Bu Gizlilik Politikası, kişisel verilerinizi nasıl işlediğimizi (ve açıkça nasıl İŞLEMEDİĞİMİZİ) özetlemektedir.",
    TermsIntro: "Aftara Tools'a erişerek ve kullanarak, aşağıdaki kullanım şart ve koşullarına uymayı ve bunlarla bağlı kalmayı kabul etmiş olursunuz.",
    TermsLiability: "Aftara Tools hiçbir durumda özel, doğrudan, dolaylı, sonuç olarak ortaya çıkan veya tesadüfi zararlardan veya araçlarımızın kullanımından kaynaklanan veya bununla bağlantılı herhangi bir zarardan sorumlu tutulamaz. Buna hesap makinelerimize dayalı olarak alınan mali kayıplar veya tıbbi kararlar da dahildir.",
    TermsAcceptable: "Araçlarımızı yalnızca yasal amaçlarla kullanmayı kabul ediyorsunuz. Aftara Tools'a bağlı hizmeti veya ağları kazımaya, DDoS yapmaya veya başka bir şekilde kesintiye uğratmaya çalışmamalısınız.",
    DisclaimerIntro: "Aftara Tools'ta sağlanan bilgiler ve araçlar yalnızca genel bilgi ve eğitim amaçlıdır."
  }
};

const messagesDir = path.join(__dirname, '../messages');
const files = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json') && f !== 'en.json');

for (const file of files) {
  const lang = path.basename(file, '.json');
  if (translations[lang]) {
    const filePath = path.join(messagesDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    if (data.Home) {
      data.Home.metaTitle = translations[lang].metaTitle;
      data.Home.metaDescription = translations[lang].metaDescription;
      data.Home.heroH1 = translations[lang].heroH1;
      data.Home.heroSub = translations[lang].heroSub;
    }
    if (data.Header) {
      data.Header["100Tools"] = translations[lang]["100Tools"];
    }
    if (data.Footer) {
      data.Footer.tagline = translations[lang].tagline;
    }
    if (data.Privacy) {
      data.Privacy.intro = translations[lang].PrivacyIntro;
    }
    if (data.Terms) {
      data.Terms.intro = translations[lang].TermsIntro;
      data.Terms.liabilityText = translations[lang].TermsLiability;
      data.Terms.acceptableUseText = translations[lang].TermsAcceptable;
    }
    if (data.Disclaimer) {
      data.Disclaimer.intro = translations[lang].DisclaimerIntro;
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${file}`);
  }
}
