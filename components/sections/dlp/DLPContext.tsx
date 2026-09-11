import React from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";
import { Search, Tags, Activity, Sliders, ShieldCheck } from "lucide-react";

export function DLPContext() {
  return (
    <>
      {/* Problem Section */}
      <section className="py-24 bg-card/30 border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sm font-mono text-primary font-semibold uppercase tracking-wider">
                The Security Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
                Your Data Is Everywhere. <br/>
                Your Security Should Be Too.
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Modern organizations handle sensitive information across multiple systems, users, applications, devices, and cloud environments.
                </p>
                <p>
                  The challenge is not simply storing data securely. The true challenge lies in understanding:
                </p>
              </div>
              <ul className="space-y-3 pt-2">
                {[
                  "What data is sensitive?",
                  "Where does it exist?",
                  "Who can access it?",
                  "How is it being used?",
                  "Where is it going?",
                  "What happens when someone tries to move it?"
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground font-medium">
                    <span className="text-primary font-bold">→</span>
                    {q}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground pt-4 font-medium border-l-2 border-primary pl-4">
                DLP helps organizations answer these questions and apply appropriate controls.
              </p>
            </div>
            
            <div className="bg-background rounded-3xl border border-border p-8 shadow-sm">
              <h3 className="font-bold text-lg mb-6">Common Data Exposure Channels</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Email", "Cloud storage", "File sharing", "Endpoints", "USB devices", 
                  "Collaboration platforms", "Web applications", "Printing", "Copy and paste", 
                  "Screenshots", "Unauthorized file transfers", "Accidental sharing", "Insider activity"
                ].map((channel, idx) => (
                  <div key={idx} className="px-3.5 py-2 rounded-xl bg-secondary/5 border border-border text-sm font-medium text-muted-foreground">
                    {channel}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="py-24 bg-background border-b border-border overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Data Lifecycle"
            title="Protect Data Throughout Its Lifecycle"
            subtitle="Discover → Classify → Monitor → Control → Protect"
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-border z-0" />
            
            {[
              {
                step: "01",
                title: "DISCOVER",
                desc: "Identify sensitive and business-critical information across supported environments.",
                icon: Search
              },
              {
                step: "02",
                title: "CLASSIFY",
                desc: "Categorize information according to organizational policies, sensitivity, and regulatory obligations.",
                icon: Tags
              },
              {
                step: "03",
                title: "MONITOR",
                desc: "Gain visibility into how sensitive information is accessed, used, copied, transferred, and shared.",
                icon: Activity
              },
              {
                step: "04",
                title: "CONTROL",
                desc: "Apply policies based on users, data types, applications, destinations, devices, and activities.",
                icon: Sliders
              },
              {
                step: "05",
                title: "PROTECT",
                desc: "Prevent or respond to policy violations using appropriate enforcement actions.",
                icon: ShieldCheck
              }
            ].map((item, i) => (
              <Card key={i} className="relative z-10 bg-card border-border p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground font-bold mb-2 uppercase tracking-widest">Step {item.step}</span>
                <h4 className="text-base font-bold text-foreground mb-3 uppercase tracking-wide">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
