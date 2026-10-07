const fs = require("fs");
const path = require("path");

const translations = {
  ar: {
    About: {
      title: "من نحن والمنهجية",
      description:
        "مرحبًا بك في Aftara Tools، موردك المجاني للحاسبات الممتازة والأدوات المساعدة للمطورين عبر الإنترنت.",
      missionTitle: "مهمتنا",
      missionText:
        "مهمتنا هي توفير أدوات سريعة وموثوقة وتحترم الخصوصية للمهام اليومية. سواء كنت مطورًا يحتاج إلى تشفير JWT، أو صاحب منزل يحسب حجم النشارة، أو تحاول فقط معرفة نسبة الخصم، فقد قمنا ببناء أداة قوية من أجلك.",
      methodologyTitle: "منهجيتنا",
      methodologyIntro:
        "نحن نؤمن بالشفافية والدقة، لا سيما للأدوات المالية وتلك المتعلقة بالصحة (مواضيع أموالك أو حياتك). إليك كيف نضمن أن أدواتنا موثوقة:",
      standardizedFormulasTitle: "صيغ موحدة",
      standardizedFormulasText:
        "تستخدم جميع الحاسبات المالية (مثل العائد على الاستثمار والرهون العقارية والقروض) صيغ الإطفاء والفائدة المركبة المتوافقة مع معايير الصناعة.",
      medicalGuidelinesTitle: "الإرشادات الطبية",
      medicalGuidelinesText:
        "تستخدم حاسبات الصحة (مثل مؤشر كتلة الجسم ومعدل الأيض الأساسي) معادلات معترف بها عالميًا، مثل معادلة ميفلين سانت جيور لمعدل الأيض، وتصنيفات منظمة الصحة العالمية القياسية لمؤشر كتلة الجسم.",
      privacyFirstTitle: "الخصوصية أولاً",
      privacyFirstText:
        "بياناتك لا تغادر متصفحك أبدًا. جميع العمليات الحسابية والتشفير والتحويلات تحدث محليًا على جهازك عبر JavaScript. نحن لا نقوم بتخزين أو نقل مدخلاتك.",
      continuousTestingTitle: "اختبار مستمر",
      continuousTestingText:
        "يتم اختبار مجموعة أدواتنا بصرامة لضمان التعامل مع الحالات الاستثنائية (مثل القيم الصفرية أو المدخلات غير الصالحة) بسلاسة دون التسبب في أعطال.",
      editorialGuidelinesTitle: "إرشادات التحرير",
      editorialGuidelinesText:
        "تم تصميم كل صفحة أداة لتكون بديهية وواضحة بذاتها. نحن نعطي الأولوية لسهولة الاستخدام والتعليمات الواضحة على الواجهات المزدحمة. إذا كانت هناك قيود لأي معادلة (مثل كون طريقة البحرية لنسبة الدهون في الجسم مجرد تقدير)، فإننا نوضح ذلك بوضوح على صفحة الأداة.",
      disclaimer:
        "إخلاء المسؤولية: الأدوات والحاسبات المتوفرة على هذا الموقع هي للأغراض الإعلامية والتعليمية فقط. وهي لا تشكل نصيحة مالية أو طبية مهنية. استشر دائمًا محترفًا مؤهلاً قبل اتخاذ قرارات صحية أو مالية مهمة.",
      teamTitle: "من نحن",
      teamText:
        "يتم تشغيل هذا الموقع بواسطة [TODO: Your Company Name / Your Name]. نحن مكرسون لتقديم أدوات عالية الجودة للجمهور. إذا كنت بحاجة للوصول إلينا، يرجى مراجعة صفحة الاتصال الخاصة بنا.",
    },
    Contact: {
      title: "اتصل بنا",
      description:
        "نود أن نسمع منك. سواء كان لديك سؤال، أو طلب ميزة، أو وجدت خطأ، أخبرنا بذلك!",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formSubject: "الموضوع",
      formMessage: "الرسالة",
      formSubmit: "إرسال الرسالة",
      emailUs: "راسلنا عبر البريد الإلكتروني",
      emailAddress: "[TODO: Your Email Address]",
      responseTime: "نرد عادة في غضون 24-48 ساعة.",
      successMessage: "شكراً لك! لقد تم إرسال رسالتك.",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقًا.",
      formNamePlaceholder: "محمد أحمد",
      formEmailPlaceholder: "mohammed@example.com",
      formSubjectPlaceholder: "كيف يمكننا المساعدة؟",
      formMessagePlaceholder: "اكتب رسالتك هنا...",
    },
    Privacy: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: 29 سبتمبر 2026",
      intro:
        "في Aftara Tools، خصوصيتك هي أولويتنا القصوى. توضح سياسة الخصوصية هذه كيف نتعامل (وكيف لا نتعامل صراحةً) مع بياناتك الشخصية.",
      dataCollectionTitle: "لا يوجد جمع للبيانات",
      dataCollectionText:
        "نحن لا نجمع البيانات الشخصية دون داع. تتم العمليات الحسابية محليًا. ومع ذلك، عند استخدام موقعنا، قد نستخدم نحن وشركاؤنا من الجهات الخارجية بيانات الاتصال الأساسية وملفات تعريف الارتباط كما هو موضح أدناه.",
      analyticsTitle: "التحليلات والتتبع",
      analyticsText:
        "قد نستخدم تحليلات مجهولة الهوية وصديقة للخصوصية لفهم أنماط حركة المرور العامة (مثل الأدوات الأكثر شيوعًا). لا يمكن تتبع هذه البيانات للوصول إلى مستخدمين أفراد ولا تستخدم ملفات تعريف ارتباط التتبع المتطفلة.",
      thirdPartyTitle: "البائعون الخارجيون و Google AdSense",
      thirdPartyText:
        "يستخدم البائعون الخارجيون، بما في ذلك Google، ملفات تعريف الارتباط لعرض الإعلانات بناءً على زياراتك السابقة لهذا الموقع أو مواقع الويب الأخرى. يتيح استخدام Google لملفات تعريف الارتباط الإعلانية لها ولشركائها عرض إعلانات لك بناءً على زيارتك لمواقعنا و/أو مواقع أخرى على الإنترنت.",
      contactUs:
        "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا.",
      optOutTitle: "إلغاء الاشتراك في الإعلانات المخصصة",
      optOutText:
        "يمكنك إلغاء الاشتراك في الإعلانات المخصصة عن طريق زيارة إعدادات إعلانات Google (https://myadcenter.google.com/). كبديل، يمكنك إلغاء الاشتراك في استخدام بعض البائعين الخارجيين لملفات تعريف الارتباط للإعلانات المخصصة عن طريق زيارة www.aboutads.info.",
      userRightsTitle: "حقوق الخصوصية الخاصة بك (GDPR و CCPA)",
      userRightsText:
        "اعتمادًا على موقعك، قد تكون لك حقوق بموجب اللائحة العامة لحماية البيانات (GDPR) أو قانون خصوصية المستهلك في كاليفورنيا (CCPA/CPRA) أو قوانين مشابهة للوصول إلى بياناتك أو حذفها أو تقييد معالجتها. لديك أيضًا الحق في إلغاء الاشتراك في بيع أو مشاركة معلوماتك الشخصية. استخدم رابط 'إعدادات الخصوصية' في التذييل لإدارة موافقتك.",
      childrenTitle: "خصوصية الأطفال",
      childrenText:
        "خدماتنا غير موجهة للأطفال دون سن 13 عامًا، ولا نقوم عن قصد بجمع معلومات شخصية من الأطفال.",
      dataRetentionTitle: "الاحتفاظ بالبيانات",
      dataRetentionText:
        "يتم الاحتفاظ بأي سجلات اتصال مؤقتة يحتفظ بها مزودو الاستضافة لدينا فقط طالما كانت ضرورية لأغراض أمنية وتشغيلية.",
    },
    Terms: {
      title: "شروط الخدمة",
      lastUpdated: "آخر تحديث: 29 سبتمبر 2026",
      intro:
        "من خلال الوصول إلى Aftara Tools واستخدامها، فإنك توافق على الامتثال والالتزام بشروط وأحكام الاستخدام التالية.",
      noWarrantyTitle: "لا توجد ضمانات (كما هي)",
      noWarrantyText:
        'يتم توفير جميع الأدوات والحاسبات والمعلومات الموجودة على هذا الموقع "كما هي" دون أي إقرارات أو ضمانات، صريحة أو ضمنية. نحن لا نقدم أي ضمانات فيما يتعلق بدقة أو موثوقية أو اكتمال النتائج التي تم إنشاؤها.',
      liabilityTitle: "تحديد المسؤولية",
      liabilityText:
        "لا تتحمل Aftara Tools بأي حال من الأحوال المسؤولية عن أي أضرار خاصة أو مباشرة أو غير مباشرة أو تبعية أو عرضية أو أي أضرار من أي نوع تنشأ عن أو فيما يتعلق باستخدام أدواتنا. ويشمل ذلك الخسائر المالية أو القرارات الطبية المتخذة بناءً على حاسباتنا.",
      acceptableUseTitle: "الاستخدام المقبول",
      acceptableUseText:
        "أنت توافق على استخدام أدواتنا للأغراض القانونية فقط. يجب عليك عدم محاولة كشط (scrape) أو شن هجمات حجب الخدمة (DDoS) أو تعطيل الخدمة أو الشبكات المتصلة بـ Aftara Tools بأي شكل آخر.",
      modificationsTitle: "التعديلات",
      modificationsText:
        "نحتفظ بالحق في مراجعة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على الالتزام بالإصدار الحالي من هذه الشروط.",
    },
    Cookie: {
      title: "سياسة ملفات تعريف الارتباط",
      lastUpdated: "آخر تحديث: 29 سبتمبر 2026",
      intro:
        "تشرح سياسة ملفات تعريف الارتباط هذه ماهية ملفات تعريف الارتباط وكيف نستخدمها. يجب عليك قراءة هذه السياسة حتى تتمكن من فهم نوع ملفات تعريف الارتباط التي نستخدمها، أو المعلومات التي نجمعها باستخدام ملفات تعريف الارتباط وكيفية استخدام هذه المعلومات.",
      whatAreCookiesTitle: "ما هي ملفات تعريف الارتباط؟",
      whatAreCookiesText:
        "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم وضعها على جهاز الكمبيوتر أو الجهاز المحمول الخاص بك بواسطة مواقع الويب التي تزورها. يتم استخدامها على نطاق واسع لجعل مواقع الويب تعمل، أو تعمل بشكل أكثر كفاءة، وكذلك لتوفير معلومات إعداد التقارير.",
      howWeUseCookiesTitle: "كيف نستخدم ملفات تعريف الارتباط",
      howWeUseCookiesText:
        "نحن نستخدم ملفات تعريف الارتباط للوظائف الأساسية، وحفظ تفضيلاتك، وتقديم إعلانات ذات صلة عبر البائعين الخارجيين مثل Google.",
      noTrackingTitle: "ملفات تعريف ارتباط الإعلانات التابعة لجهات خارجية",
      noTrackingText:
        "نحن نستخدم Google AdSense لتمويل أدواتنا المجانية. يستخدم هؤلاء البائعون الخارجيون ملفات تعريف الارتباط لتقديم إعلانات مخصصة. يمكنك إدارة تفضيلاتك في أي وقت باستخدام رابط إعدادات الخصوصية في التذييل الخاص بنا.",
      managingCookiesTitle: "إدارة ملفات تعريف الارتباط",
      managingCookiesText:
        "يمكنك التحكم في ملفات تعريف الارتباط و/أو حذفها كما تشاء. يمكنك حذف جميع ملفات تعريف الارتباط الموجودة بالفعل على جهاز الكمبيوتر الخاص بك ويمكنك تعيين معظم المتصفحات لمنع وضعها.",
    },
    Disclaimer: {
      title: "إخلاء المسؤولية",
      lastUpdated: "آخر تحديث: 29 سبتمبر 2026",
      intro:
        "المعلومات والأدوات المقدمة على Aftara Tools هي للأغراض الإعلامية والتعليمية العامة فقط.",
      accuracyTitle: "الدقة العامة",
      accuracyText:
        "على الرغم من أننا نسعى جاهدين للحفاظ على تحديث وصحة الحاسبات والمحولات الخاصة بنا، إلا أننا لا نقدم أي إقرارات أو ضمانات من أي نوع، صريحة أو ضمنية، حول اكتمال أو دقة أو موثوقية أو ملاءمة الأدوات.",
      medicalTitle: "إخلاء المسؤولية الطبية والصحية",
      medicalText:
        "توفر أدوات مثل حاسبات مؤشر كتلة الجسم والسعرات الحرارية والمغذيات الكبيرة ونسبة الدهون في الجسم وتناول الماء تقديرات بناءً على الصيغ القياسية. وهي ليست بديلاً عن المشورة الطبية المهنية أو التشخيص أو العلاج. اطلب دائمًا مشورة طبيبك أو غيره من مقدمي الرعاية الصحية المؤهلين.",
      financialTitle: "إخلاء المسؤولية المالية",
      financialText:
        "الحاسبات المتعلقة بالقروض والرهون العقارية والأقساط الشهرية المتساوية (EMI) والاستثمارات والضرائب والراتب هي لأغراض التوضيح فقط. وهي لا تشكل نصيحة مالية. ستختلف الأسعار والضرائب والشروط الفعلية بناءً على مؤسستك المحددة والقوانين الإقليمية.",
      legalTitle: "الاختلافات القانونية والإقليمية",
      legalText:
        "قد لا تعكس الصيغ القواعد القانونية أو الضريبية الدقيقة في ولايتك القضائية المحددة. استشر دائمًا محترفًا معتمدًا في منطقتك قبل اتخاذ أي قرارات مالية أو قانونية ملزمة.",
    },
  },
  bn: {
    About: {
      title: "আমাদের সম্পর্কে এবং পদ্ধতি",
      description:
        "Aftara Tools-এ স্বাগতম, প্রিমিয়াম অনলাইন ক্যালকুলেটর এবং ডেভেলপার ইউটিলিটিগুলির জন্য আপনার বিনামূল্যের সংস্থান৷",
      missionTitle: "আমাদের লক্ষ্য",
      missionText:
        "আমাদের লক্ষ্য হল দৈনন্দিন কাজের জন্য দ্রুত, নির্ভরযোগ্য এবং গোপনীয়তা-সম্মানজনক সরঞ্জাম সরবরাহ করা। আপনার JWT এনকোড করার প্রয়োজন হোক, মাল্চ ভলিউম গণনা করার প্রয়োজন হোক, বা শুধু একটি ছাড় বের করার চেষ্টা করুন, আমরা আপনার জন্য একটি শক্তিশালী টুল তৈরি করেছি।",
      methodologyTitle: "আমাদের পদ্ধতি",
      methodologyIntro:
        "আমরা স্বচ্ছতা এবং নির্ভুলতায় বিশ্বাস করি, বিশেষ করে আর্থিক এবং স্বাস্থ্য-সম্পর্কিত সরঞ্জামগুলির জন্য। আমরা কীভাবে নিশ্চিত করি যে আমাদের সরঞ্জামগুলি নির্ভরযোগ্য তা এখানে:",
      standardizedFormulasTitle: "প্রমাণিত সূত্র",
      standardizedFormulasText:
        "সমস্ত আর্থিক ক্যালকুলেটর শিল্প-মান অ্যামর্টাইজেশন এবং চক্রবৃদ্ধি সুদের সূত্র ব্যবহার করে।",
      medicalGuidelinesTitle: "চিকিৎসা নির্দেশিকা",
      medicalGuidelinesText:
        "স্বাস্থ্য ক্যালকুলেটরগুলি বিশ্বব্যাপী স্বীকৃত সমীকরণ ব্যবহার করে, যেমন বিপাকীয় হারের জন্য মিফলিন-সেন্ট জিওর সমীকরণ, এবং BMI-এর জন্য মানক WHO শ্রেণীবিভাগ।",
      privacyFirstTitle: "গোপনীয়তা প্রথম",
      privacyFirstText:
        "আপনার ডেটা কখনই আপনার ব্রাউজার ছেড়ে যায় না। সমস্ত গণনা, হ্যাশিং এবং রূপান্তরগুলি জাভাস্ক্রিপ্টের মাধ্যমে আপনার ডিভাইসে স্থানীয়ভাবে ঘটে। আমরা আপনার ইনপুট সংরক্ষণ বা প্রেরণ করি না।",
      continuousTestingTitle: "অবিরাম পরীক্ষা",
      continuousTestingText:
        "আমাদের টুলকিট কঠোরভাবে পরীক্ষা করা হয় যাতে এজ কেসগুলি (যেমন শূন্য মান বা অবৈধ ইনপুট) ক্র্যাশ না করে সুন্দরভাবে পরিচালনা করা হয় তা নিশ্চিত করতে।",
      editorialGuidelinesTitle: "সম্পাদকীয় নির্দেশিকা",
      editorialGuidelinesText:
        "প্রতিটি টুল পেজ স্ব-ব্যাখ্যামূলক হওয়ার জন্য ডিজাইন করা হয়েছে। আমরা বিশৃঙ্খল ইন্টারফেসের চেয়ে ব্যবহারযোগ্যতা এবং পরিষ্কার নির্দেশিকাকে অগ্রাধিকার দিই। যদি কোনো সমীকরণের সীমাবদ্ধতা থাকে, আমরা পরিষ্কারভাবে টুল পেজে এটি নোট করি।",
      disclaimer:
        "দাবিত্যাগ: এই ওয়েবসাইটের সরঞ্জাম এবং ক্যালকুলেটরগুলি শুধুমাত্র তথ্যগত এবং শিক্ষামূলক উদ্দেশ্যে। তারা পেশাদার আর্থিক বা চিকিৎসা পরামর্শ গঠন করে না। কোনো উল্লেখযোগ্য স্বাস্থ্য বা আর্থিক সিদ্ধান্ত নেওয়ার আগে সর্বদা একজন যোগ্য পেশাদারের সাথে পরামর্শ করুন।",
      teamTitle: "আমরা কারা",
      teamText:
        "এই সাইটটি [TODO: Your Company Name / Your Name] দ্বারা পরিচালিত হয়। আমরা জনসাধারণের কাছে উচ্চ মানের সরঞ্জাম সরবরাহ করতে নিবেদিত। আপনি আমাদের কাছে পৌঁছানোর প্রয়োজন হলে, আমাদের যোগাযোগ পৃষ্ঠা দেখুন।",
    },
    Contact: {
      title: "আমাদের সাথে যোগাযোগ করুন",
      description:
        "আমরা আপনার কাছ থেকে শুনতে চাই. আপনার কোন প্রশ্ন, বৈশিষ্ট্যের অনুরোধ, বা একটি বাগ পাওয়া গেলে, আমাদের জানান!",
      formName: "নাম",
      formEmail: "ইমেল",
      formSubject: "বিষয়",
      formMessage: "বার্তা",
      formSubmit: "বার্তা পাঠান",
      emailUs: "আমাদের ইমেইল করুন",
      emailAddress: "[TODO: Your Email Address]",
      responseTime: "আমরা সাধারণত 24-48 ঘন্টার মধ্যে প্রতিক্রিয়া জানাই।",
      successMessage: "ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।",
      errorMessage: "কিছু ভুল হয়েছে. পরে আবার চেষ্টা করুন.",
      formNamePlaceholder: "রহিম উদ্দিন",
      formEmailPlaceholder: "rahim@example.com",
      formSubjectPlaceholder: "আমরা কীভাবে সাহায্য করতে পারি?",
      formMessagePlaceholder: "এখানে আপনার বার্তা লিখুন...",
    },
    Privacy: {
      title: "গোপনীয়তা নীতি",
      lastUpdated: "সর্বশেষ আপডেট: 29 সেপ্টেম্বর, 2026",
      intro:
        "Aftara Tools-এ, আপনার গোপনীয়তা আমাদের সর্বোচ্চ অগ্রাধিকার। এই গোপনীয়তা নীতিটি রূপরেখা দেয় কিভাবে আমরা আপনার ব্যক্তিগত ডেটা পরিচালনা করি (এবং স্পষ্টভাবে পরিচালনা করি না)।",
      dataCollectionTitle: "কোন ডেটা সংগ্রহ নয়",
      dataCollectionText:
        "আমরা অকারণে ব্যক্তিগত ডেটা সংগ্রহ করি না। কম্পিউটেশন স্থানীয়ভাবে ঘটে। যাইহোক, আমাদের সাইট ব্যবহার করার সময়, মৌলিক সংযোগ ডেটা এবং কুকিগুলি আমাদের এবং আমাদের তৃতীয় পক্ষের অংশীদারদের দ্বারা নীচে বর্ণিত হিসাবে ব্যবহার করা হতে পারে।",
      analyticsTitle: "অ্যানালিটিক্স এবং ট্র্যাকিং",
      analyticsText:
        "সাধারণ ট্র্যাফিক প্যাটার্নগুলি বুঝতে আমরা গোপনীয়তা-বান্ধব, বেনামী বিশ্লেষণ ব্যবহার করতে পারি। এই ডেটা পৃথক ব্যবহারকারীদের কাছে ফিরে পাওয়া যায় না এবং অনুপ্রবেশকারী ট্র্যাকিং কুকি ব্যবহার করে না।",
      thirdPartyTitle: "তৃতীয়-পক্ষ বিক্রেতা এবং Google AdSense",
      thirdPartyText:
        "Google সহ তৃতীয়-পক্ষ বিক্রেতারা, এই ওয়েবসাইট বা অন্যান্য ওয়েবসাইটে আপনার পূর্বের পরিদর্শনের উপর ভিত্তি করে বিজ্ঞাপন পরিবেশন করতে কুকি ব্যবহার করে। Google-এর বিজ্ঞাপনের কুকির ব্যবহার তাকে এবং তার অংশীদারদের আমাদের সাইট এবং/অথবা ইন্টারনেটের অন্যান্য সাইটগুলিতে আপনার পরিদর্শনের উপর ভিত্তি করে বিজ্ঞাপন পরিবেশন করতে সক্ষম করে।",
      contactUs:
        "এই গোপনীয়তা নীতি সম্পর্কে আপনার কোন প্রশ্ন থাকলে, আমাদের সাথে যোগাযোগ করুন।",
      optOutTitle: "ব্যক্তিগতকৃত বিজ্ঞাপনগুলি অপ্ট আউট করা",
      optOutText:
        "আপনি গুগল অ্যাডস সেটিংস (https://myadcenter.google.com/) পরিদর্শন করে ব্যক্তিগতকৃত বিজ্ঞাপন অপ্ট আউট করতে পারেন। বিকল্পভাবে, আপনি www.aboutads.info-এ গিয়ে ব্যক্তিগতকৃত বিজ্ঞাপনের জন্য কুকিজের কিছু তৃতীয় পক্ষের বিক্রেতাদের ব্যবহার থেকে অপ্ট আউট করতে পারেন।",
      userRightsTitle: "আপনার গোপনীয়তার অধিকার (GDPR এবং CCPA)",
      userRightsText:
        "আপনার অবস্থানের উপর নির্ভর করে, আপনার ডেটা অ্যাক্সেস করতে, মুছে ফেলতে বা প্রক্রিয়াকরণ সীমাবদ্ধ করতে আপনার GDPR, CCPA/CPRA, বা অনুরূপ আইনের অধীনে অধিকার থাকতে পারে। আপনার ব্যক্তিগত তথ্য বিক্রি বা শেয়ার করা থেকে অপ্ট আউট করার অধিকারও আপনার আছে। আপনার সম্মতি পরিচালনা করতে ফুটারে 'গোপনীয়তা সেটিংস' লিঙ্কটি ব্যবহার করুন।",
      childrenTitle: "শিশুদের গোপনীয়তা",
      childrenText:
        "আমাদের পরিষেবাগুলি 13 বছরের কম বয়সী শিশুদের নির্দেশিত নয় এবং আমরা জেনেশুনে শিশুদের থেকে ব্যক্তিগত তথ্য সংগ্রহ করি না।",
      dataRetentionTitle: "ডেটা রিটেনশন",
      dataRetentionText:
        "আমাদের হোস্টিং প্রদানকারীদের দ্বারা রাখা যে কোনো অস্থায়ী সংযোগ লগ শুধুমাত্র নিরাপত্তা এবং অপারেশনাল উদ্দেশ্যে যতদিন প্রয়োজন ততদিন বজায় রাখা হয়।",
    },
    Terms: {
      title: "পরিষেবার শর্তাবলী",
      lastUpdated: "সর্বশেষ আপডেট: 29 সেপ্টেম্বর, 2026",
      intro:
        "Aftara Tools অ্যাক্সেস এবং ব্যবহার করে, আপনি নিম্নলিখিত শর্তাবলী মেনে চলতে সম্মত হন।",
      noWarrantyTitle: "কোন ওয়ারেন্টি নেই (যেমন আছে)",
      noWarrantyText:
        'এই ওয়েবসাইটের সমস্ত সরঞ্জাম, ক্যালকুলেটর এবং তথ্য কোন উপস্থাপনা বা ওয়ারেন্টি ছাড়াই, প্রকাশ বা উহ্য ছাড়াই "যেমন আছে" প্রদান করা হয়। আমরা তৈরি করা ফলাফলের সঠিকতা, নির্ভরযোগ্যতা বা সম্পূর্ণতা সম্পর্কে কোনো গ্যারান্টি দিই না।',
      liabilityTitle: "দায়বদ্ধতার সীমাবদ্ধতা",
      liabilityText:
        "কোনো ক্ষেত্রেই Aftara Tools কোনো বিশেষ, প্রত্যক্ষ, পরোক্ষ, আনুষঙ্গিক, বা আনুষঙ্গিক ক্ষতির জন্য বা আমাদের টুলের ব্যবহারের ফলে বা তার সাথে সম্পর্কিত কোনো ক্ষতির জন্য দায়ী হবে না। এর মধ্যে আর্থিক ক্ষতি বা আমাদের ক্যালকুলেটরের ভিত্তিতে নেওয়া চিকিৎসা সংক্রান্ত সিদ্ধান্ত অন্তর্ভুক্ত।",
      acceptableUseTitle: "গ্রহণযোগ্য ব্যবহার",
      acceptableUseText:
        "আপনি শুধুমাত্র আইনগত উদ্দেশ্যে আমাদের সরঞ্জাম ব্যবহার করতে সম্মত হন. আপনাকে অবশ্যই Aftara Tools-এর সাথে সংযুক্ত পরিষেবা বা নেটওয়ার্কগুলিকে স্ক্র্যাপ, ডিডিওএস, বা অন্যথায় ব্যাহত করার চেষ্টা করতে হবে না।",
      modificationsTitle: "পরিবর্তন",
      modificationsText:
        "আমরা নোটিশ ছাড়াই যে কোনো সময় পরিষেবার এই শর্তাবলী সংশোধন করার অধিকার সংরক্ষণ করি। এই ওয়েবসাইটটি ব্যবহার করে, আপনি এই শর্তাবলীর তৎকালীন বর্তমান সংস্করণ দ্বারা আবদ্ধ হতে সম্মত হচ্ছেন।",
    },
    Cookie: {
      title: "কুকি নীতি",
      lastUpdated: "সর্বশেষ আপডেট: 29 সেপ্টেম্বর, 2026",
      intro:
        "এই কুকি নীতি ব্যাখ্যা করে কুকি কী এবং আমরা কীভাবে সেগুলি ব্যবহার করি। আপনার এই নীতিটি পড়া উচিত যাতে আপনি বুঝতে পারেন আমরা কী ধরণের কুকি ব্যবহার করি, বা কুকি ব্যবহার করে আমরা কী তথ্য সংগ্রহ করি এবং সেই তথ্যগুলি কীভাবে ব্যবহার করা হয়।",
      whatAreCookiesTitle: "কুকিজ কি?",
      whatAreCookiesText:
        "কুকি হল ছোট টেক্সট ফাইল যা আপনার পরিদর্শন করা ওয়েবসাইটগুলি দ্বারা আপনার কম্পিউটার বা মোবাইল ডিভাইসে রাখা হয়। তারা ব্যাপকভাবে ওয়েবসাইটগুলি কাজ করতে বা আরও দক্ষতার সাথে কাজ করার পাশাপাশি রিপোর্টিং তথ্য প্রদান করতে ব্যবহৃত হয়।",
      howWeUseCookiesTitle: "আমরা কীভাবে কুকি ব্যবহার করি",
      howWeUseCookiesText:
        "আমরা প্রয়োজনীয় কার্যকারিতার জন্য কুকি ব্যবহার করি, আপনার পছন্দ সংরক্ষণ করে, এবং Google-এর মতো তৃতীয় পক্ষের বিক্রেতাদের মাধ্যমে প্রাসঙ্গিক বিজ্ঞাপন পরিবেশন করতে।",
      noTrackingTitle: "তৃতীয় পক্ষের বিজ্ঞাপন কুকি",
      noTrackingText:
        "আমাদের বিনামূল্যে টুলগুলিকে অর্থায়নের জন্য আমরা Google AdSense ব্যবহার করি। এই তৃতীয় পক্ষের বিক্রেতারা ব্যক্তিগতকৃত বিজ্ঞাপন পরিবেশন করতে কুকি ব্যবহার করে। আপনি আমাদের ফুটারের গোপনীয়তা সেটিংস লিঙ্ক ব্যবহার করে যেকোনো সময় আপনার পছন্দ পরিচালনা করতে পারেন।",
      managingCookiesTitle: "কুকিজ পরিচালনা করা",
      managingCookiesText:
        "আপনি আপনার ইচ্ছামতো কুকিজ নিয়ন্ত্রণ এবং/অথবা মুছে ফেলতে পারেন। আপনি ইতিমধ্যে আপনার কম্পিউটারে থাকা সমস্ত কুকি মুছে ফেলতে পারেন এবং সেগুলিকে স্থাপন করা থেকে বিরত রাখতে আপনি বেশিরভাগ ব্রাউজার সেট করতে পারেন।",
    },
    Disclaimer: {
      title: "দাবিত্যাগ",
      lastUpdated: "সর্বশেষ আপডেট: 29 সেপ্টেম্বর, 2026",
      intro:
        "Aftara Tools-এ প্রদত্ত তথ্য এবং সরঞ্জামগুলি শুধুমাত্র সাধারণ তথ্যগত এবং শিক্ষামূলক উদ্দেশ্যে।",
      accuracyTitle: "সাধারণ নির্ভুলতা",
      accuracyText:
        "যদিও আমরা আমাদের ক্যালকুলেটর এবং কনভার্টারগুলিকে আপ টু ডেট এবং সঠিক রাখার চেষ্টা করি, আমরা সরঞ্জামগুলির সম্পূর্ণতা, নির্ভুলতা, নির্ভরযোগ্যতা বা উপযুক্ততা সম্পর্কে কোন উপস্থাপনা বা ওয়ারেন্টি দিই না।",
      medicalTitle: "চিকিৎসা ও স্বাস্থ্য দাবিত্যাগ",
      medicalText:
        "BMI, ক্যালোরি, ম্যাক্রো, বডি ফ্যাট এবং জল গ্রহণের ক্যালকুলেটরগুলির মতো টুলগুলি স্ট্যান্ডার্ড সূত্রের উপর ভিত্তি করে অনুমান প্রদান করে। এগুলি পেশাদার চিকিৎসা পরামর্শ, রোগ নির্ণয় বা চিকিত্সার বিকল্প নয়। সর্বদা আপনার চিকিত্সক বা অন্যান্য যোগ্য স্বাস্থ্য প্রদানকারীর পরামর্শ নিন।",
      financialTitle: "আর্থিক দাবিত্যাগ",
      financialText:
        "ঋণ, বন্ধকী, ইএমআই, বিনিয়োগ, কর, এবং বেতন সম্পর্কিত ক্যালকুলেটরগুলি শুধুমাত্র উদাহরণের জন্য। তারা আর্থিক পরামর্শ গঠন করে না। আপনার নির্দিষ্ট প্রতিষ্ঠান এবং আঞ্চলিক আইনের উপর ভিত্তি করে প্রকৃত হার, কর এবং শর্তাদি পরিবর্তিত হবে।",
      legalTitle: "আইনি ও আঞ্চলিক বৈচিত্র্য",
      legalText:
        "সূত্রগুলি আপনার নির্দিষ্ট এখতিয়ারে সুনির্দিষ্ট আইনি বা করের নিয়ম প্রতিফলিত নাও করতে পারে। কোনো বাধ্যতামূলক আর্থিক বা আইনি সিদ্ধান্ত নেওয়ার আগে সর্বদা আপনার এলাকার একজন প্রত্যয়িত পেশাদারের সাথে পরামর্শ করুন।",
    },
  },
  de: {
    About: {
      title: "Über uns & Methodik",
      description:
        "Willkommen bei Aftara Tools, Ihrer kostenlosen Ressource für Premium-Online-Rechner und Entwickler-Dienstprogramme.",
      missionTitle: "Unsere Mission",
      missionText:
        "Unsere Mission ist es, schnelle, zuverlässige und datenschutzfreundliche Tools für alltägliche Aufgaben bereitzustellen. Ob Sie ein Entwickler sind, der ein JWT codieren muss, ein Hausbesitzer, der das Mulchvolumen berechnet, oder einfach nur einen Rabatt ermitteln möchten – wir haben ein robustes Tool für Sie entwickelt.",
      methodologyTitle: "Unsere Methodik",
      methodologyIntro:
        "Wir glauben an Transparenz und Genauigkeit, insbesondere bei finanziellen und gesundheitsbezogenen Tools (Your Money or Your Life-Themen). Hier erfahren Sie, wie wir sicherstellen, dass unsere Tools zuverlässig sind:",
      standardizedFormulasTitle: "Standardisierte Formeln",
      standardizedFormulasText:
        "Alle Finanzrechner (wie ROI, Hypotheken und Kredite) verwenden branchenübliche Formeln für Amortisation und Zinseszins.",
      medicalGuidelinesTitle: "Medizinische Richtlinien",
      medicalGuidelinesText:
        "Gesundheitsrechner (wie BMI und BMR) verwenden weltweit anerkannte Gleichungen, wie die Mifflin-St Jeor-Gleichung für den Grundumsatz und die Standard-WHO-Klassifizierungen für den BMI.",
      privacyFirstTitle: "Datenschutz zuerst",
      privacyFirstText:
        "Ihre Daten verlassen niemals Ihren Browser. Alle Berechnungen, Hashing und Konvertierungen erfolgen lokal auf Ihrem Gerät über JavaScript. Wir speichern oder übertragen Ihre Eingaben nicht.",
      continuousTestingTitle: "Kontinuierliches Testen",
      continuousTestingText:
        "Unser Toolkit wird streng getestet, um sicherzustellen, dass Randfälle (wie Nullwerte oder ungültige Eingaben) elegant ohne Absturz verarbeitet werden.",
      editorialGuidelinesTitle: "Redaktionelle Richtlinien",
      editorialGuidelinesText:
        "Jede Tool-Seite ist so gestaltet, dass sie selbsterklärend ist. Wir priorisieren Benutzerfreundlichkeit und klare Anweisungen über überladene Oberflächen. Wenn eine Gleichung Einschränkungen aufweist (z. B. dass die Körperfettmethode der Navy eine Schätzung ist), weisen wir auf der Tool-Seite deutlich darauf hin.",
      disclaimer:
        "Haftungsausschluss: Die Tools und Rechner auf dieser Website dienen nur zu Informations- und Bildungszwecken. Sie stellen keine professionelle finanzielle oder medizinische Beratung dar. Konsultieren Sie immer einen qualifizierten Fachmann, bevor Sie wichtige gesundheitliche oder finanzielle Entscheidungen treffen.",
      teamTitle: "Wer wir sind",
      teamText:
        "Diese Seite wird von [TODO: Your Company Name / Your Name] betrieben. Wir haben uns der Bereitstellung hochwertiger Tools für die Öffentlichkeit verschrieben. Wenn Sie uns erreichen müssen, besuchen Sie bitte unsere Kontaktseite.",
    },
    Contact: {
      title: "Kontaktiere uns",
      description:
        "Wir würden uns freuen, von Ihnen zu hören. Egal, ob Sie eine Frage haben, eine Funktion anfordern oder einen Fehler gefunden haben, lassen Sie es uns wissen!",
      formName: "Name",
      formEmail: "E-Mail",
      formSubject: "Betreff",
      formMessage: "Nachricht",
      formSubmit: "Nachricht Senden",
      emailUs: "Senden Sie uns eine E-Mail",
      emailAddress: "[TODO: Your Email Address]",
      responseTime: "Wir antworten in der Regel innerhalb von 24-48 Stunden.",
      successMessage: "Danke schön! Deine Nachricht wurde gesendet.",
      errorMessage:
        "Etwas ist schief gelaufen. Bitte versuchen Sie es später noch einmal.",
      formNamePlaceholder: "Max Mustermann",
      formEmailPlaceholder: "max@example.com",
      formSubjectPlaceholder: "Wie können wir helfen?",
      formMessagePlaceholder: "Schreibe deine Nachricht hier...",
    },
    Privacy: {
      title: "Datenschutzrichtlinie",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      intro:
        "Bei Aftara Tools hat Ihre Privatsphäre oberste Priorität. Diese Datenschutzrichtlinie beschreibt, wie wir mit Ihren personenbezogenen Daten umgehen (und wie ausdrücklich NICHT).",
      dataCollectionTitle: "Keine Datenerfassung",
      dataCollectionText:
        "Wir sammeln personenbezogene Daten nicht unnötig. Berechnungen finden lokal statt. Wenn Sie unsere Website nutzen, können grundlegende Verbindungsdaten und Cookies jedoch von uns und unseren Drittpartnern wie unten beschrieben verwendet werden.",
      analyticsTitle: "Analytik & Tracking",
      analyticsText:
        "Wir können datenschutzfreundliche, anonymisierte Analysen verwenden, um allgemeine Verkehrsmuster zu verstehen (z. B. welche Tools am beliebtesten sind). Diese Daten können nicht auf einzelne Benutzer zurückverfolgt werden und verwenden keine aufdringlichen Tracking-Cookies.",
      thirdPartyTitle: "Drittanbieter & Google AdSense",
      thirdPartyText:
        "Drittanbieter, einschließlich Google, verwenden Cookies, um Anzeigen basierend auf Ihren vorherigen Besuchen dieser oder anderer Websites zu schalten. Die Verwendung von Werbe-Cookies durch Google ermöglicht es Google und seinen Partnern, Ihnen Anzeigen basierend auf Ihrem Besuch unserer Websites und/oder anderer Websites im Internet zu schalten.",
      contactUs:
        "Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte.",
      optOutTitle: "Deaktivierung personalisierter Anzeigen",
      optOutText:
        "Sie können personalisierte Werbung deaktivieren, indem Sie die Google-Anzeigeneinstellungen (https://myadcenter.google.com/) aufrufen. Alternativ können Sie die Verwendung von Cookies für personalisierte Werbung durch einige Drittanbieter deaktivieren, indem Sie www.aboutads.info besuchen.",
      userRightsTitle: "Ihre Datenschutzrechte (DSGVO & CCPA)",
      userRightsText:
        "Abhängig von Ihrem Standort haben Sie möglicherweise gemäß der DSGVO, dem CCPA/CPRA oder ähnlichen Gesetzen das Recht, auf Ihre Daten zuzugreifen, sie zu löschen oder deren Verarbeitung einzuschränken. Sie haben auch das Recht, dem Verkauf oder der Weitergabe Ihrer persönlichen Daten zu widersprechen. Verwenden Sie den Link 'Datenschutzeinstellungen' in der Fußzeile, um Ihre Zustimmung zu verwalten.",
      childrenTitle: "Privatsphäre von Kindern",
      childrenText:
        "Unsere Dienste richten sich nicht an Kinder unter 13 Jahren, und wir sammeln nicht wissentlich personenbezogene Daten von Kindern.",
      dataRetentionTitle: "Datenaufbewahrung",
      dataRetentionText:
        "Alle temporären Verbindungsprotokolle, die von unseren Hosting-Anbietern geführt werden, werden nur so lange aufbewahrt, wie es für Sicherheits- und Betriebszwecke erforderlich ist.",
    },
    Terms: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      intro:
        "Durch den Zugriff auf und die Nutzung von Aftara Tools stimmen Sie den folgenden Nutzungsbedingungen zu.",
      noWarrantyTitle: "Keine Garantien (Wie besehen)",
      noWarrantyText:
        'Alle Tools, Rechner und Informationen auf dieser Website werden "wie besehen" ohne jegliche Zusicherungen oder Garantien, weder ausdrücklich noch stillschweigend, bereitgestellt. Wir übernehmen keine Garantien für die Richtigkeit, Zuverlässigkeit oder Vollständigkeit der erzielten Ergebnisse.',
      liabilityTitle: "Haftungsbeschränkung",
      liabilityText:
        "In keinem Fall haftet Aftara Tools für besondere, direkte, indirekte, Folge- oder Nebenschäden oder Schäden jeglicher Art, die aus oder im Zusammenhang mit der Nutzung unserer Tools entstehen. Dies umfasst finanzielle Verluste oder medizinische Entscheidungen, die auf der Grundlage unserer Rechner getroffen werden.",
      acceptableUseTitle: "Zulässige Nutzung",
      acceptableUseText:
        "Sie stimmen zu, unsere Tools nur für rechtmäßige Zwecke zu verwenden. Sie dürfen nicht versuchen, den Dienst oder die mit Aftara Tools verbundenen Netzwerke zu scrapen, mit DDoS-Angriffen zu belegen oder anderweitig zu stören.",
      modificationsTitle: "Änderungen",
      modificationsText:
        "Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit ohne vorherige Ankündigung zu ändern. Durch die Nutzung dieser Website stimmen Sie zu, an die jeweils aktuelle Version dieser Bedingungen gebunden zu sein.",
    },
    Cookie: {
      title: "Cookie-Richtlinie",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      intro:
        "Diese Cookie-Richtlinie erklärt, was Cookies sind und wie wir sie verwenden. Sie sollten diese Richtlinie lesen, damit Sie verstehen, welche Art von Cookies wir verwenden oder welche Informationen wir mithilfe von Cookies sammeln und wie diese Informationen verwendet werden.",
      whatAreCookiesTitle: "Was sind Cookies?",
      whatAreCookiesText:
        "Cookies sind kleine Textdateien, die von den von Ihnen besuchten Websites auf Ihrem Computer oder Mobilgerät abgelegt werden. Sie werden häufig verwendet, um Websites zum Laufen zu bringen oder effizienter zu arbeiten, sowie um Berichtsinformationen bereitzustellen.",
      howWeUseCookiesTitle: "Wie wir Cookies verwenden",
      howWeUseCookiesText:
        "Wir verwenden Cookies für wesentliche Funktionen, um Ihre Einstellungen zu speichern und um über Drittanbieter wie Google relevante Werbung bereitzustellen.",
      noTrackingTitle: "Werbe-Cookies von Drittanbietern",
      noTrackingText:
        "Wir verwenden Google AdSense, um unsere kostenlosen Tools zu finanzieren. Diese Drittanbieter verwenden Cookies, um personalisierte Anzeigen zu schalten. Sie können Ihre Einstellungen jederzeit über den Link Datenschutzeinstellungen in unserer Fußzeile verwalten.",
      managingCookiesTitle: "Cookies verwalten",
      managingCookiesText:
        "Sie können Cookies nach Belieben kontrollieren und/oder löschen. Sie können alle bereits auf Ihrem Computer vorhandenen Cookies löschen und die meisten Browser so einstellen, dass das Setzen von Cookies verhindert wird.",
    },
    Disclaimer: {
      title: "Haftungsausschluss",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      intro:
        "Die auf Aftara Tools bereitgestellten Informationen und Tools dienen nur zu allgemeinen Informations- und Bildungszwecken.",
      accuracyTitle: "Allgemeine Genauigkeit",
      accuracyText:
        "Während wir bestrebt sind, unsere Rechner und Konverter auf dem neuesten Stand und korrekt zu halten, geben wir keine Zusicherungen oder Garantien jeglicher Art, weder ausdrücklich noch stillschweigend, über die Vollständigkeit, Richtigkeit, Zuverlässigkeit oder Eignung der Tools.",
      medicalTitle: "Medizinischer und gesundheitlicher Haftungsausschluss",
      medicalText:
        "Tools wie der BMI-, Kalorien-, Makro-, Körperfett- und Wasserbedarfsrechner liefern Schätzungen basierend auf Standardformeln. Sie sind KEIN Ersatz für professionelle medizinische Beratung, Diagnose oder Behandlung. Holen Sie immer den Rat Ihres Arztes oder eines anderen qualifizierten Gesundheitsdienstleisters ein.",
      financialTitle: "Finanzieller Haftungsausschluss",
      financialText:
        "Rechner zu Krediten, Hypotheken, EMI, Investitionen, Steuern und Gehalt dienen nur zu Illustrationszwecken. Sie stellen keine Finanzberatung dar. Die tatsächlichen Zinssätze, Steuern und Bedingungen variieren je nach Ihrem spezifischen Institut und den regionalen Gesetzen.",
      legalTitle: "Rechtliche und regionale Abweichungen",
      legalText:
        "Formeln spiegeln möglicherweise nicht die genauen rechtlichen oder steuerlichen Vorschriften in Ihrer spezifischen Gerichtsbarkeit wider. Konsultieren Sie immer einen zertifizierten Fachmann in Ihrer Nähe, bevor Sie verbindliche finanzielle oder rechtliche Entscheidungen treffen.",
    },
  },
  es: {
    About: {
      title: "Acerca de nosotros y Metodología",
      description:
        "Bienvenido a Aftara Tools, su recurso gratuito para calculadoras en línea premium y utilidades para desarrolladores.",
      missionTitle: "Nuestra Misión",
      missionText:
        "Nuestra misión es proporcionar herramientas rápidas, confiables y que respeten la privacidad para las tareas diarias. Ya sea que sea un desarrollador que necesita codificar un JWT, un propietario de una casa que calcula el volumen de mantillo o simplemente trata de calcular un descuento, hemos creado una herramienta sólida para usted.",
      methodologyTitle: "Nuestra Metodología",
      methodologyIntro:
        "Creemos en la transparencia y la precisión, en particular para las herramientas financieras y relacionadas con la salud (temas de Tu dinero o Tu vida). Así es como nos aseguramos de que nuestras herramientas sean confiables:",
      standardizedFormulasTitle: "Fórmulas Estandarizadas",
      standardizedFormulasText:
        "Todas las calculadoras financieras (como ROI, Hipotecas y Préstamos) utilizan fórmulas de interés compuesto y amortización estándar de la industria.",
      medicalGuidelinesTitle: "Pautas Médicas",
      medicalGuidelinesText:
        "Las calculadoras de salud (como el IMC y la TMB) utilizan ecuaciones reconocidas a nivel mundial, como la Ecuación de Mifflin-St Jeor para la tasa metabólica y las clasificaciones estándar de la OMS para el IMC.",
      privacyFirstTitle: "Privacidad Primero",
      privacyFirstText:
        "Sus datos nunca abandonan su navegador. Todos los cálculos, hash y conversiones ocurren localmente en su dispositivo a través de JavaScript. No almacenamos ni transmitimos sus entradas.",
      continuousTestingTitle: "Pruebas Continuas",
      continuousTestingText:
        "Nuestro conjunto de herramientas se prueba rigurosamente para garantizar que los casos límite (como valores cero o entradas no válidas) se manejen sin problemas y sin fallas.",
      editorialGuidelinesTitle: "Pautas Editoriales",
      editorialGuidelinesText:
        "Cada página de la herramienta está diseñada para que se explique por sí misma. Priorizamos la usabilidad y las instrucciones claras sobre las interfaces desordenadas. Si una ecuación tiene limitaciones (como que el método de Grasa Corporal de la Marina es una estimación), lo indicamos claramente en la página de la herramienta.",
      disclaimer:
        "Descargo de responsabilidad: Las herramientas y calculadoras en este sitio web son solo para fines informativos y educativos. No constituyen asesoramiento médico o financiero profesional. Siempre consulte con un profesional calificado antes de tomar decisiones financieras o de salud importantes.",
      teamTitle: "Quiénes Somos",
      teamText:
        "Este sitio es operado por [TODO: Your Company Name / Your Name]. Nos dedicamos a proporcionar herramientas de alta calidad al público. Si necesita comunicarse con nosotros, consulte nuestra página de Contacto.",
    },
    Contact: {
      title: "Contáctenos",
      description:
        "Nos encantaría saber de usted. Ya sea que tenga una pregunta, una solicitud de función o haya encontrado un error, ¡háganoslo saber!",
      formName: "Nombre",
      formEmail: "Correo electrónico",
      formSubject: "Asunto",
      formMessage: "Mensaje",
      formSubmit: "Enviar Mensaje",
      emailUs: "Envíenos un correo electrónico",
      emailAddress: "[TODO: Your Email Address]",
      responseTime: "Por lo general, respondemos dentro de las 24-48 horas.",
      successMessage: "¡Gracias! Tu mensaje ha sido enviado.",
      errorMessage: "Algo salió mal. Por favor, inténtelo de nuevo más tarde.",
      formNamePlaceholder: "Juan Pérez",
      formEmailPlaceholder: "juan@ejemplo.com",
      formSubjectPlaceholder: "¿Cómo podemos ayudar?",
      formMessagePlaceholder: "Escribe tu mensaje aquí...",
    },
    Privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      intro:
        "En Aftara Tools, su privacidad es nuestra máxima prioridad. Esta Política de Privacidad describe cómo manejamos (y explícitamente NO manejamos) sus datos personales.",
      dataCollectionTitle: "Sin Recopilación de Datos",
      dataCollectionText:
        "No recopilamos datos personales de forma innecesaria. Los cálculos se realizan de forma local. Sin embargo, al utilizar nuestro sitio, nosotros y nuestros socios externos podemos utilizar datos básicos de conexión y cookies, como se describe a continuación.",
      analyticsTitle: "Análisis y Seguimiento",
      analyticsText:
        "Podemos utilizar análisis anónimos y amigables con la privacidad para comprender los patrones generales de tráfico (como qué herramientas son las más populares). Estos datos no se pueden rastrear hasta usuarios individuales y no utilizan cookies de seguimiento intrusivas.",
      thirdPartyTitle: "Proveedores externos y Google AdSense",
      thirdPartyText:
        "Los proveedores externos, incluido Google, utilizan cookies para mostrar anuncios basados en sus visitas anteriores a este sitio web u otros sitios web. El uso de cookies publicitarias por parte de Google permite que Google y sus socios le muestren anuncios basados en su visita a nuestros sitios y/o a otros sitios en Internet.",
      contactUs:
        "Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos.",
      optOutTitle: "Exclusión de anuncios personalizados",
      optOutText:
        "Puede inhabilitar la publicidad personalizada visitando la Configuración de anuncios de Google (https://myadcenter.google.com/). Como alternativa, puede optar por que algunos proveedores externos no utilicen cookies para publicidad personalizada visitando www.aboutads.info.",
      userRightsTitle: "Sus Derechos de Privacidad (GDPR y CCPA)",
      userRightsText:
        "Dependiendo de su ubicación, es posible que tenga derechos según el GDPR, CCPA/CPRA o leyes similares para acceder, eliminar o restringir el procesamiento de sus datos. También tiene el derecho a optar por no participar en la venta o uso compartido de su información personal. Utilice el enlace 'Configuración de privacidad' en el pie de página para administrar su consentimiento.",
      childrenTitle: "Privacidad de los Niños",
      childrenText:
        "Nuestros servicios no están dirigidos a niños menores de 13 años y no recopilamos a sabiendas información personal de niños.",
      dataRetentionTitle: "Retención de Datos",
      dataRetentionText:
        "Cualquier registro de conexión temporal que mantengan nuestros proveedores de alojamiento se conserva solo durante el tiempo que sea necesario para fines operativos y de seguridad.",
    },
    Terms: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      intro:
        "Al acceder y utilizar Aftara Tools, acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso.",
      noWarrantyTitle: "Sin Garantías (Tal Cual)",
      noWarrantyText:
        'Todas las herramientas, calculadoras e información de este sitio web se proporcionan "tal cual" sin representaciones ni garantías, expresas o implícitas. No ofrecemos garantías sobre la exactitud, fiabilidad o integridad de los resultados generados.',
      liabilityTitle: "Limitación de Responsabilidad",
      liabilityText:
        "En ningún caso Aftara Tools será responsable por daños especiales, directos, indirectos, consecuentes o incidentales o cualquier daño que surja de o en conexión con el uso de nuestras herramientas. Esto incluye pérdidas financieras o decisiones médicas tomadas en base a nuestras calculadoras.",
      acceptableUseTitle: "Uso Aceptable",
      acceptableUseText:
        "Usted acepta utilizar nuestras herramientas solo para fines legales. No debe intentar hacer scraping, DDoS o interrumpir de otro modo el servicio o las redes conectadas a Aftara Tools.",
      modificationsTitle: "Modificaciones",
      modificationsText:
        "Nos reservamos el derecho de revisar estos términos de servicio en cualquier momento sin previo aviso. Al usar este sitio web, usted acepta estar sujeto a la versión actual de estos términos.",
    },
    Cookie: {
      title: "Política de Cookies",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      intro:
        "Esta Política de Cookies explica qué son las cookies y cómo las utilizamos. Debe leer esta política para comprender qué tipo de cookies utilizamos, o la información que recopilamos mediante cookies y cómo se utiliza esa información.",
      whatAreCookiesTitle: "¿Qué son las Cookies?",
      whatAreCookiesText:
        "Las cookies son pequeños archivos de texto que los sitios web que visita colocan en su computadora o dispositivo móvil. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información de informes.",
      howWeUseCookiesTitle: "Cómo Usamos las Cookies",
      howWeUseCookiesText:
        "Utilizamos cookies para funcionalidades esenciales, guardar sus preferencias y mostrar anuncios relevantes a través de proveedores externos como Google.",
      noTrackingTitle: "Cookies de Publicidad de Terceros",
      noTrackingText:
        "Utilizamos Google AdSense para financiar nuestras herramientas gratuitas. Estos proveedores externos utilizan cookies para mostrar anuncios personalizados. Puede administrar sus preferencias en cualquier momento mediante el enlace Configuración de privacidad en nuestro pie de página.",
      managingCookiesTitle: "Gestión de Cookies",
      managingCookiesText:
        "Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen.",
    },
    Disclaimer: {
      title: "Aviso Legal",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      intro:
        "La información y las herramientas proporcionadas en Aftara Tools son solo para fines informativos y educativos generales.",
      accuracyTitle: "Precisión General",
      accuracyText:
        "Si bien nos esforzamos por mantener nuestras calculadoras y convertidores actualizados y correctos, no hacemos representaciones ni garantías de ningún tipo, expresas o implícitas, sobre la integridad, exactitud, confiabilidad o idoneidad de las herramientas.",
      medicalTitle: "Aviso Médico y de Salud",
      medicalText:
        "Las herramientas como las calculadoras de IMC, Calorías, Macros, Grasa Corporal e Ingesta de Agua proporcionan estimaciones basadas en fórmulas estándar. NO son un sustituto del consejo, diagnóstico o tratamiento médico profesional. Siempre busque el consejo de su médico u otro proveedor de salud calificado.",
      financialTitle: "Aviso Financiero",
      financialText:
        "Las calculadoras sobre préstamos, hipotecas, EMI, inversiones, impuestos y salarios son solo para fines ilustrativos. No constituyen asesoramiento financiero. Las tasas, impuestos y términos reales variarán según su institución específica y las leyes regionales.",
      legalTitle: "Variaciones Legales y Regionales",
      legalText:
        "Es posible que las fórmulas no reflejen las normas fiscales o legales precisas de su jurisdicción específica. Siempre consulte a un profesional certificado en su área antes de tomar cualquier decisión financiera o legal vinculante.",
    },
  },
  fr: {
    About: {
      title: "À propos de nous et Méthodologie",
      description:
        "Bienvenue sur Aftara Tools, votre ressource gratuite pour les calculatrices en ligne premium et les utilitaires pour développeurs.",
      missionTitle: "Notre Mission",
      missionText:
        "Notre mission est de fournir des outils rapides, fiables et respectueux de la vie privée pour les tâches quotidiennes. Que vous soyez un développeur ayant besoin d'encoder un JWT, un propriétaire calculant le volume de paillis ou simplement en train d'essayer de comprendre une remise, nous avons conçu un outil robuste pour vous.",
      methodologyTitle: "Notre Méthodologie",
      methodologyIntro:
        "Nous croyons en la transparence et la précision, en particulier pour les outils financiers et de santé (sujets Votre argent ou Votre vie). Voici comment nous nous assurons que nos outils sont fiables :",
      standardizedFormulasTitle: "Formules Standardisées",
      standardizedFormulasText:
        "Toutes les calculatrices financières (comme le retour sur investissement, les hypothèques et les prêts) utilisent des formules d'amortissement et d'intérêts composés conformes aux normes de l'industrie.",
      medicalGuidelinesTitle: "Directives Médicales",
      medicalGuidelinesText:
        "Les calculatrices de santé (comme l'IMC et le BMR) utilisent des équations reconnues mondialement, telles que l'équation de Mifflin-St Jeor pour le taux métabolique et les classifications standard de l'OMS pour l'IMC.",
      privacyFirstTitle: "Priorité à la Confidentialité",
      privacyFirstText:
        "Vos données ne quittent jamais votre navigateur. Tous les calculs, le hachage et les conversions se produisent localement sur votre appareil via JavaScript. Nous ne stockons ni ne transmettons vos entrées.",
      continuousTestingTitle: "Tests Continus",
      continuousTestingText:
        "Notre boîte à outils est rigoureusement testée pour garantir que les cas limites (comme les valeurs nulles ou les entrées non valides) sont gérés avec élégance sans plantage.",
      editorialGuidelinesTitle: "Directives Éditoriales",
      editorialGuidelinesText:
        "Chaque page d'outil est conçue pour être explicite. Nous privilégions la convivialité et les instructions claires par rapport aux interfaces encombrées. Si une équation présente des limites (comme le fait que la méthode de graisse corporelle de la Marine est une estimation), nous le notons clairement sur la page de l'outil.",
      disclaimer:
        "Avis de non-responsabilité : Les outils et calculatrices de ce site Web sont fournis à titre informatif et éducatif uniquement. Ils ne constituent pas des conseils financiers ou médicaux professionnels. Consultez toujours un professionnel qualifié avant de prendre des décisions importantes en matière de santé ou de finances.",
      teamTitle: "Qui Nous Sommes",
      teamText:
        "Ce site est exploité par [TODO: Your Company Name / Your Name]. Nous nous consacrons à fournir des outils de haute qualité au public. Si vous avez besoin de nous joindre, veuillez consulter notre page Contact.",
    },
    Contact: {
      title: "Contactez-nous",
      description:
        "Nous serions ravis d'avoir de vos nouvelles. Que vous ayez une question, une demande de fonctionnalité ou que vous ayez trouvé un bogue, faites-le nous savoir !",
      formName: "Nom",
      formEmail: "E-mail",
      formSubject: "Sujet",
      formMessage: "Message",
      formSubmit: "Envoyer le Message",
      emailUs: "Envoyez-nous un e-mail",
      emailAddress: "[TODO: Your Email Address]",
      responseTime: "Nous répondons généralement dans les 24 à 48 heures.",
      successMessage: "Merci ! Votre message a été envoyé.",
      errorMessage:
        "Quelque chose s'est mal passé. Veuillez réessayer plus tard.",
      formNamePlaceholder: "Jean Dupont",
      formEmailPlaceholder: "jean@exemple.com",
      formSubjectPlaceholder: "Comment pouvons-nous vous aider ?",
      formMessagePlaceholder: "Écrivez votre message ici...",
    },
    Privacy: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      intro:
        "Chez Aftara Tools, votre vie privée est notre priorité absolue. Cette politique de confidentialité décrit comment nous traitons (et explicitement ne traitons PAS) vos données personnelles.",
      dataCollectionTitle: "Aucune Collecte de Données",
      dataCollectionText:
        "Nous ne collectons pas de données personnelles inutilement. Les calculs s'effectuent localement. Cependant, lors de l'utilisation de notre site, des données de connexion de base et des cookies peuvent être utilisés par nous et nos partenaires tiers comme décrit ci-dessous.",
      analyticsTitle: "Analytique et Suivi",
      analyticsText:
        "Nous pouvons utiliser des analyses anonymisées et respectueuses de la vie privée pour comprendre les schémas de trafic généraux (comme les outils les plus populaires). Ces données ne peuvent pas être retracées jusqu'à des utilisateurs individuels et n'utilisent pas de cookies de suivi intrusifs.",
      thirdPartyTitle: "Fournisseurs Tiers et Google AdSense",
      thirdPartyText:
        "Des fournisseurs tiers, y compris Google, utilisent des cookies pour diffuser des annonces en fonction de vos visites antérieures sur ce site Web ou sur d'autres sites Web. L'utilisation par Google de cookies publicitaires permet à Google et à ses partenaires de vous diffuser des annonces en fonction de votre visite sur nos sites et/ou d'autres sites sur Internet.",
      contactUs:
        "Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter.",
      optOutTitle: "Désactivation des annonces personnalisées",
      optOutText:
        "Vous pouvez désactiver la publicité personnalisée en visitant les paramètres des annonces Google (https://myadcenter.google.com/). Vous pouvez également refuser l'utilisation de cookies par certains fournisseurs tiers pour la publicité personnalisée en visitant www.aboutads.info.",
      userRightsTitle: "Vos Droits à la Confidentialité (RGPD et CCPA)",
      userRightsText:
        "Selon votre emplacement, vous pouvez avoir des droits en vertu du RGPD, de la CCPA/CPRA ou de lois similaires pour accéder, supprimer ou restreindre le traitement de vos données. Vous avez également le droit de vous opposer à la vente ou au partage de vos informations personnelles. Utilisez le lien « Paramètres de confidentialité » dans le pied de page pour gérer votre consentement.",
      childrenTitle: "Confidentialité des Enfants",
      childrenText:
        "Nos services ne s'adressent pas aux enfants de moins de 13 ans, et nous ne collectons pas sciemment d'informations personnelles auprès d'enfants.",
      dataRetentionTitle: "Conservation des Données",
      dataRetentionText:
        "Tous les journaux de connexion temporaires conservés par nos fournisseurs d'hébergement ne sont conservés que le temps nécessaire à des fins de sécurité et de fonctionnement.",
    },
    Terms: {
      title: "Conditions d'Utilisation",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      intro:
        "En accédant et en utilisant Aftara Tools, vous acceptez de vous conformer et d'être lié par les conditions d'utilisation suivantes.",
      noWarrantyTitle: "Aucune Garantie (Tel Quel)",
      noWarrantyText:
        "Tous les outils, calculatrices et informations sur ce site Web sont fournis « tels quels » sans aucune représentation ou garantie, expresse ou implicite. Nous ne garantissons pas l'exactitude, la fiabilité ou l'exhaustivité des résultats générés.",
      liabilityTitle: "Limitation de Responsabilité",
      liabilityText:
        "En aucun cas Aftara Tools ne sera responsable des dommages spéciaux, directs, indirects, consécutifs ou accessoires ou de tout dommage, quel qu'il soit, découlant de ou lié à l'utilisation de nos outils. Cela comprend les pertes financières ou les décisions médicales prises sur la base de nos calculatrices.",
      acceptableUseTitle: "Utilisation Acceptable",
      acceptableUseText:
        "Vous acceptez d'utiliser nos outils uniquement à des fins légales. Vous ne devez pas essayer de récupérer des données, de lancer des attaques DDoS ou de perturber autrement le service ou les réseaux connectés à Aftara Tools.",
      modificationsTitle: "Modifications",
      modificationsText:
        "Nous nous réservons le droit de réviser ces conditions d'utilisation à tout moment sans préavis. En utilisant ce site Web, vous acceptez d'être lié par la version alors en vigueur de ces conditions.",
    },
    Cookie: {
      title: "Politique relative aux Cookies",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      intro:
        "Cette politique relative aux cookies explique ce que sont les cookies et comment nous les utilisons. Vous devez lire cette politique afin de comprendre quel type de cookies nous utilisons, ou les informations que nous collectons à l'aide de cookies et comment ces informations sont utilisées.",
      whatAreCookiesTitle: "Que sont les Cookies ?",
      whatAreCookiesText:
        "Les cookies sont de petits fichiers texte placés sur votre ordinateur ou appareil mobile par les sites Web que vous visitez. Ils sont largement utilisés pour faire fonctionner les sites Web, ou les faire fonctionner plus efficacement, ainsi que pour fournir des informations de rapport.",
      howWeUseCookiesTitle: "Comment Nous Utilisons les Cookies",
      howWeUseCookiesText:
        "Nous utilisons des cookies pour les fonctionnalités essentielles, l'enregistrement de vos préférences et la diffusion d'annonces pertinentes via des fournisseurs tiers tels que Google.",
      noTrackingTitle: "Cookies Publicitaires Tiers",
      noTrackingText:
        "Nous utilisons Google AdSense pour financer nos outils gratuits. Ces fournisseurs tiers utilisent des cookies pour diffuser des annonces personnalisées. Vous pouvez gérer vos préférences à tout moment en utilisant le lien Paramètres de confidentialité dans notre pied de page.",
      managingCookiesTitle: "Gestion des Cookies",
      managingCookiesText:
        "Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et vous pouvez configurer la plupart des navigateurs pour empêcher qu'ils soient placés.",
    },
    Disclaimer: {
      title: "Avis de non-responsabilité",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      intro:
        "Les informations et outils fournis sur Aftara Tools sont uniquement à des fins d'information générale et d'éducation.",
      accuracyTitle: "Précision Générale",
      accuracyText:
        "Bien que nous nous efforcions de maintenir nos calculatrices et convertisseurs à jour et corrects, nous ne faisons aucune représentation ou garantie d'aucune sorte, expresse ou implicite, quant à l'exhaustivité, l'exactitude, la fiabilité ou la pertinence des outils.",
      medicalTitle: "Avis Médical et de Santé",
      medicalText:
        "Des outils tels que les calculatrices d'IMC, de Calories, de Macros, de Graisse Corporelle et de Consommation d'Eau fournissent des estimations basées sur des formules standard. Ils NE remplacent PAS l'avis, le diagnostic ou le traitement d'un professionnel de la santé. Demandez toujours l'avis de votre médecin ou d'un autre fournisseur de soins de santé qualifié.",
      financialTitle: "Avis Financier",
      financialText:
        "Les calculatrices concernant les prêts, les hypothèques, les EMI, les investissements, les impôts et les salaires ne sont qu'à titre indicatif. Ils ne constituent pas des conseils financiers. Les taux, taxes et conditions réels varieront en fonction de votre institution spécifique et des lois régionales.",
      legalTitle: "Variations Légales et Régionales",
      legalText:
        "Les formules peuvent ne pas refléter les règles juridiques ou fiscales précises de votre juridiction spécifique. Consultez toujours un professionnel certifié de votre région avant de prendre des décisions financières ou juridiques contraignantes.",
    },
  },
};

for (const [lang, texts] of Object.entries(translations)) {
  const filePath = path.join(process.cwd(), "messages", `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    data.About = texts.About;
    data.Contact = texts.Contact;
    data.Privacy = texts.Privacy;
    data.Terms = texts.Terms;
    data.Cookie = texts.Cookie;
    data.Disclaimer = texts.Disclaimer;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    console.log(`Updated full translations for ${lang}.json`);
  }
}
