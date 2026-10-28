import { faqs } from "@/lib/content";
import { Plus } from "./icons";

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="h2 mt-5">Questions, answered honestly.</h2>
          <p className="lead mt-5 max-w-sm">
            Akango is in early access. Here is exactly what is available today
            and what is still being built.
          </p>
        </div>

        <div className="border-t border-white/10">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-white/10 py-5 [&::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-base font-semibold text-white transition hover:text-gold/90 focus:outline-none focus-visible:text-gold/90">
                {faq.question}
                <Plus className="h-5 w-5 shrink-0 text-muted transition duration-200 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-xl pr-8 text-sm leading-6 text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
