import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Export Warehousing & 3PL Services India — Bonded, Cold Chain | Ambeza",
  description: "Bonded and general warehousing near JNPT Mumbai, Chennai, Mundra, and Hyderabad. Pick, pack, label, re-pack for export. Temperature-controlled cold rooms for pharma and food. Inventory management.",
  keywords: [
    "export warehousing India",
    "bonded warehouse India",
    "3PL export services India",
    "cold storage export India",
    "pick pack export India",
    "warehouse near JNPT Mumbai",
    "pharma warehousing India",
  ],
};

const warehousingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a bonded warehouse and when do I need it?", acceptedAnswer: { "@type": "Answer", text: "A bonded warehouse is a customs-controlled facility where goods can be stored without paying customs duty until they are cleared for export or re-export. Useful for goods pending export clearance, re-exports, and importers who want to defer duty payment." } },
    { "@type": "Question", name: "Do you have temperature-controlled warehousing for pharma exports?", acceptedAnswer: { "@type": "Answer", text: "Yes — we have cold rooms that maintain 2–8°C (for pharma and food) and -20°C (for frozen goods). Our cold chain warehouses are near major ports and airports including JNPT Mumbai and Hyderabad RGIA." } },
    { "@type": "Question", name: "Can you handle pick, pack, and label operations for e-commerce exports?", acceptedAnswer: { "@type": "Answer", text: "Yes — we offer pick, pack, labelling, and dispatch services for B2B and B2C e-commerce exports. We can apply destination-market labels, repack to buyer specifications, and manage order-level picking and dispatch." } },
    { "@type": "Question", name: "Where are your warehouses located?", acceptedAnswer: { "@type": "Answer", text: "Our warehouses are located near major Indian export hubs: JNPT / Nhava Sheva (Mumbai), Chennai Sea Port, Hyderabad (RGIA air cargo complex), and Delhi NCR (ICD Tughlakabad). Contact us for availability at your preferred location." } },
  ],
};

export default function WarehousingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(warehousingFaqSchema) }} />
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Services</p>
            <h1 className="text-4xl font-bold mb-4">Warehousing &amp; 3PL for Exports</h1>
            <p className="text-slate-300 text-lg">Store, pick, pack, label, and dispatch — complete 3PL services for export-ready goods near all major Indian ports and airports.</p>
          </div>
        </div>
      </section>
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Bonded Warehouse", desc: "Store goods under customs bond. Defer duty payment. Useful for re-exports and goods pending export clearance." },
            { title: "Temperature-Controlled", desc: "Cold rooms for pharma, food, and chemicals that require 2–8°C or -20°C storage." },
            { title: "Pick & Pack", desc: "Order-level picking, packing, labelling, and dispatch for e-commerce and B2B exports." },
            { title: "Inventory Management", desc: "Real-time stock reporting, lot tracking, FIFO/FEFO management." },
            { title: "Repacking & Relabelling", desc: "Repack to buyer specifications, apply destination-market labels, change packaging format." },
            { title: "Quality Inspection", desc: "Pre-shipment inspection, sampling, photography — on behalf of your buyer." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white border border-[#E2E8F0] rounded-xl p-6">
              <h3 className="font-bold text-[#0A1628] mb-2">{title}</h3>
              <p className="text-sm text-[#475569]">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/contact" className="bg-[#185FA5] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#14508a] transition-colors inline-block">Enquire About Warehousing</Link>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-8 text-center">Warehousing & 3PL — frequently asked questions</h2>
          <div className="space-y-5">
            {[
              { q: "What is a bonded warehouse and when do I need it?", a: "A bonded warehouse is a customs-controlled facility where goods can be stored without paying customs duty until they are cleared for export or re-export. Useful for goods pending export clearance, goods awaiting buyer instructions, and re-export operations." },
              { q: "Do you have temperature-controlled warehousing for pharma exports?", a: "Yes — we have cold rooms maintaining 2–8°C (for pharma and food) and -20°C (for frozen goods). Our cold chain warehouses are near major ports and airports including JNPT Mumbai and Hyderabad RGIA." },
              { q: "Can you handle pick, pack, and label for e-commerce exports?", a: "Yes — we offer pick, pack, labelling, and dispatch services for B2B and B2C e-commerce exports. We can apply destination-market labels, repack to buyer specifications, and manage order-level picking and dispatch." },
              { q: "Where are your warehouses located?", a: "Near all major export hubs: JNPT / Nhava Sheva (Mumbai), Chennai Sea Port, Hyderabad RGIA air cargo complex, and ICD Tughlakabad (Delhi NCR). Contact us to confirm availability at your preferred location." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white border border-[#E2E8F0] rounded-xl p-6">
                <p className="font-bold text-[#0A1628] mb-2">{q}</p>
                <p className="text-sm text-[#475569] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
