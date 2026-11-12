import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, ShieldCheck, Phone, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES, SITE_CONFIG } from '@/content/site';
import { SERVICE_VISUALS } from '@/content/fleetVisuals';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Badge } from '@/components/ui/Badge';
import { buildDirectServiceWhatsAppUrl } from '@/lib/whatsapp';
import { JsonLd } from '@/components/seo/JsonLd';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

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
      title: 'Service Not Found | OSIA Transport Abu Dhabi',
    };
  }

  return buildMetadata({
    title: `${service.title} | Abu Dhabi 24/7 Dispatch`,
    description: service.summary,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }


  const serviceVisual = SERVICE_VISUALS[service.id];
  const whatsappUrl = buildDirectServiceWhatsAppUrl(service.title);

  const serviceSchema = getServiceSchema(service);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/' },
    { name: service.title, url: `/services/${service.slug}/` },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <section className="bg-[#0B1726] text-white py-8 sm:py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-3 sm:mb-4">
            <Link
              href="/services/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#94A3B8] hover:text-[#38BDF8] uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all services</span>
            </Link>
          </div>

          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="water">
                {service.capacitySnippet}
              </Badge>
              <span className="text-xs text-[#94A3B8] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                24/7 Abu Dhabi Dispatch
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-white">
              {service.title}
            </h1>

            <p className="text-sm sm:text-lg text-[#94A3B8] leading-relaxed">
              {service.summary}
            </p>

            {/* Hidden on mobile phones (< md) because sticky MobileBottomBar handles Call & WhatsApp cleanly */}
            <div className="hidden md:flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E7064] text-white font-extrabold text-sm uppercase tracking-wider hover:bg-[#0E7064] shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white text-white" />
                <span>Instant WhatsApp Quote</span>
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white border border-white/20 font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#38BDF8]" />
                <span>Call Dispatch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Specs Grid */}
      <section className="py-8 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content Column (Mobile puts visual showcase first cleanly) */}
            <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10">
              {/* Overview */}
              <div className="order-2 lg:order-1 space-y-4">
                <h2 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                  Operational Overview &amp; Standards
                </h2>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Verified Service Visual Showcase */}
              {serviceVisual && (
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                      Verified Fleet &amp; Dispatch Visual
                    </h3>
                    <Link
                      href="/fleet/"
                      className="text-xs font-extrabold uppercase tracking-wider text-[#0369A1] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Full Fleet Library</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="p-3 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
                    <div
                      className={`relative w-full mx-auto rounded-xl overflow-hidden bg-[#0B1726] ${
                        serviceVisual.aspect === 'portrait'
                          ? 'aspect-[6/7] max-w-md'
                          : 'aspect-square max-w-lg'
                      }`}
                    >
                      <Image
                        src={serviceVisual.src}
                        alt={serviceVisual.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 520px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="pt-3 flex items-center justify-between gap-2 text-xs text-[#475569] font-semibold">
                      <span>{serviceVisual.label}</span>
                      <span className="text-[#0369A1] uppercase font-bold">Abu Dhabi Active Fleet</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                  Technical Parameters
                </h3>
                <div className="border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#0B1726] text-white text-xs uppercase font-extrabold tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4">Parameter</th>
                        <th className="py-3.5 px-4">Specification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] bg-white">
                      {service.specTable.map((row, i) => (
                        <tr key={i} className="hover:bg-[#F8FAFC] transition-colors">
                          <td className="py-3.5 px-4 font-bold text-[#0F172A] bg-[#F8FAFC]/50 w-2/5">
                            {row.key}
                          </td>
                          <td className="py-3.5 px-4 text-[#334155] font-medium">
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
                <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                  Common Site Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.applications.map((app, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3 text-xs text-[#334155]"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#0369A1]" />
                      <span className="font-semibold">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* HSE & Operational Safety Notice */}
              <div className="p-6 rounded-2xl bg-[#0B1726] text-white flex items-start gap-4 shadow-xl">
                <ShieldCheck className="w-6 h-6 text-[#22C55E] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <strong className="text-white block text-sm">Strict HSE &amp; Municipal Compliance</strong>
                  <p className="text-[#94A3B8] leading-relaxed">
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
