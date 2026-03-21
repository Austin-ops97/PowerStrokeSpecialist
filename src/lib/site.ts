import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/constants";

const siteUrl = "https://powerstrokespecialist.com";

export function buildMetadata(pageName: string, description: string, path = "/"): Metadata {
  const title = `Power Stroke Specialist | ${pageName} | Baytown TX Diesel Mechanic`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      type: "website",
      siteName: BUSINESS_INFO.name,
      images: [
        {
          url: "/images/og-image.svg",
          width: 1200,
          height: 630,
          alt: "Power Stroke Specialist in Baytown TX",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.svg"],
    },
  };
}

export const SITE_URL = siteUrl;
