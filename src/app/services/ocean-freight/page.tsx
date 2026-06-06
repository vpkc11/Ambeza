import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Ocean Freight Export from India — FCL, LCL, Break Bulk",
  description: "FCL and LCL ocean freight from India to 150+ countries. Operating from JNPT Mumbai, Chennai, Mundra, Kolkata, Vizag. Best rates for shipments above 500 kg. Get a free quote in 24 hours.",
  keywords: [
    "ocean freight from India",
    "FCL shipping India",
    "LCL shipping India",
    "sea freight India",
    "container shipping India",
    "JNPT freight forwarder",
    "ship from India to USA",
    "break bulk India",
  ],
};

const containerTypes = [
  { type: "20ft Standard", capacity: "~26 CBM / ~21,700 kg", bestFor: "General goods, machinery parts, consumer products" },
  { type: "40ft Standard", capacity: "~55 CBM / ~26,400 kg", bestFor: "Textiles, garments, furniture, light industrial goods" },
  { type: "40ft High Cube", capacity: "~67 CBM / ~26,400 kg", bestFor: "Bulky lightweight goods — furniture, mattresses, ready-made garments" },
  { type: "Reefer (20ft/40ft)", capacity: "Same as standard — temperature controlled", bestFor: "Pharma, seafood, fresh produce, chemicals requiring cold chain" },
  { type: "Flat Rack", capacity: "Oversize cargo", bestFor: "Machinery, vehicles, oversized equipment" },
];

const oceanFreightFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the minimum cargo size for ocean freight from India?", acceptedAnswer: { "@type": "Answer", text: "There is no hard minimum — LCL shipments can be as small as 0.1 CBM. However, for cargo below 500 kg or 2 CBM, air freight is often cheaper once LCL handling and port fees are added." } },
    { "@type": "Question", name: "FCL or LCL — which is better value for Indian exporters?", acceptedAnswer: { "@type": "Answer", text: "The crossover is typically 12–15 CBM or 5,000 kg. Below this, LCL is usually cheaper. Above this, FCL gives a dedicated container, lower damage risk, and faster transit." } },
    { "@type": "Question", name: "How long does ocean freight from India to the USA take?", acceptedAnswer: { "@type": "Answer", text: "Mumbai (JNPT) to Los Angeles: 22–26 days. Mumbai to New York: 28–32 days. Chennai to Los Angeles: 26–30 days. Add 3–5 days for destination customs and inland delivery." } },
    { "@type": "Question", name: "What documents do I need for ocean freight export from India?", acceptedAnswer: { "@type": "Answer", text: "Commercial Invoice, Packing List, Bill of Lading (issued by the shipping line), Shipping Bill (filed by our CHA on ICEGATE), IEC, and Certificate of Origin if required by the destination country." } },
    { "@type": "Question", name: "Can you handle reefer containers for cold chain exports from India?", acceptedAnswer: { "@type": "Answer", text: "Yes — we book and manage reefer FCL and LCL for pharma, seafood, fresh produce, and temperature-sensitive chemicals from all major Indian ports." } },
  ],
};

export default function OceanFreightPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(oceanFreightFaqSchema) }} />
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

      {/* Incoterms */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-3">Incoterms for ocean freight — what they mean for you</h2>
          <p className="text-[#475569] max-w-2xl mx-auto">Incoterms define who pays for shipping and who bears the risk at each stage. Here are the four most common ones used for ocean exports from India.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            {
              term: "FOB",
              full: "Free On Board",
              desc: "You (the exporter) are responsible for all costs and risks until the goods are loaded onto the vessel at the Indian port. The buyer pays freight and insurance from that point. Most common for Indian exporters.",
              badge: "Most common",
              badgeColor: "bg-[#185FA5] text-white",
            },
            {
              term: "CIF",
              full: "Cost, Insurance, Freight",
              desc: "You pay for ocean freight and insurance to the destination port. The buyer takes risk once cargo arrives at destination. Often preferred by buyers who want predictable total cost.",
              badge: "Buyer-friendly",
              badgeColor: "bg-green-100 text-green-800",
            },
            {
              term: "CFR",
              full: "Cost and Freight",
              desc: "You pay ocean freight to destination port but don't cover insurance. Risk transfers at the origin port. Less common — CIF is preferred when insurance is required.",
              badge: "Less common",
              badgeColor: "bg-slate-100 text-slate-600",
            },
            {
              term: "DDP",
              full: "Delivered Duty Paid",
              desc: "You pay everything including destination customs duties and last-mile delivery. Highest obligation for the exporter. Only use when the buyer has specifically asked for it and you've accounted for destination duty costs.",
              badge: "Complex",
              badgeColor: "bg-amber-100 text-amber-800",
            },
          ].map(({ term, full, desc, badge, badgeColor }) => (
            <div key={term} className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-bold text-[#0A1628] text-lg">{term}</span>
                  <span className="text-[#475569] text-sm ml-2">— {full}</span>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColor}`}>{badge}</span>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Port comparison */}
      <SectionWrapper>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-3">Which Indian port should you ship from?</h2>
          <p className="text-[#475569]">Port choice affects transit time, rate, and frequency. Here is how the major ports compare.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="p-4 text-left rounded-tl-xl">Port</th>
                <th className="p-4 text-center">Strength</th>
                <th className="p-4 text-center">Best routes</th>
                <th className="p-4 text-center rounded-tr-xl">Transit to USA (West Coast)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["JNPT / Nhava Sheva", "Highest frequency, most carriers", "USA, UK, Europe, Middle East", "~25–28 days"],
                ["Chennai Sea Port", "Best for Southeast Asia, East coast India", "Singapore, Malaysia, USA East Coast", "~28–32 days"],
                ["Mundra (Gujarat)", "Fastest growing, competitive rates", "Middle East, Africa, Europe", "~25–30 days"],
                ["Kolkata / Haldia", "Northeast India hub, Bangladesh routes", "Singapore, SE Asia, Middle East", "~28–35 days"],
                ["Vizag", "East coast bulk and break bulk", "Japan, Korea, SE Asia", "~30–35 days"],
              ].map(([port, strength, routes, transit], i) => (
                <tr key={port} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                  <td className="p-4 font-semibold text-[#0A1628] border-b border-[#E2E8F0]">{port}</td>
                  <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{strength}</td>
                  <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{routes}</td>
                  <td className="p-4 text-center text-[#475569] border-b border-[#E2E8F0]">{transit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-8 text-center">Ocean freight — frequently asked questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "What is the minimum cargo size for ocean freight from India?",
                a: "There is no hard minimum — LCL (shared container) shipments can be as small as 0.1 CBM. However, for cargo below 500 kg / 2 CBM, air freight is often cheaper once you factor in LCL handling charges, CFS charges, and port fees. We will advise which mode is more cost-effective for your specific shipment.",
              },
              {
                q: "FCL or LCL — which is better value?",
                a: "The crossover point is typically 12–15 CBM or 5,000 kg. Below this, LCL is usually cheaper. Above this, FCL gives you a dedicated container, lower risk of cargo damage, and faster transit (no CFS consolidation delays). We calculate the breakeven for your shipment before quoting.",
              },
              {
                q: "How long does ocean freight from India to the USA take?",
                a: "Mumbai (JNPT) to Los Angeles: 22–26 days. Mumbai to New York: 28–32 days. Chennai to Los Angeles: 26–30 days. These are sailing days — add 3–5 days for customs clearance and inland delivery at destination. Transit times vary by carrier and season.",
              },
              {
                q: "What documents do I need for ocean freight export?",
                a: "Core documents: Commercial Invoice, Packing List, Bill of Lading (issued by the shipping line), Shipping Bill (filed by our CHA on ICEGATE), IEC, and Certificate of Origin if required by the destination country. For food, pharma, or agricultural products, additional certificates may be needed.",
              },
              {
                q: "Can you handle reefer (refrigerated) containers?",
                a: "Yes — we book and manage reefer FCL and LCL for pharma, seafood, fresh produce, and temperature-sensitive chemicals. We specify the exact temperature range required and verify reefer performance before loading.",
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
    </>
  );
}
