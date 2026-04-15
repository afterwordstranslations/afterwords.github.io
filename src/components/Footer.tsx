"use client";
import Image from "next/image";
import { Link } from "~/i18n/navigation";
import { usePathname } from "~/i18n/navigation";
import { useTranslations } from "next-intl";
import { getEmail } from "~/lib/email";
import { trackSocial, trackCTA } from "~/lib/analytics";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/afterwordstranslations/", icon: "/insta.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/afterwordstranslations/", icon: "/in.png" },
  { label: "Facebook", href: "https://www.facebook.com/AfterWordstranslations", icon: "/fb.png" },
];

export const Footer = () => {
  const pathname = usePathname();
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");

  const serviceLinks = [
    { label: tHeader("certifiedTranslations"), href: "/certified-translations" },
    { label: tHeader("interpreting"), href: "/interpreting" },
    { label: tHeader("subtitling"), href: "/audiovisual-translation" },
  ];
  const industryLinks = [
    { label: tHeader("pharmaceutical"), href: "/pharmaceutical-translation" },
    { label: tHeader("maritime"), href: "/maritime-translation" },
    { label: tHeader("academic"), href: "/academic-translation" },
  ];

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
              {t("tagline")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.15em] text-warm mb-6">
              {t("services")}
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
              {t("industries")}
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
              {t("resources")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t("portfolio")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.15em] text-warm mb-6">
              {t("connect")}
            </h4>
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-warm/20 transition-all duration-300"
                  aria-label={link.label}
                  onClick={() => trackSocial(link.label.toLowerCase() as "instagram" | "linkedin" | "facebook", pathname)}
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
              onClick={() => trackCTA("Get in touch", pathname)}
            >
              {t("getInTouch")} &rarr;
            </Link>
            <p className="text-white/60 text-sm mt-3">
              {getEmail()}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
          <Image
            alt="I work with SDL Trados Studio"
            src="/trados.png"
            width={180}
            height={40}
            className="h-7 w-auto opacity-50 hover:opacity-80 transition-opacity duration-300"
          />
          <p className="text-white/40 text-sm">
            {t("location")}
          </p>
        </div>
      </div>
    </footer>
  );
};
