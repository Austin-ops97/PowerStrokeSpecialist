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
  { label: "Honest, transparent pricing", icon: Wallet },
  { label: "Power Stroke experts on staff", icon: Wrench },
  { label: "Advanced diagnostics equipment", icon: Gauge },
  { label: "Trusted across Texas", icon: ShieldCheck },
  { label: "No job too big or small", icon: BadgeCheck },
  { label: "Fleet vehicle support", icon: Truck },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative flex min-h-[52vh] items-end overflow-hidden pb-16 pt-32 sm:items-center sm:pb-24">
        <Image
          src="/images/hero-diesel.svg"
          alt="Power Stroke Specialist team and diesel repair"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/85 to-bg-dark/50" />
        <div className="absolute inset-0 bg-mesh-hero opacity-40" />
        {/* Red side accent */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-accent" aria-hidden />
        <div className="section-container relative z-10 py-0">
          <p className="section-eyebrow">Our Shop</p>
          <div className="accent-divider" />
          <h1 className="editorial-title mt-6 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">
            About Power Stroke Specialist
          </h1>
          <p className="mt-5 max-w-xl text-lg text-text-muted">
            Dedicated to vehicles that work for a living.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-container grid items-center gap-16 lg:grid-cols-2">
        <ScrollReveal>
          <p className="section-eyebrow">Our Story</p>
          <div className="accent-divider" />
          <h2 className="editorial-title mt-6 text-4xl sm:text-5xl">Built on Trust and Experience</h2>
          <p className="mt-6 text-text-muted leading-relaxed">
            We work on and fix all sorts of vehicle issues. Our team is knowledgeable, skilled,
            and dedicated to making vehicles run like new — every time.
          </p>
          <p className="mt-4 text-text-muted leading-relaxed">
            We know how hard it can be to find a trustworthy mechanic. That&apos;s why customers
            from Baytown and across Texas choose us for straight answers and workmanship that holds up.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative overflow-hidden shadow-lift">
            <div className="absolute left-0 top-0 z-10 h-full w-1.5 bg-accent" aria-hidden />
            <Image
              src="/images/shop-building.svg"
              alt="Power Stroke Specialist building and service bays in Baytown Texas"
              width={900}
              height={560}
              className="h-auto w-full"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* What sets us apart — light section */}
      <section className="bg-surface border-y border-border-light">
        <div className="section-container">
          <ScrollReveal>
            <p className="section-eyebrow">Our Standards</p>
            <div className="accent-divider" />
            <h2 className="editorial-title mt-6 text-4xl text-text-dark sm:text-5xl">What Sets Us Apart</h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, idx) => (
              <ScrollReveal key={value.label} delay={idx * 0.08}>
                <article className="flex items-start gap-4 bg-white border border-border-light p-6 shadow-card-light transition-shadow hover:shadow-lift-light">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent text-white">
                    <value.icon size={18} strokeWidth={2} />
                  </span>
                  <p className="mt-1 font-bold text-text-dark">{value.label}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="section-container">
        <div className="mx-auto max-w-2xl border-l-4 border-accent bg-bg-dark-card p-10 md:p-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Shop Hours</h2>
          <div className="mt-8 divide-y divide-white/[0.06]">
            {HOURS.map((entry) => (
              <div
                key={entry.day}
                className="flex items-center justify-between py-3.5 text-sm"
              >
                <span className="font-semibold text-white">{entry.day}</span>
                <span className={`font-medium ${entry.isOpen ? "text-text-muted" : "text-text-muted/50"}`}>
                  {entry.hours}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Call during business hours to schedule your appointment.
          </p>
        </div>
      </section>

      {/* Reviews — light section */}
      <section className="bg-surface border-y border-border-light">
        <div className="section-container">
          <p className="section-eyebrow">Reviews</p>
          <div className="accent-divider" />
          <h2 className="editorial-title mt-6 text-4xl text-text-dark sm:text-5xl">From Our Customers</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, idx) => (
              <ScrollReveal key={review.id} delay={idx * 0.08}>
                <ReviewCard name={review.name} text={review.text} rating={review.rating} light />
              </ScrollReveal>
            ))}
          </div>
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-dark mt-10 inline-flex"
          >
            Leave a Review
          </a>
        </div>
      </section>

      <CTABanner
        heading="Book Your Next Visit"
        subtext="Call today and we'll get you back on the road with confidence."
        buttonText={BUSINESS_INFO.phoneFormatted}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="accent"
      />
    </>
  );
}
