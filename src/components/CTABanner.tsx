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
  const isAccent = variant === "accent";

  return (
    <section className={isAccent ? "bg-accent" : "bg-bg-dark-card border-y border-border-subtle"}>
      <div className="section-container flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <h3 className={`font-display text-4xl uppercase leading-tight ${isAccent ? "text-text-dark" : "text-text-white"}`}>
            {heading}
          </h3>
          {subtext ? <p className={`mt-2 ${isAccent ? "text-text-dark/80" : "text-text-muted"}`}>{subtext}</p> : null}
        </div>

        <Link href={buttonLink} className={isAccent ? "btn-secondary border-text-dark text-text-dark hover:border-text-dark" : "btn-primary"}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
