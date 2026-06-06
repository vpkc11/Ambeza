"use client";

import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const articles = [
  {
    slug: "ship-india-to-usa",
    title: "How to Ship Cargo from India to the USA — Complete Guide",
    description:
      "Step-by-step process, air vs ocean comparison, US customs, ISF filing, required documents, and the 5 mistakes that get India-to-USA shipments held.",
    category: "Shipping Guides",
    readTime: "12 min",
    featured: true,
  },
  {
    slug: "customs-clearance-process",
    title: "Export Customs Clearance in India — How the Process Works",
    description:
      "Shipping Bill filing on ICEGATE, the three examination channels (Green/Yellow/Red), Let Export Order, and what happens after LEO.",
    category: "Customs & Documentation",
    readTime: "10 min",
    featured: true,
  },
  {
    slug: "fcl-vs-lcl",
    title: "FCL vs LCL Shipping — Which Container Option Is Right for You?",
    description:
      "Full Container Load vs Less than Container Load — cost comparison, transit time differences, and the exact breakeven CBM by route.",
    category: "Ocean Freight",
    readTime: "9 min",
    featured: true,
  },
  {
    slug: "air-freight-cost-india",
    title: "Air Freight Cost from India — What You Actually Pay Per Kg",
    description:
      "Real 2025 rates from India to USA, UK, UAE, Singapore, Australia. How volumetric weight works, what surcharges are added, and how to reduce cost.",
    category: "Air Freight",
    readTime: "10 min",
    featured: false,
  },
  {
    slug: "iec-code-guide",
    title: "How to Get an IEC Code in India — Step-by-Step Guide 2025",
    description:
      "Documents required, the DGFT online application process, ₹500 fee, 1–2 day processing time, and how to fix the most common rejection reasons.",
    category: "Export Setup",
    readTime: "8 min",
    featured: false,
  },
  {
    slug: "rodtep-duty-drawback",
    title: "RoDTEP and Duty Drawback — Government Refunds Every Exporter Is Entitled To",
    description:
      "What RoDTEP and Duty Drawback are, how much you get by product category, how to claim them, and why thousands of exporters leave this money unclaimed.",
    category: "Export Incentives",
    readTime: "9 min",
    featured: false,
  },
  {
    slug: "export-pharma-india",
    title: "How to Export Pharmaceuticals from India — Complete Compliance Guide",
    description:
      "CDSCO NOC, WHO-GMP, FDA registration, market-specific requirements for USA/EU/Africa/UAE, temperature-controlled logistics, and full document checklist.",
    category: "Industry Guides",
    readTime: "11 min",
    featured: false,
  },
  {
    slug: "port-selector-guide",
    title: "Which Indian Port Should You Use for Export? — Port Selector Guide",
    description:
      "JNPT vs Mundra vs Chennai vs Vizag vs Kolkata — port profiles, best routes by destination, and a quick selector table.",
    category: "Shipping Guides",
    readTime: "10 min",
    featured: false,
  },
  {
    slug: "auto-parts-export-india",
    title: "How to Export Auto Parts from India — Compliance, Documents & Logistics",
    description:
      "Top markets, IATF 16949 and ECE certifications, HSN codes, ISPM 15 and VCI packaging requirements, and freight mode guide.",
    category: "Industry Guides",
    readTime: "10 min",
    featured: false,
  },
  {
    slug: "certificate-of-origin",
    title: "Certificate of Origin for Indian Exports — What It Is and When You Need It",
    description:
      "Preferential vs non-preferential CoO, all 6 types (Form A, SAFTA, ASEAN, UAE CEPA, Australia ECTA), when required vs not, and how to apply.",
    category: "Customs & Documentation",
    readTime: "8 min",
    featured: false,
  },
  {
    slug: "freight-forwarder-vs-cha",
    title: "Freight Forwarder vs CHA — What Is the Difference?",
    description:
      "Role comparison, CBLR 2018 licensing explained, the 4 problems with subcontracted CHA, and why in-house CHA changes the outcome.",
    category: "Export Basics",
    readTime: "7 min",
    featured: false,
  },
  {
    slug: "transit-time-india-uk",
    title: "How Long Does Shipping from India to the UK Take? — Transit Times 2025",
    description:
      "Door-to-door times by route (air and ocean), Brexit customs impact, factors that add days, and documents your UK buyer needs.",
    category: "Shipping Guides",
    readTime: "8 min",
    featured: false,
  },
  {
    slug: "3pl-4pl-logistics",
    title: "1PL, 2PL, 3PL, 4PL, 5PL — What Do They Mean for Indian Exporters?",
    description:
      "Plain-English breakdown of logistics provider levels — what 3PL and 4PL actually do, when you need each, and what Indian exporters exporting to 1–10 countries actually require.",
    category: "Export Basics",
    readTime: "9 min",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Shipping Guides": "bg-[#185FA5]/10 text-[#185FA5]",
  "Customs & Documentation": "bg-[#10B981]/10 text-[#10B981]",
  "Ocean Freight": "bg-[#0A1628]/10 text-[#0A1628]",
  "Air Freight": "bg-[#F59E0B]/10 text-[#d97706]",
  "Export Setup": "bg-purple-100 text-purple-700",
  "Export Incentives": "bg-emerald-100 text-emerald-700",
  "Industry Guides": "bg-rose-100 text-rose-700",
  "Export Basics": "bg-slate-100 text-slate-700",
};

const featured = articles.filter((a) => a.featured);
const rest = articles.filter((a) => !a.featured);

export default function BlogIndexClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-4">
            Ambeza Knowledge Base
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Export & Freight Guides
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Practical guides on exporting from India — written by people who handle the shipments, not content writers.
            No fluff. Just what you actually need to know.
          </p>
        </div>
      </section>

      {/* Featured articles */}
      <SectionWrapper className="bg-white">
        <div className="mb-8">
          <p className="text-[#185FA5] text-xs font-bold uppercase tracking-widest mb-2">
            Start here
          </p>
          <h2 className="text-2xl font-extrabold text-[#0A1628]">Essential guides</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#185FA5] hover:shadow-md transition-all"
            >
              <span
                className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 ${
                  categoryColors[article.category] ?? "bg-slate-100 text-slate-600"
                }`}
              >
                {article.category}
              </span>
              <h3 className="font-extrabold text-[#0A1628] text-base mb-3 leading-snug group-hover:text-[#185FA5] transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-5">
                {article.description}
              </p>
              <div className="flex items-center justify-between text-xs text-[#475569]">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readTime} read
                </span>
                <span className="text-[#185FA5] font-semibold flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
                  Read <ChevronRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* All articles */}
        <div className="mb-8">
          <p className="text-[#185FA5] text-xs font-bold uppercase tracking-widest mb-2">
            All guides
          </p>
          <h2 className="text-2xl font-extrabold text-[#0A1628]">
            {articles.length} guides published
          </h2>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex gap-4 bg-white border border-[#E2E8F0] rounded-xl p-5 hover:border-[#185FA5] hover:shadow-sm transition-all"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full ${
                      categoryColors[article.category] ?? "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-[#475569] flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-[#0A1628] text-sm mb-1 leading-snug group-hover:text-[#185FA5] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                  {article.description}
                </p>
              </div>
              <ChevronRight className="h-4 w-4 text-[#185FA5] flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[#185FA5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to start exporting?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            In-house CHA. Fixed quotes. No hidden charges. One team from pickup to delivery.
          </p>
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
              First Time Exporter Guide <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
