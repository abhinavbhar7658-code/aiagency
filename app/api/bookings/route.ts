import { NextRequest, NextResponse } from "next/server";
import { bookingCallSchema } from "@/lib/validation/lead";
import { saveStrategyBooking } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
 try {
 const body = await req.json();

 const validationResult = bookingCallSchema.safeParse(body);
 if (!validationResult.success) {
 const firstError = validationResult.error.errors[0]?.message ||"Invalid booking data.";
 return NextResponse.json(
 { success: false, error: firstError },
 { status: 400 }
 );
 }

 const payload = validationResult.data;
 const result = await saveStrategyBooking(payload);

 if (!result.success) {
 return NextResponse.json(
 { success: false, error: result.error ||"Failed to record booking." },
 { status: 500 }
 );
 }

 return NextResponse.json(
 {
 success: true,
 mode: result.mode,
 message:"Strategy session booked successfully.",
 },
 { status: 200 }
 );
 } catch (err: any) {
 console.error("[API Error /api/bookings]:", err);
 return NextResponse.json(
 { success: false, error:"Internal server error." },
 { status: 500 }
 );
 }
}
