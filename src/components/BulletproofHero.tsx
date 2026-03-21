import { BUSINESS_INFO, STATS } from "@/lib/constants";
import StatCounter from "@/components/StatCounter";
import Image from "next/image";

export default function BulletproofHero() {
  return (
    <section className="relative overflow-hidden border-y border-border-subtle bg-bg-dark">
      <div className="absolute inset-0 bg-line-grid bg-grid opacity-25" />
      <div className="absolute inset-0 bg-mesh-dark" />

      <div className="section-container relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-3 top-6 hidden h-24 w-1 bg-accent lg:block" aria-hidden />
          <div className="overflow-hidden rounded-sm border border-border-strong bg-bg-dark-card shadow-lift ring-1 ring-white/5">
            <Image
              src="/images/bulletproof-engine.svg"
              alt="Ford Power Stroke bulletproofing upgrades and diesel engine reliability"
              width={900}
              height={600}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="section-eyebrow">Signature program</p>
          <div className="accent-rule mt-1" />
          <h2 className="mt-8 font-display text-4xl font-normal leading-[1.05] tracking-tight text-text-white sm:text-5xl lg:text-[3.25rem]">
            Power Stroke <span className="text-accent">bulletproofing</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
            The work we&apos;re known for—hundreds of Ford Power Stroke engines brought to a higher standard. 6.0L or 7.3L,
            we address the failure points that matter so your truck earns back your confidence.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary mt-10 inline-flex">
            Discuss your build — {BUSINESS_INFO.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
