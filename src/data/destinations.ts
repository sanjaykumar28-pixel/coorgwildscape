import { Destination } from '../models/destination.model';
import { buildGoogleMapsSearchUrl } from '../services/maps.service';
import { COORG_MEDIA } from './media';

export const DESTINATIONS: Destination[] = [
  {
    id: 'dest-mandalpatti',
    name: 'Mandalpatti',
    slug: 'mandalpatti',
    category: 'Viewpoints',
    shortDescription:
      'High-altitude cloud-kissed ridge above Pushpagiri reserve, reached best by rugged 4x4 jeep trails.',
    description:
      'Perched at the edge of the Pushpagiri Wildlife Sanctuary north of Madikeri, Mandalpatti is Kodagu’s signature misty frontier. Early mornings reveal rolling green valleys submerged beneath a dense sea of white cloud before sunlight breaks over the Western Ghats.',
    location: 'North of Madikeri, Kodagu',
    heroImage: COORG_MEDIA.mandalpattiPeak,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.mandalpattiPeak,
      COORG_MEDIA.mandalpattiMist,
      COORG_MEDIA.orangeJeepRidgeWide,
      COORG_MEDIA.offroadConvoy,
    ],
    highlights: [
      'Panoramic 360° ridgeline views over Pushpagiri valleys',
      'Signature morning cloud inversion from October to February',
      'Steep boulder-strewn approach accessible exclusively by 4x4 vehicles',
      'Cool mountain winds and open shola grass slopes',
    ],
    bestTimeToVisit: 'October to March (6:00 AM – 9:30 AM for cloud cover; 4:30 PM – 6:00 PM for sunset light)',
    travelTips: [
      'Standard hatchbacks and sedans cannot clear the final rocky ascent; hire an authorized local 4x4 jeep.',
      'Carry a windproof layer—ridgeline gusts remain brisk even on sunny mornings.',
      'Forest check-post entry fees and timings apply; avoid late evening descents in heavy fog.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Mandalpatti View Point'),
    nearbyPlaces: ['Abbey Falls', 'Madikeri Fort', 'Galibeedu', 'Kotebetta'],
    featured: true,
  },
  {
    id: 'dest-rajas-seat',
    name: "Raja's Seat",
    slug: 'rajas-seat',
    category: 'Viewpoints',
    shortDescription:
      'Historic brick-mantapa garden overlooking tiered green valleys and glowing western sunsets in Madikeri.',
    description:
      'Once the favored evening retreat of Kodagu’s kings, Raja’s Seat commands an uninterrupted sweep across terraced paddy fields, distant blue ridges, and winding ghat roads toward Dakshina Kannada. Mist rises through the valley floor just after dawn and before dusk.',
    location: 'Madikeri Town, Kodagu',
    heroImage: COORG_MEDIA.rajasSeat,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.rajasSeat,
      COORG_MEDIA.mountainViewpoints,
      COORG_MEDIA.sunriseCoorg,
    ],
    highlights: [
      'Sweeping western valley views from an elevated landscaped garden',
      'Sunrise mist blankets and golden-hour dusk vistas',
      'Adjacent heritage toy train loop and seasonal flower beds',
    ],
    bestTimeToVisit: 'September to May (6:00 AM – 7:30 AM or 5:15 PM – 6:30 PM)',
    travelTips: [
      'Arrive 30 minutes before sunset on weekends for uncluttered viewing space.',
      'Combine morning mist viewing here with an early departure toward Abbey Falls.',
    ],
    mapUrl: buildGoogleMapsSearchUrl("Raja's Seat Madikeri"),
    nearbyPlaces: ['Madikeri Fort', 'Omkareshwara Temple', 'Abbey Falls'],
    featured: true,
  },
  {
    id: 'dest-abbey-falls',
    name: 'Abbey Falls',
    slug: 'abbey-falls',
    category: 'Waterfalls',
    shortDescription:
      'Roaring cascade tucked inside private coffee and spice estates just outside Madikeri.',
    description:
      'Fed by mountain streams joining the Kaveri river system, Abbey Falls drops dramatically over dark basalt rock faces framed by dense silver oak, cardamom, and Arabica coffee estates. A suspended footbridge faces the falls for close mist-filled views.',
    location: 'Abbey Falls Road, near Madikeri',
    heroImage: COORG_MEDIA.abbeyFalls,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.abbeyFalls,
      COORG_MEDIA.waterfallExploration,
      COORG_MEDIA.coffeePlantation,
    ],
    highlights: [
      '70-foot wide cascade framed by monsoon-fed forest canopy',
      'Suspension bridge viewing deck directly opposite the waterfall',
      'Shaded walkway lined with pepper vines and coffee bushes',
    ],
    bestTimeToVisit: 'July to January (Peak flow during monsoon and post-monsoon)',
    travelTips: [
      'Bathing or stepping into the pool below the falls is strictly prohibited for safety.',
      'Wear shoes with reliable grip during monsoon months when stone steps are damp.',
      'Visit before 10:00 AM to enjoy quieter estate trails.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Abbey Falls Madikeri'),
    nearbyPlaces: ['Mandalpatti', "Raja's Seat", 'Madikeri Fort'],
    featured: true,
  },
  {
    id: 'dest-talacauvery',
    name: 'Talacauvery',
    slug: 'talacauvery',
    category: 'Temples',
    shortDescription:
      'Sacred origin of the River Kaveri high on the slopes of Brahmagiri Hill.',
    description:
      'Set amidst swirling cloud banks on the Brahmagiri range, Talacauvery marks the spiritual source of South India’s revered River Kaveri. Beyond the sacred kundike spring and stone shrine, steep steps lead toward the Brahmagiri summit overlooking Kerala’s forested foothills.',
    location: 'Bhagamandala – Brahmagiri Range, Kodagu',
    heroImage: COORG_MEDIA.talacauvery,
    imagePosition: 'center 35%',
    gallery: [
      COORG_MEDIA.talacauvery,
      COORG_MEDIA.bhagamandalaTemple,
      COORG_MEDIA.coorgCloudRidges,
    ],
    highlights: [
      'Sacred spring tank marking the traditional origin of River Kaveri',
      'Elevated hilltop viewpoint overlooking rolling Brahmagiri ridges',
      'Peaceful mountain shrine atmosphere with cool alpine breeze',
    ],
    bestTimeToVisit: 'October to March (Tula Sankramana in mid-October draws pilgrims)',
    travelTips: [
      'Dress modestly in accordance with temple customs.',
      'Check local forest department rules before attempting any trail beyond the main steps.',
      'Pair your drive with Bhagamandala Triveni Sangam at the base of the hill.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Talacauvery Temple Kodagu'),
    nearbyPlaces: ['Bhagamandala', 'Nalknad Palace', 'Chelavara Falls'],
    featured: true,
  },
  {
    id: 'dest-dubare',
    name: 'Dubare Elephant Camp',
    slug: 'dubare',
    category: 'Nature',
    shortDescription:
      'Riverine forest camp along the Kaveri offering close observation of trained forest elephants.',
    description:
      'Situated along the gentle bends of the River Kaveri near Kushalnagar, Dubare is a working forest camp supported by the Karnataka Forest Department and naturalists. Morning hours bring visitors across the river to observe elephant care routines and tranquil bamboo groves.',
    location: 'Kushalnagar – Siddapur Road, Kodagu',
    heroImage: COORG_MEDIA.dubareElephantCamp,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.dubareElephantCamp,
      COORG_MEDIA.chikliholeReservoir,
      COORG_MEDIA.harangiBackwaters,
    ],
    highlights: [
      'Morning river crossing across the Kaveri (seasonal boat or shallow walk)',
      'Educational interaction led by camp naturalists and mahouts',
      'Surrounding teak and bamboo riverine reserve habitat',
    ],
    bestTimeToVisit: 'September to March (Arrive at 8:30 AM for morning camp session)',
    travelTips: [
      'Forest camp activities operate in regulated morning and afternoon slots.',
      'During peak monsoon surges, boat crossings may pause depending on Kaveri water levels.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Dubare Elephant Camp Kodagu'),
    nearbyPlaces: ['Chiklihole Reservoir', 'Harangi Backwaters', 'Suntikoppa'],
    featured: true,
  },
  {
    id: 'dest-bhagamandala',
    name: 'Bhagamandala',
    slug: 'bhagamandala',
    category: 'Temples',
    shortDescription:
      'Triveni Sangam river confluence and Kerala-style gabled temple at the foothills of Brahmagiri.',
    description:
      'At Bhagamandala, the Kaveri meets the Kannike and the legendary subterranean Sujyoti stream at the serene Triveni Sangam. Its ancient Sri Bhagandeshwara Temple features copper-tiled sloping roofs and carved timber corridors typical of coastal-Kodagu heritage architecture.',
    location: 'Bhagamandala, Kodagu',
    heroImage: COORG_MEDIA.bhagamandalaTemple,
    imagePosition: 'center 40%',
    gallery: [
      COORG_MEDIA.bhagamandalaTemple,
      COORG_MEDIA.talacauvery,
    ],
    highlights: [
      'Sacred Triveni Sangam confluence with quiet riverside steps',
      'Distinctive multi-roofed copper and timber temple architecture',
      'Gateway stop on the scenic winding climb to Talacauvery',
    ],
    bestTimeToVisit: 'October to April (Early morning for quiet prayer and river mist)',
    travelTips: [
      'Photography inside the inner temple sanctum is restricted.',
      'Local honey stalls along the town road are well known for forest multiflora honey.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Bhagamandala Triveni Sangam Kodagu'),
    nearbyPlaces: ['Talacauvery', 'Chelavara Falls', 'Nalknad Palace'],
    featured: true,
  },
  {
    id: 'dest-madikeri-fort',
    name: 'Madikeri Fort',
    slug: 'madikeri-fort',
    category: 'Historical places',
    shortDescription:
      '17th-century hilltop citadel rebuilt in granite by Tipu Sultan and preserved with Kodava royal heritage.',
    description:
      'Rising at the heart of Madikeri town, Madikeri Fort tells Kodagu’s layered history—from Muddu Raja’s original mud ramparts in 1681 to Tipu Sultan’s granite bastions and the later British-era clocktower and museum wing. Stone ramparts offer elevated vistas over town rooftops.',
    location: 'Fort Road, Madikeri',
    heroImage: COORG_MEDIA.madikeriFort,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.madikeriFort,
      COORG_MEDIA.omkareshwaraTemple,
    ],
    highlights: [
      'Granite battlements, stone elephant sculptures, and inner courtyard palace',
      'On-site historical museum showcasing Kodava arms and artifacts',
      'Elevated walkway overlooking Madikeri’s wooded hills',
    ],
    bestTimeToVisit: 'Year-round (9:00 AM – 5:00 PM; closed Mondays for the museum)',
    travelTips: [
      'Allow 45–60 minutes to walk the ramparts and museum.',
      'Easy to pair with nearby Omkareshwara Temple and Raja’s Seat.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Madikeri Fort Kodagu'),
    nearbyPlaces: ["Raja's Seat", 'Omkareshwara Temple', 'Abbey Falls'],
    featured: true,
  },
  {
    id: 'dest-omkareshwara',
    name: 'Omkareshwara Temple',
    slug: 'omkareshwara-temple',
    category: 'Temples',
    shortDescription:
      '1820 Shiva temple blending Kodava heritage with Indo-Islamic domes and a serene central water tank.',
    description:
      'Commissioned in 1820 by Lingarajendra Wodeyar II, Omkareshwara Temple stands apart in South India for its graceful fusion of Kashi-inspired minarets, central dome, copper roof, and tranquil stone-stepped temple pond teeming with fish.',
    location: 'Madikeri Town, Kodagu',
    heroImage: COORG_MEDIA.omkareshwaraTemple,
    imagePosition: 'center 45%',
    gallery: [
      COORG_MEDIA.omkareshwaraTemple,
      COORG_MEDIA.madikeriFort,
    ],
    highlights: [
      'Rare architectural synthesis of Gothic, Kodava, and Islamic domes',
      'Calm courtyard pond with copper-roofed mandapa pavilion',
      'Historical inscriptions flanking the entrance',
    ],
    bestTimeToVisit: 'Year-round (Morning 6:30 AM – 12:00 PM; Evening 5:00 PM – 8:00 PM)',
    travelTips: [
      'Maintain quiet decorum inside the temple courtyard.',
      'Footwear must be left outside the main gate.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Omkareshwara Temple Madikeri'),
    nearbyPlaces: ['Madikeri Fort', "Raja's Seat", 'Abbey Falls'],
    featured: true,
  },
  {
    id: 'dest-glass-bridge',
    name: 'Coorg Skywalk Glass Bridge',
    slug: 'coorg-glass-bridge',
    category: 'Adventure',
    shortDescription:
      'Cantilevered glass-deck skywalk suspended above lush coffee-draped valleys near Madikeri.',
    description:
      'Extending straight out over an emerald hillside canopy, the glass-deck skywalk delivers an exhilarating open-air perspective of Kodagu’s misty valleys below your boots. Clear mornings reveal layered ridge lines stretching toward the southern ghats.',
    location: 'Near Madikeri, Kodagu',
    heroImage: COORG_MEDIA.glassBridge,
    imagePosition: 'center 45%',
    gallery: [
      COORG_MEDIA.glassBridge,
      COORG_MEDIA.mountainViewpoints,
    ],
    highlights: [
      'Transparent tempered-glass deck cantilevered over forest canopy',
      'Unobstructed 180° ridge horizon views',
      'Clean photographic angles across the valley',
    ],
    bestTimeToVisit: 'October to May (Early morning or late afternoon light)',
    travelTips: [
      'Footwear covers are usually provided on-site to protect the glass surface.',
      'Check local weather during heavy monsoon rain when visibility drops.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Glass Bridge Madikeri Coorg'),
    nearbyPlaces: ["Raja's Seat", 'Madikeri Fort', 'Abbey Falls'],
    featured: false,
  },
  {
    id: 'dest-tadiandamol',
    name: 'Tadiandamol Peak',
    slug: 'tadiandamol-peak',
    category: 'Adventure',
    shortDescription:
      'Highest summit in Kodagu, rising through shola forests and sweeping green grasslands.',
    description:
      'At 1,748 meters, Tadiandamol crowns the Kodagu skyline near Kakkabe. Its trail climbs steadily past Nalknad Palace through shaded evergreen shola pockets before opening onto vast, wind-swept alpine meadows.',
    location: 'Kakkabe, South Kodagu',
    heroImage: COORG_MEDIA.tadiandamolRidge,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.tadiandamolRidge,
      COORG_MEDIA.nalknadPalace,
      COORG_MEDIA.kabbeHills,
    ],
    highlights: [
      'Highest elevation point in Kodagu district',
      'Rolling emerald grasslands and high-altitude shola forest',
      'Trailhead near historic Nalknad Palace',
    ],
    bestTimeToVisit: 'October to February (Start before 7:30 AM)',
    travelTips: [
      'Forest department registration/entry fee is required at the checkpoint; verify current open status prior to travel.',
      'Carry at least 2 liters of water and steady trekking shoes.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Tadiandamol Peak Kakkabe Kodagu'),
    nearbyPlaces: ['Nalknad Palace', 'Chelavara Falls', 'Kabbe Hills'],
    featured: false,
  },
];
