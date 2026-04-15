"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeIn } from "./animations/FadeIn";
import { trackCTA } from "~/lib/analytics";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
}

export const CTASection = ({
  title,
  description,
  buttonText = "Contact us",
}: CTASectionProps) => {
  const pathname = usePathname();
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Warm accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-warm/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-warm/5 blur-[100px]" />

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl mb-6 text-white leading-tight">
              {title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed">
              {description}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/get-a-quote"
              className="group relative inline-flex items-center gap-2.5 bg-warm text-slate-900 font-semibold px-10 py-5 rounded-xl hover:bg-warm-dark hover:text-white transition-all duration-300 shadow-lg shadow-warm/25 hover:shadow-xl hover:shadow-warm/30 text-lg"
              onClick={() => trackCTA(buttonText, pathname)}
            >
              {buttonText}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
