import { Resort } from '../models/resort.model';
import { buildGoogleMapsSearchUrl } from '../services/maps.service';
import { COORG_MEDIA } from './media';

/**
 * SAMPLE PARTNER STAY LISTINGS
 * Replace property names, locations, and details with verified stay partners
 * before going live in production.
 */
export const RESORTS: Resort[] = [
  {
    id: 'resort-suntikoppa-heritage',
    name: 'Aralikad Estate Heritage Bungalow',
    slug: 'aralikad-estate-heritage-bungalow',
    category: 'Plantation stays',
    shortDescription:
      'Restored Kodava-style tiled-roof manor set inside 60 acres of shade-grown Arabica coffee and pepper vines.',
    description:
      'Surrounded by manicured lawns, silver oaks, and mist-draped coffee slopes near Suntikoppa, this sample heritage plantation bungalow preserves wide verandas, Mangalore-tiled eaves, and unhurried estate hospitality.',
    location: 'Suntikoppa, Kodagu',
    heroImage: COORG_MEDIA.estateBungalow,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.estateBungalow,
      COORG_MEDIA.coffeePlantation,
      COORG_MEDIA.scenicDrives,
    ],
    amenities: [
      'Guided estate coffee walks',
      'Garden veranda dining',
      'Bonfire evenings (weather permitting)',
      'Private parking',
      'Local Kodava home-style cuisine',
    ],
    propertyHighlights: [
      'Authentic red-tiled Kodava architecture with wide wrap-around sit-outs',
      'Quiet morning birdwatching right from the garden lawn',
      'Direct trailhead access for plantation walks',
    ],
    nearbyAttractions: ['Dubare Elephant Camp', 'Chiklihole Reservoir', 'Harangi Backwaters'],
    mapUrl: buildGoogleMapsSearchUrl('Suntikoppa Kodagu'),
    featured: true,
    isSampleListing: true,
  },
  {
    id: 'resort-mandalpatti-ridge',
    name: 'Pushpagiri Cloudline Retreat',
    slug: 'pushpagiri-cloudline-retreat',
    category: 'Nature retreats',
    shortDescription:
      'Timber-and-stone hillside retreat positioned near the misty approach to Mandalpatti and Abbey Falls.',
    description:
      'Designed for travelers seeking altitude and solitude, this sample mountain retreat sits along a wooded ridge north of Madikeri, offering immediate sunrise access for 4x4 ridge departures without early city traffic.',
    location: 'Galibeedu Road, Madikeri',
    heroImage: COORG_MEDIA.cloudlineRetreat,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.cloudlineRetreat,
      COORG_MEDIA.galibeedu,
      COORG_MEDIA.mandalpattiPeak,
    ],
    amenities: [
      '4x4 jeep pickup coordination',
      'Valley-facing balconies',
      'Estate filter coffee service',
      'In-house dining',
      'Trekking trail guidance',
    ],
    propertyHighlights: [
      'Minutes from the Mandalpatti 4x4 trailhead corridor',
      'Cool mountain microclimate with evening valley mist',
      'Low-density cottages spaced along natural terrain contours',
    ],
    nearbyAttractions: ['Mandalpatti', 'Abbey Falls', 'Galibeedu', 'Kotebetta'],
    mapUrl: buildGoogleMapsSearchUrl('Galibeedu Road Madikeri Kodagu'),
    featured: true,
    isSampleListing: true,
  },
  {
    id: 'resort-kakkabe-homestay',
    name: 'Shola Valley Kodava Homestay',
    slug: 'shola-valley-kodava-homestay',
    category: 'Homestays',
    shortDescription:
      'Warm family-hosted valley homestay at the foot of Tadiandamol and Kabbe Hills in South Kodagu.',
    description:
      'Tucked away in the peaceful Kakkabe valley, this sample traditional homestay pairs authentic Kodava hospitality—wood-fired pandi curry, akki rotti, and estate honey—with proximity to Coorg’s highest summits.',
    location: 'Kakkabe, South Kodagu',
    heroImage: COORG_MEDIA.kodavaHomestay,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.kodavaHomestay,
      COORG_MEDIA.kabbeHills,
    ],
    amenities: [
      'Traditional Kodava meals',
      'Stream-side estate trail',
      'Secure off-street parking',
      'Guided local sightseeing tips',
    ],
    propertyHighlights: [
      'Hosted by local estate growers with deep trail knowledge',
      'Quiet rural valley setting far from highway noise',
      'Ideal base for Tadiandamol, Nalknad Palace, and Chelavara Falls',
    ],
    nearbyAttractions: ['Tadiandamol Peak', 'Nalknad Palace', 'Chelavara Falls', 'Kabbe Hills'],
    mapUrl: buildGoogleMapsSearchUrl('Kakkabe Kodagu'),
    featured: true,
    isSampleListing: true,
  },
  {
    id: 'resort-pollibetta-luxury',
    name: 'Kaveri Mist Luxury Estate Villas',
    slug: 'kaveri-mist-luxury-estate-villas',
    category: 'Luxury resorts',
    shortDescription:
      'Private veranda villas nestled within shaded rainforest canopy and cardamom groves near Virajpet.',
    description:
      'Crafted with natural stone, reclaimed teak, and floor-to-ceiling forest views, this sample luxury sanctuary offers unhurried comfort for couples and families looking to disconnect deep within southern Kodagu.',
    location: 'Pollibetta – Virajpet, Kodagu',
    heroImage: COORG_MEDIA.luxuryEstateVillas,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.luxuryEstateVillas,
      COORG_MEDIA.coffeePlantation,
    ],
    amenities: [
      'Private plunge decks',
      'Naturalist-led forest walks',
      'Artisanal plantation coffee tasting',
      'Curated multi-course dining',
      'Concierge safari coordination',
    ],
    propertyHighlights: [
      'Secluded villa spacing inside working spice and coffee acreage',
      'Custom half-day off-road jeep itineraries arranged on request',
      'Tranquil soundscape of rainforest canopy and seasonal streams',
    ],
    nearbyAttractions: ['Dubare Elephant Camp', 'Kabbe Hills', 'Chelavara Falls'],
    mapUrl: buildGoogleMapsSearchUrl('Pollibetta Kodagu'),
    featured: true,
    isSampleListing: true,
  },
  {
    id: 'resort-madikeri-cottages',
    name: 'Silver Oak Ridge Cottages',
    slug: 'silver-oak-ridge-cottages',
    category: 'Cottages',
    shortDescription:
      'Cosy hill cottages perched between Madikeri town comforts and quiet spice plantation valleys.',
    description:
      'Ideal for small groups and road-trippers, these sample standalone cottages pair convenient town access with quiet dawn birdcalls, wide wooden decks, and easy pickup for morning off-road safaris.',
    location: 'Stuart Hill Outskirts, Madikeri',
    heroImage: COORG_MEDIA.ridgeCottages,
    imagePosition: 'center center',
    gallery: [
      COORG_MEDIA.ridgeCottages,
      COORG_MEDIA.rajasSeat,
    ],
    amenities: [
      'Standalone private cottages',
      'Sunrise hill-view deck',
      'High-speed Wi-Fi',
      'Jeep safari pickup point',
    ],
    propertyHighlights: [
      '10 minutes from Raja’s Seat and Madikeri Fort',
      'Quiet hillside perimeter away from main bazaar traffic',
      'Flexible stay configurations for families and adventure groups',
    ],
    nearbyAttractions: ["Raja's Seat", 'Madikeri Fort', 'Coorg Skywalk Glass Bridge', 'Abbey Falls'],
    mapUrl: buildGoogleMapsSearchUrl('Madikeri Kodagu'),
    featured: false,
    isSampleListing: true,
  },
];
