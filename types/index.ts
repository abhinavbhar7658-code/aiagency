export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  category: string;
  badge?: string;
  keyOutcomes: string[];
  deliverables: string[];
  technologies: string[];
  idealFor: string;
  implementationTime: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  fullName: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  badge?: string;
  keyFeatures: string[];
  benefits: string[];
  technologies: string[];
  idealFor: string;
  implementationTime: string;
}

export interface AgentItem {
  id: string;
  name: string;
  role: string;
  category: string;
  description: string;
  coreSkills: string[];
  inputData: string[];
  outputResults: string[];
  systemIntegrations: string[];
  autonomousLevel: "Supervised" | "Semi-Autonomous" | "Fully-Autonomous";
  status: "idle" | "active" | "optimizing";
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  headline: string;
  description: string;
  iconName: string;
  keyChallenges: string[];
  aiSolutions: string[];
  typicalOutcomes: {
    metric: string;
    label: string;
  }[];
  recommendedAgents: string[];
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  clientIndustry: string;
  clientScale: string;
  problem: string;
  solution: string;
  aiSystemsUsed: string[];
  measurableResults: {
    metric: string;
    label: string;
  }[];
  timeline: string;
  technologies: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface FAQItem {
  id: string;
  category: "general" | "technology" | "implementation" | "security" | "pricing";
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  targetAudience: string;
  startingPrice: string;
  billingPeriod: string;
  isPopular?: boolean;
  features: string[];
  aiCapabilities: string[];
  includedAgents: string;
  supportLevel: string;
  ctaText: string;
  ctaLink: string;
}

export interface LeadSubmissionPayload {
  name: string;
  email: string;
  company?: string;
  website?: string;
  industry?: string;
  companySize?: string;
  primaryGoal: string;
  budgetRange?: string;
  message?: string;
  source?: string;
}

export interface BookingCallPayload {
  name: string;
  email: string;
  company?: string;
  preferredDate?: string;
  preferredTime?: string;
  timezone?: string;
  automationFocus?: string[];
  currentChallenges?: string;
}

export interface NewsletterPayload {
  email: string;
  source?: string;
}
