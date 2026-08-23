export interface OutcomeItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}

export const outcomesData: OutcomeItem[] = [
  {
    id: "more-leads",
    title: "More Qualified Leads",
    subtitle: "Turn anonymous visitors into booked pipeline",
    description: "Engage, score, and qualify inbound traffic instantly. Convert high-intent prospects before they browse competitor options.",
    metric: "3.5x",
    metricLabel: "Average Inbound Conversion Lift",
    iconName: "Target",
  },
  {
    id: "faster-operations",
    title: "Faster Operations",
    subtitle: "Accelerate cross-department execution speed",
    description: "Replace hours of manual copy-pasting, multi-app toggling, and data formatting with autonomous, self-healing event pipelines.",
    metric: "80%",
    metricLabel: "Reduction in Manual Task Hours",
    iconName: "Zap",
  },
  {
    id: "better-support",
    title: "Superior Customer Experience",
    subtitle: "Instant, accurate, 24/7 human-grade resolutions",
    description: "Empower your clients with knowledge-grounded AI support assistants that resolve inquiries in seconds across chat, email, and voice.",
    metric: "< 5s",
    metricLabel: "Average First Response Time",
    iconName: "Smile",
  },
  {
    id: "lower-cost",
    title: "Lower Operational Overhead",
    subtitle: "Scale your capacity without linear hiring costs",
    description: "Multiply the output of your existing core team by handling high-volume operational tasks with persistent AI workers.",
    metric: "65%",
    metricLabel: "Cost Reduction per Workflow Unit",
    iconName: "TrendingDown",
  },
  {
    id: "more-visibility",
    title: "Complete System Visibility",
    subtitle: "Real-time actionable operational intelligence",
    description: "Query complex databases with plain English, monitor agent utilization telemetry, and receive proactive anomaly warnings.",
    metric: "100%",
    metricLabel: "Audit & Execution Traceability",
    iconName: "Eye",
  },
  {
    id: "faster-growth",
    title: "Compounding Growth Velocity",
    subtitle: "Deploy new capabilities in days, not quarters",
    description: "Adapt to market changes rapidly by plugging new specialized AI agents into your existing modular business infrastructure.",
    metric: "4x",
    metricLabel: "Faster Time-to-Market for New Workflows",
    iconName: "Rocket",
  },
];
