import type { Metadata } from "next";
import AcademicTranslationClient from "./PageClient";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export const metadata: Metadata = {
  title: "Academic & Book Translation Services",
  description:
    "High-quality academic and book translation services preserving intellectual rigor, nuance, and voice of scholarly works. Specialized in academic publications, research papers, and educational materials.",
  openGraph: {
    title: "Academic & Book Translation Services | Afterwords",
    description:
      "High-quality translations preserving intellectual rigor and voice of scholarly works for academic publication and research.",
    url: `${BASE_URL}/academic-translation`,
    images: [{ url: "/bg-academic.jpg", width: 1200, height: 630, alt: "Academic Translation by Afterwords" }],
  },
  alternates: {
    canonical: `${BASE_URL}/academic-translation`,
  },
};

export default function AcademicTranslationPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          "Academic & Book Translation Services",
          "High-quality academic and book translation services preserving intellectual rigor, nuance, and voice of scholarly works for academic publication.",
          `${BASE_URL}/academic-translation`
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: BASE_URL },
          { name: "Academic Translation", url: `${BASE_URL}/academic-translation` },
        ])}
      />
      <AcademicTranslationClient />
    </>
  );
}
