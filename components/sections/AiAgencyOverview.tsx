"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PenTool, Zap, Globe2 } from "lucide-react";

export function AiAgencyOverview() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6">
            ONE AI AGENCY. <br /> THREE POWERFUL WINGS.
          </h2>
        </div>

        <div className="space-y-12">
          {/* Wing 1 */}
          <div className="flex flex-col lg:flex-row gap-12 bg-background border border-border p-8 md:p-12 rounded-2xl shadow-sm">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest">
                <PenTool className="w-4 h-4" /> Wing 1
              </div>
              <h3 className="text-2xl font-black uppercase">CONTENT AI AGENCY</h3>
              <h4 className="text-xl font-bold text-primary">Social Media Posts, Carousels & Reels That Convert</h4>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Stop the scroll with high-converting social media posts, multi-slide educational carousels, ready-to-record short-form scripts, high-CTR thumbnails, and strategic monthly content calendars.
              </p>
              <Button asChild className="bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform">
                <Link href="/services/content-ai">GET YOUR CONTENT SYSTEM <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
            <div className="flex-1 bg-muted/30 rounded-xl p-8 border border-border">
              <h5 className="font-bold text-sm uppercase tracking-wider mb-4 border-b border-border pb-2">Deliverables</h5>
              <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                <li>• 12–30 custom posts and platform-tailored captions per month</li>
                <li>• 2–8 high-retention Reels / Shorts scripts</li>
                <li>• High-CTR thumbnail graphics</li>
                <li>• Reusable brand template kits</li>
                <li>• 30-day strategic content calendar</li>
              </ul>
            </div>
          </div>

          {/* Wing 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 bg-background border border-border p-8 md:p-12 rounded-2xl shadow-sm">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-sm uppercase tracking-widest">
                <Zap className="w-4 h-4" /> Wing 2
              </div>
              <h3 className="text-2xl font-black uppercase">AUTOMATION AI AGENCY</h3>
              <h4 className="text-xl font-bold text-secondary">Workflows, WhatsApp Bots & CRM Automation</h4>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Eliminate repetitive manual tasks and slow response times. DWD builds automated multi-step AI pipelines across WhatsApp, CRM, Email and Google Sheets.
              </p>
              <Button asChild className="bg-secondary text-muted-foreground font-bold hover:scale-105 transition-transform">
                <Link href="/services/automation-ai">AUTOMATE YOUR BUSINESS <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
            <div className="flex-1 bg-muted/30 rounded-xl p-8 border border-border">
              <h5 className="font-bold text-sm uppercase tracking-wider mb-4 border-b border-border pb-2">Deliverables</h5>
              <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                <li>• Rapid WhatsApp and website lead qualification workflows</li>
                <li>• n8n / Make / Zapier automation</li>
                <li>• Multi-touch email follow-up sequences</li>
                <li>• Knowledge-grounded support bots</li>
                <li>• CRM automation & lead routing</li>
              </ul>
            </div>
          </div>

          {/* Wing 3 */}
          <div className="flex flex-col lg:flex-row gap-12 bg-background border border-border p-8 md:p-12 rounded-2xl shadow-sm">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-widest">
                <Globe2 className="w-4 h-4" /> Wing 3
              </div>
              <h3 className="text-2xl font-black uppercase">WEB & AI SYSTEMS</h3>
              <h4 className="text-xl font-bold text-accent">High-Converting Websites, Chatbots & Voice Agents</h4>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Upgrade from generic templates to fast, conversion-focused Next.js websites equipped with AI chatbots, lead capture funnels and voice-agent experiences.
              </p>
              <Button asChild className="bg-accent text-accent-foreground font-bold hover:scale-105 transition-transform">
                <Link href="/services/web-ai-systems">BUILD YOUR AI SYSTEM <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
            <div className="flex-1 bg-muted/30 rounded-xl p-8 border border-border">
              <h5 className="font-bold text-sm uppercase tracking-wider mb-4 border-b border-border pb-2">Deliverables</h5>
              <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                <li>• Up to 5 pages of custom conversion-focused website</li>
                <li>• Next.js implementation with responsive UX</li>
                <li>• SEO-ready structure & CRM-ready architecture</li>
                <li>• Brand-voiced FAQ chatbot & conversational decision tree</li>
                <li>• Conversational voice-agent script</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
