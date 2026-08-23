import React from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AgentOrchestrationVisualizer } from "@/components/interactive/AgentOrchestrationVisualizer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Shield, CheckCircle2 } from "lucide-react";

export function WorkforceSection() {
 return (
 <SectionContainer id="ai-workforce" className="bg-background">
 <SectionHeader
 badge="Autonomous Workforce"
 badgeVariant="indigo"
 title="Meet Your Coordinated AI Workforce"
 subtitle="You don't just receive a generic chatbot. You get an interconnected digital workforce of 12 specialized autonomous agents executing tasks under strict human governance."
 />

 <AgentOrchestrationVisualizer />

 <div className="mt-12 text-center">
 <Button asChild size="lg" variant="default" className="glow-pill">
 <Link href="/ai-agents" className="flex items-center gap-2">
 <span>Explore All 12 Agent Architectures</span>
 <ArrowRight className="w-4 h-4" />
 </Link>
 </Button>
 </div>
 </SectionContainer>
 );
}
