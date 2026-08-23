"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/toast";
import { 
 Calendar, 
 Clock, 
 CheckCircle2, 
 Loader2, 
 ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Bot,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

const focusOptions = [
  "AI Autonomous Agents",
  "AI Process Automation",
  "AI Customer Support (24/7)",
  "AI Inbound Lead Scoring",
  "AI Conversational Voice",
  "AI Knowledge Retrieval / RAG",
  "Custom Next.js Web App",
];

function generateNextWorkingDays(count: number) {
  const days = [];
  let d = new Date();
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      days.push({
        value: d.toISOString().split("T")[0],
        label: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      });
    }
  }
  return days;
}

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
  const selectedLabel = options.find((o) => o.value === value)?.label || "Select...";

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

export function StrategyBookingForm({ defaultPlan = "" }: { defaultPlan?: string }) {
 const { toast } = useToast();
 const [formData, setFormData] = useState({
 name:"",
 email:"",
 company:"",
 preferredDate:"",
 preferredTime: "14:00",
 timezone: Intl.DateTimeFormat().resolvedOptions().timeZone ||"UTC",
 currentChallenges: defaultPlan ? `Interested in ${defaultPlan} architecture.` :"",
 automationFocus: [] as string[],
 });

 const [status, setStatus] = useState<"idle" |"loading" |"success" |"error">("idle");
 const [errorMessage, setErrorMessage] = useState("");

 const toggleFocus = (item: string) => {
 setFormData((prev) => ({
 ...prev,
 automationFocus: prev.automationFocus.includes(item)
 ? prev.automationFocus.filter((f) => f !== item)
 : [...prev.automationFocus, item],
 }));
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
 setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 };

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setStatus("loading");
 setErrorMessage("");

 try {
 const res = await fetch("/api/bookings", {
 method:"POST",
 headers: {"Content-Type":"application/json" },
 body: JSON.stringify(formData),
 });

 const result = await res.json();
 if (!res.ok || !result.success) {
 throw new Error(result.error ||"Failed to book strategy call");
 }

 setStatus("success");
 try {
 confetti({
 particleCount: 80,
 spread: 70,
 origin: { y: 0.6 },
 });
 } catch (e) {}

 toast({
 type:"success",
 title:"Strategy Session Requested",
 message:"Calendar invite & preparation brief sent to your email.",
 });
 } catch (err: any) {
 setStatus("error");
 setErrorMessage(err.message ||"Failed to book strategy session. Please try again.");
 toast({
 type:"error",
 title:"Booking Error",
 message: err.message ||"Please check your details and try again.",
 });
 }
 };

 if (status ==="success") {
 return (
 <div className="rounded-3xl border border-primary bg-background p-8 sm:p-12 text-center space-y-6 animate-in fade-in duration-300">
 <div className="w-16 h-16 rounded-3xl bg-primary border border-primary flex items-center justify-center mx-auto">
 <Calendar className="w-8 h-8 text-primary" />
 </div>

 <div className="space-y-2">
 <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
 Strategy Call Confirmed!
 </h3>
 <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
 Thank you, {formData.name.split("")[0]}. We have scheduled your 45-minute Architecture Exploration with our Lead AI Systems Engineer.
 </p>
 </div>

 <div className="p-4 rounded-2xl bg-background border border-border max-w-md mx-auto text-left text-sm font-mono space-y-2 text-muted-foreground">
 <div className="flex justify-between">
 <span className="text-muted-foreground">Target Date & Time:</span>
 <span className="text-foreground font-semibold">{formData.preferredDate ||"Within 48 hours"} at {formData.preferredTime}</span>
 </div>
 <div className="flex justify-between">
 <span className="text-muted-foreground">Timezone:</span>
 <span className="text-primary">{formData.timezone}</span>
 </div>
 <div className="flex justify-between">
 <span className="text-muted-foreground">Calendar Status:</span>
 <span className="text-primary font-semibold">Invite Dispatched</span>
 </div>
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
 Step 1 of 2
 </span>
 <h3 className="text-xl font-bold text-foreground mt-0.5">
 Book a 45-Minute AI Strategy Session
 </h3>
 </div>
 <Badge variant="emerald" className="text-sm font-mono">
 Free Blueprint Included
 </Badge>
 </div>

 {status ==="error" && (
 <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
 {errorMessage}
 </div>
 )}

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div className="space-y-1.5">
 <label className="text-sm font-semibold text-muted-foreground">
 Full Name <span className="text-primary">*</span>
 </label>
 <Input
 name="name"
 placeholder="Alex Mercer"
 value={formData.name}
 onChange={handleChange}
 required
 disabled={status ==="loading"}
 />
 </div>

 <div className="space-y-1.5">
 <label className="text-sm font-semibold text-muted-foreground">
 Work Email <span className="text-primary">*</span>
 </label>
 <Input
 name="email"
 type="email"
 placeholder="alex@company.com"
 value={formData.email}
 onChange={handleChange}
 required
 disabled={status ==="loading"}
 />
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
 <div className="space-y-1.5">
 <label className="text-sm font-semibold text-muted-foreground">
 Company Name
 </label>
 <Input
 name="company"
 placeholder="Vanguard Dynamics"
 value={formData.company}
 onChange={handleChange}
 disabled={status ==="loading"}
 />
 </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-muted-foreground">
              Preferred Date
            </label>
            <CustomSelect
              icon={Calendar}
              value={formData.preferredDate}
              onChange={(val) => setFormData(prev => ({ ...prev, preferredDate: val }))}
              disabled={status === "loading"}
              options={generateNextWorkingDays(7)}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-muted-foreground">
              Preferred Time
            </label>
            <CustomSelect
              icon={Clock}
              value={formData.preferredTime}
              onChange={(val) => setFormData(prev => ({ ...prev, preferredTime: val }))}
              disabled={status === "loading"}
              options={[
                { value: "09:00", label: "09:00 AM" },
                { value: "09:30", label: "09:30 AM" },
                { value: "10:00", label: "10:00 AM" },
                { value: "10:30", label: "10:30 AM" },
                { value: "11:00", label: "11:00 AM" },
                { value: "11:30", label: "11:30 AM" },
                { value: "12:00", label: "12:00 PM" },
                { value: "13:00", label: "01:00 PM" },
                { value: "14:00", label: "02:00 PM" },
                { value: "15:00", label: "03:00 PM" },
                { value: "16:00", label: "04:00 PM" },
                { value: "17:00", label: "05:00 PM" },
              ]}
            />
          </div>
  </div>

          {/* Focus Areas Multi-select */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-muted-foreground block">
              Primary Areas of AI Interest (Select all that apply):
            </label>
            <div className="flex flex-wrap gap-2">
              {focusOptions.map((opt) => {
                const isSelected = formData.automationFocus.includes(opt);
                return (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => toggleFocus(opt)}
                    className={cn("px-3 py-1.5 rounded-xl text-sm font-medium transition-all border",
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-border"
                    )}
                  >
                    {isSelected ? "✓ " : "+ "}
                    {opt}
                  </button>
                );
              })}
            </div>
            
            <div className="pt-2">
              <Input
                name="otherInterest"
                placeholder="Other (specify your own AI interest)"
                value={(formData as any).otherInterest || ""}
                onChange={handleChange}
                disabled={status === "loading"}
                className="w-full sm:w-2/3"
              />
            </div>
          </div>

 {/* Current Challenges */}
 <div className="space-y-1.5">
 <label className="text-sm font-semibold text-muted-foreground">
 What is the primary operational friction you want to solve?
 </label>
 <Textarea
 name="currentChallenges"
 rows={3}
 placeholder="e.g., We receive 500 leads a month but our sales reps take 6 hours to respond and manually copy info into Salesforce..."
 value={formData.currentChallenges}
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
 <span>Scheduling Your Session...</span>
 </>
 ) : (
 <>
 <span>Confirm Strategy Call & Get AI Blueprint</span>
 <ArrowRight className="w-4 h-4 ml-2" />
 </>
 )}
 </Button>
 </div>

 <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-mono pt-2">
 <ShieldCheck className="w-4 h-4 text-primary" />
 <span>No sales pressure • 100% technical architecture exploration</span>
 </div>
 </form>
 );
}
