import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Air Freight Export from India",
  description: "Fast, reliable air freight from India to 150+ countries. IATA-certified handling, all DG categories, 3–7 days transit.",
};

export default function AirFreightPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Services</p>
            <h1 className="text-4xl font-bold mb-4">Air Freight from India</h1>
            <p className="text-slate-300 text-lg">When speed matters, we fly it. Air freight from all major Indian airports to 150+ destinations — pharma, gems, electronics, urgent cargo.</p>
          </div>
        </div>
      </section>
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-4">When to choose air freight</h2>
            <ul className="space-y-3 mb-8">
              {["Cargo is urgent — needed in 3–7 days", "Weight is under 500 kg", "High-value goods (pharma, gems, electronics, spare parts)", "Perishable cargo that won't survive a 30-day sea voyage", "Samples and first-order shipments where speed builds trust"].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#475569]">{item}</span>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-4">What we handle</h2>
            <ul className="space-y-2">
              {["General cargo on passenger-belly services", "Dedicated freighter cargo", "Temperature-controlled (pharma/perishable)", "Dangerous Goods (all DG classes, subject to airline acceptance)", "Express air freight for urgent shipments", "Charter arrangements for large/urgent requirements"].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#185FA5] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#475569]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6">
              <h3 className="font-bold text-[#0A1628] mb-4">Air freight basics</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#475569]">Transit time</span>
                  <span className="font-semibold">3–7 days (most routes)</span>
                </div>
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#475569]">Charging basis</span>
                  <span className="font-semibold">Higher of actual or volumetric weight</span>
                </div>
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#475569]">Volumetric divisor</span>
                  <span className="font-semibold">6,000</span>
                </div>
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#475569]">Airports we operate from</span>
                  <span className="font-semibold">BOM, DEL, MAA, HYD, BLR, CCU</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#475569]">Document</span>
                  <span className="font-semibold">Airway Bill (AWB)</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
              <Link href="/tools/volumetric-calculator" className="text-[#185FA5] text-sm font-semibold hover:underline inline-flex items-center gap-1 mb-3">
                Calculate volumetric weight <ChevronRight className="h-4 w-4" />
              </Link>
              <p className="text-xs text-[#475569]">Use our free tool to find your chargeable weight before requesting a quote.</p>
            </div>
            <Link href="/contact" className="block text-center bg-[#185FA5] text-white font-semibold py-4 rounded-2xl hover:bg-[#14508a] transition-colors">
              Get an Air Freight Quote
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
