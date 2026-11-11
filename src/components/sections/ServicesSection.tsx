import React from 'react';
import Link from 'next/link';
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
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { buildDirectServiceWhatsAppUrl } from '@/lib/whatsapp';

// Icon mapper
const getServiceIcon = (id: string) => {
  switch (id) {
    case 'sweet-water':
      return <Droplet className="w-6 h-6 text-[#1391E5]" />;
    case 'non-drinking-water':
      return <Construction className="w-6 h-6 text-[#1391E5]" />;
    case 'salt-water':
      return <Waves className="w-6 h-6 text-[#1391E5]" />;
    case 'wastewater-drainage':
      return <Trash2 className="w-6 h-6 text-[#1391E5]" />;
    case 'crane-rental':
      return <Wrench className="w-6 h-6 text-[#FF7A1A]" />;
    case 'low-bed-trailer':
      return <Truck className="w-6 h-6 text-[#FF7A1A]" />;
    case 'flatbed-trailer':
      return <Container className="w-6 h-6 text-[#FF7A1A]" />;
    default:
      return <Truck className="w-6 h-6 text-[#0A1B2E]" />;
  }
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-[#F4F7FB] border-b border-[#D5DFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="navy">Core Fleet Capabilities</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0A1B2E]">
            Specialized Transport & Equipment Services
          </h2>
          <p className="text-sm sm:text-base text-[#52667B] leading-relaxed">
            From potable water tankers and septic vacuum units to 200-ton mobile cranes and heavy low-bed machinery haulage across Abu Dhabi and all Emirates.
          </p>
        </div>

        {/* 7 Services Grid + 1 Custom Logistics Consultation Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const isWater = service.category === 'water';
            const whatsappUrl = buildDirectServiceWhatsAppUrl(service.title);

            return (
              <Card
                key={service.id}
                accentTop={isWater ? 'water' : 'orange'}
                className="flex flex-col justify-between hover:shadow-xl transition-shadow bg-white"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Icon & Category Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#F4F7FB] flex items-center justify-center border border-[#D5DFEA]">
                      {getServiceIcon(service.id)}
                    </div>
                    <Badge variant={isWater ? 'water' : 'orange'}>
                      {service.capacitySnippet}
                    </Badge>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
                      <Link href={`/services/${service.slug}/`} className="hover:text-[#FF7A1A] transition-colors">
                        {service.title}
                      </Link>
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#52667B] leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Features Bullets */}
                  <div className="space-y-1.5 pt-2 border-t border-[#D5DFEA]/60">
                    {service.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#22354A]">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isWater ? 'text-[#1391E5]' : 'text-[#FF7A1A]'}`} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 pb-6 pt-3 border-t border-[#D5DFEA]/50 bg-[#F4F7FB]/50 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-xs font-extrabold uppercase tracking-wider text-[#0A1B2E] hover:text-[#FF7A1A] transition-colors flex items-center gap-1"
                  >
                    <span>Full Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] text-[#0A1B2E] font-extrabold text-xs uppercase tracking-wider hover:bg-[#1FB75A] shadow-sm transition-transform active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-[#0A1B2E]" />
                    <span>Quote</span>
                  </a>
                </div>
              </Card>
            );
          })}

          {/* 8th Card: Custom Site Consultation & Logistics */}
          <Card
            accentTop="none"
            variant="dark"
            className="flex flex-col justify-between bg-blueprint p-6 sm:p-7 border border-white/10"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#FF7A1A]">
                <Truck className="w-6 h-6" />
              </div>
              <Badge variant="orange">Custom Logistics</Badge>
              <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white">
                Multi-Service Site Contract?
              </h3>
              <p className="text-xs sm:text-sm text-[#B8C6D6] leading-relaxed">
                Need combined drinking water supply, septic dewatering, and mobile crane standby for your camp or infrastructure site?
              </p>
              <ul className="space-y-1.5 text-xs text-[#B8C6D6] pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span>
                  Consolidated monthly billing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1391E5]"></span>
                  Dedicated on-call dispatch coordinator
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
                  HSE documentation and safety packs
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello OSIA Transport! We require a multi-service contract quotation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FF7A1A] text-[#0A1B2E] font-extrabold text-xs uppercase tracking-wider hover:bg-[#E8640A] transition-colors"
              >
                <span>Discuss Project Contract</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
