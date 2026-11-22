import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { BUSINESS_CONFIG } from '../../config/business';
import { COORG_MEDIA } from '../../data/media';
import { getGeneralEnquiryUrl } from '../../services/whatsapp.service';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { RevealAnimation } from '../components/RevealAnimation';
import { ContactCTA } from '../components/ContactCTA';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Rooted in Kodagu',
    body: 'We focus exclusively on Coorg—understanding its monsoon shifts, harvest months, backroad conditions, and quiet village rhythms.',
  },
  {
    number: '02',
    title: 'Adventure With Respect',
    body: 'Our 4x4 trails operate strictly along authorized ridges, public rural routes, and consenting private coffee estates—never intruding on protected wildlife habitats.',
  },
  {
    number: '03',
    title: 'Unhurried & Personal',
    body: 'No crowded group checklists or rushed stops. Every route is shaped around your pace, whether you want sunrise ridges or quiet plantation mornings.',
  },
];

export function AboutPage() {
  useDocumentTitle(
    'About Coorg Wildscape – Our Kodagu Philosophy',
    'Learn about Coorg Wildscape’s connection to Kodagu, our responsible off-road travel philosophy, and personalized trip planning.'
  );

  return (
    <>
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#0C140F] text-[#F2F1EC] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={COORG_MEDIA.orangeJeepRidgeWide}
            alt="Orange 4x4 Jeep on a misty mountain ridge in Coorg"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C140F]/70 via-[#0C140F]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C140F]/65 via-[#0C140F]/25 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#E88554] mb-3">
            Our Story & Philosophy
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] max-w-3xl display-balance">
            Crafted For Travelers Who Want To Know Coorg Properly.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#D4DBD6] max-w-2xl leading-relaxed">
            {BUSINESS_CONFIG.brandName} brings together local trail expertise, mountain 4x4
            exploration, and quiet estate stays across Kodagu.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <RevealAnimation className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[#121C16]">
              <ImageWithFallback
                src={COORG_MEDIA.estateBungalow}
                alt="Traditional Kodava plantation estate surrounded by greenery"
                className="h-full w-full object-cover"
              />
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.08} className="lg:col-span-6 space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#D95D24]">
              Our Connection to Coorg
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#161B17] leading-snug">
              More Than A Weekend Hill Station
            </h2>
            <p className="text-base text-[#4E5850] leading-relaxed">
              Most visitors see Kodagu through car windows stuck behind weekend traffic on two
              familiar roads. Yet five minutes off the highway, red laterite tracks climb through
              cardamom shade toward mist-wrapped ridges and silent mountain reservoirs.
            </p>
            <p className="text-base text-[#4E5850] leading-relaxed">
              We started {BUSINESS_CONFIG.brandName} to help travelers navigate the real Kodagu—connecting
              directly with local 4x4 drivers, honest route timing, and peaceful plantation stays
              without automated booking traps or tourist-bus clichés.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#D95D24] hover:bg-[#C04D19] text-white text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Speak With Us on WhatsApp
              </a>

              <Link
                to="/jeep-safari"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#161B17] hover:text-[#D95D24]"
              >
                Explore Jeep Safaris
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#EEECe5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#1F4D36] mb-2">
              Responsible Tourism
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#161B17]">
              How We Guide Every Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRINCIPLES.map((item, idx) => (
              <RevealAnimation key={item.number} delay={idx * 0.06} className="h-full">
                <div className="h-full p-7 bg-white border border-[#161B17]/10 rounded-sm">
                  <span className="font-mono-tabular text-xs font-semibold text-[#D95D24]">
                    {item.number}.
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-[#161B17] mt-2">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#4E5850] leading-relaxed">{item.body}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
