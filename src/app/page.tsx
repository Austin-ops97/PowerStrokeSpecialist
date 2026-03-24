import BackToTop from "@/components/BackToTop";
import BulletproofHero from "@/components/BulletproofHero";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import Hero from "@/components/Hero";
import QuoteButton from "@/components/QuoteButton";
import ReviewCard from "@/components/ReviewCard";
import ScrollReveal from "@/components/ScrollReveal";
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
  { icon: BadgeCheck,  label: "Any Size Job",          sub: "Oil changes to rebuilt engine installs." },
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

          {/* Section header */}
          <ScrollReveal>
            <span className="label">
              <span className="h-px w-5 bg-navy" />
              Full-Service Shop
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
              Bumper to Bumper.<br />
              <span className="text-navy">Gas &amp; Diesel.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-slate-500">
              We are a complete, bumper-to-bumper repair shop for both gas and diesel vehicles.
              The services listed below are just a sample of what we handle every day —
              if it has an engine, bring it in.
            </p>
          </ScrollReveal>

          {/* Clean service list — two columns, no cards */}
          <ScrollReveal direction="scale">
            <div className="mt-10 grid divide-y divide-slate-100 rounded-lg border border-slate-200 sm:grid-cols-2 sm:divide-y-0 sm:[&>*:nth-child(odd)]:border-r sm:[&>*:nth-child(odd)]:border-slate-200">
              {[
                ...SERVICES.map((s) => s.name),
                "Power Stroke Bulletproofing",
                "Aftermarket & Performance Upgrades",
                "Rebuilt Engine Installs",
                "Brake Service & Repair",
                "Fuel System Service",
                "Power Steering",
                "Exhaust Systems",
                "Wheel Alignment",
                "Suspension Repair",
                "Electrical Diagnostics",
                "And Many More…",
              ].map((name, idx, arr) => {
                const isLast = idx === arr.length - 1;
                const hideOnMobile = idx >= 10 && !isLast;
                return (
                  <div
                    key={name}
                    className={`${hideOnMobile ? "hidden sm:flex" : "flex"} group items-center gap-3 px-3 py-3.5 transition-all duration-200 hover:bg-slate-50 sm:px-5`}
                  >
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-200 group-hover:scale-150 ${isLast ? "bg-action" : "bg-navy"}`} />
                    <span className={`text-sm font-semibold transition-colors duration-200 ${isLast ? "italic text-slate-400" : "text-slate-700 group-hover:text-navy"}`}>
                      {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Single "Don't see it?" strip */}
          <ScrollReveal>
            <div className="mt-5 flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-sm font-semibold text-slate-600">
                <span className="font-black text-slate-900">Don&apos;t see your service?</span>
                &nbsp; If it has an engine, we can work on it — call and we&apos;ll confirm.
              </p>
              <div className="flex shrink-0 flex-wrap gap-3">
                <a href="tel:8325976986" className="btn-action whitespace-nowrap">
                  <Phone size={14} strokeWidth={2.5} />
                  Call Us
                </a>
                <QuoteButton className="btn-outline whitespace-nowrap" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-navy inline-flex">
                Schedule Service
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── DRAG STRIP PHOTO ─── */}
      <section className="relative overflow-hidden" style={{ height: "clamp(320px, 55vh, 620px)" }}>
        {/* Photo with Ken Burns animation */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://2pbqjgxycewduhvh.public.blob.vercel-storage.com/PowerStroke/467700419_10231728681578635_282292225606239125_n.jpg"
          alt="Performance build on the drag strip"
          className="h-full w-full animate-ken-burns object-cover object-center"
          loading="lazy"
        />

        {/* Gradient overlay — dark at bottom, light at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

        {/* Text — bottom left */}
        <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
          <span className="inline-flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
            <span className="h-px w-5 bg-action" />
            Performance
          </span>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tighter text-white sm:text-4xl lg:text-5xl">
            We Work on Your Toys Too.
          </h2>
          <p className="mt-3 max-w-lg text-sm font-medium leading-relaxed text-white/55 sm:text-base">
            Dragsters, race builds, weekend warriors — bring it in.
          </p>
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
            <ScrollReveal direction="left">
              <p className="text-base font-medium leading-relaxed text-slate-500">
                We work on and fix all sorts of vehicle issues. Our team is knowledgeable, skilled,
                and dedicated to making vehicles run like new again.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-500">
                Finding a trustworthy mechanic is hard. That&apos;s why customers from Baytown and
                across Texas choose us for straight answers and workmanship that holds up.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 divide-x divide-slate-200 overflow-hidden rounded-lg border border-slate-200 sm:grid-cols-3">
                {[
                  { v: "100+", l: "Engines", mobileHide: true },
                  { v: "10+",  l: "Years", mobileHide: false },
                  { v: "Gas+Diesel", l: "Engines", mobileHide: false },
                ].map((s) => (
                  <div key={s.l + s.v} className={`${s.mobileHide ? "hidden sm:block" : ""} px-3 py-4 text-center sm:px-4 sm:py-5`}>
                    <p className="text-xl font-black tracking-tight text-navy sm:text-2xl">{s.v}</p>
                    <p className="mt-1 text-[9px] font-black uppercase tracking-widest text-slate-400">{s.l}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Shop photo */}
            <ScrollReveal delay={0.1} direction="right">
              <div className="relative">
                <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-navy/15" />
                <div className="relative overflow-hidden rounded-2xl border border-slate-200" style={{ aspectRatio: "16/10" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={SHOP_IMG}
                    alt="Power Stroke Specialist shop exterior"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
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
              <ScrollReveal key={v.label} delay={i * 0.06} className={v.label === "Any Size Job" ? "hidden sm:block" : ""}>
                <div className="group rounded-lg border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white">
                    <v.icon size={20} strokeWidth={2} />
                  </span>
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
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <ScrollReveal key={r.id} delay={i * 0.1} className="h-full">
                <ReviewCard name={r.name} text={r.text} rating={r.rating} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-8">
              <a href={BUSINESS_INFO.facebookUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-navy-dark">
                <Facebook size={15} strokeWidth={2} />
                Leave a Review on Facebook
              </a>
            </div>
          </ScrollReveal>
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

          <div className="mt-10 grid items-start gap-6 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <ScrollReveal direction="left">
              <ContactForm />
            </ScrollReveal>

            {/* Info panel */}
            <ScrollReveal delay={0.1} direction="right">
              <div className="divide-y divide-slate-100 overflow-hidden rounded-lg border border-slate-200">

                {/* Phone */}
                <div className="group flex items-center gap-4 p-4 transition-colors duration-200 hover:bg-slate-50 sm:p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-action-50 text-action transition-transform duration-300 group-hover:scale-110">
                    <Phone size={16} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone</p>
                    <a href={`tel:${BUSINESS_INFO.phone}`}
                      className="mt-0.5 block text-xl font-black text-slate-900 transition-colors hover:text-action">
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="group flex items-center gap-4 p-4 transition-colors duration-200 hover:bg-slate-50 sm:p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy transition-transform duration-300 group-hover:scale-110">
                    <MapPin size={16} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Address</p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-700">
                      {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="group flex items-start gap-4 p-4 transition-colors duration-200 hover:bg-slate-50 sm:p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy transition-transform duration-300 group-hover:scale-110">
                    <Clock3 size={16} strokeWidth={2} />
                  </span>
                  <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Hours</p>
                    <ul className="mt-2">
                      {HOURS.map((e) => (
                        <li key={e.day} className="grid grid-cols-[120px_1fr] py-1.5 text-sm">
                          <span className="font-semibold text-slate-700">{e.day}</span>
                          <span className={e.isOpen ? "text-slate-500" : "text-slate-300"}>{e.hours}</span>
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
            <ScrollReveal direction="scale">
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

      {/* ─── BACK TO TOP ─── */}
      <BackToTop />
    </>
  );
}
