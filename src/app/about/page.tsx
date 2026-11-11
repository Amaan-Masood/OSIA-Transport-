import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Target, Eye, Award, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';
import { buildMetadata } from '@/lib/seo';
import { Badge } from '@/components/ui/Badge';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'About OSIA Transport LLC SPC | Mission, Vision & Values',
  description: 'Learn about OSIA Transport LLC SPC, a leading transport, water supply, and mobile crane rental company based in Abu Dhabi, United Arab Emirates.',
  path: '/about/',
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about/' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <section className="bg-[#0B1726] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="water">Company Profile</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white">
              About OSIA Transport LLC SPC
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Bio / Overview */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
                Leading Transport &amp; Equipment Rental
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-[#0F172A]">
                Reliable Transport &amp; Water Solutions Across Abu Dhabi
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  OSIA Transport LLC SPC is a premier transport and equipment rental company based in Abu Dhabi, United Arab Emirates. We specialize in providing integrated transport, water supply, heavy lifting, and logistics solutions for construction companies, industrial facilities, infrastructure projects, oil &amp; gas companies, and government organizations.
                </p>
                <p>
                  Backed by experienced professionals and a well-maintained fleet of Mercedes Actros tankers, Volvo FH heavy tractors, and certified all-terrain cranes, we continuously invest in modern equipment and operational excellence to meet the growing demands of the UAE market.
                </p>
                <p>
                  We understand the importance of reliable and timely service, and we are fully committed to maintaining the highest standards in safety, efficiency, and professionalism on every project.
                </p>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold font-display uppercase tracking-tight text-[#0F172A] border-b border-[#E2E8F0] pb-3">
                Operational Snapshot
              </h3>
              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-xs font-bold text-[#64748B] uppercase block">Legal Name</span>
                  <strong className="text-[#0F172A] text-base">{SITE_CONFIG.legalName}</strong>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#64748B] uppercase block">Operations Center</span>
                  <strong className="text-[#0F172A]">{SITE_CONFIG.location}</strong>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#64748B] uppercase block">Customer Support</span>
                  <strong className="text-[#0F172A]">{SITE_CONFIG.hours}</strong>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#64748B] uppercase block">Fleet Focus</span>
                  <strong className="text-[#0F172A]">Potable Water, Wastewater, Cranes &amp; Haulage</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] border-[#BAE6FD] flex items-center justify-center text-[#0284C7]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                Our Vision
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                {SITE_CONFIG.about.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                Our Mission
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                {SITE_CONFIG.about.mission.map((m, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold font-display uppercase text-[#0F172A]">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_CONFIG.about.values.map((v, i) => (
              <div
                key={i}
                className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:shadow-md transition-all space-y-2"
              >
                <div className="text-base font-extrabold font-display uppercase text-[#0F172A]">
                  {v.title}
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
              Market Coverage
            </span>
            <h2 className="text-3xl font-extrabold font-display uppercase text-[#0F172A]">
              Key Industry Sectors We Support
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SITE_CONFIG.about.sectors.map((sec, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow flex items-center gap-3.5 text-xs sm:text-sm font-bold text-[#0F172A]"
              >
                <Award className="w-5 h-5 text-[#0284C7] shrink-0" />
                <span>{sec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
