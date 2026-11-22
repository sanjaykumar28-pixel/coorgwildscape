import { FeaturedItinerary } from '../types';
import { COORG_MEDIA } from './media';

export const FEATURED_ITINERARY: FeaturedItinerary = {
  id: 'route-mandalpatti-adventure',
  title: 'The Mandalpatti Adventure',
  badge: 'Curated Day Trip · Half-Day 4x4 Loop',
  summary:
    'A classic Kodagu mountain loop pairing an early 4x4 off-road climb into the clouds with forest canopy waterfalls and a relaxed return to Madikeri.',
  routeLine: ['Madikeri', 'Mandalpatti', 'Mountain Viewpoint', 'Abbey Falls', 'Madikeri'],
  stops: [
    {
      order: '01',
      name: 'Madikeri Departure & Trailhead Coffee',
      note: 'Early morning 4x4 pickup from your Madikeri stay with a quick hot estate coffee pause along the rural trailhead.',
      image: COORG_MEDIA.orangeJeepTrailhead,
      imagePosition: 'center 42%',
    },
    {
      order: '02',
      name: 'Mandalpatti 4x4 Ascent',
      note: 'Leave tarmac behind as your driver engages 4x4 low-range up rugged laterite hairpins past the forest check-post.',
      image: COORG_MEDIA.orangeJeepRidgeWide,
      imagePosition: 'center center',
    },
    {
      order: '03',
      name: 'Mountain Viewpoint Ridge',
      note: 'Step out onto cool wind-swept grasslands overlooking swirling Pushpagiri valleys and morning cloud blankets.',
      image: COORG_MEDIA.mandalpattiPeak,
      imagePosition: 'center center',
    },
    {
      order: '04',
      name: 'Abbey Falls & Return to Madikeri',
      note: 'Descend into shaded coffee estates for a refreshing walk to Abbey Falls before returning to Madikeri by late morning.',
      image: COORG_MEDIA.abbeyFalls,
      imagePosition: 'center center',
    },
  ],
  highlights: [
    'Dedicated 4x4 off-road jeep with experienced local Kodagu driver',
    'Timed to catch morning valley mist before peak midday crowds',
    'Combines high-altitude ridgelines with coffee-estate waterfalls',
    'Flexible pace for photography and scenic tea breaks',
  ],
  disclaimer:
    'Route timing, stop sequence, vehicle access, and viewpoint visibility are subject to daily weather conditions, Karnataka Forest Department regulations, and local road advisories.',
};
