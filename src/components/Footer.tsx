"use client";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { label: "Certified Translations", href: "/certified-translations" },
  { label: "Interpreting", href: "/interpreting" },
  { label: "Subtitling", href: "/audiovisual-translation" },
];

const industryLinks = [
  { label: "Pharmaceutical", href: "/pharmaceutical-translation" },
  { label: "Maritime", href: "/maritime-translation" },
  { label: "Academic", href: "/academic-translation" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/afterwordstranslations/", icon: "/insta.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/afterwordstranslations/", icon: "/in.png" },
  { label: "Facebook", href: "https://www.facebook.com/AfterWordstranslations", icon: "/fb.png" },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Warm gradient divider */}
      <div className="h-1 bg-gradient-to-r from-warm/0 via-warm to-warm/0" />

      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Image
              alt="Afterwords logo"
              src="/logo.svg"
              width={200}
              height={50}
              className="mb-4 w-48"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Precision in every word. A boutique Greek translation agency bridging languages and cultures since 2015.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.15em] text-warm mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.15em] text-warm mb-6">
              Industries
            </h4>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-sm uppercase tracking-[0.15em] text-warm mb-4 mt-8">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.15em] text-warm mb-6">
              Connect
            </h4>
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-warm/20 transition-all duration-300"
                  aria-label={link.label}
                >
                  <Image
                    alt={link.label}
                    width={20}
                    height={20}
                    src={link.icon}
                    className="w-4 h-4 opacity-70"
                  />
                </a>
              ))}
            </div>
            <Link
              href="/get-a-quote"
              className="text-sm text-warm hover:text-warm-dark transition-colors duration-200"
            >
              Get in touch &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Afterwords. All rights reserved.
          </p>
          <Image
            alt="I work with SDL Trados Studio"
            src="/trados.png"
            width={180}
            height={40}
            className="h-7 w-auto opacity-50 hover:opacity-80 transition-opacity duration-300"
          />
          <p className="text-white/40 text-sm">
            Athens, Greece
          </p>
        </div>
      </div>
    </footer>
  );
};
