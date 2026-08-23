export interface WhyUsItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const whyUsData: WhyUsItem[] = [
  {
    id: "strategy-first",
    title: "Strategy-First Architecture",
    subtitle: "We solve real business problems, not just cool tech demos.",
    description: "We never throw AI at problems that require simple business logic. Every system begins with rigorous operational discovery, quantifiable ROI modeling, and clear unit economics.",
    iconName: "Compass",
  },
  {
    id: "coordinated-workforce",
    title: "Coordinated AI Workforce",
    subtitle: "Specialized agents that collaborate in synchronized teams.",
    description: "Instead of fragile single-prompt chatbots, we build multi-agent teams where Strategy, Research, Execution, and QA agents work together under strict orchestrator guidance.",
    iconName: "Network",
  },
  {
    id: "custom-grounding",
    title: "Built Around Your Proprietary Data",
    subtitle: "Custom-trained on your internal workflows, tone & knowledge.",
    description: "Your systems are grounded directly in your company's SOPs, past customer conversations, product catalogs, and databases with zero hallucination tolerance.",
    iconName: "Layers",
  },
  {
    id: "human-oversight",
    title: "Human-in-the-Loop Governance",
    subtitle: "Total control over critical business decisions.",
    description: "You set the exact threshold for autonomy. High-stakes actions, sensitive escalations, and financial decisions always require one-click human approval in your dashboard.",
    iconName: "Shield",
  },
  {
    id: "production-engineering",
    title: "Production-Grade Engineering",
    subtitle: "Built with Next.js, Supabase, and enterprise security.",
    description: "We don't build no-code prototypes that break at scale. We write production TypeScript, secure database schemas with Row Level Security, and automated CI/CD deployment pipelines.",
    iconName: "Code2",
  },
  {
    id: "continuous-optimization",
    title: "Continuous Telemetry & Optimization",
    subtitle: "We don't disappear after deployment day.",
    description: "Our team continuously monitors response latency, token consumption, agent accuracy scores, and system logs, keeping your AI infrastructure fast and up to date.",
    iconName: "Activity",
  },
];
