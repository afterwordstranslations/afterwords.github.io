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
    label: "TV Series & Episodic Content",
    description: (
      <>
        <p className="mb-4">
          Comprehensive subtitling for television series with consistent character voice and terminology throughout entire seasons.
        </p>
      </>
    )
  },
  {
    id: 2,
    label: "Documentaries & Non-Fiction",
    description: (
      <>
        <p className="mb-4">
          Precise translation that preserves the educational and informational integrity of documentary content across all genres.
        </p>
      </>
    )
  },
  {
    id: 3,
    label: "Feature Films & Cinema",
    description: (
      <>
        <p className="mb-4">
          Theatre-quality subtitles that capture the emotional nuance and dramatic timing of feature film productions.
        </p>
      </>
    )
  },
  {
    id: 4,
    label: "Theatre & Live Performance",
    description: (
      <>
        <p className="mb-4">
          Specialized subtitling for theatre performances and live events, respecting the unique dynamics of staged productions.
        </p>
      </>
    )
  }
];

const specializations = [
  { emoji: "🎬", label: "Film Festivals" },
  { emoji: "🎭", label: "Theatre" },
  { emoji: "📺", label: "TV Series" },
  { emoji: "🎥", label: "Documentaries" }
];

export default function AudiovisualTranslationPage() {
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
              src="/bg-cinema.jpg"
              alt="Cinema screen with subtitles"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
            <div className="relative z-10 h-full items-center px-8 lg:px-24">
              <Header navItems={navItems} />
              <div className="max-w-xl text-white mt-8">
                <div>
                  <h4 className="bg-accent text-accent-content text-xs shadow-lg rounded-3xl inline-block mb-8 px-4 py-2">
                    Bridging borders through expert audiovisual translation
                  </h4>
                  <h1 className="text-5xl leading-tight font-bold mb-4">
                    Bringing Your Content to Global Audiences
                  </h1>
                  <p className="text-xl mb-16">
                    From TV series to feature films and entire film festivals, we ensure the narrative remains sharp and impactful across every frame.
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
                  <h4 className="text-lg font-semibold mb-2">Flawless Synchronization</h4>
                  <p>Industry-leading software guarantees precise timing and formatting for seamless viewer experiences.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Genre Versatility</h4>
                  <p>We navigate all genres and registers—comedic, technical, or dramatic—with equal expertise.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Reliable Speed</h4>
                  <p>Understanding tight entertainment industry turnaround times without sacrificing accuracy.</p>
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
            Precision and Professionalism
          </p>
          <h2 className="text-4xl font-bold mb-8">
            Expert <i className="font-normal">Audiovisual</i> Translation
          </h2>
          <p className="text-xl mb-4">
            Bring your content to a global audience with our specialized subtitling services. With extensive experience in audiovisual translation, we handle diverse formats—including TV series, documentaries, feature films, theatre performances, and entire film festivals.
          </p>
          <p className="text-xl mb-8">
            Whether your project is monolingual or a complex, multilingual production, our team ensures the narrative remains sharp and impactful across every frame.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-base-100">
        <div className="container mx-auto">
          <div className="p-8" id="services">
            <p className="text-2xl mb-2 text-muted-foreground">
              Our specialized audiovisual services
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
            <h2 className="text-4xl font-bold mb-8">Precision Meets Speed</h2>
            <p className="text-xl mb-8 md:w-3/4 lg:w-2/3">
              We leverage industry-leading software to guarantee flawless synchronization, strictly adhering to your specific timing and formatting requirements.
            </p>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
              <ServiceCard
                label="Tone Adaptation"
                description="We navigate all genres and registers with ease, ensuring that the tone of your original content—whether comedic, technical, or dramatic—is perfectly adapted for your target viewers."
              />
              <ServiceCard
                label="Industry Turnaround"
                description="We understand the tight turnaround times inherent in the entertainment industry and deliver high-quality subtitles without ever sacrificing accuracy."
              />
              <ServiceCard
                label="Professional Workflow"
                description="Partner with us for a seamless, professional viewing experience that respects both the art on screen and the constraints of your deadline."
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
            <h2 className="text-4xl font-bold mb-8">Diverse Format Experience</h2>
            <p className="text-xl mb-8 lg:w-2/3">
              We handle projects ranging from monolingual content to complex, multilingual productions across all formats and genres.
            </p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {specializations.map((spec) => (
                <LabeledEmoji key={spec.label} emoji={spec.emoji} label={spec.label} />
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
              Ready to bring your content to global audiences?
            </p>
            <h3 className="text-4xl font-bold mb-8">
              Let&apos;s discuss your project
            </h3>
            <p className="text-xl mb-8 md:w-2/3">
              Whether it&apos;s a single film or an entire film festival, we have the expertise to deliver seamless, professional subtitles.
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
