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
import { SERVICES } from '@/content/site';
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
      return <Droplet className="w-7 h-7 text-[#0369A1]" />;
    case 'non-drinking-water':
      return <Construction className="w-7 h-7 text-[#0369A1]" />;
    case 'salt-water':
      return <Waves className="w-7 h-7 text-[#0369A1]" />;
    case 'wastewater-drainage':
      return <Trash2 className="w-7 h-7 text-[#0369A1]" />;
    case 'crane-rental':
      return <Wrench className="w-7 h-7 text-[#0369A1]" />;
    case 'low-bed-trailer':
      return <Truck className="w-7 h-7 text-[#0369A1]" />;
    case 'flatbed-trailer':
      return <Container className="w-7 h-7 text-[#0369A1]" />;
    default:
      return <Truck className="w-7 h-7 text-[#0369A1]" />;
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
                  className="flex flex-col justify-between group hover:-translate-y-0.5 bg-white border border-[#E2E8F0] rounded-2xl"
                >
                  <div>
                    {/* Visual Header: Clean Equipment Photography */}
                    {visual && (
                      <Link
                        href={`/services/${s.slug}/`}
                        className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#E2E8F0] bg-[#0B1726] block"
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
                          } transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]`}
                        />
                      </Link>
                    )}

                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-2 text-[#0369A1]">
                          {getServiceIcon(s.id)}
                        </span>
                        <Badge variant="water">
                          {s.capacitySnippet}
                        </Badge>
                      </div>

                      <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#0F172A] min-h-[3.25rem]">
                        <Link href={`/services/${s.slug}/`} className="hover:text-[#0369A1] transition-colors">
                          {s.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {s.summary}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-[#E2E8F0]">
                        {s.features.map((f, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#0369A1]" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-[#E2E8F0] bg-[#F8FAFC]/50 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${s.slug}/`}
                      className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] hover:text-[#0369A1] transition-colors flex items-center gap-1 group"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0E7064] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0E7064] shadow-sm transition-transform active:scale-95"
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
