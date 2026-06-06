"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle, DollarSign } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const schemes = [
  {
    name: "RoDTEP",
    fullName: "Remission of Duties and Taxes on Exported Products",
    what: "Refund of embedded taxes and levies paid on inputs, fuel, and utilities used in production — taxes that are not refunded under any other scheme.",
    howMuch: "0.5% to 4.3% of FOB value (depends on your specific 8-digit HSN)",
    trigger: "Shipping Bill (RoDTEP field must be filled) + EGM filing",
    timeline: "Credits appear in ICEGATE account within 45–60 days of EGM",
    form: "Transferable ICEGATE scrip (can be used to pay Customs duty, or sold to importers)",
    eligible: "Almost all manufactured goods. Check the schedule on CBIC website.",
    notEligible: "SEZ units, EOU units (have separate schemes), exported against advance authorisation",
  },
  {
    name: "Duty Drawback",
    fullName: "Customs Duty Drawback (All Industry Rate / Brand Rate)",
    what: "Refund of Customs duty paid on imported inputs that were used to manufacture the exported goods. Two types: AIR (All Industry Rate — standard schedule) and Brand Rate (for higher refunds if actual duty is more).",
    howMuch: "0.15% to 7.8% of FOB value. Specific to 4-digit Customs Tariff heading.",
    trigger: "Shipping Bill (DBK field) + EGM + Bank Realisation Certificate (BRC/FIRC)",
    timeline: "30–45 days to your bank account (direct credit)",
    form: "Direct bank credit",
    eligible: "All exports with documented customs duty on imported inputs",
    notEligible: "Goods made entirely from Indian-origin inputs with no imported components",
  },
  {
    name: "IGST Refund",
    fullName: "Integrated GST Refund on Exports",
    what: "If you paid IGST on domestic inputs and exported on payment of IGST (or under Bond/LUT), you get a refund of the IGST paid.",
    howMuch: "Full IGST paid on exported goods and inputs",
    trigger: "GSTR-1 filing + Shipping Bill IGST details + bank match",
    timeline: "30–60 days after filing",
    form: "Direct bank credit",
    eligible: "Exporters who paid IGST on goods and inputs",
    notEligible: "Exporters who exported under LUT (they pay zero IGST upfront, so no refund needed)",
  },
];

const comparisonRows = [
  { factor: "What you get back", rodtep: "Embedded taxes (fuel, electricity, local levies)", drawback: "Customs duty on imported inputs", igst: "IGST paid on goods and inputs" },
  { factor: "How much", rodtep: "0.5%–4.3% of FOB", drawback: "0.15%–7.8% of FOB", igst: "100% of IGST paid" },
  { factor: "Trigger document", rodtep: "Shipping Bill + EGM", drawback: "Shipping Bill + EGM + BRC", igst: "GSTR-1 + Shipping Bill" },
  { factor: "Timeline", rodtep: "45–60 days", drawback: "30–45 days", igst: "30–60 days" },
  { factor: "Payment form", rodtep: "ICEGATE scrip", drawback: "Bank credit", igst: "Bank credit" },
  { factor: "Can be combined?", rodtep: "Cannot combine with full Drawback", drawback: "Cannot combine with RoDTEP (for same rate)", igst: "Can combine with RoDTEP or Drawback" },
];

const rodtepRates: Record<string, { min: number; max: number }> = {
  "Ch 09 — Spices": { min: 0.8, max: 2.5 },
  "Ch 10 — Cereals/Rice": { min: 0.5, max: 1.8 },
  "Ch 30 — Pharma": { min: 1.0, max: 3.5 },
  "Ch 50-63 — Textiles": { min: 1.0, max: 4.3 },
  "Ch 71 — Gems/Jewellery": { min: 0.5, max: 1.0 },
  "Ch 84/85 — Machinery/Electronics": { min: 0.5, max: 2.5 },
  "Ch 87 — Auto Parts": { min: 0.5, max: 2.0 },
  "Other": { min: 0.5, max: 3.0 },
};

export default function RoDTEPDrawbackPage() {
  const [fobValue, setFobValue] = useState<number>(0);
  const [hsnChapter, setHsnChapter] = useState("");

  const rate = hsnChapter ? rodtepRates[hsnChapter] || rodtepRates.Other : null;
  const rodtepMin = rate ? fobValue * (rate.min / 100) : 0;
  const rodtepMax = rate ? fobValue * (rate.max / 100) : 0;

  const drawbackRate = rate ? { min: rate.min * 0.8, max: rate.max * 0.9 } : null;
  const drawbackMin = drawbackRate ? fobValue * (drawbackRate.min / 100) : 0;
  const drawbackMax = drawbackRate ? fobValue * (drawbackRate.max / 100) : 0;

  function fmt(n: number) { return new Intl.NumberFormat("en-IN").format(Math.round(n)); }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Government Refunds</p>
            <h1 className="text-4xl font-bold mb-4">You are entitled to government refunds after every export. Are you claiming them?</h1>
            <p className="text-slate-300 text-lg">RoDTEP and Duty Drawback together can return 1%–8% of your export value back to you. Most Indian exporters either don&apos;t claim, or claim wrong.</p>
          </div>
        </div>
      </section>

      {/* 3 schemes */}
      <SectionWrapper>
        <div className="space-y-8">
          {schemes.map((scheme) => (
            <div key={scheme.name} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-2xl font-bold text-[#0A1628]">{scheme.name}</h2>
                  <p className="text-sm text-[#475569] mt-0.5">{scheme.fullName}</p>
                </div>
                <div className="bg-[#10B981]/10 text-[#10B981] text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap">
                  {scheme.howMuch}
                </div>
              </div>

              <p className="text-[#475569] text-sm leading-relaxed mb-5">{scheme.what}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-[#0A1628]">Trigger document: </span>
                    <span className="text-[#475569]">{scheme.trigger}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0A1628]">Timeline: </span>
                    <span className="text-[#475569]">{scheme.timeline}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0A1628]">Paid as: </span>
                    <span className="text-[#475569]">{scheme.form}</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <div><strong>Eligible:</strong> <span className="text-[#475569]">{scheme.eligible}</span></div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-4 w-4 rounded-full border-2 border-red-400 flex-shrink-0 mt-0.5" />
                    <div><strong>Not eligible:</strong> <span className="text-[#475569]">{scheme.notEligible}</span></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Comparison table */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">RoDTEP vs Drawback vs IGST Refund</h2>
          <p className="text-[#475569]">Side-by-side comparison to help you understand which applies to you.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-2xl shadow-sm border border-[#E2E8F0]">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="text-left px-6 py-4 font-semibold text-[#475569]">Factor</th>
                <th className="px-6 py-4 font-semibold text-[#185FA5] text-left">RoDTEP</th>
                <th className="px-6 py-4 font-semibold text-[#475569] text-left">Duty Drawback</th>
                <th className="px-6 py-4 font-semibold text-[#10B981] text-left">IGST Refund</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(({ factor, rodtep, drawback, igst }) => (
                <tr key={factor} className="border-t border-[#E2E8F0]">
                  <td className="px-6 py-4 font-semibold text-[#0A1628]">{factor}</td>
                  <td className="px-6 py-4 text-[#475569]">{rodtep}</td>
                  <td className="px-6 py-4 text-[#475569]">{drawback}</td>
                  <td className="px-6 py-4 text-[#475569]">{igst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* Warning */}
      <div className="bg-red-50 border-y border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-start gap-3 max-w-3xl mx-auto">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-900">
              <strong>Important:</strong> You CANNOT claim both RoDTEP and the higher rate of Duty Drawback on the same Shipping Bill in most cases. Ambeza will advise which scheme gives you a higher benefit before filing your Shipping Bill — and we pre-select the correct option on ICEGATE.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-2">Estimate your RoDTEP + Drawback refund</h2>
            <p className="text-sm text-[#475569]">Indicative only — actual rates depend on your specific 8-digit HSN and current CBIC notifications.</p>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8">
            <div className="space-y-5 mb-6">
              <div>
                <label className="block text-sm font-semibold text-[#0A1628] mb-2">FOB value of shipment (₹)</label>
                <input
                  type="number"
                  value={fobValue || ""}
                  onChange={(e) => setFobValue(parseFloat(e.target.value) || 0)}
                  placeholder="e.g. 500000"
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0A1628] mb-2">HSN Chapter (select closest)</label>
                <select
                  value={hsnChapter}
                  onChange={(e) => setHsnChapter(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
                >
                  <option value="">Select chapter</option>
                  {Object.keys(rodtepRates).map((ch) => (
                    <option key={ch} value={ch}>{ch}</option>
                  ))}
                </select>
              </div>
            </div>

            {fobValue > 0 && hsnChapter && rate && (
              <div className="space-y-4">
                <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-[#185FA5]" />
                    <span className="font-bold text-[#0A1628]">Estimated RoDTEP refund</span>
                  </div>
                  <p className="text-2xl font-bold text-[#185FA5]">₹{fmt(rodtepMin)} – ₹{fmt(rodtepMax)}</p>
                  <p className="text-xs text-[#475569] mt-1">({rate.min}%–{rate.max}% of FOB)</p>
                </div>
                <div className="bg-[#10B981]/5 border border-[#10B981]/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-[#10B981]" />
                    <span className="font-bold text-[#0A1628]">Estimated Duty Drawback refund</span>
                  </div>
                  <p className="text-2xl font-bold text-[#10B981]">₹{fmt(drawbackMin)} – ₹{fmt(drawbackMax)}</p>
                  <p className="text-xs text-[#475569] mt-1">Indicative AIR rate</p>
                </div>
                <p className="text-xs text-[#475569] text-center">
                  Ambeza will advise which scheme gives you a higher refund before filing.
                </p>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
