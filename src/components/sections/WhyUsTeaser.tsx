import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const WhyUsTeaser: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="navy">Operational Reliability</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-[#0F172A]">
            Built For Abu Dhabi Industrial Demands
          </h2>
          <p className="text-sm sm:text-base text-[#475569]">
            We understand the urgent schedules on UAE construction sites and industrial facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:shadow-[0_12px_28px_-6px_rgba(15,23,42,0.08)] hover:border-[#CBD5E1] hover:-translate-y-0.5 transition-all duration-300 space-y-4">
            <div className="w-11 h-11 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-display uppercase text-[#0F172A]">
              Based In Abu Dhabi
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Fast, priority dispatch to Musaffah Industrial Area, ICAD, Khalifa City, MBZ City, and all Western Region project corridors.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:shadow-[0_12px_28px_-6px_rgba(15,23,42,0.08)] hover:border-[#CBD5E1] hover:-translate-y-0.5 transition-all duration-300 space-y-4">
            <div className="w-11 h-11 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-display uppercase text-[#0F172A]">
              24/7 Operations Desk
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Round-the-clock dispatch coordinators reachable by phone and WhatsApp for immediate tanker delivery and crane mobilization.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:shadow-[0_12px_28px_-6px_rgba(15,23,42,0.08)] hover:border-[#CBD5E1] hover:-translate-y-0.5 transition-all duration-300 space-y-4">
            <div className="w-11 h-11 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-display uppercase text-[#0F172A]">
              Certified Operators &amp; Safety
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Strict HSE protocols, licensed crane operators, food-grade clean potable water tanks, and regular mechanical maintenance.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0284C7] hover:text-[#0369A1] group transition-colors"
          >
            <span>Learn More About Our Company &amp; Mission</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
