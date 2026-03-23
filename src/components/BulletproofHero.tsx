import { BUSINESS_INFO, STATS } from "@/lib/constants";
import StatCounter from "@/components/StatCounter";
import { CheckCircle2, Phone } from "lucide-react";

const items = [
  "ARP head studs installed",
  "Oil cooler flush and service",
  "EGR system addressed",
  "FICM support",
  "Cooling system inspection",
  "Water pump service",
];

export default function BulletproofHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-md opacity-80" />

      <div className="wrap section-pad relative">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Left column — headline + body + CTA */}
          <div>
            <span className="label">
              <span className="h-px w-6 bg-brand" />
              Signature Service
            </span>
            <h2 className="mt-5 text-5xl font-black tracking-tighter text-white sm:text-6xl lg:text-7xl">
              Power Stroke<br />
              <span className="text-brand">Bulletproofing.</span>
            </h2>
            <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-white/50">
              The work we&apos;re known for. Hundreds of Ford Power Stroke engines brought to a
              higher standard — every known failure point addressed so your truck runs longer and harder.
            </p>

            {/* Checklist */}
            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/70">
                  <CheckCircle2 size={15} className="shrink-0 text-brand" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>

            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-red mt-10 inline-flex">
              <Phone size={15} strokeWidth={2.5} />
              Discuss Your Build
            </a>
          </div>

          {/* Right column — stats */}
          <div className="flex flex-col justify-center gap-5">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}

            {/* Callout box */}
            <div className="mt-4 border border-brand/20 bg-brand/5 p-6">
              <p className="text-sm font-bold text-white">
                Specializing in Ford 6.0L and 7.3L Power Stroke engines.
              </p>
              <p className="mt-2 text-sm font-medium text-white/50">
                Call to discuss your specific platform and goals before we start any work.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
