"use client";

import { SectionHeader } from "~/components/SectionHeader";
import {
  StaggerContainer,
  StaggerItem,
} from "~/components/animations/StaggerContainer";
const steps = [
  {
    title: "Reach out",
    description:
      "Drop us a message through email, WhatsApp, or live chat \u2014 whichever you prefer.",
  },
  {
    title: "Get your quote",
    description:
      "We\u2019ll review your project and send a tailored quote within hours, not days.",
  },
  {
    title: "We get to work",
    description:
      "Approve, and your dedicated team starts immediately.",
  },
  {
    title: "Receive your deliverables",
    description:
      "Get your completed translations, subtitles, or interpreting report \u2014 reviewed and ready to use.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-base-200">
      <div className="container mx-auto px-8">
        <SectionHeader
          eyebrow="How it works"
          title="Simple from start to finish"
          className="mb-16"
        />

        {/* Steps with connectors */}
        <StaggerContainer className="">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="relative flex flex-col items-start pb-10 md:pb-0 md:pr-8">
                  {/* Connector line — horizontal on desktop, vertical on mobile */}
                  {i < steps.length - 1 && (
                    <>
                      {/* Desktop: horizontal line from circle to next step */}
                      <div className="hidden md:block absolute top-5 left-10 right-0 h-px bg-warm/20" />
                      {/* Mobile: vertical line from circle downward */}
                      <div className="md:hidden absolute top-10 left-5 w-px h-full bg-warm/20" />
                    </>
                  )}

                  {/* Numbered circle */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-warm/10 border-2 border-warm/30 flex items-center justify-center mb-5">
                    <span className="text-sm font-bold text-warm tabular-nums">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg text-base-content mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-base-content/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
