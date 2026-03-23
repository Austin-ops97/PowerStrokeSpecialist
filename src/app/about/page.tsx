import CTABanner from "@/components/CTABanner";
import ReviewCard from "@/components/ReviewCard";
import ScrollReveal from "@/components/ScrollReveal";
import { BUSINESS_INFO, HOURS, REVIEWS } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import { BadgeCheck, Gauge, ShieldCheck, Truck, Wallet, Wrench } from "lucide-react";

export const metadata = buildMetadata(
  "About",
  "Learn why Baytown TX drivers trust Power Stroke Specialist for diesel service, bulletproofing, diagnostics, and honest full-service mechanic repairs.",
  "/about"
);

const values = [
  { label: "Honest, transparent pricing", sub: "No surprises on your invoice.", icon: Wallet },
  { label: "Power Stroke experts", sub: "Deep knowledge of Ford 6.0L and 7.3L engines.", icon: Wrench },
  { label: "Advanced diagnostics", sub: "We find the real problem, not a guess.", icon: Gauge },
  { label: "Trusted across Texas", sub: "Customers drive from all over to see us.", icon: ShieldCheck },
  { label: "No job too big or small", sub: "Oil changes to full engine rebuilds.", icon: BadgeCheck },
  { label: "Fleet vehicle support", sub: "Keep your commercial vehicles running.", icon: Truck },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero — black */}
      <section className="relative bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-md opacity-80" />
        <div className="wrap section-pad relative">
          <span className="label">
            <span className="h-px w-6 bg-brand" />
            Our Shop
          </span>
          <h1 className="mt-5 text-[clamp(44px,7vw,88px)] font-black leading-[0.92] tracking-tighter text-white">
            About Power Stroke<br />
            <span className="text-brand">Specialist.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base font-medium leading-relaxed text-white/50">
            A dedicated diesel and Power Stroke repair shop in Baytown, Texas. Honest work,
            real expertise, and results that hold up.
          </p>
        </div>
      </section>

      {/* Story — white */}
      <section className="bg-chalk-card border-y border-zinc-100">
        <div className="wrap section-pad">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <ScrollReveal>
              <span className="label">
                <span className="h-px w-6 bg-brand" />
                Our Story
              </span>
              <h2 className="mt-5 text-4xl font-black tracking-tighter text-ink sm:text-5xl">
                Built on Trust<br />and Experience.
              </h2>
              <p className="mt-6 text-base font-medium leading-relaxed text-zinc-500">
                We work on and fix all sorts of vehicle issues. Our team is knowledgeable, skilled,
                and dedicated to making vehicles run like new.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-zinc-500">
                We know how hard it can be to find a trustworthy mechanic. That&apos;s why customers
                from Baytown and across Texas choose us for straight answers and workmanship that holds up.
              </p>
            </ScrollReveal>

            {/* Stats panel */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-2 gap-px bg-zinc-100">
                {[
                  { value: "100+", label: "Engines Bulletproofed" },
                  { value: "10+", label: "Years in Business" },
                  { value: "13", label: "Services Offered" },
                  { value: "2", label: "Engine Types Specialized" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white px-8 py-10">
                    <p className="text-5xl font-black tracking-tighter text-brand">{stat.value}</p>
                    <p className="mt-2 text-sm font-bold text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values — dark */}
      <section className="relative bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-md opacity-60" />
        <div className="wrap section-pad relative">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-6 bg-brand" />
              Our Standards
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tighter text-white sm:text-5xl">
              What Sets Us Apart.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-px bg-ink-border sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, idx) => (
              <ScrollReveal key={value.label} delay={idx * 0.07}>
                <div className="bg-ink-card p-8">
                  <value.icon size={22} strokeWidth={2} className="text-brand" />
                  <h3 className="mt-5 text-lg font-black text-white">{value.label}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-white/40">{value.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hours — white */}
      <section className="bg-chalk-card border-y border-zinc-100">
        <div className="wrap section-pad">
          <div className="mx-auto max-w-2xl">
            <ScrollReveal>
              <span className="label">
                <span className="h-px w-6 bg-brand" />
                Hours
              </span>
              <h2 className="mt-5 text-4xl font-black tracking-tighter text-ink sm:text-5xl">Shop Hours.</h2>
            </ScrollReveal>
            <div className="mt-10 divide-y divide-zinc-100">
              {HOURS.map((entry) => (
                <div key={entry.day} className="flex items-center justify-between py-4">
                  <span className="text-sm font-bold text-ink">{entry.day}</span>
                  <span className={`text-sm font-semibold ${entry.isOpen ? "text-zinc-500" : "text-zinc-300"}`}>
                    {entry.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews — gray */}
      <section className="bg-chalk">
        <div className="wrap section-pad">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-6 bg-brand" />
              Reviews
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tighter text-ink sm:text-5xl">
              From Our Customers.
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, idx) => (
              <ScrollReveal key={review.id} delay={idx * 0.08}>
                <ReviewCard name={review.name} text={review.text} rating={review.rating} />
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10">
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark"
            >
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
        variant="red"
      />
    </>
  );
}
