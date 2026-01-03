import { useState } from 'react';
import { Language } from '../../utils/translations';
import { SortSelector } from './SortSelector';

interface AcademicoAspectProps {
  isDark: boolean;
  language: Language;
  t: (key: string) => string;
}

export function AcademicoAspect({ isDark, language, t }: AcademicoAspectProps) {
  const [sortBy, setSortBy] = useState<'date' | 'relevance'>('date');

  const searchResults = [
    {
      title: {
        es: 'Universidad Nacional del Callao - Estudiante de Ingeniería de Sistemas',
        en: 'Universidad Nacional del Callao - Systems Engineering Student',
        pt: 'Universidad Nacional del Callao - Estudante de Engenharia de Sistemas',
        de: 'Universidad Nacional del Callao - Systemtechnik-Student',
        fr: 'Universidad Nacional del Callao - Étudiant en Génie des Systèmes',
        it: 'Universidad Nacional del Callao - Studente di Ingegneria dei Sistemi',
        hi: 'Universidad Nacional del Callao - सिस्टम इंजीनियरिंग का छात्र',
      },
      url: 'unac.edu.pe',
      year: '2024 - 2028 (Esperado)',
      description: {
        es: 'Actualmente cursando Ingeniería de Sistemas en la Universidad Nacional del Callao, Callao, Perú. Formación en desarrollo de software, análisis de datos, arquitectura de sistemas y gestión de proyectos tecnológicos.',
        en: 'Currently studying Systems Engineering at Universidad Nacional del Callao, Callao, Peru. Training in software development, data analysis, systems architecture and technology project management.',
        pt: 'Atualmente cursando Engenharia de Sistemas na Universidad Nacional del Callao, Callao, Peru. Formação em desenvolvimento de software, análise de dados, arquitetura de sistemas e gestão de projetos tecnológicos.',
        de: 'Derzeit Studium der Systemtechnik an der Universidad Nacional del Callao, Callao, Peru. Ausbildung in Softwareentwicklung, Datenanalyse, Systemarchitektur und Technologieprojektmanagement.',
        fr: 'Actuellement étudiant en génie des systèmes à l\'Universidad Nacional del Callao, Callao, Pérou. Formation en développement logiciel, analyse de données, architecture de systèmes et gestion de projets technologiques.',
        it: 'Attualmente studente di Ingegneria dei Sistemi presso Universidad Nacional del Callao, Callao, Perù. Formazione in sviluppo software, analisi dati, architettura di sistemi e gestione di progetti tecnologici.',
        hi: 'वर्तमान में Universidad Nacional del Callao, Callao, Peru में सिस्टम इंजीनियरिंग की पढ़ाई कर रहे हैं। सॉफ्टवेयर विकास, डेटा विश्लेषण, सिस्टम आर्किटेक्चर और प्रौद्योगिकी परियोजना प्रबंधन में प्रशिक्षण।',
      },
    },
    {
      title: {
        es: 'Bootcamp Azure AI Engineer Associate - Código Pacífico',
        en: 'Bootcamp Azure AI Engineer Associate - Código Pacífico',
        pt: 'Bootcamp Azure AI Engineer Associate - Código Pacífico',
        de: 'Bootcamp Azure AI Engineer Associate - Código Pacífico',
        fr: 'Bootcamp Azure AI Engineer Associate - Código Pacífico',
        it: 'Bootcamp Azure AI Engineer Associate - Código Pacífico',
        hi: 'Bootcamp Azure AI Engineer Associate - Código Pacífico',
      },
      url: 'codigopacífico.pe',
      year: '2025',
      description: {
        es: 'Programa intensivo de Bootcamp en Azure AI Engineer Associate. Formación práctica en desarrollo de soluciones de IA, machine learning y servicios cognitivos en Microsoft Azure.',
        en: 'Intensive Bootcamp program in Azure AI Engineer Associate. Hands-on training in AI solution development, machine learning and cognitive services on Microsoft Azure.',
        pt: 'Programa intensivo de Bootcamp em Azure AI Engineer Associate. Treinamento prático em desenvolvimento de soluções de IA, machine learning e serviços cognitivos no Microsoft Azure.',
        de: 'Intensives Bootcamp-Programm in Azure AI Engineer Associate. Praktisches Training in KI-Lösungsentwicklung, maschinellem Lernen und kognitiven Diensten auf Microsoft Azure.',
        fr: 'Programme intensif de Bootcamp en Azure AI Engineer Associate. Formation pratique au développement de solutions d\'IA, apprentissage automatique et services cognitifs sur Microsoft Azure.',
        it: 'Programma intensivo di Bootcamp in Azure AI Engineer Associate. Formazione pratica nello sviluppo di soluzioni IA, machine learning e servizi cognitivi su Microsoft Azure.',
        hi: 'Azure AI Engineer Associate में गहन Bootcamp कार्यक्रम। Microsoft Azure पर AI समाधान विकास, मशीन लर्निंग और संज्ञानात्मक सेवाओं में व्यावहारिक प्रशिक्षण।',
      },
    },
    {
      title: {
        es: 'Certificaciones BigData Academy y Google Cloud Platform',
        en: 'BigData Academy and Google Cloud Platform Certifications',
        pt: 'Certificações BigData Academy e Google Cloud Platform',
        de: 'BigData Academy und Google Cloud Platform Zertifizierungen',
        fr: 'Certifications BigData Academy et Google Cloud Platform',
        it: 'Certificazioni BigData Academy e Google Cloud Platform',
        hi: 'BigData Academy और Google Cloud Platform प्रमाणपत्र',
      },
      url: 'bigdataacademy.com',
      year: '2025',
      description: {
        es: 'Procesos con GCP by BigData Academy (2025). Formación en procesamiento de datos a gran escala, análisis distribuido y arquitecturas big data en Google Cloud Platform.',
        en: 'Processes with GCP by BigData Academy (2025). Training in large-scale data processing, distributed analysis and big data architectures on Google Cloud Platform.',
        pt: 'Processos com GCP pela BigData Academy (2025). Formação em processamento de dados em larga escala, análise distribuída e arquiteturas big data no Google Cloud Platform.',
        de: 'Prozesse mit GCP von BigData Academy (2025). Schulung in großem Datenverarbeitung, verteilter Analyse und Big-Data-Architekturen auf Google Cloud Platform.',
        fr: 'Processus avec GCP par BigData Academy (2025). Formation au traitement de données à grande échelle, analyse distribuée et architectures big data sur Google Cloud Platform.',
        it: 'Processi con GCP di BigData Academy (2025). Formazione nell\'elaborazione di dati su larga scala, analisi distribuita e architetture big data su Google Cloud Platform.',
        hi: 'BigData Academy द्वारा GCP के साथ प्रक्रियाएँ (2025)। Google Cloud Platform पर बड़े पैमाने पर डेटा प्रोसेसिंग, वितरित विश्लेषण और बिग डेटा आर्किटेक्चर में प्रशिक्षण।',
      },
    },
    {
      title: {
        es: 'Certificaciones CTIC-UNI - Programación y Tecnologías',
        en: 'CTIC-UNI Certifications - Programming and Technologies',
        pt: 'Certificações CTIC-UNI - Programação e Tecnologias',
        de: 'CTIC-UNI-Zertifizierungen - Programmierung und Technologien',
        fr: 'Certifications CTIC-UNI - Programmation et Technologies',
        it: 'Certificazioni CTIC-UNI - Programmazione e Tecnologias',
        hi: 'CTIC-UNI प्रमाणपत्र - प्रोग्रामिंग और प्रौद्योगिकियाँ',
      },
      url: 'ctic.uni.edu.pe',
      year: '2023-2024',
      description: {
        es: 'Programación en Python Intermedio (2025), Curso Promedio de Excel (2025), Curso Git y GitHub (2025), Ciberseguridad Pentesting Contra Aplicaciones Web (2024), SQL Server Base de Datos 2 (2024), Power BI Intermedio (2024). Formación técnica integral en desarrollo y seguridad.',
        en: 'Intermediate Python Programming (2025), Average Excel Course (2025), Git and GitHub Course (2025), Pentesting Cybersecurity Against Web Applications (2024), SQL Server Database 2 (2024), Intermediate Power BI (2024). Comprehensive technical training in development and security.',
        pt: 'Programação Python Intermediária (2025), Curso Médio de Excel (2025), Curso Git e GitHub (2025), Cibersegurança Pentesting Contra Aplicações Web (2024), SQL Server Base de Dados 2 (2024), Power BI Intermediário (2024). Formação técnica abrangente em desenvolvimento e segurança.',
        de: 'Fortgeschrittene Python-Programmierung (2025), Durchschnittlicher Excel-Kurs (2025), Git- und GitHub-Kurs (2025), Pentesting-Cybersicherheit gegen Webanwendungen (2024), SQL Server-Datenbank 2 (2024), Fortgeschrittenes Power BI (2024). Umfassende technische Ausbildung in Entwicklung und Sicherheit.',
        fr: 'Programmation Python Intermédiaire (2025), Cours Excel Moyen (2025), Cours Git et GitHub (2025), Cybersécurité Pentesting Contre Applications Web (2024), Base de Données SQL Server 2 (2024), Power BI Intermédiaire (2024). Formation technique complète en développement et sécurité.',
        it: 'Programmazione Python Intermedio (2025), Corso Excel Medio (2025), Corso Git e GitHub (2025), Cybersecurity Pentesting Contro Applicazioni Web (2024), Database SQL Server 2 (2024), Power BI Intermedio (2024). Formazione tecnica completa nello sviluppo e sicurezza.',
        hi: 'मध्यवर्ती Python प्रोग्रामिंग (2025), औसत Excel पाठ्यक्रम (2025), Git और GitHub पाठ्यक्रम (2025), वेब एप्लिकेशन के खिलाफ Pentesting साइबर सुरक्षा (2024), SQL Server डेटाबेस 2 (2024), मध्यवर्ती Power BI (2024)। विकास और सुरक्षा में व्यापक तकनीकी प्रशिक्षण।',
      },
    },
    {
      title: {
        es: 'Platzi - Cursos de Desarrollo y Cloud',
        en: 'Platzi - Development and Cloud Courses',
        pt: 'Platzi - Cursos de Desenvolvimento e Cloud',
        de: 'Platzi - Entwicklungs- und Cloud-Kurse',
        fr: 'Platzi - Cours de Développement et Cloud',
        it: 'Platzi - Corsi di Sviluppo e Cloud',
        hi: 'Platzi - विकास और Cloud पाठ्यक्रम',
      },
      url: 'platzi.com',
      year: '2025',
      description: {
        es: 'Curso Git y GitHub by Platzi (2025). Formación en control de versiones, colaboración en equipo y flujos de trabajo con Git. Mejores prácticas para desarrollo de software colaborativo.',
        en: 'Git and GitHub Course by Platzi (2025). Training in version control, team collaboration and workflows with Git. Best practices for collaborative software development.',
        pt: 'Curso Git e GitHub pela Platzi (2025). Formação em controle de versões, colaboração em equipe e fluxos de trabalho com Git. Melhores práticas para desenvolvimento de software colaborativo.',
        de: 'Git- und GitHub-Kurs von Platzi (2025). Schulung in Versionskontrolle, Teamzusammenarbeit und Workflows mit Git. Best Practices für kollaborative Softwareentwicklung.',
        fr: 'Cours Git et GitHub par Platzi (2025). Formation au contrôle de version, collaboration d\'équipe et flux de travail avec Git. Meilleures pratiques pour le développement logiciel collaboratif.',
        it: 'Corso Git e GitHub di Platzi (2025). Formazione nel controllo versione, collaborazione di team e flussi di lavoro con Git. Best practices per lo sviluppo software collaborativo.',
        hi: 'Platzi द्वारा Git और GitHub पाठ्यक्रम (2025)। संस्करण नियंत्रण, टीम सहयोग और Git के साथ कार्यप्रवाह में प्रशिक्षण। सहयोगी सॉफ्टवेयर विकास के लिए सर्वोत्तम प्रथाएँ।',
      },
    },
    {
      title: {
        es: 'UNAC Digital Library - Proyecto Académico',
        en: 'UNAC Digital Library - Academic Project',
        pt: 'Biblioteca Digital UNAC - Projeto Acadêmico',
        de: 'UNAC Digitale Bibliothek - Akademisches Projekt',
        fr: 'Bibliothèque Numérique UNAC - Projet Académique',
        it: 'Biblioteca Digitale UNAC - Progetto Accademico',
        hi: 'UNAC डिजिटल पुस्तकालय - शैक्षणिक परियोजना',
      },
      url: 'projects.unac.edu.pe/library',
      year: '2025',
      description: {
        es: 'Diseñé y desarrollé repositorio digital empresarial con arquitectura escalable logrando 80% en costos operacionales mediante Oracle Cloud y Google Drive. Implementé sistema de gestión documental capaz de almacenar y procesar 300+ PDFs de exámenes académicos para estudiantes de FIIS-UNAC. Desarrollé procesamiento automatizado de alta velocidad para soportar 10,000+ usuarios concurrentes.',
        en: 'Designed and developed enterprise digital repository with scalable architecture achieving 80% operational cost savings through Oracle Cloud and Google Drive. Implemented document management system capable of storing and processing 300+ academic exam PDFs for FIIS-UNAC students. Developed high-speed automated processing to support 10,000+ concurrent users.',
        pt: 'Projetei e desenvolvi repositório digital empresarial com arquitetura escalável alcançando 80% de economia em custos operacionais através do Oracle Cloud e Google Drive. Implementei sistema de gestão documental capaz de armazenar e processar mais de 300 PDFs de exames acadêmicos para estudantes FIIS-UNAC. Desenvolvi processamento automatizado de alta velocidade para suportar mais de 10.000 usuários simultâneos.',
        de: 'Entworfenes und entwickeltes Unternehmens-Digital-Repository mit skalierbarer Architektur, das 80% Einsparungen bei den Betriebskosten durch Oracle Cloud und Google Drive erreicht. Implementiertes Dokumentenmanagementsystem, das über 300 akademische Prüfungs-PDFs für FIIS-UNAC-Studenten speichern und verarbeiten kann. Hochgeschwindigkeits-Automatisierung entwickelt, um über 10.000 gleichzeitige Benutzer zu unterstützen.',
        fr: 'Conception et développement d\'un référentiel numérique d\'entreprise avec une architecture évolutive permettant une réduction de 80% des coûts opérationnels grâce à Oracle Cloud et Google Drive. Système de gestion documentaire implémenté capable de stocker et traiter plus de 300 PDF d\'examens académiques pour les étudiants FIIS-UNAC. Traitement automatisé à grande vitesse développé pour prendre en charge plus de 10 000 utilisateurs simultanés.',
        it: 'Progettato e sviluppato repository digitale aziendale con architettura scalabile ottenendo un risparmio dell\'80% sui costi operativi tramite Oracle Cloud e Google Drive. Implementato sistema di gestione documentale in grado di archiviare ed elaborare oltre 300 PDF di esami accademici per studenti FIIS-UNAC. Sviluppato elaborazione automatizzata ad alta velocità per supportare oltre 10.000 utenti simultanei.',
        hi: 'Oracle Cloud और Google Drive के माध्यम से 80% परिचालन लागत बचत प्राप्त करते हुए स्केलेबल आर्किटेक्चर के साथ एंटरप्राइज़ डिजिटल रिपॉजिटरी डिज़ाइन और विकसित की। FIIS-UNAC छात्रों के लिए 300+ शैक्षणिक परीक्षा PDF को संग्रहीत और संसाधित करने में सक्षम दस्तावेज़ प्रबंधन प्रणाली लागू की। 10,000+ समवर्ती उपयोगकर्ताओं का समर्थन करने के लिए उच्च-गति स्वचालित प्रसंस्करण विकसित किया।',
      },
    },
    {
      title: {
        es: 'Logros - Galactic Problem Solver Certificate (NASA Space Apps Challenge)',
        en: 'Achievements - Galactic Problem Solver Certificate (NASA Space Apps Challenge)',
        pt: 'Conquistas - Certificado Galactic Problem Solver (NASA Space Apps Challenge)',
        de: 'Erfolge - Galactic Problem Solver Certificate (NASA Space Apps Challenge)',
        fr: 'Réalisations - Certificat Galactic Problem Solver (NASA Space Apps Challenge)',
        it: 'Risultati - Certificato Galactic Problem Solver (NASA Space Apps Challenge)',
        hi: 'उपलब्धियाँ - Galactic Problem Solver Certificate (NASA Space Apps Challenge)',
      },
      url: 'spaceappschallenge.org',
      year: 'Oct 2025',
      description: {
        es: 'Certificado Galactic Problem Solver por participación en el NASA Space Apps Challenge (Octubre 2025). Desarrollo de soluciones innovadoras para desafíos relacionados con exploración espacial y ciencia de datos.',
        en: 'Galactic Problem Solver Certificate for participation in the NASA Space Apps Challenge (October 2025). Development of innovative solutions for challenges related to space exploration and data science.',
        pt: 'Certificado Galactic Problem Solver pela participação no NASA Space Apps Challenge (Outubro 2025). Desenvolvimento de soluções inovadoras para desafios relacionados à exploração espacial e ciência de dados.',
        de: 'Galactic Problem Solver Certificate für Teilnahme an der NASA Space Apps Challenge (Oktober 2025). Entwicklung innovativer Lösungen für Herausforderungen im Zusammenhang mit Weltraumforschung und Datenwissenschaft.',
        fr: 'Certificat Galactic Problem Solver pour participation au NASA Space Apps Challenge (Octobre 2025). Développement de solutions innovantes pour des défis liés à l\'exploration spatiale et à la science des données.',
        it: 'Certificato Galactic Problem Solver per partecipazione al NASA Space Apps Challenge (Ottobre 2025). Sviluppo di soluzioni innovative per sfide relative all\'esplorazione spaziale e data science.',
        hi: 'NASA Space Apps Challenge (अक्टूबर 2025) में भागीदारी के लिए Galactic Problem Solver Certificate। अंतरिक्ष अन्वेषण और डेटा विज्ञान से संबंधित चुनौतियों के लिए नवीन समाधानों का विकास।',
      },
    },
    {
      title: {
        es: 'Logros - Participante en HACK-CIS-IEEE (UNI) y TPP (UPC)',
        en: 'Achievements - Participant in HACK-CIS-IEEE (UNI) and TPP (UPC)',
        pt: 'Conquistas - Participante em HACK-CIS-IEEE (UNI) e TPP (UPC)',
        de: 'Erfolge - Teilnehmer an HACK-CIS-IEEE (UNI) und TPP (UPC)',
        fr: 'Réalisations - Participant à HACK-CIS-IEEE (UNI) et TPP (UPC)',
        it: 'Risultati - Partecipante a HACK-CIS-IEEE (UNI) e TPP (UPC)',
        hi: 'उपलब्धियाँ - HACK-CIS-IEEE (UNI) और TPP (UPC) में प्रतिभागी',
      },
      url: 'hackathons.pe',
      year: 'Jul-Nov 2025',
      description: {
        es: 'Participante en la HACK-CIS-IEEE by UNI (Noviembre 2025) y Participante en el TPP (Torneo de Programación) by UPC (Julio 2025). Competencias de programación y desarrollo de soluciones tecnológicas bajo presión.',
        en: 'Participant in HACK-CIS-IEEE by UNI (November 2025) and Participant in TPP (Programming Tournament) by UPC (July 2025). Programming competitions and development of technological solutions under pressure.',
        pt: 'Participante no HACK-CIS-IEEE pela UNI (Novembro 2025) e Participante no TPP (Torneio de Programação) pela UPC (Julho 2025). Competições de programação e desenvolvimento de soluções tecnológicas sob pressão.',
        de: 'Teilnehmer an HACK-CIS-IEEE von UNI (November 2025) und Teilnehmer am TPP (Programmierturnier) von UPC (Juli 2025). Programmierwettbewerbe und Entwicklung technologischer Lösungen unter Druck.',
        fr: 'Participant au HACK-CIS-IEEE par UNI (Novembre 2025) et Participant au TPP (Tournoi de Programmation) par UPC (Juillet 2025). Compétitions de programmation et développement de solutions technologiques sous pression.',
        it: 'Partecipante a HACK-CIS-IEEE da UNI (Novembre 2025) e Partecipante al TPP (Torneo di Programmazione) da UPC (Luglio 2025). Competizioni di programmazione e sviluppo di soluzioni tecnologiche sotto pressione.',
        hi: 'UNI द्वारा HACK-CIS-IEEE में प्रतिभागी (नवंबर 2025) और UPC द्वारा TPP (प्रोग्रामिंग टूर्नामेंट) में प्रतिभागी (जुलाई 2025)। दबाव में प्रोग्रामिंग प्रतियोगिताएँ और तकनीकी समाधानों का विकास।',
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