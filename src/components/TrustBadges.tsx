import { iconMap } from "@/lib/icon-map";
import { TRUST_BADGES } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="bg-bg-dark-card border-y border-border-subtle">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {TRUST_BADGES.map((badge) => {
          const Icon = iconMap[badge.icon] ?? ShieldCheck;
          return (
            <article key={badge.label} className="flex items-center gap-3 rounded-md border border-border-subtle bg-bg-dark px-4 py-3">
              <div className="rounded-full bg-accent/10 p-2 text-accent">
                <Icon size={18} />
              </div>
              <p className="text-sm font-semibold text-text-white">{badge.label}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
