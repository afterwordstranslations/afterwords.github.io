"use client"
import Link from "next/link";
import Image from "next/image";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { ServiceCard } from "~/components/Services";

export default function NotFound() {
  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* Hero Section */}
      <div className="hero-section bg-sl h-full">
        <section
          className="relative w-full overflow-hidden pb-16"
          style={{
            background:
              "linear-gradient(to top right, oklch(27% 0.041 260.031), oklch(44% 0.043 257.281), oklch(27% 0.046 192.524))",
          }}
        >
          <Image
            src="/bg.jpg"
            alt="Professional signing document"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="relative z-10 h-full items-center px-8 lg:px-24">
            <Header />
            <div className="text-white">
              {/* 404 Badge */}
              <h4 className="bg-accent text-accent-content text-sm shadow-lg rounded-3xl inline-block mb-6 px-4 py-2">
                Page not found
              </h4>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                404
              </h1>

              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Lost in translation?
              </h2>

              <p className="text-xl mb-8 text-slate-200">
                We couldn't find the page you're looking for. It may have been
                moved, deleted, or perhaps there's a typo in the URL.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/" className="btn btn-lg btn-accent">
                  Go to Homepage
                </Link>
                <Link
                  href="/get-a-quote"
                  className="btn btn-lg btn-outline btn-accent"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Helpful Links Section */}
      <div className="bg-base-100">
        <div className="container mx-auto p-8">
          <p className="text-2xl mb-2 text-muted-foreground">
            Where would you like to go?
          </p>
          <h2 className="text-4xl font-bold mb-8">Explore our services</h2>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
            <ServiceCard
              label="Certified Translations"
              learnMore="/certified-translations"
              description="Translation of academic and public documents for submission to various authorities."
            />
            <ServiceCard
              label="Interpreting Services"
              learnMore="/interpreting"
              description="We provide professional interpreting services to ensure seamless communication in any setting."
            />
            <ServiceCard
              label="Academic Translation"
              learnMore="/academic-translation"
              description="High-quality translations that preserve the intellectual rigor and voice of scholarly works."
            />
            <ServiceCard
              label="Pharmaceutical Translation"
              learnMore="/pharmaceutical-translation"
              description="Specialized translations rooted in practical expertise for pharmaceutical and medical content."
            />
            <ServiceCard
              label="Portfolio"
              learnMore="/portfolio"
              description="View our past projects and examples of our work across various industries."
            />
            <ServiceCard
              label="About Us"
              learnMore="/#about"
              description="Learn more about our team, our expertise, and what makes Afterwords unique."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
