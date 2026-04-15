import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import InterpretingClient from "./PageClient";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Interpreting" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `${BASE_URL}/${locale}/interpreting`,
      images: [{ url: "/bg-interpreting.jpg", width: 1200, height: 630, alt: t("ogImageAlt") }],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/interpreting`,
      languages: {
        en: `${BASE_URL}/en/interpreting`,
        el: `${BASE_URL}/el/interpreting`,
        "x-default": `${BASE_URL}/en/interpreting`,
      },
    },
  };
}

export default async function InterpretingPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Interpreting" });
  const tSEO = await getTranslations({ locale, namespace: "SEO" });

  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          t("jsonLdName"),
          t("jsonLdDescription"),
          `${BASE_URL}/${locale}/interpreting`
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: tSEO("home"), url: `${BASE_URL}/${locale}` },
          { name: t("breadcrumbName"), url: `${BASE_URL}/${locale}/interpreting` },
        ])}
      />
      <InterpretingClient />
    </>
  );
}
