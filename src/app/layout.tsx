import "./globals.css";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { getLocale } from "next-intl/server";

const noto = Noto_Sans({ subsets: ["latin", "greek"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${noto.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
