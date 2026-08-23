import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, CheckCircle2, Zap } from "lucide-react";

export function FinalCTASection() {
  return (
    <section id="cta" className="relative py-24 bg-card">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-border bg-background p-8 sm:p-12 lg:p-16 text-center shadow-sm overflow-hidden">
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight uppercase">
              READY TO UPGRADE YOUR BUSINESS?
            </h2>

            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
              Tell us what you're trying to improve. We'll help you identify the right AI solution to attract more customers and reduce repetitive work.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 bg-primary text-primary-foreground font-black tracking-wide hover:scale-105 transition-transform">
                <Link href="/book-call" className="flex items-center justify-center gap-2">
                  <span>BOOK A STRATEGY CALL</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 border-border bg-card text-foreground hover:bg-muted font-black tracking-wide hover:scale-105 transition-transform">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <span>START A PROJECT</span>
                </Link>
              </Button>
            </div>

            <div className="pt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Production-Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span>Measurable Outcomes</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span>Business-First Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
