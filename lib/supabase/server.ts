import { createClient } from '@supabase/supabase-js';
import { LeadSubmissionPayload, BookingCallPayload, NewsletterPayload } from '@/types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const isServerSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseServiceKey && 
  !supabaseUrl.includes('placeholder')
);

export function getSupabaseServerClient() {
  if (!isServerSupabaseConfigured) {
    return null;
  }
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/**
 * Inserts a lead into Supabase. If Supabase credentials are not yet configured,
 * it safely logs the submission and returns a successful response in mock mode.
 */
export async function saveLeadSubmission(payload: LeadSubmissionPayload) {
  const client = getSupabaseServerClient();
  
  if (!client) {
    console.info('[Supabase:MockMode] Lead Submission Received:', payload);
    return {
      success: true,
      mode: 'mock',
      id: 'mock-' + Date.now(),
      message: 'Lead received in mock mode (Supabase credentials pending configuration).',
    };
  }

  try {
    const { data, error } = await client
      .from('lead_submissions')
      .insert([
        {
          name: payload.name,
          email: payload.email,
          company: payload.company || null,
          website: payload.website || null,
          industry: payload.industry || null,
          company_size: payload.companySize || null,
          primary_goal: payload.primaryGoal,
          budget_range: payload.budgetRange || null,
          message: payload.message || null,
          source: payload.source || 'website_lead_form',
          status: 'new',
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('[Supabase Error] lead_submissions insert:', error);
      throw new Error(error.message);
    }

    return { success: true, mode: 'live', data };
  } catch (err: any) {
    console.error('[Supabase Server Error]:', err);
    return { success: false, error: err.message || 'Failed to record lead.' };
  }
}

/**
 * Inserts a strategy call booking into Supabase.
 */
export async function saveStrategyBooking(payload: BookingCallPayload) {
  const client = getSupabaseServerClient();

  if (!client) {
    console.info('[Supabase:MockMode] Strategy Booking Received:', payload);
    return {
      success: true,
      mode: 'mock',
      id: 'mock-booking-' + Date.now(),
      message: 'Booking saved in mock mode.',
    };
  }

  try {
    const { data, error } = await client
      .from('strategy_call_bookings')
      .insert([
        {
          name: payload.name,
          email: payload.email,
          company: payload.company || null,
          preferred_date: payload.preferredDate || null,
          preferred_time: payload.preferredTime || null,
          timezone: payload.timezone || 'UTC',
          automation_focus: payload.automationFocus || [],
          current_challenges: payload.currentChallenges || null,
          status: 'pending',
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('[Supabase Error] strategy_call_bookings insert:', error);
      throw new Error(error.message);
    }

    return { success: true, mode: 'live', data };
  } catch (err: any) {
    console.error('[Supabase Server Error]:', err);
    return { success: false, error: err.message || 'Failed to record strategy booking.' };
  }
}

/**
 * Inserts newsletter subscriber.
 */
export async function saveNewsletterSubscription(payload: NewsletterPayload) {
  const client = getSupabaseServerClient();

  if (!client) {
    console.info('[Supabase:MockMode] Newsletter Signup:', payload);
    return { success: true, mode: 'mock', message: 'Subscribed in mock mode.' };
  }

  try {
    const { data, error } = await client
      .from('newsletter_subscribers')
      .insert([
        {
          email: payload.email,
          source: payload.source || 'footer_signup',
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        // Unique violation, already subscribed
        return { success: true, mode: 'live', message: 'You are already subscribed!' };
      }
      throw new Error(error.message);
    }

    return { success: true, mode: 'live', data };
  } catch (err: any) {
    console.error('[Supabase Server Error]:', err);
    return { success: false, error: err.message || 'Failed to subscribe.' };
  }
}
