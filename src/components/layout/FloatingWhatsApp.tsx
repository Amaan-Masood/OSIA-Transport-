'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { buildGeneralWhatsAppUrl } from '@/lib/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = buildGeneralWhatsAppUrl();

  return (
    <aside aria-label="Contact via WhatsApp" className="hidden md:block fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] text-[#0A1B2E] px-4 py-3 rounded-full shadow-[0_6px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 group font-extrabold text-sm uppercase tracking-wider"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A1B2E] opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0A1B2E]"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-[#0A1B2E]" />
        <span>Chat on WhatsApp</span>
      </a>
    </aside>
  );
};
