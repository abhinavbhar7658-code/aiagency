import { z } from "zod";

export const leadSubmissionSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().email({ message: "Please provide a valid work email address" }),
  company: z.string().max(100).optional(),
  website: z.string().url({ message: "Please enter a valid URL (e.g., https://example.com)" }).optional().or(z.literal("")),
  industry: z.string().optional(),
  companySize: z.string().optional(),
  primaryGoal: z.string().min(3, { message: "Please specify your primary goal or challenge" }).max(500),
  budgetRange: z.string().optional(),
  message: z.string().max(2000).optional(),
  source: z.string().optional(),
});

export const bookingCallSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().email({ message: "Please enter a valid work email address" }),
  company: z.string().max(100).optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  timezone: z.string().optional(),
  automationFocus: z.array(z.string()).optional(),
  currentChallenges: z.string().max(1000).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  source: z.string().optional(),
});
