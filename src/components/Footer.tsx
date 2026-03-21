import { BUSINESS_INFO, NAV_LINKS, SERVICES } from "@/lib/constants";
import { Facebook, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-dark-card pb-10 pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-display text-3xl uppercase tracking-[0.06em] text-accent">Power Stroke Specialist</h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Baytown&apos;s trusted diesel and full-service mechanic shop focused on honest repairs and dependable results.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            We specialize in Power Stroke bulletproofing and full vehicle service for drivers across Texas.
          </p>
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light"
          >
            <Facebook size={16} />
            Facebook
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-white">Quick Access</h4>
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
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-white">Services</h4>
          <ul className="mt-4 space-y-3 text-sm text-text-muted">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link href="/services" className="transition-colors hover:text-accent">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-white">Contact Info</h4>
          <ul className="mt-4 space-y-4 text-sm text-text-muted">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 text-accent" />
              <span>
                {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="text-accent" />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-accent">
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </li>
            <li>
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat-Sun: Closed</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border-subtle px-4 pt-6 text-center text-sm text-text-muted sm:px-6 lg:px-8">
        © 2026 Power Stroke Specialist. All rights reserved.
      </div>
    </footer>
  );
}
