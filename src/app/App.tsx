import { useState, useRef, useEffect } from 'react';
import { Search, Mic, Camera, Moon, Sun, X, Clock } from 'lucide-react';
import { Button } from './components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from './components/ui/dialog';
import { Textarea } from './components/ui/textarea';
import { PersonalAspect } from './components/PersonalAspect';
import { CoderAspect } from './components/CoderAspect';
import { CientificoAspect } from './components/CientificoAspect';
import { AcademicoAspect } from './components/AcademicoAspect';
import { AllProjectsView } from './components/AllProjectsView';
import { SearchResults } from './components/SearchResults';
import { translations, Language } from '../utils/translations';
import { useSearchHistory } from '../hooks/useSearchHistory';
import { useInitialAnimation } from '../hooks/useInitialAnimation';
import profileImage from 'figma:asset/c1f52a07183fdaaac638e216ecaf6b93647b3084.png';

const languages = [
  { code: 'de' as Language, name: 'Alemán', short: 'DE' },
  { code: 'es' as Language, name: 'Español', short: 'ESP' },
  { code: 'fr' as Language, name: 'Francés', short: 'FR' },
  { code: 'hi' as Language, name: 'Hindú', short: 'HI' },
  { code: 'en' as Language, name: 'Inglés', short: 'EN' },
  { code: 'it' as Language, name: 'Italiano', short: 'IT' },
  { code: 'pt' as Language, name: 'Portugués', short: 'PT' },
];

type AspectType = 'home' | 'personal' | 'coder' | 'cientifico' | 'academico' | 'allProjects' | 'search';

const COOLDOWN_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [language, setLanguage] = useState<Language>('es');
  const [currentAspect, setCurrentAspect] = useState<AspectType>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showHistoryDropdown, setShowHistoryDropdown] = useState(false);
  const [lastMessageTime, setLastMessageTime] = useState<number | null>(null);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { history, addToHistory, removeFromHistory } = useSearchHistory();
  const { shouldAnimate, isAnimating } = useInitialAnimation();

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSendMessage = () => {
    if (lastMessageTime !== null) {
      const currentTime = Date.now();
      const timeSinceLastMessage = currentTime - lastMessageTime;
      if (timeSinceLastMessage < COOLDOWN_TIME) {
        setCooldownRemaining(COOLDOWN_TIME - timeSinceLastMessage);
        return;
      }
    }
    console.log('Message sent:', message);
    setMessage('');
    setIsContactOpen(false);
    setLastMessageTime(Date.now());
  };

const handleDownloadCV = () => {
    const cvLinks: Record<Language, string> = {
      de: '/cv/CV_Aleman.pdf',
      es: '/cv/CV_Espanol.pdf',
      fr: '/cv/CV_Frances.pdf',
      hi: '/cv/CV_Hindu.pdf',
      en: '/cv/CV_English.pdf',
      it: '/cv/CV_Italiano.pdf',
      pt: '/cv/CV_Portugues.pdf',
    };
    
    // 1. Identificamos el nombre del idioma (tu código original)
    const languageName = languages.find(l => l.code === language)?.name || 'Español';
    const cvUrl = cvLinks[language];

    // 2. Lógica de descarga real
    const link = document.createElement('a');
    link.href = cvUrl;
    
    // Esto le da un nombre bonito al archivo cuando el usuario lo reciba
    link.setAttribute('download', `CV_Josue_${languageName}.pdf`); 
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 3. Feedback en consola (sustituye al molesto alert si prefieres)
    console.log(`Iniciando descarga: CV en ${languageName} desde ${cvUrl}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      addToHistory(searchQuery);
      setCurrentAspect('search');
      setShowHistoryDropdown(false);
    }
  };

  const handleHistoryClick = (query: string) => {
    setSearchQuery(query);
    setCurrentAspect('search');
    setShowHistoryDropdown(false);
  };

  const handleRemoveHistory = (e: React.MouseEvent, query: string) => {
    e.stopPropagation();
    removeFromHistory(query);
  };

  const getCurrentLanguage = () => {
    return languages.find(l => l.code === language);
  };

  const isDark = theme === 'dark';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setShowHistoryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update cooldown remaining
  useEffect(() => {
    if (lastMessageTime !== null) {
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const timeSinceLastMessage = currentTime - lastMessageTime;
        if (timeSinceLastMessage < COOLDOWN_TIME) {
          setCooldownRemaining(COOLDOWN_TIME - timeSinceLastMessage);
        } else {
          setCooldownRemaining(0);
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [lastMessageTime]);

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-[#202124]' : 'bg-white'}`}>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 gap-4">
        {/* Logo and Search Bar - Left side */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {currentAspect !== 'home' && (
            <>
              <button
                onClick={() => setCurrentAspect('home')}
                className="hover:opacity-80 transition-opacity flex-shrink-0"
              >
                <h1 className="text-2xl md:text-4xl">
                  <span className="text-[#4285f4]">J</span>
                  <span className="text-[#ea4335]">o</span>
                  <span className="text-[#fbbc04]">o</span>
                  <span className="text-[#4285f4]">s</span>
                  <span className="text-[#34a853]">u</span>
                  <span className="text-[#ea4335]">e</span>
                </h1>
              </button>
              
              {/* Search Bar - Only in aspect views */}
              <div className="flex-1 max-w-2xl relative" ref={searchInputRef}>
                <form onSubmit={handleSearch}>
                  <div
                    className={`flex items-center gap-3 px-4 py-2 rounded-full ${
                      isDark ? 'bg-[#303134] border border-[#5f6368]' : 'bg-white border border-gray-300 shadow-sm'
                    } hover:shadow-md transition-shadow`}
                  >
                    <Search className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-[#9aa0a6]' : 'text-gray-500'}`} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setShowHistoryDropdown(true)}
                      className={`flex-1 bg-transparent outline-none text-sm ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                      placeholder={t('search')}
                    />
                    <Mic className={`w-4 h-4 flex-shrink-0 cursor-pointer ${isDark ? 'text-[#9aa0a6]' : 'text-gray-500'}`} />
                    <Camera className={`w-4 h-4 flex-shrink-0 cursor-pointer ${isDark ? 'text-[#9aa0a6]' : 'text-gray-500'}`} />
                  </div>
                </form>
                
                {/* Search History Dropdown */}
                {showHistoryDropdown && history.length > 0 && (
                  <div 
                    className={`absolute top-full left-0 right-0 mt-1 ${
                      isDark ? 'bg-[#303134] border border-[#5f6368]' : 'bg-white border border-gray-300'
                    } rounded-lg shadow-lg z-50`}
                  >
                    {history.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleHistoryClick(item)}
                        className={`flex items-center justify-between px-4 py-3 cursor-pointer ${
                          isDark ? 'hover:bg-[#3c4043]' : 'hover:bg-gray-100'
                        } ${index === 0 ? 'rounded-t-lg' : ''} ${index === history.length - 1 ? 'rounded-b-lg' : ''}`}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <Clock className={`w-4 h-4 ${isDark ? 'text-[#9aa0a6]' : 'text-gray-500'}`} />
                          <span className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>{item}</span>
                        </div>
                        <button
                          onClick={(e) => handleRemoveHistory(e, item)}
                          className={`p-1 rounded hover:bg-opacity-10 ${isDark ? 'hover:bg-white' : 'hover:bg-black'}`}
                        >
                          <X className={`w-4 h-4 ${isDark ? 'text-[#9aa0a6]' : 'text-gray-500'}`} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
          
          {currentAspect === 'home' && <div></div>}
        </div>

        {/* Right side menu */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`text-xs md:text-sm hover:underline flex items-center gap-1 md:gap-2 ${isDark ? 'text-white' : 'text-black'}`}>
                <span className="hidden sm:inline">{t('language')}</span>
                <span className={`${isDark ? 'text-[#9aa0a6]' : 'text-gray-500'}`}>
                  {getCurrentLanguage()?.short}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={isDark ? 'bg-[#303134] border-[#5f6368]' : ''}>
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`${isDark ? 'text-white hover:bg-[#3c4043]' : ''} ${
                    language === lang.code ? 'bg-[#3c4043]' : ''
                  }`}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact Button */}
          <button
            onClick={() => setIsContactOpen(true)}
            className={`text-xs md:text-sm hover:underline ${isDark ? 'text-white' : 'text-black'} hidden sm:block`}
          >
            {t('contact')}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full hover:bg-[#303134] ${isDark ? 'text-white' : 'text-black'}`}
          >
            {isDark ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
          </button>

          {/* Download CV Button */}
          <div className="relative">
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              className={`text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 ${
                isDark
                  ? 'bg-transparent border-[#5f6368] text-[#8ab4f8] hover:bg-[#303134]'
                  : 'border-gray-300'
              }`}
            >
              <span className="hidden sm:inline">{t('downloadCV')}</span>
              <span className="sm:hidden">CV</span>
            </Button>
            <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 text-center">
              <span className={`text-[10px] leading-[1.2] ${isDark ? 'text-[#9aa0a6]' : 'text-gray-600'}`}>
                {t('cvNote')}
              </span>
            </div>
          </div>

          {/* Profile Image */}
          <img
            src={profileImage}
            alt="Profile"
            onClick={() => setIsProfileOpen(true)}
            className="w-6 h-6 md:w-8 md:h-8 rounded-full cursor-pointer object-cover hover:opacity-80 transition-opacity"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {currentAspect === 'home' && (
          <div className="flex flex-col items-center justify-center px-4 min-h-[calc(100vh-200px)]">
            {/* Logo */}
            <div className={`mb-8 ${shouldAnimate ? 'initial-hidden animate-logo-reveal' : ''}`}>
              <h1 className="text-5xl md:text-7xl">
                <span className={`text-[#4285f4] ${shouldAnimate ? 'initial-hidden animate-letter-pop delay-100' : ''}`}>J</span>
                <span className={`text-[#ea4335] ${shouldAnimate ? 'initial-hidden animate-letter-pop delay-200' : ''}`}>o</span>
                <span className={`text-[#fbbc04] ${shouldAnimate ? 'initial-hidden animate-letter-pop delay-300' : ''}`}>o</span>
                <span className={`text-[#4285f4] ${shouldAnimate ? 'initial-hidden animate-letter-pop delay-400' : ''}`}>s</span>
                <span className={`text-[#34a853] ${shouldAnimate ? 'initial-hidden animate-letter-pop delay-500' : ''}`}>u</span>
                <span className={`text-[#ea4335] ${shouldAnimate ? 'initial-hidden animate-letter-pop delay-600' : ''}`}>e</span>
              </h1>
            </div>

            {/* Search Bar */}
            <div className={`w-full max-w-2xl mb-8 relative ${shouldAnimate ? 'initial-hidden animate-slide-in-up delay-700' : ''}`} ref={searchInputRef}>
              <form onSubmit={handleSearch}>
                <div
                  className={`flex items-center gap-4 px-4 py-3 rounded-full ${
                    isDark ? 'bg-[#303134] border border-[#5f6368]' : 'bg-white border border-gray-300 shadow-md'
                  } hover:shadow-lg transition-shadow`}
                >
                  <Search className={`w-5 h-5 ${isDark ? 'text-[#9aa0a6]' : 'text-gray-500'}`} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowHistoryDropdown(true)}
                    className={`flex-1 bg-transparent outline-none ${
                      isDark ? 'text-white' : 'text-black'
                    }`}
                    placeholder={t('search')}
                  />
                  <Mic className={`w-5 h-5 cursor-pointer ${isDark ? 'text-[#9aa0a6]' : 'text-gray-500'}`} />
                  <Camera className={`w-5 h-5 cursor-pointer ${isDark ? 'text-[#9aa0a6]' : 'text-gray-500'}`} />
                </div>
              </form>

              {/* Search History Dropdown */}
              {showHistoryDropdown && history.length > 0 && (
                <div 
                  className={`absolute top-full left-0 right-0 mt-1 ${
                    isDark ? 'bg-[#303134] border border-[#5f6368]' : 'bg-white border border-gray-300'
                  } rounded-lg shadow-lg z-50`}
                >
                  {history.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleHistoryClick(item)}
                      className={`flex items-center justify-between px-4 py-3 cursor-pointer ${
                        isDark ? 'hover:bg-[#3c4043]' : 'hover:bg-gray-100'
                      } ${index === 0 ? 'rounded-t-lg' : ''} ${index === history.length - 1 ? 'rounded-b-lg' : ''}`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <Clock className={`w-4 h-4 ${isDark ? 'text-[#9aa0a6]' : 'text-gray-500'}`} />
                        <span className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>{item}</span>
                      </div>
                      <button
                        onClick={(e) => handleRemoveHistory(e, item)}
                        className={`p-1 rounded hover:bg-opacity-10 ${isDark ? 'hover:bg-white' : 'hover:bg-black'}`}
                      >
                        <X className={`w-4 h-4 ${isDark ? 'text-[#9aa0a6]' : 'text-gray-500'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Aspectos Section */}
            <div className={`text-center mb-6 ${shouldAnimate ? 'initial-hidden animate-fade-in-scale delay-800' : ''}`}>
              <h2 className={`text-sm mb-4 ${isDark ? 'text-[#9aa0a6]' : 'text-gray-600'}`}>
                {t('aspects')}
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  onClick={() => setCurrentAspect('personal')}
                  className={`${
                    isDark
                      ? 'bg-[#303134] text-white hover:bg-[#3c4043] border border-[#5f6368]'
                      : 'bg-[#f8f9fa] text-black hover:bg-gray-200 border border-gray-300'
                  } px-6 py-2`}
                >
                  {t('personal')}
                </Button>
                <Button
                  onClick={() => setCurrentAspect('coder')}
                  className={`${
                    isDark
                      ? 'bg-[#303134] text-white hover:bg-[#3c4043] border border-[#5f6368]'
                      : 'bg-[#f8f9fa] text-black hover:bg-gray-200 border border-gray-300'
                  } px-6 py-2`}
                >
                  {t('coder')}
                </Button>
                <Button
                  onClick={() => setCurrentAspect('cientifico')}
                  className={`${
                    isDark
                      ? 'bg-[#303134] text-white hover:bg-[#3c4043] border border-[#5f6368]'
                      : 'bg-[#f8f9fa] text-black hover:bg-gray-200 border border-gray-300'
                  } px-6 py-2`}
                >
                  {t('scientific')}
                </Button>
                <Button
                  onClick={() => setCurrentAspect('academico')}
                  className={`${
                    isDark
                      ? 'bg-[#303134] text-white hover:bg-[#3c4043] border border-[#5f6368]'
                      : 'bg-[#f8f9fa] text-black hover:bg-gray-200 border border-gray-300'
                  } px-6 py-2`}
                >
                  {t('academic')}
                </Button>
              </div>
            </div>

            {/* Show All Projects Button */}
            <button
              onClick={() => setCurrentAspect('allProjects')}
              className={`text-sm ${isDark ? 'text-[#9aa0a6]' : 'text-gray-600'} hover:underline ${shouldAnimate ? 'initial-hidden animate-fade-in-scale delay-900' : ''}`}
            >
              {t('showAllProjects')}
            </button>
            
            {/* Last Updated */}
            <div className={`mt-8 text-xs ${isDark ? 'text-[#9aa0a6]' : 'text-gray-600'} ${shouldAnimate ? 'initial-hidden animate-fade-in-scale delay-1000' : ''}`}>
              {t('lastUpdated')}
            </div>
          </div>
        )}

        {currentAspect === 'personal' && <PersonalAspect isDark={isDark} language={language} t={t} />}
        {currentAspect === 'coder' && <CoderAspect isDark={isDark} language={language} t={t} />}
        {currentAspect === 'cientifico' && <CientificoAspect isDark={isDark} language={language} t={t} />}
        {currentAspect === 'academico' && <AcademicoAspect isDark={isDark} language={language} t={t} />}
        {currentAspect === 'allProjects' && <AllProjectsView isDark={isDark} language={language} t={t} />}
        {currentAspect === 'search' && <SearchResults isDark={isDark} language={language} t={t} query={searchQuery} />}
      </main>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-[#171717] text-[#9aa0a6]' : 'bg-gray-100 text-gray-600'} py-4`}>
        <div className="px-6 text-sm text-center">
          {t('footerText')}
        </div>
      </footer>

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className={isDark ? 'bg-[#303134] text-white border-[#5f6368]' : ''}>
          <DialogHeader>
            <DialogTitle>{t('contactTitle')}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Textarea
              placeholder={t('contactPlaceholder')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`min-h-[150px] ${
                isDark ? 'bg-[#202124] border-[#5f6368] text-white' : ''
              }`}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className={isDark ? 'bg-transparent border-[#5f6368] text-white hover:bg-[#3c4043]' : ''}
              >
                {t('cancel')}
              </Button>
            </DialogClose>
            <Button
              onClick={handleSendMessage}
              className={isDark ? 'bg-[#8ab4f8] text-black hover:bg-[#aecbfa]' : ''}
              disabled={cooldownRemaining > 0}
            >
              {cooldownRemaining > 0 ? `${t('send')} (${Math.ceil(cooldownRemaining / 1000)}s)` : t('send')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Profile Dialog */}
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className={`${isDark ? 'bg-[#303134] text-white border-[#5f6368]' : ''} max-w-md`}>
          <div className="flex flex-col items-center">
            <div className={`p-2 rounded-lg ${isDark ? 'border-2 border-[#5f6368]' : 'border-2 border-gray-300'} mb-4`}>
              <img
                src={profileImage}
                alt="Profile"
                className="w-48 h-48 rounded-lg object-cover"
              />
            </div>
            <div className="w-full space-y-3">
              <h2 className={`text-xl font-semibold text-center ${isDark ? 'text-white' : 'text-black'}`}>
                {t('fullName')}
              </h2>
              <div className={`text-sm ${isDark ? 'text-[#bdc1c6]' : 'text-gray-700'}`}>
                <p><span className="font-semibold">{t('nationality')}:</span> {t('nationalityValue')}</p>
                <p><span className="font-semibold">{t('age')}:</span> {t('ageValue')}</p>
                <p className="mt-3"><span className="font-semibold">{t('skills')}:</span></p>
                <p className="mt-1">{t('skillsList')}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}