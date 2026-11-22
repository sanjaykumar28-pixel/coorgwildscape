/**
 * CENTRALIZED BUSINESS CONFIGURATION
 * ---------------------------------------------------------------------------
 * Replace all placeholder values below with verified business details
 * before deploying to production.
 */
export const BUSINESS_CONFIG = {
  brandName: 'Coorg Wildscape',
  shortMark: 'COORG WILDSCAPE',
  tagline: 'The Wild Side of Kodagu',
  // Format: country code + digits only (no +, spaces, or dashes) for wa.me links
  whatsappNumber: '919845000000', // PLACEHOLDER: Replace with active WhatsApp number
  phoneNumber: '+919845000000', // PLACEHOLDER: Replace with active phone number
  phoneDisplay: '+91 98450 00000',
  email: 'hello@coorgwildscape.example', // PLACEHOLDER: Replace with official business email
  instagram: 'https://instagram.com/coorgwildscape', // PLACEHOLDER: Replace with official Instagram URL
  instagramHandle: '@coorgwildscape',
  locationLabel: 'Madikeri, Kodagu, Karnataka 571201',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Madikeri+Kodagu+Karnataka',
  operatingHours: 'Daily · 6:00 AM – 8:30 PM IST',
  copyrightYear: new Date().getFullYear(),
} as const;
