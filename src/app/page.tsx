import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { JsonLd, organizationJsonLd, localBusinessJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export const metadata: Metadata = {
  title: "Afterwords - Professional Translation Services in Greece",
  description:
    "Professional translation, interpreting, and subtitling services based in Athens, Greece. A boutique agency with over 10 years of specialized experience bridging the Greek market and the global stage.",
  openGraph: {
    title: "Afterwords - Professional Translation Services in Greece",
    description:
      "Bridging the gap between the Greek market and the global stage. Certified translations, interpreting, subtitling, and specialized industry translations.",
    url: BASE_URL,
    images: [{ url: "/bg.jpg", width: 1200, height: 630, alt: "Afterwords - Professional Translation Services" }],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={localBusinessJsonLd()} />
      <HomeClient />
    </>
  );
}
