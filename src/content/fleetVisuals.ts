export type FleetCategoryId = 'all' | 'tankers' | 'tractors' | 'trailers' | 'inspection' | 'cranes';

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
  { id: 'tractors', label: 'Prime movers' },
  { id: 'cranes', label: 'Mobile cranes' },
  { id: 'trailers', label: 'Low-bed transport' },
  { id: 'inspection', label: 'Truck lineup' },
];

// Original photos supplied by the owner; equipment examples are labelled separately.
export const FLEET_LIBRARY: FleetLibraryItem[] = [
  { id: 'water-tanker', src: '/images/equipment/original-water-tanker.webp', title: 'Mercedes-Benz water tanker', categoryId: 'tankers', categoryLabel: 'Water supply', badge: 'Original photo', specs: 'Water transport for site supply and scheduled deliveries.', highlights: ['Water delivery', 'Site supply'], aspect: 'landscape' },
  { id: 'volvo-grey', src: '/images/equipment/original-volvo-grey.webp', title: 'Volvo FH tractor unit', categoryId: 'tractors', categoryLabel: 'Prime movers', badge: 'Original photo', specs: 'Grey Volvo tractor photographed with a heavy transport trailer.', highlights: ['Tractor unit', 'Heavy transport'], aspect: 'portrait', objectPosition: 'object-[50%_45%]' },
  { id: 'volvo-white', src: '/images/equipment/original-volvo-white.webp', title: 'Volvo FH Globetrotter', categoryId: 'tractors', categoryLabel: 'Prime movers', badge: 'Original photo', specs: 'White Globetrotter tractor with a clear front and side view.', highlights: ['Globetrotter cab', 'Tractor unit'], aspect: 'portrait', objectPosition: 'object-[50%_55%]' },
  { id: 'renault-pair', src: '/images/equipment/original-renault-pair.webp', title: 'Renault tractor units', categoryId: 'inspection', categoryLabel: 'Truck lineup', badge: 'Original photo', specs: 'Blue Renault tractor units photographed together in the yard.', highlights: ['Truck lineup', 'Prime movers'], aspect: 'landscape' },
  { id: 'volvo-eev', src: '/images/equipment/original-volvo-eev.webp', title: 'Volvo heavy tractor', categoryId: 'tractors', categoryLabel: 'Prime movers', badge: 'Original photo', specs: 'White Volvo tractor shown from the front quarter.', highlights: ['Heavy tractor', 'Original equipment photo'], aspect: 'portrait', objectPosition: 'object-[50%_55%]' },
  { id: 'mobile-crane', src: '/images/equipment/mobile-crane.webp', title: 'Telescopic mobile crane', categoryId: 'cranes', categoryLabel: 'Heavy lifting', badge: 'Equipment example', specs: 'Mobile lifting equipment for construction and industrial projects. Ask dispatch to confirm the required capacity.', highlights: ['Telescopic boom', 'Construction lifting'], aspect: 'landscape' },
  { id: 'low-loader', src: '/images/equipment/low-loader.webp', title: 'Multi-axle low-bed transport', categoryId: 'trailers', categoryLabel: 'Heavy haulage', badge: 'Equipment example', specs: 'Low-bed trailer configuration for machinery and oversized project cargo.', highlights: ['Low loading deck', 'Multi-axle trailer'], aspect: 'landscape' },
  { id: 'vacuum-tanker', src: '/images/equipment/vacuum-tanker.webp', title: 'Wastewater vacuum tanker', categoryId: 'tankers', categoryLabel: 'Wastewater collection', badge: 'Equipment example', specs: 'Vacuum tanker equipment for wastewater collection and drainage services.', highlights: ['Vacuum equipment', 'Wastewater collection'], aspect: 'landscape' },
];

export const SERVICE_VISUALS: Partial<Record<string, ServiceVisual>> = {
  'sweet-water': { src: '/images/equipment/original-water-tanker.webp', alt: 'Water delivery tanker with white cab and cylindrical tank', label: 'Water delivery equipment', aspect: 'square' },
  'non-drinking-water': { src: '/images/equipment/original-water-tanker.webp', alt: 'Original photo of the Mercedes-Benz water tanker', label: 'Original water tanker photo', aspect: 'square' },
  'salt-water': { src: '/images/equipment/original-water-tanker.webp', alt: 'Mercedes-Benz tanker supplied in the original photo collection', label: 'Original water transport photo', aspect: 'square' },
  'wastewater-drainage': { src: '/images/equipment/vacuum-tanker.webp', alt: 'Yellow vacuum tanker with suction equipment and white cab', label: 'Vacuum tanker - illustrative photo', aspect: 'square' },
  'crane-rental': { src: '/images/equipment/mobile-crane.webp', alt: 'Telescopic mobile crane with deployed outriggers on a construction site', label: 'Mobile lifting equipment - illustrative photo', aspect: 'square' },
  'low-bed-trailer': { src: '/images/equipment/low-loader.webp', alt: 'Multi-axle low-loader trailer coupled to a Mercedes tractor', label: 'Low-bed transport - illustrative photo', aspect: 'square' },
  'flatbed-trailer': { src: '/images/equipment/original-volvo-grey.webp', alt: 'Original photo of a Volvo tractor attached to a transport trailer', label: 'Original tractor and trailer photo', aspect: 'square' },
};
