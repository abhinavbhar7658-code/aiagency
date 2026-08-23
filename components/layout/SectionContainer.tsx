import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
 children: React.ReactNode;
 className?: string;
 id?: string;
 as?: React.ElementType;
}

export function SectionContainer({
 children,
 className,
 id,
 as: Component ="section",
 ...props
}: SectionContainerProps) {
 return (
 <Component
 id={id}
 className={cn("py-20 md:py-28 lg:py-32 relative overflow-hidden", className)}
 {...props}
 >
 <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 {children}
 </div>
 </Component>
 );
}
