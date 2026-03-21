import { BUSINESS_INFO, NAV_LINKS, SERVICES } from "@/lib/constants";
import { Facebook, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-black">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:py-20">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/images/logo.png" alt="Power Stroke Specialist" width={140} height={48} className="h-10 w-auto object-contain" />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-text-muted">
            Flagship diesel and automotive service in Baytown—focused on honest diagnostics, disciplined workmanship, and
            Power Stroke builds done to a standard, not a shortcut.
          </p>
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-accent-blue transition-colors hover:text-text-white"
          >
            <Facebook size={16} strokeWidth={1.75} />
            Facebook
          </a>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-[11px] font-semibold uppercase tracking-brand text-accent-blue">Navigate</h4>
          <ul className="mt-5 space-y-3 text-sm text-text-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-brand text-accent-blue">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-text-muted">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link href="/services" className="transition-colors hover:text-text-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-brand text-accent-blue">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-text-muted">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" strokeWidth={1.75} />
              <span>
                {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="shrink-0 text-accent" strokeWidth={1.75} />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="font-medium text-text-white hover:text-accent-blue">
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </li>
            <li>
              <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
              <p>Sat–Sun: Closed</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center text-[11px] uppercase tracking-brand text-text-muted sm:flex-row sm:text-left sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} Power Stroke Specialist. All rights reserved.</p>
          <p className="text-text-muted/80">Ford Power Stroke · Diesel · Fleet · Performance</p>
        </div>
      </div>
    </footer>
  );
}
