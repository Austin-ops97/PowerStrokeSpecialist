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

export type ServiceItem = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
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

export const SERVICES: ServiceItem[] = [
  {
    id: "oil-changes",
    name: "Oil Changes",
    shortDescription: "Protect engine life with high-quality oil and filter changes performed to spec.",
    longDescription:
      "Regular oil service protects internal engine components from heat and wear. We use quality oil and filters and inspect key systems while your vehicle is in the bay.",
    icon: "Droplets",
  },
  {
    id: "battery-replacement",
    name: "Battery Replacement",
    shortDescription: "Fast battery testing and replacement so your vehicle starts with confidence.",
    longDescription:
      "If your vehicle struggles to start, we test battery and charging health, then install a dependable replacement that matches your vehicle's needs.",
    icon: "BatteryCharging",
  },
  {
    id: "scanner-diagnostics",
    name: "Scanner / Computer Diagnostics",
    shortDescription: "Accurate diagnostics that identify the real issue before parts are replaced.",
    longDescription:
      "Our diagnostic process uses advanced scanners and real-world troubleshooting to isolate problems quickly and avoid unnecessary repairs.",
    icon: "ScanSearch",
  },
  {
    id: "ac-recharge",
    name: "A/C Work / Recharge",
    shortDescription: "Restore strong cold-air performance with proper system checks and recharge.",
    longDescription:
      "From leak detection to full refrigerant recharge and component diagnosis, we make sure your A/C performs the way it should in Texas heat.",
    icon: "Snowflake",
  },
  {
    id: "heater-cores",
    name: "Heater Cores",
    shortDescription: "Reliable heater core diagnosis and repair to keep your cabin heat working.",
    longDescription:
      "If your cabin heat is weak or coolant odor is present, we inspect heater core and related components to deliver a lasting repair.",
    icon: "Flame",
  },
  {
    id: "radiator-flush",
    name: "Radiator Flush and Fill",
    shortDescription: "Cooling system flush and refill to help prevent overheating and breakdowns.",
    longDescription:
      "A clean cooling system is critical for engine reliability. We flush old coolant, inspect components, and refill with the proper fluid mix.",
    icon: "Thermometer",
  },
  {
    id: "transmission-fluid",
    name: "Transmission Fluid Service",
    shortDescription: "Maintain smooth shifts and longevity with scheduled transmission service.",
    longDescription:
      "Transmission fluid and filter maintenance reduces wear, supports shift quality, and helps protect one of your vehicle's most expensive systems.",
    icon: "Cog",
  },
  {
    id: "timing-belt",
    name: "Timing Belt Service",
    shortDescription: "Timing belt inspections and replacements to avoid major engine damage.",
    longDescription:
      "We service timing components at the right intervals to reduce failure risk and keep your engine running reliably.",
    icon: "Timer",
  },
  {
    id: "abs-diagnosis",
    name: "ABS Diagnosis",
    shortDescription: "Solve ABS warning lights and braking faults with precise diagnostics.",
    longDescription:
      "We identify sensor, module, and hydraulic issues in anti-lock braking systems so your vehicle stays safe and predictable under braking.",
    icon: "ShieldAlert",
  },
  {
    id: "axle-services",
    name: "Axle Services - Bearings and Seals",
    shortDescription: "Repair axle leaks, noises, and wear for dependable drivetrain performance.",
    longDescription:
      "From bearing noise to leaking seals, axle service protects drivability and helps prevent larger drivetrain failures.",
    icon: "Disc",
  },
  {
    id: "shock-strut",
    name: "Shock and Strut Replacements",
    shortDescription: "Improve ride control and handling with quality suspension replacements.",
    longDescription:
      "Worn shocks and struts reduce stability and increase tire wear. We replace components to restore comfort, control, and confidence.",
    icon: "Mountain",
  },
  {
    id: "starters-alternators",
    name: "Starters and Alternators Replacements",
    shortDescription: "Fix no-start and charging problems with complete electrical system service.",
    longDescription:
      "We diagnose starting and charging faults, then replace failed starters or alternators with reliable components.",
    icon: "Zap",
  },
  {
    id: "fleet-maintenance",
    name: "Fleet Vehicle Maintenance and Services",
    shortDescription: "Dependable fleet maintenance programs to keep commercial vehicles in service.",
    longDescription:
      "We support fleet and commercial vehicles with scheduled maintenance and repair strategies designed to reduce downtime.",
    icon: "Truck",
  },
];

export const SPECIALTY_SERVICES = [
  {
    id: "power-stroke-bulletproofing",
    name: "Power Stroke Bulletproofing",
    description:
      "Signature diesel reliability service for 6.0L and 7.3L Ford Power Stroke engines.",
    longDescription:
      "This is the service that defines our shop. We upgrade known weak points in Power Stroke platforms with proven reliability-focused modifications so your truck can handle real work with confidence.",
  },
  {
    id: "aftermarket-upgrades",
    name: "Aftermarket Upgrades",
    description: "Performance modifications and custom upgrades tailored to your goals.",
    longDescription:
      "From suspension and intake to exhaust and tuning support, we help design aftermarket setups that match your vehicle and use case.",
  },
] as const;

export const REVIEWS = [
  {
    id: "review-robert",
    name: "Robert N.",
    text: "They never disappoint. I had issues, but no codes. They didn’t want to just start selling me parts. We came up with a plan and got it fixed. I really appreciate their honesty.",
    rating: 5,
  },
  {
    id: "review-reece",
    name: "Reece",
    text: "Chris, and his crew have done a lot of work on two different trucks for me. (7.3L and a 6.0) Always been a good experience, They are honest and reasonable for the quality of work they do. The only downfall of doing good work and a great reputation is sometimes they are busy, but to me that’s a good sign, worth the wait to have it done right.",
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

export const TRUST_BADGES = [
  { icon: "Wrench", label: "Honest, Transparent Service" },
  { icon: "Truck", label: "Power Stroke Diesel Experts" },
  { icon: "ShieldCheck", label: "Trusted Across Texas" },
  { icon: "Bus", label: "Fleet Services Available" },
] as const;

export const STATS = [
  { value: "100+", label: "Engines Bulletproofed" },
  { value: "10+", label: "Years Experience" },
  { value: "2", label: "Engine Types Specialized" },
] as const;
