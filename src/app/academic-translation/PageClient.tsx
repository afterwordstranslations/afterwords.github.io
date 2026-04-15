"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
    label: "Academic Books & Textbooks",
    color: "from-amber-900 to-amber-800",
    spine: "bg-amber-950",
    description:
      "Specializing in STEM, Econometrics, and Social Sciences with Subject Matter Experts (SMEs) paired with advanced Translation Memories for guaranteed terminology consistency.",
  },
  {
    id: 2,
    label: "Literature & Creative Non-Fiction",
    color: "from-emerald-900 to-emerald-800",
    spine: "bg-emerald-950",
    description:
      "Sensitive translation for Memoirs and Novels that preserves authorial \"voice\" and charisma—something AI cannot replicate.",
  },
  {
    id: 3,
    label: "E-learning & Digital Education",
    color: "from-sky-900 to-sky-800",
    spine: "bg-sky-950",
    description:
      "Localizing interactive course materials and pedagogical platforms for global learning environments.",
  },
  {
    id: 4,
    label: "Journal Manuscripts",
    color: "from-rose-900 to-rose-800",
    spine: "bg-rose-950",
    description:
      'Ensuring research is "journal-ready" for international peer-reviewed publication with precise academic language.',
  },
];

const whyUsItems = [
  {
    title: "Fixed Budget Models",
    description:
      "Fixed royalty or budget models eliminate financial uncertainty and integrate seamlessly with your production cycle.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Strict Deadline Compliance",
    description:
      "We consistently meet strict print deadlines without compromising literary quality by combining CAT tools with expert linguists.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "International Standards",
    description:
      "We deliver manuscripts that meet the highest international standards for academic publishing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const specializations = [
  {
    label: "Econometrics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
        <path d="M14 8h5v5" />
      </svg>
    ),
  },
  {
    label: "Economics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 3v18" />
        <path d="M17 6H9.5a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6" />
      </svg>
    ),
  },
  {
    label: "Politics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 21h18" />
        <path d="M3 10h18" />
        <path d="M5 21V10" />
        <path d="M10 21V10" />
        <path d="M14 21V10" />
        <path d="M19 21V10" />
        <path d="M12 3L3 9h18z" />
      </svg>
    ),
  },
  {
    label: "Pedagogics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 2 9 2 12 0v-5" />
        <path d="M22 10v5" />
      </svg>
    ),
  },
];

export default function AcademicTranslationClient() {
  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* -- Hero -- */}
      <PageHero
        badge="A boutique Greek agency specializing in long-form academic translation"
        title="High-Stakes Academic Translation: Beyond the Algorithm"
        subtitle="In scholarly publishing, a &ldquo;near-miss&rdquo; costs more than just credibility&mdash;it costs your budget. Unlike AI, our human-led process preserves the author&apos;s unique voice and charisma."
        variant="full"
        cta={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-a-quote"
              className="group relative inline-flex items-center gap-2 bg-warm text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-warm-dark hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-warm/20"
            >
              Get a free estimate
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        }
        features={[
          {
            title: "Subject Matter Experts",
            description:
              "Pairing linguists with advanced Translation Memories guarantees absolute terminology consistency across every chapter.",
          },
          {
            title: "TEP Workflow",
            description:
              "Gold-standard Translation, Editing, Proofreading workflow eliminates costly reprints and brand damage.",
          },
          {
            title: "Professional Stamina",
            description:
              "Maintaining technical accuracy from preface to index for 500+ page academic manuscripts.",
          },
        ]}
        backgroundElement={
          <>
            {/* Warm parchment-toned gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2c1e10] via-[#3b2a18] to-slate-900" />
            {/* Subtle book-spine vertical lines */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,220,180,0.3) 60px, rgba(255,220,180,0.3) 62px)",
              }}
            />
            {/* Warm glow */}
            <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-amber-800/20 blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-warm/10 blur-[120px]" />
          </>
        }
      />

      {/* -- About Section -- */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="Athens-based boutique agency"
              title="Precision and Stamina for"
              titleItalic="Long-Form Projects"
            />
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl leading-relaxed text-base-content/70 mt-8">
                We specialize in long-form academic translation for textbooks in Econometrics, Economics, Politics, and Pedagogics. Whether managing dense Econometrics data or complex Pedagogical theory, we deliver manuscripts that meet the highest international standards.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl leading-relaxed text-base-content/70 mt-4">
                We eliminate the risks of a &ldquo;Bad Translation&rdquo;&mdash;such as costly reprints and brand damage&mdash;by utilizing a gold-standard TEP (Translation, Editing, Proofreading) workflow.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* -- Services — Bookshelf Layout -- */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-amber-50/50 to-base-100" id="services">
        <div className="container mx-auto px-8">
          <SectionHeader
            eyebrow="Our specialized academic services"
            title="Service Portfolio"
          />

          <StaggerContainer
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16"
            staggerDelay={0.12}
          >
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <motion.div
                  className="group relative cursor-default"
                  style={{ perspective: "800px" }}
                  whileHover="hover"
                >
                  <motion.div
                    className={`relative rounded-lg bg-gradient-to-b ${service.color} p-6 pt-10 pb-8 shadow-lg aspect-[2/3] w-full max-w-[280px] mx-auto flex flex-col`}
                    variants={{
                      hover: {
                        rotateY: -6,
                        scale: 1.03,
                        boxShadow: "8px 8px 24px rgba(0,0,0,0.25)",
                        transition: { duration: 0.35, ease: "easeOut" },
                      },
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Spine accent */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-2 rounded-l-lg ${service.spine}`}
                    />
                    {/* Faux page edges */}
                    <div className="absolute right-0 top-2 bottom-2 w-1 bg-white/10 rounded-r" />
                    <div className="absolute right-1 top-3 bottom-3 w-[2px] bg-white/5 rounded-r" />

                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-4 leading-snug">
                      {service.label}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mt-auto">
                      {service.description}
                    </p>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* -- Why Us -- */}
      <section className="py-20 md:py-28 bg-base-200/50" id="why">
        <div className="container mx-auto px-8">
          <SectionHeader
            eyebrow="Why choose us"
            title="Beyond AI Limitations"
            description="Unlike AI, which often misses nuance and metaphor, our human-led process preserves the author&apos;s unique voice and charisma."
          />

          <StaggerContainer
            className="grid gap-8 grid-cols-1 md:grid-cols-3 mt-16"
            staggerDelay={0.15}
          >
            {whyUsItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-base-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-base-content/5 h-full">
                  <div className="w-12 h-12 rounded-xl bg-warm/15 text-warm flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-3 text-base-content">
                    {item.title}
                  </h3>
                  <p className="text-base-content/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* -- Specializations — Discipline Tags -- */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8">
          <SectionHeader
            eyebrow="Our expertise"
            title="Deep Specialization"
            description="We provide end-to-end linguistic solutions for high-volume and high-impact publishing projects."
          />

          <StaggerContainer
            className="flex flex-wrap gap-4 mt-12"
            staggerDelay={0.1}
          >
            {specializations.map((spec) => (
              <StaggerItem key={spec.label}>
                <span className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-50 to-warm-subtle border border-warm/20 rounded-full px-6 py-3 text-base font-semibold text-base-content shadow-sm hover:shadow-md hover:border-warm/40 transition-all duration-300">
                  <span className="text-warm-dark">{spec.icon}</span>
                  {spec.label}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Trados logo */}
          <FadeIn delay={0.3} className="mt-16">
            <div className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <div className="h-px w-12 bg-base-content/20" />
              <Image
                alt="I work with SDL Trados Studio"
                width={360}
                height={90}
                src="/trados.png"
                className="w-72 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* -- CTA -- */}
      <CTASection
        title="Your manuscript deserves a careful reader."
        description="Whether it&apos;s a 500-page textbook or a journal article under deadline, bring it to translators who treat scholarship with the patience it requires."
        buttonText="Contact us"
      />

      {/* -- Footer -- */}
      <Footer />
    </div>
  );
}
