import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { processStepsData } from "@/data/process";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo/metadata";
import { 
 CheckCircle2, 
 ArrowRight, 
 ShieldCheck, 
 Lock, 
 UserCog, 
 Activity, 
 Bot, 
 Cpu 
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "How It Works | DWD AI Implementation Process",
  description: "Learn how DWD delivers turnkey AI systems: Discover, Diagnose, Design, Build & Deploy, and Optimize.",
  canonicalUrl: "https://dwd.agency/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <div className="pt-28 pb-20">
      <SectionContainer>
        <SectionHeader
          badge="Implementation Methodology"
          title="From Bottleneck to Autonomous AI in 5 Steps"
          subtitle="Our engineering framework ensures predictability, security, and verifiable ROI before full-scale deployment."
        />

 {/* Timeline Sequence */}
 <div className="space-y-8 max-w-4xl mx-auto mb-20">
 {processStepsData.map((step, idx) => (
 <div
 key={step.stepNumber}
 className="rounded-3xl border border-border bg-background p-8 space-y-6 relative overflow-hidden group hover:border-primary transition-all duration-300"
 >
 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
 <div className="flex items-center gap-3">
 <span className="text-3xl font-extrabold font-mono text-primary">
 {step.stepNumber}
 </span>
 <h3 className="text-xl sm:text-2xl font-bold text-foreground">
 {step.title}
 </h3>
 </div>

 <Badge variant="secondary" className="font-mono text-sm self-start sm:self-auto">
 {step.duration}
 </Badge>
 </div>

 <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
 {step.shortDescription}
 </p>

 <div className="space-y-2">
 <span className="text-sm font-mono font-semibold text-primary uppercase tracking-wider block">
 Detailed Scope of Work:
 </span>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
 {step.detailedScope.map((scope, i) => (
 <div key={i} className="text-sm text-muted-foreground flex items-start gap-2 bg-background p-3 rounded-xl border border-border">
 <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
 <span className="leading-snug">{scope}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="pt-4 border-t border-border flex items-center justify-between text-sm font-mono text-muted-foreground">
 <span>Key Deliverable:</span>
 <span className="text-foreground font-bold">{step.deliverables}</span>
 </div>
 </div>
 ))}
 </div>

 {/* CTA */}
 <div className="rounded-3xl border border-primary bg-background p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
 <h3 className="text-2xl font-bold text-foreground">
 Ready to Begin Step 01?
 </h3>
 <p className="text-lg text-muted-foreground max-w-xl mx-auto">
 Book your 45-minute discovery session and tell us about your team's operational goals.
 </p>
 <div className="pt-2">
 <Button asChild size="lg" variant="default" className="glow-pill">
 <Link href="/book-call">Book a Strategy Session</Link>
 </Button>
 </div>
 </div>
 </SectionContainer>
 </div>
 );
}
