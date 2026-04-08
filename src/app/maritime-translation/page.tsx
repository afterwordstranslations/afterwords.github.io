import type { Metadata } from "next";
import MaritimeTranslationClient from "./PageClient";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export const metadata: Metadata = {
  title: "Maritime Translation Services",
  description:
    "Specialized maritime translation services for shipowners, crewing managers, and maritime law firms. Technical and legal maritime documentation translated with industry expertise.",
  openGraph: {
    title: "Maritime Translation Services | Afterwords",
    description:
      "Technical and legal maritime translation for shipowners, crewing managers, and maritime law firms. Deep industry knowledge meets linguistic precision.",
    url: `${BASE_URL}/maritime-translation`,
    images: [{ url: "/bg-maritime.jpg", width: 1200, height: 630, alt: "Maritime Translation by Afterwords" }],
  },
  alternates: {
    canonical: `${BASE_URL}/maritime-translation`,
  },
};

export default function MaritimeTranslationPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          "Maritime Translation Services",
          "Technical and legal maritime translation for shipowners, crewing managers, and maritime law firms.",
          `${BASE_URL}/maritime-translation`
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: BASE_URL },
          { name: "Maritime Translation", url: `${BASE_URL}/maritime-translation` },
        ])}
      />
      <MaritimeTranslationClient />
    </>
  );
}
