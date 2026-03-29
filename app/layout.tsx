import type { Metadata } from "next";
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
      <body
        className="bg-[#09090b] text-zinc-200 font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
