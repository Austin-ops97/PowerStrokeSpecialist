import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function SiteLogo({ className = "", priority }: SiteLogoProps) {
  return (
    <Link href="/" className={`group flex shrink-0 items-center gap-3 ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Power Stroke Specialist"
        width={140}
        height={140}
        className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-90 sm:h-11"
        priority={priority}
      />
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="font-display text-[1.35rem] font-light tracking-[0.02em] text-text-white sm:text-2xl">
          Power Stroke
        </span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.42em] text-brand-blue">Specialist</span>
      </span>
    </Link>
  );
}
