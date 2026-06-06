import Link from "next/link";
import { Globe } from "lucide-react";

const services = [
  { href: "/services/air-freight", label: "Air Freight" },
  { href: "/services/ocean-freight", label: "Ocean Freight" },
  { href: "/services/customs-clearance", label: "Customs Clearance" },
  { href: "/services/warehousing", label: "Warehousing & 3PL" },
  { href: "/services/inland-transport", label: "Inland Transport" },
];

const tools = [
  { href: "/tools/volumetric-calculator", label: "Volumetric Calculator" },
  { href: "/tools/shipping-estimator", label: "Shipping Estimator" },
  { href: "/tools/transit-time", label: "Transit Time" },
  { href: "/hsn-checker", label: "HSN Checker" },
];

const guideGroups = [
  {
    heading: "Get Started",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/new-exporter", label: "New Exporter Guide" },
      { href: "/icegate-guide", label: "ICEGATE & AD Code" },
    ],
  },
  {
    heading: "Documents & Cargo",
    links: [
      { href: "/documents-guide", label: "Documents Guide" },
      { href: "/dg-guide", label: "DG Guide" },
      { href: "/fumigation-packing", label: "Fumigation & Packing" },
    ],
  },
  {
    heading: "Port & Ship",
    links: [
      { href: "/port-selector", label: "Port Selector" },
      { href: "/port-handover", label: "Port Handover Flow" },
    ],
  },
  {
    heading: "After Export",
    links: [
      { href: "/rodtep-drawback", label: "RoDTEP & Drawback" },
      { href: "/post-remittance", label: "Post-Remittance" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6 text-[#185FA5]" />
              <span className="text-xl font-bold">Ambeza</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              End-to-end export logistics from India to 150+ countries. Air freight, ocean freight, customs clearance — one company, zero confusion.
            </p>
            <p className="text-[#185FA5] text-sm font-semibold mb-4">
              India → 150+ countries
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="X (Twitter)">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://wa.me/918179688632" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="WhatsApp">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Tools</h3>
            <ul className="space-y-2">
              {tools.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Guides — two mini-columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Export Guides</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {guideGroups.map(({ heading, links }) => (
                <div key={heading}>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{heading}</p>
                  <ul className="space-y-1.5">
                    {links.map(({ href, label }) => (
                      <li key={href}>
                        <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Contact strip */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-400">
            <a href="https://wa.me/918179688632" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              📱 WhatsApp: +91 81796 88632
            </a>
            <a href="tel:+918179688632" className="hover:text-white transition-colors">
              📞 +91 81796 88632
            </a>
            <a href="mailto:exports@ambeza.com" className="hover:text-white transition-colors">
              ✉️ exports@ambeza.com
            </a>
            <span>🕐 Mon–Sat, 9am–7pm IST</span>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Hyderabad · Mumbai · Chennai · Delhi · Mundra · Kolkata · Bangalore
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>© 2025 Ambeza. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
