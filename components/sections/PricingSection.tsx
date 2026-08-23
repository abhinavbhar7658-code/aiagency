import React from "react";
import Link from "next/link";
import { pricingPlansData } from "@/data/pricing";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingSection() {
 return (
 <SectionContainer id="pricing" className="bg-background">
 <SectionHeader
 badge="Transparent Pricing"
 title="Predictable AI Implementation Architecture"
 subtitle="Every business has unique systems and workflows. We offer modular project-based implementations with optional ongoing operations & model maintenance."
 />

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
 {pricingPlansData.map((plan) => (
 <Card
 key={plan.id}
 className={cn("relative p-6 sm:p-8 flex flex-col justify-between transition-all duration-300",
 plan.isPopular
 ?"bg-background border-primary shadow-2xl shadow-primary/20 lg:-translate-y-2"
 :"bg-background border-border hover:border-border"
 )}
 >
 {plan.badge && (
 <div className="absolute -top-3 left-1/2 -translate-x-1/2">
 <Badge variant="default" className="px-3 py-1 font-mono text-sm shadow-md">
 {plan.badge}
 </Badge>
 </div>
 )}

 <div className="space-y-6">
 <div>
 <h3 className="text-2xl font-bold text-foreground tracking-tight">
 {plan.name}
 </h3>
 <p className="text-sm text-muted-foreground mt-1 min-h-[32px]">
 {plan.tagline}
 </p>
 </div>

 <div className="pb-4 border-b border-border">
 <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider block">
 Starting Investment
 </span>
 <div className="flex items-baseline gap-2 mt-1">
 <span className="text-4xl font-extrabold text-foreground font-mono">
 {plan.startingPrice}
 </span>
 <span className="text-sm text-muted-foreground">
 / {plan.billingPeriod}
 </span>
 </div>
 <span className="text-[11px] font-mono text-primary/90 mt-1 block">
 Target: {plan.targetAudience}
 </span>
 </div>

 <div className="space-y-3">
 <span className="text-sm font-mono font-semibold text-muted-foreground uppercase tracking-wider block">
 What's Included:
 </span>
 <ul className="space-y-2.5">
 {plan.features.map((feature, idx) => (
 <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2.5">
 <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
 <span className="leading-snug">{feature}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="pt-4 border-t border-border space-y-1.5 text-sm text-muted-foreground font-mono">
 <div>
 <strong className="text-muted-foreground">Agents: </strong>
 <span>{plan.includedAgents}</span>
 </div>
 <div>
 <strong className="text-muted-foreground">Support: </strong>
 <span>{plan.supportLevel}</span>
 </div>
 </div>
 </div>

 <div className="pt-8">
 <Button
 asChild
 size="lg"
 variant={plan.isPopular ?"default" :"secondary"}
 className={cn("w-full", plan.isPopular &&"glow-pill")}
 >
 <Link href={plan.ctaLink} className="flex items-center justify-center gap-2">
 <span>{plan.ctaText}</span>
 <ArrowRight className="w-4 h-4" />
 </Link>
 </Button>
 </div>
 </Card>
 ))}
 </div>

 <div className="mt-12 p-6 rounded-2xl border border-border bg-background text-center max-w-2xl mx-auto">
 <p className="text-sm text-muted-foreground leading-relaxed">
 Need a completely bespoke enterprise scope, dedicated on-premise model hosting, or custom SLA?{""}
 <Link href="/contact" className="text-primary hover:underline font-semibold">
 Talk to an AI Consultant
 </Link>
 </p>
 </div>
 </SectionContainer>
 );
}
