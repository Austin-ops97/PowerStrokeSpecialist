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
      {/* Page header */}
      <section className="relative overflow-hidden bg-bg-dark border-b border-border-subtle">
        <div className="absolute inset-0 bg-mesh-hero opacity-50" />
        <div className="absolute inset-0 bg-line-grid bg-grid opacity-20" />
        {/* Red left stripe */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-accent" aria-hidden />
        <div className="section-container relative py-16 text-center sm:py-20">
          <p className="section-eyebrow">Work We Perform</p>
          <div className="accent-divider mx-auto" />
          <h1 className="editorial-title mt-6 text-5xl sm:text-6xl lg:text-7xl">Our Services</h1>
          <p className="mx-auto mt-5 max-w-xl text-text-muted">
            Diagnostics through complete rebuilds — if it moves your fleet or your family,
            we can maintain and repair it.
          </p>
        </div>
      </section>

      {/* All service cards */}
      <section className="section-container">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 0.05}>
              <ServiceCard name={service.name} shortDescription={service.shortDescription} icon={service.icon} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bulletproofing callout */}
      <section className="section-container pt-0">
        <article className="relative overflow-hidden border-l-4 border-accent bg-bg-dark-card p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-line-grid bg-grid opacity-10" />
          <div className="relative">
            <p className="section-eyebrow">Signature Service</p>
            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl">Power Stroke Bulletproofing</h2>
            <p className="mt-5 max-w-3xl text-text-muted leading-relaxed">
              We build bulletproofed Power Stroke engines for long-term reliability by addressing known
              failure points. Depending on platform and goals, this can include head studs, EGR-related
              work, oil cooler service, FICM support, water pump improvements, and cooling-system updates.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary mt-8 inline-flex">
              Discuss Your Build
            </a>
          </div>
        </article>
      </section>

      {/* Bulletproof hero section */}
      <BulletproofHero />

      {/* Aftermarket + Fleet */}
      <section className="bg-surface border-y border-border-light">
        <div className="section-container grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="bg-white border border-border-light p-8 shadow-card-light md:p-10">
            <span className="inline-block h-1 w-10 bg-accent mb-5" />
            <h2 className="font-display text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">Aftermarket Upgrades</h2>
            <p className="mt-4 text-text-dark-muted leading-relaxed">
              Lift kits, exhaust, tuning, intake, suspension — tell us the goal and
              we&apos;ll engineer the path to get there.
            </p>
          </article>
          <article className="bg-white border-l-4 border-accent border border-border-light p-8 shadow-card-light md:p-10">
            <span className="inline-block h-1 w-10 bg-brand-blue mb-5" />
            <h2 className="font-display text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">Fleet Services</h2>
            <p className="mt-4 text-text-dark-muted leading-relaxed">
              Maintenance and repair for commercial vehicles — less downtime,
              more predictable outcomes for your operation.
            </p>
          </article>
        </div>
      </section>

      <CTABanner
        heading="Don't See What You Need?"
        subtext={`Call ${BUSINESS_INFO.phoneFormatted} and we'll talk through your specific situation.`}
        buttonText="Call for a Quote"
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="accent"
      />
    </>
  );
}
