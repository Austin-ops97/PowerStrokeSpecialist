import BulletproofHero from "@/components/BulletproofHero";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata(
  "Services",
  "Explore Baytown TX diesel mechanic services including diagnostics, maintenance, bulletproofing, fleet support, and full-service auto repair.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <section className="bg-bg-dark-card">
        <div className="section-container py-14 text-center sm:py-16">
          <h1 className="font-display text-6xl uppercase text-text-white">Our Services</h1>
          <p className="mt-4 text-text-muted">We can fix anything and everything your vehicle needs</p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 0.08}>
              <ServiceCard name={service.name} shortDescription={service.shortDescription} icon={service.icon} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-container pt-0">
        <article className="card-base border-l-4 border-l-accent">
          <h2 className="font-display text-5xl uppercase text-text-white">Power Stroke Bulletproofing Deep Dive</h2>
          <p className="mt-5 text-text-muted">
            We build bulletproofed Power Stroke engines for long-term reliability by addressing common failure points.
            Depending on platform and goals, this can include upgrades like head studs, EGR system work, oil cooler
            service, FICM support, water pump improvements, and cooling-system reliability updates.
          </p>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary mt-6 inline-flex">
            Call to Discuss Your Bulletproof Build
          </a>
        </article>
      </section>

      <BulletproofHero />

      <section className="section-container grid gap-6 lg:grid-cols-2">
        <article className="card-base">
          <h2 className="font-display text-4xl uppercase text-text-white">Aftermarket Upgrades</h2>
          <p className="mt-4 text-text-muted">
            We handle custom performance modifications including lift kits, exhaust systems, tuning, intake upgrades,
            and suspension setups. Call us to discuss your build goals.
          </p>
        </article>
        <article className="card-base border-accent/35">
          <h2 className="font-display text-4xl uppercase text-text-white">Fleet Services</h2>
          <p className="mt-4 text-text-muted">
            We provide dependable maintenance and repair support for commercial and fleet vehicles to reduce downtime
            and keep your operation moving.
          </p>
        </article>
      </section>

      <CTABanner
        heading="Don&apos;t see what you need? We can fix it."
        subtext={`Call ${BUSINESS_INFO.phoneFormatted} for a quote today.`}
        buttonText="Call For Quote"
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="accent"
      />
    </>
  );
}
