import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Ocean Freight Export from India — FCL, LCL, Break Bulk",
  description: "Ocean freight from India — FCL, LCL, RORO, Break Bulk. JNPT Mumbai, Chennai, Mundra, Kolkata. Competitive rates, in-house CHA.",
};

const containerTypes = [
  { type: "20ft Standard", capacity: "~26 CBM / ~21,700 kg", bestFor: "General goods, machinery parts, consumer products" },
  { type: "40ft Standard", capacity: "~55 CBM / ~26,400 kg", bestFor: "Textiles, garments, furniture, light industrial goods" },
  { type: "40ft High Cube", capacity: "~67 CBM / ~26,400 kg", bestFor: "Bulky lightweight goods — furniture, mattresses, ready-made garments" },
  { type: "Reefer (20ft/40ft)", capacity: "Same as standard — temperature controlled", bestFor: "Pharma, seafood, fresh produce, chemicals requiring cold chain" },
  { type: "Flat Rack", capacity: "Oversize cargo", bestFor: "Machinery, vehicles, oversized equipment" },
];

export default function OceanFreightPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Services</p>
            <h1 className="text-4xl font-bold mb-4">Ocean Freight from India</h1>
            <p className="text-slate-300 text-lg">FCL, LCL, Break Bulk, RORO, ODC — we ship any cargo by sea from any Indian port. Best value for shipments above 500 kg.</p>
          </div>
        </div>
      </section>
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-4">FCL vs LCL — which do you need?</h2>
            <div className="space-y-5">
              <div className="bg-white border-2 border-[#185FA5] rounded-xl p-5">
                <h3 className="font-bold text-[#0A1628] mb-2">FCL — Full Container Load</h3>
                <p className="text-sm text-[#475569] mb-3">Your cargo fills a 20ft or 40ft container. You pay for the full container, regardless of how full it is.</p>
                <p className="text-xs text-[#185FA5] font-semibold">Best for: Cargo above ~5–7 CBM or 3,000+ kg</p>
              </div>
              <div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-5">
                <h3 className="font-bold text-[#0A1628] mb-2">LCL — Less than Container Load</h3>
                <p className="text-sm text-[#475569] mb-3">Your cargo shares a container with other exporters. You pay only for your CBM. Weekly consolidations from all major ports.</p>
                <p className="text-xs text-[#475569] font-semibold">Best for: Cargo under 5 CBM or first shipments</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-4">Container types we offer</h2>
            <div className="space-y-2">
              {containerTypes.map(({ type, capacity, bestFor }) => (
                <div key={type} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
                  <p className="font-semibold text-[#0A1628] text-sm">{type}</p>
                  <p className="text-xs text-[#475569] mt-1"><span className="font-medium">Capacity:</span> {capacity}</p>
                  <p className="text-xs text-[#475569]"><span className="font-medium">Best for:</span> {bestFor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-[#0A1628] mb-5">Ports we operate from</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { port: "JNPT", city: "Mumbai", rank: "#1 container port in India" },
              { port: "Chennai", city: "Tamil Nadu", rank: "East coast hub" },
              { port: "Mundra", city: "Gujarat", rank: "Fastest growing port" },
              { port: "Kolkata", city: "West Bengal", rank: "Northeast India hub" },
              { port: "Nhava Sheva", city: "Mumbai", rank: "Same as JNPT" },
              { port: "Vizag", city: "Andhra Pradesh", rank: "East coast" },
            ].map(({ port, city, rank }) => (
              <div key={port} className="text-center">
                <div className="w-12 h-12 bg-[#185FA5]/10 rounded-xl flex items-center justify-center text-[#185FA5] font-bold text-xs mx-auto mb-2">{port}</div>
                <p className="text-xs font-semibold text-[#0A1628]">{city}</p>
                <p className="text-xs text-[#475569]">{rank}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="bg-[#185FA5] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#14508a] transition-colors inline-block">
            Get an Ocean Freight Quote
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
