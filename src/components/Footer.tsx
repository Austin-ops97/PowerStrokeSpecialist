import { BUSINESS_INFO, NAV_LINKS, SERVICES } from "@/lib/constants";
import { Facebook, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-dark-card border-t-4 border-accent">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:px-12">

        {/* Brand column */}
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="relative h-11 w-11 shrink-0">
              <Image
                src="/images/logo-power-stroke-specialist.png"
                alt="Power Stroke Specialist"
                fill
                className="object-contain object-left"
                sizes="44px"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold tracking-tight text-white">Power Stroke</span>
              <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.32em] text-accent">Specialist</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-text-muted">
            Diesel performance and honest repair — built for drivers who demand factory-level
            precision and real-world durability.
          </p>
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-white"
          >
            <Facebook size={16} strokeWidth={1.75} />
            Facebook
          </a>
        </div>

        {/* Navigate */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">Navigate</h4>
          <ul className="mt-5 space-y-3 text-sm text-text-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-text-muted">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link href="/services" className="transition-colors hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">Contact</h4>
          <ul className="mt-5 space-y-5 text-sm text-text-muted">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" strokeWidth={1.75} />
              <span>
                {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="shrink-0 text-accent" strokeWidth={1.75} />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="transition-colors hover:text-white">
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </li>
            <li className="text-xs uppercase tracking-wider text-white/40">
              <p>Mon–Fri &nbsp;8:00 AM — 6:00 PM</p>
              <p className="mt-1">Saturday &amp; Sunday — Closed</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-text-muted sm:flex-row sm:text-left sm:px-8 lg:px-12">
          <p>&copy; {new Date().getFullYear()} Power Stroke Specialist. All rights reserved.</p>
          <p className="text-white/25">Craft &middot; Diagnostics &middot; Reliability</p>
        </div>
      </div>
    </footer>
  );
}
