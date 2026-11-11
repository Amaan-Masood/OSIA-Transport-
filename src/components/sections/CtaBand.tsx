import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';

export const CtaBand: React.FC = () => {
  return (
    <section className="bg-[#0A1B2E] text-white py-14 sm:py-16 border-b border-white/10 relative overflow-hidden bg-blueprint-dense">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A1A]">
              Immediate On-Site Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-white leading-tight">
              Ready to Mobilize Equipment To Your Project?
            </h2>
            <p className="text-sm text-[#B8C6D6]">
              Contact our Abu Dhabi operations coordinator right now for competitive pricing and prompt dispatch.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello OSIA Transport! I need an urgent quote.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#FF7A1A] text-[#0A1B2E] font-extrabold text-sm uppercase tracking-wider hover:bg-[#E8640A] shadow-lg transition-transform active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get WhatsApp Quote</span>
            </a>
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 text-white border border-white/20 font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF7A1A]" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
