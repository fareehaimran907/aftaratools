const fs = require("fs");
const path = require("path");

const translations = {
  hi: {
    About: {
      title: "हमारे बारे में और कार्यप्रणाली",
      description:
        "Aftara Tools में आपका स्वागत है, जो प्रीमियम ऑनलाइन कैलकुलेटर और डेवलपर उपयोगिताओं के लिए आपका निःशुल्क संसाधन है।",
      missionTitle: "हमारा मिशन",
      missionText:
        "हमारा मिशन रोजमर्रा के कार्यों के लिए तेज़, विश्वसनीय और गोपनीयता का सम्मान करने वाले टूल प्रदान करना है। चाहे आप एक डेवलपर हों जिन्हें JWT को एनकोड करने की आवश्यकता है, एक गृहस्वामी जो गीली घास की मात्रा की गणना कर रहा है, या केवल छूट का पता लगाने की कोशिश कर रहा है, हमने आपके लिए एक मजबूत टूल बनाया है।",
      methodologyTitle: "हमारी कार्यप्रणाली",
      methodologyIntro:
        "हम पारदर्शिता और सटीकता में विश्वास करते हैं, विशेष रूप से वित्तीय और स्वास्थ्य संबंधी उपकरणों (आपका पैसा या आपका जीवन विषय) के लिए। यहां बताया गया है कि हम कैसे सुनिश्चित करते हैं कि हमारे उपकरण विश्वसनीय हैं:",
      standardizedFormulasTitle: "मानकीकृत सूत्र",
      standardizedFormulasText:
        "सभी वित्तीय कैलकुलेटर (जैसे ROI, बंधक और ऋण) उद्योग-मानक परिशोधन और चक्रवृद्धि ब्याज सूत्रों का उपयोग करते हैं।",
      medicalGuidelinesTitle: "चिकित्सा दिशानिर्देश",
      medicalGuidelinesText:
        "स्वास्थ्य कैलकुलेटर (जैसे BMI और BMR) विश्व स्तर पर मान्यता प्राप्त समीकरणों का उपयोग करते हैं, जैसे चयापचय दर के लिए मिफ्लिन-सेंट जेओर समीकरण, और BMI के लिए मानक WHO वर्गीकरण।",
      privacyFirstTitle: "गोपनीयता सबसे पहले",
      privacyFirstText:
        "आपका डेटा कभी भी आपके ब्राउज़र से बाहर नहीं जाता है। सभी गणनाएं, हैशिंग और रूपांतरण जावास्क्रिप्ट के माध्यम से आपके डिवाइस पर स्थानीय रूप से होते हैं। हम आपके इनपुट को संग्रहीत या प्रसारित नहीं करते हैं।",
      continuousTestingTitle: "निरंतर परीक्षण",
      continuousTestingText:
        "हमारे टूलकिट का कठोरता से परीक्षण किया जाता है ताकि यह सुनिश्चित किया जा सके कि किनारे के मामलों (जैसे शून्य मान या अमान्य इनपुट) को बिना क्रैश हुए आसानी से संभाला जा सके।",
      editorialGuidelinesTitle: "संपादकीय दिशानिर्देश",
      editorialGuidelinesText:
        "प्रत्येक टूल पेज को स्व-व्याख्यात्मक होने के लिए डिज़ाइन किया गया है। हम अव्यवस्थित इंटरफेस पर प्रयोज्य और स्पष्ट निर्देशों को प्राथमिकता देते हैं। यदि किसी समीकरण की सीमाएं हैं (जैसे कि नेवी बॉडी फैट विधि एक अनुमान है), तो हम इसे स्पष्ट रूप से टूल पेज पर नोट करते हैं।",
      disclaimer:
        "अस्वीकरण: इस वेबसाइट पर उपकरण और कैलकुलेटर केवल सूचनात्मक और शैक्षिक उद्देश्यों के लिए हैं। वे पेशेवर वित्तीय या चिकित्सा सलाह नहीं देते हैं। महत्वपूर्ण स्वास्थ्य या वित्तीय निर्णय लेने से पहले हमेशा एक योग्य पेशेवर से परामर्श करें।",
      teamTitle: "हम कौन हैं",
      teamText:
        "यह साइट [TODO: Your Company Name / Your Name] द्वारा संचालित है। हम जनता को उच्च गुणवत्ता वाले उपकरण प्रदान करने के लिए समर्पित हैं। यदि आपको हम तक पहुंचने की आवश्यकता है, तो कृपया हमारा संपर्क पृष्ठ देखें।",
    },
    Contact: {
      title: "संपर्क करें",
      description:
        "हम आपसे सुनना पसंद करेंगे। यदि आपके पास कोई प्रश्न है, कोई सुविधा अनुरोध है, या कोई बग मिला है, तो हमें बताएं!",
      formName: "नाम",
      formEmail: "ईमेल",
      formSubject: "विषय",
      formMessage: "संदेश",
      formSubmit: "संदेश भेजें",
      emailUs: "हमें ईमेल करें",
      emailAddress: "[TODO: Your Email Address]",
      responseTime: "हम आम तौर पर 24-48 घंटों के भीतर जवाब देते हैं।",
      successMessage: "धन्यवाद! आपका संदेश भेज दिया गया है।",
      errorMessage: "कुछ गलत हो गया। कृपया बाद में पुन: प्रयास करें।",
      formNamePlaceholder: "राहुल कुमार",
      formEmailPlaceholder: "rahul@example.com",
      formSubjectPlaceholder: "हम कैसे मदद कर सकते हैं?",
      formMessagePlaceholder: "अपना संदेश यहाँ लिखें...",
    },
    Privacy: {
      title: "गोपनीयता नीति",
      lastUpdated: "अंतिम अद्यतन: 29 सितंबर, 2026",
      intro:
        "Aftara Tools में, आपकी गोपनीयता हमारी सर्वोच्च प्राथमिकता है। यह गोपनीयता नीति रूपरेखा देती है कि हम आपके व्यक्तिगत डेटा को कैसे संभालते हैं (और स्पष्ट रूप से नहीं संभालते हैं)।",
      dataCollectionTitle: "कोई डेटा संग्रह नहीं",
      dataCollectionText:
        "हम अनावश्यक रूप से व्यक्तिगत डेटा एकत्र नहीं करते हैं। गणनाएँ स्थानीय रूप से होती हैं। हालाँकि, हमारी साइट का उपयोग करते समय, बुनियादी कनेक्शन डेटा और कुकीज़ का उपयोग हमारे और हमारे तीसरे पक्ष के भागीदारों द्वारा किया जा सकता है जैसा कि नीचे वर्णित है।",
      analyticsTitle: "एनालिटिक्स और ट्रैकिंग",
      analyticsText:
        "हम सामान्य ट्रैफ़िक पैटर्न (जैसे कि कौन से टूल सबसे लोकप्रिय हैं) को समझने के लिए गोपनीयता-अनुकूल, अनाम विश्लेषिकी का उपयोग कर सकते हैं। इस डेटा को व्यक्तिगत उपयोगकर्ताओं तक वापस नहीं खोजा जा सकता है और यह घुसपैठ करने वाली ट्रैकिंग कुकीज़ का उपयोग नहीं करता है।",
      thirdPartyTitle: "तीसरे पक्ष के विक्रेता और Google AdSense",
      thirdPartyText:
        "Google सहित तृतीय-पक्ष विक्रेता, इस वेबसाइट या अन्य वेबसाइटों पर आपके पूर्व विज़िट के आधार पर विज्ञापन देने के लिए कुकीज़ का उपयोग करते हैं। Google द्वारा विज्ञापन कुकीज़ का उपयोग उसे और उसके भागीदारों को हमारी साइटों और/या इंटरनेट पर अन्य साइटों पर आपकी विज़िट के आधार पर विज्ञापन देने में सक्षम बनाता है।",
      contactUs:
        "यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें।",
      optOutTitle: "व्यक्तिगत विज्ञापनों से बाहर निकलना",
      optOutText:
        "आप Google विज्ञापन सेटिंग (https://myadcenter.google.com/) पर जाकर वैयक्तिकृत विज्ञापन से बाहर निकल सकते हैं। वैकल्पिक रूप से, आप www.aboutads.info पर जाकर वैयक्तिकृत विज्ञापन के लिए कुकीज़ के कुछ तृतीय-पक्ष विक्रेताओं के उपयोग से बाहर निकल सकते हैं।",
      userRightsTitle: "आपके गोपनीयता अधिकार (GDPR और CCPA)",
      userRightsText:
        "आपके स्थान के आधार पर, आपके पास अपने डेटा तक पहुँचने, हटाने या संसाधित करने को प्रतिबंधित करने के लिए GDPR, CCPA/CPRA, या समान कानूनों के तहत अधिकार हो सकते हैं। आपको अपनी व्यक्तिगत जानकारी की बिक्री या साझाकरण से बाहर निकलने का भी अधिकार है। अपनी सहमति प्रबंधित करने के लिए पाद लेख में 'गोपनीयता सेटिंग' लिंक का उपयोग करें।",
      childrenTitle: "बच्चों की गोपनीयता",
      childrenText:
        "हमारी सेवाएँ 13 वर्ष से कम उम्र के बच्चों के लिए निर्देशित नहीं हैं, और हम जानबूझकर बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते हैं।",
      dataRetentionTitle: "डेटा प्रतिधारण",
      dataRetentionText:
        "हमारे होस्टिंग प्रदाताओं द्वारा रखे गए कोई भी अस्थायी कनेक्शन लॉग केवल सुरक्षा और परिचालन उद्देश्यों के लिए आवश्यक होने तक बनाए रखे जाते हैं।",
    },
    Terms: {
      title: "सेवा की शर्तें",
      lastUpdated: "अंतिम अद्यतन: 29 सितंबर, 2026",
      intro:
        "Aftara Tools तक पहुँचने और उपयोग करने से, आप उपयोग के निम्नलिखित नियमों और शर्तों का पालन करने और उनसे बाध्य होने के लिए सहमत हैं।",
      noWarrantyTitle: "कोई वारंटी नहीं (जैसा है)",
      noWarrantyText:
        'इस वेबसाइट पर सभी उपकरण, कैलकुलेटर और जानकारी बिना किसी प्रतिनिधित्व या वारंटी, व्यक्त या निहित के "जैसा है" प्रदान की जाती है। हम उत्पन्न परिणामों की सटीकता, विश्वसनीयता या पूर्णता के संबंध में कोई गारंटी नहीं देते हैं।',
      liabilityTitle: "देयता की सीमा",
      liabilityText:
        "किसी भी स्थिति में Aftara Tools किसी भी विशेष, प्रत्यक्ष, अप्रत्यक्ष, परिणामी, या आकस्मिक क्षति या हमारे उपकरणों के उपयोग के संबंध में उत्पन्न होने वाले किसी भी नुकसान के लिए उत्तरदायी नहीं होगा। इसमें वित्तीय नुकसान या हमारे कैलकुलेटर के आधार पर किए गए चिकित्सा निर्णय शामिल हैं।",
      acceptableUseTitle: "स्वीकार्य उपयोग",
      acceptableUseText:
        "आप हमारे उपकरणों का उपयोग केवल वैध उद्देश्यों के लिए करने के लिए सहमत हैं। आपको Aftara Tools से जुड़ी सेवा या नेटवर्क को स्क्रैप, DDoS, या अन्यथा बाधित करने का प्रयास नहीं करना चाहिए।",
      modificationsTitle: "संशोधन",
      modificationsText:
        "हम बिना किसी सूचना के किसी भी समय सेवा की इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। इस वेबसाइट का उपयोग करके, आप इन शर्तों के तत्कालीन वर्तमान संस्करण से बाध्य होने के लिए सहमत हैं।",
    },
    Cookie: {
      title: "कुकी नीति",
      lastUpdated: "अंतिम अद्यतन: 29 सितंबर, 2026",
      intro:
        "यह कुकी नीति बताती है कि कुकीज़ क्या हैं और हम उनका उपयोग कैसे करते हैं। आपको यह नीति पढ़नी चाहिए ताकि आप समझ सकें कि हम किस प्रकार की कुकीज़ का उपयोग करते हैं, या हम कुकीज़ का उपयोग करके जो जानकारी एकत्र करते हैं और उस जानकारी का उपयोग कैसे किया जाता है।",
      whatAreCookiesTitle: "कुकीज़ क्या हैं?",
      whatAreCookiesText:
        "कुकीज़ छोटी टेक्स्ट फ़ाइलें होती हैं जो आपके द्वारा देखी जाने वाली वेबसाइटों द्वारा आपके कंप्यूटर या मोबाइल डिवाइस पर रखी जाती हैं। इनका व्यापक रूप से वेबसाइटों को काम करने, या अधिक कुशलता से काम करने के साथ-साथ रिपोर्टिंग जानकारी प्रदान करने के लिए उपयोग किया जाता है।",
      howWeUseCookiesTitle: "हम कुकीज़ का उपयोग कैसे करते हैं",
      howWeUseCookiesText:
        "हम आवश्यक कार्यक्षमता, आपकी प्राथमिकताओं को सहेजने और Google जैसे तृतीय-पक्ष विक्रेताओं के माध्यम से प्रासंगिक विज्ञापन देने के लिए कुकीज़ का उपयोग करते हैं।",
      noTrackingTitle: "तृतीय-पक्ष विज्ञापन कुकीज़",
      noTrackingText:
        "हम अपने मुफ़्त टूल को फ़ंड देने के लिए Google AdSense का उपयोग करते हैं। ये तृतीय-पक्ष विक्रेता वैयक्तिकृत विज्ञापन देने के लिए कुकीज़ का उपयोग करते हैं। आप हमारे पाद लेख में गोपनीयता सेटिंग लिंक का उपयोग करके किसी भी समय अपनी प्राथमिकताएं प्रबंधित कर सकते हैं।",
      managingCookiesTitle: "कुकीज़ प्रबंधित करना",
      managingCookiesText:
        "आप अपनी इच्छानुसार कुकीज़ को नियंत्रित और/या हटा सकते हैं। आप उन सभी कुकीज़ को हटा सकते हैं जो पहले से ही आपके कंप्यूटर पर हैं और आप अधिकांश ब्राउज़रों को उन्हें रखे जाने से रोकने के लिए सेट कर सकते हैं।",
    },
    Disclaimer: {
      title: "अस्वीकरण",
      lastUpdated: "अंतिम अद्यतन: 29 सितंबर, 2026",
      intro:
        "Aftara Tools पर दी गई जानकारी और उपकरण केवल सामान्य सूचनात्मक और शैक्षिक उद्देश्यों के लिए हैं।",
      accuracyTitle: "सामान्य सटीकता",
      accuracyText:
        "हालाँकि हम अपने कैलकुलेटर और कन्वर्टर्स को अद्यतित और सही रखने का प्रयास करते हैं, हम उपकरणों की पूर्णता, सटीकता, विश्वसनीयता या उपयुक्तता के बारे में किसी भी प्रकार, व्यक्त या निहित का कोई प्रतिनिधित्व या वारंटी नहीं देते हैं।",
      medicalTitle: "चिकित्सा और स्वास्थ्य अस्वीकरण",
      medicalText:
        "BMI, कैलोरी, मैक्रो, बॉडी फैट और वाटर इंटेक कैलकुलेटर जैसे उपकरण मानक सूत्रों के आधार पर अनुमान प्रदान करते हैं। वे पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं हैं। हमेशा अपने चिकित्सक या अन्य योग्य स्वास्थ्य प्रदाता की सलाह लें।",
      financialTitle: "वित्तीय अस्वीकरण",
      financialText:
        "ऋण, बंधक, EMI, निवेश, कर और वेतन से संबंधित कैलकुलेटर केवल दृष्टांत उद्देश्यों के लिए हैं। वे वित्तीय सलाह नहीं देते हैं। वास्तविक दरें, कर और शर्तें आपके विशिष्ट संस्थान और क्षेत्रीय कानूनों के आधार पर भिन्न होंगी।",
      legalTitle: "कानूनी और क्षेत्रीय विविधताएं",
      legalText:
        "सूत्र आपके विशिष्ट क्षेत्राधिकार में सटीक कानूनी या कर नियमों को प्रतिबिंबित नहीं कर सकते हैं। कोई भी बाध्यकारी वित्तीय या कानूनी निर्णय लेने से पहले हमेशा अपने क्षेत्र में प्रमाणित पेशेवर से सलाह लें।",
    },
  },
  id: {
    About: {
      title: "Tentang Kami & Metodologi",
      description:
        "Selamat datang di Aftara Tools, sumber daya gratis Anda untuk kalkulator online premium dan utilitas pengembang.",
      missionTitle: "Misi Kami",
      missionText:
        "Misi kami adalah menyediakan alat yang cepat, andal, dan menghormati privasi untuk tugas sehari-hari. Baik Anda seorang pengembang yang perlu menyandikan JWT, pemilik rumah yang menghitung volume mulsa, atau sekadar mencoba mengetahui diskon, kami telah membuat alat yang tangguh untuk Anda.",
      methodologyTitle: "Metodologi Kami",
      methodologyIntro:
        "Kami percaya pada transparansi dan keakuratan, terutama untuk alat terkait keuangan dan kesehatan (topik Uang Anda atau Kehidupan Anda). Inilah cara kami memastikan alat kami andal:",
      standardizedFormulasTitle: "Rumus Standar",
      standardizedFormulasText:
        "Semua kalkulator keuangan (seperti ROI, Hipotek, dan Pinjaman) menggunakan amortisasi standar industri dan rumus bunga majemuk.",
      medicalGuidelinesTitle: "Pedoman Medis",
      medicalGuidelinesText:
        "Kalkulator kesehatan (seperti BMI dan BMR) menggunakan persamaan yang diakui secara global, seperti Persamaan Mifflin-St Jeor untuk laju metabolisme, dan klasifikasi standar WHO untuk BMI.",
      privacyFirstTitle: "Privasi Pertama",
      privacyFirstText:
        "Data Anda tidak pernah meninggalkan browser Anda. Semua perhitungan, hashing, dan konversi terjadi secara lokal di perangkat Anda melalui JavaScript. Kami tidak menyimpan atau mengirimkan masukan Anda.",
      continuousTestingTitle: "Pengujian Berkelanjutan",
      continuousTestingText:
        "Perangkat kami diuji secara ketat untuk memastikan kasus ekstrem (seperti nilai nol atau masukan tidak valid) ditangani dengan baik tanpa mogok.",
      editorialGuidelinesTitle: "Pedoman Editorial",
      editorialGuidelinesText:
        "Setiap halaman alat dirancang untuk cukup jelas. Kami memprioritaskan kegunaan dan instruksi yang jelas di atas antarmuka yang berantakan. Jika sebuah persamaan memiliki keterbatasan (seperti metode Lemak Tubuh Angkatan Laut yang merupakan perkiraan), kami mencatatnya dengan jelas di halaman alat.",
      disclaimer:
        "Penafian: Alat dan kalkulator di situs web ini hanya untuk tujuan informasi dan pendidikan. Mereka bukan merupakan nasihat keuangan atau medis profesional. Selalu berkonsultasi dengan profesional yang memenuhi syarat sebelum membuat keputusan kesehatan atau keuangan yang signifikan.",
      teamTitle: "Siapa Kami",
      teamText:
        "Situs ini dioperasikan oleh [TODO: Your Company Name / Your Name]. Kami berdedikasi untuk menyediakan alat berkualitas tinggi kepada publik. Jika Anda perlu menghubungi kami, silakan lihat halaman Kontak kami.",
    },
    Contact: {
      title: "Hubungi Kami",
      description:
        "Kami akan senang mendengar dari Anda. Apakah Anda memiliki pertanyaan, permintaan fitur, atau menemukan bug, beri tahu kami!",
      formName: "Nama",
      formEmail: "Email",
      formSubject: "Subjek",
      formMessage: "Pesan",
      formSubmit: "Kirim Pesan",
      emailUs: "Email Kami",
      emailAddress: "[TODO: Your Email Address]",
      responseTime: "Kami biasanya merespons dalam 24-48 jam.",
      successMessage: "Terima kasih! Pesan Anda telah terkirim.",
      errorMessage: "Ada yang salah. Silakan coba lagi nanti.",
      formNamePlaceholder: "Budi Santoso",
      formEmailPlaceholder: "budi@example.com",
      formSubjectPlaceholder: "Bagaimana kami bisa membantu?",
      formMessagePlaceholder: "Tulis pesan Anda di sini...",
    },
    Privacy: {
      title: "Kebijakan Privasi",
      lastUpdated: "Terakhir Diperbarui: 29 September 2026",
      intro:
        "Di Aftara Tools, privasi Anda adalah prioritas utama kami. Kebijakan Privasi ini menguraikan bagaimana kami menangani (dan secara eksplisit TIDAK menangani) data pribadi Anda.",
      dataCollectionTitle: "Tidak Ada Pengumpulan Data",
      dataCollectionText:
        "Kami tidak mengumpulkan data pribadi secara tidak perlu. Komputasi terjadi secara lokal. Namun, saat menggunakan situs kami, data koneksi dasar dan cookie dapat digunakan oleh kami dan mitra pihak ketiga kami seperti yang dijelaskan di bawah ini.",
      analyticsTitle: "Analitik & Pelacakan",
      analyticsText:
        "Kami dapat menggunakan analitik anonim yang ramah privasi untuk memahami pola lalu lintas umum (seperti alat apa yang paling populer). Data ini tidak dapat ditelusuri kembali ke pengguna individu dan tidak menggunakan cookie pelacakan yang mengganggu.",
      thirdPartyTitle: "Vendor Pihak Ketiga & Google AdSense",
      thirdPartyText:
        "Vendor pihak ketiga, termasuk Google, menggunakan cookie untuk menayangkan iklan berdasarkan kunjungan Anda sebelumnya ke situs web ini atau situs web lain. Penggunaan cookie iklan oleh Google memungkinkannya dan mitranya untuk menayangkan iklan kepada Anda berdasarkan kunjungan Anda ke situs kami dan/atau situs lain di Internet.",
      contactUs:
        "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami.",
      optOutTitle: "Memilih Keluar dari Iklan yang Dipersonalisasi",
      optOutText:
        "Anda dapat memilih keluar dari iklan yang dipersonalisasi dengan mengunjungi Setelan Iklan Google (https://myadcenter.google.com/). Atau, Anda dapat memilih keluar dari penggunaan cookie oleh beberapa vendor pihak ketiga untuk iklan yang dipersonalisasi dengan mengunjungi www.aboutads.info.",
      userRightsTitle: "Hak Privasi Anda (GDPR & CCPA)",
      userRightsText:
        "Bergantung pada lokasi Anda, Anda mungkin memiliki hak berdasarkan GDPR, CCPA/CPRA, atau undang-undang serupa untuk mengakses, menghapus, atau membatasi pemrosesan data Anda. Anda juga memiliki hak untuk memilih keluar dari penjualan atau berbagi informasi pribadi Anda. Gunakan tautan 'Pengaturan privasi' di footer untuk mengelola persetujuan Anda.",
      childrenTitle: "Privasi Anak",
      childrenText:
        "Layanan kami tidak ditujukan untuk anak-anak di bawah 13 tahun, dan kami tidak secara sadar mengumpulkan informasi pribadi dari anak-anak.",
      dataRetentionTitle: "Retensi Data",
      dataRetentionText:
        "Log koneksi sementara apa pun yang disimpan oleh penyedia hosting kami hanya disimpan selama diperlukan untuk tujuan keamanan dan operasional.",
    },
    Terms: {
      title: "Ketentuan Layanan",
      lastUpdated: "Terakhir Diperbarui: 29 September 2026",
      intro:
        "Dengan mengakses dan menggunakan Aftara Tools, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan penggunaan berikut.",
      noWarrantyTitle: "Tanpa Garansi (Apa Adanya)",
      noWarrantyText:
        'Semua alat, kalkulator, dan informasi di situs web ini disediakan "apa adanya" tanpa perwakilan atau jaminan apa pun, tersurat maupun tersirat. Kami tidak memberikan jaminan mengenai keakuratan, keandalan, atau kelengkapan hasil yang dihasilkan.',
      liabilityTitle: "Batasan Tanggung Jawab",
      liabilityText:
        "Dalam keadaan apa pun Aftara Tools tidak bertanggung jawab atas kerusakan khusus, langsung, tidak langsung, konsekuensial, atau insidental atau kerusakan apa pun yang timbul dari atau sehubungan dengan penggunaan alat kami. Ini termasuk kerugian finansial atau keputusan medis yang dibuat berdasarkan kalkulator kami.",
      acceptableUseTitle: "Penggunaan yang Dapat Diterima",
      acceptableUseText:
        "Anda setuju untuk menggunakan alat kami hanya untuk tujuan yang sah. Anda tidak boleh mencoba mengikis, DDoS, atau mengganggu layanan atau jaringan yang terhubung ke Aftara Tools.",
      modificationsTitle: "Modifikasi",
      modificationsText:
        "Kami berhak untuk merevisi persyaratan layanan ini kapan saja tanpa pemberitahuan. Dengan menggunakan situs web ini, Anda setuju untuk terikat oleh versi terbaru dari persyaratan ini.",
    },
    Cookie: {
      title: "Kebijakan Cookie",
      lastUpdated: "Terakhir Diperbarui: 29 September 2026",
      intro:
        "Kebijakan Cookie ini menjelaskan apa itu cookie dan bagaimana kami menggunakannya. Anda harus membaca kebijakan ini agar Anda dapat memahami jenis cookie apa yang kami gunakan, atau informasi yang kami kumpulkan menggunakan cookie dan bagaimana informasi tersebut digunakan.",
      whatAreCookiesTitle: "Apa itu Cookie?",
      whatAreCookiesText:
        "Cookie adalah file teks kecil yang ditempatkan di komputer atau perangkat seluler Anda oleh situs web yang Anda kunjungi. Cookie banyak digunakan agar situs web berfungsi, atau bekerja lebih efisien, serta untuk memberikan informasi pelaporan.",
      howWeUseCookiesTitle: "Bagaimana Kami Menggunakan Cookie",
      howWeUseCookiesText:
        "Kami menggunakan cookie untuk fungsionalitas penting, menyimpan preferensi Anda, dan menayangkan iklan yang relevan melalui vendor pihak ketiga seperti Google.",
      noTrackingTitle: "Cookie Iklan Pihak Ketiga",
      noTrackingText:
        "Kami menggunakan Google AdSense untuk mendanai alat gratis kami. Vendor pihak ketiga ini menggunakan cookie untuk menayangkan iklan yang dipersonalisasi. Anda dapat mengelola preferensi Anda kapan saja menggunakan tautan Pengaturan Privasi di footer kami.",
      managingCookiesTitle: "Mengelola Cookie",
      managingCookiesText:
        "Anda dapat mengontrol dan/atau menghapus cookie sesuai keinginan. Anda dapat menghapus semua cookie yang sudah ada di komputer Anda dan Anda dapat mengatur sebagian besar browser untuk mencegahnya ditempatkan.",
    },
    Disclaimer: {
      title: "Penafian",
      lastUpdated: "Terakhir Diperbarui: 29 September 2026",
      intro:
        "Informasi dan alat yang disediakan di Aftara Tools hanya untuk tujuan informasi dan pendidikan umum.",
      accuracyTitle: "Akurasi Umum",
      accuracyText:
        "Meskipun kami berusaha keras untuk menjaga agar kalkulator dan konverter kami tetap mutakhir dan benar, kami tidak membuat pernyataan atau jaminan dalam bentuk apa pun, tersurat maupun tersirat, tentang kelengkapan, keakuratan, keandalan, atau kesesuaian alat.",
      medicalTitle: "Penafian Medis & Kesehatan",
      medicalText:
        "Alat-alat seperti kalkulator BMI, Kalori, Makro, Lemak Tubuh, dan Asupan Air memberikan perkiraan berdasarkan rumus standar. Alat tersebut BUKAN pengganti nasihat, diagnosis, atau perawatan medis profesional. Selalu cari nasihat dari dokter Anda atau penyedia kesehatan berkualifikasi lainnya.",
      financialTitle: "Penafian Keuangan",
      financialText:
        "Kalkulator mengenai pinjaman, hipotek, EMI, investasi, pajak, dan gaji hanya untuk tujuan ilustrasi. Kalkulator tersebut bukan merupakan nasihat keuangan. Tarif, pajak, dan ketentuan aktual akan bervariasi berdasarkan institusi khusus Anda dan hukum setempat.",
      legalTitle: "Variasi Hukum & Regional",
      legalText:
        "Rumus mungkin tidak mencerminkan aturan hukum atau pajak yang tepat di yurisdiksi spesifik Anda. Selalu berkonsultasi dengan profesional bersertifikat di wilayah Anda sebelum membuat keputusan keuangan atau hukum yang mengikat.",
    },
  },
  it: {
    About: {
      title: "Chi siamo e Metodologia",
      description:
        "Benvenuto su Aftara Tools, la tua risorsa gratuita per calcolatrici online premium e utility per sviluppatori.",
      missionTitle: "La nostra missione",
      missionText:
        "La nostra missione è fornire strumenti rapidi, affidabili e rispettosi della privacy per le attività quotidiane. Che tu sia uno sviluppatore che deve codificare un JWT, un proprietario di casa che calcola il volume del pacciame o semplicemente che cerchi di capire uno sconto, abbiamo creato uno strumento robusto per te.",
      methodologyTitle: "La nostra metodologia",
      methodologyIntro:
        "Crediamo nella trasparenza e nell'accuratezza, in particolare per gli strumenti finanziari e legati alla salute (argomenti Il tuo denaro o la tua vita). Ecco come ci assicuriamo che i nostri strumenti siano affidabili:",
      standardizedFormulasTitle: "Formule standardizzate",
      standardizedFormulasText:
        "Tutti i calcolatori finanziari (come ROI, Mutui e Prestiti) utilizzano formule di ammortamento e interesse composto standard del settore.",
      medicalGuidelinesTitle: "Linee guida mediche",
      medicalGuidelinesText:
        "I calcolatori della salute (come BMI e BMR) utilizzano equazioni riconosciute a livello globale, come l'equazione di Mifflin-St Jeor per il tasso metabolico e le classificazioni standard dell'OMS per il BMI.",
      privacyFirstTitle: "La privacy prima di tutto",
      privacyFirstText:
        "I tuoi dati non lasciano mai il tuo browser. Tutti i calcoli, l'hashing e le conversioni avvengono localmente sul tuo dispositivo tramite JavaScript. Non memorizziamo né trasmettiamo i tuoi input.",
      continuousTestingTitle: "Test continui",
      continuousTestingText:
        "Il nostro toolkit è rigorosamente testato per garantire che i casi limite (come valori zero o input non validi) vengano gestiti correttamente senza arresti anomali.",
      editorialGuidelinesTitle: "Linee guida editoriali",
      editorialGuidelinesText:
        "Ogni pagina dello strumento è progettata per essere autoesplicativa. Diamo priorità all'usabilità e alle istruzioni chiare rispetto alle interfacce disordinate. Se un'equazione ha dei limiti (come il fatto che il metodo Navy per il grasso corporeo è una stima), lo annotiamo chiaramente sulla pagina dello strumento.",
      disclaimer:
        "Disclaimer: gli strumenti e i calcolatori presenti in questo sito Web sono solo a scopo informativo ed educativo. Non costituiscono consulenza finanziaria o medica professionale. Consultare sempre un professionista qualificato prima di prendere decisioni importanti sulla salute o sulle finanze.",
      teamTitle: "Chi siamo",
      teamText:
        "Questo sito è gestito da [TODO: Your Company Name / Your Name]. Ci dedichiamo a fornire strumenti di alta qualità al pubblico. Se devi contattarci, consulta la nostra pagina Contatti.",
    },
    Contact: {
      title: "Contattaci",
      description:
        "Ci piacerebbe avere tue notizie. Che tu abbia una domanda, una richiesta di funzionalità o abbia trovato un bug, faccelo sapere!",
      formName: "Nome",
      formEmail: "Email",
      formSubject: "Oggetto",
      formMessage: "Messaggio",
      formSubmit: "Invia Messaggio",
      emailUs: "Inviaci un'e-mail",
      emailAddress: "[TODO: Your Email Address]",
      responseTime: "Di solito rispondiamo entro 24-48 ore.",
      successMessage: "Grazie! Il tuo messaggio è stato inviato.",
      errorMessage: "Qualcosa è andato storto. Riprova più tardi.",
      formNamePlaceholder: "Mario Rossi",
      formEmailPlaceholder: "mario@example.com",
      formSubjectPlaceholder: "Come possiamo aiutarti?",
      formMessagePlaceholder: "Scrivi qui il tuo messaggio...",
    },
    Privacy: {
      title: "Informativa sulla Privacy",
      lastUpdated: "Ultimo aggiornamento: 29 settembre 2026",
      intro:
        "Su Aftara Tools, la tua privacy è la nostra massima priorità. Questa Informativa sulla Privacy delinea come gestiamo (ed esplicitamente NON gestiamo) i tuoi dati personali.",
      dataCollectionTitle: "Nessuna Raccolta Dati",
      dataCollectionText:
        "Non raccogliamo dati personali inutilmente. I calcoli avvengono localmente. Tuttavia, durante l'utilizzo del nostro sito, i dati di connessione di base e i cookie possono essere utilizzati da noi e dai nostri partner terzi come descritto di seguito.",
      analyticsTitle: "Analisi e Tracciamento",
      analyticsText:
        "Potremmo utilizzare analisi anonimizzate e rispettose della privacy per comprendere i modelli di traffico generali (come quali strumenti sono i più popolari). Questi dati non possono essere ricondotti a singoli utenti e non utilizzano cookie di tracciamento intrusivi.",
      thirdPartyTitle: "Fornitori di terze parti e Google AdSense",
      thirdPartyText:
        "I fornitori di terze parti, incluso Google, utilizzano i cookie per pubblicare annunci in base alle tue precedenti visite a questo sito Web o ad altri siti Web. L'utilizzo dei cookie pubblicitari da parte di Google consente a Google e ai suoi partner di pubblicare annunci per te in base alla tua visita ai nostri siti e/o ad altri siti su Internet.",
      contactUs:
        "In caso di domande su questa Informativa sulla Privacy, contattaci.",
      optOutTitle: "Rinuncia agli annunci personalizzati",
      optOutText:
        "Puoi rinunciare alla pubblicità personalizzata visitando le Impostazioni annunci Google (https://myadcenter.google.com/). In alternativa, puoi rinunciare all'utilizzo dei cookie da parte di alcuni fornitori di terze parti per la pubblicità personalizzata visitando www.aboutads.info.",
      userRightsTitle: "I Tuoi Diritti sulla Privacy (GDPR e CCPA)",
      userRightsText:
        "A seconda della tua posizione, potresti avere diritti ai sensi del GDPR, del CCPA/CPRA o di leggi simili per accedere, eliminare o limitare il trattamento dei tuoi dati. Hai anche il diritto di opporti alla vendita o alla condivisione delle tue informazioni personali. Usa il link 'Impostazioni privacy' nel piè di pagina per gestire il tuo consenso.",
      childrenTitle: "Privacy dei Bambini",
      childrenText:
        "I nostri servizi non sono diretti a bambini di età inferiore a 13 anni e non raccogliamo consapevolmente informazioni personali da bambini.",
      dataRetentionTitle: "Conservazione dei Dati",
      dataRetentionText:
        "Tutti i registri di connessione temporanei conservati dai nostri provider di hosting vengono conservati solo per il tempo necessario per scopi operativi e di sicurezza.",
    },
    Terms: {
      title: "Termini di Servizio",
      lastUpdated: "Ultimo aggiornamento: 29 settembre 2026",
      intro:
        "Accedendo e utilizzando Aftara Tools, accetti di rispettare e di essere vincolato dai seguenti termini e condizioni d'uso.",
      noWarrantyTitle: "Nessuna Garanzia (Così Com'è)",
      noWarrantyText:
        "Tutti gli strumenti, calcolatori e le informazioni su questo sito Web sono forniti \"così come sono\" senza alcuna dichiarazione o garanzia, espressa o implicita. Non forniamo alcuna garanzia in merito all'accuratezza, all'affidabilità o alla completezza dei risultati generati.",
      liabilityTitle: "Limitazione di Responsabilità",
      liabilityText:
        "In nessun caso Aftara Tools sarà responsabile per danni speciali, diretti, indiretti, consequenziali o incidentali o per qualsiasi danno derivante da o in connessione con l'uso dei nostri strumenti. Ciò include perdite finanziarie o decisioni mediche prese in base ai nostri calcolatori.",
      acceptableUseTitle: "Uso Accettabile",
      acceptableUseText:
        "Accetti di utilizzare i nostri strumenti solo per scopi leciti. Non devi tentare di eseguire scraping, DDoS o altrimenti interrompere il servizio o le reti connesse a Aftara Tools.",
      modificationsTitle: "Modifiche",
      modificationsText:
        "Ci riserviamo il diritto di rivedere questi termini di servizio in qualsiasi momento senza preavviso. Utilizzando questo sito Web, accetti di essere vincolato dalla versione corrente di questi termini.",
    },
    Cookie: {
      title: "Informativa sui Cookie",
      lastUpdated: "Ultimo aggiornamento: 29 settembre 2026",
      intro:
        "Questa Informativa sui cookie spiega cosa sono i cookie e come li utilizziamo. Dovresti leggere questa informativa in modo da poter comprendere quale tipo di cookie utilizziamo, o le informazioni che raccogliamo utilizzando i cookie e come tali informazioni vengono utilizzate.",
      whatAreCookiesTitle: "Cosa sono i Cookie?",
      whatAreCookiesText:
        "I cookie sono piccoli file di testo che vengono inseriti sul tuo computer o dispositivo mobile dai siti web che visiti. Sono ampiamente utilizzati per far funzionare i siti web o farli funzionare in modo più efficiente, nonché per fornire informazioni di reporting.",
      howWeUseCookiesTitle: "Come Usiamo i Cookie",
      howWeUseCookiesText:
        "Utilizziamo i cookie per le funzionalità essenziali, il salvataggio delle tue preferenze e per fornire annunci pubblicitari pertinenti tramite fornitori terzi come Google.",
      noTrackingTitle: "Cookie Pubblicitari di Terze Parti",
      noTrackingText:
        "Utilizziamo Google AdSense per finanziare i nostri strumenti gratuiti. Questi fornitori terzi utilizzano i cookie per pubblicare annunci personalizzati. Puoi gestire le tue preferenze in qualsiasi momento utilizzando il link Impostazioni privacy nel nostro piè di pagina.",
      managingCookiesTitle: "Gestione dei Cookie",
      managingCookiesText:
        "Puoi controllare e/o eliminare i cookie come desideri. Puoi eliminare tutti i cookie che sono già presenti sul tuo computer e puoi impostare la maggior parte dei browser per impedire che vengano inseriti.",
    },
    Disclaimer: {
      title: "Disclaimer",
      lastUpdated: "Ultimo aggiornamento: 29 settembre 2026",
      intro:
        "Le informazioni e gli strumenti forniti su Aftara Tools sono solo a scopo informativo ed educativo generale.",
      accuracyTitle: "Accuratezza Generale",
      accuracyText:
        "Sebbene ci sforziamo di mantenere aggiornati e corretti i nostri calcolatori e convertitori, non forniamo dichiarazioni o garanzie di alcun tipo, esplicite o implicite, in merito alla completezza, accuratezza, affidabilità o idoneità degli strumenti.",
      medicalTitle: "Disclaimer Medico e Sanitario",
      medicalText:
        "Strumenti come i calcolatori di BMI, Calorie, Macro, Grasso corporeo e Assunzione di acqua forniscono stime basate su formule standard. NON sostituiscono la consulenza, la diagnosi o il trattamento medico professionale. Chiedi sempre il parere del tuo medico o di un altro fornitore di servizi sanitari qualificato.",
      financialTitle: "Disclaimer Finanziario",
      financialText:
        "I calcolatori relativi a prestiti, mutui, EMI, investimenti, tasse e stipendio sono solo a scopo illustrativo. Non costituiscono consulenza finanziaria. I tassi, le tasse e i termini effettivi varieranno in base al tuo istituto specifico e alle leggi regionali.",
      legalTitle: "Variazioni Legali e Regionali",
      legalText:
        "Le formule potrebbero non riflettere le precise norme legali o fiscali nella tua specifica giurisdizione. Consulta sempre un professionista certificato nella tua zona prima di prendere decisioni finanziarie o legali vincolanti.",
    },
  },
  ja: {
    About: {
      title: "私たちと方法論について",
      description:
        "Aftara Toolsへようこそ。ここは、プレミアムなオンライン計算機と開発者向けユーティリティの無料リソースです。",
      missionTitle: "私たちの使命",
      missionText:
        "私たちの使命は、日常的なタスクに対して、高速で信頼性が高く、プライバシーを尊重するツールを提供することです。JWTをエンコードする必要がある開発者、マルチの量を計算する住宅所有者、または単に割引額を調べようとしている人であっても、私たちはあなたのために堅牢なツールを構築しました。",
      methodologyTitle: "私たちの方法論",
      methodologyIntro:
        "私たちは、特に金融や健康に関連するツール（あなたのお金やあなたの人生に関するトピック）については、透明性と正確性を信じています。私たちのツールが信頼できるものであることを保証する方法は次のとおりです。",
      standardizedFormulasTitle: "標準化された数式",
      standardizedFormulasText:
        "すべての金融計算機（ROI、住宅ローン、ローンなど）は、業界標準の償却および複利の公式を使用しています。",
      medicalGuidelinesTitle: "医療ガイドライン",
      medicalGuidelinesText:
        "健康計算機（BMIやBMRなど）は、代謝率のためのミフリン・セント・ジェオール方程式や、BMIのための標準的なWHO分類など、世界的に認められた方程式を使用しています。",
      privacyFirstTitle: "プライバシー第一",
      privacyFirstText:
        "あなたのデータがブラウザから離れることはありません。すべての計算、ハッシュ化、変換は、JavaScriptを介してデバイス上でローカルに行われます。私たちはあなたの入力を保存または送信しません。",
      continuousTestingTitle: "継続的なテスト",
      continuousTestingText:
        "私たちのツールキットは、エッジケース（ゼロ値や無効な入力など）がクラッシュすることなく適切に処理されることを保証するために、厳密にテストされています。",
      editorialGuidelinesTitle: "編集ガイドライン",
      editorialGuidelinesText:
        "各ツールページは、自己説明的になるように設計されています。私たちは、乱雑なインターフェースよりも使いやすさと明確な指示を優先します。方程式に制限がある場合（海軍の体脂肪測定法が推定値であるなど）、ツールページに明確に記載しています。",
      disclaimer:
        "免責事項：このウェブサイト上のツールと計算機は、情報提供および教育目的のみを目的としています。専門的な財政的または医学的アドバイスを構成するものではありません。重要な健康または財政上の決定を下す前に、必ず資格のある専門家に相談してください。",
      teamTitle: "私たちは誰か",
      teamText:
        "このサイトは[TODO: Your Company Name / Your Name]によって運営されています。私たちは一般の人々に高品質のツールを提供することに専念しています。お問い合わせが必要な場合は、お問い合わせページをご覧ください。",
    },
    Contact: {
      title: "お問い合わせ",
      description:
        "ご連絡をお待ちしております。質問がある場合、機能のリクエストがある場合、またはバグを見つけた場合は、お知らせください！",
      formName: "名前",
      formEmail: "メールアドレス",
      formSubject: "件名",
      formMessage: "メッセージ",
      formSubmit: "メッセージを送信",
      emailUs: "メールでお問い合わせ",
      emailAddress: "[TODO: Your Email Address]",
      responseTime: "通常、24〜48時間以内に返信いたします。",
      successMessage: "ありがとうございます！メッセージが送信されました。",
      errorMessage: "問題が発生しました。後でもう一度お試しください。",
      formNamePlaceholder: "山田 太郎",
      formEmailPlaceholder: "taro@example.com",
      formSubjectPlaceholder: "どのようなご用件でしょうか？",
      formMessagePlaceholder: "ここにメッセージを書いてください...",
    },
    Privacy: {
      title: "プライバシーポリシー",
      lastUpdated: "最終更新日：2026年9月29日",
      intro:
        "Aftara Toolsでは、あなたのプライバシーが私たちの最優先事項です。このプライバシーポリシーは、私たちがあなたの個人データをどのように取り扱うか（そして明示的にどのように取り扱わないか）の概要を説明します。",
      dataCollectionTitle: "データ収集なし",
      dataCollectionText:
        "私たちは不必要に個人データを収集しません。計算はローカルで行われます。ただし、私たちのサイトを使用する場合、以下に説明するように、私たちおよび第三者のパートナーによって基本的な接続データとCookieが使用される場合があります。",
      analyticsTitle: "分析とトラッキング",
      analyticsText:
        "私たちは、一般的なトラフィックパターン（どのツールが最も人気があるかなど）を理解するために、プライバシーに配慮した匿名化された分析を使用する場合があります。このデータは個々のユーザーまで追跡することはできず、邪魔なトラッキングCookieは使用しません。",
      thirdPartyTitle: "サードパーティベンダーおよびGoogle AdSense",
      thirdPartyText:
        "Googleを含むサードパーティベンダーは、Cookieを使用して、このウェブサイトや他のウェブサイトへの以前の訪問に基づいて広告を配信します。Googleによる広告Cookieの使用により、Googleとそのパートナーは、当社のサイトやインターネット上の他のサイトへの訪問に基づいて、ユーザーに広告を配信できます。",
      contactUs:
        "このプライバシーポリシーについてご質問がある場合は、お問い合わせください。",
      optOutTitle: "パーソナライズド広告のオプトアウト",
      optOutText:
        "Google広告設定（https://myadcenter.google.com/）にアクセスして、パーソナライズド広告をオプトアウトできます。または、www.aboutads.infoにアクセスして、パーソナライズド広告用のCookieの一部のサードパーティベンダーの使用をオプトアウトすることもできます。",
      userRightsTitle: "あなたのプライバシー権（GDPRおよびCCPA）",
      userRightsText:
        "お住まいの地域によっては、GDPR、CCPA / CPRA、または同様の法律に基づいて、データへのアクセス、削除、または処理の制限を行う権利がある場合があります。また、個人情報の販売または共有をオプトアウトする権利もあります。同意を管理するには、フッターの「プライバシー設定」リンクを使用してください。",
      childrenTitle: "子供のプライバシー",
      childrenText:
        "私たちのサービスは13歳未満の子供向けではなく、子供から故意に個人情報を収集することはありません。",
      dataRetentionTitle: "データ保持",
      dataRetentionText:
        "ホスティングプロバイダーによって保持される一時的な接続ログは、セキュリティおよび運用上の目的で必要な期間のみ保持されます。",
    },
    Terms: {
      title: "利用規約",
      lastUpdated: "最終更新日：2026年9月29日",
      intro:
        "Aftara Toolsにアクセスして使用することにより、以下の利用規約に同意し、拘束されるものとします。",
      noWarrantyTitle: "保証なし（現状のまま）",
      noWarrantyText:
        "このウェブサイト上のすべてのツール、計算機、および情報は、明示または黙示を問わず、いかなる表明または保証もなしに「現状のまま」提供されます。私たちは、生成された結果の正確性、信頼性、または完全性に関していかなる保証も行いません。",
      liabilityTitle: "責任の制限",
      liabilityText:
        "いかなる場合も、Aftara Toolsは、私たちのツールの使用から生じる、または私たちのツールの使用に関連して生じる、特別、直接的、間接的、結果的、または偶発的な損害、またはあらゆる損害について責任を負わないものとします。これには、経済的損失や計算機に基づいて下された医学的決定が含まれます。",
      acceptableUseTitle: "許容される使用",
      acceptableUseText:
        "あなたは、合法的目的にのみ私たちのツールを使用することに同意します。Aftara Toolsに接続されているサービスまたはネットワークをスクレイピング、DDoS攻撃、またはその他の方法で混乱させようとしてはなりません。",
      modificationsTitle: "変更",
      modificationsText:
        "私たちは、事前の通知なしにいつでもこれらの利用規約を改訂する権利を留保します。このウェブサイトを使用することにより、これらの規約の当時の最新バージョンに拘束されることに同意したものとみなされます。",
    },
    Cookie: {
      title: "Cookieポリシー",
      lastUpdated: "最終更新日：2026年9月29日",
      intro:
        "このCookieポリシーは、Cookieとは何か、および私たちがCookieをどのように使用するかを説明します。私たちがどのようなCookieを使用しているか、またはCookieを使用して収集する情報、およびその情報がどのように使用されるかを理解できるように、このポリシーをお読みください。",
      whatAreCookiesTitle: "Cookieとは何ですか？",
      whatAreCookiesText:
        "Cookieは、アクセスしたウェブサイトによってコンピューターまたはモバイルデバイスに配置される小さなテキストファイルです。それらは、ウェブサイトを機能させるため、またはより効率的に機能させるため、ならびにレポート情報を提供するために広く使用されています。",
      howWeUseCookiesTitle: "私たちがCookieをどのように使用するか",
      howWeUseCookiesText:
        "私たちは、不可欠な機能、好みの保存、およびGoogleなどのサードパーティベンダーを介した関連広告の配信にCookieを使用します。",
      noTrackingTitle: "サードパーティの広告Cookie",
      noTrackingText:
        "私たちは無料のツールに資金を提供するためにGoogle AdSenseを使用しています。これらのサードパーティベンダーは、パーソナライズされた広告を配信するためにCookieを使用します。フッターにあるプライバシー設定リンクを使用して、いつでも好みを管理できます。",
      managingCookiesTitle: "Cookieの管理",
      managingCookiesText:
        "必要に応じてCookieを制御および/または削除できます。すでにコンピューターにあるすべてのCookieを削除でき、ほとんどのブラウザーでCookieが配置されないように設定できます。",
    },
    Disclaimer: {
      title: "免責事項",
      lastUpdated: "最終更新日：2026年9月29日",
      intro:
        "Aftara Toolsで提供される情報とツールは、一般的な情報提供および教育目的のみを目的としています。",
      accuracyTitle: "一般的な正確性",
      accuracyText:
        "私たちは、計算機とコンバーターを最新かつ正確に保つよう努めていますが、ツールの完全性、正確性、信頼性、または適合性について、明示または黙示を問わず、いかなる種類の表明または保証も行いません。",
      medicalTitle: "医療および健康に関する免責事項",
      medicalText:
        "BMI、カロリー、マクロ、体脂肪、水分摂取量などのツールは、標準的な数式に基づいた推定値を提供します。これらは、専門的な医学的アドバイス、診断、または治療の代わりになるものではありません。常に医師または他の資格のある医療提供者のアドバイスを求めてください。",
      financialTitle: "財務に関する免責事項",
      financialText:
        "ローン、住宅ローン、EMI、投資、税金、給与に関する計算機は、説明のみを目的としています。これらは財務アドバイスを構成するものではありません。実際の金利、税金、および条件は、特定の機関や地域の法律によって異なります。",
      legalTitle: "法的および地域的な違い",
      legalText:
        "公式は、特定の管轄区域における正確な法的または税務上の規則を反映していない場合があります。拘束力のある財政的または法的決定を下す前に、必ずお住まいの地域の認定専門家に相談してください。",
    },
  },
  ko: {
    About: {
      title: "회사 소개 및 방법론",
      description:
        "프리미엄 온라인 계산기 및 개발자 유틸리티를 위한 무료 리소스인 Aftara Tools에 오신 것을 환영합니다.",
      missionTitle: "우리의 임무",
      missionText:
        "우리의 임무는 일상적인 작업을 위해 빠르고 안정적이며 개인정보를 존중하는 도구를 제공하는 것입니다. JWT를 인코딩해야 하는 개발자이든, 뿌리덮개 양을 계산하는 주택 소유자이든, 아니면 단순히 할인을 알아내려는 사람이든 관계없이 귀하를 위한 강력한 도구를 구축했습니다.",
      methodologyTitle: "우리의 방법론",
      methodologyIntro:
        "우리는 투명성과 정확성을 믿으며, 특히 금융 및 건강 관련 도구(Your Money or Your Life 주제)의 경우 더욱 그렇습니다. 우리 도구의 신뢰성을 보장하는 방법은 다음과 같습니다.",
      standardizedFormulasTitle: "표준화된 공식",
      standardizedFormulasText:
        "모든 재무 계산기(예: ROI, 모기지, 대출)는 업계 표준 상각 및 복리 공식을 사용합니다.",
      medicalGuidelinesTitle: "의학적 가이드라인",
      medicalGuidelinesText:
        "건강 계산기(예: BMI 및 BMR)는 대사율에 대한 Mifflin-St Jeor 방정식 및 BMI에 대한 표준 WHO 분류와 같이 전 세계적으로 인정받는 방정식을 사용합니다.",
      privacyFirstTitle: "개인 정보 보호 최우선",
      privacyFirstText:
        "귀하의 데이터는 브라우저를 벗어나지 않습니다. 모든 계산, 해싱 및 변환은 JavaScript를 통해 기기에서 로컬로 이루어집니다. 우리는 귀하의 입력을 저장하거나 전송하지 않습니다.",
      continuousTestingTitle: "지속적인 테스트",
      continuousTestingText:
        "당사의 도구 키트는 엣지 케이스(예: 0값 또는 유효하지 않은 입력)가 중단 없이 원활하게 처리되도록 엄격하게 테스트되었습니다.",
      editorialGuidelinesTitle: "편집 지침",
      editorialGuidelinesText:
        "모든 도구 페이지는 자명하도록 설계되었습니다. 복잡한 인터페이스보다 유용성과 명확한 지침을 우선시합니다. 방정식에 한계가 있는 경우(예: 해군 체지방 방법이 추정치인 경우) 도구 페이지에 이를 명확히 기록합니다.",
      disclaimer:
        "면책 조항: 이 웹사이트의 도구와 계산기는 정보 제공 및 교육 목적으로만 제공됩니다. 전문적인 재정적 또는 의학적 조언을 구성하지 않습니다. 중요한 건강 또는 재정적 결정을 내리기 전에 항상 자격을 갖춘 전문가와 상담하십시오.",
      teamTitle: "우리는 누구인가",
      teamText:
        "이 사이트는 [TODO: Your Company Name / Your Name]에서 운영합니다. 우리는 대중에게 고품질의 도구를 제공하기 위해 최선을 다하고 있습니다. 저희에게 연락해야 할 경우 연락처 페이지를 참조하십시오.",
    },
    Contact: {
      title: "문의하기",
      description:
        "여러분의 의견을 듣고 싶습니다. 질문이 있거나, 기능 요청이 있거나, 버그를 발견한 경우 저희에게 알려주세요!",
      formName: "이름",
      formEmail: "이메일",
      formSubject: "주제",
      formMessage: "메시지",
      formSubmit: "메시지 보내기",
      emailUs: "이메일 보내기",
      emailAddress: "[TODO: Your Email Address]",
      responseTime: "일반적으로 24~48시간 이내에 응답합니다.",
      successMessage: "감사합니다! 메시지가 전송되었습니다.",
      errorMessage: "문제가 발생했습니다. 나중에 다시 시도해 주세요.",
      formNamePlaceholder: "홍길동",
      formEmailPlaceholder: "hong@example.com",
      formSubjectPlaceholder: "무엇을 도와드릴까요?",
      formMessagePlaceholder: "여기에 메시지를 쓰세요...",
    },
    Privacy: {
      title: "개인정보 보호정책",
      lastUpdated: "최근 업데이트: 2026년 9월 29일",
      intro:
        "Aftara Tools에서는 개인정보 보호를 최우선으로 생각합니다. 이 개인정보 보호정책은 귀하의 개인 데이터를 처리하는(그리고 명시적으로 처리하지 않는) 방법을 간략하게 설명합니다.",
      dataCollectionTitle: "데이터 수집 없음",
      dataCollectionText:
        "불필요하게 개인정보를 수집하지 않습니다. 계산은 로컬에서 이루어집니다. 그러나 당사 사이트를 사용할 때 아래 설명된 대로 당사와 타사 파트너가 기본 연결 데이터 및 쿠키를 사용할 수 있습니다.",
      analyticsTitle: "분석 및 추적",
      analyticsText:
        "당사는 일반적인 트래픽 패턴(예: 가장 인기 있는 도구)을 이해하기 위해 개인정보를 보호하는 익명화된 분석을 사용할 수 있습니다. 이 데이터는 개별 사용자에게 다시 추적할 수 없으며 방해가 되는 추적 쿠키를 사용하지 않습니다.",
      thirdPartyTitle: "제3자 공급업체 및 Google AdSense",
      thirdPartyText:
        "Google을 포함한 제3자 공급업체는 이 웹사이트나 다른 웹사이트에 대한 귀하의 이전 방문을 기반으로 광고를 게재하기 위해 쿠키를 사용합니다. Google의 광고 쿠키 사용을 통해 Google 및 파트너는 귀하가 당사 사이트 및/또는 인터넷상의 다른 사이트를 방문한 것을 기반으로 귀하에게 광고를 게재할 수 있습니다.",
      contactUs:
        "이 개인정보 보호정책에 대해 질문이 있는 경우 당사에 문의하십시오.",
      optOutTitle: "맞춤형 광고 옵트아웃",
      optOutText:
        "Google 광고 설정(https://myadcenter.google.com/)을 방문하여 맞춤형 광고를 선택 해제할 수 있습니다. 또는 www.aboutads.info를 방문하여 맞춤형 광고에 대한 일부 제3자 공급업체의 쿠키 사용을 선택 해제할 수 있습니다.",
      userRightsTitle: "귀하의 개인정보 보호 권리(GDPR 및 CCPA)",
      userRightsText:
        "거주 지역에 따라 GDPR, CCPA/CPRA 또는 유사한 법률에 따라 데이터에 액세스, 삭제 또는 처리 제한을 요구할 권리가 있을 수 있습니다. 또한 개인 정보 판매 또는 공유를 거부할 권리도 있습니다. 동의를 관리하려면 바닥글의 '개인정보 설정' 링크를 사용하십시오.",
      childrenTitle: "아동의 개인정보",
      childrenText:
        "당사의 서비스는 13세 미만 아동을 대상으로 하지 않으며 아동의 개인 정보를 고의로 수집하지 않습니다.",
      dataRetentionTitle: "데이터 보유",
      dataRetentionText:
        "호스팅 제공업체에서 보관하는 임시 연결 로그는 보안 및 운영 목적에 필요한 기간 동안만 보존됩니다.",
    },
    Terms: {
      title: "서비스 약관",
      lastUpdated: "최근 업데이트: 2026년 9월 29일",
      intro:
        "Aftara Tools에 액세스하고 사용함으로써 귀하는 다음 이용 약관을 준수하고 이에 구속되는 데 동의하게 됩니다.",
      noWarrantyTitle: "보증 없음(있는 그대로)",
      noWarrantyText:
        '이 웹사이트의 모든 도구, 계산기 및 정보는 명시적이든 묵시적이든 어떠한 진술이나 보증 없이 "있는 그대로" 제공됩니다. 생성된 결과의 정확성, 신뢰성 또는 완전성에 대해서는 보장하지 않습니다.',
      liabilityTitle: "책임의 제한",
      liabilityText:
        "어떠한 경우에도 Aftara Tools는 특별, 직접, 간접, 결과적 또는 부수적 손해 또는 당사 도구의 사용과 관련하여 발생하는 모든 손해에 대해 책임을 지지 않습니다. 여기에는 계산기를 기반으로 한 재정적 손실이나 의학적 결정이 포함됩니다.",
      acceptableUseTitle: "허용되는 사용",
      acceptableUseText:
        "당사 도구는 합법적인 목적으로만 사용하는 데 동의합니다. Aftara Tools에 연결된 서비스 또는 네트워크를 스크랩, DDoS 또는 기타 방식으로 방해하려고 시도해서는 안 됩니다.",
      modificationsTitle: "수정",
      modificationsText:
        "당사는 언제든지 사전 통지 없이 본 서비스 약관을 수정할 권리를 보유합니다. 이 웹사이트를 사용함으로써 귀하는 당시 유효한 약관 버전에 구속되는 데 동의하는 것입니다.",
    },
    Cookie: {
      title: "쿠키 정책",
      lastUpdated: "최근 업데이트: 2026년 9월 29일",
      intro:
        "이 쿠키 정책은 쿠키가 무엇이며 당사가 쿠키를 사용하는 방법을 설명합니다. 이 정책을 읽어 당사가 사용하는 쿠키의 종류 또는 쿠키를 사용하여 수집하는 정보 및 해당 정보가 사용되는 방식을 이해해야 합니다.",
      whatAreCookiesTitle: "쿠키란 무엇입니까?",
      whatAreCookiesText:
        "쿠키는 방문하는 웹사이트에서 컴퓨터나 모바일 장치에 저장하는 작은 텍스트 파일입니다. 웹사이트가 작동하도록 하거나 더 효율적으로 작동하도록 하고 보고 정보를 제공하는 데 널리 사용됩니다.",
      howWeUseCookiesTitle: "쿠키 사용 방법",
      howWeUseCookiesText:
        "우리는 필수 기능, 환경설정 저장, Google과 같은 타사 공급업체를 통한 관련 광고 제공을 위해 쿠키를 사용합니다.",
      noTrackingTitle: "타사 광고 쿠키",
      noTrackingText:
        "우리는 무료 도구에 자금을 지원하기 위해 Google AdSense를 사용합니다. 이러한 제3자 공급업체는 쿠키를 사용하여 맞춤형 광고를 제공합니다. 바닥글에 있는 개인정보 보호 설정 링크를 사용하여 언제든지 기본 설정을 관리할 수 있습니다.",
      managingCookiesTitle: "쿠키 관리",
      managingCookiesText:
        "원하는 대로 쿠키를 제어하거나 삭제할 수 있습니다. 이미 컴퓨터에 있는 모든 쿠키를 삭제할 수 있으며 쿠키가 저장되지 않도록 대부분의 브라우저를 설정할 수 있습니다.",
    },
    Disclaimer: {
      title: "면책 조항",
      lastUpdated: "최근 업데이트: 2026년 9월 29일",
      intro:
        "Aftara Tools에서 제공하는 정보 및 도구는 일반적인 정보 제공 및 교육 목적으로만 사용됩니다.",
      accuracyTitle: "일반적 정확도",
      accuracyText:
        "우리는 계산기 및 변환기를 최신 상태로 유지하고 정확하게 유지하기 위해 노력하지만 도구의 완전성, 정확성, 신뢰성 또는 적합성에 대해 명시적이든 묵시적이든 어떠한 종류의 진술이나 보증도 하지 않습니다.",
      medicalTitle: "의료 및 건강 면책 조항",
      medicalText:
        "BMI, 칼로리, 매크로, 체지방, 물 섭취량 계산기와 같은 도구는 표준 공식을 기반으로 한 추정치를 제공합니다. 전문적인 의학적 조언, 진단 또는 치료를 대체할 수 없습니다. 항상 의사나 자격을 갖춘 의료인의 조언을 구하십시오.",
      financialTitle: "재무 면책 조항",
      financialText:
        "대출, 모기지, EMI, 투자, 세금, 급여에 관한 계산기는 설명 목적으로만 사용됩니다. 재정적 조언을 구성하지 않습니다. 실제 요율, 세금 및 조건은 특정 기관 및 지역 법률에 따라 다릅니다.",
      legalTitle: "법률 및 지역적 변형",
      legalText:
        "공식은 귀하의 특정 관할권의 정확한 법률 또는 세금 규칙을 반영하지 않을 수 있습니다. 구속력 있는 재정적 또는 법적 결정을 내리기 전에 항상 해당 지역의 공인 전문가와 상담하십시오.",
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
