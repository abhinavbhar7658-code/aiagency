import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Bot, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
 return (
 <div className="pt-32 pb-20 min-h-[70vh] flex items-center justify-center">
 <SectionContainer className="text-center">
 <div className="max-w-md mx-auto space-y-6">
 <div className="w-16 h-16 rounded-3xl bg-primary border border-primary flex items-center justify-center mx-auto">
 <Bot className="w-8 h-8 text-primary" />
 </div>

 <div className="space-y-2">
 <span className="text-sm font-mono text-primary uppercase tracking-widest font-bold">
 404 — System Route Not Found
 </span>
 <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
 Page Does Not Exist
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed">
 The page or resource you are looking for may have been moved, renamed, or is currently under private development.
 </p>
 </div>

 <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
 <Button asChild size="default" variant="default" className="w-full sm:w-auto glow-pill">
 <Link href="/" className="flex items-center justify-center gap-2">
 <Home className="w-4 h-4" />
 <span>Return to Homepage</span>
 </Link>
 </Button>
 <Button asChild size="default" variant="secondary" className="w-full sm:w-auto">
 <Link href="/services">Explore AI Solutions</Link>
 </Button>
 </div>
 </div>
 </SectionContainer>
 </div>
 );
}
