import { BUSINESS_INFO } from "@/lib/constants";
import { Facebook, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOGO = "https://2pbqjgxycewduhvh.public.blob.vercel-storage.com/PowerStroke/Untitled_Artwork.png";

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      {/* Texas flag stripe */}
      <div className="flex h-1 w-full">
        <div className="flex-[2] bg-navy" />
        <div className="flex-[1] bg-white/25" />
        <div className="flex-[1] bg-action" />
      </div>

      <div className="wrap py-6 sm:py-10 sm:py-12">
        <div className="grid gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <span className="relative h-10 w-10 shrink-0 sm:h-14 sm:w-14">
                <Image src={LOGO} alt="Power Stroke Specialist" fill className="object-contain" sizes="56px" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[13px] font-black tracking-tight text-white sm:text-[15px]">POWER STROKE</span>
                <span className="mt-0.5 text-[8px] font-black tracking-[0.3em] text-navy-light sm:text-[9px]">SPECIALIST</span>
              </span>
            </Link>
            <p className="mt-3 hidden max-w-[240px] text-sm font-medium leading-relaxed text-white/40 sm:block">
              Baytown&apos;s trusted bumper-to-bumper repair shop. Gas &amp; diesel — we do it all.
            </p>
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/40 transition-colors hover:text-white sm:mt-4"
            >
              <Facebook size={15} strokeWidth={2} />
              Facebook
            </a>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/25">Contact</p>
            <ul className="mt-2 space-y-2 sm:mt-4 sm:space-y-4">
              <li className="flex gap-3">
                <Phone size={14} className="mt-0.5 shrink-0 text-action" strokeWidth={2} />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-base font-bold text-white transition-colors hover:text-action">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-navy-light" strokeWidth={2} />
                <span className="text-sm font-medium leading-snug text-white/50">
                  {BUSINESS_INFO.address},<br />
                  {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/25">Hours</p>
            <ul className="mt-2 space-y-1 sm:mt-4 sm:space-y-2">
              <li className="text-sm font-semibold text-white/70">Mon – Fri &nbsp; 8:00 AM – 6:00 PM</li>
              <li className="text-sm font-medium text-white/30">Saturday &amp; Sunday — Closed</li>
            </ul>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-action mt-4 inline-flex text-[11px] sm:mt-6">
              <Phone size={13} strokeWidth={2.5} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="wrap flex flex-col items-center justify-between gap-1 py-3 sm:py-4 sm:flex-row">
          <p className="text-xs font-medium text-white/25">
            &copy; {new Date().getFullYear()} Power Stroke Specialist. All rights reserved.
          </p>
          <p className="text-xs text-white/15">Baytown, Texas</p>
        </div>
      </div>
    </footer>
  );
}
