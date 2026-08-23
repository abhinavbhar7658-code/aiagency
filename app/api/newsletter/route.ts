import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation/lead";
import { saveNewsletterSubscription } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
 try {
 const body = await req.json();

 const validationResult = newsletterSchema.safeParse(body);
 if (!validationResult.success) {
 const firstError = validationResult.error.errors[0]?.message ||"Invalid email address.";
 return NextResponse.json(
 { success: false, error: firstError },
 { status: 400 }
 );
 }

 const payload = validationResult.data;
 const result = await saveNewsletterSubscription(payload);

 if (!result.success) {
 return NextResponse.json(
 { success: false, error: result.error ||"Failed to subscribe." },
 { status: 500 }
 );
 }

 return NextResponse.json(
 {
 success: true,
 mode: result.mode,
 message: result.message ||"Newsletter subscription recorded.",
 },
 { status: 200 }
 );
 } catch (err: any) {
 console.error("[API Error /api/newsletter]:", err);
 return NextResponse.json(
 { success: false, error:"Internal server error." },
 { status: 500 }
 );
 }
}
