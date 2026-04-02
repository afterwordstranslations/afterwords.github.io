"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";

interface PageHeroProps {
  navItems: { label: string; href: string }[];
  badge: string;
  title: string;
  subtitle: string;
  cta?: ReactNode;
  features?: { title: string; description: string }[];
  backgroundElement?: ReactNode;
  variant?: "full" | "compact";
  className?: string;
}

export const PageHero = ({
  navItems,
  badge,
  title,
  subtitle,
  cta,
  features,
  backgroundElement,
  variant = "compact",
  className = "",
}: PageHeroProps) => {
  const paddingClass = variant === "full" ? "pb-20" : "pb-16";

  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {/* Background */}
      {backgroundElement || (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary to-slate-900" />
      )}

      <div className={`relative z-10 px-8 lg:px-24 ${paddingClass}`}>
        <Header navItems={navItems} />

        <div className="max-w-2xl mt-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full bg-warm/20 text-warm border border-warm/30 mb-8">
              {badge}
            </span>
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {cta}
            </motion.div>
          )}
        </div>

        {features && features.length > 0 && (
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-16 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {features.map((feature, i) => (
              <div key={i} className="group">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-warm mb-2">
                  {feature.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
