export interface ProblemItem {
  id: string;
  problemTitle: string;
  problemSubtitle: string;
  consequence: string;
  solutionTitle: string;
  solutionDescription: string;
  iconName: string;
  metricHighlight: string;
}

export const problemsData: ProblemItem[] = [
  {
    id: "lead-followup",
    problemTitle: "Too Many Leads, Too Little Follow-Up",
    problemSubtitle: "Inbound interest decays rapidly when responses take hours or days.",
    consequence: "Warm prospects buy from the competitor who responds in 2 minutes instead of 2 hours.",
    solutionTitle: "Autonomous Inbound Engagement",
    solutionDescription: "AI sales agents qualify incoming visitors, enrich firmographic data, and schedule calendar slots in seconds.",
    iconName: "Clock",
    metricHighlight: "< 60s qualification",
  },
  {
    id: "manual-work",
    problemTitle: "Manual Repetitive Operations",
    problemSubtitle: "High-value talent stuck copying data between invoices, spreadsheets, and CRMs.",
    consequence: "Employee burnout, frequent human errors, and ballooning operational overhead.",
    solutionTitle: "Self-Healing Event Pipelines",
    solutionDescription: "Event-driven automation agents sync cross-tool data reliably without human intervention.",
    iconName: "Repeat",
    metricHighlight: "85% manual task reduction",
  },
  {
    id: "slow-support",
    problemTitle: "Slow & Inconsistent Customer Support",
    problemSubtitle: "Support teams overwhelmed with repetitive Tier-1 and Tier-2 tickets.",
    consequence: "Frustrated customers, long wait times, and high support churn.",
    solutionTitle: "24/7 Knowledge-Grounded Support",
    solutionDescription: "AI assistants resolve routine tickets instantly using your verified knowledge base with zero hallucinations.",
    iconName: "Headphones",
    metricHighlight: "Instant 24/7 resolution",
  },
  {
    id: "scattered-data",
    problemTitle: "Scattered Business Knowledge",
    problemSubtitle: "Critical SOPs and product info trapped across Notion, Drive, PDFs, and Slack.",
    consequence: "Employees waste 20% of their week asking colleagues where documents are located.",
    solutionTitle: "Unified Vector Knowledge Hub",
    solutionDescription: "Consolidate all business intelligence into a secure, semantic AI query engine with exact source citations.",
    iconName: "Database",
    metricHighlight: "Zero tribal knowledge loss",
  },
  {
    id: "slow-content",
    problemTitle: "Content & Marketing Bottlenecks",
    problemSubtitle: "Producing technical case studies, SEO content, and campaigns is painfully slow.",
    consequence: "Inconsistent organic visibility and stagnant inbound traffic growth.",
    solutionTitle: "Brand-Aligned Content Workflows",
    solutionDescription: "Specialized AI agents research, draft, optimize, and schedule brand-voice compliant content at 10x speed.",
    iconName: "Sparkles",
    metricHighlight: "10x production acceleration",
  },
  {
    id: "disconnected-tech",
    problemTitle: "Technology Doesn't Talk to Each Other",
    problemSubtitle: "SaaS subscriptions create siloed islands of data that never integrate properly.",
    consequence: "Blind spots in business intelligence, lost deals, and disjointed customer journeys.",
    solutionTitle: "Unified Agent Orchestration",
    solutionDescription: "An intelligent orchestrator connects CRM, messaging, databases, payment processors, and analytics.",
    iconName: "GitMerge",
    metricHighlight: "100% interconnected stack",
  },
];
