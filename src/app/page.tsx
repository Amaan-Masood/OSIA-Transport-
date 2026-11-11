import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { FleetSection } from '@/components/sections/FleetSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AreasSection } from '@/components/sections/AreasSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaBand } from '@/components/sections/CtaBand';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <WhyUsSection />
      <ProcessSection />
      <AreasSection />
      <FaqSection />
      <CtaBand />
      <ContactSection />
    </>
  );
}
