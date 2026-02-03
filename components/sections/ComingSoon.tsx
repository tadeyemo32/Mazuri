import Link from "next/link";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 py-24 bg-[var(--color-bg)] text-[var(--color-text)]">
      <Link href="/" className="mb-12 block min-h-[44px] flex items-center touch-manipulation" aria-label="Mazuri Energy home">
        <Image
          src="/logo.png"
          alt="Mazuri Energy"
          width={200}
          height={60}
          className="h-12 w-auto object-contain"
        />
      </Link>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 px-2">
        Coming soon
      </h1>
      <p className="text-[var(--color-text-muted)] text-center max-w-md mb-10 px-2 text-sm sm:text-base">
        We&apos;re working on something new. Check back later.
      </p>
      <Link
        href="/"
        className="text-[var(--color-gold)] font-semibold hover:underline min-h-[44px] inline-flex items-center justify-center py-2 touch-manipulation"
      >
        Back to home
      </Link>
    </section>
  );
}
