import { BUSINESS_INFO } from "@/lib/constants";
import { Clock3, MapPin, Phone } from "lucide-react";

export default function TopInfoBar() {
  return (
    <div className="relative bg-accent">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:justify-between sm:px-8 lg:px-12">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Phone size={12} strokeWidth={2} />
          {BUSINESS_INFO.phoneFormatted}
        </a>
        <p className="hidden items-center gap-2 sm:inline-flex">
          <MapPin size={12} strokeWidth={2} />
          <span>
            {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
          </span>
        </p>
        <p className="hidden items-center gap-2 lg:inline-flex">
          <Clock3 size={12} strokeWidth={2} />
          Mon–Fri &nbsp;8:00 AM — 6:00 PM
        </p>
      </div>
    </div>
  );
}
