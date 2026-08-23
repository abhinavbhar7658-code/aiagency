"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DWDSystemVisualizer } from "./DWDSystemVisualizer";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-foreground text-sm font-bold uppercase tracking-widest shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              DWD AI Systems
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1] uppercase">
              Build Your <br className="hidden sm:block" />
              Business With <span className="text-primary decoration-primary">AI.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              DWD builds AI-powered content, automation and digital systems that help businesses attract customers, reduce repetitive work and grow faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-xl bg-primary text-primary-foreground hover:scale-105 transition-transform font-bold tracking-wide">
                <Link href="/book-call" className="flex items-center justify-center gap-2">
                  <span>BOOK A STRATEGY CALL</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-border bg-card text-foreground hover:bg-muted hover:scale-105 transition-transform font-bold tracking-wide">
                <Link href="/services">
                  EXPLORE OUR SERVICES
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Visualizer */}
          <div className="flex-1 w-full max-w-xl mx-auto lg:max-w-none">
            <DWDSystemVisualizer />
          </div>
          
        </div>
      </div>
    </section>
  );
}
