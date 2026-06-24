import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Executive Portfolio | Digital Transformation Leader, Head IT & CIO/CTO",
  description: "Executive portfolio of a Digital Transformation Leader, CIO, and Head IT with 20+ years of expertise directing enterprise ERP implementations, digital strategies, and technology initiatives across FMCG, Manufacturing, Dairy, Pharma, and E-Commerce.",
  keywords: [
    "CIO Portfolio",
    "CTO Portfolio",
    "Digital Transformation Leader",
    "Head IT Portfolio",
    "ERP Transformation Expert",
    "Enterprise Technology Leader",
    "SAP ERP Implementation",
    "Oracle ERP Rollouts",
    "Supply Chain Digitization",
  ],
  authors: [{ name: "Executive Leader" }],
  openGraph: {
    title: "Executive Portfolio | Digital Transformation Leader & CIO",
    description: "20+ years driving enterprise transformation through technology, strategy, and innovation.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-ivory text-slate-text font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
