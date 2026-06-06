import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = { title: "Industries We Serve — Export Logistics India", description: "Ambeza ships for agriculture, pharma, textiles, machinery, gems, electronics, chemicals and more from India to the world." };

const industries = [
  { emoji: "🌾", label: "Agriculture & Food", slug: "agriculture", desc: "Spices, rice, wheat, seafood, processed food — we handle APEDA, phytosanitary, and FSSAI certifications." },
  { emoji: "💊", label: "Pharmaceuticals", slug: "pharma", desc: "Formulations, APIs, vaccines — GMP, WHO-GMP, CDSCO NOC, temperature-controlled logistics." },
  { emoji: "🚗", label: "Auto Parts", slug: "auto-parts", desc: "Components, assemblies, complete vehicles — RTO NOC, sea and air, worldwide distribution." },
  { emoji: "🧵", label: "Textiles & Garments", slug: "textiles", desc: "Fabrics, ready-made garments, made-ups — AEPC, GSP CoO, buyer inspection handling." },
  { emoji: "⚙️", label: "Machinery & Engineering", slug: "machinery", desc: "Heavy machinery, precision parts, ODC cargo — ISPM-15 fumigation, sea and air." },
  { emoji: "💻", label: "Electronics", slug: "electronics", desc: "Consumer electronics, industrial equipment — WPC, lithium battery DG handling." },
  { emoji: "💎", label: "Gems & Jewellery", slug: "gems-jewellery", desc: "Diamonds, gold jewellery, precious stones — KP Certificate, GJEPC, high-security packaging." },
  { emoji: "🌿", label: "Chemicals", slug: "chemicals", desc: "Industrial chemicals, agrochemicals — MSDS, SCOMET check, DG certification, CHEMEXCIL RCMC." },
  { emoji: "🛢️", label: "Bulk Commodities", slug: "bulk-commodities", desc: "Iron ore, fertilisers, bulk grains — break bulk and bulk vessel coordination." },
  { emoji: "🏗️", label: "Renewable Energy", slug: "renewable-energy", desc: "Solar panels, wind components, batteries — ODC, project cargo, EV battery DG handling." },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
            <p className="text-slate-300 text-lg">Every industry has different documentation, certifications, and handling requirements. Ambeza specialises in them all.</p>
          </div>
        </div>
      </section>
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ emoji, label, slug, desc }) => (
            <Link key={slug} href={`/industries/${slug}`} className="group bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#185FA5] hover:shadow-md transition-all">
              <div className="text-3xl mb-3">{emoji}</div>
              <h2 className="font-bold text-[#0A1628] mb-2 group-hover:text-[#185FA5] transition-colors">{label}</h2>
              <p className="text-sm text-[#475569] mb-3">{desc}</p>
              <span className="text-[#185FA5] text-sm font-semibold inline-flex items-center gap-1">
                See requirements <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
