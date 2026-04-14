"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "~/components/PageHero";
import { SectionHeader } from "~/components/SectionHeader";
import { CTASection } from "~/components/CTASection";
import { Footer } from "~/components/Footer";
import { FadeIn } from "~/components/animations/FadeIn";
import { CountUp } from "~/components/animations/CountUp";
import { StaggerContainer, StaggerItem } from "~/components/animations/StaggerContainer";

const portfolioItems = [
  {
    id: 1,
    emoji: "\uD83E\uDDEC",
    title: "Medical & Scientific Innovations",
    category: "Specialized Translation",
    description: "Expert translations for the medical and scientific sectors, including patent specifications, pharmaceutical applications, clinical research, and healthcare documentation.",
    items: [
      "Patent Specifications: Annual translation of 200–300 patent specifications specializing in biology, chemistry, biochemistry, and technology.",
      "Pharmaceutical Applications: Translation of 150–200 patent applications and abstracts per year.",
      "Clinical Research: Translation of clinical trial documents, medical research papers, and articles for publication.",
      "Healthcare Documentation: Comprehensive translation of patient records and medical reports.",
    ],
    stats: [
      { value: 300, suffix: "/yr", label: "Patents" },
      { value: 200, suffix: "/yr", label: "Applications" },
      { value: 1000, suffix: "+", label: "Documents" },
    ],
    accent: "from-teal-500/10 to-emerald-500/10",
    borderAccent: "border-l-teal-500",
  },
  {
    id: 2,
    emoji: "\u2696\uFE0F",
    title: "Legal & Financial Compliance",
    category: "Corporate Translation",
    description: "Certified translations for international business operations, corporate governance, global finance, market intelligence, and international law.",
    items: [
      "Corporate Governance: Translation of contracts, agreements, and certificates for international business operations.",
      "Global Finance: Preparation of financial reports, balance sheets, and income statements.",
      "Market Intelligence: Translation of investment research reports and market analyses.",
      "International Law: Translation of treaties, conventions, and residency applications.",
    ],
    stats: [
      { value: 300, suffix: "+", label: "Contracts" },
      { value: 200, suffix: "+", label: "Reports" },
      { value: 50, suffix: "+", label: "Clients" },
    ],
    accent: "from-blue-500/10 to-indigo-500/10",
    borderAccent: "border-l-blue-500",
  },
  {
    id: 3,
    emoji: "\uD83D\uDCDA",
    title: "Published Books (Greek Editions)",
    category: "Literary Translation",
    description: "High-quality translations of academic and scholarly books, preserving intellectual rigor and authorial voice for Greek readers.",
    items: [
      "The Sociology of Health and Illness (4th Edition) by Sarah Nettleton.",
      "Development Economics: Theory and Practice (2nd Edition) by Alain de Janvry & Elisabeth Sadoulet.",
      "Managerial Economics in a Global Economy (9th Edition) by Dominick Salvatore.",
      "Mathematics for Economics: An Integrated Approach by Mik Wisniewski.",
      "Child Observation: A Guide for Students of Early Childhood (4th Edition) by Ioanna Palaiologou.",
    ],
    stats: [
      { value: 5, suffix: "+", label: "Books" },
      { value: 2000, suffix: "+", label: "Pages" },
      { value: 3, suffix: "", label: "Publishers" },
    ],
    accent: "from-amber-500/10 to-orange-500/10",
    borderAccent: "border-l-amber-500",
  },
  {
    id: 4,
    emoji: "\uD83C\uDFAC",
    title: "Media & Events",
    category: "Subtitling & Interpreting",
    description: "Professional subtitling services for TV series, films, and festivals, along with specialized interpreting for corporate conferences and the aviation sector.",
    items: [
      'TV Series Localization: Greek subtitles for the hit series "Black-ish".',
      "Film Festivals: Subtitling for the Beyond Borders International Festival (2019–2022).",
      'Cinema: English and French subtitles for the Greek short film "MAUVE".',
      "Corporate Conferences: Interpreting for the Coating Forum (2022–2023) and pharmaceutical launches.",
      "Aviation Sector: Specialized interpreting for business meetings and technical presentations.",
    ],
    stats: [
      { value: 1, suffix: "", label: "Series" },
      { value: 4, suffix: " yrs", label: "Festivals" },
      { value: 50, suffix: "+", label: "Events" },
    ],
    accent: "from-purple-500/10 to-pink-500/10",
    borderAccent: "border-l-purple-500",
  },
];

const expertiseAreas = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
    title: "Translation",
    description: "Accurate translation of documents, websites, and content across all major languages",
    color: "text-teal-600",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
    title: "Localization",
    description: "Cultural adaptation of products, websites, and marketing for local markets",
    color: "text-blue-600",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>,
    title: "Transcreation",
    description: "Creative translation that preserves brand voice and emotional impact",
    color: "text-amber-600",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
    title: "Cultural Consulting",
    description: "Expert guidance on cultural nuances and market-specific communication strategies",
    color: "text-purple-600",
  },
];

export default function PortfolioClient() {
  return (
    <div className="w-full bg-base-100 text-base-content">
      <PageHero badge="Showcasing our expertise across specialized translation domains" title="Our Portfolio" subtitle="Explore our portfolio of translation and localization projects. From medical patents to published books, we deliver precision and cultural expertise across industries." variant="compact" cta={
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote" className="group inline-flex items-center gap-2 bg-warm text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-warm-dark hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-warm/20">
            Get a free estimate
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300">Back to Home</Link>
        </div>
      } features={[
        { title: "Subject Matter Experts", description: "Specialized translators with deep domain expertise in medical, legal, and technical fields." },
        { title: "TEP Workflow", description: "Gold-standard Translation, Editing, Proofreading workflow ensures quality and accuracy." },
        { title: "Proven Track Record", description: "From medical patents to published books, we deliver excellence across all project types." },
      ]} backgroundElement={
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary/90 to-slate-900" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-warm/8 blur-[120px]" />
        </div>
      } />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow="Our work" title="We strive for" titleItalic="Excellence Across Industries" description="Our portfolio spans specialized translation domains, from medical patents and legal compliance to literary publishing and media localization." />
          <FadeIn delay={0.2}>
            <p className="text-lg text-base-content/70 leading-relaxed mt-4 max-w-3xl">Each project demonstrates our commitment to precision, cultural expertise, and professional excellence. We leverage subject matter expertise and advanced Translation Memories to deliver consistent, high-quality results.</p>
          </FadeIn>
        </div>
      </section>

      {portfolioItems.map((item, index) => (
        <section key={item.id} className={`py-20 md:py-28 ${index % 2 === 0 ? "bg-base-200" : "bg-base-100"}`}>
          <div className="container mx-auto px-8">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{item.emoji}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-warm-dark">{item.category}</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4 text-base-content">{item.title}</h3>
              <p className="text-lg text-base-content/60 leading-relaxed max-w-3xl mb-10">{item.description}</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-4">
                  {item.items.map((listItem, idx) => (
                    <motion.div key={idx} className={`flex gap-4 p-4 rounded-xl bg-gradient-to-r ${item.accent} border-l-4 ${item.borderAccent}`} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}>
                      <span className="text-base-content/80 text-sm leading-relaxed">{listItem}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-row lg:flex-col gap-6 lg:gap-8 justify-start">
                  {item.stats.map((stat) => (
                    <div key={stat.label} className="text-center lg:text-left">
                      <div className="text-3xl md:text-4xl font-bold text-base-content"><CountUp end={stat.value} suffix={stat.suffix} /></div>
                      <p className="text-sm text-base-content/50 font-medium mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow="Our Expertise" title="Comprehensive language services" titleItalic="tailored to your needs" />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {expertiseAreas.map((area) => (
              <StaggerItem key={area.title}>
                <div className="group p-6 rounded-2xl border border-base-300 hover:shadow-lg hover:border-warm/30 transition-all duration-300 bg-base-100">
                  <div className={`${area.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>{area.icon}</div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-2 text-base-content">{area.title}</h3>
                  <p className="text-sm text-base-content/60 leading-relaxed">{area.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection title="Your project could be next." description="You've seen the work. Now tell us about yours, and we'll walk you through how we'd approach it." buttonText="Contact us" />
      <Footer />
    </div>
  );
}
