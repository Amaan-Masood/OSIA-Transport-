import React from 'react';
import Image from 'next/image';
import { Phone, MessageSquare, ShieldCheck, Clock, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white pt-8 pb-14 sm:pb-18 lg:pb-24 border-b border-[#D5DFEA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Clean, uncluttered Value Prop & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF3FA] border border-[#0E9AD2]/30 text-xs font-bold uppercase tracking-wider text-[#0B6FB8]">
              <span className="w-2 h-2 rounded-full bg-[#0E9AD2]"></span>
              Abu Dhabi Heavy Logistics & Water Supply
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#0A1B2E] font-display leading-[1.05]">
              Heavy Transport, Water Supply & <span className="text-[#EB5E1A]">Mobile Cranes</span> In Abu Dhabi
            </h1>

            {/* Subtitle - clean, concise, under 20 words */}
            <p className="text-base sm:text-lg text-[#52667B] leading-relaxed max-w-2xl font-normal">
              24/7 dedicated dispatch of potable water tankers, certified 25T–200T mobile cranes, and heavy flatbed trailers for construction and industrial sites.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asLink
                href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello OSIA Transport! I need an immediate quote.')}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="cta"
                size="lg"
                className="flex items-center gap-2 text-sm sm:text-base px-8 py-4 font-bold"
              >
                <MessageSquare className="w-5 h-5 fill-[#0A1B2E]" />
                <span>Get Instant Quote</span>
              </Button>
              <Button
                asLink
                href={SITE_CONFIG.phoneHref}
                variant="outline"
                size="lg"
                className="flex items-center gap-2 text-sm sm:text-base px-8 py-4 font-bold"
              >
                <Phone className="w-5 h-5 text-[#EB5E1A]" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </Button>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#D5DFEA]">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#22354A]">
                <Clock className="w-4 h-4 text-[#EB5E1A] shrink-0" />
                <span className="font-bold">24/7 Dispatch</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#22354A]">
                <ShieldCheck className="w-4 h-4 text-[#0E9AD2] shrink-0" />
                <span className="font-bold">Certified Crew</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#22354A]">
                <Award className="w-4 h-4 text-[#15803D] shrink-0" />
                <span className="font-bold">Food-Grade Tankers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Fleet Visual */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#0A1B2E] shadow-2xl bg-[#0A1B2E]">
              {/* Image */}
              <div className="relative aspect-[4/3] w-full bg-[#0A1B2E]">
                <Image
                  src="/images/fleet/mercedes-actros-water-tanker.webp"
                  alt="OSIA Transport Mercedes-Benz Actros Water Tanker in Abu Dhabi"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                />
              </div>

              {/* Verified Fleet Overlay Strip */}
              <div className="bg-[#0A1B2E] text-white p-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-[#EB5E1A] uppercase tracking-wider">
                    Verified Operating Fleet
                  </div>
                  <div className="text-sm font-extrabold uppercase font-display text-white">
                    Mercedes Actros 3341 & Volvo FH Units
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#0E9AD2]/20 text-[#5BC3EB] text-[10px] font-extrabold uppercase tracking-wide border border-[#0E9AD2]/40">
                    Active in Abu Dhabi
                  </span>
                </div>
              </div>
            </div>

            {/* Spec Numbers Strip */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#F4F7FB] border border-[#D5DFEA] rounded-xl p-3.5 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold font-display text-[#0A1B2E] tracking-tight">
                  25T – 200T
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2410C]">
                  Mobile Crane Range
                </span>
              </div>
              <div className="bg-[#F4F7FB] border border-[#D5DFEA] rounded-xl p-3.5 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold font-display text-[#0A1B2E] tracking-tight">
                  100%
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B6FB8]">
                  Abu Dhabi Coverage
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
