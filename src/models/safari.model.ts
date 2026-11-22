export type SafariCategory =
  | 'Mountain Ridge'
  | 'Off-Road Trail'
  | 'Sunrise Expedition'
  | 'Private Estate Trail';

export type SafariDifficulty = 'Moderate' | 'Rugged 4x4' | 'Scenic Easy' | 'Challenging';

export interface Safari {
  id: string;
  name: string;
  slug: string;
  category: SafariCategory;
  difficulty: SafariDifficulty;
  shortDescription: string;
  description: string;
  location: string;
  heroImage: string;
  imagePosition?: string;
  gallery: string[];
  highlights: string[];
  routeOverview: string[];
  terrain: string;
  duration?: string;
  safetyNotes: string[];
  accessNotes: string;
  mapUrl: string;
  featured: boolean;
}
