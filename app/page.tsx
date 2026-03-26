import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Industries from "@/components/Industries";
import Certifications from "@/components/Certifications";
import WhyUs from "@/components/WhyUs";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:shadow-soft"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <StatsBanner />
        <Services />
        <Capabilities />
        <Industries />
        <Certifications />
        <WhyUs />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
