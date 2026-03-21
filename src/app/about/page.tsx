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
  { label: "Honest Pricing", icon: Wallet },
  { label: "Power Stroke Experts", icon: Wrench },
  { label: "State-of-the-Art Diagnostics", icon: Gauge },
  { label: "Trusted Across Texas", icon: ShieldCheck },
  { label: "No Job Too Big or Small", icon: BadgeCheck },
  { label: "Fleet Vehicle Experts", icon: Truck },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[56vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-diesel.svg"
          alt="Power Stroke Specialist team and diesel repair lifestyle scene"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-4 text-center">
          <h1 className="font-display text-5xl uppercase text-text-white sm:text-6xl">About Power Stroke Specialist</h1>
          <p className="mt-4 text-text-muted">Dedicated to keeping your vehicles running like new</p>
        </div>
      </section>

      <section className="section-container grid items-center gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <p className="section-eyebrow">Our Story</p>
          <div className="accent-divider" />
          <h2 className="mt-4 font-display text-5xl uppercase text-text-white">Built on Trust and Experience</h2>
          <p className="mt-5 text-text-muted">
            We work on and fix all sorts of vehicle issues. Our team is knowledgeable, skilled, and dedicated to
            making vehicles run like new.
          </p>
          <p className="mt-4 text-text-muted">
            We understand how hard it can be to find a trustworthy mechanic. That&apos;s why customers from Baytown and
            across Texas trust us for no-nonsense service and quality workmanship.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <Image
            src="/images/shop-building.svg"
            alt="Power Stroke Specialist building and service bays in Baytown Texas"
            width={900}
            height={560}
            className="h-auto w-full rounded-xl border border-border-subtle"
          />
        </ScrollReveal>
      </section>

      <section className="section-container pt-0">
        <ScrollReveal>
          <p className="section-eyebrow">Why Choose Us</p>
          <div className="accent-divider" />
          <h2 className="mt-4 font-display text-5xl uppercase text-text-white">What Sets Us Apart</h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, idx) => (
            <ScrollReveal key={value.label} delay={idx * 0.1}>
              <article className="card-base flex items-start gap-3">
                <span className="rounded-full bg-accent/10 p-3 text-accent">
                  <value.icon size={20} />
                </span>
                <p className="font-semibold text-text-white">{value.label}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-container pt-0">
        <article className="mx-auto max-w-2xl rounded-xl border border-border-subtle bg-bg-dark-card p-8">
          <h2 className="text-center font-display text-4xl uppercase text-text-white">Hours of Operation</h2>
          <div className="mt-6 space-y-2">
            {HOURS.map((entry) => (
              <div key={entry.day} className="flex items-center justify-between rounded-md border border-border-subtle px-4 py-3">
                <span className="text-text-white">{entry.day}</span>
                <span className="text-text-muted">{entry.hours}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-text-muted">Call to schedule during business hours.</p>
        </article>
      </section>

      <section className="section-container pt-0">
        <p className="section-eyebrow">Customer Reviews</p>
        <div className="accent-divider" />
        <h2 className="mt-4 font-display text-5xl uppercase text-text-white">Trusted By Real Customers</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, idx) => (
            <ScrollReveal key={review.id} delay={idx * 0.1}>
              <ReviewCard name={review.name} text={review.text} rating={review.rating} />
            </ScrollReveal>
          ))}
        </div>
        <a href={BUSINESS_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-8 inline-flex">
          Leave Us a Review
        </a>
      </section>

      <CTABanner
        heading="Ready to get your vehicle serviced?"
        subtext="Call today and let our team get you back on the road with confidence."
        buttonText={`Call ${BUSINESS_INFO.phoneFormatted}`}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="accent"
      />
    </>
  );
}
