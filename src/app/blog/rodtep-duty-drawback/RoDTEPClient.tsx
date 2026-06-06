"use client";

import BlogLayout from "../BlogLayout";

export default function RoDTEPClient() {
  return (
    <BlogLayout
      title="RoDTEP and Duty Drawback — Government Refunds Every Exporter Is Entitled To"
      description="A plain-English explanation of RoDTEP and Duty Drawback — what they are, how much you get, how to claim them correctly, and why thousands of Indian exporters leave this money unclaimed every year."
      publishDate="June 2025"
      readTime="9 min read"
      category="Export Incentives"
      relatedLinks={[
        { href: "/rodtep-drawback", label: "RoDTEP & Drawback Guide" },
        { href: "/services/customs-clearance", label: "CHA Services" },
        { href: "/new-exporter", label: "New Exporter Guide" },
        { href: "/blog/iec-code-guide", label: "IEC Code Guide" },
      ]}
    >
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          RoDTEP and Duty Drawback are government refunds paid to Indian exporters after every shipment. Together they can add up to
          2–10% of your FOB export value — real money, automatically earned, requiring only that your CHA files the Shipping Bill
          correctly. Yet a significant number of first-time exporters either don&apos;t know about these schemes or file the wrong
          Shipping Bill type and forfeit the claims entirely.
        </p>
      </div>

      {/* The two schemes */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">The two main export refund schemes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        <div className="bg-[#185FA5] rounded-2xl p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-2">Scheme 1</p>
          <p className="text-2xl font-extrabold mb-3">RoDTEP</p>
          <p className="text-white/80 text-sm mb-4 leading-relaxed">
            Remission of Duties and Taxes on Exported Products. Refunds embedded state and central taxes in your production process
            that are not otherwise refunded — electricity duty, mandi tax, fuel in transport, etc.
          </p>
          <div className="bg-white/10 rounded-lg p-3 text-xs space-y-1">
            <p><strong>Rate:</strong> 0.01% – 4.3% of FOB value (HSN-specific)</p>
            <p><strong>Form:</strong> Transferable scrips on ICEGATE</p>
            <p><strong>Use:</strong> Pay import duties or sell in open market</p>
          </div>
        </div>
        <div className="bg-[#0A1628] rounded-2xl p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-2">Scheme 2</p>
          <p className="text-2xl font-extrabold mb-3">Duty Drawback</p>
          <p className="text-white/80 text-sm mb-4 leading-relaxed">
            Refunds customs duties paid on imported inputs used in manufacturing your exported product. Also covers central excise duty
            paid on inputs. Paid as cash directly into your bank account.
          </p>
          <div className="bg-white/10 rounded-lg p-3 text-xs space-y-1">
            <p><strong>Rate:</strong> 1% – 10%+ of FOB value (product-specific)</p>
            <p><strong>Form:</strong> Direct bank credit (cash)</p>
            <p><strong>Timeline:</strong> 1–3 months after EGM filing</p>
          </div>
        </div>
      </div>

      {/* How they work */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">How RoDTEP works — step by step</h2>
      <div className="space-y-4 mb-12">
        {[
          { step: "Your CHA files the Shipping Bill on ICEGATE", detail: "The Shipping Bill type must be 'SB005' (with RoDTEP claim) — not the generic SB003. If your CHA files the wrong type, you forfeit RoDTEP for that shipment." },
          { step: "Cargo ships and EGM is filed", detail: "After the vessel or aircraft departs, the carrier files the Export General Manifest. This confirms the cargo actually shipped." },
          { step: "ICEGATE processes the RoDTEP claim", detail: "The RoDTEP amount is calculated based on your product's HSN code and the rate in the official schedule. Most claims are processed automatically within 2–4 weeks." },
          { step: "Scrip issued on ICEGATE", detail: "A transferable e-scrip is credited to your ICEGATE account. You can use it to pay basic customs duty on imports, or sell it to an importer at a 1–3% discount." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 bg-white border border-[#E2E8F0] rounded-xl p-5">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#185FA5] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
            <div>
              <p className="font-bold text-[#0A1628] text-sm mb-1">{item.step}</p>
              <p className="text-sm text-[#475569]">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Rate examples */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">Sample RoDTEP rates by product category</h2>
      <p className="text-[#475569] mb-6">Rates vary by 8-digit HSN code. These are indicative figures — your exact rate depends on your specific HSN.</p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0A1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Product Category</th>
              <th className="text-left px-4 py-3 font-semibold">Typical RoDTEP Rate</th>
              <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Typical Drawback Rate</th>
            </tr>
          </thead>
          <tbody>
            {[
              { cat: "Textiles & Garments", rodtep: "0.5% – 1.7%", drawback: "1% – 3%" },
              { cat: "Engineering goods / Machinery", rodtep: "0.5% – 1.5%", drawback: "1% – 5%" },
              { cat: "Chemicals", rodtep: "0.1% – 2%", drawback: "0.5% – 3%" },
              { cat: "Agriculture & Food", rodtep: "0.5% – 4.3%", drawback: "Varies" },
              { cat: "Gems & Jewellery", rodtep: "0.01% – 0.3%", drawback: "Low" },
              { cat: "Pharmaceuticals", rodtep: "0.5% – 2%", drawback: "1% – 4%" },
              { cat: "Auto Parts", rodtep: "0.5% – 2%", drawback: "2% – 6%" },
            ].map((row, i) => (
              <tr key={row.cat} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                <td className="px-4 py-3 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{row.cat}</td>
                <td className="px-4 py-3 text-[#185FA5] font-semibold border-b border-[#E2E8F0]">{row.rodtep}</td>
                <td className="px-4 py-3 text-[#10B981] font-semibold border-b border-[#E2E8F0]">{row.drawback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Why exporters miss it */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Why thousands of exporters miss these refunds</h2>
      <div className="grid grid-cols-1 gap-4 mb-12">
        {[
          { reason: "Wrong Shipping Bill type filed", detail: "If your CHA files Shipping Bill type SB003 instead of SB005, no RoDTEP claim is generated. Many CHAs use the generic type out of habit. Ambeza always pre-selects the correct type." },
          { reason: "EGM not filed or delayed", detail: "RoDTEP is triggered only after EGM filing confirms the shipment departed. If the airline or shipping line delays EGM, claims are delayed. Your CHA should track this." },
          { reason: "FIRC not collected", detail: "Duty Drawback disbursement requires proof of foreign payment. If you don't collect your FIRC from the bank, the drawback cannot be processed." },
          { reason: "Incorrect HSN code", detail: "Using a broad or wrong HSN code means an incorrect RoDTEP rate is applied — usually lower than your actual entitlement. A 1-digit HSN error can cost you thousands of rupees per shipment." },
          { reason: "No one tracking the claims", detail: "Many exporters assume the money will arrive automatically. In practice, claims often stall due to mismatches between the Shipping Bill and EGM. Active follow-up is required." },
        ].map((m, i) => (
          <div key={i} className="bg-white border-l-4 border-l-amber-500 border border-amber-100 rounded-xl p-5">
            <p className="font-bold text-[#0A1628] mb-2">{m.reason}</p>
            <p className="text-sm text-[#475569] leading-relaxed">{m.detail}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: "Can I claim both RoDTEP and Duty Drawback on the same shipment?", a: "Yes. RoDTEP and Drawback cover different taxes and are separate claims. You can — and should — claim both on every eligible shipment." },
          { q: "How long does it take to receive Duty Drawback?", a: "Typically 1–3 months after EGM filing, provided your FIRC is submitted and there are no document queries. Ambeza tracks all claims and follows up on delays." },
          { q: "What is a RoDTEP scrip and how do I use it?", a: "A RoDTEP scrip is an electronic credit on ICEGATE. You can use it to pay basic customs duty on imports, or transfer/sell it to another importer. Most exporters who don't import sell their scrips at a 1–3% discount through a licensed broker." },
          { q: "What if my product is not covered under RoDTEP?", a: "Some product categories are excluded — pharmaceutical products exported under advance authorisation, SEZ units, etc. Check the official RoDTEP schedule on DGFT for your specific HSN." },
        ].map((item, i) => (
          <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5">
            <p className="font-bold text-[#0A1628] mb-2 text-sm">Q: {item.q}</p>
            <p className="text-sm text-[#475569] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-xl p-5 text-center">
        <p className="font-bold text-[#0A1628] mb-1">Ambeza tracks RoDTEP and Drawback for every shipment</p>
        <p className="text-sm text-[#475569]">We pre-select the correct Shipping Bill type, monitor EGM filing, and follow up on all pending claims. You don't leave a single rupee on the table.</p>
      </div>
    </BlogLayout>
  );
}
