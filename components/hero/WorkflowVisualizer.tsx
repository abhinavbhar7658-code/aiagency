"use client";

import React, { useState, useEffect } from "react";
import { 
 Sparkles, 
 ArrowDown, 
 CheckCircle2, 
 Cpu, 
 Bot, 
 Database, 
 Zap, 
 Layers, 
 TrendingUp,
 Workflow
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StepNode {
 step: number;
 label: string;
 sublabel: string;
 agent: string;
 icon: React.ReactNode;
 output: string;
}

const workflowSteps: StepNode[] = [
 {
 step: 1,
 label:"Client Objective",
 sublabel:"Inbound Request Ingested",
 agent:"Client / Inbound Stream",
 icon: <Sparkles className="w-4 h-4 text-muted-foreground" />,
 output: '"Qualify enterprise leads & sync meeting briefs to HubSpot"',
 },
 {
 step: 2,
 label:"AI Strategy & Decomposition",
 sublabel:"DAG Task Planning & Routing",
 agent:"Strategy Agent",
 icon: <Layers className="w-4 h-4 text-muted-foreground" />,
 output:"Generated 3-stage execution graph with 99.4% confidence score",
 },
 {
 step: 3,
 label:"Specialized Agent Swarm",
 sublabel:"Parallel Research & Scoring",
 agent:"Sales Agent + Research Agent",
 icon: <Bot className="w-4 h-4 text-muted-foreground" />,
 output:"Enriched Apollo data, verified B2B headcount & tech stack",
 },
 {
 step: 4,
 label:"Autonomous Automation",
 sublabel:"CRM Sync & Calendar Lock",
 agent:"Automation Agent + CRM Agent",
 icon: <Zap className="w-4 h-4 text-muted-foreground" />,
 output:"Created deal record #8941, scheduled AE demo on Cal.com",
 },
 {
 step: 5,
 label:"Verified Business Result",
 sublabel:"Human Review Cockpit & Telemetry",
 agent:"QA Agent + Client Cockpit",
 icon: <CheckCircle2 className="w-4 h-4 text-primary" />,
 output:"Lead booked in 48 seconds • AE briefing generated",
 },
];

export function WorkflowVisualizer() {
 const [activeStep, setActiveStep] = useState(0);
 const [isPaused, setIsPaused] = useState(false);

 useEffect(() => {
 if (isPaused) return;
 const interval = setInterval(() => {
 setActiveStep((prev) => (prev + 1) % workflowSteps.length);
 }, 2800);
 return () => clearInterval(interval);
 }, [isPaused]);

 return (
 <div 
 className="rounded-3xl border border-border dark:border-border bg-card dark:bg-background p-6 sm:p-8 shadow-2xl relative overflow-hidden group"
 onMouseEnter={() => setIsPaused(true)}
 onMouseLeave={() => setIsPaused(false)}
 >
 {/* Background Gradients */}
 <div className="absolute top-0 right-0 w-80 h-80 bg-muted dark:bg-card rounded-full blur-3xl pointer-events-none" />

 {/* Header bar */}
 <div className="flex items-center justify-between pb-6 border-b border-border dark:border-border mb-6 relative">
 <div className="flex items-center gap-3">
 <div className="w-3 h-3 rounded-full bg-card dark:bg-primary/80 animate-pulse" />
 <span className="text-sm font-mono font-semibold tracking-wider text-muted-foreground dark:text-muted-foreground uppercase">
 Live Autonomous Workflow Execution
 </span>
 </div>
 <div className="flex items-center gap-2">
 <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline-block">
 Step {activeStep + 1} of 5
 </span>
 <span className="px-2 py-0.5 rounded-full bg-secondary dark:bg-background border border-border dark:border-border text-[10px] font-mono text-foreground dark:text-muted-foreground">
 {isPaused ?"Paused" :"Simulating"}
 </span>
 </div>
 </div>

 {/* 5 Step Progress Chain */}
 <div className="space-y-3 relative">
 {workflowSteps.map((node, index) => {
 const isCurrent = activeStep === index;
 const isPassed = activeStep > index;

 return (
 <div
 key={node.step}
 onClick={() => setActiveStep(index)}
 className={cn("cursor-pointer rounded-2xl border p-4 transition-all duration-300 relative overflow-hidden",
 isCurrent
 ?"bg-background dark:bg-background border-foreground shadow-md scale-[1.01]"
 : isPassed
 ?"bg-transparent border-border dark:border-border opacity-80 hover:opacity-100"
 :"bg-background dark:bg-background border-border dark:border-border opacity-40 hover:opacity-70"
 )}
 >
 {/* Active Step Glow Accent */}
 {isCurrent && (
 <div className="absolute left-0 top-0 bottom-0 w-1 bg-card" />
 )}

 <div className="flex items-start justify-between gap-4">
 <div className="flex items-start gap-3.5">
 <div
 className={cn("w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border transition-colors",
 isCurrent
 ?"bg-white dark:bg-card border-border dark:border-border"
 :"bg-secondary dark:bg-background border-border dark:border-border"
 )}
 >
 {node.icon}
 </div>

 <div>
 <div className="flex items-center gap-2">
 <span className="text-sm font-mono font-bold text-foreground dark:text-muted-foreground">
 0{node.step}
 </span>
 <span className="text-sm font-bold text-foreground">
 {node.label}
 </span>
 <span className="text-[11px] px-2 py-0.5 rounded-full bg-muted dark:bg-card text-muted-foreground dark:text-muted-foreground font-mono hidden md:inline-block">
 {node.agent}
 </span>
 </div>
 <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1">
 {node.output}
 </p>
 </div>
 </div>

 <div className="shrink-0 flex items-center">
 {isCurrent ? (
 <span className="flex h-2 w-2 relative">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
 <span className="relative inline-flex rounded-full h-2 w-2 bg-card" />
 </span>
 ) : isPassed ? (
 <CheckCircle2 className="w-4 h-4 text-primary" />
 ) : (
 <span className="text-[10px] font-mono text-muted-foreground">Pending</span>
 )}
 </div>
 </div>
 </div>
 );
 })}
 </div>

 {/* Footer telemetry */}
 <div className="mt-6 pt-4 border-t border-border dark:border-border flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground dark:text-muted-foreground font-mono">
 <div className="flex items-center gap-2">
 <Workflow className="w-3.5 h-3.5 text-muted-foreground" />
 <span>Multi-Agent Swarm DAG</span>
 </div>
 <div className="flex items-center gap-4">
 <span>Latency: <strong className="text-foreground">480ms</strong></span>
 <span>Zero Data Retention: <strong className="text-primary dark:text-primary">Enforced</strong></span>
 </div>
 </div>
 </div>
 );
}
