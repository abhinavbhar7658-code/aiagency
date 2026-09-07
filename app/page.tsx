import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { AiAgencyOverview } from "@/components/sections/AiAgencyOverview";
import { AiSolutionsSection } from "@/components/sections/AiSolutionsSection";
import { ServiceComparisonSection } from "@/components/sections/ServiceComparisonSection";
import { BusinessOutcomesSection } from "@/components/sections/BusinessOutcomesSection";
import { CybersecuritySection } from "@/components/sections/CybersecuritySection";
import { CybersecurityProductsSection } from "@/components/sections/CybersecurityProductsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = {
  title: "DWD | AI Systems & Cybersecurity for Modern Business",
  description: "DWD builds AI-powered systems and provides enterprise-grade cybersecurity solutions to help businesses grow faster and secure their digital assets."
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
      <CybersecuritySection />
      <CybersecurityProductsSection />
      <FinalCTASection />
    </>
  );
}
