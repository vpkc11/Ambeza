import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = { title: "Export Warehousing & 3PL Services India", description: "Bonded and general warehousing near major Indian ports. Pick, pack, label, re-pack for export. Temperature-controlled for pharma and food." };

export default function WarehousingPage() {
  return (
    <>
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
    </>
  );
}
