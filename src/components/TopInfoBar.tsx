import { BUSINESS_INFO } from "@/lib/constants";
import { Clock3, MapPin, Phone } from "lucide-react";

export default function TopInfoBar() {
  return (
    <div className="border-b border-accent/30 bg-accent text-text-dark">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wide sm:justify-between sm:px-6 lg:px-8">
        <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-1.5 hover:underline">
          <Phone size={14} />
          {BUSINESS_INFO.phoneFormatted}
        </a>
        <p className="hidden items-center gap-1.5 sm:inline-flex">
          <MapPin size={14} />
          {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
        </p>
        <p className="hidden items-center gap-1.5 md:inline-flex">
          <Clock3 size={14} />
          Mon-Fri 8:00 AM - 6:00 PM
        </p>
      </div>
    </div>
  );
}
