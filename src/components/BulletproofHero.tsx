import { BUSINESS_INFO, STATS } from "@/lib/constants";
import StatCounter from "@/components/StatCounter";
import { CheckCircle2, Phone } from "lucide-react";

const checklist = [
  "ARP head stud installation",
  "Oil cooler flush & replacement",
  "EGR system service",
  "FICM support",
  "Cooling system inspection",
  "Water pump service",
];

export default function BulletproofHero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Subtle dot grid on navy */}
      <div className="pointer-events-none absolute inset-0 bg-dot-navy bg-dot-md" />

      <div className="wrap section-pad relative">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left — text */}
          <div>
            <span className="label text-white/50">
              <span className="h-px w-5 bg-action" />
              Signature Service
            </span>
            <h2 className="mt-5 text-5xl font-black tracking-tighter text-white sm:text-6xl">
              Power Stroke<br />
              <span className="text-action">Bulletproofing.</span>
            </h2>
            <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-white/55">
              The work we&apos;re known for across Texas. Every known Ford Power Stroke failure
              point addressed — so your engine outlasts everything else on the road.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/70">
                  <CheckCircle2 size={15} className="shrink-0 text-action" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>

            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-action mt-10 inline-flex">
              <Phone size={15} strokeWidth={2.5} />
              Discuss Your Build
            </a>
          </div>

          {/* Right — stats + callout */}
          <div className="space-y-5">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} light />
            ))}

            <div className="mt-4 border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold text-white">
                Specializing in Ford 6.0L and 7.3L Power Stroke engines.
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/50">
                Every job starts with a conversation. Call before you bring it in.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
