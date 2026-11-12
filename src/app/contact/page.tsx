import React from 'react';
import { Metadata } from 'next';
import { Phone, Mail, Clock, MapPin, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { buildMetadata } from '@/lib/seo';
import { Badge } from '@/components/ui/Badge';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Contact OSIA Transport LLC SPC | 24/7 Abu Dhabi Dispatch',
  description: `Reach OSIA Transport operations desk in Abu Dhabi: telephone hotline ${SITE_CONFIG.phoneDisplay}, instant WhatsApp dispatch, and official email inquiries.`,
  path: '/contact/',
});

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact/' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <section className="bg-[#0B1726] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="water">Operations &amp; Dispatch</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white">
              Contact OSIA Transport LLC SPC
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              24/7 phone and WhatsApp dispatch for immediate water supply, mobile cranes, and heavy haulage across Abu Dhabi and all UAE Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0B1726] text-white p-7 sm:p-8 rounded-2xl shadow-xl space-y-6 border border-white/10">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">
                    Direct Hotline
                  </span>
                  <h2 className="text-2xl font-bold font-display uppercase text-white mt-1">
                    Reach Our Dispatch Desk
                  </h2>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#94A3B8] uppercase font-bold block">
                        Telephone
                      </span>
                      <a href={SITE_CONFIG.phoneHref} className="text-lg font-bold text-white hover:text-[#38BDF8] transition-colors">
                        {SITE_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#0E7064] shrink-0 mt-0.5">
                      <MessageSquare className="w-5 h-5 fill-[#0E7064]" />
                    </div>
                    <div>
                      <span className="text-xs text-[#94A3B8] uppercase font-bold block">
                        WhatsApp 24/7
                      </span>
                      <a
                        href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello OSIA Transport! I need a quote.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-on-dark hover:underline"
                      >
                        {SITE_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#0369A1] shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#94A3B8] uppercase font-bold block">
                        Email Address
                      </span>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm font-semibold text-white hover:text-[#0369A1] break-all transition-colors">
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#16A34A] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#94A3B8] uppercase font-bold block">
                        Base Location
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {SITE_CONFIG.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#94A3B8] uppercase font-bold block">
                        Operating Hours
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {SITE_CONFIG.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quote Form */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
