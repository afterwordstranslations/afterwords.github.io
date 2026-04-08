import type { Metadata } from "next";
import PortfolioClient from "./PageClient";
import { JsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore our translation portfolio spanning medical, scientific, maritime, legal, audiovisual, and academic sectors. See the breadth and quality of our professional translation work.",
  openGraph: {
    title: "Our Portfolio | Afterwords",
    description:
      "Explore our translation portfolio spanning medical, scientific, maritime, legal, audiovisual, and academic sectors.",
    url: `${BASE_URL}/portfolio`,
    images: [{ url: "/bg.jpg", width: 1200, height: 630, alt: "Afterwords Translation Portfolio" }],
  },
  alternates: {
    canonical: `${BASE_URL}/portfolio`,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: BASE_URL },
          { name: "Portfolio", url: `${BASE_URL}/portfolio` },
        ])}
      />
      <PortfolioClient />
    </>
  );
}
