import type { Metadata } from "next";
import { Chakra_Petch, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
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
      <body
        className={`${chakraPetch.variable} ${ibmPlexMono.variable} ${manrope.variable} bg-[#09090b] text-zinc-200 font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
