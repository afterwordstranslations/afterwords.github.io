import type { Metadata } from "next";
import PharmaceuticalTranslationClient from "./PageClient";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export const metadata: Metadata = {
  title: "Pharmaceutical & Medical Translation",
  description:
    "Regulatory-compliant pharmaceutical and medical translation services. Clinical documentation, pharmacovigilance, patient-facing materials, and regulatory submissions translated with precision.",
  openGraph: {
    title: "Pharmaceutical & Medical Translation | Afterwords",
    description:
      "Regulatory-compliant pharmaceutical and medical translation for clinical documentation, pharmacovigilance, and regulatory submissions.",
    url: `${BASE_URL}/pharmaceutical-translation`,
    images: [{ url: "/bg-clinical.jpg", width: 1200, height: 630, alt: "Pharmaceutical Translation by Afterwords" }],
  },
  alternates: {
    canonical: `${BASE_URL}/pharmaceutical-translation`,
  },
};

export default function PharmaceuticalTranslationPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          "Pharmaceutical & Medical Translation Services",
          "Regulatory-compliant pharmaceutical and medical translation for clinical documentation, pharmacovigilance, patient-facing materials, and regulatory submissions.",
          `${BASE_URL}/pharmaceutical-translation`
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: BASE_URL },
          { name: "Pharmaceutical Translation", url: `${BASE_URL}/pharmaceutical-translation` },
        ])}
      />
      <PharmaceuticalTranslationClient />
    </>
  );
}
