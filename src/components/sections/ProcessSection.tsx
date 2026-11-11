import React from 'react';
import { MessageSquare, CalendarClock, Truck, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const STEPS = [
  {
    step: '01',
    icon: <MessageSquare className="w-6 h-6 text-[#FF7A1A]" />,
    title: 'Request In Seconds',
    desc: 'Call our 24/7 hotline or submit your project details via WhatsApp form with your location and load requirements.',
  },
  {
    step: '02',
    icon: <CalendarClock className="w-6 h-6 text-[#1391E5]" />,
    title: 'Instant Confirmation',
    desc: 'Our dispatch team reviews load charts, equipment availability, and gives an immediate fixed quote and ETA.',
  },
  {
    step: '03',
    icon: <Truck className="w-6 h-6 text-[#FF7A1A]" />,
    title: 'Priority Dispatch',
    desc: 'Certified trucks, tankers, or cranes mobilize promptly from our Abu Dhabi base directly to your coordinates.',
  },
  {
    step: '04',
    icon: <CheckCircle2 className="w-6 h-6 text-[#15803D]" />,
    title: 'Safe Execution & Signoff',
    desc: 'Trained operators complete lifting, water delivery, or transport following strict site safety standards.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-16 sm:py-20 bg-[#F4F7FB] border-b border-[#D5DFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="navy">How We Operate</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0A1B2E]">
            Fast 4-Step Dispatch Workflow
          </h2>
          <p className="text-sm sm:text-base text-[#52667B] leading-relaxed">
            Designed for urgent site realities in Abu Dhabi. No endless email chains or bureaucratic delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-white border border-[#D5DFEA] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F4F7FB] flex items-center justify-center border border-[#D5DFEA]">
                    {s.icon}
                  </div>
                  <span className="text-3xl font-extrabold font-display text-[#D5DFEA]">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display uppercase tracking-tight text-[#0A1B2E] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#52667B] leading-relaxed">
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
