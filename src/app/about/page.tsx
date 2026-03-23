import CTABanner from "@/components/CTABanner";
import ReviewCard from "@/components/ReviewCard";
import ScrollReveal from "@/components/ScrollReveal";
import { BUSINESS_INFO, HOURS, REVIEWS } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import { BadgeCheck, Gauge, ShieldCheck, Truck, Wallet, Wrench } from "lucide-react";
import Image from "next/image";

export const metadata = buildMetadata(
  "About",
  "Learn why Baytown TX drivers trust Power Stroke Specialist for honest diesel service, Power Stroke bulletproofing, and complete auto repair.",
  "/about"
);

const values = [
  { icon: Wallet,      label: "Honest Pricing",          sub: "No surprises. You know the cost upfront." },
  { icon: Wrench,      label: "Power Stroke Experts",     sub: "Deep Ford 6.0L and 7.3L specialization." },
  { icon: Gauge,       label: "Advanced Diagnostics",     sub: "We find the real problem — not a guess." },
  { icon: ShieldCheck, label: "Trusted Across Texas",     sub: "Customers drive from all over to see us." },
  { icon: BadgeCheck,  label: "Any Size Job",             sub: "Oil changes to full engine rebuilds." },
  { icon: Truck,       label: "Fleet Support",            sub: "Keep your commercial vehicles running." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header — slate-50 */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="wrap section-pad">
          <span className="label">
            <span className="h-px w-5 bg-navy" />
            Our Shop
          </span>
          <h1 className="mt-5 text-[clamp(40px,7vw,80px)] font-black leading-[0.93] tracking-tighter text-slate-900">
            About Power Stroke<br />
            <span className="text-navy">Specialist.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-slate-500">
            A dedicated diesel mechanic shop in Baytown, Texas built on honest work, real expertise, and results that hold up.
          </p>
        </div>
      </section>

      {/* Story + photo — white */}
      <section className="bg-white">
        <div className="wrap section-pad">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* Left — text */}
            <ScrollReveal>
              <span className="label">
                <span className="h-px w-5 bg-navy" />
                Our Story
              </span>
              <h2 className="mt-5 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
                Built on Trust<br />and Experience.
              </h2>
              <p className="mt-6 text-base font-medium leading-relaxed text-slate-500">
                We work on and fix all sorts of vehicle issues. Our team is knowledgeable, skilled,
                and dedicated to making vehicles run like new again.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-500">
                Finding a trustworthy mechanic is hard. That&apos;s why customers from Baytown and
                across Texas choose us for straight answers and workmanship that holds up.
              </p>

              {/* Stat pills */}
              <div className="mt-9 grid grid-cols-3 divide-x divide-slate-200 border border-slate-200">
                {[
                  { v: "100+", l: "Engines" },
                  { v: "10+",  l: "Years" },
                  { v: "13",   l: "Services" },
                ].map((s) => (
                  <div key={s.l} className="px-5 py-5 text-center">
                    <p className="text-3xl font-black tracking-tight text-navy">{s.v}</p>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-slate-400">{s.l}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right — shop photo */}
            <ScrollReveal delay={0.1}>
              <div className="relative">
                {/* Offset decorative border */}
                <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-navy/15" />
                <div className="relative h-[380px] overflow-hidden border border-slate-200 sm:h-[460px]">
                  <Image
                    src="https://2pbqjgxycewduhvh.public.blob.vercel-storage.com/PowerStroke/Screenshot%202026-03-23%20at%2010.19.10%E2%80%AFAM.png"
                    alt="Power Stroke Specialist shop exterior in Baytown, Texas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Caption bar */}
                  <div className="absolute inset-x-0 bottom-0 bg-navy px-5 py-3">
                    <p className="text-xs font-bold text-white/80">
                      711 Massey Tompkins Rd &nbsp;·&nbsp; Baytown, TX 77521
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values — slate-50 */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="wrap section-pad">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-5 bg-navy" />
              Our Standards
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
              What Sets Us Apart.
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.label} delay={i * 0.06}>
                <div className="border border-slate-200 bg-white p-7 transition-shadow hover:shadow-card">
                  <v.icon size={22} strokeWidth={2} className="text-navy" />
                  <h3 className="mt-4 text-base font-black text-slate-900">{v.label}</h3>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-500">{v.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hours — white */}
      <section className="bg-white">
        <div className="wrap section-pad">
          <div className="mx-auto max-w-2xl">
            <ScrollReveal>
              <span className="label">
                <span className="h-px w-5 bg-navy" />
                Hours
              </span>
              <h2 className="mt-5 text-4xl font-black tracking-tighter text-slate-900">Shop Hours.</h2>
            </ScrollReveal>
            <div className="mt-8 divide-y divide-slate-100 border border-slate-200">
              {HOURS.map((e) => (
                <div key={e.day} className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm font-bold text-slate-900">{e.day}</span>
                  <span className={`text-sm font-semibold ${e.isOpen ? "text-navy" : "text-slate-300"}`}>
                    {e.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews — slate-50 */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="wrap section-pad">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-5 bg-navy" />
              Reviews
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
              From Our Customers.
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <ScrollReveal key={r.id} delay={i * 0.08}>
                <ReviewCard name={r.name} text={r.text} rating={r.rating} />
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8">
            <a href={BUSINESS_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Leave a Review on Facebook
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Book Your Next Visit."
        subtext="Call today and we'll get you back on the road with confidence."
        buttonText={BUSINESS_INFO.phoneFormatted}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="action"
      />
    </>
  );
}
