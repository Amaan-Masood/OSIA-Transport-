'use client';

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';
import { buildGeneralWhatsAppUrl } from '@/lib/whatsapp';

export const MobileBottomBar: React.FC = () => {
  const whatsappUrl = buildGeneralWhatsAppUrl();

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-[#D5DFEA] px-3 py-2.5 shadow-[0_-4px_16px_rgba(10,27,46,0.12)]">
      <div className="grid grid-cols-2 gap-2.5 h-[48px]">
        {/* Call Button */}
        <a
          href={SITE_CONFIG.phoneHref}
          className="flex items-center justify-center gap-2 rounded-lg bg-[#0A1B2E] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm active:scale-[0.98] transition-transform min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-[#EB5E1A]" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button (Strict Contrast: Green background + Navy text) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] text-[#0A1B2E] font-extrabold text-xs uppercase tracking-wider shadow-sm active:scale-[0.98] transition-transform min-h-[44px]"
        >
          <MessageSquare className="w-4 h-4 fill-[#0A1B2E]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
