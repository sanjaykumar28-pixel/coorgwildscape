import { BUSINESS_CONFIG } from '../config/business';

export function buildGoogleMapsSearchUrl(placeQuery: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${placeQuery}, Kodagu, Karnataka`
  )}`;
}

export function buildGoogleMapsDirectionsUrl(destination: string, origin = 'Madikeri, Kodagu'): string {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(`${destination}, Kodagu, Karnataka`)}`;
}

export function getBusinessMapsUrl(): string {
  return BUSINESS_CONFIG.mapsUrl;
}
