import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
 badge?: string;
 badgeVariant?:"default" |"indigo" |"emerald" |"amber" |"secondary";
 title: string;
 subtitle?: string;
 align?:"center" |"left";
 className?: string;
}

export function SectionHeader({
 badge,
 badgeVariant ="default",
 title,
 subtitle,
 align ="center",
 className,
}: SectionHeaderProps) {
 return (
 <div
 className={cn("mb-12 md:mb-16 max-w-3xl",
 align ==="center" ?"mx-auto text-center" :"text-left",
 className
 )}
 >
 {badge && (
 <div className="mb-4 inline-block">
 <Badge variant={badgeVariant} className="px-3.5 py-1 text-sm tracking-wide uppercase">
 {badge}
 </Badge>
 </div>
 )}
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
 {title}
 </h2>
 {subtitle && (
 <p className="mt-4 text-lg sm:text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed max-w-2xl mx-auto">
 {subtitle}
 </p>
 )}
 </div>
 );
}
