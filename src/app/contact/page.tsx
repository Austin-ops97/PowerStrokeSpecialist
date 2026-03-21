import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import { BUSINESS_INFO, HOURS } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import { Clock3, Facebook, MapPin, Phone } from "lucide-react";

export const metadata = buildMetadata(
  "Contact",
  "Contact Power Stroke Specialist in Baytown TX for diesel repair, Power Stroke bulletproofing, and full-service mechanic quotes and appointments.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary-light/40">
        <div className="section-container py-14 text-center sm:py-16">
          <h1 className="font-display text-5xl uppercase sm:text-6xl">Contact Us</h1>
          <p className="mt-4 text-text-muted">Questions? Need a quote? We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="section-container grid gap-8 lg:grid-cols-2">
        <ContactForm />

        <div className="space-y-5">
          <InfoCard icon={MapPin} title="Address">
            {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
          </InfoCard>

          <InfoCard icon={Phone} title="Phone">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-accent hover:underline">
              {BUSINESS_INFO.phoneFormatted}
            </a>
          </InfoCard>

          <InfoCard icon={Clock3} title="Hours">
            <ul className="space-y-1">
              {HOURS.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-4 text-sm">
                  <span>{entry.day}</span>
                  <span className="text-text-muted">{entry.hours}</span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard icon={Facebook} title="Social">
            <a href={BUSINESS_INFO.facebookUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline">
              Follow us on Facebook
            </a>
          </InfoCard>
        </div>
      </section>

      <section className="section-container pt-0">
        <GoogleMap />
      </section>

      <CTABanner
        heading="Ready for reliable service?"
        subtext="Call now and we'll help you plan your next repair or upgrade."
        buttonText={`Call ${BUSINESS_INFO.phoneFormatted}`}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="dark"
      />
    </>
  );
}

type InfoCardProps = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: React.ReactNode;
};

function InfoCard({ icon: Icon, title, children }: InfoCardProps) {
  return (
    <article className="card-base">
      <div className="mb-3 inline-flex rounded-full bg-accent/10 p-3 text-accent">
        <Icon size={20} />
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 text-text-muted">{children}</div>
    </article>
  );
}
