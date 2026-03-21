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
      <section className="relative overflow-hidden border-b border-border-subtle bg-bg-dark">
        <div className="absolute inset-0 bg-mesh-dark opacity-70" aria-hidden />
        <div className="section-container-tight relative text-center">
          <p className="section-eyebrow">Contact</p>
          <div className="accent-rule mx-auto mt-1" />
          <h1 className="mt-8 font-display text-4xl font-normal tracking-tight text-text-white sm:text-6xl">Let&apos;s talk</h1>
          <p className="mx-auto mt-5 max-w-xl text-text-muted sm:text-lg">
            Quotes, scheduling, and technical questions—send a message or call the shop direct.
          </p>
        </div>
      </section>

      <section className="section-container grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ContactForm />

        <div className="space-y-4">
          <InfoCard title="Address" icon={MapPin}>
            {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
          </InfoCard>
          <InfoCard title="Phone" icon={Phone}>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="font-medium text-text-white transition-colors hover:text-accent-blue">
              {BUSINESS_INFO.phoneFormatted}
            </a>
          </InfoCard>
          <InfoCard title="Hours" icon={Clock3}>
            <ul className="space-y-1.5 text-sm">
              {HOURS.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span className="text-text-white">{entry.day}</span>
                  <span className="text-text-muted">{entry.hours}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard title="Facebook" icon={Facebook}>
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-blue transition-colors hover:text-text-white"
            >
              Visit our page
            </a>
          </InfoCard>
        </div>
      </section>

      <section className="section-container pt-0">
        <GoogleMap />
      </section>

      <CTABanner
        heading="Want straight answers and a solid plan?"
        subtext="Call now and we will help scope your next repair or upgrade."
        buttonText={`Call ${BUSINESS_INFO.phoneFormatted}`}
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
    <article className="rounded-sm border border-border-subtle bg-bg-dark-card p-6 shadow-card transition-colors hover:border-border-strong md:p-7">
      <span className="inline-flex rounded-sm border border-border-strong bg-bg-dark p-3 text-accent">
        <Icon size={20} />
      </span>
      <h2 className="mt-5 font-display text-2xl font-normal text-text-white">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-text-muted">{children}</div>
    </article>
  );
}
