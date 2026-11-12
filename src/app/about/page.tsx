import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Award, CheckCircle2, ArrowRight } from 'lucide-react';
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
      <section className="py-10 sm:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0369A1]">
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

            {/* Right Brand Showcase & Operational Snapshot (Shown first on mobile) */}
            <div className="order-1 lg:order-2 lg:col-span-5 space-y-5 sm:space-y-6">
              {/* Official OSIA Twin-Tanker Brand Card */}
              <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
                <div className="relative aspect-[16/10] w-full bg-white">
                  <Image
                    src="/images/logo-twin-banner.webp"
                    alt="OSIA Transport LLC twin tanker showcase - Reliable. Safe. On Time."
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="px-5 py-3 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#0F172A]">
                  <span>Official Fleet Identity</span>
                  <span className="text-[#0369A1]">24/7 Abu Dhabi Dispatch</span>
                </div>
              </div>

              {/* Quick Facts Card */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
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
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] border-[#BAE6FD] flex items-center justify-center text-[#0369A1]">
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
              <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0369A1]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                Our Mission
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                {SITE_CONFIG.about.mission.map((m, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0 mt-0.5" />
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0369A1]">
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

      {/* Fleet Maintenance & Mechanical Readiness Proof */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0369A1]">
                Inspection &amp; Fleet Readiness
              </span>
              <h2 className="text-3xl font-extrabold font-display uppercase text-[#0F172A]">
                Engineered &amp; Inspected Before Every Dispatch
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                From OEM filtration and clean heavy-duty chassis frames to color-coded municipal tanker fleets, every OSIA vehicle undergoes routine preventive checks.
              </p>
            </div>
            <Link
              href="/fleet/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B1726] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#0369A1] transition-colors self-start md:self-auto"
            >
              <span>Browse Fleet Library</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:grid md:grid-cols-3 md:gap-6">
            <div className="min-w-[82%] sm:min-w-[55%] md:min-w-0 snap-start shrink-0 bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-shadow">
              <div className="relative aspect-square w-full bg-[#0B1726]">
                <Image
                  src="/images/fleet/volvo-chassis-inspection.webp"
                  alt="Clean inspected Volvo chassis rail, bolts and OEM filter"
                  fill
                  sizes="(max-width: 768px) 82vw, 400px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0369A1] block">
                  Mechanical Integrity
                </span>
                <h3 className="text-base font-bold font-display uppercase text-[#0F172A]">
                  OEM Filter &amp; Frame Care
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Preventive servicing, clean hydraulic lines, and factory-torque chassis assemblies ready for demanding site loads.
                </p>
              </div>
            </div>

            <div className="min-w-[82%] sm:min-w-[55%] md:min-w-0 snap-start shrink-0 bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-shadow">
              <div className="relative aspect-square w-full bg-[#0B1726]">
                <Image
                  src="/images/fleet/volvo-fh500-white-led.webp"
                  alt="Volvo FH 500 Globetrotter heavy haulage prime mover"
                  fill
                  sizes="(max-width: 768px) 82vw, 400px"
                  className="object-cover object-[50%_75%]"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0369A1] block">
                  Heavy Prime Movers
                </span>
                <h3 className="text-base font-bold font-display uppercase text-[#0F172A]">
                  Volvo FH 500 Tractor Fleet
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  High-torque Globetrotter tractors dedicated to heavy flatbed steel runs and multi-axle low-bed mobilization.
                </p>
              </div>
            </div>

            <div className="min-w-[82%] sm:min-w-[55%] md:min-w-0 snap-start shrink-0 bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-shadow">
              <div className="relative aspect-square w-full bg-[#0B1726]">
                <Image
                  src="/images/fleet/mercedes-actros-water-tanker.webp"
                  alt="Mercedes-Benz Actros 3341 water supply tanker"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0369A1] block">
                  Color-Coded Tankers
                </span>
                <h3 className="text-base font-bold font-display uppercase text-[#0F172A]">
                  Certified Water &amp; Vacuum Units
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Segregated blue potable, green non-drinking, and orange vacuum tankers compliant with Abu Dhabi HSE protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0369A1]">
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
                <Award className="w-5 h-5 text-[#0369A1] shrink-0" />
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
