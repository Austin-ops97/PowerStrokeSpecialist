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
  const isExternal = buttonLink.startsWith("tel:") || buttonLink.startsWith("mailto:");

  const button = isExternal ? (
    <a
      href={buttonLink}
      className={isAccent ? "btn-secondary-dark" : "btn-primary"}
    >
      {buttonText}
    </a>
  ) : (
    <Link
      href={buttonLink}
      className={isAccent ? "btn-secondary-dark" : "btn-primary"}
    >
      {buttonText}
    </Link>
  );

  return (
    <section
      className={
        isAccent
          ? "bg-accent"
          : "relative overflow-hidden bg-bg-dark-lighter border-y border-border-subtle"
      }
    >
      {!isAccent && (
        <div className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot opacity-40" />
      )}
      <div className="section-container relative flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h3
            className={`font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl ${
              isAccent ? "text-white" : "text-white"
            }`}
          >
            {heading}
          </h3>
          {subtext ? (
            <p className={`mt-3 text-base leading-relaxed ${isAccent ? "text-white/80" : "text-text-muted"}`}>
              {subtext}
            </p>
          ) : null}
        </div>
        {button}
      </div>
    </section>
  );
}
