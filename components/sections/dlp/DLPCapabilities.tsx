import React from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";
import { Search, Tags, Sliders, Activity, ArrowRightLeft, ShieldAlert, AlertCircle, FileText } from "lucide-react";

export function DLPCapabilities() {
  const capabilities = [
    {
      title: "DATA DISCOVERY",
      desc: "Identify sensitive information across organizational environments. The solution helps organizations understand where sensitive information exists and improves visibility into the data landscape.",
      icon: Search
    },
    {
      title: "DATA CLASSIFICATION",
      desc: "Classify information based on sensitivity and organizational policies. Examples include Confidential, Restricted, Internal, Public, Financial, Personal Data, and Intellectual Property.",
      icon: Tags
    },
    {
      title: "POLICY MANAGEMENT",
      desc: "Create centralized policies defining how sensitive data should be handled based on user, department, device, application, data type, destination, activity, or business context.",
      icon: Sliders
    },
    {
      title: "REAL-TIME MONITORING",
      desc: "Monitor sensitive data activity and identify potential policy violations including user activity, data movement, policy events, alerts, risk indicators, and audit activity.",
      icon: Activity
    },
    {
      title: "DATA MOVEMENT CONTROL",
      desc: "Control how sensitive information is transferred across channels like email, web uploads, cloud applications, USB/removable media, file transfers, printing, and copy/paste.",
      icon: ArrowRightLeft
    },
    {
      title: "POLICY-BASED ENFORCEMENT",
      desc: "When a policy violation occurs, apply appropriate responses such as Allow, Warn, Block, Quarantine, Log, Alert, or Require Business Justification.",
      icon: ShieldAlert
    },
    {
      title: "INCIDENT & ALERT MANAGEMENT",
      desc: "Provide centralized visibility into DLP incidents including severity, policy triggered, user, device, data type, activity, timestamp, destination, and status.",
      icon: AlertCircle
    },
    {
      title: "AUDIT & REPORTING",
      desc: "Help security teams maintain visibility into historical events with activity logs, policy violations, incident reports, compliance reporting, and secure audit trails.",
      icon: FileText
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-card/30 border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Core Capabilities"
          title="Powerful Data Protection Capabilities"
          subtitle="A comprehensive suite of tools designed to provide visibility and control over your most sensitive information."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <Card key={i} className="group p-6 bg-background border-border hover:border-primary transition-all duration-300 shadow-sm flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <cap.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-3 tracking-wide">{cap.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {cap.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
