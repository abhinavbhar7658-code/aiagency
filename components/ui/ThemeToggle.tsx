"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
 const [theme, setTheme] = useState<"dark" |"light">("light");
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
 setMounted(true);
 const storedTheme = localStorage.getItem("cf_theme") as"dark" |"light" | null;
 
 // Check system preference if no stored theme
 const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
 const defaultTheme = storedTheme || (prefersDark ?"dark" :"light");
 
 setTheme(defaultTheme);
 if (defaultTheme ==="dark") {
 document.documentElement.classList.add("dark");
 document.documentElement.classList.remove("light");
 } else {
 document.documentElement.classList.remove("dark");
 document.documentElement.classList.add("light");
 }
 }, []);

 const toggleTheme = () => {
 const nextTheme = theme ==="dark" ?"light" :"dark";
 setTheme(nextTheme);
 localStorage.setItem("cf_theme", nextTheme);

 if (nextTheme ==="dark") {
 document.documentElement.classList.add("dark");
 document.documentElement.classList.remove("light");
 } else {
 document.documentElement.classList.remove("dark");
 document.documentElement.classList.add("light");
 }
 };

 if (!mounted) {
 return (
 <div className={cn("w-9 h-9 rounded-xl border border-border bg-background", className)} />
 );
 }

 return (
 <button
 onClick={toggleTheme}
 className={cn("relative p-2 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center justify-center group",
 theme ==="dark"
 ?"border-border bg-background text-amber-300 hover:text-amber-200 hover:border-border hover:bg-card shadow-sm"
 :"border-border bg-white text-primary hover:text-indigo-800 hover:border-slate-400 hover:bg-secondary shadow-sm",
 className
 )}
 aria-label={theme ==="dark" ?"Switch to Light theme" :"Switch to Dark theme"}
 title={theme ==="dark" ?"Switch to Light mode" :"Switch to Dark mode"}
 >
 {theme ==="dark" ? (
 <Sun className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
 ) : (
 <Moon className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12" />
 )}
 </button>
 );
}
