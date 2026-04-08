import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import Script from "next/script";

// If loading a variable font, you don't need to specify the font weight
const noto = Noto_Sans({ subsets: ["latin", "greek"] });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Afterwords - Professional Translation Services in Greece",
    template: "%s | Afterwords",
  },
  description:
    "Professional translation, interpreting, and subtitling services based in Athens, Greece. Certified translations, pharmaceutical, maritime, academic, and audiovisual translation.",
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
    locale: "en_US",
    url: BASE_URL,
    siteName: "Afterwords",
    title: "Afterwords - Professional Translation Services in Greece",
    description:
      "Professional translation, interpreting, and subtitling services based in Athens, Greece. Bridging the gap between the Greek market and the global stage.",
    images: [
      {
        url: "/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Afterwords - Professional Translation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afterwords - Professional Translation Services in Greece",
    description:
      "Professional translation, interpreting, and subtitling services based in Athens, Greece.",
    images: ["/bg.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: BASE_URL,
    types: {
      "application/rss+xml": "/blog/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
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
          >{`window.Beacon('init', '${process.env.NEXT_PUBLIC_HELPSCOUT_BEACON_ID}')`}</Script>
        </>
      )}
    </html>
  );
}
