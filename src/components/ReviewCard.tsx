import { Quote, Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  text: string;
};

export default function ReviewCard({ name, text }: ReviewCardProps) {
  return (
    <article className="card-base h-full">
      <Quote className="text-accent" />
      <p className="mt-4 text-text-muted italic">{text}</p>
      <div className="mt-5 flex items-center justify-between">
        <p className="font-semibold text-text-primary">{name}</p>
        <div className="flex gap-1 text-yellow-400" aria-label="5 star review">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={14} fill="currentColor" />
          ))}
        </div>
      </div>
    </article>
  );
}
