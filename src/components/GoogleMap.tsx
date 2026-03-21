import { BUSINESS_INFO } from "@/lib/constants";

export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-xl border border-border-subtle bg-bg-dark-card">
      <iframe
        title="Power Stroke Specialist location map"
        src={BUSINESS_INFO.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[400px] w-full"
      />
    </div>
  );
}
