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
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = buildMetadata(
  "Home",
  "Power Stroke Specialist in Baytown TX delivers diesel repair, Power Stroke bulletproofing, diagnostics, and full-service mechanic work you can trust.",
  "/"
);

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — dark navy */}
      <Hero />

      {/* 2. Credentials strip — white */}
      <TrustBadges />

      {/* 3. Services grid — light gray */}
      <section className="bg-chalk">
        <div className="wrap section-pad">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-6 bg-accent" />
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

          <div className="mt-10">
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

      {/* 4. Shop photo — full-width cinematic section */}
      <section className="relative h-[520px] overflow-hidden sm:h-[600px] lg:h-[680px]">
        <Image
          src="/images/shop-exterior.jpg"
          alt="Power Stroke Specialist shop in Baytown, Texas"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        {/* Dark navy overlay */}
        <div className="absolute inset-0 bg-ink/75" />

        {/* Texas flag accent stripe at top of image */}
        <div className="absolute left-0 right-0 top-0 flex h-1 w-full">
          <div className="flex-1 bg-accent" />
          <div className="flex-1 bg-white/30" />
          <div className="flex-1 bg-brand" />
        </div>

        {/* Content anchored to bottom-left */}
        <div className="absolute inset-0 flex items-end">
          <div className="wrap pb-16">
            <ScrollReveal>
              <span className="label">
                <span className="h-px w-6 bg-accent" />
                Our Shop
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl">
                Come See Us in<br />Baytown, Texas.
              </h2>
              <p className="mt-4 max-w-md text-base font-medium text-white/60">
                {BUSINESS_INFO.address} &mdash; {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-red">
                  <Phone size={15} strokeWidth={2.5} />
                  {BUSINESS_INFO.phoneFormatted}
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${BUSINESS_INFO.address}, ${BUSINESS_INFO.city}, ${BUSINESS_INFO.state} ${BUSINESS_INFO.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light"
                >
                  <MapPin size={14} strokeWidth={2.5} />
                  Get Directions
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Bulletproof feature — dark navy */}
      <BulletproofHero />

      {/* 6. Reviews — white */}
      <section className="bg-chalk-card border-y border-zinc-100">
        <div className="wrap section-pad">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-6 bg-accent" />
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

      {/* 7. Map + Location — dark navy */}
      <section className="bg-ink">
        <div className="wrap section-pad">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-6 bg-accent" />
              Find Us
            </span>
            <h2 className="mt-5 text-5xl font-black tracking-tighter text-white sm:text-6xl">
              Hours &amp; Location.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <GoogleMap />

            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">Address</p>
                <p className="mt-1 text-base font-semibold text-white">
                  {BUSINESS_INFO.address}<br />
                  {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                </p>
              </div>

              <div className="border-l-4 border-brand pl-6">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">Phone</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="mt-1 block text-base font-semibold text-white hover:text-brand">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">Hours</p>
                <p className="mt-1 text-base font-semibold text-white">Mon – Fri &nbsp; 8:00 AM – 6:00 PM</p>
                <p className="text-sm font-medium text-white/40">Saturday &amp; Sunday — Closed</p>
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

      {/* 8. CTA — Texas red */}
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
