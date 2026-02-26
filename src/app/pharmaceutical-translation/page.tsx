"use client";

import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "~/components/Services";
import LabeledEmoji from "~/components/LabeledEmoji";
import { Header } from "~/components/Header";

declare global {
  interface Window {
    // eslint-disable-next-line
    Beacon: any;
  }
}

const services = [
  {
    id: 1,
    label: "Regulatory Submissions",
    description: (
      <>
        <p className="mb-4">
          Regulatory-compliant translation of EU submissions and multi-module dossiers with precise terminology management.
        </p>
      </>
    )
  },
  {
    id: 2,
    label: "Product Information",
    description: (
      <>
        <p className="mb-4">
          Translation of SmPCs, package leaflets (PILs), and labeling texts that meet strict regulatory standards.
        </p>
      </>
    )
  },
  {
    id: 3,
    label: "Clinical Trial Documentation",
    description: (
      <>
        <p className="mb-4">
          Clinical trial documentation, protocols, and informed consent forms with absolute accuracy and consistency.
        </p>
      </>
    )
  },
  {
    id: 4,
    label: "Pharmacovigilance & MAH",
    description: (
      <>
        <p className="mb-4">
          Pharmacovigilance and MAH documentation with audit-ready quality and terminology precision.
        </p>
      </>
    )
  },
  {
    id: 5,
    label: "Patient-Facing Materials",
    description: (
      <>
        <p className="mb-4">
          Patient-facing and medical materials that balance accuracy with accessibility and clarity.
        </p>
      </>
    )
  }
];

const qualityProcess = [
  { step: "1", title: "Specialist Translation", description: "by life sciences experts" },
  { step: "2", title: "Independent Review", description: "Four-Eyes Principle verification" },
  { step: "3", title: "Final Quality Assurance", description: "formatting, consistency, regulatory alignment" }
];

const benefits = [
  { emoji: "🔒", label: "GDPR-Compliant Workflows" },
  { emoji: "📋", label: "Harmonized Terminology" },
  { emoji: "🔄", label: "CAT Tools & Translation Memories" },
  { emoji: "✓", label: "Audit-Ready Quality" }
];

export default function PharmaceuticalTranslationPage() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our services", href: "#services" },
    { label: "Quality process", href: "#quality" },
    { label: "Why us", href: "#why" },
  ];

  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* Hero Section */}
      <div className="hero-section bg-sl h-full pb-16">
        <div>
          <section className="relative w-full overflow-hidden bg-slate-900">
            <div className="container mx-auto px-4 md:px-8"></div>
            <Image
              src="/bg-clinical.jpg"
              alt="Pharmaceutical documentation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
            <div className="relative z-10 h-full items-center px-8 lg:px-24">
              <Header navItems={navItems} />
              <div className="max-w-xl text-white mt-8">
                <div>
                  <h4 className="bg-accent text-accent-content text-xs shadow-lg rounded-3xl inline-block mb-8 px-4 py-2">
                    Specialized pharmaceutical and life sciences translation
                  </h4>
                  <h1 className="text-5xl leading-tight font-bold mb-4">
                    Where Scientific Precision Meets Regulatory Compliance
                  </h1>
                  <p className="text-xl mb-16">
                    In pharmaceutical and clinical environments, language is part of compliance. A single error in an SmPC, PIL, regulatory dossier, or clinical trial document can delay approvals or raise regulatory scrutiny.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className="btn btn-lg btn-accent"
                      onClick={() => window.Beacon("open")}
                    >
                      Get a free estimate
                    </button>
                    <Link
                      href="/portfolio"
                      className="btn btn-lg btn-outline btn-accent"
                    >
                      View Portfolio
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 my-16 text-white">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Scientific Precision</h4>
                  <p>Expert translation by life sciences specialists with deep domain knowledge and terminology expertise.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Regulatory Compliance</h4>
                  <p>All projects follow structured terminology management and strict quality control for submission-ready results.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Audit-Ready Quality</h4>
                  <p>Accurate, consistent, audit-ready medical translation with comprehensive documentation and traceability.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto">
        <div className="lg:w-2/3 p-8">
          <p className="text-2xl mb-2 text-muted-foreground">
            Athens-based boutique agency
          </p>
          <h2 className="text-4xl font-bold mb-8">
            Expert Translation for <i className="font-normal">Regulated Industries</i>
          </h2>
          <p className="text-xl mb-8">
            We support pharmaceutical, biotech, and life sciences organizations with regulatory-compliant translation services designed for accuracy, consistency, and audit-readiness.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-base-100">
        <div className="container mx-auto">
          <div className="p-8" id="services">
            <p className="text-2xl mb-2 text-muted-foreground">
              Our specialized pharmaceutical services
            </p>
            <h2 className="text-4xl font-bold mb-8">Service Portfolio</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  label={service.label}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quality Process Section */}
      <div className="bg-base-300">
        <div className="container mx-auto">
          <div className="p-8" id="quality">
            <p className="text-2xl mb-2 text-muted-foreground">
              Our quality commitment
            </p>
            <h2 className="text-4xl font-bold mb-8">Our Quality Process (TEP)</h2>
            <p className="text-xl mb-8 lg:w-2/3">
              Every project undergoes a three-step review to ensure accurate, consistent, audit-ready medical translation.
            </p>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-8">
              {qualityProcess.map((item) => (
                <div key={item.step} className="bg-base-100 p-6 rounded-lg shadow-lg">
                  <div className="text-accent text-5xl font-bold mb-4">{item.step}</div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="bg-base-100">
        <div className="container mx-auto">
          <div className="p-8" id="why">
            <p className="text-2xl mb-2 text-muted-foreground">
              Why choose us
            </p>
            <h2 className="text-4xl font-bold mb-8">Secure. Consistent. Submission-Ready.</h2>
            <p className="text-xl mb-8 lg:w-2/3">
              Because pharmaceutical translation is not just about language — it is about precision, compliance, and trust.
            </p>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
              <ServiceCard
                label="Harmonized Terminology"
                description="Harmonized terminology across regulatory and clinical documentation ensures consistency and compliance."
              />
              <ServiceCard
                label="Submission Consistency"
                description="Consistency between submissions and updates with CAT tools, translation memories, and project glossaries."
              />
              <ServiceCard
                label="Secure Workflows"
                description="Encrypted, GDPR-compliant workflows protect sensitive data and maintain regulatory standards."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-base-300">
        <div className="container mx-auto">
          <div className="p-8">
            <p className="text-2xl mb-2 text-muted-foreground">
              Our commitment
            </p>
            <h2 className="text-4xl font-bold mb-8">Accuracy in Every Term</h2>
            <p className="text-xl mb-8 lg:w-2/3">
              We ensure confidence in every submission through rigorous quality control and domain expertise.
            </p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {benefits.map((benefit) => (
                <LabeledEmoji key={benefit.label} emoji={benefit.emoji} label={benefit.label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="hero-section h-full pb-16 text-white" style={{ background: 'linear-gradient(to top right, oklch(27% 0.041 260.031), oklch(44% 0.043 257.281), oklch(27% 0.046 192.524))' }}>
        <div className="container mx-auto">
          <div className="xl:w-2/3 p-8 pb-0 text-white">
            <p className="text-2xl text-slate-400 mb-2">
              Ready to discuss your pharmaceutical translation project?
            </p>
            <h3 className="text-4xl font-bold mb-8">
              Confidence in Every Submission
            </h3>
            <p className="text-xl mb-8 md:w-2/3">
              Whether it&apos;s regulatory submissions, clinical trial documentation, or patient-facing materials, we have the expertise to deliver excellence.
            </p>
            <button
              className="btn btn-accent"
              onClick={() => window.Beacon("open")}
            >
              Contact us →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900">
        <div className="container mx-auto p-8">
          <Image
            alt="Afterwords logo"
            src="/logo.svg"
            width={200}
            height={50}
            className="mb-8 w-1/3 md:w-1/4"
          />
          <div className="flex items-center">
            <h3 className="text-white text-xl mr-4">Find us on social media</h3>
            <a href="https://www.instagram.com/afterwordstranslations/" className="inline-block mr-4">
              <Image
                alt="Instagram logo"
                width={50}
                height={50}
                className="w-6"
                src="/insta.svg"
              />
            </a>
            <a href="https://www.linkedin.com/company/afterwordstranslations" className="inline-block mr-4">
              <Image
                alt="LinkedIn logo"
                width={50}
                height={50}
                className="w-6"
                src="/in.png"
              />
            </a>
            <a href="https://www.facebook.com/AfterWordstranslations" className="inline-block mr-4">
              <Image
                alt="Facebook logo"
                width={50}
                height={50}
                className="w-6"
                src="/fb.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
