import { Star } from "lucide-react";

type Props = { name: string; text: string; rating: number };

export default function ReviewCard({ name, text, rating }: Props) {
  return (
    <article className="flex flex-col border border-slate-200 bg-white p-7 transition-shadow duration-300 hover:shadow-hover">
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            strokeWidth={0}
            fill={i < rating ? "#DC2626" : "#E2E8F0"}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="mt-5 flex-1 text-[15px] leading-relaxed text-slate-600">{text}</p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-navy text-sm font-black text-white">
          {name.charAt(0).toUpperCase()}
        </span>
        <div>
          <p className="text-sm font-bold text-slate-900">{name}</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
            Verified Customer
          </p>
        </div>
      </div>
    </article>
  );
}
