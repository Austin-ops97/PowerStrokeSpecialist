import { BUSINESS_INFO } from "@/lib/constants";

export default function GoogleMap() {
  return (
    <div className="overflow-hidden border border-slate-200">
      <iframe
        title="Power Stroke Specialist location"
        src={BUSINESS_INFO.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[min(420px,55vh)] w-full sm:h-[460px]"
      />
    </div>
  );
}
