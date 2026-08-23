import React from "react";
import Link from "next/link";
import { processStepsData } from "@/data/process";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Clock, ShieldCheck } from "lucide-react";

export function ProcessSection() {
 return (
 <SectionContainer id="how-it-works">
 <SectionHeader
 badge="Proven Implementation"
 title="From Discovery to Autonomous Operations in 5 Steps"
 subtitle="Our systematic engineering methodology guarantees predictability, strict enterprise data security, and measurable ROI at every milestone."
 />

 <div className="relative space-y-6">
 {/* Step Items Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {processStepsData.map((step, idx) => (
 <Card
 key={step.stepNumber}
 className="relative p-6 bg-background hover:bg-background border-border hover:border-primary transition-all duration-300 flex flex-col justify-between"
 >
 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <span className="text-3xl font-extrabold font-mono text-primary">
 {step.stepNumber}
 </span>
 <Badge variant="secondary" className="font-mono text-[10px]">
 {step.duration}
 </Badge>
 </div>

 <div>
 <h3 className="text-xl font-bold text-foreground tracking-tight">
 {step.title}
 </h3>
 <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
 {step.shortDescription}
 </p>
 </div>

 <div className="space-y-2 pt-3 border-t border-border">
 <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
 Key Activities:
 </span>
 <ul className="space-y-1.5">
 {step.detailedScope.slice(0, 2).map((item, i) => (
 <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
 <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>

 <div className="mt-4 pt-3 border-t border-border text-[11px] font-mono text-muted-foreground">
 <strong className="text-muted-foreground">Deliverable: </strong>
 {step.deliverables}
 </div>
 </Card>
 ))}

 {/* 6th Card: Guaranteed Security & SLA */}
 <Card className="p-6 bg-gradient-to-br from-primary/30 via-secondary/50 to-primary/80/30 border-primary flex flex-col justify-between">
 <div className="space-y-4">
 <div className="w-10 h-10 rounded-xl bg-primary border border-primary flex items-center justify-center">
 <ShieldCheck className="w-5 h-5 text-primary" />
 </div>
 <div>
 <h3 className="text-xl font-bold text-foreground">
 Zero-Risk Deployment
 </h3>
 <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
 Every system is staged in an isolated testing sandbox before going live. Zero downtime for your ongoing operations.
 </p>
 </div>
 </div>

 <div className="pt-4">
 <Button asChild size="sm" variant="default" className="w-full">
 <Link href="/how-it-works">Learn Full Methodology</Link>
 </Button>
 </div>
 </Card>
 </div>
 </div>
 </SectionContainer>
 );
}
