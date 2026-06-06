"use client";

import BlogLayout from "../BlogLayout";
import Link from "next/link";

const comparison = [
  { factor: "You pay for", fcl: "Full container (fixed price)", lcl: "Your CBM only" },
  { factor: "Best for cargo size", fcl: "Above 15 CBM / 10,000 kg", lcl: "Under 15 CBM" },
  { factor: "Transit time", fcl: "Port-to-port sailing time", lcl: "Sailing + 3–7 days for consolidation/deconsolidation" },
  { factor: "Handling", fcl: "Stuffed once, unstuffed once", lcl: "Multiple handlings at CFS on both ends" },
  { factor: "Risk of damage", fcl: "Lower — sealed container", lcl: "Slightly higher due to co-loading" },
  { factor: "Security", fcl: "High — sealed, only your cargo", lcl: "Shared — co-loaded with other exporters" },
  { factor: "Flexibility", fcl: "Fixed departure window", lcl: "Weekly consolidation sailings" },
  { factor: "Documentation", fcl: "Single BL for your cargo", lcl: "House BL from freight forwarder" },
  { factor: "Ideal for", fcl: "Machinery, textiles in volume, chemicals", lcl: "Samples, first orders, small regular shipments" },
];

const containers = [
  { type: "20ft Standard", cbm: "~26 CBM", kg: "~21,700 kg", best: "General goods, machinery parts, dense cargo" },
  { type: "40ft Standard", cbm: "~55 CBM", kg: "~26,400 kg", best: "Textiles, garments, furniture, consumer goods" },
  { type: "40ft High Cube", cbm: "~67 CBM", kg: "~26,400 kg", best: "Bulky lightweight goods — mattresses, ready-made garments, furniture" },
  { type: "Reefer 20ft / 40ft", cbm: "Same as standard", kg: "Temperature controlled", best: "Pharma, fresh produce, seafood, chemicals" },
  { type: "Flat Rack", cbm: "Oversize", kg: "Heavy lift", best: "Machinery, vehicles, project cargo" },
];

export default function FCLvsLCLClient() {
  return (
    <BlogLayout
      title="FCL vs LCL Shipping — Which Container Option Is Right for You?"
      description="A practical guide to choosing between Full Container Load and Less than Container Load shipping from India — with cost comparisons, transit time differences, and the exact breakeven point."
      publishDate="June 2025"
      readTime="9 min read"
      category="Ocean Freight"
      relatedLinks={[
        { href: "/services/ocean-freight", label: "Ocean Freight from India" },
        { href: "/tools/shipping-estimator", label: "Shipping Cost Estimator" },
        { href: "/blog/ship-india-to-usa", label: "Shipping India to USA" },
        { href: "/blog/port-selector-guide", label: "Which Port to Use" },
      ]}
    >
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          One of the first decisions every exporter faces is whether to book a full container (FCL) or share space with other
          shippers (LCL). The wrong choice costs money — either you book a full container for a 3 CBM shipment, or you keep
          using LCL long past the point where it becomes more expensive than FCL. This guide gives you the exact numbers to
          make the right call every time.
        </p>
      </div>

      {/* Definitions */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">FCL and LCL — what they actually mean</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        <div className="bg-[#185FA5] rounded-2xl p-6 text-white">
          <p className="text-4xl font-extrabold mb-2">FCL</p>
          <p className="font-bold text-lg mb-3">Full Container Load</p>
          <p className="text-white/80 text-sm leading-relaxed">
            Your cargo fills an entire 20ft or 40ft container. You pay for the full container regardless of how full it is.
            The container is sealed at your origin and opened only at the destination. No other cargo shares your container.
          </p>
          <div className="mt-4 bg-white/10 rounded-lg p-3">
            <p className="text-xs font-bold mb-1">Best for:</p>
            <p className="text-xs text-white/80">Cargo above 15 CBM or regular high-volume shipments</p>
          </div>
        </div>
        <div className="bg-[#0A1628] rounded-2xl p-6 text-white">
          <p className="text-4xl font-extrabold mb-2">LCL</p>
          <p className="font-bold text-lg mb-3">Less than Container Load</p>
          <p className="text-white/80 text-sm leading-relaxed">
            Your cargo shares a container with other exporters&apos; shipments. You pay only for the space your cargo occupies,
            measured in CBM (cubic metres). A freight forwarder consolidates multiple smaller shipments into one container.
          </p>
          <div className="mt-4 bg-white/10 rounded-lg p-3">
            <p className="text-xs font-bold mb-1">Best for:</p>
            <p className="text-xs text-white/80">Cargo under 15 CBM, first orders, samples, testing new markets</p>
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">Head-to-head comparison</h2>
      <p className="text-[#475569] mb-6">Every factor that matters when choosing between FCL and LCL.</p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0A1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Factor</th>
              <th className="text-left px-4 py-3 font-semibold">FCL</th>
              <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">LCL</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, i) => (
              <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                <td className="px-4 py-3 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{row.factor}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.fcl}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.lcl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Breakeven */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">The breakeven point — when does FCL become cheaper than LCL?</h2>
      <p className="text-[#475569] mb-6">
        This is the most important number in this decision. The breakeven varies by route, but here are realistic figures
        for common India export lanes.
      </p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0A1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Route</th>
              <th className="text-left px-4 py-3 font-semibold">LCL rate (per CBM)</th>
              <th className="text-left px-4 py-3 font-semibold">FCL 20ft rate</th>
              <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Breakeven CBM</th>
            </tr>
          </thead>
          <tbody>
            {[
              { route: "India → USA (West Coast)", lcl: "$55–$75/CBM", fcl: "$1,500–$2,200", breakeven: "~20–28 CBM" },
              { route: "India → USA (East Coast)", lcl: "$60–$85/CBM", fcl: "$1,800–$2,500", breakeven: "~22–30 CBM" },
              { route: "India → UK / Europe", lcl: "$45–$65/CBM", fcl: "$1,200–$1,800", breakeven: "~18–25 CBM" },
              { route: "India → UAE / Middle East", lcl: "$30–$50/CBM", fcl: "$700–$1,100", breakeven: "~15–22 CBM" },
              { route: "India → Australia", lcl: "$50–$70/CBM", fcl: "$1,300–$1,900", breakeven: "~18–24 CBM" },
            ].map((row, i) => (
              <tr key={row.route} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                <td className="px-4 py-3 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{row.route}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.lcl}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.fcl}</td>
                <td className="px-4 py-3 font-semibold text-[#185FA5] border-b border-[#E2E8F0]">{row.breakeven}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-xl p-4 mb-12 text-sm text-[#475569]">
        <strong className="text-[#0A1628]">Note:</strong> These are indicative market rates as of mid-2025. Actual rates fluctuate with fuel surcharges, peak season, and carrier availability. Contact Ambeza for a live quote on your specific route.
      </div>

      {/* Container types */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">Container types available for FCL</h2>
      <p className="text-[#475569] mb-6">Choosing the right container type matters as much as choosing FCL.</p>
      <div className="grid grid-cols-1 gap-3 mb-12">
        {containers.map((c) => (
          <div key={c.type} className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <p className="font-bold text-[#0A1628]">{c.type}</p>
              <p className="text-sm text-[#475569]">{c.best}</p>
            </div>
            <div className="flex gap-4 text-sm">
              <span className="bg-[#185FA5]/10 text-[#185FA5] font-semibold px-3 py-1 rounded-full">{c.cbm}</span>
              <span className="bg-[#0A1628]/10 text-[#0A1628] font-semibold px-3 py-1 rounded-full">{c.kg}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Decision guide */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Quick decision guide</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <div className="bg-[#10B981]/5 border border-[#10B981]/20 rounded-xl p-5">
          <p className="font-bold text-[#10B981] mb-3">✓ Choose LCL if:</p>
          <ul className="space-y-2 text-sm text-[#475569]">
            {["Your cargo is under 12–15 CBM", "It is a first order or sample shipment", "You are testing a new export market", "Your product is not fragile or sensitive", "You ship irregularly to the same destination"].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-[#10B981]">•</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-xl p-5">
          <p className="font-bold text-[#185FA5] mb-3">✓ Choose FCL if:</p>
          <ul className="space-y-2 text-sm text-[#475569]">
            {["Your cargo exceeds 15 CBM", "You ship regularly to the same port", "Your cargo is fragile or high-value", "You need the container sealed for security", "Transit time is critical — FCL is 3–7 days faster"].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-[#185FA5]">•</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: "What is the difference between FCL and LCL?", a: "FCL means your cargo fills an entire container and you pay for the full box. LCL means your cargo shares a container with other shippers and you pay only for the space you use, measured in CBM." },
          { q: "When should I switch from LCL to FCL?", a: "When your cargo exceeds 15–17 CBM on most routes, FCL becomes cheaper than LCL. You should also switch to FCL if you have fragile cargo, security concerns, or if you need faster transit." },
          { q: "What is the minimum CBM for LCL from India?", a: "There is no strict minimum, but LCL is most cost-effective from 1 CBM onwards. Below 0.5 CBM, courier or express freight is usually better value." },
          { q: "Does LCL take longer than FCL?", a: "Yes — typically 3–7 days longer. LCL cargo needs to be consolidated at a Container Freight Station (CFS) on the export side, and deconsolidated at destination CFS before local delivery." },
          { q: "Can I track my LCL shipment?", a: "Yes. Ambeza provides tracking updates at each stage — pickup, CFS stuffing, vessel departure, arrival at destination port, and delivery." },
        ].map((item, i) => (
          <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5">
            <p className="font-bold text-[#0A1628] mb-2 text-sm">Q: {item.q}</p>
            <p className="text-sm text-[#475569] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-xl p-5 text-center">
        <p className="font-bold text-[#0A1628] mb-1">Not sure which is right for your shipment?</p>
        <p className="text-sm text-[#475569] mb-4">Tell us your cargo weight, dimensions, and destination — we will recommend FCL or LCL and give you a fixed quote for both.</p>
        <Link href="/contact" className="inline-block bg-[#185FA5] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#0f4a85] transition-colors text-sm">
          Get FCL and LCL Quotes
        </Link>
      </div>
    </BlogLayout>
  );
}
