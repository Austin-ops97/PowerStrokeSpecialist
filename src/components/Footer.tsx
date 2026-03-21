import { BUSINESS_INFO, NAV_LINKS, SERVICES } from "@/lib/constants";
import { Facebook, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const topServices = SERVICES.slice(0, 6);

  return (
    <footer className="border-t border-border bg-primary pb-10 pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-display text-2xl uppercase tracking-wide">Power Stroke Specialist</h3>
          <p className="mt-3 text-sm text-text-muted">
            Baytown&apos;s trusted diesel and full-service mechanic shop delivering honest diagnostics and dependable repairs.
          </p>
          <p className="mt-2 text-sm text-text-muted">
            We specialize in Ford Power Stroke bulletproofing and keep vehicles across Texas running strong.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-text-primary">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm text-text-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-text-primary">Top Services</h4>
          <ul className="mt-4 space-y-3 text-sm text-text-muted">
            {topServices.map((service) => (
              <li key={service.id}>
                <Link href="/services" className="transition-colors hover:text-accent">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-text-primary">Contact</h4>
          <ul className="mt-4 space-y-4 text-sm text-text-muted">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 text-accent" size={16} />
              <span>
                {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="text-accent" size={16} />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-accent">
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </li>
            <li className="flex gap-2">
              <Facebook className="text-accent" size={16} />
              <a href={BUSINESS_INFO.facebookUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-4 pt-6 text-center text-sm text-text-muted sm:px-6 lg:px-8">
        <p>© 2026 Power Stroke Specialist. All rights reserved.</p>
      </div>
    </footer>
  );
}
