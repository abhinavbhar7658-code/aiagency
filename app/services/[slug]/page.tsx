import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { constructMetadata, generateServiceSchema } from "@/lib/seo/metadata";
import { 
 CheckCircle2, 
 ArrowRight, 
 Clock, 
 Layers, 
 Cpu, 
 ShieldCheck, 
 Bot,
 Sparkles,
 ChevronLeft
} from "lucide-react";

interface ServicePageProps {
 params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
 return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
 const { slug } = await params;
 const service = servicesData.find((s) => s.slug === slug);
 if (!service) return {};

 return constructMetadata({
 title: `${service.title} — Enterprise AI Architecture`,
 description: service.shortDescription,
 canonicalUrl: `https://dwd.agency/services/${service.slug}`,
 });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
 const { slug } = await params;
 const service = servicesData.find((s) => s.slug === slug);

 if (!service) {
 notFound();
 }

 const serviceSchema = generateServiceSchema(
 service.title,
 service.shortDescription,
 `https://dwd.agency/services/${service.slug}`
 );

 return (
 <div className="pt-28 pb-20">
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
 />

 <SectionContainer>
 {/* Back Link */}
 <div className="mb-8">
 <Link
 href="/services"
 className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
 >
 <ChevronLeft className="w-4 h-4" />
 <span>Back to All AI Systems</span>
 </Link>
 </div>

 {/* Hero Banner */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
 <div className="lg:col-span-7 space-y-6">
 <div className="flex items-center gap-2">
 <Badge variant="default" className="font-mono text-sm uppercase bg-primary text-primary-foreground border-transparent">
 System Specification
 </Badge>
 {service.badge && (
 <Badge variant="outline" className="font-mono text-sm text-foreground border-border bg-card">
 {service.badge}
 </Badge>
 )}
 </div>

 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
 {service.title}
 </h1>

 <p className="text-lg sm:text-lg text-muted-foreground leading-relaxed">
 {service.longDescription}
 </p>

 <div className="pt-4 flex flex-wrap gap-4 items-center">
 <Button asChild size="lg" variant="default" className="glow-pill">
 <Link href={`/book-call?service=${service.slug}`}>
 <span>Deploy This System</span>
 <ArrowRight className="w-4 h-4 ml-2" />
 </Link>
 </Button>
 <Button asChild size="lg" variant="outline">
 <Link href="#lead-form">Request Custom Scope</Link>
 </Button>
 </div>

 <div className="pt-6 border-t border-border grid grid-cols-2 gap-4 text-sm font-mono text-muted-foreground">
 <div>
 <span className="text-muted-foreground block">Implementation Timeline</span>
 <span className="text-foreground font-bold text-sm mt-0.5 block">{service.implementationTime}</span>
 </div>
 <div>
 <span className="text-muted-foreground block">Ideal Operational Target</span>
 <span className="text-primary font-semibold text-sm mt-0.5 block line-clamp-1">{service.idealFor}</span>
 </div>
 </div>
 </div>

 {/* Right Card: Quick Spec Breakdown */}
 <div className="lg:col-span-5 rounded-3xl border border-border bg-background p-6 sm:p-8 space-y-6 shadow-2xl">
 <div className="pb-4 border-b border-border">
 <span className="text-sm font-mono text-primary uppercase">Architecture Highlights</span>
 <h3 className="text-lg font-bold text-foreground mt-1">Key Quantifiable Outcomes</h3>
 </div>

 <ul className="space-y-3">
 {service.keyOutcomes.map((outcome, i) => (
 <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
 <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
 <span className="leading-relaxed">{outcome}</span>
 </li>
 ))}
 </ul>

 <div className="pt-4 border-t border-border space-y-2">
 <span className="text-sm font-mono text-muted-foreground uppercase block">Verified Tech Stack:</span>
 <div className="flex flex-wrap gap-1.5">
 {service.technologies.map((tech, idx) => (
 <span
 key={idx}
 className="px-2.5 py-1 rounded-lg bg-background border border-border text-[11px] font-mono text-muted-foreground"
 >
 {tech}
 </span>
 ))}
 </div>
 </div>
 </div>
 </div>

 {/* Deliverables Section */}
 <div className="mb-20 rounded-3xl border border-border bg-background p-8 lg:p-12">
 <SectionHeader
 badge="System Deliverables"
 title="What's Included in the Deployment"
 subtitle="Every implementation comes fully turnkey with production infrastructure, automated QA testing, and team training."
 align="left"
 className="mb-8"
 />

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {service.deliverables.map((del, i) => (
 <div key={i} className="p-5 rounded-2xl border border-border bg-background flex items-start gap-3.5">
 <div className="w-8 h-8 rounded-xl bg-primary border border-primary flex items-center justify-center shrink-0 mt-0.5">
 <Cpu className="w-4 h-4 text-primary" />
 </div>
 <div>
 <h4 className="text-sm font-bold text-foreground">
 {del}
 </h4>
 <p className="text-sm text-muted-foreground mt-1">
 Configured for high availability, error recovery, and seamless webhook integration.
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>

  {/* Business Impact Section */}
  <div className="mb-20 space-y-12">
    <SectionHeader
      badge="Business Impact"
      title="How This System Transforms Your Operations"
      subtitle={`Implementing our ${service.title} isn't just about adopting new technology—it's about fundamentally changing how your business scales.`}
      align="center"
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-background border-border shadow-lg hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl">Exponential Scaling</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm leading-relaxed">
          Break free from linear growth. Our systems handle 10x or 100x the volume without requiring you to hire, train, or manage additional headcount.
        </CardContent>
      </Card>
      
      <Card className="bg-background border-border shadow-lg hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl">Reclaimed Time</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm leading-relaxed">
          By automating manual bottlenecks and repetitive workflows, your core team gets hundreds of hours back every month to focus on high-value strategic work.
        </CardContent>
      </Card>

      <Card className="bg-background border-border shadow-lg hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl">Error-Free Precision</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm leading-relaxed">
          Humans get tired; code does not. Our AI architecture ensures consistent, high-quality execution 24/7/365 with built-in fallback protocols.
        </CardContent>
      </Card>
    </div>
  </div>

  {/* Comparison Table / Why DWD */}
  <div className="mb-24">
    <SectionHeader
      badge="The DWD Advantage"
      title="Why Partner With Digital Wealth Defense?"
      subtitle="We don't just sell off-the-shelf software wrappers. We engineer custom enterprise-grade architecture."
      align="center"
      className="mb-12"
    />
    
    <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-2xl">
      <table className="w-full text-left border-collapse min-w-[800px]">
        <thead>
          <tr className="bg-muted/30 border-b border-border">
            <th className="p-6 font-semibold text-foreground w-1/3">Feature Focus</th>
            <th className="p-6 font-bold text-foreground bg-primary/10 border-l border-r border-border w-1/3 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-primary font-black">DWD</span>
              </div>
            </th>
            <th className="p-6 font-semibold text-muted-foreground w-1/3">Standard Agencies</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          <tr className="hover:bg-muted/10 transition-colors">
            <td className="p-6 text-sm text-foreground font-medium flex items-center gap-2">
              <Layers className="w-4 h-4 text-muted-foreground" /> Architecture Approach
            </td>
            <td className="p-6 text-sm text-foreground bg-primary/5 border-l border-r border-border font-semibold">
              Custom-coded, enterprise-grade Next.js & Python systems
            </td>
            <td className="p-6 text-sm text-muted-foreground">
              Off-the-shelf templates and simple Zapier zaps
            </td>
          </tr>
          <tr className="hover:bg-muted/10 transition-colors">
            <td className="p-6 text-sm text-foreground font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-muted-foreground" /> Data Privacy & Security
            </td>
            <td className="p-6 text-sm text-foreground bg-primary/5 border-l border-r border-border font-semibold">
              Zero-retention policies, SOC2 compliant infrastructure
            </td>
            <td className="p-6 text-sm text-muted-foreground">
              Data often used to train public LLMs
            </td>
          </tr>
          <tr className="hover:bg-muted/10 transition-colors">
            <td className="p-6 text-sm text-foreground font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-muted-foreground" /> Code Ownership
            </td>
            <td className="p-6 text-sm text-foreground bg-primary/5 border-l border-r border-border font-semibold">
              You own 100% of the deployed intellectual property
            </td>
            <td className="p-6 text-sm text-muted-foreground">
              Locked into restrictive monthly SaaS subscriptions
            </td>
          </tr>
          <tr className="hover:bg-muted/10 transition-colors">
            <td className="p-6 text-sm text-foreground font-medium flex items-center gap-2">
              <Cpu className="w-4 h-4 text-muted-foreground" /> Integration Depth
            </td>
            <td className="p-6 text-sm text-foreground bg-primary/5 border-l border-r border-border font-semibold">
              Native API integrations across your entire tech stack
            </td>
            <td className="p-6 text-sm text-muted-foreground">
              Basic webhooks with high failure rates
            </td>
          </tr>
          <tr className="hover:bg-muted/10 transition-colors">
            <td className="p-6 text-sm text-foreground font-medium flex items-center gap-2">
              <Bot className="w-4 h-4 text-muted-foreground" /> Post-Launch Support
            </td>
            <td className="p-6 text-sm text-foreground bg-primary/5 border-l border-r border-border font-semibold">
              Dedicated Systems Architect & SLA monitoring
            </td>
            <td className="p-6 text-sm text-muted-foreground">
              Generic offshore support tickets
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Lead Capture Form Section */}
  <div id="lead-form" className="max-w-3xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Architect Your System?</h2>
      <p className="text-muted-foreground">Submit the form below to initiate your technical discovery phase.</p>
    </div>
    <LeadCaptureForm defaultGoal={`Implement ${service.title}`} source={`service_${service.slug}`} />
  </div>
 </SectionContainer>
 </div>
 );
}
