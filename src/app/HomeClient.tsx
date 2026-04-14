"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "~/components/Header";
import { DecadeSection } from "~/components/DecadeSection";
import { TestimonialsSection } from "~/components/TestimonialsSection";
import { CTASection } from "~/components/CTASection";
import { Footer } from "~/components/Footer";
import { SectionHeader } from "~/components/SectionHeader";
import { FadeIn } from "~/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "~/components/animations/StaggerContainer";
import { TextReveal } from "~/components/animations/TextReveal";
import Translator from "~/components/Translator";

const languages = [
  { emoji: "\u{1F1EC}\u{1F1F7}", label: "Greek", size: "text-5xl" },
  { emoji: "\u{1F1E9}\u{1F1EA}", label: "German", size: "text-4xl" },
  { emoji: "\u{1F1EB}\u{1F1F7}", label: "French", size: "text-4xl" },
  { emoji: "\u{1F1EA}\u{1F1F8}", label: "Spanish", size: "text-3xl" },
  { emoji: "\u{1F1EE}\u{1F1F9}", label: "Italian", size: "text-3xl" },
  { emoji: "\u{1F1F8}\u{1F1EA}", label: "Swedish", size: "text-2xl" },
  { emoji: "\u{1F1F5}\u{1F1F9}", label: "Portuguese", size: "text-2xl" },
  { emoji: "\u{1F1EB}\u{1F1EE}", label: "Finnish", size: "text-2xl" },
];

const primaryServices = [
  {
    label: "Certified Translations",
    href: "/certified-translations",
    description: "Translation of academic and public documents for submission to various authorities.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    borderColor: "border-t-blue-500",
    iconColor: "text-blue-500",
  },
  {
    label: "Interpreting Services",
    href: "/interpreting",
    description: "Professional interpreting services to ensure seamless communication in any setting.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    borderColor: "border-t-emerald-500",
    iconColor: "text-emerald-500",
  },
  {
    label: "Subtitling Services",
    href: "/audiovisual-translation",
    description: "From TV series to feature films and entire film festivals, we ensure the narrative remains sharp in every frame.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    borderColor: "border-t-amber-500",
    iconColor: "text-amber-500",
  },
];

const industries = [
  { label: "Pharmaceutical & Life Sciences", href: "/pharmaceutical-translation", description: "Regulatory-compliant translation for submissions, clinical documentation, and patient-facing materials." },
  { label: "Maritime", href: "/maritime-translation", description: "Technical and legal maritime translation for shipowners, crewing managers, and maritime law firms." },
  { label: "Academic Books", href: "/academic-translation", description: "Translations that preserve the intellectual rigor and voice of scholarly works." },
  { label: "Legal & Financial", description: "Accurate translations of contracts, legal proceedings, and financial statements." },
  { label: "Websites", description: "Engaging and culturally attuned translations to enhance your online presence." },
  { label: "Agriculture & Agroforestry", description: "Specialized translations bolstered by a PDC at Oregon State University." },
];

export default function HomeClient() {
  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* ===== HERO ===== */}
      <section className="relative w-full overflow-hidden min-h-[100vh] flex flex-col">
        {/* Gradient mesh background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-warm/8 blur-[150px]" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[120px]" />
          <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-warm/5 blur-[100px]" />
        </div>

        <div className="relative z-10 px-8 lg:px-24 flex-1 flex flex-col">
          <Header />

          <div className="flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full py-16 items-center">
              {/* Left — headline */}
              <div>
                <motion.span
                  className="inline-block text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full bg-warm/20 text-warm border border-warm/30 mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Est. 2015
                </motion.span>

                <TextReveal
                  text="Precision in every word."
                  className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] font-bold text-white"
                  delay={0.2}
                />
              </div>

              {/* Right — description, CTAs, features */}
              <div className="flex flex-col justify-center">
                <motion.p
                  className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  A boutique Greek translation agency bridging the gap between the Greek market and the global stage. We provide the linguistic precision and cultural nuance your business needs to expand without borders.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <Link
                    href="/get-a-quote"
                    className="group inline-flex items-center gap-2 bg-warm text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-warm-dark hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-warm/20"
                  >
                    Get a free estimate
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    View Portfolio
                  </Link>
                </motion.div>

                {/* Feature pills — stacked with left border */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  {[
                    { title: "Quality", desc: "2-step review by a native speaker and a subject matter expert." },
                    { title: "Speed", desc: "Standard turnaround in 48 hours. Rush delivery available." },
                    { title: "Consistency", desc: "Translation memory and terminology management ensure uniform language." },
                  ].map((f) => (
                    <div key={f.title} className="border-l-2 border-warm/40 pl-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-warm mb-1">{f.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-24 md:py-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left column */}
            <div>
              <SectionHeader
                eyebrow="About us"
                title="Translation is more than"
                titleItalic="just a document."
                description="We pride ourselves on delivering tailored language solutions that empower our clients to communicate effectively, reach broader audiences, and achieve their goals with confidence."
              />
            </div>

            {/* Right column — language flags */}
            <div>
              <StaggerContainer className="grid grid-cols-4 gap-3">
                {languages.map((lang) => (
                  <StaggerItem key={lang.label}>
                    <div className="group flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-base-200 transition-colors duration-200 cursor-default">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {lang.emoji}
                      </span>
                      <span className="text-xs font-medium text-base-content/50">{lang.label}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DECADE STATS ===== */}
      <DecadeSection />

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto px-8">
          <SectionHeader
            eyebrow="Our services"
            title="How we can help you"
            description="From certified legal documents to live interpreting and cinematic subtitling — we deliver precision across every medium."
          />

          {/* Primary services — 3-column vertical cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {primaryServices.map((service) => (
              <StaggerItem key={service.label}>
                <Link href={service.href} className="block group h-full">
                  <div className={`card-surface h-full flex flex-col rounded-2xl border border-base-300 border-t-4 ${service.borderColor} p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                    <div className={`w-14 h-14 rounded-xl bg-base-200 flex items-center justify-center ${service.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-3 text-base-content group-hover:text-warm-dark transition-colors duration-300">
                      {service.label}
                    </h3>
                    <p className="text-base-content/60 text-base leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-warm-dark">
                      Learn more
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="py-24 md:py-32 bg-base-200">
        <div className="container mx-auto px-8">
          <SectionHeader
            eyebrow="Industries we serve"
            title="Specialized expertise across sectors"
            description="We provide specialized translation services designed to meet the unique needs of businesses, organizations, and individuals."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {industries.map((ind) => {
              const cardClasses = "card-surface h-full flex flex-col p-6 rounded-2xl border border-base-300 hover:shadow-lg transition-all duration-300";
              return (
                <StaggerItem key={ind.label}>
                  {ind.href ? (
                    <Link href={ind.href} className="block h-full group">
                      <div className={cardClasses}>
                        <h3 className="font-semibold text-lg mb-2 text-base-content group-hover:text-warm-dark transition-colors duration-300">
                          {ind.label}
                        </h3>
                        <p className="text-sm text-base-content/60 leading-relaxed">{ind.description}</p>
                        <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-warm-dark group-hover:gap-2 transition-all duration-300">
                          Learn more
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div className={cardClasses}>
                      <h3 className="font-semibold text-lg mb-2 text-base-content">{ind.label}</h3>
                      <p className="text-sm text-base-content/60 leading-relaxed">{ind.description}</p>
                    </div>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <Link
              href="/get-a-quote"
              className="mt-10 group inline-flex items-center gap-2 text-warm-dark font-semibold hover:text-warm transition-colors duration-200"
            >
              Tell us about your industry
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section id="team" className="py-24 md:py-32">
        <div className="container mx-auto px-8">
          <SectionHeader
            eyebrow="Our team"
            title="You are in good hands"
            description="Our seasoned translators bring together diverse expertise to meet a wide range of translation and interpretation needs."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Translator
              fullName="Aggeliki Gkika"
              imageSrc="/agg_ai.png"
              shortName="Aggeliki"
              href="https://www.linkedin.com/in/agkika/"
              description="Aggeliki specializes in pharmaceutical, medical, clinical and patent translations, ensuring accuracy and professionalism in highly specialized fields."
              specializations={["Pharmaceutical", "Medical", "Patents", "Clinical"]}
              index={0}
            />
            <Translator
              fullName="Chrysanthi Partsanaki"
              imageSrc="/chrysa_ai.png"
              shortName="Chrysanthi"
              href="https://www.linkedin.com/in/cpartsanaki/"
              description="Chrysanthi delivers precision in academic, financial, legal, and maritime translation, complemented by professional Greek/English and Greek/Spanish interpretation services."
              specializations={["Academic", "Legal", "Maritime", "Interpreting"]}
              index={1}
            />
            <Translator
              fullName="Anna Maria Chatzistylianou"
              imageSrc="/am_ai.png"
              shortName="Anna Maria"
              href="https://www.linkedin.com/in/amchatzistylianou/"
              description="Anna Maria is your go-to specialist for maritime and legal translation, delivering linguistic precision with deep industry knowledge."
              specializations={["Maritime", "Legal", "Subtitling", "Transcreation"]}
              index={2}
            />
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-16 flex flex-col items-center text-center">
              <p className="text-base-content/70 text-lg max-w-2xl mb-6">
                Curious what we&apos;ve delivered? Explore a selection of our
                recent translation and interpreting projects.
              </p>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 rounded-xl border border-warm/40 bg-warm-subtle/40 px-8 py-4 font-semibold text-base-content transition-all duration-300 hover:border-warm hover:bg-warm-subtle hover:shadow-md"
              >
                See our portfolio
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <TestimonialsSection />

      {/* ===== CTA ===== */}
      <CTASection
        title="Send us the first page."
        description="Books, contracts, conferences, films — every project starts with a conversation. Tell us what you're working on and we'll tell you how we'd approach it."
        buttonText="Get in touch"
      />

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
