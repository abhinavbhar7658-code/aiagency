import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
 Cpu, 
 Bot, 
 Headphones, 
 Target, 
 PhoneCall, 
 Globe, 
 Database, 
 Sparkles, 
 GitMerge, 
 BarChart3, 
 ArrowRight,
 CheckCircle2,
 Clock
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
 Cpu: <Cpu className="w-5 h-5 text-primary" />,
 Bot: <Bot className="w-5 h-5 text-primary" />,
 Headphones: <Headphones className="w-5 h-5 text-primary" />,
 Target: <Target className="w-5 h-5 text-amber-400" />,
 PhoneCall: <PhoneCall className="w-5 h-5 text-primary" />,
 Globe: <Globe className="w-5 h-5 text-purple-400" />,
 Database: <Database className="w-5 h-5 text-primary" />,
 Sparkles: <Sparkles className="w-5 h-5 text-primary" />,
 GitMerge: <GitMerge className="w-5 h-5 text-primary" />,
 BarChart3: <BarChart3 className="w-5 h-5 text-purple-400" />,
};

export function ServicesGrid() {
 return (
 <SectionContainer id="services">
 <SectionHeader
 badge="Enterprise AI Systems"
 title="AI Systems Built Around Your Business"
 subtitle="We design, engineer, deploy, and operate custom AI infrastructure tailored to your exact operational data and business goals."
 />

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
 {servicesData.map((service) => (
 <Card
 key={service.id}
 className="group relative overflow-hidden bg-background hover:bg-background border-border hover:border-primary transition-all duration-300 flex flex-col justify-between"
 >
 {/* Ambient hover glow */}
 <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary group-hover:bg-primary rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

 <CardHeader className="space-y-4 pb-4">
 <div className="flex items-center justify-between">
 <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors shadow-inner">
 {iconMap[service.iconName] || <Bot className="w-6 h-6 text-primary" />}
 </div>
 {service.badge && (
 <Badge variant="default" className="font-mono text-sm">
 {service.badge}
 </Badge>
 )}
 </div>

 <div>
 <CardTitle className="text-xl group-hover:text-primary transition-colors">
 {service.title}
 </CardTitle>
 <CardDescription className="mt-2 text-sm leading-relaxed line-clamp-2">
 {service.shortDescription}
 </CardDescription>
 </div>
 </CardHeader>

 <CardContent className="space-y-3 pt-0 flex-1">
 <div className="space-y-2 pt-2 border-t border-border">
 <span className="text-[11px] font-mono font-semibold text-muted-foreground uppercase tracking-wider block">
 Key Outcomes:
 </span>
 <ul className="space-y-1.5">
 {service.keyOutcomes.slice(0, 2).map((outcome, idx) => (
 <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
 <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
 <span>{outcome}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground pt-2">
 <Clock className="w-3.5 h-3.5 text-muted-foreground" />
 <span>Deploy: {service.implementationTime}</span>
 </div>
 </CardContent>

 <CardFooter className="pt-2 border-t border-border">
 <Button asChild variant="ghost" size="sm" className="w-full justify-between group/btn text-muted-foreground hover:text-primary">
 <Link href={`/services/${service.slug}`}>
 <span className="text-sm font-semibold">Explore System Specifications</span>
 <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
 </Link>
 </Button>
 </CardFooter>
 </Card>
 ))}
 </div>
 </SectionContainer>
 );
}
