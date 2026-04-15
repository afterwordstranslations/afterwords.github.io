"use client"
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/navigation";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { ServiceCard } from "~/components/Services";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* Hero Section */}
      <div className="hero-section bg-sl h-full">
        <section
          className="relative w-full pb-16"
          style={{
            background:
              "linear-gradient(to top right, oklch(27% 0.041 260.031), oklch(44% 0.043 257.281), oklch(27% 0.046 192.524))",
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/bg.jpg"
              alt="Professional signing document"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="relative z-10 h-full items-center px-8 lg:px-24">
            <Header />
            <div className="text-white">
              {/* 404 Badge */}
              <h4 className="bg-accent text-accent-content text-sm shadow-lg rounded-3xl inline-block mb-6 px-4 py-2">
                {t("badge")}
              </h4>

              {/* Main Heading */}
              <h1 className="font-[family-name:var(--font-display)] text-6xl md:text-7xl mb-6">
                {t("title")}
              </h1>

              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6">
                {t("subtitle")}
              </h2>

              <p className="text-xl mb-8 text-slate-200">
                {t("description")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/" className="btn btn-lg btn-accent">
                  {t("goHome")}
                </Link>
                <Link
                  href="/get-a-quote"
                  className="btn btn-lg btn-outline btn-accent"
                >
                  {t("contactUs")}
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
            {t("whereToGo")}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl mb-8">{t("exploreServices")}</h2>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
            <ServiceCard
              label={t("certifiedLabel")}
              learnMore="/certified-translations"
              description={t("certifiedDesc")}
            />
            <ServiceCard
              label={t("interpretingLabel")}
              learnMore="/interpreting"
              description={t("interpretingDesc")}
            />
            <ServiceCard
              label={t("academicLabel")}
              learnMore="/academic-translation"
              description={t("academicDesc")}
            />
            <ServiceCard
              label={t("pharmaLabel")}
              learnMore="/pharmaceutical-translation"
              description={t("pharmaDesc")}
            />
            <ServiceCard
              label={t("portfolioLabel")}
              learnMore="/portfolio"
              description={t("portfolioDesc")}
            />
            <ServiceCard
              label={t("aboutLabel")}
              learnMore="/#about"
              description={t("aboutDesc")}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
