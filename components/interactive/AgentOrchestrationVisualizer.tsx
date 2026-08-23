"use client";

import React, { useState } from "react";
import { agentsData } from "@/data/agents";
import { AgentItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { 
 Bot, 
 Cpu, 
 Layers, 
 ShieldCheck, 
 Activity, 
 ArrowRight,
 Sparkles,
 Database,
 Network
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AgentOrchestrationVisualizer() {
 const [selectedAgent, setSelectedAgent] = useState<AgentItem>(agentsData[0]);

 return (
 <div className="rounded-3xl border border-border bg-background p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
 {/* Background Orbs */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-cyan pointer-events-none" />

 {/* Top Header */}
 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-border mb-8">
 <div>
 <div className="flex items-center gap-2 mb-1.5">
 <Network className="w-4 h-4 text-primary" />
 <span className="text-sm font-mono font-semibold tracking-wider text-primary uppercase">
 Decoupled Multi-Agent Topology
 </span>
 </div>
 <h3 className="text-2xl font-bold text-foreground tracking-tight">
 Interconnected Agent Swarm
 </h3>
 </div>

 <div className="flex items-center gap-2">
 <Badge variant="emerald" className="gap-1.5 font-mono text-sm">
 <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse" />
 12 Autonomous Agents Ready
 </Badge>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
 {/* Left: Interactive Grid of 12 Agents */}
 <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
 {agentsData.map((agent) => {
 const isSelected = selectedAgent.id === agent.id;

          return (
            <button
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={cn("p-3.5 rounded-2xl border text-left transition-all duration-200 relative group flex flex-col justify-between min-h-[105px]",
                isSelected
                  ? "bg-background border-secondary shadow-lg shadow-secondary/20 scale-[1.02]"
                  : "bg-background border-border hover:bg-background hover:border-secondary/50"
              )}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary/80 animate-ping" />
              )}

              <div className="flex items-center gap-2">
                <div
                  className={cn("w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0",
                    isSelected
                      ? "bg-secondary text-secondary-foreground border border-secondary"
                      : "bg-primary/10 text-primary border border-primary/20 group-hover:bg-secondary/10 group-hover:text-secondary group-hover:border-secondary/20 transition-colors"
                  )}
                >
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span className={cn("text-sm font-bold transition-colors line-clamp-1",
                  isSelected ? "text-secondary" : "text-foreground group-hover:text-secondary"
                )}>
                  {agent.name}
                </span>
              </div>

              <div className="mt-2">
                <span className="text-xs text-muted-foreground block line-clamp-1">
                  {agent.role}
                </span>
                <span className={cn("text-[10px] font-mono mt-0.5 block",
                  isSelected ? "text-secondary/90" : "text-primary/80 group-hover:text-secondary/80"
                )}>
                  {agent.autonomousLevel}
                </span>
              </div>
            </button>
          );
 })}
 </div>

 {/* Right: Selected Agent Inspector Cockpit */}
 <div className="lg:col-span-5 rounded-2xl border border-border bg-background p-6 space-y-5">
 <div className="flex items-start justify-between gap-3 pb-4 border-b border-border">
 <div>
 <span className="text-sm font-mono text-primary uppercase">
 Agent Inspector
 </span>
 <h4 className="text-lg font-bold text-foreground mt-0.5">
 {selectedAgent.name}
 </h4>
 <p className="text-sm text-muted-foreground mt-0.5">
 {selectedAgent.role}
 </p>
 </div>
 <Badge variant="default" className="font-mono text-sm">
 {selectedAgent.autonomousLevel}
 </Badge>
 </div>

 <div>
 <p className="text-sm font-semibold text-muted-foreground mb-1">
 Mission Scope:
 </p>
 <p className="text-sm text-muted-foreground leading-relaxed">
 {selectedAgent.description}
 </p>
 </div>

 <div>
 <p className="text-sm font-semibold text-muted-foreground mb-2">
 Core Autonomous Skills:
 </p>
 <ul className="space-y-1.5">
 {selectedAgent.coreSkills.map((skill, i) => (
 <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
 <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-1.5 shrink-0" />
 <span>{skill}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="pt-3 border-t border-border flex flex-wrap gap-1.5">
 <span className="text-[11px] font-mono text-muted-foreground mr-1 self-center">
 Integrations:
 </span>
 {selectedAgent.systemIntegrations.map((tool, idx) => (
 <span
 key={idx}
 className="px-2 py-0.5 rounded-md bg-background border border-border text-[10px] font-mono text-muted-foreground"
 >
 {tool}
 </span>
 ))}
 </div>
 </div>
 </div>
 </div>
 );
}
