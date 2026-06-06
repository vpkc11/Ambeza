"use client";

import BlogLayout from "../BlogLayout";

export default function FreightForwarderVsCHAClient() {
  return (
    <BlogLayout
      title="Freight Forwarder vs CHA — What Is the Difference?"
      description="A clear explanation of what a freight forwarder does vs what a CHA (Customs House Agent) does in India — who handles what, why most exporters use both, and why in-house CHA matters."
      publishDate="June 2025"
      readTime="7 min read"
      category="Export Basics"
      relatedLinks={[
        { href: "/services/customs-clearance", label: "CHA Services at Ambeza" },
        { href: "/new-exporter", label: "New Exporter Guide" },
        { href: "/blog/customs-clearance-process", label: "Customs Clearance Process" },
        { href: "/how-it-works", label: "How Ambeza Works" },
      ]}
    >
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          Most first-time exporters assume one company handles everything. In practice, a freight forwarder and a Customs House Agent
          are two distinct roles — governed by different licences, different regulators, and doing entirely different things.
          Understanding which does what helps you ask the right questions and avoid the gaps that cause export delays.
        </p>
      </div>

      {/* The two roles */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">What each one does</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        <div className="bg-[#185FA5] rounded-2xl p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-2">Role 1</p>
          <p className="text-2xl font-extrabold mb-3">Freight Forwarder</p>
          <p className="text-white/80 text-sm mb-5 leading-relaxed">Manages the logistics — getting your cargo from your door to the buyer&apos;s door. Books carrier space, coordinates pickup and delivery, issues documentation, and acts as the overall shipment coordinator.</p>
          <div className="space-y-2">
            {["Books airline and shipping line space","Arranges pickup from your warehouse","Coordinates with CFS and port handling","Issues House Bill of Lading or House AWB","Prepares shipping documentation","Tracks the shipment in transit","Coordinates destination delivery","Advises on freight routing and costs"].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-white/80">
                <span className="text-[#F59E0B] mt-0.5 flex-shrink-0">✓</span>{item}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#0A1628] rounded-2xl p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-2">Role 2</p>
          <p className="text-2xl font-extrabold mb-3">CHA (Customs House Agent)</p>
          <p className="text-white/80 text-sm mb-5 leading-relaxed">Manages the customs compliance — filing declarations with Indian customs on ICEGATE and obtaining government approvals. Licensed by CBIC. Only a CHA can file a Shipping Bill.</p>
          <div className="space-y-2">
            {["Files Shipping Bill on ICEGATE","Handles Green/Yellow/Red examination channels","Obtains the Let Export Order (LEO)","Registers your AD Code at the port","Selects RoDTEP and Duty Drawback scheme","Advises on HS code and tariff classification","Handles SCOMET and restricted goods compliance","Files amendments and responds to customs queries"].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-white/80">
                <span className="text-[#F59E0B] mt-0.5 flex-shrink-0">✓</span>{item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The regulator difference */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Licences and regulators — they are completely different</h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0A1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Aspect</th>
              <th className="text-left px-4 py-3 font-semibold">Freight Forwarder</th>
              <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">CHA</th>
            </tr>
          </thead>
          <tbody>
            {[
              { aspect: "Governing law", ff: "No specific licence required in India", cha: "CBLR 2018 (Customs Brokers Licensing Regulations)" },
              { aspect: "Licensing body", ff: "No statutory licensing body", cha: "CBIC (Central Board of Indirect Taxes and Customs)" },
              { aspect: "Licence name", ff: "Not applicable", cha: "G-Card (licence) or F-Card (staff pass)" },
              { aspect: "Can file Shipping Bills?", ff: "No — not authorised", cha: "Yes — exclusive authority" },
              { aspect: "Penalty for non-compliance", ff: "Contract / commercial claims", cha: "CBIC revocation of licence, prosecution" },
              { aspect: "Typical company type", ff: "Logistics company (any size)", cha: "Specialised customs broker firm" },
            ].map((row, i) => (
              <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                <td className="px-4 py-3 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{row.aspect}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.ff}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#E2E8F0]">{row.cha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The typical arrangement */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-2 mt-10">How most exporters currently handle this — and the problem with it</h2>
      <p className="text-[#475569] mb-6">
        The typical setup: an exporter hires a freight forwarder, who subcontracts the Shipping Bill filing to a CHA.
        The CHA files without full context. The freight forwarder doesn&apos;t own the customs outcome. Here is what that creates:
      </p>
      <div className="space-y-3 mb-12">
        {[
          { problem: "Communication gaps", detail: "Your freight forwarder tells the CHA what to file — but doesn't pass everything. The CHA files without knowing the full cargo context, buyer requirements, or LC terms." },
          { problem: "No single accountability", detail: "When a customs query comes in, the freight forwarder says 'talk to the CHA.' The CHA says 'ask the freight forwarder.' You are stuck in the middle." },
          { problem: "RoDTEP and Drawback often wrong", detail: "Third-party CHAs frequently use generic Shipping Bill types or incorrect HSN codes. The exporter loses ₹10,000–₹50,000 per shipment without knowing it." },
          { problem: "Slower resolution", detail: "Any issue — wrong HS code, document mismatch, channel change — requires coordination between two separate companies. In-house resolution takes hours; inter-company coordination takes days." },
        ].map((item, i) => (
          <div key={i} className="bg-white border-l-4 border-l-red-500 border border-red-100 rounded-xl p-5">
            <p className="font-bold text-[#0A1628] mb-1">{item.problem}</p>
            <p className="text-sm text-[#475569]">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Ambeza model */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">The Ambeza model — freight forwarder and CHA in one team</h2>
      <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-2xl p-6 mb-12">
        <p className="text-[#0A1628] text-base font-semibold mb-4">One company. One team. One invoice. One person responsible.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { point: "Our CHA files your Shipping Bill", detail: "Not a subcontractor — our own licensed G-Card CHA team files directly on ICEGATE." },
            { point: "Freight and customs in one conversation", detail: "The same person who books your cargo also monitors the Shipping Bill status. No handoffs." },
            { point: "RoDTEP and Drawback always optimised", detail: "We pre-select the highest-value Shipping Bill type for every shipment." },
            { point: "Customs queries resolved in hours", detail: "No inter-company coordination. Our CHA responds to ICEGATE queries directly." },
          ].map((item) => (
            <div key={item.point} className="flex items-start gap-3">
              <span className="text-[#10B981] mt-0.5 flex-shrink-0">✓</span>
              <div>
                <p className="font-bold text-[#0A1628] text-sm">{item.point}</p>
                <p className="text-sm text-[#475569]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: "Can a freight forwarder file a Shipping Bill in India?", a: "No. Only a licensed Customs Broker (CHA) holding a G-Card under CBLR 2018 can file a Shipping Bill on ICEGATE. A freight forwarder without a CHA licence must subcontract this to a licensed CHA." },
          { q: "Is a CHA the same as a customs agent or customs broker?", a: "Yes — CHA, Customs House Agent, Customs Broker, and Licensed Customs Broker all refer to the same role in India. The official term under CBLR 2018 is 'Customs Broker'. In practice, most people use 'CHA'." },
          { q: "Do I need to separately hire a freight forwarder and a CHA?", a: "Not if you use Ambeza. We provide both services in-house — our licensed CHA team handles customs filings, and our freight team handles carrier booking, pickup, and delivery. You get one point of contact and one invoice." },
          { q: "What is a G-Card in customs brokerage?", a: "A G-Card is the licence issued by CBIC to a Customs Broker firm under CBLR 2018. It authorises the firm to file documents on behalf of importers and exporters at all Indian customs locations." },
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
