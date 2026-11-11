import React from 'react';
import Link from 'next/link';
import { Droplet, Construction, Wrench, Truck, ArrowRight, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/content/site';

const HIGHLIGHT_SERVICES = [
  {
    icon: <Droplet className="w-6 h-6 text-[#0E9AD2]" />,
    title: 'Drinking Sweet Water Supply',
    slug: 'sweet-water-supply-abu-dhabi',
    category: 'Water Logistics',
    capacity: 'Potable Water Tankers',
    accent: 'water' as const,
    desc: 'Hygienic potable water tankers for construction sites, labor camps, and commercial facilities with 24/7 emergency dispatch.',
  },
  {
    icon: <Construction className="w-6 h-6 text-[#0E9AD2]" />,
    title: 'Non-Drinking Site Water',
    slug: 'non-drinking-water-supply-abu-dhabi',
    category: 'Civil Infrastructure',
    capacity: 'Compaction & Dust Control',
    accent: 'water' as const,
    desc: 'High-volume spray bar tankers for sub-base compaction, dust suppression on haul roads, and machinery site washing.',
  },
  {
    icon: <Wrench className="w-6 h-6 text-[#EB5E1A]" />,
    title: 'Mobile Crane Rental (25T – 200T)',
    slug: 'mobile-crane-rental-abu-dhabi',
    category: 'Heavy Lifting',
    capacity: '25, 50, 100, 200 Ton Range',
    accent: 'orange' as const,
    desc: 'All-terrain inspected mobile cranes with third-party certified operators for structural steel, HVAC, and precast placement.',
  },
  {
    icon: <Truck className="w-6 h-6 text-[#EB5E1A]" />,
    title: 'Low Bed & Flatbed Haulage',
    slug: 'low-bed-trailer-abu-dhabi',
    category: 'Heavy Equipment Transport',
    capacity: 'Excavators & Oversized Cargo',
    accent: 'orange' as const,
    desc: 'Heavy multi-axle low beds and 40ft/50ft flatbed trailers powered by Volvo FH tractor units for machinery and steel transit.',
  },
];

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F4F7FB] border-b border-[#D5DFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="navy">Core Fleet Capabilities</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0A1B2E]">
              Specialized Transport & Equipment
            </h2>
            <p className="text-sm sm:text-base text-[#52667B]">
              Dedicated fleet solutions tailored for civil contractors, oil & gas sites, and industrial facilities in Abu Dhabi.
            </p>
          </div>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#0A1B2E] hover:text-[#EB5E1A] transition-colors group shrink-0"
          >
            <span>Explore All 7 Services Hub</span>
            <ArrowRight className="w-4 h-4 text-[#EB5E1A] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHT_SERVICES.map((s, i) => (
            <Card
              key={i}
              accentTop={s.accent}
              className="flex flex-col justify-between bg-white hover:shadow-lg transition-shadow"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F4F7FB] border border-[#D5DFEA] flex items-center justify-center">
                    {s.icon}
                  </div>
                  <Badge variant={s.accent}>{s.capacity}</Badge>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#52667B] block">
                    {s.category}
                  </span>
                  <h3 className="text-lg font-bold font-display uppercase tracking-tight text-[#0A1B2E] mt-1">
                    <Link href={`/services/${s.slug}/`} className="hover:text-[#EB5E1A] transition-colors">
                      {s.title}
                    </Link>
                  </h3>
                </div>

                <p className="text-xs text-[#52667B] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-[#D5DFEA]/50 bg-[#F4F7FB]/50 flex items-center justify-between">
                <Link
                  href={`/services/${s.slug}/`}
                  className="text-xs font-bold uppercase tracking-wider text-[#0A1B2E] hover:text-[#EB5E1A] inline-flex items-center gap-1"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(`Hello OSIA Transport! I need a quote for ${s.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-extrabold uppercase text-[#25D366] hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Hub CTA */}
        <div className="text-center pt-10">
          <Link
            href="/services/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#0A1B2E] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#14304E] transition-colors shadow-sm"
          >
            <span>View Full Service Catalog (7 Solutions)</span>
            <ArrowRight className="w-4 h-4 text-[#EB5E1A]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
