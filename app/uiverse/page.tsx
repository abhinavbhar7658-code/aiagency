import React from "react";
import { CyberButton } from "@/components/uiverse/CyberButton";
import { GlassCard } from "@/components/uiverse/GlassCard";
import { NeoCheckbox } from "@/components/uiverse/NeoCheckbox";
import { AnimatedInput } from "@/components/uiverse/AnimatedInput";
import { Loader, OrbitLoader } from "@/components/uiverse/Loader";
import { ToggleSwitch } from "@/components/uiverse/ToggleSwitch";

export const metadata = {
  title: "Uiverse UI Showcase | DWD",
  description: "A showcase of attractive UI components built using Uiverse inspirations.",
};

export default function UiverseShowcase() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden font-sans">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <header className="mb-20 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Uiverse.io Inspired
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Next-Gen UI Elements
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            A collection of beautiful, animated, and highly interactive components crafted for modern web applications.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Cards Section */}
          <section className="col-span-1 md:col-span-2 lg:col-span-3 space-y-8">
            <h2 className="text-2xl font-semibold border-b border-white/10 pb-4">Glassmorphism Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassCard 
                title="AI Analytics" 
                description="Harness the power of machine learning to predict trends and optimize your workflow automatically."
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              />
              <GlassCard 
                title="Cyber Security" 
                description="Enterprise-grade protection with advanced threat detection and real-time monitoring."
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
              />
              <GlassCard 
                title="Cloud Infrastructure" 
                description="Scalable, reliable, and globally distributed infrastructure for your mission-critical applications."
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                }
              />
            </div>
          </section>

          {/* Interactive Elements */}
          <section className="col-span-1 lg:col-span-2 space-y-8 mt-12">
            <h2 className="text-2xl font-semibold border-b border-white/10 pb-4">Interactive Controls</h2>
            <div className="bg-white/5 rounded-2xl border border-white/10 p-8 flex flex-col gap-10 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center gap-10">
                <div className="space-y-3">
                  <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider">Cyber Button</h3>
                  <CyberButton>Initialize System</CyberButton>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider">Toggle Switch</h3>
                  <ToggleSwitch />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
                <div className="space-y-3 w-full max-w-xs">
                  <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider">Animated Input</h3>
                  <AnimatedInput />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider">Neo Checkbox</h3>
                  <div className="pt-4">
                    <NeoCheckbox />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Loaders */}
          <section className="col-span-1 space-y-8 mt-12">
            <h2 className="text-2xl font-semibold border-b border-white/10 pb-4">Loaders & Spinners</h2>
            <div className="bg-white/5 rounded-2xl border border-white/10 p-8 flex flex-col gap-12 items-center justify-center backdrop-blur-sm h-full min-h-[300px]">
              <div className="space-y-6 flex flex-col items-center">
                <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider">Orbit Loader</h3>
                <OrbitLoader />
              </div>
              
              <div className="space-y-6 flex flex-col items-center">
                <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider">Bounce Loader</h3>
                <Loader />
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
