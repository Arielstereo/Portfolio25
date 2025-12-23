import { toHtml } from "@/components/ui/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, email, message } = body;

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    console.log("/api/send called with:", { username, email, message });

    const html = toHtml({ username, email, message });

    const { data, error } = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: ["arielstereo@msn.com"],
      subject: "Portfolio",
      html,
    });

    console.log("Resend response:", data, "error:", error);

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: error?.message || String(error) },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, data });
  } catch (error) {
    console.error("Unexpected error in /api/send:", error);
    return NextResponse.json(
      { ok: false, error: error?.message || String(error) },
      { status: 500 }
    );
  }
}
