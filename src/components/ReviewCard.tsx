import { Quote, Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  text: string;
  rating: number;
  tone?: "dark" | "light";
};

export default function ReviewCard({ name, text, rating, tone = "dark" }: ReviewCardProps) {
  const isLight = tone === "light";

  return (
    <article
      className={
        isLight
          ? "flex h-full flex-col rounded-sm border border-black/10 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-8"
          : "card-base flex h-full flex-col"
      }
    >
      <Quote className={isLight ? "text-accent" : "text-accent-blue"} size={24} strokeWidth={1.5} />
      <p className={`mt-4 flex-1 italic leading-relaxed ${isLight ? "text-text-dark/90" : "text-text-white"}`}>{text}</p>
      <div
        className={`mt-6 flex items-center justify-between border-t pt-5 ${isLight ? "border-black/10" : "border-border-subtle"}`}
      >
        <p className={`text-sm font-semibold ${isLight ? "text-text-dark" : "text-text-white"}`}>{name}</p>
        <div className={`flex gap-1 ${isLight ? "text-accent" : "text-accent"}`} aria-label={`${rating} star review`}>
          {Array.from({ length: rating }).map((_, idx) => (
            <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      </div>
    </article>
  );
}
