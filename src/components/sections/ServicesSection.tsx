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
      return <Droplet className="w-6 h-6 text-[#0284C7]" />;
    case 'non-drinking-water':
      return <Construction className="w-6 h-6 text-[#0284C7]" />;
    case 'salt-water':
      return <Waves className="w-6 h-6 text-[#0284C7]" />;
    case 'wastewater-drainage':
      return <Trash2 className="w-6 h-6 text-[#0284C7]" />;
    case 'crane-rental':
      return <Wrench className="w-6 h-6 text-[#F97316]" />;
    case 'low-bed-trailer':
      return <Truck className="w-6 h-6 text-[#F97316]" />;
    case 'flatbed-trailer':
      return <Container className="w-6 h-6 text-[#F97316]" />;
    default:
      return <Truck className="w-6 h-6 text-[#0B1726]" />;
  }
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="navy">Core Fleet Capabilities</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0F172A]">
            Specialized Transport &amp; Equipment Services
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
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
                className="flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all bg-white border border-[#E2E8F0] rounded-2xl"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Icon & Category Indicator */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${isWater ? 'bg-[#E0F2FE] border-[#BAE6FD]' : 'bg-[#FFF7ED] border-[#FFEDD5]'}`}>
                      {getServiceIcon(service.id)}
                    </div>
                    <Badge variant={isWater ? 'water' : 'orange'}>
                      {service.capacitySnippet}
                    </Badge>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                      <Link href={`/services/${service.slug}/`} className="hover:text-[#0284C7] transition-colors">
                        {service.title}
                      </Link>
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Features Bullets */}
                  <div className="space-y-2 pt-3 border-t border-[#E2E8F0]">
                    {service.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isWater ? 'text-[#0284C7]' : 'text-[#F97316]'}`} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 pb-6 pt-4 border-t border-[#E2E8F0] bg-[#F8FAFC]/50 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] hover:text-[#0284C7] transition-colors flex items-center gap-1 group"
                  >
                    <span>Full Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#22C55E] text-[#0B1726] font-extrabold text-xs uppercase tracking-wider hover:bg-[#16A34A] shadow-sm transition-transform active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-[#0B1726]" />
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
            className="flex flex-col justify-between bg-[#0B1726] p-6 sm:p-7 border border-white/10 rounded-2xl shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#F97316]">
                <Truck className="w-6 h-6" />
              </div>
              <Badge variant="orange">Custom Logistics</Badge>
              <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white">
                Multi-Service Site Contract?
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Need combined drinking water supply, septic dewatering, and mobile crane standby for your camp or infrastructure site?
              </p>
              <ul className="space-y-2 text-xs text-[#94A3B8] pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                  Consolidated monthly billing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>
                  Dedicated on-call dispatch coordinator
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                  HSE documentation and safety packs
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello OSIA Transport! We require a multi-service contract quotation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F97316] text-[#0B1726] font-extrabold text-xs uppercase tracking-wider hover:bg-[#EA580C] transition-all shadow-md active:scale-95"
              >
                <span>Discuss Project Contract</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
