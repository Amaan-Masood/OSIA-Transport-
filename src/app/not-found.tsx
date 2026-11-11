import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Home } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#F4F7FB]">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-[#D5DFEA] shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mx-auto font-extrabold text-2xl font-display">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#52667B]">
            The route you requested could not be located. If you are looking for urgent transport or water supply dispatch in Abu Dhabi, reach our desk directly:
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Button
            asLink
            href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello OSIA Transport! I need assistance with equipment dispatch.')}`}
            variant="whatsapp"
            size="md"
            className="w-full flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-[#0A1B2E]" />
            <span>Chat on WhatsApp</span>
          </Button>
          <Button
            asLink
            href={SITE_CONFIG.phoneHref}
            variant="cta"
            size="md"
            className="w-full flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#0A1B2E]" />
            <span>Call {SITE_CONFIG.phoneDisplay}</span>
          </Button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#1391E5] hover:underline pt-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home Page</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
