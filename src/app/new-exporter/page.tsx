"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ChevronRight, BookOpen } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const checklist = [
  {
    num: "01",
    title: "Get your IEC Code",
    detail: "Importer Exporter Code is the foundation of all exports. Apply at dgft.gov.in. You need your PAN, Aadhaar, and bank details. Fee: ₹500. Issued within 1–2 working days. Without IEC, you cannot export commercially.",
  },
  {
    num: "02",
    title: "Register for GST and file LUT",
    detail: "If not already GST-registered, do so at gstin.gov.in. Once registered, file a Letter of Undertaking (LUT) under GST. LUT allows you to export without paying IGST upfront — you get a refund otherwise, but LUT is faster. Valid for 1 year, renew annually.",
  },
  {
    num: "03",
    title: "Open a current account and register AD Code",
    detail: "You need a current account with an authorised dealer (AD) bank. The bank gives you an AD Code — register this at every port from which you will export. One-time per port. Ambeza helps you do this.",
  },
  {
    num: "04",
    title: "Check export policy for your product",
    detail: "Not everything can be exported freely. Check the DGFT website or use our HSN Checker to verify if your product is Free, Restricted, or Prohibited. Some products need RCMC from an export promotion council.",
  },
  {
    num: "05",
    title: "Get your RCMC if required",
    detail: "Registration Cum Membership Certificate from your export promotion council (e.g. APEDA for agricultural products, TEXPROCIL for textiles, CHEMEXCIL for chemicals). Required for certain certifications and DGFT benefits.",
  },
  {
    num: "06",
    title: "Get product certifications",
    detail: "Depending on your product: Phytosanitary Certificate, FSSAI, CoA, GMP Certificate, BIS, etc. Our HSN Checker lists all documents required for your specific product category.",
  },
  {
    num: "07",
    title: "Contact Ambeza — we handle the rest",
    detail: "Once you have IEC, GST, AD Code, and your product certifications, contact us. We prepare the Shipping Bill, Certificate of Origin, book the freight, clear customs, and deliver door-to-door.",
  },
];

const paymentTerms = [
  {
    term: "Advance TT",
    fullName: "Advance Telegraphic Transfer",
    desc: "Buyer pays 100% before goods are shipped. Safest for you (the exporter). Common for first orders and small amounts.",
    risk: "Low",
    common: true,
  },
  {
    term: "Letter of Credit (LC)",
    fullName: "Documentary Letter of Credit",
    desc: "Buyer's bank guarantees payment once you present the required documents (BL, Invoice, CoO, etc.). Safe for both sides. Standard for large orders.",
    risk: "Very low",
    common: true,
  },
  {
    term: "DP (Documents against Payment)",
    fullName: "Documents Against Payment",
    desc: "Documents are released to buyer only after they pay their bank. Medium risk — buyer can refuse to take documents. Common in some markets.",
    risk: "Medium",
    common: false,
  },
  {
    term: "Open Account",
    fullName: "Open Account",
    desc: "You ship first, buyer pays later (typically 30–90 days). Highest risk for exporter. Only use with known, trusted buyers.",
    risk: "High",
    common: false,
  },
];

const glossary = [
  { term: "IEC", def: "Importer Exporter Code — your unique 10-digit export licence issued by DGFT. Mandatory for all commercial exports.", why: "You cannot export without this." },
  { term: "CHA", def: "Customs House Agent — a licensed professional authorised to file Shipping Bills and interact with customs on your behalf.", why: "Ambeza's in-house CHA handles all your customs filings." },
  { term: "Shipping Bill", def: "The master export declaration filed on ICEGATE. This is the document that says 'I am exporting this product from India'.", why: "Every export needs one. Required to trigger RoDTEP and Drawback." },
  { term: "LEO", def: "Let Export Order — customs approval to ship. Issued on the Shipping Bill after customs clearance.", why: "Cargo cannot be loaded without LEO." },
  { term: "EGM", def: "Export General Manifest — filed by the shipping line or airline after the vessel/plane departs. Records what actually shipped.", why: "EGM filing triggers your RoDTEP credit." },
  { term: "BL / AWB", def: "Bill of Lading (sea) or Airway Bill (air) — your contract with the carrier. Proof that goods have been shipped.", why: "Needed to claim at destination and for LC payments." },
  { term: "CoO", def: "Certificate of Origin — document proving goods were manufactured in India. Needed for duty benefits at destination and for LC.", why: "Many buyers and countries require this." },
  { term: "FCL", def: "Full Container Load — your cargo fills an entire container (20ft or 40ft).", why: "Cost-effective for large volumes." },
  { term: "LCL", def: "Less than Container Load — your cargo shares a container with other exporters' cargo. Charged per CBM.", why: "Best for small shipments that don't fill a full container." },
  { term: "CFS", def: "Container Freight Station — a bonded facility near the port where cargo is received, stuffed, and stored.", why: "Your cargo goes here after pickup." },
  { term: "ICD", def: "Inland Container Depot — a dry port inland. Can do customs clearance without going to the sea port.", why: "Useful if you are far from a sea port." },
  { term: "FOB", def: "Free On Board — Incoterm meaning you (the seller) are responsible for costs and risks until the cargo is loaded on the ship.", why: "Most common payment term for Indian exporters." },
  { term: "CIF", def: "Cost, Insurance, Freight — you pay freight + insurance to destination port. Buyer only takes responsibility there.", why: "Sometimes preferred by buyers who want predictable costs." },
  { term: "DDP", def: "Delivered Duty Paid — you pay everything including destination customs duties and last-mile delivery.", why: "More complex and expensive for you, but some buyers prefer it." },
  { term: "FIRC", def: "Foreign Inward Remittance Certificate — issued by your bank when foreign payment arrives. Proof of export earnings.", why: "Required for RoDTEP, Drawback, and GST refund claims." },
  { term: "RoDTEP", def: "Remission of Duties and Taxes on Exported Products — government refund of embedded taxes paid on production inputs.", why: "Free money you are entitled to after every export. Ambeza tracks this for you." },
  { term: "AD Code", def: "Authorised Dealer Code — your bank's code registered at a specific port. Links your bank account to the port.", why: "Mandatory one-time registration per port before first export." },
  { term: "ICEGATE", def: "India Customs Electronic Gateway — the government portal where Shipping Bills, EGMs, and all customs documents are filed.", why: "Your CHA files everything here. You can track your shipment status here too." },
  { term: "DGFT", def: "Directorate General of Foreign Trade — government body that regulates export-import policy, issues IEC, RCMC, and export licences.", why: "You need IEC from DGFT. Check your product's export policy here." },
  { term: "RCMC", def: "Registration Cum Membership Certificate — issued by export promotion councils for specific industries.", why: "Required for some export benefits and certifications." },
  { term: "HSN", def: "Harmonised System of Nomenclature — 8-digit code that classifies your product for customs purposes.", why: "Appears on all export documents. Determines duty rates and RoDTEP rates." },
  { term: "Incoterm", def: "International Commercial Terms — internationally agreed definitions of who bears cost and risk at each stage of shipping (FOB, CIF, DDP, etc.).", why: "Your trade contract with the buyer specifies the Incoterm." },
  { term: "LUT", def: "Letter of Undertaking — filed under GST to allow zero-rated exports without paying IGST upfront.", why: "File this before your first export to save cash flow." },
];

export default function NewExporterPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [glossarySearch, setGlossarySearch] = useState("");

  const toggle = (num: string) => {
    const next = new Set(checked);
    if (next.has(num)) next.delete(num);
    else next.add(num);
    setChecked(next);
  };

  const filteredGlossary = glossary.filter(
    ({ term, def }) =>
      !glossarySearch ||
      term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      def.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">First Time Exporter</p>
            <h1 className="text-4xl font-bold mb-4">Never exported before? Start here.</h1>
            <p className="text-slate-300 text-lg">We have guided hundreds of first-time exporters through their first shipment. This page tells you everything you need to know before your first export.</p>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#185FA5] text-xs font-bold uppercase tracking-widest mb-3">Pre-export Setup</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] tracking-tight mb-3">Your first-export checklist</h2>
            <p className="text-[#475569]">Seven things to set up before your first shipment. Tick them off as you go.</p>
            {checked.size > 0 && (
              <p className="text-[#10B981] font-semibold mt-2">{checked.size} of {checklist.length} done</p>
            )}
          </div>
          <div className="space-y-4">
            {checklist.map(({ num, title, detail }) => (
              <div
                key={num}
                className={`border-2 rounded-2xl p-6 transition-all cursor-pointer ${
                  checked.has(num) ? "border-[#10B981] bg-[#10B981]/5" : "border-[#E2E8F0] bg-white hover:border-[#185FA5]/50"
                }`}
                onClick={() => toggle(num)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      checked.has(num) ? "bg-[#10B981] text-white" : "bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569]"
                    }`}
                  >
                    {checked.has(num) ? <CheckCircle className="h-5 w-5" /> : <span className="text-xs font-bold">{num}</span>}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#0A1628] mb-2">{title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Getting paid */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-8">
          <p className="text-[#185FA5] text-xs font-bold uppercase tracking-widest mb-3">Getting Paid</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] tracking-tight mb-3">How foreign payments work</h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            You ship to a buyer in another country. How do you make sure you get paid? These are the standard payment terms used in international trade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {paymentTerms.map(({ term, fullName, desc, risk, common }) => (
            <div
              key={term}
              className={`bg-white rounded-2xl p-6 border-2 ${common ? "border-[#185FA5]/30" : "border-[#E2E8F0]"}`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-[#0A1628]">{term}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  risk === "Low" || risk === "Very low"
                    ? "bg-green-100 text-green-800"
                    : risk === "Medium"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-red-100 text-red-800"
                }`}>
                  Risk: {risk}
                </span>
              </div>
              <p className="text-xs text-[#475569] font-medium mb-2">{fullName}</p>
              <p className="text-sm text-[#475569] leading-relaxed">{desc}</p>
              {common && (
                <p className="text-xs text-[#185FA5] font-semibold mt-3">★ Commonly used by Indian exporters</p>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* First shipment timeline */}
      <SectionWrapper>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">Your first shipment — a realistic timeline</h2>
          <p className="text-[#475569]">From zero to first export in 4 weeks. This is typical for a well-prepared first-timer.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { week: "Week 1", tasks: ["Apply for IEC online", "Register AD Code at bank", "File LUT on GST portal", "Register with RCMC council if needed"] },
            { week: "Week 2", tasks: ["First documents prepared", "Commercial Invoice finalised", "Ambeza onboarding completed", "Freight booking made"] },
            { week: "Week 3", tasks: ["Cargo packed and ready", "Ambeza picks up cargo", "Shipping Bill filed on ICEGATE", "Customs clearance obtained"] },
            { week: "Week 4+", tasks: ["Cargo departs India", "Bill of Lading received", "Buyer receives goods", "Payment + FIRC + RoDTEP follow"] },
          ].map(({ week, tasks }) => (
            <div key={week} className="bg-white border border-[#E2E8F0] rounded-xl p-5">
              <div className="bg-[#185FA5] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                {week}
              </div>
              <ul className="space-y-2">
                {tasks.map((task) => (
                  <li key={task} className="flex items-start gap-2 text-xs text-[#475569]">
                    <span className="text-[#185FA5] mt-0.5">•</span> {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 10 mistakes */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-10">
          <p className="text-[#185FA5] text-xs font-bold uppercase tracking-widest mb-3">Avoid These</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] tracking-tight mb-3">10 most common mistakes first-time exporters make</h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            These are the mistakes we see most often — and all of them are avoidable. Read this before your first shipment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {[
            {
              num: "01",
              title: "Not filing LUT before the first export",
              detail: "Without a Letter of Undertaking (LUT) on the GST portal, you have to pay 18% IGST upfront on your export invoice and claim a refund later — which takes months. File your LUT first and export zero-rated from day one.",
              color: "red",
            },
            {
              num: "02",
              title: "Wrong HSN code on the Shipping Bill",
              detail: "Using a broad or incorrect HSN code means your RoDTEP rate, Duty Drawback rate, and certificate requirements will be wrong. A mismatch between invoice HSN and Shipping Bill HSN triggers a customs query.",
              color: "red",
            },
            {
              num: "03",
              title: "Invoice value doesn't match the Shipping Bill",
              detail: "Your Commercial Invoice amount and the declared FOB value on the Shipping Bill must match in both amount and currency. Even a rounding difference flags the shipment for examination.",
              color: "red",
            },
            {
              num: "04",
              title: "Missing AD Code registration at the port",
              detail: "Your AD Code (bank registration with customs) is port-specific. If you've registered only at JNPT and you ship from Chennai, no Shipping Bill can be filed. Register at every port before you use it.",
              color: "amber",
            },
            {
              num: "05",
              title: "Not collecting the FIRC",
              detail: "When your buyer sends payment, your bank issues a FIRC (Foreign Inward Remittance Certificate). This is mandatory for RoDTEP credit, Duty Drawback disbursement, and GST refund claims. Many exporters only realise they need it after the fact.",
              color: "amber",
            },
            {
              num: "06",
              title: "Exporting restricted goods without checking",
              detail: "Some products (e.g. certain chemicals, dual-use items, wild flora/fauna) require DGFT licences, SCOMET clearance, or Wildlife Protection Act clearances. Exporting without checking your HSN export policy can result in seizure.",
              color: "red",
            },
            {
              num: "07",
              title: "Not claiming RoDTEP or Duty Drawback",
              detail: "This is free money from the government — a remission of taxes embedded in your production cost. Thousands of first-time exporters simply don't know about it and leave it unclaimed. Ask your CHA to file the right Shipping Bill type.",
              color: "amber",
            },
            {
              num: "08",
              title: "Incoterm on invoice doesn't match the LC terms",
              detail: "If your buyer opens an LC on CIF terms but your invoice says FOB, the bank will flag a discrepancy and may refuse payment. Always confirm Incoterms with your buyer before generating any documents.",
              color: "red",
            },
            {
              num: "09",
              title: "Packing List quantity doesn't match physical count",
              detail: "If your Packing List says 24 cartons of 20 pieces = 480 pieces, but customs physically counts 24 cartons of 18 pieces = 432 pieces, your shipment is held and you face misdeclaration proceedings under the Customs Act.",
              color: "red",
            },
            {
              num: "10",
              title: "Forgetting to renew the LUT every year",
              detail: "LUT (Letter of Undertaking) is valid for one financial year (April–March). If it expires and you export without renewing, you have to pay IGST on your exports and claim a refund — tying up working capital for months.",
              color: "amber",
            },
          ].map(({ num, title, detail, color }) => (
            <div
              key={num}
              className={`bg-white rounded-xl border-l-4 p-5 ${
                color === "red"
                  ? "border-l-red-500 border border-red-100"
                  : "border-l-amber-500 border border-amber-100"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`font-bold text-2xl flex-shrink-0 ${color === "red" ? "text-red-300" : "text-amber-300"}`}>
                  {num}
                </span>
                <div>
                  <p className="font-bold text-[#0A1628] mb-2">{title}</p>
                  <p className="text-sm text-[#475569] leading-relaxed">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-5xl mx-auto">
          <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-xl p-5 text-center">
            <p className="font-bold text-[#0A1628] mb-1">Ambeza's job is to prevent every one of these mistakes</p>
            <p className="text-sm text-[#475569]">
              Our CHA team reviews documents, verifies HSN codes, monitors LUT validity, and tracks all refund claims on your behalf.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Glossary */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <BookOpen className="h-8 w-8 text-[#185FA5] mx-auto mb-3" />
            <p className="text-[#185FA5] text-xs font-bold uppercase tracking-widest mb-3">Reference</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] tracking-tight mb-3">Export Glossary — plain English</h2>
            <p className="text-[#475569]">Every term you will hear when exporting from India. No jargon.</p>
          </div>
          <div className="relative mb-5">
            <input
              type="text"
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              placeholder='Search terms — e.g. "LEO", "Shipping Bill", "FIRC"'
              className="w-full px-5 py-3.5 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredGlossary.map(({ term, def, why }) => (
              <div key={term} className="bg-white border border-[#E2E8F0] rounded-xl p-4">
                <p className="font-bold text-[#185FA5] text-sm mb-1">{term}</p>
                <p className="text-xs text-[#0F172A] mb-2 leading-relaxed">{def}</p>
                <p className="text-xs text-[#475569] italic">{why}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="bg-[#185FA5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to ship your first export?</h2>
          <p className="text-white/80 text-lg mb-8">We handle everything. You bring the product and the buyer.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F59E0B] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#d97706] transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/how-it-works"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#185FA5] transition-colors inline-flex items-center gap-2"
            >
              See How It Works <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
