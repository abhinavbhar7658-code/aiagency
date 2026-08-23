import { FAQItem } from "@/types";

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "What exactly does your AI agency do?",
    answer: "We are an end-to-end AI implementation and operations agency. Rather than selling generic chatbots or one-off prompts, we design, build, integrate, and manage coordinated AI systems—including autonomous agents, process automation, voice systems, customer support engines, and custom web applications—grounded strictly in your business data and connected directly to your existing software stack.",
  },
  {
    id: "faq-2",
    category: "general",
    question: "How is an AI workforce different from a standard AI chatbot?",
    answer: "A chatbot is typically a single conversational window waiting for a question. An AI workforce is a network of specialized autonomous agents (Strategy, Sales, Research, Support, CRM, QA) that proactively execute multi-step workflows, query your databases, trigger external APIs, collaborate with each other, and report outcomes to your team with human-in-the-loop approvals.",
  },
  {
    id: "faq-3",
    category: "technology",
    question: "Can your AI systems connect to our existing CRM and software tools?",
    answer: "Yes. We integrate with virtually any modern API-enabled platform, including HubSpot, Salesforce, Close, Zendesk, Intercom, Shopify, Stripe, Slack, Notion, Google Workspace, Microsoft 365, custom PostgreSQL/MySQL databases, and custom REST/GraphQL endpoints.",
  },
  {
    id: "faq-4",
    category: "technology",
    question: "Can the AI use our internal documents, guidelines, and proprietary knowledge?",
    answer: "Absolutely. We build enterprise Retrieval-Augmented Generation (RAG) and vector knowledge bases using your PDFs, internal wikis, standard operating procedures, past customer conversations, and product manuals. The AI cites exact internal sources and is strictly prevented from making up unverified facts.",
  },
  {
    id: "faq-5",
    category: "implementation",
    question: "How long does a typical AI implementation take from start to launch?",
    answer: "Most targeted AI automation or agent systems take between 2 to 4 weeks from discovery to production deployment. Complex enterprise multi-agent workflows or full-scale web platforms typically deploy within 4 to 6 weeks. Every build includes rigorous QA testing, security audits, and team training.",
  },
  {
    id: "faq-6",
    category: "implementation",
    question: "Do humans maintain oversight and control over AI decisions?",
    answer: "Yes, 100%. We design every system with configurable autonomy levels and 'Human-in-the-Loop' safeguards. Sensitive actions (such as high-value refunds, contract dispatches, or VIP escalations) can be set to require explicit human review and approval in your dashboard before execution.",
  },
  {
    id: "faq-7",
    category: "security",
    question: "How do you protect our proprietary data and prevent leaks to public models?",
    answer: "We enforce enterprise data privacy standards: tenant isolation, zero data retention for model training, encrypted credential vaults, strict Row Level Security (RLS) on databases, and role-based access control (RBAC). Your internal data is never used to train public foundation models.",
  },
  {
    id: "faq-8",
    category: "security",
    question: "Can we add new AI agents or custom automations as our business grows?",
    answer: "Yes. Our systems are built on a modular, decoupled architecture. Once your core data pipelines and orchestrator are in place, adding a new specialized agent (e.g. adding a Voice Agent or an SEO Agent) is seamless and does not disrupt existing operations.",
  },
  {
    id: "faq-9",
    category: "pricing",
    question: "How does pricing work for AI implementation and management?",
    answer: "We offer transparent, configuration-driven pricing based on the scope of your system, the number of specialized agents deployed, and ongoing optimization requirements. We offer project-based implementation scopes as well as ongoing AI operations partnerships. Book a Strategy Call to receive a tailored system blueprint and fixed quote.",
  },
  {
    id: "faq-10",
    category: "pricing",
    question: "Do you provide ongoing monitoring, maintenance, and prompt optimization?",
    answer: "Yes. AI models evolve, and business processes shift. We offer ongoing operational management where our engineering team monitors latency, tracks agent accuracy, prevents drift, implements model upgrades, and continually optimizes performance metrics.",
  },
];
