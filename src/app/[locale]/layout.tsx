import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import { routing } from "~/i18n/routing";
import { EmailOverlayProvider } from "~/components/EmailOverlay";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t("title"),
      template: "%s | Afterwords",
    },
    description: t("description"),
    keywords: [
      "translation services",
      "certified translation",
      "Greek translation",
      "interpreting services",
      "subtitling",
      "sworn translation Greece",
      "pharmaceutical translation",
      "maritime translation",
      "academic translation",
    ],
    authors: [{ name: "Afterwords" }],
    creator: "Afterwords",
    openGraph: {
      type: "website",
      locale: locale === "el" ? "el_GR" : "en_US",
      url: `${BASE_URL}/${locale}`,
      siteName: "Afterwords",
      title: t("title"),
      description: t("ogDescription"),
      images: [
        {
          url: "/bg.jpg",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/bg.jpg"],
    },
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        el: `${BASE_URL}/el`,
        "x-default": `${BASE_URL}/en`,
      },
      types: {
        "application/rss+xml": `/${locale}/blog/feed.xml`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <EmailOverlayProvider>
        {children}
      </EmailOverlayProvider>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}</Script>
        </>
      )}
      {process.env.NEXT_PUBLIC_HELPSCOUT_BEACON_ID && (
        <>
          <Script
            id="beacon-1"
            type="text/javascript"
          >{`!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});`}</Script>
          <Script
            id="beacon-2"
            type="text/javascript"
          >{`window.Beacon('init', '${process.env.NEXT_PUBLIC_HELPSCOUT_BEACON_ID}'); window.Beacon('config', {display: {style: 'manual'}})`}</Script>
        </>
      )}
    </NextIntlClientProvider>
  );
}
