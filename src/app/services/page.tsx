import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

export const metadata = buildMetadata(
  "Services",
  "Explore all diesel mechanic services at Power Stroke Specialist — bulletproofing, diagnostics, maintenance, fleet support, and full automotive repair.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      {/* Header — slate-50 */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="wrap section-pad">
          <span className="label">
            <span className="h-px w-5 bg-navy" />
            What We Offer
          </span>
          <h1 className="mt-5 text-[clamp(40px,7vw,80px)] font-black leading-[0.93] tracking-tighter text-slate-900">
            Our Services.
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-slate-500">
            Complete diesel and automotive care — from oil changes to full engine rebuilds.
          </p>
        </div>
      </section>

      {/* All service cards — white */}
      <section className="bg-white">
        <div className="wrap section-pad">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 0.04}>
                <ServiceCard name={s.name} shortDescription={s.shortDescription} icon={s.icon} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bulletproofing detail — navy */}
      <section className="bg-navy">
        <div className="wrap section-pad">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
                <span className="h-px w-5 bg-white/30" />
                Signature Service
              </span>
              {/* All white heading — no red text on blue */}
              <h2 className="mt-5 text-4xl font-black tracking-tighter text-white sm:text-5xl">
                Power Stroke<br />Bulletproofing.
              </h2>
              <div className="mt-4 h-1 w-16 bg-action" />
              <p className="mt-5 text-base font-medium leading-relaxed text-white/60">
                Every known failure point addressed so your Ford Power Stroke engine runs longer and
                harder. Hundreds of builds completed across Texas.
              </p>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-action mt-8 inline-flex">
                Call to Discuss Your Build
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ul className="space-y-0 divide-y divide-white/10">
                {[
                  "ARP head stud installation",
                  "Oil cooler flush and replacement",
                  "EGR system service",
                  "FICM support and replacement",
                  "Cooling system updates",
                  "Water pump service",
                  "Pre- and post-build diagnostic workup",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 py-4">
                    {/* White icons on navy — readable */}
                    <CheckCircle2 size={16} className="shrink-0 text-white/70" strokeWidth={2.5} />
                    <span className="text-sm font-semibold text-white/75">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Aftermarket + Fleet — white */}
      <section className="border-y border-slate-200 bg-white">
        <div className="wrap section-pad">
          <div className="grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <div className="border border-slate-200 p-8 transition-shadow hover:shadow-card lg:p-10">
                <div className="mb-5 h-1 w-12 bg-navy" />
                <h2 className="text-2xl font-black tracking-tight text-slate-900">Aftermarket Upgrades.</h2>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-500">
                  Lift kits, exhaust, tuning, intake, suspension — tell us the goal and we&apos;ll
                  engineer the path to get there.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="border border-slate-200 p-8 transition-shadow hover:shadow-card lg:p-10">
                <div className="mb-5 h-1 w-12 bg-slate-300" />
                <h2 className="text-2xl font-black tracking-tight text-slate-900">Fleet Services.</h2>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-500">
                  Scheduled maintenance and repair for commercial vehicles — less downtime, more
                  predictable costs for your operation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Don't See What You Need?"
        subtext={`Call ${BUSINESS_INFO.phoneFormatted} — we'll talk through your specific situation.`}
        buttonText="Call for a Quote"
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="action"
      />
    </>
  );
}
