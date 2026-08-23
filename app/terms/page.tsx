import React from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
 title:"Terms of Service",
 description:"Terms of Service for DWD AI Inc.",
 canonicalUrl:"https://dwd.agency/terms",
});

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <SectionContainer>
        <div className="max-w-4xl mx-auto space-y-10 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <div className="border-b border-border pb-8">
            <span className="text-sm font-mono text-primary font-semibold uppercase tracking-wider">Legal Agreement</span>
            <h1 className="text-4xl sm:text-5xl font-black text-foreground mt-2 tracking-tight">Terms of Service</h1>
            <p className="text-sm text-muted-foreground mt-4 font-mono">Effective Date: August 23, 2026 | Last Updated: August 23, 2026</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing the website at dwd.agency, or by utilizing any of the consulting, software engineering, or autonomous AI implementation services provided by Digital Wealth Defense ("DWD", "we", "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree with any part of these Terms, you must refrain from using our Services.
            </p>
            <p>
              For enterprise clients engaging in custom implementations, these Terms act as the baseline agreement and will be superseded by the specific clauses of a customized Master Services Agreement (MSA) and Statement of Work (SOW) mutually signed by both parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">2. Scope of Services & AI Consulting</h2>
            <p>
              DWD specializes in the strategic design, deployment, and management of autonomous AI agents, enterprise automation workflows, and full-stack web applications. Our services are categorized into three primary phases:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Phase 1: Discovery & Architecture:</strong> A deep-dive audit of your existing systems to design an AI implementation blueprint and map operational bottlenecks.</li>
              <li><strong className="text-foreground">Phase 2: Development & Integration:</strong> Custom engineering of LLM pipelines, autonomous agents, vector databases, and API integrations.</li>
              <li><strong className="text-foreground">Phase 3: Managed Operations (Retainer):</strong> Ongoing maintenance, model optimization, security patching, and scaling of the deployed AI systems.</li>
            </ul>
            <p>
              While AI technologies are designed to emulate deterministic logic, their probabilistic nature means output variance is possible. DWD engineers systems with rigorous testing, few-shot guardrails, and validation layers, but we do not guarantee absolute infallibility of generative AI outputs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">3. Intellectual Property Rights (IP)</h2>
            <p>
              The ownership of intellectual property generated during our engagement is governed strictly by the following conditions:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Client Ownership:</strong> Upon receipt of full and final payment, the Client retains exclusive ownership of all custom-developed software code, proprietary prompt templates, vector embeddings generated from Client data, and business logic schemas uniquely architected for their use case.</li>
              <li><strong className="text-foreground">DWD Proprietary Tooling:</strong> DWD retains all rights to any pre-existing foundational code libraries, scaffolding templates, deployment scripts, and internal frameworks ("Background IP") utilized to accelerate development. Clients are granted a perpetual, non-exclusive, royalty-free license to use this Background IP as integrated into their final deliverable.</li>
              <li><strong className="text-foreground">Client Data:</strong> The Client retains full ownership of all data, text, images, and knowledge bases provided to DWD for system training.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">4. Payment Terms & Subscriptions</h2>
            <p>
              For retainer-based managed services and phased implementation builds, invoices are generated automatically and are payable within standard Net-15 terms unless otherwise specified in your MSA.
            </p>
            <p>
              <strong className="text-foreground">Third-Party LLM Costs:</strong> Unless utilizing an inclusive enterprise tier, Clients are responsible for the direct costs associated with third-party Large Language Model APIs (e.g., OpenAI, Anthropic) and cloud infrastructure hosting (e.g., AWS, Supabase). DWD will assist in estimating and optimizing these operational expenditures.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">5. Warranties & Limitation of Liability</h2>
            <p>
              <strong className="text-foreground">As-Is Service:</strong> DWD provides services on an "as-is" and "as-available" basis. While we adhere to elite engineering standards, we make no implied warranties of merchantability or fitness for a particular purpose, especially concerning the evolving capabilities and constraints of third-party AI models.
            </p>
            <p>
              <strong className="text-foreground">Limitation of Liability:</strong> To the maximum extent permitted by applicable law, in no event shall DWD, its directors, employees, or partners be liable for any indirect, punitive, incidental, special, or consequential damages, including without limitation lost profits, lost data, or business interruption, arising out of the use or inability to use our customized AI systems or web applications. Total aggregate liability shall not exceed the amount paid by the Client to DWD in the preceding three (3) months.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">6. System Availability & Third-Party Dependencies</h2>
            <p>
              DWD builds resilient architectures featuring automated failover, request retries, and rate-limiting. However, our AI solutions are intrinsically reliant on external infrastructural providers (e.g., OpenAI API, Vercel, telecom networks for voice agents). DWD is not responsible for downtime, latency spikes, or service degradation originating from these upstream third-party dependencies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">7. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any dispute arising from these Terms or the breach thereof shall be resolved through binding arbitration in Wilmington, Delaware, in accordance with the Commercial Arbitration Rules of the American Arbitration Association.
            </p>
          </section>
        </div>
      </SectionContainer>
    </div>
  );
}
