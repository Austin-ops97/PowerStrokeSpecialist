import { BUSINESS_INFO, STATS } from "@/lib/constants";
import StatCounter from "@/components/StatCounter";
import Image from "next/image";

export default function BulletproofHero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark py-20">
      <div className="absolute inset-0 bg-texture-carbon bg-carbon opacity-10" />
      <div className="section-container relative grid items-center gap-10 py-0 lg:grid-cols-2">
        <Image
          src="/images/bulletproof-engine.svg"
          alt="Ford Power Stroke bulletproofing upgrades and diesel engine reliability"
          width={900}
          height={600}
          className="h-auto w-full rounded-xl border border-border-subtle"
        />

        <div>
          <p className="section-eyebrow">Signature Specialty</p>
          <div className="accent-divider" />
          <h2 className="mt-4 font-display text-5xl uppercase leading-none text-accent sm:text-6xl">
            Power Stroke Bulletproofing
          </h2>
          <p className="mt-6 text-text-muted">
            This is what we&apos;re known for. We&apos;ve bulletproofed hundreds of Ford Power Stroke engines, removing every
            weak spot so you get a vehicle you can depend on. 6.0L or 7.3L - we&apos;ve mastered this work.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary mt-7 inline-flex">
            Call To Discuss Your Build - {BUSINESS_INFO.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
