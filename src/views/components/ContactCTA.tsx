import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getGeneralEnquiryUrl } from '../../services/whatsapp.service';
import { COORG_MEDIA } from '../../data/media';

export function ContactCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0C140F] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={COORG_MEDIA.sunriseCoorg}
          alt="Golden sunrise glowing above misty Kodagu mountain ridges"
          loading="lazy"
          className="h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C140F] via-[#0C140F]/75 to-[#0C140F]/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#E88554] mb-4">
          CUSTOM EXPEDITIONS & STAYS
        </p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-[#F2F1EC] leading-[1.08] display-balance">
          Your Coorg Adventure Starts Here.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-[#B8C2BA] leading-relaxed max-w-2xl mx-auto">
          Tell us what kind of experience you are looking for. From mountain trails to
          peaceful stays, discover your own way through Coorg.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#F2F1EC] hover:bg-white text-[#0C140F] text-sm font-semibold tracking-wide transition-colors whitespace-nowrap"
          >
            Plan Your Experience
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <a
            href={getGeneralEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#D95D24] hover:bg-[#C04D19] text-white text-sm font-semibold tracking-wide transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
