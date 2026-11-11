'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Wrench, ShieldCheck, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';
import { Badge } from '@/components/ui/Badge';

interface CraneTonnage {
  tonnage: string;
  type: string;
  bestFor: string;
  boom: string;
}

const CRANE_TONNAGES: CraneTonnage[] = [
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
    specs: 'High Torque Prime Mover for Multi-Axle Trailers',
  },
  {
    src: '/images/fleet/volvo-fh-flatbed-steel-plates.webp',
    title: 'Flatbed Trailer Carrying Structural Steel',
    category: 'Flatbed & Haulage',
    specs: 'Heavy Steel Infrastructure Transportation',
  },
  {
    src: '/images/fleet/heavy-multi-axle-chassis.webp',
    title: 'Multi-Axle Heavy Transport Chassis',
    category: 'Heavy Equipment Transport',
    specs: 'Excavator & Heavy Machinery Mobilization',
  },
  {
    src: '/images/fleet/renault-heavy-tractors-blue.webp',
    title: 'Heavy Tractor Units Fleet',
    category: 'Logistics Fleet',
    specs: 'Certified UAE Highway Transport Units',
  },
  {
    src: '/images/fleet/fleet-yard-overview.webp',
    title: 'Operations Yard & Standby Fleet',
    category: 'Inspection Center',
    specs: '24/7 Dispatch Facility in Abu Dhabi',
  },
];

interface FleetSectionProps {
  showHeader?: boolean;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ showHeader = true }) => {
  const [activeImage, setActiveImage] = useState<FleetImage>(FLEET_GALLERY[0]);

  return (
    <section id="fleet" className="py-14 sm:py-22 bg-white text-[#0F172A] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Only shown when showHeader is true (e.g. on homepage) */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="navy">Inspected &amp; Certified Fleet</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0F172A]">
              Equipment &amp; Fleet Specifications
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Real equipment photographs from our active Abu Dhabi fleet. Maintained to strict UAE municipal and HSE standards with certified operators.
            </p>
          </div>
        )}

        {/* Crane Tonnage Numerals Cards (Clean Studio Layout matching About Us) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h3 className="text-xl font-extrabold uppercase font-display tracking-wider text-[#0F172A] flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#0284C7]" />
              Mobile Crane Rental Capacities (Abu Dhabi)
            </h3>
            <span className="text-xs font-semibold text-[#64748B]">Third-party load tested &amp; certified</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CRANE_TONNAGES.map((c, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 hover:bg-white hover:border-[#0284C7]/40 hover:shadow-xl transition-all duration-200 flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-[#0284C7] tracking-tight mb-1 group-hover:scale-105 transition-transform origin-left">
                    {c.tonnage}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">
                    {c.type}
                  </div>
                  <div className="text-xs text-[#64748B] space-y-1.5 pt-3 border-t border-[#E2E8F0]">
                    <p>
                      <strong className="text-[#0F172A]">Application:</strong> {c.bestFor}
                    </p>
                    <p>
                      <strong className="text-[#0F172A]">Boom:</strong> {c.boom}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E2E8F0]">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(`Hello OSIA Transport! I need a quote for a ${c.tonnage} Mobile Crane in Abu Dhabi.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0284C7] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0369A1] transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire {c.tonnage}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Fleet Photo Gallery */}
        <div className="space-y-6 pt-6 border-t border-[#E2E8F0]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
            <div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                Active Fleet On Site
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Actual fleet units operating daily across Abu Dhabi infrastructure corridors
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#128C7E] bg-emerald-50 border border-emerald-200/60 px-3 py-1.5 rounded-full self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4 text-[#128C7E]" />
              <span>Safety Inspected &amp; Approved</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Main Featured Image in Double-Bezel Frame */}
            <div className="lg:col-span-8 p-2 rounded-3xl bg-[#F1F5F9] border border-[#E2E8F0] shadow-xl">
              <div className="rounded-2xl overflow-hidden bg-[#0B1726]">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4 sm:p-5 bg-white border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0284C7] block">
                      {activeImage.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0F172A] font-display uppercase">
                      {activeImage.title}
                    </h4>
                    <p className="text-xs text-[#64748B]">{activeImage.specs}</p>
                  </div>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(`Hello OSIA Transport! I am inquiring about the ${activeImage.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#128C7E] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0E7064] shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Book Equipment</span>
                  </a>
                </div>
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
                        ? 'bg-[#E0F2FE] border-[#0284C7] ring-2 ring-[#0284C7]/20 shadow-sm'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] hover:bg-white hover:border-[#CBD5E1]'
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
                      <div className="text-xs font-bold text-[#0F172A] truncate">{img.title}</div>
                      <div className="text-[10px] text-[#64748B] truncate">{img.category}</div>
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
