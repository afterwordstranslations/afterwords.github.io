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
    label: "Legal & Claims",
    description: (
      <>
        <p className="mb-4">
          Precise translation for Charter Party disputes, Bills of Lading, and LMAA arbitration. We provide the linguistic security required for high-stakes maritime litigation.
        </p>
      </>
    )
  },
  {
    id: 2,
    label: "Crewing & Operations",
    description: (
      <>
        <p className="mb-4">
          Ensuring compliance for Seafarer Employment Agreements (SEA), PEME medicals, and STCW certifications across our core European language sets.
        </p>
      </>
    )
  },
  {
    id: 3,
    label: "Safety & SMS",
    description: (
      <>
        <p className="mb-4">
          Localizing Safety Management Systems and fleet-wide safety bulletins to ensure a unified safety culture across your entire fleet.
        </p>
      </>
    )
  }
];

const languages = [
  { emoji: "⚓", label: "English & Greek: Global management standards" },
  { emoji: "🇩🇪", label: "German: Technical engineering and machinery" },
  { emoji: "🇮🇹", label: "Italian: Shipyard specs and naval architecture" },
  { emoji: "🇫🇷", label: "French: Mediterranean and West African trade routes" },
  { emoji: "🇪🇸", label: "Spanish: Port authority and Latin American logistics" }
];

export default function MaritimeTranslationPage() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our services", href: "#services" },
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
              src="/bg-maritime.jpg"
              alt="Maritime vessels and operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
            <div className="relative z-10 h-full items-center px-8 lg:px-24">
              <Header navItems={navItems} />
              <div className="max-w-xl text-white mt-8">
                <div>
                  <h4 className="bg-accent text-accent-content text-xs shadow-lg rounded-3xl inline-block mb-8 px-4 py-2">
                    Boutique, human-led linguistic support with a dedicated partner for every fleet
                  </h4>
                  <h1 className="text-5xl leading-tight font-bold mb-4">
                    High-Stakes Maritime Translation: Precision for the Global Fleet
                  </h1>
                  <p className="text-xl mb-16">
                    In shipping, a &ldquo;near-miss&rdquo; costs more than just time—it costs operational safety. We provide boutique, human-led linguistic support with a dedicated partner for every fleet.
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
                  <h4 className="text-lg font-semibold mb-2">Maritime Subject Matter Experts</h4>
                  <p>We pair naval linguists with industry-standard glossaries to guarantee absolute terminology consistency from the bridge to the engine room.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Safety-First TEP Workflow</h4>
                  <p>Our gold-standard Translation, Editing, and Proofreading workflow eliminates the risks of non-compliance.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">A Dedicated Single Point of Contact</h4>
                  <p>Forget anonymous help-desks. You are assigned a permanent project lead who understands your fleet&apos;s history, terminology, and specific operational needs.</p>
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
            Precision and Personal Accountability for the Greek Shipping Cluster
          </p>
          <h2 className="text-4xl font-bold mb-8">
            Boutique Agency Excellence
          </h2>
          <p className="text-xl mb-4">
            We specialize in technical and legal maritime translation for shipowners, crewing managers, and maritime law firms. Whether managing dense engineering manuals from German shipyards or complex Italian litigation, we deliver documentation that meets the highest international standards.
          </p>
          <p className="text-xl mb-8">
            At Afterwords, we move beyond the &ldquo;agency model.&rdquo; We operate as a remote extension of your office, assigning a dedicated specialist to your account. This ensures that the person handling your LMAA arbitration today is the same one who understands your fleet&apos;s technical DNA tomorrow.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-base-100">
        <div className="container mx-auto">
          <div className="p-8" id="services">
            <p className="text-2xl mb-2 text-muted-foreground">
              Our specialized maritime services
            </p>
            <h2 className="text-4xl font-bold mb-8">Service Portfolio</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 mb-8">
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

      {/* Why Us Section */}
      <div className="bg-base-300">
        <div className="container mx-auto">
          <div className="p-8" id="why">
            <p className="text-2xl mb-2 text-muted-foreground">
              Why choose us
            </p>
            <h2 className="text-4xl font-bold mb-8">Dedicated Fleet Partnership</h2>
            <p className="text-xl mb-8 md:w-3/4 lg:w-2/3">
              Unlike AI, our human-led process understands the critical nuances of maritime law—preserving the technical precision that algorithms frequently overlook.
            </p>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
              <ServiceCard
                label="Individual Account Ownership"
                description="You are served by a specific individual, not a rotating queue of employees. This builds a &ldquo;long-term memory&rdquo; of your company's preferred terminology and formatting."
              />
              <ServiceCard
                label="24/7 Operational Support"
                description="Shipping doesn't stop. Your dedicated partner is available for &ldquo;Vessel in Port&rdquo; emergencies and urgent weekend requests via direct communication lines."
              />
              <ServiceCard
                label="Strict Security Protocols"
                description="We treat your commercial intelligence with the same privilege as a law firm, utilizing secure transfers and project-specific NDAs for every file."
              />
              <ServiceCard
                label="Beyond AI Limitations"
                description="Unlike AI, our human-led process understands the critical nuances of maritime law—preserving the technical precision that algorithms frequently overlook."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Specializations Section */}
      <div className="bg-base-100">
        <div className="container mx-auto">
          <div className="p-8">
            <p className="text-2xl mb-2 text-muted-foreground">
              Our expertise
            </p>
            <h2 className="text-4xl font-bold mb-8">Deep Specialization in European Maritime Hubs</h2>
            <p className="text-xl mb-8 lg:w-2/3">
              We provide end-to-end linguistic solutions for high-impact shipping projects across these core jurisdictions:
            </p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {languages.map((lang) => (
                <LabeledEmoji key={lang.label} emoji={lang.emoji} label={lang.label} />
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
              Ready to discuss your maritime translation project?
            </p>
            <h3 className="text-4xl font-bold mb-8">
              Your dedicated partner is ready
            </h3>
            <p className="text-xl mb-8 md:w-2/3">
              Whether it&apos;s a 1,000-page technical manual or an urgent arbitration claim, your dedicated partner is ready to deliver excellence.
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
