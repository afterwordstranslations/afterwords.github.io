import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

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
    </html>
  );
}
