import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Platform } from '../../data/platforms';
import { Language } from '../../utils/translations';

interface PlatformCardProps {
  platform: Platform;
  isDark: boolean;
  language: Language;
}

export function PlatformCard({ platform, isDark, language }: PlatformCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`block p-6 rounded-lg transition-all duration-300 ${
        isDark
          ? 'bg-[#303134] hover:bg-[#3c4043] border border-[#5f6368]'
          : 'bg-white hover:bg-gray-50 border border-gray-300 shadow-sm hover:shadow-md'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center p-2 bg-gray-400"
          >
            <img
              src={platform.logo}
              alt={`${platform.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3
              className={`font-semibold text-lg ${
                isDark ? 'text-white' : 'text-black'
              }`}
            >
              {platform.name}
            </h3>
          </div>
        </div>
        <ExternalLink
          className={`w-5 h-5 ${
            isDark ? 'text-[#9aa0a6]' : 'text-gray-500'
          } transition-transform ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`}
        />
      </div>

      {/* Stats - Always visible on mobile, hover on desktop */}
      <div
        className={`space-y-2 transition-all duration-300 md:overflow-hidden ${
          isHovered ? 'md:opacity-100 md:max-h-40' : 'md:opacity-0 md:max-h-0'
        }`}
      >
        {platform.stats[language].map((stat, index) => (
          <div
            key={index}
            className={`text-sm ${
              isDark ? 'text-[#bdc1c6]' : 'text-gray-700'
            } flex items-start gap-2`}
          >
            <span>{stat}</span>
          </div>
        ))}
      </div>

      {/* Accent border bottom */}
      <div
        className={`mt-4 h-1 rounded-full transition-all duration-300 ${
          isHovered ? 'w-full' : 'w-0'
        }`}
        style={{ backgroundColor: platform.color }}
      />
    </a>
  );
}