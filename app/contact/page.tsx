import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { constructMetadata, siteConfig } from "@/lib/seo/metadata";
import { Mail, Phone, MapPin, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Contact DWD AI Agency",
  description: "Get in touch with our AI systems architects. Submit your workflow requirements or request a custom enterprise implementation scope.",
  canonicalUrl: "https://dwd.agency/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <SectionContainer>
        <SectionHeader
          badge="Direct Inquiries"
          title="START YOUR AI PROJECT"
          subtitle="Tell us about the friction in your operations, sales funnel, or customer support. Our systems architect will respond quickly."
        />

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
 {/* Left Column: Direct Contact Info & Guarantees */}
 <div className="lg:col-span-5 space-y-8">
 <div className="rounded-3xl border border-border bg-background p-8 space-y-6">
 <h3 className="text-xl font-bold text-foreground">
 Contact Channels
 </h3>

 <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-mono text-muted-foreground block">General Inquiries</span>
 <a href={`mailto:${siteConfig.contact.email}`} className="text-foreground hover:text-primary transition-colors font-medium">
 {siteConfig.contact.email}
 </a>
 </div>
 </div>

                {siteConfig.contact.phone && (
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-mono text-muted-foreground block">Direct Line</span>
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-foreground hover:text-primary transition-colors font-medium">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {siteConfig.contact.address && (
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-mono text-muted-foreground block">Headquarters</span>
                      <span className="text-foreground font-medium text-sm">{siteConfig.contact.address}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

 {/* SLA Guarantees */}
 <div className="rounded-3xl border border-border bg-background p-6 space-y-3 text-sm text-muted-foreground">
 <div className="flex items-center gap-2 font-bold text-foreground text-sm">
 <ShieldCheck className="w-4 h-4 text-primary" />
 <span>Our Implementation Pledge</span>
 </div>
 <ul className="space-y-2 pt-1 text-muted-foreground">
 <li className="flex items-center gap-2">
 <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
 <span>24-Hour initial response SLA</span>
 </li>
 <li className="flex items-center gap-2">
 <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
 <span>Strict NDA protection for all shared workflows</span>
 </li>
 <li className="flex items-center gap-2">
 <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
 <span>Transparent fixed-price scopes with zero hidden fees</span>
 </li>
 </ul>
 </div>
 </div>

 {/* Right Column: Lead Form */}
 <div className="lg:col-span-7">
 <LeadCaptureForm source="contact_page" />
 </div>
 </div>
 </SectionContainer>
 </div>
 );
}
