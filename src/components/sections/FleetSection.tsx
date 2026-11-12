'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench,
  ShieldCheck,
  MessageSquare,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';
import { Badge } from '@/components/ui/Badge';
import {
  FLEET_CATEGORIES,
  FLEET_LIBRARY,
  type FleetCategoryId,
  type FleetLibraryItem,
} from '@/content/fleetVisuals';

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

interface FleetSectionProps {
  showHeader?: boolean;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ showHeader = true }) => {
  const [activeCategory, setActiveCategory] = useState<FleetCategoryId>('all');
  const [selectedUnit, setSelectedUnit] = useState<FleetLibraryItem | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<FleetCategoryId, number> = {
      all: FLEET_LIBRARY.length,
      tankers: 0,
      tractors: 0,
      trailers: 0,
      inspection: 0,
      cranes: 0,
    };
    for (const item of FLEET_LIBRARY) {
      counts[item.categoryId] += 1;
    }
    return counts;
  }, []);

  const filteredUnits = useMemo(() => {
    if (activeCategory === 'all') {
      return FLEET_LIBRARY;
    }
    return FLEET_LIBRARY.filter((item) => item.categoryId === activeCategory);
  }, [activeCategory]);

  const selectedIndex = selectedUnit
    ? filteredUnits.findIndex((item) => item.id === selectedUnit.id)
    : -1;

  const navigateModal = (direction: -1 | 1) => {
    if (filteredUnits.length === 0 || selectedIndex === -1) return;
    const nextIndex = (selectedIndex + direction + filteredUnits.length) % filteredUnits.length;
    setSelectedUnit(filteredUnits[nextIndex]);
  };

  useEffect(() => {
    if (!selectedUnit) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedUnit(null);
      } else if (event.key === 'ArrowRight') {
        navigateModal(1);
      } else if (event.key === 'ArrowLeft') {
        navigateModal(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

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
              Explore equipment types for water supply, construction lifting and heavy haulage. Reference photographs illustrate equipment categories.
            </p>
          </div>
        )}

        {/* Crane Tonnage Numerals Cards */}
        <div className="mb-10 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-extrabold uppercase font-display tracking-wider text-[#0F172A] flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#0369A1] shrink-0" />
              <span>Mobile Crane Capacities</span>
            </h3>
            <span className="text-xs font-semibold text-[#64748B]">Third-party load tested &amp; certified</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {CRANE_TONNAGES.map((c, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 sm:p-6 hover:bg-white hover:border-[#0369A1]/40 hover:shadow-xl transition-all duration-200 flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <div className="text-2xl sm:text-4xl font-extrabold font-display text-[#0369A1] tracking-tight mb-1 group-hover:scale-105 transition-transform origin-left">
                    {c.tonnage}
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2 sm:mb-3 leading-snug">
                    {c.type}
                  </div>
                  <div className="hidden sm:block text-xs text-[#64748B] space-y-1.5 pt-3 border-t border-[#E2E8F0]">
                    <p>
                      <strong className="text-[#0F172A]">Application:</strong> {c.bestFor}
                    </p>
                    <p>
                      <strong className="text-[#0F172A]">Boom:</strong> {c.boom}
                    </p>
                  </div>
                  <p className="sm:hidden text-[11px] text-[#64748B] leading-snug pt-2 border-t border-[#E2E8F0]">
                    {c.bestFor}
                  </p>
                </div>

                <div className="pt-3 sm:pt-5 mt-3 sm:mt-5 border-t border-[#E2E8F0]">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(`Hello OSIA Transport! I need a quote for a ${c.tonnage} Mobile Crane in Abu Dhabi.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 rounded-xl bg-[#0369A1] text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider hover:bg-[#0369A1] transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white shrink-0" />
                    <span>Inquire {c.tonnage}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Fleet & Tanker Library */}
        <div className="space-y-6 sm:space-y-8 pt-8 sm:pt-10 border-t border-[#E2E8F0]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0369A1]">
                <Layers className="w-3.5 h-3.5" />
                <span>Equipment gallery</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display uppercase tracking-tight text-[#0F172A]">
                Equipment for water, lifting &amp; haulage
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl">
                Browse by equipment type and open a photograph for a closer look. Original photos from our collection are labelled. Additional equipment examples illustrate service types; contact dispatch to confirm the available unit.
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7064] bg-emerald-50 border border-emerald-200/60 px-3.5 py-2 rounded-full self-start lg:self-auto">
              <ShieldCheck className="w-4 h-4 text-[#0E7064]" />
              <span>{filteredUnits.length} Equipment Photos</span>
            </div>
          </div>

          {/* Filter Tabs (single horizontal swipe row on mobile) */}
          <div
            className="flex flex-nowrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap gap-2 pb-1 -mx-4 px-4 sm:mx-0 sm:px-0"
            role="tablist"
            aria-label="Fleet equipment categories"
          >
            {FLEET_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0B1726] text-white shadow-sm'
                      : 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:bg-[#E0F2FE] hover:text-[#0369A1] hover:border-[#BAE6FD]'
                  }`}
                >
                  <span>{category.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                      isActive ? 'bg-white/15 text-white' : 'bg-[#E2E8F0] text-[#334155]'
                    }`}
                  >
                    {categoryCounts[category.id]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Fleet Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUnits.map((unit) => {
              const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                `Hello OSIA Transport! I would like availability & rates for: ${unit.title}.`
              )}`;

              return (
                <article
                  key={unit.id}
                  className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#0369A1]/40 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Photo Trigger */}
                    <button
                      type="button"
                      onClick={() => setSelectedUnit(unit)}
                      aria-label={`Inspect ${unit.title} full view`}
                      className="relative aspect-[3/2] w-full bg-surface-muted overflow-hidden block text-left cursor-pointer"
                    >
                      <Image
                        src={unit.src}
                        alt={unit.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className={`${unit.aspect === 'portrait' ? 'object-contain' : 'object-cover'} ${unit.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-300`}
                      />
                      <span className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-[#0B1726]/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1 border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3 h-3" />
                        <span>Full View</span>
                      </span>
                    </button>

                    {/* Body */}
                    <div className="p-5 space-y-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0369A1] block">
                        {unit.categoryLabel} &middot; {unit.badge}
                      </span>
                      <h4 className="text-base font-semibold font-body text-[#0F172A] leading-snug">
                        {unit.title}
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed">{unit.specs}</p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {unit.highlights.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] text-[#334155] text-[10px] font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Bar */}
                  <div className="px-5 py-3.5 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedUnit(unit)}
                      className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] hover:text-[#0369A1] transition-colors cursor-pointer"
                    >
                      View equipment
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0E7064] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0E7064] shadow-sm transition-all active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full-Scale Lightbox Preview Modal */}
      {selectedUnit && (
        <div
          className="fixed inset-0 z-50 bg-[#0B1726]/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedUnit(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedUnit.title}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/15 grid grid-cols-1 md:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Uncropped Image Stage */}
            <div className="md:col-span-7 bg-[#0B1726] relative flex items-center justify-center p-3 sm:p-5 min-h-[280px] sm:min-h-[420px]">
              <Image
                src={selectedUnit.src}
                alt={selectedUnit.title}
                width={1254}
                height={1254}
                className="max-h-[70vh] w-auto h-auto object-contain rounded-xl"
              />

              {filteredUnits.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => navigateModal(-1)}
                    aria-label="Previous unit"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateModal(1)}
                    aria-label="Next unit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Specs Panel */}
            <div className="md:col-span-5 p-6 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0369A1] block">
                      {selectedUnit.categoryLabel} · {selectedUnit.badge}
                    </span>
                    <h4 className="text-xl font-bold font-display uppercase text-[#0F172A] mt-1">
                      {selectedUnit.title}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedUnit(null)}
                    aria-label="Close unit preview"
                    className="p-2 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] transition-colors cursor-pointer shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{selectedUnit.specs}</p>

                <div className="space-y-2 pt-3 border-t border-[#E2E8F0]">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#64748B] block">
                    Verified Highlights
                  </span>
                  {selectedUnit.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#0F172A] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#E2E8F0]">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                    `Hello OSIA Transport! I would like to book / get rates for: ${selectedUnit.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0E7064] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0E7064] shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Book Unit on WhatsApp</span>
                </a>
                <Link
                  href="/contact/#quote"
                  onClick={() => setSelectedUnit(null)}
                  className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] hover:border-[#0369A1] hover:text-[#0369A1] font-extrabold text-xs uppercase tracking-wider transition-colors"
                >
                  Open Full Quote Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
