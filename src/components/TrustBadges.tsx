import { iconMap } from "@/lib/icon-map";
import { TRUST_BADGES } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="relative bg-surface border-y border-border-light">
      <div className="mx-auto grid max-w-7xl divide-y divide-black/[0.06] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {TRUST_BADGES.map((badge) => {
          const Icon = iconMap[badge.icon] ?? ShieldCheck;
          return (
            <article
              key={badge.label}
              className="flex items-center gap-4 px-7 py-7 sm:px-8 lg:py-8"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent text-white">
                <Icon size={20} strokeWidth={2} />
              </span>
              <p className="text-sm font-bold leading-snug text-text-dark">{badge.label}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
