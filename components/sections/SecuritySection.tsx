import React from "react";
import Link from "next/link";
import { securityPillarsData } from "@/data/security";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
 ShieldCheck, 
 Lock, 
 UserCheck, 
 FileText, 
 UserCog, 
 Key, 
 ArrowRight,
 CheckCircle2
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
 ShieldCheck: <ShieldCheck className="w-5 h-5 text-primary" />,
 Lock: <Lock className="w-5 h-5 text-primary" />,
 UserCheck: <UserCheck className="w-5 h-5 text-primary" />,
 FileText: <FileText className="w-5 h-5 text-amber-400" />,
 UserCog: <UserCog className="w-5 h-5 text-purple-400" />,
 Key: <Key className="w-5 h-5 text-primary" />,
};

export function SecuritySection() {
 return (
 <SectionContainer id="security">
 <SectionHeader
 badge="Enterprise Trust & Governance"
 badgeVariant="emerald"
 title="Built With Enterprise Security In Mind"
 subtitle="We enforce cryptographic tenant isolation, zero model retention agreements, and granular human governance to protect your proprietary business data."
 />

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
 {securityPillarsData.map((pillar) => (
 <Card
 key={pillar.id}
 className="p-6 bg-background hover:bg-background border-border hover:border-primary transition-all duration-300 flex flex-col justify-between"
 >
 <div className="space-y-4">
 <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center">
 {iconMap[pillar.iconName] || <ShieldCheck className="w-5 h-5 text-primary" />}
 </div>

 <div>
 <h3 className="text-lg font-bold text-foreground">
 {pillar.title}
 </h3>
 <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
 {pillar.shortDescription}
 </p>
 </div>

 <ul className="space-y-1.5 pt-3 border-t border-border">
 {pillar.details.map((detail, idx) => (
 <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
 <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
 <span>{detail}</span>
 </li>
 ))}
 </ul>
 </div>
 </Card>
 ))}
 </div>

 <div className="mt-12 text-center">
 <Button asChild size="lg" variant="outline">
 <Link href="/security" className="flex items-center gap-2">
 <span>Read Enterprise Security & Compliance Whitepaper</span>
 <ArrowRight className="w-4 h-4" />
 </Link>
 </Button>
 </div>
 </SectionContainer>
 );
}
