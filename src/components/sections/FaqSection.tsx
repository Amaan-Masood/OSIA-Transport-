import React from 'react';
import { MessageSquare } from 'lucide-react';
import { FAQS, SITE_CONFIG } from '@/content/site';
import { Accordion } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';

export const FaqSection: React.FC = () => {
  const accordionItems = FAQS.map((f, i) => ({
    id: `faq-${i}`,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="navy">Answers &amp; Inquiries</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0F172A]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Essential facts on vehicle availability, crane certifications, potable water quality, and emergency dispatch.
          </p>
        </div>

        <Accordion items={accordionItems} className="mb-10" />

        {/* WhatsApp Help Banner */}
        <div className="text-center p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm max-w-2xl mx-auto space-y-3">
          <p className="text-sm sm:text-base font-bold text-[#0F172A]">
            Have a specialized cargo specification or need a custom quotation?
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello OSIA Transport! I have a question regarding your services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#22C55E] text-[#0B1726] font-extrabold text-xs uppercase tracking-wider hover:bg-[#16A34A] transition-all shadow-sm active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-[#0B1726]" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
