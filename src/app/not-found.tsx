import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="wrap flex min-h-[80vh] flex-col items-start justify-center py-20">
        <span className="label">
          <span className="h-px w-5 bg-navy" />
          404
        </span>
        <h1 className="mt-5 text-[clamp(80px,18vw,200px)] font-black leading-none tracking-tighter text-slate-100">
          404
        </h1>
        <h2 className="-mt-3 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
          Page Not Found.
        </h2>
        <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-slate-500">
          That page doesn&apos;t exist. Head back home to explore our services or give us a call.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="btn-navy">
            <ArrowLeft size={15} strokeWidth={2.5} />
            Back to Home
          </Link>
          <Link href="/services" className="btn-outline">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
