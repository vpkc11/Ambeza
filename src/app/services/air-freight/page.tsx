import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Air Freight from India — Air Cargo Export Services | Ambeza",
  description: "Air freight export from India to USA, UK, UAE, Singapore and 150+ countries. IATA-certified. 3–7 days transit. Operating from HYD, BOM, DEL, MAA, BLR, CCU. Get a quote in 24 hours.",
  keywords: [
    "air freight from India",
    "air cargo export India",
    "air freight India to USA",
    "air freight India to UAE",
    "airway bill India",
    "air cargo Hyderabad",
    "air freight Mumbai",
    "IATA freight India",
  ],
};

const airFreightFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the minimum shipment size for air freight from India?", acceptedAnswer: { "@type": "Answer", text: "There is no minimum — we handle shipments from 1 kg upwards. Air is especially cost-effective for small, high-value cargo." } },
    { "@type": "Question", name: "How is air freight charged in India?", acceptedAnswer: { "@type": "Answer", text: "Air freight is charged on the higher of actual weight (kg) and volumetric weight. Volumetric weight = (L × W × H in cm) ÷ 6,000." } },
    { "@type": "Question", name: "How long does air freight from India to the USA take?", acceptedAnswer: { "@type": "Answer", text: "5–7 days from major Indian airports (BOM, DEL, MAA, HYD, BLR, CCU) to the USA. Add 1–2 days for customs clearance at destination." } },
    { "@type": "Question", name: "Can you ship dangerous goods by air from India?", acceptedAnswer: { "@type": "Answer", text: "Yes — we handle all IATA DG classes subject to airline acceptance. We prepare MSDS, DG Declaration, and ensure correct labelling and packing groups." } },
    { "@type": "Question", name: "What documents are needed for air freight export from India?", acceptedAnswer: { "@type": "Answer", text: "Commercial Invoice, Packing List, Airway Bill (issued by us), Shipping Bill (filed by our CHA on ICEGATE), IEC, and any product-specific certificates (CoO, Phytosanitary, FSSAI, etc.)." } },
    { "@type": "Question", name: "Do you offer door-to-door air freight from India?", acceptedAnswer: { "@type": "Answer", text: "Yes — we pick up from your warehouse anywhere in India, handle customs clearance and airline booking, and coordinate delivery to the consignee in 150+ countries." } },
  ],
};

export default function AirFreightPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(airFreightFaqSchema) }} />
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

      {/* Air vs Sea comparison */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-3">Air freight vs Ocean freight — which is right for you?</h2>
          <p className="text-[#475569]">A quick comparison to help you decide before you call us.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="p-4 text-left rounded-tl-xl">Factor</th>
                <th className="p-4 text-center">Air Freight</th>
                <th className="p-4 text-center rounded-tr-xl">Ocean Freight</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Transit time", "3–7 days", "15–45 days"],
                ["Cost per kg", "Higher", "Lower"],
                ["Best for weight", "Under 500 kg", "Over 500 kg"],
                ["Best for volume", "Under 2–3 CBM", "Over 3 CBM"],
                ["Ideal cargo", "Pharma, gems, electronics, urgent", "Textiles, machinery, bulk goods"],
                ["Tracking", "Real-time AWB tracking", "Vessel-level tracking"],
                ["Risk of damage", "Lower (less handling)", "Moderate (long voyage)"],
                ["Carbon footprint", "Higher", "Lower"],
              ].map(([factor, air, sea], i) => (
                <tr key={factor} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                  <td className="p-4 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{factor}</td>
                  <td className="p-4 text-center text-[#475569] border-b border-[#E2E8F0]">{air}</td>
                  <td className="p-4 text-center text-[#475569] border-b border-[#E2E8F0]">{sea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-xs text-[#475569] mt-4">Not sure which to choose? <Link href="/contact" className="text-[#185FA5] font-semibold hover:underline">Talk to our team</Link> — we&apos;ll recommend based on your cargo weight, destination, and deadline.</p>
      </SectionWrapper>

      {/* Airports */}
      <SectionWrapper>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-3">Airports we operate from</h2>
          <p className="text-[#475569]">Pan-India air cargo coverage — all major international cargo terminals.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {[
            { code: "HYD", name: "Hyderabad", detail: "Rajiv Gandhi International" },
            { code: "BOM", name: "Mumbai", detail: "Chhatrapati Shivaji Maharaj" },
            { code: "DEL", name: "Delhi", detail: "Indira Gandhi International" },
            { code: "MAA", name: "Chennai", detail: "Chennai International" },
            { code: "BLR", name: "Bangalore", detail: "Kempegowda International" },
            { code: "CCU", name: "Kolkata", detail: "Netaji Subhas Chandra Bose" },
          ].map(({ code, name, detail }) => (
            <div key={code} className="text-center bg-white border border-[#E2E8F0] rounded-xl p-4">
              <div className="w-12 h-12 bg-[#185FA5]/10 rounded-xl flex items-center justify-center text-[#185FA5] font-bold text-xs mx-auto mb-2">{code}</div>
              <p className="font-bold text-[#0A1628] text-sm">{name}</p>
              <p className="text-xs text-[#475569] mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Rates table */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-3">Air freight rates from India — indicative 2025</h2>
          <p className="text-[#475569] text-sm max-w-2xl mx-auto">Rates shown are approximate all-in ranges per chargeable kg (higher of actual or volumetric). Actual quotes depend on volume, commodity, and airline availability. Contact us for a fixed quote within 24 hours.</p>
        </div>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="p-4 text-left rounded-tl-xl">Destination</th>
                <th className="p-4 text-center">Transit time</th>
                <th className="p-4 text-center">Rate range (per kg)</th>
                <th className="p-4 text-center rounded-tr-xl">Min. chargeable</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["India → USA (JFK / LAX)", "5–7 days", "₹350–600", "45 kg"],
                ["India → UK (LHR)", "4–6 days", "₹280–480", "45 kg"],
                ["India → UAE (DXB)", "2–3 days", "₹120–250", "45 kg"],
                ["India → Singapore (SIN)", "3–5 days", "₹180–320", "45 kg"],
                ["India → Germany (FRA)", "4–6 days", "₹300–500", "45 kg"],
                ["India → Australia (SYD)", "5–7 days", "₹380–620", "45 kg"],
                ["India → Canada (YYZ)", "5–7 days", "₹360–580", "45 kg"],
                ["India → South Africa (JNB)", "4–6 days", "₹320–520", "45 kg"],
              ].map(([route, transit, rate, min], i) => (
                <tr key={route} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                  <td className="p-4 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{route}</td>
                  <td className="p-4 text-center text-[#475569] border-b border-[#E2E8F0]">{transit}</td>
                  <td className="p-4 text-center font-semibold text-[#185FA5] border-b border-[#E2E8F0]">{rate}</td>
                  <td className="p-4 text-center text-[#475569] border-b border-[#E2E8F0]">{min}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center max-w-2xl mx-auto">
          <p className="text-xs text-amber-800 leading-relaxed">
            <span className="font-bold">Important:</span> All rates are indicative Q2 2025 market ranges and exclude fuel surcharge, security surcharge, and destination handling. Final rates are fixed at time of booking. <Link href="/contact" className="font-bold underline">Get an exact quote →</Link>
          </p>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-8 text-center">Air freight — frequently asked questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "What is the minimum shipment size for air freight?",
                a: "There is no minimum — we handle shipments from 1 kg upwards. Air is especially cost-effective for small, high-value cargo. For very small shipments (under 5 kg), we can also advise on courier options.",
              },
              {
                q: "How is air freight charged? Actual weight vs volumetric weight?",
                a: "Air freight is charged on the higher of actual weight (kg) and volumetric weight. Volumetric weight = (Length × Width × Height in cm) ÷ 6,000. For example, a box of 50cm × 40cm × 30cm = 60,000 ÷ 6,000 = 10 kg volumetric. If the actual weight is 4 kg, you pay for 10 kg. Use our free volumetric calculator to check before requesting a quote.",
              },
              {
                q: "Can you ship dangerous goods by air?",
                a: "Yes — we handle all IATA DG classes subject to airline acceptance. We prepare MSDS, DG Declaration, and ensure correct labelling, packaging, and packing groups. Some categories (flammable liquids, lithium batteries) have airline-specific restrictions. Contact us with your product details.",
              },
              {
                q: "What documents are needed for air freight export from India?",
                a: "You need: Commercial Invoice, Packing List, Airway Bill (issued by us), Shipping Bill (filed by our CHA on ICEGATE), IEC, and any product-specific certificates (CoO, Phytosanitary, FSSAI, etc.). If you&apos;re new to export, we help you prepare all of these.",
              },
              {
                q: "How long does customs clearance take at Indian airports?",
                a: "Most air cargo gets Green Channel clearance within 4–6 hours of Shipping Bill filing. Yellow and Red channel examinations take 12–24 hours. Our in-house CHA team is present at all airports for examinations, which speeds up clearance significantly compared to outsourced CHA agents.",
              },
              {
                q: "Do you offer door-to-door air freight from India?",
                a: "Yes — we pick up from your warehouse anywhere in India, handle customs clearance and airline booking at the origin airport, and coordinate delivery to the consignee at destination through our partner network in 150+ countries.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white border border-[#E2E8F0] rounded-xl p-6">
                <p className="font-bold text-[#0A1628] mb-2">{q}</p>
                <p className="text-sm text-[#475569] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Internal links */}
      <SectionWrapper>
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-[#0A1628] mb-2">Related guides and tools</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <Link href="/tools/volumetric-calculator" className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 hover:border-[#185FA5] transition-colors block">
            <p className="font-semibold text-[#0A1628] text-sm mb-1">Volumetric Weight Calculator</p>
            <p className="text-xs text-[#475569]">Find your chargeable weight instantly</p>
          </Link>
          <Link href="/services/ocean-freight" className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 hover:border-[#185FA5] transition-colors block">
            <p className="font-semibold text-[#0A1628] text-sm mb-1">Ocean Freight from India</p>
            <p className="text-xs text-[#475569]">FCL, LCL — better value for heavy cargo</p>
          </Link>
          <Link href="/new-exporter" className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 hover:border-[#185FA5] transition-colors block">
            <p className="font-semibold text-[#0A1628] text-sm mb-1">First Time Exporter Guide</p>
            <p className="text-xs text-[#475569]">IEC, LUT, documents — start here</p>
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
