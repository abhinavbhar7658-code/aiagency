import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industriesData } from "@/data/industries";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { constructMetadata } from "@/lib/seo/metadata";
import { 
 CheckCircle2, 
 ArrowRight, 
 ChevronLeft, 
 Bot, 
 ShieldCheck, 
 AlertTriangle 
} from "lucide-react";

interface IndustryPageProps {
 params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
 return industriesData.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
 const { slug } = await params;
 const ind = industriesData.find((i) => i.slug === slug);
 if (!ind) return {};

 return constructMetadata({
 title: `${ind.name} AI Solutions & Automation`,
 description: ind.description,
 canonicalUrl: `https://dwd.agency/industries/${ind.slug}`,
 });
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
 const { slug } = await params;
 const ind = industriesData.find((i) => i.slug === slug);

 if (!ind) {
 notFound();
 }

 return (
 <div className="pt-28 pb-20">
 <SectionContainer>
 <div className="mb-8">
 <Link
 href="/industries"
 className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
 >
 <ChevronLeft className="w-4 h-4" />
 <span>Back to All Industries</span>
 </Link>
 </div>

 {/* Hero */}
 <div className="max-w-4xl space-y-6 mb-16">
 <Badge variant="indigo" className="font-mono text-sm uppercase">
 Sector Architecture
 </Badge>
 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
 AI Systems Engineered for {ind.name}
 </h1>
 <p className="text-xl text-primary/90 font-medium">
 {ind.headline}
 </p>
 <p className="text-lg text-muted-foreground leading-relaxed">
 {ind.description}
 </p>
 </div>

 {/* Typical Outcomes Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
 {ind.typicalOutcomes.map((out, i) => (
 <div key={i} className="rounded-2xl border border-border bg-background p-6 text-center">
 <span className="text-3xl font-extrabold text-foreground font-mono block">
 {out.metric}
 </span>
 <span className="text-sm text-muted-foreground font-mono mt-1 block">
 {out.label}
 </span>
 </div>
 ))}
 </div>

 {/* Challenges vs Solutions */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
 <div className="rounded-3xl border border-border bg-background p-8 space-y-6">
 <div className="flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-amber-400" />
 <h3 className="text-lg font-bold text-foreground">Common Sector Friction</h3>
 </div>
 <ul className="space-y-3">
 {ind.keyChallenges.map((ch, i) => (
 <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
 <span className="leading-relaxed">{ch}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="rounded-3xl border border-primary bg-background p-8 space-y-6">
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-5 h-5 text-primary" />
 <h3 className="text-lg font-bold text-foreground">Custom AI Solution Deployments</h3>
 </div>
 <ul className="space-y-3">
 {ind.aiSolutions.map((sol, i) => (
 <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
 <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
 <span className="leading-relaxed">{sol}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>

 {/* Form */}
 <div className="max-w-3xl mx-auto">
 <LeadCaptureForm defaultGoal={`Deploy AI System for ${ind.name}`} source={`industry_${ind.slug}`} />
 </div>
 </SectionContainer>
 </div>
 );
}
