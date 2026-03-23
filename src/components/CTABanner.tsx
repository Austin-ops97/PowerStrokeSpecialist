import Link from "next/link";

type Props = {
  heading: string;
  subtext?: string;
  buttonText: string;
  buttonLink: string;
  variant?: "action" | "navy";
};

export default function CTABanner({ heading, subtext, buttonText, buttonLink, variant = "navy" }: Props) {
  const isExternal = buttonLink.startsWith("tel:") || buttonLink.startsWith("mailto:");
  const btnClass = variant === "action" ? "btn-outline-white" : "btn-outline-white";
  const bg = variant === "action" ? "bg-action" : "bg-navy";

  const btn = isExternal
    ? <a href={buttonLink} className={btnClass}>{buttonText}</a>
    : <Link href={buttonLink} className={btnClass}>{buttonText}</Link>;

  return (
    <section className={bg}>
      <div className="wrap section-pad">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">{heading}</h2>
            {subtext && (
              <p className="mt-3 text-base font-medium text-white/65">{subtext}</p>
            )}
          </div>
          {btn}
        </div>
      </div>
    </section>
  );
}
