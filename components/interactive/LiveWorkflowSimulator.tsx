"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
 Play, 
 RotateCcw, 
 Sparkles, 
 CheckCircle2, 
 ArrowRight, 
 Bot, 
 Database, 
 Cpu, 
 ShieldCheck,
 Send,
 Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoScenario {
 id: string;
 title: string;
 userPrompt: string;
 pipeline: {
 stage: string;
 agent: string;
 action: string;
 result: string;
 }[];
 finalOutcome: {
 summary: string;
 metrics: string;
 };
}

const scenarios: DemoScenario[] = [
 {
 id:"lead-qualification",
 title:"Inbound Lead Qualification & CRM Sync",
 userPrompt:"I need to automatically qualify inbound leads, enrich their company data, and book discovery calls.",
 pipeline: [
 {
 stage:"01. Intake",
 agent:"Lead Concierge Agent",
 action:"Ingested form submission from 'Acme Corp' (150 employees)",
 result:"Parsed domain acmecorp.com • Identified ICP match score: 94/100",
 },
 {
 stage:"02. Deep Research",
 agent:"Research Agent",
 action:"Enriching firmographic metrics via Apollo & Crunchbase APIs",
 result:"Verified Series B SaaS ($12M ARR, Salesforce user, US East timezone)",
 },
 {
 stage:"03. Strategy & Scoring",
 agent:"Strategy Agent",
 action:"Routing to Enterprise AE pod based on deal potential",
 result:"Assigned deal tier: Tier-1 Strategic • Auto-drafted discovery brief",
 },
 {
 stage:"04. CRM Automation",
 agent:"CRM Agent",
 action:"Creating deal opportunity & syncing meeting slots to Cal.com",
 result:"Deal #10492 created in HubSpot • Calendar invite locked for Tuesday 2 PM",
 },
 {
 stage:"05. Verification & QA",
 agent:"QA Agent",
 action:"Verifying data cleanliness & zero PII exposure",
 result:"Pass: 100% compliance • Sent executive Slack alert to Sales Channel",
 },
 ],
 finalOutcome: {
 summary:"Inbound lead fully enriched, scored, and booked on AE calendar with customized briefing notes in 42 seconds.",
 metrics:"Response time: 42s | Manual effort: 0 mins | Accuracy: 100%",
 },
 },
 {
 id:"customer-support",
 title:"24/7 Knowledge-Grounded Support",
 userPrompt:"A customer wants to update their enterprise SLA billing tier and migrate their API keys.",
 pipeline: [
 {
 stage:"01. Inquiry Analysis",
 agent:"Support Agent",
 action:"Semantic intent analysis & sentiment classification",
 result:"Classified as: Billing Adjustment + API Migration (Sentiment: Urgent / Positive)",
 },
 {
 stage:"02. RAG Knowledge Search",
 agent:"Solution Agent",
 action:"Querying pgvector internal knowledge base & contract clauses",
 result:"Retrieved Section 4.2 of Master Services Agreement with exact citation",
 },
 {
 stage:"03. Account Verification",
 agent:"Automation Agent",
 action:"Checking organization admin permissions in Supabase DB",
 result:"Caller confirmed as Org Owner (User ID: usr_9941a)",
 },
 {
 stage:"04. Execution Plan",
 agent:"Support Agent",
 action:"Formulating step-by-step key rollover guide & upgraded invoice",
 result:"Prepared secure key rotation checklist and prorated billing delta",
 },
 {
 stage:"05. Human Escalation Gate",
 agent:"QA Agent",
 action:"Checking financial change threshold (Over $5,000 threshold)",
 result:"Flagged for 1-click Account Manager sign-off in Client Portal",
 },
 ],
 finalOutcome: {
 summary:"Customer received instantaneous verified instructions with zero hallucination. Financial update staged for 1-click approval.",
 metrics:"Resolution speed: 4.8s | Hallucination rate: 0.0% | Source cited: 100%",
 },
 },
 {
 id:"content-seo",
 title:"Autonomous Content & SEO Engine",
 userPrompt:"We need an authoritative 2,000-word engineering breakdown on Multi-Agent Swarms with SEO schema.",
 pipeline: [
 {
 stage:"01. Search Analysis",
 agent:"SEO Agent",
 action:"Scraping SERP top 10 rankings & keyword semantic clusters",
 result:"Mapped 14 high-intent keyword subtopics with 8,400 monthly volume",
 },
 {
 stage:"02. Technical Discovery",
 agent:"Research Agent",
 action:"Analyzing latest LangGraph and Autogen benchmark papers",
 result:"Synthesized 6 architectural trade-off diagrams & citation sources",
 },
 {
 stage:"03. Content Generation",
 agent:"Content Agent",
 action:"Drafting markdown manuscript matching brand style guidelines",
 result:"Generated 2,150 words with structured H2/H3 headings & code snippets",
 },
 {
 stage:"04. Schema & Meta Setup",
 agent:"SEO Agent",
 action:"Generating JSON-LD Article schema & OpenGraph tags",
 result:"Created valid Google Rich Result Schema & social preview cards",
 },
 {
 stage:"05. Editorial QA",
 agent:"QA Agent",
 action:"Validating technical code snippets & brand voice parameters",
 result:"All code tests passed • Staged in CMS draft queue for editor review",
 },
 ],
 finalOutcome: {
 summary:"Complete publication-ready technical article with valid JSON-LD schema generated in 3 minutes instead of 2 days.",
 metrics:"Drafting time: 2m 45s | Brand voice alignment: 98% | SEO readiness: 100%",
 },
 },
];

export function LiveWorkflowSimulator() {
 const [selectedScenario, setSelectedScenario] = useState<DemoScenario>(scenarios[0]);
 const [customInput, setCustomInput] = useState("");
 const [isRunning, setIsRunning] = useState(false);
 const [currentStepIndex, setCurrentStepIndex] = useState(5); // Default to finished view

 const runSimulation = () => {
 setIsRunning(true);
 setCurrentStepIndex(0);

 let step = 0;
 const interval = setInterval(() => {
 step += 1;
 if (step <= selectedScenario.pipeline.length) {
 setCurrentStepIndex(step);
 } else {
 clearInterval(interval);
 setIsRunning(false);
 }
 }, 900);
 };

 const handleSelectScenario = (scenario: DemoScenario) => {
 setSelectedScenario(scenario);
 setCustomInput("");
 setCurrentStepIndex(scenario.pipeline.length);
 };

 return (
 <div className="rounded-3xl border border-border bg-background p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
 {/* Background glow */}
 <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl pointer-events-none" />

 {/* Simulated Notice Banner */}
 <div className="flex items-center justify-between pb-6 border-b border-border mb-8 flex-wrap gap-4">
 <div className="flex items-center gap-2">
 <Badge variant="indigo" className="font-mono text-sm">
 Interactive Simulator
 </Badge>
 <span className="text-sm text-muted-foreground">
 Simulated enterprise multi-agent execution pipeline
 </span>
 </div>
 <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
 <ShieldCheck className="w-3.5 h-3.5 text-primary" />
 <span>Internal prompts safely sandboxed</span>
 </div>
 </div>

 {/* Scenario Selector Pills */}
 <div className="mb-6 space-y-2">
 <label className="text-sm font-mono font-semibold text-muted-foreground uppercase tracking-wider">
 Select a Business Workflow Scenario
 </label>
 <div className="flex flex-wrap gap-2.5">
 {scenarios.map((sc) => (
 <button
 key={sc.id}
 onClick={() => handleSelectScenario(sc)}
 className={cn("px-4 py-2 rounded-xl text-sm font-semibold transition-all border",
 selectedScenario.id === sc.id
 ?"bg-primary text-primary/80 border-primary shadow-sm"
 :"bg-background text-muted-foreground border-border hover:text-foreground hover:border-border"
 )}
 >
 {sc.title}
 </button>
 ))}
 </div>
 </div>

 {/* User Prompt Input Preview */}
 <div className="rounded-2xl border border-border bg-background p-4 mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg bg-primary border border-primary flex items-center justify-center shrink-0">
 <Sparkles className="w-4 h-4 text-primary" />
 </div>
 <p className="text-lg font-medium text-foreground italic">"{selectedScenario.userPrompt}"
 </p>
 </div>
 <Button
 onClick={runSimulation}
 disabled={isRunning}
 variant="default"
 size="sm"
 className="shrink-0"
 >
 {isRunning ? (
 <>
 <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
 <span>Simulating...</span>
 </>
 ) : (
 <>
 <Play className="w-4 h-4 mr-1.5 fill-current" />
 <span>Run AI Workflow</span>
 </>
 )}
 </Button>
 </div>

 {/* Live Pipeline Execution Steps */}
 <div className="space-y-3 mb-8">
 <div className="flex items-center justify-between text-sm font-mono text-muted-foreground mb-1">
 <span>Agent Orchestration Pipeline</span>
 <span>{Math.min(currentStepIndex, selectedScenario.pipeline.length)} of {selectedScenario.pipeline.length} Tasks Resolved</span>
 </div>

 {selectedScenario.pipeline.map((step, idx) => {
 const isDone = currentStepIndex > idx;
 const isCurrent = currentStepIndex === idx && isRunning;
 const isWaiting = currentStepIndex <= idx && !isRunning;

 return (
 <div
 key={step.stage}
 className={cn("rounded-xl border p-4 transition-all duration-300",
 isCurrent
 ?"bg-background border-primary/80 shadow-md shadow-primary/20 scale-[1.01]"
 : isDone
 ?"bg-background border-border text-muted-foreground"
 :"bg-background border-border opacity-40"
 )}
 >
 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
 <div className="flex items-center gap-3">
 <div
 className={cn("w-6 h-6 rounded-md flex items-center justify-center text-sm font-mono font-bold",
 isDone
 ?"bg-primary text-primary border border-primary"
 : isCurrent
 ?"bg-primary text-slate-950 animate-pulse"
 :"bg-card text-muted-foreground"
 )}
 >
 {isDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : idx + 1}
 </div>
 <div>
 <span className="text-sm font-mono text-primary font-semibold mr-2">
 {step.stage}
 </span>
 <span className="text-sm font-bold text-foreground">
 [{step.agent}]
 </span>
 </div>
 </div>

 <div className="text-sm font-mono text-muted-foreground sm:text-right">
 {step.action}
 </div>
 </div>

 {isDone && (
 <div className="mt-2.5 pt-2.5 border-t border-border pl-9 text-sm text-muted-foreground">
 <strong className="text-muted-foreground">Outcome: </strong>
 {step.result}
 </div>
 )}
 </div>
 );
 })}
 </div>

 {/* Final Outcome Box */}
 {currentStepIndex >= selectedScenario.pipeline.length && (
 <div className="rounded-2xl border border-primary bg-emerald-950/20 p-5 animate-in fade-in duration-300">
 <div className="flex items-start gap-3.5">
 <div className="w-8 h-8 rounded-xl bg-primary border border-primary flex items-center justify-center shrink-0 mt-0.5">
 <CheckCircle2 className="w-5 h-5 text-primary" />
 </div>
 <div className="flex-1 space-y-1">
 <h4 className="text-sm font-bold text-foreground">
 Simulated Execution Complete
 </h4>
 <p className="text-sm text-muted-foreground leading-relaxed">
 {selectedScenario.finalOutcome.summary}
 </p>
 <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-primary">
 <span>{selectedScenario.finalOutcome.metrics}</span>
 </div>
 </div>
 </div>
 </div>
 )}
 </div>
 );
}
