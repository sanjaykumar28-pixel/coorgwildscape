import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { getContactFormWhatsAppUrl, getGeneralEnquiryUrl } from '../../services/whatsapp.service';
import {
  getInstagramUrl,
  getMailtoUrl,
  getTelUrl,
  validatePhone,
} from '../../services/contact.service';
import { getBusinessMapsUrl } from '../../services/maps.service';

const ENQUIRY_TOPICS = [
  'Mandalpatti Jeep Safari',
  'Off-Road 4x4 Expedition',
  'Resorts & Plantation Stays',
  'Full Coorg Sightseeing Itinerary',
  'Hidden Places & Waterfalls',
  'Custom Group / Family Trip',
];

export function ContactPage() {
  useDocumentTitle(
    'Contact & Plan Your Coorg Trip',
    'Reach Coorg Wildscape via WhatsApp, phone, or email to plan your jeep safaris, stays, and sightseeing in Kodagu.'
  );

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interestedIn, setInterestedIn] = useState(ENQUIRY_TOPICS[0]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    if (name.trim().length < 2) {
      setError('Please enter your full name so we know how to address you.');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Please enter a valid 10-digit phone or WhatsApp number.');
      return;
    }

    if (message.trim().length < 8) {
      setError('Please share a brief note about your travel dates, group size, or interests.');
      return;
    }

    const url = getContactFormWhatsAppUrl({
      name,
      phone,
      interestedIn,
      message,
    });

    setPreparedUrl(url);

    // Open WhatsApp seamlessly via anchor click (no window.open)
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#0C140F] text-[#F2F1EC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#E88554] mb-3">
            Direct Enquiries
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] max-w-3xl display-balance">
            Plan Your Way Through Coorg.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#D4DBD6] max-w-2xl leading-relaxed">
            No automated booking portals—message us directly on WhatsApp, call, or email to
            shape your jeep safaris, stays, and sightseeing routes with local guidance.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#161B17]/10 rounded-sm p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#161B17]">
                  Reach Us Directly
                </h2>
                <p className="mt-2 text-sm text-[#4E5850] leading-relaxed">
                  {BUSINESS_CONFIG.operatingHours}. Fastest response via WhatsApp or phone.
                </p>
              </div>

              <div className="space-y-4 text-sm border-t border-[#161B17]/10 pt-5">
                <a
                  href={getGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-sm bg-[#1F4D36] text-white hover:bg-[#D95D24] transition-colors"
                >
                  <MessageCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Chat on WhatsApp</p>
                    <p className="text-xs text-white/85 mt-0.5">
                      Instant trip & safari enquiry
                    </p>
                  </div>
                </a>

                <a
                  href={getTelUrl()}
                  className="flex items-start gap-3.5 p-3.5 rounded-sm border border-[#161B17]/12 hover:border-[#161B17]/40 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#D95D24] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#161B17]">Call Directly</p>
                    <p className="font-mono-tabular text-xs text-[#4E5850] mt-0.5">
                      {BUSINESS_CONFIG.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={getMailtoUrl('Coorg Adventure Enquiry')}
                  className="flex items-start gap-3.5 p-3.5 rounded-sm border border-[#161B17]/12 hover:border-[#161B17]/40 transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#D95D24] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#161B17]">Email</p>
                    <p className="text-xs text-[#4E5850] mt-0.5 break-all">
                      {BUSINESS_CONFIG.email}
                    </p>
                  </div>
                </a>

                <a
                  href={getInstagramUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-sm border border-[#161B17]/12 hover:border-[#161B17]/40 transition-colors"
                >
                  <Instagram
                    className="w-5 h-5 text-[#D95D24] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#161B17]">Instagram</p>
                    <p className="text-xs text-[#4E5850] mt-0.5">
                      {BUSINESS_CONFIG.instagramHandle}
                    </p>
                  </div>
                </a>

                <a
                  href={getBusinessMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-sm border border-[#161B17]/12 hover:border-[#161B17]/40 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-[#D95D24] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex-1">
                    <p className="font-semibold text-[#161B17] inline-flex items-center gap-1.5">
                      Base Location
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
                    </p>
                    <p className="text-xs text-[#4E5850] mt-0.5">
                      {BUSINESS_CONFIG.locationLabel}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Enquiry Builder Form (Client-side validation -> Prefilled WhatsApp) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#161B17]/10 rounded-sm p-6 sm:p-8">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#161B17]">
                Send an Enquiry via WhatsApp
              </h2>
              <p className="mt-2 text-sm text-[#4E5850]">
                Fill in your details below to open a prefilled WhatsApp message directly with our
                team—no account or form submission delay required.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#161B17] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Karthik Rao"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border border-[#161B17]/15 rounded-sm text-[#161B17] focus:outline-none focus:border-[#D95D24]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#161B17] mb-2"
                    >
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98450 00000"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border border-[#161B17]/15 rounded-sm text-[#161B17] focus:outline-none focus:border-[#D95D24]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-topic"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#161B17] mb-2"
                  >
                    Interested In
                  </label>
                  <select
                    id="enquiry-topic"
                    value={interestedIn}
                    onChange={(e) => setInterestedIn(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border border-[#161B17]/15 rounded-sm text-[#161B17] focus:outline-none focus:border-[#D95D24]"
                  >
                    {ENQUIRY_TOPICS.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#161B17] mb-2"
                  >
                    Trip Details / Message
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your preferred dates, number of travelers, pickup area, or places you'd like to explore…"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border border-[#161B17]/15 rounded-sm text-[#161B17] focus:outline-none focus:border-[#D95D24]"
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    className="text-sm text-[#B42318] bg-[#FEF3F2] border border-[#FECDCA] px-4 py-3 rounded-sm"
                  >
                    {error}
                  </p>
                )}

                {preparedUrl && (
                  <div
                    role="status"
                    className="p-4 bg-[#ECFDF3] border border-[#ABEFC6] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-2.5 text-sm text-[#067647]">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        Your WhatsApp enquiry message is ready. If WhatsApp didn’t open
                        automatically, click the button to launch it.
                      </span>
                    </div>
                    <a
                      href={preparedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-sm bg-[#1F4D36] text-white text-xs font-semibold whitespace-nowrap shrink-0"
                    >
                      Open WhatsApp
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#D95D24] hover:bg-[#C04D19] text-white text-xs font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Continue to WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
