import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG, SERVICES, AREAS } from '@/content/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1726] text-white pt-14 sm:pt-16 pb-28 md:pb-12 border-t-2 border-[#0369A1]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Highlight Box: 24/7 Dispatch Banner */}
        <div className="bg-[#132238] border border-white/10 rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              <Clock className="w-4 h-4" />
              Round-The-Clock Dispatch
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight text-white">
              Need immediate transport, water supply, or crane rental?
            </h3>
            <p className="text-sm text-[#94A3B8]">
              Our dispatch team is on standby 24 hours a day, 7 days a week across Abu Dhabi.
            </p>
          </div>
          <div className="hidden md:flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0369A1] text-white font-extrabold text-sm uppercase tracking-wider hover:bg-[#0369A1] transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call Dispatch</span>
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello OSIA Transport! I need an immediate quote.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E7064] text-white font-extrabold text-sm uppercase tracking-wider hover:bg-[#0E7064] transition-all shadow-md active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-white text-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1.5 shrink-0 overflow-hidden shadow-sm flex items-center justify-center">
                <Image
                  src="/images/logo-transparent.png"
                  alt="OSIA Transport LLC Official Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg uppercase tracking-tight text-white font-display block leading-none">
                  OSIA Transport
                </span>
                <span className="text-[10px] tracking-widest text-[#94A3B8] uppercase font-bold mt-0.5 block">
                  LLC · Abu Dhabi, UAE
                </span>
              </div>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              {SITE_CONFIG.tagline} Professional heavy transport, potable water tankers, wastewater drainage, and mobile crane rentals serving the UAE infrastructure and industrial sectors.
            </p>
            <div className="space-y-2.5 pt-2 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href={SITE_CONFIG.phoneHref} className="text-white hover:text-[#38BDF8] font-bold transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services Hub Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-[#94A3B8] hover:text-white transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{s.shortTitle}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#38BDF8] transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Coverage Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">
              Coverage &amp; Hubs
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              {AREAS.map((a) => (
                <li key={a.slug} className="py-0.5">
                  <strong className="text-white block">{a.name}</strong>
                  <span className="text-[11px] text-[#94A3B8]/80">{a.description}</span>
                </li>
              ))}
              <li className="pt-2 text-[11px] text-[#94A3B8]">
                Also serving Western Region, ICAD, Al Mafraq, and UAE highway corridors.
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <Link href="/about/" className="hover:text-white transition-colors">
                  About OSIA Transport
                </Link>
              </li>
              <li>
                <Link href="/fleet/" className="hover:text-white transition-colors">
                  Fleet &amp; Equipment Specs
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors">
                  Contact &amp; Location
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="hover:text-white transition-colors">
                  Privacy Policy (UAE PDPL)
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#94A3B8]">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved. Registered in Abu Dhabi, UAE.
          </p>
          <p className="text-center md:text-right text-[#94A3B8]/80">
            Certified Crane Operators · Food-Grade Potable Water Tankers · Industrial Safety Compliance
          </p>
        </div>
      </div>
    <p className="max-w-7xl mx-auto px-4 pb-6 text-xs text-on-dark-muted"><a href="/images/equipment/credits.html" className="underline hover:text-white">Equipment photo credits</a></p>
    </footer>
  );
};
