import { BUSINESS_INFO } from "@/lib/constants";
import CounterStat from "@/components/CounterStat";
import Image from "next/image";

export default function BulletproofSection() {
  return (
    <section className="relative overflow-hidden bg-primary-light">
      <div className="industrial-overlay absolute inset-0 opacity-40" />
      <div className="section-container relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <Image
            src="/images/bulletproof-engine.svg"
            alt="Ford Power Stroke bulletproofing diesel engine reliability upgrade"
            width={800}
            height={500}
            className="h-auto w-full rounded-xl border border-border"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Signature Specialty</p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">Power Stroke Bulletproofing</h2>
          <p className="mt-5 text-text-muted">
            This is what we&apos;re known for. We&apos;ve bulletproofed hundreds of Ford Power Stroke engines, removing weak
            points so you get reliability you can count on. Whether you have a 6.0L or 7.3L, our team has mastered
            this process.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary">
              Call To Discuss Your Build - {BUSINESS_INFO.phoneFormatted}
            </a>
            <CounterStat to={250} label="engines bulletproofed" />
          </div>
        </div>
      </div>
    </section>
  );
}
