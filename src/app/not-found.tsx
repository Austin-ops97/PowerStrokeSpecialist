import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-container flex flex-col items-center justify-center text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-2 font-display text-5xl font-normal tracking-tight text-text-white">Page not found</h1>
      <p className="mt-4 max-w-xl text-text-muted">The page you are looking for does not exist. Head back home to view our services and contact information.</p>
      <Link href="/" className="btn-primary mt-8">
        Return Home
      </Link>
    </section>
  );
}
