export interface ProcessStep {
  stepNumber: string;
  title: string;
  shortDescription: string;
  detailedScope: string[];
  deliverables: string;
  duration: string;
}

export const processStepsData: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "DISCOVER",
    shortDescription: "We understand your business, customers and goals.",
    detailedScope: [
      "Initial discovery & systems exploration session",
      "Analysis of current software stack and workflows",
      "Clear definition of target ROI metrics and success criteria",
    ],
    deliverables: "Discovery Brief",
    duration: "Day 1 - 3",
  },
  {
    stepNumber: "02",
    title: "DIAGNOSE",
    shortDescription: "We identify bottlenecks, opportunities and AI potential.",
    detailedScope: [
      "Data accessibility & API permission audit",
      "Identification of high-friction operational bottlenecks",
      "Security, privacy, and compliance mapping",
    ],
    deliverables: "System Requirements & Diagnosis",
    duration: "Week 1",
  },
  {
    stepNumber: "03",
    title: "DESIGN",
    shortDescription: "We create the strategy, workflows and technical architecture.",
    detailedScope: [
      "Multi-agent orchestration architecture",
      "Knowledge retrieval & embedding schema design",
      "Human-in-the-loop validation checkpoints",
    ],
    deliverables: "Interactive System Blueprint",
    duration: "Week 1 - 2",
  },
  {
    stepNumber: "04",
    title: "BUILD & DEPLOY",
    shortDescription: "We develop, integrate, test and launch.",
    detailedScope: [
      "Next.js App Router, Supabase, and agent worker development",
      "Extensive regression & hallucination defense testing",
      "Staging environment validation with your team",
    ],
    deliverables: "Production-ready AI System",
    duration: "Week 2 - 4",
  },
  {
    stepNumber: "05",
    title: "OPTIMIZE",
    shortDescription: "We monitor performance and continuously improve.",
    detailedScope: [
      "Real-time latency, token usage, and error monitoring",
      "Ongoing prompt tuning and vector retrieval refinement",
      "Weekly analytics digests on operational time and money saved",
    ],
    deliverables: "Continuous Telemetry Dashboard",
    duration: "Ongoing",
  },
];
