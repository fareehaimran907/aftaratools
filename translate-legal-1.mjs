import fs from "fs";
import path from "path";

const langs = ["de", "es", "fr", "it", "nl"];

const translations = {
  de: {
    About: {
      title: "Über Aftara Tools",
      description:
        "Die Premium-Produktivitätsplattform für all Ihre täglichen Berechnungs-, Konvertierungs- und Generierungsanforderungen.",
      missionTitle: "Unsere Mission",
      missionText:
        "Wir glauben, dass alltägliche Berechnungen und Konvertierungen schnell, präzise und für jeden zugänglich sein sollten. Unsere Mission ist es, eine umfassende Suite von Tools bereitzustellen, die komplexe Aufgaben zu einfachen Klicks machen.",
      methodologyTitle: "Unsere Methodik",
      methodologyIntro:
        "Wir wenden bei jedem Tool, das wir erstellen, strenge Standards an.",
      standardizedFormulasTitle: "Standardisierte Formeln",
      standardizedFormulasText:
        "Wir verwenden international anerkannte Formeln und Standards für alle unsere Berechnungen, um branchenübergreifende Konsistenz zu gewährleisten.",
      medicalGuidelinesTitle: "Medizinische Richtlinien",
      medicalGuidelinesText:
        "Gesundheits- und Fitnessrechner basieren auf etablierten medizinischen Formeln (wie der Mifflin-St Jeor-Gleichung) mit klaren Quellenangaben.",
      privacyFirstTitle: "Datenschutz im Fokus",
      privacyFirstText:
        "Alle Berechnungen werden direkt in Ihrem Browser durchgeführt. Wir speichern, verfolgen oder übertragen Ihre persönlichen Eingabedaten niemals.",
      continuousTestingTitle: "Kontinuierliches Testen",
      continuousTestingText:
        "Unsere Tools durchlaufen automatisierte Testverfahren für tausende von Grenzfällen, um mathematische Präzision zu gewährleisten.",
      editorialGuidelinesTitle: "Redaktionelle Richtlinien",
      editorialGuidelinesText:
        "Jedes Tool wird vor der Veröffentlichung von Fachexperten überprüft. Wir aktualisieren unsere Formeln regelmäßig, um mit sich ändernden Standards in Finanzen, Gesundheit und Technologie Schritt zu halten.",
      disclaimer:
        "Haftungsausschluss: Obwohl wir bestrebt sind, genaue Ergebnisse zu liefern, dienen unsere Tools nur zu Informationszwecken und sollten professionellen medizinischen, finanziellen oder rechtlichen Rat nicht ersetzen.",
    },
    Contact: {
      title: "Kontaktieren Sie uns",
      description:
        "Haben Sie eine Frage, einen Vorschlag oder haben Sie einen Fehler gefunden? Wir würden uns freuen, von Ihnen zu hören.",
      formName: "Ihr Name",
      formEmail: "Ihre E-Mail-Adresse",
      formSubject: "Betreff",
      formMessage: "Ihre Nachricht",
      formSubmit: "Nachricht Senden",
      emailUs: "Senden Sie uns eine E-Mail",
      emailAddress: "aftaratech@gmail.com",
      responseTime:
        "Wir bemühen uns, innerhalb von 24-48 Stunden zu antworten.",
      successMessage:
        "Ihre Nachricht wurde erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.",
      errorMessage:
        "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
    },
    Privacy: {
      title: "Datenschutzrichtlinie",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      intro:
        "Bei Aftara Tools nehmen wir Ihre Privatsphäre sehr ernst. Diese Datenschutzrichtlinie beschreibt, wie wir Informationen sammeln, verwenden und schützen, wenn Sie unsere Website nutzen.",
      dataCollectionTitle: "Informationen, die wir sammeln",
      dataCollectionText:
        "Unsere Tools sind so konzipiert, dass sie lokal in Ihrem Browser ausgeführt werden. Wir sammeln, speichern oder übertragen die Daten, die Sie in unsere Rechner und Tools eingeben, nicht an unsere Server. Alle Ihre Berechnungen bleiben privat auf Ihrem Gerät.",
      analyticsTitle: "Analytik",
      analyticsText:
        "Wir verwenden grundlegende, die Privatsphäre respektierende Analysen, um Website-Verkehr und Tool-Nutzung zu verstehen. Dies beinhaltet keine persönlich identifizierbaren Informationen oder invasive Verfolgung.",
      thirdPartyTitle: "Dienste von Drittanbietern",
      thirdPartyText:
        "Wir können Dienste von Drittanbietern zum Hosting oder zur Analytik nutzen, aber wir teilen niemals Ihre persönlichen Informationen oder Eingaben.",
      contactUs:
        "Wenn Sie Fragen zu unserer Datenschutzrichtlinie haben, kontaktieren Sie uns bitte.",
    },
    Terms: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      intro:
        "Durch den Zugriff auf und die Nutzung von Aftara Tools erklären Sie sich mit den folgenden Nutzungsbedingungen einverstanden.",
      noWarrantyTitle: "Keine Gewährleistung (Ist-Zustand)",
      noWarrantyText:
        "Alle Tools, Rechner und Informationen auf dieser Website werden „wie besehen“ ohne ausdrückliche oder stillschweigende Zusicherungen oder Gewährleistungen bereitgestellt. Wir übernehmen keine Garantie für die Genauigkeit, Zuverlässigkeit oder Vollständigkeit der erzielten Ergebnisse.",
      liabilityTitle: "Haftungsbeschränkung",
      liabilityText:
        "In keinem Fall haftet Aftara Tools für besondere, direkte, indirekte, Folge- oder Nebenschäden oder sonstige Schäden, die aus oder im Zusammenhang mit der Nutzung unserer Tools entstehen. Dies umfasst finanzielle Verluste oder medizinische Entscheidungen, die auf Basis unserer Rechner getroffen werden.",
      acceptableUseTitle: "Zulässige Nutzung",
      acceptableUseText:
        "Sie stimmen zu, unsere Tools nur für legale Zwecke zu nutzen. Sie dürfen nicht versuchen, die Dienste oder mit Aftara Tools verbundene Netzwerke zu scrapen, mit DDoS-Angriffen zu belegen oder anderweitig zu stören.",
      modificationsTitle: "Änderungen",
      modificationsText:
        "Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit ohne vorherige Ankündigung zu ändern. Durch die Nutzung dieser Website erklären Sie sich mit der jeweils aktuellen Version dieser Bedingungen einverstanden.",
    },
    Cookie: {
      title: "Cookie-Richtlinie",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      intro:
        "Diese Cookie-Richtlinie erklärt, was Cookies sind und wie wir sie verwenden. Sie sollten diese Richtlinie lesen, um zu verstehen, welche Art von Cookies wir verwenden oder welche Informationen wir mithilfe von Cookies sammeln und wie diese Informationen verwendet werden.",
      whatAreCookiesTitle: "Was sind Cookies?",
      whatAreCookiesText:
        "Cookies sind kleine Textdateien, die von Websites, die Sie besuchen, auf Ihrem Computer oder Mobilgerät platziert werden. Sie werden häufig verwendet, um Websites funktionstüchtig oder effizienter zu machen, sowie um Berichtsinformationen bereitzustellen.",
      howWeUseCookiesTitle: "Wie wir Cookies verwenden",
      howWeUseCookiesText:
        'Wir verwenden Cookies ausschließlich für wesentliche Funktionen und grundlegende Benutzereinstellungen. Beispielsweise können wir lokalen Speicher oder ein Cookie verwenden, um sich zu merken, ob Sie den "Dunkelmodus" oder "Hellmodus" bevorzugen, oder um Ihre bevorzugte Sprache zu speichern.',
      noTrackingTitle: "Kein invasives Tracking",
      noTrackingText:
        "Wir verwenden keine Werbe-Cookies, Drittanbieter-Tracker oder Cross-Site-Tracking-Technologien. Ihre Nutzung unserer Tools bleibt privat.",
      managingCookiesTitle: "Cookies verwalten",
      managingCookiesText:
        "Sie können Cookies nach Belieben kontrollieren und/oder löschen. Sie können alle bereits auf Ihrem Computer vorhandenen Cookies löschen und die meisten Browser so einstellen, dass sie deren Platzierung verhindern.",
    },
  },
  es: {
    About: {
      title: "Acerca de Aftara Tools",
      description:
        "La plataforma de productividad premium para todas tus necesidades diarias de cálculo, conversión y generación.",
      missionTitle: "Nuestra Misión",
      missionText:
        "Creemos que los cálculos y conversiones diarios deben ser rápidos, precisos y accesibles para todos. Nuestra misión es proporcionar un conjunto completo de herramientas que conviertan tareas complejas en simples clics.",
      methodologyTitle: "Nuestra Metodología",
      methodologyIntro:
        "Aplicamos estándares rigurosos a cada herramienta que construimos.",
      standardizedFormulasTitle: "Fórmulas Estandarizadas",
      standardizedFormulasText:
        "Utilizamos fórmulas y estándares internacionalmente reconocidos en todos nuestros cálculos para asegurar la coherencia entre sectores.",
      medicalGuidelinesTitle: "Pautas Médicas",
      medicalGuidelinesText:
        "Las calculadoras de salud y estado físico se basan en fórmulas médicas establecidas (como la ecuación de Mifflin-St Jeor) con referencias citadas claramente.",
      privacyFirstTitle: "Privacidad Primero",
      privacyFirstText:
        "Todos los cálculos se realizan directamente en tu navegador. Nunca almacenamos, rastreamos o transmitimos tus datos personales.",
      continuousTestingTitle: "Pruebas Continuas",
      continuousTestingText:
        "Nuestras herramientas se someten a rutinas de pruebas automatizadas en miles de casos límite para garantizar la precisión matemática.",
      editorialGuidelinesTitle: "Pautas Editoriales",
      editorialGuidelinesText:
        "Cada herramienta es revisada por expertos en la materia antes de su publicación. Actualizamos nuestras fórmulas regularmente para mantener el ritmo de los estándares cambiantes en finanzas, salud y tecnología.",
      disclaimer:
        "Descargo de responsabilidad: Aunque nos esforzamos por proporcionar resultados precisos, nuestras herramientas son únicamente con fines informativos y no deben reemplazar el asesoramiento médico, financiero o legal profesional.",
    },
    Contact: {
      title: "Contáctenos",
      description:
        "¿Tienes alguna pregunta, sugerencia o has encontrado un error? Nos encantaría saber de ti.",
      formName: "Tu Nombre",
      formEmail: "Tu Correo Electrónico",
      formSubject: "Asunto",
      formMessage: "Tu Mensaje",
      formSubmit: "Enviar Mensaje",
      emailUs: "Envíanos un correo",
      emailAddress: "aftaratech@gmail.com",
      responseTime: "Nuestro objetivo es responder en 24-48 horas.",
      successMessage:
        "¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto contigo pronto.",
      errorMessage:
        "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
    },
    Privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      intro:
        "En Aftara Tools, nos tomamos muy en serio tu privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información cuando utilizas nuestro sitio web.",
      dataCollectionTitle: "Información que recopilamos",
      dataCollectionText:
        "Nuestras herramientas están diseñadas para ejecutarse localmente en tu navegador. No recopilamos, almacenamos ni transmitimos los datos que ingresas en nuestras calculadoras y herramientas a nuestros servidores. Todos tus cálculos siguen siendo privados en tu dispositivo.",
      analyticsTitle: "Analítica",
      analyticsText:
        "Utilizamos analíticas básicas que respetan la privacidad para comprender el tráfico del sitio web y el uso de las herramientas. Esto no incluye información de identificación personal ni seguimiento invasivo.",
      thirdPartyTitle: "Servicios de Terceros",
      thirdPartyText:
        "Podemos utilizar servicios de terceros para el alojamiento o analíticas, pero nunca compartimos tu información personal o entradas.",
      contactUs:
        "Si tienes alguna pregunta sobre nuestra Política de Privacidad, por favor contáctanos.",
    },
    Terms: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      intro:
        "Al acceder y utilizar Aftara Tools, aceptas cumplir y estar sujeto a los siguientes términos y condiciones de uso.",
      noWarrantyTitle: "Sin Garantías (Tal Cual)",
      noWarrantyText:
        'Todas las herramientas, calculadoras e información de este sitio web se proporcionan "tal cual" sin representaciones ni garantías, expresas o implícitas. No garantizamos la exactitud, fiabilidad o integridad de los resultados generados.',
      liabilityTitle: "Limitación de Responsabilidad",
      liabilityText:
        "En ningún caso Aftara Tools será responsable por daños especiales, directos, indirectos, consecuentes o incidentales, o por cualquier daño que surja de o en conexión con el uso de nuestras herramientas. Esto incluye pérdidas financieras o decisiones médicas tomadas con base en nuestras calculadoras.",
      acceptableUseTitle: "Uso Aceptable",
      acceptableUseText:
        "Aceptas utilizar nuestras herramientas solo para fines legales. No debes intentar extraer datos (scrape), realizar ataques DDoS, o de otro modo interrumpir el servicio o las redes conectadas a Aftara Tools.",
      modificationsTitle: "Modificaciones",
      modificationsText:
        "Nos reservamos el derecho de revisar estos términos de servicio en cualquier momento sin previo aviso. Al utilizar este sitio web, aceptas estar sujeto a la versión actual de estos términos.",
    },
    Cookie: {
      title: "Política de Cookies",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      intro:
        "Esta Política de Cookies explica qué son las cookies y cómo las usamos. Debes leer esta política para poder comprender qué tipo de cookies usamos, o la información que recopilamos usando cookies y cómo se usa esa información.",
      whatAreCookiesTitle: "¿Qué son las Cookies?",
      whatAreCookiesText:
        "Las cookies son pequeños archivos de texto que los sitios web que visitas colocan en tu ordenador o dispositivo móvil. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información de informes.",
      howWeUseCookiesTitle: "Cómo usamos las cookies",
      howWeUseCookiesText:
        'Utilizamos cookies estrictamente para funcionalidades esenciales y preferencias básicas del usuario. Por ejemplo, podemos usar almacenamiento local o una cookie para recordar si prefieres el "Modo oscuro" o el "Modo claro", o para recordar tu idioma preferido.',
      noTrackingTitle: "Sin seguimiento invasivo",
      noTrackingText:
        "No utilizamos cookies publicitarias, rastreadores de terceros ni tecnologías de seguimiento entre sitios. Tu uso de nuestras herramientas sigue siendo privado.",
      managingCookiesTitle: "Gestión de Cookies",
      managingCookiesText:
        "Puedes controlar y/o eliminar cookies como desees. Puedes eliminar todas las cookies que ya están en tu ordenador y puedes configurar la mayoría de los navegadores para evitar que se coloquen.",
    },
  },
  fr: {
    About: {
      title: "À propos de Aftara Tools",
      description:
        "La plateforme de productivité premium pour tous vos besoins quotidiens en matière de calcul, conversion et génération.",
      missionTitle: "Notre Mission",
      missionText:
        "Nous pensons que les calculs et conversions quotidiens doivent être rapides, précis et accessibles à tous. Notre mission est de fournir une suite complète d'outils qui transforment des tâches complexes en de simples clics.",
      methodologyTitle: "Notre Méthodologie",
      methodologyIntro:
        "Nous appliquons des normes rigoureuses à chaque outil que nous construisons.",
      standardizedFormulasTitle: "Formules Standardisées",
      standardizedFormulasText:
        "Nous utilisons des formules et des normes internationalement reconnues pour tous nos calculs afin d'assurer la cohérence dans tous les secteurs.",
      medicalGuidelinesTitle: "Directives Médicales",
      medicalGuidelinesText:
        "Les calculatrices de santé et de remise en forme sont basées sur des formules médicales établies (comme l'équation de Mifflin-St Jeor) avec des références clairement citées.",
      privacyFirstTitle: "Priorité à la Confidentialité",
      privacyFirstText:
        "Tous les calculs sont effectués directement dans votre navigateur. Nous ne stockons, ne suivons, ni ne transmettons jamais vos données d'entrée personnelles.",
      continuousTestingTitle: "Tests Continus",
      continuousTestingText:
        "Nos outils sont soumis à des routines de tests automatisés sur des milliers de cas limites pour garantir une précision mathématique.",
      editorialGuidelinesTitle: "Directives Éditoriales",
      editorialGuidelinesText:
        "Chaque outil est examiné par des experts du domaine avant sa publication. Nous mettons régulièrement à jour nos formules pour suivre l'évolution des normes en finance, santé et technologie.",
      disclaimer:
        "Avis de non-responsabilité : Bien que nous nous efforcions de fournir des résultats précis, nos outils sont fournis à titre informatif uniquement et ne doivent pas remplacer les conseils médicaux, financiers ou juridiques professionnels.",
    },
    Contact: {
      title: "Contactez-nous",
      description:
        "Vous avez une question, une suggestion ou avez trouvé un bug ? Nous serions ravis de vous entendre.",
      formName: "Votre Nom",
      formEmail: "Votre E-mail",
      formSubject: "Sujet",
      formMessage: "Votre Message",
      formSubmit: "Envoyer le Message",
      emailUs: "Envoyez-nous un e-mail",
      emailAddress: "aftaratech@gmail.com",
      responseTime: "Nous visons à répondre dans les 24 à 48 heures.",
      successMessage:
        "Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.",
      errorMessage:
        "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.",
    },
    Privacy: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      intro:
        "Chez Aftara Tools, nous prenons votre vie privée très au sérieux. Cette Politique de Confidentialité décrit comment nous recueillons, utilisons et protégeons les informations lorsque vous utilisez notre site Web.",
      dataCollectionTitle: "Informations que nous recueillons",
      dataCollectionText:
        "Nos outils sont conçus pour fonctionner localement dans votre navigateur. Nous ne recueillons, ne stockons, ni ne transmettons les données que vous saisissez dans nos calculatrices et outils à nos serveurs. Tous vos calculs restent privés sur votre appareil.",
      analyticsTitle: "Analytique",
      analyticsText:
        "Nous utilisons des analyses de base respectueuses de la vie privée pour comprendre le trafic du site Web et l'utilisation des outils. Cela n'inclut aucune information personnellement identifiable ni suivi invasif.",
      thirdPartyTitle: "Services Tiers",
      thirdPartyText:
        "Nous pouvons utiliser des services tiers pour l'hébergement ou l'analytique, mais nous ne partageons jamais vos informations personnelles ou vos entrées.",
      contactUs:
        "Si vous avez des questions sur notre Politique de Confidentialité, veuillez nous contacter.",
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
        "En aucun cas Aftara Tools ne sera responsable de dommages spéciaux, directs, indirects, consécutifs ou accessoires ou de tout dommage de quelque nature que ce soit découlant de ou lié à l'utilisation de nos outils. Cela comprend les pertes financières ou les décisions médicales prises sur la base de nos calculatrices.",
      acceptableUseTitle: "Utilisation Acceptable",
      acceptableUseText:
        "Vous acceptez d'utiliser nos outils uniquement à des fins légales. Vous ne devez pas tenter de récupérer, d'attaquer par déni de service (DDoS), ou de perturber autrement le service ou les réseaux connectés à Aftara Tools.",
      modificationsTitle: "Modificaciones",
      modificationsText:
        "Nous nous réservons le droit de réviser ces conditions d'utilisation à tout moment sans préavis. En utilisant ce site Web, vous acceptez d'être lié par la version alors en vigueur de ces conditions.",
    },
    Cookie: {
      title: "Politique relative aux Cookies",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      intro:
        "Cette Politique relative aux Cookies explique ce que sont les cookies et comment nous les utilisons. Vous devez lire cette politique pour comprendre quel type de cookies nous utilisons, ou les informations que nous recueillons à l'aide de cookies et comment ces informations sont utilisées.",
      whatAreCookiesTitle: "Que sont les Cookies ?",
      whatAreCookiesText:
        "Les cookies sont de petits fichiers texte placés sur votre ordinateur ou appareil mobile par les sites Web que vous visitez. Ils sont largement utilisés pour faire fonctionner les sites Web, ou les faire fonctionner plus efficacement, ainsi que pour fournir des informations de rapport.",
      howWeUseCookiesTitle: "Comment nous utilisons les cookies",
      howWeUseCookiesText:
        'Nous utilisons des cookies strictement pour les fonctionnalités essentielles et les préférences de base de l\'utilisateur. Par exemple, nous pourrions utiliser le stockage local ou un cookie pour nous souvenir si vous préférez le "Mode sombre" ou le "Mode clair", ou pour mémoriser votre langue préférée.',
      noTrackingTitle: "Pas de suivi invasif",
      noTrackingText:
        "Nous n'utilisons pas de cookies publicitaires, de traceurs tiers ou de technologies de suivi intersites. Votre utilisation de nos outils reste privée.",
      managingCookiesTitle: "Gestion des Cookies",
      managingCookiesText:
        "Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et vous pouvez configurer la plupart des navigateurs pour empêcher qu'ils soient placés.",
    },
  },
  it: {
    About: {
      title: "Informazioni su Aftara Tools",
      description:
        "La piattaforma di produttività premium per tutte le tue esigenze quotidiane di calcolo, conversione e generazione.",
      missionTitle: "La Nostra Missione",
      missionText:
        "Crediamo che i calcoli e le conversioni quotidiani debbano essere veloci, precisi e accessibili a tutti. La nostra missione è fornire una suite completa di strumenti che trasformano compiti complessi in semplici clic.",
      methodologyTitle: "La Nostra Metodologia",
      methodologyIntro:
        "Applichiamo standard rigorosi a ogni strumento che costruiamo.",
      standardizedFormulasTitle: "Formule Standardizzate",
      standardizedFormulasText:
        "Utilizziamo formule e standard riconosciuti a livello internazionale su tutti i nostri calcoli per garantire la coerenza nei vari settori.",
      medicalGuidelinesTitle: "Linee Guida Mediche",
      medicalGuidelinesText:
        "Le calcolatrici per salute e fitness si basano su formule mediche consolidate (come l'equazione di Mifflin-St Jeor) con riferimenti chiaramente citati.",
      privacyFirstTitle: "La Privacy Prima di Tutto",
      privacyFirstText:
        "Tutti i calcoli vengono eseguiti direttamente nel tuo browser. Non archiviamo, tracciamo o trasmettiamo mai i tuoi dati di input personali.",
      continuousTestingTitle: "Test Continui",
      continuousTestingText:
        "I nostri strumenti passano attraverso routine di test automatizzati su migliaia di casi limite per garantire l'accuratezza matematica.",
      editorialGuidelinesTitle: "Linee Guida Editoriali",
      editorialGuidelinesText:
        "Ogni strumento viene esaminato da esperti del settore prima della pubblicazione. Aggiorniamo regolarmente le nostre formule per stare al passo con i mutevoli standard in finanza, salute e tecnologia.",
      disclaimer:
        "Dichiarazione di non responsabilità: Sebbene ci sforziamo di fornire risultati accurati, i nostri strumenti sono solo a scopo informativo e non devono sostituire la consulenza medica, finanziaria o legale professionale.",
    },
    Contact: {
      title: "Contattaci",
      description:
        "Hai una domanda, un suggerimento o hai trovato un bug? Ci piacerebbe sentirti.",
      formName: "Il tuo nome",
      formEmail: "La tua e-mail",
      formSubject: "Oggetto",
      formMessage: "Il tuo messaggio",
      formSubmit: "Invia Messaggio",
      emailUs: "Inviaci un'e-mail",
      emailAddress: "aftaratech@gmail.com",
      responseTime: "Puntiamo a rispondere entro 24-48 ore.",
      successMessage:
        "Il tuo messaggio è stato inviato con successo! Ti contatteremo presto.",
      errorMessage:
        "Si è verificato un errore durante l'invio del messaggio. Riprova più tardi.",
    },
    Privacy: {
      title: "Informativa sulla Privacy",
      lastUpdated: "Ultimo aggiornamento: 29 settembre 2026",
      intro:
        "Su Aftara Tools, prendiamo molto sul serio la tua privacy. Questa Informativa sulla Privacy descrive come raccogliamo, utilizziamo e proteggiamo le informazioni quando usi il nostro sito web.",
      dataCollectionTitle: "Informazioni che raccogliamo",
      dataCollectionText:
        "I nostri strumenti sono progettati per funzionare localmente nel tuo browser. Non raccogliamo, archiviamo o trasmettiamo ai nostri server i dati che inserisci nelle nostre calcolatrici e strumenti. Tutti i tuoi calcoli rimangono privati sul tuo dispositivo.",
      analyticsTitle: "Analitica",
      analyticsText:
        "Utilizziamo analisi di base rispettose della privacy per comprendere il traffico del sito web e l'utilizzo degli strumenti. Ciò non include informazioni di identificazione personale o tracciamento invasivo.",
      thirdPartyTitle: "Servizi di Terze Parti",
      thirdPartyText:
        "Potremmo utilizzare servizi di terze parti per l'hosting o l'analytica, ma non condividiamo mai le tue informazioni personali o i tuoi input.",
      contactUs:
        "Se hai domande sulla nostra Informativa sulla Privacy, ti preghiamo di contattarci.",
    },
    Terms: {
      title: "Termini di Servizio",
      lastUpdated: "Ultimo aggiornamento: 29 settembre 2026",
      intro:
        "Accedendo e utilizzando Aftara Tools, accetti di rispettare e di essere vincolato dai seguenti termini e condizioni di utilizzo.",
      noWarrantyTitle: "Nessuna Garanzia (Così Com'è)",
      noWarrantyText:
        'Tutti gli strumenti, le calcolatrici e le informazioni su questo sito web sono forniti "così come sono" senza dichiarazioni o garanzie, esplicite o implicite. Non offriamo alcuna garanzia in merito all\'accuratezza, affidabilità o completezza dei risultati generati.',
      liabilityTitle: "Limitazione di Responsabilità",
      liabilityText:
        "In nessun caso Aftara Tools sarà responsabile per danni speciali, diretti, indiretti, consequenziali o incidentali o qualsiasi danno derivante da o in connessione con l'uso dei nostri strumenti. Ciò include perdite finanziarie o decisioni mediche prese in base alle nostre calcolatrici.",
      acceptableUseTitle: "Uso Accettabile",
      acceptableUseText:
        "Accetti di utilizzare i nostri strumenti solo per scopi legali. Non devi tentare di raschiare (scrape), attaccare con DDoS o altrimenti interrompere il servizio o le reti connesse a Aftara Tools.",
      modificationsTitle: "Modifiche",
      modificationsText:
        "Ci riserviamo il diritto di rivedere questi termini di servizio in qualsiasi momento senza preavviso. Utilizzando questo sito web, accetti di essere vincolato dalla versione in quel momento in vigore di questi termini.",
    },
    Cookie: {
      title: "Informativa sui Cookie",
      lastUpdated: "Ultimo aggiornamento: 29 settembre 2026",
      intro:
        "Questa Informativa sui Cookie spiega cosa sono i cookie e come li utilizziamo. Dovresti leggere questa informativa per capire che tipo di cookie usiamo, o le informazioni che raccogliamo usando i cookie e come tali informazioni vengono utilizzate.",
      whatAreCookiesTitle: "Cosa sono i Cookie?",
      whatAreCookiesText:
        "I cookie sono piccoli file di testo che vengono inseriti nel tuo computer o dispositivo mobile dai siti web che visiti. Sono ampiamente utilizzati per far funzionare i siti web, o farli funzionare in modo più efficiente, nonché per fornire informazioni di reportistica.",
      howWeUseCookiesTitle: "Come usiamo i cookie",
      howWeUseCookiesText:
        'Utilizziamo i cookie strettamente per funzionalità essenziali e preferenze di base dell\'utente. Ad esempio, potremmo utilizzare l\'archiviazione locale o un cookie per ricordare se preferisci la "Modalità scura" o la "Modalità chiara", o per ricordare la tua lingua preferita.',
      noTrackingTitle: "Nessun Tracciamento Invasivo",
      noTrackingText:
        "Non utilizziamo cookie pubblicitari, tracker di terze parti o tecnologie di tracciamento intersito. L'uso dei nostri strumenti rimane privato.",
      managingCookiesTitle: "Gestione dei Cookie",
      managingCookiesText:
        "Puoi controllare e/o eliminare i cookie come preferisci. Puoi eliminare tutti i cookie che sono già presenti sul tuo computer e puoi impostare la maggior parte dei browser per impedire che vengano inseriti.",
    },
  },
  nl: {
    About: {
      title: "Over Aftara Tools",
      description:
        "Hét premium productiviteitsplatform voor al je dagelijkse berekenings-, conversie- en generatiebehoeften.",
      missionTitle: "Onze Missie",
      missionText:
        "Wij geloven dat dagelijkse berekeningen en conversies snel, nauwkeurig en voor iedereen toegankelijk moeten zijn. Onze missie is om een uitgebreide set tools te bieden die complexe taken in simpele klikken veranderen.",
      methodologyTitle: "Onze Methodiek",
      methodologyIntro:
        "We passen strenge normen toe op elke tool die we bouwen.",
      standardizedFormulasTitle: "Gestandaardiseerde Formules",
      standardizedFormulasText:
        "We gebruiken internationaal erkende formules en standaarden voor al onze berekeningen om consistentie over sectoren heen te garanderen.",
      medicalGuidelinesTitle: "Medische Richtlijnen",
      medicalGuidelinesText:
        "Gezondheids- en fitnessrekenmachines zijn gebaseerd op gevestigde medische formules (zoals de Mifflin-St Jeor-vergelijking) met duidelijk geciteerde referenties.",
      privacyFirstTitle: "Privacy Voorop",
      privacyFirstText:
        "Alle berekeningen worden direct in je browser uitgevoerd. We slaan je persoonlijke invoergegevens nooit op, volgen ze niet en verzenden ze niet.",
      continuousTestingTitle: "Continu Testen",
      continuousTestingText:
        "Onze tools doorlopen geautomatiseerde testroutines over duizenden randgevallen om wiskundige nauwkeurigheid te garanderen.",
      editorialGuidelinesTitle: "Redactionele Richtlijnen",
      editorialGuidelinesText:
        "Elke tool wordt voor publicatie beoordeeld door vakexperts. We werken onze formules regelmatig bij om de veranderende standaarden in financiën, gezondheid en technologie bij te houden.",
      disclaimer:
        "Disclaimer: Hoewel we ernaar streven nauwkeurige resultaten te leveren, zijn onze tools uitsluitend voor informatieve doeleinden en mogen ze professioneel medisch, financieel of juridisch advies niet vervangen.",
    },
    Contact: {
      title: "Neem Contact Op",
      description:
        "Heb je een vraag, een suggestie of een bug gevonden? We horen graag van je.",
      formName: "Je Naam",
      formEmail: "Je E-mailadres",
      formSubject: "Onderwerp",
      formMessage: "Je Bericht",
      formSubmit: "Bericht Verzenden",
      emailUs: "Stuur ons een E-mail",
      emailAddress: "aftaratech@gmail.com",
      responseTime: "We streven ernaar binnen 24-48 uur te reageren.",
      successMessage:
        "Je bericht is succesvol verzonden! We nemen spoedig contact met je op.",
      errorMessage:
        "Er is een fout opgetreden bij het verzenden van je bericht. Probeer het later opnieuw.",
    },
    Privacy: {
      title: "Privacybeleid",
      lastUpdated: "Laatst bijgewerkt: 29 september 2026",
      intro:
        "Bij Aftara Tools nemen we je privacy zeer serieus. Dit Privacybeleid beschrijft hoe we informatie verzamelen, gebruiken en beschermen wanneer je onze website gebruikt.",
      dataCollectionTitle: "Informatie die we verzamelen",
      dataCollectionText:
        "Onze tools zijn ontworpen om lokaal in je browser te draaien. We verzamelen, slaan op, of verzenden de gegevens die je invoert in onze rekenmachines en tools niet naar onze servers. Al je berekeningen blijven privé op je apparaat.",
      analyticsTitle: "Analytica",
      analyticsText:
        "We gebruiken basis, privacy-respecterende analyses om websiteverkeer en toolgebruik te begrijpen. Dit omvat geen persoonlijk identificeerbare informatie of invasieve tracking.",
      thirdPartyTitle: "Diensten van Derden",
      thirdPartyText:
        "We kunnen diensten van derden gebruiken voor hosting of analyses, maar we delen je persoonlijke informatie of invoer nooit.",
      contactUs:
        "Als je vragen hebt over ons Privacybeleid, neem dan contact met ons op.",
    },
    Terms: {
      title: "Servicevoorwaarden",
      lastUpdated: "Laatst bijgewerkt: 29 september 2026",
      intro:
        "Door toegang te krijgen tot en gebruik te maken van Aftara Tools, ga je ermee akkoord te voldoen aan en gebonden te zijn door de volgende algemene voorwaarden voor gebruik.",
      noWarrantyTitle: "Geen Garanties (Zoals Het Is)",
      noWarrantyText:
        'Alle tools, rekenmachines en informatie op deze website worden "in de huidige staat" verstrekt zonder enige vertegenwoordigingen of garanties, expliciet of impliciet. Wij garanderen de nauwkeurigheid, betrouwbaarheid of volledigheid van de gegenereerde resultaten niet.',
      liabilityTitle: "Beperking van Aansprakelijkheid",
      liabilityText:
        "In geen geval zal Aftara Tools aansprakelijk zijn voor speciale, directe, indirecte, gevolg- of incidentele schade of welke schade dan ook die voortvloeit uit of in verband staat met het gebruik van onze tools. Dit omvat financiële verliezen of medische beslissingen die zijn genomen op basis van onze rekenmachines.",
      acceptableUseTitle: "Acceptabel Gebruik",
      acceptableUseText:
        "Je stemt ermee in onze tools alleen voor legale doeleinden te gebruiken. Je mag de dienst of netwerken die verbonden zijn met Aftara Tools niet scrapen, DDoS-en of anderszins verstoren.",
      modificationsTitle: "Wijzigingen",
      modificationsText:
        "We behouden ons het recht voor deze servicevoorwaarden op elk moment zonder kennisgeving te herzien. Door deze website te gebruiken, ga je ermee akkoord gebonden te zijn aan de op dat moment geldende versie van deze voorwaarden.",
    },
    Cookie: {
      title: "Cookiebeleid",
      lastUpdated: "Laatst bijgewerkt: 29 september 2026",
      intro:
        "Dit Cookiebeleid legt uit wat cookies zijn en hoe we ze gebruiken. Je moet dit beleid lezen zodat je kunt begrijpen welk type cookies we gebruiken, of de informatie die we verzamelen met behulp van cookies en hoe die informatie wordt gebruikt.",
      whatAreCookiesTitle: "Wat zijn Cookies?",
      whatAreCookiesText:
        "Cookies zijn kleine tekstbestanden die op je computer of mobiele apparaat worden geplaatst door websites die je bezoekt. Ze worden veel gebruikt om websites te laten werken, of efficiënter te laten werken, en om rapportage-informatie te verstrekken.",
      howWeUseCookiesTitle: "Hoe We Cookies Gebruiken",
      howWeUseCookiesText:
        'We gebruiken cookies uitsluitend voor essentiële functionaliteit en basisgebruikersvoorkeuren. We kunnen bijvoorbeeld lokale opslag of een cookie gebruiken om te onthouden of je de voorkeur geeft aan "Donkere Modus" of "Lichte Modus", of om je voorkeurstaal te onthouden.',
      noTrackingTitle: "Geen Invasieve Tracking",
      noTrackingText:
        "We gebruiken geen advertentiecookies, third-party trackers of cross-site tracking technologieën. Je gebruik van onze tools blijft privé.",
      managingCookiesTitle: "Cookies Beheren",
      managingCookiesText:
        "Je kunt cookies beheren en/of verwijderen zoals je wilt. Je kunt alle cookies verwijderen die al op je computer staan en je kunt de meeste browsers zo instellen dat ze niet worden geplaatst.",
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
