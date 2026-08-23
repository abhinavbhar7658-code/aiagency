import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Globe, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  "content-ai": Bot,
  "automation-ai": Zap,
  "web-ai-systems": Globe,
};

export function AiSolutionsSection() {
  return (
    <section className="py-24 bg-card/50 border-y border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-mono text-primary font-semibold uppercase tracking-wider">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            DWD AI Solutions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We provide three core wings of AI implementation, architected specifically to help businesses scale operations and capture digital real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.id] || Layers;
            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden bg-background border-border hover:border-primary transition-all duration-300 p-8 flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-32 h-32 text-primary" />
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                  <ul className="space-y-3 pt-4 border-t border-border/50">
                    {(service.keyOutcomes || []).slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground">
                        <span className="text-primary font-bold">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative z-10 mt-8 pt-6">
                  <Button asChild variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <Link href={`/services/${service.slug}`}>
                      <span>Explore Solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
