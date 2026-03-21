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

  const Button = (
    <Link
      href={buttonLink}
      className={isAccent ? "btn-on-accent" : "btn-primary"}
    >
      {buttonText}
    </Link>
  );

  return (
    <section
      className={
        isAccent
          ? "relative overflow-hidden bg-accent"
          : "border-y border-border-subtle bg-bg-panel"
      }
    >
      {isAccent ? <div className="pointer-events-none absolute inset-0 bg-red-sheen opacity-90" aria-hidden /> : null}
      <div className="section-container-tight relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h3
            className={`font-display text-3xl font-normal leading-tight tracking-tight sm:text-4xl ${
              isAccent ? "text-white" : "text-text-white"
            }`}
          >
            {heading}
          </h3>
          {subtext ? (
            <p className={`mt-3 text-sm leading-relaxed sm:text-base ${isAccent ? "text-white/85" : "text-text-muted"}`}>
              {subtext}
            </p>
          ) : null}
        </div>
        {Button}
      </div>
    </section>
  );
}
