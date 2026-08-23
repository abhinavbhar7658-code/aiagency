"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
 LayoutDashboard, 
 Bot, 
 Zap, 
 Database, 
 BarChart3, 
 ShieldCheck, 
 ArrowRight, 
 CheckCircle2, 
 Clock, 
 Search,
 Sliders,
 TrendingUp,
 FileText
} from "lucide-react";
import { cn } from "@/lib/utils";

type PortalTab ="overview" |"agents" |"pipelines" |"knowledge" |"analytics";

export function ClientPortalPreview() {
 const [activeTab, setActiveTab] = useState<PortalTab>("overview");

 return (
 <div id="portal-preview" className="rounded-3xl border border-border bg-background p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
 {/* Background illumination */}
 <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl pointer-events-none" />

 {/* Header */}
 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border mb-6">
 <div>
 <div className="flex items-center gap-2 mb-1">
 <LayoutDashboard className="w-4 h-4 text-primary" />
 <span className="text-sm font-mono font-semibold tracking-wider text-primary uppercase">
 Client Portal Experience
 </span>
 </div>
 <h3 className="text-2xl font-bold text-foreground tracking-tight">
 Your Dedicated AI Agency OS
 </h3>
 </div>

 <Button asChild size="sm" variant="default" className="shrink-0 glow-pill">
 <Link href="/book-call" className="flex items-center gap-1.5">
 <span>See Your AI Workspace</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </Button>
 </div>

 {/* Simulated Dashboard Frame */}
 <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-2xl">
 {/* Top App Bar */}
 <div className="bg-background px-4 py-3 border-b border-border flex items-center justify-between">
 <div className="flex items-center gap-3">
 <div className="flex items-center gap-1.5">
 <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
 <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
 <div className="w-2.5 h-2.5 rounded-full bg-primary" />
 </div>
 <span className="text-sm font-mono text-muted-foreground hidden sm:inline-block">
 app.dwd.agency/workspace/acme-corp
 </span>
 </div>

 <div className="flex items-center gap-2">
 <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse" />
 <span className="text-sm font-mono text-primary">All Systems Operational</span>
 </div>
 </div>

 {/* Tab Navigation */}
 <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-background overflow-x-auto">
 {[
 { id:"overview", label:"Executive Overview", icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
 { id:"agents", label:"Active Agents (12)", icon: <Bot className="w-3.5 h-3.5" /> },
 { id:"pipelines", label:"Automation Pipelines", icon: <Zap className="w-3.5 h-3.5" /> },
 { id:"knowledge", label:"Knowledge Grounding", icon: <Database className="w-3.5 h-3.5" /> },
 { id:"analytics", label:"ROI Telemetry", icon: <BarChart3 className="w-3.5 h-3.5" /> },
 ].map((tab) => (
 <button
 key={tab.id}
 onClick={() => setActiveTab(tab.id as PortalTab)}
 className={cn("flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors",
 activeTab === tab.id
 ?"bg-primary text-primary/80 border border-primary"
 :"text-muted-foreground hover:text-foreground hover:bg-card"
 )}
 >
 {tab.icon}
 <span>{tab.label}</span>
 </button>
 ))}
 </div>

 {/* Tab Content Panes */}
 <div className="p-6 space-y-6">
 {activeTab ==="overview" && (
 <div className="space-y-6">
 {/* Metric Cards */}
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
 <div className="rounded-xl border border-border bg-background p-4">
 <span className="text-sm text-muted-foreground font-mono">Inbound Leads Qualified</span>
 <p className="text-2xl font-bold text-foreground mt-1">1,482</p>
 <span className="text-[11px] text-primary font-mono mt-0.5 block">+38% vs last month</span>
 </div>
 <div className="rounded-xl border border-border bg-background p-4">
 <span className="text-sm text-muted-foreground font-mono">Hours Saved This Month</span>
 <p className="text-2xl font-bold text-foreground mt-1">320 hrs</p>
 <span className="text-[11px] text-primary font-mono mt-0.5 block">Estimated $28.5k saved</span>
 </div>
 <div className="rounded-xl border border-border bg-background p-4">
 <span className="text-sm text-muted-foreground font-mono">Avg First Response</span>
 <p className="text-2xl font-bold text-foreground mt-1">4.2s</p>
 <span className="text-[11px] text-primary font-mono mt-0.5 block">99.8% within SLA</span>
 </div>
 <div className="rounded-xl border border-border bg-background p-4">
 <span className="text-sm text-muted-foreground font-mono">Agent Accuracy Score</span>
 <p className="text-2xl font-bold text-foreground mt-1">99.4%</p>
 <span className="text-[11px] text-primary font-mono mt-0.5 block">QA Agent verified</span>
 </div>
 </div>

 {/* Live Event Stream */}
 <div className="rounded-xl border border-border bg-background p-4">
 <div className="flex items-center justify-between pb-3 border-b border-border mb-3">
 <span className="text-sm font-mono font-bold text-muted-foreground">Live Agent Activity Log</span>
 <span className="text-[10px] font-mono text-primary">Streaming</span>
 </div>
 <div className="space-y-2 text-sm font-mono">
 <div className="flex items-center justify-between text-muted-foreground py-1 border-b border-border">
 <span className="text-primary">[Sales Agent]</span>
 <span className="truncate max-w-md">Enriched enterprise lead @stripe.com & scheduled discovery call</span>
 <span className="text-muted-foreground">12s ago</span>
 </div>
 <div className="flex items-center justify-between text-muted-foreground py-1 border-b border-border">
 <span className="text-primary">[Support Agent]</span>
 <span className="truncate max-w-md">Resolved ticket #4489 with exact citation from SLA policy v3</span>
 <span className="text-muted-foreground">45s ago</span>
 </div>
 <div className="flex items-center justify-between text-muted-foreground py-1">
 <span className="text-purple-400">[Automation Agent]</span>
 <span className="truncate max-w-md">Synced 14 invoice webhooks to QuickBooks and HubSpot deals</span>
 <span className="text-muted-foreground">2m ago</span>
 </div>
 </div>
 </div>
 </div>
 )}

 {activeTab ==="agents" && (
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
 {[
 { name:"Strategy Agent", status:"Active", tasks:"492 tasks / day", load:"12% load" },
 { name:"Sales Agent", status:"Active", tasks:"1,240 tasks / day", load:"34% load" },
 { name:"Support Agent", status:"Active", tasks:"3,890 tasks / day", load:"62% load" },
 { name:"Automation Agent", status:"Active", tasks:"8,920 events / day", load:"48% load" },
 { name:"CRM Agent", status:"Active", tasks:"640 updates / day", load:"18% load" },
 { name:"QA Agent", status:"Active", tasks:"12,400 checks / day", load:"75% load" },
 ].map((ag, i) => (
 <div key={i} className="p-3.5 rounded-xl border border-border bg-background flex items-center justify-between">
 <div>
 <span className="text-sm font-bold text-foreground block">{ag.name}</span>
 <span className="text-[11px] text-muted-foreground font-mono">{ag.tasks}</span>
 </div>
 <Badge variant="emerald" className="text-[10px] font-mono">
 {ag.status}
 </Badge>
 </div>
 ))}
 </div>
 )}

 {activeTab ==="knowledge" && (
 <div className="space-y-4">
 <div className="rounded-xl border border-border bg-background p-4">
 <span className="text-sm font-mono font-bold text-foreground">Ingested Knowledge Corpora</span>
 <p className="text-sm text-muted-foreground mt-1">42 documents indexed with pgvector hybrid dense+sparse embeddings.</p>
 <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
 <div className="p-2.5 rounded-lg bg-background border border-border flex items-center justify-between">
 <span className="text-muted-foreground">Enterprise Product Manual v4.pdf</span>
 <span className="text-primary font-mono text-[10px]">100% Synced</span>
 </div>
 <div className="p-2.5 rounded-lg bg-background border border-border flex items-center justify-between">
 <span className="text-muted-foreground">Notion Engineering SOPs</span>
 <span className="text-primary font-mono text-[10px]">Live Webhook Sync</span>
 </div>
 </div>
 </div>
 </div>
 )}

 {activeTab ==="pipelines" && (
 <div className="space-y-3 text-sm">
 {[
 { name:"Inbound Lead Qualification & CRM Sync", status:"Operational", trigger:"Form Webhook", latency:"420ms" },
 { name:"Tier-1 Customer Support & Auto-Refunds", status:"Operational", trigger:"Zendesk API", latency:"650ms" },
 { name:"Post-Call Summary & AE Task Sync", status:"Operational", trigger:"Fireflies Audio", latency:"1.2s" },
 ].map((pipe, i) => (
 <div key={i} className="p-3.5 rounded-xl border border-border bg-background flex items-center justify-between">
 <div>
 <span className="font-bold text-foreground block">{pipe.name}</span>
 <span className="text-muted-foreground font-mono text-[11px]">Trigger: {pipe.trigger} • Latency: {pipe.latency}</span>
 </div>
 <Badge variant="default" className="text-[10px] font-mono">
 {pipe.status}
 </Badge>
 </div>
 ))}
 </div>
 )}

 {activeTab ==="analytics" && (
 <div className="rounded-xl border border-border bg-background p-4 text-center space-y-2">
 <span className="text-sm font-mono text-primary">Total Measured Impact</span>
 <p className="text-3xl font-extrabold text-foreground">$142,800</p>
 <p className="text-sm text-muted-foreground">Cumulative annualized operational value created across lead conversion, ticket automation, and saved hours.</p>
 </div>
 )}
 </div>
 </div>
 </div>
 );
}
