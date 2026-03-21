export type BusinessInfo = {
  name: string;
  tagline: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  phoneFormatted: string;
  facebookUrl: string;
  mapEmbedUrl: string;
  coordinates: { lat: number; lng: number };
};

export const BUSINESS_INFO: BusinessInfo = {
  name: "Power Stroke Specialist",
  tagline: "Baytown's Trusted Diesel & Full-Service Mechanic Shop",
  address: "711 Massey Tompkins Rd",
  city: "Baytown",
  state: "TX",
  zip: "77521",
  phone: "8325976986",
  phoneFormatted: "(832) 597-6986",
  facebookUrl: "https://www.facebook.com/chris.alexander123",
  mapEmbedUrl:
    "https://www.google.com/maps?q=711+Massey+Tompkins+Rd,+Baytown,+TX+77521&output=embed",
  coordinates: { lat: 29.7544, lng: -94.9774 },
};

export const HOURS = [
  { day: "Monday", hours: "8:00 AM - 6:00 PM", isOpen: true },
  { day: "Tuesday", hours: "8:00 AM - 6:00 PM", isOpen: true },
  { day: "Wednesday", hours: "8:00 AM - 6:00 PM", isOpen: true },
  { day: "Thursday", hours: "8:00 AM - 6:00 PM", isOpen: true },
  { day: "Friday", hours: "8:00 AM - 6:00 PM", isOpen: true },
  { day: "Saturday", hours: "Closed", isOpen: false },
  { day: "Sunday", hours: "Closed", isOpen: false },
] as const;

export const SERVICES = [
  {
    id: "oil-changes",
    name: "Oil Changes",
    description:
      "Keep your engine protected with fresh oil and a quality filter change performed to manufacturer standards.",
    icon: "Droplets",
  },
  {
    id: "battery-replacement",
    name: "Battery Replacement",
    description:
      "We test charging systems and replace weak batteries so your vehicle starts reliably in every season.",
    icon: "BatteryCharging",
  },
  {
    id: "scanner-diagnostics",
    name: "Scanner / Computer Diagnostics",
    description:
      "Advanced scan tools and diagnostics help us pinpoint issues quickly and avoid unnecessary parts replacement.",
    icon: "ScanSearch",
  },
  {
    id: "ac-recharge",
    name: "A/C Work / Recharge",
    description:
      "From leak checks to full recharges, we restore cold air performance for Texas heat.",
    icon: "Snowflake",
  },
  {
    id: "heater-cores",
    name: "Heater Cores",
    description:
      "Cabin heat problems are diagnosed and repaired properly, including heater core service and replacement.",
    icon: "Flame",
  },
  {
    id: "radiator-flush",
    name: "Radiator Flush and Fill",
    description:
      "Cooling systems are flushed and refilled to prevent overheating and extend engine life.",
    icon: "Thermometer",
  },
  {
    id: "transmission-fluid",
    name: "Transmission Fluid Service",
    description:
      "Fluid and filter service helps maintain smooth shifting and long-term transmission reliability.",
    icon: "Cog",
  },
  {
    id: "timing-belt",
    name: "Timing Belt Service",
    description:
      "Prevent costly engine damage with timely belt inspections and replacement intervals you can trust.",
    icon: "Timer",
  },
  {
    id: "abs-diagnosis",
    name: "ABS Diagnosis",
    description:
      "We diagnose warning lights and braking system faults to keep your anti-lock system working safely.",
    icon: "ShieldAlert",
  },
  {
    id: "axle-services",
    name: "Axle Services - Bearings and Seals",
    description:
      "Axle noise, leaks, and wear are repaired with quality components for dependable drivetrain performance.",
    icon: "Disc",
  },
  {
    id: "shock-strut",
    name: "Shock and Strut Replacements",
    description:
      "Restore ride comfort, stability, and tire life with suspension component replacement.",
    icon: "Mountain",
  },
  {
    id: "starters-alternators",
    name: "Starters and Alternators Replacements",
    description:
      "No-start and charging issues are handled fast with complete starting and charging system repairs.",
    icon: "Zap",
  },
  {
    id: "fleet-maintenance",
    name: "Fleet Vehicle Maintenance and Services",
    description:
      "Keep commercial vehicles road-ready with dependable scheduled service and repair support.",
    icon: "Truck",
  },
] as const;

export const SPECIALTY_SERVICES = [
  {
    id: "power-stroke-bulletproofing",
    name: "Power Stroke Bulletproofing",
    description:
      "Our signature specialty for 6.0L and 7.3L Ford Power Stroke engines.",
    longDescription:
      "This is what we're known for. We harden Power Stroke engines by addressing known failure points through upgrades like head studs, cooling and oil system improvements, and reliability-focused component replacements so your truck can handle real-world use with confidence.",
  },
  {
    id: "aftermarket-upgrades",
    name: "Aftermarket Upgrades & Modifications",
    description:
      "Performance upgrades and custom vehicle modifications tailored to your goals.",
    longDescription:
      "From suspension and intake upgrades to exhaust, tuning, and custom setups, we help build trucks that perform and drive the way you want. Call to discuss your specific build goals.",
  },
] as const;

export const REVIEWS = [
  {
    id: "review-robert",
    name: "Robert N.",
    text: "They never disappoint. I had issues, but no codes. They didn't want to just start selling me parts. We came up with a plan and got it fixed. I really appreciate their honesty.",
    rating: 5,
  },
  {
    id: "review-reece",
    name: "Reece",
    text: "Chris, and his crew have done a lot of work on two different trucks for me. (7.3L and a 6.0) Always been a good experience, They are honest and reasonable for the quality of work they do. The only downfall of doing good work and a great reputation is sometimes they are busy, but to me that's a good sign, worth the wait to have it done right.",
    rating: 5,
  },
  {
    id: "review-mitzi",
    name: "Mitzi L.",
    text: "Highly recommend. Well trained mechanics... friendly staff. Was called and discussed the issues with our vehicle and was told the price upfront.",
    rating: 5,
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const TRUST_STATS = [
  { icon: "Wrench", label: "10+ Years Experience", value: "10+" },
  { icon: "Truck", label: "Ford Power Stroke Experts", value: "Specialized" },
  { icon: "ShieldCheck", label: "Trusted Across Texas", value: "Statewide" },
  { icon: "Bus", label: "Fleet Services Available", value: "Commercial" },
] as const;
