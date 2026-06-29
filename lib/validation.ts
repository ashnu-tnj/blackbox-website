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

export function validateInquiry(input: Partial<InquiryInput>): InquiryErrors {
  const errors: InquiryErrors = {};

  if (!input.companyName?.trim()) {
    errors.companyName = "Company name is required.";
  }
  if (!input.contactName?.trim()) {
    errors.contactName = "Please tell us who we should reply to.";
  }
  if (!input.email?.trim()) {
    errors.email = "Email is required so we can respond.";
  } else if (!EMAIL_RE.test(input.email.trim())) {
    errors.email = "Enter a valid email address (e.g. name@company.com).";
  }
  if (!input.destinationPort?.trim()) {
    errors.destinationPort = "Destination port or country is required.";
  }
  if (!input.product?.trim()) {
    errors.product = "Select the product you need.";
  }
  if (!input.volume?.trim()) {
    errors.volume = "Volume / frequency helps us quote accurately.";
  }

  return errors;
}

export function hasErrors(errors: InquiryErrors): boolean {
  return Object.keys(errors).length > 0;
}
