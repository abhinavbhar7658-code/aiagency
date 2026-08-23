import { NextRequest, NextResponse } from "next/server";
import { leadSubmissionSchema } from "@/lib/validation/lead";
import { saveLeadSubmission } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
 try {
 const body = await req.json();

 // 1. Server-side schema validation
 const validationResult = leadSubmissionSchema.safeParse(body);
 if (!validationResult.success) {
 const firstError = validationResult.error.errors[0]?.message ||"Invalid submission data.";
 return NextResponse.json(
 { success: false, error: firstError },
 { status: 400 }
 );
 }

 const payload = validationResult.data;

 // 2. Persist to Supabase
 const result = await saveLeadSubmission(payload);

 if (!result.success) {
 return NextResponse.json(
 { success: false, error: result.error ||"Failed to record lead in database." },
 { status: 500 }
 );
 }

 return NextResponse.json(
 {
 success: true,
 mode: result.mode,
 message:"Lead submission received successfully.",
 },
 { status: 200 }
 );
 } catch (err: any) {
 console.error("[API Error /api/leads]:", err);
 return NextResponse.json(
 { success: false, error:"Internal server error." },
 { status: 500 }
 );
 }
}
