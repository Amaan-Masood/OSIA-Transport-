import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const FleetTeaser: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0B1726] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & Spec Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="orange">Heavy Fleet Overview</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-white leading-tight">
              Inspected &amp; Certified Heavy Equipment
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              We operate high-torque Volvo FH Globetrotter prime movers, Mercedes-Benz Actros tankers, and all-terrain mobile cranes tested to UAE municipal and HSE standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#132238] border border-white/10">
                <span className="block text-3xl sm:text-4xl font-extrabold font-display text-[#F97316]">
                  25T – 200T
                </span>
                <span className="text-xs text-[#94A3B8] uppercase font-bold tracking-wider mt-1 block">
                  Mobile Crane Fleet
                </span>
              </div>
              <div className="p-5 rounded-2xl bg-[#132238] border border-white/10">
                <span className="block text-3xl sm:text-4xl font-extrabold font-display text-[#0284C7]">
                  100%
                </span>
                <span className="text-xs text-[#94A3B8] uppercase font-bold tracking-wider mt-1 block">
                  Third-Party Certified
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/fleet/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F97316] text-[#0B1726] font-extrabold text-xs uppercase tracking-wider hover:bg-[#EA580C] transition-all shadow-md group hover:shadow-lg"
              >
                <span>View Complete Fleet Specifications</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Fleet Cards Grid Preview */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden bg-[#132238] border border-white/10 group hover:border-white/20 transition-all">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/fleet/volvo-fh-flatbed-steel-plates.webp"
                  alt="Volvo FH Flatbed with structural steel plates"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F97316] block">
                  Heavy Haulage
                </span>
                <h3 className="text-sm font-bold uppercase text-white font-display">
                  Volvo FH &amp; Flatbed Loaded With Steel
                </h3>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-[#132238] border border-white/10 group hover:border-white/20 transition-all">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/fleet/volvo-fh-globetrotter-tractor.webp"
                  alt="Volvo FH Globetrotter prime mover"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] block">
                  Heavy Tractor Units
                </span>
                <h3 className="text-sm font-bold uppercase text-white font-display">
                  Volvo FH Globetrotter Fleet
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
