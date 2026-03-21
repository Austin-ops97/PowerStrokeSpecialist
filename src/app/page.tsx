import BulletproofHero from "@/components/BulletproofHero";
import CTABanner from "@/components/CTABanner";
import GoogleMap from "@/components/GoogleMap";
import Hero from "@/components/Hero";
import ReviewCard from "@/components/ReviewCard";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceAccordion from "@/components/ServiceAccordion";
import ServiceCard from "@/components/ServiceCard";
import TrustBadges from "@/components/TrustBadges";
import { BUSINESS_INFO, REVIEWS, SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import Link from "next/link";

export const metadata = buildMetadata(
  "Home",
  "Power Stroke Specialist in Baytown TX delivers diesel repair, Power Stroke bulletproofing, diagnostics, and full-service mechanic work you can trust.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />

      <section className="relative border-b border-border-subtle">
        <div className="absolute inset-0 bg-mesh-dark opacity-60" aria-hidden />
        <div className="section-container relative">
          <ScrollReveal>
            <p className="section-eyebrow">Capabilities</p>
            <div className="accent-rule mt-1" />
            <h2 className="mt-8 max-w-3xl font-display text-4xl font-normal leading-tight tracking-tight text-text-white sm:text-5xl">
              Service categories
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
              Diagnostics through heavy repair—structured like an OEM program, delivered with shop-floor honesty. Open a
              category to read scope, then book time with our crew.
            </p>
          </ScrollReveal>

          <div className="mt-10">
            <ServiceAccordion limit={6} />
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle bg-bg-dark-card/50">
        <div className="section-container">
          <ScrollReveal>
            <p className="section-eyebrow">Featured</p>
            <div className="accent-rule mt-1" />
            <h2 className="mt-8 font-display text-4xl font-normal leading-tight tracking-tight text-text-white sm:text-5xl">
              Programs customers ask for first
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 0.1}>
                <ServiceCard name={service.name} shortDescription={service.shortDescription} icon={service.icon} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/services" className="btn-secondary">
              Full service menu
            </Link>
          </div>
        </div>
      </section>

      <BulletproofHero />

      <section className="surface-light border-y border-black/10">
        <div className="section-container">
          <ScrollReveal>
            <p className="section-eyebrow text-accent">Reputation</p>
            <div className="accent-rule mt-1 bg-accent" />
            <h2 className="mt-8 font-display text-4xl font-normal leading-tight tracking-tight text-text-dark sm:text-5xl">
              What drivers say
            </h2>
            <p className="mt-4 max-w-2xl text-text-dark/70">
              Real feedback from Texas customers—no script, no fluff.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {REVIEWS.map((review, idx) => (
              <ScrollReveal key={review.id} delay={idx * 0.1}>
                <ReviewCard name={review.name} text={review.text} rating={review.rating} tone="light" />
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-14 text-center font-display text-xl font-normal text-text-dark/85 sm:text-2xl">
            Trusted by owners and fleets across Texas.
          </p>
        </div>
      </section>

      <section className="border-b border-border-subtle bg-bg-dark">
        <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <GoogleMap />
          <article className="rounded-sm border border-border-strong bg-bg-dark-card p-8 shadow-card md:p-10">
            <p className="section-eyebrow">Visit</p>
            <div className="accent-rule mt-1" />
            <h2 className="mt-8 font-display text-3xl font-normal tracking-tight text-text-white sm:text-4xl">
              The shop
            </h2>
            <p className="mt-5 text-text-muted">
              {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
            </p>
            <p className="mt-2 text-sm text-text-muted">Mon–Fri: 8:00 AM – 6:00 PM</p>
            <p className="text-sm text-text-muted">Saturday & Sunday: Closed</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${BUSINESS_INFO.address}, ${BUSINESS_INFO.city}, ${BUSINESS_INFO.state} ${BUSINESS_INFO.zip}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Directions
              </a>
              <Link href="/contact" className="btn-primary">
                Contact
              </Link>
            </div>
          </article>
        </div>
      </section>

      <CTABanner
        heading="Need the job done right the first time?"
        subtext="Call to schedule diagnostics, repair, or a bulletproofing consultation with our Baytown team."
        buttonText={`Call ${BUSINESS_INFO.phoneFormatted}`}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="accent"
      />
    </>
  );
}
