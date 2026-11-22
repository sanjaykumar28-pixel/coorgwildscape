import { RotateCcw } from 'lucide-react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useFilters } from '../../hooks/useFilters';
import { filterResorts, RESORT_CATEGORIES } from '../../controllers/resort.controller';
import { ResortCategory } from '../../models/resort.model';
import { COORG_MEDIA } from '../../data/media';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { ResortCard } from '../components/ResortCard';
import { ContactCTA } from '../components/ContactCTA';
import { RevealAnimation } from '../components/RevealAnimation';

export function ResortsPage() {
  useDocumentTitle(
    'Resorts & Nature Stays in Coorg',
    'Discover heritage coffee plantation stays, Kodava homestays, nature retreats, and luxury resorts in Coorg.'
  );

  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    resetFilters,
    hasActiveFilters,
  } = useFilters<ResortCategory>('All');

  const filtered = filterResorts(searchQuery, selectedCategory);

  return (
    <>
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#0C140F] text-[#F2F1EC] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={COORG_MEDIA.estateBungalow}
            alt="Heritage plantation stay in Coorg"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C140F]/70 via-[#0C140F]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C140F]/65 via-[#0C140F]/25 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#E88554] mb-3">
            Resorts & Nature Stays
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] max-w-3xl display-balance">
            Stay Where Coffee Slopes Meet Morning Mist
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#D4DBD6] max-w-2xl leading-relaxed">
            Explore curated sample stays across Suntikoppa, Madikeri, Pollibetta, and
            Kakkabe. Enquire directly on WhatsApp for tailored stay recommendations.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-8 border-b border-[#161B17]/10">
            <CategoryFilter
              categories={RESORT_CATEGORIES}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search stays, locations, amenities…"
              ariaLabel="Search resorts and homestays"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-[#525B53]">
            <span>
              Showing <strong className="text-[#161B17]">{filtered.length}</strong> curated{' '}
              {filtered.length === 1 ? 'property' : 'properties'} (Sample partner directory — no online booking)
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 font-medium text-[#D95D24] hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                Clear filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((resort, idx) => (
                <RevealAnimation key={resort.id} delay={(idx % 3) * 0.05} className="h-full">
                  <ResortCard resort={resort} />
                </RevealAnimation>
              ))}
            </div>
          ) : (
            <div className="mt-12 py-16 px-6 text-center bg-white border border-[#161B17]/10 rounded-sm">
              <p className="font-display text-2xl font-semibold text-[#161B17]">
                No stays matched your search
              </p>
              <p className="mt-2 text-sm text-[#525B53]">
                Adjust your stay category or search keyword to view all properties.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 px-5 py-2.5 rounded-sm bg-[#161B17] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
