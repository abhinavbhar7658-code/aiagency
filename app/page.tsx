import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { AiAgencyOverview } from "@/components/sections/AiAgencyOverview";
import { AiSolutionsSection } from "@/components/sections/AiSolutionsSection";
import { ServiceComparisonSection } from "@/components/sections/ServiceComparisonSection";
import { BusinessOutcomesSection } from "@/components/sections/BusinessOutcomesSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = {
  title: "DWD | AI Systems for Modern Business",
  description: "DWD builds AI-powered content, automation and digital systems that help businesses attract customers, reduce repetitive work and grow faster."
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <AiAgencyOverview />
      <AiSolutionsSection />
      <ServiceComparisonSection />
      <BusinessOutcomesSection />
      <FinalCTASection />
    </>
  );
}
