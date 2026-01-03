import { useState } from 'react';
import { Language } from '../../utils/translations';
import { SortSelector } from './SortSelector';

interface CientificoAspectProps {
  isDark: boolean;
  language: Language;
  t: (key: string) => string;
}

export function CientificoAspect({ isDark, language, t }: CientificoAspectProps) {
  const [sortBy, setSortBy] = useState<'date' | 'relevance'>('date');
  
  const searchResults = [
    {
      title: {
        es: 'Sistema de Monitoreo Sísmico con ESP32 - Investigación Personal',
        en: 'Seismic Monitoring System with ESP32 - Personal Research',
        pt: 'Sistema de Monitoramento Sísmico com ESP32 - Pesquisa Pessoal',
        de: 'Seismisches Überwachungssystem mit ESP32 - Persönliche Forschung',
        fr: 'Système de Surveillance Sismique avec ESP32 - Recherche Personnelle',
        it: 'Sistema di Monitoraggio Sismico con ESP32 - Ricerca Personale',
        hi: 'ESP32 के साथ भूकंपीय निगरानी प्रणाली - व्यक्तिगत अनुसंधान',
      },
      url: 'research/seismic-monitoring',
      year: '2023-2026',
      description: {
        es: 'Desarrollé sistema IoT con ESP32 y sensor MPU6050 para monitoreo de ondas sísmicas P y S en tiempo real. Implementé procesamiento de datos usando MicroPython para detección y clasificación de vibraciones sísmicas. Diseñé pipeline de Machine Learning para análisis predictivo de actividad sísmica. Proyecto orientado a investigación científica para publicación de paper sobre sismología urbana.',
        en: 'Developed IoT system with ESP32 and MPU6050 sensor for real-time P and S seismic wave monitoring. Implemented data processing using MicroPython for seismic vibration detection and classification. Designed Machine Learning pipeline for predictive seismic activity analysis. Project oriented to scientific research for paper publication on urban seismology.',
        pt: 'Desenvolvi sistema IoT com ESP32 e sensor MPU6050 para monitoramento em tempo real de ondas sísmicas P e S. Implementei processamento de dados usando MicroPython para detecção e classificação de vibrações sísmicas. Projetei pipeline de Machine Learning para análise preditiva de atividade sísmica. Projeto orientado para pesquisa científica para publicação de artigo sobre sismologia urbana.',
        de: 'Entwickeltes IoT-System mit ESP32 und MPU6050-Sensor zur Echtzeitüberwachung seismischer P- und S-Wellen. Implementierte Datenverarbeitung mit MicroPython zur Erkennung und Klassifizierung seismischer Vibrationen. Entworfene Machine-Learning-Pipeline für prädiktive seismische Aktivitätsanalyse. Projekt für wissenschaftliche Forschung zur Veröffentlichung von Artikeln über urbane Seismologie.',
        fr: "Système IoT développé avec ESP32 et capteur MPU6050 pour la surveillance en temps réel des ondes sismiques P et S. Traitement des données implémenté à l'aide de MicroPython pour la détection et la classification des vibrations sismiques. Pipeline de Machine Learning conçu pour l'analyse prédictive de l'activité sismique. Projet orienté vers la recherche scientifique pour la publication d'articles sur la sismologie urbaine.",
        it: 'Sistema IoT sviluppato con ESP32 e sensore MPU6050 per il monitoraggio in tempo reale delle onde sismiche P e S. Elaborazione dati implementata utilizzando MicroPython per il rilevamento e la classificazione delle vibrazioni sismiche. Pipeline di Machine Learning progettata per analisi predittiva dell\'attività sismica. Progetto orientato alla ricerca scientifica per pubblicazione di articoli sulla sismologia urbana.',
        hi: 'रियल-टाइम P और S भूकंपीय तरंग निगरानी के लिए ESP32 और MPU6050 सेंसर के साथ IoT प्रणाली विकसित की। भूकंपीय कंपन का पता लगाने और वर्गीकरण के लिए MicroPython का उपयोग करके डेटा प्रोसेसिंग लागू की। भूकंपीय गतिविधि के पूर्वानुमान विश्लेषण के लिए मशीन लर्निंग पाइपलाइन डिज़ाइन की। शहरी भूकंप विज्ञान पर पेपर प्रकाशन के लिए वैज्ञानिक अनुसंधान उन्मुख परियोजना।',
      },
    },
    {
      title: {
        es: 'Open Source - Ecosistema Python | PyPI',
        en: 'Open Source - Python Ecosystem | PyPI',
        pt: 'Código Aberto - Ecossistema Python | PyPI',
        de: 'Open Source - Python-Ökosystem | PyPI',
        fr: 'Open Source - Écosystème Python | PyPI',
        it: 'Open Source - Ecosistema Python | PyPI',
        hi: 'ओपन सोर्स - Python इकोसिस्टम | PyPI',
      },
      url: 'pypi.org/user/LimitCodey',
      description: {
        es: 'Contribuciones al ecosistema Python con paquetes publicados en PyPI. Herramientas y librerías para desarrollo, automatización y análisis de datos. Mantenimiento activo de proyectos open source con documentación completa.',
        en: 'Contributions to the Python ecosystem with packages published on PyPI. Tools and libraries for development, automation and data analysis. Active maintenance of open source projects with complete documentation.',
        pt: 'Contribuições para o ecossistema Python com pacotes publicados no PyPI. Ferramentas e bibliotecas para desenvolvimento, automação e análise de dados. Manutenção ativa de projetos de código aberto com documentação completa.',
        de: 'Beiträge zum Python-Ökosystem mit auf PyPI veröffentlichten Paketen. Tools und Bibliotheken für Entwicklung, Automatisierung und Datenanalyse. Aktive Wartung von Open-Source-Projekten mit vollständiger Dokumentation.',
        fr: 'Contributions à l\'écosystème Python avec des packages publiés sur PyPI. Outils et bibliothèques pour le développement, l\'automatisation et l\'analyse de données. Maintenance active de projets open source avec documentation complète.',
        it: 'Contributi all\'ecosistema Python con pacchetti pubblicati su PyPI. Strumenti e librerie per sviluppo, automazione e analisi dati. Manutenzione attiva di progetti open source con documentazione completa.',
        hi: 'PyPI पर प्रकाशित पैकेज के साथ Python इकोसिस्टम में योगदान। विकास, स्वचालन और डेटा विश्लेषण के लिए उपकरण और पुस्तकालय। पूर्ण दस्तावेज़ीकरण के साथ ओपन सोर्स परियोजनाओं का सक्रिय रखरखाव।',
      },
    },
    {
      title: {
        es: 'Open Source - Ecosistema JavaScript/TypeScript | npm',
        en: 'Open Source - JavaScript/TypeScript Ecosystem | npm',
        pt: 'Código Aberto - Ecossistema JavaScript/TypeScript | npm',
        de: 'Open Source - JavaScript/TypeScript-Ökosystem | npm',
        fr: 'Open Source - Écosystème JavaScript/TypeScript | npm',
        it: 'Open Source - Ecosistema JavaScript/TypeScript | npm',
        hi: 'ओपन सोर्स - JavaScript/TypeScript इकोसिस्टम | npm',
      },
      url: 'npmjs.com/~limitcodey',
      description: {
        es: 'Paquetes publicados en npm para el ecosistema JavaScript/TypeScript. Componentes React, utilidades para Node.js y herramientas de desarrollo web. Enfoque en código limpio, testing y mejores prácticas.',
        en: 'Packages published on npm for the JavaScript/TypeScript ecosystem. React components, Node.js utilities and web development tools. Focus on clean code, testing and best practices.',
        pt: 'Pacotes publicados no npm para o ecossistema JavaScript/TypeScript. Componentes React, utilitários Node.js e ferramentas de desenvolvimento web. Foco em código limpo, testes e melhores práticas.',
        de: 'Auf npm veröffentlichte Pakete für das JavaScript/TypeScript-Ökosystem. React-Komponenten, Node.js-Utilities und Webentwicklungstools. Fokus auf sauberen Code, Testing und Best Practices.',
        fr: 'Packages publiés sur npm pour l\'écosystème JavaScript/TypeScript. Composants React, utilitaires Node.js et outils de développement web. Accent sur le code propre, les tests et les meilleures pratiques.',
        it: 'Pacchetti pubblicati su npm per l\'ecosistema JavaScript/TypeScript. Componenti React, utilità Node.js e strumenti di sviluppo web. Focus su codice pulito, testing e best practices.',
        hi: 'JavaScript/TypeScript इकोसिस्टम के लिए npm पर प्रकाशित पैकेज। React घटक, Node.js उपयोगिताएँ और वेब विकास उपकरण। स्वच्छ कोड, परीक्षण और सर्वोत्तम प्रथाओं पर ध्यान।',
      },
    },
    {
      title: {
        es: 'Proyectos en GitHub - Repositorios y Contribuciones',
        en: 'GitHub Projects - Repositories and Contributions',
        pt: 'Projetos no GitHub - Repositórios e Contribuições',
        de: 'GitHub-Projekte - Repositories und Beiträge',
        fr: 'Projets GitHub - Dépôts et Contributions',
        it: 'Progetti GitHub - Repository e Contributi',
        hi: 'GitHub परियोजनाएँ - रिपॉजिटरी और योगदान',
      },
      url: 'github.com/LimitCodey',
      description: {
        es: 'Repositorios públicos con proyectos de desarrollo de software, sistemas IoT, aplicaciones web y herramientas de automatización. Colaboración activa en proyectos comunitarios y contribuciones a repositorios populares.',
        en: 'Public repositories with software development projects, IoT systems, web applications and automation tools. Active collaboration on community projects and contributions to popular repositories.',
        pt: 'Repositórios públicos com projetos de desenvolvimento de software, sistemas IoT, aplicações web e ferramentas de automação. Colaboração ativa em projetos comunitários e contribuições para repositórios populares.',
        de: 'Öffentliche Repositories mit Softwareentwicklungsprojekten, IoT-Systemen, Webanwendungen und Automatisierungstools. Aktive Zusammenarbeit bei Community-Projekten und Beiträge zu beliebten Repositories.',
        fr: 'Dépôts publics avec des projets de développement logiciel, systèmes IoT, applications web et outils d\'automatisation. Collaboration active sur des projets communautaires et contributions à des dépôts populaires.',
        it: 'Repository pubblici con progetti di sviluppo software, sistemi IoT, applicazioni web e strumenti di automazione. Collaborazione attiva su progetti comunitari e contributi a repository popolari.',
        hi: 'सॉफ्टवेयर विकास परियोजनाओं, IoT सिस्टम, वेब एप्लिकेशन और स्वचालन उपकरणों के साथ सार्वजनिक रिपॉजिटरी। सामुदायिक परियोजनाओं पर सक्रिय सहयोग और लोकप्रिय रिपॉजिटरी में योगदान।',
      },
    },
    {
      title: {
        es: 'Extensiones y Herramientas - Comunidad de Desarrollo',
        en: 'Extensions and Tools - Development Community',
        pt: 'Extensões e Ferramentas - Comunidade de Desenvolvimento',
        de: 'Erweiterungen und Tools - Entwickler-Community',
        fr: 'Extensions et Outils - Communauté de Développement',
        it: 'Estensioni e Strumenti - Comunità di Sviluppo',
        hi: 'एक्सटेंशन और उपकरण - विकास समुदाय',
      },
      url: 'community/tools',
      description: {
        es: 'Desarrollo de extensiones para VS Code, herramientas CLI y scripts de automatización. Compartiendo conocimiento técnico y soluciones prácticas con la comunidad de desarrolladores global.',
        en: 'Development of VS Code extensions, CLI tools and automation scripts. Sharing technical knowledge and practical solutions with the global developer community.',
        pt: 'Desenvolvimento de extensões para VS Code, ferramentas CLI e scripts de automação. Compartilhando conhecimento técnico e soluções práticas com a comunidade global de desenvolvedores.',
        de: 'Entwicklung von VS Code-Erweiterungen, CLI-Tools und Automatisierungsskripten. Teilen von technischem Wissen und praktischen Lösungen mit der globalen Entwickler-Community.',
        fr: 'Développement d\'extensions VS Code, outils CLI et scripts d\'automatisation. Partage de connaissances techniques et de solutions pratiques avec la communauté mondiale des développeurs.',
        it: 'Sviluppo di estensioni per VS Code, strumenti CLI e script di automazione. Condivisione di conoscenze tecniche e soluzioni pratiche con la comunità globale degli sviluppatori.',
        hi: 'VS Code एक्सटेंशन, CLI उपकरण और स्वचालन स्क्रिप्ट का विकास। वैश्विक डेवलपर समुदाय के साथ तकनीकी ज्ञान और व्यावहारिक समाधान साझा करना।',
      },
    },
  ];

  return (
    <div className={`max-w-4xl mx-auto px-8 py-8 ${isDark ? 'text-white' : 'text-black'}`}>
      <SortSelector isDark={isDark} sortBy={sortBy} onSortChange={setSortBy} t={t} />
      
      <div className="space-y-8">
        {searchResults.map((result, index) => (
          <div key={index} className="mb-8">
            {/* URL */}
            <div className="flex items-center gap-2 mb-1">
              <div className={`text-sm ${isDark ? 'text-[#bdc1c6]' : 'text-gray-700'}`}>
                {result.url}
              </div>
            </div>
            
            {/* Title */}
            <div className="text-xl text-[#1a0dab] hover:underline cursor-pointer block mb-2">
              {result.title[language]}
              {result.year && (
                <span className={`ml-2 text-sm ${isDark ? 'text-[#9aa0a6]' : 'text-gray-600'}`}>
                  [{result.year}]
                </span>
              )}
            </div>
            
            {/* Description */}
            <p className={`text-sm ${isDark ? 'text-[#bdc1c6]' : 'text-gray-700'}`}>
              {result.description[language]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}