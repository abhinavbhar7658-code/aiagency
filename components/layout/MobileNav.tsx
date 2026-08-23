"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { X, ChevronRight, ChevronDown, ArrowRight, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
 isOpen: boolean;
 onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
 const pathname = usePathname();
 const [expandedSolutions, setExpandedSolutions] = useState(true);

 if (!isOpen) return null;

 return (
 <div className="fixed inset-0 z-[100] lg:hidden">
 {/* Backdrop */}
 <div
 className="fixed inset-0 bg-black/80 animate-in fade-in duration-200"
 onClick={onClose}
 />

 {/* Drawer */}
 <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-background border-l border-border dark:border-border p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto">
 <div className="space-y-6">
 {/* Header */}
 <div className="flex items-center justify-between pb-4 border-b border-border dark:border-border">
 <Link href="/" onClick={onClose} className="flex items-center gap-3">
 <div className="relative w-10 h-10 rounded-xl bg-white p-1 shadow-md border border-border dark:border-primary flex items-center justify-center shrink-0">
 <Image
 src="/assets/logo.png"
 alt="DWD Digital Wealth Defense Logo"
 fill
 className="object-contain p-0.5"
 />
 </div>
 <div className="flex flex-col">
 <span className="font-extrabold text-foreground text-base">
 DWD <span className="text-primary dark:text-primary">AI</span>
 </span>
 <span className="text-[9px] uppercase font-mono text-muted-foreground dark:text-muted-foreground font-semibold">
 Digital Wealth Defense
 </span>
 </div>
 </Link>

 <div className="flex items-center gap-2">
 <ThemeToggle />
 <button
 onClick={onClose}
 className="p-2 rounded-lg text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground hover:bg-secondary dark:hover:bg-background transition-colors"
 aria-label="Close menu"
 >
 <X className="w-5 h-5" />
 </button>
 </div>
 </div>

 {/* Nav Items */}
 <div className="space-y-2">
 {navigationData.map((item) => {
 if (item.children) {
 return (
 <div key={item.label} className="rounded-xl border border-border dark:border-border bg-background dark:bg-background overflow-hidden">
 <button
 onClick={() => setExpandedSolutions(!expandedSolutions)}
 className="w-full flex items-center justify-between p-3.5 text-left text-sm font-semibold text-foreground hover:text-primary dark:hover:text-primary transition-colors"
 >
 <span>{item.label}</span>
 <ChevronDown
 className={cn("w-4 h-4 text-muted-foreground transition-transform duration-200",
 expandedSolutions &&"rotate-180"
 )}
 />
 </button>
 {expandedSolutions && (
 <div className="px-3 pb-3 space-y-1 border-t border-border dark:border-border pt-2">
 {item.children.map((sub) => (
 <Link
 key={sub.href}
 href={sub.href}
 onClick={onClose}
 className="flex items-center justify-between p-2 rounded-lg text-sm font-medium text-foreground dark:text-muted-foreground hover:text-slate-950 dark:hover:text-foreground hover:bg-muted dark:hover:bg-card transition-colors"
 >
 <span>{sub.label}</span>
 {sub.badge && (
 <Badge variant="default" className="text-[9px] py-0 px-1.5 h-3.5">
 {sub.badge}
 </Badge>
 )}
 </Link>
 ))}
 </div>
 )}
 </div>
 );
 }

 const isActive = pathname === item.href;
 return (
 <Link
 key={item.href}
 href={item.href}
 onClick={onClose}
 className={cn("flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors",
 isActive
 ?"bg-primary text-primary dark:text-primary font-semibold"
 :"text-foreground dark:text-muted-foreground hover:text-slate-950 dark:hover:text-foreground hover:bg-secondary dark:hover:bg-background"
 )}
 >
 <div className="flex items-center gap-2">
 <span>{item.label}</span>
 {item.badge && (
 <Badge variant="indigo" className="text-[10px] py-0 px-1.5 h-4">
 {item.badge}
 </Badge>
 )}
 </div>
 <ChevronRight className="w-4 h-4 text-muted-foreground" />
 </Link>
 );
 })}
 </div>
 </div>

 {/* Bottom CTA Block */}
 <div className="pt-6 border-t border-border dark:border-border space-y-3">
 <Button asChild variant="default" size="lg" className="w-full">
 <Link href="/book-call" onClick={onClose} className="flex items-center justify-center gap-2">
 <span>Book a Strategy Call</span>
 <ArrowRight className="w-4 h-4" />
 </Link>
 </Button>
 <Button asChild variant="outline" size="lg" className="w-full">
 <Link href="/contact" onClick={onClose}>
 Start a Project
 </Link>
 </Button>

 <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2 font-mono">
 <Shield className="w-3.5 h-3.5 text-primary" />
 <span>Enterprise Security & Isolation</span>
 </div>
 </div>
 </div>
 </div>
 );
}
