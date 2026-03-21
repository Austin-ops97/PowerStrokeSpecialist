import { BUSINESS_INFO } from "@/lib/constants";

export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-sm border border-border-strong bg-bg-dark-card shadow-card ring-1 ring-white/5">
      <iframe
        title="Power Stroke Specialist location map"
        src={BUSINESS_INFO.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[min(28rem,70vh)] w-full sm:h-[26rem]"
      />
    </div>
  );
}
