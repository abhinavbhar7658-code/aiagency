"use client";

import React, { useRef } from "react";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pricingPlans = [
  {
    id: "starter",
    name: "Content Starter",
    price: "?5,000",
    period: "/ mo",
    color: "bg-white",
    textColor: "text-foreground",
    features: [
      "12 Custom Posts / mo",
      "Platform Tailored Captions",
      "Basic Content Calendar",
      "1 Revision Round"
    ],
  },
  {
    id: "pro",
    name: "Growth Engine",
    price: "?15,000",
    period: "/ mo",
    color: "bg-primary text-white",
    textColor: "text-white",
    badge: "Most Popular",
    features: [
      "30 Custom Posts / mo",
      "8 Short-form Video Scripts",
      "Thumbnail Design Kit",
      "Full Content Strategy",
      "Monthly Reporting"
    ],
  },
  {
    id: "automation",
    name: "Automation Build",
    price: "?8,000",
    period: "one-time",
    color: "bg-secondary text-white",
    textColor: "text-white",
    features: [
      "Custom WhatsApp Bot",
      "CRM Integration (HubSpot/Zoho)",
      "Lead Qualification Flow",
      "1 Month Free Support"
    ],
  }
];

export function BoldPricingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white border-y-4 border-black">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-foreground">
              No <span className="text-primary drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">BS</span> Pricing
            </h2>
            <p className="mt-4 text-xl font-bold text-muted-foreground max-w-xl">
              Transparent, flat-rate pricing for AI systems that actually generate ROI.
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => scroll("left")} className="w-14 h-14 rounded-full border-4 border-black bg-yellow-400 flex items-center justify-center hover:bg-yellow-300 hover:scale-105 transition-all shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <ChevronLeft className="w-8 h-8 font-black" />
            </button>
            <button onClick={() => scroll("right")} className="w-14 h-14 rounded-full border-4 border-black bg-yellow-400 flex items-center justify-center hover:bg-yellow-300 hover:scale-105 transition-all shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <ChevronRight className="w-8 h-8 font-black" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={"shrink-0 w-[85vw] sm:w-[400px] snap-center rounded-3xl border-4 border-black p-8 flex flex-col \ shadow-[8px_8px_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-2"}
            >
              {plan.badge && (
                <div className="inline-block px-4 py-1.5 bg-black text-yellow-400 text-sm font-black uppercase tracking-widest rounded-full mb-6 w-fit">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-3xl font-black uppercase mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="text-xl font-bold opacity-80">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center border-2 border-current shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-lg font-bold">{feat}</span>
                  </div>
                ))}
              </div>

              <Button asChild className={`w-full h-16 text-lg font-black uppercase border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all ${plan.id === 'pro' ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'bg-black text-white hover:bg-black/90'}`}>
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
