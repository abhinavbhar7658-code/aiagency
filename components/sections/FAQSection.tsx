import React from "react";
import Link from "next/link";
import { faqsData } from "@/data/faqs";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";

export function FAQSection() {
 return (
 <SectionContainer id="faq">
 <SectionHeader
 badge="Frequently Answered"
 title="Frequently Asked Questions"
 subtitle="Everything you need to know about our AI systems, implementation timeline, data security, and operational workflows."
 />

 <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-background p-6 sm:p-8 shadow-xl">
 <Accordion type="single" collapsible className="w-full space-y-2">
 {faqsData.map((faq) => (
 <AccordionItem key={faq.id} value={faq.id}>
 <AccordionTrigger className="text-base sm:text-lg">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </div>

 <div className="mt-12 text-center">
 <p className="text-lg text-muted-foreground">
 Have a question not listed here?{""}
 <Link href="/contact" className="text-primary hover:underline font-semibold">
 Contact our engineering team directly
 </Link>
 </p>
 </div>
 </SectionContainer>
 );
}
