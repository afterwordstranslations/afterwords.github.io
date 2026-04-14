"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  cta?: ReactNode;
  features?: { title: string; description: string }[];
  backgroundElement?: ReactNode;
  variant?: "full" | "compact";
  lightHero?: boolean;
  className?: string;
}

export const PageHero = ({
  badge,
  title,
  subtitle,
  cta,
  features,
  backgroundElement,
  variant = "compact",
  lightHero = false,
  className = "",
}: PageHeroProps) => {
  const paddingClass = variant === "full" ? "pb-20" : "pb-16";
  const titleColor = lightHero ? "text-base-content" : "text-white";
  const subtitleColor = lightHero ? "text-base-content/70" : "text-white/80";
  const featureBorder = lightHero ? "border-base-content/10" : "border-white/10";
  const featureDesc = lightHero ? "text-base-content/50" : "text-white/50";

  return (
    <section className={`relative w-full ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElement || (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        )}
      </div>

      <div className={`relative z-10 px-8 lg:px-24 ${paddingClass}`}>
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8 items-start">
          {/* Left — title */}
          <div>
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-6 text-warm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {badge}
            </motion.p>

            <motion.h1
              className={`font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-tight font-bold ${titleColor}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {title}
            </motion.h1>
          </div>

          {/* Right — subtitle, CTA, features */}
          <div className="flex flex-col justify-center">
            <motion.p
              className={`text-lg md:text-xl ${subtitleColor} mb-8 leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>

            {cta && (
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {cta}
              </motion.div>
            )}

            {features && features.length > 0 && (
              <motion.div
                className={`space-y-4 pt-8 border-t ${featureBorder}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {features.map((feature, i) => (
                  <div key={i} className="border-l-2 border-warm/40 pl-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-warm mb-1">
                      {feature.title}
                    </h4>
                    <p className={`${featureDesc} text-sm leading-relaxed`}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
