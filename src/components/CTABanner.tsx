import { Phone } from "lucide-react";
import Link from "next/link";

type Props = {
  heading: string;
  subtext?: string;
  buttonText: string;
  buttonLink: string;
  variant?: "action" | "navy";
};

export default function CTABanner({ heading, subtext, buttonText, buttonLink, variant = "navy" }: Props) {
  const isPhone = buttonLink.startsWith("tel:");
  const bg = variant === "action" ? "bg-action" : "bg-navy";

  return (
    <section className={`${bg} py-14 sm:py-20`}>
      <div className="wrap text-center">
        {/* Heading */}
        <h2 className="text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
          {heading}
        </h2>
        {subtext && (
          <p className="mx-auto mt-3 max-w-lg text-base font-medium text-white/65 sm:text-lg">
            {subtext}
          </p>
        )}

        {/* Big phone number / CTA */}
        <div className="mt-8">
          {isPhone ? (
            <a
              href={buttonLink}
              className="group inline-flex items-center justify-center gap-3 transition-opacity hover:opacity-90"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white/25">
                <Phone size={22} strokeWidth={2.5} className="text-white" />
              </span>
              <span className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {buttonText}
              </span>
            </a>
          ) : (
            <Link href={buttonLink} className="btn-outline-white mx-auto">
              {buttonText}
            </Link>
          )}
        </div>

        {isPhone && (
          <p className="mt-3 text-sm font-semibold text-white/45">Mon – Fri &nbsp;8:00 AM – 6:00 PM</p>
        )}
      </div>
    </section>
  );
}
