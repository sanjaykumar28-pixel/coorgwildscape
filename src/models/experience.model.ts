export type ExperienceCategory =
  | 'Off-Road & Safari'
  | 'Waterfalls & Rivers'
  | 'Plantation & Culture'
  | 'Peaks & Sunrise';

export interface Experience {
  id: string;
  title: string;
  slug: string;
  category: ExperienceCategory;
  shortDescription: string;
  description: string;
  durationGuide: string;
  bestSeason: string;
  image: string;
  imagePosition?: string;
  highlights: string[];
  enquiryLabel: string;
}
