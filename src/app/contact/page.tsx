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
      <section className="bg-bg-dark-card">
        <div className="section-container py-14 text-center sm:py-16">
          <h1 className="font-display text-6xl uppercase text-text-white">Contact Us</h1>
          <p className="mt-4 text-text-muted">Questions? Need a quote? We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="section-container grid gap-8 lg:grid-cols-2">
        <ContactForm />

        <div className="space-y-5">
          <InfoCard title="Address" icon={MapPin}>
            {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
          </InfoCard>
          <InfoCard title="Phone" icon={Phone}>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="font-medium text-accent hover:underline">
              {BUSINESS_INFO.phoneFormatted}
            </a>
          </InfoCard>
          <InfoCard title="Hours" icon={Clock3}>
            <ul className="space-y-1 text-sm">
              {HOURS.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span>{entry.day}</span>
                  <span className="text-text-muted">{entry.hours}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard title="Facebook" icon={Facebook}>
            <a href={BUSINESS_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
              Visit our Facebook page
            </a>
          </InfoCard>
        </div>
      </section>

      <section className="section-container pt-0">
        <GoogleMap />
      </section>

      <CTABanner
        heading="Need dependable service and straight answers?"
        subtext="Call now and we will help plan your next repair or upgrade."
        buttonText={`Call ${BUSINESS_INFO.phoneFormatted}`}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="dark"
      />
    </>
  );
}

type InfoCardProps = {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
};

function InfoCard({ title, icon: Icon, children }: InfoCardProps) {
  return (
    <article className="card-base">
      <span className="inline-flex rounded-full bg-accent/10 p-3 text-accent">
        <Icon size={20} />
      </span>
      <h2 className="mt-4 text-2xl font-semibold text-text-white">{title}</h2>
      <div className="mt-3 text-text-muted">{children}</div>
    </article>
  );
}
