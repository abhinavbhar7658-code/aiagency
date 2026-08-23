# CognitiveForge AI — Premium AI Agency Website

> **"We build and operate AI systems that help businesses attract customers, automate operations, improve customer experience, and scale."**

CognitiveForge AI is a production-grade, conversion-optimized, and SEO-architected web platform engineered for a premium AI implementation and operations agency.

---

## 🚀 Key Highlights & Architectural Features

- **Framework**: Next.js 15 (App Router with React Server Components & Targeted Client Interactivity)
- **Styling & Aesthetics**: Tailwind CSS, custom obsidian dark-theme design tokens, subtle cyan/indigo glows, and glassmorphic panels
- **Accessible Primitives**: Radix UI (Dialogs, Accordions, Tabs, Tooltips) with full keyboard navigation and WCAG AA contrast
- **Interactive Simulators**:
  - *Hero Workflow Visualizer*: Animated 5-stage request-to-result pipeline
  - *Multi-Agent Swarm Inspector*: Interactive topology of all 12 specialized autonomous agents
  - *Live Workflow Runner*: Real-time simulated execution of enterprise scenarios (lead scoring, 24/7 support, content engine)
  - *Client Cockpit Preview*: Tabbed preview of the AI Agency OS / Client Dashboard
  - *Dynamic ROI Impact Calculator*: Interactive hours-saved and cost-reduction modeler
- **Conversion & Lead Pipelines**:
  - Progressive qualification lead capture forms
  - Strategy call scheduler with timezone detection
  - Newsletter subscription with instant toast feedback
  - Multi-channel API endpoints (`/api/leads`, `/api/bookings`, `/api/newsletter`) with Zod schema validation
- **Enterprise Database & Supabase**:
  - PostgreSQL schema with Row Level Security (RLS) policies
  - Graceful fallback / mock mode when Supabase credentials are in setup
- **Production SEO & Performance**:
  - Semantic HTML5 hierarchy (H1, H2, H3)
  - JSON-LD Structured Data (`Organization`, `Service`, `FAQPage`)
  - Dynamic OpenGraph and Twitter/X social preview cards
  - Auto-generated `sitemap.xml` and `robots.txt`

---

## 📂 Project Directory Structure

```text
├── app/
│   ├── layout.tsx                     # Global layout, fonts, metadata, ToastProvider, Navbar & Footer
│   ├── page.tsx                       # High-converting homepage
│   ├── ai-agents/page.tsx             # 12 Specialized AI agents deep-dive & orchestration
│   ├── services/
│   │   ├── page.tsx                   # Services hub (10 core AI systems)
│   │   └── [slug]/page.tsx            # Dynamic & static deep-dive service pages
│   ├── industries/
│   │   ├── page.tsx                   # Industry solutions overview
│   │   └── [slug]/page.tsx            # Sector-specific architectures (E-Commerce, PropTech, SaaS, etc.)
│   ├── how-it-works/page.tsx          # 5-step implementation framework & security review
│   ├── case-studies/
│   │   ├── page.tsx                   # Enterprise case studies hub
│   │   └── [slug]/page.tsx            # Case study deep-dives (Apex Logistics, Veritas Health, Strata FinTech)
│   ├── resources/
│   │   ├── page.tsx                   # Content & Knowledge Hub
│   │   └── [slug]/page.tsx            # Playbooks & architectural guides
│   ├── about/page.tsx                 # Agency philosophy & human-in-the-loop governance
│   ├── contact/page.tsx               # Direct contact channels & interactive lead capture
│   ├── book-call/page.tsx             # 45-minute strategy call scheduler
│   ├── security/page.tsx              # Enterprise data isolation, RBAC & security whitepaper
│   ├── privacy/page.tsx               # Privacy policy
│   ├── terms/page.tsx                 # Terms of service
│   ├── not-found.tsx                  # Custom 404 page
│   ├── api/
│   │   ├── leads/route.ts             # POST: Server-validated lead submission
│   │   ├── bookings/route.ts          # POST: Strategy session booking
│   │   └── newsletter/route.ts        # POST: Email newsletter subscription
│   ├── sitemap.ts                     # XML Sitemap generator
│   └── robots.ts                      # Robots.txt generator
├── components/
│   ├── layout/                        # Navbar, MobileNav, Footer, SectionContainer, SectionHeader
│   ├── hero/                          # HeroSection, WorkflowVisualizer
│   ├── interactive/                   # LiveWorkflowSimulator, AgentOrchestrationVisualizer, ClientPortalPreview, OutcomeCalculator
│   ├── sections/                      # TrustBar, ProblemSection, ServicesGrid, WorkforceSection, ProcessSection, etc.
│   ├── forms/                         # LeadCaptureForm, StrategyBookingForm, NewsletterForm
│   └── ui/                            # Button, Card, Badge, Input, Textarea, Accordion, Tabs, Dialog, Toast
├── data/                              # Structured TypeScript datasets (services, agents, industries, FAQs, pricing, case studies)
├── lib/
│   ├── supabase/                      # Supabase client and server methods with mock fallback
│   ├── validation/                    # Zod schemas for forms
│   ├── seo/                           # Metadata & JSON-LD helpers
│   └── utils.ts                       # Classnames helper (cn)
├── supabase/
│   └── migrations/                    # SQL migrations for lead_submissions, strategy_call_bookings, newsletter_subscribers
└── public/
    └── assets/                        # Brand logo and static media
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables (Optional)
Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

Configure your Supabase keys:
```env
NEXT_PUBLIC_SITE_URL=https://cognitiveforge.ai
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```
*Note: If Supabase credentials are omitted, the application runs seamlessly in development mock mode, safely logging all lead submissions to the server console.*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Production Build
```bash
npm run build
npm run start
```

---

## 🗄️ Database Setup (Supabase)

To initialize the lead submission tables and Row Level Security policies in Supabase, execute the SQL migration located at:
```text
supabase/migrations/20260823_init_leads_and_bookings.sql
```
In your Supabase Dashboard -> **SQL Editor**, paste and run the migration script.

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub / GitLab.
2. Import the project into [Vercel](https://vercel.com).
3. Set the Environment Variables (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`).
4. Click **Deploy**.
