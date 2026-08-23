"use client";
import React from "react";
import { Check } from "lucide-react";

export function ServiceComparisonSection() {
  const rows = [
    { label: "Main objective", col1: "Audience growth & engagement", col2: "Efficiency & faster responses", col3: "Conversions & digital presence" },
    { label: "Ideal client", col1: "Brands needing consistent content", col2: "Operations swamped with manual tasks", col3: "Businesses needing a modern storefront" },
    { label: "AI capabilities", col1: "Generative text & image workflows", col2: "Logic routing & language processing", col3: "Chatbots & conversational voice agents" },
    { label: "Automation", col1: "Automated publishing calendars", col2: "Zapier, Make, n8n integration", col3: "Lead capture to CRM pipelines" },
    { label: "Reporting", col1: "Monthly performance insights", col2: "Workflow success & failure logs", col3: "Analytics & conversion tracking" },
    { label: "Ongoing support", col1: "Monthly content iterations", col2: "Workflow maintenance & updates", col3: "Website maintenance options" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mb-4">
            FIND THE RIGHT SYSTEM FOR YOUR BUSINESS
          </h2>
          <p className="text-muted-foreground font-medium text-lg">Compare our three core service wings to identify where you should start.</p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-card border-b border-border text-sm font-black uppercase tracking-wider text-muted-foreground">
                <th className="p-4 md:p-6 w-1/4">Feature</th>
                <th className="p-4 md:p-6 w-1/4 border-l border-border text-primary">Content AI</th>
                <th className="p-4 md:p-6 w-1/4 border-l border-border text-secondary">Automation AI</th>
                <th className="p-4 md:p-6 w-1/4 border-l border-border text-accent">Web & AI Systems</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-background">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors text-sm font-medium">
                  <td className="p-4 md:p-6 font-bold text-foreground">{row.label}</td>
                  <td className="p-4 md:p-6 border-l border-border text-muted-foreground">{row.col1}</td>
                  <td className="p-4 md:p-6 border-l border-border text-muted-foreground">{row.col2}</td>
                  <td className="p-4 md:p-6 border-l border-border text-muted-foreground">{row.col3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
