import React from "react";
import { ShieldCheck, Cpu, Zap, Lock, Database, Bot, Activity } from "lucide-react";

export function TrustBar() {
 const metrics = [
 { value:"< 5s", label:"Avg Inbound AI Response", highlight:"24/7 Availability" },
 { value:"80%+", label:"Manual Workflow Reduction", highlight:"Cross-Tool Automation" },
 { value:"12", label:"Specialized AI Agents", highlight:"Coordinated Workforce" },
 { value:"100%", label:"Tenant Data Isolation", highlight:"Zero Public Training" },
 ];

 const techBadges = ["Next.js App Router","PostgreSQL + pgvector","Claude 3.5 Sonnet","OpenAI GPT-4o","Supabase Enterprise","Deepgram Nova-2","Temporal Workflows","Vercel Edge Network",
 ];

 return (
 <div className="border-y border-border dark:border-border bg-background dark:bg-background py-12 relative overflow-hidden">
 <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* Quantitative Performance Metrics */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-10 border-b border-border dark:border-border text-center">
 {metrics.map((m, idx) => (
 <div key={idx} className="space-y-1">
 <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight font-mono">
 {m.value}
 </div>
 <p className="text-sm sm:text-lg font-semibold text-foreground dark:text-muted-foreground">
 {m.label}
 </p>
 <span className="text-[11px] font-mono text-muted-foreground dark:text-muted-foreground block">
 {m.highlight}
 </span>
 </div>
 ))}
 </div>

 {/* Technology Ecosystem Badges */}
 <div className="pt-8">
 <p className="text-sm font-mono font-semibold tracking-wider text-muted-foreground uppercase text-center mb-6">
 Engineered on Verified Enterprise Foundations
 </p>
 <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
 {techBadges.map((badge, i) => (
 <span
 key={i}
 className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-background border border-border dark:border-border text-sm font-mono text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:bg-background dark:hover:bg-card transition-colors shadow-sm"
 >
 {badge}
 </span>
 ))}
 </div>
 </div>
 </div>
 </div>
 );
}
