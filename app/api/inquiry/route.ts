import { NextResponse } from "next/server";
import { validateInquiry, hasErrors } from "@/lib/validation";

/**
 * Trade-inquiry endpoint.
 *
 * Validates server-side (never trust the client) and rejects honeypot hits.
 * Currently it logs the lead and returns success — wire the marked TODO to an
 * email service (Resend/SendGrid), CRM, or database to deliver inquiries.
 */
/** Reject anything larger than this outright — the form needs only a few KB. */
const MAX_BODY_BYTES = 16 * 1024;

export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, message: "Request too large." },
      { status: 413 }
    );
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, message: "Request too large." },
      { status: 413 }
    );
  }

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot: silently accept bot submissions without processing them.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const errors = validateInquiry(data);
  if (hasErrors(errors)) {
    return NextResponse.json(
      { ok: false, message: "Please correct the highlighted fields.", errors },
      { status: 422 }
    );
  }

  // TODO: deliver the lead — e.g. await sendEmail(data) / await crm.create(data)
  console.info("[trade-inquiry]", {
    company: data.companyName,
    contact: data.contactName,
    email: data.email,
    port: data.destinationPort,
    product: data.product,
    volume: data.volume,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
