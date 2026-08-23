"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Settings, Globe, ArrowDown, Users, Activity, TrendingUp } from "lucide-react";

export function DWDSystemVisualizer() {
  return (
    <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center bg-card rounded-2xl border border-border shadow-2xl overflow-hidden glass-panel">
      {/* Background Grid */}
      <div className="absolute inset-0 mesh-grid opacity-20" />
      
      <div className="relative z-10 w-full max-w-md p-6 flex flex-col gap-6">
        
        {/* Top Tier: Wings */}
        <div className="flex justify-between items-center gap-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-background border border-border p-3 rounded-lg text-center shadow-sm"
          >
            <FileText className="w-6 h-6 mx-auto text-primary mb-2" />
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Content AI</div>
          </motion.div>
          
          <div className="text-muted-foreground font-black">+</div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex-1 bg-background border border-border p-3 rounded-lg text-center shadow-sm"
          >
            <Settings className="w-6 h-6 mx-auto text-secondary mb-2" />
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Automation AI</div>
          </motion.div>
          
          <div className="text-muted-foreground font-black">+</div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex-1 bg-background border border-border p-3 rounded-lg text-center shadow-sm"
          >
            <Globe className="w-6 h-6 mx-auto text-accent mb-2" />
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Web & AI Systems</div>
          </motion.div>
        </div>

        {/* Down Arrows */}
        <div className="flex justify-center -my-2">
          <ArrowDown className="w-5 h-5 text-muted-foreground/50 animate-bounce" />
        </div>

        {/* Flow Steps */}
        {[
          { label: "LEADS", icon: Users, color: "text-primary", delay: 1.0 },
          { label: "CUSTOMERS", icon: Globe, color: "text-secondary", delay: 1.2 },
          { label: "OPERATIONS", icon: Activity, color: "text-accent", delay: 1.4 },
          { label: "GROWTH", icon: TrendingUp, color: "text-primary", delay: 1.6 }
        ].map((step, idx) => (
          <React.Fragment key={step.label}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: step.delay }}
              className="bg-background border border-border p-3 flex items-center justify-center gap-3 rounded-lg shadow-sm"
            >
              <step.icon className={`w-5 h-5 ${step.color}`} />
              <span className="font-black tracking-widest text-sm">{step.label}</span>
            </motion.div>
            {idx < 3 && (
              <div className="flex justify-center -my-3 z-0">
                <ArrowDown className="w-4 h-4 text-muted-foreground/30" />
              </div>
            )}
          </React.Fragment>
        ))}

      </div>
    </div>
  );
}
