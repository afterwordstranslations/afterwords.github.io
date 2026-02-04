"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "~/components/ThemeToggle";

const portfolioItems = [
  {
    id: 1,
    emoji: "🧬",
    title: "Medical & Scientific Innovations",
    category: "Specialized Translation",
    description: "Expert translations for the medical and scientific sectors, including patent specifications, pharmaceutical applications, clinical research, and healthcare documentation.",
    items: [
      "Patent Specifications: Annual translation of 200–300 patent specifications specializing in biology, chemistry, biochemistry, and technology.",
      "Pharmaceutical Applications: Translation of 150–200 patent applications and abstracts per year.",
      "Clinical Research: Translation of clinical trial documents, medical research papers, and articles for publication.",
      "Healthcare Documentation: Comprehensive translation of patient records and medical reports."
    ],
    stats: {
      patents: "300/year",
      applications: "200/year",
      documents: "1000+"
    }
  },
  {
    id: 2,
    emoji: "⚖️",
    title: "Legal & Financial Compliance",
    category: "Corporate Translation",
    description: "Certified translations for international business operations, corporate governance, global finance, market intelligence, and international law.",
    items: [
      "Corporate Governance: Translation of contracts, agreements, and certificates for international business operations.",
      "Global Finance: Preparation of financial reports, balance sheets, and income statements.",
      "Market Intelligence: Translation of investment research reports and market analyses.",
      "International Law: Translation of treaties, conventions, and residency applications."
    ],
    stats: {
      contracts: "300+",
      reports: "200+",
      clients: "50+"
    }
  },
  {
    id: 3,
    emoji: "📚",
    title: "Published Books (Greek Editions)",
    category: "Literary Translation",
    description: "High-quality translations of academic and scholarly books, preserving intellectual rigor and authorial voice for Greek readers.",
    items: [
      "The Sociology of Health and Illness (4th Edition) by Sarah Nettleton.",
      "Development Economics: Theory and Practice (2nd Edition) by Alain de Janvry & Elisabeth Sadoulet.",
      "Managerial Economics in a Global Economy (9th Edition) by Dominick Salvatore.",
      "Mathematics for Economics: An Integrated Approach by Mik Wisniewski.",
      "Child Observation: A Guide for Students of Early Childhood (4th Edition) by Ioanna Palaiologou."
    ],
    stats: {
      books: "5+",
      pages: "2000+",
      publishers: "3"
    }
  },
  {
    id: 4,
    emoji: "🎬",
    title: "Media & Events",
    category: "Subtitling & Interpreting",
    description: "Professional subtitling services for TV series, films, and festivals, along with specialized interpreting for corporate conferences and the aviation sector.",
    items: [
      "TV Series Localization: Greek subtitles for the hit series \"Black-ish\".",
      "Film Festivals: Subtitling for the Beyond Borders International Festival (2019–2022).",
      "Cinema: English and French subtitles for the Greek short film \"MAUVE\".",
      "Corporate Conferences: Interpreting for the Coating Forum (2022–2023) and pharmaceutical launches.",
      "Aviation Sector: Specialized interpreting for business meetings and technical presentations."
    ],
    stats: {
      series: "1",
      festivals: "4 years",
      events: "50+"
    }
  }
];

export default function PortfolioPage() {
  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* Header */}
      <div className="hero-section bg-gradient-to-tr from-blue-700 via-indigo-900 to-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <header className="text-gray-100 body-font w-full">
            <div className="container mx-auto grid gap-4 grid-cols-6">
              <Link href="/" className="mt-4 title-font font-medium mb-4 md:mb-0 col-span-6 sm:col-span-2 md:col-span-3">
                <Image
                  src="/logo.svg"
                  className="w-2/4"
                  width={312}
                  height={67}
                  alt="Afterwords Logo"
                />
              </Link>
              <nav className="text-base mt-4 md:mt-10 col-span-6 sm:col-span-4 md:col-span-3 sm:text-right flex items-center justify-end sm:justify-end">
                <div className="flex items-center gap-2">
                  <Link className="text-white m-2 py-1 link" href="/">
                    Home
                  </Link>
                  <a className="text-white m-2 py-1 link" href="https://www.linkedin.com/company/afterwordstranslations">
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

          {/* Hero Section */}
          <div className="py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Work
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Explore our portfolio of translation and localization projects.
                From medical patents to published books, we deliver precision and cultural expertise across industries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Items */}
      <div className="bg-primary/10 py-16">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A selection of our work showcasing our expertise and commitment to quality
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-base-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Header with Emoji */}
                <div className="h-48 bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
                  <span className="text-white text-8xl">{item.emoji}</span>
                </div>

                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">
                    {item.category}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {item.description}
                  </p>

                  {/* Detailed Items List */}
                  <div className="space-y-3 mb-6">
                    {item.items.map((listItem, idx) => (
                      <div key={idx} className="flex gap-3 text-sm">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="text-base-content/90">{listItem}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-base-300">
                    {Object.entries(item.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Highlight */}
      <div className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive language services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2">Translation</h3>
            <p className="text-muted-foreground">
              Accurate translation of documents, websites, and content across all major languages
            </p>
          </div>

          <div className="text-center p-6">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2">Localization</h3>
            <p className="text-muted-foreground">
              Cultural adaptation of products, websites, and marketing for local markets
            </p>
          </div>

          <div className="text-center p-6">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-2">Transcreation</h3>
            <p className="text-muted-foreground">
              Creative translation that preserves brand voice and emotional impact
            </p>
          </div>

          <div className="text-center p-6">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Cultural Consulting</h3>
            <p className="text-muted-foreground">
              Expert guidance on cultural nuances and market-specific communication strategies
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="hero-section bg-gradient-to-tr from-blue-700 via-indigo-900 to-gray-900 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Get in touch with our team to discuss your translation and localization needs.
            We deliver quality, speed, and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="btn btn-lg text-indigo-900 hover:text-white hover:bg-indigo-900 dark:bg-white dark:text-indigo-900"
              onClick={() => {
                if (typeof window !== 'undefined' && window.Beacon) {
                  window.Beacon("open");
                }
              }}
            >
              Get a Free Estimate
            </button>
            <Link
              href="/"
              className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-indigo-900"
            >
              Back to Home
            </Link>
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
