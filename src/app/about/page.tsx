import CTABanner from "@/components/CTABanner";
import ReviewCard from "@/components/ReviewCard";
import ScrollReveal from "@/components/ScrollReveal";
import { BUSINESS_INFO, HOURS, REVIEWS } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import { BadgeCheck, Gauge, ShieldCheck, Truck, Wallet, Wrench } from "lucide-react";
import Image from "next/image";

export const metadata = buildMetadata(
  "About",
  "Learn why drivers across Texas trust Power Stroke Specialist in Baytown TX for honest service, expert diagnostics, and high-quality diesel and auto repair.",
  "/about"
);

const values = [
  { label: "Honest & Transparent Pricing", icon: Wallet },
  { label: "Experienced Power Stroke Specialists", icon: Wrench },
  { label: "State-of-the-Art Diagnostic Equipment", icon: Gauge },
  { label: "Trusted by Customers Across Texas", icon: ShieldCheck },
  { label: "No Job Too Big or Too Small", icon: BadgeCheck },
  { label: "Fleet Vehicle Experts", icon: Truck },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-diesel.svg"
          alt="Diesel mechanic team and trucks at Power Stroke Specialist"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 px-4 text-center">
          <h1 className="font-display text-5xl uppercase sm:text-6xl">About Us</h1>
          <p className="mt-4 text-text-muted">Dedicated to keeping your vehicles running like new</p>
        </div>
      </section>

      <section className="section-container grid items-center gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Our Story</p>
          <div className="section-divider" />
          <h2 className="mt-5 font-display text-4xl uppercase">Built on Trust and Quality Work</h2>
          <p className="mt-5 text-text-muted">
            We work on all types of vehicle issues and take pride in solving problems correctly the first time. Our
            knowledgeable team uses proven diagnostics and hands-on experience to keep every vehicle dependable.
          </p>
          <p className="mt-4 text-text-muted">
            We know how hard it can be to find a trustworthy mechanic. That&apos;s why customers from Baytown and across
            Texas rely on us for straightforward communication and quality repairs.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <Image
            src="/images/shop-building.svg"
            alt="Power Stroke Specialist building and service bays"
            width={900}
            height={560}
            className="h-auto w-full rounded-xl border border-border"
          />
        </ScrollReveal>
      </section>

      <section className="section-container">
        <ScrollReveal>
          <h2 className="font-display text-4xl uppercase">Why Choose Us</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ScrollReveal key={value.label} delay={index * 0.08}>
              <article className="card-base flex items-start gap-3">
                <div className="rounded-full bg-accent/10 p-3 text-accent">
                  <value.icon size={22} />
                </div>
                <p className="font-medium text-text-primary">{value.label}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-primary-light p-8">
          <h2 className="text-center font-display text-4xl uppercase">Hours of Operation</h2>
          <div className="mt-6 space-y-3">
            {HOURS.map((entry) => (
              <div key={entry.day} className="flex items-center justify-between rounded-md border border-border px-4 py-3">
                <span>{entry.day}</span>
                <span className="text-text-muted">{entry.hours}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-text-muted">Call us to schedule an appointment during business hours.</p>
        </div>
      </section>

      <section className="section-container">
        <h2 className="font-display text-4xl uppercase">Customer Reviews</h2>
        <div className="section-divider" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <ScrollReveal key={review.id} delay={index * 0.1}>
              <ReviewCard name={review.name} text={review.text} />
            </ScrollReveal>
          ))}
        </div>
        <a href={BUSINESS_INFO.facebookUrl} target="_blank" rel="noreferrer" className="btn-primary mt-8 inline-flex">
          Leave Us a Review
        </a>
      </section>

      <CTABanner
        heading="Ready to get your vehicle serviced?"
        buttonText={`Call ${BUSINESS_INFO.phoneFormatted}`}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="accent"
      />
    </>
  );
}
