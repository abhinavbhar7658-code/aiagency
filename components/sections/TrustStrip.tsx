"use client";
import React from "react";

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm md:text-base font-black uppercase tracking-widest text-muted-foreground mb-8">
          BUILT FOR BUSINESSES READY TO USE AI SERIOUSLY.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-border/50">
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-black text-primary">120+</span>
            <span className="text-sm font-bold uppercase text-muted-foreground">AI Workflows</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-black text-secondary">50k+</span>
            <span className="text-sm font-bold uppercase text-muted-foreground">Content Assets</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-black text-accent">85+</span>
            <span className="text-sm font-bold uppercase text-muted-foreground">Websites</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-black text-primary">1M+</span>
            <span className="text-sm font-bold uppercase text-muted-foreground">Automations</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-black text-foreground">15+</span>
            <span className="text-sm font-bold uppercase text-muted-foreground">Industries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
