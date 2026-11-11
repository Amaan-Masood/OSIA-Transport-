import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Phone, MessageSquare, CheckCircle2, ArrowLeft, ShieldCheck, Clock } from 'lucide-react';
import { SERVICES, SITE_CONFIG } from '@/content/site';
import { buildMetadata } from '@/lib/seo';
import { Badge } from '@/components/ui/Badge';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { buildDirectServiceWhatsAppUrl } from '@/lib/whatsapp';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return buildMetadata({
    title: `${service.title} Abu Dhabi`,
    description: service.summary,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const isWater = service.category === 'water';
  const whatsappUrl = buildDirectServiceWhatsAppUrl(service.title);
  const serviceSchema = getServiceSchema(service);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/' },
    { name: service.shortTitle, url: `/services/${service.slug}/` },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <section className="bg-[#0A1B2E] text-white py-12 sm:py-16 border-b border-white/10 bg-blueprint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link
              href="/services/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8C6D6] hover:text-[#FF7A1A] uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all services</span>
            </Link>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={isWater ? 'water' : 'orange'}>
                {service.capacitySnippet}
              </Badge>
              <span className="text-xs text-[#B8C6D6] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#FF7A1A]" />
                24/7 Abu Dhabi Dispatch
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-white">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-[#B8C6D6] leading-relaxed">
              {service.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-[#0A1B2E] font-extrabold text-sm uppercase tracking-wider hover:bg-[#1FB75A] shadow-md transition-transform active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-[#0A1B2E]" />
                <span>Instant WhatsApp Quote</span>
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white border border-white/20 font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF7A1A]" />
                <span>Call Dispatch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Specs Grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-10">
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
                  Operational Overview & Standards
                </h2>
                <p className="text-sm sm:text-base text-[#52667B] leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
                  Technical Parameters
                </h3>
                <div className="border border-[#D5DFEA] rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#0A1B2E] text-white text-xs uppercase font-extrabold tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Parameter</th>
                        <th className="py-3 px-4">Specification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D5DFEA] bg-white">
                      {service.specTable.map((row, i) => (
                        <tr key={i} className="hover:bg-[#F4F7FB] transition-colors">
                          <td className="py-3 px-4 font-bold text-[#0A1B2E] bg-[#F4F7FB]/50 w-2/5">
                            {row.key}
                          </td>
                          <td className="py-3 px-4 text-[#22354A] font-medium">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Primary Applications */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
                  Common Site Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.applications.map((app, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#F4F7FB] border border-[#D5DFEA] flex items-start gap-2.5 text-xs text-[#22354A]"
                    >
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isWater ? 'text-[#1391E5]' : 'text-[#FF7A1A]'}`} />
                      <span className="font-semibold">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* HSE & Operational Safety Notice */}
              <div className="p-5 rounded-xl bg-[#0A1B2E] text-white flex items-start gap-3.5">
                <ShieldCheck className="w-6 h-6 text-[#25D366] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <strong className="text-white block text-sm">Strict HSE & Municipal Compliance</strong>
                  <p className="text-[#B8C6D6] leading-relaxed">
                    All operations are executed in full alignment with Abu Dhabi environmental, health, and transport safety regulations. Operators hold verified licenses, PPE, and third-party inspection certifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: In-page Quote Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <QuoteForm initialServiceId={service.id} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
