import { Link } from 'react-router-dom';
import { ExternalLink, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { getGeneralEnquiryUrl } from '../../services/whatsapp.service';
import { getInstagramUrl, getMailtoUrl, getTelUrl } from '../../services/contact.service';
import { getBusinessMapsUrl } from '../../services/maps.service';

export function Footer() {
  return (
    <footer className="bg-[#080E0A] text-[#B8C2BA] border-t border-[#F2F1EC]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="font-display text-2xl font-semibold tracking-[0.06em] text-[#F2F1EC]"
            >
              {BUSINESS_CONFIG.shortMark}
            </Link>
            <p className="mt-4 text-sm text-[#9BA69E] leading-relaxed max-w-sm">
              Curated Kodagu discovery, guided 4x4 ridge safaris, hidden mountain trails,
              and plantation stays rooted in Coorg’s natural landscape.
            </p>
            <p className="mt-4 text-xs text-[#7E8B81]">{BUSINESS_CONFIG.operatingHours}</p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F2F1EC] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/places" className="hover:text-white transition-colors">
                  Explore Coorg
                </Link>
              </li>
              <li>
                <Link to="/resorts" className="hover:text-white transition-colors">
                  Resorts & Stays
                </Link>
              </li>
              <li>
                <Link to="/jeep-safari" className="hover:text-white transition-colors">
                  Jeep Safari
                </Link>
              </li>
              <li>
                <Link to="/hidden-places" className="hover:text-white transition-colors">
                  Hidden Places
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-white transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/promo-reel" className="hover:text-white transition-colors">
                  Promo Video Reel
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations & Adventures */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F2F1EC] mb-4">
              Highlights
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/places/mandalpatti" className="hover:text-white transition-colors">
                  Mandalpatti Viewpoint
                </Link>
              </li>
              <li>
                <Link
                  to="/jeep-safari/mandalpatti-jeep-safari"
                  className="hover:text-white transition-colors"
                >
                  Mandalpatti Jeep Safari
                </Link>
              </li>
              <li>
                <Link to="/places/abbey-falls" className="hover:text-white transition-colors">
                  Abbey Falls
                </Link>
              </li>
              <li>
                <Link
                  to="/jeep-safari/kabbe-hills-expedition"
                  className="hover:text-white transition-colors"
                >
                  Kabbe Hills Expedition
                </Link>
              </li>
              <li>
                <Link to="/places/talacauvery" className="hover:text-white transition-colors">
                  Talacauvery & Bhagamandala
                </Link>
              </li>
              <li>
                <Link to="/places/dubare" className="hover:text-white transition-colors">
                  Dubare Elephant Camp
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F2F1EC] mb-4">
              Direct Enquiries
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={getTelUrl()}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E88554] shrink-0" aria-hidden="true" />
                  <span className="font-mono-tabular">{BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={getGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#E88554] shrink-0" aria-hidden="true" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </li>
              <li>
                <a
                  href={getMailtoUrl('Coorg Trip Enquiry')}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#E88554] shrink-0" aria-hidden="true" />
                  <span>{BUSINESS_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={getInstagramUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#E88554] shrink-0" aria-hidden="true" />
                  <span>{BUSINESS_CONFIG.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={getBusinessMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#E88554] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="inline-flex items-center gap-1">
                    {BUSINESS_CONFIG.locationLabel}
                    <ExternalLink className="w-3 h-3 opacity-70" aria-hidden="true" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#F2F1EC]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#7E8B81]">
          <p>
            © {BUSINESS_CONFIG.copyrightYear} {BUSINESS_CONFIG.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="hover:text-[#F2F1EC] transition-colors">
              Plan a Custom Trip
            </Link>
            <Link to="/about" className="hover:text-[#F2F1EC] transition-colors">
              Responsible Travel
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
