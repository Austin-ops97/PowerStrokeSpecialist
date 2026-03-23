import { BUSINESS_INFO } from "@/lib/constants";

export default function GoogleMap() {
  return (
    <div className="overflow-hidden">
      <iframe
        title="Power Stroke Specialist location"
        src={BUSINESS_INFO.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[min(420px,55vh)] w-full grayscale sm:h-[460px]"
      />
    </div>
  );
}
