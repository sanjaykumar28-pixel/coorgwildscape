import { RotateCcw, ShieldAlert } from 'lucide-react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useFilters } from '../../hooks/useFilters';
import {
  filterHiddenPlaces,
  HIDDEN_PLACE_CATEGORIES,
} from '../../controllers/hiddenPlace.controller';
import { HiddenPlaceCategory } from '../../models/hiddenPlace.model';
import { COORG_MEDIA } from '../../data/media';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { HiddenPlaceCard } from '../components/HiddenPlaceCard';
import { ContactCTA } from '../components/ContactCTA';
import { RevealAnimation } from '../components/RevealAnimation';

export function HiddenPlacesPage() {
  useDocumentTitle(
    'Hidden Places in Coorg – Quiet Waterfalls, Lakes & Ridges',
    'Explore lesser-known places in Coorg including Chelavara Falls, Chiklihole Reservoir, Honnamana Kere, Galibeedu, and Nalknad Palace.'
  );

  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    resetFilters,
    hasActiveFilters,
  } = useFilters<HiddenPlaceCategory>('All');

  const filtered = filterHiddenPlaces(searchQuery, selectedCategory);

  return (
    <>
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-[#09100C] text-[#F2F1EC] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={COORG_MEDIA.galibeedu}
            alt="Quiet misty valleys of Galibeedu in hidden Kodagu"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09100C]/70 via-[#09100C]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09100C]/65 via-[#09100C]/25 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#E88554] mb-3">
            Off The Main Highway
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] max-w-3xl display-balance">
            The Places Most People Never Find.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#B8C2BA] max-w-2xl leading-relaxed">
            Beyond the busy Madikeri loop lie tranquil backwaters, hidden forest gorges,
            royal hunting lodges, and wind-swept ridges. Always verify road and forest rules
            before setting out.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#09100C] text-[#F2F1EC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-8 border-b border-[#F2F1EC]/12">
            <CategoryFilter
              theme="dark"
              categories={HIDDEN_PLACE_CATEGORIES}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <SearchBar
              theme="dark"
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search hidden places…"
              ariaLabel="Search hidden places in Coorg"
            />
          </div>

          <div className="mt-6 flex items-center justify-between text-xs text-[#9BA69E]">
            <span>
              Showing <strong className="text-white">{filtered.length}</strong>{' '}
              {filtered.length === 1 ? 'location' : 'locations'}
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 font-medium text-[#E88554] hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                Clear filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((place, idx) => (
                <RevealAnimation key={place.id} delay={(idx % 3) * 0.05} className="h-full">
                  <HiddenPlaceCard place={place} showExtended />
                </RevealAnimation>
              ))}
            </div>
          ) : (
            <div className="mt-12 py-16 px-6 text-center bg-[#111A14] border border-[#F2F1EC]/10 rounded-sm">
              <p className="font-display text-2xl font-semibold text-[#F2F1EC]">
                No hidden spots matched your filter
              </p>
              <p className="mt-2 text-sm text-[#9BA69E]">
                Try resetting the category or search input to see all hidden Kodagu locations.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 px-5 py-2.5 rounded-sm bg-[#D95D24] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Show All Locations
              </button>
            </div>
          )}

          {/* Responsible Access Advisory */}
          <div className="mt-14 p-6 bg-[#111A14] border border-[#F2F1EC]/12 rounded-sm flex items-start gap-4">
            <ShieldAlert className="w-5 h-5 text-[#E88554] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-[#B8C2BA] leading-relaxed">
              <strong className="text-white font-medium">Respect Private Estates & Forest Laws:</strong>{' '}
              Many quiet trails in Kodagu border active coffee plantations or protected reserve
              forests. Never enter fenced estate roads without landowner permission, avoid swimming
              in waterfall plunge pools, and carry all waste back out.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
