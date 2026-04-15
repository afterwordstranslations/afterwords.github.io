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
  const t = useTranslations("Audiovisual");
  const tCommon = useTranslations("Common");
  const tCTA = useTranslations("CTA");

  const services = [
    {
      id: 1,
      label: t("service1Label"),
      description: t("service1Desc"),
    },
    {
      id: 2,
      label: t("service2Label"),
      description: t("service2Desc"),
    },
    {
      id: 3,
      label: t("service3Label"),
      description: t("service3Desc"),
    },
    {
      id: 4,
      label: t("service4Label"),
      description: t("service4Desc"),
    },
  ];

  const whyUs = [
    {
      label: t("why1Label"),
      description: t("why1Desc"),
    },
    {
      label: t("why2Label"),
      description: t("why2Desc"),
    },
    {
      label: t("why3Label"),
      description: t("why3Desc"),
    },
  ];

  const specializations = [
    {
      label: t("specFilmFestivals"),
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
      label: t("specTheatre"),
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
      label: t("specTVSeries"),
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
      label: t("specDocumentaries"),
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
      title: t("featureSyncTitle"),
      description: t("featureSyncDesc"),
    },
    {
      title: t("featureGenreTitle"),
      description: t("featureGenreDesc"),
    },
    {
      title: t("featureSpeedTitle"),
      description: t("featureSpeedDesc"),
    },
  ];

  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* Inject film-grain keyframe */}
      <style>{filmGrainStyle}</style>

      {/* -- Hero -- */}
      <PageHero
        badge={t("heroBadge")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        variant="full"
        cta={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-a-quote"
              onClick={() => trackCTA("Get a free estimate", "/audiovisual-translation")}
              className="group relative inline-flex items-center gap-2 bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20"
            >
              {tCommon("getAFreeEstimate")}
            </Link>
            <Link
              href="/portfolio"
              onClick={() => trackCTA("View Portfolio", "/audiovisual-translation")}
              className="inline-flex items-center gap-2 border border-amber-400/40 text-amber-300 font-semibold px-8 py-4 rounded-xl hover:bg-amber-400/10 transition-all duration-300"
            >
              {tCommon("viewPortfolio")}
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
              eyebrow={t("aboutEyebrow")}
              title={t("aboutTitle")}
              titleItalic={t("aboutTitleItalic")}
            />
            <FadeIn delay={0.2} className="mt-8">
              <p className="text-lg md:text-xl leading-relaxed text-base-content/70 mb-4">
                {t("aboutP1")}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl leading-relaxed text-base-content/70">
                {t("aboutP2")}
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
            eyebrow={t("servicesEyebrow")}
            title={tCommon("servicePortfolio")}
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

                  <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">
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
            eyebrow={tCommon("whyChooseUs")}
            title={t("whyTitle")}
            description={t("whyDescription")}
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
                  <h3 className="font-[family-name:var(--font-display)] text-xl mb-3 group-hover:text-amber-600 transition-colors duration-300">
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
            eyebrow={tCommon("ourExpertise")}
            title={t("specTitle")}
            description={t("specDescription")}
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
        title={t("ctaTitle")}
        description={t("ctaDescription")}
        buttonText={tCTA("contactUs")}
      />

      {/* -- Footer -- */}
      <Footer />
    </div>
  );
}
