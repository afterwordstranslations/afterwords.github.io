import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import MaritimeTranslationClient from "./PageClient";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Maritime" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `${BASE_URL}/${locale}/maritime-translation`,
      images: [{ url: "/bg-maritime.jpg", width: 1200, height: 630, alt: t("ogImageAlt") }],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/maritime-translation`,
      languages: {
        en: `${BASE_URL}/en/maritime-translation`,
        el: `${BASE_URL}/el/maritime-translation`,
        "x-default": `${BASE_URL}/en/maritime-translation`,
      },
    },
  };
}

export default async function MaritimeTranslationPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Maritime" });
  const tSEO = await getTranslations({ locale, namespace: "SEO" });

  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          t("jsonLdName"),
          t("jsonLdDescription"),
          `${BASE_URL}/${locale}/maritime-translation`
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: tSEO("home"), url: `${BASE_URL}/${locale}` },
          { name: t("breadcrumbName"), url: `${BASE_URL}/${locale}/maritime-translation` },
        ])}
      />
      <MaritimeTranslationClient />
    </>
  );
}
