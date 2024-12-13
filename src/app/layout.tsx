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
    "Translation isn’t just a document that needs to be translated from one language to another. For us, it's so much more. It represents our effort to highlight the meaning behind your words.",
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
        id="beacon-1"
        type="text/javascript"
      >{`!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});`}</Script>
      <Script
        id="beacon-2"
        type="text/javascript"
      >{`window.Beacon('init', '47535534-3595-48a4-8975-bcf6433390e2')`}</Script>
    </html>
  );
}
