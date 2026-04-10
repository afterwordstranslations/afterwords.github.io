"use client";
import { CountUp } from "./animations/CountUp";
import { SectionHeader } from "./SectionHeader";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

const stats = [
  {
    value: 5000,
    suffix: "+",
    label: "Documents Delivered",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    ),
  },
  {
    value: 450,
    suffix: "+",
    label: "Annual Patent Projects",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    value: 9,
    suffix: "+",
    label: "Specialized Industries",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M8 10h8" />
        <path d="M8 14h8" />
      </svg>
    ),
  },
  {
    value: 99.99,
    suffix: "%",
    label: "Deadline Compliance",
    decimals: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export const DecadeSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      {/* Warm glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-warm/8 blur-[150px]" />

      {/* Watermark */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 text-[20rem] font-bold text-white/[0.03] font-[family-name:var(--font-display)] leading-none select-none hidden lg:block">
        10+
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <SectionHeader
          eyebrow="10th Anniversary"
          title="Our Decade of Excellence"
          description="Since 2015 we have been bridging languages and cultures across industries with precision and care."
          light
          className="mb-16"
        />

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-warm/30 transition-all duration-300 hover:bg-white/10">
                <div className="text-warm mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <p className="text-white/50 text-sm font-medium">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
