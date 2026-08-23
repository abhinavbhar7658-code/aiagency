"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastType ="success" |"error" |"info";

interface Toast {
 id: string;
 type: ToastType;
 title: string;
 message?: string;
}

interface ToastContextType {
 toast: (options: { type?: ToastType; title: string; message?: string }) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
 const [toasts, setToasts] = useState<Toast[]>([]);

 const toast = useCallback(
 ({ type ="info", title, message }: { type?: ToastType; title: string; message?: string }) => {
 const id = Math.random().toString(36).substring(2, 9);
 setToasts((prev) => [...prev, { id, type, title, message }]);

 setTimeout(() => {
 setToasts((prev) => prev.filter((t) => t.id !== id));
 }, 5000);
 },
 []
 );

 const removeToast = (id: string) => {
 setToasts((prev) => prev.filter((t) => t.id !== id));
 };

 return (
 <ToastContext.Provider value={{ toast }}>
 {children}
 <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2 pointer-events-none max-w-sm w-full">
 {toasts.map((t) => (
 <div
 key={t.id}
 className={cn("pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-5",
 t.type ==="success" &&"bg-background border-primary text-foreground",
 t.type ==="error" &&"bg-background border-red-500/40 text-foreground",
 t.type ==="info" &&"bg-background border-primary text-foreground"
 )}
 >
 {t.type ==="success" && <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />}
 {t.type ==="error" && <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />}
 {t.type ==="info" && <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />}

 <div className="flex-1 text-sm">
 <p className="font-semibold text-foreground">{t.title}</p>
 {t.message && <p className="text-muted-foreground text-sm mt-0.5">{t.message}</p>}
 </div>

 <button
 onClick={() => removeToast(t.id)}
 className="text-muted-foreground hover:text-foreground p-1 rounded-lg transition-colors"
 >
 <X className="w-4 h-4" />
 </button>
 </div>
 ))}
 </div>
 </ToastContext.Provider>
 );
}

export function useToast() {
 const context = useContext(ToastContext);
 if (!context) {
 throw new Error("useToast must be used within a ToastProvider");
 }
 return context;
}
