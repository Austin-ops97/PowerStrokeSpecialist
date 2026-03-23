import { BUSINESS_INFO, NAV_LINKS, SERVICES } from "@/lib/constants";
import { Facebook, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      {/* Texas flag stripe: blue | white | red */}
      <div className="flex h-1 w-full">
        <div className="flex-[2] bg-navy" />
        <div className="flex-[1] bg-white/30" />
        <div className="flex-[1] bg-action" />
      </div>

      <div className="wrap section-pad">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative h-9 w-9 shrink-0">
                <Image
                  src="https://2pbqjgxycewduhvh.public.blob.vercel-storage.com/PowerStroke/Untitled_Artwork.png"
                  alt="Power Stroke Specialist"
                  fill
                  className="object-contain"
                  sizes="36px"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[13px] font-black tracking-tight text-white">POWER STROKE</span>
                <span className="mt-0.5 text-[8px] font-black tracking-[0.3em] text-navy-light">SPECIALIST</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm font-medium leading-relaxed text-white/40">
              Honest diesel repair and Ford Power Stroke bulletproofing in Baytown, Texas. Built for working trucks.
            </p>
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/40 transition-colors hover:text-white"
            >
              <Facebook size={15} strokeWidth={2} />
              Facebook
            </a>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/25">Navigate</p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-medium text-white/50 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/25">Services</p>
            <ul className="mt-4 space-y-3">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link href="/services" className="text-sm font-medium text-white/50 transition-colors hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/25">Contact</p>
            <ul className="mt-4 space-y-5">
              <li className="flex gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-navy-light" strokeWidth={2} />
                <span className="text-sm font-medium leading-snug text-white/50">
                  {BUSINESS_INFO.address},<br />
                  {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={14} className="shrink-0 text-action" strokeWidth={2} />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm font-medium text-white/50 transition-colors hover:text-white">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </li>
              <li>
                <p className="text-[11px] font-bold uppercase tracking-wide text-white/25">Mon – Fri &nbsp;8 AM – 6 PM</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-white/15">Sat – Sun &nbsp;Closed</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="wrap flex flex-col items-center justify-between gap-2 py-5 sm:flex-row">
          <p className="text-xs font-medium text-white/25">
            &copy; {new Date().getFullYear()} Power Stroke Specialist. All rights reserved.
          </p>
          <p className="text-xs font-medium text-white/15">Baytown, Texas</p>
        </div>
      </div>
    </footer>
  );
}
