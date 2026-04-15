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

/* Animated gradient mesh background for the hero */
const HeroBackground = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950" />
    <motion.div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-emerald-600/20 blur-[120px]" animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
    <motion.div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-500/15 blur-[100px]" animate={{ x: [0, -30, 0], y: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
    <motion.div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px]" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
    <svg className="absolute top-20 right-16 w-24 h-24 text-white/[0.04]" viewBox="0 0 100 100" fill="currentColor"><path d="M50 10c22 0 40 15 40 33s-18 33-40 33c-5 0-10-1-14-2l-16 10 4-14C14 62 10 52 10 43c0-18 18-33 40-33z" /></svg>
    <svg className="absolute bottom-32 left-12 w-16 h-16 text-white/[0.04] rotate-12" viewBox="0 0 100 100" fill="currentColor"><path d="M50 10c22 0 40 15 40 33s-18 33-40 33c-5 0-10-1-14-2l-16 10 4-14C14 62 10 52 10 43c0-18 18-33 40-33z" /></svg>
    <svg className="absolute top-1/2 right-1/3 w-20 h-20 text-white/[0.03] -rotate-6" viewBox="0 0 100 100" fill="currentColor"><path d="M50 10c22 0 40 15 40 33s-18 33-40 33c-5 0-10-1-14-2l-16 10 4-14C14 62 10 52 10 43c0-18 18-33 40-33z" /></svg>
  </>
);

export default function InterpretingClient() {
  const t = useTranslations("Interpreting");
  const tCommon = useTranslations("Common");
  const tCTA = useTranslations("CTA");

  const services = [
    { label: t("service1Label"), description: t("service1Desc"), direction: "left" as const },
    { label: t("service2Label"), description: t("service2Desc"), direction: "right" as const },
    { label: t("service3Label"), description: t("service3Desc"), direction: "left" as const },
    { label: t("service4Label"), description: t("service4Desc"), direction: "right" as const },
  ];

  const whyUsCards = [
    {
      title: t("why1Title"),
      description: t("why1Desc"),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t("why2Title"),
      description: t("why2Desc"),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: t("why3Title"),
      description: t("why3Desc"),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ];

  const specializations = [
    { label: t("specCorporate"), color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
    { label: t("specLegal"), color: "bg-teal-500/15 text-teal-300 border-teal-500/30" },
    { label: t("specDiplomatic"), color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30" },
    { label: t("specLiveEvents"), color: "bg-green-500/15 text-green-300 border-green-500/30" },
  ];

  return (
    <div className="w-full bg-base-100 text-base-content">
      <PageHero badge={t("heroBadge")} title={t("heroTitle")} subtitle={t("heroSubtitle")} cta={
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote" onClick={() => trackCTA("Get a free estimate", "/interpreting")} className="group relative inline-flex items-center gap-2 bg-warm text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-warm-dark hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-warm/20">
            {tCommon("getAFreeEstimate")}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
          <Link href="/portfolio" onClick={() => trackCTA("View Portfolio", "/interpreting")} className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300">{tCommon("viewPortfolio")}</Link>
        </div>
      } features={[
        { title: t("featureSimultaneousTitle"), description: t("featureSimultaneousDesc") },
        { title: t("featureBidirectionalTitle"), description: t("featureBidirectionalDesc") },
        { title: t("featureStageReadyTitle"), description: t("featureStageReadyDesc") },
      ]} backgroundElement={<HeroBackground />} variant="full" />

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8">
          <div className="lg:w-2/3">
            <SectionHeader eyebrow={t("aboutEyebrow")} title={t("aboutTitle")} titleItalic={t("aboutTitleItalic")} />
            <FadeIn delay={0.2}><p className="text-lg md:text-xl leading-relaxed text-base-content/70 mt-8">{t("aboutP1")}</p></FadeIn>
            <FadeIn delay={0.3}><p className="text-lg md:text-xl leading-relaxed text-base-content/70 mt-4">{t("aboutP2")}</p></FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section — Conversation-style speech bubbles */}
      <section className="py-20 md:py-28 bg-base-200/50" id="services">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow={t("servicesEyebrow")} title={tCommon("servicePortfolio")} align="center" />
          <div className="mt-16 max-w-3xl mx-auto space-y-4">
            {services.map((service, i) => {
              const isLeft = service.direction === "left";
              return (
                <FadeIn key={service.label} direction={service.direction} delay={i * 0.1}>
                  <div className={`chat ${isLeft ? "chat-start" : "chat-end"}`}>
                    <div
                      className={`chat-bubble max-w-lg ${
                        isLeft ? "chat-bubble-success" : "chat-bubble-info"
                      }`}
                    >
                      <h3 className="font-[family-name:var(--font-display)] text-lg mb-1">{service.label}</h3>
                      <p className="leading-relaxed opacity-90">{service.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 md:py-28" id="why">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow={tCommon("whyChooseUs")} title={t("whyTitle")} description={t("whyDescription")} />
          <StaggerContainer staggerDelay={0.15} className="grid gap-8 grid-cols-1 md:grid-cols-3 mt-16">
            {whyUsCards.map((card) => (
              <StaggerItem key={card.title}>
                <motion.div className="group relative p-8 rounded-2xl border border-base-300 bg-base-100 hover:border-emerald-500/30 transition-all duration-300 h-full" whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.1)" }}>
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors duration-300">{card.icon}</div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl mb-3 text-base-content">{card.title}</h3>
                  <p className="text-base-content/70 leading-relaxed">{card.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow={tCommon("ourExpertise")} title={t("specTitle")} description={t("specDescription")} light />
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-4 mt-12">
              {specializations.map((spec, i) => (
                <motion.span key={spec.label} className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold border ${spec.color} cursor-default`} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }} whileHover={{ scale: 1.05 }}>
                  {spec.label}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection title={t("ctaTitle")} description={t("ctaDescription")} buttonText={tCTA("contactUs")} />
      <Footer />
    </div>
  );
}
