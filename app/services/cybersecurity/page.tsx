import React from "react";
import { Metadata } from "next";
import { CybersecuritySection } from "@/components/sections/CybersecuritySection";
import { CybersecurityProductsSection } from "@/components/sections/CybersecurityProductsSection";

export const metadata: Metadata = {
  title: "Cybersecurity & Compliance | DWD",
  description: "Enterprise cybersecurity assessments, third-party risk management, DPDP compliance, and ISO readiness support.",
};

export default function CybersecurityPage() {
  return (
    <div className="pt-20">
      <CybersecuritySection />
      <CybersecurityProductsSection />
    </div>
  );
}
