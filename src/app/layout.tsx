import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import TopInfoBar from "@/components/TopInfoBar";
import { BUSINESS_INFO, HOURS, SERVICES } from "@/lib/constants";
import { SITE_URL, buildMetadata } from "@/lib/site";
import "@/styles/globals.css";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = buildMetadata(
  "Home",
  "Power Stroke Specialist is a Baytown TX diesel mechanic specializing in Power Stroke bulletproofing, diagnostics, and complete automotive repair.",
  "/"
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS_INFO.name,
    url: SITE_URL,
    telephone: BUSINESS_INFO.phoneFormatted,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address,
      addressLocality: BUSINESS_INFO.city,
      addressRegion: BUSINESS_INFO.state,
      postalCode: BUSINESS_INFO.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.coordinates.lat,
      longitude: BUSINESS_INFO.coordinates.lng,
    },
    openingHoursSpecification: HOURS.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.day,
      opens: entry.isOpen ? "08:00" : "00:00",
      closes: entry.isOpen ? "18:00" : "00:00",
    })),
    sameAs: [BUSINESS_INFO.facebookUrl],
    areaServed: "Texas",
    makesOffer: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
      },
    })),
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${oswald.variable}`}>
      <body className="min-h-screen bg-bg-dark text-text-white">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <TopInfoBar />
        <Navbar />

        <PageTransition>
          <main id="main-content">{children}</main>
        </PageTransition>

        <Footer />

        <Script
          id="local-business-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
