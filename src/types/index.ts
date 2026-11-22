export * from '../models/destination.model';
export * from '../models/resort.model';
export * from '../models/safari.model';
export * from '../models/hiddenPlace.model';
export * from '../models/experience.model';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Mountains' | 'Jeeps' | 'Waterfalls' | 'Plantations' | 'Stays' | 'Trails';
  location: string;
  image: string;
  imagePosition?: string;
  caption: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface RouteStop {
  order: string;
  name: string;
  note: string;
  image: string;
  imagePosition?: string;
}

export interface FeaturedItinerary {
  id: string;
  title: string;
  badge: string;
  summary: string;
  routeLine: string[];
  stops: RouteStop[];
  highlights: string[];
  disclaimer: string;
}
