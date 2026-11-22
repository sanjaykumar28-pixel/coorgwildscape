import { RotateCcw, ShieldAlert } from 'lucide-react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useFilters } from '../../hooks/useFilters';
import { filterSafaris, SAFARI_CATEGORIES } from '../../controllers/safari.controller';
import { SafariCategory } from '../../models/safari.model';
import { COORG_MEDIA } from '../../data/media';
import { GALLERY_ITEMS } from '../../data/gallery';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { SafariCard } from '../components/SafariCard';
import { ImageGallery } from '../components/ImageGallery';
import { ContactCTA } from '../components/ContactCTA';
import { RevealAnimation } from '../components/RevealAnimation';

export function JeepSafariPage() {
  useDocumentTitle(
    'Coorg Jeep Safari & Off-Road 4x4 Adventures',
    'Experience Mandalpatti Jeep Safari, Kabbe Hills expeditions, and authorized private estate 4x4 trails in Coorg.'
  );

  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    resetFilters,
    hasActiveFilters,
  } = useFilters<SafariCategory>('All');

  const filtered = filterSafaris(searchQuery, selectedCategory);
  const jeepGallery = GALLERY_ITEMS.filter(
    (item) => item.category === 'Jeeps' || item.category === 'Trails' || item.category === 'Mountains'
  );

  return (
    <>
      {/* Full-Screen Adventure Hero */}
      <section className="relative min-h-[78vh] flex items-end pb-16 sm:pb-24 pt-32 bg-[#0C140F] text-[#F2F1EC] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={COORG_MEDIA.orangeJeepRidgeClose}
            alt="Orange 4x4 Invader Jeep overlooking Coorg mountain ranges"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C140F]/65 via-[#0C140F]/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C140F]/55 via-[#0C140F]/15 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#E88554] mb-3">
            4x4 Off-Road Division
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-semibold leading-[1.06] max-w-3xl display-balance">
            Built For Kodagu’s Steepest Ridges & Mist Trails.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#D4DBD6] max-w-2xl leading-relaxed">
            Climb boulder-strewn ghats to Mandalpatti, traverse quiet South Coorg hill tracks,
            and experience guided 4x4 journeys led by veteran local drivers.
          </p>
        </div>
      </section>

      {/* Filters & Safaris */}
      <section className="py-16 sm:py-24 bg-[#0C140F] text-[#F2F1EC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-8 border-b border-[#F2F1EC]/12">
            <CategoryFilter
              theme="dark"
              categories={SAFARI_CATEGORIES}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <SearchBar
              theme="dark"
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search trails or regions…"
              ariaLabel="Search jeep safaris"
            />
          </div>

          <div className="mt-6 flex items-center justify-between text-xs text-[#A6B0A8]">
            <span>
              Showing <strong className="text-white">{filtered.length}</strong>{' '}
              {filtered.length === 1 ? 'trail' : 'trails'}
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
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((safari, idx) => (
                <RevealAnimation key={safari.id} delay={(idx % 2) * 0.06} className="h-full">
                  <SafariCard safari={safari} />
                </RevealAnimation>
              ))}
            </div>
          ) : (
            <div className="mt-12 py-16 px-6 text-center bg-[#131E17] border border-[#F2F1EC]/10 rounded-sm">
              <p className="font-display text-2xl font-semibold text-[#F2F1EC]">
                No safari routes matched your filter
              </p>
              <p className="mt-2 text-sm text-[#A6B0A8]">
                Reset filters to view all 4x4 trails and scenic jeep expeditions.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 px-5 py-2.5 rounded-sm bg-[#D95D24] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Show All Safaris
              </button>
            </div>
          )}

          {/* Safety & Permission Notice */}
          <div className="mt-12 p-6 sm:p-8 bg-[#131E17] border border-[#F2F1EC]/12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-[#E88554] shrink-0" aria-hidden="true" />
              <h2 className="font-display text-2xl font-semibold text-[#F2F1EC]">
                Trail Permissions & Safety
              </h2>
            </div>
            <div className="lg:col-span-8 text-sm text-[#B8C2BA] space-y-2.5 leading-relaxed">
              <p>
                · Protected wildlife corridors and forest check-posts in Kodagu require valid
                Karnataka Forest Department entry permits and adherence to official daylight hours.
              </p>
              <p>
                · Private plantation off-road loops operate strictly with landowner permission;
                routes never trespass into restricted reserve forests.
              </p>
              <p>
                · Heavy monsoon rain, landslips, or zero-visibility fog may require itinerary
                adjustments for passenger safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trail Gallery */}
      <section className="py-16 sm:py-24 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#D95D24] mb-2">
              On The Trail
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#161B17]">
              4x4 Fleet & Mountain Ridges
            </h2>
          </div>
          <ImageGallery items={jeepGallery} />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
