import { HiddenPlace } from '../models/hiddenPlace.model';
import { buildGoogleMapsSearchUrl } from '../services/maps.service';
import { COORG_MEDIA } from './media';

export const HIDDEN_PLACES: HiddenPlace[] = [
  {
    id: 'hidden-chelavara',
    name: 'Chelavara Falls',
    slug: 'chelavara-falls',
    category: 'Waterfalls',
    shortDescription:
      'Tortoise-rock forest waterfall tucked down a quiet coffee estate lane near Cheyyandane.',
    description:
      'Locally called Embepare ("tortoise rock") for the curved dark boulder beneath its plunge, Chelavara Falls drops over 150 feet into a lush wooded gorge. Far quieter than Madikeri’s main cascades, the approach path winds past shaded coffee estates and mossy stones.',
    location: 'Cheyyandane, South Kodagu',
    image: COORG_MEDIA.chelavaraFalls,
    imagePosition: 'center center',
    gallery: [COORG_MEDIA.chelavaraFalls, COORG_MEDIA.waterfallExploration],
    accessInformation:
      'Accessible via paved rural roads up to the parking turnoff, followed by a short downhill walk. Warning signs prohibit entering the deep pool due to strong underwater currents.',
    travelTips: [
      'View strictly from the designated viewing edges—rocks are extremely slick.',
      'Best water volume from July through December.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Chelavara Falls Kodagu'),
  },
  {
    id: 'hidden-chiklihole',
    name: 'Chiklihole Reservoir',
    slug: 'chiklihole-reservoir',
    category: 'Reservoirs & Lakes',
    shortDescription:
      'Semicircular forest dam and tranquil backwater rimmed by bamboo groves near Nanjarayapattana.',
    description:
      'Unlike bustling tourist hubs, Chiklihole Reservoir offers stillness: curved overflow spillways, glassy dawn reflections, and gentle hills framing the water along the fringe of Attur Reserve Forest.',
    location: 'Between Kushalnagar & Siddapur, Kodagu',
    image: COORG_MEDIA.chikliholeReservoir,
    imagePosition: 'center center',
    gallery: [COORG_MEDIA.chikliholeReservoir, COORG_MEDIA.dubareElephantCamp],
    accessInformation:
      'Reached via a narrow forest-side approach road from the Kushalnagar–Siddapur stretch. No commercial stalls on-site; carry your own water and leave zero litter.',
    travelTips: [
      'Visit at sunrise or late afternoon for mirror-still water reflections.',
      'Stay off wet spillway walls during monsoon overflow.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Chiklihole Reservoir Kodagu'),
  },
  {
    id: 'hidden-honnamana-kere',
    name: 'Honnamana Kere',
    slug: 'honnamana-kere',
    category: 'Reservoirs & Lakes',
    shortDescription:
      'Kodagu’s largest natural mountain lake surrounded by cliffs, caves, and quiet coffee hills.',
    description:
      'Nestled near Sulimalthe village outside Somwarpet, Honnamana Kere carries deep local folklore and sacred significance. Framed by low hills and quiet lakeside steps, it remains one of North Kodagu’s calmest morning escapes.',
    location: 'Doddmalthe near Somwarpet, North Kodagu',
    image: COORG_MEDIA.honnamanaKere,
    imagePosition: 'center center',
    gallery: [COORG_MEDIA.honnamanaKere, COORG_MEDIA.kotebettaPeak],
    accessInformation:
      'Accessible by road via Somwarpet. Respect the sacred lakeside shrine area and avoid swimming in deep lake waters.',
    travelTips: [
      'Morning mist over the lake creates serene photographic compositions.',
      'Pair with nearby Mallalli Falls or Pushpagiri foothills.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Honnamana Kere Somwarpet Kodagu'),
  },
  {
    id: 'hidden-kabbe-hills',
    name: 'Kabbe Hills',
    slug: 'kabbe-hills',
    category: 'Hills & Ridges',
    shortDescription:
      'Unspoiled grassy ridge overlooking the Kodagu–Kerala border valleys.',
    description:
      'Rising behind quiet estates near Kakkabe, Kabbe Hills rewards early risers with sweeping green contours, low-hanging cloud wisps, and silence interrupted only by mountain wind.',
    location: 'Kakkabe – Chelavara, Kodagu',
    image: COORG_MEDIA.kabbeHills,
    imagePosition: 'center center',
    gallery: [COORG_MEDIA.kabbeHills, COORG_MEDIA.orangeJeepRidgeClose],
    accessInformation:
      'Final hill approaches narrow considerably and feature steep gradients suited to 4x4 vehicles or foot approaches; respect adjoining private estate boundaries.',
    travelTips: [
      'Ideal at sunrise or around 5:00 PM for soft golden ridge shadows.',
      'Carry drinking water and avoid straying into tall grass after dusk.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Kabbe Hills Kodagu'),
  },
  {
    id: 'hidden-galibeedu',
    name: 'Galibeedu',
    slug: 'galibeedu',
    category: 'Countryside',
    shortDescription:
      'Literally “the abode of wind”—a high misty valley road winding toward the edge of Pushpagiri.',
    description:
      'Just beyond Madikeri’s bustle, the Galibeedu valley road climbs through thick shola woods, misty hairpin turns, and old timber estates where clouds drift across the road even at midday.',
    location: 'Galibeedu, North of Madikeri',
    image: COORG_MEDIA.galibeedu,
    imagePosition: 'center center',
    gallery: [COORG_MEDIA.galibeedu, COORG_MEDIA.scenicDrives],
    accessInformation:
      'Public rural hill road open during daylight hours; narrow bends require careful driving during monsoon fog. Some adjacent estate tracks are private.',
    travelTips: [
      'Perfect scenic backroad drive after morning coffee in Madikeri.',
      'Drive slowly around blind misty corners.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Galibeedu Kodagu'),
  },
  {
    id: 'hidden-kotebetta',
    name: 'Kotebetta',
    slug: 'kotebetta',
    category: 'Hills & Ridges',
    shortDescription:
      'Kodagu’s third-highest peak crowned with a stone Shiva shrine and dramatic fort-like ridge profile.',
    description:
      'Rising near Hattihole between Madikeri and Somwarpet, Kotebetta takes its name from its resemblance to a natural mountain fortress. Towering grassy slopes meet dense forest pockets along an unforgettable ridgeline.',
    location: 'Hattihole, Kodagu',
    image: COORG_MEDIA.kotebettaPeak,
    imagePosition: 'center center',
    gallery: [COORG_MEDIA.kotebettaPeak, COORG_MEDIA.orangeJeepRidgeWide],
    accessInformation:
      'Trail access and local forest permission rules should be verified before departure at the Hattihole base; upper tracks require 4x4 clearance or guided trekking.',
    travelTips: [
      'Begin early before midday heat or afternoon mist rolls in.',
      'Follow local guide instructions near forest boundaries.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Kotebetta Peak Kodagu'),
  },
  {
    id: 'hidden-nalknad-palace',
    name: 'Nalknad Palace',
    slug: 'nalknad-palace',
    category: 'Heritage',
    shortDescription:
      '1792 two-storeyed Kodava royal hunting lodge tucked quietly beneath Tadiandamol’s forested slopes.',
    description:
      'Built by Dodda Veerarajendra in 1792 as a mountain refuge, Nalknad Palace features carved wooden pillars, painted ceilings, and wide stone courtyards framed by towering trees in Yavakapadi.',
    location: 'Yavakapadi near Kakkabe, Kodagu',
    image: COORG_MEDIA.nalknadPalace,
    imagePosition: 'center 40%',
    gallery: [COORG_MEDIA.nalknadPalace, COORG_MEDIA.tadiandamolRidge],
    accessInformation:
      'Protected monument open to visitors during daytime hours; road access runs smoothly through Kakkabe coffee country.',
    travelTips: [
      'Take time to observe the restored ceiling motifs inside the upper hall.',
      'Serves as the classic heritage start point before heading toward Tadiandamol.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Nalknad Palace Kodagu'),
  },
  {
    id: 'hidden-harangi',
    name: 'Harangi Backwaters',
    slug: 'harangi-backwaters',
    category: 'Reservoirs & Lakes',
    shortDescription:
      'Wide serene reservoir expanse bordered by rolling bamboo shores and quiet fishing hamlets.',
    description:
      'Away from the main Harangi Dam promenade, the upper backwaters stretch into peaceful coves surrounded by teak woods and farmland—an ideal late-afternoon stop for landscape photography and unhurried quiet.',
    location: 'Hudgur near Kushalnagar, Kodagu',
    image: COORG_MEDIA.harangiBackwaters,
    imagePosition: 'center center',
    gallery: [COORG_MEDIA.harangiBackwaters, COORG_MEDIA.chikliholeReservoir],
    accessInformation:
      'Accessible via public rural roads; dam-restricted perimeter zones remain fenced and off-limits.',
    travelTips: [
      'Golden hour transforms the wide water expanse into warm amber reflections.',
      'Combine with Dubare or Chiklihole on a relaxed North-East Coorg loop.',
    ],
    mapUrl: buildGoogleMapsSearchUrl('Harangi Backwaters Kodagu'),
  },
];
