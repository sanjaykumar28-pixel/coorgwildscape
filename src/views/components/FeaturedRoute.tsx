import { ArrowRight, MessageCircle } from 'lucide-react';
import { FEATURED_ITINERARY } from '../../data/routes';
import { getItineraryEnquiryUrl } from '../../services/whatsapp.service';
import { ImageWithFallback } from './ImageWithFallback';
import { SectionHeading } from './SectionHeading';
import { RevealAnimation } from './RevealAnimation';

export function FeaturedRoute() {
  return (
    <section className="py-20 sm:py-28 bg-[#EEECe5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Sample Field Itinerary"
          title={FEATURED_ITINERARY.title}
          description={FEATURED_ITINERARY.summary}
          action={
            <a
              href={getItineraryEnquiryUrl(FEATURED_ITINERARY.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#161B17] hover:bg-[#D95D24] text-[#F7F6F2] text-xs font-semibold uppercase tracking-[0.12em] transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Enquire About This Trip
            </a>
          }
        />

        {/* Route Line Visualization */}
        <div className="mt-10 p-5 sm:p-6 bg-white border border-[#161B17]/10 rounded-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#161B17]/8 pb-4 mb-5">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#D95D24]">
              {FEATURED_ITINERARY.badge}
            </span>
            <span className="text-xs text-[#525B53]">Customizable Private 4x4 Route</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base font-medium text-[#161B17]">
            {FEATURED_ITINERARY.routeLine.map((stop, idx) => (
              <div key={`${stop}-${idx}`} className="flex items-center gap-2 sm:gap-3">
                <span className="font-display text-xl sm:text-2xl font-semibold">{stop}</span>
                {idx < FEATURED_ITINERARY.routeLine.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#D95D24] shrink-0" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4 Stop Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_ITINERARY.stops.map((stop, index) => (
            <RevealAnimation key={stop.order} delay={index * 0.06} className="h-full">
              <div className="flex flex-col h-full w-full bg-white border border-[#161B17]/10 rounded-sm overflow-hidden">
                <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#121C16]">
                  <ImageWithFallback
                    src={stop.image}
                    alt={stop.name}
                    objectPosition={stop.imagePosition}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="font-mono-tabular text-xs font-medium text-[#D95D24]">
                    {stop.order}.
                  </span>
                  <h3 className="font-display text-xl font-semibold text-[#161B17] mt-1 leading-snug line-clamp-2 min-h-[3.45rem]">
                    {stop.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#4E5850] leading-relaxed line-clamp-3 min-h-[4.265rem]">
                    {stop.note}
                  </p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Highlights & Honest Weather/Access Disclaimer */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 bg-white border border-[#161B17]/10 rounded-sm p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#161B17] mb-3">
              Adventure Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#4E5850]">
              {FEATURED_ITINERARY.highlights.map((item) => (
                <li key={item} className="leading-relaxed">
                  · {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-[#F7F6F2] border border-[#161B17]/12 rounded-sm p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1F4D36] mb-2">
              Trail & Weather Advisory
            </h3>
            <p className="text-sm text-[#4E5850] leading-relaxed">
              {FEATURED_ITINERARY.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
