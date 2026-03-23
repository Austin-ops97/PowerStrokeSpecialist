import { Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  text: string;
  rating: number;
};

export default function ReviewCard({ name, text, rating }: ReviewCardProps) {
  return (
    <article className="flex flex-col bg-chalk-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            strokeWidth={0}
            fill={i < rating ? "#E31B1B" : "#E5E7EB"}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="mt-5 flex-1 text-[15px] leading-relaxed text-zinc-600">{text}</p>

      {/* Author */}
      <div className="mt-7 flex items-center gap-3 border-t border-zinc-100 pt-5">
        <span className="flex h-9 w-9 items-center justify-center bg-brand text-sm font-black text-white">
          {name.charAt(0).toUpperCase()}
        </span>
        <div>
          <p className="text-sm font-bold text-ink">{name}</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400">
            Verified Customer
          </p>
        </div>
      </div>
    </article>
  );
}
