"use client";

import { useState } from "react";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import QuoteForm from "@/components/QuoteForm";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Building2,
  Globe,
  Landmark,
  Info,
  ChevronRight,
} from "lucide-react";

const closureChecklist = [
  { id: "goods", label: "Goods exported", detail: "Cargo physically left India and EGM filed by shipping line / airline" },
  { id: "sb", label: "Shipping Bill filed", detail: "Filed on ICEGATE by CHA — LEO obtained from customs" },
  { id: "payment", label: "Foreign payment received", detail: "USD / EUR / GBP received in your current account from the overseas buyer" },
  { id: "irm", label: "IRM uploaded by bank", detail: "Inward Remittance Message uploaded by your AD bank to DGFT portal" },
  { id: "ebrc", label: "eBRC generated on DGFT", detail: "You (or Ambeza) map the IRM to your Shipping Bill on dgft.gov.in and self-certify to generate the eBRC" },
  { id: "docs", label: "Documents uploaded to bank", detail: "eBRC + Shipping Bill + Invoice uploaded to your Bank Trade Portal" },
  { id: "edpms", label: "EDPMS / export entry closed", detail: "Bank updates RBI records — GR / SDF / EDPMS entry marked closed. Export is now legally settled." },
];

export default function PostRemittancePage() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    const next = new Set(checked);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setChecked(next);
  };

  const allDone = checked.size === closureChecklist.length;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F59E0B] font-semibold text-sm uppercase tracking-wider mb-3">
            Post-Remittance Compliance
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
            Received export payment? Your export may still be open.
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-6">
            Receiving payment from your overseas buyer does not automatically complete export compliance requirements in India.
          </p>
          <div className="inline-flex items-center gap-3 bg-red-600/20 border border-red-500/50 rounded-xl px-5 py-3">
            <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0" />
            <p className="text-red-300 font-semibold text-sm">
              Money in your bank account does not mean your export is legally settled.
            </p>
          </div>
        </div>
      </section>

      {/* Misconception vs Reality */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Misconception */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-5">1. What most exporters think</h2>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 space-y-4">
              {[
                { label: "Goods shipped", ok: true },
                { label: "Payment received", ok: true },
                { label: "Export completed ✓", ok: true },
              ].map(({ label }) => (
                <div key={label} className="flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-xl px-4 py-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-[#0A1628]">{label}</span>
                </div>
              ))}
              <p className="text-xs text-[#94A3B8] text-center pt-1">What exporters believe</p>
            </div>
          </div>

          {/* Reality */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-5">The reality</h2>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 space-y-4">
              {[
                { label: "Goods shipped", done: true },
                { label: "Payment received", done: true },
                { label: "eBRC generation pending", done: false },
                { label: "Bank closure pending", done: false },
                { label: "Export still open", done: false, warning: true },
              ].map(({ label, done, warning }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${
                    warning
                      ? "bg-red-100 border-red-400"
                      : done
                      ? "bg-white border-[#E2E8F0]"
                      : "bg-amber-50 border-amber-200"
                  }`}
                >
                  {warning ? (
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  ) : done ? (
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  )}
                  <span className={`text-sm font-medium ${warning ? "text-red-800" : done ? "text-[#0A1628]" : "text-amber-800"}`}>
                    {label}
                  </span>
                </div>
              ))}
              <p className="text-xs text-red-500 text-center pt-1">What is actually happening</p>
            </div>
          </div>
        </div>

        {/* Export Lifecycle */}
        <h2 className="text-3xl font-bold text-[#0A1628] mb-3">2. Export lifecycle — where most exporters stop</h2>
        <p className="text-[#475569] mb-8">There are 6 steps to fully settle an export. Most exporters stop at step 3 — the moment payment hits their account — and never complete the last 3 steps.</p>

        <div className="overflow-x-auto pb-2 mb-4">
          <div className="flex items-start gap-2 min-w-[700px]">
            {[
              { n: 1, label: "Goods Exported", color: "blue", done: true },
              { n: 2, label: "Shipping Bill Filed", color: "blue", done: true },
              { n: 3, label: "Foreign Payment Received", color: "orange", done: true, stop: true },
              { n: 4, label: "eBRC Generated", color: "slate", done: false },
              { n: 5, label: "Bank Export Record Closed", color: "slate", done: false },
              { n: 6, label: "Export Fully Settled", color: "green", done: false },
            ].map((step, i) => (
              <div key={step.n} className="flex items-center gap-2 flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
                      step.color === "blue"
                        ? "bg-[#185FA5]"
                        : step.color === "orange"
                        ? "bg-[#F59E0B]"
                        : step.color === "green"
                        ? "bg-green-500"
                        : "bg-slate-300"
                    }`}
                  >
                    {step.n}
                  </div>
                  <p className="text-xs text-center text-[#475569] mt-2 font-medium leading-tight max-w-[90px]">{step.label}</p>
                  {step.stop && (
                    <span className="mt-1 text-[10px] bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                      Most stop here
                    </span>
                  )}
                </div>
                {i < 5 && (
                  <ArrowRight className="h-5 w-5 text-[#CBD5E1] flex-shrink-0 -mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-16">
          <p className="text-sm text-red-800 font-medium flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 flex-shrink-0" />
            Steps 4, 5, and 6 are regulatory — not commercial. Payment received ≠ export closed. You must complete steps 4–6 to legally settle the export with Indian authorities.
          </p>
        </div>

        {/* Why payment alone isn't enough */}
        <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-2xl p-6 lg:p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-4">3. Why payment alone is not enough</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-[#475569] mb-4">
                Receiving payment completes the <strong>commercial transaction</strong> with your buyer, but it does not automatically complete the <strong>regulatory transaction</strong> with Indian authorities.
              </p>
              <p className="text-[#475569]">
                You must complete the mandatory <strong>post-remittance steps</strong> on DGFT and with your bank to legally close the export. Until then, the export entry remains open in RBI / bank records — and you cannot claim RoDTEP, Duty Drawback, or IGST refunds.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 space-y-3">
              <p className="font-bold text-[#0A1628] text-sm">Two separate transactions happen when you export:</p>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0A1628]">Commercial transaction</p>
                  <p className="text-xs text-[#475569]">Goods shipped + Payment received. Done when money arrives.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0A1628]">Regulatory transaction</p>
                  <p className="text-xs text-[#475569]">eBRC generated on DGFT + Bank export entry closed with RBI. Requires your action even after payment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-step post-remittance process */}
        <h2 className="text-3xl font-bold text-[#0A1628] mb-3">4. The two-step post-remittance process</h2>
        <p className="text-[#475569] mb-8">After your buyer pays, two things must happen — in order. Ambeza handles both for you.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Step 1: eBRC */}
          <div className="border-2 border-[#185FA5] rounded-2xl overflow-hidden">
            <div className="bg-[#185FA5] text-white px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-[#185FA5] font-bold flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <p className="font-bold">Generate eBRC on DGFT</p>
                <p className="text-blue-200 text-xs">Electronic Bank Realisation Certificate</p>
              </div>
            </div>
            <div className="p-6">
              <ol className="space-y-4 mb-5">
                {[
                  "Bank uploads IRM (Inward Remittance Message) to DGFT portal",
                  "You map the IRM to your Shipping Bill and Invoice on dgft.gov.in",
                  "Self-certify the mapping and generate the eBRC",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#475569]">
                    <span className="w-6 h-6 rounded-full bg-[#185FA5]/10 text-[#185FA5] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <div className="bg-[#185FA5]/5 rounded-xl p-4">
                <p className="text-xs font-bold text-[#185FA5] uppercase tracking-wider mb-2">Why eBRC matters</p>
                <ul className="space-y-1">
                  {["RoDTEP benefits", "Duty Drawback", "Advance Authorisation closure", "GST Refunds"].map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-[#475569]">
                      <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-3">
                  None of the above incentives can be claimed without a valid eBRC.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Bank closure */}
          <div className="border-2 border-[#0A1628] rounded-2xl overflow-hidden">
            <div className="bg-[#0A1628] text-white px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-[#0A1628] font-bold flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <p className="font-bold">Close Export Record with Bank</p>
                <p className="text-slate-300 text-xs">GR / SDF / EDPMS closure</p>
              </div>
            </div>
            <div className="p-6">
              <ol className="space-y-4 mb-5">
                {[
                  "Upload eBRC and supporting documents (Shipping Bill, Invoice)",
                  "Submit documents on your Bank Trade Portal",
                  "Request closure of the GR / SDF / EDPMS export entry",
                  "Bank verifies and updates RBI records — entry marked closed",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#475569]">
                    <span className="w-6 h-6 rounded-full bg-[#0A1628]/10 text-[#0A1628] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <div className="bg-[#F8FAFC] rounded-xl p-4">
                <p className="text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-2">What GR / SDF / EDPMS means</p>
                <div className="space-y-2 text-xs text-[#475569]">
                  <p><strong>GR form:</strong> Declaration submitted to bank when export exceeds USD 25,000</p>
                  <p><strong>SDF:</strong> Statutory Declaration Form — replaces GR for EDPMS-registered exporters</p>
                  <p><strong>EDPMS:</strong> Export Data Processing and Monitoring System — RBI's real-time export tracking system</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-life example */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 lg:p-8 mb-16">
          <h2 className="text-2xl font-bold text-amber-900 mb-5">5. A real-life example of what goes wrong</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-bold text-amber-800 uppercase tracking-wider mb-3">The story</p>
              <ol className="space-y-3">
                {[
                  "Exporter ships goods worth USD 10,000",
                  "Payment arrives in the bank account",
                  "Exporter assumes the process is complete",
                  "Months later — issues start arising",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-amber-800">
                    <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="text-sm font-bold text-red-800 uppercase tracking-wider mb-3">What happens next</p>
              <ul className="space-y-2 mb-4">
                {[
                  "RoDTEP benefits cannot be claimed",
                  "GST refund application is delayed",
                  "Bank reports export entry still open",
                  "RBI compliance notice issued",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-red-800">
                    <XCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-red-500" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="bg-red-100 border border-red-300 rounded-xl p-3">
                <p className="text-xs text-red-800 font-semibold">
                  Why? eBRC generation and bank export entry closure were never completed. Two regulatory steps were skipped.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Consequences */}
        <h2 className="text-3xl font-bold text-[#0A1628] mb-3">6. Consequences of skipping post-remittance steps</h2>
        <p className="text-[#475569] mb-8">Leaving your export entry open is not just an administrative nuisance — it has real financial and legal consequences.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {[
            {
              title: "Delayed RoDTEP Benefits",
              desc: "RoDTEP credits cannot be issued without a closed eBRC. You lose or delay free government incentives you are entitled to.",
              color: "red",
            },
            {
              title: "GST Refund Delays",
              desc: "A valid eBRC is mandatory to process IGST refunds. Without it, your GST refund application stalls — tying up working capital.",
              color: "red",
            },
            {
              title: "Open Export Entries",
              desc: "Outstanding EDPMS entries remain in bank and RBI records. After 9 months, banks are required to report unresolved entries to RBI.",
              color: "amber",
            },
            {
              title: "Additional Compliance Queries",
              desc: "Open entries trigger queries from your bank's compliance team — more documentation, more time, more back-and-forth.",
              color: "amber",
            },
            {
              title: "RBI / FEMA Compliance Risks",
              desc: "Persistent open entries can attract FEMA (Foreign Exchange Management Act) notices and may result in penalties or restrictions on future exports.",
              color: "red",
            },
            {
              title: "Duty Drawback Stuck",
              desc: "Duty Drawback payments require BRC / eBRC as proof of payment realisation. No eBRC = no drawback disbursement.",
              color: "amber",
            },
          ].map(({ title, desc, color }) => (
            <div
              key={title}
              className={`rounded-xl p-5 border-l-4 ${
                color === "red"
                  ? "bg-red-50 border-l-red-500 border border-red-100"
                  : "bg-amber-50 border-l-amber-500 border border-amber-100"
              }`}
            >
              <p className={`font-bold text-sm mb-2 ${color === "red" ? "text-red-900" : "text-amber-900"}`}>{title}</p>
              <p className={`text-xs leading-relaxed ${color === "red" ? "text-red-800" : "text-amber-800"}`}>{desc}</p>
            </div>
          ))}
        </div>

        {/* DGFT vs ICEGATE vs Bank */}
        <h2 className="text-3xl font-bold text-[#0A1628] mb-3">7. DGFT vs ICEGATE vs Bank — who does what?</h2>
        <p className="text-[#475569] mb-8">Three separate systems are involved in a complete export. Confusing these is the #1 reason exporters leave entries open.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            {
              name: "ICEGATE",
              subtitle: "(Customs)",
              focus: "Exporting Goods",
              focusColor: "blue",
              icon: Globe,
              url: "https://icegate.gov.in",
              items: ["Shipping Bills", "Customs Clearance", "LEO issuance", "Export Filing"],
              desc: "Handles the physical export from India — the movement of goods through customs.",
            },
            {
              name: "DGFT",
              subtitle: "(Government)",
              focus: "Proving Payment",
              focusColor: "green",
              icon: Building2,
              url: "https://dgft.gov.in",
              items: ["eBRC Generation", "IRM Mapping", "Incentive Claims", "Advance Authorisation"],
              desc: "Handles proof that you received foreign payment and links it to your export — enabling incentive claims.",
            },
            {
              name: "Bank Trade Portal",
              subtitle: "(Your Bank)",
              focus: "Closing Compliance",
              focusColor: "purple",
              icon: Landmark,
              url: "#",
              items: ["Export Realisation Reporting", "RBI Compliance (EDPMS)", "GR / SDF Closure", "Export Entry Closure"],
              desc: "Your bank files the export realisation with RBI — legally closing the export transaction.",
            },
          ].map(({ name, subtitle, focus, focusColor, icon: Icon, url, items, desc }) => (
            <div key={name} className="border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white">
              <div
                className={`px-5 py-4 text-white ${
                  focusColor === "blue"
                    ? "bg-[#185FA5]"
                    : focusColor === "green"
                    ? "bg-[#0F766E]"
                    : "bg-[#6D28D9]"
                }`}
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <Icon className="h-5 w-5" />
                  <p className="font-bold">{name}</p>
                </div>
                <p className="text-xs opacity-80">{subtitle}</p>
              </div>
              <div className="p-5">
                <p className="text-xs text-[#475569] mb-4 leading-relaxed">{desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#475569]">
                      <ChevronRight className="h-3.5 w-3.5 text-[#94A3B8] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  className={`text-xs font-bold px-3 py-1.5 rounded-full text-center ${
                    focusColor === "blue"
                      ? "bg-blue-100 text-blue-800"
                      : focusColor === "green"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  Focus: {focus}
                </div>
                {url !== "#" && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-xs text-[#185FA5] hover:underline flex items-center gap-1"
                  >
                    Visit portal <ArrowRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive closure checklist */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-2 text-center">8. Export closure checklist</h2>
          <p className="text-[#475569] text-center mb-8">
            All 7 steps must be complete for your export to be fully settled. Tick them off as you go.
          </p>

          {checked.size > 0 && (
            <div className={`text-center mb-4 font-semibold text-sm ${allDone ? "text-green-600" : "text-[#185FA5]"}`}>
              {allDone
                ? "✓ All steps complete — export fully settled!"
                : `${checked.size} of ${closureChecklist.length} steps done`}
            </div>
          )}

          <div className="space-y-3 mb-8">
            {closureChecklist.map(({ id, label, detail }) => (
              <div
                key={id}
                onClick={() => toggle(id)}
                className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                  checked.has(id)
                    ? "border-green-400 bg-green-50"
                    : "border-[#E2E8F0] bg-white hover:border-[#185FA5]/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors border-2 ${
                      checked.has(id)
                        ? "bg-green-500 border-green-500"
                        : "border-[#CBD5E1] bg-white"
                    }`}
                  >
                    {checked.has(id) && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${checked.has(id) ? "text-green-800 line-through" : "text-[#0A1628]"}`}>
                      {label}
                    </p>
                    <p className="text-xs text-[#475569] mt-0.5">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <p className="text-sm text-red-800 font-semibold flex items-center justify-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              If any step is incomplete, your export may remain open — and you risk losing incentives and attracting RBI notices.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* What Ambeza handles */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-3">9. Need help closing your export transactions?</h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              Ambeza manages the entire post-remittance process — so your exports are always fully settled, your incentives claimed, and your bank records clean.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {[
              { label: "eBRC generation & IRM mapping", icon: CheckCircle },
              { label: "Bank Trade Portal submissions", icon: CheckCircle },
              { label: "EDPMS / GR-SDF closure assistance", icon: CheckCircle },
              { label: "RoDTEP & Duty Drawback follow-up", icon: CheckCircle },
              { label: "GST refund support", icon: CheckCircle },
              { label: "Export compliance audit", icon: CheckCircle },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-xl px-4 py-3">
                <Icon className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-[#0A1628] font-medium">{label}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#185FA5] text-white rounded-2xl p-6 max-w-2xl mx-auto text-center">
            <p className="font-bold text-xl mb-2">Book a free compliance review</p>
            <p className="text-blue-200 text-sm mb-5">
              We audit your open export entries and tell you exactly what needs to be done — no obligation.
            </p>
            <a
              href="https://wa.me/919999999999?text=Hi, I need help with post-remittance compliance and export entry closure"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#20bf5b] transition-colors"
            >
              WhatsApp for a free review
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="bg-[#0A1628] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-xs flex items-center justify-center gap-2">
            <Info className="h-3.5 w-3.5" />
            ICEGATE = Exporting Goods &nbsp;|&nbsp; DGFT = Proving Payment &nbsp;|&nbsp; Bank = Closing Compliance
          </p>
          <p className="text-slate-500 text-xs mt-1">
            Completing these steps ensures you stay compliant, unlock your incentives, and avoid future delays or penalties.
          </p>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Don't leave your exports open</h2>
              <p className="text-slate-300 mb-6">
                Every open export entry is a compliance risk. Contact Ambeza — we close them for you and make sure every incentive you are entitled to is claimed.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/rodtep-drawback" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                  RoDTEP & Drawback Guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/icegate-guide" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                  ICEGATE Guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
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
