import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Fingerprint, Key, Shield, Users } from "lucide-react";

const products = [
  {
    id: "dlp",
    title: "DLP",
    fullName: "Data Loss Prevention",
    description: "Protect sensitive business information from unauthorized access, sharing, transfer, and accidental or intentional data leakage. DLP provides greater visibility and control over how critical information is accessed, used, and transferred.",
    icon: Database,
    slug: "dlp",
    cta: "Explore DLP"
  },
  {
    id: "mfa",
    title: "MFA",
    fullName: "Multi-Factor Authentication",
    description: "Strengthen user authentication with multiple verification factors and reduce the risk of unauthorized account access. MFA adds an additional layer of protection beyond traditional passwords.",
    icon: Fingerprint,
    slug: "mfa",
    cta: "Explore MFA"
  },
  {
    id: "sso",
    title: "SSO",
    fullName: "Single Sign-On",
    description: "Enable secure and streamlined access to multiple business applications through centralized authentication. SSO simplifies the user experience while improving visibility and control over application access.",
    icon: Key,
    slug: "sso",
    cta: "Explore SSO"
  },
  {
    id: "pam",
    title: "PAM",
    fullName: "Privileged Access Management",
    description: "Secure privileged accounts and critical systems by controlling, monitoring, and governing administrative access. PAM helps organizations reduce risks associated with excessive privileges and unauthorized administrative activity.",
    icon: Shield,
    slug: "pam",
    cta: "Explore PAM"
  },
  {
    id: "iam",
    title: "IAM",
    fullName: "Identity & Access Management",
    description: "Manage digital identities and access permissions across your organization while ensuring users receive appropriate access based on their roles and business requirements. IAM helps improve identity governance, access control, visibility, and security across the enterprise.",
    icon: Users,
    slug: "iam",
    cta: "Explore IAM"
  }
];

export function CybersecurityProductsSection() {
  return (
    <section className="py-24 bg-card/30 border-b border-border" id="cybersecurity-products">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-mono text-primary font-semibold uppercase tracking-wider">
            Cybersecurity Products
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Enterprise Solutions for Data, Identity & Access Security
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Our security solutions help organizations protect sensitive information, secure digital identities, control access, and strengthen their overall security architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.id}
                className="group relative overflow-hidden bg-background border-border hover:border-primary transition-all duration-300 p-8 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-24 h-24 text-primary" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-primary/80 uppercase tracking-wider mb-3">
                      {product.fullName}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 mt-8 pt-6 border-t border-border/50">
                  <Button asChild variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <Link href={`/products/${product.slug}`}>
                      <span>{product.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Final CTA Section specified in the prompt */}
        <div className="mt-24 rounded-3xl border border-border bg-card p-10 md:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Strengthen Your Security Posture?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need a security assessment, compliance support, identity protection, or enterprise security solutions, our team can help you build a stronger and more resilient security foundation.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="glow-pill px-8">
                <Link href="/contact">
                  Talk to Our Security Experts
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="#cybersecurity-products">
                  Explore Our Solutions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
