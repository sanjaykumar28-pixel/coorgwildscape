import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink, MapPin, MessageCircle } from 'lucide-react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import {
  getDestinationBySlug,
  getRelatedDestinations,
} from '../../controllers/destination.controller';
import { getDestinationEnquiryUrl } from '../../services/whatsapp.service';
import { DestinationCard } from '../components/DestinationCard';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { ContactCTA } from '../components/ContactCTA';

export function PlaceDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = slug ? getDestinationBySlug(slug) : undefined;

  useDocumentTitle(
    destination ? `${destination.name} – Coorg Destination Guide` : 'Destination Not Found',
    destination?.shortDescription
  );

  if (!destination) {
    return (
      <section className="pt-36 pb-28 px-5 text-center bg-[#F7F6F2]">
        <h1 className="font-display text-4xl font-semibold text-[#161B17]">
          Destination Not Found
        </h1>
        <p className="mt-3 text-base text-[#4E5850]">
          We couldn’t find that Coorg location. Explore all verified destinations below.
        </p>
        <Link
          to="/places"
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#161B17] text-white text-xs font-semibold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Explore Coorg
        </Link>
      </section>
    );
  }

  const related = getRelatedDestinations(destination.slug, 3);

  return (
    <>
      {/* Hero Image */}
      <section className="relative pt-32 pb-16 sm:pt-44 sm:pb-24 bg-[#0C140F] text-[#F2F1EC] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={destination.heroImage}
            alt={destination.name}
            objectPosition={destination.imagePosition}
            priority
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C140F] via-[#0C140F]/55 to-[#0C140F]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <Link
            to="/places"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#D4DBD6] hover:text-white mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            All Destinations
          </Link>

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E88554] mb-2">
            {destination.category} · {destination.location}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] max-w-3xl">
            {destination.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#D4DBD6] max-w-2xl leading-relaxed">
            {destination.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Editorial Body */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-display text-3xl font-semibold text-[#161B17]">
                Overview
              </h2>
              <p className="mt-4 text-base text-[#4E5850] leading-relaxed">
                {destination.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="pt-8 border-t border-[#161B17]/10">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#161B17]">
                Key Highlights
              </h2>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-[#4E5850]">
                {destination.highlights.map((item) => (
                  <li
                    key={item}
                    className="p-4 bg-white border border-[#161B17]/10 rounded-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Tips */}
            <div className="pt-8 border-t border-[#161B17]/10">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#161B17]">
                Practical Travel Tips
              </h2>
              <ul className="mt-4 space-y-3 text-sm sm:text-base text-[#4E5850]">
                {destination.travelTips.map((tip) => (
                  <li key={tip} className="leading-relaxed">
                    · {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo Gallery */}
            {destination.gallery.length > 0 && (
              <div className="pt-8 border-t border-[#161B17]/10">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#161B17] mb-5">
                  Location Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {destination.gallery.map((img, idx) => (
                    <div
                      key={`${img}-${idx}`}
                      className="aspect-[4/3] overflow-hidden rounded-sm bg-[#121C16]"
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${destination.name} view ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#161B17]/10 rounded-sm p-6 space-y-5 lg:sticky lg:top-28">
              <h3 className="font-display text-2xl font-semibold text-[#161B17]">
                Plan Your Visit
              </h3>

              <div className="space-y-4 text-sm text-[#4E5850] border-t border-[#161B17]/10 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D95D24] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-[#161B17]">Location</p>
                    <p className="mt-0.5">{destination.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#D95D24] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-[#161B17]">Best Time to Visit</p>
                    <p className="mt-0.5 leading-relaxed">{destination.bestTimeToVisit}</p>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-[#161B17] mb-1.5">Nearby Places</p>
                  <p className="text-xs text-[#525B53] leading-relaxed">
                    {destination.nearbyPlaces.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <a
                  href={getDestinationEnquiryUrl(destination.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-[#D95D24] hover:bg-[#C04D19] text-white text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>

                <a
                  href={destination.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm border border-[#161B17]/20 hover:border-[#161B17] text-[#161B17] text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                >
                  View on Google Maps
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Destinations */}
      <section className="py-16 sm:py-20 bg-[#EEECe5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-3xl font-semibold text-[#161B17] mb-8">
            More Destinations in Kodagu
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((item) => (
              <DestinationCard key={item.id} destination={item} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
