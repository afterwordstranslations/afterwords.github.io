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
    label: "Legal & Court Documents",
    description: (
      <>
        <p className="mb-4">
          Certified translations for contracts, powers of attorney, court rulings, and notarial deeds with full legal validity.
        </p>
      </>
    )
  },
  {
    id: 2,
    label: "Civil & Public Authority Documents",
    description: (
      <>
        <p className="mb-4">
          Birth, marriage, and death certificates, criminal records, and all documents for submission to Greek public services and ministries.
        </p>
      </>
    )
  },
  {
    id: 3,
    label: "Educational & Academic Records",
    description: (
      <>
        <p className="mb-4">
          Diplomas, transcripts, and academic credentials certified for recognition by educational institutions and employers.
        </p>
      </>
    )
  },
  {
    id: 4,
    label: "Immigration & Residency Permits",
    description: (
      <>
        <p className="mb-4">
          Visa applications, residence permits, and immigration documents translated and certified for Greek authorities.
        </p>
      </>
    )
  }
];

const benefits = [
  { emoji: "🎓", label: "Ionian University Graduates" },
  { emoji: "🏛️", label: "PEEMPIP Certified Members" },
  { emoji: "📋", label: "Official Association Seals" },
  { emoji: "⚡", label: "Express Services Available" }
];

export default function CertifiedTranslationsPage() {
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
              src="/bg-stamp.jpg"
              alt="Professional certified translations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
            <div className="relative z-10 h-full items-center px-8 lg:px-24">
              <Header navItems={navItems} />
              <div className="max-w-xl text-white mt-8">
                <div>
                  <h4 className="bg-accent text-accent-content text-xs shadow-lg rounded-3xl inline-block mb-8 px-4 py-2">
                    Certified & Sworn Translations accepted by all Greek authorities
                  </h4>
                  <h1 className="text-5xl leading-tight font-bold mb-4">
                    Official Greek Translations You Can Trust
                  </h1>
                  <p className="text-xl mb-16">
                    Get certified translations from Ionian University graduates. Our sworn translations carry official association seals and are accepted by all public and private authorities in Greece and abroad.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className="btn btn-lg btn-accent"
                      onClick={() => window.Beacon("open")}
                    >
                      Get a free quote
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
                  <h4 className="text-lg font-semibold mb-2">Academic Excellence</h4>
                  <p>Expert graduates of the Ionian University ensure linguistic precision and academic rigor for every document.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Official Certification</h4>
                  <p>PEEMPIP members with official association seals for legal validity in all Greek public and private authorities.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">End-to-End Service</h4>
                  <p>We handle translation, stamping, and delivery—including express shipping for urgent deadlines.</p>
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
            Athens-based certified translation agency
          </p>
          <h2 className="text-4xl font-bold mb-8">
            Professional Translations for <i className="font-normal">Legal, Civil & Educational</i> Documents
          </h2>
          <p className="text-xl mb-4">
            We specialize in certified and sworn translations for documents requiring legal validity in Greece. Whether you need to submit paperwork to ministries, embassies, tax offices (DOY), or educational institutions, our translations meet all regulatory standards.
          </p>
          <p className="text-xl mb-8">
            As proud members of the Panhellenic Association of Professional Translators Graduates of the Ionian University (PEEMPIP), our translations carry the official association seals required for complete legal acceptance.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-base-100">
        <div className="container mx-auto">
          <div className="p-8" id="services">
            <p className="text-2xl mb-2 text-muted-foreground">
              Our certified translation services
            </p>
            <h2 className="text-4xl font-bold mb-8">Document Portfolio</h2>
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
            <h2 className="text-4xl font-bold mb-8">The Certified Translation Advantage</h2>
            <p className="text-xl mb-8 md:w-3/4 lg:w-2/3">
              We&apos;ve designed a seamless process to save you time: professional translation, official stamping, and final delivery—all handled by certified experts.
            </p>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
              <ServiceCard
                label="Digital & Physical Delivery"
                description="High-quality digital scans and express shipping of physical hard copies directly to your door."
              />
              <ServiceCard
                label="Express Services"
                description="Urgent deadline? We offer express translation services to ensure you never miss a submission date."
              />
              <ServiceCard
                label="Universal Acceptance"
                description="Translations accepted by all Greek public authorities, ministries, embassies, and private institutions."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-base-100">
        <div className="container mx-auto">
          <div className="p-8">
            <p className="text-2xl mb-2 text-muted-foreground">
              Our credentials
            </p>
            <h2 className="text-4xl font-bold mb-8">Certification & Professional Standing</h2>
            <p className="text-xl mb-8 lg:w-2/3">
              Every translation is handled by expert graduates of the Ionian University and carries the official seals required for legal validity.
            </p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {benefits.map((benefit) => (
                <LabeledEmoji key={benefit.label} emoji={benefit.emoji} label={benefit.label} />
              ))}
            </div>
            <Image
              alt="I work with SDL Trados Studio"
              width={200}
              height={50}
              src="/trados.png"
              className="sm:w-2/3 lg:w-2/5"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="hero-section h-full pb-16 text-white" style={{ background: 'linear-gradient(to top right, oklch(27% 0.041 260.031), oklch(44% 0.043 257.281), oklch(27% 0.046 192.524))' }}>
        <div className="container mx-auto">
          <div className="xl:w-2/3 p-8 pb-0 text-white">
            <p className="text-2xl text-slate-400 mb-2">
              Ready to get your certified translation?
            </p>
            <h3 className="text-4xl font-bold mb-8">
              Let&apos;s handle your official documents
            </h3>
            <p className="text-xl mb-8 md:w-2/3">
              From legal paperwork to educational records, we deliver certified translations with full legal validity and express delivery options.
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
