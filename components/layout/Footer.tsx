"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";
import { CheckCircle2, Send, Lock } from "lucide-react";

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        type: "error",
        title: "Invalid Email",
        message: "Please provide a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer_newsletter" }),
      });

      const data = await res.json();
      if (data.success) {
        setIsSubscribed(true);
        toast({
          type: "success",
          title: "Subscribed Successfully",
          message: "You will receive our bi-weekly enterprise AI playbooks.",
        });
      } else {
        throw new Error(data.error || "Failed to subscribe");
      }
    } catch (err: any) {
      toast({
        type: "error",
        title: "Subscription Failed",
        message: err.message || "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="border-t border-border bg-background text-muted-foreground relative overflow-hidden pt-16 pb-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="rounded-2xl border border-border bg-card p-8 lg:p-10 mb-16 relative overflow-hidden shadow-sm">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">
                DWD AI Newsletter
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight uppercase">
                Learn to Grow With AI
              </h3>
              <p className="text-sm font-medium text-muted-foreground max-w-xl leading-relaxed">
                Join our newsletter to receive actionable guides on AI automation, content strategy, and business growth.
              </p>
            </div>

            <div className="lg:col-span-5 relative z-10">
              {isSubscribed ? (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-primary/10 border border-primary text-primary text-sm font-bold">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>You're subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2.5">
                  <Input
                    type="email"
                    placeholder="Enter your work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="shrink-0 bg-primary text-primary-foreground font-bold hover:scale-[1.02] transition-transform"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                    <Send className="w-4 h-4 ml-1.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl bg-white p-1 shadow-sm border border-border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/assets/logo.png"
                  alt="DWD Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                  DWD
                </span>
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                  AI Systems
                </span>
              </div>
            </Link>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-sm">
              We build AI-powered content, automation and digital systems designed around how your business actually works.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-black text-foreground tracking-wider uppercase mb-4">Company</p>
            <ul className="space-y-2.5 text-sm font-medium">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-black text-foreground tracking-wider uppercase mb-4">Services</p>
            <ul className="space-y-2.5 text-sm font-medium">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI */}
          <div>
            <p className="text-sm font-black text-foreground tracking-wider uppercase mb-4">AI</p>
            <ul className="space-y-2.5 text-sm font-medium">
              {footerLinks.ai.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Trust Row */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-muted-foreground">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-primary" />
            <span>Secure Enterprise Architecture</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
            <span>© {new Date().getFullYear()} DWD AI Agency. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
