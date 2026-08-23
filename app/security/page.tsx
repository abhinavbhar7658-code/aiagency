import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Enterprise Security Architecture & Compliance",
  description: "Learn how DWD protects your proprietary company data through strict tenant isolation, zero model retention, and role-based access control.",
  canonicalUrl: "https://dwd.agency/security",
});

export default function SecurityPage() {
  return (
    <div className="pt-28 pb-20">
      <SectionContainer>
        <div className="max-w-4xl mx-auto space-y-10 text-muted-foreground text-base leading-relaxed">
          <div className="border-b border-border pb-8">
            <span className="text-sm font-mono text-primary font-semibold uppercase tracking-wider">Trust & Security</span>
            <h1 className="text-4xl sm:text-5xl font-black text-foreground mt-2 tracking-tight">Enterprise Security Architecture</h1>
            <p className="text-sm text-muted-foreground mt-4 font-mono">Effective Date: August 23, 2026</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">1. Our Security Philosophy</h2>
            <p>
              At Digital Wealth Defense (DWD), we understand that an AI agency's true value lies not just in automation, but in the absolute protection of proprietary data. We engineer our AI systems with a <strong className="text-foreground">Security-First, Zero-Trust</strong> mindset. From the edge network to the database layer, our architecture is designed to prevent data leakage, mitigate prompt injection, and guarantee tenant isolation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">2. Zero Data Retention & LLM Privacy</h2>
            <p>
              The most common concern with Enterprise AI is the risk of proprietary data being absorbed into public models. We eliminate this risk entirely:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Enterprise API Endpoints:</strong> We exclusively utilize commercial enterprise APIs (e.g., OpenAI API, Anthropic Console) that explicitly guarantee <strong className="text-foreground">Zero Data Retention</strong> for model training. Your data is processed for inference and immediately discarded.</li>
              <li><strong className="text-foreground">No Public Model Training:</strong> Your prompts, knowledge bases, vectors, and output generation are never used to train foundational AI models.</li>
              <li><strong className="text-foreground">Strict Tenant Isolation:</strong> If we deploy fine-tuned models or custom vector databases for your organization, they are hosted in logically isolated environments with dedicated API keys and separated storage volumes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">3. Application Security & Access Control</h2>
            <p>
              All DWD-engineered web systems and dashboards are protected by modern authentication and authorization layers:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Role-Based Access Control (RBAC):</strong> Granular permissions ensure that employees, agents, and external systems can only access the data absolutely necessary for their function (Principle of Least Privilege).</li>
              <li><strong className="text-foreground">Row Level Security (RLS):</strong> Our PostgreSQL databases utilize strict RLS policies to ensure users can only query rows linked to their authorized tenant ID.</li>
              <li><strong className="text-foreground">Multi-Factor Authentication (MFA):</strong> Required for all internal admin access and heavily recommended for client portals.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">4. Data Encryption</h2>
            <p>
              Your data is cryptographically secured at every stage of its lifecycle:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">In Transit:</strong> All communication between users, edge networks, servers, and APIs is encrypted using TLS 1.3.</li>
              <li><strong className="text-foreground">At Rest:</strong> All databases, object storage buckets, and server volumes are encrypted at rest using industry-standard AES-256 encryption.</li>
              <li><strong className="text-foreground">Secret Management:</strong> API keys, webhook secrets, and database credentials are never hardcoded. They are managed via secure, encrypted keystores (e.g., Vercel Environment Variables, AWS Secrets Manager).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">5. AI-Specific Defenses (Prompt Security)</h2>
            <p>
              AI Agents are vulnerable to unique attack vectors such as Prompt Injection and Jailbreaking. DWD implements defensive measures to harden your AI agents:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Input Validation & Sanitization:</strong> All user inputs are strictly parsed and sanitized before being injected into prompt templates.</li>
              <li><strong className="text-foreground">System Prompt Hardening:</strong> We use delimiter isolation, few-shot adversarial examples, and output formatting constraints to prevent agents from executing malicious instructions.</li>
              <li><strong className="text-foreground">Output Verification:</strong> For critical tasks (e.g., executing code, sending emails), an independent "QA Agent" or deterministic heuristic layer validates the output before execution.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">6. Infrastructure Resilience</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">DDoS Protection:</strong> All web traffic is routed through edge networks equipped with advanced DDoS mitigation and Web Application Firewalls (WAF).</li>
              <li><strong className="text-foreground">Rate Limiting:</strong> Granular API rate limits are enforced to prevent abuse, resource exhaustion, and unexpectedly high LLM billing costs.</li>
              <li><strong className="text-foreground">Automated Backups:</strong> Mission-critical databases undergo continuous point-in-time recovery (PITR) logging and daily encrypted backups to multi-region storage.</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">7. Vulnerability Reporting</h2>
            <p>
              We welcome reports from security researchers and responsible disclosures. If you believe you have found a security vulnerability in DWD's systems or our deployed AI products, please report it immediately to our security team at <a href="mailto:dwdsupport1@gmail.com" className="text-primary hover:underline font-semibold">dwdsupport1@gmail.com</a>. We commit to acknowledging all reports within 48 hours.
            </p>
          </section>

          <div className="mt-16 text-center pt-10 border-t border-border">
            <Button asChild size="lg" variant="default" className="glow-pill">
              <Link href="/book-call">Schedule a Security Architecture Review</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
