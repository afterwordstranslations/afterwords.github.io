"use client";

import Link from "next/link";
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    title: "Legal & Court Documents",
    description:
      "Certified translations for contracts, powers of attorney, court rulings, and notarial deeds with full legal validity.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Civil & Public Authority Documents",
    description:
      "Birth, marriage, and death certificates, criminal records, and all documents for submission to Greek public services and ministries.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Educational & Academic Records",
    description:
      "Diplomas, transcripts, and academic credentials certified for recognition by educational institutions and employers.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Immigration & Residency Permits",
    description:
      "Visa applications, residence permits, and immigration documents translated and certified for Greek authorities.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Submit",
    description:
      "Send us your documents via email or our contact form. We review and provide a quote within hours.",
  },
  {
    step: "02",
    title: "Translate",
    description:
      "Our certified translators handle your documents with precision, applying official seals and stamps.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "Receive your certified translation digitally and via express courier, ready for submission.",
  },
];

const credentials = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    label: "Ionian University Graduates",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: "PEEMPIP Certified Members",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    label: "Official Association Seals",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "Express Services Available",
  },
];

export default function CertifiedTranslationsClient() {
  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* Hero Section */}
      <PageHero
        badge="Certified & Sworn Translations accepted by all Greek authorities"
        title="Official Greek Translations You Can Trust"
        subtitle="Get certified translations from Ionian University graduates. Our sworn translations carry official association seals and are accepted by all public and private authorities in Greece and abroad."
        cta={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-a-quote"
              onClick={() => trackCTA("Get a free quote", "/certified-translations")}
              className="group relative inline-flex items-center gap-2 bg-warm text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-warm-dark hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-warm/20"
            >
              Get a free quote
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/portfolio" onClick={() => trackCTA("View Portfolio", "/certified-translations")} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              View Portfolio
            </Link>
          </div>
        }
        features={[
          { title: "Academic Excellence", description: "Expert graduates of the Ionian University ensure linguistic precision and academic rigor for every document." },
          { title: "Official Certification", description: "PEEMPIP members with official association seals for legal validity in all Greek public and private authorities." },
          { title: "End-to-End Service", description: "We handle translation, stamping, and delivery—including express shipping for urgent deadlines." },
        ]}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#2a2520] to-slate-900" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dot-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#d4a574" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#c9a96e]/10 blur-[150px]" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-warm/5 blur-[100px]" />
          </>
        }
        variant="full"
      />

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="Athens-based certified translation agency" title="Professional Translations for" titleItalic="Legal, Civil & Educational Documents" />
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl leading-relaxed text-base-content/70 mt-8">We specialize in certified and sworn translations for documents requiring legal validity in Greece. Whether you need to submit paperwork to ministries, embassies, tax offices (DOY), or educational institutions, our translations meet all regulatory standards.</p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl leading-relaxed text-base-content/70 mt-4">As proud members of the Panhellenic Association of Professional Translators Graduates of the Ionian University (PEEMPIP), our translations carry the official association seals required for complete legal acceptance.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-base-200/50" id="services">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow="Our certified translation services" title="Document Portfolio" />
          <StaggerContainer className="mt-16 max-w-3xl divide-y divide-base-300" staggerDelay={0.12}>
            {services.map((service) => (
              <StaggerItem key={service.title} className="py-6 first:pt-0 last:pb-0">
                <div className="group flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-warm/10 border border-warm/20 flex items-center justify-center text-warm group-hover:bg-warm group-hover:text-slate-900 transition-all duration-300">{service.icon}</div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-base-content mb-2.5 leading-snug">{service.title}</h3>
                    <p className="text-base-content/60 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow="How it works" title="Three Steps to Your" titleItalic="Certified Translation" description="We've designed a seamless process to save you time: professional translation, official stamping, and final delivery—all handled by certified experts." align="center" />
          <div className="mt-20 relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-warm/0 via-warm/40 to-warm/0" />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8" staggerDelay={0.2}>
              {processSteps.map((step) => (
                <StaggerItem key={step.step} className="text-center">
                  <div className="relative z-10 inline-flex items-center justify-center w-32 h-32 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full border-2 border-warm/20 bg-base-100" />
                    <div className="relative w-20 h-20 rounded-full bg-warm/10 flex items-center justify-center">
                      <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-warm">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-base-content mb-3">{step.title}</h3>
                  <p className="text-base-content/60 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-base-200/50" id="why">
        <div className="container mx-auto px-8">
          <SectionHeader eyebrow="Why choose us" title="The Certified Translation Advantage" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16" staggerDelay={0.1}>
            <StaggerItem>
              <div className="bg-base-100 rounded-2xl p-8 border border-base-300 h-full hover:border-warm/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-warm/10 flex items-center justify-center text-warm mb-5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" /></svg>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-base-content mb-3">Digital & Physical Delivery</h3>
                <p className="text-base-content/60 leading-relaxed">High-quality digital scans and express shipping of physical hard copies directly to your door.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-base-100 rounded-2xl p-8 border border-base-300 h-full hover:border-warm/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-warm/10 flex items-center justify-center text-warm mb-5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-base-content mb-3">Express Services</h3>
                <p className="text-base-content/60 leading-relaxed">Urgent deadline? We offer express translation services to ensure you never miss a submission date.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-base-100 rounded-2xl p-8 border border-base-300 h-full hover:border-warm/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-warm/10 flex items-center justify-center text-warm mb-5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-base-content mb-3">Universal Acceptance</h3>
                <p className="text-base-content/60 leading-relaxed">Translations accepted by all Greek public authorities, ministries, embassies, and private institutions.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 border-y border-base-300">
        <div className="container mx-auto px-8">
          <FadeIn><p className="text-sm font-semibold uppercase tracking-[0.2em] text-warm-dark text-center mb-4">Certification & Professional Standing</p></FadeIn>
          <FadeIn delay={0.05}><h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl leading-tight text-center text-base-content mb-5">Accredited, recognized, trusted</h2></FadeIn>
          <FadeIn delay={0.1}><p className="text-center text-base-content/70 text-lg max-w-2xl mx-auto mb-12">Every translation is handled by expert graduates of the Ionian University and carries the official seals required for legal validity.</p></FadeIn>
          <StaggerContainer className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6" staggerDelay={0.1}>
            {credentials.map((cred) => (
              <StaggerItem key={cred.label}>
                <div className="flex items-center gap-3 text-base-content/70">
                  <div className="w-9 h-9 rounded-full bg-warm/10 flex items-center justify-center text-warm flex-shrink-0">{cred.icon}</div>
                  <span className="text-sm font-medium whitespace-nowrap">{cred.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection title="Stamped, signed, and accepted where it matters." description="Court filings, diplomas, birth certificates, contracts — certified translations that hold up at embassies, ministries, and courtrooms across Europe." buttonText="Contact us" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
