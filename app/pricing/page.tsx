import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Pricing & Solutions | DWD AI Agency",
  description: "Explore our flexible pricing and solution tiers across Content AI, Automation AI, Web & AI Systems, and Custom AI.",
  canonicalUrl: "https://dwd.agency/pricing",
});

const pricingTiers = [
  {
    name: "CONTENT AI",
    for: "Brands needing consistent, high-converting social content.",
    features: [
      "12–30 custom posts & captions / month",
      "2–8 Reels / Shorts scripts",
      "High-CTR thumbnail graphics",
      "Reusable brand template kits",
      "30-day content calendar & reports",
    ],
    support: "Monthly strategy calls & iterations",
    cta: "BUILD MY CONTENT SYSTEM",
    href: "/book-call?service=content-ai",
    color: "primary",
  },
  {
    name: "AUTOMATION AI",
    for: "Operations swamped with manual tasks and slow response times.",
    features: [
      "WhatsApp & website lead qualification",
      "n8n / Make / Zapier workflows",
      "Multi-touch email sequences",
      "CRM automation & lead routing",
      "Knowledge-grounded support bots",
    ],
    support: "Workflow maintenance & proactive alerts",
    cta: "AUTOMATE MY WORKFLOW",
    href: "/book-call?service=automation-ai",
    color: "secondary",
  },
  {
    name: "WEB & AI SYSTEMS",
    for: "Businesses needing a modern storefront with intelligent systems.",
    features: [
      "Up to 5 pages custom Next.js website",
      "SEO-ready, conversion-focused UX",
      "Brand-voiced FAQ chatbot",
      "Lead qualification & CRM pipeline",
      "Optional voice-agent experience",
    ],
    support: "Optional monthly maintenance",
    cta: "BUILD MY AI SYSTEM",
    href: "/book-call?service=web-ai-systems",
    color: "accent",
  },
  {
    name: "CUSTOM AI SYSTEM",
    for: "Enterprise clients with complex, multi-agent AI requirements.",
    features: [
      "Full AI workforce orchestration",
      "Custom vector databases (RAG)",
      "Dedicated AI Solution Agent topology",
      "Rigorous QA and compliance testing",
      "Complete code ownership",
    ],
    support: "Dedicated Slack channel & ongoing optimization",
    cta: "START A PROJECT",
    href: "/contact",
    color: "foreground",
  }
];

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20">
      <SectionContainer>
        <SectionHeader
          badge="Solutions & Pricing"
          title="Transparent Systems. Predictable Growth."
          subtitle="We don't charge generic hourly rates. We price based on the complete AI system we architect and deliver for your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {pricingTiers.map((tier, i) => (
            <Card key={i} className={`bg-background border-border flex flex-col justify-between hover:border-${tier.color} transition-colors`}>
              <CardHeader className="space-y-4">
                <Badge className={`bg-${tier.color} text-${tier.color === 'foreground' ? 'background' : tier.color + '-foreground'} w-fit font-mono font-bold tracking-wider`}>
                  {tier.name}
                </Badge>
                <CardTitle className="text-sm font-medium text-muted-foreground leading-relaxed">
                  {tier.for}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-foreground uppercase tracking-wider block border-b border-border pb-2">
                    What's Included:
                  </span>
                  <ul className="space-y-2 pt-2">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="text-sm font-medium text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 text-${tier.color} shrink-0 mt-0.5`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <span className="text-[11px] font-bold text-foreground uppercase tracking-wider block mb-1">
                    Support:
                  </span>
                  <p className="text-sm font-medium text-muted-foreground">{tier.support}</p>
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t border-border">
                <Button asChild className={`w-full bg-${tier.color} text-${tier.color === 'foreground' ? 'background' : tier.color + '-foreground'} font-bold hover:scale-[1.02] transition-transform`}>
                  <Link href={tier.href}>
                    {tier.cta} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
