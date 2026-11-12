import React from 'react';
import type { Metadata } from 'next';
import { FleetSection } from '@/components/sections/FleetSection';
import { CtaBand } from '@/components/sections/CtaBand';
import { buildMetadata } from '@/lib/seo';
import { Badge } from '@/components/ui/Badge';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Fleet & Equipment Specifications | 25T–200T Cranes & Tankers',
  description: 'Detailed specifications of OSIA Transport fleet in Abu Dhabi: 25T, 50T, 100T, 200T mobile cranes, Mercedes-Benz Actros water tankers, and Volvo FH heavy low-bed trailers.',
  path: '/fleet/',
});

export default function FleetPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Fleet Specifications', url: '/fleet/' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <section className="bg-[#0B1726] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="water">Fleet &amp; equipment</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white">
              Fleet &amp; Equipment Specifications
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Explore equipment for Abu Dhabi projects: all-terrain mobile cranes from 25 to 200 tons, potable water tankers, vacuum units, and heavy low-bed transport trailers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Fleet Specifications & Gallery (Header omitted to prevent duplication) */}
      <FleetSection showHeader={false} />

      <CtaBand />
    </>
  );
}
