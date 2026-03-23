import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import { BUSINESS_INFO, HOURS } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import { Clock3, Facebook, MapPin, Phone } from "lucide-react";

export const metadata = buildMetadata(
  "Contact",
  "Contact our Baytown TX diesel mechanic shop for Power Stroke bulletproofing, diagnostics, general repair, and appointment requests.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-md opacity-80" />
        <div className="wrap section-pad relative">
          <span className="label">
            <span className="h-px w-6 bg-brand" />
            Get in Touch
          </span>
          <h1 className="mt-5 text-[clamp(44px,7vw,88px)] font-black leading-[0.92] tracking-tighter text-white">
            Contact Us.
          </h1>
          <p className="mt-7 max-w-lg text-base font-medium leading-relaxed text-white/50">
            Questions, quotes, or appointment requests — we respond during shop hours.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-chalk-card border-y border-zinc-100">
        <div className="wrap section-pad">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Form */}
            <ContactForm />

            {/* Info */}
            <div className="space-y-0 divide-y divide-zinc-100">
              <InfoRow icon={MapPin} label="Address">
                {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
              </InfoRow>
              <InfoRow icon={Phone} label="Phone">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="font-bold text-brand transition-colors hover:text-brand-dark"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </InfoRow>
              <InfoRow icon={Clock3} label="Hours">
                <ul className="space-y-2">
                  {HOURS.map((entry) => (
                    <li key={entry.day} className="flex justify-between gap-6 text-sm">
                      <span className="font-semibold text-ink">{entry.day}</span>
                      <span className={entry.isOpen ? "text-zinc-500" : "text-zinc-300"}>
                        {entry.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </InfoRow>
              <InfoRow icon={Facebook} label="Facebook">
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Visit our page
                </a>
              </InfoRow>
            </div>
          </div>
        </div>
      </section>

      {/* Map — full width */}
      <GoogleMap />

      <CTABanner
        heading="Prefer to Talk It Through?"
        subtext="Call now and we'll help plan your next repair or upgrade."
        buttonText={BUSINESS_INFO.phoneFormatted}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="dark"
      />
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 py-6">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand text-white">
        <Icon size={16} strokeWidth={2.5} />
      </span>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">{label}</p>
        <div className="mt-1.5 text-sm font-medium text-zinc-600">{children}</div>
      </div>
    </div>
  );
}
