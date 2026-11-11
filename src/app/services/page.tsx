import React from 'react';
import Link from 'next/link';
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
      return <Droplet className="w-7 h-7 text-[#1391E5]" />;
    case 'non-drinking-water':
      return <Construction className="w-7 h-7 text-[#1391E5]" />;
    case 'salt-water':
      return <Waves className="w-7 h-7 text-[#1391E5]" />;
    case 'wastewater-drainage':
      return <Trash2 className="w-7 h-7 text-[#1391E5]" />;
    case 'crane-rental':
      return <Wrench className="w-7 h-7 text-[#FF7A1A]" />;
    case 'low-bed-trailer':
      return <Truck className="w-7 h-7 text-[#FF7A1A]" />;
    case 'flatbed-trailer':
      return <Container className="w-7 h-7 text-[#FF7A1A]" />;
    default:
      return <Truck className="w-7 h-7 text-[#0A1B2E]" />;
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
      <section className="bg-[#0A1B2E] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="orange">Core Capabilities</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white">
              Specialized Fleet & Transport Services in Abu Dhabi
            </h1>
            <p className="text-sm sm:text-base text-[#B8C6D6] leading-relaxed">
              Equipped with heavy Mercedes Actros water tankers, Volvo FH tractor heads, multi-axle trailers, and certified 25T–200T mobile cranes for active infrastructure sites.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const isWater = s.category === 'water';
              const whatsappUrl = buildDirectServiceWhatsAppUrl(s.title);

              return (
                <Card
                  key={s.id}
                  accentTop={isWater ? 'water' : 'orange'}
                  className="flex flex-col justify-between hover:shadow-xl transition-shadow bg-white"
                >
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-xl bg-[#F4F7FB] border border-[#D5DFEA] flex items-center justify-center">
                        {getServiceIcon(s.id)}
                      </div>
                      <Badge variant={isWater ? 'water' : 'orange'}>
                        {s.capacitySnippet}
                      </Badge>
                    </div>

                    <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
                      <Link href={`/services/${s.slug}/`} className="hover:text-[#FF7A1A] transition-colors">
                        {s.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#52667B] leading-relaxed">
                      {s.summary}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-[#D5DFEA]/60">
                      {s.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#22354A]">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isWater ? 'text-[#1391E5]' : 'text-[#FF7A1A]'}`} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-[#D5DFEA]/50 bg-[#F4F7FB]/50 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${s.slug}/`}
                      className="text-xs font-extrabold uppercase tracking-wider text-[#0A1B2E] hover:text-[#FF7A1A] transition-colors flex items-center gap-1"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] text-[#0A1B2E] font-extrabold text-xs uppercase tracking-wider hover:bg-[#1FB75A] shadow-sm transition-transform active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-[#0A1B2E]" />
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
