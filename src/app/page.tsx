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
      {/* 1 — Hero (dark) */}
      <Hero />

      {/* 2 — Trust bar (light) */}
      <TrustBadges />

      {/* 3 — Capabilities accordion (dark) */}
      <section className="relative overflow-hidden bg-bg-dark">
        <div className="pointer-events-none absolute inset-0 bg-line-grid bg-grid opacity-20" />
        <div className="section-container relative">
          <ScrollReveal>
            <p className="section-eyebrow">Capabilities</p>
            <div className="accent-divider" />
            <h2 className="editorial-title mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              Everything Under One Roof
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
              From daily drivers to fleet trucks — diagnostics, repair, and Power Stroke programs
              handled with the same discipline you&apos;d expect from a flagship service center.
            </p>
          </ScrollReveal>

          <div className="mt-12">
            <ServiceAccordion limit={6} />
          </div>
        </div>
      </section>

      {/* 4 — Featured service cards (dark lighter) */}
      <section className="bg-bg-dark-lighter border-y border-border-subtle">
        <div className="section-container">
          <ScrollReveal>
            <p className="section-eyebrow">Highlighted Work</p>
            <div className="accent-divider" />
            <h2 className="editorial-title mt-6 text-4xl sm:text-5xl lg:text-6xl">Services We Lead With</h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 0.08}>
                <ServiceCard name={service.name} shortDescription={service.shortDescription} icon={service.icon} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/services" className="btn-secondary">
              View Full Service List
            </Link>
          </div>
        </div>
      </section>

      {/* 5 — Bulletproof section (dark) */}
      <BulletproofHero />

      {/* 6 — Reviews (light) */}
      <section className="relative bg-surface border-y border-border-light">
        <div className="section-container relative">
          <ScrollReveal>
            <p className="section-eyebrow">Customer Reviews</p>
            <div className="accent-divider" />
            <h2 className="editorial-title mt-6 text-4xl text-text-dark sm:text-5xl lg:text-6xl">
              What Texas Drivers Say
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {REVIEWS.map((review, idx) => (
              <ScrollReveal key={review.id} delay={idx * 0.1}>
                <ReviewCard name={review.name} text={review.text} rating={review.rating} light />
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-14 text-center font-display text-2xl font-bold text-text-dark sm:text-3xl">
            Trusted by customers{" "}
            <span className="text-accent">across Texas</span>
          </p>
        </div>
      </section>

      {/* 7 — Map + shop info (dark) */}
      <section className="section-container grid gap-10 lg:grid-cols-2 lg:gap-14">
        <GoogleMap />
        <article className="flex flex-col justify-center border-l-4 border-accent bg-bg-dark-card p-8 md:p-10">
          <p className="section-eyebrow">Visit the Shop</p>
          <div className="accent-divider" />
          <h2 className="editorial-title mt-5 text-3xl sm:text-4xl">Come See Us</h2>
          <p className="mt-5 text-text-muted">
            {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
          </p>
          <p className="mt-2 text-sm font-semibold text-white/80">Monday–Friday &nbsp;8:00 AM — 6:00 PM</p>
          <p className="text-sm text-text-muted">Saturday &amp; Sunday — Closed</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${BUSINESS_INFO.address}, ${BUSINESS_INFO.city}, ${BUSINESS_INFO.state} ${BUSINESS_INFO.zip}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Get Directions
            </a>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </article>
      </section>

      {/* 8 — CTA (red) */}
      <CTABanner
        heading="Ready When You Are."
        subtext="Call to schedule diagnostics, repair, or a bulletproofing consultation."
        buttonText={BUSINESS_INFO.phoneFormatted}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="accent"
      />
    </>
  );
}
