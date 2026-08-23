import React from "react";
import { techStackData } from "@/data/tech-stack";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, ShieldCheck } from "lucide-react";

export function TechEcosystemSection() {
 return (
 <SectionContainer id="technology" className="bg-background">
 <SectionHeader
 badge="Enterprise Architecture"
 badgeVariant="indigo"
 title="Modern, Scalable & Verified Technology Stack"
 subtitle="We build with industry-standard, production-proven frameworks and LLM inference providers designed for enterprise uptime."
 />

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
 {techStackData.map((tech, i) => (
 <Card
 key={i}
 className="p-5 bg-background hover:bg-background border-border hover:border-primary transition-all duration-300 space-y-3"
 >
 <div className="flex items-center justify-between">
 <span className="text-sm font-mono text-primary font-semibold">
 {tech.category}
 </span>
 <Badge variant="secondary" className="text-[9px] font-mono px-1.5 py-0">
 {tech.badge}
 </Badge>
 </div>

 <div>
 <h4 className="text-base font-bold text-foreground">
 {tech.name}
 </h4>
 <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
 {tech.description}
 </p>
 </div>
 </Card>
 ))}
 </div>
 </SectionContainer>
 );
}
