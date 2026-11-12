import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const FleetTeaser: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0B1726] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & Spec Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="water">Heavy Fleet Overview</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-white leading-tight">
              Inspected &amp; Certified Heavy Equipment
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              We operate high-torque Volvo FH Globetrotter prime movers, Mercedes-Benz Actros tankers, and all-terrain mobile cranes tested to UAE municipal and HSE standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#132238] border border-white/10">
                <span className="block text-3xl sm:text-4xl font-extrabold font-display text-[#38BDF8] tabular-nums">
                  25T – 200T
                </span>
                <span className="text-xs text-[#94A3B8] uppercase font-bold tracking-wider mt-1 block">
                  Mobile Crane Fleet
                </span>
              </div>
              <div className="p-5 rounded-2xl bg-[#132238] border border-white/10">
                <span className="block text-3xl sm:text-4xl font-extrabold font-display text-[#38BDF8] tabular-nums">
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0369A1] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0369A1] transition-all duration-200 active:scale-[0.985] shadow-lg shadow-sky-500/25 group hover:shadow-xl"
              >
                <span>View Complete Fleet Specifications</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Fleet Cards Grid Preview */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/fleet/"
              className="rounded-2xl overflow-hidden bg-[#132238] border border-white/10 group hover:border-white/25 hover:-translate-y-0.5 transition-all duration-300 block"
            >
              <div className="relative aspect-[6/7] w-full overflow-hidden">
                <Image
                  src="/images/fleet/volvo-fh500-white-led.webp"
                  alt="Volvo FH 500 Globetrotter Heavy Prime Mover"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8] block">
                  Heavy Haulage
                </span>
                <h3 className="text-sm font-bold uppercase text-white font-display">
                  Volvo FH 500 Globetrotter
                </h3>
              </div>
            </Link>

            <Link
              href="/fleet/"
              className="rounded-2xl overflow-hidden bg-[#132238] border border-white/10 group hover:border-white/25 hover:-translate-y-0.5 transition-all duration-300 block"
            >
              <div className="relative aspect-[6/7] w-full overflow-hidden">
                <Image
                  src="/images/fleet/volvo-fh500-eev-yard.webp"
                  alt="Volvo FH 500 EEV Standby Tractor Unit"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8] block">
                  Heavy Tractor Units
                </span>
                <h3 className="text-sm font-bold uppercase text-white font-display">
                  Volvo FH 500 EEV Fleet
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
