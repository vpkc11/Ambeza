import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const industriesData: Record<string, {
  label: string; emoji: string; intro: string;
  documents: string[]; challenges: string[]; tips: string[];
}> = {
  agriculture: {
    label: "Agriculture & Food Exports", emoji: "🌾",
    intro: "India is one of the world's largest agricultural exporters. Spices, rice, wheat, seafood, processed foods — each has specific certification requirements. Getting the paperwork right is the difference between a smooth export and a rejected consignment at the destination.",
    documents: ["APEDA Certificate (for notified products)", "Phytosanitary Certificate (NPPO India)", "Fumigation Certificate (for grains)", "FSSAI Export Certificate (for processed food)", "Spices Board Certificate (for spices)", "MPEDA Certificate (for seafood)", "Quality Certificate from authorised labs"],
    challenges: ["Policy changes frequently (e.g. non-Basmati rice export restrictions in 2023)", "Phytosanitary requirements differ by destination country", "Many destinations require pre-export testing for pesticide residue", "Packaging must meet destination country labelling rules"],
    tips: ["Always verify current DGFT policy before booking", "Build 2–3 extra days for lab testing and certification", "Use APEDA-registered exporters label for better market access"],
  },
  pharma: {
    label: "Pharmaceutical Exports", emoji: "💊",
    intro: "India is the pharmacy of the world — the largest supplier of generic medicines globally. But pharmaceutical exports require precise documentation, cold chain handling, and regulatory compliance.",
    documents: ["WHO-GMP Certificate (for regulated markets)", "CDSCO NOC (for scheduled substances)", "Certificate of Analysis (CoA)", "Certificate of Pharmaceutical Product (CoPP)", "GMP Certificate", "MSDS for APIs", "Temperature excursion report for cold chain"],
    challenges: ["Different regulatory approvals needed for each destination country", "Cold chain integrity must be documented from factory to airport", "DG classification for some APIs", "US FDA, EU EMA requirements for regulated market exports"],
    tips: ["Pre-qualify your product for target markets before the first shipment", "Use validated packaging for cold chain — insulated boxes with ice packs or dry ice", "Maintain chain of custody documentation for all pharma exports"],
  },
  "auto-parts": {
    label: "Auto Parts & Vehicles", emoji: "🚗",
    intro: "India exports auto parts to OEMs and aftermarket distributors worldwide. Complete vehicles, motorcycles, tractors, and every kind of component — sea freight for most, air for urgent spare parts.",
    documents: ["RTO NOC (for complete vehicles)", "WPC Approval (for wireless electronic components)", "Test and safety reports", "Homologation documents for destination market"],
    challenges: ["Lead times for RTO NOC can be 2–4 weeks for complete vehicles", "Lithium batteries in EVs classified as DG", "Ro-Ro shipping for complete vehicles has specific booking windows"],
    tips: ["For complete vehicles, start RTO NOC process early", "Drain fuel tanks before shipping", "For EV and hybrid vehicles, coordinate with us on DG requirements well in advance"],
  },
  textiles: {
    label: "Textiles & Garments", emoji: "🧵",
    intro: "India is the second largest textile exporter globally. Garments, fabrics, yarns, and made-ups for buyers across USA, EU, UK, and Asia. Documentation and buyer compliance are critical.",
    documents: ["AEPC/TEXPROCIL RCMC", "GSP Certificate of Origin (for EU/UK preferential duty)", "Buyer inspection certificate (for LC shipments)", "Handloom Mark Certificate (for handloom exports)", "AEO Certificate for trusted exporter status"],
    challenges: ["LC documentation — any discrepancy triggers non-payment", "EU sustainability requirements (REACH, OEKO-TEX)", "Buyer-specific labelling requirements"],
    tips: ["For EU exports, GSP Form A Certificate of Origin significantly reduces your buyer's import duty", "Coordinate buyer inspection timing with production completion — last-minute gaps delay shipment"],
  },
  machinery: {
    label: "Machinery & Engineering", emoji: "⚙️",
    intro: "Heavy machinery, precision engineering parts, industrial equipment — India's engineering exports are growing rapidly. ODC cargo, project cargo, and complex multi-modal shipments are our specialty.",
    documents: ["ISPM-15 Treatment Certificate (for wooden packaging/crating)", "Test and calibration certificates", "SCOMET check (for dual-use equipment)", "Weight and dimension certificate for ODC"],
    challenges: ["Heavy machinery often requires ODC permits from state highways", "ISPM-15 fumigation of wooden crates is mandatory for all destinations — frequently forgotten", "Oversized cargo may need vessel-specific planning"],
    tips: ["All wooden packaging MUST be ISPM-15 treated — inspections at destination reject untreated wood globally", "Book ODC trucks with adequate lead time — availability is limited"],
  },
  electronics: {
    label: "Electronics & Technology", emoji: "💻",
    intro: "Consumer electronics, industrial equipment, semiconductor components — India's electronics exports are growing 20%+ annually.",
    documents: ["WPC Approval (mandatory for all wireless devices)", "BIS Certification (if India Standard applies)", "SCOMET Licence (for encryption/dual-use tech)", "Lithium battery DG documentation"],
    challenges: ["WPC approval can take 4–8 weeks — plan early", "Many electronic products contain lithium batteries (DG Class 9)", "Export control (SCOMET) applies to some encryption products"],
    tips: ["Check WPC requirements before finalising your product for export", "Identify all products containing lithium batteries and declare them as DG proactively"],
  },
  "gems-jewellery": {
    label: "Gems & Jewellery", emoji: "💎",
    intro: "India is the world's largest diamond cutting and polishing centre, and a major exporter of gold jewellery. High-value, security-sensitive shipments handled with specialist care.",
    documents: ["Kimberley Process Certificate (for diamonds)", "BIS Hallmark Certificate (for gold)", "GJEPC RCMC", "Valuation Certificate", "Bank security/insurance documentation"],
    challenges: ["High declared value triggers additional scrutiny", "Insurance requirements — standard cargo policies may be insufficient", "Destination customs requirements vary significantly"],
    tips: ["Declared value on invoice must match exactly what is insured", "Use secure, tamper-evident packaging — photograph before sealing", "Keep GJEPC RCMC current"],
  },
  chemicals: {
    label: "Chemicals & Agrochemicals", emoji: "🌿",
    intro: "India exports industrial chemicals, agrochemicals, and specialty chemicals globally. Most chemicals are Dangerous Goods — proper documentation and packaging is non-negotiable.",
    documents: ["MSDS (Material Safety Data Sheet)", "UN Number and Packing Group Declaration", "DG Shipper's Declaration (SDDG)", "CHEMEXCIL RCMC", "SCOMET Licence (if dual-use)"],
    challenges: ["Most chemicals are DG — requires UN-certified packaging", "Some chemicals restricted or prohibited for export", "Different UN numbers for different concentrations of the same substance"],
    tips: ["Never guess the UN number — wrong classification is a serious offence", "SCOMET check is mandatory for all chemicals that have dual-use applications"],
  },
  "bulk-commodities": {
    label: "Bulk Commodities", emoji: "🛢️",
    intro: "Iron ore, coal, fertilisers, bulk grains, and other commodities — handled through break bulk and bulk vessel coordination at major Indian ports.",
    documents: ["Weight and quality certificate", "Sampling and analysis report", "Charter party agreement", "Mate's receipt"],
    challenges: ["Vessel nomination and berth availability at major ports", "Contamination risk during loading — requires specialist supervision", "Export duty applicable on some commodities"],
    tips: ["Work with a surveyor at loading to certify weight and quality", "Verify current export duty rates before finalising pricing"],
  },
  "renewable-energy": {
    label: "Renewable Energy", emoji: "🏗️",
    intro: "Solar panels, wind turbine components, battery packs, and renewable energy equipment — often oversized and heavy, requiring specialist logistics.",
    documents: ["ODC permits (for oversized components)", "DG documentation (for lithium battery packs)", "ISPM-15 for wooden crating", "Installation manuals and technical documents for destination customs"],
    challenges: ["Wind turbine blades and nacelles are ODC — require route surveys", "Lithium battery packs are DG Class 9 — strict packaging requirements", "Destination countries may require installation certification"],
    tips: ["For large solar projects, we handle end-to-end project logistics — coordinate early", "EV and energy storage batteries require specialised DG handling — start documentation 2 weeks early"],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = industriesData[slug];
  if (!data) return { title: "Industry Guide" };
  return {
    title: `${data.label} — Export Logistics from India`,
    description: data.intro.slice(0, 155),
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const data = industriesData[slug];

  if (!data) {
    return (
      <SectionWrapper>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-[#0A1628] mb-4">Industry page coming soon</h1>
          <Link href="/industries" className="text-[#185FA5] hover:underline">← Back to all industries</Link>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Link href="/industries" className="text-[#185FA5] text-sm font-medium hover:underline mb-3 inline-block">← All Industries</Link>
            <div className="text-4xl mb-2">{data.emoji}</div>
            <h1 className="text-4xl font-bold mb-4">{data.label}</h1>
            <p className="text-slate-300 text-lg">{data.intro}</p>
          </div>
        </div>
      </section>
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-4">Documents typically required</h2>
              <ul className="space-y-3">
                {data.documents.map(doc => (
                  <li key={doc} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#475569]">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-4">Common challenges</h2>
              <ul className="space-y-3">
                {data.challenges.map(c => (
                  <li key={c} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-[#475569]">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-5">
            <div className="bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-2xl p-6">
              <h3 className="font-bold text-[#0A1628] mb-3">Tips from our team</h3>
              <ul className="space-y-3">
                {data.tips.map(tip => (
                  <li key={tip} className="text-sm text-[#475569] border-l-2 border-[#185FA5] pl-3">{tip}</li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="block text-center bg-[#185FA5] text-white font-semibold py-4 rounded-2xl hover:bg-[#14508a] transition-colors">
              Get a Quote for {data.label}
            </Link>
            <Link href="/hsn-checker" className="block text-center border-2 border-[#185FA5] text-[#185FA5] font-semibold py-4 rounded-2xl hover:bg-[#185FA5] hover:text-white transition-colors text-sm">
              Check documents for your HSN code
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
