import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mazuri Energy | Oil & Gas E&P",
  description: "Mazuri Energy. Oil and gas exploration and production focused on Africa, particularly Nigeria. Funding and technical services to unlock value from assets.",
  keywords: ["Mazuri Energy", "oil", "gas", "exploration", "production", "Nigeria", "Africa", "E&P"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#f7f8fa] text-[#1a365d] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
