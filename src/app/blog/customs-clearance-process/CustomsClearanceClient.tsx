"use client";

import BlogLayout from "../BlogLayout";

const steps = [
  { num: "01", title: "Cargo arrives at CFS / airport terminal", detail: "Your cargo is received at the Container Freight Station (sea) or cargo terminal (air). The CFS gives a cargo receipt — this triggers the export process." },
  { num: "02", title: "CHA prepares the Shipping Bill", detail: "Your CHA (licensed Customs House Agent) prepares the Shipping Bill on ICEGATE using your Commercial Invoice, Packing List, IEC, and product details. This is the master export declaration." },
  { num: "03", title: "Shipping Bill filed on ICEGATE", detail: "The CHA files the Shipping Bill electronically on ICEGATE (India Customs EDI Gateway). The system assigns a Shipping Bill number and the risk engine processes the declaration." },
  { num: "04", title: "Channel assignment", detail: "ICEGATE's risk engine assigns the shipment to one of three channels: Green (auto-clearance), Yellow (document examination), or Red (physical examination)." },
  { num: "05", title: "Examination (if applicable)", detail: "Green channel: no action needed. Yellow: customs officer reviews your documents. Red: customs officer physically examines the cargo — your CHA's representative must be present." },
  { num: "06", title: "Let Export Order (LEO) issued", detail: "Once customs approves the shipment, the LEO is endorsed on the Shipping Bill. Cargo cannot be loaded onto the aircraft or vessel without LEO." },
  { num: "07", title: "Cargo loaded and EGM filed", detail: "Cargo is loaded. After departure, the airline or shipping line files the Export General Manifest (EGM). EGM filing is what triggers your RoDTEP credit." },
];

const channels = [
  {
    name: "Green Channel",
    color: "green",
    time: "30 min – 2 hours",
    what: "System grants automatic LEO. No document review, no physical examination. Cargo cleared for loading immediately after Shipping Bill is processed.",
    trigger: "Clean compliance history, correctly filed Shipping Bill, low-risk product.",
  },
  {
    name: "Yellow Channel",
    color: "amber",
    time: "2 – 6 hours",
    what: "Customs officer reviews the documents — Commercial Invoice, Packing List, licence if applicable. If documents are in order, LEO is granted.",
    trigger: "New exporter, product requiring additional verification, value query.",
  },
  {
    name: "Red Channel",
    color: "red",
    time: "1 – 3 days",
    what: "Physical examination of cargo. Customs officer opens cartons, verifies count, checks product against the declared description. CHA officer must be present throughout.",
    trigger: "Misdeclaration risk, restricted goods, random selection, intelligence input.",
  },
];

export default function CustomsClearanceClient() {
  return (
    <BlogLayout
      title="Export Customs Clearance in India — How the Process Works"
      description="A complete walkthrough of export customs clearance in India — from Shipping Bill filing on ICEGATE to Let Export Order, the three examination channels, and what triggers each one."
      publishDate="June 2025"
      readTime="10 min read"
      category="Customs & Documentation"
      relatedLinks={[
        { href: "/services/customs-clearance", label: "CHA Services" },
        { href: "/new-exporter", label: "New Exporter Guide" },
        { href: "/icegate-guide", label: "ICEGATE Guide" },
        { href: "/blog/iec-code-guide", label: "IEC Code Guide" },
        { href: "/rodtep-drawback", label: "RoDTEP & Duty Drawback" },
      ]}
    >
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          Export customs clearance in India is managed through ICEGATE — the Indian Customs EDI Gateway. Every export shipment,
          whether by air or sea, must go through this process before cargo can be loaded. Understanding how it works helps you avoid
          the most common cause of export delays: document errors that push your shipment into the Red Channel.
        </p>
      </div>

      {/* Step by step */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">The 7-step customs clearance process</h2>
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

      {/* Channels */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">The three examination channels — Green, Yellow, Red</h2>
      <p className="text-[#475569] mb-6">
        ICEGATE&apos;s risk engine assigns every Shipping Bill to one of three channels. The channel determines how quickly your LEO
        is issued and whether your cargo is physically inspected.
      </p>
      <div className="grid grid-cols-1 gap-5 mb-12">
        {channels.map((c) => (
          <div
            key={c.name}
            className={`rounded-xl border-l-4 p-5 ${
              c.color === "green"
                ? "border-l-emerald-500 border border-emerald-100 bg-emerald-50"
                : c.color === "amber"
                ? "border-l-amber-500 border border-amber-100 bg-amber-50"
                : "border-l-red-500 border border-red-100 bg-red-50"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <p className={`font-extrabold text-lg ${c.color === "green" ? "text-emerald-700" : c.color === "amber" ? "text-amber-700" : "text-red-700"}`}>
                {c.name}
              </p>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.color === "green" ? "bg-emerald-100 text-emerald-700" : c.color === "amber" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}>
                ⏱ {c.time}
              </span>
            </div>
            <p className="text-sm text-[#0A1628] mb-3 leading-relaxed">{c.what}</p>
            <p className="text-xs text-[#475569]"><strong>Typically triggered by:</strong> {c.trigger}</p>
          </div>
        ))}
      </div>

      {/* Key documents */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Documents your CHA needs to file the Shipping Bill</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
        {[
          { doc: "Commercial Invoice", note: "Value, description, buyer/seller details, currency, Incoterm" },
          { doc: "Packing List", note: "Carton-wise breakdown of contents, net/gross weight, dimensions" },
          { doc: "IEC Code", note: "Your 10-digit Importer Exporter Code from DGFT" },
          { doc: "AD Code", note: "Bank-registered authorised dealer code, registered at the export port" },
          { doc: "GST Certificate + LUT", note: "To allow zero-rated export without IGST payment" },
          { doc: "Purchase Order / Contract", note: "Sometimes required for high-value or restricted goods" },
          { doc: "Product Licences", note: "RCMC, FSSAI, drug licence — depends on product category" },
          { doc: "Shipping Instructions", note: "Your cargo booking details — carrier, vessel/flight, container number" },
        ].map((d) => (
          <div key={d.doc} className="bg-white border border-[#E2E8F0] rounded-xl p-4">
            <p className="font-bold text-[#185FA5] text-sm mb-1">{d.doc}</p>
            <p className="text-xs text-[#475569]">{d.note}</p>
          </div>
        ))}
      </div>

      {/* CHA vs in-house */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">CHA vs in-house CHA — why it matters</h2>
      <p className="text-[#475569] mb-6">
        Most freight forwarders subcontract Shipping Bill filing to a third-party CHA. This creates a chain of communication
        where errors get introduced and accountability gets diluted.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5">
          <p className="font-bold text-[#0A1628] mb-3">Third-party CHA (subcontracted)</p>
          <ul className="space-y-2 text-sm text-[#475569]">
            {[
              "Freight forwarder passes documents to a separate CHA",
              "CHA files without knowing the full shipment context",
              "Any query from customs goes through two intermediaries",
              "RoDTEP and Drawback selection often not optimised",
              "No single person owns the outcome",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-red-400">✗</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-xl p-5">
          <p className="font-bold text-[#0A1628] mb-3">Ambeza in-house CHA</p>
          <ul className="space-y-2 text-sm text-[#475569]">
            {[
              "Our own licensed CHA team files directly on ICEGATE",
              "CHA knows the full shipment — freight, documents, timeline",
              "Customs queries resolved in minutes, not hours",
              "RoDTEP and Drawback always pre-selected for maximum benefit",
              "One person accountable from pickup to LEO",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-[#10B981]">✓</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* After LEO */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">After LEO — what happens next</h2>
      <p className="text-[#475569] mb-6">
        LEO is not the end of the customs process — there are important post-export steps that affect your refund claims.
      </p>
      <div className="space-y-3 mb-12">
        {[
          { step: "EGM filing", detail: "After the vessel or aircraft departs, the carrier files the Export General Manifest (EGM) with customs. This confirms your cargo actually shipped. EGM is mandatory — without it, your RoDTEP credit is not released." },
          { step: "Shipping Bill goes 'Let Export'", detail: "Once EGM is filed and matched, your Shipping Bill status changes to 'Let Export' on ICEGATE. This is when your RoDTEP scrip and Duty Drawback are triggered." },
          { step: "Collect FIRC", detail: "When your overseas buyer pays, your bank issues a Foreign Inward Remittance Certificate (FIRC). This is required for GST refund, RoDTEP disbursement, and Duty Drawback." },
          { step: "RoDTEP and Drawback disbursed", detail: "RoDTEP credits are issued as scrips on ICEGATE that can be used to pay import duties or transferred to other importers. Duty Drawback is paid directly into your bank account." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 bg-white border border-[#E2E8F0] rounded-xl p-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#185FA5] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
            <div>
              <p className="font-bold text-[#0A1628] text-sm mb-1">{item.step}</p>
              <p className="text-sm text-[#475569]">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: "How long does export customs clearance take in India?", a: "Green channel: 30 minutes to 2 hours. Yellow channel: 2–6 hours. Red channel: 1–3 days. Most shipments with correct documents go Green. Errors in the Shipping Bill increase the chance of Yellow or Red." },
          { q: "What is a Let Export Order (LEO)?", a: "LEO is customs approval to load cargo. It is endorsed on the Shipping Bill after clearance. Cargo cannot physically be loaded onto the aircraft or vessel without LEO being issued on ICEGATE." },
          { q: "What is the difference between a CHA and a freight forwarder?", a: "A CHA is licensed by CBIC to file Shipping Bills with Indian customs. A freight forwarder books cargo space and manages logistics. Most companies use separate vendors for each — Ambeza provides both in-house." },
          { q: "Do I need a CHA to export from India?", a: "Yes. Under the Customs Act, only a licensed Customs House Agent (CHA) can file a Shipping Bill on behalf of an exporter on ICEGATE. You cannot file it yourself unless you have a CHA licence." },
          { q: "What triggers the Red Channel at Indian customs?", a: "Random selection, intelligence inputs about specific exporters or products, restricted or controlled goods, first-time exporters, mismatches between declared value and market price, or goods with SCOMET implications." },
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
