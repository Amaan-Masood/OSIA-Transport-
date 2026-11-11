import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Droplet, 
  Construction, 
  Waves, 
  Trash2, 
  Wrench, 
  Truck, 
  Container, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES, SITE_CONFIG } from '@/content/site';
import { SERVICE_VISUALS } from '@/content/fleetVisuals';
import { buildMetadata } from '@/lib/seo';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { buildDirectServiceWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = buildMetadata({
  title: 'Specialized Transport, Water Tankers & Crane Rental Services',
  description: 'Comprehensive transport services across Abu Dhabi: potable sweet water, non-drinking water, wastewater vacuum removal, 25T-200T mobile cranes, and heavy low-bed haulage.',
  path: '/services/',
});

const getServiceIcon = (id: string) => {
  switch (id) {
    case 'sweet-water':
      return <Droplet className="w-7 h-7 text-[#0284C7]" />;
    case 'non-drinking-water':
      return <Construction className="w-7 h-7 text-[#0284C7]" />;
    case 'salt-water':
      return <Waves className="w-7 h-7 text-[#0284C7]" />;
    case 'wastewater-drainage':
      return <Trash2 className="w-7 h-7 text-[#0284C7]" />;
    case 'crane-rental':
      return <Wrench className="w-7 h-7 text-[#0284C7]" />;
    case 'low-bed-trailer':
      return <Truck className="w-7 h-7 text-[#0284C7]" />;
    case 'flatbed-trailer':
      return <Container className="w-7 h-7 text-[#0284C7]" />;
    default:
      return <Truck className="w-7 h-7 text-[#0284C7]" />;
  }
};

export default function ServicesHubPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      
      {/* Page Header */}
      <section className="bg-[#0B1726] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="water">Core Capabilities</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white">
              Specialized Fleet &amp; Transport Services in Abu Dhabi
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Equipped with heavy Mercedes Actros water tankers, Volvo FH tractor heads, multi-axle trailers, and certified 25T–200T mobile cranes for active infrastructure sites.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const whatsappUrl = buildDirectServiceWhatsAppUrl(s.title);
              const visual = SERVICE_VISUALS[s.id];

              return (
                <Card
                  key={s.id}
                  accentTop="water"
                  className="flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all bg-white border border-[#E2E8F0] rounded-2xl"
                >
                  <div>
                    {/* Visual Header: Color-Coded Tanker Flyers / Active Truck Units / Crane Load Range */}
                    {visual ? (
                      <Link
                        href={`/services/${s.slug}/`}
                        className="relative aspect-square w-full overflow-hidden border-b border-[#E2E8F0] bg-[#0B1726] block group"
                      >
                        <Image
                          src={visual.src}
                          alt={visual.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                          className={`object-cover ${
                            s.id === 'flatbed-trailer'
                              ? 'object-[50%_75%]'
                              : s.id === 'low-bed-trailer'
                                ? 'object-[50%_55%]'
                                : 'object-center'
                          } group-hover:scale-105 transition-transform duration-300`}
                        />
                      </Link>
                    ) : (
                      <Link
                        href={`/services/${s.slug}/`}
                        className="relative aspect-square w-full bg-[#0B1726] border-b border-[#E2E8F0] p-6 flex flex-col justify-between text-white group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#38BDF8]">
                            All-Terrain &amp; Rough-Terrain Fleet
                          </span>
                          <Wrench className="w-5 h-5 text-[#38BDF8]" />
                        </div>
                        <div className="grid grid-cols-2 gap-2.5 my-auto">
                          {[
                            { cap: '25T', desc: 'Urban & MEP' },
                            { cap: '50T', desc: 'Steel & Precast' },
                            { cap: '100T', desc: 'Heavy Plant' },
                            { cap: '200T', desc: 'Infrastructure' },
                          ].map((tier) => (
                            <div
                              key={tier.cap}
                              className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#38BDF8]/40 transition-colors"
                            >
                              <div className="text-2xl font-extrabold font-display text-[#38BDF8]">
                                {tier.cap}
                              </div>
                              <div className="text-[10px] text-[#94A3B8] font-semibold uppercase tracking-wide">
                                {tier.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                          Third-Party Load Tested &bull; Certified Operators
                        </span>
                      </Link>
                    )}

                    <div className="p-6 sm:p-7 space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center border bg-[#E0F2FE] border-[#BAE6FD]">
                          {getServiceIcon(s.id)}
                        </div>
                        <Badge variant="water">
                          {s.capacitySnippet}
                        </Badge>
                      </div>

                      <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                        <Link href={`/services/${s.slug}/`} className="hover:text-[#0284C7] transition-colors">
                          {s.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {s.summary}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-[#E2E8F0]">
                        {s.features.map((f, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#0284C7]" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-[#E2E8F0] bg-[#F8FAFC]/50 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${s.slug}/`}
                      className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] hover:text-[#0284C7] transition-colors flex items-center gap-1 group"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#128C7E] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0E7064] shadow-sm transition-transform active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
