import { BUSINESS_CONFIG } from '../config/business';

export interface CustomEnquiryPayload {
  name: string;
  phone: string;
  interestedIn: string;
  message: string;
}

export function buildWhatsAppUrl(message: string): string {
  const cleanNumber = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

export function getGeneralEnquiryUrl(): string {
  return buildWhatsAppUrl(
    `Hello ${BUSINESS_CONFIG.brandName}, I am planning a trip to Coorg and would like to explore destinations, jeep safaris, and nature stays.`
  );
}

export function getDestinationEnquiryUrl(destinationName: string): string {
  return buildWhatsAppUrl(
    `Hello, I am interested in visiting ${destinationName} in Coorg. Could you share route guidance and sightseeing options around this location?`
  );
}

export function getResortEnquiryUrl(resortName: string, location?: string): string {
  const place = location ? ` (${location})` : '';
  return buildWhatsAppUrl(
    `Hello, I would like to enquire about ${resortName}${place} in Coorg. Please share stay details, availability enquiry guidance, and nearby experiences.`
  );
}

export function getSafariEnquiryUrl(safariName: string): string {
  return buildWhatsAppUrl(
    `Hello, I am interested in the ${safariName} in Coorg. Please share more details about this experience, trail conditions, and pickup timings.`
  );
}

export function getExperienceEnquiryUrl(experienceTitle: string): string {
  return buildWhatsAppUrl(
    `Hello, I would like to plan a ${experienceTitle} experience in Coorg. Please share details and recommended seasonal timings.`
  );
}

export function getItineraryEnquiryUrl(itineraryTitle: string): string {
  return buildWhatsAppUrl(
    `Hello, I am interested in a customized trip based on "${itineraryTitle}". Please share details on vehicle options and route timings.`
  );
}

export function getHiddenPlaceEnquiryUrl(placeName: string): string {
  return buildWhatsAppUrl(
    `Hello, I saw ${placeName} under Hidden Coorg on ${BUSINESS_CONFIG.brandName}. Could you share current access conditions and guided visit details?`
  );
}

export function getContactFormWhatsAppUrl(payload: CustomEnquiryPayload): string {
  const lines = [
    `Hello ${BUSINESS_CONFIG.brandName}, I would like to plan a Coorg experience.`,
    `Name: ${payload.name.trim()}`,
    `Phone: ${payload.phone.trim()}`,
    `Interested In: ${payload.interestedIn}`,
    `Message: ${payload.message.trim()}`,
  ];
  return buildWhatsAppUrl(lines.join('\n'));
}
