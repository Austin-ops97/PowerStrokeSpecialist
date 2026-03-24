import BulletproofHero from "@/components/BulletproofHero";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import Hero from "@/components/Hero";
import QuoteButton from "@/components/QuoteButton";
import ReviewCard from "@/components/ReviewCard";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import TrustBadges from "@/components/TrustBadges";
import { BUSINESS_INFO, HOURS, REVIEWS, SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/site";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Facebook,
  Gauge,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Wallet,
  Wrench,
} from "lucide-react";

export const metadata = buildMetadata(
  "Home",
  "Power Stroke Specialist — Baytown TX bumper-to-bumper gas & diesel mechanic. Ford Power Stroke bulletproofing, diagnostics, and full-service repair.",
  "/"
);

const shopValues = [
  { icon: Wallet,      label: "Honest Pricing",       sub: "No surprises. You know the cost before we start." },
  { icon: Wrench,      label: "Power Stroke Experts",  sub: "Deep Ford 6.0L and 7.3L specialization." },
  { icon: Gauge,       label: "Advanced Diagnostics",  sub: "We find the real problem — not a guess." },
  { icon: ShieldCheck, label: "Trusted Across Texas",  sub: "Customers drive from all over to see us." },
  { icon: BadgeCheck,  label: "Any Size Job",          sub: "Oil changes to complete engine rebuilds." },
  { icon: Truck,       label: "Fleet Support",         sub: "Keep your commercial vehicles in service." },
];

const SHOP_IMG = "https://2pbqjgxycewduhvh.public.blob.vercel-storage.com/PowerStroke/Screenshot%202026-03-23%20at%2010.19.10%E2%80%AFAM.png";

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section id="home">
        <Hero />
      </section>

      {/* ─── TRUST BADGES ─── */}
      <TrustBadges />

      {/* ─── SERVICES ─── */}
      <section id="services" className="bg-white">
        <div className="wrap py-14 sm:py-20 lg:py-28">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-5 bg-navy" />
              What We Do
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
              Bumper to Bumper.<br />
              <span className="text-navy">Gas &amp; Diesel.</span>
            </h2>
            <p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-slate-500">
              If it has an engine, we work on it. From routine maintenance to complete rebuilds —
              one shop, every service covered.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 0.04}>
                <ServiceCard name={s.name} shortDescription={s.shortDescription} icon={s.icon} />
              </ScrollReveal>
            ))}
          </div>

          {/* Specialty callouts */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ScrollReveal>
              <div className="flex gap-4 border border-navy/20 bg-navy-50 p-6">
                <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                <div>
                  <p className="font-black text-navy">Power Stroke Bulletproofing</p>
                  <p className="mt-1 text-sm text-slate-500">Our signature service — Ford 6.0L &amp; 7.3L reliability upgrades.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <div className="flex gap-4 border border-slate-200 bg-slate-50 p-6">
                <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                <div>
                  <p className="font-black text-slate-700">Aftermarket &amp; Upgrades</p>
                  <p className="mt-1 text-sm text-slate-500">Lift kits, exhaust, tuning, suspension — tell us your goal.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-navy inline-flex">
              Schedule Service
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
            <QuoteButton className="btn-outline inline-flex" />
          </div>
        </div>
      </section>

      {/* ─── BULLETPROOF ─── */}
      <BulletproofHero />

      {/* ─── ABOUT ─── */}
      <section id="about" className="bg-white">
        <div className="wrap py-14 sm:py-20 lg:py-28">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-5 bg-navy" />
              Our Shop
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
              Built on Trust &amp;<br />
              <span className="text-navy">Experience.</span>
            </h2>
          </ScrollReveal>

          {/* Story + photo */}
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <ScrollReveal>
              <p className="text-base font-medium leading-relaxed text-slate-500">
                We work on and fix all sorts of vehicle issues. Our team is knowledgeable, skilled,
                and dedicated to making vehicles run like new again.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-500">
                Finding a trustworthy mechanic is hard. That&apos;s why customers from Baytown and
                across Texas choose us for straight answers and workmanship that holds up.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 divide-x divide-slate-200 border border-slate-200">
                {[
                  { v: "100+", l: "Engines" },
                  { v: "10+",  l: "Years" },
                  { v: "Gas+Diesel", l: "Engines" },
                ].map((s) => (
                  <div key={s.l + s.v} className="px-4 py-5 text-center">
                    <p className="text-2xl font-black tracking-tight text-navy">{s.v}</p>
                    <p className="mt-1 text-[9px] font-black uppercase tracking-widest text-slate-400">{s.l}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Shop photo */}
            <ScrollReveal delay={0.1}>
              <div className="relative">
                <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-navy/15" />
                <div className="relative overflow-hidden rounded-2xl border border-slate-200" style={{ aspectRatio: "16/10" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={SHOP_IMG}
                    alt="Power Stroke Specialist shop exterior"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-navy px-5 py-2.5">
                    <p className="text-xs font-bold text-white/80">711 Massey Tompkins Rd · Baytown, TX 77521</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Values grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shopValues.map((v, i) => (
              <ScrollReveal key={v.label} delay={i * 0.05}>
                <div className="border border-slate-200 p-6 transition-shadow hover:shadow-card">
                  <v.icon size={20} strokeWidth={2} className="text-navy" />
                  <h3 className="mt-4 text-base font-black text-slate-900">{v.label}</h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-slate-500">{v.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="wrap py-14 sm:py-20 lg:py-28">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-5 bg-navy" />
              Reviews
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
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
          <div className="mt-8">
            <a href={BUSINESS_INFO.facebookUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-navy-dark">
              <Facebook size={15} strokeWidth={2} />
              Leave a Review on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="bg-white">
        <div className="wrap py-14 sm:py-20 lg:py-28">
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-5 bg-navy" />
              Get in Touch
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
              Contact Us.
            </h2>
            <p className="mt-3 max-w-lg text-base font-medium text-slate-500">
              Questions, quotes, or appointments — we respond during shop hours.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>

            {/* Info panel */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-0 divide-y divide-slate-100 border border-slate-200">

                <div className="flex gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-action-50 text-action">
                    <Phone size={16} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone</p>
                    <a href={`tel:${BUSINESS_INFO.phone}`}
                      className="mt-1 block text-xl font-black text-slate-900 hover:text-action">
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 p-5">
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

                <div className="flex gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy-50 text-navy">
                    <Clock3 size={16} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Hours</p>
                    <ul className="mt-2 space-y-1.5">
                      {HOURS.map((e) => (
                        <li key={e.day} className="flex justify-between gap-8">
                          <span className="text-sm font-semibold text-slate-700">{e.day}</span>
                          <span className={`text-sm ${e.isOpen ? "text-slate-500" : "text-slate-300"}`}>{e.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <div className="mt-10">
            <ScrollReveal>
              <GoogleMap />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTABanner
        heading="Ready to Get Started?"
        subtext="Call now — no runaround, no guesswork. Just honest work."
        buttonText={BUSINESS_INFO.phoneFormatted}
        buttonLink={`tel:${BUSINESS_INFO.phone}`}
        variant="action"
      />
    </>
  );
}
