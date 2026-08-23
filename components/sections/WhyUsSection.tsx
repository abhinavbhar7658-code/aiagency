import React from "react";
import { whyUsData } from "@/data/why-us";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";
import { 
 Compass, 
 Network, 
 Layers, 
 Shield, 
 Code2, 
 Activity,
 CheckCircle2
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
 Compass: <Compass className="w-5 h-5 text-primary" />,
 Network: <Network className="w-5 h-5 text-primary" />,
 Layers: <Layers className="w-5 h-5 text-primary" />,
 Shield: <Shield className="w-5 h-5 text-amber-400" />,
 Code2: <Code2 className="w-5 h-5 text-primary" />,
 Activity: <Activity className="w-5 h-5 text-purple-400" />,
};

export function WhyUsSection() {
 return (
 <SectionContainer id="why-us">
 <SectionHeader
 badge="Strategic Advantage"
 title="Why Serious Companies Choose Our AI Agency"
 subtitle="We build high-availability production software, not fragile prompts or single chatbots."
 />

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
 {whyUsData.map((item) => (
 <Card
 key={item.id}
 className="p-6 bg-background hover:bg-background border-border hover:border-primary transition-all duration-300 space-y-4"
 >
 <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center shadow-inner">
 {iconMap[item.iconName] || <CheckCircle2 className="w-5 h-5 text-primary" />}
 </div>

 <div>
 <h3 className="text-lg font-bold text-foreground">
 {item.title}
 </h3>
 <p className="text-sm font-semibold text-primary/90 mt-1 font-mono">
 {item.subtitle}
 </p>
 <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed">
 {item.description}
 </p>
 </div>
 </Card>
 ))}
 </div>
 </SectionContainer>
 );
}
