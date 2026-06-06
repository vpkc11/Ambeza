"use client";

import BlogLayout from "../BlogLayout";

const ports = [
  {
    name: "JNPT / Nhava Sheva",
    code: "INNSA",
    city: "Mumbai, Maharashtra",
    rank: "#1 container port in India",
    bestFor: "USA, Europe, UK, Middle East, Australia",
    strengths: ["Highest sailing frequency — 200+ sailings per week", "Direct services to almost every major world port", "Strong carrier competition = competitive rates", "Best for West and North India cargo via road/rail"],
    note: "Default first choice for most Indian exporters. If in doubt, use JNPT.",
    color: "blue",
  },
  {
    name: "Mundra",
    code: "INMUN",
    city: "Gujarat",
    rank: "Fastest growing port in India",
    bestFor: "USA West Coast, Middle East, East Africa",
    strengths: ["Excellent road connectivity to Gujarat manufacturing belt", "Competitive handling rates vs JNPT", "Growing direct service to US West Coast", "Strong for chemicals, petrochemicals, agri-commodities"],
    note: "Best choice if your factory is in Gujarat, Rajasthan, or MP.",
    color: "green",
  },
  {
    name: "Chennai Sea Port",
    code: "INMAA",
    city: "Tamil Nadu",
    rank: "Primary East Coast port",
    bestFor: "Southeast Asia, Australia, South Africa, East Coast USA",
    strengths: ["Hub for South India auto and engineering exports", "Strong reefer capacity for agri and pharma", "Good connectivity to Bangalore, Hyderabad, Coimbatore", "Shorter sailing time to Southeast Asia vs JNPT"],
    note: "Best for Tamil Nadu, Karnataka, Andhra Pradesh, and Telangana exporters.",
    color: "amber",
  },
  {
    name: "Vizag (Visakhapatnam)",
    code: "INVTZ",
    city: "Andhra Pradesh",
    rank: "East Coast — deep water port",
    bestFor: "East Africa, Middle East, Far East",
    strengths: ["Deep-draft berths for large vessels", "Strong for bulk commodities and break bulk", "Growing container terminal", "Good for Odisha, Andhra Pradesh, and Chhattisgarh cargo"],
    note: "Increasingly relevant for Andhra Pradesh and Odisha exporters.",
    color: "purple",
  },
  {
    name: "Kolkata / Haldia",
    code: "INCCU",
    city: "West Bengal",
    rank: "Northeast India gateway",
    bestFor: "Bangladesh, Southeast Asia, East Africa",
    strengths: ["Gateway for Northeast India and landlocked states", "Strong for jute, tea, leather goods", "Good SAFTA routes to Bangladesh, Sri Lanka, Nepal"],
    note: "Primary port for West Bengal, Jharkhand, Bihar, and Northeast India.",
    color: "red",
  },
];

const airportPorts = [
  { airport: "BOM — Mumbai Chhatrapati Shivaji", strength: "Highest air cargo volume. Best for pharma, gems, textiles, electronics. Direct flights to USA, UK, UAE, Singapore, Europe." },
  { airport: "DEL — Delhi Indira Gandhi", strength: "Best for North India manufacturing. Strong for engineering goods, auto parts, agri products. Direct flights to all major hubs." },
  { airport: "HYD — Rajiv Gandhi International", strength: "Strong pharma corridor — many pharma companies export through HYD. Good for IT goods, auto parts from AP and Telangana." },
  { airport: "MAA — Chennai", strength: "Best for South India air cargo. Auto parts, textiles, electronics. Good connections to Southeast Asia and Middle East." },
  { airport: "BLR — Kempegowda International", strength: "Growing fast. Best for electronics, IT goods, floriculture, perishables. Good connections to Singapore, Dubai." },
  { airport: "CCU — Kolkata Netaji Subhash Chandra Bose", strength: "Best for jute, tea, leather. Serves Northeast India. Connections primarily via Middle East and Southeast Asia hubs." },
];

export default function PortSelectorClient() {
  return (
    <BlogLayout
      title="Which Indian Port Should You Use for Export? — Port Selector Guide"
      description="A practical comparison of India's major export ports — JNPT, Mundra, Chennai, Vizag, and Kolkata — to help you choose the right port based on your destination, cargo type, and location in India."
      publishDate="June 2025"
      readTime="10 min read"
      category="Shipping Guides"
      relatedLinks={[
        { href: "/port-selector", label: "Interactive Port Selector Tool" },
        { href: "/services/ocean-freight", label: "Ocean Freight Services" },
        { href: "/blog/fcl-vs-lcl", label: "FCL vs LCL Guide" },
        { href: "/blog/ship-india-to-usa", label: "Shipping India to USA" },
      ]}
    >
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          Choosing the wrong port adds cost and transit time. A factory in Hyderabad routing through Kolkata for a USA shipment
          makes no geographic sense. A Gujarat manufacturer shipping through Chennai adds 800 km of inland transport. Port selection
          is one of the first optimisations Ambeza makes for new clients — and it consistently saves money.
        </p>
      </div>

      {/* Quick decision */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Quick port selector — by destination</h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0A1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Destination</th>
              <th className="text-left px-4 py-3 font-semibold">Recommended Port</th>
              <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Typical Transit</th>
            </tr>
          </thead>
          <tbody>
            {[
              { dest: "USA East Coast", port: "JNPT Mumbai", transit: "22–28 days" },
              { dest: "USA West Coast", port: "JNPT or Mundra", transit: "18–24 days" },
              { dest: "UK / North Europe", port: "JNPT or Mundra", transit: "20–26 days" },
              { dest: "UAE / Gulf", port: "Mundra or JNPT", transit: "5–10 days" },
              { dest: "Southeast Asia", port: "Chennai or JNPT", transit: "8–18 days" },
              { dest: "East Africa (Kenya, Tanzania)", port: "JNPT or Chennai", transit: "12–18 days" },
              { dest: "West Africa (Nigeria, Ghana)", port: "JNPT", transit: "18–28 days" },
              { dest: "Australia / NZ", port: "Chennai or JNPT", transit: "15–22 days" },
              { dest: "Bangladesh", port: "Kolkata or Chennai", transit: "3–8 days" },
              { dest: "South America", port: "JNPT", transit: "28–40 days" },
            ].map((row, i) => (
              <tr key={row.dest} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                <td className="px-4 py-3 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{row.dest}</td>
                <td className="px-4 py-3 font-semibold text-[#185FA5] border-b border-[#E2E8F0]">{row.port}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.transit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Port profiles */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Port profiles — detailed comparison</h2>
      <div className="space-y-5 mb-12">
        {ports.map((p) => (
          <div key={p.name} className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-extrabold text-[#0A1628] text-lg">{p.name}</p>
                <p className="text-sm text-[#475569]">{p.city}</p>
              </div>
              <span className="text-xs font-mono bg-[#185FA5]/10 text-[#185FA5] px-2 py-1 rounded">{p.code}</span>
            </div>
            <p className="text-xs font-bold text-[#F59E0B] uppercase tracking-wide mb-1">{p.rank}</p>
            <p className="text-sm text-[#475569] mb-4"><strong className="text-[#0A1628]">Best for:</strong> {p.bestFor}</p>
            <ul className="space-y-1 mb-4">
              {p.strengths.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-[#475569]">
                  <span className="text-[#10B981] mt-0.5">✓</span>{s}
                </li>
              ))}
            </ul>
            <div className="bg-[#185FA5]/5 rounded-lg p-3 text-xs text-[#475569]">
              <strong className="text-[#0A1628]">Ambeza recommends:</strong> {p.note}
            </div>
          </div>
        ))}
      </div>

      {/* Air cargo ports */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Air cargo airports in India</h2>
      <div className="grid grid-cols-1 gap-3 mb-12">
        {airportPorts.map((a) => (
          <div key={a.airport} className="bg-white border border-[#E2E8F0] rounded-xl p-4">
            <p className="font-bold text-[#185FA5] text-sm mb-1">{a.airport}</p>
            <p className="text-sm text-[#475569]">{a.strength}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: "Which is the best port for exporting to the USA from India?", a: "JNPT (Mumbai) is the default best choice — highest sailing frequency, most direct services, and strongest carrier competition on the India-USA lane. Mundra is a strong alternative with growing US West Coast services." },
          { q: "Which Indian port is best for exporting to the Middle East?", a: "Mundra and JNPT both have excellent services to UAE, Saudi Arabia, and Oman. Mundra has a slight edge in rate competitiveness for Gulf routes. Transit time is typically 5–10 days." },
          { q: "Can I change ports after booking the shipment?", a: "Changing ports after cargo is booked usually incurs cancellation charges from the carrier. Port selection should be made before requesting a quote. Ambeza advises on the optimal port at the quoting stage." },
          { q: "Does Ambeza operate from all major Indian ports?", a: "Yes. Ambeza has in-house CHA teams operating from JNPT, Mundra, Chennai, Kolkata, Vizag, and all major air cargo terminals including HYD, BOM, DEL, MAA, BLR, and CCU." },
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
