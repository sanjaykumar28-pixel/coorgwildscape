import { HIDDEN_PLACES } from '../data/hiddenPlaces';
import { HiddenPlace, HiddenPlaceCategory } from '../models/hiddenPlace.model';
import { matchesSearch } from '../utils/helpers';

export const HIDDEN_PLACE_CATEGORIES: HiddenPlaceCategory[] = [
  'Waterfalls',
  'Reservoirs & Lakes',
  'Hills & Ridges',
  'Heritage',
  'Countryside',
];

export function getAllHiddenPlaces(): HiddenPlace[] {
  return HIDDEN_PLACES;
}

export function filterHiddenPlaces(
  searchQuery: string,
  category: HiddenPlaceCategory | 'All'
): HiddenPlace[] {
  return HIDDEN_PLACES.filter((item) => {
    const categoryMatch = category === 'All' || item.category === category;
    const searchMatch = matchesSearch(
      [item.name, item.location, item.category, item.shortDescription],
      searchQuery
    );
    return categoryMatch && searchMatch;
  });
}
