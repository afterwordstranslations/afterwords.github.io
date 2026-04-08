import type { Metadata } from "next";
import CertifiedTranslationsClient from "./PageClient";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export const metadata: Metadata = {
  title: "Certified & Sworn Translations in Greece",
  description:
    "Official certified and sworn translations accepted by all Greek authorities. Ionian University graduates, PEEMPIP certified members with official association seals. Legal, civil, educational, and immigration documents.",
  openGraph: {
    title: "Certified & Sworn Translations in Greece | Afterwords",
    description:
      "Get certified translations from Ionian University graduates. Sworn translations with official association seals accepted by all public and private authorities in Greece.",
    url: `${BASE_URL}/certified-translations`,
    images: [{ url: "/bg-stamp.jpg", width: 1200, height: 630, alt: "Certified Translations by Afterwords" }],
  },
  alternates: {
    canonical: `${BASE_URL}/certified-translations`,
  },
};

export default function CertifiedTranslationsPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          "Certified & Sworn Translation Services",
          "Official certified and sworn translations accepted by all Greek authorities. Legal, civil, educational, and immigration documents translated by Ionian University graduates.",
          `${BASE_URL}/certified-translations`
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: BASE_URL },
          { name: "Certified Translations", url: `${BASE_URL}/certified-translations` },
        ])}
      />
      <CertifiedTranslationsClient />
    </>
  );
}
