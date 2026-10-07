const fs = require("fs");
const path = require("path");

const translations = {
  ar: {
    About: {
      title: "من نحن والمنهجية",
      description:
        "مرحبًا بكم في Aftara Tools، موردكم المجاني للحاسبات الممتازة وأدوات المطورين عبر الإنترنت.",
      missionTitle: "مهمتنا",
      missionText:
        "مهمتنا هي توفير أدوات سريعة وموثوقة وتحترم الخصوصية للمهام اليومية. سواء كنت مطورًا يحتاج إلى تشفير JWT، أو صاحب منزل يحسب حجم النشارة، أو تحاول فقط معرفة الخصم، فقد بنينا أداة قوية من أجلك.",
      methodologyTitle: "منهجيتنا",
      methodologyIntro:
        "نحن نؤمن بالشفافية والدقة، وخاصة للأدوات المالية وتلك المتعلقة بالصحة. إليك كيف نضمن موثوقية أدواتنا:",
      standardizedFormulasTitle: "صيغ موحدة",
      standardizedFormulasText:
        "تستخدم جميع الحاسبات المالية (مثل العائد على الاستثمار، الرهن العقاري، والقروض) صيغًا معتمدة في الصناعة للإطفاء والفائدة المركبة.",
      medicalGuidelinesTitle: "الإرشادات الطبية",
      medicalGuidelinesText:
        "تستخدم حاسبات الصحة (مثل مؤشر كتلة الجسم ومعدل الأيض الأساسي) معادلات معترف بها عالميًا، مثل معادلة ميفلين سانت جيور، وتصنيفات منظمة الصحة العالمية لمؤشر كتلة الجسم.",
      privacyFirstTitle: "الخصوصية أولاً",
      privacyFirstText:
        "لا تغادر بياناتك متصفحك أبدًا. جميع الحسابات والتشفير والتحويلات تحدث محليًا على جهازك عبر JavaScript. نحن لا نخزن أو ننقل مدخلاتك.",
      continuousTestingTitle: "اختبار مستمر",
      continuousTestingText:
        "يتم اختبار أدواتنا بصرامة لضمان التعامل مع الحالات الاستثنائية (مثل القيم الصفرية أو المدخلات غير الصالحة) بسلاسة دون تعطل.",
      editorialGuidelinesTitle: "إرشادات التحرير",
      editorialGuidelinesText:
        "تم تصميم كل صفحة أداة لتكون بديهية. نحن نعطي الأولوية لسهولة الاستخدام والتعليمات الواضحة. إذا كان للمعادلة قيود (مثل طريقة البحرية لنسبة الدهون)، نوضح ذلك.",
      disclaimer:
        "إخلاء المسؤولية: الأدوات في هذا الموقع لأغراض إعلامية وتعليمية فقط. ولا تشكل نصيحة مالية أو طبية مهنية.",
      teamTitle: "من نحن",
      teamText:
        "يتم تشغيل هذا الموقع بواسطة فريقنا. نحن مكرسون لتقديم أدوات عالية الجودة. للوصول إلينا، يرجى مراجعة صفحة الاتصال.",
    },
    Privacy: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: 29 سبتمبر 2026",
      intro:
        "في Aftara Tools، خصوصيتك هي أولويتنا. توضح سياسة الخصوصية هذه كيف نتعامل مع بياناتك.",
      dataCollectionTitle: "لا يتم جمع البيانات",
      dataCollectionText:
        "نحن لا نجمع البيانات الشخصية دون داع. تتم الحسابات محليًا. ومع ذلك، عند استخدام موقعنا، قد يتم استخدام بيانات الاتصال الأساسية وملفات تعريف الارتباط بواسطة شركائنا.",
      analyticsTitle: "التحليلات والتتبع",
      analyticsText:
        "قد نستخدم تحليلات مجهولة الهوية وصديقة للخصوصية لفهم حركة المرور. لا يمكن تتبع هذه البيانات للوصول إلى الأفراد.",
      thirdPartyTitle: "شركاء الطرف الثالث و Google AdSense",
      thirdPartyText:
        "يستخدم البائعون الخارجيون، بما في ذلك Google، ملفات تعريف الارتباط لعرض الإعلانات بناءً على زياراتك. يتيح ذلك لشركائها عرض إعلانات بناءً على زياراتك لمواقعنا أو مواقع أخرى.",
      contactUs: "إذا كان لديك أي أسئلة، يرجى الاتصال بنا.",
      optOutTitle: "إلغاء الاشتراك في الإعلانات المخصصة",
      optOutText:
        "يمكنك إلغاء الاشتراك في الإعلانات المخصصة عبر إعدادات إعلانات Google أو عبر www.aboutads.info.",
      userRightsTitle: "حقوق الخصوصية (GDPR و CCPA)",
      userRightsText:
        "بناءً على موقعك، قد تكون لك حقوق الوصول أو الحذف أو التقييد. استخدم 'إعدادات الخصوصية' في التذييل لإدارة موافقتك.",
      childrenTitle: "خصوصية الأطفال",
      childrenText:
        "خدماتنا غير موجهة للأطفال دون 13 عامًا، ولا نجمع معلومات شخصية منهم عن قصد.",
      dataRetentionTitle: "الاحتفاظ بالبيانات",
      dataRetentionText:
        "يتم الاحتفاظ بسجلات الاتصال المؤقتة فقط طالما كانت ضرورية لأغراض أمنية.",
    },
    Terms: {
      title: "شروط الخدمة",
      lastUpdated: "آخر تحديث: 29 سبتمبر 2026",
      intro: "بوصولك إلى Aftara Tools، توافق على الامتثال لهذه الشروط.",
      noWarrantyTitle: "لا ضمانات (كما هي)",
      noWarrantyText:
        "يتم توفير جميع الأدوات 'كما هي' دون أي ضمانات. نحن لا نضمن دقة أو موثوقية النتائج.",
      liabilityTitle: "تحديد المسؤولية",
      liabilityText:
        "لا تتحمل Aftara Tools أي مسؤولية عن أي أضرار ناجمة عن استخدام أدواتنا، بما في ذلك الخسائر المالية أو القرارات الطبية.",
      acceptableUseTitle: "الاستخدام المقبول",
      acceptableUseText:
        "توافق على استخدام أدواتنا لأغراض قانونية فقط، ولا يجوز لك تعطيل الخدمة أو شن هجمات DDoS.",
      modificationsTitle: "التعديلات",
      modificationsText:
        "نحتفظ بالحق في مراجعة هذه الشروط في أي وقت دون إشعار.",
    },
    Cookie: {
      title: "سياسة ملفات تعريف الارتباط",
      lastUpdated: "آخر تحديث: 29 سبتمبر 2026",
      intro: "تشرح هذه السياسة ماهية ملفات تعريف الارتباط وكيف نستخدمها.",
      whatAreCookiesTitle: "ما هي ملفات تعريف الارتباط؟",
      whatAreCookiesText:
        "هي ملفات نصية صغيرة توضع على جهازك لتشغيل المواقع بكفاءة أكبر ولتوفير تقارير.",
      howWeUseCookiesTitle: "كيف نستخدم ملفات تعريف الارتباط",
      howWeUseCookiesText:
        "نحن نستخدمها للوظائف الأساسية، وحفظ تفضيلاتك، ولتقديم إعلانات ذات صلة عبر شركاء مثل Google.",
      noTrackingTitle: "ملفات تعريف ارتباط الإعلانات للجهات الخارجية",
      noTrackingText:
        "نستخدم Google AdSense لتمويل أدواتنا المجانية. يمكنك إدارة تفضيلاتك عبر رابط إعدادات الخصوصية في التذييل.",
      managingCookiesTitle: "إدارة ملفات تعريف الارتباط",
      managingCookiesText: "يمكنك التحكم فيها وحذفها من متصفحك كما تشاء.",
    },
    Disclaimer: {
      title: "إخلاء المسؤولية",
      lastUpdated: "آخر تحديث: 29 سبتمبر 2026",
      intro:
        "المعلومات والأدوات في Aftara Tools للأغراض التعليمية والإعلامية فقط.",
      accuracyTitle: "الدقة العامة",
      accuracyText:
        "على الرغم من سعينا لتحديث الحاسبات، لا نقدم أي ضمانات حول اكتمالها أو دقتها.",
      medicalTitle: "إخلاء المسؤولية الطبي والصحي",
      medicalText:
        "حاسبات مثل مؤشر كتلة الجسم توفر تقديرات وليست بديلاً عن المشورة الطبية المتخصصة.",
      financialTitle: "إخلاء المسؤولية المالي",
      financialText:
        "الحاسبات المتعلقة بالقروض والاستثمارات والضرائب توضيحية فقط ولا تشكل نصيحة مالية.",
      legalTitle: "التباينات القانونية والإقليمية",
      legalText:
        "قد لا تعكس الصيغ القواعد الضريبية الدقيقة في ولايتك. استشر دائمًا محترفًا معتمدًا.",
    },
  },
  bn: {
    About: {
      title: "আমাদের সম্পর্কে ও পদ্ধতি",
      description:
        "Aftara Tools-এ স্বাগতম, আপনার প্রিমিয়াম অনলাইন ক্যালকুলেটর এবং ডেভেলপার ইউটিলিটির বিনামূল্যে উৎস।",
      missionTitle: "আমাদের মিশন",
      missionText:
        "আমাদের লক্ষ্য হল দৈনন্দিন কাজের জন্য দ্রুত, নির্ভরযোগ্য এবং গোপনীয়তা-রক্ষিত টুল সরবরাহ করা।",
      methodologyTitle: "আমাদের পদ্ধতি",
      methodologyIntro:
        "আমরা স্বচ্ছতা এবং নির্ভুলতায় বিশ্বাস করি, বিশেষ করে আর্থিক এবং স্বাস্থ্য-সম্পর্কিত টুলের জন্য।",
      standardizedFormulasTitle: "প্রমাণিত সূত্র",
      standardizedFormulasText:
        "সমস্ত আর্থিক ক্যালকুলেটর শিল্প-মান সূত্র ব্যবহার করে।",
      medicalGuidelinesTitle: "চিকিৎসা নির্দেশিকা",
      medicalGuidelinesText:
        "স্বাস্থ্য ক্যালকুলেটর বিশ্বব্যাপী স্বীকৃত সমীকরণ ব্যবহার করে।",
      privacyFirstTitle: "গোপনীয়তা আগে",
      privacyFirstText:
        "আপনার ডেটা কখনই আপনার ব্রাউজার ছাড়ে না। সমস্ত গণনা আপনার ডিভাইসে স্থানীয়ভাবে ঘটে।",
      continuousTestingTitle: "অবিরাম পরীক্ষা",
      continuousTestingText:
        "আমাদের টুলগুলি ত্রুটিমুক্তভাবে কাজ করার জন্য কঠোরভাবে পরীক্ষা করা হয়।",
      editorialGuidelinesTitle: "সম্পাদকীয় নির্দেশিকা",
      editorialGuidelinesText:
        "প্রতিটি টুল পেজ স্ব-ব্যাখ্যামূলক হওয়ার জন্য ডিজাইন করা হয়েছে।",
      disclaimer:
        "দাবিত্যাগ: এই ওয়েবসাইটের টুলগুলি শুধুমাত্র তথ্যের উদ্দেশ্যে। এগুলো পেশাদার পরামর্শ নয়।",
      teamTitle: "আমরা কারা",
      teamText:
        "এই সাইটটি আমাদের দল দ্বারা পরিচালিত। আমাদের সাথে যোগাযোগ করতে চাইলে কন্টাক্ট পেজ দেখুন।",
    },
    Privacy: {
      title: "গোপনীয়তা নীতি",
      lastUpdated: "সর্বশেষ আপডেট: ২৯ সেপ্টেম্বর ২০২৬",
      intro: "Aftara Tools-এ আপনার গোপনীয়তা আমাদের সর্বোচ্চ অগ্রাধিকার।",
      dataCollectionTitle: "কোন ডেটা সংগ্রহ নয়",
      dataCollectionText:
        "আমরা অকারণে ব্যক্তিগত ডেটা সংগ্রহ করি না। সমস্ত হিসাব স্থানীয়ভাবে সম্পন্ন হয়।",
      analyticsTitle: "অ্যানালিটিক্স",
      analyticsText:
        "আমরা গোপনীয়তা-বান্ধব অ্যানালিটিক্স ব্যবহার করি যা কোনো ব্যক্তিগত ট্র্যাকিং করে না।",
      thirdPartyTitle: "থার্ড-পার্টি বিক্রেতা ও Google AdSense",
      thirdPartyText:
        "Google সহ থার্ড-পার্টি বিক্রেতারা বিজ্ঞাপন পরিবেশন করতে কুকি ব্যবহার করে।",
      contactUs:
        "এই নীতি সম্পর্কে কোনো প্রশ্ন থাকলে, আমাদের সাথে যোগাযোগ করুন।",
      optOutTitle: "বিজ্ঞাপন থেকে অপ্ট-আউট",
      optOutText: "আপনি গুগল অ্যাড সেটিংস-এ গিয়ে অপ্ট-আউট করতে পারেন।",
      userRightsTitle: "আপনার গোপনীয়তা অধিকার",
      userRightsText:
        "আপনি ফুটারে থাকা 'গোপনীয়তা সেটিংস' ব্যবহার করে সম্মতি পরিচালনা করতে পারেন।",
      childrenTitle: "শিশুদের গোপনীয়তা",
      childrenText:
        "আমরা জেনেশুনে ১৩ বছরের কম বয়সী শিশুদের থেকে তথ্য সংগ্রহ করি না।",
      dataRetentionTitle: "ডেটা ধরে রাখা",
      dataRetentionText:
        "অস্থায়ী সংযোগ লগগুলি শুধুমাত্র নিরাপত্তার উদ্দেশ্যে রাখা হয়।",
    },
    Terms: {
      title: "পরিষেবার শর্তাবলী",
      lastUpdated: "সর্বশেষ আপডেট: ২৯ সেপ্টেম্বর ২০২৬",
      intro:
        "Aftara Tools ব্যবহার করার মাধ্যমে, আপনি এই শর্তাবলী মেনে নিতে সম্মত হচ্ছেন।",
      noWarrantyTitle: "কোন ওয়ারেন্টি নেই",
      noWarrantyText:
        "এই ওয়েবসাইটের সমস্ত টুল কোনো গ্যারান্টি ছাড়াই প্রদান করা হয়েছে।",
      liabilityTitle: "দায়বদ্ধতার সীমাবদ্ধতা",
      liabilityText:
        "আমাদের টুল ব্যবহারের কারণে সৃষ্ট কোনো ক্ষতির জন্য Aftara Tools দায়ী থাকবে না।",
      acceptableUseTitle: "গ্রহণযোগ্য ব্যবহার",
      acceptableUseText:
        "আপনি আমাদের টুলগুলি শুধুমাত্র বৈধ উদ্দেশ্যে ব্যবহার করতে সম্মত হন।",
      modificationsTitle: "পরিবর্তন",
      modificationsText:
        "আমরা নোটিশ ছাড়াই এই শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করি।",
    },
    Cookie: {
      title: "কুকি নীতি",
      lastUpdated: "সর্বশেষ আপডেট: ২৯ সেপ্টেম্বর ২০২৬",
      intro: "এই নীতি ব্যাখ্যা করে কুকি কী এবং আমরা এগুলো কীভাবে ব্যবহার করি।",
      whatAreCookiesTitle: "কুকি কী?",
      whatAreCookiesText:
        "কুকি ছোট টেক্সট ফাইল যা ওয়েবসাইটগুলো আপনার ডিভাইসে রাখে।",
      howWeUseCookiesTitle: "আমরা কীভাবে কুকি ব্যবহার করি",
      howWeUseCookiesText:
        "আমরা প্রয়োজনীয় কার্যকারিতার জন্য কুকি ব্যবহার করি।",
      noTrackingTitle: "থার্ড-পার্টি বিজ্ঞাপন কুকি",
      noTrackingText:
        "আমরা বিনামূল্যে টুল চালানোর জন্য Google AdSense ব্যবহার করি। আপনি ফুটারে সেটিংস পরিবর্তন করতে পারেন।",
      managingCookiesTitle: "কুকি পরিচালনা",
      managingCookiesText: "আপনি আপনার ব্রাউজার থেকে কুকি মুছে ফেলতে পারেন।",
    },
    Disclaimer: {
      title: "দাবিত্যাগ",
      lastUpdated: "সর্বশেষ আপডেট: ২৯ সেপ্টেম্বর ২০২৬",
      intro: "এখানে প্রদান করা টুলগুলো শুধুমাত্র সাধারণ তথ্যের জন্য।",
      accuracyTitle: "সাধারণ নির্ভুলতা",
      accuracyText:
        "আমরা কোনো ধরনের নির্ভুলতা বা সম্পূর্ণতার গ্যারান্টি দিই না।",
      medicalTitle: "চিকিৎসা সংক্রান্ত দাবিত্যাগ",
      medicalText:
        "স্বাস্থ্য ক্যালকুলেটরগুলো অনুমান প্রদান করে, পেশাদার চিকিৎসার বিকল্প নয়।",
      financialTitle: "আর্থিক দাবিত্যাগ",
      financialText:
        "ঋণ এবং করের টুলগুলি শুধুমাত্র উদাহরণের জন্য। এগুলো আর্থিক পরামর্শ নয়।",
      legalTitle: "আইনি পার্থক্য",
      legalText: "আপনার স্থানীয় আইনের সাথে সূত্রগুলো মিলতে নাও পারে।",
    },
  },
  de: {
    About: {
      title: "Über Uns & Methodik",
      description:
        "Willkommen bei Aftara Tools, Ihrer kostenlosen Ressource für Premium-Online-Rechner und Entwicklertools.",
      missionTitle: "Unsere Mission",
      missionText:
        "Unsere Mission ist es, schnelle, zuverlässige und datenschutzfreundliche Tools für alltägliche Aufgaben bereitzustellen.",
      methodologyTitle: "Unsere Methodik",
      methodologyIntro:
        "Wir glauben an Transparenz und Genauigkeit, insbesondere bei finanziellen und gesundheitlichen Tools.",
      standardizedFormulasTitle: "Standardisierte Formeln",
      standardizedFormulasText:
        "Alle Finanzrechner verwenden branchenübliche Formeln für Amortisation und Zinseszins.",
      medicalGuidelinesTitle: "Medizinische Richtlinien",
      medicalGuidelinesText:
        "Gesundheitsrechner verwenden weltweit anerkannte Gleichungen, wie die Mifflin-St Jeor-Gleichung.",
      privacyFirstTitle: "Datenschutz zuerst",
      privacyFirstText:
        "Ihre Daten verlassen niemals Ihren Browser. Alle Berechnungen erfolgen lokal auf Ihrem Gerät.",
      continuousTestingTitle: "Kontinuierliches Testen",
      continuousTestingText:
        "Unsere Tools werden streng getestet, um sicherzustellen, dass Grenzfälle elegant behandelt werden.",
      editorialGuidelinesTitle: "Redaktionelle Richtlinien",
      editorialGuidelinesText:
        "Jede Tool-Seite ist so gestaltet, dass sie selbsterklärend ist.",
      disclaimer:
        "Haftungsausschluss: Die Tools auf dieser Website dienen nur Informationszwecken.",
      teamTitle: "Wer wir sind",
      teamText:
        "Diese Seite wird von unserem Team betrieben. Bei Fragen kontaktieren Sie uns bitte.",
    },
    Privacy: {
      title: "Datenschutzrichtlinie",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      intro:
        "Bei Aftara Tools steht Ihre Privatsphäre an erster Stelle. Diese Richtlinie erklärt, wie wir mit Ihren Daten umgehen.",
      dataCollectionTitle: "Keine Datenerfassung",
      dataCollectionText:
        "Wir sammeln keine unnötigen personenbezogenen Daten. Berechnungen erfolgen lokal.",
      analyticsTitle: "Analytik",
      analyticsText:
        "Wir verwenden datenschutzfreundliche Analysen, um Verkehrsmuster zu verstehen.",
      thirdPartyTitle: "Drittanbieter & Google AdSense",
      thirdPartyText:
        "Drittanbieter, einschließlich Google, verwenden Cookies, um Anzeigen basierend auf Ihren vorherigen Besuchen zu schalten.",
      contactUs:
        "Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns.",
      optOutTitle: "Deaktivierung personalisierter Werbung",
      optOutText:
        "Sie können personalisierte Werbung über die Google-Anzeigeneinstellungen deaktivieren.",
      userRightsTitle: "Ihre Datenschutzrechte (GDPR & CCPA)",
      userRightsText:
        "Abhängig von Ihrem Standort haben Sie Rechte gemäß GDPR/CCPA. Nutzen Sie die Datenschutzeinstellungen in der Fußzeile.",
      childrenTitle: "Privatsphäre von Kindern",
      childrenText:
        "Unsere Dienste richten sich nicht an Kinder unter 13 Jahren.",
      dataRetentionTitle: "Vorratsdatenspeicherung",
      dataRetentionText:
        "Temporäre Verbindungsprotokolle werden nur so lange wie nötig aufbewahrt.",
    },
    Terms: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      intro:
        "Durch den Zugriff auf Aftara Tools stimmen Sie diesen Bedingungen zu.",
      noWarrantyTitle: "Keine Garantie",
      noWarrantyText:
        "Alle Tools werden 'wie besehen' ohne jegliche Garantien bereitgestellt.",
      liabilityTitle: "Haftungsbeschränkung",
      liabilityText:
        "Aftara Tools haftet nicht für Schäden, die durch die Nutzung unserer Tools entstehen.",
      acceptableUseTitle: "Zulässige Nutzung",
      acceptableUseText:
        "Sie stimmen zu, unsere Tools nur für legale Zwecke zu nutzen.",
      modificationsTitle: "Änderungen",
      modificationsText:
        "Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern.",
    },
    Cookie: {
      title: "Cookie-Richtlinie",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      intro:
        "Diese Richtlinie erklärt, was Cookies sind und wie wir sie verwenden.",
      whatAreCookiesTitle: "Was sind Cookies?",
      whatAreCookiesText:
        "Cookies sind kleine Textdateien, die auf Ihrem Gerät platziert werden.",
      howWeUseCookiesTitle: "Wie wir Cookies verwenden",
      howWeUseCookiesText:
        "Wir verwenden Cookies für wesentliche Funktionen und relevante Anzeigen.",
      noTrackingTitle: "Werbe-Cookies von Drittanbietern",
      noTrackingText:
        "Wir verwenden Google AdSense. Sie können Ihre Einstellungen in der Fußzeile verwalten.",
      managingCookiesTitle: "Cookies verwalten",
      managingCookiesText:
        "Sie können Cookies über Ihren Browser steuern oder löschen.",
    },
    Disclaimer: {
      title: "Haftungsausschluss",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      intro:
        "Die Informationen auf Aftara Tools dienen nur zu Bildungszwecken.",
      accuracyTitle: "Allgemeine Genauigkeit",
      accuracyText:
        "Wir übernehmen keine Garantie für die Genauigkeit der Ergebnisse.",
      medicalTitle: "Medizinischer Haftungsausschluss",
      medicalText:
        "Gesundheitsrechner ersetzen keine professionelle medizinische Beratung.",
      financialTitle: "Finanzieller Haftungsausschluss",
      financialText:
        "Kreditrechner dienen nur zu Illustrationszwecken und stellen keine Finanzberatung dar.",
      legalTitle: "Rechtliche Variationen",
      legalText:
        "Formeln spiegeln möglicherweise nicht die genauen Steuervorschriften in Ihrer Gerichtsbarkeit wider.",
    },
  },
  es: {
    About: {
      title: "Sobre Nosotros y Metodología",
      description:
        "Bienvenido a Aftara Tools, su recurso gratuito de calculadoras premium en línea.",
      missionTitle: "Nuestra Misión",
      missionText:
        "Nuestra misión es proporcionar herramientas rápidas, confiables y que respeten la privacidad.",
      methodologyTitle: "Nuestra Metodología",
      methodologyIntro:
        "Creemos en la transparencia y precisión, particularmente para herramientas financieras y de salud.",
      standardizedFormulasTitle: "Fórmulas Estandarizadas",
      standardizedFormulasText:
        "Todas las calculadoras financieras utilizan fórmulas estándar de la industria.",
      medicalGuidelinesTitle: "Directrices Médicas",
      medicalGuidelinesText:
        "Las calculadoras de salud utilizan ecuaciones reconocidas mundialmente.",
      privacyFirstTitle: "Privacidad Primero",
      privacyFirstText:
        "Sus datos nunca abandonan su navegador. Todos los cálculos ocurren localmente.",
      continuousTestingTitle: "Pruebas Continuas",
      continuousTestingText:
        "Nuestro conjunto de herramientas se prueba rigurosamente para garantizar la precisión.",
      editorialGuidelinesTitle: "Directrices Editoriales",
      editorialGuidelinesText:
        "Cada página está diseñada para ser intuitiva y fácil de usar.",
      disclaimer:
        "Aviso Legal: Las herramientas son sólo para fines informativos y educativos.",
      teamTitle: "Quiénes Somos",
      teamText:
        "Este sitio es operado por nuestro equipo. Para contactarnos, vea nuestra página de Contacto.",
    },
    Privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      intro: "En Aftara Tools, su privacidad es nuestra máxima prioridad.",
      dataCollectionTitle: "Sin Recopilación de Datos",
      dataCollectionText:
        "No recopilamos datos personales innecesariamente. Los cálculos se realizan localmente.",
      analyticsTitle: "Analítica y Rastreo",
      analyticsText:
        "Podemos utilizar análisis amigables con la privacidad para comprender el tráfico.",
      thirdPartyTitle: "Proveedores de Terceros y Google AdSense",
      thirdPartyText:
        "Proveedores externos, incluido Google, utilizan cookies para publicar anuncios basados en sus visitas.",
      contactUs: "Si tiene alguna pregunta, contáctenos.",
      optOutTitle: "Exclusión de anuncios personalizados",
      optOutText:
        "Puede optar por no recibir publicidad personalizada visitando la Configuración de anuncios de Google.",
      userRightsTitle: "Sus Derechos de Privacidad (GDPR y CCPA)",
      userRightsText:
        "Tiene derecho a optar por no participar. Utilice el enlace 'Configuración de privacidad' en el pie de página.",
      childrenTitle: "Privacidad de los Niños",
      childrenText:
        "No recopilamos a sabiendas información de niños menores de 13 años.",
      dataRetentionTitle: "Retención de Datos",
      dataRetentionText:
        "Los registros temporales de conexión se conservan solo por razones operativas y de seguridad.",
    },
    Terms: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      intro: "Al acceder y utilizar Aftara Tools, acepta estos términos.",
      noWarrantyTitle: "Sin Garantías",
      noWarrantyText:
        "Todas las herramientas se proporcionan 'tal cual' sin garantías expresas o implícitas.",
      liabilityTitle: "Límite de Responsabilidad",
      liabilityText:
        "En ningún caso Aftara Tools será responsable por daños directos o indirectos.",
      acceptableUseTitle: "Uso Aceptable",
      acceptableUseText:
        "Acepta usar nuestras herramientas solo para fines legales.",
      modificationsTitle: "Modificaciones",
      modificationsText:
        "Nos reservamos el derecho de revisar estos términos en cualquier momento.",
    },
    Cookie: {
      title: "Política de Cookies",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      intro: "Esta Política explica qué son las cookies y cómo las usamos.",
      whatAreCookiesTitle: "¿Qué son las Cookies?",
      whatAreCookiesText:
        "Las cookies son pequeños archivos de texto colocados en su dispositivo.",
      howWeUseCookiesTitle: "Cómo Usamos las Cookies",
      howWeUseCookiesText:
        "Usamos cookies para funcionalidad esencial y publicidad a través de terceros como Google.",
      noTrackingTitle: "Cookies Publicitarias",
      noTrackingText:
        "Usamos Google AdSense. Puede gestionar sus preferencias en el pie de página.",
      managingCookiesTitle: "Gestión de Cookies",
      managingCookiesText:
        "Puede controlar o eliminar las cookies desde su navegador.",
    },
    Disclaimer: {
      title: "Aviso Legal",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      intro:
        "La información en Aftara Tools es solo para fines informativos generales.",
      accuracyTitle: "Precisión General",
      accuracyText:
        "No ofrecemos garantías sobre la integridad o precisión de los resultados.",
      medicalTitle: "Aviso Médico",
      medicalText:
        "Las calculadoras de salud no sustituyen el asesoramiento médico profesional.",
      financialTitle: "Aviso Financiero",
      financialText:
        "Las calculadoras financieras son solo para fines ilustrativos.",
      legalTitle: "Variaciones Legales",
      legalText:
        "Las fórmulas pueden no reflejar las normas fiscales de su jurisdicción.",
    },
  },
  fr: {
    About: {
      title: "À propos et Méthodologie",
      description:
        "Bienvenue sur Aftara Tools, votre ressource gratuite d'outils et de calculatrices.",
      missionTitle: "Notre Mission",
      missionText:
        "Notre mission est de fournir des outils rapides et fiables pour les tâches quotidiennes.",
      methodologyTitle: "Notre Méthodologie",
      methodologyIntro:
        "Nous croyons en la transparence et la précision pour les outils financiers et de santé.",
      standardizedFormulasTitle: "Formules Standardisées",
      standardizedFormulasText:
        "Toutes les calculatrices financières utilisent des formules standards de l'industrie.",
      medicalGuidelinesTitle: "Directives Médicales",
      medicalGuidelinesText:
        "Les calculatrices de santé utilisent des équations mondialement reconnues.",
      privacyFirstTitle: "Priorité à la Confidentialité",
      privacyFirstText:
        "Vos données ne quittent jamais votre navigateur. Tout est calculé localement.",
      continuousTestingTitle: "Tests Continus",
      continuousTestingText:
        "Nos outils sont rigoureusement testés pour garantir leur précision.",
      editorialGuidelinesTitle: "Directives Éditoriales",
      editorialGuidelinesText:
        "Chaque page est conçue pour être claire et facile à utiliser.",
      disclaimer:
        "Avis: Les outils sont uniquement à des fins éducatives et ne constituent pas un conseil professionnel.",
      teamTitle: "Qui sommes-nous",
      teamText:
        "Ce site est géré par notre équipe. Pour nous contacter, visitez la page Contact.",
    },
    Privacy: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      intro:
        "Votre confidentialité est notre priorité absolue. Voici comment nous gérons vos données.",
      dataCollectionTitle: "Aucune collecte de données",
      dataCollectionText:
        "Les calculs sont effectués localement. Nous ne recueillons pas de données personnelles inutiles.",
      analyticsTitle: "Analytique",
      analyticsText:
        "Nous pouvons utiliser des analyses respectueuses de la vie privée pour comprendre le trafic.",
      thirdPartyTitle: "Fournisseurs Tiers & Google AdSense",
      thirdPartyText:
        "Des fournisseurs tiers, y compris Google, utilisent des cookies pour diffuser des annonces.",
      contactUs: "Si vous avez des questions, veuillez nous contacter.",
      optOutTitle: "Désactivation des annonces personnalisées",
      optOutText:
        "Vous pouvez désactiver les annonces personnalisées dans les paramètres Google.",
      userRightsTitle: "Vos Droits (GDPR & CCPA)",
      userRightsText:
        "Gérez votre consentement via le lien « Paramètres de confidentialité » en pied de page.",
      childrenTitle: "Confidentialité des Enfants",
      childrenText:
        "Nos services ne sont pas destinés aux enfants de moins de 13 ans.",
      dataRetentionTitle: "Conservation des Données",
      dataRetentionText:
        "Les journaux de connexion temporaires sont conservés uniquement à des fins de sécurité.",
    },
    Terms: {
      title: "Conditions d'Utilisation",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      intro: "En utilisant Aftara Tools, vous acceptez ces conditions.",
      noWarrantyTitle: "Aucune Garantie",
      noWarrantyText:
        "Tous les outils sont fournis « tels quels » sans aucune garantie.",
      liabilityTitle: "Limitation de Responsabilité",
      liabilityText:
        "Aftara Tools ne sera en aucun cas responsable des dommages causés par l'utilisation de nos outils.",
      acceptableUseTitle: "Utilisation Acceptable",
      acceptableUseText:
        "Vous acceptez de n'utiliser nos outils qu'à des fins légales.",
      modificationsTitle: "Modifications",
      modificationsText: "Nous pouvons réviser ces conditions à tout moment.",
    },
    Cookie: {
      title: "Politique relative aux Cookies",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      intro: "Cette politique explique comment nous utilisons les cookies.",
      whatAreCookiesTitle: "Que sont les Cookies ?",
      whatAreCookiesText:
        "Ce sont de petits fichiers texte placés sur votre appareil.",
      howWeUseCookiesTitle: "Comment nous utilisons les cookies",
      howWeUseCookiesText:
        "Nous utilisons des cookies pour les fonctionnalités essentielles et les annonces.",
      noTrackingTitle: "Cookies Publicitaires Tiers",
      noTrackingText:
        "Nous utilisons Google AdSense. Vous pouvez gérer vos préférences en pied de page.",
      managingCookiesTitle: "Gestion des Cookies",
      managingCookiesText:
        "Vous pouvez supprimer ou bloquer les cookies depuis votre navigateur.",
    },
    Disclaimer: {
      title: "Clause de non-responsabilité",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      intro: "Les informations sont à des fins informatives uniquement.",
      accuracyTitle: "Précision Générale",
      accuracyText:
        "Nous ne garantissons pas l'exactitude des résultats générés.",
      medicalTitle: "Avis Médical",
      medicalText:
        "Les calculatrices de santé ne remplacent pas un avis médical professionnel.",
      financialTitle: "Avis Financier",
      financialText:
        "Les calculatrices financières ne constituent pas un conseil financier.",
      legalTitle: "Variations Légales",
      legalText:
        "Les formules peuvent ne pas refléter les règles de votre juridiction.",
    },
  },
};

for (const [lang, texts] of Object.entries(translations)) {
  const filePath = path.join(process.cwd(), "messages", `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    data.About = texts.About;
    data.Privacy = texts.Privacy;
    data.Terms = texts.Terms;
    data.Cookie = texts.Cookie;
    data.Disclaimer = texts.Disclaimer;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    console.log(`Updated ${lang}.json`);
  }
}
