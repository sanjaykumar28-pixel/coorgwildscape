import { Experience } from '../models/experience.model';
import { COORG_MEDIA } from './media';

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-jeep-safaris',
    title: 'Jeep Safaris',
    slug: 'jeep-safaris',
    category: 'Off-Road & Safari',
    shortDescription:
      'Guided open-top 4x4 journeys up Mandalpatti, Kabbe Hills, and Kodagu’s iconic mountain ridges.',
    description:
      'Experience the thrill of Coorg’s high ridges in purpose-built 4x4 jeeps driven by seasoned local drivers who know every rock step, mist pocket, and safe passing bay.',
    durationGuide: '2.5 – 4 Hours',
    bestSeason: 'September – May',
    image: COORG_MEDIA.orangeJeepRidgeWide,
    highlights: [
      'Private or small-group 4x4 vehicle options',
      'Sunrise and golden-hour departure windows',
      'Flexible scenic stops along permitted corridors',
    ],
    enquiryLabel: 'Jeep Safari in Coorg',
  },
  {
    id: 'exp-off-road-adventures',
    title: 'Off-Road Adventures',
    slug: 'off-road-adventures',
    category: 'Off-Road & Safari',
    shortDescription:
      'Authentic red-mud ruts, steep inclines, and authorized private coffee-estate trails.',
    description:
      'Designed for travelers who want true low-range 4x4 grit—climbing laterite inclines and shaded plantation spurs inside verified partner estates with zero impact on protected wildlife corridors.',
    durationGuide: 'Half Day',
    bestSeason: 'July – March',
    image: COORG_MEDIA.offroadConvoy,
    highlights: [
      'Verified private plantation trails with permission',
      'Stream crossings and technical mud tracks during post-monsoon',
      'Trailhead coffee break at local Kodagu shops',
    ],
    enquiryLabel: 'Off-Road Trail Adventure',
  },
  {
    id: 'exp-waterfall-exploration',
    title: 'Waterfall Exploration',
    slug: 'waterfall-exploration',
    category: 'Waterfalls & Rivers',
    shortDescription:
      'Monsoon and post-monsoon circuits connecting Abbey Falls, Chelavara, and forest streams.',
    description:
      'Discover Kodagu’s cascading gorges when mountain streams roar through emerald forest canopies. Our routes time your arrival ahead of midday crowds with clear safety guidance at every plunge.',
    durationGuide: 'Half / Full Day',
    bestSeason: 'July – January',
    image: COORG_MEDIA.waterfallExploration,
    imagePosition: 'center center',
    highlights: [
      'Early-morning waterfall arrival timings',
      'Safe viewing decks and suspension bridges',
      'Seamless pairing with nearby heritage stops',
    ],
    enquiryLabel: 'Waterfall Exploration Circuit',
  },
  {
    id: 'exp-coffee-plantation',
    title: 'Coffee Plantation Walks',
    slug: 'coffee-plantation-walks',
    category: 'Plantation & Culture',
    shortDescription:
      'Slow guided walks beneath shade-grown Arabica, Robusta, pepper vines, and cardamom canopies.',
    description:
      'Step off the tarmac into working Kodagu estates to learn how monsoon showers, shade trees, and hand-harvested berries shape Coorg’s renowned coffee—followed by freshly brewed estate filter coffee.',
    durationGuide: '1.5 – 2 Hours',
    bestSeason: 'October – March (Harvest: Dec – Feb)',
    image: COORG_MEDIA.coffeePlantation,
    imagePosition: 'center center',
    highlights: [
      'Learn bean-to-cup processing from local growers',
      'Spot Malabar whistling thrushes and spice vines',
      'Fresh estate coffee tasting on the veranda',
    ],
    enquiryLabel: 'Coffee Plantation Walk',
  },
  {
    id: 'exp-mountain-viewpoints',
    title: 'Mountain Viewpoints',
    slug: 'mountain-viewpoints',
    category: 'Peaks & Sunrise',
    shortDescription:
      'From cloud-draped Mandalpatti and Tadiandamol ridges to cantilevered skywalk vistas.',
    description:
      'Chase Kodagu’s shifting light across high shola ridges, historic Raja’s Seat gardens, and valley skywalks where layers of Western Ghats peaks stretch endlessly toward the horizon.',
    durationGuide: '2 – 5 Hours',
    bestSeason: 'October – April',
    image: COORG_MEDIA.mountainViewpoints,
    imagePosition: 'center center',
    highlights: [
      'Curated timing for clear skies vs. cloud inversions',
      'Balanced mix of accessible viewpoints and 4x4 peaks',
      'Unrushed stops for landscape framing',
    ],
    enquiryLabel: 'Mountain Viewpoints Tour',
  },
  {
    id: 'exp-nature-photography',
    title: 'Nature Photography',
    slug: 'nature-photography',
    category: 'Peaks & Sunrise',
    shortDescription:
      'Light-timed outings built around misty valleys, silver-oak silhouettes, and dramatic jeep ridgelines.',
    description:
      'Built for photographers who care about golden hour and blue-hour mist. We plan departure windows around weather patterns, elevation fog, and uncluttered natural overlooks.',
    durationGuide: 'Sunrise / Sunset Slots',
    bestSeason: 'September – February',
    image: COORG_MEDIA.naturePhotography,
    imagePosition: 'center center',
    highlights: [
      'Pre-dawn departure support',
      'Vantage points selected for clean foregrounds and layered ridges',
      'Patient waiting windows when mist clears',
    ],
    enquiryLabel: 'Nature Photography Outing',
  },
  {
    id: 'exp-scenic-drives',
    title: 'Scenic Drives',
    slug: 'scenic-drives',
    category: 'Plantation & Culture',
    shortDescription:
      'Unhurried backroad loops through Galibeedu, Suntikoppa, Kakkabe, and riverine reserves.',
    description:
      'Some of Coorg’s finest moments happen between stops—winding beneath arched bamboo groves, pausing at roadside estate coffee huts, and watching rain clouds drift over green valleys.',
    durationGuide: 'Full Day Custom Loop',
    bestSeason: 'Year-round',
    image: COORG_MEDIA.scenicDrives,
    imagePosition: 'center center',
    highlights: [
      'Custom Madikeri, South Coorg, or North Coorg loops',
      'Authentic local lunch & estate coffee recommendations',
      'Zero rushed group-bus schedules',
    ],
    enquiryLabel: 'Custom Scenic Drive',
  },
  {
    id: 'exp-sunrise-experiences',
    title: 'Sunrise Experiences',
    slug: 'sunrise-experiences',
    category: 'Peaks & Sunrise',
    shortDescription:
      'Pre-dawn departures to witness first light break above a rolling ocean of Kodagu clouds.',
    description:
      'Leave town under starlight as our 4x4 climbs above the valley inversion layer. Watching first amber rays ignite the mist sea at Mandalpatti or Kabbe Hills is Coorg at its purest.',
    durationGuide: '5:30 AM – 9:00 AM',
    bestSeason: 'October – February',
    image: COORG_MEDIA.sunriseCoorg,
    imagePosition: 'center center',
    highlights: [
      '5:30 AM punctual resort pickup in Madikeri area',
      'Hot local coffee stop on the descent',
      'Beat daytime queues on popular ridges',
    ],
    enquiryLabel: 'Sunrise Ridge Experience',
  },
];
