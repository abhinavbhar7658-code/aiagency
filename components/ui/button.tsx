import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
 {
 variants: {
 variant: {
 default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
 secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md",
 outline: "border-2 border-border bg-background text-foreground hover:bg-muted hover:text-foreground shadow-sm",
 ghost:"hover:bg-muted hover:text-foreground",
 link:"text-primary underline-offset-4 hover:underline p-0 h-auto",
 glow:"relative bg-primary text-primary-foreground shadow-[0_4px_14px_0_rgba(255,222,34,0.39)] hover:shadow-[0_6px_20px_rgba(255,222,34,0.23)] hover:-translate-y-0.5 transition-all",
 destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",
 },
 size: {
 default:"h-11 px-5 py-2.5",
 sm:"h-9 rounded-lg px-3.5 text-sm",
 lg:"h-13 rounded-xl px-7 py-3.5 text-base font-semibold",
 icon:"h-10 w-10",
 },
 },
 defaultVariants: {
 variant:"default",
 size:"default",
 },
 }
);

export interface ButtonProps
 extends React.ButtonHTMLAttributes<HTMLButtonElement>,
 VariantProps<typeof buttonVariants> {
 asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
 ({ className, variant, size, asChild = false, ...props }, ref) => {
 const Comp = asChild ? Slot :"button";
 return (
 <Comp
 className={cn(buttonVariants({ variant, size, className }))}
 ref={ref}
 {...props}
 />
 );
 }
);
Button.displayName ="Button";

export { Button, buttonVariants };
