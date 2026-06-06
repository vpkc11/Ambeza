import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Export Customs Clearance India — Licensed CHA Services",
  description: "In-house licensed CHA. We file your Shipping Bill on ICEGATE, handle all customs channels, and obtain LEO. RoDTEP and Drawback pre-selected correctly.",
};

export default function CustomsClearancePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Services</p>
            <h1 className="text-4xl font-bold mb-4">Export Customs Clearance</h1>
            <p className="text-slate-300 text-lg">Our in-house licensed Customs House Agents (CHA) file your Shipping Bill on ICEGATE, handle all examination channels, and ensure your LEO is obtained without delays.</p>
          </div>
        </div>
      </section>
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-[#185FA5]/10 border border-[#185FA5]/20 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="h-6 w-6 text-[#185FA5]" />
                <h3 className="font-bold text-[#0A1628]">In-house CHA — we don't subcontract</h3>
              </div>
              <p className="text-sm text-[#475569]">Most freight forwarders hand your Shipping Bill to a third-party CHA. We don't. Our own licensed CHA team files directly on ICEGATE. This means faster clearance, direct accountability, and you know exactly who is handling your cargo.</p>
            </div>
            <h2 className="text-xl font-bold text-[#0A1628] mb-4">What our CHA service includes</h2>
            <ul className="space-y-3">
              {[
                "Shipping Bill filing on ICEGATE",
                "All channel handling (Green, Yellow, Red)",
                "Examination support — CHA officer present for physical examinations",
                "LEO (Let Export Order) tracking and confirmation",
                "AD Code registration at port (one-time setup)",
                "RoDTEP and Drawback scheme selection — we pre-select the higher benefit",
                "Duty Drawback filing and follow-up",
                "All port documentation and coordination",
                "Compliance advisory — SCOMET, restricted items, licensing",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#475569]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
              <h3 className="font-bold text-[#0A1628] mb-4">What is ICEGATE?</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">ICEGATE (India Customs EDI Gateway) is the government portal where all Shipping Bills are filed electronically. Every export from India goes through ICEGATE.</p>
              <p className="text-sm text-[#475569] leading-relaxed">Our CHA submits your Shipping Bill here. The risk engine assigns your channel (Green/Yellow/Red). Once customs approves, the LEO is endorsed on your Shipping Bill — your legal clearance to export.</p>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-[#0A1628] mb-2">Customs at ports we cover</h3>
              {["JNPT / Nhava Sheva, Mumbai", "Chennai Sea Port", "Mundra, Gujarat", "Delhi Air Cargo (IGI)", "Hyderabad Air Cargo (RGIA)", "Kolkata Sea Port and ICD", "Bangalore Air Cargo"].map(port => (
                <div key={port} className="flex items-center gap-2 text-sm text-[#475569]">
                  <div className="w-1.5 h-1.5 bg-[#185FA5] rounded-full" /> {port}
                </div>
              ))}
            </div>
            <Link href="/contact" className="block text-center bg-[#185FA5] text-white font-semibold py-4 rounded-2xl hover:bg-[#14508a] transition-colors">
              Discuss Customs Clearance
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
