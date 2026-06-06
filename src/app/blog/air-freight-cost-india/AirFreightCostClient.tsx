"use client";

import BlogLayout from "../BlogLayout";
import Link from "next/link";

const rates = [
  { route: "India → USA (East Coast)", rate: "₹380–₹600/kg", transit: "5–7 days", airports: "BOM, DEL, HYD" },
  { route: "India → USA (West Coast)", rate: "₹350–₹560/kg", transit: "4–6 days", airports: "BOM, DEL, HYD" },
  { route: "India → UK (London)", rate: "₹280–₹440/kg", transit: "3–5 days", airports: "BOM, DEL, MAA" },
  { route: "India → UAE (Dubai)", rate: "₹120–₹200/kg", transit: "1–2 days", airports: "BOM, HYD, DEL, MAA, BLR" },
  { route: "India → Singapore", rate: "₹150–₹250/kg", transit: "2–3 days", airports: "BOM, MAA, BLR" },
  { route: "India → Australia", rate: "₹300–₹480/kg", transit: "3–5 days", airports: "BOM, MAA, BLR" },
  { route: "India → Germany / Europe", rate: "₹260–₹420/kg", transit: "3–5 days", airports: "BOM, DEL" },
  { route: "India → Kenya / East Africa", rate: "₹200–₹350/kg", transit: "2–4 days", airports: "BOM, DEL" },
];

const surcharges = [
  { name: "Fuel Surcharge (FSC)", what: "Varies weekly with jet fuel prices. Usually ₹30–₹80/kg on top of the base rate. Always check the current FSC in your quote." },
  { name: "Security Surcharge (SSC)", what: "Covers X-ray screening and security handling at the airport. Typically ₹10–₹20/kg." },
  { name: "Terminal Handling Charge (THC)", what: "Airport handling fee charged by the cargo terminal. Usually ₹15–₹30/kg or a flat fee per shipment." },
  { name: "Airway Bill Fee (AWB)", what: "A flat fee per shipment for issuing the Airway Bill. Typically ₹300–₹600 per AWB." },
  { name: "DG Surcharge", what: "For dangerous goods — additional handling, documentation, and regulatory compliance. Varies by DG class." },
  { name: "Pharma / Cool Chain Surcharge", what: "For temperature-sensitive cargo. Covers cool storage and handling. Typically ₹40–₹80/kg." },
];

export default function AirFreightCostClient() {
  return (
    <BlogLayout
      title="Air Freight Cost from India — What You Actually Pay Per Kg"
      description="Real air freight rates from India to the USA, UK, UAE, Singapore, and Australia — plus a full breakdown of how charges are calculated, what surcharges to expect, and how to reduce your total cost."
      publishDate="June 2025"
      readTime="10 min read"
      category="Air Freight"
      relatedLinks={[
        { href: "/services/air-freight", label: "Air Freight Services" },
        { href: "/tools/volumetric-calculator", label: "Volumetric Weight Calculator" },
        { href: "/tools/shipping-estimator", label: "Shipping Cost Estimator" },
        { href: "/blog/fcl-vs-lcl", label: "FCL vs LCL Guide" },
      ]}
    >
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          Air freight quotes are confusing because the final invoice rarely matches the number you were given. Fuel surcharges,
          volumetric weight upgrades, terminal charges — all of these stack on top of the base rate. This guide shows you exactly
          how air freight from India is priced, what realistic rates look like in 2025, and how to compare quotes properly.
        </p>
      </div>

      {/* How it's calculated */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">How air freight charges are calculated</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">
          <p className="font-bold text-[#185FA5] text-sm mb-2">Actual Weight</p>
          <p className="text-sm text-[#475569] leading-relaxed">The gross weight of your shipment including packaging, measured on a scale at the cargo terminal.</p>
        </div>
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">
          <p className="font-bold text-[#185FA5] text-sm mb-2">Volumetric Weight</p>
          <p className="text-sm text-[#475569] leading-relaxed">Calculated from dimensions: (L × W × H in cm) ÷ 6,000. Used when a light but bulky shipment takes up more space on the aircraft than its weight suggests.</p>
        </div>
      </div>
      <div className="bg-[#0A1628] text-white rounded-2xl p-6 mb-12">
        <p className="font-bold text-lg mb-2">The rule: you always pay for whichever is higher</p>
        <p className="text-white/70 text-sm mb-4">Example: A 10 kg box measuring 50 × 40 × 30 cm.</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-bold text-[#F59E0B]">Actual weight</p>
            <p className="text-white">10 kg</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-bold text-[#F59E0B]">Volumetric weight</p>
            <p className="text-white">(50 × 40 × 30) ÷ 6,000 = <strong>10 kg</strong></p>
          </div>
        </div>
        <p className="text-white/70 text-xs mt-4">In this case they are equal. But a 10 kg box measuring 60 × 50 × 40 cm would have a volumetric weight of 20 kg — and you would be charged for 20 kg.</p>
        <div className="mt-4">
          <Link href="/tools/volumetric-calculator" className="inline-block bg-[#F59E0B] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#d97706] transition-colors">
            Use our free Volumetric Weight Calculator →
          </Link>
        </div>
      </div>

      {/* Rates table */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">Air freight rates from India — 2025 market rates</h2>
      <p className="text-[#475569] mb-6">
        These are indicative market rates for general cargo as of mid-2025. Pharma, DG, and temperature-controlled cargo attract additional surcharges.
        Rates fluctuate — contact us for a live quote.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0A1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Route</th>
              <th className="text-left px-4 py-3 font-semibold">Rate (per chargeable kg)</th>
              <th className="text-left px-4 py-3 font-semibold">Transit Time</th>
              <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Operating Airports</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((row, i) => (
              <tr key={row.route} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                <td className="px-4 py-3 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{row.route}</td>
                <td className="px-4 py-3 font-semibold text-[#185FA5] border-b border-[#E2E8F0]">{row.rate}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.transit}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0] font-mono text-xs">{row.airports}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#475569] mb-12 italic">Rates shown are base rates before surcharges. Add FSC (₹30–₹80/kg), SSC (₹10–₹20/kg), and THC. Ambeza provides all-in fixed quotes with no hidden additions.</p>

      {/* Surcharges */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">Surcharges — what gets added to your base rate</h2>
      <p className="text-[#475569] mb-6">
        These are standard industry charges. Every airline and freight forwarder applies them. The difference is whether they are
        disclosed upfront or appear on your final invoice as surprises.
      </p>
      <div className="space-y-3 mb-12">
        {surcharges.map((s) => (
          <div key={s.name} className="bg-white border border-[#E2E8F0] rounded-xl p-4">
            <p className="font-bold text-[#0A1628] text-sm mb-1">{s.name}</p>
            <p className="text-sm text-[#475569]">{s.what}</p>
          </div>
        ))}
      </div>

      {/* How to reduce cost */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">How to reduce your air freight cost</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {[
          { tip: "Optimise your packaging dimensions", detail: "Reducing the box size reduces volumetric weight. A box 5 cm smaller on each side can shift you to the next lower weight bracket." },
          { tip: "Consolidate multiple SKUs in one shipment", detail: "Multiple small boxes consolidated into one master carton reduces per-unit AWB fees and handling charges." },
          { tip: "Book in advance, not urgently", detail: "Last-minute air freight bookings attract premium rates. Plan 5–7 days ahead whenever possible." },
          { tip: "Use off-peak departures", detail: "Monday and Friday departures are busiest and most expensive. Mid-week (Tuesday–Thursday) sailings often have better rates." },
          { tip: "Consider express courier for small shipments", detail: "For shipments under 30 kg, DHL/FedEx express courier can be cheaper than general air freight once minimum charges are factored in." },
          { tip: "Get all-in fixed quotes", detail: "Ask for all-in quotes including all surcharges. A low base rate with undisclosed surcharges can end up more expensive than a higher all-in rate." },
        ].map((item) => (
          <div key={item.tip} className="bg-white border border-[#E2E8F0] rounded-xl p-5">
            <p className="font-bold text-[#0A1628] text-sm mb-2">✓ {item.tip}</p>
            <p className="text-sm text-[#475569]">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Air vs Ocean cost */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">Air freight vs ocean freight — total cost comparison</h2>
      <p className="text-[#475569] mb-6">
        The rate per kg is only one part of the cost. For high-value goods, the total landed cost (including working capital, insurance,
        and inventory holding) often makes air freight competitive with ocean even at 5× the per-kg rate.
      </p>
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-12">
        <p className="font-bold text-[#0A1628] mb-4">Example: 200 kg pharma shipment from Hyderabad to London</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-bold text-[#185FA5] mb-3">✈ Air Freight</p>
            <div className="space-y-2 text-[#475569]">
              <div className="flex justify-between"><span>Freight (₹350/kg × 200)</span><span>₹70,000</span></div>
              <div className="flex justify-between"><span>Surcharges (est.)</span><span>₹12,000</span></div>
              <div className="flex justify-between"><span>Insurance</span><span>₹3,500</span></div>
              <div className="flex justify-between"><span>Transit time</span><span>3–5 days</span></div>
              <div className="flex justify-between font-bold text-[#0A1628] border-t border-[#E2E8F0] pt-2"><span>Total freight cost</span><span>~₹85,500</span></div>
            </div>
          </div>
          <div>
            <p className="font-bold text-[#185FA5] mb-3">🚢 Ocean Freight (LCL, ~1 CBM)</p>
            <div className="space-y-2 text-[#475569]">
              <div className="flex justify-between"><span>Freight (₹6,000/CBM × 1)</span><span>₹6,000</span></div>
              <div className="flex justify-between"><span>Surcharges + CFS</span><span>₹8,000</span></div>
              <div className="flex justify-between"><span>Insurance</span><span>₹3,500</span></div>
              <div className="flex justify-between"><span>Transit time</span><span>18–24 days</span></div>
              <div className="flex justify-between font-bold text-[#0A1628] border-t border-[#E2E8F0] pt-2"><span>Total freight cost</span><span>~₹17,500</span></div>
            </div>
          </div>
        </div>
        <p className="text-xs text-[#475569] mt-4 italic">Air freight costs ~5× more in freight charges. But if the pharma cargo is on a short shelf life or your buyer needs it urgently, the speed justifies the premium. For non-urgent goods, ocean freight wins on cost.</p>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: "What is the air freight cost from India to USA per kg?", a: "General cargo: ₹350–₹600 per chargeable kg as of 2025. This is before surcharges. With FSC, SSC, and THC, the all-in rate is typically ₹450–₹750 per kg. Pharma and DG cargo attract additional surcharges." },
          { q: "How is volumetric weight calculated for air freight?", a: "Formula: (Length cm × Width cm × Height cm) ÷ 6,000. If this number is higher than your actual weight, you are charged on volumetric weight. Use our free Volumetric Weight Calculator to check before booking." },
          { q: "What surcharges are added to air freight from India?", a: "Fuel Surcharge (FSC), Security Surcharge (SSC), Terminal Handling Charge (THC), and AWB fee. DG and pharma cargo attract additional surcharges. Ambeza quotes all-in rates with no hidden additions." },
          { q: "Is air freight from India more expensive than ocean?", a: "Yes — typically 4–6× the cost per kg. But for urgent, high-value, or perishable cargo, air freight often has a better total landed cost when inventory holding and speed-to-market are factored in." },
          { q: "What is the minimum chargeable weight for air freight?", a: "Most airlines have a minimum chargeable weight of 45 kg per Airway Bill. For shipments below this, you are charged as if the shipment is 45 kg. For very small shipments, express courier is usually better value." },
        ].map((item, i) => (
          <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5">
            <p className="font-bold text-[#0A1628] mb-2 text-sm">Q: {item.q}</p>
            <p className="text-sm text-[#475569] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-xl p-5 text-center">
        <p className="font-bold text-[#0A1628] mb-1">Want an all-in air freight quote with no surprises?</p>
        <p className="text-sm text-[#475569] mb-4">Ambeza quotes include all surcharges upfront. What we quote is what you pay.</p>
        <Link href="/contact" className="inline-block bg-[#185FA5] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#0f4a85] transition-colors text-sm">
          Get an Air Freight Quote
        </Link>
      </div>
    </BlogLayout>
  );
}
