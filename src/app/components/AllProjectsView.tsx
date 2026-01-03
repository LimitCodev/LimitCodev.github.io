import { Language } from '../../utils/translations';
import { projects, Project } from '../../data/projects';

interface AllProjectsViewProps {
  isDark: boolean;
  language: Language;
  t: (key: string) => string;
}

export function AllProjectsView({ isDark, language, t }: AllProjectsViewProps) {
  const getAspectLabel = (aspect: Project['aspect']) => {
    const labels = {
      personal: t('personal'),
      coder: t('coder'),
      cientifico: t('scientific'),
      academico: t('academic'),
    };
    return labels[aspect];
  };

  return (
    <div className={`max-w-4xl mx-auto px-8 py-12 ${isDark ? 'text-white' : 'text-black'}`}>
      <h2 className="text-3xl mb-8">{t('projectsTitle')}</h2>
      
      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${
              isDark ? 'bg-[#303134]' : 'bg-gray-50'
            } rounded-lg p-6 hover:shadow-lg transition-shadow`}
          >
            <div className="flex gap-6">
              {/* Project Image Placeholder */}
              <div className={`flex-shrink-0 w-40 h-40 ${isDark ? 'bg-[#202124]' : 'bg-gray-200'} rounded-lg flex items-center justify-center`}>
                <span className={`text-4xl ${isDark ? 'text-[#9aa0a6]' : 'text-gray-400'}`}>📦</span>
              </div>
              
              {/* Project Content */}
              <div className="flex-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#1a0dab] hover:underline cursor-pointer block mb-2"
                >
                  {project.title[language]}
                </a>
                
                <div className={`text-sm mb-3 ${isDark ? 'text-[#9aa0a6]' : 'text-gray-600'}`}>
                  {project.year}
                </div>
                
                <p className={`${isDark ? 'text-[#bdc1c6]' : 'text-gray-700'} mb-3`}>
                  {project.description[language]}
                </p>
                
                <div className={`text-sm ${isDark ? 'text-[#9aa0a6]' : 'text-gray-600'}`}>
                  <span className="font-semibold">{t('aspect')}:</span>{' '}
                  <span className={isDark ? 'text-[#8ab4f8]' : 'text-blue-600'}>
                    {getAspectLabel(project.aspect)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}