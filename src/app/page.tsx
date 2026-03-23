import BulletproofHero from "@/components/BulletproofHero";
import CTABanner from "@/components/CTABanner";
import GoogleMap from "@/components/GoogleMap";
import Hero from "@/components/Hero";
import ReviewCard from "@/components/ReviewCard";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import TrustBadges from "@/components/TrustBadges";
import { BUSINESS_INFO, REVIEWS, SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata(
  "Home",
  "Power Stroke Specialist — Baytown TX diesel mechanic. Ford Power Stroke bulletproofing, diagnostics, and full-service repair you can trust.",
  "/"
);

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero — white ── */}
      <Hero />

      {/* ── 2. Trust badges — slate-50 ── */}
      <TrustBadges />

      {/* ── 3. Services — white ── */}
      <section className="bg-white">
        <div className="wrap section-pad">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-5 bg-navy" />
              What We Do
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
              Our Services.
            </h2>
            <p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-slate-500">
              From routine maintenance to complete Power Stroke rebuilds — one shop, everything covered.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 0.05}>
                <ServiceCard name={s.name} shortDescription={s.shortDescription} icon={s.icon} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-navy transition-colors hover:text-navy-dark"
            >
              View All {SERVICES.length} Services
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Bulletproof — navy (one dark feature section) ── */}
      <BulletproofHero />

      {/* ── 5. Reviews — slate-50 ── */}
      <section className="bg-slate-50">
        <div className="wrap section-pad">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-5 bg-navy" />
              Customer Reviews
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
              What Customers Say.
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <ScrollReveal key={r.id} delay={i * 0.08}>
                <ReviewCard name={r.name} text={r.text} rating={r.rating} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Location — white ── */}
      <section className="border-t border-slate-200 bg-white">
        <div className="wrap section-pad">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-5 bg-navy" />
              Find Us
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
              Hours &amp; Location.
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <GoogleMap />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {/* Address */}
              <div className="flex gap-4 border border-slate-200 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy-50 text-navy">
                  <MapPin size={16} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Address</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {BUSINESS_INFO.address}<br />
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 border border-slate-200 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-action-50 text-action">
                  <Phone size={16} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="mt-1 block text-sm font-semibold text-slate-700 hover:text-action">
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 border border-slate-200 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy-50 text-navy">
                  <Clock3 size={16} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Hours</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">Mon – Fri &nbsp;8:00 AM – 6:00 PM</p>
                  <p className="text-sm text-slate-400">Saturday &amp; Sunday — Closed</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${BUSINESS_INFO.address}, ${BUSINESS_INFO.city}, ${BUSINESS_INFO.state} ${BUSINESS_INFO.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <MapPin size={14} strokeWidth={2.5} />
                  Get Directions
                </a>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-action">
                  <Phone size={14} strokeWidth={2.5} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA — action red ── */}
      <CTABanner
        heading="Ready to Get Started?"
        subtext="Call to schedule diagnostics, repair, or a bulletproofing consultation."
        buttonText={BUSINESS_INFO.phoneFormatted}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="action"
      />
    </>
  );
}
