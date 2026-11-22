import { DESTINATIONS } from '../data/destinations';
import { Destination, DestinationCategory } from '../models/destination.model';
import { matchesSearch } from '../utils/helpers';

export const DESTINATION_CATEGORIES: DestinationCategory[] = [
  'Waterfalls',
  'Viewpoints',
  'Lakes',
  'Temples',
  'Historical places',
  'Nature',
  'Adventure',
];

export function getAllDestinations(): Destination[] {
  return DESTINATIONS;
}

export function getFeaturedDestinations(): Destination[] {
  return DESTINATIONS.filter((item) => item.featured);
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((item) => item.slug === slug);
}

export function filterDestinations(
  searchQuery: string,
  category: DestinationCategory | 'All'
): Destination[] {
  return DESTINATIONS.filter((item) => {
    const categoryMatch = category === 'All' || item.category === category;
    const searchMatch = matchesSearch(
      [item.name, item.location, item.category, item.shortDescription],
      searchQuery
    );
    return categoryMatch && searchMatch;
  });
}

export function getRelatedDestinations(currentSlug: string, limit = 3): Destination[] {
  const current = getDestinationBySlug(currentSlug);
  const candidates = DESTINATIONS.filter((item) => item.slug !== currentSlug);
  if (!current) return candidates.slice(0, limit);

  const sameCategory = candidates.filter((item) => item.category === current.category);
  const others = candidates.filter((item) => item.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}
