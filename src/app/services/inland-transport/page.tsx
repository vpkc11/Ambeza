import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = { title: "Inland Transport for Exports — Pan-India Pickup", description: "First-mile cargo pickup anywhere in India. ODC, flatbeds, reefer trucks, standard vehicles. GPS-tracked fleet." };

export default function InlandTransportPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Services</p>
            <h1 className="text-4xl font-bold mb-4">Inland Transport for Exports</h1>
            <p className="text-slate-300 text-lg">Pan-India first-mile pickup — from your factory, farm, or warehouse to any Indian port or airport.</p>
          </div>
        </div>
      </section>
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {[
            { title: "Standard Container Trucks", desc: "20ft and 40ft container trucks for FCL cargo. Available pan-India." },
            { title: "LCL Part Loads", desc: "Partial truck loads consolidated to CFS for LCL shipments." },
            { title: "Reefer Trucks", desc: "Temperature-controlled transport for cold chain exports." },
            { title: "ODC / Flatbed Trucks", desc: "Over-Dimensional Cargo — heavy machinery, transformers, industrial equipment." },
            { title: "Trailer / Low-bed", desc: "For oversized or heavy project cargo that won't fit standard trucks." },
            { title: "GPS-Tracked Fleet", desc: "Real-time visibility. You know where your cargo is at all times." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white border border-[#E2E8F0] rounded-xl p-6">
              <h3 className="font-bold text-[#0A1628] mb-2">{title}</h3>
              <p className="text-sm text-[#475569]">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/contact" className="bg-[#185FA5] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#14508a] transition-colors inline-block">Get a Pickup Quote</Link>
        </div>
      </SectionWrapper>
    </>
  );
}
