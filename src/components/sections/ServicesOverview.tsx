import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/content/site';

const HIGHLIGHT_SERVICES = [
  {
    image: '/images/equipment/original-water-tanker.webp',
    alt: 'Stainless steel sweet potable water tanker semi-truck in Abu Dhabi',
    objectPosition: 'object-center',
    title: 'Drinking Sweet Water Supply',
    slug: 'sweet-water-supply-abu-dhabi',
    category: 'Water Logistics',
    capacity: 'Potable Water Tankers',
    desc: 'Hygienic potable water tankers for construction sites, labor camps, and commercial facilities with 24/7 emergency dispatch.',
  },
  {
    image: '/images/equipment/site-water.webp',
    alt: 'Multi-axle construction site water tanker for compaction and dust control',
    objectPosition: 'object-center',
    title: 'Non-Drinking Site Water',
    slug: 'non-drinking-water-supply-abu-dhabi',
    category: 'Civil Infrastructure',
    capacity: 'Compaction & Dust Control',
    desc: 'High-volume spray bar tankers for sub-base compaction, dust suppression on haul roads, and machinery site washing.',
  },
  {
    image: '/images/equipment/mobile-crane.webp',
    alt: '25T to 200T hydraulic telescopic mobile crane ready for Abu Dhabi lifting',
    objectPosition: 'object-center',
    title: 'Mobile Crane Rental (25T – 200T)',
    slug: 'mobile-crane-rental-abu-dhabi',
    category: 'Heavy Lifting',
    capacity: '25, 50, 100, 200 Ton Range',
    desc: 'All-terrain inspected mobile cranes with third-party certified operators for structural steel, HVAC, and precast placement.',
  },
  {
    image: '/images/equipment/low-loader.webp',
    alt: 'Multi-axle heavy low-bed transport unit for industrial equipment haulage',
    objectPosition: 'object-center',
    title: 'Low Bed & Flatbed Haulage',
    slug: 'low-bed-trailer-abu-dhabi',
    category: 'Heavy Equipment Transport',
    capacity: 'Excavators & Oversized Cargo',
    desc: 'Heavy multi-axle low beds and 40ft/50ft flatbed trailers powered by Volvo FH tractor units for machinery and steel transit.',
  },
];

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="navy">Core Fleet Capabilities</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0F172A]">
              Specialized Transport &amp; Equipment
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Dedicated fleet solutions tailored for civil contractors, oil &amp; gas sites, and industrial facilities in Abu Dhabi.
            </p>
          </div>
          <div>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0369A1] hover:text-[#0369A1] group transition-colors"
            >
              <span className="border-b border-transparent group-hover:border-[#0369A1] transition-colors">
                Explore all services
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHT_SERVICES.map((s) => (
            <Card
              key={s.slug}
              accentTop="none"
              variant="surface"
              className="flex flex-col justify-between group hover:-translate-y-0.5 rounded-2xl"
            >
              <div>
                <Link
                  href={`/services/${s.slug}/`}
                  className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E2E8F0] bg-[#0B1726] block"
                >
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                    className={`object-cover ${s.objectPosition} transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]`}
                  />
                </Link>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                      {s.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold font-body tracking-tight text-[#0F172A] group-hover:text-[#0369A1] transition-colors leading-snug min-h-[2.75rem]">
                    <Link href={`/services/${s.slug}/`}>{s.title}</Link>
                  </h3>
                  <div className="text-[11px] font-bold uppercase tracking-wide text-[#0369A1] bg-[#E0F2FE]/80 px-2.5 py-1 rounded-md inline-block tabular-nums">
                    {s.capacity}
                  </div>
                  <p className="text-sm text-text-main leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 py-4 border-t border-[#E2E8F0] bg-[#F8FAFC]/60 flex items-center justify-between">
                <Link
                  href={`/services/${s.slug}/`}
                  className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] hover:text-[#0369A1] transition-colors flex items-center gap-1 group/link"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(`Hello OSIA Transport! I am inquiring about ${s.title} in Abu Dhabi.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp quote for ${s.title}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0E7064] hover:text-[#0E7064] transition-colors active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0E7064] shrink-0"></span>
            <p className="text-xs sm:text-sm text-[#334155]">
              <strong>Also Available:</strong> Salt Water Supply, Wastewater &amp; Septic Tank Drainage, and Heavy Multi-Axle Flatbed Transit across Abu Dhabi.
            </p>
          </div>
          <Link
            href="/services/"
            className="text-xs font-extrabold uppercase tracking-wider text-[#0369A1] hover:text-[#0369A1] shrink-0 transition-colors"
          >
            View Full Service Catalog (7 Solutions) →
          </Link>
        </div>
      </div>
    </section>
  );
};
