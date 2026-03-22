import { Quote, Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  text: string;
  rating: number;
  light?: boolean;
};

export default function ReviewCard({ name, text, rating, light }: ReviewCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col p-7 transition-all duration-500 md:p-8 ${
        light
          ? "bg-white border border-border-light shadow-card-light hover:shadow-lift-light"
          : "border border-border-subtle bg-bg-dark-card hover:border-white/[0.16] hover:shadow-lift"
      }`}
    >
      {/* Left accent bar on hover */}
      <div className={`absolute left-0 top-0 w-0.5 h-0 bg-accent transition-all duration-500 group-hover:h-full`} />

      <div className="flex items-start justify-between">
        <Quote
          className={light ? "text-accent/50" : "text-accent/60"}
          size={24}
          strokeWidth={1.5}
        />
        <div className="flex gap-0.5 text-accent" aria-label={`${rating} star review`}>
          {Array.from({ length: rating }).map((_, idx) => (
            <Star key={idx} size={13} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      </div>

      <p className={`mt-5 flex-1 text-[15px] leading-relaxed ${light ? "text-text-dark-muted" : "text-text-light"}`}>
        {text}
      </p>

      <div className={`mt-7 border-t pt-5 ${light ? "border-border-light" : "border-white/[0.07]"}`}>
        <p className={`text-sm font-bold ${light ? "text-text-dark" : "text-white"}`}>{name}</p>
        <p className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] ${light ? "text-text-dark-muted" : "text-text-muted"}`}>
          Verified Customer
        </p>
      </div>
    </article>
  );
}
