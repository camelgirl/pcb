import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 shadow-sm flex justify-between items-center">
        <h1 className="text-xl font-bold">US PCB Sourcing Partner</h1>
        <a href="#contact" className="px-4 py-2 bg-black text-white rounded-2xl">Get a Quote</a>
      </header>

      <section className="p-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          High-Performance PCB Sourcing — With US-Based Support
        </h2>
        <p className="text-lg text-gray-600">
          We help US companies source reliable, high-quality PCBs from trusted manufacturers like Shengyi, with fast communication and full-service support.
        </p>
      </section>

      <section className="p-10 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">PCB Manufacturing</h3>
            <p className="text-gray-600">From prototype to production, including complex and high-layer boards.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">Sourcing & Coordination</h3>
            <p className="text-gray-600">We manage communication, timelines, and supplier relationships for you.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">QA & Logistics</h3>
            <p className="text-gray-600">Quality checks, shipping, and delivery handled end-to-end.</p>
          </div>
        </div>
      </section>

      <section className="p-10 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">Why Work With Us</h3>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>US-based communication & support</li>
          <li>Faster response times than overseas vendors</li>
          <li>Access to high-end PCB manufacturing</li>
          <li>Reliable long-term partnership</li>
        </ul>
      </section>

      <section id="contact" className="p-10 bg-gray-100">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Request a Quote</h3>
          <form className="space-y-4">
            <input className="w-full p-3 border rounded-xl" placeholder="Company Name" />
            <input className="w-full p-3 border rounded-xl" placeholder="Email" />
            <textarea className="w-full p-3 border rounded-xl" placeholder="Project Details"></textarea>
            <button className="w-full p-3 bg-black text-white rounded-2xl">Submit</button>
          </form>
        </div>
      </section>

      <footer className="p-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} US PCB Sourcing Partner
      </footer>
    </div>
  );
}
