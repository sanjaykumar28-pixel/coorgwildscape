import { RESORTS } from '../data/resorts';
import { Resort, ResortCategory } from '../models/resort.model';
import { matchesSearch } from '../utils/helpers';

export const RESORT_CATEGORIES: ResortCategory[] = [
  'Luxury resorts',
  'Homestays',
  'Plantation stays',
  'Cottages',
  'Nature retreats',
];

export function getAllResorts(): Resort[] {
  return RESORTS;
}

export function getFeaturedResorts(): Resort[] {
  return RESORTS.filter((item) => item.featured);
}

export function getResortBySlug(slug: string): Resort | undefined {
  return RESORTS.find((item) => item.slug === slug);
}

export function filterResorts(
  searchQuery: string,
  category: ResortCategory | 'All'
): Resort[] {
  return RESORTS.filter((item) => {
    const categoryMatch = category === 'All' || item.category === category;
    const searchMatch = matchesSearch(
      [item.name, item.location, item.category, item.shortDescription, ...item.amenities],
      searchQuery
    );
    return categoryMatch && searchMatch;
  });
}

export function getRelatedResorts(currentSlug: string, limit = 3): Resort[] {
  return RESORTS.filter((item) => item.slug !== currentSlug).slice(0, limit);
}
