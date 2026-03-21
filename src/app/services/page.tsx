import BulletproofSection from "@/components/BulletproofSection";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata(
  "Services",
  "Explore diesel and full-service mechanic offerings in Baytown TX including diagnostics, fleet maintenance, and expert Power Stroke bulletproofing.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary-light/40">
        <div className="section-container py-14 text-center sm:py-16">
          <h1 className="font-display text-5xl uppercase sm:text-6xl">Our Services</h1>
          <p className="mt-4 text-text-muted">We can fix anything and everything your vehicle needs</p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.06}>
              <ServiceCard name={service.name} description={service.description} icon={service.icon} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-primary-light py-16">
        <div className="section-container rounded-xl border-l-4 border-accent bg-primary p-8">
          <h2 className="font-display text-4xl uppercase">Power Stroke Bulletproofing Deep Dive</h2>
          <p className="mt-5 text-text-muted">
            Our bulletproofing process focuses on reliability upgrades where these engines need it most. We commonly
            address known weak points with upgraded head studs, EGR system solutions, oil cooler improvements, FICM
            support, water pump updates, and related cooling system enhancements so your truck can perform under load
            with confidence.
          </p>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary mt-6 inline-flex">
            Call to Discuss Your Bulletproof Build
          </a>
        </div>
      </section>

      <BulletproofSection />

      <section className="section-container grid gap-8 lg:grid-cols-2">
        <article className="card-base">
          <h2 className="font-display text-3xl uppercase">Aftermarket Upgrades</h2>
          <p className="mt-4 text-text-muted">
            We provide performance and customization services including lift kits, suspension modifications, intake
            upgrades, exhaust systems, and tuning support. Call to discuss your specific goals and build plan.
          </p>
        </article>

        <article className="card-base border-accent/40">
          <h2 className="font-display text-3xl uppercase">Fleet Services</h2>
          <p className="mt-4 text-text-muted">
            We service commercial and fleet vehicles with dependable maintenance programs designed to reduce downtime,
            improve reliability, and keep your team moving.
          </p>
        </article>
      </section>

      <CTABanner
        heading="Don't see what you need? We can fix it."
        subtext={`Call ${BUSINESS_INFO.phoneFormatted} for a free quote.`}
        buttonText="Call for Free Quote"
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="accent"
      />
    </>
  );
}
