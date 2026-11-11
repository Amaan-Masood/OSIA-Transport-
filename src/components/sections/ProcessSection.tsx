import React from 'react';
import { MessageSquare, CalendarClock, Truck, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const STEPS = [
  {
    step: '01',
    icon: <MessageSquare className="w-6 h-6 text-[#0284C7]" />,
    iconBg: 'bg-[#E0F2FE] border-[#BAE6FD]',
    title: 'Request In Seconds',
    desc: 'Call our 24/7 hotline or submit your project details via WhatsApp form with your location and load requirements.',
  },
  {
    step: '02',
    icon: <CalendarClock className="w-6 h-6 text-[#0284C7]" />,
    iconBg: 'bg-[#E0F2FE] border-[#BAE6FD]',
    title: 'Instant Confirmation',
    desc: 'Our dispatch team reviews load charts, equipment availability, and gives an immediate fixed quote and ETA.',
  },
  {
    step: '03',
    icon: <Truck className="w-6 h-6 text-[#0284C7]" />,
    iconBg: 'bg-[#E0F2FE] border-[#BAE6FD]',
    title: 'Priority Dispatch',
    desc: 'Certified trucks, tankers, or cranes mobilize promptly from our Abu Dhabi base directly to your coordinates.',
  },
  {
    step: '04',
    icon: <CheckCircle2 className="w-6 h-6 text-[#0284C7]" />,
    iconBg: 'bg-[#E0F2FE] border-[#BAE6FD]',
    title: 'Safe Execution & Signoff',
    desc: 'Trained operators complete lifting, water delivery, or transport following strict site safety standards.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="navy">How We Operate</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0F172A]">
            Fast 4-Step Dispatch Workflow
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Designed for urgent site realities in Abu Dhabi. No endless email chains or bureaucratic delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl border ${s.iconBg} flex items-center justify-center shadow-sm`}>
                    {s.icon}
                  </div>
                  <span className="text-3xl font-extrabold font-display text-slate-200">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display uppercase tracking-tight text-[#0F172A] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
