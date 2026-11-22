import { EXPERIENCES } from '../data/experiences';
import { Experience, ExperienceCategory } from '../models/experience.model';
import { matchesSearch } from '../utils/helpers';

export const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  'Off-Road & Safari',
  'Waterfalls & Rivers',
  'Plantation & Culture',
  'Peaks & Sunrise',
];

export function getAllExperiences(): Experience[] {
  return EXPERIENCES;
}

export function filterExperiences(
  searchQuery: string,
  category: ExperienceCategory | 'All'
): Experience[] {
  return EXPERIENCES.filter((item) => {
    const categoryMatch = category === 'All' || item.category === category;
    const searchMatch = matchesSearch(
      [item.title, item.category, item.shortDescription, item.bestSeason],
      searchQuery
    );
    return categoryMatch && searchMatch;
  });
}
