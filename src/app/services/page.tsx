import type { Metadata } from "next";
import Link from "next/link";
import { Plane, Ship, FileText, Warehouse, Truck, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Export Logistics Services — Air, Sea, Customs, Warehousing",
  description:
    "Ambeza offers end-to-end export services: air freight, ocean freight, customs clearance (CHA), warehousing, and inland transport from anywhere in India.",
  keywords: [
    "export logistics services India",
    "air freight ocean freight India",
    "customs clearance CHA India",
    "export warehousing India",
    "inland transport export India",
    "end to end export services India",
    "freight forwarder services India",
  ],
};

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Urgent, high-value, or time-sensitive cargo. We book space on passenger-belly and dedicated freighter services from all major Indian airports to 150+ destinations.",
    highlights: ["3–7 days transit to most destinations", "Ideal for under 500 kg or high-value goods", "All dangerous goods categories handled", "IATA certified handling"],
    href: "/services/air-freight",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "FCL (Full Container Load), LCL (shared container), Break Bulk, RORO, and ODC. We ship from JNPT Mumbai, Chennai, Mundra, Kolkata, and all major Indian sea ports.",
    highlights: ["FCL: 20ft, 40ft, 40ft High Cube", "LCL: Per CBM, weekly consolidations", "Reefer containers for temperature-sensitive cargo", "Heavy lift and project cargo"],
    href: "/services/ocean-freight",
  },
  {
    icon: FileText,
    title: "Customs Clearance (CHA)",
    desc: "In-house licensed Customs House Agents who file your Shipping Bill on ICEGATE, handle all channel examinations, and obtain your Let Export Order. No subcontracting.",
    highlights: ["In-house CHA — we don't subcontract this", "All examination channels handled", "RoDTEP and Drawback pre-selected correctly", "AEO-pathway shipments"],
    href: "/services/customs-clearance",
  },
  {
    icon: Warehouse,
    title: "Warehousing & 3PL",
    desc: "Bonded and general warehousing near major ports and airports. Pick, pack, label, re-pack, and dispatch — complete 3PL services for export-ready goods.",
    highlights: ["Bonded warehouse at major ports", "Temperature-controlled for pharma and food", "Pick & pack for e-commerce exports", "Inventory management and reporting"],
    href: "/services/warehousing",
  },
  {
    icon: Truck,
    title: "Inland Transport",
    desc: "First-mile pickup from your factory, warehouse, or farm — anywhere in India. ODC (Over Dimensional Cargo), flatbeds, reefer trucks, and standard vehicles.",
    highlights: ["Pan-India pickup coverage", "ODC and heavy machinery moves", "Reefer trucks for cold chain", "GPS-tracked fleet"],
    href: "/services/inland-transport",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Export Logistics Services</h1>
            <p className="text-slate-300 text-lg">Everything you need to export from India — under one roof, one invoice, one point of contact.</p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="space-y-6">
          {services.map(({ icon: Icon, title, desc, highlights, href }) => (
            <div key={title} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 bg-[#185FA5]/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#185FA5]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#0A1628]">{title}</h2>
                  </div>
                  <p className="text-[#475569] text-sm leading-relaxed mb-5">{desc}</p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-[#185FA5] font-semibold text-sm hover:underline"
                  >
                    Learn more about {title} <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <div>
                  <ul className="space-y-2">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#185FA5] mt-2 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#0A1628] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need a custom logistics solution?</h2>
          <p className="text-slate-300 mb-6 text-sm">Project cargo, multi-modal, temperature-controlled supply chain — talk to us.</p>
          <Link
            href="/contact"
            className="bg-[#F59E0B] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#d97706] transition-colors inline-block"
          >
            Get a Custom Quote
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
