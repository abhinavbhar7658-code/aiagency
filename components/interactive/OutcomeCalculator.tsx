"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, ArrowRight, TrendingUp, Sparkles, DollarSign, Clock, Users } from "lucide-react";

export function OutcomeCalculator() {
 const [teamSize, setTeamSize] = useState<number>(20);
 const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
 const [hourlyRate, setHourlyRate] = useState<number>(65);

 // Calculations
 const manualHoursPerMonth = teamSize * hoursPerWeek * 4.33;
 const automatedHoursPerMonth = Math.round(manualHoursPerMonth * 0.8); // 80% automation
 const monthlyCostSavings = Math.round(automatedHoursPerMonth * hourlyRate);
 const annualizedSavings = monthlyCostSavings * 12;

 return (
 <div className="rounded-3xl border border-border bg-background p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border mb-8">
 <div>
 <div className="flex items-center gap-2 mb-1">
 <Calculator className="w-4 h-4 text-primary" />
 <span className="text-sm font-mono font-semibold tracking-wider text-primary uppercase">
 ROI & Automation Impact Modeler
 </span>
 </div>
 <h3 className="text-2xl font-bold text-foreground tracking-tight">
 Calculate Your Business Operational Savings
 </h3>
 </div>
 <Badge variant="indigo" className="font-mono text-sm self-start sm:self-center">
 80% Standard Automation Rate
 </Badge>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
 {/* Controls */}
 <div className="lg:col-span-6 space-y-6">
 {/* Team Size Slider */}
 <div className="space-y-2">
 <div className="flex justify-between text-sm">
 <span className="text-muted-foreground font-medium flex items-center gap-2">
 <Users className="w-4 h-4 text-primary" />
 Team Size (Employees in Operations/Sales/Support):
 </span>
 <span className="font-mono font-bold text-primary">{teamSize} people</span>
 </div>
 <input
 type="range"
 min="2"
 max="150"
 value={teamSize}
 onChange={(e) => setTeamSize(Number(e.target.value))}
 className="w-full h-2 bg-card rounded-lg appearance-none cursor-pointer accent-cyan-400"
 />
 <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
 <span>2</span>
 <span>75</span>
 <span>150+</span>
 </div>
 </div>

 {/* Manual Hours Slider */}
 <div className="space-y-2">
 <div className="flex justify-between text-sm">
 <span className="text-muted-foreground font-medium flex items-center gap-2">
 <Clock className="w-4 h-4 text-primary" />
 Avg. Manual Hours per Employee / Week:
 </span>
 <span className="font-mono font-bold text-primary">{hoursPerWeek} hrs</span>
 </div>
 <input
 type="range"
 min="2"
 max="30"
 value={hoursPerWeek}
 onChange={(e) => setHoursPerWeek(Number(e.target.value))}
 className="w-full h-2 bg-card rounded-lg appearance-none cursor-pointer accent-indigo-400"
 />
 <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
 <span>2 hrs</span>
 <span>15 hrs</span>
 <span>30 hrs</span>
 </div>
 </div>

 {/* Average Blended Hourly Rate */}
 <div className="space-y-2">
 <div className="flex justify-between text-sm">
 <span className="text-muted-foreground font-medium flex items-center gap-2">
 <DollarSign className="w-4 h-4 text-primary" />
 Blended Hourly Labor Cost ($USD):
 </span>
 <span className="font-mono font-bold text-primary">${hourlyRate}/hr</span>
 </div>
 <input
 type="range"
 min="25"
 max="200"
 step="5"
 value={hourlyRate}
 onChange={(e) => setHourlyRate(Number(e.target.value))}
 className="w-full h-2 bg-card rounded-lg appearance-none cursor-pointer accent-emerald-400"
 />
 <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
 <span>$25/hr</span>
 <span>$100/hr</span>
 <span>$200/hr</span>
 </div>
 </div>
 </div>

 {/* Output Calculation Card */}
 <div className="lg:col-span-6 rounded-2xl border border-primary bg-gradient-to-b from-muted/90 to-background/90 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
 <div className="space-y-1">
 <span className="text-sm font-mono text-primary uppercase tracking-wider">
 Projected Annualized Savings
 </span>
 <div className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
 ${annualizedSavings.toLocaleString()}
 <span className="text-sm font-normal text-muted-foreground"> / year</span>
 </div>
 </div>

 <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
 <div>
 <span className="text-sm text-muted-foreground font-mono">Monthly Hours Reclaimed</span>
 <p className="text-xl font-bold text-foreground mt-0.5">
 {automatedHoursPerMonth.toLocaleString()} hrs
 </p>
 </div>
 <div>
 <span className="text-sm text-muted-foreground font-mono">Monthly Cost Savings</span>
 <p className="text-xl font-bold text-primary mt-0.5">
 ${monthlyCostSavings.toLocaleString()}
 </p>
 </div>
 </div>

 <div className="pt-2">
 <Button asChild size="lg" variant="default" className="w-full glow-pill">
 <Link href="/book-call" className="flex items-center justify-center gap-2">
 <span>Unlock These Savings — Book Strategy Call</span>
 <ArrowRight className="w-4 h-4" />
 </Link>
 </Button>
 </div>
 </div>
 </div>
 </div>
 );
}
