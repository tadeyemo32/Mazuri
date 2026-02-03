import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { siteUrl, defaultOgImage, siteName, defaultDescription } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
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
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} | Oil & Gas E&P | Nigeria & Africa`,
    description:
      "Oil and gas exploration and production. Funding and technical services to unlock value from assets. Focused on Africa, particularly Nigeria.",
    images: [
      {
        url: defaultOgImage.url,
        width: defaultOgImage.width,
        height: defaultOgImage.height,
        alt: defaultOgImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Oil & Gas E&P | Nigeria & Africa`,
    description:
      "Oil and gas exploration and production. Funding and technical services. Focused on Nigeria & Africa.",
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
      { url: "/apple-touch-icon-152x152.png", type: "image/png", sizes: "152x152" },
    ],
  },
  alternates: { canonical: siteUrl },
  category: "energy",
  verification: {
    google: "your-google-verification-code",
    other: { "msvalidate.01": "your-bing-verification-code" },
  },
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
        <main className="min-w-0" id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
