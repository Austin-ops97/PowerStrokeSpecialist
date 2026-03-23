import Link from "next/link";

type CTABannerProps = {
  heading: string;
  subtext?: string;
  buttonText: string;
  buttonLink: string;
  variant?: "red" | "dark";
};

export default function CTABanner({
  heading,
  subtext,
  buttonText,
  buttonLink,
  variant = "red",
}: CTABannerProps) {
  const isExternal = buttonLink.startsWith("tel:") || buttonLink.startsWith("mailto:");

  const btnClass = variant === "red"
    ? "btn-outline-light"
    : "btn-red";

  const btn = isExternal
    ? <a href={buttonLink} className={btnClass}>{buttonText}</a>
    : <Link href={buttonLink} className={btnClass}>{buttonText}</Link>;

  return (
    <section className={variant === "red" ? "bg-brand" : "bg-ink-lighter"}>
      <div className="wrap section-pad">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
              {heading}
            </h2>
            {subtext && (
              <p className={`mt-3 text-base font-medium ${variant === "red" ? "text-white/75" : "text-white/50"}`}>
                {subtext}
              </p>
            )}
          </div>
          {btn}
        </div>
      </div>
    </section>
  );
}
