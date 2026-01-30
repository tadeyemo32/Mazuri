import Link from "next/link";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 bg-[var(--color-bg)] text-[var(--color-text)]">
      <Link href="/" className="mb-12 block">
        <Image
          src="/mazuri.jpg"
          alt="Mazuri Energy"
          width={200}
          height={60}
          className="h-12 w-auto object-contain"
        />
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Coming soon
      </h1>
      <p className="text-[var(--color-text-muted)] text-center max-w-md mb-10">
        We&apos;re working on something new. Check back later.
      </p>
      <Link
        href="/"
        className="text-[var(--color-gold)] font-semibold hover:underline"
      >
        Back to home
      </Link>
    </section>
  );
}
