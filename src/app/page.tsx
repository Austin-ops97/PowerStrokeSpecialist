import BulletproofSection from "@/components/BulletproofSection";
import CTABanner from "@/components/CTABanner";
import GoogleMap from "@/components/GoogleMap";
import Hero from "@/components/Hero";
import ReviewCard from "@/components/ReviewCard";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { BUSINESS_INFO, REVIEWS, SERVICES, TRUST_STATS } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import { Bus, ShieldCheck, Truck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trustIcons = {
  Wrench,
  Truck,
  ShieldCheck,
  Bus,
};

export const metadata = buildMetadata(
  "Home",
  "Power Stroke Specialist is Baytown TX's trusted diesel mechanic for bulletproofing, diagnostics, fleet maintenance, and complete automotive repair services.",
  "/"
);

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <>
      <Hero />

      <section className="bg-accent/90 py-5">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {TRUST_STATS.map((stat) => {
            const Icon = trustIcons[stat.icon as keyof typeof trustIcons] ?? Wrench;
            return (
              <div key={stat.label} className="flex items-center gap-3 rounded-lg bg-black/20 px-4 py-3 text-white">
                <Icon size={22} />
                <p className="text-sm font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <ScrollReveal>
        <section className="section-container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Who We Are</p>
            <h2 className="mt-3 font-display text-4xl uppercase">The Shop You Can Trust</h2>
            <div className="section-divider" />
            <p className="mt-6 text-text-muted">
              We provide full bumper-to-bumper service for all vehicle types and specialize in dependable diesel work.
              With advanced diagnostic tools and experienced technicians, we solve issues the right way.
            </p>
            <p className="mt-4 text-text-muted">
              No job is too big or too small. Our team takes pride in honest recommendations and quality workmanship
              that keeps customers coming back from across Texas.
            </p>
            <Link href="/about" className="btn-primary mt-7 inline-flex">
              Learn More About Us
            </Link>
          </div>
          <div>
            <Image
              src="/images/shop-building.svg"
              alt="Power Stroke Specialist shop building in Baytown Texas"
              width={900}
              height={560}
              className="h-auto w-full rounded-xl border border-border"
            />
          </div>
        </section>
      </ScrollReveal>

      <section className="section-container">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Our Services</p>
          <h2 className="mt-3 font-display text-4xl uppercase">What We Do</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <ServiceCard name={service.name} description={service.description} icon={service.icon} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-primary-light p-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="max-w-3xl text-text-muted">
              We offer 13+ services and specialize in Power Stroke diesel engines. See the full list and call to discuss
              your exact needs.
            </p>
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <BulletproofSection />

      <section className="section-container">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">What Our Customers Say</p>
          <h2 className="mt-3 font-display text-4xl uppercase">Trusted By Many</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <ScrollReveal key={review.id} delay={index * 0.1}>
              <ReviewCard name={review.name} text={review.text} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-container grid gap-8 lg:grid-cols-2">
        <GoogleMap />
        <div className="card-base">
          <h2 className="font-display text-4xl uppercase">Come See Us</h2>
          <p className="mt-4 text-text-muted">
            {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
          </p>
          <p className="mt-2 text-text-muted">Mon-Fri: 8:00 AM - 6:00 PM</p>
          <p className="mt-2 text-text-muted">Sat-Sun: Closed</p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${BUSINESS_INFO.address}, ${BUSINESS_INFO.city}, ${BUSINESS_INFO.state} ${BUSINESS_INFO.zip}`)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Get Directions
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need dependable repairs from a trusted team?"
        subtext="Call now to schedule your service with Baytown's Power Stroke specialists."
        buttonText={`Call ${BUSINESS_INFO.phoneFormatted}`}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="accent"
      />
    </>
  );
}
