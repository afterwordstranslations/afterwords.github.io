"use client";

import { Link } from "~/i18n/navigation";
import { useTranslations } from "next-intl";
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

/* Molecular / hexagonal SVG background for the hero */
const HeroBackground = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2a3e] to-[#0a1628]" />
    <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.4)">
          <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="#5eead4" strokeWidth="1" />
          <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="#5eead4" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
    <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-teal-500/8 blur-[120px]" />
    <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-teal-400/6 blur-[100px]" />
  </>
);

export default function PharmaceuticalTranslationClient() {
  const t = useTranslations("Pharmaceutical");
  const tCommon = useTranslations("Common");
  const tCTA = useTranslations("CTA");

  const services = [
    { title: t("service1Title"), description: t("service1Desc") },
    { title: t("service2Title"), description: t("service2Desc") },
    { title: t("service3Title"), description: t("service3Desc") },
    { title: t("service4Title"), description: t("service4Desc") },
    { title: t("service5Title"), description: t("service5Desc") },
    { title: t("service6Title"), description: t("service6Desc") },
  ];

  const qualityProcess = [
    { step: "01", title: t("quality01Title"), description: t("quality01Desc") },
    { step: "02", title: t("quality02Title"), description: t("quality02Desc") },
    { step: "03", title: t("quality03Title"), description: t("quality03Desc") },
  ];

  const whyUsCards = [
    { title: t("why1Title"), description: t("why1Desc") },
    { title: t("why2Title"), description: t("why2Desc") },
    { title: t("why3Title"), description: t("why3Desc") },
  ];

  const benefits = [
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>,
      label: t("benefitGDPR"),
    },
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>,
      label: t("benefitTerminology"),
    },
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" /></svg>,
      label: t("benefitCAT"),
    },
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
      label: t("benefitAudit"),
    },
  ];

  return (
    <div className="w-full bg-base-100 text-base-content">
      <PageHero badge={t("heroBadge")} title={t("heroTitle")} subtitle={t("heroSubtitle")} variant="full" backgroundElement={<HeroBackground />} cta={
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote" onClick={() => trackCTA("Get a free estimate", "/pharmaceutical-translation")} className="group relative inline-flex items-center gap-2 bg-teal-500 text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
            {tCommon("getAFreeEstimate")}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
          <Link href="/portfolio" onClick={() => trackCTA("View Portfolio", "/pharmaceutical-translation")} className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl border border-teal-400/40 text-teal-300 hover:bg-teal-500/10 transition-all duration-300">{tCommon("viewPortfolio")}</Link>
        </div>
      } features={[
        { title: t("featurePrecisionTitle"), description: t("featurePrecisionDesc") },
        { title: t("featureComplianceTitle"), description: t("featureComplianceDesc") },
        { title: t("featureAuditTitle"), description: t("featureAuditDesc") },
      ]} />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow={t("aboutEyebrow")} title={t("aboutTitle")} titleItalic={t("aboutTitleItalic")} description={t("aboutDescription")} />
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28" id="services">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow={t("servicesEyebrow")} title={tCommon("servicePortfolio")} />
          <StaggerContainer className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 h-full flex">
                  <div className="w-1.5 bg-teal-500 shrink-0 group-hover:w-2 transition-all duration-300" />
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-lg mb-2 text-slate-900">{service.title}</h3>
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
          <SectionHeader eyebrow={t("qualityEyebrow")} title={t("qualityTitle")} description={t("qualityDescription")} />
          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-12 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-0.5 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400" />
            <StaggerContainer className="grid gap-8 grid-cols-1 md:grid-cols-3">
              {qualityProcess.map((item) => (
                <StaggerItem key={item.step}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/20 mb-6">
                      <span className="text-white text-2xl font-bold tracking-tight">{item.step}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl mb-2 text-slate-900">{item.title}</h3>
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
          <SectionHeader eyebrow={tCommon("whyChooseUs")} title={t("whyTitle")} description={t("whyDescription")} />
          <StaggerContainer className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-14">
            {whyUsCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 h-full">
                  <div className="w-10 h-1 rounded-full bg-teal-500 mb-6" />
                  <h3 className="font-[family-name:var(--font-display)] text-lg mb-3 text-slate-900">{card.title}</h3>
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-2 text-warm-dark">{t("commitmentEyebrow")}</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-3 text-center text-slate-900">{t("commitmentTitle")}</h2>
              <p className="text-base-content/70 text-center mb-10 max-w-xl">{t("commitmentDesc")}</p>
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

      <CTASection title={t("ctaTitle")} description={t("ctaDescription")} buttonText={tCTA("contactUs")} />
      <Footer />
    </div>
  );
}
