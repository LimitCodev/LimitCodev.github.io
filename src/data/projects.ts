export interface Project {
  id: string;
  title: {
    es: string;
    en: string;
    pt: string;
    de: string;
    fr: string;
    it: string;
    hi: string;
  };
  description: {
    es: string;
    en: string;
    pt: string;
    de: string;
    fr: string;
    it: string;
    hi: string;
  };
  aspect: 'personal' | 'coder' | 'cientifico' | 'academico';
  link: string;
  year: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'unac-library',
    title: {
      es: 'UNAC Digital Library',
      en: 'UNAC Digital Library',
      pt: 'Biblioteca Digital UNAC',
      de: 'UNAC Digitale Bibliothek',
      fr: 'Bibliothèque Numérique UNAC',
      it: 'Biblioteca Digitale UNAC',
      hi: 'UNAC डिजिटल पुस्तकालय',
    },
    description: {
      es: 'Diseñé y desarrollé repositorio digital empresarial con arquitectura escalable logrando 80% en costos operacionales mediante Oracle Cloud y Google Drive. Implementé sistema de gestión documental capaz de almacenar y procesar 300+ PDFs de exámenes académicos para estudiantes de FIIS-UNAC.',
      en: 'Designed and developed enterprise digital repository with scalable architecture achieving 80% operational cost savings through Oracle Cloud and Google Drive. Implemented document management system capable of storing and processing 300+ academic exam PDFs for FIIS-UNAC students.',
      pt: 'Projetei e desenvolvi repositório digital empresarial com arquitetura escalável alcançando 80% de economia em custos operacionais através do Oracle Cloud e Google Drive. Implementei sistema de gestão documental capaz de armazenar e processar mais de 300 PDFs de exames acadêmicos para estudantes FIIS-UNAC.',
      de: 'Entworfenes und entwickeltes Unternehmens-Digital-Repository mit skalierbarer Architektur, das 80% Einsparungen bei den Betriebskosten durch Oracle Cloud und Google Drive erreicht. Implementiertes Dokumentenmanagementsystem, das über 300 akademische Prüfungs-PDFs für FIIS-UNAC-Studenten speichern und verarbeiten kann.',
      fr: 'Conception et développement d\'un référentiel numérique d\'entreprise avec une architecture évolutive permettant une réduction de 80% des coûts opérationnels grâce à Oracle Cloud et Google Drive. Système de gestion documentaire implémenté capable de stocker et traiter plus de 300 PDF d\'examens académiques pour les étudiants FIIS-UNAC.',
      it: 'Progettato e sviluppato repository digitale aziendale con architettura scalabile ottenendo un risparmio dell\'80% sui costi operativi tramite Oracle Cloud e Google Drive. Implementato sistema di gestione documentale in grado di archiviare ed elaborare oltre 300 PDF di esami accademici per studenti FIIS-UNAC.',
      hi: 'Oracle Cloud और Google Drive के माध्यम से 80% परिचालन लागत बचत प्राप्त करते हुए स्केलेबल आर्किटेक्चर के साथ एंटरप्राइज़ डिजिटल रिपॉजिटरी डिज़ाइन और विकसित की। FIIS-UNAC छात्रों के लिए 300+ शैक्षणिक परीक्षा PDF को संग्रहीत और संसाधित करने में सक्षम दस्तावेज़ प्रबंधन प्रणाली लागू की।',
    },
    aspect: 'academico',
    link: 'https://github.com/LimitCodey/UNAC-Digital-Library',
    year: '2025-12-06',
  },
  {
    id: 'pio-music',
    title: {
      es: 'PIO-Music - Personal Challenge',
      en: 'PIO-Music - Personal Challenge',
      pt: 'PIO-Music - Desafio Pessoal',
      de: 'PIO-Music - Persönliche Herausforderung',
      fr: 'PIO-Music - Défi Personnel',
      it: 'PIO-Music - Sfida Personale',
      hi: 'PIO-Music - व्यक्तिगत चुनौती',
    },
    description: {
      es: 'Desarrollé mi reproductor de música offline de alto rendimiento con arquitectura limpia usando React Native para nivel 1 Electron desktop. Implementé sistema de gestión de monorepositorio con Turborepo para optimizar el desarrollo multiplataforma.',
      en: 'Developed my high-performance offline music player with clean architecture using React Native for level 1 Electron desktop. Implemented monorepo management system with Turborepo to optimize cross-platform development.',
      pt: 'Desenvolvi meu reprodutor de música offline de alto desempenho com arquitetura limpa usando React Native para desktop Electron nível 1. Implementei sistema de gerenciamento de monorepositório com Turborepo para otimizar o desenvolvimento multiplataforma.',
      de: 'Entwickelte meinen Hochleistungs-Offline-Musikplayer mit sauberer Architektur unter Verwendung von React Native für Level 1 Electron Desktop. Implementiertes Monorepo-Verwaltungssystem mit Turborepo zur Optimierung der plattformübergreifenden Entwicklung.',
      fr: "J'ai développé mon lecteur de musique hors ligne haute performance avec une architecture propre en utilisant React Native pour le bureau Electron de niveau 1. Système de gestion de monoréférentiel implémenté avec Turborepo pour optimiser le développement multiplateforme.",
      it: 'Ho sviluppato il mio lettore musicale offline ad alte prestazioni con architettura pulita utilizzando React Native per desktop Electron livello 1. Sistema di gestione monorepo implementato con Turborepo per ottimizzare lo sviluppo multipiattaforma.',
      hi: 'रिएक्ट नेटिव का उपयोग करके स्तर 1 इलेक्ट्रॉन डेस्कटॉप के लिए स्वच्छ वास्तुकला के साथ मेरा उच्च-प्रदर्शन ऑफ़लाइन संगीत प्लेयर विकसित किया। क्रॉस-प्लेटफ़ॉर्म विकास को अनुकूलित करने के लिए Turborepo के साथ मोनोरेपो प्रबंधन प्रणाली लागू की।',
    },
    aspect: 'coder',
    link: 'https://github.com/LimitCodey/PIO-Music',
    year: '2025-11-29',
  },
  {
    id: 'hack-cis-ieee',
    title: {
      es: 'HACK-CIS-IEEE - Universidad Nacional de Ingeniería',
      en: 'HACK-CIS-IEEE - National University of Engineering',
      pt: 'HACK-CIS-IEEE - Universidade Nacional de Engenharia',
      de: 'HACK-CIS-IEEE - Nationale Ingenieuruniversität',
      fr: 'HACK-CIS-IEEE - Université Nationale d\'Ingénierie',
      it: 'HACK-CIS-IEEE - Università Nazionale di Ingegneria',
      hi: 'HACK-CIS-IEEE - राष्ट्रीय इंजीनियरिंग विश्वविद्यालय',
    },
    description: {
      es: 'Participé en el hackathon HACK-CIS-IEEE organizado por la Universidad Nacional de Ingeniería (UNI). Desarrollé soluciones tecnológicas innovadoras en equipo durante competencia de programación intensiva.',
      en: 'Participated in the HACK-CIS-IEEE hackathon organized by the National University of Engineering (UNI). Developed innovative technological solutions in teams during intensive programming competition.',
      pt: 'Participei do hackathon HACK-CIS-IEEE organizado pela Universidade Nacional de Engenharia (UNI). Desenvolvi soluções tecnológicas inovadoras em equipe durante competição intensiva de programação.',
      de: 'Teilnahme am HACK-CIS-IEEE-Hackathon, organisiert von der Nationalen Ingenieuruniversität (UNI). Entwicklung innovativer technologischer Lösungen im Team während eines intensiven Programmierwettbewerbs.',
      fr: 'Participation au hackathon HACK-CIS-IEEE organisé par l\'Université Nationale d\'Ingénierie (UNI). Développement de solutions technologiques innovantes en équipe lors d\'une compétition de programmation intensive.',
      it: 'Partecipazione all\'hackathon HACK-CIS-IEEE organizzato dall\'Università Nazionale di Ingegneria (UNI). Sviluppo di soluzioni tecnologiche innovative in team durante una competizione di programmazione intensiva.',
      hi: 'राष्ट्रीय इंजीनियरिंग विश्वविद्यालय (UNI) द्वारा आयोजित HACK-CIS-IEEE हैकाथॉन में भाग लिया। गहन प्रोग्रामिंग प्रतियोगिता के दौरान टीम में नवीन तकनीकी समाधान विकसित किए।',
    },
    aspect: 'academico',
    link: 'https://github.com/LimitCodey/HACK-CIS-IEEE-UNI',
    year: '2025-11-03',
  },
  {
    id: 'nasa-tempo',
    title: {
      es: 'Air Quality Dashboard - NASA TEMPO',
      en: 'Air Quality Dashboard - NASA TEMPO',
      pt: 'Dashboard de Qualidade do Ar - NASA TEMPO',
      de: 'Luftqualitäts-Dashboard - NASA TEMPO',
      fr: 'Tableau de Bord de Qualité de l\'Air - NASA TEMPO',
      it: 'Dashboard Qualità dell\'Aria - NASA TEMPO',
      hi: 'वायु गुणवत्ता डैशबोर्ड - NASA TEMPO',
    },
    description: {
      es: 'Dashboard web diseñado para proteger poblaciones vulnerables de la contaminación del aire, usando datos de calidad del aire en tiempo real, información meteorológica y simulaciones científicas. Desarrollado durante el NASA Space Apps Challenge 2025.',
      en: 'Web dashboard designed to protect vulnerable populations from air pollution, using real-time air quality data, meteorological information and scientific simulations. Developed during the NASA Space Apps Challenge 2025.',
      pt: 'Dashboard web projetado para proteger populações vulneráveis da poluição do ar, usando dados de qualidade do ar em tempo real, informações meteorológicas e simulações científicas. Desenvolvido durante o NASA Space Apps Challenge 2025.',
      de: 'Web-Dashboard zum Schutz gefährdeter Bevölkerungsgruppen vor Luftverschmutzung unter Verwendung von Echtzeit-Luftqualitätsdaten, meteorologischen Informationen und wissenschaftlichen Simulationen. Entwickelt während der NASA Space Apps Challenge 2025.',
      fr: 'Tableau de bord web conçu pour protéger les populations vulnérables de la pollution atmosphérique, en utilisant des données de qualité de l\'air en temps réel, des informations météorologiques et des simulations scientifiques. Développé lors du NASA Space Apps Challenge 2025.',
      it: 'Dashboard web progettata per proteggere le popolazioni vulnerabili dall\'inquinamento atmosferico, utilizzando dati sulla qualità dell\'aria in tempo reale, informazioni meteorologiche e simulazioni scientifiche. Sviluppata durante il NASA Space Apps Challenge 2025.',
      hi: 'वास्तविक समय वायु गुणवत्ता डेटा, मौसम विज्ञान की जानकारी और वैज्ञानिक सिमुलेशन का उपयोग करके वायु प्रदूषण से कमजोर आबादी की रक्षा के लिए डिज़ाइन किया गया वेब डैशबोर्ड। NASA Space Apps Challenge 2025 के दौरान विकसित।',
    },
    aspect: 'cientifico',
    link: 'https://github.com/LimitCodey/2025_NASA_Space_Apps_Challenge',
    year: '2025-10-05',
  },
  {
    id: 'seismic-monitoring',
    title: {
      es: 'Sistema de Monitoreo Sísmico con ESP32',
      en: 'Seismic Monitoring System with ESP32',
      pt: 'Sistema de Monitoramento Sísmico com ESP32',
      de: 'Seismisches Überwachungssystem mit ESP32',
      fr: 'Système de Surveillance Sismique avec ESP32',
      it: 'Sistema di Monitoraggio Sismico con ESP32',
      hi: 'ESP32 के साथ भूकंपीय निगरानी प्रणाली',
    },
    description: {
      es: 'Desarrollé sistema IoT con ESP32 y sensor MPU6050 para monitoreo de ondas sísmicas P y S en tiempo real. Implementé procesamiento de datos usando MicroPython para detección y clasificación de vibraciones sísmicas. Proyecto orientado a investigación científica.',
      en: 'Developed IoT system with ESP32 and MPU6050 sensor for real-time P and S seismic wave monitoring. Implemented data processing using MicroPython for seismic vibration detection and classification. Project oriented to scientific research.',
      pt: 'Desenvolvi sistema IoT com ESP32 e sensor MPU6050 para monitoramento em tempo real de ondas sísmicas P e S. Implementei processamento de dados usando MicroPython para detecção e classificação de vibrações sísmicas. Projeto orientado para pesquisa científica.',
      de: 'Entwickeltes IoT-System mit ESP32 und MPU6050-Sensor zur Echtzeitüberwachung seismischer P- und S-Wellen. Implementierte Datenverarbeitung mit MicroPython zur Erkennung und Klassifizierung seismischer Vibrationen. Projekt für wissenschaftliche Forschung.',
      fr: "Système IoT développé avec ESP32 et capteur MPU6050 pour la surveillance en temps réel des ondes sismiques P et S. Traitement des données implémenté à l'aide de MicroPython pour la détection et la classification des vibrations sismiques. Projet orienté vers la recherche scientifique.",
      it: 'Sistema IoT sviluppato con ESP32 e sensore MPU6050 per il monitoraggio in tempo reale delle onde sismiche P e S. Elaborazione dati implementata utilizzando MicroPython per il rilevamento e la classificazione delle vibrazioni sismiche. Progetto orientato alla ricerca scientifica.',
      hi: 'रियल-टाइम P और S भूकंपीय तरंग निगरानी के लिए ESP32 और MPU6050 सेंसर के साथ IoT प्रणाली विकसित की। भूकंपीय कंपन का पता लगाने और वर्गीकरण के लिए MicroPython का उपयोग करके डेटा प्रोसेसिंग लागू की। वैज्ञानिक अनुसंधान उन्मुख परियोजना।',
    },
    aspect: 'cientifico',
    link: 'https://github.com/LimitCodey/seismic-monitoring',
    year: '2023-01-01',
  },
];