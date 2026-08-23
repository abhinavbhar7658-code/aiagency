import React from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
 Sparkles, 
 Zap, 
 Globe, 
 ArrowRight, 
 CheckCircle2, 
 Layers, 
 Video, 
 MessageSquare, 
 FileText, 
 Workflow, 
 PhoneCall 
} from "lucide-react";

const divisions = [
 {
 id:"content",
 name:"Content AI Agency",
 track:"Track A",
 badge:"Audience Growth",
 badgeColor:"default" as const,
 pricingNote:"From ₹5,000 / month",
 headline:"Social Media Posts, Carousels & Reels That Convert",
 description:"Stop the scroll with high-converting social media posts, multi-slide educational carousels, ready-to-record short-form scripts, high-CTR thumbnails, and monthly content calendars.",
 icon: <Sparkles className="w-6 h-6 text-primary" />,
 features: ["12 to 30 custom posts & platform-tailored captions / mo","2 to 8 high-retention Reels & Short-form video scripts","High-CTR thumbnail graphics & brand template kits","30-day strategic content calendar across 5 pillars","Monthly performance report with concrete action items",
 ],
 href:"/content-agency",
 ctaText:"Explore Content AI Wing",
 },
 {
 id:"automation",
 name:"Automatic AI Agency",
 track:"Track C",
 badge:"Operations ROI",
 badgeColor:"indigo" as const,
 pricingNote:"From ₹6,000 setup + ₹3k/mo",
 headline:"Workflows, WhatsApp Bots & CRM Automation",
 description:"Eliminate repetitive manual tasks and slow response times. We build automated multi-step AI pipelines across WhatsApp, CRM, Email, and Google Sheets.",
 icon: <Zap className="w-6 h-6 text-primary" />,
 features: ["Sub-60s instant WhatsApp & Web lead qualification","Multi-step chained n8n / Make / Zapier workflows","Automated multi-touch follow-up email sequences","Zero-hallucination support bots grounded in company docs","Strict failure fallback paths & human approval gates",
 ],
 href:"/automation-agency",
 ctaText:"Explore Automation Wing",
 },
 {
 id:"web-ai",
 name:"Web & AI Systems",
 track:"Track B",
 badge:"Conversion Engine",
 badgeColor:"emerald" as const,
 pricingNote:"From ₹8,000 one-time",
 headline:"High-Converting Websites, Chatbots & Voice Agents",
 description:"Upgrade from generic templates to fast Next.js websites equipped with outcome-driven copy, brand-voiced FAQ chatbots, lead capture funnels, and voice agents.",
 icon: <Globe className="w-6 h-6 text-primary" />,
 features: ["Up to 5 pages of custom conversion copy & Next.js build","5-8 question brand-voiced FAQ chatbot decision tree","End-to-end lead qualification flow (2-3 questions max)","Conversational voice agent phone script & telephony routing","Full code ownership & optional monthly maintenance",
 ],
 href:"/web-ai-agency",
 ctaText:"Explore Web & AI Wing",
 },
];

export function AgencyDivisionsSection() {
 return (
 <section className="py-20 lg:py-28 relative">
 <SectionContainer>
 <SectionHeader
 badge="Three Core Agency Pillars"
 badgeVariant="indigo"
 title="Specialized AI Solutions Built For Real Businesses"
 subtitle="Whether you need scroll-stopping content, hands-off workflow automation, or an intelligent web presence, each division is managed by specialist delivery leads."
 />

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
 {divisions.map((div) => (
 <Card
 key={div.id}
 className=" rounded-3xl p-8 flex flex-col justify-between border border-border dark:border-border bg-card dark:bg-background shadow-lg relative group"
 >
 <div className="space-y-6">
 {/* Header */}
 <div className="flex items-center justify-between">
 <div className="w-12 h-12 rounded-2xl bg-secondary dark:bg-card border border-border dark:border-border flex items-center justify-center">
 {div.icon}
 </div>
 <div className="flex items-center gap-2">
 <span className="text-sm font-mono text-muted-foreground font-semibold">{div.track}</span>
 <Badge variant={div.badgeColor} className="text-[10px] font-semibold py-0.5 px-2">
 {div.badge}
 </Badge>
 </div>
 </div>

 {/* Title & Tagline */}
 <div>
 <h3 className="text-2xl font-bold text-foreground transition-colors">
 {div.name}
 </h3>
 <span className="text-sm font-mono font-bold text-muted-foreground dark:text-muted-foreground block mt-1">
 {div.pricingNote}
 </span>
 <p className="text-lg font-semibold text-foreground dark:text-muted-foreground mt-2">
 {div.headline}
 </p>
 </div>

 <p className="text-sm sm:text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed">
 {div.description}
 </p>

 {/* Key Deliverables */}
 <div className="space-y-2 pt-4 border-t border-border dark:border-border">
 <span className="text-sm font-mono font-semibold text-muted-foreground uppercase tracking-wider block">
 Core Deliverables:
 </span>
 {div.features.map((feat, idx) => (
 <div key={idx} className="flex items-start gap-2 text-sm text-foreground dark:text-muted-foreground">
 <CheckCircle2 className="w-3.5 h-3.5 text-foreground dark:text-background shrink-0 mt-0.5" />
 <span>{feat}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Action Button */}
 <div className="pt-8 mt-6 border-t border-border dark:border-border">
 <Button
 asChild
 size="default"
 variant="outline"
 className="w-full group-hover:bg-secondary dark:group-hover:bg-card transition-all font-semibold"
 >
 <Link href={div.href} className="flex items-center justify-center gap-1.5">
 <span>{div.ctaText}</span>
 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
 </Link>
 </Button>
 </div>
 </Card>
 ))}
 </div>
 </SectionContainer>
 </section>
 );
}
