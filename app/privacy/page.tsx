import React from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
 title:"Privacy Policy",
 description:"Privacy Policy for DWD AI Inc.",
 canonicalUrl:"https://dwd.agency/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <SectionContainer>
        <div className="max-w-4xl mx-auto space-y-10 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <div className="border-b border-border pb-8">
            <span className="text-sm font-mono text-primary font-semibold uppercase tracking-wider">Legal Compliance</span>
            <h1 className="text-4xl sm:text-5xl font-black text-foreground mt-2 tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mt-4 font-mono">Effective Date: August 23, 2026 | Last Updated: August 23, 2026</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">1. Introduction and Scope</h2>
            <p>
              Digital Wealth Defense ("DWD", "we", "us", or "our") is committed to protecting the privacy and security of the personal and proprietary business information entrusted to us by our clients, website visitors, and partners. This Comprehensive Privacy Policy outlines our practices regarding the collection, use, processing, transfer, storage, and disclosure of your information when you use our website (dwd.agency), our AI automation services, and any related software or consulting solutions (collectively, the "Services").
            </p>
            <p>
              By accessing or using our Services, you consent to the data practices described in this policy. If you do not agree with these practices, please do not use our Services. This policy applies strictly to data collected directly by DWD and does not govern the privacy practices of third-party platforms integrated into your custom AI systems, which are governed by their respective privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">2. Information We Collect</h2>
            <p>We collect information through multiple channels to provide, improve, and secure our Services. The data we collect is categorized as follows:</p>
            
            <h3 className="text-lg font-semibold text-foreground mt-4">2.1 Information You Provide to Us</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Contact & Identity Data:</strong> Name, job title, company name, corporate email address, phone number, and LinkedIn profile URLs when you submit forms, book a strategy call, or request a system audit.</li>
              <li><strong className="text-foreground">Business Operations Data:</strong> Information regarding your current software stack, operational workflows, revenue metrics, team size, and business challenges shared during consultations or via our Secure Lead Capture forms.</li>
              <li><strong className="text-foreground">Account & Billing Data:</strong> Payment processing information (handled via secure third-party gateways like Stripe), billing addresses, and tax identification numbers.</li>
              <li><strong className="text-foreground">Proprietary Training Corpora:</strong> Internal documents, SOPs, brand guidelines, and knowledge base materials that you explicitly upload or grant us access to for the purpose of training custom AI models.</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-4">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Telemetry & Usage Data:</strong> IP addresses, browser type, operating system, referring URLs, page interaction events (scrolling, clicks), and session durations collected via first-party analytics.</li>
              <li><strong className="text-foreground">System Audit Logs:</strong> When interacting with our AI agents or client portals, we log API requests, token usage, latency metrics, and error traces for performance monitoring and security auditing.</li>
              <li><strong className="text-foreground">Cookies & Tracking Technologies:</strong> We use strictly necessary cookies for session management and CSRF protection, as well as optional analytics cookies. You can manage your cookie preferences through your browser settings.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">3. Enterprise AI Data Policy & Zero Data Retention</h2>
            <p>
              DWD strictly adheres to a <strong className="text-foreground">Zero Data Retention</strong> policy regarding public LLM training. We guarantee the following:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">No Public Model Training:</strong> Your proprietary business data, system schemas, prompt templates, and conversational histories are <strong className="text-foreground">never</strong> used to train, fine-tune, or improve public foundational AI models (e.g., OpenAI's GPT, Anthropic's Claude).</li>
              <li><strong className="text-foreground">Private Tenancy:</strong> Any vector databases (e.g., pgvector, Pinecone) or fine-tuned models created for your business operate in strictly isolated, single-tenant environments.</li>
              <li><strong className="text-foreground">Data Destruction:</strong> Upon termination of a contract, or at your explicit request, all proprietary knowledge corpora, embedded vectors, and custom model weights are permanently cryptographically erased within 30 days.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">4. How We Use Your Information</h2>
            <p>DWD uses the collected information strictly for the following operational and business purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Service Delivery:</strong> To architect, deploy, and maintain custom AI agents, web systems, and automation pipelines tailored to your business.</li>
              <li><strong className="text-foreground">Communication:</strong> To respond to inquiries, send project updates, deliver technical support, and provide milestone reporting.</li>
              <li><strong className="text-foreground">Security & Fraud Prevention:</strong> To monitor for unauthorized access, detect malicious API usage, enforce rate limits, and protect the integrity of our infrastructure.</li>
              <li><strong className="text-foreground">Legal Compliance:</strong> To comply with applicable laws, regulations, subpoenas, or lawful requests from public authorities.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">5. Data Sharing and Subprocessors</h2>
            <p>We do not sell, rent, or trade your data to data brokers or advertising networks. We only share information with trusted third-party Subprocessors who are contractually bound to strict data protection standards:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Cloud Infrastructure:</strong> AWS, Vercel, and Supabase for hosting, database management, and edge computing.</li>
              <li><strong className="text-foreground">LLM Providers:</strong> OpenAI, Anthropic, and Google (accessed exclusively via enterprise API endpoints that guarantee zero data retention for training).</li>
              <li><strong className="text-foreground">Business Operations:</strong> Stripe (payment processing), Cal.com (scheduling), and SendGrid (transactional emails).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">6. Your Rights and Controls (GDPR & CCPA Compliance)</h2>
            <p>Depending on your jurisdiction, you have specific legal rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong className="text-foreground">Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong className="text-foreground">Right to Erasure (Right to be Forgotten):</strong> Request the permanent deletion of your data from our active systems.</li>
              <li><strong className="text-foreground">Right to Data Portability:</strong> Receive your data in a structured, commonly used, machine-readable format.</li>
              <li><strong className="text-foreground">Right to Restrict Processing:</strong> Request that we temporarily halt processing your data under specific conditions.</li>
            </ul>
            <p>To exercise any of these rights, please submit a formal request to our Data Protection Officer at <a href="mailto:dwdsupport1@gmail.com" className="text-primary hover:underline font-semibold">dwdsupport1@gmail.com</a>. We will respond within 30 days.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border/50 pb-2">7. Contact Information</h2>
            <p>
              If you have any questions, concerns, or complaints regarding this Privacy Policy or our data processing practices, please reach out to us through our official contact page.
            </p>
            <div className="bg-secondary/5 border border-border rounded-xl p-6 mt-4">
              <p><strong className="text-foreground">Digital Wealth Defense (DWD)</strong></p>
              <p className="mt-2">
                <a href="/contact" className="text-primary hover:underline font-semibold">Contact Us via our secure portal &rarr;</a>
              </p>
            </div>
          </section>
        </div>
      </SectionContainer>
    </div>
  );
}
