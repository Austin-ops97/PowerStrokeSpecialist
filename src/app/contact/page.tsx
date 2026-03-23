import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTABanner";
import GoogleMap from "@/components/GoogleMap";
import { BUSINESS_INFO, HOURS } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import { Clock3, Facebook, MapPin, Phone } from "lucide-react";

export const metadata = buildMetadata(
  "Contact",
  "Contact Power Stroke Specialist in Baytown TX — schedule service, ask about bulletproofing, or request a quote for any diesel or auto repair.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      {/* Header — slate-50 */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="wrap section-pad">
          <span className="label">
            <span className="h-px w-5 bg-navy" />
            Get in Touch
          </span>
          <h1 className="mt-5 text-[clamp(40px,7vw,80px)] font-black leading-[0.93] tracking-tighter text-slate-900">
            Contact Us.
          </h1>
          <p className="mt-5 max-w-lg text-lg font-medium leading-relaxed text-slate-500">
            Questions, quotes, or appointment requests — we respond during shop hours.
          </p>
        </div>
      </section>

      {/* Form + info — white */}
      <section className="bg-white">
        <div className="wrap section-pad">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

            {/* Form */}
            <ContactForm />

            {/* Info */}
            <div>
              <h2 className="text-xl font-black tracking-tight text-slate-900">Shop Info</h2>
              <div className="mt-6 divide-y divide-slate-100 border border-slate-200">

                <InfoRow icon={MapPin} label="Address" accent="navy">
                  <span className="text-sm font-semibold text-slate-700">
                    {BUSINESS_INFO.address}<br />
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                  </span>
                </InfoRow>

                <InfoRow icon={Phone} label="Phone" accent="action">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-sm font-bold text-action hover:text-action-dark"
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </InfoRow>

                <InfoRow icon={Clock3} label="Hours" accent="navy">
                  <ul className="space-y-2">
                    {HOURS.map((e) => (
                      <li key={e.day} className="flex justify-between gap-6">
                        <span className="text-sm font-semibold text-slate-700">{e.day}</span>
                        <span className={`text-sm font-medium ${e.isOpen ? "text-slate-500" : "text-slate-300"}`}>
                          {e.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </InfoRow>

                <InfoRow icon={Facebook} label="Facebook" accent="navy">
                  <a
                    href={BUSINESS_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-navy hover:text-navy-dark"
                  >
                    Visit our page →
                  </a>
                </InfoRow>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map — full width */}
      <div className="border-y border-slate-200">
        <GoogleMap />
      </div>

      <CTABanner
        heading="Prefer to Talk?"
        subtext="Call now and we'll help plan your next repair or upgrade."
        buttonText={BUSINESS_INFO.phoneFormatted}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="navy"
      />
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  accent,
  children,
}: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  label: string;
  accent: "navy" | "action";
  children: React.ReactNode;
}) {
  const bg = accent === "navy" ? "bg-navy-50 text-navy" : "bg-action-50 text-action";
  return (
    <div className="flex gap-4 p-5">
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center ${bg}`}>
        <Icon size={15} strokeWidth={2} />
      </span>
      <div>
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">{label}</p>
        {children}
      </div>
    </div>
  );
}
