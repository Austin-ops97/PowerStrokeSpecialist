import { Quote, Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  text: string;
  rating: number;
};

export default function ReviewCard({ name, text, rating }: ReviewCardProps) {
  return (
    <article className="card-base h-full">
      <Quote className="text-accent" size={26} />
      <p className="mt-4 italic leading-relaxed text-text-white">{text}</p>
      <div className="mt-6 flex items-center justify-between">
        <p className="font-semibold text-accent">{name}</p>
        <div className="flex gap-1 text-accent" aria-label={`${rating} star review`}>
          {Array.from({ length: rating }).map((_, idx) => (
            <Star key={idx} size={14} fill="currentColor" />
          ))}
        </div>
      </div>
    </article>
  );
}
