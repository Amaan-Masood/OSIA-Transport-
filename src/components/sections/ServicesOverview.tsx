import React from 'react';
import Link from 'next/link';
import { Droplet, Construction, Wrench, Truck, ArrowRight, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/content/site';

const HIGHLIGHT_SERVICES = [
  {
    icon: <Droplet className="w-6 h-6 text-[#0284C7]" />,
    iconBg: 'bg-[#E0F2FE]',
    title: 'Drinking Sweet Water Supply',
    slug: 'sweet-water-supply-abu-dhabi',
    category: 'Water Logistics',
    capacity: 'Potable Water Tankers',
    accent: 'water' as const,
    desc: 'Hygienic potable water tankers for construction sites, labor camps, and commercial facilities with 24/7 emergency dispatch.',
  },
  {
    icon: <Construction className="w-6 h-6 text-[#0284C7]" />,
    iconBg: 'bg-[#E0F2FE]',
    title: 'Non-Drinking Site Water',
    slug: 'non-drinking-water-supply-abu-dhabi',
    category: 'Civil Infrastructure',
    capacity: 'Compaction & Dust Control',
    accent: 'water' as const,
    desc: 'High-volume spray bar tankers for sub-base compaction, dust suppression on haul roads, and machinery site washing.',
  },
  {
    icon: <Wrench className="w-6 h-6 text-[#0284C7]" />,
    iconBg: 'bg-[#E0F2FE]',
    title: 'Mobile Crane Rental (25T – 200T)',
    slug: 'mobile-crane-rental-abu-dhabi',
    category: 'Heavy Lifting',
    capacity: '25, 50, 100, 200 Ton Range',
    accent: 'water' as const,
    desc: 'All-terrain inspected mobile cranes with third-party certified operators for structural steel, HVAC, and precast placement.',
  },
  {
    icon: <Truck className="w-6 h-6 text-[#0284C7]" />,
    iconBg: 'bg-[#E0F2FE]',
    title: 'Low Bed & Flatbed Haulage',
    slug: 'low-bed-trailer-abu-dhabi',
    category: 'Heavy Equipment Transport',
    capacity: 'Excavators & Oversized Cargo',
    accent: 'water' as const,
    desc: 'Heavy multi-axle low beds and 40ft/50ft flatbed trailers powered by Volvo FH tractor units for machinery and steel transit.',
  },
];

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="navy">Core Fleet Capabilities</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0F172A]">
              Specialized Transport &amp; Equipment
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              Dedicated fleet solutions tailored for civil contractors, oil &amp; gas sites, and industrial facilities in Abu Dhabi.
            </p>
          </div>
          <div>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0284C7] hover:text-[#0369A1] group transition-colors"
            >
              <span>Explore All 7 Services Hub</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHT_SERVICES.map((s, idx) => (
            <Card
              key={idx}
              accentTop={s.accent}
              variant="surface"
              className="flex flex-col justify-between p-6 sm:p-7 group bg-white border border-[#E2E8F0] shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all rounded-2xl"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl ${s.iconBg} flex items-center justify-center transition-transform group-hover:scale-105`}>
                  {s.icon}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                    {s.category}
                  </span>
                  <h3 className="text-lg font-bold font-display uppercase tracking-tight text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-snug">
                    {s.title}
                  </h3>
                </div>
                <div className="text-xs font-semibold text-[#0369A1] bg-[#E0F2FE] px-2.5 py-1 rounded-md inline-block">
                  {s.capacity}
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                  {s.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                <Link
                  href={`/services/${s.slug}/`}
                  className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] hover:text-[#0284C7] transition-colors flex items-center gap-1 group/link"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(`Hello OSIA Transport! I am inquiring about ${s.title} in Abu Dhabi.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp quote for ${s.title}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#16A34A] hover:text-[#15803D] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse shrink-0"></span>
            <p className="text-xs sm:text-sm text-[#334155]">
              <strong>Also Available:</strong> Salt Water Supply, Wastewater &amp; Septic Tank Drainage, and Heavy Multi-Axle Flatbed Transit across Abu Dhabi.
            </p>
          </div>
          <Link
            href="/services/"
            className="text-xs font-extrabold uppercase tracking-wider text-[#0284C7] hover:text-[#0369A1] shrink-0"
          >
            View Full Service Catalog (7 Solutions) →
          </Link>
        </div>
      </div>
    </section>
  );
};
