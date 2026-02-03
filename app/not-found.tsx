import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-[#1a365d] mb-2">404</h1>
      <p className="text-[#1a365d]/80 mb-8">Page not found.</p>
      <Link
        href="/"
        className="text-[#e5a00d] font-semibold hover:underline"
      >
        Back to home
      </Link>
    </main>
  );
}
