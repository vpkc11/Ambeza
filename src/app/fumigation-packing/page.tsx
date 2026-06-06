import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import QuoteForm from "@/components/QuoteForm";
import { AlertTriangle, CheckCircle, XCircle, ArrowRight, Package, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Fumigation & Packing Standards for Export | ISPM-15 Guide | Ambeza",
  description:
    "Complete guide to ISPM-15 wood packaging standard, fumigation certificate, export packing rules, crate standards, and special cargo markings for Indian exporters.",
};

const treatmentMethods = [
  {
    code: "HT",
    name: "Heat Treatment",
    desc: "Wood heated to 56°C core temperature for 30 minutes. No chemicals — most widely accepted globally.",
    accepted: ["USA", "EU", "Australia", "Canada", "Japan", "China", "Most countries"],
    notes: "Wood must be treated in a facility approved by NPPO (National Plant Protection Organisation). In India: NPPO-India under APEDA.",
  },
  {
    code: "MB",
    name: "Methyl Bromide Fumigation",
    desc: "Chemical fumigation with methyl bromide at prescribed concentration and exposure time.",
    accepted: ["Most countries (limited)"],
    notes: "Being phased out globally due to ozone depletion. EU banned for most uses. Australia, USA, China still accept. Check destination country rules.",
  },
  {
    code: "DH",
    name: "Dielectric Heating",
    desc: "Uses radio frequency electromagnetic fields to heat wood. Less common but ISPM-15 compliant.",
    accepted: ["Select countries"],
    notes: "Used for specialty wood items. Rapid but requires specific equipment.",
  },
  {
    code: "SF",
    name: "Sulfuryl Fluoride",
    desc: "Chemical fumigation alternative to MB. Accepted in USA and some other countries.",
    accepted: ["USA", "Canada", "Some others"],
    notes: "Check specific country acceptability. Not universally adopted as an ISPM-15 treatment.",
  },
];

const ispm15Items = [
  { item: "Wooden pallets (solid wood)", required: true, note: "Most common item — almost always used for sea/air shipments" },
  { item: "Wooden crates and boxes", required: true, note: "Any solid wood structure used to protect/contain cargo" },
  { item: "Dunnage (wood packing/bracing)", required: true, note: "Scrap wood used to fill gaps and prevent cargo shift" },
  { item: "Wooden cable reels / spools", required: true, note: "Used for cables, wires, textile rolls" },
  { item: "Plywood (manufactured boards)", required: false, note: "Plywood, OSB, chipboard — manufactured panels are generally EXEMPT" },
  { item: "Cardboard/paper packaging", required: false, note: "No ISPM-15 requirement" },
  { item: "Plastic pallets / crates", required: false, note: "No ISPM-15 requirement — increasingly used for this reason" },
  { item: "Metal frames / containers", required: false, note: "No ISPM-15 requirement" },
  { item: "Bamboo packaging", required: false, note: "Bamboo is technically grass — exempt in most countries (verify per destination)" },
];

const cargoMarkings = [
  {
    cargoType: "Hazardous / DG",
    markings: ["IMO Class diamond label", "UN number label", "Proper shipping name", "Marine Pollutant mark (if applicable)"],
    rule: "IMDG Code (sea) / IATA DGR (air) — labels placed on all four sides visible faces",
    warning: "Wrong or missing DG labels = cargo rejection at port, heavy fines",
  },
  {
    cargoType: "Fragile goods",
    markings: ["'FRAGILE — Handle With Care' label", "'This Side Up' arrows", "Stacking limit marks if weight-restricted"],
    rule: "No formal regulation — shipper's responsibility but insurers may reject damage claims without markings",
    warning: null,
  },
  {
    cargoType: "Perishables / Food",
    markings: ["'Perishable — Keep Refrigerated' / 'Keep Frozen'", "Temperature range sticker", "Production date and expiry date", "FSSAI licence number (for food exports from India)"],
    rule: "FSSAI regulations + destination country food authority requirements",
    warning: "Australia, USA, EU — strict phytosanitary inspection for food items",
  },
  {
    cargoType: "Electronics / Static-sensitive",
    markings: ["ESD (Electrostatic Discharge) warning symbol", "Handling instructions", "'Do Not Stack' if heavy items on top will damage"],
    rule: "IEC 61340 standard for ESD packaging",
    warning: null,
  },
  {
    cargoType: "Heavy machinery / ODC",
    markings: ["Gross weight marking", "Centre of gravity mark (cross-hairs)", "Slinging/lifting points marked with arrows", "Tare weight if shipped in a case"],
    rule: "Port health and safety regulations — mandatory for lifts over 1,000 kg",
    warning: "Missing COG marks can lead to crane accidents — customs may refuse to handle",
  },
  {
    cargoType: "ISPM-15 wood packaging",
    markings: ["ISPM-15 stamp: IPPC logo, Country code (IN), Producer/treatment facility ID, Treatment method code (HT or MB), YY (year)"],
    rule: "ISPM-15 — International Standards for Phytosanitary Measures No. 15",
    warning: "Without valid ISPM-15 mark, wooden packaging can be seized and destroyed by destination country",
  },
];

const packagingRules = [
  { rule: "Gross weight on outer carton", detail: "Every outer carton must have net and gross weight marked. Common mistakes: writing kg instead of kgs, or omitting." },
  { rule: "Number of units", detail: "e.g. 'Box 1 of 24' — helps customs count packages and matches Packing List." },
  { rule: "Country of origin", detail: "'Made in India' — mandatory on all export goods. Placement: visible face of each carton." },
  { rule: "HSN/HS code on commercial invoice", detail: "Not on outer carton, but invoice and Packing List must match. Mismatch = customs query." },
  { rule: "Consignee details on label", detail: "Full consignee name, address, destination country. Required for customs to match with Shipping Bill." },
  { rule: "Batch number / lot number", detail: "Required for pharma, food, chemicals. Must match Certificate of Analysis and invoice." },
  { rule: "Packing List accuracy", detail: "If the packing list says 24 cartons of 20 pieces each = 480 pieces total, but actual count differs, customs will hold the shipment." },
];

export default function FumigationPackingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#F59E0B] text-sm font-medium mb-3">
            <Package className="h-4 w-4" />
            <span>Packing & Fumigation Guide</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Fumigation & export packing standards
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            ISPM-15 wood packaging requirements, when fumigation certificates are needed, packing list accuracy rules, and special cargo markings — everything an Indian exporter needs to know.
          </p>
        </div>
      </section>

      <SectionWrapper>
        {/* ISPM-15 explainer */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-4">What is ISPM-15?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div>
              <p className="text-[#475569] mb-4">
                <strong>ISPM-15</strong> (International Standards for Phytosanitary Measures No. 15) is a global standard set by the International Plant Protection Convention (IPPC). It requires that <em>wooden packaging material</em> used in international trade is treated to kill plant pests, insects, and fungi that could hitch a ride in raw wood.
              </p>
              <p className="text-[#475569] mb-4">
                Think of it this way: a wooden pallet carries not just your goods, but potentially the insects and diseases living in the wood. ISPM-15 ensures that wood is treated before it crosses a border, preventing agricultural disasters in the importing country.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-red-900 text-sm mb-1">If you skip ISPM-15:</p>
                  <ul className="text-xs text-red-800 space-y-1">
                    <li>• Destination customs can seize and destroy your wooden packaging</li>
                    <li>• Your goods may be re-exported at your cost</li>
                    <li>• In Australia and USA, fines can exceed $10,000 USD</li>
                    <li>• Your buyer loses confidence and may cancel future orders</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              {/* ISPM-15 mark visual */}
              <div className="bg-[#F8FAFC] border-2 border-dashed border-[#CBD5E1] rounded-xl p-6 text-center">
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">The ISPM-15 Mark (what it looks like)</p>
                <div className="inline-block border-2 border-[#0A1628] rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    {/* IPPC wheat symbol approximation */}
                    <div className="text-2xl">🌾</div>
                    <div className="text-left">
                      <p className="font-mono font-bold text-[#0A1628] text-sm">IN - 123 - MF456</p>
                      <p className="font-mono text-[#475569] text-xs">HT · 24</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#94A3B8] leading-relaxed">
                    IPPC logo · Country code (IN = India) · Producer ID · Treatment facility ID · Treatment code (HT/MB) · Year
                  </p>
                </div>
                <p className="text-xs text-[#94A3B8] mt-4">
                  This mark must be burned or stamped (not painted) on all treated wood. It is non-transferable.
                </p>
              </div>
            </div>
          </div>

          {/* What needs ISPM-15 */}
          <h3 className="text-xl font-bold text-[#0A1628] mb-3">What requires ISPM-15 treatment?</h3>
          <div className="overflow-x-auto rounded-xl border border-[#E2E8F0]">
            <table className="w-full text-sm">
              <thead className="bg-[#0A1628] text-white">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Item</th>
                  <th className="text-left px-5 py-3 font-semibold">Treatment required?</th>
                  <th className="text-left px-5 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {ispm15Items.map((item, i) => (
                  <tr key={item.item} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3 font-medium text-[#0A1628]">{item.item}</td>
                    <td className="px-5 py-3">
                      {item.required ? (
                        <span className="flex items-center gap-1 text-red-700 font-semibold text-xs">
                          <AlertTriangle className="h-3.5 w-3.5" /> Required
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-green-700 font-semibold text-xs">
                          <CheckCircle className="h-3.5 w-3.5" /> Exempt
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-[#475569] text-xs">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Treatment methods */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">ISPM-15 treatment methods</h2>
          <p className="text-[#475569] mb-6">There are several approved treatment methods. The method used is stamped on the mark (HT, MB, DH, SF). Most Indian exporters use HT (heat treatment).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {treatmentMethods.map((t) => (
              <div key={t.code} className="border border-[#E2E8F0] rounded-xl p-5 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-[#0A1628]">{t.name}</h3>
                  <span className="font-mono text-sm font-bold text-[#185FA5] bg-blue-50 px-3 py-1 rounded-full">{t.code}</span>
                </div>
                <p className="text-sm text-[#475569] mb-3">{t.desc}</p>
                <p className="text-xs text-[#475569] mb-2">
                  <strong>Accepted in:</strong> {t.accepted.join(", ")}
                </p>
                <div className="bg-[#F8FAFC] rounded-lg p-3">
                  <p className="text-xs text-[#475569]"><Info className="h-3.5 w-3.5 inline mr-1 text-[#185FA5]" />{t.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fumigation certificate */}
        <div className="mb-14 bg-amber-50 border border-amber-200 rounded-2xl p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">When is a separate Fumigation Certificate needed?</h2>
          <p className="text-amber-800 mb-4">
            ISPM-15 treatment of wooden packaging is NOT the same as a fumigation certificate for the cargo itself. A fumigation certificate is a separate document issued after the goods (not the wood) are fumigated.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-5 border border-amber-200">
              <p className="font-bold text-[#0A1628] mb-3 text-sm">When fumigation of CARGO is required:</p>
              <ul className="space-y-2 text-sm text-[#475569]">
                {[
                  "Cereals, grains, rice (wheat, maize, etc.) — Australia, USA, EU require fumigation",
                  "Tobacco and tobacco products — many countries require",
                  "Raw cotton, hessian bags — some Middle East countries",
                  "Spices (whole) — some countries require phytosanitary certificate + fumigation",
                  "Any organic/agricultural product going to Australia — strict biosecurity laws",
                  "Container fumigation — some buyers / destination ports require the container itself to be fumigated",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 border border-amber-200">
              <p className="font-bold text-[#0A1628] mb-3 text-sm">What the fumigation certificate contains:</p>
              <ul className="space-y-2 text-sm text-[#475569]">
                {[
                  "Name of fumigant used (Methyl Bromide, Aluminium Phosphide, etc.)",
                  "Concentration (g/m³) and exposure time",
                  "Date and location of fumigation",
                  "Container number or description of cargo treated",
                  "Name and registration of licensed fumigation company",
                  "Signature of licensed fumigator",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs text-red-800">
                  <strong>Important:</strong> After fumigation, the container must air out for the prescribed period before workers enter. Fumigation certificates must be presented to the shipping line before loading. Ambeza coordinates this with licensed fumigators.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* General packaging rules */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">General export packaging rules</h2>
          <p className="text-[#475569] mb-6">
            Beyond ISPM-15, every export carton and crate must meet these standards. Incorrect packaging is one of the most common reasons for insurance claims being rejected.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packagingRules.map((pr) => (
              <div key={pr.rule} className="bg-white border border-[#E2E8F0] rounded-xl p-4">
                <p className="font-semibold text-[#0A1628] text-sm mb-1">{pr.rule}</p>
                <p className="text-xs text-[#475569]">{pr.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Crate standards */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">Wooden crate standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Timber specification", items: ["Use seasoned, kiln-dried wood (moisture ≤ 18%)", "No bark allowed on crate timber", "Knot-free zones for load-bearing members", "Minimum 19mm thickness for boards, 44mm for structural members"] },
              { title: "Construction", items: ["Screws preferred over nails for repeated use", "Metal corner brackets for heavy crates", "Internal bracing if crate is over 50kg", "External ISPM-15 treated batten if crate itself is non-treated wood"] },
              { title: "Labelling on crate", items: ["Gross weight (kg) on side panel", "Centre of gravity arrows", "Slinging/forklift entry points marked", "Do Not Stack symbol if fragile", "ISPM-15 stamp on minimum 2 sides"] },
            ].map((c) => (
              <div key={c.title} className="border border-[#E2E8F0] rounded-xl p-5 bg-white">
                <p className="font-bold text-[#185FA5] text-sm mb-3">{c.title}</p>
                <ul className="space-y-2">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#475569]">
                      <span className="text-[#185FA5] mt-0.5 flex-shrink-0">•</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Special cargo markings */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">Special markings by cargo type</h2>
          <p className="text-[#475569] mb-6">Different goods have different marking requirements beyond standard export labels.</p>
          <div className="space-y-4">
            {cargoMarkings.map((cm) => (
              <div key={cm.cargoType} className="border border-[#E2E8F0] rounded-xl overflow-hidden">
                <div className="bg-[#F8FAFC] px-5 py-3 border-b border-[#E2E8F0]">
                  <p className="font-bold text-[#0A1628]">{cm.cargoType}</p>
                </div>
                <div className="px-5 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-[#185FA5] uppercase tracking-wider mb-2">Required markings</p>
                    <ul className="space-y-1">
                      {cm.markings.map((m) => (
                        <li key={m} className="text-xs text-[#475569] flex items-start gap-1.5">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#185FA5] uppercase tracking-wider mb-2">Regulation</p>
                    <p className="text-xs text-[#475569]">{cm.rule}</p>
                  </div>
                  <div>
                    {cm.warning ? (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-xs text-red-800 flex items-start gap-1.5">
                          <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                          {cm.warning}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-xs text-green-800 flex items-start gap-1.5">
                          <CheckCircle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                          No specific regulatory warning for this cargo type — follow shipper best practices.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packing list accuracy warning */}
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-7 w-7 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-900 text-lg mb-2">Packing List accuracy warning</h3>
              <p className="text-sm text-red-800 mb-3">
                Your Packing List must exactly match the physical cargo. Any discrepancy between the Packing List, Commercial Invoice, and actual physical count/weight triggers a customs examination — and can result in:
              </p>
              <ul className="space-y-1.5 text-sm text-red-800">
                <li className="flex items-start gap-2"><XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" /> Shipment hold for physical examination (adds 3–7 days)</li>
                <li className="flex items-start gap-2"><XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" /> Misdeclaration penalty under Customs Act, 1962</li>
                <li className="flex items-start gap-2"><XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" /> IGST refund delays if weight/value doesn't match</li>
                <li className="flex items-start gap-2"><XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" /> Buyer disputes if actual goods don't match invoice</li>
              </ul>
              <p className="text-sm text-red-800 mt-3 font-semibold">
                Always have your warehouse team count, weigh, and verify before the packing list is finalised. Ambeza cross-checks all documents before filing.
              </p>
            </div>
          </div>
        </div>

        {/* Related guides */}
        <div className="flex flex-wrap gap-3">
          <Link href="/dg-guide" className="inline-flex items-center gap-2 bg-[#185FA5]/10 text-[#185FA5] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#185FA5]/20 transition-colors">
            DG Cargo Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/documents-guide" className="inline-flex items-center gap-2 bg-[#185FA5]/10 text-[#185FA5] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#185FA5]/20 transition-colors">
            Documents Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/documents-guide/originals" className="inline-flex items-center gap-2 bg-[#185FA5]/10 text-[#185FA5] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#185FA5]/20 transition-colors">
            Which Documents Need Originals?
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let Ambeza handle fumigation and packing compliance</h2>
              <p className="text-slate-300 mb-4">
                We coordinate with ISPM-15 approved treatment facilities, licensed fumigators, and approved packers — so your cargo meets destination country requirements on the first attempt.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm mb-6">
                {[
                  "ISPM-15 treatment arranged at approved facilities",
                  "Fumigation certificates from licensed agencies",
                  "Packing list review and verification before filing",
                  "Special markings guidance per destination country",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/918179688632?text=Hi, I need help with fumigation and packing compliance for export"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#20bf5b] transition-colors"
              >
                WhatsApp us now
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-[#0A1628] font-bold text-xl mb-4">Get a free export quote</h3>
              <QuoteForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
