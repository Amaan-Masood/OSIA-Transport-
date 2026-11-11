import React from 'react';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import { AREAS, SITE_CONFIG } from '@/content/site';
import { Badge } from '@/components/ui/Badge';

export const AreasSection: React.FC = () => {
  return (
    <section id="areas" className="py-16 sm:py-20 bg-white border-b border-[#D5DFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="navy">Strategic Regional Reach</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0A1B2E]">
            Abu Dhabi Coverage Hubs
          </h2>
          <p className="text-sm sm:text-base text-[#52667B] leading-relaxed">
            Fast response times with fleet units positioned across key industrial and development corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {AREAS.map((a) => (
            <div
              key={a.slug}
              className="p-6 rounded-2xl bg-[#F4F7FB] border border-[#D5DFEA] hover:border-[#1391E5]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#D5DFEA] flex items-center justify-center text-[#1391E5] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E] mb-2">
                  {a.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#52667B] leading-relaxed">
                  {a.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#D5DFEA]/60">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(`Hello OSIA Transport! We need dispatch to ${a.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-[#FF7A1A] hover:text-[#E8640A] inline-flex items-center gap-1"
                >
                  <span>Request Dispatch to {a.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Extended Highway Coverage Notice */}
        <div className="bg-[#0A1B2E] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#FF7A1A] shrink-0">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-display uppercase text-white">
                Working on Remote Infrastructure or Inter-Emirate Routes?
              </h4>
              <p className="text-xs text-[#B8C6D6]">
                We also mobilize heavy trailers and tankers across Western Region, Al Ain corridors, and Dubai highways.
              </p>
            </div>
          </div>
          <a
            href={SITE_CONFIG.phoneHref}
            className="shrink-0 px-6 py-3 rounded-lg bg-[#FF7A1A] text-[#0A1B2E] font-extrabold text-xs uppercase tracking-wider hover:bg-[#E8640A] transition-colors"
          >
            Call {SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
};
