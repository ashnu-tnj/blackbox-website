/**
 * Trade-inquiry validation shared by the client form and the API route,
 * so client and server enforce identical rules.
 */
export type InquiryInput = {
  companyName: string;
  contactName: string;
  email: string;
  destinationPort: string;
  product: string;
  volume: string;
  message?: string;
  /** Honeypot — must stay empty (bots fill it). */
  website?: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Maximum accepted length per field — guards the public API against abuse. */
export const FIELD_LIMITS: Record<keyof InquiryInput, number> = {
  companyName: 200,
  contactName: 120,
  email: 254,
  destinationPort: 160,
  product: 120,
  volume: 160,
  message: 4000,
  website: 200,
};

const TOO_LONG = "This entry is too long — please shorten it.";

export function validateInquiry(input: Partial<InquiryInput>): InquiryErrors {
  const errors: InquiryErrors = {};

  if (!input.companyName?.trim()) {
    errors.companyName = "Company name is required.";
  } else if (input.companyName.length > FIELD_LIMITS.companyName) {
    errors.companyName = TOO_LONG;
  }
  if (!input.contactName?.trim()) {
    errors.contactName = "Please tell us who we should reply to.";
  } else if (input.contactName.length > FIELD_LIMITS.contactName) {
    errors.contactName = TOO_LONG;
  }
  if (!input.email?.trim()) {
    errors.email = "Email is required so we can respond.";
  } else if (input.email.length > FIELD_LIMITS.email) {
    errors.email = TOO_LONG;
  } else if (!EMAIL_RE.test(input.email.trim())) {
    errors.email = "Enter a valid email address (e.g. name@company.com).";
  }
  if (!input.destinationPort?.trim()) {
    errors.destinationPort = "Destination port or country is required.";
  } else if (input.destinationPort.length > FIELD_LIMITS.destinationPort) {
    errors.destinationPort = TOO_LONG;
  }
  if (!input.product?.trim()) {
    errors.product = "Select the product you need.";
  } else if (input.product.length > FIELD_LIMITS.product) {
    errors.product = TOO_LONG;
  }
  if (!input.volume?.trim()) {
    errors.volume = "Volume / frequency helps us quote accurately.";
  } else if (input.volume.length > FIELD_LIMITS.volume) {
    errors.volume = TOO_LONG;
  }
  if (input.message && input.message.length > FIELD_LIMITS.message) {
    errors.message = TOO_LONG;
  }

  return errors;
}

export function hasErrors(errors: InquiryErrors): boolean {
  return Object.keys(errors).length > 0;
}
