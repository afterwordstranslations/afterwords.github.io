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
    label: "Corporate Summits & Keynotes",
    description: (
      <>
        <p className="mb-4">
          High-energy, stage-ready simultaneous interpreting for international conferences and corporate summits.
        </p>
      </>
    )
  },
  {
    id: 2,
    label: "Board Meetings & Negotiations",
    description: (
      <>
        <p className="mb-4">
          Discreet, high-level consecutive interpreting for executive sessions and high-stakes negotiations.
        </p>
      </>
    )
  },
  {
    id: 3,
    label: "Technical Readiness",
    description: (
      <>
        <p className="mb-4">
          Deep briefing on your specific industry terminology to ensure accurate communication of complex concepts.
        </p>
      </>
    )
  },
  {
    id: 4,
    label: "Event Integration",
    description: (
      <>
        <p className="mb-4">
          Elite linguistic talent that integrates flawlessly with your event's technical setup and production requirements.
        </p>
      </>
    )
  }
];

const specializations = [
  { emoji: "🏢", label: "Corporate" },
  { emoji: "⚖️", label: "Legal" },
  { emoji: "🎯", label: "Diplomatic" },
  { emoji: "🎤", label: "Live Events" }
];

export default function InterpretingPage() {
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
              src="/bg-interpreting.jpg"
              alt="Professional conference interpreting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
            <div className="relative z-10 h-full items-center px-8 lg:px-24">
              <Header navItems={navItems} />
              <div className="max-w-xl text-white mt-8">
                <div>
                  <h4 className="bg-accent text-accent-content text-xs shadow-lg rounded-3xl inline-block mb-8 px-4 py-2">
                    Athens-based agency specializing in live event interpretation
                  </h4>
                  <h1 className="text-5xl leading-tight font-bold mb-4">
                    High-Impact Interpreting: The Voice of Your Global Event
                  </h1>
                  <p className="text-xl mb-16">
                    In live events, there are no "second takes." We provide ready-for-stage interpreters for international summits and high-stakes board meetings.
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
                  <h4 className="text-lg font-semibold mb-2">Simultaneous & Consecutive</h4>
                  <p>Expert interpretation ensuring your speaker's charisma and nuances aren't lost in translation.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Bidirectional Mastery</h4>
                  <p>Greek and English fluency guaranteeing every attendee—local or foreign—remains fully engaged.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Stage-Ready Professionals</h4>
                  <p>Elite interpreters with the poise and stamina for complex topics and spontaneous Q&A sessions.</p>
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
            Expertise Across Registers
          </p>
          <h2 className="text-4xl font-bold mb-8">
            From Boardrooms to <i className="font-normal">Summits</i>
          </h2>
          <p className="text-xl mb-4">
            Precision requires more than fluency; it requires deep subject matter expertise. Our team thrives in corporate, legal, and diplomatic environments, adapting seamlessly to your specific professional register.
          </p>
          <p className="text-xl mb-8">
            We eliminate the risks of "Bad Interpretation"—such as brand damage or miscommunication—through meticulous preparation. We bring the poise and stamina needed to handle complex technical topics and spontaneous Q&A sessions with absolute composure.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-base-100">
        <div className="container mx-auto">
          <div className="p-8" id="services">
            <p className="text-2xl mb-2 text-muted-foreground">
              Our interpreting services
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
            <h2 className="text-4xl font-bold mb-8">Reliability and Flexibility</h2>
            <p className="text-xl mb-8 md:w-3/4 lg:w-2/3">
              Your trusted talent partner for elite linguistic services that integrate flawlessly with your event's technical setup.
            </p>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
              <ServiceCard
                label="Punctuality & Readiness"
                description="We prioritize punctuality and professional readiness, ensuring your event starts on schedule."
              />
              <ServiceCard
                label="Professional Discretion"
                description="Boutique partnership that values your brand's reputation with complete confidentiality."
              />
              <ServiceCard
                label="Human-Led Excellence"
                description="Professional verbal communication that resonates across every language barrier—human to human."
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
              Whether it's a private executive session or a large-scale conference, we deliver human-led, professional verbal communication across language barriers.
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
              Ready to discuss your interpreting needs?
            </p>
            <h3 className="text-4xl font-bold mb-8">
              Let's talk about your event
            </h3>
            <p className="text-xl mb-8 md:w-2/3">
              Whether it's a private executive session or a large-scale conference, we have the expertise and elite talent to deliver excellence.
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
