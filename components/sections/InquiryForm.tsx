"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import { company } from "@/data/company";
import { CheckIcon, ShieldCheckIcon } from "@/components/ui/icons";
import {
  validateInquiry,
  hasErrors,
  type InquiryErrors,
  type InquiryInput,
} from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full rounded-md border bg-surface px-4 py-3 text-base text-brand-900 placeholder:text-muted-foreground/70 transition-colors focus:border-brand-500 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0";

export function InquiryForm() {
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const fieldClass = (name: keyof InquiryInput) =>
    `${fieldBase} ${errors[name] ? "border-destructive" : "border-line"}`;

  function readForm(form: HTMLFormElement): Partial<InquiryInput> {
    const fd = new FormData(form);
    return {
      companyName: String(fd.get("companyName") ?? ""),
      contactName: String(fd.get("contactName") ?? ""),
      email: String(fd.get("email") ?? ""),
      destinationPort: String(fd.get("destinationPort") ?? ""),
      product: String(fd.get("product") ?? ""),
      volume: String(fd.get("volume") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
    };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = readForm(form);

    const nextErrors = validateInquiry(data);
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      // Move focus to the first invalid field for accessibility.
      const first = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrors(json.errors ?? {});
        setServerMessage(json.message ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      form.reset();
      setErrors({});
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please check your connection and retry.");
    }
  }

  if (status === "success") {
    return (
      <section id="inquiry" className="scroll-mt-20 bg-brand-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-xl rounded-lg border border-line bg-surface p-10 text-center shadow-card">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
              <CheckIcon className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-brand-900">
              Thank you — your inquiry is in.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our export desk will respond to your requirement shortly. For urgent
              trade discussions, email us at{" "}
              <a href={`mailto:${company.email}`} className="font-semibold text-accent-700">
                {company.email}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="btn-outline mt-8"
            >
              Submit another inquiry
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="inquiry" className="scroll-mt-20 bg-brand-50 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              index="05"
              eyebrow="Trade Inquiry"
              title="Request an export quote"
              intro="Tell us your destination and requirement. Our team responds with pricing, specifications, and shipping options tailored to your market."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Cold-chain handling for perishable consignments",
                "Documentation: phytosanitary, certificate of origin & more",
                "Flexible volumes — trial orders to full container loads",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-900">
                  <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-lg border border-line bg-surface p-6 shadow-card sm:p-8"
          >
            {/* Honeypot — visually hidden, not announced to screen readers */}
            <div aria-hidden="true" className="absolute left-[-9999px]">
              <label>
                Leave this field empty
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Company name"
                name="companyName"
                required
                error={errors.companyName}
                autoComplete="organization"
                placeholder="Acme Imports LLC"
                className={fieldClass("companyName")}
              />
              <Field
                label="Contact person"
                name="contactName"
                required
                error={errors.contactName}
                autoComplete="name"
                placeholder="Full name"
                className={fieldClass("contactName")}
              />
              <Field
                label="Business email"
                name="email"
                type="email"
                required
                error={errors.email}
                autoComplete="email"
                inputMode="email"
                placeholder="name@company.com"
                className={fieldClass("email")}
              />
              <Field
                label="Destination port / country"
                name="destinationPort"
                required
                error={errors.destinationPort}
                placeholder="e.g. Jebel Ali, UAE"
                className={fieldClass("destinationPort")}
              />

              <div>
                <FieldLabel htmlFor="product" required>
                  Product requirement
                </FieldLabel>
                <select
                  id="product"
                  name="product"
                  defaultValue=""
                  aria-invalid={!!errors.product}
                  aria-describedby={errors.product ? "product-error" : undefined}
                  className={fieldClass("product")}
                >
                  <option value="" disabled>
                    Select a product
                  </option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Other / Multiple">Other / Multiple</option>
                </select>
                <FieldError id="product-error" message={errors.product} />
              </div>

              <Field
                label="Volume / frequency (MT)"
                name="volume"
                required
                error={errors.volume}
                placeholder="e.g. 2 × 20ft FCL / month"
                className={fieldClass("volume")}
              />
            </div>

            <div className="mt-5">
              <FieldLabel htmlFor="message">Additional details</FieldLabel>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Packaging, grading, target price, or timeline…"
                className={`${fieldBase} border-line resize-y`}
              />
            </div>

            {status === "error" && serverMessage && (
              <p
                role="alert"
                className="mt-5 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
              >
                {serverMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-accent mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send Trade Inquiry"}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              We reply to verified business inquiries within 1–2 working days.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Small presentational helpers ---------- */

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-brand-900">
      {children}
      {required && (
        <span className="text-destructive" aria-hidden="true">
          {" "}
          *
        </span>
      )}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-destructive">
      {message}
    </p>
  );
}

function Field({
  label,
  name,
  error,
  required,
  type = "text",
  className,
  ...rest
}: {
  label: string;
  name: keyof InquiryInput;
  error?: string;
  required?: boolean;
  type?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const errorId = `${name}-error`;
  return (
    <div>
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={className}
        {...rest}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}
