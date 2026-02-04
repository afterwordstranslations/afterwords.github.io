"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "~/components/ThemeToggle";

const projects = [
  {
    id: 1,
    title: "Luxury Fashion E-commerce Localization",
    category: "E-commerce & Fashion",
    image: "/projects/fashion.jpg",
    description: "Complete localization of a luxury fashion brand's e-commerce platform for the Greek market, including product descriptions, marketing materials, and UI elements.",
    tags: ["Translation", "Localization", "Fashion", "E-commerce"],
    languages: ["English → Greek", "French → Greek"],
    stats: {
      pages: "500+",
      products: "2,000+",
      timeline: "3 months"
    }
  },
  {
    id: 2,
    title: "Marketing Campaign Transcreation",
    category: "Marketing & Creative",
    image: "/projects/marketing.jpg",
    description: "Creative adaptation of multinational marketing campaigns for local markets, preserving brand voice while ensuring cultural relevance and emotional impact.",
    tags: ["Transcreation", "Marketing", "Creative"],
    languages: ["English → Greek", "German → Greek"],
    stats: {
      campaigns: "15+",
      materials: "200+",
      timeline: "Ongoing"
    }
  },
  {
    id: 3,
    title: "Technical Documentation Suite",
    category: "Technical & Software",
    image: "/projects/technical.jpg",
    description: "Comprehensive translation of technical documentation for software products, including user manuals, API documentation, and help center content.",
    tags: ["Technical", "Software", "Documentation"],
    languages: ["English → Greek", "English → German"],
    stats: {
      pages: "1,500+",
      guides: "50+",
      timeline: "6 months"
    }
  },
  {
    id: 4,
    title: "Legal & Financial Documentation",
    category: "Legal & Financial",
    image: "/projects/legal.jpg",
    description: "Certified translations of contracts, financial statements, legal proceedings, and regulatory documents for international business operations.",
    tags: ["Legal", "Financial", "Certified"],
    languages: ["English → Greek", "Greek → English"],
    stats: {
      documents: "300+",
      clients: "50+",
      timeline: "Ongoing"
    }
  },
  {
    id: 5,
    title: "Website & App Localization",
    category: "Digital & Web",
    image: "/projects/webapp.jpg",
    description: "End-to-end localization of web platforms and mobile applications, including UI strings, help content, and user communication materials.",
    tags: ["Localization", "Web", "Mobile Apps"],
    languages: ["English → Greek", "English → 8 languages"],
    stats: {
      platforms: "10+",
      strings: "50,000+",
      timeline: "4 months"
    }
  },
  {
    id: 6,
    title: "Medical & Patent Translations",
    category: "Medical & Research",
    image: "/projects/medical.jpg",
    description: "Specialized translation of medical research papers, clinical trial documentation, patents, and medical device information for pharmaceutical companies.",
    tags: ["Medical", "Patents", "Research"],
    languages: ["English → Greek", "Greek → English"],
    stats: {
      papers: "100+",
      patents: "50+",
      timeline: "2 years"
    }
  }
];

const industries = [
  { name: "Fashion & Luxury", icon: "👗", count: "45+" },
  { name: "Marketing & Advertising", icon: "📢", count: "60+" },
  { name: "Technology & Software", icon: "💻", count: "35+" },
  { name: "Legal & Financial", icon: "⚖️", count: "80+" },
  { name: "Medical & Healthcare", icon: "🏥", count: "40+" },
  { name: "E-commerce", icon: "🛒", count: "55+" }
];

export default function ProjectsPage() {
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
                  <Link className="text-white m-2 py-1 link" href="/projects">
                    Projects
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
                From luxury fashion to medical research, we deliver precision and cultural expertise across industries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Overview */}
      <div className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized translation expertise across diverse sectors
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry) => (
            <div key={industry.name} className="text-center p-6 bg-base-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">{industry.icon}</div>
              <h3 className="font-semibold mb-1">{industry.name}</h3>
              <p className="text-sm text-muted-foreground">{industry.count} projects</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-primary/10 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of our recent work showcasing our expertise and commitment to quality
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-base-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
                  <span className="text-white text-6xl">🌍</span>
                </div>

                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-base-200 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold mb-2">Languages:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.languages.map((lang) => (
                        <span key={lang} className="text-sm text-muted-foreground">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-base-300">
                    {Object.entries(project.stats).map(([key, value]) => (
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
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your translation and localization needs. 
            We deliver quality, speed, and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
