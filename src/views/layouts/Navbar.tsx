import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BUSINESS_CONFIG } from '../../config/business';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { getGeneralEnquiryUrl } from '../../services/whatsapp.service';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Explore Coorg', to: '/places' },
  { label: 'Resorts & Stays', to: '/resorts' },
  { label: 'Jeep Safari', to: '/jeep-safari' },
  { label: 'Hidden Places', to: '/hidden-places' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'Video Reel', to: '/promo-reel' },
  { label: 'About', to: '/about' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = useScrollPosition(40);
  const location = useLocation();

  const isHeroRoute =
    location.pathname === '/' ||
    location.pathname === '/jeep-safari' ||
    location.pathname === '/hidden-places';

  const useTransparent = isHeroRoute && !isScrolled && !mobileOpen;

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        useTransparent
          ? 'bg-gradient-to-b from-[#0C140F]/80 to-transparent border-b border-transparent'
          : 'bg-[#0C140F]/95 backdrop-blur-md border-b border-[#F2F1EC]/10 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Single-line Brand Wordmark */}
        <Link
          to="/"
          className="font-display text-xl sm:text-2xl font-semibold tracking-[0.06em] text-[#F2F1EC] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D95D24] rounded-sm"
        >
          {BUSINESS_CONFIG.shortMark}
        </Link>

        {/* Zone 2: Clean Typographic Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-[#D4DBD6]"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `nav-link-underline whitespace-nowrap shrink-0 transition-colors hover:text-white ${
                  isActive ? 'text-white' : ''
                }`
              }
            >
              {({ isActive }) => (
                <span data-active={isActive ? 'true' : 'false'}>{item.label}</span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Single Primary WhatsApp CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getGeneralEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#D95D24] hover:bg-[#C04D19] text-white text-xs font-semibold tracking-wide transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            Explore Your Adventure
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="xl:hidden p-2 rounded-sm text-[#F2F1EC] hover:bg-[#F2F1EC]/10 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden bg-[#0C140F] border-t border-[#F2F1EC]/10 px-5 py-6"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `py-2.5 px-2 text-base font-medium rounded-sm transition-colors ${
                      isActive
                        ? 'text-[#E88554] bg-[#131E17]'
                        : 'text-[#D4DBD6] hover:text-white hover:bg-[#131E17]/60'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `py-2.5 px-2 text-base font-medium rounded-sm transition-colors ${
                    isActive
                      ? 'text-[#E88554] bg-[#131E17]'
                      : 'text-[#D4DBD6] hover:text-white hover:bg-[#131E17]/60'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            <div className="mt-6 pt-5 border-t border-[#F2F1EC]/10 flex flex-col gap-3">
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[#D95D24] text-white text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Explore Your Adventure
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
