import { contactSchema } from "@/lib/contact-schema";
import { BUSINESS_INFO } from "@/lib/constants";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data", issues: parsed.error.flatten() }, { status: 400 });
    }

    const data = parsed.data;

    if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
        to: [process.env.CONTACT_TO_EMAIL],
        subject: `New inquiry from ${data.name} - ${BUSINESS_INFO.name}`,
        replyTo: data.email,
        text: [
          `Name: ${data.name}`,
          `Phone: ${data.phone}`,
          `Email: ${data.email ?? "Not provided"}`,
          `Vehicle: ${data.vehicle ?? "Not provided"}`,
          `Service Needed: ${data.serviceNeeded}`,
          "",
          "Message:",
          data.message,
        ].join("\n"),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
