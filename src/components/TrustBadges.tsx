import { iconMap } from "@/lib/icon-map";
import { TRUST_BADGES } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="border-y border-border-subtle bg-bg-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border-subtle sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {TRUST_BADGES.map((badge) => {
          const Icon = iconMap[badge.icon] ?? ShieldCheck;
          return (
            <article key={badge.label} className="flex items-center gap-4 px-5 py-5 sm:px-8 lg:px-10 lg:py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border-strong bg-bg-dark-card text-accent">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-brand text-accent-blue">Verified</p>
                <p className="mt-0.5 text-sm font-medium leading-snug text-text-white">{badge.label}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
