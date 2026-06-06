import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import QuoteForm from "@/components/QuoteForm";
import { ExternalLink, AlertTriangle, CheckCircle, ArrowRight, FileText, Shield, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "ICEGATE Guide — AD Code Registration & Shipping Bill Types | Ambeza",
  description:
    "Complete guide to ICEGATE: how to register, what is AD Code, how to register AD Code port-by-port (JNPT, Chennai, Hyderabad), and all Shipping Bill types explained.",
};

const shippingBillTypes = [
  {
    type: "Free Shipping Bill",
    form: "SB-1",
    color: "green",
    when: "Standard exports — no claim for any export incentive",
    examples: "Export of goods not eligible for Duty Drawback or IGST refund",
    keyFields: "IEC, consignee, port, invoice, packing list, BRC (post-shipment)",
    time: "Processing: same day to 24 hours",
    note: null,
  },
  {
    type: "Drawback Shipping Bill",
    form: "SB-2",
    color: "blue",
    when: "Claiming Duty Drawback — customs duty paid on imported inputs used in manufactured export goods",
    examples: "Textiles, engineering goods, chemicals where imported raw material used",
    keyFields: "Drawback Schedule rates, quantity of exported goods, value declaration",
    time: "Processing: 24–72 hours; refund: 3–8 working days after LEO",
    note: "You cannot claim IGST refund and Duty Drawback on the same goods (dual benefit not allowed).",
  },
  {
    type: "DEEC / Advance Authorisation",
    form: "SB-3",
    color: "purple",
    when: "Exporting against Advance Authorisation (AA) or DFIA where duty-free imported inputs are used",
    examples: "Export houses, manufacturer-exporters with DGFT AA licences",
    keyFields: "AA licence number, port of import, input-output norms",
    time: "Processing: 24–48 hours",
    note: "Customs compares the AA licence with actual exports and closes the licence on DGFT portal.",
  },
  {
    type: "DEPB Shipping Bill",
    form: "SB-4",
    color: "slate",
    when: "DEPB (Duty Entitlement Passbook) scheme — largely discontinued post-GST. Legacy use only",
    examples: "Rare — check with your CHA if you have legacy DEPB credits",
    keyFields: "DEPB rate, FOB value",
    time: "Legacy processing",
    note: "DEPB scheme discontinued. Most exporters now use RoDTEP or Drawback instead.",
  },
  {
    type: "Re-export Shipping Bill",
    form: "SB-5",
    color: "amber",
    when: "Re-exporting imported goods in the same or repaired condition",
    examples: "Warranty replacement goods, goods imported for job work then re-exported",
    keyFields: "Original BE (Bill of Entry) number, duty originally paid, proof of re-export",
    time: "Processing: 24–48 hours",
    note: "Enables customs duty refund on the original import (via re-import/re-export provisions).",
  },
  {
    type: "RoDTEP Shipping Bill",
    form: "SB-1 with RoDTEP declaration",
    color: "teal",
    when: "Claiming RoDTEP (Remission of Duties and Taxes on Exported Products) credits",
    examples: "Most manufacturing exporters — garments, auto parts, chemicals, etc.",
    keyFields: "HSN code, RoDTEP rate applicable, FOB value declared",
    time: "Credit issued within 2–3 working days post LEO to ICEGATE account",
    note: "Cannot be combined with AA/DFIA scheme on the same goods.",
  },
];

const adCodeSteps = [
  {
    port: "JNPT / Nhava Sheva",
    bankBranch: "Any authorised dealer (AD) bank branch that handles foreign exchange — typically your current account bank",
    steps: [
      "Visit your bank branch with your IEC copy, PAN, GST certificate, and current account details",
      "Fill Form AD (provided by the bank) — states the port for which AD Code is being registered",
      "Bank assigns a unique 14-digit AD Code for your IEC at JNPT",
      "Bank sends the AD Code letter to Nhava Sheva Customs (JNPT) directly, or you carry it",
      "Submit AD Code registration application to the Principal Commissioner, JNPT Custom House",
      "Customs enters AD Code in their system — typically takes 3–5 working days",
      "After confirmation, your CHA can start filing Shipping Bills with your AD Code at JNPT",
    ],
    portal: "https://www.jawaharcustoms.gov.in",
    portalLabel: "JNPT Custom House Portal",
    documents: ["IEC certificate", "PAN card", "GST registration certificate", "Bank current account proof", "Cancelled cheque", "AD Code letter from bank"],
  },
  {
    port: "RGIA Hyderabad (Air Cargo)",
    bankBranch: "Any AD bank with Hyderabad branch — ICICI, HDFC, SBI all registered",
    steps: [
      "Obtain AD Code letter from your bank mentioning 'Rajiv Gandhi International Airport Air Cargo Complex, Hyderabad'",
      "Submit application to Air Customs, RGIA, Shamshabad along with all documents",
      "Customs officer verifies IEC, PAN, and bank details against DGFT portal",
      "AD Code registered in Customs EDI system — takes 2–4 working days",
      "Confirmation letter issued by Customs — keep this on file for every future shipment",
      "First Shipping Bill at RGIA must reference the registered AD Code",
    ],
    portal: "https://icegate.gov.in",
    portalLabel: "ICEGATE Portal",
    documents: ["IEC certificate", "PAN card", "GST registration certificate", "Bank AD Code letter (mentioning RGIA)", "GSTIN and address proof"],
  },
  {
    port: "Chennai Port",
    bankBranch: "Any AD category-I bank — register at your nearest AD bank with Chennai Port mentioned",
    steps: [
      "Get AD Code letter from bank specifying 'Chennai Customs' as the port",
      "Apply at Chennai Custom House, Rajaji Salai",
      "Submit self-attested copies of all documents",
      "Customs creates your exporter profile in ICES (Indian Customs EDI System)",
      "AD Code approval email / letter sent within 3–5 days",
      "CHAs at Chennai can now file Shipping Bills under your AD Code",
    ],
    portal: "https://chennaicustoms.gov.in",
    portalLabel: "Chennai Customs Portal",
    documents: ["IEC certificate", "PAN", "GST certificate", "AD Code letter from bank (mentioning Chennai)", "Company registration / MOA"],
  },
];

export default function IcegateGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#F59E0B] text-sm font-medium mb-3">
            <Shield className="h-4 w-4" />
            <span>ICEGATE & AD Code Guide</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            ICEGATE — India's export customs system explained
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            What ICEGATE is, how to get login access, what an AD Code is and why every Indian exporter needs one — with step-by-step registration guides for JNPT, Hyderabad, and Chennai.
          </p>
        </div>
      </section>

      <SectionWrapper>
        {/* What is ICEGATE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="text-3xl font-bold text-[#0A1628] mb-4">What is ICEGATE?</h2>
            <p className="text-[#475569] mb-4">
              <strong>ICEGATE</strong> stands for <em>Indian Customs EDI Gateway</em>. It is the central IT platform operated by the Central Board of Indirect Taxes and Customs (CBIC) through which all import/export documentation flows between exporters, customs brokers (CHAs), shipping lines, and customs officers.
            </p>
            <p className="text-[#475569] mb-4">
              Think of ICEGATE as the digital customs office of India. Every Shipping Bill, Bill of Entry, and customs-related certificate passes through this system.
            </p>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 space-y-3">
              <p className="font-bold text-[#0A1628] text-sm">What ICEGATE handles:</p>
              {[
                "Electronic filing of Shipping Bills (export) and Bills of Entry (import)",
                "E-Sanchit — electronic upload of supporting documents (invoice, packing list, certificates)",
                "LEO (Let Export Order) issuance after customs examination",
                "EGM (Export General Manifest) — filed by the shipping line after vessel departs",
                "Duty refund tracking (IGST refund, RoDTEP credits, Drawback)",
                "ICEGATE registered exporter profile — links your IEC, PAN, AD Code",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-[#475569]">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0A1628] mb-4">How to create an ICEGATE login</h2>
            <ol className="space-y-4">
              {[
                { n: "1", t: "Go to icegate.gov.in", d: "Click 'Register' on the top right. Select 'Exporter/Importer' as your user type." },
                { n: "2", t: "Enter your IEC", d: "Your 10-digit IEC is the primary identifier. ICEGATE fetches your basic details from DGFT records automatically." },
                { n: "3", t: "Verify with OTP", d: "OTP is sent to the mobile number and email registered with your IEC on the DGFT portal. Ensure they are updated." },
                { n: "4", t: "Set password and complete profile", d: "Upload DSC (Digital Signature Certificate) if you plan to sign documents electronically. CHAs can also sign on your behalf." },
                { n: "5", t: "Link your AD Code", d: "Once your AD Code is registered at the custom house, it automatically links to your ICEGATE profile within 24–48 hours." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#185FA5] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A1628] text-sm">{s.t}</p>
                    <p className="text-sm text-[#475569]">{s.d}</p>
                  </div>
                </div>
              ))}
            </ol>
            <div className="mt-5">
              <a
                href="https://icegate.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#185FA5] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#1a6dbf] transition-colors"
              >
                Go to ICEGATE
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* What is AD Code */}
        <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-2xl p-6 lg:p-8 mb-14">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-3">What is an AD Code?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-[#475569] mb-4">
                <strong>AD Code</strong> (Authorised Dealer Code) is a 14-digit number assigned by your bank to your export account. It links your IEC to your bank account in the customs system so that:
              </p>
              <ul className="space-y-2 text-sm text-[#475569]">
                <li className="flex items-start gap-2"><span className="text-[#185FA5] font-bold">→</span> Foreign inward remittances (payment from overseas buyer) are matched to your shipment</li>
                <li className="flex items-start gap-2"><span className="text-[#185FA5] font-bold">→</span> IGST refunds and RoDTEP credits are sent to the correct bank account</li>
                <li className="flex items-start gap-2"><span className="text-[#185FA5] font-bold">→</span> Duty Drawback is credited to the correct bank account</li>
                <li className="flex items-start gap-2"><span className="text-[#185FA5] font-bold">→</span> BRC (Bank Realisation Certificate) is issued once buyer pays</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-5">
              <p className="font-bold text-[#0A1628] mb-3 text-sm">Key facts about AD Code:</p>
              <div className="space-y-3 text-sm text-[#475569]">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-[#185FA5] flex-shrink-0 mt-0.5" />
                  <span><strong>Port-specific:</strong> One AD Code per port per bank account. Exporting from 3 ports = 3 AD Code registrations.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-[#185FA5] flex-shrink-0 mt-0.5" />
                  <span><strong>Bank-specific:</strong> If you switch banks, you need a new AD Code at each port.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-[#185FA5] flex-shrink-0 mt-0.5" />
                  <span><strong>One-time:</strong> Register once per port, valid forever (until you change bank or account).</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-[#185FA5] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory:</strong> No Shipping Bill can be filed without a valid AD Code registered at that port.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>New exporter tip:</strong> Register your AD Code before Ambeza files your first Shipping Bill — the process takes 3–7 working days. Ambeza will guide you through this as part of our first-shipment onboarding.
            </p>
          </div>
        </div>

        {/* AD Code registration per port */}
        <h2 className="text-3xl font-bold text-[#0A1628] mb-3">AD Code registration — port by port</h2>
        <p className="text-[#475569] mb-8">Step-by-step guide for the three most common export ports used by Ambeza customers.</p>

        <div className="space-y-6 mb-14">
          {adCodeSteps.map((p, idx) => (
            <div key={p.port} className="border border-[#E2E8F0] rounded-2xl overflow-hidden">
              <div className="bg-[#0A1628] text-white px-6 py-4 flex items-center justify-between">
                <h3 className="font-bold text-lg">{p.port}</h3>
                <a
                  href={p.portal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F59E0B] text-sm hover:underline flex items-center gap-1"
                >
                  {p.portalLabel}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div className="p-6 bg-white">
                <p className="text-sm text-[#475569] mb-4">
                  <strong>Bank branch:</strong> {p.bankBranch}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <p className="text-xs font-bold text-[#185FA5] uppercase tracking-wider mb-3">Steps</p>
                    <ol className="space-y-3">
                      {p.steps.map((s, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#475569]">
                          <span className="w-6 h-6 rounded-full bg-[#185FA5]/10 text-[#185FA5] text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {i + 1}
                          </span>
                          {s}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#185FA5] uppercase tracking-wider mb-3">Documents needed</p>
                    <ul className="space-y-1.5">
                      {p.documents.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs text-[#475569]">
                          <FileText className="h-3.5 w-3.5 text-[#94A3B8] flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Bill types */}
        <h2 className="text-3xl font-bold text-[#0A1628] mb-3">Shipping Bill types — all 6 explained</h2>
        <p className="text-[#475569] mb-6">
          Every export from India requires a Shipping Bill filed on ICEGATE. There are 6 types. Your CHA selects the right one based on whether you are claiming incentives.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] mb-6">
          <table className="w-full text-sm">
            <thead className="bg-[#0A1628] text-white">
              <tr>
                <th className="text-left px-5 py-3 font-semibold">Type</th>
                <th className="text-left px-5 py-3 font-semibold">Form</th>
                <th className="text-left px-5 py-3 font-semibold">When to use</th>
                <th className="text-left px-5 py-3 font-semibold">Processing time</th>
              </tr>
            </thead>
            <tbody>
              {shippingBillTypes.map((sb, i) => (
                <tr key={sb.type} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                  <td className="px-5 py-4 font-semibold text-[#0A1628] text-sm">{sb.type}</td>
                  <td className="px-5 py-4 font-mono text-xs text-[#185FA5]">{sb.form}</td>
                  <td className="px-5 py-4 text-[#475569] text-xs">{sb.when}</td>
                  <td className="px-5 py-4 text-[#475569] text-xs">{sb.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed Shipping Bill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {shippingBillTypes.map((sb) => (
            <div key={sb.type} className="border border-[#E2E8F0] rounded-xl p-5 bg-white">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-bold text-[#0A1628] text-sm">{sb.type}</h3>
                <span className="font-mono text-xs bg-slate-100 text-[#475569] px-2 py-0.5 rounded-full flex-shrink-0">{sb.form}</span>
              </div>
              <p className="text-xs text-[#475569] mb-2"><strong>Use when:</strong> {sb.when}</p>
              <p className="text-xs text-[#475569] mb-2"><strong>Examples:</strong> {sb.examples}</p>
              <p className="text-xs text-[#475569] mb-2"><strong>Key fields:</strong> {sb.keyFields}</p>
              {sb.note && (
                <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  <p className="text-xs text-amber-800">{sb.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Helpful external links */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-[#0A1628] mb-4">Official government portals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: "ICEGATE — file Shipping Bills", url: "https://icegate.gov.in", desc: "File SBs, track refunds, view LEO status" },
              { label: "DGFT — IEC registration", url: "https://dgft.gov.in", desc: "Import Export Code, FTP licences, RoDTEP rates" },
              { label: "GST portal — LUT / IGST", url: "https://gst.gov.in", desc: "File LUT for zero-rated exports, track IGST refunds" },
              { label: "CBIC — duty rates", url: "https://cbic.gov.in", desc: "Customs tariff, drawback schedule notifications" },
              { label: "ECCS — JNPT customs", url: "https://jawaharcustoms.gov.in", desc: "JNPT-specific customs circulars and port orders" },
              { label: "Sevottam — grievances", url: "https://sevottam.gov.in", desc: "Escalate customs grievances online" },
            ].map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white border border-[#E2E8F0] rounded-xl p-4 hover:border-[#185FA5]/50 transition-colors group"
              >
                <ExternalLink className="h-4 w-4 text-[#185FA5] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[#0A1628] group-hover:text-[#185FA5] transition-colors">{link.label}</p>
                  <p className="text-xs text-[#94A3B8]">{link.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Related guides */}
        <div className="flex flex-wrap gap-3">
          <Link href="/port-selector" className="inline-flex items-center gap-2 bg-[#185FA5]/10 text-[#185FA5] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#185FA5]/20 transition-colors">
            Port Selector
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/documents-guide" className="inline-flex items-center gap-2 bg-[#185FA5]/10 text-[#185FA5] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#185FA5]/20 transition-colors">
            Documents Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/rodtep-drawback" className="inline-flex items-center gap-2 bg-[#185FA5]/10 text-[#185FA5] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#185FA5]/20 transition-colors">
            RoDTEP & Drawback
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/port-handover" className="inline-flex items-center gap-2 bg-[#185FA5]/10 text-[#185FA5] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#185FA5]/20 transition-colors">
            Port Handover Flow
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need help with ICEGATE registration or AD Code?</h2>
              <p className="text-slate-300 mb-4">
                Ambeza handles the entire ICEGATE setup and AD Code registration as part of our onboarding. You don't need to interact with customs directly.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm mb-6">
                {["AD Code registration at any Indian port", "ICEGATE account setup and document upload (E-Sanchit)", "Shipping Bill filing and LEO tracking", "IGST refund and RoDTEP credit monitoring"].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/918179688632?text=Hi, I need help with ICEGATE and AD Code registration"
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
