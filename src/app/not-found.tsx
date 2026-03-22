import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="inline-block bg-accent px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
        404
      </span>
      <h1 className="editorial-title mt-6 text-5xl sm:text-6xl">Page Not Found</h1>
      <p className="mt-5 max-w-md text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist. Head home to explore our services and
        get in touch with the shop.
      </p>
      <Link href="/" className="btn-primary mt-10">
        Back to Home
      </Link>
    </section>
  );
}
