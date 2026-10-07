import fs from "fs";
import path from "path";

const langs = ["ar", "bn", "hi", "id", "ja"];

const translations = {
  ar: {
    About: {
      title: "عن Aftara Tools",
      description:
        "منصة الإنتاجية المميزة لجميع احتياجاتك اليومية من الحسابات والتحويلات والتوليد.",
      missionTitle: "مهمتنا",
      missionText:
        "نعتقد أن الحسابات والتحويلات اليومية يجب أن تكون سريعة ودقيقة ومتاحة للجميع. مهمتنا هي توفير مجموعة شاملة من الأدوات التي تحول المهام المعقدة إلى نقرات بسيطة.",
      methodologyTitle: "منهجيتنا",
      methodologyIntro: "نطبق معايير صارمة على كل أداة نبنيها.",
      standardizedFormulasTitle: "صيغ موحدة",
      standardizedFormulasText:
        "نستخدم صيغًا ومعايير معترف بها دوليًا في جميع حساباتنا لضمان الاتساق عبر القطاعات.",
      medicalGuidelinesTitle: "إرشادات طبية",
      medicalGuidelinesText:
        "تستند حاسبات الصحة واللياقة البدنية إلى صيغ طبية معتمدة (مثل معادلة ميفلين سانت جيور) مع مراجع مقتبسة بوضوح.",
      privacyFirstTitle: "الخصوصية أولاً",
      privacyFirstText:
        "يتم إجراء جميع الحسابات مباشرة في متصفحك. نحن لا نقوم بتخزين أو تتبع أو نقل بيانات الإدخال الشخصية الخاصة بك أبدًا.",
      continuousTestingTitle: "اختبار مستمر",
      continuousTestingText:
        "تمر أدواتنا عبر إجراءات اختبار آلية على آلاف الحالات الطرفية لضمان الدقة الرياضية.",
      editorialGuidelinesTitle: "إرشادات التحرير",
      editorialGuidelinesText:
        "يتم مراجعة كل أداة من قبل خبراء الموضوع قبل نشرها. نقوم بتحديث صيغنا بانتظام لمواكبة المعايير المتغيرة في التمويل والصحة والتكنولوجيا.",
      disclaimer:
        "إخلاء المسؤولية: على الرغم من أننا نسعى جاهدين لتقديم نتائج دقيقة، إلا أن أدواتنا مخصصة للأغراض الإعلامية فقط ولا ينبغي أن تحل محل المشورة الطبية أو المالية أو القانونية المهنية.",
    },
    Contact: {
      title: "اتصل بنا",
      description: "هل لديك سؤال أو اقتراح أو وجدت خطأ؟ نود أن نسمع منك.",
      formName: "اسمك",
      formEmail: "بريدك الإلكتروني",
      formSubject: "الموضوع",
      formMessage: "رسالتك",
      formSubmit: "إرسال رسالة",
      emailUs: "راسلنا عبر البريد الإلكتروني",
      emailAddress: "support@100tools.example",
      responseTime: "نهدف للرد خلال 24-48 ساعة.",
      successMessage: "تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.",
      errorMessage:
        "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقًا.",
    },
    Privacy: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: 29 سبتمبر 2026",
      intro:
        "في Aftara Tools، نأخذ خصوصيتك على محمل الجد. تصف سياسة الخصوصية هذه كيف نقوم بجمع واستخدام وحماية المعلومات عند استخدامك لموقعنا.",
      dataCollectionTitle: "المعلومات التي نجمعها",
      dataCollectionText:
        "تم تصميم أدواتنا للعمل محليًا في متصفحك. نحن لا نجمع أو نخزن أو ننقل البيانات التي تدخلها في حاسباتنا وأدواتنا إلى خوادمنا. جميع حساباتك تظل خاصة على جهازك.",
      analyticsTitle: "التحليلات",
      analyticsText:
        "نستخدم تحليلات أساسية تحترم الخصوصية لفهم حركة المرور على الموقع واستخدام الأدوات. هذا لا يشمل معلومات تحديد الهوية الشخصية أو التتبع الغازي.",
      thirdPartyTitle: "خدمات الطرف الثالث",
      thirdPartyText:
        "قد نستخدم خدمات جهات خارجية للاستضافة أو التحليلات، لكننا لا نشارك معلوماتك الشخصية أو مدخلاتك أبدًا.",
      contactUs:
        "إذا كان لديك أي أسئلة حول سياسة الخصوصية الخاصة بنا، يرجى الاتصال بنا.",
    },
    Terms: {
      title: "شروط الخدمة",
      lastUpdated: "آخر تحديث: 29 سبتمبر 2026",
      intro:
        "من خلال الوصول إلى واستخدام Aftara Tools، فإنك توافق على الالتزام بشروط وأحكام الاستخدام التالية.",
      noWarrantyTitle: "لا توجد ضمانات (كما هي)",
      noWarrantyText:
        'يتم تقديم جميع الأدوات والحاسبات والمعلومات على هذا الموقع "كما هي" دون أي تعهدات أو ضمانات، صريحة أو ضمنية. نحن لا نضمن دقة أو موثوقية أو اكتمال النتائج المولدة.',
      liabilityTitle: "حدود المسؤولية",
      liabilityText:
        "في أي حال من الأحوال لن تكون Aftara Tools مسؤولة عن أضرار خاصة أو مباشرة أو غير مباشرة أو تبعية أو عرضية أو أي أضرار على الإطلاق تنشأ عن أو تتعلق باستخدام أدواتنا. ويشمل ذلك الخسائر المالية أو القرارات الطبية المتخذة بناءً على حاسباتنا.",
      acceptableUseTitle: "الاستخدام المقبول",
      acceptableUseText:
        "أنت توافق على استخدام أدواتنا لأغراض قانونية فقط. يجب عليك عدم محاولة كشط أو هجوم حجب الخدمة (DDoS) أو تعطيل الخدمة أو الشبكات المتصلة بـ Aftara Tools بخلاف ذلك.",
      modificationsTitle: "التعديلات",
      modificationsText:
        "نحتفظ بالحق في مراجعة شروط الخدمة هذه في أي وقت دون إشعار. من خلال استخدام هذا الموقع، فإنك توافق على الالتزام بالإصدار الحالي من هذه الشروط.",
    },
    Cookie: {
      title: "سياسة ملفات تعريف الارتباط",
      lastUpdated: "آخر تحديث: 29 سبتمبر 2026",
      intro:
        "تشرح سياسة ملفات تعريف الارتباط هذه ما هي ملفات تعريف الارتباط وكيف نستخدمها. يجب عليك قراءة هذه السياسة حتى تتمكن من فهم نوع ملفات تعريف الارتباط التي نستخدمها، أو المعلومات التي نجمعها باستخدامها وكيف يتم استخدام تلك المعلومات.",
      whatAreCookiesTitle: "ما هي ملفات تعريف الارتباط؟",
      whatAreCookiesText:
        "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم وضعها على جهاز الكمبيوتر أو الجهاز المحمول الخاص بك بواسطة مواقع الويب التي تزورها. تستخدم على نطاق واسع لجعل مواقع الويب تعمل، أو تعمل بشكل أكثر كفاءة، وكذلك لتقديم معلومات للإبلاغ.",
      howWeUseCookiesTitle: "كيف نستخدم ملفات تعريف الارتباط",
      howWeUseCookiesText:
        'نستخدم ملفات تعريف الارتباط بشكل صارم للوظائف الأساسية وتفضيلات المستخدم الأساسية. على سبيل المثال، قد نستخدم التخزين المحلي أو ملف تعريف ارتباط لتذكر ما إذا كنت تفضل "الوضع المظلم" أو "الوضع الفاتح"، أو لتذكر لغتك المفضلة.',
      noTrackingTitle: "لا تتبع غازي",
      noTrackingText:
        "لا نستخدم ملفات تعريف ارتباط إعلانية، أو متتبعات تابعة لجهات خارجية، أو تقنيات تتبع عبر المواقع. يظل استخدامك لأدواتنا خاصًا.",
      managingCookiesTitle: "إدارة ملفات تعريف الارتباط",
      managingCookiesText:
        "يمكنك التحكم في ملفات تعريف الارتباط و/أو حذفها كما يحلو لك. يمكنك حذف جميع ملفات تعريف الارتباط الموجودة بالفعل على جهازك ويمكنك ضبط معظم المتصفحات لمنع وضعها.",
    },
  },
  bn: {
    About: {
      title: "Aftara Tools সম্পর্কে",
      description:
        "আপনার সমস্ত দৈনন্দিন গণনা, রূপান্তর এবং জেনারেশনের প্রয়োজনের জন্য প্রিমিয়াম প্রোডাক্টিভিটি প্ল্যাটফর্ম।",
      missionTitle: "আমাদের মিশন",
      missionText:
        "আমরা বিশ্বাস করি যে দৈনন্দিন গণনা এবং রূপান্তরগুলি দ্রুত, নির্ভুল এবং সকলের জন্য অ্যাক্সেসযোগ্য হওয়া উচিত। আমাদের লক্ষ্য হল টুলগুলির একটি বিস্তৃত স্যুট প্রদান করা যা জটিল কাজগুলিকে সাধারণ ক্লিকে পরিণত করে।",
      methodologyTitle: "আমাদের পদ্ধতি",
      methodologyIntro: "আমরা তৈরি করা প্রতিটি টুলে কঠোর মান প্রয়োগ করি।",
      standardizedFormulasTitle: "প্রমিত সূত্র",
      standardizedFormulasText:
        "সেক্টর জুড়ে ধারাবাহিকতা নিশ্চিত করতে আমরা আমাদের সমস্ত গণনায় আন্তর্জাতিকভাবে স্বীকৃত সূত্র এবং মান ব্যবহার করি।",
      medicalGuidelinesTitle: "চিকিৎসা নির্দেশিকা",
      medicalGuidelinesText:
        "স্বাস্থ্য এবং ফিটনেস ক্যালকুলেটরগুলি প্রতিষ্ঠিত চিকিৎসা সূত্রগুলির উপর ভিত্তি করে তৈরি করা হয় (যেমন মিফলিন-সেন্ট জিওর সমীকরণ) যেখানে স্পষ্টভাবে তথ্যসূত্র উদ্ধৃত করা থাকে।",
      privacyFirstTitle: "গোপনীয়তা আগে",
      privacyFirstText:
        "সমস্ত গণনা সরাসরি আপনার ব্রাউজারে সঞ্চালিত হয়। আমরা কখনই আপনার ব্যক্তিগত ইনপুট ডেটা সঞ্চয় করি না, ট্র্যাক করি না বা প্রেরণ করি না।",
      continuousTestingTitle: "অবিচ্ছিন্ন পরীক্ষা",
      continuousTestingText:
        "গাণিতিক নির্ভুলতা নিশ্চিত করতে আমাদের টুলগুলি হাজার হাজার প্রান্তীয় ক্ষেত্রে স্বয়ংক্রিয় পরীক্ষার রুটিনের মধ্য দিয়ে যায়।",
      editorialGuidelinesTitle: "সম্পাদকীয় নির্দেশিকা",
      editorialGuidelinesText:
        "প্রকাশনার আগে প্রতিটি টুল বিষয় বিশেষজ্ঞদের দ্বারা পর্যালোচনা করা হয়। ফিন্যান্স, স্বাস্থ্য এবং প্রযুক্তির পরিবর্তনশীল মানগুলির সাথে তাল মিলিয়ে চলতে আমরা নিয়মিত আমাদের সূত্রগুলি আপডেট করি।",
      disclaimer:
        "অস্বীকৃতি: আমরা সঠিক ফলাফল প্রদানের চেষ্টা করলেও, আমাদের টুলগুলি শুধুমাত্র তথ্যগত উদ্দেশ্যে এবং পেশাদার চিকিৎসা, আর্থিক বা আইনি পরামর্শ প্রতিস্থাপন করা উচিত নয়।",
    },
    Contact: {
      title: "আমাদের সাথে যোগাযোগ করুন",
      description:
        "কোনো প্রশ্ন, পরামর্শ আছে বা কোনো বাগ খুঁজে পেয়েছেন? আমরা আপনার মতামত শুনতে চাই।",
      formName: "আপনার নাম",
      formEmail: "আপনার ইমেল",
      formSubject: "বিষয়",
      formMessage: "আপনার বার্তা",
      formSubmit: "বার্তা পাঠান",
      emailUs: "আমাদের ইমেল করুন",
      emailAddress: "support@100tools.example",
      responseTime: "আমরা ২৪-৪৮ ঘন্টার মধ্যে উত্তর দেওয়ার লক্ষ্য রাখি।",
      successMessage:
        "আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
      errorMessage:
        "আপনার বার্তা পাঠানোর সময় একটি ত্রুটি ঘটেছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।",
    },
    Privacy: {
      title: "গোপনীয়তা নীতি",
      lastUpdated: "সর্বশেষ আপডেট: ২৯ সেপ্টেম্বর ২০২৬",
      intro:
        "Aftara Tools-এ, আমরা আপনার গোপনীয়তাকে খুব গুরুত্ব সহকারে নিই। আপনি যখন আমাদের ওয়েবসাইট ব্যবহার করেন তখন কীভাবে আমরা তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত করি তা এই গোপনীয়তা নীতি বর্ণনা করে।",
      dataCollectionTitle: "আমরা যে তথ্য সংগ্রহ করি",
      dataCollectionText:
        "আমাদের টুলগুলি আপনার ব্রাউজারে স্থানীয়ভাবে চালানোর জন্য ডিজাইন করা হয়েছে। আপনি আমাদের ক্যালকুলেটর এবং টুলগুলিতে যে ডেটা ইনপুট করেন তা আমরা সংগ্রহ, সঞ্চয় বা আমাদের সার্ভারে প্রেরণ করি না। আপনার সমস্ত গণনা আপনার ডিভাইসে ব্যক্তিগত থাকে।",
      analyticsTitle: "অ্যানালিটিক্স",
      analyticsText:
        "ওয়েবসাইট ট্র্যাফিক এবং টুল ব্যবহার বুঝতে আমরা মৌলিক, গোপনীয়তা-সম্মানজনক বিশ্লেষণ ব্যবহার করি। এর মধ্যে ব্যক্তিগতভাবে সনাক্তযোগ্য তথ্য বা আক্রমণাত্মক ট্র্যাকিং অন্তর্ভুক্ত নয়।",
      thirdPartyTitle: "থার্ড-পার্টি পরিষেবা",
      thirdPartyText:
        "আমরা হোস্টিং বা বিশ্লেষণের জন্য তৃতীয় পক্ষের পরিষেবা ব্যবহার করতে পারি, তবে আমরা কখনই আপনার ব্যক্তিগত তথ্য বা ইনপুট ভাগ করি না।",
      contactUs:
        "আমাদের গোপনীয়তা নীতি সম্পর্কে আপনার কোনো প্রশ্ন থাকলে অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।",
    },
    Terms: {
      title: "পরিষেবার শর্তাবলী",
      lastUpdated: "সর্বশেষ আপডেট: ২৯ সেপ্টেম্বর ২০২৬",
      intro:
        "Aftara Tools অ্যাক্সেস এবং ব্যবহার করে, আপনি নিম্নলিখিত ব্যবহারের শর্তাবলী মেনে চলতে সম্মত হন।",
      noWarrantyTitle: "কোনো ওয়ারেন্টি নেই (যেমন আছে)",
      noWarrantyText:
        'এই ওয়েবসাইটের সমস্ত টুল, ক্যালকুলেটর এবং তথ্য কোনো প্রতিনিধিত্ব বা ওয়ারেন্টি ছাড়াই "যেমন আছে" প্রদান করা হয়, তা প্রকাশ বা উহ্য হোক না কেন। আমরা উত্পন্ন ফলাফলের যথার্থতা, নির্ভরযোগ্যতা বা সম্পূর্ণতার গ্যারান্টি দিই না।',
      liabilityTitle: "দায়ের সীমাবদ্ধতা",
      liabilityText:
        "কোনো ক্ষেত্রেই Aftara Tools কোনো বিশেষ, প্রত্যক্ষ, পরোক্ষ, আনুষঙ্গিক বা দৃষ্টান্তমূলক ক্ষতির জন্য বা আমাদের টুল ব্যবহারের কারণে বা তার সাথে সম্পর্কিত কোনো ক্ষতির জন্য দায়ী থাকবে না। এর মধ্যে আমাদের ক্যালকুলেটরগুলির উপর ভিত্তি করে নেওয়া আর্থিক ক্ষতি বা চিকিৎসা সিদ্ধান্তগুলি অন্তর্ভুক্ত।",
      acceptableUseTitle: "গ্রহণযোগ্য ব্যবহার",
      acceptableUseText:
        "আপনি শুধুমাত্র আইনি উদ্দেশ্যে আমাদের টুল ব্যবহার করতে সম্মত হন। আপনি স্ক্র্যাপ, ডিডিওএস, বা Aftara Tools-এর সাথে সংযুক্ত পরিষেবা বা নেটওয়ার্কগুলিকে অন্যভাবে ব্যাহত করার চেষ্টা করবেন না।",
      modificationsTitle: "পরিবর্তনসমূহ",
      modificationsText:
        "আমরা কোনো বিজ্ঞপ্তি ছাড়াই যেকোনো সময় এই পরিষেবার শর্তাবলী সংশোধন করার অধিকার সংরক্ষণ করি। এই ওয়েবসাইটটি ব্যবহার করে, আপনি এই শর্তগুলির বর্তমান সংস্করণে আবদ্ধ হতে সম্মত হচ্ছেন।",
    },
    Cookie: {
      title: "কুকি নীতি",
      lastUpdated: "সর্বশেষ আপডেট: ২৯ সেপ্টেম্বর ২০২৬",
      intro:
        "এই কুকি নীতি ব্যাখ্যা করে যে কুকিজ কী এবং আমরা কীভাবে সেগুলি ব্যবহার করি। আমরা কী ধরনের কুকি ব্যবহার করি, বা কুকি ব্যবহার করে আমরা যে তথ্য সংগ্রহ করি এবং সেই তথ্য কীভাবে ব্যবহার করা হয় তা বুঝতে আপনার এই নীতিটি পড়া উচিত।",
      whatAreCookiesTitle: "কুকি কী?",
      whatAreCookiesText:
        "কুকি হল ছোট টেক্সট ফাইল যা আপনার পরিদর্শন করা ওয়েবসাইটগুলি দ্বারা আপনার কম্পিউটার বা মোবাইল ডিভাইসে রাখা হয়। এগুলি ওয়েবসাইটগুলিকে কাজ করার জন্য, বা আরও দক্ষতার সাথে কাজ করার জন্য, সেইসাথে রিপোর্টিং তথ্য প্রদানের জন্য ব্যাপকভাবে ব্যবহৃত হয়।",
      howWeUseCookiesTitle: "আমরা কীভাবে কুকি ব্যবহার করি",
      howWeUseCookiesText:
        'আমরা শুধুমাত্র প্রয়োজনীয় কার্যকারিতা এবং মৌলিক ব্যবহারকারীর পছন্দগুলির জন্য কুকি ব্যবহার করি। উদাহরণস্বরূপ, আপনি "ডার্ক মোড" বা "লাইট মোড" পছন্দ করেন কিনা, বা আপনার পছন্দের ভাষা মনে রাখতে আমরা স্থানীয় সঞ্চয়স্থান বা একটি কুকি ব্যবহার করতে পারি।',
      noTrackingTitle: "কোনো আক্রমণাত্মক ট্র্যাকিং নেই",
      noTrackingText:
        "আমরা বিজ্ঞাপন কুকি, থার্ড-পার্টি ট্র্যাকার বা ক্রস-সাইট ট্র্যাকিং প্রযুক্তি ব্যবহার করি না। আমাদের টুলগুলির আপনার ব্যবহার ব্যক্তিগত থাকে।",
      managingCookiesTitle: "কুকি পরিচালনা",
      managingCookiesText:
        "আপনি ইচ্ছা করলে কুকি নিয়ন্ত্রণ এবং/বা মুছে ফেলতে পারেন। আপনি আপনার কম্পিউটারে ইতিমধ্যে থাকা সমস্ত কুকি মুছে ফেলতে পারেন এবং আপনি বেশিরভাগ ব্রাউজারকে সেগুলি রাখা থেকে বিরত রাখতে সেট করতে পারেন।",
    },
  },
  hi: {
    About: {
      title: "Aftara Tools के बारे में",
      description:
        "आपकी सभी दैनिक गणना, रूपांतरण और जनरेशन आवश्यकताओं के लिए प्रीमियम उत्पादकता प्लेटफ़ॉर्म।",
      missionTitle: "हमारा मिशन",
      missionText:
        "हमारा मानना है कि दैनिक गणनाएं और रूपांतरण तेज, सटीक और सभी के लिए सुलभ होने चाहिए। हमारा मिशन उपकरणों का एक व्यापक सूट प्रदान करना है जो जटिल कार्यों को सरल क्लिक में बदल देता है।",
      methodologyTitle: "हमारी कार्यप्रणाली",
      methodologyIntro:
        "हम अपने द्वारा बनाए गए प्रत्येक उपकरण पर सख्त मानक लागू करते हैं।",
      standardizedFormulasTitle: "मानकीकृत सूत्र",
      standardizedFormulasText:
        "हम क्षेत्रों में निरंतरता सुनिश्चित करने के लिए अपनी सभी गणनाओं पर अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त सूत्रों और मानकों का उपयोग करते हैं।",
      medicalGuidelinesTitle: "चिकित्सा दिशानिर्देश",
      medicalGuidelinesText:
        "स्वास्थ्य और फिटनेस कैलकुलेटर स्पष्ट रूप से उद्धृत संदर्भों के साथ स्थापित चिकित्सा सूत्रों (जैसे मिफ्लिन-सेंट जेओर समीकरण) पर आधारित हैं।",
      privacyFirstTitle: "गोपनीयता सबसे पहले",
      privacyFirstText:
        "सभी गणनाएं सीधे आपके ब्राउज़र में की जाती हैं। हम आपके व्यक्तिगत इनपुट डेटा को कभी भी स्टोर, ट्रैक या संचारित नहीं करते हैं।",
      continuousTestingTitle: "निरंतर परीक्षण",
      continuousTestingText:
        "गणितीय सटीकता सुनिश्चित करने के लिए हमारे उपकरण हजारों एज मामलों में स्वचालित परीक्षण रूटीन से गुजरते हैं।",
      editorialGuidelinesTitle: "संपादकीय दिशानिर्देश",
      editorialGuidelinesText:
        "प्रकाशन से पहले विषय विशेषज्ञों द्वारा प्रत्येक उपकरण की समीक्षा की जाती है। वित्त, स्वास्थ्य और प्रौद्योगिकी में बदलते मानकों के साथ बने रहने के लिए हम नियमित रूप से अपने सूत्रों को अपडेट करते हैं।",
      disclaimer:
        "अस्वीकरण: हालांकि हम सटीक परिणाम प्रदान करने का प्रयास करते हैं, हमारे उपकरण केवल सूचनात्मक उद्देश्यों के लिए हैं और इन्हें पेशेवर चिकित्सा, वित्तीय या कानूनी सलाह को प्रतिस्थापित नहीं करना चाहिए।",
    },
    Contact: {
      title: "हमसे संपर्क करें",
      description:
        "कोई प्रश्न, सुझाव है या कोई बग मिला है? हम आपसे सुनना पसंद करेंगे।",
      formName: "आपका नाम",
      formEmail: "आपका ईमेल",
      formSubject: "विषय",
      formMessage: "आपका संदेश",
      formSubmit: "संदेश भेजें",
      emailUs: "हमें ईमेल करें",
      emailAddress: "support@100tools.example",
      responseTime: "हमारा लक्ष्य 24-48 घंटों के भीतर जवाब देना है।",
      successMessage:
        "आपका संदेश सफलतापूर्वक भेज दिया गया है! हम जल्द ही आपसे संपर्क करेंगे।",
      errorMessage:
        "आपका संदेश भेजते समय एक त्रुटि हुई। कृपया बाद में पुनः प्रयास करें।",
    },
    Privacy: {
      title: "गोपनीयता नीति",
      lastUpdated: "अंतिम अद्यतन: 29 सितंबर 2026",
      intro:
        "Aftara Tools में, हम आपकी गोपनीयता को बहुत गंभीरता से लेते हैं। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट का उपयोग करते हैं तो हम जानकारी कैसे एकत्र करते हैं, उपयोग करते हैं और उसकी रक्षा कैसे करते हैं।",
      dataCollectionTitle: "जानकारी जो हम एकत्र करते हैं",
      dataCollectionText:
        "हमारे उपकरण आपके ब्राउज़र में स्थानीय रूप से चलने के लिए डिज़ाइन किए गए हैं। आप हमारे कैलकुलेटर और उपकरणों में जो डेटा इनपुट करते हैं, उसे हम अपने सर्वर पर एकत्र, संग्रहीत या प्रसारित नहीं करते हैं। आपकी सभी गणनाएं आपके डिवाइस पर निजी रहती हैं।",
      analyticsTitle: "एनालिटिक्स",
      analyticsText:
        "हम वेबसाइट ट्रैफ़िक और टूल उपयोग को समझने के लिए बुनियादी, गोपनीयता-सम्मान करने वाले विश्लेषणों का उपयोग करते हैं। इसमें व्यक्तिगत रूप से पहचान योग्य जानकारी या आक्रामक ट्रैकिंग शामिल नहीं है।",
      thirdPartyTitle: "तृतीय-पक्ष सेवाएं",
      thirdPartyText:
        "हम होस्टिंग या एनालिटिक्स के लिए तृतीय-पक्ष सेवाओं का उपयोग कर सकते हैं, लेकिन हम कभी भी आपकी व्यक्तिगत जानकारी या इनपुट साझा नहीं करते हैं।",
      contactUs:
        "यदि हमारी गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें।",
    },
    Terms: {
      title: "सेवा की शर्तें",
      lastUpdated: "अंतिम अद्यतन: 29 सितंबर 2026",
      intro:
        "Aftara Tools तक पहुँचने और उसका उपयोग करने पर, आप उपयोग के निम्नलिखित नियमों और शर्तों का पालन करने के लिए सहमत होते हैं।",
      noWarrantyTitle: "कोई वारंटी नहीं (जैसा है)",
      noWarrantyText:
        'इस वेबसाइट पर सभी उपकरण, कैलकुलेटर और जानकारी बिना किसी प्रतिनिधित्व या वारंटी, व्यक्त या निहित के "जैसा है" प्रदान की जाती है। हम उत्पन्न परिणामों की सटीकता, विश्वसनीयता या पूर्णता की गारंटी नहीं देते हैं।',
      liabilityTitle: "दायित्व की सीमा",
      liabilityText:
        "किसी भी स्थिति में Aftara Tools हमारे उपकरणों के उपयोग के संबंध में या उसके कारण उत्पन्न होने वाले किसी विशेष, प्रत्यक्ष, अप्रत्यक्ष, परिणामी या आकस्मिक नुकसान या किसी भी प्रकार के नुकसान के लिए उत्तरदायी नहीं होगा। इसमें हमारे कैलकुलेटर के आधार पर किए गए वित्तीय नुकसान या चिकित्सा निर्णय शामिल हैं।",
      acceptableUseTitle: "स्वीकार्य उपयोग",
      acceptableUseText:
        "आप हमारे उपकरणों का उपयोग केवल कानूनी उद्देश्यों के लिए करने के लिए सहमत हैं। आपको Aftara Tools से जुड़ी सेवा या नेटवर्क को स्क्रैप, DDoS, या अन्यथा बाधित करने का प्रयास नहीं करना चाहिए।",
      modificationsTitle: "संशोधन",
      modificationsText:
        "हम बिना किसी सूचना के किसी भी समय सेवा की इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। इस वेबसाइट का उपयोग करके, आप इन शर्तों के तत्कालीन वर्तमान संस्करण से बाध्य होने के लिए सहमत हैं।",
    },
    Cookie: {
      title: "कुकी नीति",
      lastUpdated: "अंतिम अद्यतन: 29 सितंबर 2026",
      intro:
        "यह कुकी नीति बताती है कि कुकीज़ क्या हैं और हम उनका उपयोग कैसे करते हैं। आपको इस नीति को पढ़ना चाहिए ताकि आप समझ सकें कि हम किस प्रकार की कुकीज़ का उपयोग करते हैं, या कुकीज़ का उपयोग करके हम जो जानकारी एकत्र करते हैं और उस जानकारी का उपयोग कैसे किया जाता है।",
      whatAreCookiesTitle: "कुकीज़ क्या हैं?",
      whatAreCookiesText:
        "कुकीज़ छोटी टेक्स्ट फ़ाइलें होती हैं जो आपके द्वारा देखी जाने वाली वेबसाइटों द्वारा आपके कंप्यूटर या मोबाइल डिवाइस पर रखी जाती हैं। उनका उपयोग वेबसाइटों को काम करने के लिए, या अधिक कुशलता से काम करने के लिए, और रिपोर्टिंग जानकारी प्रदान करने के लिए व्यापक रूप से किया जाता है।",
      howWeUseCookiesTitle: "हम कुकीज़ का उपयोग कैसे करते हैं",
      howWeUseCookiesText:
        'हम केवल आवश्यक कार्यक्षमता और बुनियादी उपयोगकर्ता प्राथमिकताओं के लिए कुकीज़ का उपयोग करते हैं। उदाहरण के लिए, यदि आप "डार्क मोड" या "लाइट मोड" पसंद करते हैं, तो याद रखने के लिए, या आपकी पसंदीदा भाषा को याद रखने के लिए हम स्थानीय संग्रहण या कुकी का उपयोग कर सकते हैं।',
      noTrackingTitle: "कोई आक्रामक ट्रैकिंग नहीं",
      noTrackingText:
        "हम विज्ञापन कुकीज़, तृतीय-पक्ष ट्रैकर्स या क्रॉस-साइट ट्रैकिंग तकनीकों का उपयोग नहीं करते हैं। हमारे उपकरणों का आपका उपयोग निजी रहता है।",
      managingCookiesTitle: "कुकीज़ प्रबंधित करना",
      managingCookiesText:
        "आप अपनी इच्छानुसार कुकीज़ को नियंत्रित और/या हटा सकते हैं। आप उन सभी कुकीज़ को हटा सकते हैं जो पहले से ही आपके कंप्यूटर पर हैं और आप अधिकांश ब्राउज़रों को उन्हें रखे जाने से रोकने के लिए सेट कर सकते हैं।",
    },
  },
  id: {
    About: {
      title: "Tentang Aftara Tools",
      description:
        "Platform produktivitas premium untuk semua kebutuhan komputasi, konversi, dan generasi harian Anda.",
      missionTitle: "Misi Kami",
      missionText:
        "Kami percaya bahwa perhitungan dan konversi harian harus cepat, akurat, dan dapat diakses oleh semua orang. Misi kami adalah menyediakan rangkaian alat komprehensif yang mengubah tugas kompleks menjadi klik sederhana.",
      methodologyTitle: "Metodologi Kami",
      methodologyIntro:
        "Kami menerapkan standar ketat pada setiap alat yang kami bangun.",
      standardizedFormulasTitle: "Rumus Terstandar",
      standardizedFormulasText:
        "Kami menggunakan rumus dan standar yang diakui secara internasional di semua perhitungan kami untuk memastikan konsistensi lintas sektor.",
      medicalGuidelinesTitle: "Pedoman Medis",
      medicalGuidelinesText:
        "Kalkulator kesehatan dan kebugaran didasarkan pada rumus medis yang mapan (seperti Persamaan Mifflin-St Jeor) dengan referensi yang dikutip dengan jelas.",
      privacyFirstTitle: "Privasi Pertama",
      privacyFirstText:
        "Semua perhitungan dilakukan langsung di browser Anda. Kami tidak pernah menyimpan, melacak, atau mengirimkan data input pribadi Anda.",
      continuousTestingTitle: "Pengujian Berkelanjutan",
      continuousTestingText:
        "Alat kami melalui rutinitas pengujian otomatis di ribuan edge cases untuk memastikan akurasi matematis.",
      editorialGuidelinesTitle: "Pedoman Editorial",
      editorialGuidelinesText:
        "Setiap alat ditinjau oleh pakar bidang studi sebelum dipublikasikan. Kami secara teratur memperbarui rumus kami untuk mengikuti perubahan standar di bidang keuangan, kesehatan, dan teknologi.",
      disclaimer:
        "Penafian: Meskipun kami berusaha keras untuk memberikan hasil yang akurat, alat kami hanya untuk tujuan informasi dan tidak boleh menggantikan saran medis, keuangan, atau hukum profesional.",
    },
    Contact: {
      title: "Hubungi Kami",
      description:
        "Punya pertanyaan, saran, atau menemukan bug? Kami ingin mendengar dari Anda.",
      formName: "Nama Anda",
      formEmail: "Email Anda",
      formSubject: "Subjek",
      formMessage: "Pesan Anda",
      formSubmit: "Kirim Pesan",
      emailUs: "Kirim email kepada kami",
      emailAddress: "support@100tools.example",
      responseTime: "Kami bertujuan untuk merespons dalam 24-48 jam.",
      successMessage:
        "Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.",
      errorMessage:
        "Terjadi kesalahan saat mengirim pesan Anda. Silakan coba lagi nanti.",
    },
    Privacy: {
      title: "Kebijakan Privasi",
      lastUpdated: "Pembaruan Terakhir: 29 September 2026",
      intro:
        "Di Aftara Tools, kami sangat menjaga privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi saat Anda menggunakan situs web kami.",
      dataCollectionTitle: "Informasi yang Kami Kumpulkan",
      dataCollectionText:
        "Alat kami dirancang untuk berjalan secara lokal di browser Anda. Kami tidak mengumpulkan, menyimpan, atau mengirimkan data yang Anda masukkan dalam kalkulator dan alat kami ke server kami. Semua perhitungan Anda tetap pribadi di perangkat Anda.",
      analyticsTitle: "Analitik",
      analyticsText:
        "Kami menggunakan analitik dasar yang menghargai privasi untuk memahami lalu lintas situs web dan penggunaan alat. Ini tidak termasuk informasi identifikasi pribadi atau pelacakan invasif.",
      thirdPartyTitle: "Layanan Pihak Ketiga",
      thirdPartyText:
        "Kami mungkin menggunakan layanan pihak ketiga untuk hosting atau analitik, tetapi kami tidak pernah membagikan informasi pribadi atau masukan Anda.",
      contactUs:
        "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami, silakan hubungi kami.",
    },
    Terms: {
      title: "Ketentuan Layanan",
      lastUpdated: "Pembaruan Terakhir: 29 September 2026",
      intro:
        "Dengan mengakses dan menggunakan Aftara Tools, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan penggunaan berikut.",
      noWarrantyTitle: "Tanpa Jaminan (Sebagaimana Adanya)",
      noWarrantyText:
        'Semua alat, kalkulator, dan informasi di situs web ini disediakan "sebagaimana adanya" tanpa perwakilan atau jaminan apa pun, tersurat maupun tersirat. Kami tidak menjamin keakuratan, keandalan, atau kelengkapan hasil yang dihasilkan.',
      liabilityTitle: "Batasan Tanggung Jawab",
      liabilityText:
        "Dalam keadaan apa pun, Aftara Tools tidak akan bertanggung jawab atas kerusakan khusus, langsung, tidak langsung, konsekuensial, atau insidental atau kerusakan apa pun yang timbul dari atau sehubungan dengan penggunaan alat kami. Ini termasuk kerugian finansial atau keputusan medis yang dibuat berdasarkan kalkulator kami.",
      acceptableUseTitle: "Penggunaan yang Dapat Diterima",
      acceptableUseText:
        "Anda setuju untuk menggunakan alat kami hanya untuk tujuan yang sah. Anda dilarang mencoba untuk mengorek (scrape), melakukan DDoS, atau mengganggu layanan atau jaringan yang terhubung ke Aftara Tools.",
      modificationsTitle: "Modifikasi",
      modificationsText:
        "Kami berhak merevisi ketentuan layanan ini kapan saja tanpa pemberitahuan. Dengan menggunakan situs web ini, Anda setuju untuk terikat dengan versi terbaru dari ketentuan ini.",
    },
    Cookie: {
      title: "Kebijakan Cookie",
      lastUpdated: "Pembaruan Terakhir: 29 September 2026",
      intro:
        "Kebijakan Cookie ini menjelaskan apa itu cookie dan bagaimana kami menggunakannya. Anda harus membaca kebijakan ini agar Anda dapat memahami jenis cookie yang kami gunakan, atau informasi yang kami kumpulkan menggunakan cookie dan bagaimana informasi tersebut digunakan.",
      whatAreCookiesTitle: "Apa itu Cookie?",
      whatAreCookiesText:
        "Cookie adalah file teks kecil yang ditempatkan di komputer atau perangkat seluler Anda oleh situs web yang Anda kunjungi. Cookie banyak digunakan agar situs web berfungsi, atau bekerja lebih efisien, serta untuk menyediakan informasi pelaporan.",
      howWeUseCookiesTitle: "Bagaimana Kami Menggunakan Cookie",
      howWeUseCookiesText:
        'Kami menggunakan cookie secara ketat untuk fungsionalitas esensial dan preferensi dasar pengguna. Misalnya, kami mungkin menggunakan penyimpanan lokal atau cookie untuk mengingat apakah Anda lebih suka "Mode Gelap" atau "Mode Terang", atau untuk mengingat bahasa pilihan Anda.',
      noTrackingTitle: "Tidak Ada Pelacakan Invasif",
      noTrackingText:
        "Kami tidak menggunakan cookie iklan, pelacak pihak ketiga, atau teknologi pelacakan lintas situs. Penggunaan Anda atas alat kami tetap pribadi.",
      managingCookiesTitle: "Mengelola Cookie",
      managingCookiesText:
        "Anda dapat mengontrol dan/atau menghapus cookie sesuka Anda. Anda dapat menghapus semua cookie yang sudah ada di komputer Anda dan Anda dapat mengatur sebagian besar browser untuk mencegahnya ditempatkan.",
    },
  },
  ja: {
    About: {
      title: "Aftara Toolsについて",
      description:
        "日々の計算、変換、生成のニーズに応えるプレミアム生産性プラットフォーム。",
      missionTitle: "私たちのミッション",
      missionText:
        "私たちは、日々の計算と変換が速く、正確で、誰もが利用できるものであるべきだと信じています。私たちのミッションは、複雑なタスクをシンプルなクリックに変える包括的なツールスイートを提供することです。",
      methodologyTitle: "私たちの方法論",
      methodologyIntro:
        "私たちが構築するすべてのツールには、厳格な基準が適用されています。",
      standardizedFormulasTitle: "標準化された計算式",
      standardizedFormulasText:
        "セクター間での一貫性を確保するため、すべての計算において国際的に認知された計算式と標準を使用しています。",
      medicalGuidelinesTitle: "医療ガイドライン",
      medicalGuidelinesText:
        "健康とフィットネスの計算機は、確立された医学的計算式（ミフリン・セント・ジョールの方程式など）に基づいており、明確に引用された参考文献があります。",
      privacyFirstTitle: "プライバシーファースト",
      privacyFirstText:
        "すべての計算はブラウザ内で直接実行されます。個人入力データを保存、追跡、送信することは決してありません。",
      continuousTestingTitle: "継続的なテスト",
      continuousTestingText:
        "数学的正確性を確保するため、ツールは何千ものエッジケースでの自動化されたテスト手順を通過しています。",
      editorialGuidelinesTitle: "編集ガイドライン",
      editorialGuidelinesText:
        "各ツールは公開前に分野の専門家によってレビューされます。金融、健康、技術の分野での変化する基準に対応するため、計算式は定期的に更新されています。",
      disclaimer:
        "免責事項：正確な結果を提供するよう努めておりますが、私たちのツールは情報提供のみを目的としており、専門的な医療、財務、または法的なアドバイスに代わるものではありません。",
    },
    Contact: {
      title: "お問い合わせ",
      description:
        "ご質問やご提案、バグの報告がありますか？ぜひお知らせください。",
      formName: "お名前",
      formEmail: "メールアドレス",
      formSubject: "件名",
      formMessage: "メッセージ",
      formSubmit: "メッセージを送信",
      emailUs: "メールでお問い合わせ",
      emailAddress: "support@100tools.example",
      responseTime: "通常、24〜48時間以内に返信いたします。",
      successMessage:
        "メッセージは正常に送信されました！すぐにご連絡いたします。",
      errorMessage:
        "メッセージの送信中にエラーが発生しました。後でもう一度お試しください。",
    },
    Privacy: {
      title: "プライバシーポリシー",
      lastUpdated: "最終更新日：2026年9月29日",
      intro:
        "Aftara Toolsでは、お客様のプライバシーを非常に重視しています。このプライバシーポリシーでは、ウェブサイトをご利用になる際の情報収集、使用、保護の方法について説明します。",
      dataCollectionTitle: "収集する情報",
      dataCollectionText:
        "私たちのツールは、お客様のブラウザでローカルに実行されるように設計されています。計算機やツールに入力されたデータは、当社のサーバーに収集、保存、送信されることはありません。すべての計算はデバイス上で非公開に保たれます。",
      analyticsTitle: "アナリティクス",
      analyticsText:
        "ウェブサイトのトラフィックとツールの使用状況を把握するために、プライバシーを尊重する基本的な分析を利用しています。これには個人を特定できる情報や侵入的な追跡は含まれません。",
      thirdPartyTitle: "サードパーティサービス",
      thirdPartyText:
        "ホスティングやアナリティクスにサードパーティのサービスを使用する場合がありますが、個人情報や入力データを共有することは決してありません。",
      contactUs:
        "プライバシーポリシーに関するご質問がある場合は、お問い合わせください。",
    },
    Terms: {
      title: "利用規約",
      lastUpdated: "最終更新日：2026年9月29日",
      intro:
        "Aftara Toolsへのアクセスおよび使用により、以下の利用規約に同意し、これに拘束されることに同意したものとみなされます。",
      noWarrantyTitle: "保証の否認（現状有姿）",
      noWarrantyText:
        "本ウェブサイト上のすべてのツール、計算機、および情報は「現状有姿」で提供され、明示または黙示を問わず、いかなる表明または保証も行われません。生成された結果の正確性、信頼性、または完全性についてはいかなる保証も行いません。",
      liabilityTitle: "責任の制限",
      liabilityText:
        "いかなる場合も、Aftara Toolsは、当社のツールの使用に起因または関連して発生した、特別、直接的、間接的、結果的、または偶発的な損害、もしくはいかなる損害についても責任を負いません。これには、私たちの計算機に基づいて行われた財務上の損失または医学的な決定が含まれます。",
      acceptableUseTitle: "許容される使用",
      acceptableUseText:
        "お客様は、合法的な目的にのみ私たちのツールを使用することに同意します。Aftara Toolsに接続されているサービスやネットワークに対して、スクレイピング、DDoS攻撃、またはその他の妨害行為を試みてはなりません。",
      modificationsTitle: "変更",
      modificationsText:
        "当社は、これらの利用規約を予告なしにいつでも改訂する権利を留保します。本ウェブサイトを使用することにより、これらの利用規約のその時点での最新バージョンに拘束されることに同意したものとみなされます。",
    },
    Cookie: {
      title: "Cookieポリシー",
      lastUpdated: "最終更新日：2026年9月29日",
      intro:
        "このCookieポリシーは、Cookieとは何か、およびその使用方法について説明するものです。私たちが使用するCookieの種類、またはCookieを使用して収集する情報、およびその情報がどのように使用されるかを理解するために、このポリシーをお読みください。",
      whatAreCookiesTitle: "Cookieとは何ですか？",
      whatAreCookiesText:
        "Cookieは、アクセスしたウェブサイトによってコンピューターやモバイルデバイスに配置される小さなテキストファイルです。ウェブサイトを機能させるため、またはより効率的に機能させるため、またレポート情報を提供するために広く使用されています。",
      howWeUseCookiesTitle: "Cookieの使用方法",
      howWeUseCookiesText:
        "私たちは、不可欠な機能および基本的なユーザーの好みにのみCookieを使用します。たとえば、「ダークモード」または「ライトモード」のどちらを好むか、または希望する言語を記憶するためにローカルストレージやCookieを使用する場合があります。",
      noTrackingTitle: "侵入的な追跡は行いません",
      noTrackingText:
        "私たちは、広告Cookie、サードパーティのトラッカー、またはクロスサイトのトラッキング技術を使用しません。ツールの使用は非公開に保たれます。",
      managingCookiesTitle: "Cookieの管理",
      managingCookiesText:
        "必要に応じてCookieを制御および/または削除できます。コンピューターにすでに存在しているすべてのCookieを削除でき、ほとんどのブラウザーでCookieの配置をブロックするように設定できます。",
    },
  },
};

for (const lang of langs) {
  const filePath = path.join(process.cwd(), "messages", `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    data.About = translations[lang].About;
    data.Contact = translations[lang].Contact;
    data.Privacy = translations[lang].Privacy;
    data.Terms = translations[lang].Terms;
    data.Cookie = translations[lang].Cookie;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    console.log(`Updated ${lang}.json`);
  }
}
