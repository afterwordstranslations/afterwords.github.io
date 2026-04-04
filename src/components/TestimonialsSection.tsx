"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    quote:
      "In 2023, the year when the title of the European Capital of Culture was awarded, 2023 Eleusis in cooperation with the Aikaterini Laskaridis Foundation and with its exclusive sponsorship, implemented the dedicated bilingual anthology They Wrote about Her with texts by Greek and foreign authors written about Eleusis, from antiquity to the present day. The Afterwords Translations team undertook the difficult task of translating texts from the entire range of this anthology. The collaboration was flawless at every level and the result was excellent with an emphasis on the quality of the style and meaning of the texts.",
    author: "Isavela Karouti",
    company: "2023 Eleusis European Capital of Culture",
  },
  {
    quote:
      "I strongly endorse Ms. Chatzistylianou as a subtitler. She is professional, reliable, and fast, with excellent knowledge of multiple languages, strong research abilities, and clear communication. Her expertise and work ethic make her one of the best in today's subtitling market.",
    author: "Georgios Kalipetis",
    company: "VIDEOPRESS S.A.",
  },
  {
    quote:
      "Beyond their linguistic expertise, Afterwords Translations proves to be a collaborative and reliable team. They consistently go above and beyond to meet deadlines and play a crucial role in the overall success of our projects, especially focusing on chemical and technical patents.",
    author: "Olena Vasilatos",
    company: "LSP Owner & Translator",
  },
  {
    quote:
      "After working with Afterwords Translations, I can confidently affirm their outstanding proficiency in medical and legal translations. Their precision, unwavering professionalism, and dedication to meeting deadlines make them an indispensable resource.",
    author: "Sofia Simoni",
    company: "Greek LSP Owner & Subtitler",
  },
  {
    quote:
      "The Afterwords Translations team is dedicated and readily accessible to deliver outstanding services for translation and interpreting requirements. Moreover, they exhibit a high level of professionalism and ethical conduct, making them excellent colleagues. I wholeheartedly recommend their services.",
    author: "Zoe Resta, Ph.D.",
    company: "Translator & Conference Interpreter",
  },
  {
    quote:
      "We engaged Afterwords Translations for a high-stakes interpretation project and they delivered at a level few vendors reach. They were professional and strong on context, not just language. Communication was clear, controlled, and seamless throughout. I would work with them again without hesitation.",
    author: "Ifigenia Geiveli",
    company: "Human Resources Executive",
  },
  {
    quote:
      "Our long-standing collaboration with Afterwords proves the quality of their work. They are a team of translators who respond with great success to the translation of texts from various scientific disciplines, always respecting the deadlines set each time.",
    author: "Maria Simantiri",
    company: "Gutenberg Editions, Athens",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const testimonial = testimonials[current];

  return (
    <section className="py-24 md:py-32 bg-base-200">
      <div className="container mx-auto px-8">
        <SectionHeader
          eyebrow="Client Testimonials"
          title="What our clients say"
          className="mb-16"
        />

        <div
          className="relative max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Decorative quote mark — animates on slide change */}
          <motion.div
            key={`quote-${current}`}
            className="absolute -top-2 -left-2 md:-left-6 text-[6rem] md:text-[8rem] leading-none font-[family-name:var(--font-display)] text-warm/15 select-none pointer-events-none"
            initial={{ opacity: 0, scale: 0.3, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.8 }}
          >
            &ldquo;
          </motion.div>

          <div className="relative min-h-[280px] md:min-h-[200px] pt-12 md:pt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots with progress indicator */}
          <div className="flex gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative h-2 rounded-full cursor-pointer overflow-hidden transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-warm/30"
                    : "w-2 bg-base-content/20 hover:bg-base-content/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              >
                {i === current && (
                  <motion.div
                    className="absolute inset-0 bg-warm rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isPaused ? undefined : 1 }}
                    transition={{ duration: 7, ease: "linear" }}
                    key={`progress-${current}`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
