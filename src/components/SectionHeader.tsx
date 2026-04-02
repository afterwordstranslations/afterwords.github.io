"use client";
import { FadeIn } from "./animations/FadeIn";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  titleItalic?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  title,
  titleItalic,
  description,
  align = "left",
  light = false,
  className = "",
}: SectionHeaderProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const textColor = light ? "text-white" : "text-base-content";
  const mutedColor = light ? "text-white/60" : "text-warm-dark";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      <FadeIn>
        <p className={`text-sm font-semibold uppercase tracking-[0.2em] mb-4 ${mutedColor}`}>
          {eyebrow}
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className={`font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6 leading-tight ${textColor}`}>
          {title}
          {titleItalic && <em className="font-normal"> {titleItalic}</em>}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className={`text-lg md:text-xl leading-relaxed ${light ? "text-white/80" : "text-base-content/70"}`}>
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
};
