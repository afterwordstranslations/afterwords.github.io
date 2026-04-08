import type { Metadata } from "next";
import AudiovisualTranslationClient from "./PageClient";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export const metadata: Metadata = {
  title: "Subtitling & Audiovisual Translation",
  description:
    "Professional subtitling and audiovisual translation services for TV series, feature films, documentaries, and film festivals. Ensuring the narrative remains sharp in every frame.",
  openGraph: {
    title: "Subtitling & Audiovisual Translation | Afterwords",
    description:
      "Professional subtitling and audiovisual translation for TV series, films, documentaries, and festivals. Cultural adaptation that keeps the narrative sharp.",
    url: `${BASE_URL}/audiovisual-translation`,
    images: [{ url: "/bg-cinema.jpg", width: 1200, height: 630, alt: "Audiovisual Translation by Afterwords" }],
  },
  alternates: {
    canonical: `${BASE_URL}/audiovisual-translation`,
  },
};

export default function AudiovisualTranslationPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          "Subtitling & Audiovisual Translation Services",
          "Professional subtitling and audiovisual translation for TV series, feature films, documentaries, and film festivals.",
          `${BASE_URL}/audiovisual-translation`
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: BASE_URL },
          { name: "Audiovisual Translation", url: `${BASE_URL}/audiovisual-translation` },
        ])}
      />
      <AudiovisualTranslationClient />
    </>
  );
}
