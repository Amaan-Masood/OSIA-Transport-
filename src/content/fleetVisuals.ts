export type FleetCategoryId = 'all' | 'tankers' | 'tractors' | 'trailers' | 'inspection';

export interface FleetCategoryOption {
  id: FleetCategoryId;
  label: string;
}

export interface FleetLibraryItem {
  id: string;
  src: string;
  title: string;
  categoryId: Exclude<FleetCategoryId, 'all'>;
  categoryLabel: string;
  badge: string;
  specs: string;
  highlights: string[];
  aspect: 'square' | 'portrait' | 'landscape';
  objectPosition?: string;
}

export interface ServiceVisual {
  src: string;
  alt: string;
  label: string;
  aspect: 'square' | 'portrait';
}

export const FLEET_CATEGORIES: FleetCategoryOption[] = [
  { id: 'all', label: 'All equipment' },
  { id: 'tankers', label: 'Water & vacuum tankers' },
  { id: 'tractors', label: 'Mobile cranes' },
  { id: 'trailers', label: 'Low-bed transport' },
  { id: 'inspection', label: 'Water logistics' },
];

// Licensed reference photography illustrates equipment types, not OSIA-owned units.
export const FLEET_LIBRARY: FleetLibraryItem[] = [
  { id: 'water-tanker', src: '/images/fleet/mercedes-actros-water-tanker.webp', title: 'Water delivery tanker', categoryId: 'tankers', categoryLabel: 'Water supply', badge: 'Tanker equipment', specs: 'Water transport for site supply and scheduled deliveries.', highlights: ['Water delivery', 'Site supply'], aspect: 'landscape' },
  { id: 'mobile-crane', src: '/images/equipment/mobile-crane.webp', title: 'Telescopic mobile crane', categoryId: 'tractors', categoryLabel: 'Heavy lifting', badge: 'Equipment example', specs: 'Mobile lifting equipment for construction and industrial projects. Ask dispatch to confirm the required capacity.', highlights: ['Telescopic boom', 'Construction lifting'], aspect: 'landscape' },
  { id: 'low-loader', src: '/images/equipment/low-loader.webp', title: 'Multi-axle low-bed transport', categoryId: 'trailers', categoryLabel: 'Heavy haulage', badge: 'Equipment example', specs: 'Low-bed trailer configuration for machinery and oversized project cargo.', highlights: ['Low loading deck', 'Multi-axle trailer'], aspect: 'landscape' },
  { id: 'vacuum-tanker', src: '/images/equipment/vacuum-tanker.webp', title: 'Wastewater vacuum tanker', categoryId: 'tankers', categoryLabel: 'Wastewater collection', badge: 'Equipment example', specs: 'Vacuum tanker equipment for wastewater collection and drainage services.', highlights: ['Vacuum equipment', 'Wastewater collection'], aspect: 'landscape' },
  { id: 'site-water', src: '/images/equipment/site-water.webp', title: 'Non-drinking water delivery', categoryId: 'tankers', categoryLabel: 'Site & utility water', badge: 'Equipment example', specs: 'Non-drinking water transport for site and utility applications.', highlights: ['Utility water', 'Site delivery'], aspect: 'landscape', objectPosition: 'object-left' },
  { id: 'water-logistics', src: '/images/equipment/water-logistics.webp', title: 'Water supply & project logistics', categoryId: 'inspection', categoryLabel: 'Water logistics', badge: 'Equipment example', specs: 'Tanker transport supporting industrial and construction operations.', highlights: ['Water transport', 'Project logistics'], aspect: 'landscape', objectPosition: 'object-left' },
];

export const SERVICE_VISUALS: Partial<Record<string, ServiceVisual>> = {
  'sweet-water': { src: '/images/fleet/mercedes-actros-water-tanker.webp', alt: 'Water delivery tanker with white cab and cylindrical tank', label: 'Water delivery equipment', aspect: 'square' },
  'non-drinking-water': { src: '/images/equipment/site-water.webp', alt: 'Non-drinking water tanker in Abu Dhabi', label: 'Site water delivery - illustrative photo', aspect: 'square' },
  'salt-water': { src: '/images/equipment/water-logistics.webp', alt: 'Water tanker beside an industrial site in Musaffah', label: 'Water logistics - illustrative photo', aspect: 'square' },
  'wastewater-drainage': { src: '/images/equipment/vacuum-tanker.webp', alt: 'Yellow vacuum tanker with suction equipment and white cab', label: 'Vacuum tanker - illustrative photo', aspect: 'square' },
  'crane-rental': { src: '/images/equipment/mobile-crane.webp', alt: 'Telescopic mobile crane with deployed outriggers on a construction site', label: 'Mobile lifting equipment - illustrative photo', aspect: 'square' },
  'low-bed-trailer': { src: '/images/equipment/low-loader.webp', alt: 'Multi-axle low-loader trailer coupled to a Mercedes tractor', label: 'Low-bed transport - illustrative photo', aspect: 'square' },
  'flatbed-trailer': { src: '/images/equipment/low-loader.webp', alt: 'Tractor and multi-axle trailer showing heavy transport equipment', label: 'Heavy transport - illustrative photo', aspect: 'square' },
};
