"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileNav } from "./MobileNav";
import { 
 ChevronDown, 
 Sparkles, 
 Menu, 
 ArrowRight,
 ShieldCheck,
 Bot,
 Zap,
 PhoneCall,
 Globe,
 BarChart3,
 Headphones
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  "/ai-agents": <Bot className="w-4 h-4 text-primary" />,
  "/services/ai-automation": <Zap className="w-4 h-4 text-primary" />,
  "/services/ai-customer-support": <Headphones className="w-4 h-4 text-primary" />,
  "/services/ai-lead-generation": <Sparkles className="w-4 h-4 text-primary" />,
  "/services/ai-voice-agents": <PhoneCall className="w-4 h-4 text-amber-400" />,
  "/services/ai-web-development": <Globe className="w-4 h-4 text-primary" />,
  "/services/ai-analytics": <BarChart3 className="w-4 h-4 text-purple-400" />,
  "/services/cybersecurity": <ShieldCheck className="w-4 h-4 text-primary" />,
  "/products/dlp": <ShieldCheck className="w-4 h-4 text-primary" />,
  "/products/mfa": <ShieldCheck className="w-4 h-4 text-primary" />,
  "/products/sso": <ShieldCheck className="w-4 h-4 text-primary" />,
  "/products/pam": <ShieldCheck className="w-4 h-4 text-primary" />,
  "/products/iam": <ShieldCheck className="w-4 h-4 text-primary" />,
};

export function Navbar() {
 const pathname = usePathname();
 const [isScrolled, setIsScrolled] = useState(false);
 const [isMobileOpen, setIsMobileOpen] = useState(false);
 const [openDropdown, setOpenDropdown] = useState<string | null>(null);

 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 15);
 };
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return (
 <>
  <header
    className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-border shadow-sm",
      isScrolled ? "py-3 shadow-md" : "py-4 sm:py-5"
    )}
  >
 <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
 {/* Brand Logo & Name */}
 <Link href="/" className="flex items-center gap-3 group focus:outline-none shrink-0">
 <div className="relative w-11 h-11 rounded-xl bg-white p-1 shadow-md border border-border dark:border-primary flex items-center justify-center transition-transform group-hover:scale-105">
 <Image
 src="/assets/logo.png"
 alt="DWD Digital Wealth Defense Logo"
 fill
 className="object-contain p-0.5"
 priority
 />
 </div>
 <div className="flex flex-col">
 <span className="font-extrabold text-lg sm:text-xl tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
 DWD <span className="text-primary">AI</span>
 </span>
 <span className="text-[10px] tracking-wider uppercase text-muted-foreground dark:text-muted-foreground font-semibold font-mono whitespace-nowrap">
 Digital Wealth Defense
 </span>
 </div>
 </Link>

 {/* Desktop Navigation Links */}
 <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
 {navigationData.map((item) => {
 const isActive = pathname === item.href || (item.children && item.children.some(c => pathname === c.href));
 
 if (item.children) {
 return (
 <div
 key={item.label}
 className="relative group"
 onMouseEnter={() => setOpenDropdown(item.label)}
 onMouseLeave={() => setOpenDropdown(null)}
 >
 <button
 className={cn("flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors focus:outline-none",
 isActive
 ?"text-primary bg-primary/10 font-semibold"
 :"text-foreground dark:text-muted-foreground hover:text-slate-950 dark:hover:text-foreground hover:bg-muted dark:hover:bg-background"
 )}
 >
 <span>{item.label}</span>
 <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
 </button>

 {/* Dropdown Menu */}
 <div
 className={cn("absolute top-full left-0 w-80 pt-2 transition-all duration-200",
 openDropdown === item.label ?"opacity-100 visible translate-y-0" :"opacity-0 invisible -translate-y-2 pointer-events-none"
 )}
 >
 <div className="rounded-2xl border border-border dark:border-border bg-card dark:bg-background p-2.5 shadow-2xl shadow-black/10 dark:shadow-black/80 space-y-1">
 {item.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-muted dark:hover:bg-background transition-all group/sub"
                        >
                          <div className="p-2 rounded-lg bg-muted dark:bg-background border border-border dark:border-border group-hover/sub:border-primary/40 transition-colors shrink-0">
 {iconMap[sub.href] || <Sparkles className="w-4 h-4 text-primary" />}
 </div>
 <div className="flex-1 min-w-0">
 <div className="flex items-center gap-2">
 <span className="text-sm font-semibold text-foreground group-hover/sub:text-primary transition-colors whitespace-nowrap">
 {sub.label}
 </span>
 {sub.badge && (
 <Badge variant="default" className="text-[10px] py-0 px-1.5 h-4">
 {sub.badge}
 </Badge>
 )}
 </div>
 <p className="text-sm text-muted-foreground dark:text-muted-foreground line-clamp-1 mt-0.5">
 {sub.description}
 </p>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </div>
 );
 }

 return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn("flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors",
                            isActive
                              ? "text-primary bg-primary/10 font-semibold"
                              : "text-foreground dark:text-muted-foreground hover:text-slate-950 dark:hover:text-foreground hover:bg-muted dark:hover:bg-background"
                          )}
                        >
 <span>{item.label}</span>
 {item.badge && (
 <Badge variant="default" className="text-[10px] py-0 px-1.5 h-4">
 {item.badge}
 </Badge>
 )}
 </Link>
 );
 })}
 </nav>

 {/* Desktop Right Actions: Theme Toggle + CTAs */}
 <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
 <ThemeToggle />

 <Button asChild variant="outline" size="sm" className="whitespace-nowrap font-medium">
 <Link href="/contact">Start a Project</Link>
 </Button>

 <Button asChild variant="default" size="sm" className="glow-pill whitespace-nowrap">
 <Link href="/book-call" className="flex items-center gap-1.5">
 <span>Book a Strategy Call</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </Button>
 </div>

 {/* Mobile Menu & Theme Toggle */}
 <div className="flex items-center gap-2 lg:hidden">
 <ThemeToggle />
 
 <Button asChild variant="default" size="sm" className="text-sm px-3">
 <Link href="/book-call">Book Call</Link>
 </Button>

              <button
                onClick={() => setIsMobileOpen(true)}
                className="p-2 rounded-xl border border-border dark:border-border bg-muted dark:bg-background text-foreground dark:text-muted-foreground hover:text-slate-950 dark:hover:text-foreground transition-colors focus:outline-none"
                aria-label="Open mobile navigation menu"
              >
 <Menu className="w-5 h-5" />
 </button>
 </div>
 </div>
 </header>

 {/* Mobile Navigation Drawer */}
 <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
 </>
 );
}
