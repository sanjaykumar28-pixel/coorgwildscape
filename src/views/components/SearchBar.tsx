import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  theme?: 'light' | 'dark';
  ariaLabel?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search by name or location…',
  theme = 'light',
  ariaLabel = 'Search',
}: SearchBarProps) {
  const isDark = theme === 'dark';

  return (
    <div className="relative w-full md:max-w-sm">
      <Search
        className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${
          isDark ? 'text-[#A6B0A8]' : 'text-[#525B53]'
        }`}
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className={`w-full pl-10 pr-9 py-2.5 text-sm rounded-sm border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D95D24] ${
          isDark
            ? 'bg-[#131E17] border-[#29382E] text-[#F2F1EC] placeholder:text-[#7E8B81] focus:border-[#D95D24]'
            : 'bg-white border-[#161B17]/15 text-[#161B17] placeholder:text-[#6B756D] focus:border-[#1F4D36]'
        }`}
      />
      {value.length > 0 && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className={`absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-sm transition-colors ${
            isDark
              ? 'text-[#A6B0A8] hover:text-white'
              : 'text-[#525B53] hover:text-[#161B17]'
          }`}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
