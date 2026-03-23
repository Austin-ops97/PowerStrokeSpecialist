import { TRUST_BADGES } from "@/lib/constants";
import { iconMap } from "@/lib/icon-map";
import { ShieldCheck } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="wrap">
        <div className="grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {TRUST_BADGES.map((badge) => {
            const Icon = iconMap[badge.icon] ?? ShieldCheck;
            return (
              <article
                key={badge.label}
                className="flex items-center gap-4 py-6 sm:px-8 lg:py-8"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy text-white">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <p className="text-sm font-bold text-slate-700">{badge.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
