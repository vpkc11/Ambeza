import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Export Customs Clearance India — Licensed CHA Services",
  description: "Licensed in-house CHA for export customs clearance across India. Shipping Bill filing on ICEGATE, all examination channels, LEO tracking, RoDTEP and Duty Drawback selection. No subcontracting.",
  keywords: [
    "customs clearance India",
    "CHA services India",
    "shipping bill filing ICEGATE",
    "export customs agent India",
    "LEO India",
    "customs house agent Hyderabad Mumbai Chennai",
    "RoDTEP Drawback filing",
  ],
};

const customsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need a CHA to export from India?", acceptedAnswer: { "@type": "Answer", text: "Yes — a licensed Customs House Agent (CHA) is required to file the Shipping Bill on ICEGATE. Only a licensed G Card or F Card holder under CBLR 2018 can file export documents with customs. Ambeza employs its own licensed CHA team." } },
    { "@type": "Question", name: "What is a Shipping Bill and why is it important?", acceptedAnswer: { "@type": "Answer", text: "The Shipping Bill is the master export declaration filed on ICEGATE before cargo can be exported. It declares the goods, their FOB value, HSN code, and whether you are claiming RoDTEP or Duty Drawback. The Let Export Order (LEO) is endorsed on it once customs clears the goods." } },
    { "@type": "Question", name: "What is LEO (Let Export Order)?", acceptedAnswer: { "@type": "Answer", text: "Let Export Order (LEO) is the final customs clearance endorsed on your Shipping Bill on ICEGATE. Cargo cannot be loaded until LEO is granted. Ambeza tracks LEO in real time and notifies you as soon as clearance is obtained." } },
    { "@type": "Question", name: "What are Green, Yellow, and Red channels in Indian customs?", acceptedAnswer: { "@type": "Answer", text: "Green Channel: no physical examination, LEO granted on documents alone (2–4 hours). Yellow Channel: document examination only (4–12 hours). Red Channel: physical examination of cargo plus documents (12–24 hours). Ambeza's CHA team is present on-site for all channels." } },
    { "@type": "Question", name: "What are RoDTEP and Duty Drawback?", acceptedAnswer: { "@type": "Answer", text: "RoDTEP and Duty Drawback are government refund schemes for taxes embedded in export production costs. Your CHA must select the correct scheme at Shipping Bill filing — you cannot switch after LEO. Ambeza pre-selects the higher-benefit option for every shipment." } },
  ],
};

export default function CustomsClearancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(customsFaqSchema) }} />
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Services</p>
            <h1 className="text-4xl font-bold mb-4">Export Customs Clearance</h1>
            <p className="text-slate-300 text-lg">Our in-house licensed Customs House Agents (CHA) file your Shipping Bill on ICEGATE, handle all examination channels, and ensure your LEO is obtained without delays.</p>
          </div>
        </div>
      </section>
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-[#185FA5]/10 border border-[#185FA5]/20 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="h-6 w-6 text-[#185FA5]" />
                <h3 className="font-bold text-[#0A1628]">In-house CHA — we don't subcontract</h3>
              </div>
              <p className="text-sm text-[#475569]">Most freight forwarders hand your Shipping Bill to a third-party CHA. We don't. Our own licensed CHA team files directly on ICEGATE. This means faster clearance, direct accountability, and you know exactly who is handling your cargo.</p>
            </div>
            <h2 className="text-xl font-bold text-[#0A1628] mb-4">What our CHA service includes</h2>
            <ul className="space-y-3">
              {[
                "Shipping Bill filing on ICEGATE",
                "All channel handling (Green, Yellow, Red)",
                "Examination support — CHA officer present for physical examinations",
                "LEO (Let Export Order) tracking and confirmation",
                "AD Code registration at port (one-time setup)",
                "RoDTEP and Drawback scheme selection — we pre-select the higher benefit",
                "Duty Drawback filing and follow-up",
                "All port documentation and coordination",
                "Compliance advisory — SCOMET, restricted items, licensing",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#475569]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
              <h3 className="font-bold text-[#0A1628] mb-4">What is ICEGATE?</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">ICEGATE (India Customs EDI Gateway) is the government portal where all Shipping Bills are filed electronically. Every export from India goes through ICEGATE.</p>
              <p className="text-sm text-[#475569] leading-relaxed">Our CHA submits your Shipping Bill here. The risk engine assigns your channel (Green/Yellow/Red). Once customs approves, the LEO is endorsed on your Shipping Bill — your legal clearance to export.</p>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-[#0A1628] mb-2">Customs at ports we cover</h3>
              {["JNPT / Nhava Sheva, Mumbai", "Chennai Sea Port", "Mundra, Gujarat", "Delhi Air Cargo (IGI)", "Hyderabad Air Cargo (RGIA)", "Kolkata Sea Port and ICD", "Bangalore Air Cargo"].map(port => (
                <div key={port} className="flex items-center gap-2 text-sm text-[#475569]">
                  <div className="w-1.5 h-1.5 bg-[#185FA5] rounded-full" /> {port}
                </div>
              ))}
            </div>
            <Link href="/contact" className="block text-center bg-[#185FA5] text-white font-semibold py-4 rounded-2xl hover:bg-[#14508a] transition-colors">
              Discuss Customs Clearance
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Examination channels */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-3">Green, Yellow, and Red channel — what they mean</h2>
          <p className="text-[#475569] max-w-2xl mx-auto">When your Shipping Bill is filed on ICEGATE, the customs risk engine assigns one of three examination channels. Here is what happens in each.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[
            {
              channel: "Green Channel",
              color: "border-green-500 bg-green-50",
              badge: "bg-green-500 text-white",
              time: "~2–4 hours",
              what: "No physical examination. Customs clears the shipment on the basis of the filed documents alone. LEO is granted automatically after document processing.",
              when: "Most routine shipments by established exporters with clean records.",
            },
            {
              channel: "Yellow Channel",
              color: "border-amber-500 bg-amber-50",
              badge: "bg-amber-500 text-white",
              time: "~4–12 hours",
              what: "Document examination — customs reviews original invoices, packing lists, licences, and certificates. No physical check of cargo. LEO granted after document verification.",
              when: "New exporters, higher-value goods, or when risk parameters flag the shipment for a check.",
            },
            {
              channel: "Red Channel",
              color: "border-red-500 bg-red-50",
              badge: "bg-red-500 text-white",
              time: "~12–24 hours",
              what: "Physical examination of cargo in addition to document check. A customs officer opens and inspects the consignment. Our CHA team is present for all red channel examinations.",
              when: "New exporters, mis-declared cargo flags, high-risk categories, or random selection.",
            },
          ].map(({ channel, color, badge, time, what, when }) => (
            <div key={channel} className={`border-2 rounded-2xl p-6 ${color}`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${badge}`}>{channel}</span>
                <span className="text-xs text-[#475569] font-medium">~{time}</span>
              </div>
              <p className="text-sm text-[#0A1628] font-semibold mb-2">What happens:</p>
              <p className="text-sm text-[#475569] mb-4 leading-relaxed">{what}</p>
              <p className="text-sm text-[#0A1628] font-semibold mb-1">Triggered when:</p>
              <p className="text-xs text-[#475569] leading-relaxed">{when}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 max-w-4xl mx-auto">
          <div className="bg-white border border-[#185FA5]/30 rounded-xl p-5 text-center">
            <p className="font-semibold text-[#0A1628] mb-1">Ambeza&apos;s CHA team is physically present for Yellow and Red channel examinations</p>
            <p className="text-sm text-[#475569]">Unlike outsourced CHA agents, our team is on-site at the examination — reducing delays and ensuring correct handling.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-8 text-center">Customs clearance — frequently asked questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Do I need a CHA to export from India?",
                a: "Yes — a licensed Customs House Agent (CHA) is required to file the Shipping Bill on ICEGATE on your behalf. Under the Customs Act, only a licensed G Card or F Card holder can file export documents with customs. Ambeza employs its own licensed CHA team — no subcontracting.",
              },
              {
                q: "What is a Shipping Bill and why is it important?",
                a: "The Shipping Bill is the master export declaration — it is filed on ICEGATE before your cargo can be exported. It declares the goods, their value (FOB), HSN code, Incoterm, and whether you are claiming RoDTEP or Duty Drawback. The Let Export Order (LEO) is endorsed on the Shipping Bill once customs clears the goods.",
              },
              {
                q: "How long does export customs clearance take in India?",
                a: "Green Channel: 2–6 hours after filing. Yellow Channel: 4–12 hours. Red Channel (physical examination): 12–24 hours. Air cargo customs is generally faster than sea cargo. Ambeza's in-house CHA team accelerates clearance by being present on-site and resolving queries directly.",
              },
              {
                q: "What is LEO and how do I know my cargo has been cleared?",
                a: "Let Export Order (LEO) is the final customs clearance — it is endorsed on your Shipping Bill on ICEGATE. Until LEO is granted, your cargo cannot be loaded. Ambeza tracks LEO in real time and notifies you as soon as clearance is obtained. You can also check it yourself on ICEGATE using your Shipping Bill number.",
              },
              {
                q: "What are RoDTEP and Duty Drawback, and how do I claim them?",
                a: "RoDTEP (Remission of Duties and Taxes on Exported Products) and Duty Drawback are government refund schemes for taxes embedded in your production cost. Your CHA must select the correct scheme at the time of Shipping Bill filing — you cannot switch after LEO. Ambeza's team pre-selects the higher-benefit option for every shipment and follows up on disbursement.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6">
                <p className="font-bold text-[#0A1628] mb-2">{q}</p>
                <p className="text-sm text-[#475569] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
