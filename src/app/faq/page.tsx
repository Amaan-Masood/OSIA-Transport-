import React from 'react';
import { Metadata } from 'next';
import { FAQS } from '@/content/site';
import { buildMetadata } from '@/lib/seo';
import { Accordion } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Frequently Asked Questions | OSIA Transport Abu Dhabi',
  description: 'Find answers about OSIA Transport equipment rental, water tanker capacities, crane certifications, response times, and service areas in Abu Dhabi.',
  path: '/faq/',
});

export default function FaqPage() {
  const faqSchema = getFaqSchema(FAQS);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq/' },
  ]);

  const accordionItems = FAQS.map((f, i) => ({
    id: `faq-page-${i}`,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <section className="bg-[#0B1726] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="orange">Knowledge &amp; Answers</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Clear technical and operational answers about our transport fleet, potable water standards, and mobile crane rentals.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ list */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion items={accordionItems} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
