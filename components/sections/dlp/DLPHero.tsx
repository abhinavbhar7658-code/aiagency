import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Search, ShieldAlert, Sliders, ShieldCheck } from "lucide-react";

export function DLPHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-background border-b border-border">
      {/* Background abstract elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="font-mono text-primary border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-wider">
                Data Loss Prevention
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
                Protect Your Data. <br/>
                <span className="text-primary">Prevent Loss.</span> <br/>
                Maintain Control.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Sensitive data moves across endpoints, applications, email, cloud platforms, removable media, and collaboration channels every day.
                <br /><br />
                Our Data Loss Prevention solution helps organizations discover sensitive information, monitor how it is being used, and enforce policies designed to prevent unauthorized exposure, transfer, and leakage.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="glow-pill px-8 text-base">
                <Link href="/contact?product=dlp">
                  Talk to a DLP Expert
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 text-base">
                <Link href="#capabilities">
                  Explore DLP Capabilities
                </Link>
              </Button>
            </div>
          </div>

          {/* Abstract Security Architecture Visual */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:ml-auto">
            <div className="absolute inset-0 rounded-3xl border border-border bg-card/40 backdrop-blur-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8">
              <div className="absolute inset-0 mesh-grid opacity-30" />
              
              <div className="relative z-10 w-full max-w-[300px] flex flex-col gap-4">
                
                {/* DATA */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Database className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-muted-foreground uppercase mb-1">Source</div>
                    <div className="font-bold text-sm text-foreground">Sensitive Data</div>
                  </div>
                </div>

                <div className="w-px h-6 bg-border mx-auto" />

                {/* DETECTION */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-muted-foreground uppercase mb-1">Process</div>
                    <div className="font-bold text-sm text-foreground">Discovery & Detection</div>
                  </div>
                </div>

                <div className="w-px h-6 bg-border mx-auto" />

                {/* POLICY & CONTROL */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-background border border-border shadow-sm text-center">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-foreground">Policy Engine</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-background border border-border shadow-sm text-center">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                      <Sliders className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-foreground">Control</div>
                    </div>
                  </div>
                </div>

                <div className="w-px h-6 bg-border mx-auto" />

                {/* PROTECTION */}
                <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-primary/10 border border-primary/30 shadow-sm text-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <span className="font-bold text-lg text-primary tracking-tight">Active Protection</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
