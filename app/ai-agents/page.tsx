import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { agentsData } from "@/data/agents";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AgentOrchestrationVisualizer } from "@/components/interactive/AgentOrchestrationVisualizer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo/metadata";
import { 
 Bot, 
 ShieldCheck, 
 Network, 
 ArrowRight, 
 CheckCircle2, 
 Layers, 
 Cpu, 
 Zap 
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "The DWD AI Workforce | Autonomous Agents",
  description: "Specialized AI agents working together across strategy, research, sales, content, automation, customer support and analytics.",
  canonicalUrl: "https://dwd.agency/ai-agents",
});

export default function AIAgentsPage() {
  return (
    <div className="pt-28 pb-20">
      <SectionContainer>
        <SectionHeader
          badge="14 Specialized Agents"
          title="THE DWD AI WORKFORCE"
          subtitle="Specialized AI agents working together across strategy, research, sales, content, automation, customer support and analytics."
        />

 {/* Interactive Orchestrator Visualizer */}
 <div className="mb-20">
 <AgentOrchestrationVisualizer />
 </div>

  {/* Workforce Catalog Grouped by Category */}
  <div className="mb-20 space-y-16">
    {["Content AI", "Automation AI", "Web & AI Systems", "Custom AI System"].map((categoryName) => {
      const categoryAgents = agentsData.filter(a => a.category === categoryName);
      
      if (categoryAgents.length === 0) return null;

      return (
        <div key={categoryName}>
          <div className="mb-8 border-b border-border pb-4">
            <h2 className="text-2xl font-black text-foreground uppercase tracking-wider">{categoryName}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryAgents.map((agent) => (
              <Card
                key={agent.id}
                className="p-6 bg-background hover:bg-background border-border hover:border-secondary transition-all duration-300 flex flex-col justify-between shadow-sm group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-secondary/10 group-hover:border-secondary/20 transition-colors">
                      <Bot className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <Badge variant="outline" className="font-mono text-[10px] bg-secondary/10 text-muted-foreground border-border">
                      {agent.autonomousLevel}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {agent.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary/90 font-mono mt-0.5">
                      {agent.role}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {agent.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-border">
                    <span className="text-[11px] font-bold text-foreground uppercase tracking-wider block">
                      Core Skills:
                    </span>
                    <ul className="space-y-1">
                      {agent.coreSkills.slice(0, 3).map((skill, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                          <span className="leading-tight font-medium">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border flex flex-wrap gap-1.5">
                  {agent.systemIntegrations.slice(0, 3).map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-secondary/5 text-[10px] font-bold text-muted-foreground border border-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      );
    })}
  </div>

 {/* CTA */}
 <div className="rounded-3xl border border-primary bg-background p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
 <h3 className="text-2xl font-bold text-foreground">
 Ready to Deploy Your Customized AI Agent Swarm?
 </h3>
 <p className="text-lg text-muted-foreground max-w-xl mx-auto">
 We will design a custom orchestration topology tailored to your current team and tools.
 </p>
 <div className="pt-2">
 <Button asChild size="lg" variant="default" className="glow-pill">
 <Link href="/book-call">Book a Strategy Call</Link>
 </Button>
 </div>
 </div>
 </SectionContainer>
 </div>
 );
}
