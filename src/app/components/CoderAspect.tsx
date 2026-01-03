import { useState } from 'react';
import { Language } from '../../utils/translations';
import { SortSelector } from './SortSelector';
import { PlatformCard } from './PlatformCard';
import { platforms } from '../../data/platforms';

interface CoderAspectProps {
  isDark: boolean;
  language: Language;
  t: (key: string) => string;
}

export function CoderAspect({ isDark, language, t }: CoderAspectProps) {
  const [sortBy, setSortBy] = useState<'date' | 'relevance'>('date');
  
  const searchResults = [
    {
      title: {
        es: 'Lenguajes de Programación - Habilidades Técnicas',
        en: 'Programming Languages - Technical Skills',
        pt: 'Linguagens de Programación - Habilidades Técnicas',
        de: 'Programmiersprachen - Technische Fähigkeiten',
        fr: 'Langages de Programmation - Compétences Techniques',
        it: 'Linguaggi di Programmazione - Competenze Tecniche',
        hi: 'प्रोग्रामिंग भाषाएँ - तकनीकी कौशल',
      },
      url: 'github.com/LimitCodey',
      description: {
        es: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R. Experiencia en desarrollo de aplicaciones, análisis de datos y sistemas embebidos.',
        en: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R. Experience in application development, data analysis and embedded systems.',
        pt: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R. Experiência em desenvolvimento de aplicações, análise de dados e sistemas embarcados.',
        de: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R. Erfahrung in Anwendungsentwicklung, Datenanalyse und eingebetteten Systemen.',
        fr: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R. Expérience en développement d\'applications, analyse de données et systèmes embarqués.',
        it: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R. Esperienza nello sviluppo di applicazioni, analisi dati e sistemi embedded.',
        hi: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R। एप्लिकेशन विकास, डेटा विश्लेषण और एम्बेडेड सिस्टम में अनुभव।',
      },
    },
    {
      title: {
        es: 'Desarrollo Web - Frontend & Backend',
        en: 'Web Development - Frontend & Backend',
        pt: 'Desenvolvimento Web - Frontend e Backend',
        de: 'Webentwicklung - Frontend & Backend',
        fr: 'Développement Web - Frontend & Backend',
        it: 'Sviluppo Web - Frontend & Backend',
        hi: 'वेब विकास - फ्रंटएंड और बैकएंड',
      },
      url: 'projects/web-development',
      description: {
        es: 'HTML, CSS, React, Flask, FastAPI. Desarrollo de aplicaciones web modernas con arquitecturas escalables y APIs RESTful.',
        en: 'HTML, CSS, React, Flask, FastAPI. Development of modern web applications with scalable architectures and RESTful APIs.',
        pt: 'HTML, CSS, React, Flask, FastAPI. Desenvolvimento de aplicações web modernas com arquiteturas escaláveis e APIs RESTful.',
        de: 'HTML, CSS, React, Flask, FastAPI. Entwicklung moderner Webanwendungen mit skalierbaren Architekturen und RESTful-APIs.',
        fr: 'HTML, CSS, React, Flask, FastAPI. Développement d\'applications web modernes avec architectures évolutives et APIs RESTful.',
        it: 'HTML, CSS, React, Flask, FastAPI. Sviluppo di applicazioni web moderne con architetture scalabili e API RESTful.',
        hi: 'HTML, CSS, React, Flask, FastAPI। स्केलेबल आर्किटेक्चर और RESTful API के साथ आधुनिक वेब एप्लिकेशन का विकास।',
      },
    },
    {
      title: {
        es: 'IoT y Sistemas Embebidos - ESP32, MicroPython, Arduino IDE',
        en: 'IoT and Embedded Systems - ESP32, MicroPython, Arduino IDE',
        pt: 'IoT e Sistemas Embarcados - ESP32, MicroPython, Arduino IDE',
        de: 'IoT und Eingebettete Systeme - ESP32, MicroPython, Arduino IDE',
        fr: 'IoT et Systèmes Embarqués - ESP32, MicroPython, Arduino IDE',
        it: 'IoT e Sistemi Embedded - ESP32, MicroPython, Arduino IDE',
        hi: 'IoT और एम्बेडेड सिस्टम - ESP32, MicroPython, Arduino IDE',
      },
      url: 'projects/iot-systems',
      description: {
        es: 'ESP32, MicroPython, Arduino IDE. Desarrollo de sistemas IoT para monitoreo en tiempo real, sensores y automatización. Experiencia en proyectos de investigación científica con hardware.',
        en: 'ESP32, MicroPython, Arduino IDE. Development of IoT systems for real-time monitoring, sensors and automation. Experience in scientific research projects with hardware.',
        pt: 'ESP32, MicroPython, Arduino IDE. Desenvolvimento de sistemas IoT para monitoramento em tempo real, sensores e automação. Experiência em projetos de pesquisa científica com hardware.',
        de: 'ESP32, MicroPython, Arduino IDE. Entwicklung von IoT-Systemen für Echtzeitüberwachung, Sensoren und Automatisierung. Erfahrung in wissenschaftlichen Forschungsprojekten mit Hardware.',
        fr: 'ESP32, MicroPython, Arduino IDE. Développement de systèmes IoT pour surveillance en temps réel, capteurs et automatisation. Expérience dans des projets de recherche scientifique avec du matériel.',
        it: 'ESP32, MicroPython, Arduino IDE. Sviluppo di sistemi IoT per monitoraggio in tempo reale, sensori e automazione. Esperienza in progetti di ricerca scientifica con hardware.',
        hi: 'ESP32, MicroPython, Arduino IDE। रियल-टाइम निगरानी, सेंसर और स्वचालन के लिए IoT सिस्टम का विकास। हार्डवेयर के साथ वैज्ञानिक अनुसंधान परियोजनाओं में अनुभव।',
      },
    },
    {
      title: {
        es: 'Plataformas en la Nube - Azure, Google Cloud, Oracle Cloud',
        en: 'Cloud Platforms - Azure, Google Cloud, Oracle Cloud',
        pt: 'Plataformas na Nuvem - Azure, Google Cloud, Oracle Cloud',
        de: 'Cloud-Plattformen - Azure, Google Cloud, Oracle Cloud',
        fr: 'Plateformes Cloud - Azure, Google Cloud, Oracle Cloud',
        it: 'Piattaforme Cloud - Azure, Google Cloud, Oracle Cloud',
        hi: 'क्लाउड प्लेटफॉर्म - Azure, Google Cloud, Oracle Cloud',
      },
      url: 'certifications/cloud',
      description: {
        es: 'Azure, Google Cloud Platform, Oracle Cloud. Implementación de soluciones cloud escalables, gestión de recursos y optimización de costos operacionales.',
        en: 'Azure, Google Cloud Platform, Oracle Cloud. Implementation of scalable cloud solutions, resource management and operational cost optimization.',
        pt: 'Azure, Google Cloud Platform, Oracle Cloud. Implementação de soluções cloud escaláveis, gestão de recursos e otimização de custos operacionais.',
        de: 'Azure, Google Cloud Platform, Oracle Cloud. Implementierung skalierbarer Cloud-Lösungen, Ressourcenverwaltung und Optimierung der Betriebskosten.',
        fr: 'Azure, Google Cloud Platform, Oracle Cloud. Mise en œuvre de solutions cloud évolutives, gestion des ressources et optimisation des coûts opérationnels.',
        it: 'Azure, Google Cloud Platform, Oracle Cloud. Implementazione di soluzioni cloud scalabili, gestione risorse e ottimizzazione dei costi operativi.',
        hi: 'Azure, Google Cloud Platform, Oracle Cloud। स्केलेबल क्लाउड समाधानों का कार्यान्वयन, संसाधन प्रबंधन और परिचालन लागत अनुकूलन।',
      },
    },
    {
      title: {
        es: 'Herramientas y Software - Git, Docker, Linux, VS Code',
        en: 'Tools and Software - Git, Docker, Linux, VS Code',
        pt: 'Ferramentas e Software - Git, Docker, Linux, VS Code',
        de: 'Werkzeuge und Software - Git, Docker, Linux, VS Code',
        fr: 'Outils et Logiciels - Git, Docker, Linux, VS Code',
        it: 'Strumenti e Software - Git, Docker, Linux, VS Code',
        hi: 'उपकरण और सॉफ्टवेयर - Git, Docker, Linux, VS Code',
      },
      url: 'skills/tools',
      description: {
        es: 'Git, GitHub, Visual Studio Code, Visual Studio Community 2022, PyCharm, Android Studio, Postman, Slack, DBeaver, Wireshark, VirtualBox, Docker, Linux (Arch Linux), Windows.',
        en: 'Git, GitHub, Visual Studio Code, Visual Studio Community 2022, PyCharm, Android Studio, Postman, Slack, DBeaver, Wireshark, VirtualBox, Docker, Linux (Arch Linux), Windows.',
        pt: 'Git, GitHub, Visual Studio Code, Visual Studio Community 2022, PyCharm, Android Studio, Postman, Slack, DBeaver, Wireshark, VirtualBox, Docker, Linux (Arch Linux), Windows.',
        de: 'Git, GitHub, Visual Studio Code, Visual Studio Community 2022, PyCharm, Android Studio, Postman, Slack, DBeaver, Wireshark, VirtualBox, Docker, Linux (Arch Linux), Windows.',
        fr: 'Git, GitHub, Visual Studio Code, Visual Studio Community 2022, PyCharm, Android Studio, Postman, Slack, DBeaver, Wireshark, VirtualBox, Docker, Linux (Arch Linux), Windows.',
        it: 'Git, GitHub, Visual Studio Code, Visual Studio Community 2022, PyCharm, Android Studio, Postman, Slack, DBeaver, Wireshark, VirtualBox, Docker, Linux (Arch Linux), Windows.',
        hi: 'Git, GitHub, Visual Studio Code, Visual Studio Community 2022, PyCharm, Android Studio, Postman, Slack, DBeaver, Wireshark, VirtualBox, Docker, Linux (Arch Linux), Windows।',
      },
    },
    {
      title: {
        es: 'Bases de Datos y Análisis de Datos',
        en: 'Databases and Data Analysis',
        pt: 'Bancos de Dados e Análise de Dados',
        de: 'Datenbanken und Datenanalyse',
        fr: 'Bases de Données et Analyse de Données',
        it: 'Database e Analisi Dati',
        hi: 'डेटाबेस और डेटा विश्लेषण',
      },
      url: 'skills/databases',
      description: {
        es: 'SQL Server, MySQL, PostgreSQL, Power BI, Power Query, Tableau, Excel, BigQuery. Experiencia en modelado de datos y visualización.',
        en: 'SQL Server, MySQL, PostgreSQL, Power BI, Power Query, Tableau, Excel, BigQuery. Experience in data modeling and visualization.',
        pt: 'SQL Server, MySQL, PostgreSQL, Power BI, Power Query, Tableau, Excel, BigQuery. Experiência em modelagem e visualização de dados.',
        de: 'SQL Server, MySQL, PostgreSQL, Power BI, Power Query, Tableau, Excel, BigQuery. Erfahrung in Datenmodellierung und Visualisierung.',
        fr: 'SQL Server, MySQL, PostgreSQL, Power BI, Power Query, Tableau, Excel, BigQuery. Expérience en modélisation et visualisation de données.',
        it: 'SQL Server, MySQL, PostgreSQL, Power BI, Power Query, Tableau, Excel, BigQuery. Esperienza in modellazione dati e visualizzazione.',
        hi: 'SQL Server, MySQL, PostgreSQL, Power BI, Power Query, Tableau, Excel, BigQuery। डेटा मॉडलिंग और विज़ुअलाइज़ेशन में अनुभव।',
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
            </div>
            
            {/* Description */}
            <p className={`text-sm ${isDark ? 'text-[#bdc1c6]' : 'text-gray-700'}`}>
              {result.description[language]}
            </p>
          </div>
        ))}
      </div>

      {/* Coding Platforms Section */}
      <div className="mt-12">
        <h2 className={`text-2xl mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
          {t('codingPlatforms')}
        </h2>
        <p className={`text-sm mb-6 ${isDark ? 'text-[#9aa0a6]' : 'text-gray-600'}`}>
          {t('platformsSubtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {platforms.map((platform) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
              isDark={isDark}
              language={language}
            />
          ))}
        </div>
      </div>
    </div>
  );
}