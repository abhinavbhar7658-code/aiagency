import React from "react";
import { outcomesData } from "@/data/outcomes";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { OutcomeCalculator } from "@/components/interactive/OutcomeCalculator";
import { 
 Target, 
 Zap, 
 Smile, 
 TrendingDown, 
 Eye, 
 Rocket,
 ArrowUpRight
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
 Target: <Target className="w-5 h-5 text-primary" />,
 Zap: <Zap className="w-5 h-5 text-primary" />,
 Smile: <Smile className="w-5 h-5 text-primary" />,
 TrendingDown: <TrendingDown className="w-5 h-5 text-amber-400" />,
 Eye: <Eye className="w-5 h-5 text-primary" />,
 Rocket: <Rocket className="w-5 h-5 text-purple-400" />,
};

export function OutcomesSection() {
 return (
 <SectionContainer id="outcomes" className="bg-background">
 <SectionHeader
 badge="Measurable Impact"
 badgeVariant="emerald"
 title="We Sell Business Outcomes, Not Just AI Prompts"
 subtitle="Every system we build is judged by cold, hard operational metrics: revenue captured, hours reclaimed, and error rates eliminated."
 />

 {/* 6 Outcome Cards Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
 {outcomesData.map((item) => (
 <Card
 key={item.id}
 className="p-6 bg-background hover:bg-background border-border hover:border-primary transition-all duration-300 flex flex-col justify-between"
 >
 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center">
 {iconMap[item.iconName] || <Zap className="w-5 h-5 text-primary" />}
 </div>
 <div className="text-right">
 <span className="text-2xl font-extrabold text-foreground font-mono block">
 {item.metric}
 </span>
 <span className="text-[10px] font-mono text-primary">
 {item.metricLabel}
 </span>
 </div>
 </div>

 <div>
 <h3 className="text-lg font-bold text-foreground">
 {item.title}
 </h3>
 <p className="text-sm font-semibold text-muted-foreground mt-0.5">
 {item.subtitle}
 </p>
 <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
 {item.description}
 </p>
 </div>
 </div>
 </Card>
 ))}
 </div>

 {/* Interactive ROI Calculator */}
 <OutcomeCalculator />
 </SectionContainer>
 );
}
