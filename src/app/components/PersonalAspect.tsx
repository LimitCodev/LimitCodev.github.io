import { useState } from 'react';
import { Language } from '../../utils/translations';
import { SortSelector } from './SortSelector';

interface PersonalAspectProps {
  isDark: boolean;
  language: Language;
  t: (key: string) => string;
}

export function PersonalAspect({ isDark, language, t }: PersonalAspectProps) {
  const [sortBy, setSortBy] = useState<'date' | 'relevance'>('date');

  const personalData = {
    name: 'Alex Ynocencio',
    phone: '+51 991 647 142',
    email: 'callirgos.josue2015@gmail.com',
    linkedin: 'ynocencio-alex-342862332',
    github: 'LimitCodev',
    portfolio: 'LimitCodev.github.io',
  };

  const searchResults = [
    {
      title: {
        es: 'Alex Ynocencio - Portafolio Personal',
        en: 'Alex Ynocencio - Personal Portfolio',
        pt: 'Alex Ynocencio - Portfólio Pessoal',
        de: 'Alex Ynocencio - Persönliches Portfolio',
        fr: 'Alex Ynocencio - Portfolio Personnel',
        it: 'Alex Ynocencio - Portfolio Personale',
        hi: 'Alex Ynocencio - व्यक्तिगत पोर्टफोलियो',
      },
      url: personalData.portfolio,
      description: {
        es: `Estudiante de Ingeniería de Sistemas en la Universidad Nacional del Callao. Desarrollador con pasión por la tecnología y la innovación. Contacto: ${personalData.email} | Tel: ${personalData.phone}`,
        en: `Systems Engineering Student at Universidad Nacional del Callao. Developer with passion for technology and innovation. Contact: ${personalData.email} | Phone: ${personalData.phone}`,
        pt: `Estudante de Engenharia de Sistemas na Universidad Nacional del Callao. Desenvolvedor apaixonado por tecnologia e inovação. Contato: ${personalData.email} | Tel: ${personalData.phone}`,
        de: `Systemtechnik-Student an der Universidad Nacional del Callao. Entwickler mit Leidenschaft für Technologie und Innovation. Kontakt: ${personalData.email} | Tel: ${personalData.phone}`,
        fr: `Étudiant en génie des systèmes à l'Universidad Nacional del Callao. Développeur passionné de technologie et d'innovation. Contact: ${personalData.email} | Tél: ${personalData.phone}`,
        it: `Studente di Ingegneria dei Sistemi presso Universidad Nacional del Callao. Sviluppatore appassionato di tecnologia e innovazione. Contatto: ${personalData.email} | Tel: ${personalData.phone}`,
        hi: `Universidad Nacional del Callao में सिस्टम इंजीनियरिंग का छात्र। प्रौद्योगिकी और नवाचार के प्रति जुनूनी डेवलपर। संपर्क: ${personalData.email} | फोन: ${personalData.phone}`,
      },
    },
    {
      title: {
        es: 'GitHub - LimitCodev',
        en: 'GitHub - LimitCodev',
        pt: 'GitHub - LimitCodev',
        de: 'GitHub - LimitCodev',
        fr: 'GitHub - LimitCodev',
        it: 'GitHub - LimitCodev',
        hi: 'GitHub - LimitCodev',
      },
      url: `https://github.com/${personalData.github}`,
      description: {
        es: 'Proyectos de código abierto y contribuciones a la comunidad de desarrollo. Especialización en Python, JavaScript/TypeScript, y desarrollo de sistemas IoT con ESP32.',
        en: 'Open source projects and contributions to the development community. Specialization in Python, JavaScript/TypeScript, and IoT systems development with ESP32.',
        pt: 'Projetos de código aberto e contribuições para a comunidade de desenvolvimento. Especialização em Python, JavaScript/TypeScript e desenvolvimento de sistemas IoT com ESP32.',
        de: 'Open-Source-Projekte und Beiträge zur Entwickler-Community. Spezialisierung auf Python, JavaScript/TypeScript und IoT-Systementwicklung mit ESP32.',
        fr: 'Projets open source et contributions à la communauté de développement. Spécialisation en Python, JavaScript/TypeScript et développement de systèmes IoT avec ESP32.',
        it: 'Progetti open source e contributi alla comunità di sviluppo. Specializzazione in Python, JavaScript/TypeScript e sviluppo di sistemi IoT con ESP32.',
        hi: 'ओपन सोर्स परियोजनाएँ और विकास समुदाय में योगदान। Python, JavaScript/TypeScript और ESP32 के साथ IoT सिस्टम विकास में विशेषज्ञता।',
      },
    },
    {
      title: {
        es: 'LinkedIn - Ynocencio Alex',
        en: 'LinkedIn - Ynocencio Alex',
        pt: 'LinkedIn - Ynocencio Alex',
        de: 'LinkedIn - Ynocencio Alex',
        fr: 'LinkedIn - Ynocencio Alex',
        it: 'LinkedIn - Ynocencio Alex',
        hi: 'LinkedIn - Ynocencio Alex',
      },
      url: `https://linkedin.com/in/${personalData.linkedin}`,
      description: {
        es: 'Perfil profesional con experiencia en desarrollo de software, análisis de datos y proyectos de investigación científica. Certificaciones en Microsoft Azure, BigData Academy y más.',
        en: 'Professional profile with experience in software development, data analysis and scientific research projects. Certifications in Microsoft Azure, BigData Academy and more.',
        pt: 'Perfil profissional com experiência em desenvolvimento de software, análise de dados e projetos de pesquisa científica. Certificações em Microsoft Azure, BigData Academy e mais.',
        de: 'Professionelles Profil mit Erfahrung in Softwareentwicklung, Datenanalyse und wissenschaftlichen Forschungsprojekten. Zertifizierungen in Microsoft Azure, BigData Academy und mehr.',
        fr: 'Profil professionnel avec expérience en développement logiciel, analyse de données et projets de recherche scientifique. Certifications Microsoft Azure, BigData Academy et plus.',
        it: 'Profilo professionale con esperienza nello sviluppo software, analisi dati e progetti di ricerca scientifica. Certificazioni in Microsoft Azure, BigData Academy e altro.',
        hi: 'सॉफ्टवेयर विकास, डेटा विश्लेषण और वैज्ञानिक अनुसंधान परियोजनाओं में अनुभव के साथ पेशेवर प्रोफ़ाइल। Microsoft Azure, BigData Academy और अधिक में प्रमाणपत्र।',
      },
    },
    {
      title: {
        es: 'Idiomas y Habilidades de Comunicación',
        en: 'Languages and Communication Skills',
        pt: 'Idiomas e Habilidades de Comunicação',
        de: 'Sprachen und Kommunikationsfähigkeiten',
        fr: 'Langues et Compétences en Communication',
        it: 'Lingue e Competenze Comunicative',
        hi: 'भाषाएँ और संचार कौशल',
      },
      url: '#',
      description: {
        es: 'Español (Nativo), Inglés (Intermedio). Capacidad de comunicación técnica y colaboración en equipos multidisciplinarios.',
        en: 'Spanish (Native), English (Intermediate). Technical communication skills and collaboration in multidisciplinary teams.',
        pt: 'Espanhol (Nativo), Inglês (Intermediário). Habilidades de comunicação técnica e colaboração em equipes multidisciplinares.',
        de: 'Spanisch (Muttersprache), Englisch (Mittelstufe). Technische Kommunikationsfähigkeiten und Zusammenarbeit in multidisziplinären Teams.',
        fr: 'Espagnol (Natif), Anglais (Intermédiaire). Compétences en communication technique et collaboration dans des équipes multidisciplinaires.',
        it: 'Spagnolo (Madrelingua), Inglese (Intermedio). Competenze di comunicazione tecnica e collaborazione in team multidisciplinari.',
        hi: 'स्पेनिश (मातृभाषा), अंग्रेजी (मध्यवर्ती)। तकनीकी संचार कौशल और बहु-विषयक टीमों में सहयोग।',
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
            <a
              href={result.url}
              className="text-xl text-[#1a0dab] hover:underline cursor-pointer block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {result.title[language]}
            </a>
            
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