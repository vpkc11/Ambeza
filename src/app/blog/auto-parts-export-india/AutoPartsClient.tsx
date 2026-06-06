"use client";

import BlogLayout from "../BlogLayout";

export default function AutoPartsClient() {
  return (
    <BlogLayout
      title="How to Export Auto Parts from India — Compliance, Documents & Logistics"
      description="A complete guide to exporting automotive parts and components from India — key markets, quality certifications required, HSN codes, packaging standards, freight modes, and documentation checklist."
      publishDate="June 2025"
      readTime="10 min read"
      category="Industry Guides"
      relatedLinks={[
        { href: "/industries/auto-parts", label: "Auto Parts Freight Services" },
        { href: "/services/ocean-freight", label: "Ocean Freight from India" },
        { href: "/blog/port-selector-guide", label: "Port Selector Guide" },
        { href: "/documents-guide", label: "Export Documents Guide" },
      ]}
    >
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          India is the world&apos;s third-largest auto component manufacturer, exporting over $21 billion worth of parts annually.
          The USA, Europe, and the Middle East are the top markets. But auto parts export has specific compliance requirements —
          from IATF quality certifications demanded by OEM buyers to end-of-life vehicle regulations in Europe. This guide
          covers what you need to export auto parts from India correctly.
        </p>
      </div>

      {/* Key markets */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Top export markets for Indian auto parts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {[
          { market: "USA", share: "~27% of India auto exports", products: "Engine parts, transmission components, electrical parts, tyres", buyers: "Tier 1 OEM suppliers, aftermarket distributors" },
          { market: "Europe (Germany, UK, Italy)", share: "~25%", products: "Forgings, castings, precision machined parts, suspension components", buyers: "OEM supply chains (VW, BMW, Stellantis)" },
          { market: "UAE / Middle East", share: "~12%", products: "Aftermarket parts for Japanese and Korean vehicles, two-wheeler parts", buyers: "Automotive distributors, spare parts dealers" },
          { market: "Africa", share: "~8%", products: "Two-wheeler parts, commercial vehicle components, bus body parts", buyers: "Vehicle assemblers, spare parts distributors" },
          { market: "Australia / NZ", share: "~5%", products: "Aftermarket parts, commercial vehicle components", buyers: "Automotive retailers, fleet operators" },
          { market: "Japan / South Korea", share: "~5%", products: "Castings, forgings, machined components", buyers: "Japanese OEM reverse supply chains" },
        ].map((m) => (
          <div key={m.market} className="bg-white border border-[#E2E8F0] rounded-xl p-5">
            <div className="flex justify-between items-start mb-2">
              <p className="font-bold text-[#0A1628]">{m.market}</p>
              <span className="text-xs text-[#F59E0B] font-bold">{m.share}</span>
            </div>
            <p className="text-xs text-[#475569] mb-2"><strong>Products:</strong> {m.products}</p>
            <p className="text-xs text-[#475569]"><strong>Buyers:</strong> {m.buyers}</p>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Quality certifications required</h2>
      <div className="space-y-3 mb-12">
        {[
          { cert: "IATF 16949", required: "OEM supply chains globally", detail: "International automotive quality management standard. Mandatory for most Tier 1 and Tier 2 OEM supplier agreements. Without this, OEM buyers will not approve your facility." },
          { cert: "ISO 9001:2015", required: "Aftermarket and non-OEM buyers", detail: "Baseline quality management certification. Required by most buyers even if IATF is not mandatory." },
          { cert: "ECE / UNECE Type Approval", required: "Safety parts for EU market", detail: "For safety-critical parts (lights, mirrors, brakes, seat belts) exported to Europe, ECE type approval from a notified body is required." },
          { cert: "ACMA Membership", required: "Credibility signal", detail: "Membership in the Automotive Component Manufacturers Association of India adds buyer credibility, particularly for first-time export relationships." },
          { cert: "BIS Certification", required: "Certain product categories", detail: "Bureau of Indian Standards certification required for tyres, some electrical components. Check the BIS website for your specific product." },
        ].map((c) => (
          <div key={c.cert} className="bg-white border border-[#E2E8F0] rounded-xl p-4">
            <div className="flex items-start justify-between gap-3 mb-1">
              <p className="font-bold text-[#0A1628] text-sm">{c.cert}</p>
              <span className="text-xs bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded flex-shrink-0">{c.required}</span>
            </div>
            <p className="text-sm text-[#475569]">{c.detail}</p>
          </div>
        ))}
      </div>

      {/* HSN codes */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">Common HSN codes for auto parts export</h2>
      <p className="text-[#475569] mb-6">The correct HSN code determines your Duty Drawback rate, RoDTEP rate, and IGST treatment. Always verify the 8-digit code with your CHA.</p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0A1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Product Category</th>
              <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">HSN Chapter</th>
            </tr>
          </thead>
          <tbody>
            {[
              { cat: "Engine parts, pistons, valves", hsn: "Chapter 84" },
              { cat: "Transmission, gearboxes, drive shafts", hsn: "Chapter 87.08" },
              { cat: "Brake systems, parts", hsn: "87.08 / 84.83" },
              { cat: "Electrical components, wiring harnesses", hsn: "Chapter 85" },
              { cat: "Rubber seals, gaskets, hoses", hsn: "Chapter 40" },
              { cat: "Castings and forgings (steel/iron)", hsn: "Chapter 72 / 73" },
              { cat: "Aluminium castings", hsn: "Chapter 76" },
              { cat: "Tyres and tubes", hsn: "Chapter 40.11 / 40.13" },
              { cat: "Mirrors, glass parts", hsn: "Chapter 70 / 87.08" },
              { cat: "Seats and seat belts", hsn: "87.14 / 87.08" },
            ].map((row, i) => (
              <tr key={row.cat} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                <td className="px-4 py-3 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{row.cat}</td>
                <td className="px-4 py-3 font-mono text-[#185FA5] font-semibold border-b border-[#E2E8F0]">{row.hsn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Packaging */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Packaging requirements for auto parts export</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {[
          { title: "Wooden packaging — ISPM 15 treatment", detail: "All wooden pallets, crates, and dunnage must be ISPM 15 treated (heat-treated or methyl bromide fumigated) and marked with the IPPC stamp. Required for all destination countries." },
          { title: "Corrosion protection", detail: "Metal parts must be packed with VCI (Volatile Corrosion Inhibitor) paper or bags for ocean shipments. Especially critical for cast iron and steel components." },
          { title: "Shock and vibration protection", detail: "Precision machined parts require foam or bubble wrap padding. Critical mating surfaces must be protected with plastic end-caps or covers." },
          { title: "Labelling requirements", detail: "Each package must show: part number, description, country of origin (Made in India), net/gross weight, and packing list reference. Some OEM buyers have specific label formats." },
        ].map((item) => (
          <div key={item.title} className="bg-white border border-[#E2E8F0] rounded-xl p-5">
            <p className="font-bold text-[#0A1628] text-sm mb-2">{item.title}</p>
            <p className="text-sm text-[#475569]">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Freight modes */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Choosing the right freight mode for auto parts</h2>
      <div className="grid grid-cols-1 gap-4 mb-12">
        {[
          { mode: "Ocean FCL", best: "Large OEM orders, regular supply schedules, bulk components", note: "20ft or 40ft containers. Cost-effective for regular shipments. JNPT and Chennai are best ports for auto parts." },
          { mode: "Ocean LCL", best: "Small orders, new customer trials, spare parts", note: "Shared container. Add 3–5 days transit for CFS consolidation. Good for first orders while volume is building." },
          { mode: "Air Freight", best: "Urgent OEM line-stop situations, high-value precision parts, samples", note: "4–6× more expensive but saves production line downtime costs. Justified for critical supply emergencies." },
          { mode: "Break Bulk / Flat Rack", best: "Oversized parts — axle assemblies, engine blocks, press tools", note: "For cargo that doesn't fit in a standard container. Ambeza arranges project cargo handling for oversize auto components." },
        ].map((m) => (
          <div key={m.mode} className="bg-white border border-[#E2E8F0] rounded-xl p-4">
            <p className="font-bold text-[#185FA5] text-sm mb-1">{m.mode}</p>
            <p className="text-xs text-[#F59E0B] font-semibold mb-2">Best for: {m.best}</p>
            <p className="text-sm text-[#475569]">{m.note}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: "What certifications are needed to export auto parts from India?", a: "IATF 16949 for OEM supply chains. ISO 9001 for aftermarket. ECE type approval for safety-critical parts going to Europe. ACMA membership adds credibility. BIS for certain regulated categories." },
          { q: "What is the best port for exporting auto parts from India?", a: "For the USA and Europe: JNPT (Mumbai) for west India manufacturers, Chennai for south India. For the Middle East: Mundra or JNPT. For the USA specifically, JNPT has the most direct services." },
          { q: "Do auto parts require any special packaging for export?", a: "Yes. Wooden packaging must be ISPM 15 treated. Metal parts need VCI (Volatile Corrosion Inhibitor) protection for ocean freight. Precision parts need adequate cushioning and surface protection." },
          { q: "How do I find buyers for Indian auto parts exports?", a: "ACMA maintains an Export Facilitation Directory. Trade shows like Automechanika (Germany) and AAPEX (USA) are important for OEM and aftermarket buyers. Global platforms like IndiaMART and Alibaba are also used for initial reach." },
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
