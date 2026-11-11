'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Wrench, CheckCircle2, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { SITE_CONFIG } from '@/content/site';

interface FleetImage {
  src: string;
  title: string;
  category: string;
  specs: string;
}

const FLEET_GALLERY: FleetImage[] = [
  {
    src: '/images/fleet/mercedes-actros-water-tanker.webp',
    title: 'Mercedes-Benz Actros 3341 Tanker',
    category: 'Water Logistics',
    specs: 'Non-Drinking & Potable Water Delivery',
  },
  {
    src: '/images/fleet/volvo-fh-globetrotter-tractor.webp',
    title: 'Volvo FH Globetrotter Heavy Tractor',
    category: 'Heavy Haulage',
    specs: 'High-torque prime mover for low-bed trailers',
  },
  {
    src: '/images/fleet/volvo-fh-flatbed-steel-plates.webp',
    title: 'Flatbed Trailer Carrying Structural Steel',
    category: 'Freight & Haulage',
    specs: 'Secured heavy steel plates and structural beam transit',
  },
  {
    src: '/images/fleet/heavy-multi-axle-chassis.webp',
    title: 'Multi-Axle Heavy Transport Chassis',
    category: 'Heavy Equipment Transport',
    specs: 'Reinforced frame for high-tonnage plant loads',
  },
  {
    src: '/images/fleet/renault-heavy-tractors-blue.webp',
    title: 'Heavy Tractor Units Fleet',
    category: 'Logistics Fleet',
    specs: 'Maintained for inter-emirate continuous haulage',
  },
  {
    src: '/images/fleet/fleet-yard-overview.webp',
    title: 'Operations Yard & Standby Fleet',
    category: 'Dispatch Center',
    specs: '24/7 readiness for rapid emergency deployment',
  },
];

const CRANE_TONNAGES = [
  {
    tonnage: '25 TON',
    type: 'Rough Terrain & All Terrain',
    bestFor: 'Urban lifts, light plant, MEP installation',
    boom: 'Telescopic hydraulic boom',
  },
  {
    tonnage: '50 TON',
    type: 'All Terrain Heavy Mobile Crane',
    bestFor: 'Structural steel erection, precast panels',
    boom: 'Extended radius capability',
  },
  {
    tonnage: '100 TON',
    type: 'Heavy Industrial Mobile Crane',
    bestFor: 'Heavy mechanical plants, transformers, vessels',
    boom: 'Heavy counterweight & fly jib',
  },
  {
    tonnage: '200 TON',
    type: 'High-Tonnage All-Terrain Crane',
    bestFor: 'Infrastructure bridge segments, oil & gas lifts',
    boom: 'Full rigging & heavy lift package',
  },
];

export const FleetSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<FleetImage>(FLEET_GALLERY[0]);

  return (
    <section id="fleet" className="py-16 sm:py-24 bg-blueprint text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="orange">Inspected & Certified Fleet</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-white">
            Equipment & Fleet Specifications
          </h2>
          <p className="text-sm sm:text-base text-[#B8C6D6] leading-relaxed">
            Real equipment photographs from our active Abu Dhabi fleet. Maintained to strict UAE municipal and HSE standards with certified operators.
          </p>
        </div>

        {/* Crane Tonnage Numerals Cards (Signature Spec Sheet Layout) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-extrabold uppercase font-display tracking-wider text-[#FF7A1A] flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              Mobile Crane Rental Capacities (Abu Dhabi)
            </h3>
            <span className="text-xs text-[#B8C6D6] hidden sm:block">Third-party load tested</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CRANE_TONNAGES.map((c, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-[#FF7A1A]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-[#FF7A1A] tracking-tight mb-1">
                    {c.tonnage}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                    {c.type}
                  </div>
                  <div className="text-xs text-[#B8C6D6] space-y-1.5 pt-2 border-t border-white/10">
                    <p>
                      <strong className="text-white">Application:</strong> {c.bestFor}
                    </p>
                    <p>
                      <strong className="text-white">Boom:</strong> {c.boom}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(`Hello OSIA Transport! I need a quote for a ${c.tonnage} Mobile Crane in Abu Dhabi.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#FF7A1A] text-[#0A1B2E] font-extrabold text-xs uppercase tracking-wider hover:bg-[#E8640A] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire {c.tonnage}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Fleet Photo Gallery */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white">
                Active Fleet On Site
              </h3>
              <p className="text-xs text-[#B8C6D6]">
                Actual fleet units operating daily across Abu Dhabi infrastructure corridors
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#25D366]">
              <ShieldCheck className="w-4 h-4" />
              <span>Safety Inspected & Approved</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Main Featured Image */}
            <div className="lg:col-span-8 bg-black/40 rounded-2xl overflow-hidden border border-white/15 relative">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 bg-[#0A1B2E]/95 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A1A] block">
                    {activeImage.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white font-display uppercase">
                    {activeImage.title}
                  </h4>
                  <p className="text-xs text-[#B8C6D6]">{activeImage.specs}</p>
                </div>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(`Hello OSIA Transport! I am inquiring about the ${activeImage.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] text-[#0A1B2E] font-extrabold text-xs uppercase tracking-wider hover:bg-[#1FB75A] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#0A1B2E]" />
                  <span>Book Equipment</span>
                </a>
              </div>
            </div>

            {/* Thumbnails List */}
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {FLEET_GALLERY.map((img, i) => {
                const isSelected = activeImage.src === img.src;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`text-left p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? 'bg-white/15 border-[#FF7A1A] ring-1 ring-[#FF7A1A]'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-black">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        sizes="60px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">{img.title}</div>
                      <div className="text-[10px] text-[#B8C6D6] truncate">{img.category}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
