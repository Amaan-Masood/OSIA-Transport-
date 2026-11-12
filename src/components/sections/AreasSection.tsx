import React from 'react';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import { AREAS, SITE_CONFIG } from '@/content/site';
import { Badge } from '@/components/ui/Badge';

export const AreasSection: React.FC = () => {
  return (
    <section id="areas" className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="navy">Strategic Regional Reach</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0F172A]">
            Abu Dhabi Coverage Hubs
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Fast response times with fleet units positioned across key industrial and development corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {AREAS.map((a) => (
            <div
              key={a.slug}
              className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:border-[#0369A1]/40 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0369A1] mb-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#0F172A] mb-2">
                  {a.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {a.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E8F0]">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(`Hello OSIA Transport! We need dispatch to ${a.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-extrabold uppercase tracking-wider text-[#0369A1] hover:text-[#0369A1] inline-flex items-center gap-1 group"
                >
                  <span>Request Dispatch to {a.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Extended Highway Coverage Notice */}
        <div className="bg-[#0B1726] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#38BDF8] shrink-0">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-display uppercase text-white">
                Highway &amp; Inter-Emirate Corridors Covered
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8]">
                Continuous heavy haulage, potable water delivery, and crane support along E11 Sheikh Zayed Road and E30 trucking routes.
              </p>
            </div>
          </div>
          <a
            href={SITE_CONFIG.phoneHref}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 shrink-0 transition-colors"
          >
            Dispatch Coordination
          </a>
        </div>
      </div>
    </section>
  );
};
