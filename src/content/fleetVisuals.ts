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
  { id: 'all', label: 'All Units' },
  { id: 'tankers', label: 'Water & Vacuum Tankers' },
  { id: 'tractors', label: 'Volvo FH 500 Tractors' },
  { id: 'trailers', label: 'Heavy Haulage & Chassis' },
  { id: 'inspection', label: 'Inspection & Yard' },
];

export const FLEET_LIBRARY: FleetLibraryItem[] = [
  {
    id: 'actros-3341-tanker',
    src: '/images/fleet/mercedes-actros-water-tanker.webp',
    title: 'Mercedes-Benz Actros 3341 Tanker',
    categoryId: 'tankers',
    categoryLabel: 'Water Tankers',
    badge: 'Active Abu Dhabi Unit',
    specs: 'Potable, non-drinking & site water delivery fitted with heavy-duty pumping gear',
    highlights: ['Clean tank interior', 'Side safety rails', '24/7 dispatch ready'],
    aspect: 'square',
    objectPosition: 'object-center',
  },
  {
    id: 'sweet-water-flyer',
    src: '/images/services/sweet-water-supply.webp',
    title: 'Blue-Stripe Sweet Drinking Water Tanker',
    categoryId: 'tankers',
    categoryLabel: 'Drinking Water',
    badge: 'Food-Grade Tanker',
    specs: 'Color-coded municipal-spec potable water unit for camps, villas & commercial sites',
    highlights: ['Clean potable water', '30m+ discharge hoses', 'Scheduled or urgent trips'],
    aspect: 'square',
    objectPosition: 'object-center',
  },
  {
    id: 'non-drinking-flyer',
    src: '/images/services/non-drinking-water.webp',
    title: 'Green-Stripe Non-Drinking Water Tanker',
    categoryId: 'tankers',
    categoryLabel: 'Site & Industrial Water',
    badge: 'Spray Bar Ready',
    specs: 'Dedicated construction-grade water tanker for compaction, dust control & curing',
    highlights: ['Rear spray bar', 'High-pressure pump', 'Day & night site shifts'],
    aspect: 'square',
    objectPosition: 'object-center',
  },
  {
    id: 'wastewater-flyer',
    src: '/images/services/wastewater-removal.webp',
    title: 'Orange-Stripe Wastewater Vacuum Tanker',
    categoryId: 'tankers',
    categoryLabel: 'Wastewater & Septic',
    badge: 'High-Suction Vacuum',
    specs: 'Sealed vacuum suction unit for septic evacuation, dewatering & safe disposal',
    highlights: ['Deep-draw vacuum pump', 'Leak-proof tank seal', 'Municipal compliant'],
    aspect: 'square',
    objectPosition: 'object-center',
  },
  {
    id: 'dual-water-flyer',
    src: '/images/services/water-solutions-duo.webp',
    title: 'Utility & Wastewater Dual Fleet',
    categoryId: 'tankers',
    categoryLabel: 'Integrated Water Logistics',
    badge: 'Color-Coded Fleet',
    specs: 'Coordinated non-drinking supply and wastewater collection for civil & camp sites',
    highlights: ['Dedicated segregation', 'Abu Dhabi coverage', 'Rapid turnaround'],
    aspect: 'square',
    objectPosition: 'object-center',
  },
  {
    id: 'volvo-fh500-led',
    src: '/images/fleet/volvo-fh500-white-led.webp',
    title: 'Volvo FH 500 Globetrotter Prime Mover',
    categoryId: 'tractors',
    categoryLabel: 'Heavy Tractor Units',
    badge: 'FH 500 Series',
    specs: 'High-torque white Globetrotter tractor configured for flatbed and low-bed haulage',
    highlights: ['500 HP heavy driveline', 'Sleeper cab spec', 'Highway & site rated'],
    aspect: 'portrait',
    objectPosition: 'object-[50%_75%]',
  },
  {
    id: 'volvo-fh500-profile',
    src: '/images/fleet/volvo-fh500-white-profile.webp',
    title: 'Volvo FH 500 Long-Haul Tractor',
    categoryId: 'tractors',
    categoryLabel: 'Heavy Tractor Units',
    badge: 'Inter-Emirate Ready',
    specs: 'Heavy-duty prime mover engineered for continuous UAE structural steel & pipe runs',
    highlights: ['Reinforced fifth wheel', 'Long-distance cab', 'GPS tracked dispatch'],
    aspect: 'portrait',
    objectPosition: 'object-[50%_75%]',
  },
  {
    id: 'volvo-fh500-heavy-duty',
    src: '/images/fleet/volvo-fh500-heavy-duty.webp',
    title: 'Volvo FH 500 EEV Heavy-Duty Unit',
    categoryId: 'tractors',
    categoryLabel: 'Heavy Haulage Tractors',
    badge: 'EEV Heavy Spec',
    specs: 'High-output EEV tractor head tailored for oversized low-bed plant mobilization',
    highlights: ['High GCW pulling power', 'Low-bed coupling ready', 'Certified drivers'],
    aspect: 'portrait',
    objectPosition: 'object-[50%_75%]',
  },
  {
    id: 'volvo-fh500-eev-yard',
    src: '/images/fleet/volvo-fh500-eev-yard.webp',
    title: 'Volvo FH 500 Standby Dispatch Unit',
    categoryId: 'tractors',
    categoryLabel: 'Prime Movers',
    badge: '24/7 Standby',
    specs: 'Active yard-staged FH 500 tractor supporting tanker and project freight deployment',
    highlights: ['Pre-trip inspected', 'Rapid site call-out', 'Multi-trailer compatible'],
    aspect: 'portrait',
    objectPosition: 'object-[50%_75%]',
  },
  {
    id: 'renault-tractors-fleet',
    src: '/images/fleet/renault-heavy-tractors-blue.webp',
    title: 'Highway Tractor Units Fleet',
    categoryId: 'tractors',
    categoryLabel: 'Logistics Fleet',
    badge: 'Multi-Unit Dispatch',
    specs: 'Certified UAE highway prime movers for scheduled construction material movement',
    highlights: ['Fleet scalability', 'Contract ready', 'UAE corridor compliance'],
    aspect: 'landscape',
    objectPosition: 'object-center',
  },
  {
    id: 'volvo-fh400-chassis',
    src: '/images/fleet/volvo-fh400-long-chassis.webp',
    title: 'Volvo FH 400 Rigid Long-Chassis Carrier',
    categoryId: 'trailers',
    categoryLabel: 'Heavy Chassis',
    badge: 'Extended Wheelbase',
    specs: 'Extended rigid heavy chassis platform supporting specialized industrial builds',
    highlights: ['Heavy multi-axle deck', 'Balanced load spread', 'Inspected drivetrain'],
    aspect: 'portrait',
    objectPosition: 'object-[50%_72%]',
  },
  {
    id: 'multi-axle-lowbed-chassis',
    src: '/images/fleet/heavy-multi-axle-chassis.webp',
    title: 'Multi-Axle Heavy Transport Chassis',
    categoryId: 'trailers',
    categoryLabel: 'Heavy Equipment Transport',
    badge: 'Multi-Axle Rated',
    specs: 'Reinforced multi-axle configuration for excavators, loaders & project machinery',
    highlights: ['High axle load rating', 'Heavy lashing points', 'Inter-emirate haul'],
    aspect: 'portrait',
    objectPosition: 'object-[50%_55%]',
  },
  {
    id: 'volvo-chassis-inspection',
    src: '/images/fleet/volvo-chassis-inspection.webp',
    title: 'Verified Chassis & OEM Filter Readiness',
    categoryId: 'inspection',
    categoryLabel: 'Maintenance & HSE',
    badge: 'Preventive Care',
    specs: 'Clean frame rails, torque-checked fasteners & genuine OEM filtration on inspection',
    highlights: ['Clean hydraulic lines', 'OEM filter maintenance', 'Pre-dispatch audit'],
    aspect: 'square',
    objectPosition: 'object-center',
  },
  {
    id: 'fleet-yard-overview',
    src: '/images/fleet/fleet-yard-overview.webp',
    title: 'Abu Dhabi Operations Yard & Staging',
    categoryId: 'inspection',
    categoryLabel: 'Inspection Center',
    badge: '24/7 Operations Hub',
    specs: 'Dedicated staging yard coordinating round-the-clock dispatch across Abu Dhabi',
    highlights: ['Active unit rotation', 'Safety check gateway', 'Fast mobilization'],
    aspect: 'square',
    objectPosition: 'object-center',
  },
];

export const SERVICE_VISUALS: Partial<Record<string, ServiceVisual>> = {
  'sweet-water': {
    src: '/images/services/sweet-water-tanker.webp',
    alt: 'Stainless Steel Sweet Potable Water Tanker Semi-Truck for Site & Villa Supply',
    label: 'Potable Water Tanker Unit',
    aspect: 'square',
  },
  'non-drinking-water': {
    src: '/images/services/non-drinking-tanker.webp',
    alt: 'High-Capacity Multi-Axle Non-Drinking Construction Water Tanker Unit',
    label: 'Site & Compaction Water Tanker',
    aspect: 'square',
  },
  'salt-water': {
    src: '/images/fleet/mercedes-actros-water-tanker.webp',
    alt: 'Mercedes-Benz Actros 3341 Heavy Water Tanker for Salt Water Supply',
    label: 'Mercedes Actros 3341 Tanker Unit',
    aspect: 'square',
  },
  'wastewater-drainage': {
    src: '/images/services/wastewater-tanker.webp',
    alt: 'Industrial Vacuum & Wastewater Removal Tanker with Rear Suction Valves',
    label: 'Wastewater Vacuum Tanker Unit',
    aspect: 'square',
  },
  'crane-rental': {
    src: '/images/services/mobile-crane-service.webp',
    alt: 'Heavy Hydraulic Telescopic Mobile Crane for Construction & Industrial Lifting',
    label: '25T–200T Mobile Hydraulic Crane',
    aspect: 'square',
  },
  'low-bed-trailer': {
    src: '/images/fleet/heavy-multi-axle-chassis.webp',
    alt: 'Multi-Axle Heavy Transport Chassis for Low Bed Machinery Mobilization',
    label: 'Multi-Axle Heavy Haulage Chassis',
    aspect: 'portrait',
  },
  'flatbed-trailer': {
    src: '/images/fleet/volvo-fh500-white-led.webp',
    alt: 'Volvo FH 500 Globetrotter Prime Mover for Flatbed Steel & Pipe Haulage',
    label: 'Volvo FH 500 Globetrotter Tractor',
    aspect: 'portrait',
  },
};
