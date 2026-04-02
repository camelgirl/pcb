import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import AnalyticsClickTracker from "@/components/AnalyticsClickTracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://bridgepcb.com"),
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: "/logo.svg",
  },
  title: "PCB & PCBA Manufacturing | Bridge PCB — US-Based Sourcing Agent",
  description:
    "US-based PCB & PCBA sourcing agent backed by leading manufacturers in China. Technical support, manufacturing coordination, QA, and logistics — 2L to 46L, HDI, Flex, Rigid-Flex, and PCBA.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PCB & PCBA Manufacturing | Bridge PCB — US-Based Sourcing Agent",
    description:
      "US-based PCB & PCBA sourcing agent backed by leading manufacturers in China. Technical support, manufacturing coordination, QA, and logistics — 2L to 46L, HDI, Flex, Rigid-Flex, and PCBA.",
    url: "https://bridgepcb.com",
    siteName: "Bridge PCB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bridge PCB — PCB & PCBA Manufacturing, US-Based Sourcing Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PCB & PCBA Manufacturing | Bridge PCB — US-Based Sourcing Agent",
    description:
      "US-based PCB & PCBA sourcing agent backed by leading manufacturers in China. 2L–46L, HDI, Flex, Rigid-Flex, PCBA.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L9QB4WJEMV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L9QB4WJEMV');
          `}
        </Script>
      </head>
      <body className="bg-[#09090b] text-zinc-200 font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Bridge PCB",
              url: "https://bridgepcb.com",
              description:
                "US-based PCB & PCBA sourcing agent backed by leading manufacturers in China. Technical support, manufacturing coordination, QA, and logistics.",
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              serviceType: [
                "PCB Manufacturing",
                "PCBA Manufacturing",
                "PCB Sourcing",
                "HDI PCB",
                "Flex PCB",
                "Rigid-Flex PCB",
              ],
              knowsAbout: [
                "Printed Circuit Board Manufacturing",
                "PCB Assembly",
                "HDI PCB",
                "Flex PCB",
                "Rigid-Flex PCB",
                "Backplane PCB",
                "PCB Design for Manufacturing",
              ],
            }),
          }}
        />
        <AnalyticsClickTracker />
        {children}
      </body>
    </html>
  );
}
