export type ResortCategory =
  | 'Luxury resorts'
  | 'Homestays'
  | 'Plantation stays'
  | 'Cottages'
  | 'Nature retreats';

export interface Resort {
  id: string;
  name: string;
  slug: string;
  category: ResortCategory;
  shortDescription: string;
  description: string;
  location: string;
  heroImage: string;
  imagePosition?: string;
  gallery: string[];
  amenities: string[];
  propertyHighlights: string[];
  nearbyAttractions: string[];
  mapUrl: string;
  featured: boolean;
  isSampleListing: boolean;
}
