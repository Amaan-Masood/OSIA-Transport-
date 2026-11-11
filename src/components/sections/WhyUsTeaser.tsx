import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const WhyUsTeaser: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#D5DFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="navy">Operational Reliability</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-[#0A1B2E]">
            Built For Abu Dhabi Industrial Demands
          </h2>
          <p className="text-sm text-[#52667B]">
            We understand the urgent schedules on UAE construction sites and industrial facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#F4F7FB] border border-[#D5DFEA] space-y-3">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D5DFEA] flex items-center justify-center text-[#EB5E1A]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-display uppercase text-[#0A1B2E]">
              Based In Abu Dhabi
            </h3>
            <p className="text-xs sm:text-sm text-[#52667B] leading-relaxed">
              Fast, priority dispatch to Musaffah Industrial Area, ICAD, Khalifa City, MBZ City, and all Western Region project corridors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F4F7FB] border border-[#D5DFEA] space-y-3">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D5DFEA] flex items-center justify-center text-[#0E9AD2]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-display uppercase text-[#0A1B2E]">
              24/7 Operations Desk
            </h3>
            <p className="text-xs sm:text-sm text-[#52667B] leading-relaxed">
              Round-the-clock dispatch coordinators reachable by phone and WhatsApp for immediate tanker delivery and crane mobilization.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F4F7FB] border border-[#D5DFEA] space-y-3">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D5DFEA] flex items-center justify-center text-[#15803D]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-display uppercase text-[#0A1B2E]">
              Certified Operators & Safety
            </h3>
            <p className="text-xs sm:text-sm text-[#52667B] leading-relaxed">
              Strict HSE protocols, licensed crane operators, food-grade clean potable water tanks, and regular mechanical maintenance.
            </p>
          </div>
        </div>

        <div className="text-center pt-10">
          <Link
            href="/about/"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0A1B2E] hover:text-[#EB5E1A] transition-colors group"
          >
            <span>Learn More About Our Company & Mission</span>
            <ArrowRight className="w-4 h-4 text-[#EB5E1A] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
