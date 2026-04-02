import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import Script from "next/script";

// If loading a variable font, you don't need to specify the font weight
const noto = Noto_Sans({ subsets: ["latin", "greek"] });

export const metadata: Metadata = {
  title:
    "Afterwords - Translations, subtitles & interpretations in various languages",
  description:
    "Translation isn’t just a document that needs to be translated from one language to another. For us, it’s so much more. It represents our effort to highlight the meaning behind your words.",
  alternates: {
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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5NHQFR2NKS"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5NHQFR2NKS');
      `}</Script>
      <Script
        id="beacon-1"
        type="text/javascript"
      >{`!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});`}</Script>
      <Script
        id="beacon-2"
        type="text/javascript"
      >{`window.Beacon('init', '59d3cf5c-2a28-4cd5-a299-7cc71501140d')`}</Script>
    </html>
  );
}
