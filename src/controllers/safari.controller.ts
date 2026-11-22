import { SAFARIS } from '../data/safaris';
import { Safari, SafariCategory } from '../models/safari.model';
import { matchesSearch } from '../utils/helpers';

export const SAFARI_CATEGORIES: SafariCategory[] = [
  'Mountain Ridge',
  'Off-Road Trail',
  'Sunrise Expedition',
  'Private Estate Trail',
];

export function getAllSafaris(): Safari[] {
  return SAFARIS;
}

export function getFeaturedSafaris(): Safari[] {
  return SAFARIS.filter((item) => item.featured);
}

export function getSafariBySlug(slug: string): Safari | undefined {
  return SAFARIS.find((item) => item.slug === slug);
}

export function filterSafaris(
  searchQuery: string,
  category: SafariCategory | 'All'
): Safari[] {
  return SAFARIS.filter((item) => {
    const categoryMatch = category === 'All' || item.category === category;
    const searchMatch = matchesSearch(
      [item.name, item.location, item.category, item.difficulty, item.shortDescription],
      searchQuery
    );
    return categoryMatch && searchMatch;
  });
}

export function getRelatedSafaris(currentSlug: string, limit = 3): Safari[] {
  return SAFARIS.filter((item) => item.slug !== currentSlug).slice(0, limit);
}
