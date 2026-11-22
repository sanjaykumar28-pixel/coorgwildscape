import { Safari } from '../models/safari.model';
import { buildGoogleMapsSearchUrl } from '../services/maps.service';
import { COORG_MEDIA } from './media';

export const SAFARIS: Safari[] = [
  {
    id: 'safari-mandalpatti',
    name: 'Mandalpatti Jeep Safari',
    slug: 'mandalpatti-jeep-safari',
    category: 'Mountain Ridge',
    difficulty: 'Rugged 4x4',
    shortDescription:
      'Iconic ascent up boulder-strewn ghat tracks in an open-top 4x4 to Coorg’s cloud-draped ridge.',
    description:
      'Climb beyond paved Madikeri roads aboard a purpose-built 4x4 off-road jeep toward the Mandalpatti ridge. As tarmac turns into red laterite ruts and steep rock shelves, coffee estates give way to crisp mountain air and sweeping Pushpagiri horizons.',
    location: 'Madikeri to Mandalpatti Trailhead',
    heroImage: COORG_MEDIA.orangeJeepRidgeWide,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.orangeJeepRidgeWide,
      COORG_MEDIA.orangeJeepRidgeClose,
      COORG_MEDIA.mandalpattiMist,
      COORG_MEDIA.orangeJeepTrailhead,
    ],
    highlights: [
      'Experienced local Kodagu 4x4 driver familiar with every steep hairpin',
      'Dawn mist-blanket or golden-hour sunset departure slots',
      'Photographic stops along dramatic mountain ridge overlooks',
      'Optional add-on stop at Abbey Falls on the return loop',
    ],
    routeOverview: [
      'Madikeri Pickup / Trailhead Coffee Stop',
      'Mandalpatti Forest Check-Post Entry',
      'Steep 4x4 Laterite & Rock Ascent',
      'Mandalpatti Summit Viewpoint Walk',
      'Return Descent to Madikeri',
    ],
    terrain: 'Steep red laterite tracks, exposed rock ledges, and monsoon-carved ruts (4x4 Low-Range)',
    duration: 'Approx. 2.5 – 3.5 hours round trip (varies with weather & check-post queues)',
    safetyNotes: [
      'Remain seated and hold roll-cage grab handles during steep rocky climbs.',
      'Forest department entry tickets and vehicle permits apply at the check-post.',
      'Heavy monsoon storms or dense zero-visibility fog may restrict upper ridge access.',
    ],
    accessNotes:
      'Operates along the authorized Mandalpatti jeep corridor; entry is subject to Karnataka Forest Department timings and seasonal weather.',
    mapUrl: buildGoogleMapsSearchUrl('Mandalpatti View Point Kodagu'),
    featured: true,
  },
  {
    id: 'safari-nishani-hills',
    name: 'Nishani Hills Adventure',
    slug: 'nishani-hills-adventure',
    category: 'Off-Road Trail',
    difficulty: 'Challenging',
    shortDescription:
      'High-altitude foothills approach through remote coffee tracks near the Brahmagiri range.',
    description:
      'Head south-west toward Bhagamandala’s quiet plantation foothills where rugged approach tracks wind past cardamom streams and dense canopy toward permitted ridge viewpoints near Nishani Motte.',
    location: 'Bhagamandala – Talacauvery Corridor',
    heroImage: COORG_MEDIA.offroadConvoy,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.offroadConvoy,
      COORG_MEDIA.orangeJeepRidgeClose,
      COORG_MEDIA.tadiandamolRidge,
    ],
    highlights: [
      'Authentic convoy-style mountain trail feel through deep Kodagu hills',
      'Expansive Western Ghats valley vistas far from crowded bus tours',
      'Guided local narration on Kodava estate ecology and terrain',
    ],
    routeOverview: [
      'Bhagamandala Base Junction',
      'Permitted Estate & Foothill Trail Approach',
      'Ridge Overlook & Scenic Pause',
      'Return via Scenic Brahmagiri Approach',
    ],
    terrain: 'Undulating estate mud roads, water-cut gradients, and grassy ridge shoulders',
    duration: 'Half-day expedition (route timings depend on trail conditions & forest clearance)',
    safetyNotes: [
      'Protected Brahmagiri Wildlife Sanctuary zones require prior forest permission; routes stay strictly on authorized access roads.',
      'Not recommended during peak torrential downpours due to slippery clay gradients.',
    ],
    accessNotes:
      'Access near Nishani Motte is regulated by forest authorities; our trips strictly follow permitted public and authorized estate access tracks.',
    mapUrl: buildGoogleMapsSearchUrl('Bhagamandala Kodagu'),
    featured: true,
  },
  {
    id: 'safari-kabbe-hills',
    name: 'Kabbe Hills Expedition',
    slug: 'kabbe-hills-expedition',
    category: 'Sunrise Expedition',
    difficulty: 'Moderate',
    shortDescription:
      'Winding hill-country 4x4 drive into misty South Coorg meadows bordering Kerala’s forested ridges.',
    description:
      'Explore the unhurried beauty of Kabbe Hills near Chelavara. As the 4x4 climbs past quiet estate lanes and mist-draped bends, sweeping views open over emerald grass ridges and distant Wayanad horizons.',
    location: 'Chelavara – Kabbe Hills, South Kodagu',
    heroImage: COORG_MEDIA.orangeJeepRidgeClose,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.orangeJeepRidgeClose,
      COORG_MEDIA.tadiandamolRidge,
      COORG_MEDIA.orangeJeepRidgeWide,
    ],
    highlights: [
      'Breathtaking sunrise and late-afternoon golden light across rolling hills',
      'Easy combination with Chelavara Falls and Nalknad Palace',
      'Quiet South Coorg countryside away from commercial tourist hubs',
    ],
    routeOverview: [
      'Chelavara / Kakkabe Junction',
      'Winding Estate & Hilltop Track',
      'Kabbe Ridge Meadow Overlook',
      'Optional Chelavara Waterfall Stop',
    ],
    terrain: 'Narrow hillside mud tracks, steep concrete bends, and open gravel ridge spurs',
    duration: 'Approx. 2.5 – 3 hours',
    safetyNotes: [
      'Stick to established tracks to protect fragile hillside grasslands.',
      'Carry rain gear from June through September.',
    ],
    accessNotes:
      'Approachable along village and hill tracks where private estate permissions are respected; wet-weather clearance depends on traction.',
    mapUrl: buildGoogleMapsSearchUrl('Kabbe Hills Kodagu'),
    featured: true,
  },
  {
    id: 'safari-authorized-offroad',
    name: 'Authorized Off-Road Trail Experiences',
    slug: 'authorized-off-road-experiences',
    category: 'Private Estate Trail',
    difficulty: 'Rugged 4x4',
    shortDescription:
      'Curated private-estate 4x4 trails designed for genuine mud, incline, and forest-track thrills without encroaching on protected wildlife zones.',
    description:
      'For adventure enthusiasts wanting real 4x4 articulation—articulated ruts, timber bridges, coffee-shade slopes, and stream crossings—we coordinate with verified private plantation estates to deliver responsible off-road driving experiences.',
    location: 'Madikeri & Suntikoppa Private Estate Zones',
    heroImage: COORG_MEDIA.orangeJeepTrailhead,
    imagePosition: 'center 42%',
    gallery: [
      COORG_MEDIA.orangeJeepTrailhead,
      COORG_MEDIA.offroadConvoy,
      COORG_MEDIA.orangeJeepRidgeWide,
    ],
    highlights: [
      '100% authorized private plantation trails with landowner permission',
      'Real 4x4 high-clearance Mahindra Invader / Thar / Gypsy fleet',
      'Custom pace suitable for families, photographers, or off-road enthusiasts',
      'Traditional estate coffee stop at the trailhead',
    ],
    routeOverview: [
      'Trailhead Coffee Shop Briefing',
      'Private Estate Perimeter Mud & Rock Loop',
      'Ridge Canopy Lookout Stop',
      'Return to Trailhead',
    ],
    terrain: 'Private plantation clay tracks, rocky creek beds, and steep shaded coffee slopes',
    safetyNotes: [
      'Strictly guided by trained off-road drivers; zero unauthorized forest trespass.',
      'Seatbelts and roll-bar safety briefings conducted before departure.',
    ],
    accessNotes:
      'Operated strictly inside partner private estates with prior permission; seasonal coffee harvest periods may adjust specific estate loops.',
    mapUrl: buildGoogleMapsSearchUrl('Suntikoppa Kodagu'),
    featured: true,
  },
  {
    id: 'safari-private-scenic',
    name: 'Private Scenic Jeep Trails',
    slug: 'private-scenic-jeep-trails',
    category: 'Sunrise Expedition',
    difficulty: 'Scenic Easy',
    shortDescription:
      'Bespoke open-air jeep sightseeing along Coorg’s backroads, misty bridges, and waterfall lanes.',
    description:
      'Prefer panoramic open-air Kodagu scenery without harsh rock crawling? Our scenic jeep trails follow quiet ridge backroads around Galibeedu, Madikeri, and Suntikoppa—perfect for golden-hour photography, family outings, and monsoon mist.',
    location: 'Galibeedu – Madikeri Backroads',
    heroImage: COORG_MEDIA.scenicDrives,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.scenicDrives,
      COORG_MEDIA.orangeJeepRidgeWide,
      COORG_MEDIA.galibeedu,
    ],
    highlights: [
      'Open-air 4x4 views through forested valley bends',
      'Flexible photography stops at viewpoints and roadside spice stalls',
      'Gentle ride comfort suitable for families and elders',
    ],
    routeOverview: [
      'Madikeri / Resort Pickup',
      'Galibeedu Ridge Backroad Loop',
      'Hidden Valley Viewpoint & Coffee Break',
      'Return Drop-off',
    ],
    terrain: 'Narrow rural tarmac, broken hill roads, and packed gravel overlooks',
    duration: 'Approx. 3 – 4 hours (customizable half-day)',
    safetyNotes: [
      'Soft-top canopy can be rolled down quickly if unexpected mountain showers pass through.',
      'Child-friendly pacing with unhurried rest stops.',
    ],
    accessNotes:
      'Uses public rural mountain roads and designated scenic pull-offs; fog and monsoon landslides can occasionally prompt route adjustments.',
    mapUrl: buildGoogleMapsSearchUrl('Galibeedu Kodagu'),
    featured: false,
  },
];
