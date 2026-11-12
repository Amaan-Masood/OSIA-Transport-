import React from 'react';
import Image from 'next/image';
import { Phone, MessageSquare, ShieldCheck, Clock, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white pt-4 pb-8 sm:pt-8 sm:pb-10 lg:pb-12 border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
          {/* Mobile-First Visual -> Desktop Right Column */}
          <div className="order-1 lg:order-2 lg:col-span-5 osia-enter-delay-1">
            <div className="relative rounded-2xl overflow-hidden bg-[#0B1726] border border-[#E2E8F0] shadow-[0_22px_48px_-14px_rgba(11,23,38,0.18)] group">
              {/* Image - Matched 1158/1020 ratio (compact 4/3 on tiny phones so headline stays visible below) */}
              <div className="relative aspect-[4/3] sm:aspect-[1158/1020] w-full bg-[#0B1726] overflow-hidden">
                <Image
                  src="/images/fleet/mercedes-actros-water-tanker.webp"
                  alt="OSIA Transport Mercedes-Benz Actros 3341 Water Tanker in Abu Dhabi"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                />
              </div>

              {/* Verified Fleet Overlay Strip - flush with bottom edge */}
              <div className="bg-[#0B1726] text-white px-3.5 sm:px-4 py-2.5 sm:py-3 border-t border-white/10 flex items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] sm:text-[11px] font-extrabold text-[#38BDF8] uppercase tracking-wider">
                    Verified Operating Fleet
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold uppercase font-display text-white">
                    Mercedes Actros 3341 &amp; Volvo FH Units
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-[#0284C7]/20 text-[#38BDF8] text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wide border border-[#0284C7]/40">
                    Active in Abu Dhabi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Actions -> Desktop Left Column */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-4 sm:space-y-5 osia-enter">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0369A1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>
              Abu Dhabi Heavy Logistics &amp; Water Supply
            </div>

            {/* Headline */}
            <h1 className="text-[28px] sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#0F172A] font-display leading-[1.06]">
              Heavy Transport, Water Supply &amp; <span className="text-[#0284C7]">Mobile Cranes</span> In Abu Dhabi
            </h1>

            {/* Subtitle - clean, concise, under 20 words */}
            <p className="text-sm sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
              24/7 dedicated dispatch of potable water tankers, certified 25T–200T mobile cranes, and heavy flatbed trailers for construction and industrial sites.
            </p>

            {/* CTAs - Hidden on mobile (< md) because MobileBottomBar provides clean sticky Call & WhatsApp actions */}
            <div className="hidden md:flex flex-wrap items-center gap-4 pt-1">
              <Button
                asLink
                href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello OSIA Transport! I need an immediate quote.')}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="cta"
                size="lg"
                className="group flex items-center gap-3 text-sm sm:text-base px-8 py-4 font-extrabold rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-lg shadow-sky-500/25 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Get Instant Quote</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <MessageSquare className="w-4 h-4 fill-white text-white" />
                </span>
              </Button>
              <Button
                asLink
                href={SITE_CONFIG.phoneHref}
                variant="outline"
                size="lg"
                className="flex items-center gap-2.5 text-sm sm:text-base px-8 py-4 font-bold rounded-2xl bg-white hover:bg-slate-50 text-[#0F172A] border border-[#CBD5E1] shadow-xs hover:border-[#94A3B8] transition-all"
              >
                <Phone className="w-5 h-5 text-[#0284C7]" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </Button>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-5 border-t border-[#E2E8F0]">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-[#334155]">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284C7] shrink-0" />
                <span className="font-bold">24/7 Dispatch</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-[#334155]">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284C7] shrink-0" />
                <span className="font-bold">Certified Crew</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-[#334155]">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284C7] shrink-0" />
                <span className="font-bold">Food-Grade Tankers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Balanced Spec Numbers Strip - Eliminates bottom column asymmetry */}
        <div className="mt-8 pt-6 border-t border-[#E2E8F0] grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 osia-enter-delay-2">
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl py-3.5 px-4 text-center hover:border-[#CBD5E1] transition-colors">
            <span className="block text-xl sm:text-2xl font-extrabold font-display text-[#0F172A] tracking-tight tabular-nums">
              25T – 200T
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0369A1]">
              Mobile Crane Range
            </span>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl py-3.5 px-4 text-center hover:border-[#CBD5E1] transition-colors">
            <span className="block text-xl sm:text-2xl font-extrabold font-display text-[#0F172A] tracking-tight tabular-nums">
              24/7
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0369A1]">
              Emergency Dispatch
            </span>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl py-3.5 px-4 text-center hover:border-[#CBD5E1] transition-colors">
            <span className="block text-xl sm:text-2xl font-extrabold font-display uppercase text-[#0F172A] tracking-tight tabular-nums">
              7 Services
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0369A1]">
              Water, Lift &amp; Haulage
            </span>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl py-3.5 px-4 text-center hover:border-[#CBD5E1] transition-colors">
            <span className="block text-xl sm:text-2xl font-extrabold font-display text-[#0F172A] tracking-tight tabular-nums">
              100%
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0369A1]">
              Abu Dhabi Coverage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
