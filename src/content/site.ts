export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'water' | 'heavy-lifting' | 'haulage';
  accent: 'water' | 'cta'; // water = blue, cta = orange
  capacitySnippet: string;
  specBadges: string[];
  summary: string;
  fullDescription: string;
  applications: string[];
  features: string[];
  specTable: { key: string; value: string }[];
  confirmed: boolean;
}

export interface AreaItem {
  slug: string;
  name: string;
  description: string;
  confirmed: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  serviceId?: string;
}

export const SITE_CONFIG = {
  legalName: 'OSIA Transport LLC SPC',
  shortName: 'OSIA Transport',
  tagline: 'Reliable Service. Safe Operations. Trusted Partnership.',
  heroHeadline: 'Heavy Transport, Water Supply & Mobile Crane Rental in Abu Dhabi',
  heroSubheadline: '24/7 dedicated dispatch for construction sites, infrastructure projects, labor camps, and industrial facilities across Abu Dhabi and the UAE.',
  
  phoneDisplay: '+971 50 412 7930',
  phoneHref: 'tel:+971504127930',
  whatsappRaw: '971504127930',
  email: 'osiatransportllc@gmail.com',
  location: 'Abu Dhabi, United Arab Emirates',
  hours: '24/7 Customer Support & Emergency Dispatch',
  
  // Confirmed business facts
  confirmedStats: [
    { label: 'Crane Capacity', value: '25 – 200T', sublabel: 'Certified Operators' },
    { label: 'Support & Dispatch', value: '24/7', sublabel: 'Round-the-clock' },
    { label: 'Specialized Fleet', value: '7 Services', sublabel: 'Water, Haulage & Cranes' },
    { label: 'Operations Base', value: 'Abu Dhabi', sublabel: 'Serving all UAE' },
  ],

  // Mission, Vision, Values from client's About.txt
  about: {
    mission: [
      'Deliver reliable and timely transport services.',
      'Maintain the highest standards of safety and environmental responsibility.',
      'Provide quality equipment with experienced operators.',
      'Build long-term relationships through trust, professionalism, and excellent customer service.',
      'Continuously improve our services to exceed client expectations.',
    ],
    vision: 'To become one of the most trusted transport and heavy equipment service providers in the UAE by delivering innovative, safe, and customer-focused solutions.',
    values: [
      { title: 'Safety First', desc: 'Rigorous inspection and certified operators on every job.' },
      { title: 'Reliability', desc: 'On-schedule delivery and 24/7 standby dispatch.' },
      { title: 'Integrity', desc: 'Transparent communication and honest commitments.' },
      { title: 'Professionalism', desc: 'Experienced crews equipped for complex industrial sites.' },
      { title: 'Customer Satisfaction', desc: 'Tailored logistics to match project timelines.' },
      { title: 'Operational Excellence', desc: 'Modern fleet maintained to UAE standards.' },
    ],
    sectors: [
      'Construction & Civil Engineering',
      'Infrastructure & Roads',
      'Oil & Gas Sites',
      'Industrial Facilities & Factories',
      'Commercial Properties & Labor Camps',
      'Government & Municipal Support',
    ],
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'sweet-water',
    slug: 'sweet-water-supply-abu-dhabi',
    title: 'Sweet Water Supply (Drinking / Potable)',
    shortTitle: 'Sweet Water Supply',
    category: 'water',
    accent: 'water',
    capacitySnippet: 'Potable Water Tankers',
    specBadges: ['Potable Water', 'Dedicated Food-Grade Tankers', '24/7 Emergency Dispatch'],
    summary: 'High-purity drinking sweet water delivered on-time to construction sites, labor camps, residential villas, and commercial facilities.',
    fullDescription: 'OSIA Transport provides prompt, hygienic sweet water supply across Abu Dhabi. Our fleet of dedicated clean-water tankers delivers certified potable water for labor camps, remote work sites, construction workforce hydration, and commercial requirements with flexible one-off or scheduled recurring delivery contracts.',
    applications: [
      'Labor camps and temporary accommodation facilities',
      'Construction sites and workforce drinking water',
      'Commercial complexes, hotels, and event locations',
      'Emergency backup potable water supply',
    ],
    features: [
      'Dedicated food-grade clean potable water tanks',
      'Fast dispatch throughout Abu Dhabi zones',
      'Scheduled recurring deliveries or 24/7 emergency calls',
      'Strict hygiene and sanitation maintenance',
    ],
    specTable: [
      { key: 'Water Type', value: 'Potable / Drinking Sweet Water' },
      { key: 'Service Areas', value: 'Abu Dhabi, Musaffah, Khalifa City, Western Region' },
      { key: 'Availability', value: '24/7 Dispatch' },
      { key: 'Hose Length Support', value: 'Standard 30m+ heavy discharge hoses' },
    ],
    confirmed: true,
  },
  {
    id: 'non-drinking-water',
    slug: 'non-drinking-water-supply-abu-dhabi',
    title: 'Non-Drinking Water Supply (Industrial & Site)',
    shortTitle: 'Non-Drinking Water',
    category: 'water',
    accent: 'water',
    capacitySnippet: 'Construction Site Water',
    specBadges: ['Dust Suppression', 'Compaction Water', 'Heavy Site Tanks'],
    summary: 'Dependable non-potable water tanker services for soil compaction, dust control, concrete curing, and industrial site washing.',
    fullDescription: 'Essential water supply for heavy civil engineering, road works, and earth moving. OSIA Transport delivers non-drinking water directly to active construction sites for dust suppression, earthwork compaction, concrete curing, and machinery pressure washing with high-volume spray bar tankers.',
    applications: [
      'Soil compaction and sub-base road preparation',
      'Construction dust suppression and site wetting',
      'Concrete curing and batching support',
      'Industrial plant cleaning and equipment washing',
    ],
    features: [
      'High-capacity Mercedes Actros tankers fitted with discharge pumps',
      'Rear spray bar systems for road wetting & dust control',
      'Fast turnaround for high-volume civil earthworks',
      'Day and night shift availability',
    ],
    specTable: [
      { key: 'Water Type', value: 'Non-Potable / Construction Grade Water' },
      { key: 'Discharge Equipment', value: 'Gravity bar & High-pressure pump' },
      { key: 'Primary Sectors', value: 'Civil Infrastructure, Earthworks, Road Construction' },
      { key: 'Dispatch', value: 'Immediate 24/7 standby' },
    ],
    confirmed: true,
  },
  {
    id: 'salt-water',
    slug: 'salt-water-supply-abu-dhabi',
    title: 'Salt Water Supply (Compaction & Industrial)',
    shortTitle: 'Salt Water Supply',
    category: 'water',
    accent: 'water',
    capacitySnippet: 'Industrial Marine Water',
    specBadges: ['Subgrade Compaction', 'Dust Control', 'Corrosion-Resistant Valves'],
    summary: 'Bulk salt water transportation for specialized geotechnical soil stabilization, dust suppression on haul roads, and industrial needs.',
    fullDescription: 'Engineered for infrastructure and marine-adjacent projects. Salt water is highly effective for heavy compaction of specific subgrade soils and dust suppression on temporary haul roads where fresh water conservation is prioritized.',
    applications: [
      'Subgrade stabilization and compaction in desert terrains',
      'Dust abatement on unpaved site haul roads',
      'Industrial cooling and wash-down processes',
      'Geotechnical testing and ballast testing',
    ],
    features: [
      'Heavy-duty corrosion-resistant tanker fittings',
      'Cost-effective solution for large-scale earthmoving projects',
      'Rapid bulk water deliveries to remote site zones',
    ],
    specTable: [
      { key: 'Grade', value: 'Unfiltered Salt Water / Marine Sourced' },
      { key: 'Best For', value: 'Soil compaction, haul roads, dust control' },
      { key: 'Coverage', value: 'All Abu Dhabi mainland and island developments' },
    ],
    confirmed: true,
  },
  {
    id: 'wastewater-drainage',
    slug: 'wastewater-collection-abu-dhabi',
    title: 'Wastewater Collection & Septic Tank Drainage',
    shortTitle: 'Wastewater & Septic Drainage',
    category: 'water',
    accent: 'water',
    capacitySnippet: 'Vacuum Tanker Service',
    specBadges: ['Vacuum Suction Tankers', 'Septic Tank Cleaning', 'Safe Transportation'],
    summary: 'Professional vacuum tanker services for septic tank evacuation, sewage removal, flooded excavation dewatering, and safe disposal.',
    fullDescription: 'OSIA Transport provides hygienic, safe wastewater removal across Abu Dhabi. Utilizing high-suction vacuum tankers, we clean septic tanks, dewater flooded excavations, and collect sewage from labor camps and commercial sites for transport to designated municipal wastewater treatment plants.',
    applications: [
      'Labor camp septic tank cleaning and scheduled pump-outs',
      'Construction site temporary toilet suction and disposal',
      'Dewatering flooded site pits, manholes, and trenches',
      'Industrial wastewater transport and containment',
    ],
    features: [
      'High-power vacuum suction blowers capable of deep draws',
      'Sealed leak-proof heavy duty vacuum tankers',
      'Rapid emergency call-outs for overflowing tanks',
      'Scheduled maintenance service contracts',
    ],
    specTable: [
      { key: 'Equipment', value: 'Industrial Vacuum Suction Tanker' },
      { key: 'Suction Capacity', value: 'High-lift vacuum system with long-reach hoses' },
      { key: 'Disposal Policy', value: 'Strict compliance with environmental standards' },
      { key: 'Hours', value: '24/7 Emergency response' },
    ],
    confirmed: true,
  },
  {
    id: 'crane-rental',
    slug: 'mobile-crane-rental-abu-dhabi',
    title: 'Mobile Crane Rental (25T, 50T, 100T & 200T)',
    shortTitle: 'Mobile Crane Rental',
    category: 'heavy-lifting',
    accent: 'cta',
    capacitySnippet: '25 Ton – 200 Ton Tonnage',
    specBadges: ['25T, 50T, 100T, 200T', 'Certified Crane Operators', 'Third-Party Inspected'],
    summary: 'All-terrain and rough-terrain mobile crane rentals with certified, safety-focused operators for heavy machinery and structural erection.',
    fullDescription: 'Precision heavy lifting solutions for Abu Dhabi industrial, oil & gas, and construction projects. OSIA Transport maintains an inspected fleet of all-terrain mobile cranes from 25 Ton to 200 Ton capacity, operated by experienced, certified crane operators with complete third-party safety credentials.',
    applications: [
      'Precast concrete beams and panel erection',
      'HVAC, generator, and heavy plant installation on rooftops',
      'Steel structural fabrication assembly',
      'Loading and offloading oversized industrial machinery',
    ],
    features: [
      'Crane capacities: 25 Ton, 50 Ton, 100 Ton, and 200 Ton',
      'Certified, experienced crane operators and riggers',
      'Complete safety documentation and load-chart inspection reports',
      'Daily, weekly, or long-term project rental terms',
    ],
    specTable: [
      { key: 'Available Capacities', value: '25 Ton, 50 Ton, 100 Ton, 200 Ton' },
      { key: 'Operators', value: 'Certified with UAE valid credentials' },
      { key: 'Safety Testing', value: 'Third-party certified & inspected' },
      { key: 'Rental Terms', value: 'Hourly, Daily, Monthly & Long-term' },
    ],
    confirmed: true,
  },
  {
    id: 'low-bed-trailer',
    slug: 'low-bed-trailer-abu-dhabi',
    title: 'Low Bed Trailer Heavy Equipment Transport',
    shortTitle: 'Low Bed Trailer Services',
    category: 'haulage',
    accent: 'cta',
    capacitySnippet: 'Heavy Machinery Haulage',
    specBadges: ['Excavators & Bulldozers', 'Oversized Cargo', 'Heavy-Duty Ramps'],
    summary: 'Heavy-duty low bed trailer transport for earthmoving equipment, excavators, piling rigs, and oversized industrial project cargo.',
    fullDescription: 'Engineered for high-tonnage and high-clearance cargo. Our multi-axle low bed trailers, powered by Volvo FH heavy tractor units, provide low deck heights and high load-bearing strength to transport heavy machinery safely across Abu Dhabi and all UAE Emirates.',
    applications: [
      'Tracked excavators, bulldozers, and wheel loaders',
      'Piling rigs, cranes, and heavy drilling equipment',
      'Industrial pressure vessels and transformers',
      'Inter-emirate heavy machinery relocations',
    ],
    features: [
      'Heavy-duty hydraulic loading ramps for tracked machinery',
      'Reinforced multi-axle trailers with heavy tie-down points',
      'Route clearance and heavy transport safety escort experience',
      'Professional heavy-haul drivers with clean safety records',
    ],
    specTable: [
      { key: 'Trailer Type', value: 'Multi-axle Heavy Low Bed Semi-Trailer' },
      { key: 'Tractor Heads', value: 'Volvo FH 500 Globetrotter & Heavy Duty Units' },
      { key: 'Cargo Types', value: 'Oversized machinery, construction equipment' },
      { key: 'Coverage', value: 'Abu Dhabi, Dubai, Sharjah, all UAE Emirates' },
    ],
    confirmed: true,
  },
  {
    id: 'flatbed-trailer',
    slug: 'flatbed-trailer-abu-dhabi',
    title: 'Flatbed Trailer Haulage & Transportation',
    shortTitle: 'Flatbed Trailer Services',
    category: 'haulage',
    accent: 'cta',
    capacitySnippet: '40ft & 50ft Flatbeds',
    specBadges: ['Steel Plates & Beams', 'Container Haulage', 'Building Materials'],
    summary: 'Standard and extended flatbed trailer transportation for structural steel, pipes, precast concrete, timber, and containerized cargo.',
    fullDescription: 'The backbone of construction site logistics. OSIA Transport flatbed trailers provide versatile transport for fabricated steel, reinforcing bar (rebar), precast concrete elements, pallets, pipes, and containerized freight with prompt point-to-point dispatch across the UAE.',
    applications: [
      'Structural steel beams, coils, and heavy steel plates',
      'Pipes, ductile iron, and conduit transport',
      'Precast wall panels and concrete blocks',
      'Dry building materials, timber, and scaffolding',
    ],
    features: [
      'Equipped with heavy-duty side pins, twist locks, and ratchet straps',
      'Smooth transit with full chain and lashing security protocols',
      'Fast loading and offloading turnaround',
      'Single trip or dedicated fleet lease agreements',
    ],
    specTable: [
      { key: 'Trailer Configuration', value: 'Tri-axle Heavy Flatbed Semi-Trailer' },
      { key: 'Deck Type', value: 'High-strength steel & timber deck' },
      { key: 'Security Fittings', value: 'Heavy ratchet straps, load chains, side stanchions' },
      { key: 'Availability', value: 'Same-day booking & scheduled runs' },
    ],
    confirmed: true,
  },
];

export const AREAS: AreaItem[] = [
  {
    slug: 'musaffah',
    name: 'Musaffah Industrial Area',
    description: 'Direct priority dispatch for water tankers, mobile cranes, and flatbeds throughout Musaffah Industrial and ICAD zones.',
    confirmed: true,
  },
  {
    slug: 'khalifa-city',
    name: 'Khalifa City & Shakhbout',
    description: 'Rapid potable sweet water delivery, septic tank drainage, and local transport support across Khalifa City.',
    confirmed: true,
  },
  {
    slug: 'mohammed-bin-zayed-city',
    name: 'Mohammed Bin Zayed City (MBZ)',
    description: 'Dedicated 24/7 service for commercial developments, villa communities, and construction work in MBZ City.',
    confirmed: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'How quickly can OSIA Transport dispatch a water tanker or crane in Abu Dhabi?',
    answer: 'We provide 24/7 customer support and priority dispatch. For urgent requests in primary areas such as Musaffah, Khalifa City, and MBZ, dispatch can often be coordinated within 1–2 hours depending on current fleet availability.',
  },
  {
    question: 'What tonnages of mobile cranes are available for rental?',
    answer: 'We provide mobile cranes in 25 Ton, 50 Ton, 100 Ton, and 200 Ton capacities. All our cranes come with third-party inspection certifications and fully licensed, experienced crane operators.',
  },
  {
    question: 'Do you provide drinking (potable) sweet water as well as construction water?',
    answer: 'Yes. We operate separate, dedicated tankers for sweet drinking water (potable) adhering to strict hygiene standards, as well as separate tankers for non-drinking construction site water, dust control, and salt water.',
  },
  {
    question: 'Can we book long-term or recurring contracts for wastewater and water supply?',
    answer: 'Yes, we provide both one-off emergency dispatches and daily, weekly, or monthly scheduled service contracts tailored for labor camps, batching plants, and long-term infrastructure sites.',
  },
  {
    question: 'How do I request a quote or confirm availability?',
    answer: 'You can instantly contact us via WhatsApp (+971 50 412 7930) or call directly. You can also use our website quote form to submit your load specifications and receive an immediate quote.',
  },
];
