import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const FleetTeaser: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-blueprint text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & Spec Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="orange">Heavy Fleet Overview</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-white leading-tight">
              Inspected & Certified Heavy Equipment
            </h2>
            <p className="text-sm sm:text-base text-[#B8C6D6] leading-relaxed">
              We operate high-torque Volvo FH Globetrotter prime movers, Mercedes-Benz Actros tankers, and all-terrain mobile cranes tested to UAE municipal and HSE standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-3xl font-extrabold font-display text-[#EB5E1A]">
                  25T – 200T
                </span>
                <span className="text-xs text-[#B8C6D6] uppercase font-bold tracking-wider">
                  Mobile Crane Fleet
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-3xl font-extrabold font-display text-[#0E9AD2]">
                  100%
                </span>
                <span className="text-xs text-[#B8C6D6] uppercase font-bold tracking-wider">
                  Third-Party Certified
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/fleet/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#EB5E1A] text-[#0A1B2E] font-extrabold text-xs uppercase tracking-wider hover:bg-[#d44f12] transition-colors shadow-md group"
              >
                <span>View Complete Fleet Specifications</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Fleet Gallery Preview */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-[16/10] bg-black">
              <Image
                src="/images/fleet/volvo-fh-flatbed-steel-plates.webp"
                alt="OSIA Transport Volvo FH Flatbed Trailer Loaded with Steel"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0A1B2E] via-[#0A1B2E]/80 to-transparent flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#EB5E1A]">Heavy Haulage</span>
                  <div className="text-sm font-bold text-white uppercase font-display">Volvo FH & Flatbed Loaded With Steel</div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#25D366]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Certified</span>
                </div>
              </div>
            </div>

            {/* Quick 2-column thumbnails preview */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/9] bg-black">
                <Image
                  src="/images/fleet/mercedes-actros-water-tanker.webp"
                  alt="Mercedes Actros Water Tanker"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white uppercase font-display">Mercedes Actros Tanker</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/9] bg-black">
                <Image
                  src="/images/fleet/volvo-fh-globetrotter-tractor.webp"
                  alt="Volvo FH Globetrotter Tractor"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white uppercase font-display">Volvo FH Globetrotter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
