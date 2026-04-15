"use client";

import { FadeIn } from "~/components/animations/FadeIn";

const testimonial = {
  quote:
    "We engaged Afterwords Translations for a high-stakes interpretation project and they delivered at a level few vendors reach. They were professional and strong on context, not just language. Communication was clear, controlled, and seamless throughout. I would work with them again without hesitation.",
  author: "Ifigenia Geiveli",
  company: "Human Resources Executive",
};

export function FeaturedTestimonial() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-8">
        <div className="relative max-w-4xl">
          <FadeIn>
            {/* Decorative quote mark */}
            <div className="absolute -top-2 -left-2 md:-left-6 text-[6rem] md:text-[8rem] leading-none font-[family-name:var(--font-display)] text-warm/15 select-none pointer-events-none">
              &ldquo;
            </div>

            <div className="pt-12 md:pt-16">
              <blockquote className="font-[family-name:var(--font-display)] text-xl md:text-2xl leading-relaxed text-base-content/80 mb-8 italic">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-warm rounded-full" />
                <div>
                  <p className="font-bold text-base-content">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-base-content/50">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
