import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Mountain,
  ShieldCheck,
} from 'lucide-react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { getRelatedSafaris, getSafariBySlug } from '../../controllers/safari.controller';
import { getSafariEnquiryUrl } from '../../services/whatsapp.service';
import { SafariCard } from '../components/SafariCard';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { ContactCTA } from '../components/ContactCTA';

export function SafariDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const safari = slug ? getSafariBySlug(slug) : undefined;

  useDocumentTitle(
    safari ? `${safari.name} – 4x4 Jeep Safari in Coorg` : 'Safari Not Found',
    safari?.shortDescription
  );

  if (!safari) {
    return (
      <section className="pt-36 pb-28 px-5 text-center bg-[#0C140F] text-[#F2F1EC]">
        <h1 className="font-display text-4xl font-semibold">Safari Experience Not Found</h1>
        <p className="mt-3 text-base text-[#B8C2BA]">
          We couldn’t find that jeep trail. View all active Coorg safari routes below.
        </p>
        <Link
          to="/jeep-safari"
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#D95D24] text-white text-xs font-semibold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Jeep Safaris
        </Link>
      </section>
    );
  }

  const related = getRelatedSafaris(safari.slug, 3);

  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-44 sm:pb-24 bg-[#0C140F] text-[#F2F1EC] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={safari.heroImage}
            alt={safari.name}
            objectPosition={safari.imagePosition}
            priority
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C140F] via-[#0C140F]/55 to-[#0C140F]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <Link
            to="/jeep-safari"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#D4DBD6] hover:text-white mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            All Jeep Safaris
          </Link>

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E88554] mb-2">
            {safari.difficulty} · {safari.category} · {safari.location}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] max-w-3xl">
            {safari.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#D4DBD6] max-w-2xl leading-relaxed">
            {safari.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#0C140F] text-[#F2F1EC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-display text-3xl font-semibold text-[#F2F1EC]">
                Experience Description
              </h2>
              <p className="mt-4 text-base text-[#B8C2BA] leading-relaxed">
                {safari.description}
              </p>
            </div>

            <div className="pt-8 border-t border-[#F2F1EC]/12">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F2F1EC]">
                Route Overview
              </h2>
              <ol className="mt-5 space-y-3">
                {safari.routeOverview.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-4 p-4 bg-[#131E17] border border-[#F2F1EC]/10 rounded-sm"
                  >
                    <span className="font-mono-tabular text-xs font-semibold text-[#E88554]">
                      0{index + 1}
                    </span>
                    <span className="text-sm sm:text-base text-[#F2F1EC]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="pt-8 border-t border-[#F2F1EC]/12">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F2F1EC]">
                Trail Highlights
              </h2>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-[#B8C2BA]">
                {safari.highlights.map((item) => (
                  <li
                    key={item}
                    className="p-4 bg-[#131E17] border border-[#F2F1EC]/10 rounded-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-[#F2F1EC]/12">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F2F1EC]">
                Requirements, Safety & Access Disclaimer
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-[#B8C2BA]">
                {safari.safetyNotes.map((note) => (
                  <li key={note} className="leading-relaxed">
                    · {note}
                  </li>
                ))}
              </ul>
              <div className="mt-5 p-4 bg-[#131E17] border border-[#E88554]/30 rounded-sm flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#E88554] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-[#D4DBD6] leading-relaxed">
                  {safari.accessNotes} Weather, fog density, and local forest department checks
                  may alter departure times or upper-ridge access.
                </p>
              </div>
            </div>

            {safari.gallery.length > 0 && (
              <div className="pt-8 border-t border-[#F2F1EC]/12">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F2F1EC] mb-5">
                  Trail Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {safari.gallery.map((img, idx) => (
                    <div
                      key={`${img}-${idx}`}
                      className="aspect-[4/3] overflow-hidden rounded-sm bg-[#131E17]"
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${safari.name} trail photo ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#131E17] border border-[#F2F1EC]/12 rounded-sm p-6 space-y-5 lg:sticky lg:top-28">
              <h3 className="font-display text-2xl font-semibold text-[#F2F1EC]">
                Expedition Briefing
              </h3>

              <div className="space-y-4 text-sm text-[#B8C2BA] border-t border-[#F2F1EC]/10 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E88554] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-[#F2F1EC]">Trail Zone</p>
                    <p className="mt-0.5">{safari.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mountain className="w-4 h-4 text-[#E88554] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-[#F2F1EC]">Terrain</p>
                    <p className="mt-0.5 leading-relaxed">{safari.terrain}</p>
                  </div>
                </div>

                {safari.duration && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#E88554] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-[#F2F1EC]">Typical Duration</p>
                      <p className="mt-0.5 leading-relaxed">{safari.duration}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2 space-y-3">
                <a
                  href={getSafariEnquiryUrl(safari.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-[#D95D24] hover:bg-[#C04D19] text-white text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>

                <a
                  href={safari.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm border border-[#F2F1EC]/25 hover:border-white text-[#F2F1EC] text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                >
                  View Area on Maps
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#131E17] text-[#F2F1EC] border-t border-[#F2F1EC]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-3xl font-semibold mb-8">More 4x4 Safaris in Coorg</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((item) => (
              <SafariCard key={item.id} safari={item} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
