interface CategoryFilterProps<T extends string> {
  categories: readonly T[];
  selected: T | 'All';
  onSelect: (category: T | 'All') => void;
  theme?: 'light' | 'dark';
}

export function CategoryFilter<T extends string>({
  categories,
  selected,
  onSelect,
  theme = 'light',
}: CategoryFilterProps<T>) {
  const isDark = theme === 'dark';
  const items: Array<T | 'All'> = ['All', ...categories];

  return (
    <div
      className="flex flex-wrap items-center gap-1.5"
      role="tablist"
      aria-label="Filter by category"
    >
      {items.map((category) => {
        const isActive = selected === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(category)}
            className={`px-3.5 py-2 text-xs font-medium tracking-wide whitespace-nowrap shrink-0 rounded-sm border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D95D24] ${
              isActive
                ? isDark
                  ? 'bg-[#D95D24] border-[#D95D24] text-white'
                  : 'bg-[#161B17] border-[#161B17] text-[#F7F6F2]'
                : isDark
                  ? 'bg-transparent border-[#29382E] text-[#A6B0A8] hover:border-[#F2F1EC]/35 hover:text-[#F2F1EC]'
                  : 'bg-white border-[#161B17]/12 text-[#4E5850] hover:border-[#161B17]/35 hover:text-[#161B17]'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
