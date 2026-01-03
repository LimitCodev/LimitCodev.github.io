import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface SortSelectorProps {
  isDark: boolean;
  sortBy: 'date' | 'relevance';
  onSortChange: (sort: 'date' | 'relevance') => void;
  t: (key: string) => string;
}

export function SortSelector({ isDark, sortBy, onSortChange, t }: SortSelectorProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className={`text-sm ${isDark ? 'text-[#9aa0a6]' : 'text-gray-600'}`}>
        {t('sortBy')}:
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={`flex items-center gap-1 text-sm ${
              isDark ? 'text-[#9aa0a6] hover:text-white' : 'text-gray-600 hover:text-black'
            }`}
          >
            <span>{sortBy === 'date' ? t('date') : t('relevance')}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={isDark ? 'bg-[#303134] border-[#5f6368]' : ''}>
          <DropdownMenuItem
            onClick={() => onSortChange('date')}
            className={`${isDark ? 'text-white hover:bg-[#3c4043]' : ''} ${
              sortBy === 'date' ? 'bg-[#3c4043]' : ''
            }`}
          >
            {t('date')}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onSortChange('relevance')}
            className={`${isDark ? 'text-white hover:bg-[#3c4043]' : ''} ${
              sortBy === 'relevance' ? 'bg-[#3c4043]' : ''
            }`}
          >
            {t('relevance')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
