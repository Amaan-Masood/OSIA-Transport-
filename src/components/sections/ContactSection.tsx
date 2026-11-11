import React from 'react';
import { Phone, Mail, Clock, MapPin, FileText, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Badge } from '@/components/ui/Badge';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="navy">24/7 Operations Desk</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0F172A]">
            Get In Touch &amp; Request Pricing
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Fill out the project form below for an immediate WhatsApp quotation, or contact our dispatch supervisor directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B1726] text-white p-7 sm:p-8 rounded-2xl shadow-xl space-y-6 border border-white/10">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">
                  Direct Contact
                </span>
                <h3 className="text-2xl font-bold font-display uppercase text-white mt-1">
                  OSIA Transport LLC SPC
                </h3>
                <p className="text-xs text-[#94A3B8] mt-1">
                  Registered in Abu Dhabi, United Arab Emirates
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                      24/7 Telephone Hotline
                    </span>
                    <a
                      href={SITE_CONFIG.phoneHref}
                      className="text-base font-bold text-white hover:text-[#38BDF8] transition-colors"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm font-semibold text-white hover:text-[#38BDF8] transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                      Operating Hours
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {SITE_CONFIG.hours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                      Headquarters &amp; Operations
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {SITE_CONFIG.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Procurement / Corporate Documentation Notice */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                <FileText className="w-4 h-4 text-[#0284C7]" />
                Corporate Procurement &amp; Site Access
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Documentation packs available on request for vendor registration, security clearances, and gate passes:
              </p>
              <ul className="space-y-2 text-xs text-[#334155]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  Valid Abu Dhabi Trade License copy
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  Crane Third-Party Inspection &amp; Load Charts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  Certified Operator Licenses &amp; Medicals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  Comprehensive Fleet Insurance
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};
