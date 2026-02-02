import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mazurienergy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mazuri Energy",
  description:
    "Mazuri Energy. Oil and gas exploration and production focused on Africa, particularly Nigeria. We find funding and provide technical services to asset owners, helping unlock value from oil and gas assets.",
  keywords: [
    "Mazuri Energy",
    "oil and gas",
    "exploration",
    "production",
    "E&P",
    "Nigeria",
    "Africa",
    "energy",
    "technical services",
    "asset owners",
    "funding",
  ],
  authors: [{ name: "Mazuri Energy", url: siteUrl }],
  creator: "Mazuri Energy",
  publisher: "Mazuri Energy",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mazuri Energy",
    title: "Mazuri Energy | Oil & Gas E&P | Nigeria & Africa",
    description:
      "Oil and gas exploration and production. Funding and technical services to unlock value from assets. Focused on Africa, particularly Nigeria.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Mazuri Energy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazuri Energy | Oil & Gas E&P | Nigeria & Africa",
    description: "Oil and gas exploration and production. Funding and technical services. Focused on Nigeria & Africa.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  alternates: { canonical: siteUrl },
  category: "energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#f7f8fa] text-[#1a365d] antialiased min-h-screen overflow-x-hidden">
        <JsonLd />
        <Navbar />
        <main className="min-w-0" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
