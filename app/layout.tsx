import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: "/logo.svg",
  },
  title: "Bridge PCB — Your One-Stop Shop for PCB & PCBA Manufacturing",
  description:
    "US-based PCB & PCBA sourcing agent backed by leading manufacturers in China. From concept to creation — technical support, manufacturing coordination, QA, and logistics with fast US communication.",
  openGraph: {
    title: "Bridge PCB — Your One-Stop Shop for PCB & PCBA Manufacturing",
    description:
      "US-based PCB & PCBA sourcing agent backed by leading manufacturers in China. From concept to creation.",
    type: "website",
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
      <body className="bg-[#09090b] text-zinc-200 font-sans antialiased">{children}</body>
    </html>
  );
}
