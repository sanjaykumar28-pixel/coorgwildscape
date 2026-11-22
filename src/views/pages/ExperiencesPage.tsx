import { RotateCcw } from 'lucide-react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useFilters } from '../../hooks/useFilters';
import {
  EXPERIENCE_CATEGORIES,
  filterExperiences,
} from '../../controllers/experience.controller';
import { ExperienceCategory } from '../../models/experience.model';
import { COORG_MEDIA } from '../../data/media';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { ExperienceCard } from '../components/ExperienceCard';
import { ContactCTA } from '../components/ContactCTA';
import { RevealAnimation } from '../components/RevealAnimation';

export function ExperiencesPage() {
  useDocumentTitle(
    'Coorg Experiences – Safaris, Waterfalls & Coffee Walks',
    'Curated Coorg experiences: 4x4 jeep safaris, waterfall exploration, coffee plantation walks, sunrise peaks, and scenic drives.'
  );

  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    resetFilters,
    hasActiveFilters,
  } = useFilters<ExperienceCategory>('All');

  const filtered = filterExperiences(searchQuery, selectedCategory);

  return (
    <>
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#0C140F] text-[#F2F1EC] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={COORG_MEDIA.waterfallExploration}
            alt="Cascading forest waterfall in Coorg"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C140F]/70 via-[#0C140F]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C140F]/65 via-[#0C140F]/25 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#E88554] mb-3">
            Curated Experiences
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] max-w-3xl display-balance">
            Choose How You Want To Feel Kodagu
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#D4DBD6] max-w-2xl leading-relaxed">
            Mix and match off-road 4x4 trails, waterfall circuits, heritage coffee walks,
            and sunrise viewpoints into a custom Coorg itinerary.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-8 border-b border-[#161B17]/10">
            <CategoryFilter
              categories={EXPERIENCE_CATEGORIES}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search experiences or seasons…"
              ariaLabel="Search Coorg experiences"
            />
          </div>

          <div className="mt-6 flex items-center justify-between text-xs text-[#525B53]">
            <span>
              Showing <strong className="text-[#161B17]">{filtered.length}</strong>{' '}
              {filtered.length === 1 ? 'experience' : 'experiences'}
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
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((exp, idx) => (
                <RevealAnimation key={exp.id} delay={(idx % 3) * 0.05} className="h-full">
                  <ExperienceCard experience={exp} detailed />
                </RevealAnimation>
              ))}
            </div>
          ) : (
            <div className="mt-12 py-16 px-6 text-center bg-white border border-[#161B17]/10 rounded-sm">
              <p className="font-display text-2xl font-semibold text-[#161B17]">
                No experiences matched your filter
              </p>
              <p className="mt-2 text-sm text-[#525B53]">
                Reset filters to view all outdoor and cultural experiences in Kodagu.
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
