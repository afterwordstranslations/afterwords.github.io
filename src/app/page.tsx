"use client";
import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "~/components/Services";
import LabeledEmoji from "~/components/LabeledEmoji";
import Translator from "~/components/Translator";
import { DecadeSection } from "~/components/DecadeSection";
import { TestimonialsSection } from "~/components/TestimonialsSection";
import { ThemeToggle } from "~/components/ThemeToggle";
import Emoji from "a11y-react-emoji";

declare global {
  interface Window {
    // eslint-disable-next-line
    Beacon: any;
  }
}

export default function Home() {
  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* Hero Section - Untouched */}
      <div className="hero-section bg-gradient-to-tr from-blue-700 via-indigo-900 to-gray-900 h-full pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <header className="text-gray-100 body-font w-full">
            <div className="container mx-auto grid gap-4 grid-cols-6">
              <a className="mt-4 title-font font-medium mb-4 md:mb-0 col-span-6 sm:col-span-2 md:col-span-3">
                <Image
                  src="/logo.svg"
                  className="w-2/4"
                  width={312}
                  height={67}
                  alt="Afterwords Logo"
                />
              </a>
              <nav className="text-base mt-4 md:mt-10 col-span-6 sm:col-span-4 md:col-span-3 sm:text-right flex items-center justify-end sm:justify-end">
                <div className="flex items-center gap-2">
                  <a className="text-white m-2 py-1 link" href="#about">
                    About us
                  </a>
                  <a className="text-white m-2 py-1 link" href="#services">
                    Our services
                  </a>
                  <a className="text-white m-2 py-1 link" href="#team">
                    Our team
                  </a>
                  <a
                    className="text-white m-2 py-1"
                    href="https://www.linkedin.com/company/afterwordstranslations"
                  >
                    <Image
                      alt="LinkedIn logo"
                      width={50}
                      height={50}
                      className="w-6 inline"
                      src="/in.png"
                    />
                  </a>
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </header>
          <div className="md:flex">
            <div className="sm:w-full md:w-6/12 text-white py-8 sm:rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg rounded-tl-lg flex items-center">
              <div>
                <h4 className="bg-slate-900 text-lg shadow-lg rounded-3xl inline-block mb-8 px-4 py-2">
                  <Emoji symbol="👋" className="mr-2" /> A boutique Greek agency with over 10 years of specialized experience.
                </h4>
                <h1 className="text-4xl font-bold text-white mb-4">
                  {" "}
                  Certified Legal, Medical, & Technical Translations.
                </h1>
                <p className="text-xl text-white mb-16">
                  Bridging the gap between the Greek market and the global stage. We provide the linguistic precision and cultural nuance your business needs to expand without borders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="btn text-xl btn-lg normal-case text-indigo-900 hover:text-white hover:bg-indigo-900 dark:bg-white dark:text-indigo-900"
                    onClick={() => window.Beacon("open")}
                  >
                    Get a free estimate →
                  </button>
                  <Link
                    href="/portfolio"
                    className="btn text-xl btn-lg normal-case btn-outline text-white border-white hover:bg-white hover:text-indigo-900"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-6/12 lg:w-6/12 xl:4/12 md:p-16">
              <Image
                className="lg:p-16"
                src="/world.svg"
                width={500}
                height={500}
                alt="Banner Desktop"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-8 text-white">
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

      </div>

      {/* About Section - Theme Applied */}
      <div className="container mx-auto">
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
      </div>

      <DecadeSection />

      {/* Services Section - Theme Applied */}
      <div className="container mx-auto">
        <div className="p-8" id="services">
          <p className="text-2xl mb-2 text-muted-foreground">
            Our services
          </p>
          <h2 className="text-4xl font-bold mb-8">How we can help you</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 mb-8">
            <ServiceCard
              label="Certified Translations"
              description={
                <>
                  <p className="mb-4">
                    Translation of academic and public documents for submission
                    to various authorities.
                  </p>
                </>
              }
            />
            <ServiceCard
              label="Interpreting Services"
              description={
                <>
                  <p className="mb-4">
                    We provide professional interpreting services to ensure
                    seamless communication in any setting.
                  </p>
                </>
              }
            />
            <ServiceCard
              label="Subtitling Services"
              description={
                <>
                  <p className="mb-4">
                    Our subtitling team brings stories and messages to life on
                    screen.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>

      {/* Industries Section - Theme Applied */}
      <div className="bg-primary/10 py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mt-8 mb-4">Industries we serve</h3>

          <p className="text-xl mb-8 md:w-3/4 lg:w-2/3">
            We provide specialized translation services designed to meet the
            unique needs of businesses, organizations, and individuals. Our
            expertise spans multiple areas.
          </p>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
            <ServiceCard
              label="Medical & patent"
              description="Expert translations of medical documentation, research papers, patents, as well as medical devices and product information."
            />
            <ServiceCard
              label="Legal & Financial"
              description="Accurate and dependable translations of contracts, legal proceedings, financial statements, and related documents."
            />
            <ServiceCard
              description="Engaging and culturally attuned translations to enhance your online presence and global reach."
              label="Websites"
            />
            <ServiceCard
              label="Marketing"
              description="Creative translations that resonate with your audience and amplify your brand's message."
            />
            <ServiceCard
              label="Academic Books"
              description="High-quality translations that preserve the intellectual rigor and voice of scholarly works."
            />
            <ServiceCard
              description="Specialized translations rooted in practical expertise, bolstered by a Permaculture Design Certificate (PDC) at Oregon State University."
              label="Agriculture & Agroforestry"
            />
          </div>
        </div>
      </div>

      {/* Team Section - Theme Applied */}
      <div className="container mx-auto">
        <div id="team" className="p-8">
          <p className="text-2xl mb-2 text-muted-foreground">
            Our team
          </p>
          <h2 className="text-4xl font-bold mb-8">You are in good hands</h2>
          <p className="text-xl mb-8 lg:w-2/3 ">
            Our seasoned translators brings together diverse expertise to meet a
            wide range of translation and interpretation needs.
          </p>
          <div className="mb-16 text-xl lg:w-3/4 ">
            <Translator
              fullName="Aggeliki Gkika"
              imageSrc="/aggeliki.jpeg"
              shortName="Aggeliki"
              href="https://www.linkedin.com/in/agkika/"
              description="Aggeliki specializes in medical, patent, and legal translations,
              ensuring accuracy and professionalism in highly specialized
              fields."
            />
            <Translator
              fullName="Chrysanthi Partsanaki"
              imageSrc="/chrysanthi.jpeg"
              shortName="Chrysanthi"
              href="https://www.linkedin.com/in/cpartsanaki/"
              description="
              Chrysanthi excels in book, financial, and political translations,
              along with skilled English and Spanish interpretation."
            />
            <Translator
              fullName="Anna Maria Chatzistylianou"
              imageSrc="/am.jpeg"
              shortName="Anna Maria"
              href="https://www.linkedin.com/in/amchatzistylianou/"
              description="Anna Maria is your go-to for subtitles, website and marketing translations,
              combining linguistic precision with creativity."
            />
          </div>
        </div>
      </div>

      {/* Client Testimonials Section - Hero gradient background with glass-morphism cards */}
      <div className="hero-section bg-gradient-to-tr from-blue-700 via-indigo-900 to-gray-900 h-full pb-16">
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
              className="btn text-xl btn-lg normal-case text-indigo-900 hover:text-white hover:bg-indigo-900 dark:bg-white dark:text-indigo-900"
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
    </div>
  );
}
