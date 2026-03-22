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
      {/* Page header */}
      <section className="relative overflow-hidden bg-bg-dark border-b border-border-subtle">
        <div className="pointer-events-none absolute inset-0 bg-line-grid bg-grid opacity-20" />
        <div className="absolute inset-0 bg-mesh-hero opacity-40" />
        {/* Red left stripe */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-accent" aria-hidden />
        <div className="section-container relative py-16 text-center sm:py-20">
          <p className="section-eyebrow">Get in Touch</p>
          <div className="accent-divider mx-auto" />
          <h1 className="editorial-title mt-6 text-5xl sm:text-6xl">Contact Us</h1>
          <p className="mx-auto mt-5 max-w-lg text-text-muted">
            Questions, quotes, or appointment requests — we respond during shop hours.
          </p>
        </div>
      </section>

      {/* Form + info cards */}
      <section className="section-container grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ContactForm />

        <div className="space-y-4">
          <InfoCard title="Address" icon={MapPin}>
            {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
          </InfoCard>
          <InfoCard title="Phone" icon={Phone}>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="font-bold text-accent transition-colors hover:text-accent-light"
            >
              {BUSINESS_INFO.phoneFormatted}
            </a>
          </InfoCard>
          <InfoCard title="Hours" icon={Clock3}>
            <ul className="space-y-2 text-sm">
              {HOURS.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span className="font-medium text-white">{entry.day}</span>
                  <span className={entry.isOpen ? "text-text-muted" : "text-text-muted/50"}>
                    {entry.hours}
                  </span>
                </li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard title="Facebook" icon={Facebook}>
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-blue transition-colors hover:text-white"
            >
              Visit our page
            </a>
          </InfoCard>
        </div>
      </section>

      {/* Map */}
      <section className="section-container pt-0">
        <GoogleMap />
      </section>

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

type InfoCardProps = {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  children: React.ReactNode;
};

function InfoCard({ title, icon: Icon, children }: InfoCardProps) {
  return (
    <article className="flex gap-5 border-l-4 border-accent bg-bg-dark-card p-6 md:p-7">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent text-white mt-0.5">
        <Icon size={17} strokeWidth={2} />
      </span>
      <div>
        <h2 className="font-display text-lg font-bold tracking-tight text-white">{title}</h2>
        <div className="mt-2 text-sm text-text-muted">{children}</div>
      </div>
    </article>
  );
}
