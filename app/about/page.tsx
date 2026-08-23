import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo/metadata";
import { 
 ShieldCheck, 
 Code2, 
 Users, 
 Target, 
 Sparkles, 
 ArrowRight, 
 CheckCircle2, 
 Layers 
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About DWD | The Business-First AI Agency",
  description: "DWD is an engineering-driven AI agency that builds, deploys, and operates custom autonomous workforces and business systems for modern enterprises.",
  canonicalUrl: "https://dwd.agency/about",
});

export default function AboutPage() {
  const principles = [
    {
      title: "Business-First Strategy",
      description: "We never deploy AI for the sake of novelty. Every system we build must solve a quantifiable operational bottleneck, attract customers, or improve team efficiency.",
      icon: <Target className="w-5 h-5 text-primary" />,
    },
    {
      title: "AI + Human Collaboration",
      description: "We believe in augmenting your team, not replacing it. Our systems handle repetitive work, research, and data processing so your team can focus on strategy, relationships, and creativity.",
      icon: <Users className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Production Mindset",
      description: "We don't build generic chatbots or wrappers. We build production-grade software: custom Next.js web applications, resilient automation queues, and multi-agent execution topologies connected to your systems.",
      icon: <Code2 className="w-5 h-5 text-accent" />,
    },
    {
      title: "Long-Term Vision",
      description: "Our systems are built on an extensible architecture designed to scale with you. What starts as a simple website and chatbot can grow into a full AI Agency OS handling marketing, support, and sales.",
      icon: <Sparkles className="w-5 h-5 text-primary" />,
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <SectionContainer>
        <SectionHeader
          badge="Our Mission & Philosophy"
          title="WE BUILD SYSTEMS THAT SCALE BUSINESSES"
          subtitle="DWD was founded with a singular conviction: businesses don't need more generic SaaS tools. They need unified AI systems designed around how they actually work."
        />

        {/* Core Positioning Callout */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card shadow-sm p-8 sm:p-12 mb-20 space-y-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-wide uppercase">
            Technology is Easy. Growth is Hard.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            DWD exists because we saw too many businesses struggling to stitch together 15 different apps just to qualify a lead or publish content. We solve the integration and operational bottleneck by architecting unified, intelligent AI systems—spanning Content, Automation, and Web Development.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="mb-20">
          <SectionHeader
            badge="Engineering Values"
            title="OUR FOUR ARCHITECTURAL PILLARS"
            subtitle="How we evaluate, build, and operate every enterprise AI deployment."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <Card
                key={i}
                className="p-8 bg-background border-border space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-xl font-black tracking-wide uppercase text-foreground">
                  {p.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-sm">
          <h3 className="text-2xl font-black uppercase text-foreground">
            Ready to Build Your System?
          </h3>
          <p className="text-lg font-medium text-muted-foreground max-w-xl mx-auto">
            Speak directly with our team to review your workflow automation and growth potential.
          </p>
          <div className="pt-2">
            <Button asChild size="lg" className="h-14 px-8 bg-primary text-primary-foreground font-black tracking-wide hover:scale-[1.02] transition-transform">
              <Link href="/book-call">BOOK A STRATEGY CALL</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
