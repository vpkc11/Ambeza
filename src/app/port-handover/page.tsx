import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "What Happens After You Hand Over Cargo | Port Handover Guide",
  description:
    "You handed us your cargo. Here is exactly what happens next — customs channels, LEO, Gate Pass, EGM, and what you receive at every stage.",
};

const firstTimeSteps = [
  { num: "01", title: "Get your IEC Code", desc: "Importer Exporter Code — apply online at DGFT portal (dgft.gov.in). Fee: ₹500. Takes 1–2 working days. This is mandatory for all commercial exports." },
  { num: "02", title: "Register AD Code at port", desc: "AD Code (Authorised Dealer Bank Code) links your bank account to the port. Must be done once per port where you export. Ambeza helps you register this." },
  { num: "03", title: "Register on ICEGATE", desc: "ICEGATE is the customs portal where your Shipping Bill will be filed. Your CHA (us) files on your behalf once you are registered." },
  { num: "04", title: "Get RCMC if needed", desc: "Registration Cum Membership Certificate from your export promotion council (APEDA, FIEO, CHEMEXCIL, etc.). Required for sector-specific benefits and some certifications." },
  { num: "05", title: "Register for GST LUT", desc: "Letter of Undertaking (LUT) for GST allows you to export without paying IGST upfront. File online on GST portal — valid for one year." },
  { num: "06", title: "Open forex account", desc: "Your bank needs to set up a forex account to receive foreign currency payments. Discuss with your banker before the first shipment." },
  { num: "07", title: "Ambeza onboarding", desc: "Share your IEC, GST certificate, and AD Code with us. We set up your profile for all future shipments." },
];

const handoverSteps = [
  {
    num: "01",
    title: "Cargo arrives at CFS / ICD",
    time: "Day 1–2",
    desc: "Our truck delivers your cargo to the CFS (Container Freight Station) or ICD (Inland Container Depot) as per the port. Cargo is weighed, inspected for count vs packing list, and a CFS Receipt is issued.",
    youReceive: "CFS Receipt / Gate-in receipt",
  },
  {
    num: "02",
    title: "Cargo stuffed into container",
    time: "Day 2–3",
    desc: "For FCL (Full Container Load): your container is allocated and stuffed. For LCL (shared container): cargo is consolidated with other exporters' cargo at the CFS. Container seal number recorded.",
    youReceive: "Stuffing report",
  },
  {
    num: "03",
    title: "CHA files Shipping Bill on ICEGATE",
    time: "Day 2–3",
    desc: "This is the master export declaration. Our CHA submits: your IEC, exporter details, HSN code, product description, declared value, quantity, port, vessel/flight details, drawback/RoDTEP claims.",
    youReceive: "Shipping Bill number (track on ICEGATE)",
  },
  {
    num: "04",
    title: "ICEGATE risk engine assigns channel",
    time: "Same day",
    desc: "The customs risk engine automatically assigns a clearance channel based on your exporter profile, HSN code, value, and random sampling.",
    channel: true,
  },
  {
    num: "05",
    title: "Examination / assessment (if needed)",
    time: "Day 3–4",
    desc: "Yellow channel: customs officer verifies documents only — no physical examination. Red channel: Ambeza CHA officer is present during physical examination of cargo. Examination results recorded.",
    youReceive: "Examination report (if Red/Yellow channel)",
  },
  {
    num: "06",
    title: "LEO — Let Export Order issued",
    time: "Day 3–5",
    desc: "This is the customs department's formal permission to export. Once LEO is issued, your cargo is legally cleared for export from India. No further customs examination after this.",
    youReceive: "Shipping Bill with LEO endorsement",
    highlight: true,
  },
  {
    num: "07",
    title: "Gate Pass from port / CFS",
    time: "Day 3–5",
    desc: "After LEO, the port or CFS issues a Gate Pass. This is the physical container release document. The Gate Pass allows the container to exit the CFS/port to be loaded onto the vessel.",
    youReceive: "Gate Pass copy",
    highlight: true,
  },
  {
    num: "08",
    title: "Container loaded onto vessel / aircraft",
    time: "Sailing day",
    desc: "Container is loaded. Bill of Lading (for sea) or Airway Bill (for air) is issued by the carrier. This is your contract with the carrier and proof that cargo has been shipped.",
    youReceive: "Bill of Lading / Airway Bill",
  },
  {
    num: "09",
    title: "EGM filed by carrier",
    time: "After departure",
    desc: "Export General Manifest is filed by the shipping line or airline with customs after the vessel/aircraft departs. EGM filing is what triggers your RoDTEP credit and Duty Drawback eligibility.",
    youReceive: "EGM details (tracked by Ambeza)",
  },
  {
    num: "10",
    title: "FIRC — proof of payment",
    time: "After buyer pays",
    desc: "Foreign Inward Remittance Certificate is issued by your bank when your buyer's foreign currency payment arrives in your account. This completes the export cycle.",
    youReceive: "FIRC from your bank",
  },
];

export default function PortHandoverPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Transparency</p>
            <h1 className="text-4xl font-bold mb-4">You handed us your cargo. Here is exactly what happens next.</h1>
            <p className="text-slate-300 text-lg">No black boxes. Every step is visible, tracked, and explained — from the moment your truck arrives at the port to the day your RoDTEP credit arrives.</p>
          </div>
        </div>
      </section>

      {/* First-time setup */}
      <SectionWrapper className="bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">!</div>
            <div>
              <h2 className="text-2xl font-bold text-[#0A1628] mb-1">First time exporting? Complete this one-time setup first.</h2>
              <p className="text-[#475569] text-sm">These are done once per company. Once set up, all future shipments are faster.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {firstTimeSteps.map(({ num, title, desc }) => (
              <div key={num} className="bg-white rounded-xl p-5 border border-amber-200">
                <div className="flex items-start gap-3">
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">{num}</span>
                  <div>
                    <p className="font-semibold text-[#0A1628] text-sm mb-1">{title}</p>
                    <p className="text-xs text-[#475569] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Main handover flow */}
      <SectionWrapper>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">
            After handover — 10 steps from CFS to completion
          </h2>
          <p className="text-[#475569]">Every step shown. Every document named. Nothing hidden.</p>
        </div>

        <div className="space-y-5 max-w-4xl mx-auto">
          {handoverSteps.map(({ num, title, time, desc, youReceive, channel, highlight }) => (
            <div
              key={num}
              className={`rounded-2xl border-2 p-7 ${
                highlight
                  ? "border-[#185FA5] bg-[#185FA5]/5"
                  : "border-[#E2E8F0] bg-white"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    highlight ? "bg-[#185FA5] text-white" : "bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A1628]"
                  }`}>
                    {num}
                  </div>
                  <h3 className="font-bold text-[#0A1628]">{title}</h3>
                </div>
                <span className="text-xs font-semibold bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-full text-[#475569] whitespace-nowrap">
                  {time}
                </span>
              </div>

              <p className="text-sm text-[#475569] mb-4 leading-relaxed">{desc}</p>

              {channel && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  {[
                    { color: "green", label: "Green Channel", desc: "Auto-cleared. No physical examination. Most shipments qualify." },
                    { color: "yellow", label: "Yellow Channel", desc: "Documents checked by customs officer. No physical examination of goods." },
                    { color: "red", label: "Red Channel", desc: "Physical examination of cargo. Ambeza CHA present throughout. Usually same day." },
                  ].map(({ color, label, desc: channelDesc }) => (
                    <div
                      key={label}
                      className={`rounded-xl p-4 border-2 ${
                        color === "green" ? "bg-green-50 border-green-200" : color === "yellow" ? "bg-amber-50 border-amber-200" : "bg-red-50 border-red-200"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-3 h-3 rounded-full ${color === "green" ? "bg-green-500" : color === "yellow" ? "bg-amber-500" : "bg-red-500"}`} />
                        <span className="font-semibold text-sm text-[#0A1628]">{label}</span>
                      </div>
                      <p className="text-xs text-[#475569]">{channelDesc}</p>
                    </div>
                  ))}
                </div>
              )}

              {youReceive && (
                <div className="flex items-center gap-2 bg-[#10B981]/10 rounded-lg px-4 py-2.5">
                  <CheckCircle className="h-4 w-4 text-[#10B981] flex-shrink-0" />
                  <span className="text-xs font-semibold text-[#0A1628]">You receive: {youReceive}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* LEO vs Gate Pass explainer */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">LEO vs Gate Pass — what is the difference?</h2>
          <p className="text-[#475569]">These two documents are often confused. Here is what each one means.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white border-2 border-[#185FA5] rounded-2xl p-7">
            <h3 className="text-xl font-bold text-[#0A1628] mb-3">LEO — Let Export Order</h3>
            <div className="space-y-3 text-sm text-[#475569]">
              <p><strong className="text-[#0A1628]">Who issues it:</strong> Indian Customs (CBIC)</p>
              <p><strong className="text-[#0A1628]">What it means:</strong> Customs has cleared your cargo for export. No further customs examination. Legal permission to take cargo out of India.</p>
              <p><strong className="text-[#0A1628]">Appears on:</strong> Your Shipping Bill (endorsed by customs officer)</p>
              <p><strong className="text-[#0A1628]">Why it matters:</strong> Without LEO, your cargo cannot be loaded. It is the customs clearance certificate for exports.</p>
            </div>
          </div>
          <div className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-7">
            <h3 className="text-xl font-bold text-[#0A1628] mb-3">Gate Pass</h3>
            <div className="space-y-3 text-sm text-[#475569]">
              <p><strong className="text-[#0A1628]">Who issues it:</strong> Port Authority / CFS management</p>
              <p><strong className="text-[#0A1628]">What it means:</strong> Physical permission for the container to exit the CFS gate and move to the vessel loading area.</p>
              <p><strong className="text-[#0A1628]">Appears on:</strong> Separate CFS/port document</p>
              <p><strong className="text-[#0A1628]">Why it matters:</strong> Without Gate Pass, the truck driver cannot take the container to the ship. LEO must come before Gate Pass.</p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-6">
          <div className="flex items-center justify-center gap-3 text-sm text-[#475569]">
            <span className="bg-[#185FA5] text-white px-3 py-1 rounded-full text-xs font-bold">Customs clears → LEO issued</span>
            <ChevronRight className="h-4 w-4" />
            <span className="bg-[#475569] text-white px-3 py-1 rounded-full text-xs font-bold">Port issues Gate Pass</span>
            <ChevronRight className="h-4 w-4" />
            <span className="bg-[#10B981] text-white px-3 py-1 rounded-full text-xs font-bold">Container loaded</span>
          </div>
        </div>
      </SectionWrapper>

      {/* What you receive */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-8 text-center">
            What Ambeza delivers to you — every shipment
          </h2>
          <div className="space-y-3">
            {[
              { doc: "Shipping Bill copy (with LEO endorsed)", note: "Your proof of customs clearance" },
              { doc: "Bill of Lading (sea) or Airway Bill (air)", note: "Your contract with the carrier" },
              { doc: "Certificate of Origin", note: "Proof goods were made in India" },
              { doc: "All product-specific certificates", note: "Phytosanitary, CoA, FSSAI, etc." },
              { doc: "Live tracking link", note: "See where your cargo is at all times" },
              { doc: "RoDTEP / Drawback tracking confirmation", note: "We monitor your refunds for you" },
              { doc: "FIRC tracking (post-payment)", note: "We confirm your bank has reported remittance" },
            ].map(({ doc, note }) => (
              <div key={doc} className="flex items-start gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
                <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0A1628] text-sm">{doc}</p>
                  <p className="text-xs text-[#475569] mt-0.5">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
