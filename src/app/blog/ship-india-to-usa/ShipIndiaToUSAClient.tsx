"use client";

import BlogLayout from "../BlogLayout";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Get your IEC code",
    detail: "Importer Exporter Code is mandatory for all commercial exports. Apply at dgft.gov.in — ₹500 fee, issued in 1–2 days.",
  },
  {
    num: "02",
    title: "Choose your shipping mode",
    detail: "Air freight for urgent or high-value cargo under 500 kg. Ocean freight (FCL or LCL) for heavier or bulkier shipments where cost matters more than speed.",
  },
  {
    num: "03",
    title: "Prepare your documents",
    detail: "Commercial Invoice, Packing List, Certificate of Origin, and any product-specific certificates for US customs (FDA, phytosanitary, etc.).",
  },
  {
    num: "04",
    title: "Book freight with Ambeza",
    detail: "We compare routes, carrier rates, and transit times and give you a fixed quote. No hidden charges at destination.",
  },
  {
    num: "05",
    title: "Clear Indian customs",
    detail: "Our in-house CHA files your Shipping Bill on ICEGATE and obtains the Let Export Order (LEO) before cargo is loaded.",
  },
  {
    num: "06",
    title: "Track shipment to the USA",
    detail: "You receive tracking updates. On arrival, your US-based importer or their customs broker clears the shipment through US CBP.",
  },
  {
    num: "07",
    title: "Collect payment and FIRC",
    detail: "Once your buyer receives the goods, collect your FIRC (Foreign Inward Remittance Certificate) from your bank. This is required for RoDTEP and Duty Drawback claims.",
  },
];

const comparison = [
  { feature: "Transit time", air: "3–7 days", ocean: "18–28 days" },
  { feature: "Cost (general cargo)", air: "₹350–₹600/kg", ocean: "₹5,000–₹9,000/CBM (LCL)" },
  { feature: "Best for weight", air: "Under 500 kg", ocean: "Above 500 kg" },
  { feature: "Best cargo type", air: "Pharma, gems, electronics, perishables", ocean: "Textiles, machinery, chemicals, bulk goods" },
  { feature: "Risk of damage", air: "Low (fewer handlings)", ocean: "Medium (longer transit)" },
  { feature: "Documents", air: "Airway Bill (AWB)", ocean: "Bill of Lading (BL)" },
  { feature: "Carbon footprint", air: "Higher", ocean: "Lower" },
];

const usDocs = [
  { doc: "Commercial Invoice", purpose: "Declares value, quantity, and description of goods. Used by US CBP to assess duties." },
  { doc: "Packing List", purpose: "Lists carton-by-carton contents, weight, and dimensions. Must match the invoice exactly." },
  { doc: "Bill of Lading / AWB", purpose: "Contract with the carrier. Proof that goods have been shipped. Required for US customs clearance." },
  { doc: "Certificate of Origin (CoO)", purpose: "Proves goods were made in India. Required for preferential duty treatment under applicable trade agreements." },
  { doc: "Shipping Bill", purpose: "Indian customs export declaration filed on ICEGATE. Your CHA files this before cargo is loaded." },
  { doc: "FDA Registration", purpose: "Required for food, pharma, cosmetics, and medical devices. Facility must be registered with US FDA." },
  { doc: "Phytosanitary Certificate", purpose: "Required for all agricultural products, plant-based goods, and wooden packaging." },
  { doc: "ISF (Importer Security Filing)", purpose: "Filed by the US importer at least 24 hours before cargo is loaded at the Indian port. Required for all ocean shipments to the USA." },
];

export default function ShipIndiaToUSAClient() {
  return (
    <BlogLayout
      title="How to Ship Cargo from India to the USA — Complete Guide"
      description="Everything you need to know about exporting from India to the United States — air vs ocean freight, all required documents, US customs process, transit times, costs, and the mistakes that get shipments held."
      publishDate="June 2025"
      readTime="12 min read"
      category="Shipping Guides"
      relatedLinks={[
        { href: "/services/air-freight", label: "Air Freight from India" },
        { href: "/services/ocean-freight", label: "Ocean Freight from India" },
        { href: "/new-exporter", label: "First Time Exporter Guide" },
        { href: "/services/customs-clearance", label: "Customs Clearance" },
        { href: "/blog/air-freight-cost-india", label: "Air Freight Cost Guide" },
      ]}
    >
      {/* Intro */}
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          The USA is India&apos;s largest export market — over $78 billion in goods shipped every year. Whether you are a first-time exporter
          or looking to streamline an existing trade lane, this guide covers the full process: choosing between air and ocean freight,
          every document US customs requires, realistic costs and transit times, and the mistakes that cause shipments to be held or rejected.
        </p>
      </div>

      {/* Step by step */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">The end-to-end process — 7 steps</h2>
      <p className="text-[#475569] mb-6">From your warehouse in India to your buyer&apos;s door in the USA.</p>
      <div className="space-y-4 mb-12">
        {steps.map((s) => (
          <div key={s.num} className="flex gap-4 bg-white border border-[#E2E8F0] rounded-xl p-5">
            <span className="text-3xl font-extrabold text-[#185FA5]/20 flex-shrink-0 leading-none">{s.num}</span>
            <div>
              <p className="font-bold text-[#0A1628] mb-1">{s.title}</p>
              <p className="text-sm text-[#475569] leading-relaxed">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Air vs Ocean */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">Air freight vs ocean freight to the USA</h2>
      <p className="text-[#475569] mb-6">The right choice depends on your cargo weight, urgency, and budget. Here is a direct comparison.</p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0A1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Factor</th>
              <th className="text-left px-4 py-3 font-semibold">✈ Air Freight</th>
              <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">🚢 Ocean Freight</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                <td className="px-4 py-3 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{row.feature}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.air}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.ocean}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* US Ports */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">Which Indian port to use for the USA?</h2>
      <p className="text-[#475569] mb-6">Port selection affects transit time and cost significantly.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {[
          { port: "JNPT Mumbai", code: "INNSA", best: "USA East & West Coast", note: "Highest frequency of direct services to US ports. Best overall option for most exporters." },
          { port: "Mundra Gujarat", code: "INMUN", best: "USA West Coast", note: "Fast-growing port with competitive rates. Good for Gujarat and Rajasthan manufacturers." },
          { port: "Chennai Sea Port", code: "INMAA", best: "USA East Coast", note: "Strong for South India. Good direct services to Savannah, New York, and Baltimore." },
          { port: "Delhi ICD Tughlakabad", code: "INDLH", best: "Air freight only", note: "Best for North India air freight. Inland clearance with direct transfer to IGI airport." },
        ].map((p) => (
          <div key={p.port} className="bg-white border border-[#E2E8F0] rounded-xl p-5">
            <div className="flex items-start justify-between mb-2">
              <p className="font-bold text-[#0A1628]">{p.port}</p>
              <span className="text-xs font-mono bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">{p.code}</span>
            </div>
            <p className="text-xs text-[#F59E0B] font-semibold mb-2">Best for: {p.best}</p>
            <p className="text-sm text-[#475569]">{p.note}</p>
          </div>
        ))}
      </div>

      {/* Documents */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">Documents required to export from India to the USA</h2>
      <p className="text-[#475569] mb-6">
        US Customs and Border Protection (CBP) is strict. Missing or incorrect documents result in holds, examinations, and fines.
        Here is every document your shipment needs.
      </p>
      <div className="space-y-3 mb-12">
        {usDocs.map((d) => (
          <div key={d.doc} className="flex gap-4 bg-white border border-[#E2E8F0] rounded-xl p-4">
            <div className="w-2 h-2 rounded-full bg-[#185FA5] flex-shrink-0 mt-1.5" />
            <div>
              <p className="font-bold text-[#0A1628] text-sm">{d.doc}</p>
              <p className="text-sm text-[#475569]">{d.purpose}</p>
            </div>
          </div>
        ))}
      </div>

      {/* US Customs Process */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">How US customs clearance works</h2>
      <p className="text-[#475569] mb-6">
        Once your cargo arrives in the USA, your buyer&apos;s customs broker files an Entry with US CBP. Here is what happens:
      </p>
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-12 space-y-4">
        {[
          { step: "ISF Filing", detail: "For ocean freight: the US importer must file an Importer Security Filing (ISF-10+2) at least 24 hours before cargo is loaded at the Indian port. Missing this attracts a $5,000 fine." },
          { step: "Arrival and manifest", detail: "The carrier files an Arrival Notice with CBP. The shipment appears in the US customs system." },
          { step: "Entry filing", detail: "The US importer or their licensed customs broker files the formal entry with CBP — typically within 15 days of arrival." },
          { step: "CBP examination channels", detail: "Most shipments are cleared automatically (Green). Some are selected for document review or physical examination. Having all documents correct eliminates delays." },
          { step: "Duty assessment", detail: "CBP assesses import duties based on the HS code and declared value. India has most-favoured-nation (MFN) duty rates with the USA. Some product categories attract additional Section 301 tariffs." },
          { step: "Release and delivery", detail: "Once duties are paid and CBP releases the shipment, your buyer arranges inland delivery to their warehouse." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#185FA5] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
            <div>
              <p className="font-bold text-[#0A1628] text-sm mb-1">{item.step}</p>
              <p className="text-sm text-[#475569]">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Common mistakes */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">5 mistakes that get India-to-USA shipments held</h2>
      <div className="grid grid-cols-1 gap-4 mb-12">
        {[
          { title: "Missing FDA registration", detail: "If you export food, supplements, pharma, cosmetics, or medical devices without FDA facility registration, US CBP will refuse entry. Register at fda.gov before your first shipment." },
          { title: "ISF not filed on time", detail: "For ocean freight, the ISF (Importer Security Filing) must be filed 24 hours before cargo is loaded at the Indian port. Late or missing ISF means a $5,000 penalty per shipment." },
          { title: "Incorrect HS code on the invoice", detail: "The HS code on your invoice determines the US duty rate. An incorrect code can mean underpayment of duties — leading to fines and future shipment scrutiny." },
          { title: "Invoice value doesn't match the BL", detail: "US CBP cross-checks the declared value on the invoice against the Bill of Lading. Discrepancies trigger examination and potential fraud review." },
          { title: "No phytosanitary certificate for agricultural goods", detail: "All plant-based products, agricultural goods, and shipments with wooden packaging require a Phytosanitary Certificate from the Plant Quarantine authority in India. Without it, USDA APHIS will hold the shipment." },
        ].map((m, i) => (
          <div key={i} className="bg-white border-l-4 border-l-red-500 border border-red-100 rounded-xl p-5">
            <p className="font-bold text-[#0A1628] mb-2">{m.title}</p>
            <p className="text-sm text-[#475569] leading-relaxed">{m.detail}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: "How long does shipping from India to the USA take?", a: "Air freight takes 3–7 days. Ocean freight takes 18–28 days depending on origin port and US destination port. Express courier (DHL/FedEx) takes 2–4 days for small parcels." },
          { q: "How much does it cost to ship from India to the USA?", a: "Air freight: ₹350–₹600 per kg for general cargo. Ocean LCL: ₹5,000–₹9,000 per CBM. FCL 20ft to US West Coast: approximately $1,500–$2,500 depending on season and carrier. Use our free Shipping Cost Estimator for a ballpark." },
          { q: "Do I need FDA registration to export food or pharma to the USA?", a: "Yes. Food, dietary supplements, cosmetics, and pharmaceutical products all require FDA facility registration. The US importer must also file Prior Notice with FDA before the shipment arrives." },
          { q: "Which Indian port is best for shipping to the USA?", a: "JNPT (Mumbai) has the most direct sailings to US East and West Coast ports. Mundra is growing fast with competitive rates for US West Coast. For air freight, Mumbai, Delhi, and Hyderabad all have regular direct or one-stop services to major US airports." },
          { q: "What is Section 301 tariff and does it affect India?", a: "Section 301 tariffs were imposed by the US on Chinese imports and do not directly apply to India. Indian exporters actually benefit from this — many US buyers have shifted sourcing from China to India for categories like textiles, auto parts, and electronics components." },
        ].map((item, i) => (
          <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5">
            <p className="font-bold text-[#0A1628] mb-2 text-sm">Q: {item.q}</p>
            <p className="text-sm text-[#475569] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-xl p-5 text-center">
        <p className="font-bold text-[#0A1628] mb-1">Ambeza handles India-to-USA shipments end to end</p>
        <p className="text-sm text-[#475569] mb-4">Air and ocean freight, in-house CHA, all US-bound documentation, ISF coordination with your US broker.</p>
        <Link href="/contact" className="inline-block bg-[#185FA5] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#0f4a85] transition-colors text-sm">
          Get a Free Quote
        </Link>
      </div>
    </BlogLayout>
  );
}
