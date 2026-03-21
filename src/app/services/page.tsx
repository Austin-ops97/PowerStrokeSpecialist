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
      <section className="relative overflow-hidden border-b border-border-subtle bg-bg-dark">
        <div className="absolute inset-0 bg-line-grid bg-grid opacity-20" aria-hidden />
        <div className="section-container-tight relative text-center">
          <p className="section-eyebrow">Services</p>
          <div className="accent-rule mx-auto mt-1" />
          <h1 className="mt-8 font-display text-4xl font-normal tracking-tight text-text-white sm:text-6xl">Complete capability</h1>
          <p className="mx-auto mt-5 max-w-2xl text-text-muted sm:text-lg">
            From factory maintenance to heavy diesel repair—one shop, disciplined process, Texas work ethic.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 0.06}>
              <ServiceCard name={service.name} shortDescription={service.shortDescription} icon={service.icon} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-container pt-0">
        <article className="relative overflow-hidden rounded-sm border border-border-strong bg-bg-dark-card p-8 shadow-lift md:p-10 lg:p-12">
          <div className="absolute left-0 top-0 h-full w-1 bg-accent" aria-hidden />
          <div className="pl-5 md:pl-8">
            <p className="section-eyebrow">Deep dive</p>
            <div className="accent-rule mt-1" />
            <h2 className="mt-6 font-display text-3xl font-normal leading-tight text-text-white sm:text-5xl">
              Power Stroke bulletproofing
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-muted sm:text-lg">
              We build Power Stroke packages for long-term reliability by targeting known failure modes. Depending on
              platform and goals, that can include head studs, EGR-related work, oil cooler service, FICM support, water
              pump upgrades, and cooling-system hardening.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary mt-8 inline-flex">
              Call to plan your build
            </a>
          </div>
        </article>
      </section>

      <BulletproofHero />

      <section className="section-container grid gap-5 lg:grid-cols-2 lg:gap-8">
        <article className="rounded-sm border border-border-subtle bg-bg-dark-card p-8 shadow-card md:p-10">
          <h2 className="font-display text-3xl font-normal text-text-white sm:text-4xl">Aftermarket upgrades</h2>
          <p className="mt-5 text-text-muted sm:text-lg">
            Lift kits, exhaust, tuning, intakes, suspension—we help you match parts to purpose and keep the truck
            dependable after the upgrade.
          </p>
        </article>
        <article className="rounded-sm border border-accent/25 bg-bg-dark-card p-8 shadow-card md:p-10">
          <h2 className="font-display text-3xl font-normal text-text-white sm:text-4xl">Fleet services</h2>
          <p className="mt-5 text-text-muted sm:text-lg">
            Maintenance and repair programs for commercial vehicles—structured to reduce downtime and protect your
            operation.
          </p>
        </article>
      </section>

      <CTABanner
        heading="Don&apos;t see what you need on the list?"
        subtext={`Call ${BUSINESS_INFO.phoneFormatted}—if it has wheels and an engine, we want to hear about it.`}
        buttonText="Call for quote"
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="accent"
      />
    </>
  );
}
