import Link from "next/link";

type CTABannerProps = {
  heading: string;
  subtext?: string;
  buttonText: string;
  buttonLink: string;
  variant?: "accent" | "dark";
};

export default function CTABanner({
  heading,
  subtext,
  buttonText,
  buttonLink,
  variant = "accent",
}: CTABannerProps) {
  const accentVariant = variant === "accent";

  return (
    <section className={`${accentVariant ? "bg-accent" : "bg-primary-light"}`}>
      <div className="section-container flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <h3 className={`font-display text-3xl uppercase tracking-wide ${accentVariant ? "text-white" : "text-text-primary"}`}>
            {heading}
          </h3>
          {subtext && <p className={`mt-2 ${accentVariant ? "text-orange-100" : "text-text-muted"}`}>{subtext}</p>}
        </div>
        <Link href={buttonLink} className={accentVariant ? "btn-secondary border-white/70" : "btn-primary"}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
