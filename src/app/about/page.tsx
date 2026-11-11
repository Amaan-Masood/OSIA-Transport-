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
      <section className="bg-[#0A1B2E] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="orange">Company Profile</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white">
              About OSIA Transport LLC SPC
            </h1>
            <p className="text-base sm:text-lg text-[#B8C6D6] leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Bio / Overview */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D5DFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A1A]">
                Leading Transport & Equipment Rental
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-[#0A1B2E]">
                Reliable Transport & Water Solutions Across Abu Dhabi
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#52667B] leading-relaxed">
                <p>
                  OSIA Transport LLC SPC is a premier transport and equipment rental company based in Abu Dhabi, United Arab Emirates. We specialize in providing integrated transport, water supply, heavy lifting, and logistics solutions for construction companies, industrial facilities, infrastructure projects, oil & gas companies, and government organizations.
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
            <div className="lg:col-span-5 bg-[#F4F7FB] border border-[#D5DFEA] rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold font-display uppercase tracking-tight text-[#0A1B2E] border-b border-[#D5DFEA] pb-3">
                Operational Snapshot
              </h3>
              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-xs font-bold text-[#52667B] uppercase block">Legal Name</span>
                  <strong className="text-[#0A1B2E] text-base">{SITE_CONFIG.legalName}</strong>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#52667B] uppercase block">Operations Center</span>
                  <strong className="text-[#0A1B2E]">{SITE_CONFIG.location}</strong>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#52667B] uppercase block">Customer Support</span>
                  <strong className="text-[#0A1B2E]">{SITE_CONFIG.hours}</strong>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#52667B] uppercase block">Fleet Focus</span>
                  <strong className="text-[#0A1B2E]">Potable Water, Wastewater, Cranes & Haulage</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-14 sm:py-20 bg-[#F4F7FB] border-b border-[#D5DFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-[#D5DFEA] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] border border-[#FF7A1A]/30 flex items-center justify-center text-[#FF7A1A]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
                Our Vision
              </h3>
              <p className="text-sm text-[#52667B] leading-relaxed">
                {SITE_CONFIG.about.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white border border-[#D5DFEA] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EDF3FA] border border-[#1391E5]/30 flex items-center justify-center text-[#1391E5]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
                Our Mission
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#22354A]">
                {SITE_CONFIG.about.mission.map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1391E5] shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D5DFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A1A]">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold font-display uppercase text-[#0A1B2E]">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_CONFIG.about.values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#F4F7FB] border border-[#D5DFEA] space-y-2"
              >
                <div className="text-sm font-extrabold font-display uppercase text-[#0A1B2E]">
                  {v.title}
                </div>
                <p className="text-xs text-[#52667B] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-14 sm:py-20 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1391E5]">
              Market Coverage
            </span>
            <h2 className="text-3xl font-extrabold font-display uppercase text-[#0A1B2E]">
              Key Industry Sectors We Support
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SITE_CONFIG.about.sectors.map((sec, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-[#D5DFEA] flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0A1B2E]"
              >
                <Award className="w-5 h-5 text-[#FF7A1A] shrink-0" />
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
