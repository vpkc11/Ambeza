import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ChevronRight, Plane, Ship } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "How Export Works — Step by Step",
  description:
    "Exporting from India explained in plain English. See every step from the first call to delivery abroad — customs, documents, shipping, payment.",
};

const steps = [
  {
    num: "01",
    title: "You share shipment details",
    subtitle: "A 10-minute call or WhatsApp is all it takes",
    youDo: "Tell us: product name and type, approximate weight/volume, destination country, required timeline.",
    weDo: "Review cargo type, check if the product has export restrictions (DGFT list), check if it is a Dangerous Good (DG), and prepare a quote.",
    time: "Same day",
    details: [
      "No forms to fill at this stage — just talk to us",
      "We tell you upfront if there are any restrictions or special requirements",
      "We identify if your product needs any RCMC, product certification, or pre-shipment inspection",
    ],
  },
  {
    num: "02",
    title: "You receive a fixed quote",
    subtitle: "No hidden charges — ever",
    youDo: "Review the quote. Ask questions. Confirm if you are happy.",
    weDo: "Send you an itemised cost breakdown covering: freight + CHA fee + documentation + inland pickup + any special handling.",
    time: "Within 24 hours",
    details: [
      "What you see is what you pay — no surprise charges at the port",
      "Quote includes all CHA fees, documentation, and Shipping Bill filing",
      "We tell you clearly: what we include and what you need to pay separately (e.g. cargo insurance)",
    ],
  },
  {
    num: "03",
    title: "Cargo pickup",
    subtitle: "Our truck comes to you",
    youDo: "Have your goods packed and ready. We guide you on packaging if needed.",
    weDo: "Our driver arrives at your premises, checks quantity against packing list, and issues a Lorry Receipt (LR). Cargo moves to the CFS (Container Freight Station) or ICD.",
    time: "Scheduled per booking",
    details: [
      "Lorry Receipt is your proof of handover — keep it safe",
      "We advise on packing requirements: sea-worthy, fumigation, DG packaging, etc.",
      "For DG cargo, we ensure compliant packaging before pickup",
    ],
  },
  {
    num: "04",
    title: "Export documents prepared",
    subtitle: "We handle all the paperwork",
    youDo: "Sign the Commercial Invoice (you set the declared value) and Packing List.",
    weDo: "Prepare Shipping Bill draft on ICEGATE, Certificate of Origin, any product-specific certificates (Phytosanitary, FSSAI, Spices Board, etc.).",
    time: "1–2 business days",
    details: [
      "Shipping Bill is the master export document — filed by our CHA on ICEGATE",
      "Certificate of Origin proves the goods were made in India (required by buyers and for duty benefits)",
      "We check your HSN code and flag any additional documents your specific product needs",
    ],
  },
  {
    num: "05",
    title: "Indian customs clearance",
    subtitle: "This is where most exporters get anxious. It should not be.",
    youDo: "Nothing. Our CHA handles this entirely.",
    weDo: "File the Shipping Bill on ICEGATE. The system's risk engine assigns a channel.",
    time: "1–3 days",
    channels: [
      {
        color: "green",
        label: "Green Channel",
        desc: "Auto-cleared. No physical examination. Most shipments fall here.",
      },
      {
        color: "yellow",
        label: "Yellow Channel",
        desc: "Documents checked by customs officer. No physical examination of goods.",
      },
      {
        color: "red",
        label: "Red Channel",
        desc: "Physical examination. Ambeza CHA officer is present throughout. Usually same day.",
      },
    ],
    details: [
      "LEO (Let Export Order) is issued after clearance — this is the official permission to export",
      "Our CHA is present for any examination — you don't need to be there",
      "AD Code (bank code) must be registered at your port before the first shipment — we help you do this",
    ],
  },
  {
    num: "06",
    title: "Cargo departs India",
    subtitle: "Your goods are on their way",
    youDo: "Nothing. We send you the tracking details.",
    weDo: "Load the container onto the vessel or cargo onto the aircraft. File EGM (Export General Manifest) — this is the final customs document that records actual loading.",
    time: "Per sailing / flight schedule",
    details: [
      "Bill of Lading (BL) for sea / Airway Bill (AWB) for air — you receive these as shipping proof",
      "EGM filing triggers your eligibility for RoDTEP and Duty Drawback refunds",
      "Live tracking link shared so you can see where your cargo is at any time",
    ],
  },
  {
    num: "07",
    title: "Delivered to buyer",
    subtitle: "The finish line",
    youDo: "Confirm delivery with your buyer. Receive payment per your terms.",
    weDo: "Coordinate with destination agents for last-mile delivery. After payment: FIRC (Foreign Inward Remittance Certificate) issued by your bank confirms foreign payment received.",
    time: "30–45 days after departure for RoDTEP/Drawback",
    details: [
      "FIRC is your proof of export earnings — mandatory for RoDTEP and bank records",
      "RoDTEP credit appears in your ICEGATE account as a transferable scrip",
      "Duty Drawback is credited directly to your bank account",
      "We track and follow up on all your refunds — you don't need to chase ICEGATE",
    ],
  },
];

const airVsSeaData = [
  { factor: "Transit time", air: "3–7 days", sea: "15–40 days" },
  { factor: "Cost per kg", air: "₹150–₹400", sea: "₹5–₹50" },
  { factor: "Weight range", air: "Best under 500 kg", sea: "Best above 500 kg" },
  { factor: "Cargo value", air: "High value (pharma, gems, electronics)", sea: "Any — especially bulk" },
  { factor: "Packaging", air: "Standard", sea: "Sea-worthy / fumigated" },
  { factor: "Documentation", air: "Airway Bill (AWB)", sea: "Bill of Lading (BL)" },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Complete Export Guide</p>
            <h1 className="text-4xl font-bold mb-4">Exporting from India — explained step by step</h1>
            <p className="text-slate-300 text-lg">Whether this is your first shipment or your hundredth, here is exactly what happens — from the first call to the money in your account.</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <SectionWrapper>
        <div className="space-y-12">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Number */}
              <div className="lg:col-span-1 flex lg:justify-center">
                <div className="w-14 h-14 bg-[#185FA5] text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-11 bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-[#0A1628]">{step.title}</h2>
                    <p className="text-[#185FA5] text-sm font-medium mt-0.5">{step.subtitle}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-[#185FA5]/10 text-[#185FA5] text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
                    <Clock className="h-3.5 w-3.5" />
                    {step.time}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
                  <div className="bg-[#F8FAFC] rounded-xl p-4">
                    <p className="text-xs font-semibold text-[#475569] uppercase tracking-wider mb-2">You do</p>
                    <p className="text-sm text-[#0F172A]">{step.youDo}</p>
                  </div>
                  <div className="bg-[#185FA5]/5 rounded-xl p-4">
                    <p className="text-xs font-semibold text-[#185FA5] uppercase tracking-wider mb-2">Ambeza does</p>
                    <p className="text-sm text-[#0F172A]">{step.weDo}</p>
                  </div>
                </div>

                {/* Channel allocation for step 5 */}
                {step.channels && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                    {step.channels.map(({ color, label, desc }) => (
                      <div
                        key={label}
                        className={`rounded-xl p-4 border-2 ${
                          color === "green"
                            ? "bg-green-50 border-green-200"
                            : color === "yellow"
                            ? "bg-amber-50 border-amber-200"
                            : "bg-red-50 border-red-200"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              color === "green" ? "bg-green-500" : color === "yellow" ? "bg-amber-500" : "bg-red-500"
                            }`}
                          />
                          <span className="font-semibold text-sm text-[#0A1628]">{label}</span>
                        </div>
                        <p className="text-xs text-[#475569]">{desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-2">
                  {step.details.map((d) => (
                    <div key={d} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-[#475569]">{d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-7 top-14 w-px h-12 bg-[#E2E8F0] lg:hidden" />
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Air vs Sea */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-10">
          <p className="text-[#185FA5] text-xs font-bold uppercase tracking-widest mb-3">Mode Selection</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] tracking-tight mb-3">Air or Sea — which is right for you?</h2>
          <p className="text-[#475569]">The choice affects cost, time, and documentation. Here is a clear comparison.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
          <div className="bg-white rounded-2xl p-7 border-2 border-[#185FA5]">
            <div className="flex items-center gap-3 mb-4">
              <Plane className="h-6 w-6 text-[#185FA5]" />
              <h3 className="text-xl font-bold text-[#0A1628]">Choose Air if...</h3>
            </div>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#10B981]" /> Shipment is urgent (needed in 3–7 days)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#10B981]" /> Weight is under 500 kg</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#10B981]" /> High-value goods (pharma, gems, electronics)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#10B981]" /> Perishable cargo</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-7 border-2 border-[#E2E8F0]">
            <div className="flex items-center gap-3 mb-4">
              <Ship className="h-6 w-6 text-[#475569]" />
              <h3 className="text-xl font-bold text-[#0A1628]">Choose Sea if...</h3>
            </div>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#10B981]" /> Cargo is heavy or bulky</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#10B981]" /> Not time-sensitive (15–40 days is fine)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#10B981]" /> Large volume (20ft or 40ft container)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#10B981]" /> Maximise cost savings per kg</li>
            </ul>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-2xl shadow-sm border border-[#E2E8F0]">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="text-left px-6 py-3 font-semibold text-[#475569]">Factor</th>
                <th className="px-6 py-3 font-semibold text-[#185FA5] text-center">Air Freight</th>
                <th className="px-6 py-3 font-semibold text-[#475569] text-center">Sea Freight</th>
              </tr>
            </thead>
            <tbody>
              {airVsSeaData.map(({ factor, air, sea }) => (
                <tr key={factor} className="border-t border-[#E2E8F0]">
                  <td className="px-6 py-3 font-medium text-[#0A1628]">{factor}</td>
                  <td className="px-6 py-3 text-center text-[#185FA5]">{air}</td>
                  <td className="px-6 py-3 text-center text-[#475569]">{sea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* Documents you need */}
      <SectionWrapper>
        <div className="text-center mb-10">
          <p className="text-[#185FA5] text-xs font-bold uppercase tracking-widest mb-3">Documentation</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] tracking-tight mb-3">Documents — what you need, what we prepare</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-bold text-[#0A1628] mb-4 flex items-center gap-2">
              <span className="bg-[#F59E0B]/20 text-[#F59E0B] px-3 py-1 rounded-full text-xs font-semibold">YOU PROVIDE</span>
            </h3>
            <ul className="space-y-3">
              {[
                { doc: "IEC Code", note: "Importer Exporter Code — mandatory. One-time registration." },
                { doc: "GST Certificate", note: "Your GST registration document." },
                { doc: "AD Code", note: "Bank code registered at port — one-time per port." },
                { doc: "Commercial Invoice", note: "You set the declared value of goods." },
                { doc: "Packing List", note: "Details of packages, quantities, weights." },
              ].map(({ doc, note }) => (
                <li key={doc} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#0A1628] text-sm">{doc}</span>
                    <p className="text-xs text-[#475569] mt-0.5">{note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#0A1628] mb-4 flex items-center gap-2">
              <span className="bg-[#185FA5]/20 text-[#185FA5] px-3 py-1 rounded-full text-xs font-semibold">AMBEZA PREPARES</span>
            </h3>
            <ul className="space-y-3">
              {[
                { doc: "Shipping Bill", note: "Filed on ICEGATE — the master export declaration." },
                { doc: "Certificate of Origin", note: "Proves goods are manufactured in India." },
                { doc: "Bill of Lading / Airway Bill", note: "Your contract with the carrier." },
                { doc: "Let Export Order (LEO)", note: "Customs permission to ship." },
                { doc: "Product certificates", note: "Phytosanitary, FSSAI, CoA — as applicable." },
              ].map(({ doc, note }) => (
                <li key={doc} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-[#185FA5] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0A1628] text-sm">{doc}</span>
                    <p className="text-xs text-[#475569] mt-0.5">{note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[#185FA5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to start your first export?</h2>
          <p className="text-white/80 text-lg mb-8">We handle every step. You just need your product and a buyer.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F59E0B] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#d97706] transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/new-exporter"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#185FA5] transition-colors inline-flex items-center gap-2"
            >
              New Exporter Guide <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Clock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
