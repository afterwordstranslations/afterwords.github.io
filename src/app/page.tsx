"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "~/components/Services";
import LabeledEmoji from "~/components/LabeledEmoji";
import Translator from "~/components/Translator";
import { DecadeSection } from "~/components/DecadeSection";
import { TestimonialsSection } from "~/components/TestimonialsSection";
import { Header } from "~/components/Header";

declare global {
  interface Window {
    // eslint-disable-next-line
    Beacon: any;
  }
}

export default function Home() {
  const navItems = [
    { label: "About us", href: "#about" },
    { label: "Our services", href: "#services" },
    { label: "Our team", href: "#team" },
  ];

  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* Hero Section - Untouched */}
      <div className="hero-section bg-sl h-full pb-16">
        <div>

          <section className="relative w-full overflow-hidden bg-slate-900">
            <Image
              src="/bg.jpg"
              alt="Professional signing document"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
            <div className="relative z-10 h-full items-center px-8 lg:px-24">
              <Header navItems={navItems} />
              <div className="max-w-xl text-white">
                <div>
                  <h4 className="bg-accent text-accent-content text-xs shadow-lg rounded-3xl inline-block mb-8 px-4 py-2">
                    A boutique Greek agency with over 10 years of specialized experience.
                  </h4>

                  <h1 className="text-5xl leading-tight font-bold mb-4">
                    {" "}
                    Precision in every word.
                  </h1>
                  <p className="text-xl mb-16">
                    Bridging the gap between the Greek market and the global stage. We provide the linguistic precision and cultural nuance your business needs to expand without borders.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className="btn btn-lg btn-accent"
                      onClick={() => window.Beacon("open")}
                    >
                      Get a free estimate
                    </button>
                    {/*<Link
                      href="/portfolio"
                      className="btn btn-lg btn-outline btn-accent"
                    >
                      View Portfolio
                    </Link>*/}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 my-16 text-white">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Quality</h4>
                  <p>Every document undergoes a 2-step review by a native speaker and a subject matter expert.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Speed</h4>
                  <p>Standard turnaround in 48 hours; Rush delivery available.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Consistency</h4>
                  <p>Translation memory and terminology management ensure uniform language.</p>
                </div>
              </div>
            </div>
          </section>
        </div >

      </div >

      {/* About Section - Theme Applied */}
      < div className="container mx-auto" >
        <div id="about" className="lg:w-2/3 p-8">
          <p className="text-2xl mb-2 text-muted-foreground">
            About us
          </p>
          <h2 className="text-4xl font-bold mb-8">
            Translation is more than <i className="font-normal">just</i> a
            document.
          </h2>

          <p className="text-xl mb-4">
            We pride ourselves on delivering tailored language solutions that
            empower our clients to communicate effectively, reach broader
            audiences, and achieve their goals with confidence.
          </p>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <LabeledEmoji emoji="🇬🇷" label="Greek" />
            <LabeledEmoji emoji="🇩🇪" label="German" />
            <LabeledEmoji emoji="🇫🇷" label="French" />
            <LabeledEmoji emoji="🇪🇸" label="Spanish" />
            <LabeledEmoji emoji="🇮🇹" label="Italian" />
            <LabeledEmoji emoji="🇸🇪" label="Swedish" />
            <LabeledEmoji emoji="🇵🇹" label="Portuguese" />
            <LabeledEmoji emoji="🇫🇮" label="Finnish" />
          </div>
          <Image
            alt="I work with SDL Trados Studio"
            width={200}
            height={50}
            src="/trados.png"
            className="sm:w-2/3 lg:w-2/5"
          />
        </div>
      </div >

      <DecadeSection />

      {/* Services Section - Theme Applied */}
      <div className="bg-base-100">
        <div className="container mx-auto">
          <div className="p-8" id="services">
            <p className="text-2xl mb-2 text-muted-foreground">
              Our services
            </p>
            <h2 className="text-4xl font-bold mb-8">How we can help you</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 mb-8">
              <ServiceCard
                label="Certified Translations"
                learnMore="/certified-translations"
                description={
                  <>
                    Translation of academic and public documents for submission
                    to various authorities.
                  </>
                }
              />
              <ServiceCard
                label="Interpreting Services"
                learnMore="/interpreting"
                description={
                  <>
                    We provide professional interpreting services to ensure
                    seamless communication in any setting.
                  </>
                }
              />
              <ServiceCard
                label="Subtitling Services"
                learnMore="/audiovisual-translation"
                description={
                  <>
                    From TV series to feature films and entire film festivals, we
                    ensure the narrative remains sharp in every frame.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-300">
        <div className="container mx-auto">

          {/* Industries Section - Theme Applied */}
          <div className="p-8">
            <h3 className="text-2xl font-bold mt-8 mb-4">Industries we serve</h3>

            <p className="text-xl mb-8 md:w-3/4 lg:w-2/3">
              We provide specialized translation services designed to meet the
              unique needs of businesses, organizations, and individuals. Our
              expertise spans multiple areas.
            </p>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
              <ServiceCard
                label="Pharmaceutical & Life Sciences"
                learnMore="/pharmaceutical-translation"
                description="Regulatory-compliant translation for submissions, clinical documentation, pharmacovigilance, and patient-facing materials."
              />
              <ServiceCard
                label="Maritime"
                description="Technical and legal maritime translation for shipowners, crewing managers, and maritime law firms."
                learnMore="/maritime-translation"
              />
              <ServiceCard
                label="Academic Books"
                description="High-quality translations that preserve the intellectual rigor, nuance, and voice of scholarly works for academic publication."
                learnMore="/academic-translation"
              />
            </div>

            <h4 className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-semibold">We also specialize in</h4>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">

              <ServiceCard
                label="Legal & Financial"
                description="Accurate and dependable translations of contracts, legal proceedings, financial statements, and related documents."
              />
              <ServiceCard
                description="Engaging and culturally attuned translations to enhance your online presence and global reach."
                label="Websites"
              />
              <ServiceCard
                description="Specialized translations rooted in practical expertise, bolstered by a Permaculture Design Certificate (PDC) at Oregon State University."
                label="Agriculture & Agroforestry"
              />
            </div>

            <button
              className="btn btn-primary"
              onClick={() => window.Beacon("open")}
            >
              Tell us about your industry →
            </button>
          </div>
        </div>
      </div>


      <div className="bg-base-100">
        <div className="container mx-auto">
          {/* Team Section - Theme Applied */}
          <div id="team" className="p-8">
            <p className="text-2xl mb-2 text-muted-foreground">
              Our team
            </p>
            <h2 className="text-4xl font-bold mb-8">You are in good hands</h2>
            <p className="text-xl mb-8 lg:w-2/3 ">
              Our seasoned translators bring together diverse expertise to meet a
              wide range of translation and interpretation needs.
            </p>
            <div className="mb-16 text-xl lg:w-3/4 ">
              <Translator
                fullName="Aggeliki Gkika"
                imageSrc="/agg_ai.png"
                shortName="Aggeliki"
                href="https://www.linkedin.com/in/agkika/"
                description="Aggeliki specializes in medical, patent, and legal translations,
              ensuring accuracy and professionalism in highly specialized
              fields."
              />
              <Translator
                fullName="Chrysanthi Partsanaki"
                imageSrc="/chrysa_ai.png"
                shortName="Chrysanthi"
                href="https://www.linkedin.com/in/cpartsanaki/"
                description="Chrysanthi delivers precision in academic, financial, legal, and maritime translation, complemented by professional Greek/English and Greek/Spanish interpretation services."
              />
              <Translator
                fullName="Anna Maria Chatzistylianou"
                imageSrc="/am_ai.png"
                shortName="Anna Maria"
                href="https://www.linkedin.com/in/amchatzistylianou/"
                description="Anna Maria is your go-to specialist for maritime and legal translation, delivering linguistic precision with deep industry knowledge."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials Section - Hero gradient background with glass-morphism cards */}
      <div className="hero-section h-full pb-16 text-white" style={{ background: 'linear-gradient(to top right, oklch(27% 0.041 260.031), oklch(44% 0.043 257.281), oklch(27% 0.046 192.524))' }}>
        <TestimonialsSection />
        <div className="container mx-auto">
          <div className="xl:w-2/3 p-8 pb-0 text-white">
            <p className="text-2xl text-slate-400 mb-2">
              Need a certified translation today??{" "}
            </p>
            <h3 className="text-4xl font-bold mb-8">
              Feel free to contact us!
            </h3>
            <p className="text-xl mb-8 md:w-2/3">
              What is your next big web project?
            </p>
            <p className="text-xl mb-8 md:w-2/3">
              Do you want to translate your new book or find interpreters for
              your big conference or event? Or do you have another question?{" "}
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

      {/* Footer - Untouched */}
      <div className="bg-slate-900">
        <div className="container mx-auto p-8">
          <Image
            alt="Afterwords logo"
            src="/logo.svg"
            width={200}
            height={50}
            className="mb-8 w-1/3 md:w-1/5"
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
            <a href="https://www.linkedin.com/company/afterwordstranslations/" className="inline-block mr-4">
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
    </div >
  );
}
