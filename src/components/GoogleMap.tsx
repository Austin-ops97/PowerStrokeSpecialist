import { BUSINESS_INFO } from "@/lib/constants";

export default function GoogleMap() {
  return (
    <div className="overflow-hidden border border-white/[0.08] bg-bg-dark-card shadow-card">
      <iframe
        title="Power Stroke Specialist location map"
        src={BUSINESS_INFO.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[min(420px,55vh)] w-full grayscale contrast-[1.05] sm:h-[440px]"
      />
    </div>
  );
}
