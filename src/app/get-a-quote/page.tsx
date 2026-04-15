import type { Metadata } from "next";
import GetAQuoteClient from "./PageClient";
import { JsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export const metadata: Metadata = {
  title: "Get a Free Translation Quote | Afterwords",
  description:
    "Request a free translation quote from Afterwords. Tell us about your project — certified translations, interpreting, subtitling — and get a response via email, WhatsApp, or our contact form.",
  openGraph: {
    title: "Get a Free Translation Quote | Afterwords",
    description:
      "Tell us about your translation project and choose your preferred way to get in touch. Free quotes for certified translations, interpreting, and subtitling services.",
    url: `${BASE_URL}/get-a-quote`,
    images: [
      {
        url: "/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Get a Translation Quote from Afterwords",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/get-a-quote`,
  },
};

export default function GetAQuotePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: BASE_URL },
          { name: "Get a Quote", url: `${BASE_URL}/get-a-quote` },
        ])}
      />
      <GetAQuoteClient />
    </>
  );
}
