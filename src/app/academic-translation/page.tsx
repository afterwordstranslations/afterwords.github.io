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
    label: "Academic Books & Textbooks",
    description: (
      <>
        <p className="mb-4">
          Specializing in STEM, Econometrics, and Social Sciences with Subject Matter Experts (SMEs) paired with advanced Translation Memories for guaranteed terminology consistency.
        </p>
      </>
    )
  },
  {
    id: 2,
    label: "Literature & Creative Non-Fiction",
    description: (
      <>
        <p className="mb-4">
          Sensitive translation for Memoirs and Novels that preserves authorial &ldquo;voice&rdquo; and charisma—something AI cannot replicate.
        </p>
      </>
    )
  },
  {
    id: 3,
    label: "E-learning & Digital Education",
    description: (
      <>
        <p className="mb-4">
          Localizing interactive course materials and pedagogical platforms for global learning environments.
        </p>
      </>
    )
  },
  {
    id: 4,
    label: "Journal Manuscripts",
    description: (
      <>
        <p className="mb-4">
          Ensuring research is &ldquo;journal-ready&rdquo; for international peer-reviewed publication with precise academic language.
        </p>
      </>
    )
  }
];

const specializations = [
  { emoji: "📊", label: "Econometrics" },
  { emoji: "💼", label: "Economics" },
  { emoji: "🏛️", label: "Politics" },
  { emoji: "🎓", label: "Pedagogics" }
];

export default function AcademicTranslationPage() {
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
              src="/bg-academic.jpg"
              alt="Professional signing document"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
            <div className="relative z-10 h-full items-center px-8 lg:px-24">
              <Header navItems={navItems} />
              <div className="max-w-xl text-white mt-8">
                <div>
                  <h4 className="bg-accent text-accent-content text-xs shadow-lg rounded-3xl inline-block mb-8 px-4 py-2">
                    A boutique Greek agency specializing in long-form academic translation
                  </h4>
                  <h1 className="text-5xl leading-tight font-bold mb-4">
                    High-Stakes Academic Translation: Beyond the Algorithm
                  </h1>
                  <p className="text-xl mb-16">
                    In scholarly publishing, a &ldquo;near-miss&rdquo; costs more than just credibility—it costs your budget. Unlike AI, our human-led process preserves the author&apos;s unique voice and charisma.
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
                  <h4 className="text-lg font-semibold mb-2">Subject Matter Experts</h4>
                  <p>Pairing linguists with advanced Translation Memories guarantees absolute terminology consistency across every chapter.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">TEP Workflow</h4>
                  <p>Gold-standard Translation, Editing, Proofreading workflow eliminates costly reprints and brand damage.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Professional Stamina</h4>
                  <p>Maintaining technical accuracy from preface to index for 500+ page academic manuscripts.</p>
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
            Precision and Stamina for <i className="font-normal">Long-Form</i> Projects
          </h2>
          <p className="text-xl mb-4">
            We specialize in long-form academic translation for textbooks in Econometrics, Economics, Politics, and Pedagogics.
            Whether managing dense Econometrics data or complex Pedagogical theory, we deliver manuscripts that meet the highest international standards.
          </p>
          <p className="text-xl mb-8">
            We eliminate the risks of a &ldquo;Bad Translation&rdquo;—such as costly reprints and brand damage—by utilizing a gold-standard TEP (Translation, Editing, Proofreading) workflow.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-base-100">
        <div className="container mx-auto">
          <div className="p-8" id="services">
            <p className="text-2xl mb-2 text-muted-foreground">
              Our specialized academic services
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
            <h2 className="text-4xl font-bold mb-8">Beyond AI Limitations</h2>
            <p className="text-xl mb-8 md:w-3/4 lg:w-2/3">
              Unlike AI, which often misses nuance and metaphor, our human-led process preserves the author&apos;s unique voice and charisma.
            </p>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
              <ServiceCard
                label="Fixed Budget Models"
                description="Fixed royalty or budget models eliminate financial uncertainty and integrate seamlessly with your production cycle."
              />
              <ServiceCard
                label="Strict Deadline Compliance"
                description="We consistently meet strict print deadlines without compromising literary quality by combining CAT tools with expert linguists."
              />
              <ServiceCard
                label="International Standards"
                description="We deliver manuscripts that meet the highest international standards for academic publishing."
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
            <h2 className="text-4xl font-bold mb-8">Deep Specialization</h2>
            <p className="text-xl mb-8 lg:w-2/3">
              We provide end-to-end linguistic solutions for high-volume and high-impact publishing projects.
            </p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {specializations.map((spec) => (
                <LabeledEmoji key={spec.label} emoji={spec.emoji} label={spec.label} />
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
              Ready to discuss your academic translation project?
            </p>
            <h3 className="text-4xl font-bold mb-8">
              Let&apos;s talk about your book
            </h3>
            <p className="text-xl mb-8 md:w-2/3">
              Whether it&apos;s a 500-page textbook or a journal manuscript, we have the expertise and professional stamina to deliver excellence.
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
