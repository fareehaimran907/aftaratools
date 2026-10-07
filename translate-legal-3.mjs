import fs from "fs";
import path from "path";

const langs = ["ko", "pl", "pt", "ru", "tr"];

const translations = {
  ko: {
    About: {
      title: "Aftara Tools 정보",
      description:
        "귀하의 일상적인 계산, 변환 및 생성 요구를 위한 프리미엄 생산성 플랫폼.",
      missionTitle: "우리의 미션",
      missionText:
        "우리는 일상적인 계산과 변환이 빠르고 정확하며 누구나 접근할 수 있어야 한다고 믿습니다. 우리의 미션은 복잡한 작업을 단순한 클릭으로 바꾸는 포괄적인 도구 모음을 제공하는 것입니다.",
      methodologyTitle: "우리의 방법론",
      methodologyIntro: "우리가 만드는 모든 도구에 엄격한 기준을 적용합니다.",
      standardizedFormulasTitle: "표준화된 공식",
      standardizedFormulasText:
        "우리는 산업 전반의 일관성을 보장하기 위해 모든 계산에서 국제적으로 인정된 공식과 표준을 사용합니다.",
      medicalGuidelinesTitle: "의료 가이드라인",
      medicalGuidelinesText:
        "건강 및 피트니스 계산기는 확립된 의학 공식 (예: Mifflin-St Jeor 방정식)에 기초하며 명확하게 인용된 참고 문헌이 있습니다.",
      privacyFirstTitle: "프라이버시 우선",
      privacyFirstText:
        "모든 계산은 브라우저에서 직접 수행됩니다. 당사는 귀하의 개인 입력 데이터를 절대 저장, 추적 또는 전송하지 않습니다.",
      continuousTestingTitle: "지속적인 테스트",
      continuousTestingText:
        "수학적 정확성을 보장하기 위해 우리의 도구는 수천 가지의 경계 사례에 대해 자동화된 테스트 루틴을 거칩니다.",
      editorialGuidelinesTitle: "편집 가이드라인",
      editorialGuidelinesText:
        "모든 도구는 게시 전에 해당 분야 전문가의 검토를 받습니다. 금융, 건강 및 기술 분야의 변화하는 표준을 따라가기 위해 정기적으로 공식을 업데이트합니다.",
      disclaimer:
        "면책 조항: 정확한 결과를 제공하기 위해 노력하지만, 우리의 도구는 정보 제공 목적으로만 사용되며 전문적인 의료, 재정 또는 법적 조언을 대체해서는 안 됩니다.",
    },
    Contact: {
      title: "연락처",
      description:
        "질문이나 제안 사항이 있거나 버그를 발견하셨나요? 언제든지 연락해 주세요.",
      formName: "이름",
      formEmail: "이메일",
      formSubject: "제목",
      formMessage: "메시지",
      formSubmit: "메시지 보내기",
      emailUs: "이메일 보내기",
      emailAddress: "aftaratech@gmail.com",
      responseTime: "보통 24~48시간 내에 응답하는 것을 목표로 합니다.",
      successMessage:
        "메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.",
      errorMessage:
        "메시지를 전송하는 동안 오류가 발생했습니다. 나중에 다시 시도해 주세요.",
    },
    Privacy: {
      title: "개인정보처리방침",
      lastUpdated: "최종 업데이트: 2026년 9월 29일",
      intro:
        "Aftara Tools에서는 귀하의 개인정보를 매우 중요하게 생각합니다. 이 개인정보처리방침은 귀하가 당사 웹사이트를 이용할 때 당사가 정보를 수집, 사용 및 보호하는 방법을 설명합니다.",
      dataCollectionTitle: "수집하는 정보",
      dataCollectionText:
        "당사의 도구는 귀하의 브라우저에서 로컬로 실행되도록 설계되었습니다. 당사는 계산기와 도구에 입력한 데이터를 서버에 수집, 저장 또는 전송하지 않습니다. 모든 계산은 귀하의 기기에 비공개로 유지됩니다.",
      analyticsTitle: "분석",
      analyticsText:
        "우리는 웹사이트 트래픽과 도구 사용량을 이해하기 위해 개인정보를 존중하는 기본 분석을 사용합니다. 여기에는 개인을 식별할 수 있는 정보나 침입적 추적은 포함되지 않습니다.",
      thirdPartyTitle: "제3자 서비스",
      thirdPartyText:
        "호스팅이나 분석을 위해 제3자 서비스를 사용할 수 있지만 귀하의 개인 정보나 입력 내용을 공유하지는 않습니다.",
      contactUs:
        "당사의 개인정보처리방침에 대해 궁금한 점이 있으시면 언제든지 연락해 주세요.",
    },
    Terms: {
      title: "서비스 이용약관",
      lastUpdated: "최종 업데이트: 2026년 9월 29일",
      intro:
        "Aftara Tools에 접속하고 사용함으로써, 귀하는 다음 이용 약관을 준수하고 이에 구속될 것에 동의합니다.",
      noWarrantyTitle: "보증 부인 (있는 그대로)",
      noWarrantyText:
        '본 웹사이트의 모든 도구, 계산기 및 정보는 명시적 또는 묵시적 진술이나 보증 없이 "있는 그대로" 제공됩니다. 생성된 결과의 정확성, 신뢰성 또는 완전성에 대해서는 보증하지 않습니다.',
      liabilityTitle: "책임의 제한",
      liabilityText:
        "어떠한 경우에도 Aftara Tools는 당사 도구의 사용으로 인해 또는 그와 관련하여 발생하는 특별, 직접, 간접, 결과적 또는 우발적 손해나 기타 모든 손해에 대해 책임을 지지 않습니다. 여기에는 당사의 계산기에 기반한 재정적 손실 또는 의료 결정이 포함됩니다.",
      acceptableUseTitle: "허용되는 사용",
      acceptableUseText:
        "귀하는 합법적인 목적으로만 당사 도구를 사용하는 데 동의합니다. 귀하는 Aftara Tools에 연결된 서비스나 네트워크를 스크랩하거나 DDoS 공격을 가하거나 방해하려고 시도해서는 안 됩니다.",
      modificationsTitle: "수정",
      modificationsText:
        "당사는 언제든지 사전 통지 없이 본 서비스 약관을 개정할 권리를 보유합니다. 이 웹사이트를 사용함으로써 귀하는 최신 버전의 이용 약관에 구속될 것에 동의하게 됩니다.",
    },
    Cookie: {
      title: "쿠키 정책",
      lastUpdated: "최종 업데이트: 2026년 9월 29일",
      intro:
        "이 쿠키 정책은 쿠키가 무엇이며 당사가 쿠키를 사용하는 방법에 대해 설명합니다. 어떤 종류의 쿠키를 사용하는지, 또는 쿠키를 사용하여 수집하는 정보와 그 정보가 어떻게 사용되는지 이해하기 위해 이 정책을 읽어 보셔야 합니다.",
      whatAreCookiesTitle: "쿠키란 무엇입니까?",
      whatAreCookiesText:
        "쿠키는 방문하는 웹사이트에서 컴퓨터나 모바일 기기에 배치하는 작은 텍스트 파일입니다. 쿠키는 웹사이트가 작동하도록, 또는 보다 효율적으로 작동하도록 돕고, 보고 정보를 제공하기 위해 널리 사용됩니다.",
      howWeUseCookiesTitle: "쿠키 사용 방법",
      howWeUseCookiesText:
        '우리는 필수 기능 및 기본적인 사용자 환경설정을 위해서만 쿠키를 사용합니다. 예를 들어 "다크 모드" 또는 "라이트 모드" 선호 여부를 기억하거나 선호하는 언어를 기억하기 위해 로컬 스토리지 또는 쿠키를 사용할 수 있습니다.',
      noTrackingTitle: "침해적인 추적 없음",
      noTrackingText:
        "당사는 광고 쿠키, 제3자 트래커 또는 크로스 사이트 추적 기술을 사용하지 않습니다. 당사 도구의 사용 내역은 비공개로 유지됩니다.",
      managingCookiesTitle: "쿠키 관리",
      managingCookiesText:
        "원하는 대로 쿠키를 제어하고/또는 삭제할 수 있습니다. 이미 컴퓨터에 있는 모든 쿠키를 삭제할 수 있으며 대부분의 브라우저에서 쿠키가 배치되지 않도록 설정할 수 있습니다.",
    },
  },
  pl: {
    About: {
      title: "O Aftara Tools",
      description:
        "Platforma produktywności premium dla wszystkich codziennych potrzeb w zakresie obliczeń, konwersji i generowania.",
      missionTitle: "Nasza Misja",
      missionText:
        "Wierzymy, że codzienne obliczenia i konwersje powinny być szybkie, dokładne i dostępne dla każdego. Naszą misją jest dostarczenie kompleksowego pakietu narzędzi, które zmieniają złożone zadania w proste kliknięcia.",
      methodologyTitle: "Nasza Metodologia",
      methodologyIntro:
        "Stosujemy rygorystyczne standardy do każdego tworzonego przez nas narzędzia.",
      standardizedFormulasTitle: "Standaryzowane Formuły",
      standardizedFormulasText:
        "We wszystkich naszych obliczeniach stosujemy uznane na arenie międzynarodowej formuły i standardy, aby zapewnić spójność we wszystkich sektorach.",
      medicalGuidelinesTitle: "Wytyczne Medyczne",
      medicalGuidelinesText:
        "Kalkulatory zdrowia i kondycji opierają się na ugruntowanych formułach medycznych (takich jak równanie Mifflin-St Jeor) z wyraźnie cytowanymi referencjami.",
      privacyFirstTitle: "Prywatność Przede Wszystkim",
      privacyFirstText:
        "Wszystkie obliczenia wykonywane są bezpośrednio w Twojej przeglądarce. Nigdy nie przechowujemy, nie śledzimy ani nie przesyłamy Twoich osobistych danych wejściowych.",
      continuousTestingTitle: "Ciągłe Testowanie",
      continuousTestingText:
        "Nasze narzędzia przechodzą rutynowe, zautomatyzowane testy tysięcy przypadków brzegowych, aby zapewnić matematyczną dokładność.",
      editorialGuidelinesTitle: "Wytyczne Redakcyjne",
      editorialGuidelinesText:
        "Każde narzędzie jest przed publikacją przeglądane przez ekspertów merytorycznych. Regularnie aktualizujemy nasze formuły, aby dotrzymać kroku zmieniającym się standardom w finansach, zdrowiu i technologii.",
      disclaimer:
        "Zastrzeżenie: Chociaż staramy się zapewnić dokładne wyniki, nasze narzędzia służą wyłącznie do celów informacyjnych i nie powinny zastępować profesjonalnych porad medycznych, finansowych lub prawnych.",
    },
    Contact: {
      title: "Skontaktuj się z Nami",
      description:
        "Masz pytanie, sugestię, a może znalazłeś błąd? Chętnie się dowiemy.",
      formName: "Twoje Imię",
      formEmail: "Twój E-mail",
      formSubject: "Temat",
      formMessage: "Twoja Wiadomość",
      formSubmit: "Wyślij Wiadomość",
      emailUs: "Napisz do Nas",
      emailAddress: "aftaratech@gmail.com",
      responseTime: "Staramy się odpowiadać w ciągu 24-48 godzin.",
      successMessage:
        "Twoja wiadomość została pomyślnie wysłana! Wkrótce się z Tobą skontaktujemy.",
      errorMessage:
        "Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować ponownie później.",
    },
    Privacy: {
      title: "Polityka Prywatności",
      lastUpdated: "Ostatnia aktualizacja: 29 września 2026 r.",
      intro:
        "W Aftara Tools bardzo poważnie traktujemy Twoją prywatność. Niniejsza Polityka Prywatności opisuje, jak gromadzimy, używamy i chronimy informacje podczas korzystania z naszej strony internetowej.",
      dataCollectionTitle: "Informacje, które Gromadzimy",
      dataCollectionText:
        "Nasze narzędzia są zaprojektowane tak, aby działać lokalnie w Twojej przeglądarce. Nie gromadzimy, nie przechowujemy ani nie przesyłamy danych, które wprowadzasz do naszych kalkulatorów i narzędzi, na nasze serwery. Wszystkie Twoje obliczenia pozostają prywatne na Twoim urządzeniu.",
      analyticsTitle: "Analityka",
      analyticsText:
        "Używamy podstawowych, szanujących prywatność analityk, aby zrozumieć ruch na stronie internetowej i użycie narzędzi. Nie obejmuje to żadnych danych osobowych ani inwazyjnego śledzenia.",
      thirdPartyTitle: "Usługi Stron Trzecich",
      thirdPartyText:
        "Możemy korzystać z usług stron trzecich do hostingu lub analityki, ale nigdy nie udostępniamy Twoich danych osobowych ani wprowadzonych danych.",
      contactUs:
        "Jeśli masz jakiekolwiek pytania dotyczące naszej Polityki Prywatności, skontaktuj się z nami.",
    },
    Terms: {
      title: "Warunki Świadczenia Usług",
      lastUpdated: "Ostatnia aktualizacja: 29 września 2026 r.",
      intro:
        "Uzyskując dostęp i korzystając z Aftara Tools, zgadzasz się przestrzegać i podlegać następującym warunkom użytkowania.",
      noWarrantyTitle: "Brak Gwarancji (W Stanie Takim Jaki Jest)",
      noWarrantyText:
        'Wszystkie narzędzia, kalkulatory i informacje na tej stronie internetowej są dostarczane "tak jak są" bez żadnych oświadczeń ani gwarancji, wyraźnych lub dorozumianych. Nie gwarantujemy dokładności, rzetelności ani kompletności generowanych wyników.',
      liabilityTitle: "Ograniczenie Odpowiedzialności",
      liabilityText:
        "W żadnym wypadku Aftara Tools nie ponosi odpowiedzialności za jakiekolwiek szczególne, bezpośrednie, pośrednie, wynikowe lub przypadkowe szkody, ani za jakiekolwiek szkody wynikające z lub w związku z korzystaniem z naszych narzędzi. Obejmuje to straty finansowe lub decyzje medyczne podjęte w oparciu o nasze kalkulatory.",
      acceptableUseTitle: "Dopuszczalne Użytkowanie",
      acceptableUseText:
        "Zgadzasz się korzystać z naszych narzędzi wyłącznie w celach zgodnych z prawem. Nie wolno próbować pobierać (scrape), atakować (DDoS) ani w inny sposób zakłócać działania usług ani sieci podłączonych do Aftara Tools.",
      modificationsTitle: "Modyfikacje",
      modificationsText:
        "Zastrzegamy sobie prawo do zmiany tych warunków użytkowania w dowolnym momencie bez uprzedzenia. Korzystając z tej strony internetowej, zgadzasz się na to, by podlegać aktualnej wersji tych warunków.",
    },
    Cookie: {
      title: "Polityka Plików Cookie",
      lastUpdated: "Ostatnia aktualizacja: 29 września 2026 r.",
      intro:
        "Niniejsza Polityka Plików Cookie wyjaśnia, czym są pliki cookie i jak z nich korzystamy. Powinieneś przeczytać tę politykę, aby zrozumieć, z jakiego rodzaju plików cookie korzystamy, jakie informacje gromadzimy za ich pomocą i w jaki sposób te informacje są używane.",
      whatAreCookiesTitle: "Czym są pliki Cookie?",
      whatAreCookiesText:
        "Pliki cookie to małe pliki tekstowe, które odwiedzane strony internetowe umieszczają na Twoim komputerze lub urządzeniu mobilnym. Są one powszechnie używane, aby strony internetowe działały lub działały wydajniej, a także aby dostarczać informacje raportowe.",
      howWeUseCookiesTitle: "Jak Używamy Plików Cookie",
      howWeUseCookiesText:
        'Używamy plików cookie wyłącznie do kluczowych funkcji i podstawowych preferencji użytkownika. Na przykład możemy użyć pamięci lokalnej (local storage) lub pliku cookie, aby zapamiętać, czy preferujesz "Tryb Ciemny" czy "Tryb Jasny", lub aby zapamiętać Twój preferowany język.',
      noTrackingTitle: "Brak Inwazyjnego Śledzenia",
      noTrackingText:
        "Nie używamy plików cookie do celów reklamowych, zewnętrznych skryptów śledzących ani technologii śledzenia między witrynami. Twoje korzystanie z naszych narzędzi pozostaje prywatne.",
      managingCookiesTitle: "Zarządzanie Plikami Cookie",
      managingCookiesText:
        "Możesz dowolnie kontrolować i/lub usuwać pliki cookie. Możesz usunąć wszystkie pliki cookie, które już znajdują się na Twoim komputerze, a w większości przeglądarek możesz zapobiec ich umieszczaniu.",
    },
  },
  pt: {
    About: {
      title: "Sobre o Aftara Tools",
      description:
        "A plataforma de produtividade premium para todas as suas necessidades diárias de cálculo, conversão e geração.",
      missionTitle: "Nossa Missão",
      missionText:
        "Acreditamos que os cálculos e conversões diários devem ser rápidos, precisos e acessíveis a todos. Nossa missão é fornecer um conjunto abrangente de ferramentas que transformam tarefas complexas em simples cliques.",
      methodologyTitle: "Nossa Metodologia",
      methodologyIntro:
        "Aplicamos padrões rigorosos a cada ferramenta que construímos.",
      standardizedFormulasTitle: "Fórmulas Padronizadas",
      standardizedFormulasText:
        "Usamos fórmulas e padrões internacionalmente reconhecidos em todos os nossos cálculos para garantir a consistência em vários setores.",
      medicalGuidelinesTitle: "Diretrizes Médicas",
      medicalGuidelinesText:
        "As calculadoras de saúde e fitness são baseadas em fórmulas médicas estabelecidas (como a equação de Mifflin-St Jeor) com referências citadas de forma clara.",
      privacyFirstTitle: "Privacidade em Primeiro Lugar",
      privacyFirstText:
        "Todos os cálculos são realizados diretamente no seu navegador. Nunca armazenamos, rastreamos ou transmitimos seus dados pessoais de entrada.",
      continuousTestingTitle: "Testes Contínuos",
      continuousTestingText:
        "Nossas ferramentas passam por rotinas de testes automatizados em milhares de casos extremos para garantir a precisão matemática.",
      editorialGuidelinesTitle: "Diretrizes Editoriais",
      editorialGuidelinesText:
        "Cada ferramenta é revisada por especialistas no assunto antes da publicação. Atualizamos regularmente nossas fórmulas para acompanhar as mudanças de padrões em finanças, saúde e tecnologia.",
      disclaimer:
        "Isenção de responsabilidade: Embora nos esforcemos para fornecer resultados precisos, nossas ferramentas são apenas para fins informativos e não devem substituir conselhos médicos, financeiros ou jurídicos profissionais.",
    },
    Contact: {
      title: "Contate-Nos",
      description:
        "Tem alguma dúvida, sugestão ou encontrou um bug? Adoraríamos ouvir você.",
      formName: "Seu Nome",
      formEmail: "Seu E-mail",
      formSubject: "Assunto",
      formMessage: "Sua Mensagem",
      formSubmit: "Enviar Mensagem",
      emailUs: "Envie-nos um E-mail",
      emailAddress: "aftaratech@gmail.com",
      responseTime: "Buscamos responder dentro de 24 a 48 horas.",
      successMessage:
        "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
      errorMessage:
        "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
    },
    Privacy: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização: 29 de setembro de 2026",
      intro:
        "No Aftara Tools, levamos a sua privacidade muito a sério. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações quando você usa o nosso site.",
      dataCollectionTitle: "Informações que Coletamos",
      dataCollectionText:
        "Nossas ferramentas são projetadas para rodar localmente no seu navegador. Não coletamos, armazenamos ou transmitimos os dados que você insere em nossas calculadoras e ferramentas para os nossos servidores. Todos os seus cálculos permanecem privados no seu dispositivo.",
      analyticsTitle: "Análises",
      analyticsText:
        "Usamos análises básicas que respeitam a privacidade para entender o tráfego do site e o uso de ferramentas. Isso não inclui informações pessoalmente identificáveis ou rastreamento invasivo.",
      thirdPartyTitle: "Serviços de Terceiros",
      thirdPartyText:
        "Podemos usar serviços de terceiros para hospedagem ou análises, mas nunca compartilhamos suas informações pessoais ou entradas.",
      contactUs:
        "Se você tiver alguma dúvida sobre a nossa Política de Privacidade, entre em contato conosco.",
    },
    Terms: {
      title: "Termos de Serviço",
      lastUpdated: "Última atualização: 29 de setembro de 2026",
      intro:
        "Ao acessar e usar o Aftara Tools, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.",
      noWarrantyTitle: "Sem Garantias (Como Está)",
      noWarrantyText:
        'Todas as ferramentas, calculadoras e informações neste site são fornecidas "como estão" sem quaisquer representações ou garantias, expressas ou implícitas. Não garantimos a exatidão, a confiabilidade ou a integridade dos resultados gerados.',
      liabilityTitle: "Limitação de Responsabilidade",
      liabilityText:
        "Em nenhum caso o Aftara Tools será responsável por quaisquer danos especiais, diretos, indiretos, consequenciais ou incidentais, ou quaisquer danos decorrentes ou relacionados ao uso de nossas ferramentas. Isso inclui perdas financeiras ou decisões médicas tomadas com base em nossas calculadoras.",
      acceptableUseTitle: "Uso Aceitável",
      acceptableUseText:
        "Você concorda em usar nossas ferramentas apenas para fins legais. Você não deve tentar realizar raspagem de dados (scraping), ataques DDoS ou de outra forma interromper o serviço ou as redes conectadas ao Aftara Tools.",
      modificationsTitle: "Modificações",
      modificationsText:
        "Nós nos reservamos o direito de revisar estes termos de serviço a qualquer momento sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual destes termos.",
    },
    Cookie: {
      title: "Política de Cookies",
      lastUpdated: "Última atualização: 29 de setembro de 2026",
      intro:
        "Esta Política de Cookies explica o que são cookies e como os usamos. Você deve ler esta política para entender que tipo de cookies nós usamos, ou as informações que coletamos usando cookies e como essas informações são usadas.",
      whatAreCookiesTitle: "O que são Cookies?",
      whatAreCookiesText:
        "Cookies são pequenos arquivos de texto colocados em seu computador ou dispositivo móvel pelos sites que você visita. Eles são amplamente usados para fazer os sites funcionarem, ou funcionarem com mais eficiência, bem como para fornecer informações de relatórios.",
      howWeUseCookiesTitle: "Como Usamos os Cookies",
      howWeUseCookiesText:
        'Usamos cookies estritamente para funcionalidades essenciais e preferências básicas do usuário. Por exemplo, podemos usar armazenamento local ou um cookie para lembrar se você prefere o "Modo Escuro" ou "Modo Claro", ou para lembrar seu idioma preferido.',
      noTrackingTitle: "Nenhum Rastreamento Invasivo",
      noTrackingText:
        "Não usamos cookies de publicidade, rastreadores de terceiros ou tecnologias de rastreamento entre sites. Seu uso de nossas ferramentas permanece privado.",
      managingCookiesTitle: "Gerenciamento de Cookies",
      managingCookiesText:
        "Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão no seu computador e pode configurar a maioria dos navegadores para evitar que sejam colocados.",
    },
  },
  ru: {
    About: {
      title: "О Aftara Tools",
      description:
        "Платформа премиум-класса для всех ваших ежедневных вычислений, конвертаций и генераций.",
      missionTitle: "Наша Миссия",
      missionText:
        "Мы верим, что ежедневные вычисления и конвертации должны быть быстрыми, точными и доступными для всех. Наша миссия — предоставить комплексный набор инструментов, превращающих сложные задачи в простые клики.",
      methodologyTitle: "Наша Методология",
      methodologyIntro:
        "К каждому создаваемому инструменту мы применяем строгие стандарты.",
      standardizedFormulasTitle: "Стандартизированные Формулы",
      standardizedFormulasText:
        "Во всех наших расчетах мы используем международно признанные формулы и стандарты, чтобы обеспечить согласованность в различных секторах.",
      medicalGuidelinesTitle: "Медицинские Руководства",
      medicalGuidelinesText:
        "Калькуляторы здоровья и фитнеса основаны на установленных медицинских формулах (таких как уравнение Миффлина - Сан-Жеора) с четко указанными ссылками.",
      privacyFirstTitle: "Конфиденциальность Прежде Всего",
      privacyFirstText:
        "Все вычисления выполняются прямо в вашем браузере. Мы никогда не храним, не отслеживаем и не передаем ваши личные введенные данные.",
      continuousTestingTitle: "Непрерывное Тестирование",
      continuousTestingText:
        "Наши инструменты проходят процедуры автоматического тестирования на тысячах пограничных случаев для обеспечения математической точности.",
      editorialGuidelinesTitle: "Редакционные Правила",
      editorialGuidelinesText:
        "Перед публикацией каждый инструмент проверяется профильными экспертами. Мы регулярно обновляем наши формулы, чтобы не отставать от меняющихся стандартов в области финансов, здравоохранения и технологий.",
      disclaimer:
        "Отказ от ответственности: Хотя мы стремимся предоставлять точные результаты, наши инструменты предназначены только для информационных целей и не должны заменять профессиональные медицинские, финансовые или юридические консультации.",
    },
    Contact: {
      title: "Свяжитесь с Нами",
      description:
        "Есть вопрос, предложение или нашли ошибку? Мы будем рады вас услышать.",
      formName: "Ваше Имя",
      formEmail: "Ваш Email",
      formSubject: "Тема",
      formMessage: "Ваше Сообщение",
      formSubmit: "Отправить Сообщение",
      emailUs: "Напишите нам",
      emailAddress: "aftaratech@gmail.com",
      responseTime: "Мы стараемся отвечать в течение 24-48 часов.",
      successMessage:
        "Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.",
      errorMessage:
        "При отправке вашего сообщения произошла ошибка. Пожалуйста, повторите попытку позже.",
    },
    Privacy: {
      title: "Политика Конфиденциальности",
      lastUpdated: "Последнее обновление: 29 сентября 2026 г.",
      intro:
        "В Aftara Tools мы очень серьезно относимся к вашей конфиденциальности. Данная Политика Конфиденциальности описывает, как мы собираем, используем и защищаем информацию, когда вы пользуетесь нашим веб-сайтом.",
      dataCollectionTitle: "Информация, которую мы собираем",
      dataCollectionText:
        "Наши инструменты предназначены для локальной работы в вашем браузере. Мы не собираем, не храним и не передаем на наши серверы данные, которые вы вводите в наши калькуляторы и инструменты. Все ваши расчеты остаются конфиденциальными на вашем устройстве.",
      analyticsTitle: "Аналитика",
      analyticsText:
        "Мы используем базовую аналитику, уважающую конфиденциальность, для понимания трафика веб-сайта и использования инструментов. Это не включает личную идентификационную информацию или инвазивное отслеживание.",
      thirdPartyTitle: "Сторонние Сервисы",
      thirdPartyText:
        "Мы можем использовать сторонние сервисы для хостинга или аналитики, но мы никогда не делимся вашей личной информацией или введенными данными.",
      contactUs:
        "Если у вас есть какие-либо вопросы о нашей Политике Конфиденциальности, пожалуйста, свяжитесь с нами.",
    },
    Terms: {
      title: "Условия Обслуживания",
      lastUpdated: "Последнее обновление: 29 сентября 2026 г.",
      intro:
        "Получая доступ и используя Aftara Tools, вы соглашаетесь соблюдать и быть связанными следующими условиями использования.",
      noWarrantyTitle: "Отсутствие Гарантий (Как Есть)",
      noWarrantyText:
        "Все инструменты, калькуляторы и информация на этом сайте предоставляются «как есть» без каких-либо заверений или гарантий, явных или подразумеваемых. Мы не гарантируем точность, надежность или полноту полученных результатов.",
      liabilityTitle: "Ограничение Ответственности",
      liabilityText:
        "Ни при каких обстоятельствах Aftara Tools не несет ответственности за любые особые, прямые, косвенные, случайные убытки или любые убытки вообще, возникшие в результате или в связи с использованием наших инструментов. Это включает финансовые потери или медицинские решения, принятые на основе наших калькуляторов.",
      acceptableUseTitle: "Приемлемое Использование",
      acceptableUseText:
        "Вы соглашаетесь использовать наши инструменты только в законных целях. Вы не должны пытаться извлекать данные (scraping), проводить DDoS-атаки или иным образом нарушать работу службы или сетей, подключенных к Aftara Tools.",
      modificationsTitle: "Изменения",
      modificationsText:
        "Мы оставляем за собой право пересматривать эти условия предоставления услуг в любое время без предварительного уведомления. Используя этот сайт, вы соглашаетесь соблюдать текущую версию этих условий.",
    },
    Cookie: {
      title: "Политика Использования Файлов Cookie",
      lastUpdated: "Последнее обновление: 29 сентября 2026 г.",
      intro:
        "Данная Политика использования файлов cookie объясняет, что такое файлы cookie и как мы их используем. Вам следует ознакомиться с этой политикой, чтобы понять, какие файлы cookie мы используем, какую информацию собираем с их помощью и как эта информация используется.",
      whatAreCookiesTitle: "Что такое файлы Cookie?",
      whatAreCookiesText:
        "Файлы cookie — это небольшие текстовые файлы, которые размещаются на вашем компьютере или мобильном устройстве веб-сайтами, которые вы посещаете. Они широко используются для обеспечения работы веб-сайтов или повышения их эффективности, а также для предоставления отчетной информации.",
      howWeUseCookiesTitle: "Как мы используем файлы Cookie",
      howWeUseCookiesText:
        "Мы используем файлы cookie исключительно для основных функций и основных пользовательских настроек. Например, мы можем использовать локальное хранилище или файл cookie, чтобы запомнить, предпочитаете ли вы «Темный режим» или «Светлый режим», или для сохранения выбранного языка.",
      noTrackingTitle: "Отсутствие Инвазивного Отслеживания",
      noTrackingText:
        "Мы не используем рекламные файлы cookie, сторонние трекеры или технологии отслеживания между сайтами. Ваше использование наших инструментов остается конфиденциальным.",
      managingCookiesTitle: "Управление Файлами Cookie",
      managingCookiesText:
        "Вы можете управлять файлами cookie и/или удалять их по своему желанию. Вы можете удалить все файлы cookie, которые уже находятся на вашем компьютере, и настроить большинство браузеров так, чтобы они препятствовали их размещению.",
    },
  },
  tr: {
    About: {
      title: "Aftara Tools Hakkında",
      description:
        "Tüm günlük hesaplama, dönüştürme ve oluşturma ihtiyaçlarınız için premium üretkenlik platformu.",
      missionTitle: "Misyonumuz",
      missionText:
        "Günlük hesaplamaların ve dönüşümlerin hızlı, doğru ve herkes için erişilebilir olması gerektiğine inanıyoruz. Misyonumuz, karmaşık görevleri basit tıklamalara dönüştüren kapsamlı bir araç paketi sunmaktır.",
      methodologyTitle: "Metodolojimiz",
      methodologyIntro:
        "Oluşturduğumuz her araca katı standartlar uyguluyoruz.",
      standardizedFormulasTitle: "Standartlaştırılmış Formüller",
      standardizedFormulasText:
        "Sektörler arasında tutarlılığı sağlamak için tüm hesaplamalarımızda uluslararası kabul görmüş formüller ve standartlar kullanıyoruz.",
      medicalGuidelinesTitle: "Tıbbi Yönergeler",
      medicalGuidelinesText:
        "Sağlık ve fitness hesaplayıcıları, açıkça alıntılanmış referansları olan köklü tıbbi formüllere (Mifflin-St Jeor denklemi gibi) dayanmaktadır.",
      privacyFirstTitle: "Önce Gizlilik",
      privacyFirstText:
        "Tüm hesaplamalar doğrudan tarayıcınızda gerçekleştirilir. Kişisel girdi verilerinizi asla saklamaz, izlemez veya iletmeyiz.",
      continuousTestingTitle: "Sürekli Test",
      continuousTestingText:
        "Araçlarımız, matematiksel doğruluğu sağlamak için binlerce uç durum üzerinde otomatik test prosedürlerinden geçer.",
      editorialGuidelinesTitle: "Editoryal Yönergeler",
      editorialGuidelinesText:
        "Her araç yayınlanmadan önce konu uzmanları tarafından incelenir. Finans, sağlık ve teknoloji alanındaki değişen standartlara ayak uydurmak için formüllerimizi düzenli olarak güncelliyoruz.",
      disclaimer:
        "Sorumluluk Reddi: Doğru sonuçlar sunmaya çabalasak da araçlarımız yalnızca bilgilendirme amaçlıdır ve profesyonel tıbbi, finansal veya yasal tavsiyelerin yerine geçmemelidir.",
    },
    Contact: {
      title: "Bize Ulaşın",
      description:
        "Bir sorunuz, öneriniz mi var veya bir hata mı buldunuz? Sizden duymak isteriz.",
      formName: "Adınız",
      formEmail: "E-postanız",
      formSubject: "Konu",
      formMessage: "Mesajınız",
      formSubmit: "Mesajı Gönder",
      emailUs: "Bize e-posta gönderin",
      emailAddress: "aftaratech@gmail.com",
      responseTime: "24-48 saat içinde yanıt vermeyi amaçlıyoruz.",
      successMessage:
        "Mesajınız başarıyla gönderildi! Yakında sizinle iletişime geçeceğiz.",
      errorMessage:
        "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    },
    Privacy: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: 29 Eylül 2026",
      intro:
        "Aftara Tools'da gizliliğinizi çok ciddiye alıyoruz. Bu Gizlilik Politikası, web sitemizi kullandığınızda bilgileri nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklamaktadır.",
      dataCollectionTitle: "Topladığımız Bilgiler",
      dataCollectionText:
        "Araçlarımız tarayıcınızda yerel olarak çalışacak şekilde tasarlanmıştır. Hesaplayıcılarımıza ve araçlarımıza girdiğiniz verileri sunucularımızda toplamıyor, saklamıyor veya sunucularımıza iletmiyoruz. Tüm hesaplamalarınız cihazınızda gizli kalır.",
      analyticsTitle: "Analitik",
      analyticsText:
        "Web sitesi trafiğini ve araç kullanımını anlamak için gizliliğe saygılı temel analitikler kullanıyoruz. Bu, kişisel olarak tanımlanabilir bilgileri veya istilacı izlemeyi içermez.",
      thirdPartyTitle: "Üçüncü Taraf Hizmetleri",
      thirdPartyText:
        "Barındırma veya analitik için üçüncü taraf hizmetlerini kullanabiliriz ancak kişisel bilgilerinizi veya girdilerinizi asla paylaşmayız.",
      contactUs:
        "Gizlilik Politikamız hakkında herhangi bir sorunuz varsa lütfen bizimle iletişime geçin.",
    },
    Terms: {
      title: "Hizmet Şartları",
      lastUpdated: "Son Güncelleme: 29 Eylül 2026",
      intro:
        "Aftara Tools'a erişerek ve kullanarak, aşağıdaki kullanım şart ve koşullarına uymayı ve bunlara bağlı kalmayı kabul etmiş olursunuz.",
      noWarrantyTitle: "Garanti Yok (Olduğu Gibi)",
      noWarrantyText:
        'Bu web sitesindeki tüm araçlar, hesaplayıcılar ve bilgiler, açık veya zımni hiçbir beyan veya garanti olmaksızın "olduğu gibi" sağlanmaktadır. Üretilen sonuçların doğruluğunu, güvenilirliğini veya eksiksizliğini garanti etmiyoruz.',
      liabilityTitle: "Sorumluluğun Sınırlandırılması",
      liabilityText:
        "Hiçbir durumda Aftara Tools, araçlarımızın kullanımından kaynaklanan veya bununla bağlantılı özel, doğrudan, dolaylı, sonuç olarak ortaya çıkan veya arızi zararlardan veya herhangi bir zarardan sorumlu tutulamaz. Buna hesaplayıcılarımıza dayalı finansal kayıplar veya tıbbi kararlar da dahildir.",
      acceptableUseTitle: "Kabul Edilebilir Kullanım",
      acceptableUseText:
        "Araçlarımızı yalnızca yasal amaçlar için kullanmayı kabul ediyorsunuz. Hizmeti veya Aftara Tools'a bağlı ağları kazımaya (scrape), DDoS saldırısı yapmaya veya başka şekilde bozmaya çalışmamalısınız.",
      modificationsTitle: "Değişiklikler",
      modificationsText:
        "Bu hizmet şartlarını herhangi bir zamanda önceden haber vermeksizin revize etme hakkımızı saklı tutuyoruz. Bu web sitesini kullanarak, bu şartların güncel sürümüne bağlı kalmayı kabul etmiş olursunuz.",
    },
    Cookie: {
      title: "Çerez Politikası",
      lastUpdated: "Son Güncelleme: 29 Eylül 2026",
      intro:
        "Bu Çerez Politikası, çerezlerin ne olduğunu ve bunları nasıl kullandığımızı açıklamaktadır. Ne tür çerezler kullandığımızı veya çerezleri kullanarak topladığımız bilgileri ve bu bilgilerin nasıl kullanıldığını anlamak için bu politikayı okumalısınız.",
      whatAreCookiesTitle: "Çerez Nedir?",
      whatAreCookiesText:
        "Çerezler, ziyaret ettiğiniz web siteleri tarafından bilgisayarınıza veya mobil cihazınıza yerleştirilen küçük metin dosyalarıdır. Web sitelerinin çalışmasını veya daha verimli çalışmasını sağlamak ve ayrıca raporlama bilgileri sağlamak için yaygın olarak kullanılırlar.",
      howWeUseCookiesTitle: "Çerezleri Nasıl Kullanıyoruz",
      howWeUseCookiesText:
        'Çerezleri kesinlikle temel işlevler ve temel kullanıcı tercihleri için kullanıyoruz. Örneğin, "Karanlık Mod" mu yoksa "Aydınlık Mod" mu tercih ettiğinizi hatırlamak veya tercih ettiğiniz dili hatırlamak için yerel depolama alanı veya bir çerez kullanabiliriz.',
      noTrackingTitle: "İstilacı İzleme Yok",
      noTrackingText:
        "Reklam çerezleri, üçüncü taraf izleyiciler veya siteler arası izleme teknolojileri kullanmıyoruz. Araçlarımızı kullanımınız gizli kalır.",
      managingCookiesTitle: "Çerezleri Yönetmek",
      managingCookiesText:
        "Çerezleri dilediğiniz gibi kontrol edebilir ve/veya silebilirsiniz. Bilgisayarınızda halihazırda bulunan tüm çerezleri silebilir ve çoğu tarayıcıyı bunların yerleştirilmesini önleyecek şekilde ayarlayabilirsiniz.",
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
