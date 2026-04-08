import type { Metadata } from "next";
import InterpretingClient from "./PageClient";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export const metadata: Metadata = {
  title: "Professional Interpreting Services",
  description:
    "Professional interpreting services for conferences, business meetings, legal proceedings, and events. Simultaneous and consecutive interpretation in Greek, English, Spanish, and more.",
  openGraph: {
    title: "Professional Interpreting Services | Afterwords",
    description:
      "Professional interpreting services for conferences, business meetings, and events. Simultaneous and consecutive interpretation by experienced linguists.",
    url: `${BASE_URL}/interpreting`,
    images: [{ url: "/bg-interpreting.jpg", width: 1200, height: 630, alt: "Interpreting Services by Afterwords" }],
  },
  alternates: {
    canonical: `${BASE_URL}/interpreting`,
  },
};

export default function InterpretingPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          "Professional Interpreting Services",
          "Simultaneous and consecutive interpreting for conferences, business meetings, legal proceedings, and events in multiple languages.",
          `${BASE_URL}/interpreting`
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: BASE_URL },
          { name: "Interpreting Services", url: `${BASE_URL}/interpreting` },
        ])}
      />
      <InterpretingClient />
    </>
  );
}
