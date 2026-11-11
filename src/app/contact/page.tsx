import React from 'react';
import { Metadata } from 'next';
import { Phone, Mail, Clock, MapPin, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';
import { buildMetadata } from '@/lib/seo';
import { Badge } from '@/components/ui/Badge';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Contact OSIA Transport | 24/7 Dispatch Abu Dhabi',
  description: 'Get in touch with OSIA Transport LLC SPC in Abu Dhabi. Call +971 50 412 7930 or submit a quote request for water tankers, crane rental, and trailer haulage.',
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
      <section className="bg-[#0A1B2E] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="orange">Operations & Dispatch</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white">
              Contact OSIA Transport LLC SPC
            </h1>
            <p className="text-base sm:text-lg text-[#B8C6D6] leading-relaxed">
              24/7 phone and WhatsApp dispatch for immediate water supply, mobile cranes, and heavy haulage across Abu Dhabi and all UAE Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-14 sm:py-20 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0A1B2E] text-white p-7 sm:p-8 rounded-2xl shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A1A]">
                    Direct Hotline
                  </span>
                  <h2 className="text-2xl font-bold font-display uppercase text-white mt-1">
                    Reach Our Dispatch Desk
                  </h2>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#FF7A1A] shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#B8C6D6] uppercase font-bold block">
                        Telephone
                      </span>
                      <a href={SITE_CONFIG.phoneHref} className="text-lg font-bold text-white hover:text-[#FF7A1A]">
                        {SITE_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                      <MessageSquare className="w-5 h-5 fill-[#25D366]" />
                    </div>
                    <div>
                      <span className="text-xs text-[#B8C6D6] uppercase font-bold block">
                        WhatsApp 24/7
                      </span>
                      <a
                        href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello OSIA Transport! I need a quote.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-[#25D366] hover:underline"
                      >
                        +971 50 412 7930
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#1391E5] shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#B8C6D6] uppercase font-bold block">
                        Email Address
                      </span>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm font-semibold text-white hover:text-[#1391E5] break-all">
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#15803D] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#B8C6D6] uppercase font-bold block">
                        Base Location
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {SITE_CONFIG.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#FF7A1A] shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#B8C6D6] uppercase font-bold block">
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
