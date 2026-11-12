import React from 'react';
import { MapPin, Users, Truck, DollarSign, Clock, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const REASONS = [
  {
    icon: <MapPin className="w-6 h-6 text-[#0369A1]" />,
    iconBg: 'bg-[#E0F2FE] border-[#BAE6FD]',
    title: 'Based in Abu Dhabi',
    desc: 'Strategically located for priority dispatch across Musaffah Industrial Area, Khalifa City, ICAD, and all Western Region infrastructure hubs.',
  },
  {
    icon: <Users className="w-6 h-6 text-[#0369A1]" />,
    iconBg: 'bg-[#E0F2FE] border-[#BAE6FD]',
    title: 'Experienced & Certified Crew',
    desc: 'Our heavy crane operators and tanker drivers hold full UAE certifications, rigorous site access passes, and extensive industrial experience.',
  },
  {
    icon: <Truck className="w-6 h-6 text-[#0369A1]" />,
    iconBg: 'bg-[#E0F2FE] border-[#BAE6FD]',
    title: 'Modern & Inspected Fleet',
    desc: 'High-torque Volvo FH tractor units, Mercedes-Benz Actros tankers, and certified multi-tonnage cranes inspected to strict safety standards.',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#0369A1]" />,
    iconBg: 'bg-[#E0F2FE] border-[#BAE6FD]',
    title: 'Competitive & Transparent Pricing',
    desc: 'Fair hourly, daily, trip, and monthly contract rates with clear quotation and no surprise add-ons.',
  },
  {
    icon: <Clock className="w-6 h-6 text-[#0369A1]" />,
    iconBg: 'bg-[#E0F2FE] border-[#BAE6FD]',
    title: '24/7 Standby Support',
    desc: 'Active round-the-clock telephone and WhatsApp dispatch desk for urgent dewatering, potable water top-ups, and emergency site lifting.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#0369A1]" />,
    iconBg: 'bg-[#E0F2FE] border-[#BAE6FD]',
    title: 'Safety-Focused Operations',
    desc: 'Dedicated to Zero Incident safety protocols, comprehensive PPE, third-party load charts, and environmental disposal compliance.',
  },
];

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="navy">Why Partner With Us</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0F172A]">
            Reliable Service. Safe Operations. Trusted Partnership.
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            We understand the high stakes of project schedules on UAE construction and industrial sites. Here is why project managers rely on OSIA Transport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-lg transition-all space-y-3 group"
            >
              <div className={`w-12 h-12 rounded-2xl ${r.iconBg} flex items-center justify-center transition-transform group-hover:scale-105`}>
                {r.icon}
              </div>
              <h3 className="text-lg font-bold font-display uppercase tracking-tight text-[#0F172A] pt-1">
                {r.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
