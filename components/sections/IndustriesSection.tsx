import React from "react";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
 ShoppingBag, 
 Building2, 
 Activity, 
 Layers, 
 Briefcase, 
 GraduationCap, 
 ArrowRight,
 CheckCircle2
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
 ShoppingBag: <ShoppingBag className="w-5 h-5 text-primary" />,
 Building2: <Building2 className="w-5 h-5 text-primary" />,
 Activity: <Activity className="w-5 h-5 text-primary" />,
 Layers: <Layers className="w-5 h-5 text-primary" />,
 Briefcase: <Briefcase className="w-5 h-5 text-amber-400" />,
 GraduationCap: <GraduationCap className="w-5 h-5 text-purple-400" />,
};

export function IndustriesSection() {
 return (
 <SectionContainer id="industries">
 <SectionHeader
 badge="Tailored By Sector"
 title="Custom AI Architecture for Your Industry"
 subtitle="Every industry has specific data models, regulatory constraints, and customer journeys. We customize agent skills to match your sector's requirements."
 />

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
 {industriesData.map((ind) => (
 <Card
 key={ind.id}
 className="group p-6 bg-background hover:bg-background border-border hover:border-primary transition-all duration-300 flex flex-col justify-between"
 >
 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
 {iconMap[ind.iconName] || <Layers className="w-6 h-6 text-primary" />}
 </div>
 <span className="text-[11px] font-mono text-primary/90 font-semibold uppercase">
 Industry Focus
 </span>
 </div>

 <div>
 <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
 {ind.name}
 </h3>
 <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
 {ind.description}
 </p>
 </div>

 {/* Metrics Pills */}
 <div className="grid grid-cols-3 gap-2 py-3 border-y border-border text-center">
 {ind.typicalOutcomes.map((out, i) => (
 <div key={i}>
 <span className="text-sm font-bold text-foreground font-mono block">
 {out.metric}
 </span>
 <span className="text-[9px] font-mono text-muted-foreground block line-clamp-1">
 {out.label}
 </span>
 </div>
 ))}
 </div>
 </div>

 <div className="pt-4 mt-2">
 <Button asChild variant="ghost" size="sm" className="w-full justify-between group/btn text-muted-foreground hover:text-primary">
 <Link href={`/industries/${ind.slug}`}>
 <span className="text-sm font-semibold">View Industry Blueprint</span>
 <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
 </Link>
 </Button>
 </div>
 </Card>
 ))}
 </div>
 </SectionContainer>
 );
}
