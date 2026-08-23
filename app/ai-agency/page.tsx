import React from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AiAgencyOverview } from "@/components/sections/AiAgencyOverview";
import { ServiceComparisonSection } from "@/components/sections/ServiceComparisonSection";
import { constructMetadata } from "@/lib/seo/metadata";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = constructMetadata({
  title: "DWD AI Agency | Build. Automate. Grow.",
  description: "DWD is a modern AI agency that builds AI-powered content, automation and digital systems designed around how your business actually works.",
  canonicalUrl: "https://dwd.agency/ai-agency",
});

export default function AiAgencyPage() {
  return (
    <div className="pt-28 pb-0">
      <SectionContainer>
        <SectionHeader
          badge="DWD AI Agency"
          title="BUILD. AUTOMATE. GROW WITH AI."
          subtitle="We build AI-powered content, automation and digital systems designed around how your business actually works."
        />
      </SectionContainer>
      
      <AiAgencyOverview />
      <ServiceComparisonSection />
      <FinalCTASection />
    </div>
  );
}
