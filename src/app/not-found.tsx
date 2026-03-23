import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-md opacity-80" />
      <div className="wrap relative">
        <span className="label">
          <span className="h-px w-6 bg-brand" />
          404
        </span>
        <h1 className="mt-5 text-[clamp(72px,14vw,160px)] font-black leading-none tracking-tighter text-white/10">
          404
        </h1>
        <h2 className="-mt-4 text-4xl font-black tracking-tighter text-white sm:text-5xl">
          Page Not Found.
        </h2>
        <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-white/50">
          That page doesn&apos;t exist. Head back home to explore our services or give us a call.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="btn-red">
            <ArrowLeft size={15} strokeWidth={2.5} />
            Back to Home
          </Link>
          <Link href="/services" className="btn-outline-light">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
