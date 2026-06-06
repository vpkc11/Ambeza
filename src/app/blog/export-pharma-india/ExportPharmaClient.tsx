"use client";

import BlogLayout from "../BlogLayout";

export default function ExportPharmaClient() {
  return (
    <BlogLayout
      title="How to Export Pharmaceuticals from India — Complete Compliance Guide"
      description="Everything you need to know about exporting pharmaceutical products from India — mandatory licences, WHO-GMP, CDSCO NOC, market-specific requirements, temperature-controlled logistics, and documentation."
      publishDate="June 2025"
      readTime="11 min read"
      category="Industry Guides"
      relatedLinks={[
        { href: "/industries/pharma", label: "Pharma Freight Services" },
        { href: "/services/air-freight", label: "Air Freight from India" },
        { href: "/blog/air-freight-cost-india", label: "Air Freight Cost Guide" },
        { href: "/documents-guide", label: "Export Documents Guide" },
      ]}
    >
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          India is the world&apos;s pharmacy — the largest supplier of generic medicines globally, exporting to over 200 countries.
          But pharmaceutical exports are among the most regulated export categories in India. The right licences, the correct
          documentation for each market, and a freight partner with temperature-control capability are all mandatory, not optional.
          This guide covers everything.
        </p>
      </div>

      {/* Licences */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Mandatory licences and certifications for pharma export</h2>
      <div className="space-y-3 mb-12">
        {[
          { cert: "Manufacturing Licence (Form 25 / 25A)", body: "State Drugs Controller", detail: "Required for any manufacturer of drugs or pharmaceutical formulations. Without this, no CDSCO NOC can be issued." },
          { cert: "CDSCO No Objection Certificate (NOC)", body: "Central Drugs Standard Control Organisation", detail: "Export NOC from CDSCO is required for exporting drugs. Apply at cdscoonline.gov.in. Required per product or product group for many markets." },
          { cert: "WHO-GMP Certificate", body: "State Drugs Licensing Authority", detail: "Mandatory for exporting to Africa, Middle East, Southeast Asia, and many regulated markets. Proves your facility meets WHO Good Manufacturing Practice standards." },
          { cert: "IEC Code", body: "DGFT", detail: "Mandatory for all commercial exports from India." },
          { cert: "GST Registration + LUT", body: "GST Network", detail: "For zero-rated export without IGST payment." },
          { cert: "Certificate of Pharmaceutical Product (CoPP)", body: "CDSCO", detail: "Required by many countries as proof that the product is licensed for sale in India. Some markets require this in addition to WHO-GMP." },
        ].map((item) => (
          <div key={item.cert} className="bg-white border border-[#E2E8F0] rounded-xl p-4">
            <div className="flex items-start justify-between gap-3 mb-1">
              <p className="font-bold text-[#0A1628] text-sm">{item.cert}</p>
              <span className="text-xs bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded flex-shrink-0">{item.body}</span>
            </div>
            <p className="text-sm text-[#475569]">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Market-specific requirements */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">Market-specific requirements</h2>
      <p className="text-[#475569] mb-6">Each destination market has its own import requirements. These are the most common markets for Indian pharma exports.</p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0A1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Market</th>
              <th className="text-left px-4 py-3 font-semibold">Key Requirements</th>
              <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              { market: "USA", reqs: "FDA facility registration, Prior Notice, DUNS number", notes: "Strictest regulated market. Full FDA inspection may be required." },
              { market: "EU / UK", reqs: "EU GMP certification, Marketing Authorisation in destination country", notes: "EMA standards. EU GMP is separate from WHO-GMP." },
              { market: "Africa (most countries)", reqs: "WHO-GMP certificate, CoPP, country-specific registration", notes: "NAFDAC (Nigeria), KEBS (Kenya), SAHPRA (South Africa) each have own requirements." },
              { market: "UAE / Gulf", reqs: "WHO-GMP, MOH product registration in destination country", notes: "Gulf markets have strong demand for Indian generics." },
              { market: "Southeast Asia", reqs: "WHO-GMP, ASEAN harmonised dossier in some markets", notes: "Philippines, Indonesia, Vietnam are major markets." },
              { market: "Russia / CIS", reqs: "GMP inspection by Russian authorities, product registration", notes: "Russian GMP is separate from WHO-GMP. Long registration timelines." },
            ].map((row, i) => (
              <tr key={row.market} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                <td className="px-4 py-3 font-bold text-[#0A1628] border-b border-[#E2E8F0]">{row.market}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.reqs}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0] text-xs">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Temperature control */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Temperature-controlled logistics for pharma</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { range: "2–8°C", label: "Cold Chain", products: "Vaccines, biologics, insulin, some APIs", handling: "Cool boxes with dry ice or gel packs. GDP-compliant air cargo terminals at BOM, DEL, HYD, BLR." },
          { range: "15–25°C", label: "Controlled Room Temperature", products: "Most tablets, capsules, oral liquids", handling: "Insulated packaging for air transit. Sea freight with reefer containers for long routes." },
          { range: "-20°C or below", label: "Frozen", products: "Some biologics, diagnostic reagents, plasma", handling: "Dry ice with defined CO2 replacement schedule. Charter or dedicated freighter for large volumes." },
        ].map((item) => (
          <div key={item.range} className="bg-white border border-[#E2E8F0] rounded-xl p-5">
            <div className="text-2xl font-extrabold text-[#185FA5] mb-1">{item.range}</div>
            <p className="font-bold text-[#0A1628] text-sm mb-2">{item.label}</p>
            <p className="text-xs text-[#475569] mb-3">{item.products}</p>
            <p className="text-xs text-[#475569] italic">{item.handling}</p>
          </div>
        ))}
      </div>

      {/* Documents */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Pharma export document checklist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
        {[
          "Commercial Invoice (product name, quantity, batch number, manufacturing date, expiry date)",
          "Packing List",
          "Airway Bill / Bill of Lading",
          "Certificate of Origin",
          "CDSCO Export NOC",
          "WHO-GMP Certificate (attested copy)",
          "Certificate of Pharmaceutical Product (CoPP) if required",
          "Certificate of Analysis (CoA) — batch-specific",
          "Manufacturing Licence (attested copy)",
          "Shipping Bill (filed by CHA on ICEGATE)",
          "Free Sale Certificate (some markets)",
          "Health Certificate (some markets)",
        ].map((doc) => (
          <div key={doc} className="flex items-start gap-2 bg-white border border-[#E2E8F0] rounded-xl p-3 text-sm text-[#475569]">
            <span className="text-[#10B981] mt-0.5 flex-shrink-0">✓</span>{doc}
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: "What licences are required to export pharmaceuticals from India?", a: "Minimum: Manufacturing Licence, CDSCO Export NOC, WHO-GMP Certificate (for most markets), and IEC code. For the USA, add FDA facility registration." },
          { q: "Can a pharma trading company (not manufacturer) export medicines from India?", a: "Yes. Traders can export pharma with a valid Drug Distribution Licence and by sourcing from WHO-GMP-certified manufacturers. The CoPP and WHO-GMP certificate would be from the manufacturer." },
          { q: "How long does CDSCO NOC take?", a: "Typically 2–4 weeks. Apply online at cdscoonline.gov.in. Ensure your manufacturing licence and GMP certifications are current before applying." },
          { q: "Is air freight always required for pharma exports from India?", a: "No — most solid dosage forms (tablets, capsules) travel safely by ocean freight in temperature-controlled (reefer) containers. Air freight is mandatory for cold chain (2–8°C) products and urgent shipments." },
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
