"use server";

import { Resend } from "resend";
import { z } from "zod";

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const quoteSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Valid email required"),
  company: z.string().min(1, "Company is required").max(200),
  country: z.string().min(2, "Country is required"),
  boxType: z.string().min(1, "Box type is required"),
  quantity: z.string().min(1, "Quantity is required"),
  dimensions: z.string().min(1, "Dimensions are required"),
  comments: z.string().optional(),
  sourcePage: z.string().optional(),
  productSlug: z.string().optional(),
  turnstileToken: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;

type QuoteResult = { ok: true; message: string } | { ok: false; error: string };

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Skip verification if not configured

  const body = new URLSearchParams({ secret, response: token });
  const res = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body });
  const data = await res.json() as { success: boolean };
  return data.success === true;
}

export async function submitQuote(formData: QuoteFormData): Promise<QuoteResult> {
  const parsed = quoteSchema.safeParse(formData);
  if (!parsed.success) {
    return { ok: false, error: "Validation failed. Please check your inputs." };
  }

  // Verify Turnstile if configured
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    if (!parsed.data.turnstileToken) {
      return { ok: false, error: "Please complete the security check." };
    }
    const valid = await verifyTurnstile(parsed.data.turnstileToken);
    if (!valid) {
      return { ok: false, error: "Security check failed. Please refresh and try again." };
    }
  }

  const { name, email, company, country, boxType, quantity, dimensions, comments, sourcePage } =
    parsed.data;

  const salesEmail = process.env.SALES_NOTIFICATION_EMAIL ?? "sales@blfpack.com";
  const fromAddress = process.env.RESEND_FROM_ADDRESS ?? "onboarding@resend.dev";
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.log("--- Quote inquiry (Resend not configured) ---");
    console.log(JSON.stringify(parsed.data, null, 2));
    return {
      ok: true,
      message:
        "Thank you for your inquiry. We will respond within 2 working hours (GMT+8).",
    };
  }

  const resend = new Resend(resendApiKey);

  const contactEmail = `
New Packaging Inquiry from ${name}

Company: ${company}
Email: ${email}
Country: ${country}

Box Type: ${boxType}
Quantity: ${quantity}
Dimensions: ${dimensions}

${comments ? `Additional Details:\n${comments}\n` : ""}
${sourcePage ? `Submitted from: ${sourcePage}` : ""}

--
Respond within 2 working hours (GMT+8).
  `.trim();

  try {
    await Promise.all([
      // Sales notification
      resend.emails.send({
        from: `Blf Inquiry <${fromAddress}>`,
        to: salesEmail,
        subject: `Quote Request: ${boxType} — ${company}`,
        text: contactEmail,
      }),
      // Auto-reply to customer
      resend.emails.send({
        from: `Blf Packaging <${fromAddress}>`,
        to: email,
        subject: "Thank you for your inquiry — Blf Packaging",
        text: `Hi ${name},

Thank you for reaching out to Blf Packaging. We have received your inquiry for ${boxType} and will respond within 2 working hours (GMT+8).

In the meantime, feel free to reach us on WhatsApp for urgent requests.

Best regards,
Blf Packaging Team
Guangzhou Blf Packing Co., Ltd.`,
      }),
    ]);

    return {
      ok: true,
      message:
        "Thank you for your inquiry. We will respond within 2 working hours (GMT+8).",
    };
  } catch (err) {
    console.error("Resend send failed:", err);
    return { ok: false, error: "Failed to send inquiry. Please try again or email us directly." };
  }
}
