"use client";

import { motion } from "framer-motion";
import {
  BatteryCharging,
  Cog,
  Disc,
  Droplets,
  Flame,
  LucideIcon,
  Mountain,
  ScanSearch,
  ShieldAlert,
  Snowflake,
  Thermometer,
  Timer,
  Truck,
  Zap,
} from "lucide-react";

type ServiceCardProps = {
  name: string;
  description: string;
  icon: string;
};

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  BatteryCharging,
  ScanSearch,
  Snowflake,
  Flame,
  Thermometer,
  Cog,
  Timer,
  ShieldAlert,
  Disc,
  Mountain,
  Zap,
  Truck,
};

export default function ServiceCard({ name, description, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Cog;

  return (
    <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="card-base">
      <div className="mb-4 inline-flex rounded-full bg-accent/10 p-3 text-accent">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-semibold text-text-primary">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">{description}</p>
      <p className="mt-4 text-sm font-medium text-accent">Call for Quote →</p>
    </motion.article>
  );
}
