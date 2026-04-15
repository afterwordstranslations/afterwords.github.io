import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import GetAQuoteClient from "./PageClient";
import { JsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "GetAQuote" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `${BASE_URL}/${locale}/get-a-quote`,
      images: [{ url: "/bg.jpg", width: 1200, height: 630, alt: t("ogImageAlt") }],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/get-a-quote`,
      languages: {
        en: `${BASE_URL}/en/get-a-quote`,
        el: `${BASE_URL}/el/get-a-quote`,
        "x-default": `${BASE_URL}/en/get-a-quote`,
      },
    },
  };
}

export default async function GetAQuotePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "GetAQuote" });
  const tSEO = await getTranslations({ locale, namespace: "SEO" });

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: tSEO("home"), url: `${BASE_URL}/${locale}` },
          { name: t("breadcrumbName"), url: `${BASE_URL}/${locale}/get-a-quote` },
        ])}
      />
      <GetAQuoteClient />
    </>
  );
}
