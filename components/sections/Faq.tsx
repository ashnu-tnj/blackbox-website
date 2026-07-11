import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";
import { Reveal } from "@/components/fx/Reveal";

/**
 * FAQ section built on native <details>/<summary> — accessible and crawlable
 * with zero JavaScript. Content mirrors the FAQPage JSON-LD emitted in
 * app/page.tsx (search engines require the two to match).
 */
export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            centered
            index="05"
            eyebrow="FAQ"
            title="Answers for import buyers"
            intro="The questions we hear most from first-time and repeat buyers. Anything else — ask through the inquiry form below."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 60}>
              <details className="group rounded-lg border border-line bg-surface shadow-card transition-shadow open:shadow-card-hover">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-display text-base font-semibold text-brand-800 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-line bg-brand-50 text-brand-700 transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="border-t border-line px-6 py-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
