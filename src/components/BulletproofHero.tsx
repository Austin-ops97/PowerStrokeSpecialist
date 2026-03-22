import { BUSINESS_INFO, STATS } from "@/lib/constants";
import StatCounter from "@/components/StatCounter";
import Image from "next/image";

export default function BulletproofHero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark">
      {/* Background texture */}
      <div className="absolute inset-0 bg-texture-carbon bg-carbon opacity-30" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="section-container relative grid items-center gap-16 py-0 lg:grid-cols-12 lg:gap-12">

        {/* Image column */}
        <div className="relative lg:col-span-6">
          <div className="relative overflow-hidden shadow-lift">
            {/* Red left accent stripe */}
            <div className="absolute left-0 top-0 z-10 h-full w-1.5 bg-accent" aria-hidden />
            <Image
              src="/images/bulletproof-engine.svg"
              alt="Ford Power Stroke bulletproofing and diesel engine reliability"
              width={900}
              height={600}
              className="h-auto w-full"
            />
            {/* Bottom label strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-accent px-5 py-3 pl-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                Signature Bulletproofing Program
              </p>
            </div>
          </div>
        </div>

        {/* Content column */}
        <div className="lg:col-span-6">
          <p className="section-eyebrow">Specialty Service</p>
          <div className="accent-divider" />
          <h2 className="editorial-title mt-6 text-4xl sm:text-5xl lg:text-6xl">
            Power Stroke Bulletproofing
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
            The work we&apos;re known for. Hundreds of Ford Power Stroke engines brought to a
            higher standard — head studs, cooling, oiling, and every weak point addressed so
            your truck earns its keep for the long haul.
          </p>

          {/* Stats */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary mt-10 inline-flex">
            Discuss Your Build &mdash; {BUSINESS_INFO.phoneFormatted}
          </a>
        </div>

      </div>
    </section>
  );
}
