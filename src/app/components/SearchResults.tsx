import { Language } from '../../utils/translations';
import { projects } from '../../data/projects';
import { platforms } from '../../data/platforms';

interface SearchResult {
  title: string;
  url: string;
  description: string;
  aspect: string;
  source: 'project' | 'coder' | 'cientifico' | 'academico' | 'platform';
}

interface SearchResultsProps {
  isDark: boolean;
  language: Language;
  t: (key: string) => string;
  query: string;
}

export function SearchResults({ isDark, language, t, query }: SearchResultsProps) {
  const getSearchResults = (): SearchResult[] => {
    if (!query.trim()) return [];
    
    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase().trim();

    // Search in projects with exact matching
    projects.forEach(project => {
      const title = project.title[language].toLowerCase();
      const description = project.description[language].toLowerCase();
      
      // Check if query is contained in title or description
      if (title.includes(lowerQuery) || description.includes(lowerQuery)) {
        results.push({
          title: project.title[language],
          url: project.link,
          description: project.description[language],
          aspect: project.aspect,
          source: 'project',
        });
      }
    });

    // Search in Coder aspect - exact word matching
    const coderKeywords = [
      { 
        title: { es: 'Lenguajes de Programación', en: 'Programming Languages', pt: 'Linguagens de Programación', de: 'Programmiersprachen', fr: 'Langages de Programmation', it: 'Linguaggi di Programmazione', hi: 'प्रोग्रामिंग भाषाएँ' },
        desc: { es: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R', en: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R', pt: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R', de: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R', fr: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R', it: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R', hi: 'Python, SQL, C++, JavaScript, TypeScript, Kotlin, R' },
        searchText: 'lenguajes programación programming languages python sql c++ javascript typescript kotlin programacion linguagens programmiersprachen langages linguaggi भाषाएँ'
      },
      { 
        title: { es: 'Desarrollo Web', en: 'Web Development', pt: 'Desenvolvimento Web', de: 'Webentwicklung', fr: 'Développement Web', it: 'Sviluppo Web', hi: 'वेब विकास' },
        desc: { es: 'HTML, CSS, React, Flask, FastAPI', en: 'HTML, CSS, React, Flask, FastAPI', pt: 'HTML, CSS, React, Flask, FastAPI', de: 'HTML, CSS, React, Flask, FastAPI', fr: 'HTML, CSS, React, Flask, FastAPI', it: 'HTML, CSS, React, Flask, FastAPI', hi: 'HTML, CSS, React, Flask, FastAPI' },
        searchText: 'web desarrollo development html css react flask fastapi frontend backend webentwicklung développement sviluppo desenvolvimento विकास'
      },
      { 
        title: { es: 'IoT y Sistemas Embebidos', en: 'IoT and Embedded Systems', pt: 'IoT e Sistemas Embarcados', de: 'IoT und Eingebettete Systeme', fr: 'IoT et Systèmes Embarqués', it: 'IoT e Sistemi Embedded', hi: 'IoT और एम्बेडेड सिस्टम' },
        desc: { es: 'ESP32, MicroPython, Arduino IDE', en: 'ESP32, MicroPython, Arduino IDE', pt: 'ESP32, MicroPython, Arduino IDE', de: 'ESP32, MicroPython, Arduino IDE', fr: 'ESP32, MicroPython, Arduino IDE', it: 'ESP32, MicroPython, Arduino IDE', hi: 'ESP32, MicroPython, Arduino IDE' },
        searchText: 'iot esp32 micropython arduino embebidos embedded sistemas systems eingebettete systèmes sistemi एम्बेडेड सिस्टम'
      },
      { 
        title: { es: 'Cloud y Herramientas', en: 'Cloud and Tools', pt: 'Cloud e Ferramentas', de: 'Cloud und Werkzeuge', fr: 'Cloud et Outils', it: 'Cloud e Strumenti', hi: 'क्लाउड और उपकरण' },
        desc: { es: 'Azure, Google Cloud, Oracle Cloud, Docker, Git', en: 'Azure, Google Cloud, Oracle Cloud, Docker, Git', pt: 'Azure, Google Cloud, Oracle Cloud, Docker, Git', de: 'Azure, Google Cloud, Oracle Cloud, Docker, Git', fr: 'Azure, Google Cloud, Oracle Cloud, Docker, Git', it: 'Azure, Google Cloud, Oracle Cloud, Docker, Git', hi: 'Azure, Google Cloud, Oracle Cloud, Docker, Git' },
        searchText: 'cloud azure google oracle docker git herramientas tools ferramentas werkzeuge outils strumenti उपकरण'
      },
    ];

    coderKeywords.forEach(item => {
      if (item.searchText.toLowerCase().includes(lowerQuery)) {
        results.push({
          title: item.title[language],
          url: 'skills/coder',
          description: item.desc[language],
          aspect: 'coder',
          source: 'coder',
        });
      }
    });

    // Search in Scientific aspect
    const scientificKeywords = [
      {
        title: { es: 'Open Source - Ecosistema Python', en: 'Open Source - Python Ecosystem', pt: 'Código Aberto - Ecossistema Python', de: 'Open Source - Python-Ökosystem', fr: 'Open Source - Écosystème Python', it: 'Open Source - Ecosistema Python', hi: 'ओपन सोर्स - Python इकोसिस्टम' },
        desc: { es: 'Contribuciones al ecosistema Python con paquetes publicados en PyPI', en: 'Contributions to Python ecosystem with packages published on PyPI', pt: 'Contribuições ao ecossistema Python com pacotes publicados no PyPI', de: 'Beiträge zum Python-Ökosystem mit auf PyPI veröffentlichten Paketen', fr: 'Contributions à l\'écosystème Python avec des packages publiés sur PyPI', it: 'Contributi all\'ecosistema Python con pacchetti pubblicati su PyPI', hi: 'PyPI पर प्रकाशित पैकेज के साथ Python इकोसिस्टम में योगदान' },
        searchText: 'open source python pypi investigación research científico scientific ecosistema ecosystem ökosystem écosystème ecossistema सोर्स'
      },
      {
        title: { es: 'Open Source - JavaScript/TypeScript', en: 'Open Source - JavaScript/TypeScript', pt: 'Código Aberto - JavaScript/TypeScript', de: 'Open Source - JavaScript/TypeScript', fr: 'Open Source - JavaScript/TypeScript', it: 'Open Source - JavaScript/TypeScript', hi: 'ओपन सोर्स - JavaScript/TypeScript' },
        desc: { es: 'Paquetes publicados en npm para el ecosistema JavaScript/TypeScript', en: 'Packages published on npm for JavaScript/TypeScript ecosystem', pt: 'Pacotes publicados no npm para o ecossistema JavaScript/TypeScript', de: 'Auf npm veröffentlichte Pakete für das JavaScript/TypeScript-Ökosystem', fr: 'Packages publiés sur npm pour l\'écosystème JavaScript/TypeScript', it: 'Pacchetti pubblicati su npm per l\'ecosistema JavaScript/TypeScript', hi: 'JavaScript/TypeScript इकोसिस्टम के लिए npm पर प्रकाशित पैकेज' },
        searchText: 'open source javascript typescript npm investigación research ecosistema ecosystem ökosystem écosystème सोर्स'
      },
    ];

    scientificKeywords.forEach(item => {
      if (item.searchText.toLowerCase().includes(lowerQuery)) {
        results.push({
          title: item.title[language],
          url: 'research/open-source',
          description: item.desc[language],
          aspect: 'cientifico',
          source: 'cientifico',
        });
      }
    });

    // Search in Academic aspect
    const academicKeywords = [
      {
        title: { es: 'Universidad Nacional del Callao', en: 'Universidad Nacional del Callao', pt: 'Universidad Nacional del Callao', de: 'Universidad Nacional del Callao', fr: 'Universidad Nacional del Callao', it: 'Universidad Nacional del Callao', hi: 'Universidad Nacional del Callao' },
        desc: { es: 'Estudiante de Ingeniería de Sistemas', en: 'Systems Engineering Student', pt: 'Estudante de Engenharia de Sistemas', de: 'Systemtechnik-Student', fr: 'Étudiant en Génie des Systèmes', it: 'Studente di Ingegneria dei Sistemi', hi: 'सिस्टम इंजीनियरिंग का छात्र' },
        searchText: 'universidad unac callao ingeniería sistemas university engineering student educación education universität université università विश्वविद्यालय'
      },
      {
        title: { es: 'Certificaciones Microsoft Azure', en: 'Microsoft Azure Certifications', pt: 'Certificações Microsoft Azure', de: 'Microsoft Azure-Zertifizierungen', fr: 'Certifications Microsoft Azure', it: 'Certificazioni Microsoft Azure', hi: 'Microsoft Azure प्रमाणपत्र' },
        desc: { es: 'Azure AI Engineer Associate (AZ-204)', en: 'Azure AI Engineer Associate (AZ-204)', pt: 'Azure AI Engineer Associate (AZ-204)', de: 'Azure AI Engineer Associate (AZ-204)', fr: 'Azure AI Engineer Associate (AZ-204)', it: 'Azure AI Engineer Associate (AZ-204)', hi: 'Azure AI Engineer Associate (AZ-204)' },
        searchText: 'certificación microsoft azure certification ai engineer zertifizierung प्रमाणपत्र certificazione'
      },
      {
        title: { es: 'NASA Space Apps Challenge', en: 'NASA Space Apps Challenge', pt: 'NASA Space Apps Challenge', de: 'NASA Space Apps Challenge', fr: 'NASA Space Apps Challenge', it: 'NASA Space Apps Challenge', hi: 'NASA Space Apps Challenge' },
        desc: { es: 'Galactic Problem Solver Certificate', en: 'Galactic Problem Solver Certificate', pt: 'Certificado Galactic Problem Solver', de: 'Galactic Problem Solver Certificate', fr: 'Certificat Galactic Problem Solver', it: 'Certificato Galactic Problem Solver', hi: 'Galactic Problem Solver Certificate' },
        searchText: 'nasa hackathon space apps challenge logros achievements galactic problem solver certificate हैकाथॉन'
      },
    ];

    academicKeywords.forEach(item => {
      if (item.searchText.toLowerCase().includes(lowerQuery)) {
        results.push({
          title: item.title[language],
          url: 'academic/certifications',
          description: item.desc[language],
          aspect: 'academico',
          source: 'academico',
        });
      }
    });

    // Search in Platforms
    platforms.forEach(platform => {
      const platformName = platform.name.toLowerCase();
      const statsText = platform.stats[language].join(' ').toLowerCase();
      
      // Check if query is contained in platform name or stats
      if (platformName.includes(lowerQuery) || statsText.includes(lowerQuery)) {
        results.push({
          title: platform.name,
          url: platform.url,
          description: platform.stats[language].join(', '),
          aspect: 'coder',
          source: 'platform',
        });
      }
    });

    // Sort results by aspect and date
    results.sort((a, b) => {
      // First sort by aspect
      if (a.aspect !== b.aspect) {
        return a.aspect.localeCompare(b.aspect);
      }
      // If same aspect and both are projects, sort by date
      if (a.source === 'project' && b.source === 'project') {
        const projectA = projects.find(p => p.title[language] === a.title);
        const projectB = projects.find(p => p.title[language] === b.title);
        if (projectA && projectB) {
          return new Date(projectB.year).getTime() - new Date(projectA.year).getTime();
        }
      }
      return 0;
    });

    return results;
  };

  const results = getSearchResults();

  const getAspectLabel = (aspect: string) => {
    const labels = {
      personal: t('personal'),
      coder: t('coder'),
      cientifico: t('scientific'),
      academico: t('academic'),
      project: t('showAllProjects'),
      platform: t('showAllPlatforms'),
    };
    return labels[aspect as keyof typeof labels] || aspect;
  };

  if (!query.trim()) {
    return (
      <div className={`max-w-4xl mx-auto px-8 py-12 ${isDark ? 'text-white' : 'text-black'}`}>
        <p className={isDark ? 'text-[#9aa0a6]' : 'text-gray-600'}>
          {language === 'es' ? 'Ingresa un término de búsqueda' : 'Enter a search term'}
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className={`max-w-4xl mx-auto px-8 py-12 ${isDark ? 'text-white' : 'text-black'}`}>
        <p className={isDark ? 'text-[#9aa0a6]' : 'text-gray-600'}>
          {language === 'es' ? `No se encontraron resultados para "${query}"` : `No results found for "${query}"`}
        </p>
      </div>
    );
  }

  return (
    <div className={`max-w-4xl mx-auto px-8 py-8 ${isDark ? 'text-white' : 'text-black'}`}>
      <div className={`mb-6 ${isDark ? 'text-[#9aa0a6]' : 'text-gray-600'} text-sm`}>
        {language === 'es' ? `Aproximadamente ${results.length} resultados` : `About ${results.length} results`}
      </div>
      
      <div className="space-y-8">
        {results.map((result, index) => (
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#1a0dab] hover:underline cursor-pointer block mb-2"
            >
              {result.title}
            </a>
            
            {/* Description */}
            <p className={`text-sm mb-2 ${isDark ? 'text-[#bdc1c6]' : 'text-gray-700'}`}>
              {result.description}
            </p>
            
            {/* Aspect Badge */}
            <div className={`text-sm ${isDark ? 'text-[#9aa0a6]' : 'text-gray-600'}`}>
              <span className="font-semibold">{t('aspect')}:</span>{' '}
              <span className={isDark ? 'text-[#8ab4f8]' : 'text-blue-600'}>
                {getAspectLabel(result.aspect)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}