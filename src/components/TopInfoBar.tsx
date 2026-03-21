import { BUSINESS_INFO } from "@/lib/constants";
import { Clock3, MapPin, Phone } from "lucide-react";

export default function TopInfoBar() {
  return (
    <div className="border-b border-border-subtle bg-bg-dark-card">
      <div className="h-0.5 w-full bg-gradient-to-r from-accent via-accent-blue to-accent" aria-hidden />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-brand text-text-muted sm:flex-row sm:justify-between sm:px-8 lg:px-12">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="inline-flex items-center gap-2 text-text-white transition-colors hover:text-accent-blue"
        >
          <Phone size={13} strokeWidth={2} className="text-accent" />
          {BUSINESS_INFO.phoneFormatted}
        </a>
        <p className="hidden items-center gap-2 sm:inline-flex">
          <MapPin size={13} strokeWidth={2} className="text-accent-blue" />
          <span>
            {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
          </span>
        </p>
        <p className="hidden items-center gap-2 md:inline-flex">
          <Clock3 size={13} strokeWidth={2} className="text-accent-blue" />
          Mon–Fri 8:00 AM – 6:00 PM
        </p>
      </div>
    </div>
  );
}
