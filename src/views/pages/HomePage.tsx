import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { getFeaturedDestinations } from '../../controllers/destination.controller';
import { getFeaturedResorts } from '../../controllers/resort.controller';
import { getFeaturedSafaris } from '../../controllers/safari.controller';
import { getAllHiddenPlaces } from '../../controllers/hiddenPlace.controller';
import { getAllExperiences } from '../../controllers/experience.controller';
import { GALLERY_ITEMS } from '../../data/gallery';
import { COORG_MEDIA } from '../../data/media';
import { HeroSection } from '../components/HeroSection';
import { SectionHeading } from '../components/SectionHeading';
import { RevealAnimation } from '../components/RevealAnimation';
import { DestinationCard } from '../components/DestinationCard';
import { SafariCard } from '../components/SafariCard';
import { ResortCard } from '../components/ResortCard';
import { HiddenPlaceCard } from '../components/HiddenPlaceCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { FeaturedRoute } from '../components/FeaturedRoute';
import { ImageGallery } from '../components/ImageGallery';
import { ContactCTA } from '../components/ContactCTA';
import { ImageWithFallback } from '../components/ImageWithFallback';

export function HomePage() {
  useDocumentTitle(
    'Coorg Wildscape – Kodagu Tourism, Jeep Safaris & Nature Stays',
    'Explore Coorg’s misty peaks, 4x4 Mandalpatti jeep safaris, heritage coffee plantation stays, waterfalls, and hidden Kodagu landscapes.'
  );

  const featuredDestinations = getFeaturedDestinations();
  const featuredSafaris = getFeaturedSafaris();
  const featuredResorts = getFeaturedResorts();
  const hiddenPlaces = getAllHiddenPlaces();
  const experiences = getAllExperiences();

  return (
    <>
      {/* Section 1: Cinematic Hero */}
      <HeroSection />

      {/* Section 2: Welcome to Coorg (Alternating Editorial Layout) */}
      <section id="welcome-coorg" className="py-20 sm:py-28 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Welcome to Kodagu"
            title="Some Places Are Meant To Be Discovered."
            description="Cradled along the misty ridges of the Western Ghats, Coorg is a living tapestry of shade-grown coffee estates, thunderous monsoon waterfalls, shola grasslands, and centuries-old Kodava hospitality."
          />

          {/* Alternating Block 1 */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <RevealAnimation className="lg:col-span-7">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#121C16]">
                <ImageWithFallback
                  src={COORG_MEDIA.coorgCloudRidges}
                  alt="Misty Western Ghats mountain ridges bathed in morning light in Coorg"
                  className="h-full w-full object-cover"
                />
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.08} className="lg:col-span-5">
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#1F4D36] mb-3">
                01. High Ridges & Cloud Valleys
              </p>
              <h3 className="font-display text-3xl font-semibold text-[#161B17] leading-snug">
                Where Mornings Begin Above the Clouds
              </h3>
              <p className="mt-4 text-base text-[#4E5850] leading-relaxed">
                From the wind-swept grasslands of Mandalpatti and Tadiandamol to quiet valley
                bends around Galibeedu, Kodagu rewards travelers who step out before sunrise
                with crisp mountain air and unbroken horizons.
              </p>
              <Link
                to="/places"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#161B17] hover:text-[#D95D24] transition-colors"
              >
                Explore Mountain Places
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </RevealAnimation>
          </div>

          {/* Alternating Block 2 (Reversed) */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <RevealAnimation delay={0.08} className="lg:col-span-5 order-2 lg:order-1">
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#1F4D36] mb-3">
                02. Coffee Estates & Cascades
              </p>
              <h3 className="font-display text-3xl font-semibold text-[#161B17] leading-snug">
                Forest Streams, Pepper Vines & Unhurried Stays
              </h3>
              <p className="mt-4 text-base text-[#4E5850] leading-relaxed">
                Beneath tall silver oaks and cardamom shade, family-run estates open onto
                roaring cascades like Abbey and Chelavara. Spend your afternoons listening to
                the rain over freshly brewed Kodagu coffee.
              </p>
              <Link
                to="/resorts"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#161B17] hover:text-[#D95D24] transition-colors"
              >
                Discover Nature Stays
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </RevealAnimation>

            <RevealAnimation className="lg:col-span-7 order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[#121C16]">
                  <ImageWithFallback
                    src={COORG_MEDIA.abbeyFalls}
                    alt="Abbey Falls waterfall surrounded by dense green forest"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[#121C16]">
                  <ImageWithFallback
                    src={COORG_MEDIA.estateBungalow}
                    alt="Heritage tiled-roof estate bungalow in Suntikoppa, Coorg"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Section 3: Explore Destinations */}
      <section className="py-20 sm:py-28 bg-[#EEECe5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Iconic Kodagu"
            title="Explore Destinations Across Coorg"
            description="From mist-wrapped summits and sacred Kaveri shrines to centuries-old forts and roaring waterfalls."
            action={
              <Link
                to="/places"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-[#161B17]/20 bg-white hover:bg-[#161B17] hover:text-[#F7F6F2] text-xs font-semibold uppercase tracking-[0.12em] text-[#161B17] transition-colors whitespace-nowrap"
              >
                View All Destinations
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            }
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination, index) => (
              <RevealAnimation key={destination.id} delay={(index % 4) * 0.05} className="h-full">
                <DestinationCard destination={destination} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Jeep Safari & Off-Road Adventures */}
      <section className="py-20 sm:py-28 bg-[#0C140F] text-[#F2F1EC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            theme="dark"
            eyebrow="4x4 Expeditions"
            title="Beyond The Roads. Into The Wild."
            description="Experience Coorg beyond the usual tourist routes. Explore rugged mountain trails, mist-covered viewpoints, forest roads, and breathtaking off-road landscapes through guided jeep adventures."
            action={
              <Link
                to="/jeep-safari"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#D95D24] hover:bg-[#C04D19] text-white text-xs font-semibold uppercase tracking-[0.12em] transition-colors whitespace-nowrap"
              >
                All Jeep Safaris
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            }
          />

          {/* Marquee 4x4 Showcase */}
          {featuredSafaris[0] && (
            <RevealAnimation className="mt-12">
              <SafariCard safari={featuredSafaris[0]} featuredWide />
            </RevealAnimation>
          )}

          {/* Secondary Safari Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSafaris.slice(1).map((safari, index) => (
              <RevealAnimation key={safari.id} delay={index * 0.06} className="h-full">
                <SafariCard safari={safari} />
              </RevealAnimation>
            ))}
          </div>

          {/* Honest Permission & Safety Notice */}
          <div className="mt-8 p-5 sm:p-6 bg-[#131E17] border border-[#F2F1EC]/12 rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <ShieldCheck className="w-5 h-5 text-[#E88554] shrink-0" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-[#B8C2BA] leading-relaxed">
              <strong className="text-[#F2F1EC] font-medium">
                Authorized Trails & Safety Notice:
              </strong>{' '}
              All off-road excursions operate strictly on permitted corridors, public rural hill
              tracks, or verified private plantation estates. Protected forest reserve routes are
              subject to Karnataka Forest Department permits, entry timings, and monsoon safety
              advisories.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Resorts & Nature Stays */}
      <section className="py-20 sm:py-28 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Curated Stays"
            title="Stay Where Nature Slows You Down."
            description="Discover heritage plantation bungalows, misty ridge retreats, warm Kodava homestays, and secluded forest cottages across Kodagu."
            action={
              <Link
                to="/resorts"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-[#161B17]/20 bg-white hover:bg-[#161B17] hover:text-[#F7F6F2] text-xs font-semibold uppercase tracking-[0.12em] text-[#161B17] transition-colors whitespace-nowrap"
              >
                Explore All Stays
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            }
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResorts.map((resort, index) => (
              <RevealAnimation key={resort.id} delay={index * 0.05} className="h-full">
                <ResortCard resort={resort} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Hidden Coorg */}
      <section className="py-20 sm:py-28 bg-[#09100C] text-[#F2F1EC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            theme="dark"
            eyebrow="Off The Usual Map"
            title="The Places Most People Never Find."
            description="Lesser-known reservoirs, forest cascades, quiet heritage lodges, and wind-swept ridges tucked along Kodagu’s quieter backroads."
            action={
              <Link
                to="/hidden-places"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-[#F2F1EC]/25 hover:border-[#E88554] text-[#F2F1EC] text-xs font-semibold uppercase tracking-[0.12em] transition-colors whitespace-nowrap"
              >
                Explore Hidden Coorg
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            }
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiddenPlaces.map((place, index) => (
              <RevealAnimation key={place.id} delay={(index % 4) * 0.05} className="h-full">
                <HiddenPlaceCard place={place} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Experiences */}
      <section className="py-20 sm:py-28 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Ways to Explore"
            title="Experiences Built Around The Land"
            description="Whether you come for steep 4x4 trails, monsoon waterfalls, or slow coffee estate mornings, tailor your days around what moves you."
            action={
              <Link
                to="/experiences"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-[#161B17]/20 bg-white hover:bg-[#161B17] hover:text-[#F7F6F2] text-xs font-semibold uppercase tracking-[0.12em] text-[#161B17] transition-colors whitespace-nowrap"
              >
                View All Experiences
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            }
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <RevealAnimation key={exp.id} delay={(index % 4) * 0.05} className="h-full">
                <ExperienceCard experience={exp} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Featured Route */}
      <FeaturedRoute />

      {/* Section 9: Gallery */}
      <section className="py-20 sm:py-28 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Visual Field Notes"
            title="Moments Across Mist, Rock & Canopy"
            description="Select any photograph to open full-screen field notes from Kodagu’s trails and estates."
            action={
              <Link
                to="/promo-reel"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#161B17] hover:bg-[#D95D24] text-xs font-semibold uppercase tracking-[0.12em] text-[#F7F6F2] transition-colors whitespace-nowrap"
              >
                Create Promo Video
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            }
          />

          <div className="mt-12">
            <ImageGallery items={GALLERY_ITEMS} />
          </div>
        </div>
      </section>

      {/* Section 10: Immersive CTA */}
      <ContactCTA />
    </>
  );
}
