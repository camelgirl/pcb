import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(212,168,83,0.08)] bg-[#050508]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Logo size={32} />
              <div className="font-display font-bold text-zinc-100">Bridge PCB</div>
            </div>
            <div className="font-sans text-sm text-zinc-500 leading-relaxed">
              Your one-stop shop for PCB &amp; PCBA manufacturing excellence. US-based sourcing
              agent, backed by leading manufacturers in China.
            </div>
          </div>
          <div>
            <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest mb-3">
              Technology
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#capabilities" className="text-sm text-zinc-500 hover:text-copper-400 transition-colors">
                  Rigid PCB
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-sm text-zinc-500 hover:text-copper-400 transition-colors">
                  HDI PCB
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-sm text-zinc-500 hover:text-copper-400 transition-colors">
                  Flex &amp; Rigid-Flex
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-sm text-zinc-500 hover:text-copper-400 transition-colors">
                  Metal Substrate (IMS)
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-sm text-zinc-500 hover:text-copper-400 transition-colors">
                  PCBA
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest mb-3">
              Company
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-zinc-500 hover:text-copper-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-sm text-zinc-500 hover:text-copper-400 transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#testimonial" className="text-sm text-zinc-500 hover:text-copper-400 transition-colors">
                  Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-zinc-500 hover:text-copper-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[rgba(212,168,83,0.06)] pt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="font-mono text-xs text-zinc-600">
            &copy; {year} Bridge PCB. All rights reserved.
          </div>
          <div className="font-mono text-xs text-zinc-600">
            bridgepcb.com — US-based PCB sourcing agent
          </div>
        </div>
      </div>
    </footer>
  );
}
