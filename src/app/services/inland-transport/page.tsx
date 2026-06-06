import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Inland Transport for Exports — Pan-India Cargo Pickup | Ambeza",
  description: "First-mile cargo pickup from factory, warehouse, or farm to any Indian port or airport. ODC, reefer, flatbed, and standard container trucks. GPS-tracked. Pan-India coverage.",
  keywords: [
    "inland transport export India",
    "cargo pickup India",
    "first mile logistics India",
    "ODC transport India",
    "factory to port transport India",
    "reefer truck India export",
    "container truck India",
  ],
};

const inlandFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you offer pickup from anywhere in India?", acceptedAnswer: { "@type": "Answer", text: "Yes — we have pan-India coverage. Whether your factory is in a metro or a smaller industrial town, we arrange pickup and transport to the nearest port or airport. Contact us with your location and we will confirm availability." } },
    { "@type": "Question", name: "What types of trucks do you operate?", acceptedAnswer: { "@type": "Answer", text: "We operate standard container trucks (20ft, 40ft), LCL part-load vehicles, reefer trucks for cold chain, flatbed and low-bed trailers for ODC cargo, and high-bed trailers for machinery and project cargo." } },
    { "@type": "Question", name: "Can you handle ODC (Over Dimensional Cargo)?", acceptedAnswer: { "@type": "Answer", text: "Yes — we handle ODC and heavy project cargo including industrial machinery, transformers, generators, and oversized equipment. We arrange route surveys, police escorts where required, and low-bed or modular trailers." } },
    { "@type": "Question", name: "How is inland transport priced?", acceptedAnswer: { "@type": "Answer", text: "Inland transport is priced per trip based on origin city, destination port or airport, cargo weight and dimensions, and vehicle type. Contact us with your pickup location and cargo details for a fixed quote." } },
  ],
};

export default function InlandTransportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(inlandFaqSchema) }} />
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

      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-8 text-center">Inland transport — frequently asked questions</h2>
          <div className="space-y-5">
            {[
              { q: "Do you offer pickup from anywhere in India?", a: "Yes — we have pan-India coverage. Whether your factory is in a metro or a smaller industrial town, we arrange pickup and transport to the nearest port or airport. Contact us with your location and we will confirm availability and provide a quote." },
              { q: "What types of trucks do you operate?", a: "We operate standard container trucks (20ft, 40ft), LCL part-load vehicles for shared consignments, reefer trucks for cold chain cargo, flatbed and low-bed trailers for ODC cargo, and high-bed trailers for machinery and project cargo." },
              { q: "Can you handle ODC (Over Dimensional Cargo)?", a: "Yes — we handle ODC and heavy project cargo including industrial machinery, transformers, generators, and oversized equipment. We arrange route surveys, police escorts where required, and low-bed or modular trailers." },
              { q: "Is GPS tracking available for my shipment?", a: "Yes — our fleet is GPS-tracked and you receive regular updates on cargo location. For high-value or time-critical cargo, we can provide live tracking links." },
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
