export type HiddenPlaceCategory =
  | 'Waterfalls'
  | 'Reservoirs & Lakes'
  | 'Hills & Ridges'
  | 'Heritage'
  | 'Countryside';

export interface HiddenPlace {
  id: string;
  name: string;
  slug: string;
  category: HiddenPlaceCategory;
  shortDescription: string;
  description: string;
  location: string;
  image: string;
  imagePosition?: string;
  gallery: string[];
  accessInformation: string;
  travelTips: string[];
  mapUrl: string;
}
