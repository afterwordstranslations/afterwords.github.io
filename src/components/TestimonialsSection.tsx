"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { useTranslations } from "next-intl";

export const TestimonialsSection = () => {
  const t = useTranslations("Testimonials");

  const testimonials = [
    { quote: t("quote1"), author: t("author1"), company: t("company1") },
    { quote: t("quote2"), author: t("author2"), company: t("company2") },
    { quote: t("quote3"), author: t("author3"), company: t("company3") },
    { quote: t("quote4"), author: t("author4"), company: t("company4") },
    { quote: t("quote5"), author: t("author5"), company: t("company5") },
    { quote: t("quote6"), author: t("author6"), company: t("company6") },
    { quote: t("quote7"), author: t("author7"), company: t("company7") },
  ];
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
          eyebrow={t("eyebrow")}
          title={t("title")}
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
                aria-label={t("goToTestimonial", { number: i + 1 })}
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
