import React, { Suspense } from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { StrategyBookingForm } from "@/components/forms/StrategyBookingForm";
import { constructMetadata } from "@/lib/seo/metadata";
import { ShieldCheck, CheckCircle2, Calendar, Clock, Bot } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Book a Strategy Call | DWD",
  description: "Schedule a technical discovery session to analyze your operational bottlenecks and receive a customized AI system blueprint.",
  canonicalUrl: "https://dwd.agency/book-call",
});

export default function BookCallPage() {
  return (
    <div className="pt-28 pb-20">
      <SectionContainer>
        <SectionHeader
          badge="Architecture Exploration"
          title="SCHEDULE YOUR STRATEGY SESSION"
          subtitle="Speak directly with our team to analyze your operational bottlenecks and receive a customized system blueprint."
        />

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
 {/* Left Column: What happens on the call */}
 <div className="lg:col-span-5 space-y-6">
 <div className="rounded-3xl border border-border bg-background p-8 space-y-6">
 <h3 className="text-xl font-bold text-foreground">
 What to Expect in This Session
 </h3>

 <ul className="space-y-4 text-sm sm:text-sm text-muted-foreground">
 <li className="flex items-start gap-3">
 <div className="w-6 h-6 rounded-lg bg-primary text-primary font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
 1
 </div>
 <div>
 <strong className="text-foreground block">Workflow Discovery</strong>
 <span className="text-muted-foreground text-sm">We map your existing manual handoffs, data inputs, and tool ecosystem.</span>
 </div>
 </li>

 <li className="flex items-start gap-3">
 <div className="w-6 h-6 rounded-lg bg-primary text-primary font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
 2
 </div>
 <div>
 <strong className="text-foreground block">Agent & System Architecture</strong>
 <span className="text-muted-foreground text-sm">We recommend the exact agent types and vector memory schemas required.</span>
 </div>
 </li>

 <li className="flex items-start gap-3">
 <div className="w-6 h-6 rounded-lg bg-primary text-primary font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
 3
 </div>
 <div>
 <strong className="text-foreground block">ROI & Delivery Blueprint</strong>
 <span className="text-muted-foreground text-sm">You receive a clear scope, timeline, and projected operational cost savings.</span>
 </div>
 </li>
 </ul>
 </div>

 <div className="p-6 rounded-3xl border border-border bg-background space-y-2 text-sm text-muted-foreground font-mono">
 <div className="flex items-center gap-2 text-primary font-bold">
 <ShieldCheck className="w-4 h-4" />
 <span>Zero Sales Fluff</span>
 </div>
 <p>
 You will be speaking directly with a systems architect who writes code, not a junior commission-based SDR.
 </p>
 </div>
 </div>

 {/* Right Column: Booking Form */}
 <div className="lg:col-span-7">
 <Suspense fallback={<div className="p-8 text-center text-muted-foreground">Loading booking calendar...</div>}>
 <StrategyBookingForm />
 </Suspense>
 </div>
 </div>
 </SectionContainer>
 </div>
 );
}
