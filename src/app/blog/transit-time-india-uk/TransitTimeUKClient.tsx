"use client";

import BlogLayout from "../BlogLayout";

const routes = [
  { from: "JNPT Mumbai", to: "Felixstowe (UK)", mode: "Ocean FCL/LCL", days: "20–24 days", notes: "Most common route. Direct services available." },
  { from: "JNPT Mumbai", to: "Southampton", mode: "Ocean FCL/LCL", days: "22–26 days", notes: "Good for South England deliveries." },
  { from: "Mundra", to: "Felixstowe", mode: "Ocean FCL/LCL", days: "22–26 days", notes: "Slightly longer due to transshipment at hub." },
  { from: "Chennai", to: "Felixstowe", mode: "Ocean FCL/LCL", days: "24–28 days", notes: "Best for South India cargo." },
  { from: "Mumbai BOM", to: "London Heathrow", mode: "Air Freight", days: "3–5 days", notes: "Direct flights. Best air option from India." },
  { from: "Delhi DEL", to: "London Heathrow", mode: "Air Freight", days: "3–5 days", notes: "Multiple daily direct flights." },
  { from: "Hyderabad HYD", to: "London Heathrow", mode: "Air Freight (via hub)", days: "4–6 days", notes: "One stop via Dubai, Doha, or Abu Dhabi." },
  { from: "Any city", to: "London / UK", mode: "Express Courier", days: "2–4 days", notes: "DHL/FedEx/UPS for parcels under 30 kg." },
];

const factors = [
  { factor: "Port congestion in India", impact: "+1–3 days", when: "Peak season (Oct–Dec), port strikes, vessel delays at JNPT or Mundra" },
  { factor: "UK customs clearance", impact: "+1–3 days", when: "Post-Brexit — all shipments now require formal customs entry at UK border. Incorrect documents cause holds." },
  { factor: "LCL consolidation", impact: "+3–7 days", when: "LCL cargo waits for the container to fill before departure; deconsolidated at UK CFS after arrival" },
  { factor: "UK inland delivery", impact: "+1–3 days", when: "From Felixstowe or Southampton to the buyer's warehouse in the UK" },
  { factor: "Bank holidays", impact: "+1–2 days", when: "Indian public holidays (Republic Day, Diwali, Holi) and UK bank holidays" },
];

export default function TransitTimeUKClient() {
  return (
    <BlogLayout
      title="How Long Does Shipping from India to the UK Take? — Transit Times 2025"
      description="Real door-to-door transit times for shipping from India to the UK by air and ocean freight — including what adds days to your delivery, post-Brexit customs impact, and how to get the fastest route."
      publishDate="June 2025"
      readTime="8 min read"
      category="Shipping Guides"
      relatedLinks={[
        { href: "/tools/transit-time", label: "Transit Time Calculator" },
        { href: "/services/air-freight", label: "Air Freight from India" },
        { href: "/services/ocean-freight", label: "Ocean Freight from India" },
        { href: "/blog/ship-india-to-usa", label: "Shipping India to USA" },
      ]}
    >
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          The UK is one of India&apos;s top 5 export markets. Since Brexit, the customs process at the UK border has changed —
          every shipment now requires formal customs clearance, which adds 1–2 days to transit times compared to the pre-2021
          EU regime. This guide gives you accurate 2025 transit times and explains every factor that can add or subtract days
          from your door-to-door delivery.
        </p>
      </div>

      {/* Summary cards */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Transit time summary — India to UK</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { mode: "Express Courier", time: "2–4 days", cost: "Most expensive per kg", best: "Parcels under 30 kg", icon: "📦" },
          { mode: "Air Freight", time: "3–6 days", cost: "₹280–₹440/kg", best: "Urgent shipments, high-value cargo", icon: "✈️" },
          { mode: "Ocean Freight", time: "20–28 days", cost: "Most cost-effective", best: "Most shipments above 200 kg", icon: "🚢" },
        ].map((item) => (
          <div key={item.mode} className="bg-[#0A1628] text-white rounded-2xl p-5 text-center">
            <div className="text-3xl mb-3">{item.icon}</div>
            <p className="font-extrabold text-xl mb-1">{item.time}</p>
            <p className="font-bold mb-2">{item.mode}</p>
            <p className="text-white/60 text-xs mb-1">{item.cost}</p>
            <p className="text-white/60 text-xs">{item.best}</p>
          </div>
        ))}
      </div>

      {/* Route table */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">Route-by-route transit times — India to UK</h2>
      <p className="text-[#475569] mb-6">These are port-to-port or airport-to-airport times. Add 1–3 days for Indian customs clearance and 1–3 days for UK inland delivery for door-to-door.</p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0A1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">From</th>
              <th className="text-left px-4 py-3 font-semibold">To</th>
              <th className="text-left px-4 py-3 font-semibold">Mode</th>
              <th className="text-left px-4 py-3 font-semibold">Transit</th>
              <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                <td className="px-4 py-3 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{row.from}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.to}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.mode}</td>
                <td className="px-4 py-3 font-bold text-[#185FA5] border-b border-[#E2E8F0]">{row.days}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0] text-xs">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Brexit impact */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Post-Brexit impact on shipping from India to the UK</h2>
      <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-2xl p-6 mb-12">
        <p className="font-bold text-[#0A1628] mb-4">What changed after Brexit (January 2021)</p>
        <div className="space-y-3 text-sm text-[#475569]">
          {[
            "The UK is no longer part of the EU customs union. Every shipment from India now requires formal UK customs clearance — Entry Summary Declaration (ENS) and a full customs entry.",
            "Your UK buyer or their customs broker must file the import declaration. This was not required before Brexit for shipments going through EU ports.",
            "UK import duty rates (UK Global Tariff) now apply. In most cases these are similar to EU MFN rates, but check for your specific HS code.",
            "Delayed declarations rules: UK importers had a temporary option to delay customs declarations, but this has now ended. All shipments require full customs entry at the border.",
            "Add 1–2 days to transit time for post-Brexit UK customs processing — especially for first-time shipments where HMRC may query the entry.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[#F59E0B] mt-0.5 flex-shrink-0">•</span>{item}
            </div>
          ))}
        </div>
      </div>

      {/* Factors affecting transit */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Factors that add days to your India-UK shipment</h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0A1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Factor</th>
              <th className="text-left px-4 py-3 font-semibold">Time Added</th>
              <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">When it occurs</th>
            </tr>
          </thead>
          <tbody>
            {factors.map((row, i) => (
              <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                <td className="px-4 py-3 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{row.factor}</td>
                <td className="px-4 py-3 font-bold text-red-500 border-b border-[#E2E8F0]">{row.impact}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Documents for UK */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Documents your UK buyer needs for customs clearance</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
        {[
          { doc: "Commercial Invoice", note: "Must show: commodity code (UK HS), country of origin, Incoterm, declared value in GBP or invoice currency" },
          { doc: "Packing List", note: "Carton-wise breakdown matching the invoice exactly" },
          { doc: "Bill of Lading / Airway Bill", note: "Confirms shipment. Required for UK customs entry filing" },
          { doc: "Certificate of Origin", note: "Required if claiming preferential duty under India-UK trade arrangement (check current status)" },
          { doc: "Import Declaration (C88)", note: "Filed by UK buyer's customs broker on CHIEF or CDS (UK customs systems)" },
          { doc: "EORI Number", note: "Your UK buyer must have a UK EORI number to import. EU EORI no longer valid in UK post-Brexit" },
        ].map((d) => (
          <div key={d.doc} className="bg-white border border-[#E2E8F0] rounded-xl p-4">
            <p className="font-bold text-[#185FA5] text-sm mb-1">{d.doc}</p>
            <p className="text-xs text-[#475569]">{d.note}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: "How long does sea freight from India to the UK take?", a: "20–28 days port-to-port depending on origin port and UK destination port. Add 2–4 days for Indian customs clearance and UK inland delivery for door-to-door. LCL adds 3–5 more days for consolidation and deconsolidation." },
          { q: "How long does air freight from India to the UK take?", a: "3–5 days from Mumbai or Delhi to Heathrow. Add 1–2 days for Indian export clearance and UK customs clearance. Express courier (DHL/FedEx) is 2–4 days for small parcels." },
          { q: "Has Brexit made shipping from India to the UK slower?", a: "Yes — by approximately 1–2 days. Post-Brexit, all shipments require formal UK customs entry and HMRC processing. The first shipment from a new exporter/importer pair typically takes slightly longer as HMRC verifies the importer." },
          { q: "Does India have a Free Trade Agreement with the UK?", a: "India and the UK are in active negotiations for a Free Trade Agreement as of 2025. When signed, it would provide preferential duty rates for many Indian exports to the UK. Until then, UK Global Tariff (MFN rates) apply to Indian goods." },
        ].map((item, i) => (
          <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5">
            <p className="font-bold text-[#0A1628] mb-2 text-sm">Q: {item.q}</p>
            <p className="text-sm text-[#475569] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </BlogLayout>
  );
}
