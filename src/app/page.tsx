import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { FleetTeaser } from '@/components/sections/FleetTeaser';
import { WhyUsTeaser } from '@/components/sections/WhyUsTeaser';
import { CtaBand } from '@/components/sections/CtaBand';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FleetTeaser />
      <WhyUsTeaser />
      <CtaBand />
    </>
  );
}
