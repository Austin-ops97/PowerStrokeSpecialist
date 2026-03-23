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
  "Power Stroke Specialist in Baytown TX delivers diesel repair, Power Stroke bulletproofing, diagnostics, and full-service mechanic work you can trust.",
  "/"
);

export default function HomePage() {
  return (
    <>
      {/* Hero — black */}
      <Hero />

      {/* Credentials — white */}
      <TrustBadges />

      {/* Services grid — light gray */}
      <section className="bg-chalk">
        <div className="wrap section-pad">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-6 bg-brand" />
              What We Do
            </span>
            <h2 className="mt-5 text-5xl font-black tracking-tighter text-ink sm:text-6xl">
              Our Services.
            </h2>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-zinc-500">
              From routine maintenance to complete Power Stroke rebuilds — if it moves, we can fix it.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 0.06}>
                <ServiceCard name={service.name} shortDescription={service.shortDescription} icon={service.icon} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-brand transition-colors hover:text-brand-dark"
            >
              View All {SERVICES.length} Services
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bulletproof feature — black */}
      <BulletproofHero />

      {/* Reviews — white */}
      <section className="bg-chalk-card border-y border-zinc-100">
        <div className="wrap section-pad">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-6 bg-brand" />
              Customer Reviews
            </span>
            <h2 className="mt-5 text-5xl font-black tracking-tighter text-ink sm:text-6xl">
              What Customers Say.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, idx) => (
              <ScrollReveal key={review.id} delay={idx * 0.1}>
                <ReviewCard name={review.name} text={review.text} rating={review.rating} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location — dark */}
      <section className="bg-ink">
        <div className="wrap section-pad">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-6 bg-brand" />
              Find Us
            </span>
            <h2 className="mt-5 text-5xl font-black tracking-tighter text-white sm:text-6xl">
              Come See Us.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Map */}
            <GoogleMap />

            {/* Info */}
            <div className="space-y-6">
              <div className="flex gap-4 border-l-4 border-brand pl-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">Address</p>
                  <p className="mt-1 text-base font-semibold text-white">
                    {BUSINESS_INFO.address}<br />
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-brand pl-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">Phone</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="mt-1 block text-base font-semibold text-white hover:text-brand">
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-brand pl-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">Hours</p>
                  <p className="mt-1 text-base font-semibold text-white">Mon – Fri &nbsp; 8:00 AM – 6:00 PM</p>
                  <p className="text-sm font-medium text-white/40">Saturday &amp; Sunday — Closed</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${BUSINESS_INFO.address}, ${BUSINESS_INFO.city}, ${BUSINESS_INFO.state} ${BUSINESS_INFO.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light"
                >
                  <MapPin size={14} strokeWidth={2.5} />
                  Get Directions
                </a>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-red">
                  <Phone size={14} strokeWidth={2.5} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — red */}
      <CTABanner
        heading="Ready to Get Started?"
        subtext="Call to schedule diagnostics, repair, or a bulletproofing consultation."
        buttonText={BUSINESS_INFO.phoneFormatted}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="red"
      />
    </>
  );
}
