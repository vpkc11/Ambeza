import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import QuoteForm from "@/components/QuoteForm";
import { AlertTriangle, CheckCircle, XCircle, ArrowRight, FileText, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Which Export Documents Need Originals? | Blue Ink Rule | Ambeza",
  description:
    "Complete guide to original vs copy documents in Indian export: which need originals, how many copies, blue ink rule for signing, and document retention periods.",
};

type OriginalRequired = "Always" | "Sometimes" | "No" | "Depends on payment term";

interface DocEntry {
  document: string;
  originalRequired: OriginalRequired;
  howMany: string;
  whoNeedsIt: string;
  ifCopySubmitted: string;
}

const documents: DocEntry[] = [
  {
    document: "Commercial Invoice",
    originalRequired: "Always",
    howMany: "3–6 originals (depends on LC terms — LC will specify exact number)",
    whoNeedsIt: "Buyer, buyer's bank, customs at destination, your CHA",
    ifCopySubmitted: "Bank will reject LC presentation. Customs may query. Always issue originals on your letterhead.",
  },
  {
    document: "Packing List",
    originalRequired: "Always",
    howMany: "3–4 originals (match invoice set)",
    whoNeedsIt: "Buyer, buyer's bank (for LC), destination customs, freight forwarder",
    ifCopySubmitted: "Technically functional for FOB/TT transactions — but keep original sets for LC",
  },
  {
    document: "Bill of Lading (Sea)",
    originalRequired: "Always",
    howMany: "3 originals (standard — called a 'full set of 3/3 OBL')",
    whoNeedsIt: "Buyer needs at least 1 original OBL to take delivery of goods at destination port. Banks hold for LC. Seller retains 1.",
    ifCopySubmitted: "Goods CANNOT be released without an original OBL (unless Sea Waybill used instead). This is the document of title.",
  },
  {
    document: "Airway Bill (Air)",
    originalRequired: "No",
    howMany: "AWB is non-negotiable — no original required. Copies suffice.",
    whoNeedsIt: "Airline, shipper, consignee — copy provided to all",
    ifCopySubmitted: "AWB is always a copy/waybill. Unlike OBL, it does not confer title to goods.",
  },
  {
    document: "Certificate of Origin (CoO)",
    originalRequired: "Always",
    howMany: "2–3 originals (buyer needs for customs at destination; LC may require more)",
    whoNeedsIt: "Destination customs — to apply preferential duty rates (FTA) or comply with non-preferential origin rules",
    ifCopySubmitted: "Destination customs will not grant preferential duty rate. Buyer may pay higher import duty.",
  },
  {
    document: "GSP Form A (Generalised System of Preferences)",
    originalRequired: "Always",
    howMany: "1 original sent with shipment; 1 retained by exporter",
    whoNeedsIt: "Destination customs in countries offering GSP — EU, USA, Japan, Canada",
    ifCopySubmitted: "GSP benefit not granted. Buyer's import duty is higher. This document is only issued by authorised agencies (EEPC, Textile Committees, etc.)",
  },
  {
    document: "Letter of Credit (LC)",
    originalRequired: "Always",
    howMany: "1 original to your bank for negotiation",
    whoNeedsIt: "Your advising/negotiating bank — presents to issuing bank for payment",
    ifCopySubmitted: "Bank cannot negotiate. Payment not released.",
  },
  {
    document: "Phytosanitary Certificate",
    originalRequired: "Always",
    howMany: "1–2 originals (issued by plant quarantine authority)",
    whoNeedsIt: "Destination country agricultural authority — mandatory for plants, seeds, food",
    ifCopySubmitted: "Goods held at destination port. Can result in destruction of perishable cargo.",
  },
  {
    document: "Fumigation Certificate",
    originalRequired: "Always",
    howMany: "2 originals (shipping line needs 1; exporter retains 1)",
    whoNeedsIt: "Shipping line before loading; destination customs for some countries",
    ifCopySubmitted: "Shipping line may refuse to load. Destination may reject or re-fumigate at exporter's cost.",
  },
  {
    document: "RCMC (Registration cum Membership Certificate)",
    originalRequired: "Sometimes",
    howMany: "Copy usually sufficient; original may be required for certain DGFT benefit claims",
    whoNeedsIt: "DGFT portal for licence applications, some customs benefit claims",
    ifCopySubmitted: "Usually fine for day-to-day use. Original needed for DGFT renewal and benefit claims.",
  },
  {
    document: "Bank Guarantee / Performance Bond",
    originalRequired: "Always",
    howMany: "1 original to the government department / buyer requesting it",
    whoNeedsIt: "Customs (for provisional assessment), DGFT (for advance authorisation), buyer contracts",
    ifCopySubmitted: "Not accepted — bank guarantees must be original to be enforceable.",
  },
  {
    document: "Insurance Certificate / Policy",
    originalRequired: "Depends on payment term",
    howMany: "For CIF: original required for LC presentations; for FOB: usually not needed from seller",
    whoNeedsIt: "Buyer (to make insurance claims); banks for LC",
    ifCopySubmitted: "For CIF LC transactions: bank rejects if original not produced.",
  },
  {
    document: "Shipping Bill (customs-stamped)",
    originalRequired: "Always",
    howMany: "1 original customs-stamped copy — generated electronically via ICEGATE, printed and stamped by customs officer",
    whoNeedsIt: "Exporter retains; required for IGST refund claim, Duty Drawback, and RoDTEP credit",
    ifCopySubmitted: "IGST refund and Drawback claims require original customs-endorsed Shipping Bill.",
  },
  {
    document: "Export Inspection Certificate (EIC / EIA)",
    originalRequired: "Always",
    howMany: "2 originals (issued by Export Inspection Agency — EIA)",
    whoNeedsIt: "Certain food, fishery, and engineering goods require this under Export Inspection Council mandate",
    ifCopySubmitted: "Customs will not let goods go without original EIC for notified goods.",
  },
];

const retentionPeriods = [
  { doc: "All original export documents", period: "5 years", reason: "Customs Act, 1962 — Section 46 / 50 requirement for books and records" },
  { doc: "Shipping Bill and LEO confirmation", period: "5 years", reason: "Required for IGST refund audit and Duty Drawback verification" },
  { doc: "Commercial Invoice and Packing List", period: "5 years", reason: "GST records requirement under Section 36 of CGST Act" },
  { doc: "Bank Realisation Certificate (BRC/FIRC)", period: "5 years", reason: "FEMA requirement — evidence of foreign exchange realisation" },
  { doc: "Letter of Credit documents", period: "5 years after last payment", reason: "Banking and Customs — dispute resolution window" },
  { doc: "Certificate of Origin", period: "3–5 years", reason: "Destination customs may request verification up to 3 years post export" },
  { doc: "AD Code registration letter", period: "Until superseded", reason: "Permanent reference — needed if customs queries your account at any port" },
  { doc: "IEC, RCMC, GST certificate", period: "Permanent (update on renewal)", reason: "Identity documents — never discard; always keep current version" },
];

const colorMap: Record<OriginalRequired, { bg: string; text: string; icon: React.ReactNode }> = {
  "Always": { bg: "bg-red-100", text: "text-red-800", icon: <AlertTriangle className="h-3.5 w-3.5" /> },
  "Sometimes": { bg: "bg-amber-100", text: "text-amber-800", icon: <AlertTriangle className="h-3.5 w-3.5" /> },
  "No": { bg: "bg-green-100", text: "text-green-800", icon: <CheckCircle className="h-3.5 w-3.5" /> },
  "Depends on payment term": { bg: "bg-blue-100", text: "text-blue-800", icon: <AlertTriangle className="h-3.5 w-3.5" /> },
};

export default function DocumentOriginalsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#F59E0B] text-sm font-medium mb-3">
            <FileText className="h-4 w-4" />
            <span>Documents Guide — Originals</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Which documents need originals?
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            A complete reference for Indian exporters: which documents must be originals, how many copies, who needs them, and what happens if you send a photocopy when an original is required.
          </p>
          <div className="mt-4">
            <Link href="/documents-guide" className="text-[#F59E0B] text-sm hover:underline flex items-center gap-1 w-fit">
              ← Back to Documents Guide
            </Link>
          </div>
        </div>
      </section>

      <SectionWrapper>
        {/* Blue ink rule */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 lg:p-8 mb-10">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-7 w-7 text-amber-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-amber-900 mb-2">The Blue Ink Rule</h2>
              <p className="text-amber-800 mb-3">
                All original export documents that require a signature must be signed in <strong>blue ink</strong> (not black, not printed). This rule applies across Indian banking, customs, and international trade practice because:
              </p>
              <ul className="space-y-2 text-sm text-amber-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">1.</span>
                  Blue ink clearly distinguishes an original from a photocopy (copies are black-and-white — a blue original is unmistakable)
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">2.</span>
                  Banks under UCP 600 (Uniform Customs and Practice for Documentary Credits) expect blue-signed originals for LC presentations
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">3.</span>
                  Certificates of Origin, Phytosanitary Certificates, and Bills of Lading endorsed in black ink are often returned by banks as "suspected copies"
                </li>
              </ul>
              <div className="mt-4 bg-amber-100 rounded-xl p-4">
                <p className="text-sm text-amber-900 font-semibold">
                  Rule of thumb: Every document you sign by hand as an exporter — sign in blue. Every courier you send originals in — include a checklist of the documents and their original count.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LC document set warning */}
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 mb-10">
          <div className="flex items-start gap-4">
            <XCircle className="h-7 w-7 text-red-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-red-900 mb-2">Letter of Credit (LC) document sets — special rules</h2>
              <p className="text-sm text-red-800 mb-3">
                When you are being paid by Letter of Credit, the LC document is a legally binding contract that specifies <em>exactly</em> which documents are required, in <em>exactly</em> what form, in <em>exactly</em> how many copies. A single discrepancy can mean non-payment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-red-900 text-sm mb-2">Common LC document set requirements:</p>
                  <ul className="space-y-1.5 text-xs text-red-800">
                    {[
                      '"Full set of 3/3 originals and 3 copies of Bill of Lading"',
                      '"3 originals and 3 copies Commercial Invoice"',
                      '"Certificate of Origin in original — 2 copies"',
                      '"Beneficiary Certificate stating goods shipped as per contract"',
                      '"Packing List — 3 originals and 3 copies"',
                    ].map((i) => (
                      <li key={i} className="font-mono bg-white rounded px-2 py-1 border border-red-200">{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-900 text-sm mb-2">What triggers LC discrepancy rejection:</p>
                  <ul className="space-y-1 text-xs text-red-800">
                    {[
                      "Sending 2/3 OBL when LC says 3/3",
                      "Invoice amount differs from LC amount (even by 1 paisa)",
                      "Shipping date after LC expiry",
                      "Port of loading not matching LC terms",
                      "Any document not in the correct name (your company vs LC beneficiary name)",
                      "Copies presented where originals required",
                    ].map((i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <XCircle className="h-3 w-3 flex-shrink-0 mt-0.5" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Originals table */}
        <h2 className="text-3xl font-bold text-[#0A1628] mb-3">Document originals reference table</h2>
        <p className="text-[#475569] mb-6">All key export documents, whether originals are required, how many, and the consequences of submitting copies when originals are needed.</p>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] mb-12">
          <table className="w-full text-sm min-w-[800px]">
            <thead className="bg-[#0A1628] text-white">
              <tr>
                <th className="text-left px-5 py-3 font-semibold">Document</th>
                <th className="text-left px-5 py-3 font-semibold">Original required?</th>
                <th className="text-left px-5 py-3 font-semibold">How many</th>
                <th className="text-left px-5 py-3 font-semibold">Who needs it</th>
                <th className="text-left px-5 py-3 font-semibold">If copy submitted</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, i) => {
                const color = colorMap[doc.originalRequired];
                return (
                  <tr key={doc.document} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-4 font-semibold text-[#0A1628] text-sm align-top">{doc.document}</td>
                    <td className="px-5 py-4 align-top">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${color.bg} ${color.text}`}>
                        {color.icon}
                        {doc.originalRequired}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-[#475569] text-xs align-top">{doc.howMany}</td>
                    <td className="px-5 py-4 text-[#475569] text-xs align-top">{doc.whoNeedsIt}</td>
                    <td className="px-5 py-4 text-xs align-top">
                      <span className={doc.originalRequired === "Always" ? "text-red-700" : doc.originalRequired === "No" ? "text-green-700" : "text-amber-700"}>
                        {doc.ifCopySubmitted}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Retention periods */}
        <h2 className="text-3xl font-bold text-[#0A1628] mb-3">Document retention periods</h2>
        <p className="text-[#475569] mb-6">
          Indian customs law and GST require you to keep export records for specified periods. A customs audit or IGST refund query can arrive years after the shipment — you must be able to produce the original documents.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] mb-10">
          <table className="w-full text-sm">
            <thead className="bg-[#0A1628] text-white">
              <tr>
                <th className="text-left px-5 py-3 font-semibold">Document</th>
                <th className="text-left px-5 py-3 font-semibold">Retention period</th>
                <th className="text-left px-5 py-3 font-semibold">Legal basis</th>
              </tr>
            </thead>
            <tbody>
              {retentionPeriods.map((r, i) => (
                <tr key={r.doc} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                  <td className="px-5 py-4 font-medium text-[#0A1628]">{r.doc}</td>
                  <td className="px-5 py-4">
                    <span className="flex items-center gap-1.5 text-[#185FA5] font-bold text-sm">
                      <Clock className="h-4 w-4" />
                      {r.period}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[#475569] text-xs">{r.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Storage tips */}
        <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-[#0A1628] mb-4">Document storage best practices</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Physical originals", tip: "File in chronological order by Shipping Bill date. Use fireproof cabinets for originals. Keep a separate photocopy set in a different location." },
              { title: "Digital backup", tip: "Scan all originals at 300 DPI minimum. Store on cloud + local backup. Name files: [SB_number]_[document_type]_[date].pdf" },
              { title: "LC document sets", tip: "Keep the LC itself, all presentation documents, and bank correspondence as one bundle per LC. Do not split." },
              { title: "Port-wise filing", tip: "If you export from multiple ports, file documents port-wise. IGST refunds and Drawback queries are port-specific." },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                <p className="font-semibold text-[#185FA5] text-sm mb-1">{s.title}</p>
                <p className="text-xs text-[#475569]">{s.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related guides */}
        <div className="flex flex-wrap gap-3">
          <Link href="/documents-guide" className="inline-flex items-center gap-2 bg-[#185FA5]/10 text-[#185FA5] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#185FA5]/20 transition-colors">
            ← Documents Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/new-exporter" className="inline-flex items-center gap-2 bg-[#185FA5]/10 text-[#185FA5] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#185FA5]/20 transition-colors">
            New Exporter Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/icegate-guide" className="inline-flex items-center gap-2 bg-[#185FA5]/10 text-[#185FA5] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#185FA5]/20 transition-colors">
            ICEGATE Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ambeza manages your complete document set</h2>
              <p className="text-slate-300 mb-4">
                We prepare, verify, and courier all original documents — including LC presentations, Certificate of Origin, and Shipping Bill endorsement. You focus on production.
              </p>
              <a
                href="https://wa.me/919999999999?text=Hi, I need help with export documentation and originals management"
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
