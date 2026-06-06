import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Dangerous Goods (DG) Export Guide from India",
  description:
    "Is your product a Dangerous Good? Lithium batteries, perfumes, chemicals, aerosols — many common Indian exports are DG. Learn packaging, labelling, and documentation requirements.",
};

const dgProducts = [
  { emoji: "🔋", label: "Lithium batteries", note: "Phones, laptops, EVs, power banks — Class 9" },
  { emoji: "🧴", label: "Perfumes & cosmetics", note: "Contain alcohol — flammable — Class 3" },
  { emoji: "🧪", label: "Pesticides & agrochemicals", note: "Toxic substances — Class 6" },
  { emoji: "💊", label: "Some pharma APIs", note: "Toxic or flammable — Class 3 or 6" },
  { emoji: "🎨", label: "Paints, varnishes, resins", note: "Flammable liquids — Class 3" },
  { emoji: "🧯", label: "Compressed gases & aerosols", note: "Class 2 — pressurised containers" },
  { emoji: "🛢️", label: "Petroleum products, solvents", note: "Flammable liquids — Class 3" },
  { emoji: "🔩", label: "Magnetised materials", note: "Some motors, speakers — Class 9" },
  { emoji: "🪫", label: "Lead-acid batteries", note: "Corrosive acid — Class 8" },
  { emoji: "🌡️", label: "Mercury-containing equipment", note: "Toxic — Class 6" },
  { emoji: "🧲", label: "Dry ice (CO₂)", note: "Used for food/pharma — Class 9" },
  { emoji: "💧", label: "Corrosive cleaners & acids", note: "Industrial cleaners — Class 8" },
];

const dgClasses = [
  { num: "1", name: "Explosives", color: "bg-orange-100 border-orange-300", examples: "Fireworks, flares" },
  { num: "2", name: "Gases", color: "bg-red-100 border-red-300", examples: "Aerosols, fire extinguishers, LPG" },
  { num: "3", name: "Flammable Liquids", color: "bg-red-100 border-red-300", examples: "Perfumes, paints, adhesives, solvents" },
  { num: "4", name: "Flammable Solids", color: "bg-yellow-100 border-yellow-300", examples: "Matches, sulphur, metal powders" },
  { num: "5", name: "Oxidisers / Peroxides", color: "bg-yellow-100 border-yellow-300", examples: "Hydrogen peroxide, fertilisers" },
  { num: "6", name: "Toxic & Infectious", color: "bg-purple-100 border-purple-300", examples: "Pesticides, biological samples, APIs" },
  { num: "7", name: "Radioactive", color: "bg-yellow-100 border-yellow-300", examples: "Medical isotopes, industrial gauges" },
  { num: "8", name: "Corrosives", color: "bg-blue-100 border-blue-300", examples: "Battery acid, cleaning agents, plating chemicals" },
  { num: "9", name: "Miscellaneous DG", color: "bg-gray-100 border-gray-300", examples: "Lithium batteries, dry ice, magnetised material" },
];

const comparison = [
  { factor: "Packaging", nonDg: "Standard export carton or wooden crate", dg: "UN-certified packaging (UN number + packing group marked on box)" },
  { factor: "Labelling", nonDg: "Standard shipping marks + address", dg: "Mandatory DG labels, hazard diamond, UN number, quantity, name" },
  { factor: "Documents", nonDg: "Standard shipping documents", dg: "Shipper's Declaration for Dangerous Goods (SDDG) — signed by authorised person" },
  { factor: "Handler", nonDg: "Any freight handler", dg: "IATA/IMDG certified DG handler only" },
  { factor: "Airline acceptance", nonDg: "All airlines accept standard cargo", dg: "Must check airline DG acceptance; some airlines refuse certain DG classes" },
  { factor: "Cost", nonDg: "Standard rate", dg: "15–30% surcharge on freight rate" },
  { factor: "Customs inspection", nonDg: "Standard channel (Green/Yellow/Red)", dg: "Often Red channel — physical examination" },
  { factor: "Insurance", nonDg: "Standard cargo insurance", dg: "Specialist DG cargo insurance — higher premium" },
];

export default function DGGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Safety &amp; Compliance</p>
            <h1 className="text-4xl font-bold mb-4">Dangerous Goods (DG) Export Guide</h1>
            <p className="text-slate-300 text-lg">You might be shipping a Dangerous Good without knowing it. Perfumes, batteries, paints — many common Indian exports are classified as DG.</p>
          </div>
        </div>
      </section>

      {/* Warning */}
      <div className="bg-red-50 border-b border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-900">
              <strong>Important:</strong> Shipping a DG product declared as non-DG is a serious offence. It results in cargo rejection at the port or airport, heavy fines from DGCA and Customs, and potential blacklisting with airlines and shipping lines. If in doubt, ask us.
            </p>
          </div>
        </div>
      </div>

      {/* Common DG products */}
      <SectionWrapper>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Common Indian exports that are DG</h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            These products are regularly exported from India and are all classified as Dangerous Goods. Each requires specific packaging, labelling, and documentation.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {dgProducts.map(({ emoji, label, note }) => (
            <div
              key={label}
              className="bg-white border border-[#E2E8F0] rounded-xl p-5 hover:border-red-200 hover:shadow-sm transition-all"
            >
              <div className="text-3xl mb-3">{emoji}</div>
              <p className="font-semibold text-[#0A1628] text-sm mb-1">{label}</p>
              <p className="text-xs text-[#475569]">{note}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* DG vs Non-DG comparison */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">DG vs Non-DG — what changes?</h2>
          <p className="text-[#475569]">Every aspect of the shipment is different when it is a Dangerous Good.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-2xl shadow-sm border border-[#E2E8F0]">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="text-left px-6 py-4 font-semibold text-[#475569]">Factor</th>
                <th className="px-6 py-4 font-semibold text-[#10B981] text-left">Non-DG Shipment</th>
                <th className="px-6 py-4 font-semibold text-red-600 text-left">DG Shipment</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(({ factor, nonDg, dg }) => (
                <tr key={factor} className="border-t border-[#E2E8F0]">
                  <td className="px-6 py-4 font-semibold text-[#0A1628]">{factor}</td>
                  <td className="px-6 py-4 text-[#475569]">{nonDg}</td>
                  <td className="px-6 py-4 text-[#0A1628]">{dg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* 9 DG Classes */}
      <SectionWrapper>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">The 9 classes of Dangerous Goods</h2>
          <p className="text-[#475569]">
            Every DG product belongs to one of these 9 classes. The class determines packaging, labels, and which airlines/ships can carry it.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dgClasses.map(({ num, name, color, examples }) => (
            <div
              key={num}
              className={`rounded-xl p-5 border-2 ${color}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl font-black text-[#0A1628] shadow-sm">
                  {num}
                </div>
                <h3 className="font-bold text-[#0A1628]">{name}</h3>
              </div>
              <p className="text-sm text-[#475569]">
                <strong>Common Indian exports:</strong> {examples}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* UN Number explainer */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-5">The UN Number — what is it?</h2>
          <p className="text-[#475569] mb-5 leading-relaxed">
            Every dangerous substance has a 4-digit UN number — a universal code that identifies exactly what the substance is, regardless of its trade name. This number appears on the packaging, documents, and labels.
          </p>
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 mb-6">
            <p className="text-sm font-semibold text-[#0A1628] mb-3">Common UN numbers for Indian exporters:</p>
            <div className="space-y-2">
              {[
                { un: "UN 1950", desc: "Aerosols (perfume sprays, insecticides, air fresheners)" },
                { un: "UN 1263", desc: "Paint, varnish, lacquer, adhesive" },
                { un: "UN 3480", desc: "Lithium ion batteries (standalone)" },
                { un: "UN 3481", desc: "Lithium ion batteries contained in equipment (phones, laptops)" },
                { un: "UN 3090", desc: "Lithium metal batteries (standalone)" },
                { un: "UN 2672", desc: "Ammonia solution (cleaning agents)" },
                { un: "UN 1999", desc: "Tars, liquid (bitumen, roofing material)" },
              ].map(({ un, desc }) => (
                <div key={un} className="flex items-start gap-3">
                  <span className="font-mono font-bold text-[#185FA5] text-sm whitespace-nowrap">{un}</span>
                  <span className="text-sm text-[#475569]">{desc}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-[#475569]">
            When you tell Ambeza what you are shipping, we identify the UN number, determine the packing group, and specify all packaging and documentation requirements. You don't need to know this — we do.
          </p>
        </div>
      </SectionWrapper>

      {/* What Ambeza does for DG */}
      <SectionWrapper>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">How Ambeza handles your DG shipment</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { num: "01", title: "Identify UN number & class", desc: "We tell you exactly what class your product falls under and what UN number applies." },
            { num: "02", title: "Determine packing group", desc: "Packing Group I, II, or III determines how strictly it must be packaged. We specify exactly what is needed." },
            { num: "03", title: "Specify compliant packaging", desc: "We tell you what UN-certified packaging is required and help you source it if needed." },
            { num: "04", title: "Prepare DG documentation", desc: "Our certified team prepares the Shipper's Declaration for Dangerous Goods (SDDG) — a legal declaration." },
            { num: "05", title: "Confirm airline / carrier acceptance", desc: "We check which airlines accept your specific DG class and quantity before booking." },
            { num: "06", title: "Supply all DG labels", desc: "Correct hazard diamond labels, UN number placards, handling marks — applied and verified." },
          ].map(({ num, title, desc }) => (
            <div key={num} className="bg-white border border-[#E2E8F0] rounded-xl p-6">
              <div className="w-10 h-10 bg-red-50 border border-red-100 rounded-full flex items-center justify-center text-sm font-bold text-red-600 mb-4">
                {num}
              </div>
              <h3 className="font-bold text-[#0A1628] mb-2 text-sm">{title}</h3>
              <p className="text-xs text-[#475569]">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#475569] mb-5">
            Shipping a DG product? Talk to us before you do anything else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919999999999?text=Hi, I need to ship a Dangerous Good from India. Product:"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#128C7E] transition-colors inline-flex items-center gap-2"
            >
              📱 WhatsApp us about DG shipping
            </a>
            <Link
              href="/hsn-checker"
              className="border-2 border-[#185FA5] text-[#185FA5] font-semibold px-8 py-3.5 rounded-full hover:bg-[#185FA5] hover:text-white transition-colors"
            >
              Check your HSN code
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
