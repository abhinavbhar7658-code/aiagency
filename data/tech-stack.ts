export interface TechItem {
  name: string;
  category: "Frontend & Web" | "Backend & Database" | "AI & Inference" | "Cloud & Tooling";
  description: string;
  badge: string;
}

export const techStackData: TechItem[] = [
  {
    name: "Next.js & React",
    category: "Frontend & Web",
    description: "App Router, React Server Components & Edge Rendering for ultra-fast performance.",
    badge: "Core Framework",
  },
  {
    name: "TypeScript",
    category: "Frontend & Web",
    description: "Strict end-to-end type safety across schemas, API payloads, and UI components.",
    badge: "Type Safety",
  },
  {
    name: "Tailwind CSS & Radix",
    category: "Frontend & Web",
    description: "Accessible, performant, headless UI primitives styled with custom dark-mode tokens.",
    badge: "Design System",
  },
  {
    name: "Supabase & PostgreSQL",
    category: "Backend & Database",
    description: "Enterprise PostgreSQL, Row Level Security, pgvector embeddings & real-time streams.",
    badge: "Database & Vector",
  },
  {
    name: "Claude 3.5 & OpenAI",
    category: "AI & Inference",
    description: "State-of-the-art reasoning models chosen dynamically based on latency and task complexity.",
    badge: "LLM Inference",
  },
  {
    name: "Deepgram & ElevenLabs",
    category: "AI & Inference",
    description: "Sub-600ms conversational voice synthesis and ultra-accurate speech-to-text engines.",
    badge: "Voice AI",
  },
  {
    name: "Temporal & Inngest",
    category: "Backend & Database",
    description: "Resilient background worker queues with automatic retries, timeouts, and state machines.",
    badge: "Event Workflows",
  },
  {
    name: "Vercel Enterprise",
    category: "Cloud & Tooling",
    description: "Global edge CDN network with automated preview deployments and instant rollback.",
    badge: "Cloud Infrastructure",
  },
];
