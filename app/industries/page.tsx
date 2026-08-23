import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/seo/metadata";
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

export const metadata: Metadata = constructMetadata({
 title:"AI Solutions by Industry Vertical",
 description:"Explore customized AI workforce and automation systems engineered for E-Commerce, Real Estate, Healthcare, SaaS, Professional Services, and Education.",
 canonicalUrl:"https://dwd.agency/industries",
});

const iconMap: Record<string, React.ReactNode> = {
 ShoppingBag: <ShoppingBag className="w-5 h-5 text-primary" />,
 Building2: <Building2 className="w-5 h-5 text-primary" />,
 Activity: <Activity className="w-5 h-5 text-primary" />,
 Layers: <Layers className="w-5 h-5 text-primary" />,
 Briefcase: <Briefcase className="w-5 h-5 text-amber-400" />,
 GraduationCap: <GraduationCap className="w-5 h-5 text-purple-400" />,
};

export default function IndustriesPage() {
 return (
 <div className="pt-28 pb-20">
 <SectionContainer>
 <SectionHeader
 badge="Industry Specialization"
 title="Bespoke AI Architecture Built for Your Sector"
 subtitle="We tailor agent skills, compliance boundaries, and knowledge retrieval logic to the unique regulatory and operational needs of your industry."
 />

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
 <span className="text-[11px] font-mono text-primary font-semibold uppercase">
 Industry Blueprint
 </span>
 </div>

 <div>
 <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
 {ind.name}
 </h3>
 <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
 {ind.description}
 </p>
 </div>

 {/* Metrics */}
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

 {/* Solutions */}
 <div className="space-y-1.5 pt-2">
 <span className="text-[11px] font-mono text-muted-foreground font-semibold uppercase">Key Deployments:</span>
 <ul className="space-y-1">
 {ind.aiSolutions.slice(0, 2).map((sol, i) => (
 <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
 <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
 <span className="leading-snug">{sol}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>

 <div className="pt-6 mt-4 border-t border-border">
 <Button asChild variant="ghost" size="sm" className="w-full justify-between group/btn text-muted-foreground hover:text-primary">
 <Link href={`/industries/${ind.slug}`}>
 <span className="text-sm font-semibold">View Sector Blueprint</span>
 <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
 </Link>
 </Button>
 </div>
 </Card>
 ))}
 </div>
 </SectionContainer>
 </div>
 );
}
