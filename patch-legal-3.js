const fs = require("fs");
const path = require("path");

const translations = {
  nl: {
    About: {
      title: "Over Ons & Methodologie",
      description:
        "Welkom bij Aftara Tools, uw gratis bron voor online rekenmachines en tools.",
      missionTitle: "Onze Missie",
      missionText:
        "Onze missie is om snelle en betrouwbare tools te bieden voor alledaagse taken.",
      methodologyTitle: "Onze Methodologie",
      methodologyIntro: "Wij geloven in transparantie en nauwkeurigheid.",
      standardizedFormulasTitle: "Gestandaardiseerde Formules",
      standardizedFormulasText:
        "Alle financiële rekenmachines gebruiken industriestandaard formules.",
      medicalGuidelinesTitle: "Medische Richtlijnen",
      medicalGuidelinesText:
        "Gezondheidscalculators gebruiken wereldwijd erkende vergelijkingen.",
      privacyFirstTitle: "Privacy Voorop",
      privacyFirstText:
        "Uw gegevens verlaten uw browser nooit. Alles wordt lokaal berekend.",
      continuousTestingTitle: "Continu Testen",
      continuousTestingText:
        "Onze tools worden grondig getest op wiskundige nauwkeurigheid.",
      editorialGuidelinesTitle: "Redactionele Richtlijnen",
      editorialGuidelinesText:
        "Elke pagina is ontworpen om intuïtief en gebruiksvriendelijk te zijn.",
      disclaimer:
        "Disclaimer: Onze tools zijn uitsluitend voor educatieve doeleinden en vormen geen professioneel advies.",
      teamTitle: "Wie Wij Zijn",
      teamText:
        "Deze site wordt beheerd door ons team. Zie onze contactpagina om ons te bereiken.",
    },
    Privacy: {
      title: "Privacybeleid",
      lastUpdated: "Laatst bijgewerkt: 29 september 2026",
      intro:
        "Uw privacy is onze topprioriteit. Hier is hoe we met uw gegevens omgaan.",
      dataCollectionTitle: "Geen Gegevensverzameling",
      dataCollectionText:
        "Wij verzamelen niet onnodig persoonlijke gegevens. Berekeningen gebeuren lokaal.",
      analyticsTitle: "Analytica",
      analyticsText:
        "We kunnen privacyvriendelijke analyses gebruiken om verkeer te begrijpen.",
      thirdPartyTitle: "Derden & Google AdSense",
      thirdPartyText:
        "Externe leveranciers, waaronder Google, gebruiken cookies om advertenties weer te geven.",
      contactUs: "Als u vragen heeft, neem dan contact met ons op.",
      optOutTitle: "Afmelden voor gepersonaliseerde advertenties",
      optOutText:
        "U kunt zich afmelden via de Google Advertentie-instellingen.",
      userRightsTitle: "Uw Rechten (GDPR & CCPA)",
      userRightsText:
        "U kunt uw toestemming beheren via de link in de voettekst.",
      childrenTitle: "Privacy van Kinderen",
      childrenText:
        "We verzamelen niet bewust informatie van kinderen onder de 13 jaar.",
      dataRetentionTitle: "Gegevensbewaring",
      dataRetentionText:
        "Tijdelijke verbindingslogboeken worden alleen om veiligheidsredenen bewaard.",
    },
    Terms: {
      title: "Servicevoorwaarden",
      lastUpdated: "Laatst bijgewerkt: 29 september 2026",
      intro:
        "Door Aftara Tools te gebruiken, gaat u akkoord met deze voorwaarden.",
      noWarrantyTitle: "Geen Garantie",
      noWarrantyText: "Alle tools worden 'as is' geleverd zonder garanties.",
      liabilityTitle: "Aansprakelijkheidsbeperking",
      liabilityText:
        "Aftara Tools is niet aansprakelijk voor schade door het gebruik van onze tools.",
      acceptableUseTitle: "Acceptabel Gebruik",
      acceptableUseText:
        "U stemt ermee in onze tools alleen voor legale doeleinden te gebruiken.",
      modificationsTitle: "Wijzigingen",
      modificationsText: "Wij kunnen deze voorwaarden op elk moment herzien.",
    },
    Cookie: {
      title: "Cookiebeleid",
      lastUpdated: "Laatst bijgewerkt: 29 september 2026",
      intro: "Dit beleid legt uit wat cookies zijn en hoe we ze gebruiken.",
      whatAreCookiesTitle: "Wat zijn Cookies?",
      whatAreCookiesText:
        "Cookies zijn kleine tekstbestanden die op uw apparaat worden geplaatst.",
      howWeUseCookiesTitle: "Hoe we cookies gebruiken",
      howWeUseCookiesText:
        "We gebruiken cookies voor essentiële functies en advertenties.",
      noTrackingTitle: "Advertentiecookies van Derden",
      noTrackingText:
        "Wij gebruiken Google AdSense. Beheer uw voorkeuren in de voettekst.",
      managingCookiesTitle: "Cookies Beheren",
      managingCookiesText:
        "U kunt cookies verwijderen of blokkeren via uw browser.",
    },
    Disclaimer: {
      title: "Disclaimer",
      lastUpdated: "Laatst bijgewerkt: 29 september 2026",
      intro:
        "De informatie op Aftara Tools is alleen voor algemene informatiedoeleinden.",
      accuracyTitle: "Algemene Nauwkeurigheid",
      accuracyText: "Wij garanderen de nauwkeurigheid van de resultaten niet.",
      medicalTitle: "Medische Disclaimer",
      medicalText:
        "Gezondheidscalculators vervangen geen professioneel medisch advies.",
      financialTitle: "Financiële Disclaimer",
      financialText: "Financiële calculators zijn geen financieel advies.",
      legalTitle: "Juridische Variaties",
      legalText:
        "Formules weerspiegelen mogelijk niet de exacte regels in uw regio.",
    },
  },
  pl: {
    About: {
      title: "O nas i metodologia",
      description:
        "Witamy w Aftara Tools, darmowym źródle kalkulatorów i narzędzi online.",
      missionTitle: "Nasza misja",
      missionText:
        "Naszą misją jest dostarczanie szybkich, niezawodnych i szanujących prywatność narzędzi.",
      methodologyTitle: "Nasza metodologia",
      methodologyIntro: "Wierzymy w przejrzystość i dokładność.",
      standardizedFormulasTitle: "Standaryzowane formuły",
      standardizedFormulasText:
        "Wszystkie kalkulatory finansowe wykorzystują standardowe wzory.",
      medicalGuidelinesTitle: "Wytyczne medyczne",
      medicalGuidelinesText:
        "Kalkulatory zdrowotne wykorzystują uznane na świecie równania.",
      privacyFirstTitle: "Prywatność przede wszystkim",
      privacyFirstText:
        "Twoje dane nigdy nie opuszczają przeglądarki. Wszystko odbywa się lokalnie.",
      continuousTestingTitle: "Ciągłe testowanie",
      continuousTestingText:
        "Nasze narzędzia są rygorystycznie testowane pod kątem dokładności.",
      editorialGuidelinesTitle: "Wytyczne redakcyjne",
      editorialGuidelinesText:
        "Każda strona jest zaprojektowana tak, aby była intuicyjna.",
      disclaimer:
        "Zastrzeżenie: Narzędzia służą wyłącznie celom informacyjnym.",
      teamTitle: "Kim jesteśmy",
      teamText:
        "Ta strona jest zarządzana przez nasz zespół. Skontaktuj się z nami poprzez stronę Kontakt.",
    },
    Privacy: {
      title: "Polityka prywatności",
      lastUpdated: "Ostatnia aktualizacja: 29 września 2026",
      intro:
        "Twoja prywatność jest naszym priorytetem. Oto jak postępujemy z danymi.",
      dataCollectionTitle: "Brak gromadzenia danych",
      dataCollectionText:
        "Nie gromadzimy niepotrzebnie danych osobowych. Obliczenia odbywają się lokalnie.",
      analyticsTitle: "Analityka",
      analyticsText:
        "Możemy wykorzystywać analitykę do zrozumienia ruchu drogowego.",
      thirdPartyTitle: "Zewnętrzni dostawcy i Google AdSense",
      thirdPartyText:
        "Dostawcy zewnętrzni, w tym Google, używają plików cookie do wyświetlania reklam.",
      contactUs: "Jeśli masz pytania, skontaktuj się z nami.",
      optOutTitle: "Rezygnacja z reklam spersonalizowanych",
      optOutText: "Możesz zrezygnować w ustawieniach reklam Google.",
      userRightsTitle: "Twoje prawa (GDPR i CCPA)",
      userRightsText: "Możesz zarządzać zgodą w stopce strony.",
      childrenTitle: "Prywatność dzieci",
      childrenText:
        "Nie gromadzimy świadomie informacji od dzieci poniżej 13 roku życia.",
      dataRetentionTitle: "Przechowywanie danych",
      dataRetentionText:
        "Tymczasowe logi są przechowywane tylko ze względów bezpieczeństwa.",
    },
    Terms: {
      title: "Warunki korzystania",
      lastUpdated: "Ostatnia aktualizacja: 29 września 2026",
      intro: "Korzystając z Aftara Tools, akceptujesz te warunki.",
      noWarrantyTitle: "Brak gwarancji",
      noWarrantyText:
        "Wszystkie narzędzia są udostępniane 'tak jak są' bez żadnych gwarancji.",
      liabilityTitle: "Ograniczenie odpowiedzialności",
      liabilityText:
        "Aftara Tools nie ponosi odpowiedzialności za szkody wynikające z użytkowania narzędzi.",
      acceptableUseTitle: "Dopuszczalne użytkowanie",
      acceptableUseText:
        "Zgadzasz się używać narzędzi wyłącznie w celach zgodnych z prawem.",
      modificationsTitle: "Modyfikacje",
      modificationsText:
        "Zastrzegamy sobie prawo do zmiany tych warunków w dowolnym momencie.",
    },
    Cookie: {
      title: "Polityka plików cookie",
      lastUpdated: "Ostatnia aktualizacja: 29 września 2026",
      intro: "Ta polityka wyjaśia, czym są pliki cookie i jak ich używamy.",
      whatAreCookiesTitle: "Czym są pliki cookie?",
      whatAreCookiesText:
        "Pliki cookie to małe pliki tekstowe umieszczane na Twoim urządzeniu.",
      howWeUseCookiesTitle: "Jak używamy plików cookie",
      howWeUseCookiesText:
        "Używamy plików cookie do podstawowych funkcji i reklam.",
      noTrackingTitle: "Reklamowe pliki cookie firm trzecich",
      noTrackingText:
        "Używamy Google AdSense. Możesz zarządzać preferencjami w stopce.",
      managingCookiesTitle: "Zarządzanie plikami cookie",
      managingCookiesText: "Możesz usuwać pliki cookie z przeglądarki.",
    },
    Disclaimer: {
      title: "Zastrzeżenie",
      lastUpdated: "Ostatnia aktualizacja: 29 września 2026",
      intro: "Informacje są przeznaczone wyłącznie do celów ogólnych.",
      accuracyTitle: "Ogólna dokładność",
      accuracyText: "Nie gwarantujemy dokładności wyników.",
      medicalTitle: "Zastrzeżenie medyczne",
      medicalText: "Kalkulatory zdrowotne nie zastępują porady lekarskiej.",
      financialTitle: "Zastrzeżenie finansowe",
      financialText: "Kalkulatory finansowe nie stanowią porady finansowej.",
      legalTitle: "Różnice prawne",
      legalText:
        "Formuły mogą nie odzwierciedlać dokładnych zasad w Twoim regionie.",
    },
  },
  pt: {
    About: {
      title: "Sobre Nós e Metodologia",
      description:
        "Bem-vindo ao Aftara Tools, seu recurso gratuito para calculadoras online.",
      missionTitle: "Nossa Missão",
      missionText:
        "Nossa missão é fornecer ferramentas rápidas, confiáveis e que respeitam a privacidade.",
      methodologyTitle: "Nossa Metodologia",
      methodologyIntro: "Acreditamos na transparência e precisão.",
      standardizedFormulasTitle: "Fórmulas Padronizadas",
      standardizedFormulasText:
        "Todas as calculadoras financeiras usam fórmulas padrão.",
      medicalGuidelinesTitle: "Diretrizes Médicas",
      medicalGuidelinesText:
        "Calculadoras de saúde usam equações reconhecidas globalmente.",
      privacyFirstTitle: "Privacidade em Primeiro Lugar",
      privacyFirstText:
        "Seus dados nunca saem do seu navegador. Tudo ocorre localmente.",
      continuousTestingTitle: "Testes Contínuos",
      continuousTestingText:
        "Nossas ferramentas são rigorosamente testadas para precisão.",
      editorialGuidelinesTitle: "Diretrizes Editoriais",
      editorialGuidelinesText: "Cada página é projetada para ser intuitiva.",
      disclaimer:
        "Aviso Legal: As ferramentas são apenas para fins educacionais e informativos.",
      teamTitle: "Quem Somos",
      teamText:
        "Este site é operado por nossa equipe. Visite a página de Contato para falar conosco.",
    },
    Privacy: {
      title: "Política de Privacidade",
      lastUpdated: "Última Atualização: 29 de setembro de 2026",
      intro: "Sua privacidade é nossa prioridade.",
      dataCollectionTitle: "Nenhuma Coleta de Dados",
      dataCollectionText:
        "Não coletamos dados pessoais desnecessários. Os cálculos são feitos localmente.",
      analyticsTitle: "Análises",
      analyticsText:
        "Podemos usar análises amigáveis à privacidade para entender o tráfego.",
      thirdPartyTitle: "Fornecedores e Google AdSense",
      thirdPartyText:
        "Fornecedores terceirizados, incluindo o Google, usam cookies para veicular anúncios.",
      contactUs: "Se você tiver dúvidas, entre em contato conosco.",
      optOutTitle: "Cancelamento de anúncios personalizados",
      optOutText:
        "Você pode cancelar anúncios nas Configurações de Anúncios do Google.",
      userRightsTitle: "Seus Direitos",
      userRightsText: "Você pode gerenciar seu consentimento no rodapé.",
      childrenTitle: "Privacidade Infantil",
      childrenText: "Não coletamos informações de crianças menores de 13 anos.",
      dataRetentionTitle: "Retenção de Dados",
      dataRetentionText: "Logs temporários são mantidos apenas para segurança.",
    },
    Terms: {
      title: "Termos de Serviço",
      lastUpdated: "Última Atualização: 29 de setembro de 2026",
      intro: "Ao usar o Aftara Tools, você concorda com estes termos.",
      noWarrantyTitle: "Sem Garantias",
      noWarrantyText: "Todas as ferramentas são fornecidas 'como estão'.",
      liabilityTitle: "Limitação de Responsabilidade",
      liabilityText:
        "Não nos responsabilizamos por danos decorrentes do uso das ferramentas.",
      acceptableUseTitle: "Uso Aceitável",
      acceptableUseText:
        "Você concorda em usar nossas ferramentas apenas para fins legais.",
      modificationsTitle: "Modificações",
      modificationsText: "Podemos revisar estes termos a qualquer momento.",
    },
    Cookie: {
      title: "Política de Cookies",
      lastUpdated: "Última Atualização: 29 de setembro de 2026",
      intro: "Esta política explica como usamos cookies.",
      whatAreCookiesTitle: "O que são Cookies?",
      whatAreCookiesText:
        "Cookies são pequenos arquivos de texto colocados no seu dispositivo.",
      howWeUseCookiesTitle: "Como Usamos os Cookies",
      howWeUseCookiesText: "Usamos cookies para funcionalidade e publicidade.",
      noTrackingTitle: "Cookies de Anúncios Terceirizados",
      noTrackingText:
        "Usamos o Google AdSense. Gerencie suas preferências no rodapé.",
      managingCookiesTitle: "Gerenciar Cookies",
      managingCookiesText: "Você pode remover cookies no seu navegador.",
    },
    Disclaimer: {
      title: "Aviso Legal",
      lastUpdated: "Última Atualização: 29 de setembro de 2026",
      intro: "As informações são apenas para fins gerais.",
      accuracyTitle: "Precisão Geral",
      accuracyText: "Não garantimos a precisão dos resultados.",
      medicalTitle: "Aviso Médico",
      medicalText:
        "As calculadoras não substituem conselhos médicos profissionais.",
      financialTitle: "Aviso Financeiro",
      financialText:
        "As calculadoras financeiras não são conselhos financeiros.",
      legalTitle: "Variações Legais",
      legalText: "As fórmulas podem não refletir regras exatas da sua região.",
    },
  },
  ru: {
    About: {
      title: "О нас и методологии",
      description:
        "Добро пожаловать на Aftara Tools, ваш бесплатный ресурс премиальных онлайн-калькуляторов.",
      missionTitle: "Наша миссия",
      missionText:
        "Наша миссия — предоставлять быстрые и надежные инструменты.",
      methodologyTitle: "Наша методология",
      methodologyIntro: "Мы верим в прозрачность и точность.",
      standardizedFormulasTitle: "Стандартизированные формулы",
      standardizedFormulasText:
        "Мы используем общепринятые финансовые формулы.",
      medicalGuidelinesTitle: "Медицинские руководства",
      medicalGuidelinesText:
        "Медицинские калькуляторы используют мировые уравнения.",
      privacyFirstTitle: "Конфиденциальность",
      privacyFirstText:
        "Ваши данные никогда не покидают браузер. Все вычисления происходят локально.",
      continuousTestingTitle: "Постоянное тестирование",
      continuousTestingText:
        "Наши инструменты проходят строгое тестирование на точность.",
      editorialGuidelinesTitle: "Редакционные правила",
      editorialGuidelinesText:
        "Каждая страница разработана интуитивно понятной.",
      disclaimer:
        "Отказ от ответственности: инструменты предоставляются в образовательных целях.",
      teamTitle: "Кто мы",
      teamText: "Сайт управляется нашей командой. Смотрите страницу контактов.",
    },
    Privacy: {
      title: "Политика конфиденциальности",
      lastUpdated: "Последнее обновление: 29 сентября 2026 г.",
      intro: "Ваша конфиденциальность — наш приоритет.",
      dataCollectionTitle: "Нет сбора данных",
      dataCollectionText:
        "Мы не собираем лишние личные данные. Вычисления локальны.",
      analyticsTitle: "Аналитика",
      analyticsText: "Мы используем аналитику для понимания трафика.",
      thirdPartyTitle: "Третьи стороны и Google AdSense",
      thirdPartyText:
        "Третьи стороны, включая Google, используют файлы cookie для рекламы.",
      contactUs: "Если у вас есть вопросы, свяжитесь с нами.",
      optOutTitle: "Отказ от персонализированной рекламы",
      optOutText: "Вы можете отказаться в настройках рекламы Google.",
      userRightsTitle: "Ваши права",
      userRightsText: "Управляйте своим согласием в подвале сайта.",
      childrenTitle: "Конфиденциальность детей",
      childrenText: "Мы не собираем информацию у детей до 13 лет.",
      dataRetentionTitle: "Хранение данных",
      dataRetentionText: "Временные логи хранятся только в целях безопасности.",
    },
    Terms: {
      title: "Условия использования",
      lastUpdated: "Последнее обновление: 29 сентября 2026 г.",
      intro: "Используя Aftara Tools, вы соглашаетесь с этими условиями.",
      noWarrantyTitle: "Отсутствие гарантий",
      noWarrantyText: "Инструменты предоставляются 'как есть'.",
      liabilityTitle: "Ограничение ответственности",
      liabilityText: "Aftara Tools не несет ответственности за ущерб.",
      acceptableUseTitle: "Допустимое использование",
      acceptableUseText: "Используйте инструменты только в законных целях.",
      modificationsTitle: "Изменения",
      modificationsText: "Мы можем изменить эти условия в любое время.",
    },
    Cookie: {
      title: "Политика файлов cookie",
      lastUpdated: "Последнее обновление: 29 сентября 2026 г.",
      intro: "Эта политика объясняет, как мы используем файлы cookie.",
      whatAreCookiesTitle: "Что такое файлы cookie?",
      whatAreCookiesText: "Это небольшие текстовые файлы на вашем устройстве.",
      howWeUseCookiesTitle: "Как мы их используем",
      howWeUseCookiesText: "Мы используем их для базовых функций и рекламы.",
      noTrackingTitle: "Рекламные файлы cookie",
      noTrackingText:
        "Мы используем Google AdSense. Управляйте настройками в подвале.",
      managingCookiesTitle: "Управление cookie",
      managingCookiesText: "Вы можете удалить их в своем браузере.",
    },
    Disclaimer: {
      title: "Отказ от ответственности",
      lastUpdated: "Последнее обновление: 29 сентября 2026 г.",
      intro: "Информация предназначена только для общего ознакомления.",
      accuracyTitle: "Общая точность",
      accuracyText: "Мы не гарантируем точность результатов.",
      medicalTitle: "Медицинское предупреждение",
      medicalText: "Медицинские калькуляторы не заменяют совет врача.",
      financialTitle: "Финансовое предупреждение",
      financialText: "Финансовые калькуляторы не являются финансовым советом.",
      legalTitle: "Правовые различия",
      legalText: "Формулы могут не отражать законы вашего региона.",
    },
  },
  tr: {
    About: {
      title: "Hakkımızda ve Metodoloji",
      description:
        "Çevrimiçi hesap makineleri için ücretsiz kaynağınız olan Aftara Tools'a hoş geldiniz.",
      missionTitle: "Misyonumuz",
      missionText: "Misyonumuz, hızlı ve güvenilir araçlar sağlamaktır.",
      methodologyTitle: "Metodolojimiz",
      methodologyIntro: "Şeffaflığa ve doğruluğa inanıyoruz.",
      standardizedFormulasTitle: "Standart Formüller",
      standardizedFormulasText:
        "Finansal araçlarımız endüstri standartlarını kullanır.",
      medicalGuidelinesTitle: "Tıbbi Yönergeler",
      medicalGuidelinesText: "Sağlık araçlarımız küresel denklemleri kullanır.",
      privacyFirstTitle: "Önce Gizlilik",
      privacyFirstText:
        "Verileriniz tarayıcınızdan asla ayrılmaz. Her şey yerel olarak gerçekleşir.",
      continuousTestingTitle: "Sürekli Test",
      continuousTestingText:
        "Araçlarımız matematiksel doğruluk için titizlikle test edilmiştir.",
      editorialGuidelinesTitle: "Editöryal İlkeler",
      editorialGuidelinesText:
        "Her sayfa kullanımı kolay olacak şekilde tasarlanmıştır.",
      disclaimer: "Yasal Uyarı: Araçlar yalnızca bilgilendirme amaçlıdır.",
      teamTitle: "Biz Kimiz",
      teamText:
        "Bu site ekibimiz tarafından işletilmektedir. Bize İletişim sayfasından ulaşın.",
    },
    Privacy: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: 29 Eylül 2026",
      intro: "Aftara Tools'da gizliliğiniz önceliğimizdir.",
      dataCollectionTitle: "Veri Toplamama",
      dataCollectionText: "Gereksiz veri toplamıyoruz. Hesaplamalar yereldir.",
      analyticsTitle: "Analitik",
      analyticsText: "Trafiği anlamak için analizleri kullanabiliriz.",
      thirdPartyTitle: "Üçüncü Taraflar ve Google AdSense",
      thirdPartyText:
        "Google dahil olmak üzere üçüncü taraflar, reklam göstermek için çerez kullanır.",
      contactUs: "Sorularınız varsa, lütfen iletişime geçin.",
      optOutTitle: "Kişiselleştirilmiş Reklamları Kapatma",
      optOutText: "Google Reklam Ayarları'ndan reklamları kapatabilirsiniz.",
      userRightsTitle: "Haklarınız",
      userRightsText:
        "Onayınızı alt kısımdaki 'Gizlilik Ayarları' bağlantısıyla yönetin.",
      childrenTitle: "Çocukların Gizliliği",
      childrenText: "13 yaşından küçük çocuklardan bilgi toplamıyoruz.",
      dataRetentionTitle: "Veri Saklama",
      dataRetentionText: "Geçici günlükler yalnızca güvenlik amacıyla tutulur.",
    },
    Terms: {
      title: "Hizmet Şartları",
      lastUpdated: "Son Güncelleme: 29 Eylül 2026",
      intro: "Aftara Tools'u kullanarak bu şartları kabul etmiş olursunuz.",
      noWarrantyTitle: "Garanti Yok",
      noWarrantyText: "Tüm araçlar 'olduğu gibi' sağlanmaktadır.",
      liabilityTitle: "Sorumluluğun Sınırlandırılması",
      liabilityText:
        "Aftara Tools, araçların kullanımından doğan zararlardan sorumlu değildir.",
      acceptableUseTitle: "Kabul Edilebilir Kullanım",
      acceptableUseText:
        "Araçlarımızı yasal amaçlarla kullanmayı kabul ediyorsunuz.",
      modificationsTitle: "Değişiklikler",
      modificationsText: "Bu şartları herhangi bir zamanda değiştirebiliriz.",
    },
    Cookie: {
      title: "Çerez Politikası",
      lastUpdated: "Son Güncelleme: 29 Eylül 2026",
      intro: "Bu politika, çerezlerin nasıl kullanıldığını açıklar.",
      whatAreCookiesTitle: "Çerez Nedir?",
      whatAreCookiesText:
        "Çerezler, cihazınıza yerleştirilen küçük metin dosyalarıdır.",
      howWeUseCookiesTitle: "Çerezleri Nasıl Kullanıyoruz",
      howWeUseCookiesText: "Çerezleri işlevsellik ve reklam için kullanıyoruz.",
      noTrackingTitle: "Üçüncü Taraf Reklam Çerezleri",
      noTrackingText:
        "Google AdSense kullanıyoruz. Tercihlerinizi alt kısımdan yönetebilirsiniz.",
      managingCookiesTitle: "Çerezleri Yönetmek",
      managingCookiesText: "Çerezleri tarayıcınızdan silebilirsiniz.",
    },
    Disclaimer: {
      title: "Yasal Uyarı",
      lastUpdated: "Son Güncelleme: 29 Eylül 2026",
      intro: "Bilgiler yalnızca genel bilgilendirme amaçlıdır.",
      accuracyTitle: "Genel Doğruluk",
      accuracyText: "Sonuçların doğruluğunu garanti etmiyoruz.",
      medicalTitle: "Tıbbi Sorumluluk Reddi",
      medicalText: "Sağlık hesaplayıcıları tıbbi tavsiyenin yerini tutmaz.",
      financialTitle: "Finansal Sorumluluk Reddi",
      financialText: "Finansal hesaplayıcılar finansal tavsiye değildir.",
      legalTitle: "Hukuki Değişiklikler",
      legalText:
        "Formüller bölgenizdeki vergi kurallarını tam yansıtmayabilir.",
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
