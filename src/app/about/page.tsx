import CTABanner from "@/components/CTABanner";
import ReviewCard from "@/components/ReviewCard";
import ScrollReveal from "@/components/ScrollReveal";
import { BUSINESS_INFO, HOURS, REVIEWS } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import { BadgeCheck, Gauge, ShieldCheck, Truck, Wallet, Wrench } from "lucide-react";
import Image from "next/image";

export const metadata = buildMetadata(
  "About",
  "Learn why Baytown TX drivers trust Power Stroke Specialist for diesel service, bulletproofing, diagnostics, and honest full-service mechanic repairs.",
  "/about"
);

const values = [
  { label: "Honest pricing", icon: Wallet },
  { label: "Power Stroke experts", icon: Wrench },
  { label: "Modern diagnostics", icon: Gauge },
  { label: "Trusted across Texas", icon: ShieldCheck },
  { label: "No job too big or small", icon: BadgeCheck },
  { label: "Fleet experience", icon: Truck },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[52vh] items-end overflow-hidden pb-16 pt-32 sm:items-center sm:pb-20 sm:pt-24">
        <Image
          src="/images/hero-diesel.svg"
          alt="Power Stroke Specialist team and diesel repair"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark/35" />
        <div className="section-container relative z-10 pb-0">
          <p className="section-eyebrow">About</p>
          <div className="accent-rule mt-1" />
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-normal leading-tight tracking-tight text-text-white sm:text-6xl lg:text-[3.75rem]">
            Power Stroke Specialist
          </h1>
          <p className="mt-5 max-w-xl text-lg text-text-muted">Dedicated to vehicles that work for a living.</p>
        </div>
      </section>

      <section className="border-b border-border-subtle">
        <div className="section-container grid items-center gap-14 lg:grid-cols-2">
          <ScrollReveal>
            <p className="section-eyebrow">Our story</p>
            <div className="accent-rule mt-1" />
            <h2 className="mt-8 font-display text-4xl font-normal leading-tight text-text-white sm:text-5xl">
              Built on trust and experience
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
              We work on the full spectrum of vehicle issues—from daily drivers to diesels that never get a day off. Our
              team is technical, direct, and focused on outcomes you can feel on the road.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
              Finding a mechanic you trust shouldn&apos;t be a gamble. Customers from Baytown and across Texas choose us
              for straight answers and workmanship that holds up.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-hidden rounded-sm border border-border-strong bg-bg-dark-card shadow-lift ring-1 ring-white/5">
              <Image
                src="/images/shop-building.svg"
                alt="Power Stroke Specialist in Baytown Texas"
                width={900}
                height={560}
                className="h-auto w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border-subtle bg-bg-dark-card/40">
        <div className="section-container">
          <ScrollReveal>
            <p className="section-eyebrow">Standards</p>
            <div className="accent-rule mt-1" />
            <h2 className="mt-8 font-display text-4xl font-normal leading-tight text-text-white sm:text-5xl">
              What sets us apart
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, idx) => (
              <ScrollReveal key={value.label} delay={idx * 0.08}>
                <article className="flex gap-4 rounded-sm border border-border-subtle bg-bg-dark p-6 transition-colors hover:border-border-strong md:p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border-strong text-accent">
                    <value.icon size={20} strokeWidth={1.75} />
                  </span>
                  <p className="font-display text-lg font-normal text-text-white">{value.label}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-light border-y border-black/10">
        <div className="section-container">
          <article className="mx-auto max-w-2xl rounded-sm border border-black/10 bg-white p-8 shadow-[0_24px_60px_rgba(0,0,0,0.08)] md:p-10">
            <h2 className="text-center font-display text-3xl font-normal text-text-dark sm:text-4xl">Hours</h2>
            <div className="mt-8 space-y-2">
              {HOURS.map((entry) => (
                <div
                  key={entry.day}
                  className="flex items-center justify-between rounded-sm border border-black/10 px-4 py-3.5"
                >
                  <span className="text-text-dark">{entry.day}</span>
                  <span className="text-text-dark/60">{entry.hours}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-text-dark/55">Call to schedule during business hours.</p>
          </article>
        </div>
      </section>

      <section className="border-b border-border-subtle bg-bg-dark">
        <div className="section-container">
          <p className="section-eyebrow">Reviews</p>
          <div className="accent-rule mt-1" />
          <h2 className="mt-8 font-display text-4xl font-normal text-text-white sm:text-5xl">Trusted by real customers</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, idx) => (
              <ScrollReveal key={review.id} delay={idx * 0.08}>
                <ReviewCard name={review.name} text={review.text} rating={review.rating} />
              </ScrollReveal>
            ))}
          </div>
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-10 inline-flex"
          >
            Leave a review
          </a>
        </div>
      </section>

      <CTABanner
        heading="Ready to get your vehicle serviced?"
        subtext="Call today and we will help plan your next repair or upgrade."
        buttonText={`Call ${BUSINESS_INFO.phoneFormatted}`}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="accent"
      />
    </>
  );
}
