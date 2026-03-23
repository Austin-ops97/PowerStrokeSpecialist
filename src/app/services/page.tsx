import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

export const metadata = buildMetadata(
  "Services",
  "Explore Baytown TX diesel mechanic services including diagnostics, maintenance, bulletproofing, fleet support, and full-service auto repair.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-md opacity-80" />
        <div className="wrap section-pad relative">
          <span className="label">
            <span className="h-px w-6 bg-accent" />
            What We Offer
          </span>
          <h1 className="mt-5 text-[clamp(44px,7vw,88px)] font-black leading-[0.92] tracking-tighter text-white">
            Our Services.
          </h1>
          <p className="mt-7 max-w-lg text-base font-medium leading-relaxed text-white/50">
            Diagnostics through complete engine rebuilds — if it moves your family or your fleet,
            we can maintain and repair it.
          </p>
        </div>
      </section>

      {/* All service cards */}
      <section className="bg-chalk">
        <div className="wrap section-pad">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 0.04}>
                <ServiceCard name={service.name} shortDescription={service.shortDescription} icon={service.icon} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bulletproofing callout — black */}
      <section className="bg-ink border-y border-ink-border">
        <div className="wrap section-pad">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <span className="label">
                <span className="h-px w-6 bg-accent" />
                Signature Service
              </span>
              <h2 className="mt-5 text-5xl font-black tracking-tighter text-white sm:text-6xl">
                Power Stroke<br />Bulletproofing.
              </h2>
              <p className="mt-6 text-base font-medium leading-relaxed text-white/50">
                We build bulletproofed Power Stroke engines for long-term reliability by addressing
                known failure points. Every job is tailored to your platform and goals.
              </p>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-red mt-8 inline-flex">
                Call to Discuss Your Build
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ul className="space-y-4">
                {[
                  "ARP head stud installation",
                  "Oil cooler flush and replacement",
                  "EGR system service",
                  "FICM support and replacement",
                  "Cooling system updates",
                  "Water pump service",
                  "Full diagnostic workup before and after",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-ink-border pb-4 last:border-0">
                    <CheckCircle2 size={16} className="shrink-0 text-brand" strokeWidth={2.5} />
                    <span className="text-sm font-semibold text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Aftermarket + Fleet — white */}
      <section className="bg-chalk-card border-y border-zinc-100">
        <div className="wrap section-pad">
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <div className="h-full border-l-4 border-brand bg-chalk p-8 lg:p-10">
                <span className="label">
                  <span className="h-px w-6 bg-accent" />
                  Upgrades
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tighter text-ink sm:text-4xl">
                  Aftermarket Upgrades.
                </h2>
                <p className="mt-4 text-base font-medium leading-relaxed text-zinc-500">
                  Lift kits, exhaust, tuning, intake, suspension — tell us the goal and we&apos;ll
                  engineer the path to get there.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="h-full border-l-4 border-zinc-300 bg-chalk p-8 lg:p-10">
                <span className="label" style={{ color: "#6B7280" }}>
                  <span className="h-px w-6 bg-zinc-400" />
                  Fleet
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tighter text-ink sm:text-4xl">
                  Fleet Services.
                </h2>
                <p className="mt-4 text-base font-medium leading-relaxed text-zinc-500">
                  Scheduled maintenance and repair for commercial vehicles — less downtime,
                  more predictable outcomes for your operation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Don't See What You Need?"
        subtext={`Call ${BUSINESS_INFO.phoneFormatted} and we'll talk through your specific situation.`}
        buttonText="Call for a Quote"
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="red"
      />
    </>
  );
}
