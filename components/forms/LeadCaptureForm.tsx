"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/toast";
import { 
  Send, 
  CheckCircle2, 
  Loader2, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  ArrowRight,
  RefreshCcw,
  ChevronDown,
  Globe,
  Wallet
} from "lucide-react";

interface LeadCaptureFormProps {
  defaultGoal?: string;
  source?: string;
}

const budgetOptions: Record<string, { value: string; label: string }[]> = {
  US: [
    { value: "$3,500 - $7,500", label: "$3,500 - $7,500 (Starter)" },
    { value: "$7,500 - $15,000", label: "$7,500 - $15,000 (Growth)" },
    { value: "$15,000 - $35,000", label: "$15,000 - $35,000 (Scale)" },
    { value: "$35,000+", label: "$35,000+ (Enterprise Custom)" },
    { value: "Other", label: "Other / Custom Amount" },
    { value: "Undecided", label: "Undecided / Exploring" },
  ],
  UK: [
    { value: "£2,500 - £6,000", label: "£2,500 - £6,000 (Starter)" },
    { value: "£6,000 - £12,000", label: "£6,000 - £12,000 (Growth)" },
    { value: "£12,000 - £28,000", label: "£12,000 - £28,000 (Scale)" },
    { value: "£28,000+", label: "£28,000+ (Enterprise Custom)" },
    { value: "Other", label: "Other / Custom Amount" },
    { value: "Undecided", label: "Undecided / Exploring" },
  ],
  EU: [
    { value: "€3,000 - €7,000", label: "€3,000 - €7,000 (Starter)" },
    { value: "€7,000 - €14,000", label: "€7,000 - €14,000 (Growth)" },
    { value: "€14,000 - €32,000", label: "€14,000 - €32,000 (Scale)" },
    { value: "€32,000+", label: "€32,000+ (Enterprise Custom)" },
    { value: "Other", label: "Other / Custom Amount" },
    { value: "Undecided", label: "Undecided / Exploring" },
  ],
  IN: [
    { value: "₹3,00,000 - ₹6,00,000", label: "₹3,00,000 - ₹6,00,000 (Starter)" },
    { value: "₹6,00,000 - ₹12,00,000", label: "₹6,00,000 - ₹12,00,000 (Growth)" },
    { value: "₹12,00,000 - ₹28,00,000", label: "₹12,00,000 - ₹28,00,000 (Scale)" },
    { value: "₹28,00,000+", label: "₹28,00,000+ (Enterprise Custom)" },
    { value: "Other", label: "Other / Custom Amount" },
    { value: "Undecided", label: "Undecided / Exploring" },
  ],
  AU: [
    { value: "A$5,000 - A$11,000", label: "A$5,000 - A$11,000 (Starter)" },
    { value: "A$11,000 - A$22,000", label: "A$11,000 - A$22,000 (Growth)" },
    { value: "A$22,000 - A$50,000", label: "A$22,000 - A$50,000 (Scale)" },
    { value: "A$50,000+", label: "A$50,000+ (Enterprise Custom)" },
    { value: "Other", label: "Other / Custom Amount" },
    { value: "Undecided", label: "Undecided / Exploring" },
  ],
};

function CustomSelect({
  value,
  onChange,
  options,
  icon: Icon,
  disabled
}: {
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
  icon?: any;
  disabled?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = options.find((o) => o.value === value)?.label || value;

  return (
    <div className="relative">
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`flex items-center h-11 w-full rounded-xl border ${isOpen ? "border-primary ring-2 ring-primary/20" : "border-border"} bg-background ${Icon ? "pl-10" : "px-4"} pr-10 py-2 text-sm text-foreground cursor-pointer transition-all ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary pointer-events-none" />}
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 w-full mt-2 bg-background border border-border rounded-xl shadow-xl z-50 overflow-hidden max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${value === opt.value ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted text-foreground"}`}
              >
                {opt.label}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function LeadCaptureForm({ defaultGoal = "", source = "contact_page" }: LeadCaptureFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    industry: "SaaS & Technology",
    region: "US",
    budgetRange: "$5,000 - $15,000",
    customBudget: "",
    primaryGoal: defaultGoal || "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Update budget selection when region changes to the first option of the new region to prevent mismatched state
  useEffect(() => {
    setFormData((prev) => {
      const regionOptions = budgetOptions[prev.region] || budgetOptions.US;
      // if current budget isn't in new region options, reset it
      if (!regionOptions.find(o => o.value === prev.budgetRange)) {
        return { ...prev, budgetRange: regionOptions[0].value };
      }
      return prev;
    });
  }, [formData.region]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setStatus("loading");
 setErrorMessage("");

 try {
 const response = await fetch("/api/leads", {
 method:"POST",
 headers: {"Content-Type":"application/json" },
 body: JSON.stringify({ ...formData, source }),
 });

 const result = await response.json();

 if (!response.ok || !result.success) {
 throw new Error(result.error ||"Failed to submit form");
 }

 setStatus("success");
 try {
 confetti({
 particleCount: 80,
 spread: 70,
 origin: { y: 0.6 },
 });
 } catch (e) {
 // Safe if canvas not supported
 }

 toast({
 type:"success",
 title:"Inquiry Received Successfully",
 message:"Our systems architect will review your workflow and reply within 24 hours.",
 });
 } catch (err: any) {
 setStatus("error");
 setErrorMessage(err.message ||"An unexpected error occurred. Please try again.");
 toast({
 type:"error",
 title:"Submission Error",
 message: err.message ||"Please check your details and retry.",
 });
 }
 };

 if (status ==="success") {
 return (
 <div className="rounded-3xl border border-primary bg-background p-8 sm:p-12 text-center space-y-6 animate-in fade-in duration-300">
 <div className="w-16 h-16 rounded-3xl bg-primary border border-primary flex items-center justify-center mx-auto">
 <CheckCircle2 className="w-8 h-8 text-primary" />
 </div>

 <div className="space-y-2">
 <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
 Thank You, {formData.name.split("")[0]}!
 </h3>
 <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
 Your project details have been received and securely logged in our systems. Our AI Systems Architect is reviewing your business objective.
 </p>
 </div>

 <div className="p-4 rounded-2xl bg-background border border-border max-w-md mx-auto text-left text-sm font-mono space-y-1.5 text-muted-foreground">
 <div className="flex justify-between">
 <span>Target Goal:</span>
 <span className="text-foreground font-semibold">{formData.primaryGoal ||"Custom AI Implementation"}</span>
 </div>
 <div className="flex justify-between">
 <span>SLA Response:</span>
 <span className="text-primary font-semibold">&lt; 24 Business Hours</span>
 </div>
 </div>

 <div className="pt-4">
 <Button
 onClick={() => setStatus("idle")}
 variant="outline"
 size="sm"
 className="flex items-center gap-2 mx-auto"
 >
 <RefreshCcw className="w-3.5 h-3.5" />
 <span>Submit Another Project Inquiry</span>
 </Button>
 </div>
 </div>
 );
 }

 return (
 <form
 onSubmit={handleSubmit}
 className="rounded-3xl border border-border bg-background p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6 relative overflow-hidden"
 >
 <div className="flex items-center justify-between pb-4 border-b border-border">
 <div>
 <span className="text-sm font-mono font-semibold text-primary uppercase tracking-wider">
 Start Your Project
 </span>
 <h3 className="text-xl font-bold text-foreground mt-0.5">
 Tell Us What You Want to Automate
 </h3>
 </div>
 <Badge variant="default" className="text-sm font-mono hidden sm:inline-flex">
 Confidential
 </Badge>
 </div>

 {status ==="error" && (
 <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-center justify-between">
 <span>{errorMessage}</span>
 <button
 type="button"
 onClick={() => setStatus("idle")}
 className="text-red-400 hover:text-foreground font-semibold underline ml-2"
 >
 Dismiss
 </button>
 </div>
 )}

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 {/* Name */}
 <div className="space-y-1.5">
 <label className="text-sm font-semibold text-muted-foreground">
 Full Name <span className="text-primary">*</span>
 </label>
 <Input
 name="name"
 placeholder="Sarah Jenkins"
 value={formData.name}
 onChange={handleChange}
 required
 disabled={status ==="loading"}
 />
 </div>

 {/* Work Email */}
 <div className="space-y-1.5">
 <label className="text-sm font-semibold text-muted-foreground">
 Work Email <span className="text-primary">*</span>
 </label>
 <Input
 name="email"
 type="email"
 placeholder="sarah@company.com"
 value={formData.email}
 onChange={handleChange}
 required
 disabled={status ==="loading"}
 />
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 {/* Company */}
 <div className="space-y-1.5">
 <label className="text-sm font-semibold text-muted-foreground">
 Company Name
 </label>
 <Input
 name="company"
 placeholder="Acme Corp"
 value={formData.company}
 onChange={handleChange}
 disabled={status ==="loading"}
 />
 </div>

 {/* Website */}
 <div className="space-y-1.5">
 <label className="text-sm font-semibold text-muted-foreground">
 Website URL
 </label>
 <Input
 name="website"
 placeholder="https://acmecorp.com"
 value={formData.website}
 onChange={handleChange}
 disabled={status ==="loading"}
 />
 </div>
 </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* Industry */}
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-muted-foreground">
        Industry
      </label>
      <CustomSelect
        value={formData.industry}
        onChange={(val) => handleSelectChange("industry", val)}
        disabled={status === "loading"}
        options={[
          { value: "SaaS & Technology", label: "SaaS & Technology" },
          { value: "E-Commerce & Retail", label: "E-Commerce & Retail" },
          { value: "Real Estate & PropTech", label: "Real Estate & PropTech" },
          { value: "Healthcare & MedTech", label: "Healthcare & MedTech" },
          { value: "Professional Services & Legal", label: "Professional Services & Legal" },
          { value: "Education & EdTech", label: "Education & EdTech" },
          { value: "Logistics & Supply Chain", label: "Logistics & Supply Chain" },
          { value: "Other", label: "Other Sector" },
        ]}
      />
    </div>

    {/* Region */}
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-muted-foreground">
        Region
      </label>
      <CustomSelect
        icon={Globe}
        value={formData.region}
        onChange={(val) => handleSelectChange("region", val)}
        disabled={status === "loading"}
        options={[
          { value: "US", label: "United States (USD)" },
          { value: "UK", label: "United Kingdom (GBP)" },
          { value: "EU", label: "Europe (EUR)" },
          { value: "IN", label: "India (INR)" },
          { value: "AU", label: "Australia (AUD)" },
        ]}
      />
    </div>
  </div>

  <div className="space-y-1.5">
    <label className="text-sm font-semibold text-muted-foreground">
      Estimated Budget Range
    </label>
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <CustomSelect
          icon={Wallet}
          value={formData.budgetRange}
          onChange={(val) => handleSelectChange("budgetRange", val)}
          disabled={status === "loading"}
          options={budgetOptions[formData.region] || budgetOptions.US}
        />
      </div>
      
      {formData.budgetRange === "Other" && (
        <Input
          name="customBudget"
          placeholder="Specify amount..."
          value={formData.customBudget}
          onChange={handleChange}
          disabled={status === "loading"}
          className="w-full sm:w-1/3"
        />
      )}
    </div>
  </div>

 {/* Primary Goal */}
 <div className="space-y-1.5">
 <label className="text-sm font-semibold text-muted-foreground">
 Primary Business Goal / Challenge <span className="text-primary">*</span>
 </label>
 <Input
 name="primaryGoal"
 placeholder="e.g., Automate freight quote calculations and sync to HubSpot CRM"
 value={formData.primaryGoal}
 onChange={handleChange}
 required
 disabled={status ==="loading"}
 />
 </div>

 {/* Message / Details */}
 <div className="space-y-1.5">
 <label className="text-sm font-semibold text-muted-foreground">
 Additional Context & Software Tools Used
 </label>
 <Textarea
 name="message"
 rows={3}
 placeholder="Describe your current bottleneck, existing software stack, and what success looks like..."
 value={formData.message}
 onChange={handleChange}
 disabled={status ==="loading"}
 />
 </div>

 <div className="pt-2">
 <Button
 type="submit"
 size="lg"
 variant="default"
 disabled={status ==="loading"}
 className="w-full glow-pill"
 >
 {status ==="loading" ? (
 <>
 <Loader2 className="w-4 h-4 mr-2 animate-spin" />
 <span>Submitting Your Architecture Inquiry...</span>
 </>
 ) : (
 <>
 <span>Submit Project Inquiry</span>
 <Send className="w-4 h-4 ml-2" />
 </>
 )}
 </Button>
 </div>

 <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-muted-foreground pt-2 border-t border-border">
 <div className="flex items-center gap-1.5">
 <Lock className="w-3 h-3 text-primary" />
 <span>Encrypted Submission</span>
 </div>
 <div className="flex items-center gap-1.5">
 <ShieldCheck className="w-3 h-3 text-primary" />
 <span>Zero Spam Guarantee</span>
 </div>
 </div>
 </form>
 );
}
