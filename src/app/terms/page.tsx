import React from 'react';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/content/site';
import { buildMetadata } from '@/lib/seo';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service | OSIA Transport Abu Dhabi',
  description: 'Terms and Conditions of service for transport, water supply, and crane rental solutions provided by OSIA Transport LLC SPC in Abu Dhabi, UAE.',
  path: '/terms/',
});

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#0A1B2E] text-white py-12 sm:py-16 border-b border-white/10 bg-blueprint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <Badge variant="orange">Operational Terms</Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-white">
              Terms of Service
            </h1>
            <p className="text-sm text-[#B8C6D6]">
              Operational Guidelines & Engagement Policies · OSIA Transport LLC SPC
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-[#52667B] leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
              1. Scope of Engagement
            </h2>
            <p>
              These Terms apply to all equipment rentals, potable and industrial water supplies, wastewater collection, and transport services provided by {SITE_CONFIG.legalName} within Abu Dhabi and the UAE.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
              2. Quotations & Pricing
            </h2>
            <p>
              Quotations provided via WhatsApp, telephone, or formal email are based on load specifications, location coordinates, and access conditions provided by the client. Any changes to lift heights, tonnage weights, or waiting times may adjust the final billing per agreed rate schedules.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
              3. Site Access & Safety Compliance
            </h2>
            <p>
              The client is responsible for ensuring clear, safe ground access, appropriate ground-bearing capacity for crane outriggers and heavy haulage trailers, and any required internal facility gate security permits.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
              4. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the Emirate of Abu Dhabi and the Federal Laws of the United Arab Emirates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
