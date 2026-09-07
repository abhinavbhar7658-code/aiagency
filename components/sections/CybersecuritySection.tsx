import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Network, Database, BadgeCheck } from "lucide-react";

const services = [
  {
    id: "security-audit",
    title: "Security Audit",
    description: "Identify vulnerabilities, security gaps, and control weaknesses across your technology, infrastructure, applications, and processes. Our security audits provide actionable insights to strengthen your overall security posture and reduce potential cyber risks.",
    icon: ShieldCheck,
    slug: "security-audit",
    cta: "Explore Security Audits"
  },
  {
    id: "tprm",
    title: "Third-Party Risk Management (TPRM)",
    description: "Identify, assess, and manage cybersecurity risks associated with vendors, suppliers, partners, and other third parties. We help organizations establish a structured approach to evaluating, monitoring, and reducing risks across their external ecosystem.",
    icon: Network,
    slug: "tprm",
    cta: "Explore TPRM"
  },
  {
    id: "dpdp-compliance",
    title: "DPDP Compliance",
    description: "Help your organization establish effective data protection and privacy practices aligned with India's Digital Personal Data Protection requirements. We assess compliance gaps and support the implementation of appropriate privacy processes and controls.",
    icon: Database,
    slug: "dpdp-compliance",
    cta: "Explore DPDP"
  },
  {
    id: "iso-certification",
    title: "ISO Certification Consulting & Readiness",
    description: "Prepare your organization for ISO certification through structured assessments, gap analysis, documentation, control implementation, and certification readiness support. We help organizations establish management systems aligned with applicable international ISO standards.",
    standards: [
      "ISO 27001 — Information Security Management System (ISMS)",
      "ISO 9001 — Quality Management System (QMS)",
      "ISO 14001 — Environmental Management System (EMS)",
      "ISO 45001 — Occupational Health & Safety Management System",
      "ISO 22301 — Business Continuity Management System"
    ],
    icon: BadgeCheck,
    slug: "iso-certification",
    cta: "Explore ISO Certification"
  }
];

export function CybersecuritySection() {
  return (
    <section className="py-24 bg-background border-y border-border" id="cybersecurity">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-mono text-primary font-semibold uppercase tracking-wider">
            CYBERSECURITY & COMPLIANCE
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Secure Your Digital Business. Strengthen Your Trust.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            From cybersecurity assessments and third-party risk management to data privacy and ISO readiness, we help organizations build stronger security and compliance foundations.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button asChild size="lg" className="glow-pill">
              <Link href="#cybersecurity-services">Explore Cybersecurity</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12" id="cybersecurity-services">
            <h3 className="text-2xl font-bold">Build a Secure, Compliant & Resilient Organization</h3>
            <p className="text-muted-foreground mt-2">
              We help organizations strengthen their cybersecurity posture, manage third-party risks, protect personal data, and achieve internationally recognized security and compliance standards.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden bg-card/50 border-border hover:border-primary transition-all duration-300 p-8 flex flex-col justify-between shadow-sm hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-32 h-32 text-primary" />
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {service.standards && (
                    <ul className="space-y-2 pt-4 border-t border-border/50">
                      {service.standards.map((standard, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-foreground">
                          <span className="text-primary font-bold">✓</span>
                          {standard}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="relative z-10 mt-8 pt-6 border-t border-border/50">
                  <Button asChild variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <Link href={`/services/${service.slug}`}>
                      <span>{service.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
