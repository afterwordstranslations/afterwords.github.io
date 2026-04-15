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
  { id: 1, label: "Legal & Claims", description: "Precise translation for Charter Party disputes, Bills of Lading, and LMAA arbitration. We provide the linguistic security required for high-stakes maritime litigation." },
  { id: 2, label: "Crewing & Operations", description: "Ensuring compliance for Seafarer Employment Agreements (SEA), PEME medicals, and STCW certifications across our core European language sets." },
  { id: 3, label: "Safety & SMS", description: "Localizing Safety Management Systems and fleet-wide safety bulletins to ensure a unified safety culture across your entire fleet." },
];

const whyUsCards = [
  { title: "Individual Account Ownership", description: `You are served by a specific individual, not a rotating queue of employees. This builds a "long-term memory" of your company's preferred terminology and formatting.` },
  { title: "24/7 Operational Support", description: `Shipping doesn't stop. Your dedicated partner is available for "Vessel in Port" emergencies and urgent weekend requests via direct communication lines.` },
  { title: "Strict Security Protocols", description: "We treat your commercial intelligence with the same privilege as a law firm, utilizing secure transfers and project-specific NDAs for every file." },
  { title: "Beyond AI Limitations", description: "Unlike AI, our human-led process understands the critical nuances of maritime law—preserving the technical precision that algorithms frequently overlook." },
];

const languages = [
  { code: "EN/GR", label: "English & Greek", detail: "Global management standards" },
  { code: "DE", label: "German", detail: "Technical engineering and machinery" },
  { code: "IT", label: "Italian", detail: "Shipyard specs and naval architecture" },
  { code: "FR", label: "French", detail: "Mediterranean and West African trade routes" },
  { code: "ES", label: "Spanish", detail: "Port authority and Latin American logistics" },
];

/* Compass Rose SVG (background decoration) */
const CompassRose = () => (
  <svg viewBox="0 0 200 200" className="absolute right-8 top-1/2 -translate-y-1/2 w-[340px] h-[340px] opacity-[0.06] pointer-events-none hidden lg:block" fill="none" stroke="currentColor" strokeWidth="0.8">
    <circle cx="100" cy="100" r="90" className="text-amber-300" />
    <circle cx="100" cy="100" r="70" className="text-amber-300" />
    <circle cx="100" cy="100" r="4" fill="currentColor" className="text-amber-300" />
    <line x1="100" y1="10" x2="100" y2="190" className="text-amber-300" />
    <line x1="10" y1="100" x2="190" y2="100" className="text-amber-300" />
    <line x1="36" y1="36" x2="164" y2="164" className="text-amber-300" />
    <line x1="164" y1="36" x2="36" y2="164" className="text-amber-300" />
    <polygon points="100,10 94,40 106,40" fill="currentColor" className="text-amber-300" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
      const r1 = 88, r2 = 94, rad = (deg * Math.PI) / 180;
      return <line key={deg} x1={100 + r1 * Math.sin(rad)} y1={100 - r1 * Math.cos(rad)} x2={100 + r2 * Math.sin(rad)} y2={100 - r2 * Math.cos(rad)} className="text-amber-300" />;
    })}
    <text x="100" y="24" textAnchor="middle" fontSize="8" fill="currentColor" className="text-amber-300" fontWeight="bold">N</text>
    <text x="100" y="184" textAnchor="middle" fontSize="8" fill="currentColor" className="text-amber-300" fontWeight="bold">S</text>
    <text x="182" y="103" textAnchor="middle" fontSize="8" fill="currentColor" className="text-amber-300" fontWeight="bold">E</text>
    <text x="18" y="103" textAnchor="middle" fontSize="8" fill="currentColor" className="text-amber-300" fontWeight="bold">W</text>
  </svg>
);

/* Animated wave SVG */
const WaveBackground = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2240] to-[#0a1628]" />
    <svg className="absolute bottom-0 left-0 w-full h-48 opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <motion.path d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,234.7C840,245,960,235,1080,218.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="rgba(191,161,100,0.3)" animate={{ x: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.path d="M0,256L60,261.3C120,267,240,277,360,272C480,267,600,245,720,240C840,235,960,245,1080,250.7C1200,256,1320,256,1380,256L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="rgba(191,161,100,0.15)" animate={{ x: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
    <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-amber-500/5 blur-[100px]" />
    <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-amber-600/5 blur-[80px]" />
    <CompassRose />
  </div>
);

export default function MaritimeTranslationClient() {
  return (
    <div className="w-full bg-base-100 text-base-content">
      <PageHero badge="Boutique, human-led linguistic support with a dedicated partner for every fleet" title="High-Stakes Maritime Translation: Precision for the Global Fleet" subtitle='In shipping, a "near-miss" costs more than just time — it costs operational safety. We provide boutique, human-led linguistic support with a dedicated partner for every fleet.' variant="full" backgroundElement={<WaveBackground />} cta={
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote" onClick={() => trackCTA("Get a free estimate", "/maritime-translation")} className="group relative inline-flex items-center gap-2 bg-amber-500 text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
            Get a free estimate
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
          <Link href="/portfolio" onClick={() => trackCTA("View Portfolio", "/maritime-translation")} className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 transition-all duration-300">View Portfolio</Link>
        </div>
      } features={[
        { title: "Maritime Subject Matter Experts", description: "We pair naval linguists with industry-standard glossaries to guarantee absolute terminology consistency from the bridge to the engine room." },
        { title: "Safety-First TEP Workflow", description: "Our gold-standard Translation, Editing, and Proofreading workflow eliminates the risks of non-compliance." },
        { title: "A Dedicated Single Point of Contact", description: "Forget anonymous help-desks. You are assigned a permanent project lead who understands your fleet's history, terminology, and specific operational needs." },
      ]} />

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8">
          <div className="lg:grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2">
              <SectionHeader eyebrow="Precision and Personal Accountability for the Greek Shipping Cluster" title="Boutique Agency" titleItalic="Excellence" />
              <FadeIn delay={0.2}><p className="text-lg md:text-xl leading-relaxed text-base-content/70 mt-8 mb-4">We specialize in technical and legal maritime translation for shipowners, crewing managers, and maritime law firms. Whether managing dense engineering manuals from German shipyards or complex Italian litigation, we deliver documentation that meets the highest international standards.</p></FadeIn>
              <FadeIn delay={0.3}><p className="text-lg md:text-xl leading-relaxed text-base-content/70">At Afterwords, we move beyond the &ldquo;agency model.&rdquo; We operate as a remote extension of your office, assigning a dedicated specialist to your account. This ensures that the person handling your LMAA arbitration today is the same one who understands your fleet&apos;s technical DNA tomorrow.</p></FadeIn>
            </div>
            <FadeIn direction="right" delay={0.3} className="hidden lg:block mt-8">
              <div className="relative rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-50 to-amber-50/50 p-8 shadow-sm">
                <div className="absolute -top-3 left-6 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Est. 2015</div>
                <div className="flex justify-center mb-4 mt-2">
                  <svg viewBox="0 0 60 60" className="w-16 h-16 text-amber-600/60" fill="none" stroke="currentColor" strokeWidth="0.8">
                    <circle cx="30" cy="30" r="28" /><circle cx="30" cy="30" r="22" /><line x1="30" y1="4" x2="30" y2="56" /><line x1="4" y1="30" x2="56" y2="30" /><polygon points="30,6 28,18 32,18" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-center text-sm text-base-content/60 leading-relaxed">Your dedicated partner for maritime linguistic excellence across the European shipping cluster.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow="Our specialized maritime services" title="Service" titleItalic="Portfolio" description="Each engagement is logged with the same rigour as a ship's operational record." />
          <StaggerContainer className="mt-16 space-y-0" staggerDelay={0.15}>
            {services.map((service, i) => (
              <StaggerItem key={service.id}>
                <div className="group relative flex gap-6 md:gap-8 py-8 border-b border-slate-200 last:border-b-0">
                  <div className="hidden sm:flex flex-col items-center">
                    <span className="text-xs font-bold text-amber-700/70 tracking-widest uppercase mt-[6px] md:mt-[9px] mb-2 leading-none">{String(i + 1).padStart(2, "0")}</span>
                    <div className="w-px flex-1 bg-gradient-to-b from-amber-500 to-amber-500/20" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="mt-2 w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-amber-500/10 flex-shrink-0 sm:hidden" />
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-base-content mb-3 group-hover:text-amber-700 transition-colors duration-300">{service.label}</h3>
                        <p className="text-base-content/70 text-base md:text-lg leading-relaxed max-w-2xl">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why" className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2240 50%, #0a1e3a 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="container mx-auto px-8 relative z-10">
          <SectionHeader eyebrow="Why choose us" title="Dedicated Fleet" titleItalic="Partnership" description="Unlike AI, our human-led process understands the critical nuances of maritime law — preserving the technical precision that algorithms frequently overlook." light />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16" staggerDelay={0.12}>
            {whyUsCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-amber-500/30 hover:bg-white/[0.06] transition-all duration-500">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">{card.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{card.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow="Our expertise" title="European Maritime" titleItalic="Hubs" description="We provide end-to-end linguistic solutions for high-impact shipping projects across these core jurisdictions:" />
          <div className="mt-16 relative">
            <div className="absolute top-0 bottom-0 left-[19px] md:left-0 md:top-5 md:right-0 md:bottom-auto md:w-full md:h-px border-l md:border-l-0 md:border-t-2 border-dashed border-amber-500/30 md:-translate-y-1/2 z-0" />
            <StaggerContainer className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4" staggerDelay={0.1}>
              {languages.map((lang) => (
                <StaggerItem key={lang.code}>
                  <div className="flex md:flex-col md:items-center gap-4 md:gap-0 md:text-center group">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-[10px] font-bold text-slate-900 tracking-wider">{lang.code}</span>
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 animate-ping opacity-0 group-hover:opacity-100" />
                    </div>
                    <div className="md:mt-4">
                      <h4 className="font-bold text-base-content text-sm md:text-base">{lang.label}</h4>
                      <p className="text-base-content/60 text-sm mt-1">{lang.detail}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <CTASection title="When the claim lands at 2am." description="Urgent arbitration filings, technical manuals, charter party disputes — maritime work rarely waits, and neither do we." buttonText="Contact us" />
      <Footer />
    </div>
  );
}
