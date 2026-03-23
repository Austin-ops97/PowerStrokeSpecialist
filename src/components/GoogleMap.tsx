import { BUSINESS_INFO } from "@/lib/constants";

export default function GoogleMap() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
      {/* Fixed height container so the iframe always has space to render */}
      <div className="h-[480px] sm:h-[520px]">
        <iframe
          title="Power Stroke Specialist location"
          src={BUSINESS_INFO.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
