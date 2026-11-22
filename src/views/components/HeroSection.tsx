import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowRight, Compass } from 'lucide-react';
import { COORG_MEDIA } from '../../data/media';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 700], [0, 120]);

  return (
    <section
      aria-label="Coorg Wildscape Hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#0C140F] flex items-end pb-16 sm:pb-24 pt-28"
    >
      {/* Background Photography with subtle scroll parallax */}
      <motion.div
        style={shouldReduceMotion ? undefined : { y: parallaxY }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={COORG_MEDIA.mandalpattiMist}
          alt="Sea of clouds rolling across misty mountain ridges in Coorg"
          loading="eager"
          decoding="sync"
          className="h-full w-full object-cover object-center scale-105"
        />
        {/* Measured contrast scrims for legible editorial typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C140F]/65 via-[#0C140F]/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C140F]/55 via-[#0C140F]/15 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
        <div className="max-w-3xl">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm font-medium tracking-[0.22em] uppercase text-[#E88554] mb-4"
          >
            THE WILD SIDE OF KODAGU
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl lg:text-[4.5rem] font-semibold text-[#F2F1EC] leading-[1.04] tracking-[-0.015em] display-balance"
          >
            Find Your Way Into The Wild.
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-base sm:text-lg text-[#D4DBD6] leading-relaxed max-w-2xl"
          >
            Discover hidden landscapes, unforgettable off-road trails, misty mountains,
            private nature escapes, and the unexplored beauty of Coorg.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/places"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#D95D24] hover:bg-[#C04D19] text-white text-sm font-semibold tracking-wide transition-colors whitespace-nowrap"
            >
              Explore Destinations
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <Link
              to="/jeep-safari"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm border border-[#F2F1EC]/35 bg-[#0C140F]/50 backdrop-blur-sm hover:border-[#F2F1EC] text-[#F2F1EC] text-sm font-medium tracking-wide transition-colors whitespace-nowrap"
            >
              <Compass className="w-4 h-4 text-[#E88554]" aria-hidden="true" />
              Discover Jeep Safaris
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[#F2F1EC]/15 flex items-center justify-between text-xs text-[#A6B0A8]">
          <span>Madikeri · Mandalpatti · Kakkabe · Suntikoppa</span>
          <a
            href="#welcome-coorg"
            className="inline-flex items-center gap-2 hover:text-[#F2F1EC] transition-colors whitespace-nowrap"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
