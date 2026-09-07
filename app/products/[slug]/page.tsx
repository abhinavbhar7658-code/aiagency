import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productsData } from "@/data/products";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { constructMetadata } from "@/lib/seo/metadata";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  ChevronLeft,
  Database,
  Fingerprint,
  Key,
  Shield,
  Users,
  Server
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return {};

  return constructMetadata({
    title: `${product.fullName} (${product.title}) — Enterprise Security`,
    description: product.shortDescription,
    canonicalUrl: `https://dwd.agency/products/${product.slug}`,
  });
}

const iconMapping: Record<string, any> = {
  "Database": Database,
  "Fingerprint": Fingerprint,
  "Key": Key,
  "Shield": Shield,
  "Users": Users,
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const IconComponent = iconMapping[product.iconName] || ShieldCheck;

  return (
    <div className="pt-28 pb-20">
      <SectionContainer>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services/cybersecurity"
            className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Cybersecurity</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="default" className="font-mono text-sm uppercase bg-primary text-primary-foreground border-transparent">
                Enterprise Product
              </Badge>
              {product.badge && (
                <Badge variant="outline" className="font-mono text-sm text-foreground border-border bg-card">
                  {product.badge}
                </Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              {product.fullName} <span className="text-muted-foreground font-medium">({product.title})</span>
            </h1>

            <p className="text-lg sm:text-lg text-muted-foreground leading-relaxed">
              {product.longDescription}
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" variant="default" className="glow-pill">
                <Link href={`/book-call?product=${product.slug}`}>
                  <span>Request Demo</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#lead-form">Get Pricing</Link>
              </Button>
            </div>

            <div className="pt-6 border-t border-border grid grid-cols-2 gap-4 text-sm font-mono text-muted-foreground">
              <div>
                <span className="text-muted-foreground block">Implementation Timeline</span>
                <span className="text-foreground font-bold text-sm mt-0.5 block">{product.implementationTime}</span>
              </div>
              <div>
                <span className="text-muted-foreground block">Ideal For</span>
                <span className="text-primary font-semibold text-sm mt-0.5 block line-clamp-2">{product.idealFor}</span>
              </div>
            </div>
          </div>

          {/* Right Card: Quick Spec Breakdown */}
          <div className="lg:col-span-5 rounded-3xl border border-border bg-background p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-12 -top-12 opacity-5 pointer-events-none">
              <IconComponent className="w-64 h-64 text-primary" />
            </div>
            
            <div className="pb-4 border-b border-border relative z-10">
              <span className="text-sm font-mono text-primary uppercase">Core Advantages</span>
              <h3 className="text-lg font-bold text-foreground mt-1">Key Business Benefits</h3>
            </div>

            <ul className="space-y-3 relative z-10">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-border space-y-2 relative z-10">
              <span className="text-sm font-mono text-muted-foreground uppercase block">Security Technologies:</span>
              <div className="flex flex-wrap gap-1.5">
                {product.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-card border border-border text-[11px] font-mono text-muted-foreground"
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
            badge="Product Capabilities"
            title="Feature Breakdown"
            subtitle={`Explore the core functionalities that power our ${product.title} solution.`}
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.keyFeatures.map((feature, i) => (
              <div key={i} className="p-5 rounded-2xl border border-border bg-card flex items-start gap-3.5 hover:border-primary/50 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Server className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-relaxed">
                    {feature}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Capture Form Section */}
        <div id="lead-form" className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">Secure Your Infrastructure Today</h2>
            <p className="text-muted-foreground">Submit the form below to connect with our security architects regarding {product.fullName}.</p>
          </div>
          <LeadCaptureForm defaultGoal={`Implement ${product.title}`} source={`product_${product.slug}`} />
        </div>
      </SectionContainer>
    </div>
  );
}
