import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Airline Partners for Air Freight from India — Carriers We Work With | Ambeza",
  description:
    "Ambeza works with leading Indian and international cargo airlines — Air India Cargo, IndiGo Cargo, Emirates SkyCargo, Qatar Airways Cargo, Lufthansa Cargo, China Eastern, and more. Air freight from all major Indian airports.",
  keywords: [
    "airline partners India air freight",
    "cargo airlines India",
    "Air India Cargo Ambeza",
    "Emirates SkyCargo India export",
    "Qatar Airways Cargo India",
    "Lufthansa Cargo India export",
    "China Eastern Airlines cargo India",
    "best cargo airlines for export from India",
    "air freight carriers Hyderabad Mumbai Delhi Chennai",
  ],
};

const airlinePartnersFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which airlines does Ambeza use for air freight from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with a wide network of Indian and international cargo carriers — including Air India Cargo, IndiGo Cargo, Blue Dart Aviation, and SpiceXpress within India, and Emirates SkyCargo, Qatar Airways Cargo, Etihad Cargo, Lufthansa Cargo, Singapore Airlines Cargo, Cathay Cargo, Turkish Cargo, and Chinese carriers such as China Eastern Airlines and Air China internationally. We are not tied to a single airline — we choose the carrier that best fits your route, cargo type, and timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Do you ship cargo to China, and which airlines do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we ship to major Chinese destinations using carriers including China Eastern Airlines, Air China, China Southern, IndiGo's India–China routes, and dedicated freighter operators such as YTO Cargo Airlines and China Cargo Airlines. Note that direct freighter rights between India and China are restricted on some lanes, so routings may include a transit hub depending on your cargo and destination city — we will confirm the best option when you share your shipment details.",
      },
    },
    {
      "@type": "Question",
      name: "Can you arrange airlines that are certified for pharma or temperature-sensitive cargo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — for pharmaceuticals, life sciences, and other temperature-sensitive cargo, we route shipments through carriers with CEIV Pharma certification or equivalent cool-chain handling capability, such as Lufthansa Cargo, Qatar Airways Cargo, Emirates SkyCargo, Cathay Cargo, and Singapore Airlines Cargo. We confirm the carrier's cool-chain infrastructure at both the origin and destination airport before booking.",
      },
    },
    {
      "@type": "Question",
      name: "What if my preferred airline is not on your list?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our carrier network extends well beyond the airlines listed on this page — these are simply the ones we book most frequently. If you have a preferred airline, a destination not shown here, or a specialised cargo requirement, contact us with the details and we will check rates, schedules, and availability with that carrier or recommend the closest equivalent option.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance do I need to book air freight space with these carriers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For standard cargo on regular lanes, we recommend booking 3–5 days ahead of your ready date. During peak season (October–December and around major festivals), space on popular routes such as USA, Europe, and the Middle East tightens — we advise booking 7–10 days in advance, or earlier for large or urgent volumes, so we can secure guaranteed allotments with our partner airlines.",
      },
    },
  ],
};

const indianCarriers = [
  { name: "Air India Cargo", code: "AI", type: "Combination carrier (belly cargo + freighters)", routes: "USA, UK, Europe, Middle East, Southeast Asia, Australia", notes: "Wide international network from Delhi, Mumbai, Hyderabad, Bangalore, Chennai." },
  { name: "IndiGo Cargo", code: "6E", type: "Belly cargo on passenger flights", routes: "Domestic + Middle East, Southeast Asia, select China routes", notes: "Strong domestic feeder network connecting to major export gateways." },
  { name: "Blue Dart Aviation", code: "BZ", type: "Dedicated freighter operator", routes: "Domestic express network, select international lanes", notes: "India's own express freighter fleet — fast domestic-to-gateway connections." },
  { name: "SpiceXpress", code: "SG", type: "Dedicated freighter / belly cargo", routes: "Domestic, Middle East, Southeast Asia", notes: "Cargo arm of SpiceJet — flexible charter and scheduled freighter capacity." },
  { name: "Air India Express", code: "IX", type: "Belly cargo on passenger flights", routes: "Middle East, Southeast Asia", notes: "Useful for smaller consignments to Gulf and ASEAN destinations from regional airports." },
];

const gulfCarriers = [
  { name: "Emirates SkyCargo", code: "EK", hub: "Dubai (DXB)", notes: "Extensive freighter and belly-cargo network connecting India to the Americas, Europe, and Africa via Dubai." },
  { name: "Qatar Airways Cargo", code: "QR", hub: "Doha (DOH)", notes: "Strong pharma and perishables handling; CEIV Pharma certified hubs and wide global reach." },
  { name: "Etihad Cargo", code: "EY", hub: "Abu Dhabi (AUH)", notes: "Reliable connections to Europe, the Americas, and Africa with dedicated cool-chain facilities." },
  { name: "flydubai Cargo", code: "FZ", hub: "Dubai (DXB / DWC)", notes: "Good fit for regional Gulf, CIS, and Eastern European routings on belly capacity." },
];

const globalCarriers = [
  { name: "Lufthansa Cargo", code: "LH", hub: "Frankfurt (FRA)", notes: "Major freighter operator with deep European and trans-Atlantic connections; CEIV Pharma certified." },
  { name: "Singapore Airlines Cargo", code: "SQ", hub: "Singapore (SIN)", notes: "Premium handling standards; strong Southeast Asia, Australia, and onward US West Coast connections." },
  { name: "Korean Air Cargo", code: "KE", hub: "Seoul Incheon (ICN)", notes: "Dedicated freighter fleet with strong Northeast Asia and trans-Pacific US routings." },
  { name: "Cathay Cargo", code: "CX", hub: "Hong Kong (HKG)", notes: "Extensive freighter network; well-suited for transshipment to East Asia, Australia, and the Americas." },
  { name: "Turkish Cargo", code: "TK", hub: "Istanbul (IST)", notes: "Wide-reaching network across Europe, Africa, and the Americas via the Istanbul hub." },
  { name: "Cargolux", code: "CV", hub: "Luxembourg (LUX)", notes: "All-freighter carrier; strong fit for heavy and project cargo into Central and Western Europe." },
];

const chineseCarriers = [
  { name: "China Eastern Airlines", code: "MU", hub: "Shanghai (PVG)", notes: "Belly-cargo and freighter capacity to Shanghai and onward Chinese destinations." },
  { name: "IndiGo (India–China routes)", code: "6E", hub: "Select Chinese gateway cities", notes: "Belly cargo on scheduled passenger routes connecting Indian cities to China." },
  { name: "Air China", code: "CA", hub: "Beijing (PEK)", notes: "Wide domestic Chinese network beyond the gateway city for onward distribution." },
  { name: "China Southern", code: "CZ", hub: "Guangzhou (CAN)", notes: "Strong Southern China and Pearl River Delta connections — a major manufacturing corridor." },
  { name: "YTO Cargo Airlines", code: "YG", hub: "Hangzhou (HGH)", notes: "Dedicated freighter operator focused on e-commerce and express cargo volumes." },
  { name: "China Cargo Airlines", code: "CK", hub: "Shanghai (PVG)", notes: "All-freighter carrier offering heavier-cargo capacity into Eastern China." },
];

const selectionCriteria = [
  { title: "Rate vs. transit time balance", desc: "We weigh cost against speed for your specific cargo — a cheaper routing with a longer transit isn't always the better choice if your buyer needs the goods urgently." },
  { title: "Freighter vs. belly cargo capacity", desc: "Dedicated freighters offer more space and flexible dimensions; belly cargo on passenger flights can mean faster, more frequent departures. We pick based on your volume and urgency." },
  { title: "Pharma / cool-chain certification", desc: "For temperature-sensitive cargo, we only route through carriers and hubs with proven cool-chain infrastructure — such as CEIV Pharma certified airlines and airports." },
  { title: "Dangerous goods (DG) handling capability", desc: "Not every carrier accepts every DG class. We confirm the airline's DG acceptance, packaging, and documentation requirements before booking your shipment." },
  { title: "Airport availability and connections", desc: "We match the carrier's network to the airports you can realistically use for pickup and last-mile delivery on both ends of the journey." },
  { title: "Space guarantees during peak season", desc: "Around October–December and major festivals, we secure allotment agreements with key carriers so your cargo isn't bumped when space gets tight." },
];

const routeReference = [
  { route: "USA — East Coast (JFK / ORD)", carriers: "Emirates SkyCargo, Qatar Airways Cargo, Lufthansa Cargo, Turkish Cargo" },
  { route: "USA — West Coast (LAX / SFO)", carriers: "Cathay Cargo, Singapore Airlines Cargo, Korean Air Cargo, Emirates SkyCargo" },
  { route: "United Kingdom (LHR)", carriers: "Air India Cargo, Emirates SkyCargo, Etihad Cargo, Qatar Airways Cargo" },
  { route: "Germany / Europe (FRA / AMS)", carriers: "Lufthansa Cargo, Turkish Cargo, Cargolux, Etihad Cargo" },
  { route: "UAE (DXB / AUH / SHJ)", carriers: "Emirates SkyCargo, Etihad Cargo, flydubai Cargo, Air India Express" },
  { route: "Singapore (SIN)", carriers: "Singapore Airlines Cargo, IndiGo Cargo, Air India Cargo" },
  { route: "China (PVG / CAN / PEK)", carriers: "China Eastern Airlines, China Southern, Air China, China Cargo Airlines" },
  { route: "Australia (SYD / MEL)", carriers: "Singapore Airlines Cargo, Cathay Cargo, Emirates SkyCargo" },
  { route: "East Africa (NBO / DAR)", carriers: "Qatar Airways Cargo, Etihad Cargo, Air India Cargo" },
  { route: "South Korea / Japan (ICN / NRT)", carriers: "Korean Air Cargo, Cathay Cargo, Singapore Airlines Cargo" },
];

const faqs = [
  { q: "Which airlines does Ambeza use for air freight from India?", a: "We work with a wide network of Indian and international cargo carriers — including Air India Cargo, IndiGo Cargo, Blue Dart Aviation, and SpiceXpress within India, and Emirates SkyCargo, Qatar Airways Cargo, Etihad Cargo, Lufthansa Cargo, Singapore Airlines Cargo, Cathay Cargo, Turkish Cargo, and Chinese carriers such as China Eastern Airlines and Air China internationally. We are not tied to a single airline — we choose the carrier that best fits your route, cargo type, and timeline." },
  { q: "Do you ship cargo to China, and which airlines do you use?", a: "Yes — we ship to major Chinese destinations using carriers including China Eastern Airlines, Air China, China Southern, IndiGo's India–China routes, and dedicated freighter operators such as YTO Cargo Airlines and China Cargo Airlines. Note that direct freighter rights between India and China are restricted on some lanes, so routings may include a transit hub depending on your cargo and destination city — we will confirm the best option when you share your shipment details." },
  { q: "Can you arrange airlines that are certified for pharma or temperature-sensitive cargo?", a: "Yes — for pharmaceuticals, life sciences, and other temperature-sensitive cargo, we route shipments through carriers with CEIV Pharma certification or equivalent cool-chain handling capability, such as Lufthansa Cargo, Qatar Airways Cargo, Emirates SkyCargo, Cathay Cargo, and Singapore Airlines Cargo. We confirm the carrier's cool-chain infrastructure at both the origin and destination airport before booking." },
  { q: "What if my preferred airline is not on your list?", a: "Our carrier network extends well beyond the airlines listed on this page — these are simply the ones we book most frequently. If you have a preferred airline, a destination not shown here, or a specialised cargo requirement, contact us with the details and we will check rates, schedules, and availability with that carrier or recommend the closest equivalent option." },
  { q: "How far in advance do I need to book air freight space with these carriers?", a: "For standard cargo on regular lanes, we recommend booking 3–5 days ahead of your ready date. During peak season (October–December and around major festivals), space on popular routes such as USA, Europe, and the Middle East tightens — we advise booking 7–10 days in advance, or earlier for large or urgent volumes, so we can secure guaranteed allotments with our partner airlines." },
];

export default function AirlinePartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(airlinePartnersFaqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-400 mb-4">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">→</span>
            <Link href="/services/air-freight" className="hover:text-white transition-colors">Air Freight</Link>
            <span className="mx-2">→</span>
            <span className="text-white">Airline Partners</span>
          </p>
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Air Freight</p>
            <h1 className="text-4xl font-bold mb-4">Airline Partners — Carriers We Work With</h1>
            <p className="text-slate-300 text-lg">We are not tied to one airline. Ambeza books across a wide network of Indian and international cargo carriers, choosing the one that fits your route, cargo type, certification needs, and timeline best.</p>
          </div>
        </div>
      </section>

      {/* Indian Carriers */}
      <SectionWrapper>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-3">Indian Carriers</h2>
          <p className="text-[#475569] max-w-3xl">Domestic and regionally-focused airlines we use for first-leg connections, regional exports, and feeder routes to international gateway hubs.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm min-w-[640px]">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="text-left p-4 rounded-tl-xl font-semibold">Airline</th>
                <th className="text-left p-4 font-semibold">IATA Code</th>
                <th className="text-left p-4 font-semibold">Type</th>
                <th className="text-left p-4 font-semibold">Key Routes</th>
                <th className="text-left p-4 rounded-tr-xl font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {indianCarriers.map((c, i) => (
                <tr key={c.name} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                  <td className="p-4 font-semibold text-[#0A1628] border-b border-[#E2E8F0]">{c.name}</td>
                  <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.code}</td>
                  <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.type}</td>
                  <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.routes}</td>
                  <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* International Carriers */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-3">International Carriers</h2>
          <p className="text-[#475569] max-w-3xl">Our global network spans Gulf hub carriers, major European and worldwide freighter operators, and dedicated China-focused airlines.</p>
        </div>

        {/* Gulf carriers */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#0A1628] mb-4">Gulf Carriers</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm min-w-[560px]">
              <thead>
                <tr className="bg-[#185FA5] text-white">
                  <th className="text-left p-4 rounded-tl-xl font-semibold">Airline</th>
                  <th className="text-left p-4 font-semibold">IATA Code</th>
                  <th className="text-left p-4 font-semibold">Hub</th>
                  <th className="text-left p-4 rounded-tr-xl font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {gulfCarriers.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="p-4 font-semibold text-[#0A1628] border-b border-[#E2E8F0]">{c.name}</td>
                    <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.code}</td>
                    <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.hub}</td>
                    <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* European & global freighter operators */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#0A1628] mb-4">European &amp; Global Freighter Operators</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm min-w-[560px]">
              <thead>
                <tr className="bg-[#185FA5] text-white">
                  <th className="text-left p-4 rounded-tl-xl font-semibold">Airline</th>
                  <th className="text-left p-4 font-semibold">IATA Code</th>
                  <th className="text-left p-4 font-semibold">Hub</th>
                  <th className="text-left p-4 rounded-tr-xl font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {globalCarriers.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="p-4 font-semibold text-[#0A1628] border-b border-[#E2E8F0]">{c.name}</td>
                    <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.code}</td>
                    <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.hub}</td>
                    <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chinese carriers */}
        <div>
          <h3 className="text-lg font-bold text-[#0A1628] mb-4">Chinese Carriers</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm min-w-[560px]">
              <thead>
                <tr className="bg-[#185FA5] text-white">
                  <th className="text-left p-4 rounded-tl-xl font-semibold">Airline</th>
                  <th className="text-left p-4 font-semibold">IATA Code</th>
                  <th className="text-left p-4 font-semibold">Hub</th>
                  <th className="text-left p-4 rounded-tr-xl font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {chineseCarriers.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="p-4 font-semibold text-[#0A1628] border-b border-[#E2E8F0]">{c.name}</td>
                    <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.code}</td>
                    <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.hub}</td>
                    <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{c.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm text-[#475569]"><span className="font-semibold text-[#0A1628]">Note on India–China routings: </span>direct freighter rights between India and China are restricted on certain lanes. Depending on your cargo and destination city, your shipment may be routed via a transit hub such as Hong Kong, Singapore, or a Southeast Asian gateway. We confirm the most efficient available routing once we have your shipment details.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* How Ambeza selects carriers */}
      <SectionWrapper>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-3">How Ambeza selects carriers</h2>
          <p className="text-[#475569] max-w-2xl mx-auto">We don't default to the same airline for every shipment. Each booking is matched against these factors to find the right carrier for your specific cargo.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectionCriteria.map(({ title, desc }) => (
            <div key={title} className="bg-white border border-[#E2E8F0] rounded-xl p-6">
              <h3 className="font-bold text-[#0A1628] mb-2">{title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Route x carrier reference table */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-3">Route × carrier quick reference</h2>
          <p className="text-[#475569] max-w-3xl">A quick guide to which carriers we typically use on popular export lanes from India. Actual carrier and routing depend on your origin city, cargo type, and schedule on the day of booking.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm min-w-[560px]">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="text-left p-4 rounded-tl-xl font-semibold">Destination</th>
                <th className="text-left p-4 rounded-tr-xl font-semibold">Typical Carriers</th>
              </tr>
            </thead>
            <tbody>
              {routeReference.map((r, i) => (
                <tr key={r.route} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                  <td className="p-4 font-semibold text-[#0A1628] border-b border-[#E2E8F0] whitespace-nowrap">{r.route}</td>
                  <td className="p-4 text-[#475569] border-b border-[#E2E8F0]">{r.carriers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-8 text-center">Airline partners — frequently asked questions</h2>
          <div className="space-y-5">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6">
                <p className="font-bold text-[#0A1628] mb-2">{q}</p>
                <p className="text-sm text-[#475569] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[#185FA5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to ship? We&apos;ll find the best carrier for your route.</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Tell us your origin, destination, and cargo details — we&apos;ll match you with the airline that offers the right balance of speed, cost, and handling capability.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#185FA5] font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-colors inline-block">Get a Quote</Link>
            <Link href="/services/air-freight" className="border border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors inline-block">Back to Air Freight</Link>
          </div>
        </div>
      </section>
    </>
  );
}
