import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Export Documents Guide — All Documents Explained",
  description: "Every export document you need when shipping from India — Shipping Bill, Certificate of Origin, BL, AWB, LEO, IEC, and more — explained in plain English.",
};

const documents = [
  {
    name: "IEC — Importer Exporter Code",
    issuer: "DGFT (Directorate General of Foreign Trade)",
    mandatory: true,
    desc: "Your 10-digit export licence. Every commercial exporter in India must have this. Apply at dgft.gov.in for ₹500. Issued in 1–2 working days. Permanent — valid for the life of the business.",
    when: "Before your first export",
  },
  {
    name: "Shipping Bill",
    issuer: "Filed by CHA on ICEGATE (Indian Customs)",
    mandatory: true,
    desc: "The master export declaration. Every commercial export from India requires a Shipping Bill. It declares: what you are exporting, from where, to where, declared value, HSN code, quantity. Filed electronically on ICEGATE by your CHA.",
    when: "Every shipment",
  },
  {
    name: "Commercial Invoice",
    issuer: "You (the exporter)",
    mandatory: true,
    desc: "Your sales invoice to your buyer. It shows: seller, buyer, product description, quantity, unit price, total value, currency, Incoterm, payment terms. The declared value on Customs documents must match this invoice.",
    when: "Every shipment",
  },
  {
    name: "Packing List",
    issuer: "You (the exporter)",
    mandatory: true,
    desc: "Details of each package — dimensions, weight, contents, number of packages. Customs and carriers need this to verify what is being shipped. Must match the Shipping Bill.",
    when: "Every shipment",
  },
  {
    name: "Certificate of Origin (CoO)",
    issuer: "Export Promotion Council / Chamber of Commerce",
    mandatory: false,
    desc: "Proves that the goods were manufactured in India. Required by buyers for LC payments, for claiming preferential duty rates at destination (GSP, FTA), and by some importing countries. Ambeza prepares and gets this certified.",
    when: "When buyer requires it, or for FTA benefits",
  },
  {
    name: "Bill of Lading (BL) / Airway Bill (AWB)",
    issuer: "Shipping line / Airline",
    mandatory: true,
    desc: "Your contract with the carrier. Proof that goods have been loaded for shipment. For sea: Bill of Lading (BL). For air: Airway Bill (AWB). The BL is a document of title — whoever holds it can claim the cargo.",
    when: "Every shipment — issued at departure",
  },
  {
    name: "Phytosanitary Certificate",
    issuer: "NPPO India (State Agriculture Dept / APEDA)",
    mandatory: false,
    desc: "Required for plant products: agricultural goods, food products, wood, seeds. Certifies that the shipment is free of pests and diseases. Issued after physical inspection. Most destinations require this for agri exports.",
    when: "All agricultural, food, and plant products",
  },
  {
    name: "FSSAI Export Certificate",
    issuer: "FSSAI (Food Safety and Standards Authority of India)",
    mandatory: false,
    desc: "Required for processed food and beverages being exported. Certifies compliance with Indian food safety standards. Some countries require FSSAI certificate for import clearance.",
    when: "Processed food and beverage exports",
  },
  {
    name: "GSP Certificate of Origin",
    issuer: "Export Promotion Councils / DGFT",
    mandatory: false,
    desc: "Generalised System of Preferences — allows your buyer in EU, UK, Japan, USA to import your goods at a reduced or zero duty rate. Available for most Indian manufactured goods. Significant competitive advantage.",
    when: "Exports to EU, UK, Japan, Australia (where GSP applies)",
  },
  {
    name: "MSDS — Material Safety Data Sheet",
    issuer: "You / the manufacturer",
    mandatory: false,
    desc: "Required for all chemicals, DG products, and hazardous substances. Describes the substance, its hazards, handling precautions, emergency procedures. Must accompany every shipment of DG cargo.",
    when: "All chemical and DG shipments",
  },
  {
    name: "AD Code Registration",
    issuer: "Your bank",
    mandatory: true,
    desc: "Authorised Dealer Code — your bank's code registered at a specific port. Links your bank account to the customs system for export realisation tracking. Must be registered at each port before first export. One-time, permanent.",
    when: "First export from each port — one-time",
  },
  {
    name: "LEO — Let Export Order",
    issuer: "Indian Customs (endorsed on Shipping Bill)",
    mandatory: true,
    desc: "Customs approval to ship. Endorsed on your Shipping Bill after customs clearance. Without LEO, cargo cannot be loaded. Our CHA ensures this is obtained for every shipment.",
    when: "Every shipment — obtained after customs clearance",
  },
];

export default function DocumentsGuidePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Export Intelligence</p>
            <h1 className="text-4xl font-bold mb-4">Export Documents — Explained</h1>
            <p className="text-slate-300 text-lg">Every document you will encounter when exporting from India — what it is, who issues it, and when you need it.</p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="mb-8 bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-2xl p-6">
          <p className="text-sm text-[#0F172A] leading-relaxed">
            <strong>The simple version:</strong> You provide the Commercial Invoice, Packing List, and your IEC/GST/AD Code. Ambeza prepares and files everything else — Shipping Bill, Certificate of Origin, product-specific certificates, and obtains LEO. You never have to interact with ICEGATE or customs directly.
          </p>
          <Link href="/how-it-works" className="text-[#185FA5] text-sm font-semibold hover:underline mt-2 inline-flex items-center gap-1">
            See the full export process <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {documents.map(({ name, issuer, mandatory, desc, when }) => (
            <div key={name} className="bg-white border border-[#E2E8F0] rounded-xl p-6">
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#185FA5]" />
                  <h2 className="font-bold text-[#0A1628]">{name}</h2>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  mandatory
                    ? "bg-red-100 text-red-800"
                    : "bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
                }`}>
                  {mandatory ? "Mandatory" : "Conditional"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="sm:col-span-3">
                  <p className="text-sm text-[#475569] leading-relaxed mb-2">{desc}</p>
                  <p className="text-xs text-[#475569]">
                    <span className="font-semibold text-[#0A1628]">Issued by:</span> {issuer}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0A1628] mb-1">When needed:</p>
                  <p className="text-xs text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2">{when}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#475569] mb-4 text-sm">Need documents for a specific product?</p>
          <Link
            href="/hsn-checker"
            className="bg-[#185FA5] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#14508a] transition-colors inline-block"
          >
            Check your HSN code for product-specific documents
          </Link>
        </div>
      </SectionWrapper>

      {/* Checklist by transaction type */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <h2 className="text-3xl font-bold text-[#0A1628] mb-3">Complete export document checklist by transaction type</h2>
        <p className="text-[#475569] mb-8">
          Documents needed vary depending on how you are being paid and what incentives you are claiming. Use the checklist for your transaction type.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Standard FOB / TT */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
            <div className="bg-[#185FA5] text-white px-5 py-4">
              <p className="font-bold text-lg">Standard FOB / TT</p>
              <p className="text-blue-200 text-xs mt-0.5">Advance payment or Open Account — no LC involved</p>
            </div>
            <div className="p-5 space-y-3">
              {[
                { doc: "IEC Certificate", note: "Before first shipment — one-time", mandatory: true },
                { doc: "GST Registration + LUT", note: "File LUT to avoid upfront IGST payment", mandatory: true },
                { doc: "AD Code registration", note: "At the port you are exporting from", mandatory: true },
                { doc: "Commercial Invoice", note: "3 originals, signed in blue ink", mandatory: true },
                { doc: "Packing List", note: "Match exactly with invoice quantity/weight", mandatory: true },
                { doc: "Shipping Bill (SB-1 or SB-1 + RoDTEP)", note: "Filed by your CHA on ICEGATE", mandatory: true },
                { doc: "Bill of Lading / AWB", note: "Issued by shipping line/airline after loading", mandatory: true },
                { doc: "Certificate of Origin", note: "If buyer requires or for FTA benefit", mandatory: false },
                { doc: "FIRC", note: "From your bank when payment received", mandatory: true },
              ].map(({ doc, note, mandatory }) => (
                <div key={doc} className="flex items-start gap-3">
                  <div className={`w-4 h-4 rounded flex-shrink-0 mt-0.5 flex items-center justify-center ${mandatory ? "bg-[#185FA5]" : "bg-slate-200"}`}>
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${mandatory ? "text-[#0A1628]" : "text-[#475569]"}`}>{doc}</p>
                    <p className="text-xs text-[#94A3B8]">{note}</p>
                  </div>
                </div>
              ))}
              <div className="mt-2 pt-2 border-t border-[#E2E8F0]">
                <p className="text-xs text-[#94A3B8]">
                  <span className="inline-block w-4 h-4 rounded bg-[#185FA5] mr-1 align-middle" /> = Mandatory &nbsp;
                  <span className="inline-block w-4 h-4 rounded bg-slate-200 mr-1 align-middle" /> = Conditional
                </p>
              </div>
            </div>
          </div>

          {/* Letter of Credit */}
          <div className="bg-white rounded-2xl border-2 border-[#185FA5]/40 overflow-hidden">
            <div className="bg-[#0A1628] text-white px-5 py-4">
              <p className="font-bold text-lg">Letter of Credit (LC)</p>
              <p className="text-slate-300 text-xs mt-0.5">Paid via bank-to-bank LC — strictest document requirements</p>
            </div>
            <div className="p-5 space-y-3">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-2">
                <p className="text-xs text-amber-800 font-medium">Read your LC carefully — it specifies exact document requirements. Any deviation = rejection.</p>
              </div>
              {[
                { doc: "All FOB documents (above)", note: "Entire FOB checklist applies", mandatory: true },
                { doc: "Full set 3/3 OBL", note: "Negotiable originals — 3 of 3 required for most LCs", mandatory: true },
                { doc: "Certificate of Origin — original", note: "2–3 originals, blue ink", mandatory: true },
                { doc: "Insurance Certificate / Policy", note: "For CIF/CIP terms — original required", mandatory: false },
                { doc: "Beneficiary Certificate", note: "If LC requires a separate letter from you", mandatory: false },
                { doc: "Bill of Exchange / Draft", note: "Sight or usance draft as per LC terms", mandatory: true },
                { doc: "Inspection Certificate", note: "If buyer's LC specifies pre-shipment inspection", mandatory: false },
                { doc: "GSP Form A (if applicable)", note: "For preferential duty at destination", mandatory: false },
                { doc: "Packing Certificate", note: "Some LCs require a separate packing cert", mandatory: false },
              ].map(({ doc, note, mandatory }) => (
                <div key={doc} className="flex items-start gap-3">
                  <div className={`w-4 h-4 rounded flex-shrink-0 mt-0.5 flex items-center justify-center ${mandatory ? "bg-[#0A1628]" : "bg-slate-200"}`}>
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${mandatory ? "text-[#0A1628]" : "text-[#475569]"}`}>{doc}</p>
                    <p className="text-xs text-[#94A3B8]">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Duty Drawback */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
            <div className="bg-[#0F766E] text-white px-5 py-4">
              <p className="font-bold text-lg">Duty Drawback Claim</p>
              <p className="text-emerald-200 text-xs mt-0.5">Claiming refund of customs duty paid on imported inputs</p>
            </div>
            <div className="p-5 space-y-3">
              {[
                { doc: "All FOB documents (above)", note: "Entire FOB checklist applies", mandatory: true },
                { doc: "Drawback Shipping Bill (SB-2)", note: "Filed instead of standard SB-1 by your CHA", mandatory: true },
                { doc: "LEO-endorsed Shipping Bill", note: "Required to initiate drawback claim", mandatory: true },
                { doc: "Bank account details in customs", note: "Drawback credited directly to your bank", mandatory: true },
                { doc: "FIRC / BRC", note: "Proof of payment receipt — required before drawback released", mandatory: true },
                { doc: "Import documents (BEs)", note: "Bills of Entry showing duty paid on inputs", mandatory: true },
                { doc: "Manufacturing process statement", note: "If claiming AIIS (All Industry Rate) — standard for most", mandatory: false },
                { doc: "Quantity statement of inputs used", note: "For brand rate fixation only", mandatory: false },
              ].map(({ doc, note, mandatory }) => (
                <div key={doc} className="flex items-start gap-3">
                  <div className={`w-4 h-4 rounded flex-shrink-0 mt-0.5 flex items-center justify-center ${mandatory ? "bg-[#0F766E]" : "bg-slate-200"}`}>
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${mandatory ? "text-[#0A1628]" : "text-[#475569]"}`}>{doc}</p>
                    <p className="text-xs text-[#94A3B8]">{note}</p>
                  </div>
                </div>
              ))}
              <div className="mt-3 bg-[#F0FDF4] border border-green-200 rounded-lg p-3">
                <p className="text-xs text-green-800">
                  <strong>Ambeza tracks this:</strong> We file the Drawback Shipping Bill and follow up with customs until refund is credited to your account.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <p className="font-bold text-[#0A1628] mb-1">Which documents need originals vs copies?</p>
            <p className="text-sm text-[#475569]">Not all documents need originals — but getting it wrong costs you. See our originals guide.</p>
          </div>
          <Link
            href="/documents-guide/originals"
            className="flex-shrink-0 bg-[#185FA5] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#14508a] transition-colors whitespace-nowrap"
          >
            Originals Guide →
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
