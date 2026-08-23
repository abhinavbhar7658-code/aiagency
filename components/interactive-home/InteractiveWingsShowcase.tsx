"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const wings = [
  {
    id: "content",
    title: "Content AI Wing",
    color: "bg-primary text-white",
    borderColor: "border-black",
    icon: <Sparkles className="w-8 h-8" />,
    description: "Scroll-stopping social media posts, shorts, reels, and high-CTR thumbnails generated at scale.",
    href: "/content-agency",
  },
  {
    id: "web",
    title: "Web & AI Wing",
    color: "bg-secondary text-white",
    borderColor: "border-black",
    icon: <Globe className="w-8 h-8" />,
    description: "High-converting Next.js websites, FAQ chatbots, and intelligent voice telephony agents.",
    href: "/web-ai-agency",
  },
  {
    id: "automation",
    title: "Automation Wing",
    color: "bg-white text-foreground",
    borderColor: "border-black",
    icon: <Zap className="w-8 h-8" />,
    description: "Multi-step chained workflows across WhatsApp, CRM, Email, and Google Sheets.",
    href: "/automation-agency",
  }
];

export function InteractiveWingsShowcase() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-foreground">
            Our <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Wings</span>
          </h2>
          <p className="mt-4 text-xl font-bold text-foreground max-w-2xl mx-auto">
            Three highly specialized autonomous divisions built to scale your operations without linear headcount.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {wings.map((wing) => (
            <Link 
              key={wing.id} 
              href={wing.href}
              onMouseEnter={() => setHovered(wing.id)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "group relative rounded-3xl border-4 p-8 flex flex-col justify-between transition-all duration-300 h-[400px]",
                wing.color,
                wing.borderColor,
                hovered === wing.id ? "scale-105 shadow-[12px_12px_0_rgba(0,0,0,1)] z-10" : "shadow-[6px_6px_0_rgba(0,0,0,1)] scale-100 z-0",
                hovered !== null && hovered !== wing.id ? "grayscale opacity-50 blur-[2px]" : "grayscale-0 opacity-100 blur-0"
              )}
            >
              <div>
                <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center mb-6 border-2 border-current">
                  {wing.icon}
                </div>
                <h3 className="text-3xl font-black uppercase leading-none mb-4 tracking-tight">
                  {wing.title}
                </h3>
                <p className="text-lg font-bold opacity-90 leading-snug">
                  {wing.description}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-8 font-black uppercase tracking-wider">
                <span>Explore Wing</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
