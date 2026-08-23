-- ==============================================================================
-- CognitiveForge AI: Production Database Schema & Security Policies
-- ==============================================================================

-- 1. Table: lead_submissions
-- Ingests leads from website contact, service, and case study forms
CREATE TABLE IF NOT EXISTS public.lead_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    website TEXT,
    industry TEXT,
    company_size TEXT,
    primary_goal TEXT NOT NULL,
    budget_range TEXT,
    message TEXT,
    source TEXT DEFAULT 'website_lead_form',
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed', 'archived')),
    metadata JSONB DEFAULT '{}'::jsonb
);

-- 2. Table: strategy_call_bookings
-- Ingests 45-minute discovery strategy call bookings
CREATE TABLE IF NOT EXISTS public.strategy_call_bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    preferred_date DATE,
    preferred_time TEXT,
    timezone TEXT DEFAULT 'UTC',
    automation_focus TEXT[] DEFAULT '{}',
    current_challenges TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled'))
);

-- 3. Table: newsletter_subscribers
-- Ingests email subscribers from footer and knowledge hub
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    email TEXT UNIQUE NOT NULL,
    source TEXT DEFAULT 'footer_signup',
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed'))
);

-- ==============================================================================
-- Row Level Security (RLS) Policies
-- ==============================================================================

ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.strategy_call_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Anonymous users (via server API action) can insert new leads
CREATE POLICY "Allow public insert for lead submissions"
    ON public.lead_submissions
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Anonymous users can request strategy bookings
CREATE POLICY "Allow public insert for strategy bookings"
    ON public.strategy_call_bookings
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Anonymous users can subscribe to newsletter
CREATE POLICY "Allow public insert for newsletter subscriptions"
    ON public.newsletter_subscribers
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Read and update access restricted to authenticated service role / agency admins
CREATE POLICY "Allow service role full access to leads"
    ON public.lead_submissions
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow service role full access to bookings"
    ON public.strategy_call_bookings
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow service role full access to newsletter"
    ON public.newsletter_subscribers
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.lead_submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.lead_submissions (email);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON public.strategy_call_bookings (created_at DESC);
