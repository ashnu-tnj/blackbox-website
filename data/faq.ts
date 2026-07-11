/**
 * Frequently asked questions — single source of truth for both the visible
 * FAQ section and the FAQPage JSON-LD structured data (they must match for
 * search engines to honor the markup).
 *
 * Answers are written for answer engines: a direct first sentence that stands
 * alone, followed by supporting detail.
 */
export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What products does BlackBox Traders export?",
    answer:
      "BlackBox Traders exports coconut-based products — semi-husked coconuts, desiccated coconut, frozen coconut, and copra — along with fresh pineapples and watermelons. All produce is graded and packed to international export standards, with full specification sheets shared on inquiry.",
  },
  {
    question: "Which markets does BlackBox Traders ship to?",
    answer:
      "We ship to international markets with a focus on the Middle East, and executed India's first sea shipment of fresh pineapples to the UAE. Sea freight (including reefer containers for perishables) and air freight options are quoted per destination port.",
  },
  {
    question: "What certifications and registrations does BlackBox Traders hold?",
    answer:
      "BlackBox Traders is registered with DGFT (Directorate General of Foreign Trade), APEDA, the Coconut Development Board, and the Spices Board of India. The company is FSSAI-licensed (12421999000538), GST-registered (GSTIN 33AANFB9273H2Z5), and listed as a verified business on IndiaMART.",
  },
  {
    question: "Can I order a trial quantity before committing to full containers?",
    answer:
      "Yes. We accept flexible volumes, from trial orders through full container loads (20ft and 40ft FCL), and can structure recurring monthly shipments. Mention your target volume in the inquiry form and we will quote accordingly.",
  },
  {
    question: "How are perishable shipments kept fresh in transit?",
    answer:
      "Perishables travel in temperature-controlled reefer containers with cold-chain handling from farm gate to destination port. Temperatures are monitored throughout the transit, and packing is matched to each product — for example, IQF freezing at −18 °C for frozen coconut.",
  },
  {
    question: "How do I get an export quotation from BlackBox Traders?",
    answer:
      "Submit the trade inquiry form on this page with your company name, destination port, product requirement, and volume — or email blackboxtraders@hotmail.com. Verified business inquiries receive pricing, specifications, and shipping options within 1–2 working days.",
  },
];
