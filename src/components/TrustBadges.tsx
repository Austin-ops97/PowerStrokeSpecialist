import { TRUST_BADGES } from "@/lib/constants";
import { iconMap } from "@/lib/icon-map";
import { ShieldCheck } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="border-y border-zinc-100 bg-chalk-card">
      <div className="wrap">
        <div className="grid divide-y divide-zinc-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {TRUST_BADGES.map((badge) => {
            const Icon = iconMap[badge.icon] ?? ShieldCheck;
            return (
              <article key={badge.label} className="flex items-center gap-4 py-7 sm:px-8 lg:py-9">
                {/* Texas blue icon box */}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent text-white">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <p className="text-sm font-bold leading-snug text-ink">{badge.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
