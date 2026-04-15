"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trackCTA } from "~/lib/analytics";
import { PageHero } from "~/components/PageHero";
import { SectionHeader } from "~/components/SectionHeader";
import { CTASection } from "~/components/CTASection";
import { Footer } from "~/components/Footer";
import { FadeIn } from "~/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "~/components/animations/StaggerContainer";

const services = [
  {
    id: 1,
    label: "TV Series & Episodic Content",
    description:
      "Comprehensive subtitling for television series with consistent character voice and terminology throughout entire seasons.",
  },
  {
    id: 2,
    label: "Documentaries & Non-Fiction",
    description:
      "Precise translation that preserves the educational and informational integrity of documentary content across all genres.",
  },
  {
    id: 3,
    label: "Feature Films & Cinema",
    description:
      "Theatre-quality subtitles that capture the emotional nuance and dramatic timing of feature film productions.",
  },
  {
    id: 4,
    label: "Theatre & Live Performance",
    description:
      "Specialized subtitling for theatre performances and live events, respecting the unique dynamics of staged productions.",
  },
];

const whyUs = [
  {
    label: "Tone Adaptation",
    description:
      "We navigate all genres and registers with ease, ensuring that the tone of your original content—whether comedic, technical, or dramatic—is perfectly adapted for your target viewers.",
  },
  {
    label: "Industry Turnaround",
    description:
      "We understand the tight turnaround times inherent in the entertainment industry and deliver high-quality subtitles without ever sacrificing accuracy.",
  },
  {
    label: "Professional Workflow",
    description:
      "Partner with us for a seamless, professional viewing experience that respects both the art on screen and the constraints of your deadline.",
  },
];

const specializations = [
  {
    label: "Film Festivals",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="6" width="18" height="12" rx="1" />
        <circle cx="7" cy="9" r="1" />
        <circle cx="12" cy="9" r="1" />
        <circle cx="17" cy="9" r="1" />
        <circle cx="7" cy="15" r="1" />
        <circle cx="12" cy="15" r="1" />
        <circle cx="17" cy="15" r="1" />
      </svg>
    ),
  },
  {
    label: "Theatre",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 4h18" />
        <path d="M5 4v6a7 7 0 0 0 14 0V4" />
        <path d="M9 11c.5 1 1.5 1.5 3 1.5S14.5 12 15 11" />
        <circle cx="9" cy="8" r="0.5" fill="currentColor" />
        <circle cx="15" cy="8" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TV Series",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M8 3l4 4 4-4" />
        <path d="M8 19v2" />
        <path d="M16 19v2" />
      </svg>
    ),
  },
  {
    label: "Documentaries",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 6h11l3 3v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
        <circle cx="11" cy="13" r="3" />
        <circle cx="11" cy="13" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
];

const heroFeatures = [
  {
    title: "Flawless Synchronization",
    description:
      "Industry-leading software guarantees precise timing and formatting for seamless viewer experiences.",
  },
  {
    title: "Genre Versatility",
    description:
      "We navigate all genres and registers—comedic, technical, or dramatic—with equal expertise.",
  },
  {
    title: "Reliable Speed",
    description:
      "Understanding tight entertainment industry turnaround times without sacrificing accuracy.",
  },
];

/* Film-grain CSS overlay via inline keyframes */
const filmGrainStyle = `
@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, 5%); }
  30% { transform: translate(7%, -25%); }
  40% { transform: translate(-5%, 25%); }
  50% { transform: translate(-15%, 10%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
}
`;

export default function AudiovisualTranslationClient() {
  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* Inject film-grain keyframe */}
      <style>{filmGrainStyle}</style>

      {/* -- Hero -- */}
      <PageHero
        badge="Bridging borders through expert audiovisual translation"
        title="Bringing Your Content to Global Audiences"
        subtitle="From TV series to feature films and entire film festivals, we ensure the narrative remains sharp and impactful across every frame."
        variant="full"
        cta={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-a-quote"
              onClick={() => trackCTA("Get a free estimate", "/audiovisual-translation")}
              className="group relative inline-flex items-center gap-2 bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20"
            >
              Get a free estimate
            </Link>
            <Link
              href="/portfolio"
              onClick={() => trackCTA("View Portfolio", "/audiovisual-translation")}
              className="inline-flex items-center gap-2 border border-amber-400/40 text-amber-300 font-semibold px-8 py-4 rounded-xl hover:bg-amber-400/10 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        }
        features={heroFeatures}
        backgroundElement={
          <div className="absolute inset-0">
            {/* Very dark cinematic gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-slate-900" />
            {/* Warm amber glow spots */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/8 blur-[160px]" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-amber-600/6 blur-[140px]" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-amber-400/5 blur-[120px]" />
            {/* Film-grain overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                animation: "grain 0.5s steps(6) infinite",
              }}
            />
          </div>
        }
        className="min-h-[90vh]"
      />

      {/* -- About Section -- */}
      <section className="py-20 md:py-28 bg-base-100">
        <div className="container mx-auto px-8">
          <div className="lg:w-2/3">
            <SectionHeader
              eyebrow="Precision and Professionalism"
              title="Expert"
              titleItalic="Audiovisual Translation"
            />
            <FadeIn delay={0.2} className="mt-8">
              <p className="text-lg md:text-xl leading-relaxed text-base-content/70 mb-4">
                Bring your content to a global audience with our specialized
                subtitling services. With extensive experience in audiovisual
                translation, we handle diverse formats—including TV series,
                documentaries, feature films, theatre performances, and entire
                film festivals.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl leading-relaxed text-base-content/70">
                Whether your project is monolingual or a complex, multilingual
                production, our team ensures the narrative remains sharp and
                impactful across every frame.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* -- Services — Filmstrip Layout -- */}
      <section id="services" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
        {/* Subtle amber glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-amber-500/5 blur-[140px]" />

        <div className="container mx-auto px-8 relative z-10">
          <SectionHeader
            eyebrow="Our specialized audiovisual services"
            title="Service Portfolio"
            light
          />

          {/* Filmstrip frames */}
          <StaggerContainer
            className="mt-12 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible scrollbar-hide"
            staggerDelay={0.12}
          >
            {services.map((service) => (
              <StaggerItem key={service.id} className="min-w-[300px] md:min-w-0">
                <div className="relative h-full rounded-xl border border-amber-400/20 bg-slate-900/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-amber-400/40 hover:shadow-lg hover:shadow-amber-500/5 group">
                  {/* Golden accent top bar */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
                  {/* Sprocket holes */}
                  <div className="absolute top-3 left-3 w-2 h-2 rounded-full border border-amber-400/30" />
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full border border-amber-400/30" />
                  <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full border border-amber-400/30" />
                  <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full border border-amber-400/30" />

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">
                    {service.label}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* -- Why Us — Cinema-themed Cards -- */}
      <section id="why" className="py-20 md:py-28 bg-base-200 relative overflow-hidden">
        <div className="container mx-auto px-8">
          <SectionHeader
            eyebrow="Why choose us"
            title="Precision Meets Speed"
            description="We leverage industry-leading software to guarantee flawless synchronization, strictly adhering to your specific timing and formatting requirements."
          />

          <StaggerContainer className="grid gap-8 grid-cols-1 md:grid-cols-3 mt-12">
            {whyUs.map((item) => (
              <StaggerItem key={item.label}>
                <div className="relative bg-base-100 rounded-xl p-8 h-full border border-base-content/5 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                  {/* Film-slate top accent */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-8 rounded bg-slate-800 flex items-center justify-center">
                      <div className="w-6 h-[2px] bg-amber-400" />
                    </div>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-amber-400/40 to-transparent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {item.label}
                  </h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* -- Specializations — Poster-style Tags -- */}
      <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[160px]" />

        <div className="container mx-auto px-8 relative z-10">
          <SectionHeader
            eyebrow="Our expertise"
            title="Diverse Format Experience"
            description="We handle projects ranging from monolingual content to complex, multilingual productions across all formats and genres."
            light
          />

          <StaggerContainer className="flex flex-wrap gap-5 mt-12">
            {specializations.map((spec) => (
              <StaggerItem key={spec.label}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative flex items-center gap-3 px-8 py-5 rounded-xl border border-amber-400/25 bg-gradient-to-br from-slate-900 to-slate-800 cursor-default group"
                >
                  {/* Dramatic top glow on hover */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-amber-300/90 group-hover:text-amber-300 transition-colors duration-300">
                    {spec.icon}
                  </span>
                  <span className="text-lg font-semibold text-white tracking-wide uppercase">
                    {spec.label}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* -- CTA -- */}
      <CTASection
        title="Subtitles your audience will forget they're reading."
        description="Feature films, documentaries, entire festival slates — we time, translate, and quality-check every frame so the story lands intact."
        buttonText="Contact us"
      />

      {/* -- Footer -- */}
      <Footer />
    </div>
  );
}
