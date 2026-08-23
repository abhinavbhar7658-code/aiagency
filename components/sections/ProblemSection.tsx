"use client";
import React from "react";
import { AlertCircle, Clock, FileWarning, HeadphonesIcon, LinkIcon, BrainCircuit } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      title: "MANUAL WORK",
      desc: "Too much repetitive operational work.",
      icon: Clock,
      color: "text-primary"
    },
    {
      title: "MISSED LEADS",
      desc: "Slow responses and inconsistent follow-ups.",
      icon: AlertCircle,
      color: "text-secondary"
    },
    {
      title: "CONTENT BOTTLENECK",
      desc: "Not enough time to publish consistently.",
      icon: FileWarning,
      color: "text-accent"
    },
    {
      title: "CUSTOMER SUPPORT LOAD",
      desc: "Too many repetitive questions.",
      icon: HeadphonesIcon,
      color: "text-primary"
    },
    {
      title: "DISCONNECTED SYSTEMS",
      desc: "CRM, email, website and data don't work together.",
      icon: LinkIcon,
      color: "text-secondary"
    },
    {
      title: "NO CLEAR AI STRATEGY",
      desc: "Businesses know AI matters but don't know where to start.",
      icon: BrainCircuit,
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground max-w-4xl mx-auto mb-16">
          YOUR BUSINESS DOESN'T NEED MORE TOOLS. IT NEEDS <span className="text-primary underline decoration-primary underline-offset-8">BETTER SYSTEMS.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {problems.map((prob, i) => (
            <div key={i} className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors shadow-sm">
              <prob.icon className={`w-8 h-8 ${prob.color} mb-6`} />
              <h3 className="text-lg font-black tracking-wide uppercase mb-2">{prob.title}</h3>
              <p className="text-muted-foreground font-medium">{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
