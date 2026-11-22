export type DestinationCategory =
  | 'Waterfalls'
  | 'Viewpoints'
  | 'Lakes'
  | 'Temples'
  | 'Historical places'
  | 'Nature'
  | 'Adventure';

export interface Destination {
  id: string;
  name: string;
  slug: string;
  category: DestinationCategory;
  shortDescription: string;
  description: string;
  location: string;
  heroImage: string;
  imagePosition?: string;
  gallery: string[];
  highlights: string[];
  bestTimeToVisit: string;
  travelTips: string[];
  mapUrl: string;
  nearbyPlaces: string[];
  featured: boolean;
}
