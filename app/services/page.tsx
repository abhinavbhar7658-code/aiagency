import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo/metadata";
import { 
  PenTool,
  Zap,
  Globe,
  ArrowRight, 
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "DWD AI Services | Content, Automation & Web Systems",
  description: "Explore our core AI service wings: Content AI, Automation AI, and Web & AI Systems.",
  canonicalUrl: "https://dwd.agency/services",
});

const iconMap: Record<string, React.ReactNode> = {
  PenTool: <PenTool className="w-6 h-6 text-primary" />,
  Zap: <Zap className="w-6 h-6 text-secondary" />,
  Globe: <Globe className="w-6 h-6 text-accent" />
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      <SectionContainer>
        <SectionHeader
          badge="DWD Service Wings"
          title="AI Systems Engineered Around Your Business Workflows"
          subtitle="We design, build, and operate specialized AI systems across Content, Automation, and Web to help you scale seamlessly."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              className="group bg-card border-border hover:border-primary transition-all duration-300 flex flex-col justify-between"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors shadow-sm">
                    {iconMap[service.iconName]}
                  </div>
                  {service.badge && (
                    <Badge variant="default" className="font-mono text-sm uppercase bg-background text-foreground border-border">
                      {service.badge}
                    </Badge>
                  )}
                </div>

                <div>
                  <CardTitle className="text-xl font-black uppercase group-hover:text-primary transition-colors tracking-wide">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm font-medium leading-relaxed">
                    {service.shortDescription}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2 pt-4 border-t border-border/50">
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-sm font-medium text-foreground flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-[11px] font-bold text-muted-foreground uppercase pt-4 border-t border-border/50">
                  <span>Implementation:</span>
                  <span className="text-foreground">{service.implementationTime}</span>
                </div>
              </CardContent>

              <CardFooter className="pt-4 border-t border-border/50">
                <Button asChild variant="ghost" size="sm" className="w-full justify-between font-bold text-muted-foreground hover:text-foreground">
                  <Link href={`/services/${service.slug}`}>
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-20 rounded-2xl border border-border bg-card p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl font-black uppercase tracking-wide text-foreground">
            Unsure Which AI System Matches Your Goal?
          </h3>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
            Book a strategy session. We will evaluate your current workflow friction and provide a custom system blueprint.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="h-14 px-8 bg-primary text-primary-foreground font-black tracking-wide hover:scale-105 transition-transform">
              <Link href="/book-call">BOOK A STRATEGY SESSION</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
