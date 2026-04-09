"use client";

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
  { title: "Regulatory Submissions", description: "Regulatory-compliant translation of EU submissions and multi-module dossiers with precise terminology management." },
  { title: "Product Information", description: "Translation of SmPCs, package leaflets (PILs), and labeling texts that meet strict regulatory standards." },
  { title: "Clinical Trial Documentation", description: "Clinical trial documentation, protocols, and informed consent forms with absolute accuracy and consistency." },
  { title: "Pharmacovigilance & MAH", description: "Pharmacovigilance and MAH documentation with audit-ready quality and terminology precision." },
  { title: "Patient-Facing Materials", description: "Patient-facing and medical materials that balance accuracy with accessibility and clarity." },
];

const qualityProcess = [
  { step: "01", title: "Specialist Translation", description: "by life sciences experts" },
  { step: "02", title: "Independent Review", description: "Four-Eyes Principle verification" },
  { step: "03", title: "Final Quality Assurance", description: "formatting, consistency, regulatory alignment" },
];

const whyUsCards = [
  { title: "Harmonized Terminology", description: "Harmonized terminology across regulatory and clinical documentation ensures consistency and compliance." },
  { title: "Submission Consistency", description: "Consistency between submissions and updates with CAT tools, translation memories, and project glossaries." },
  { title: "Secure Workflows", description: "Encrypted, GDPR-compliant workflows protect sensitive data and maintain regulatory standards." },
];

const benefits = [
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>,
    label: "GDPR-Compliant Workflows",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>,
    label: "Harmonized Terminology",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" /></svg>,
    label: "CAT Tools & Translation Memories",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
    label: "Audit-Ready Quality",
  },
];

/* Molecular / hexagonal SVG background for the hero */
const HeroBackground = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-100/60" />
    <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.4)">
          <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="#0d9488" strokeWidth="1" />
          <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="#0d9488" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
    <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-teal-400/10 blur-[120px]" />
    <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-teal-300/10 blur-[100px]" />
  </>
);

export default function PharmaceuticalTranslationClient() {
  return (
    <div className="w-full bg-base-100 text-base-content">
      <PageHero badge="Specialized pharmaceutical and life sciences translation" title="Where Scientific Precision Meets Regulatory Compliance" subtitle="In pharmaceutical and clinical environments, language is part of compliance. A single error in an SmPC, PIL, regulatory dossier, or clinical trial document can delay approvals or raise regulatory scrutiny." variant="full" className="!text-slate-900" backgroundElement={<HeroBackground />} cta={
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group relative inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-teal-700 transition-all duration-300 hover:shadow-lg hover:shadow-teal-600/20" onClick={() => window.Beacon("open")}>
            Get a free estimate
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </button>
          <Link href="/portfolio" className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl border-2 border-teal-600 text-teal-700 hover:bg-teal-50 transition-all duration-300">View Portfolio</Link>
        </div>
      } features={[
        { title: "Scientific Precision", description: "Expert translation by life sciences specialists with deep domain knowledge and terminology expertise." },
        { title: "Regulatory Compliance", description: "All projects follow structured terminology management and strict quality control for submission-ready results." },
        { title: "Audit-Ready Quality", description: "Accurate, consistent, audit-ready medical translation with comprehensive documentation and traceability." },
      ]} />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow="Athens-based boutique agency" title="Expert Translation for" titleItalic="Regulated Industries" description="We support pharmaceutical, biotech, and life sciences organizations with regulatory-compliant translation services designed for accuracy, consistency, and audit-readiness." />
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28" id="services">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow="Our specialized pharmaceutical services" title="Service Portfolio" />
          <StaggerContainer className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 h-full flex">
                  <div className="w-1.5 bg-teal-500 shrink-0 group-hover:w-2 transition-all duration-300" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{service.title}</h3>
                    <p className="text-base-content/70 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white" id="quality">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow="Our quality commitment" title="Our Quality Process (TEP)" description="Every project undergoes a three-step review to ensure accurate, consistent, audit-ready medical translation." />
          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-12 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-0.5 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400" />
            <StaggerContainer className="grid gap-8 grid-cols-1 md:grid-cols-3">
              {qualityProcess.map((item) => (
                <StaggerItem key={item.step}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/20 mb-6">
                      <span className="text-white text-2xl font-bold tracking-tight">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                    <p className="text-base-content/60 text-sm leading-relaxed max-w-xs">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28" id="why">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow="Why choose us" title="Secure. Consistent. Submission-Ready." description="Because pharmaceutical translation is not just about language — it is about precision, compliance, and trust." />
          <StaggerContainer className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-14">
            {whyUsCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 h-full">
                  <div className="w-10 h-1 rounded-full bg-teal-500 mb-6" />
                  <h3 className="text-lg font-bold mb-3 text-slate-900">{card.title}</h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">{card.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-8">
          <FadeIn>
            <div className="flex flex-col items-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-2 text-warm-dark">Our commitment</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-3 text-center text-slate-900">Accuracy in Every Term</h2>
              <p className="text-base-content/70 text-center mb-10 max-w-xl">We ensure confidence in every submission through rigorous quality control and domain expertise.</p>
            </div>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.label}>
                <motion.div whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-3 bg-teal-50 border border-teal-200 text-teal-800 rounded-full px-6 py-3 text-sm font-medium">
                  <span className="text-teal-600">{benefit.icon}</span>
                  {benefit.label}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection title="Confidence in Every Submission" description="Whether it's regulatory submissions, clinical trial documentation, or patient-facing materials, we have the expertise to deliver excellence." buttonText="Contact us" />
      <Footer />
    </div>
  );
}
