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

      <section className="section-container">
        <ScrollReveal>
          <p className="section-eyebrow">What We Handle</p>
          <div className="accent-divider" />
          <h2 className="mt-4 font-display text-5xl uppercase text-text-white">Service Categories</h2>
          <p className="mt-4 max-w-3xl text-text-muted">
            We diagnose, repair, and maintain everything from daily drivers to diesel work trucks. Expand each service
            below and request an appointment.
          </p>
        </ScrollReveal>

        <div className="mt-8">
          <ServiceAccordion limit={6} />
        </div>
      </section>

      <section className="section-container pt-0">
        <ScrollReveal>
          <p className="section-eyebrow">Featured Work</p>
          <div className="accent-divider" />
          <h2 className="mt-4 font-display text-5xl uppercase text-text-white">Top Services</h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 0.12}>
              <ServiceCard name={service.name} shortDescription={service.shortDescription} icon={service.icon} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </section>

      <BulletproofHero />

      <section className="bg-bg-dark-card">
        <div className="section-container">
          <ScrollReveal>
            <p className="section-eyebrow">What People Say</p>
            <div className="accent-divider" />
            <h2 className="mt-4 font-display text-5xl uppercase text-text-white">Trusted By Many</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, idx) => (
              <ScrollReveal key={review.id} delay={idx * 0.12}>
                <ReviewCard name={review.name} text={review.text} rating={review.rating} />
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-10 text-center font-display text-4xl uppercase text-accent">Trusted by customers from all over Texas</p>
        </div>
      </section>

      <section className="section-container grid gap-8 lg:grid-cols-2">
        <GoogleMap />
        <article className="card-base">
          <p className="section-eyebrow">Visit The Shop</p>
          <div className="accent-divider" />
          <h2 className="mt-4 font-display text-4xl uppercase text-text-white">Come See Us</h2>
          <p className="mt-4 text-text-muted">
            {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
          </p>
          <p className="mt-2 text-text-muted">Mon-Fri: 8:00 AM - 6:00 PM</p>
          <p className="text-text-muted">Saturday & Sunday: Closed</p>

          <div className="mt-7 flex flex-wrap gap-3">
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

      <CTABanner
        heading="Need Your Vehicle Serviced Right The First Time?"
        subtext="Call today to schedule diagnostics, repair, or your bulletproofing build consultation."
        buttonText={`Call ${BUSINESS_INFO.phoneFormatted}`}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="accent"
      />
    </>
  );
}
