"use client";

import BlogLayout from "../BlogLayout";

export default function ThreePLFourPLClient() {
  return (
    <BlogLayout
      title="1PL, 2PL, 3PL, 4PL, 5PL — What Do They Mean for Indian Exporters?"
      description="A plain-English breakdown of logistics provider levels — what each one does, when you need a 3PL vs a 4PL, and what this means if you are exporting from India."
      publishDate="June 2025"
      readTime="9 min read"
      category="Export Basics"
      relatedLinks={[
        { href: "/services", label: "Ambeza Services" },
        { href: "/blog/freight-forwarder-vs-cha", label: "Freight Forwarder vs CHA" },
        { href: "/how-it-works", label: "How Ambeza Works" },
        { href: "/new-exporter", label: "New Exporter Guide" },
      ]}
    >
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          You will hear the terms 3PL and 4PL constantly in logistics conversations — and occasionally 5PL.
          Most explanations are written for large multinationals managing global supply chains.
          This guide explains what these levels actually mean and, more practically, what they mean for an Indian exporter
          shipping containers abroad.
        </p>
      </div>

      {/* The hierarchy */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">The logistics provider hierarchy — all five levels</h2>
      <div className="space-y-4 mb-12">
        {[
          {
            level: "1PL",
            name: "First-Party Logistics",
            who: "The manufacturer or seller",
            what: "You own the trucks, warehouses, and distribution network. You ship your own goods using your own assets.",
            example: "A large textile mill in Surat with its own fleet of trucks delivering to customers across India.",
            indian: "Very rare in export — almost no exporter owns aircraft or container ships.",
            color: "bg-slate-50 border-slate-200",
          },
          {
            level: "2PL",
            name: "Second-Party Logistics",
            who: "An asset-based carrier",
            what: "You hire a company that owns the physical transport assets — a trucking company, an airline, a shipping line. They move cargo from A to B. Nothing more.",
            example: "Booking directly with Maersk for a container, or with IndiGo Cargo for an air shipment.",
            indian: "You can book 2PL directly, but you still need to handle customs, documentation, and inland transport yourself.",
            color: "bg-blue-50 border-blue-200",
          },
          {
            level: "3PL",
            name: "Third-Party Logistics",
            who: "A logistics service provider",
            what: "A company that manages multiple logistics functions on your behalf — warehousing, transportation, customs clearance, documentation, and freight booking. They don't own the ships or planes but coordinate everything.",
            example: "A freight forwarder who picks up your cargo, books the container, handles customs clearance, and delivers to the buyer.",
            indian: "This is what most Indian exporters need and use. Ambeza is a 3PL with an in-house CHA.",
            color: "bg-[#185FA5]/5 border-[#185FA5]/30",
            highlight: true,
          },
          {
            level: "4PL",
            name: "Fourth-Party Logistics",
            who: "A supply chain integrator / Lead Logistics Provider (LLP)",
            what: "A company that manages and coordinates multiple 3PLs on your behalf. They don't do the logistics themselves — they design the strategy, select and manage your 3PL providers, and give you a single point of visibility across your entire supply chain.",
            example: "A consultancy that manages your 3PL in India, your warehouse operator in Germany, and your last-mile partner in the USA — and reports all of it in one dashboard.",
            indian: "Relevant for Indian manufacturers with high export volumes shipping to multiple regions. Rare for SME exporters.",
            color: "bg-amber-50 border-amber-200",
          },
          {
            level: "5PL",
            name: "Fifth-Party Logistics",
            who: "A digital supply chain network aggregator",
            what: "A tech platform that aggregates and optimises supply chains across multiple 4PLs and 3PLs using data, AI, and automation. Largely theoretical for most businesses — it describes platforms like Amazon Logistics or DHL's digital network at their scale.",
            example: "E-commerce fulfilment platforms that integrate sellers, carriers, customs, and last-mile delivery across 50+ countries.",
            indian: "Not relevant for the overwhelming majority of Indian exporters. Mentioned here for completeness.",
            color: "bg-slate-50 border-slate-200",
          },
        ].map(({ level, name, who, what, example, indian, color, highlight }) => (
          <div key={level} className={`border-2 rounded-2xl p-6 ${color}`}>
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-extrabold text-lg flex-shrink-0 ${highlight ? "bg-[#185FA5] text-white" : "bg-white text-[#0A1628] border border-[#E2E8F0]"}`}>
                {level}
              </div>
              <div className="flex-1">
                <p className="font-extrabold text-[#0A1628] text-lg mb-1">{name}</p>
                <p className="text-xs text-[#475569] font-semibold mb-3">Who: {who}</p>
                <p className="text-sm text-[#475569] leading-relaxed mb-3">{what}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white/70 rounded-lg p-3">
                    <p className="text-xs font-bold text-[#0A1628] mb-1">Example</p>
                    <p className="text-xs text-[#475569] leading-relaxed">{example}</p>
                  </div>
                  <div className={`rounded-lg p-3 ${highlight ? "bg-[#185FA5]/10" : "bg-white/70"}`}>
                    <p className="text-xs font-bold text-[#0A1628] mb-1">For Indian exporters</p>
                    <p className={`text-xs leading-relaxed ${highlight ? "text-[#185FA5] font-medium" : "text-[#475569]"}`}>{indian}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Quick comparison — what each level handles</h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0A1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Function</th>
              <th className="text-center px-3 py-3 font-semibold">1PL</th>
              <th className="text-center px-3 py-3 font-semibold">2PL</th>
              <th className="text-center px-3 py-3 font-semibold bg-[#185FA5]">3PL</th>
              <th className="text-center px-3 py-3 font-semibold">4PL</th>
              <th className="text-center px-3 py-3 rounded-tr-lg font-semibold">5PL</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Inland transport (pickup)", "Own", "✗", "✓", "✓", "✓"],
              ["Freight booking (air/ocean)", "Own", "Own", "✓", "✓", "✓"],
              ["Customs clearance (Shipping Bill)", "Own", "✗", "✓", "✓", "✓"],
              ["Documentation preparation", "Own", "✗", "✓", "✓", "✓"],
              ["Warehousing", "Own", "✗", "Often", "✓", "✓"],
              ["Destination delivery", "Own", "✗", "✓", "✓", "✓"],
              ["Manages multiple 3PLs", "✗", "✗", "✗", "✓", "✓"],
              ["Tech platform / AI optimisation", "✗", "✗", "✗", "Partial", "✓"],
              ["Single invoice for all services", "N/A", "✗", "✓", "✓", "✓"],
            ].map(([fn, pl1, pl2, pl3, pl4, pl5], i) => (
              <tr key={fn} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                <td className="px-4 py-3 font-medium text-[#0A1628] border-b border-[#E2E8F0]">{fn}</td>
                <td className="px-3 py-3 text-center text-[#475569] border-b border-[#E2E8F0]">{pl1}</td>
                <td className="px-3 py-3 text-center text-[#475569] border-b border-[#E2E8F0]">{pl2}</td>
                <td className={`px-3 py-3 text-center border-b border-[#E2E8F0] font-semibold ${pl3 === "✓" ? "text-[#10B981]" : "text-[#475569]"} bg-[#185FA5]/5`}>{pl3}</td>
                <td className="px-3 py-3 text-center text-[#475569] border-b border-[#E2E8F0]">{pl4}</td>
                <td className="px-3 py-3 text-center text-[#475569] border-b border-[#E2E8F0]">{pl5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 3PL deep dive */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4 mt-10">3PL in the Indian export context — what to look for</h2>
      <p className="text-[#475569] mb-6 leading-relaxed">
        When an Indian exporter says &quot;we use a logistics company,&quot; they almost always mean a 3PL. The quality of your 3PL
        determines the quality of your export experience. Here is what separates a good 3PL from a bad one in India:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {[
          {
            label: "In-house CHA vs subcontracted",
            good: "Files your Shipping Bill with their own licensed CHA team. Direct accountability, faster clearance.",
            bad: "Passes your Shipping Bill to a third-party CHA. No ownership of the customs outcome.",
          },
          {
            label: "Fixed quotes vs variable billing",
            good: "Quotes a single all-in price covering freight, CHA charges, inland transport, and handling.",
            bad: "Low headline quote, then adds CHA charges, origin charges, documentation fees, and fuel surcharges separately.",
          },
          {
            label: "RoDTEP and Drawback handling",
            good: "Pre-selects the correct Shipping Bill type for maximum RoDTEP/Drawback benefit on every shipment.",
            bad: "Files generic Shipping Bills without considering incentive optimisation. You lose money every shipment.",
          },
          {
            label: "Single point of contact",
            good: "One person manages pickup, customs, freight, and documentation — and owns the outcome.",
            bad: "Different teams for customs and freight, with the exporter coordinating between them.",
          },
        ].map(({ label, good, bad }) => (
          <div key={label} className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
            <div className="bg-[#0A1628] px-5 py-3">
              <p className="font-bold text-white text-sm">{label}</p>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-[#10B981] font-bold flex-shrink-0 text-sm">✓</span>
                <p className="text-sm text-[#475569]">{good}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold flex-shrink-0 text-sm">✗</span>
                <p className="text-sm text-[#475569]">{bad}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Do you need a 4PL? */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4 mt-10">Do Indian exporters need a 4PL?</h2>
      <p className="text-[#475569] mb-6 leading-relaxed">
        4PL makes sense when your export operation is large enough that managing multiple logistics partners becomes a
        full-time job in itself. A 4PL takes that coordination off your hands and gives you a single strategic view across all routes.
      </p>
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="font-bold text-[#10B981] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#10B981] text-white rounded-full flex items-center justify-center text-xs">✓</span>
              You may benefit from a 4PL if:
            </p>
            <ul className="space-y-2">
              {[
                "You ship to 10+ countries regularly",
                "You use 3 or more different 3PLs/carriers",
                "Managing logistics takes more than 2 FTE staff",
                "You have warehousing and fulfilment in multiple countries",
                "Your supply chain involves complex multi-leg routing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#475569]">
                  <span className="text-[#10B981] mt-0.5 flex-shrink-0">•</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-[#185FA5] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#185FA5] text-white rounded-full flex items-center justify-center text-xs">→</span>
              A good 3PL is sufficient if:
            </p>
            <ul className="space-y-2">
              {[
                "You export to 1–5 countries",
                "One logistics company handles all your routes",
                "Your shipment volume is under 50 containers/year",
                "You don't need multi-country warehousing",
                "You want simplicity — one contact, one invoice",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#475569]">
                  <span className="text-[#185FA5] mt-0.5 flex-shrink-0">•</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-[#E2E8F0]">
          <p className="text-sm text-[#475569] italic">
            The vast majority of Indian SME and mid-size exporters — exporting to 1–10 countries, with a single freight forwarder — need a good 3PL, not a 4PL. Getting your 3PL right is more impactful than adding a 4PL layer on top of a mediocre 3PL.
          </p>
        </div>
      </div>

      {/* Where Ambeza fits */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Where Ambeza fits in this picture</h2>
      <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-2xl p-6 mb-12">
        <p className="font-bold text-[#0A1628] text-lg mb-4">Ambeza is a 3PL with an in-house licensed CHA</p>
        <p className="text-[#475569] text-sm leading-relaxed mb-6">
          We handle everything a 3PL handles — pickup, freight booking, customs clearance, documentation, and delivery —
          with one critical difference: our own licensed Customs House Agent team files your Shipping Bill on ICEGATE.
          No subcontracting. No third party. Direct accountability for your customs clearance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Inland transport", detail: "Pickup from any location across India to port/airport" },
            { label: "Freight booking", detail: "Air and ocean — all carriers, all routes" },
            { label: "Customs clearance", detail: "In-house licensed CHA files your Shipping Bill on ICEGATE" },
            { label: "Documentation", detail: "Shipping Bill, CoO, all certificates — prepared by us" },
            { label: "RoDTEP & Drawback", detail: "Tracked and optimised on every shipment" },
            { label: "Destination delivery", detail: "Door-to-door via partner network in 150+ countries" },
          ].map(({ label, detail }) => (
            <div key={label} className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
              <p className="font-bold text-[#185FA5] text-sm mb-1">{label}</p>
              <p className="text-xs text-[#475569] leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          {
            q: "What is the difference between a 3PL and a freight forwarder?",
            a: "In practice, they are often the same thing. A freight forwarder is the traditional term for a company that arranges international shipments — booking cargo space, preparing documents, and coordinating customs. '3PL' is a broader term that includes warehousing, fulfilment, and value-added services. Many companies use the terms interchangeably. When someone says '3PL' in the Indian export context, they typically mean a full-service freight forwarder who also handles customs and inland transport.",
          },
          {
            q: "Is Ambeza a 3PL or a 4PL?",
            a: "Ambeza is a 3PL — we directly execute logistics services for your export shipments, including pickup, freight booking, customs clearance with our own licensed CHA, and destination delivery. We don't manage other logistics providers on your behalf (that would be 4PL). We handle the full export chain ourselves.",
          },
          {
            q: "Do I need a 3PL if I already have a freight forwarder and a separate CHA?",
            a: "You already have the components of a 3PL — but in two separate companies. The risk is coordination gaps: your freight forwarder and CHA may not communicate well, leading to document mismatches, wrong Shipping Bill types, and delays. A 3PL with in-house CHA (like Ambeza) eliminates this gap by putting both functions under one roof with one accountable team.",
          },
          {
            q: "What does '4PL' actually mean in practice?",
            a: "A 4PL (also called a Lead Logistics Provider or LLP) is a company that manages your entire logistics ecosystem — selecting 3PLs, managing contracts, monitoring performance, and providing a single dashboard view across all carriers and regions. They add a strategic layer above execution. For most Indian SME exporters, this is an unnecessary overhead — getting the right 3PL delivers most of the benefit at a fraction of the cost.",
          },
          {
            q: "Are there 3PL companies specifically for Indian exporters?",
            a: "Yes — there are many freight forwarders and logistics companies operating in India. What varies significantly is whether they have an in-house licensed CHA or subcontract customs work, whether they offer fixed or variable pricing, and whether they cover both air and ocean freight. When evaluating a 3PL for Indian exports, ask specifically: do you file Shipping Bills yourself, or do you use a third-party CHA?",
          },
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
