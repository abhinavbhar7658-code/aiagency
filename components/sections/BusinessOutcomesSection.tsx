"use client";
import React from "react";
import { TrendingUp, Zap, Clock, PenTool, Smile, BarChart3 } from "lucide-react";

export function BusinessOutcomesSection() {
  const outcomes = [
    { title: "MORE LEADS", desc: "Capture and qualify opportunities automatically.", icon: TrendingUp },
    { title: "FASTER RESPONSE", desc: "Automate first-response workflows and delight prospects.", icon: Zap },
    { title: "LESS MANUAL WORK", desc: "Remove repetitive processes from your team's day.", icon: Clock },
    { title: "BETTER CONTENT", desc: "Publish consistently with a data-backed strategy.", icon: PenTool },
    { title: "BETTER CUSTOMER EXPERIENCE", desc: "Support customers intelligently 24/7.", icon: Smile },
    { title: "SMARTER OPERATIONS", desc: "Use data and automation to improve decisions.", icon: BarChart3 }
  ];

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            AI SHOULD DO MORE THAN IMPRESS. <br />
            <span className="text-primary underline decoration-primary underline-offset-8">IT SHOULD CREATE RESULTS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <div key={i} className="bg-background border border-border p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <outcome.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-black uppercase mb-2">{outcome.title}</h3>
              <p className="text-muted-foreground font-medium">{outcome.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
