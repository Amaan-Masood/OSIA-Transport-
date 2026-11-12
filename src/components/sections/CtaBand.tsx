import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';

export const CtaBand: React.FC = () => {
  return (
    <section className="bg-[#0B1726] text-white py-14 sm:py-20 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">
              Immediate On-Site Mobilization
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-white leading-tight">
              Ready to Mobilize Equipment To Your Project?
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Contact our Abu Dhabi operations coordinator right now for competitive pricing and prompt dispatch.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello OSIA Transport! I need an urgent quote.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#0284C7] text-white font-extrabold text-sm uppercase tracking-wider hover:bg-[#0369A1] shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all active:scale-95"
            >
              <MessageSquare className="w-5 h-5 fill-white text-white" />
              <span>Get WhatsApp Quote</span>
            </a>
            <a
              href={SITE_CONFIG.phoneHref}
              className="hidden sm:inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-[#38BDF8]" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
