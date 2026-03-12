import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tre60grader.se"),
  title: "Tre60 Grader | Design, produktion och digital utveckling",
  description:
    "Tre60 Grader skapar genomtänkta lösningar inom skylt, print, skyddsfilm, webb, appar och digitala verktyg.",
  keywords: [
    "Tre60 Grader",
    "skylt",
    "print",
    "solfilm",
    "skyddsfilm",
    "webb",
    "appar",
    "digitala verktyg",
  ],
  openGraph: {
    title: "Tre60 Grader",
    description:
      "Modern kreativ och teknisk partner inom design, produktion och digital utveckling.",
    url: "https://tre60grader.se",
    siteName: "Tre60 Grader",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
