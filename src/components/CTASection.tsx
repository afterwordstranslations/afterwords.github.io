"use client";
import { FadeIn } from "./animations/FadeIn";

interface CTASectionProps {
  eyebrow: string;
  title: string;
  description: string;
  buttonText?: string;
}

export const CTASection = ({
  eyebrow,
  title,
  description,
  buttonText = "Contact us",
}: CTASectionProps) => {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(27% 0.041 260.031), oklch(35% 0.045 240), oklch(27% 0.046 192.524))",
      }}
    >
      {/* Warm accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-warm/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-warm/5 blur-[100px]" />

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4 text-warm">
              {eyebrow}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              {description}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <button
              className="group relative inline-flex items-center gap-2 bg-warm text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-warm-dark hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-warm/20"
              onClick={() => window.Beacon("open")}
            >
              {buttonText}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
