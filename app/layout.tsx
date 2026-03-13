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
  title: "Tre60 Grader | Ny webbplats kommer snart",
  description:
    "Tre60 Grader lanserar snart en ny webbplats. Kontakta oss redan nu för dekor och profil, skyddsfilm samt digitala verktyg och appar.",
  keywords: [
    "Tre60 Grader",
    "dekor",
    "profil",
    "solfilm",
    "skyddsfilm",
    "appar",
    "digitala verktyg",
  ],
  openGraph: {
    title: "Tre60 Grader",
    description:
      "Ny webbplats kommer snart. Kontakta Tre60 Grader redan nu för dekor, skyddsfilm och digitala verktyg.",
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
