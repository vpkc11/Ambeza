"use client";

import { useState } from "react";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import QuoteForm from "@/components/QuoteForm";
import { MapPin, Anchor, Plane, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";

const ports = [
  {
    id: "jnpt",
    name: "JNPT / Nhava Sheva",
    city: "Navi Mumbai, Maharashtra",
    type: "Sea",
    code: "INNSA",
    capacity: "#1 container port in India — 55% of India's sea cargo",
    strengths: ["Largest infrastructure, best frequency to all destinations", "Direct calls to 60+ countries", "Advanced RFID & IT systems", "CFS/ICD cluster nearby"],
    weaknesses: ["Highly congested — truck queues can stretch 10+ km", "Dwell times among highest in India", "Premium charges during peak season"],
    bestFor: ["Large volumes (FCL)", "Exports to USA, Europe, Middle East", "Auto parts, textiles, pharma, chemicals"],
    transitTime: "USA: 20–25 days · Europe: 18–22 days · Middle East: 10–14 days",
    cutoff: "4 days before vessel ETD (standard FCL)",
    states: ["Maharashtra", "Gujarat", "Madhya Pradesh", "Rajasthan", "Goa"],
  },
  {
    id: "mundra",
    name: "Mundra Port",
    city: "Kutch, Gujarat",
    type: "Sea",
    code: "INMUN",
    capacity: "Largest private port in India — fastest growing",
    strengths: ["Less congestion than JNPT", "Large dedicated zones for auto, agri, chemicals", "Direct rail connectivity (double-stack)", "Competitive terminal handling charges"],
    weaknesses: ["Limited direct calls to Far East/Africa", "Fewer shipping lines vs JNPT"],
    bestFor: ["Gujarat manufacturers", "Agri exports (cotton, spices)", "Auto/engineering goods"],
    transitTime: "USA: 22–28 days · Europe: 20–24 days · Middle East: 8–12 days",
    cutoff: "3 days before vessel ETD",
    states: ["Gujarat", "Rajasthan", "Madhya Pradesh"],
  },
  {
    id: "chennai",
    name: "Chennai Port",
    city: "Chennai, Tamil Nadu",
    type: "Sea",
    code: "INMAA",
    capacity: "2nd busiest container port — dominant in South India",
    strengths: ["Gateway for South India cargo", "Strong auto corridor (Chennai → global)", "Better truck turnaround than JNPT", "Multiple CFS options"],
    weaknesses: ["Monsoon disruptions (Oct–Dec)", "Some infrastructure aging vs Mundra"],
    bestFor: ["Auto parts & vehicles", "Textiles, leather, software hardware", "Sri Lanka/Bangladesh transshipment hub"],
    transitTime: "USA: 22–26 days · Europe: 20–24 days · Middle East: 12–16 days",
    cutoff: "4 days before vessel ETD",
    states: ["Tamil Nadu", "Karnataka", "Andhra Pradesh (partial)", "Kerala"],
  },
  {
    id: "kolkata",
    name: "Kolkata / Haldia Dock",
    city: "West Bengal",
    type: "Sea",
    code: "INCCU",
    capacity: "Primary gateway for Eastern India and Nepal/Bhutan transit",
    strengths: ["Only major port serving NE India & land-locked neighbors", "Tea, jute, rice specialist", "Less congested for bulk cargo"],
    weaknesses: ["Shallowest draft — large vessels can't enter fully loaded", "Longer transshipment time to Far East", "Limited direct shipping lines"],
    bestFor: ["Tea, jute, rice, handicrafts", "Nepal/Bhutan/Bangladesh trade", "Eastern India manufacturers"],
    transitTime: "USA: 25–30 days · Europe: 22–26 days · Bangladesh: 2–3 days",
    cutoff: "5 days before vessel ETD (extra time for river pilotage)",
    states: ["West Bengal", "Odisha", "Jharkhand", "Bihar", "NE States"],
  },
  {
    id: "vizag",
    name: "Visakhapatnam (Vizag)",
    city: "Andhra Pradesh",
    type: "Sea",
    code: "INVTZ",
    capacity: "Largest cargo volume port by tonnage (bulk dominant)",
    strengths: ["Handles bulk: iron ore, coal, fertilisers", "Growing container terminal (VCT)", "Deep draft — suits Capesize vessels", "Less congestion"],
    weaknesses: ["Fewer container shipping lines", "Limited CFS ecosystem vs JNPT/Chennai"],
    bestFor: ["Steel, minerals, fertilisers", "Pharma (emerging)", "Telangana & AP cargo"],
    transitTime: "USA: 24–28 days · Europe: 22–25 days · Middle East: 12–15 days",
    cutoff: "4 days before vessel ETD",
    states: ["Andhra Pradesh", "Telangana (partial)", "Odisha (partial)"],
  },
  {
    id: "delhi-icd",
    name: "ICD Tughlakabad / Patparganj",
    city: "Delhi NCR",
    type: "ICD (Inland)",
    code: "INDLI / INDPG",
    capacity: "Largest inland container depot in Asia",
    strengths: ["No need to move cargo to a seaport first", "Full customs clearance done here", "Faster for landlocked North India exporters", "Lower overall logistics cost for Delhi/NCR"],
    weaknesses: ["Rail links to JNPT — adds 3–4 days vs direct port", "Not suitable for perishables (long rail journey)"],
    bestFor: ["Delhi, Haryana, UP, Punjab, Himachal manufacturers", "Textiles, garments, handicrafts, auto parts", "Any cargo where factory is in North India"],
    transitTime: "Rail to JNPT: 3–4 days, then same as JNPT",
    cutoff: "7 days before vessel ETD (includes rail transit)",
    states: ["Delhi", "Haryana", "Uttar Pradesh", "Punjab", "Himachal Pradesh", "Uttarakhand"],
  },
];

const stateToPort: Record<string, { portId: string; reason: string }> = {
  Maharashtra: { portId: "jnpt", reason: "JNPT (Nhava Sheva) is the closest major port and handles 55% of India's container traffic. Best connectivity to all countries." },
  Gujarat: { portId: "mundra", reason: "Mundra Port is right in Gujarat — less congestion than JNPT, strong agri/chemical/auto corridors, and competitive rates." },
  Rajasthan: { portId: "mundra", reason: "Mundra is the nearest sea port. Delhi ICD Tughlakabad is a strong alternative if your factory is in eastern Rajasthan." },
  "Madhya Pradesh": { portId: "jnpt", reason: "JNPT via NH47 is the most common route, with ICD Pithampur (Indore) as an alternate inland option for smaller exporters." },
  "Tamil Nadu": { portId: "chennai", reason: "Chennai Port is your home port — excellent auto corridor, multiple CFS options, and good direct calls to all major destinations." },
  Karnataka: { portId: "chennai", reason: "Chennai Port is the nearest gateway. Bangalore exporters typically use Chennai or the ICD at Whitefield." },
  "Andhra Pradesh": { portId: "vizag", reason: "Visakhapatnam (Vizag) serves AP cargo directly, especially bulk goods. Chennai is an alternative for containers." },
  Telangana: { portId: "chennai", reason: "Chennai Port is the nearest container port from Hyderabad. ICD Sanathnagar (Hyderabad) allows customs clearance at origin." },
  "West Bengal": { portId: "kolkata", reason: "Kolkata Port (Syama Prasad Mookerjee Port) is your primary gateway — specialist in tea, jute, and bulk cargo." },
  Odisha: { portId: "vizag", reason: "Vizag is closer to Odisha than Kolkata for most cargo. Paradip Port is an alternative for bulk minerals." },
  Jharkhand: { portId: "kolkata", reason: "Kolkata Dock System is the closest option. Haldia serves bulk mineral exports well." },
  Bihar: { portId: "kolkata", reason: "Kolkata handles Bihar exports. ICD Patna is an option for containerised goods." },
  Delhi: { portId: "delhi-icd", reason: "ICD Tughlakabad in South Delhi is Asia's largest inland depot. File customs here, cargo moves by rail to JNPT — massive cost saving vs trucking to Mumbai." },
  Haryana: { portId: "delhi-icd", reason: "ICD Tughlakabad (Delhi) or ICD Faridabad serve Haryana cargo. No need to truck 1,400 km to Mumbai." },
  "Uttar Pradesh": { portId: "delhi-icd", reason: "Delhi ICD is the recommended option for UP exporters. ICD Kanpur serves western UP bulk cargo." },
  Punjab: { portId: "delhi-icd", reason: "Delhi ICD covers Punjab exports efficiently. Ludhiana ICD is excellent for textiles and engineering goods." },
  "Himachal Pradesh": { portId: "delhi-icd", reason: "Delhi ICD via NH3 is the closest inland clearance option for Himachal cargo." },
  Kerala: { portId: "chennai", reason: "Cochin (Kochi) Port is the primary option for Kerala. Chennai is the alternative for better shipping line connectivity." },
  Goa: { portId: "jnpt", reason: "JNPT serves Goa well for containerised cargo. Mormugao Port (in Goa itself) serves bulk iron ore." },
  "Uttarakhand": { portId: "delhi-icd", reason: "Delhi ICD at Tughlakabad serves Uttarakhand effectively. Rudrapur and Haridwar cargo commonly routes here." },
};

const countryToPort: Record<string, { portId: string; note: string }> = {
  USA: { portId: "jnpt", note: "JNPT has the most direct liner services to US East Coast (USEC) and West Coast (USWC)." },
  UK: { portId: "jnpt", note: "JNPT has 5–6 direct calls/week to Felixstowe/Southampton." },
  Germany: { portId: "jnpt", note: "JNPT to Hamburg/Bremerhaven with major alliances (THE Alliance, 2M)." },
  UAE: { portId: "mundra", note: "Mundra has excellent Jebel Ali frequency — often cheaper than JNPT for Middle East." },
  China: { portId: "chennai", note: "Chennai to Shanghai/Guangzhou — good frequency on Intra-Asia services." },
  Australia: { portId: "jnpt", note: "JNPT offers direct calls to Melbourne/Sydney on Pacific routes." },
  Japan: { portId: "jnpt", note: "JNPT has strong Japan connectivity via K-Line, MOL direct calls." },
  Bangladesh: { portId: "kolkata", note: "Kolkata to Chittagong is a feeder route — often cheaper than other ports." },
  "South Africa": { portId: "jnpt", note: "JNPT is the primary gateway for Cape/Durban routes." },
  Singapore: { portId: "chennai", note: "Chennai to Singapore is a key Intra-Asia route — daily options available." },
};

export default function PortSelectorPage() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [expandedPort, setExpandedPort] = useState<string | null>(null);

  const stateRec = selectedState ? stateToPort[selectedState] : null;
  const countryRec = selectedCountry ? countryToPort[selectedCountry] : null;
  const recommendedPortId = stateRec?.portId ?? null;
  const recommendedPort = recommendedPortId ? ports.find((p) => p.id === recommendedPortId) : null;

  const states = Object.keys(stateToPort).sort();
  const countries = Object.keys(countryToPort).sort();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#F59E0B] text-sm font-medium mb-3">
            <Anchor className="h-4 w-4" />
            <span>Port Selector — India</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Which Indian port should you use?
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Compare JNPT, Mundra, Chennai, Kolkata, Vizag and Delhi ICD — then use the tool below to find the best port for your location and destination.
          </p>
        </div>
      </section>

      {/* Decision tool */}
      <SectionWrapper>
        <div className="bg-gradient-to-br from-[#185FA5]/10 to-[#185FA5]/5 border border-[#185FA5]/30 rounded-2xl p-6 lg:p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-2">Port recommendation tool</h2>
          <p className="text-[#475569] mb-6">Select your state and destination country — we'll recommend the best port and explain why.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                Where is your factory / warehouse?
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full border border-[#CBD5E1] rounded-xl px-4 py-3 text-[#0A1628] bg-white focus:outline-none focus:border-[#185FA5] focus:ring-2 focus:ring-[#185FA5]/20"
              >
                <option value="">Select your state</option>
                {states.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                Where are you shipping to? (optional)
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full border border-[#CBD5E1] rounded-xl px-4 py-3 text-[#0A1628] bg-white focus:outline-none focus:border-[#185FA5] focus:ring-2 focus:ring-[#185FA5]/20"
              >
                <option value="">Select destination country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Result */}
          {recommendedPort && stateRec && (
            <div className="bg-white border border-[#185FA5]/40 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0A1628] text-lg">
                    Recommended: {recommendedPort.name}
                  </p>
                  <p className="text-[#475569] text-sm mt-1">{stateRec.reason}</p>
                </div>
              </div>
              {countryRec && countryRec.portId !== stateRec.portId && (
                <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-sm text-amber-800">
                    <strong>Destination note:</strong> For {selectedCountry}, {ports.find(p => p.id === countryRec.portId)?.name} may offer better direct sailing frequency. {countryRec.note} Discuss with your Ambeza coordinator.
                  </p>
                </div>
              )}
              {countryRec && countryRec.portId === stateRec.portId && (
                <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-800">
                    <strong>Great news:</strong> {recommendedPort.name} also has excellent connectivity to {selectedCountry}. {countryRec.note}
                  </p>
                </div>
              )}
              <div className="mt-4 flex gap-3">
                <a
                  href="https://wa.me/919999999999?text=Hi, I need help with port selection and export logistics from India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#20bf5b] transition-colors"
                >
                  Confirm with Ambeza
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}

          {!selectedState && (
            <p className="text-[#94A3B8] text-sm text-center py-4">
              Select your state above to see a recommendation
            </p>
          )}
        </div>

        {/* Port comparison table */}
        <h2 className="text-3xl font-bold text-[#0A1628] mb-3">Full port comparison</h2>
        <p className="text-[#475569] mb-6">All major Indian sea ports and the leading inland container depot, compared side by side.</p>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] mb-12">
          <table className="w-full text-sm">
            <thead className="bg-[#0A1628] text-white">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Port</th>
                <th className="text-left px-4 py-3 font-semibold">Type</th>
                <th className="text-left px-4 py-3 font-semibold">Code</th>
                <th className="text-left px-4 py-3 font-semibold">Best for</th>
                <th className="text-left px-4 py-3 font-semibold">Transit to USA</th>
                <th className="text-left px-4 py-3 font-semibold">Cutoff</th>
              </tr>
            </thead>
            <tbody>
              {ports.map((p, i) => (
                <tr key={p.id} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                  <td className="px-4 py-3 font-semibold text-[#0A1628]">
                    {p.name}
                    <span className="block text-xs text-[#94A3B8] font-normal">{p.city}</span>
                  </td>
                  <td className="px-4 py-3 text-[#475569]">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${p.type === "Sea" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}>
                      {p.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-[#185FA5] text-xs">{p.code}</td>
                  <td className="px-4 py-3 text-[#475569] text-xs">{p.bestFor[0]}</td>
                  <td className="px-4 py-3 text-[#475569] text-xs whitespace-nowrap">{p.transitTime.split("·")[0].trim()}</td>
                  <td className="px-4 py-3 text-[#475569] text-xs">{p.cutoff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed port cards */}
        <h2 className="text-3xl font-bold text-[#0A1628] mb-6">Detailed port profiles</h2>
        <div className="space-y-4">
          {ports.map((p) => (
            <div key={p.id} className="border border-[#E2E8F0] rounded-2xl overflow-hidden">
              <button
                onClick={() => setExpandedPort(expandedPort === p.id ? null : p.id)}
                className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-[#F8FAFC] transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${p.type === "Sea" ? "bg-blue-100" : "bg-purple-100"}`}>
                    {p.type === "Sea" ? <Anchor className="h-5 w-5 text-blue-700" /> : <MapPin className="h-5 w-5 text-purple-700" />}
                  </div>
                  <div>
                    <p className="font-bold text-[#0A1628]">{p.name}</p>
                    <p className="text-xs text-[#94A3B8]">{p.city} · {p.code}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:block text-sm text-[#475569]">{p.capacity.split("—")[0]}</span>
                  <ArrowRight className={`h-5 w-5 text-[#94A3B8] transition-transform ${expandedPort === p.id ? "rotate-90" : ""}`} />
                </div>
              </button>

              {expandedPort === p.id && (
                <div className="px-6 pb-6 border-t border-[#E2E8F0] bg-white">
                  <p className="text-sm text-[#475569] mt-4 mb-5 font-medium">{p.capacity}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div>
                      <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-2">Strengths</p>
                      <ul className="space-y-1">
                        {p.strengths.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-xs text-[#475569]">
                            <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2">Watch out for</p>
                      <ul className="space-y-1">
                        {p.weaknesses.map((w) => (
                          <li key={w} className="flex items-start gap-2 text-xs text-[#475569]">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">!</span>
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#185FA5] uppercase tracking-wider mb-2">Best for</p>
                      <ul className="space-y-1">
                        {p.bestFor.map((b) => (
                          <li key={b} className="text-xs text-[#475569]">• {b}</li>
                        ))}
                      </ul>
                      <div className="mt-4 space-y-2">
                        <div className="bg-[#F8FAFC] rounded-lg p-3">
                          <p className="text-xs font-semibold text-[#0A1628] mb-1">Transit times</p>
                          <p className="text-xs text-[#475569]">{p.transitTime}</p>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-3">
                          <p className="text-xs font-semibold text-amber-800 mb-1">Cargo cutoff</p>
                          <p className="text-xs text-amber-700">{p.cutoff}</p>
                        </div>
                        <div className="bg-[#F8FAFC] rounded-lg p-3">
                          <p className="text-xs font-semibold text-[#0A1628] mb-1">Typical origin states</p>
                          <p className="text-xs text-[#475569]">{p.states.join(", ")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Air cargo ports */}
        <div className="mt-12 bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="h-6 w-6 text-[#185FA5]" />
            <h2 className="text-xl font-bold text-[#0A1628]">Air cargo: key Indian airports</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Mumbai CSIA", code: "BOM", note: "Busiest air cargo airport — best for pharma, perishables, e-commerce" },
              { name: "Delhi IGI", code: "DEL", note: "2nd largest — strong for North India, US/Europe freighter routes" },
              { name: "Chennai MAA", code: "MAA", note: "Auto parts, IT hardware, strong belly capacity from passenger flights" },
              { name: "Hyderabad RGIA", code: "HYD", note: "Pharma capital of India — Pharma City nearby, temperature-controlled warehousing" },
              { name: "Bangalore KIA", code: "BLR", note: "IT hardware, perishables (flowers), strong freighter connectivity" },
              { name: "Kolkata NSCBI", code: "CCU", note: "East India and NE gateway — perishables, engineering goods" },
            ].map((a) => (
              <div key={a.code} className="bg-white border border-[#E2E8F0] rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-bold text-[#0A1628] text-sm">{a.name}</p>
                  <span className="font-mono text-xs text-[#185FA5] bg-blue-50 px-2 py-0.5 rounded-full">{a.code}</span>
                </div>
                <p className="text-xs text-[#475569]">{a.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key tip */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-900 mb-1">Important: your AD Code must match the port of export</p>
            <p className="text-sm text-amber-800">
              Your AD Code (bank registration with customs) is registered port-by-port. If you've registered your AD Code at JNPT and you want to export via Chennai, you need a separate registration at Chennai. Ambeza handles this for you — <Link href="/icegate-guide" className="underline font-semibold">read the AD Code guide</Link>.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Not sure which port to use? Ask us.</h2>
              <p className="text-slate-300 mb-6">
                Ambeza has clearing agents and warehouse partners at all major Indian sea ports and airports. We choose the best routing for your cargo.
              </p>
              <a
                href="https://wa.me/919999999999?text=Hi, I need help selecting the right port for my export shipment"
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
