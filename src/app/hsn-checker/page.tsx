"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Search, AlertTriangle, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

interface HSNEntry {
  chapter: string;
  product: string;
  hsn: string;
  exportPolicy: "Free" | "Restricted" | "Prohibited";
  policyNote?: string;
  additionalDocs: string[];
  dg: boolean | string;
  rodtep: boolean;
  packagingNote: string;
  category: string;
}

const hsnData: HSNEntry[] = [
  {
    chapter: "Ch 09",
    product: "Spices (pepper, cardamom, turmeric, cumin)",
    hsn: "0901–0910",
    exportPolicy: "Free",
    additionalDocs: ["Spices Board Certificate", "Phytosanitary Certificate", "FSSAI (if processed)"],
    dg: false,
    rodtep: true,
    packagingNote: "Standard. Moisture-proof packaging mandatory for most destinations.",
    category: "Agriculture",
  },
  {
    chapter: "Ch 10",
    product: "Rice, Wheat, Cereals",
    hsn: "1001–1008",
    exportPolicy: "Restricted",
    policyNote: "Non-Basmati white rice — verify current DGFT notification before booking. Policy changes frequently.",
    additionalDocs: ["APEDA Certificate", "Phytosanitary Certificate", "Fumigation Certificate", "Quality Cert (EIA)"],
    dg: false,
    rodtep: true,
    packagingNote: "Jute bags or PP bags. Fumigation mandatory for most destinations.",
    category: "Agriculture",
  },
  {
    chapter: "Ch 30",
    product: "Pharmaceuticals (formulations, APIs, vaccines)",
    hsn: "3001–3006",
    exportPolicy: "Free",
    additionalDocs: ["CDSCO NOC (for some products)", "GMP Certificate", "Certificate of Analysis (CoA)", "MSDS (if API)", "WHO-GMP (for regulated markets)"],
    dg: "Some (Class 6 toxic APIs)",
    rodtep: true,
    packagingNote: "Temperature-controlled packaging for biologics and vaccines. UN-certified packaging for DG APIs.",
    category: "Pharma",
  },
  {
    chapter: "Ch 28/29",
    product: "Industrial Chemicals, Solvents, Agrochemicals",
    hsn: "2801–2942",
    exportPolicy: "Restricted",
    policyNote: "Some chemicals require SCOMET licence. Check the DGFT SCOMET list before booking.",
    additionalDocs: ["MSDS", "UN Number Declaration", "DG Shipper's Declaration (SDDG)", "CHEMEXCIL RCMC", "SCOMET licence (dual-use)"],
    dg: true,
    rodtep: true,
    packagingNote: "UN-certified packaging mandatory. Packing Group I/II/III as per substance hazard level.",
    category: "Chemicals",
  },
  {
    chapter: "Ch 50–63",
    product: "Textiles, Garments, Made-ups, Fabrics",
    hsn: "5001–6310",
    exportPolicy: "Free",
    additionalDocs: ["AEPC/TEXPROCIL RCMC", "Buyer inspection certificate (if LC)", "GSP Certificate of Origin (for EU/UK)", "Handloom Mark (if applicable)"],
    dg: false,
    rodtep: true,
    packagingNote: "Standard export cartons. Buyer-specified packaging mandatory if under Letter of Credit.",
    category: "Textiles",
  },
  {
    chapter: "Ch 71",
    product: "Gems, Jewellery, Precious Metals, Diamonds",
    hsn: "7101–7118",
    exportPolicy: "Free",
    additionalDocs: ["KP Certificate (Kimberley Process for diamonds)", "BIS Hallmark Certificate", "GJEPC RCMC", "Bank security / insurance (high value)", "Valuation Certificate"],
    dg: false,
    rodtep: true,
    packagingNote: "High-security tamper-proof packaging. Declared value must match invoice exactly.",
    category: "Gems",
  },
  {
    chapter: "Ch 84/85",
    product: "Machinery, Electronics, Electrical Equipment",
    hsn: "8401–8548",
    exportPolicy: "Free",
    policyNote: "Some electronics with encryption or military applications may need SCOMET licence. Check DGFT list.",
    additionalDocs: ["SCOMET licence (if dual-use)", "Test/Calibration certificates", "WPC cert (wireless devices)", "Manufacturer warranty docs"],
    dg: "Some (Lithium batteries — Class 9)",
    rodtep: true,
    packagingNote: "Wooden crating for heavy machinery. ISPM-15 fumigation mandatory for wood packaging. Lithium battery labelling (Class 9) if applicable.",
    category: "Machinery",
  },
  {
    chapter: "Ch 87",
    product: "Vehicles, Auto Parts, Motorcycles, Tractors",
    hsn: "8701–8716",
    exportPolicy: "Free",
    additionalDocs: ["RTO NOC (for complete vehicles)", "WPC cert (for wireless components)", "Test reports for safety components"],
    dg: false,
    rodtep: true,
    packagingNote: "Ro-Ro for complete vehicles. Standard export packing for parts. Drain all fuel tanks before shipping.",
    category: "Machinery",
  },
  {
    chapter: "Ch 26/72/73",
    product: "Iron, Steel, Metals, Metal Articles",
    hsn: "2601–7326",
    exportPolicy: "Restricted",
    policyNote: "Iron ore and some steel products have export duty or restrictions. Check current DGFT/MEA notifications.",
    additionalDocs: ["Mill Test Certificate", "Chemical Composition Report", "Weight Certificate", "Export Licence (if restricted)"],
    dg: false,
    rodtep: true,
    packagingNote: "Heavy strapping for coils, plates, and pipes. Sea-worthy crating mandatory for machinery grade steel.",
    category: "Machinery",
  },
  {
    chapter: "Ch 44",
    product: "Wood, Timber, Plywood, Bamboo Products",
    hsn: "4401–4421",
    exportPolicy: "Restricted",
    additionalDocs: ["Phytosanitary Certificate", "ISPM-15 Fumigation Certificate (MANDATORY for wood packaging globally)", "Forest clearance (if raw timber)"],
    dg: false,
    rodtep: true,
    packagingNote: "ISPM-15 heat treatment or methyl bromide fumigation is MANDATORY for ALL wood packaging. Any wooden crate used must be ISPM-15 treated.",
    category: "Agriculture",
  },
  {
    chapter: "Ch 21/23",
    product: "Food Preparations, Sauces, Snacks, Animal Feed",
    hsn: "2101–2309",
    exportPolicy: "Free",
    additionalDocs: ["FSSAI Certificate", "APEDA (if notified product)", "Veterinary Certificate (if animal-derived)", "Halal/Kosher Certificate (if required by buyer)", "Ingredient declaration"],
    dg: false,
    rodtep: true,
    packagingNote: "Food-grade packaging. Expiry date and nutritional labelling per destination country rules.",
    category: "Food",
  },
  {
    chapter: "Ch 03/16",
    product: "Fish, Seafood, Marine Products",
    hsn: "0301–1605",
    exportPolicy: "Free",
    additionalDocs: ["MPEDA Certificate", "Health Certificate", "Phytosanitary Certificate", "Cold Chain documentation", "HACCP Certificate"],
    dg: false,
    rodtep: true,
    packagingNote: "Temperature-controlled. Cold chain must be maintained at all times. EU exports need MPEDA approved processing plant.",
    category: "Food",
  },
  {
    chapter: "Ch 33",
    product: "Perfumes, Cosmetics, Personal Care Products",
    hsn: "3301–3307",
    exportPolicy: "Free",
    additionalDocs: ["MSDS (for alcohol-based)", "DG declaration (if flammable)", "Cosmetic compliance cert (destination-specific)"],
    dg: "Yes — most are flammable (Class 3)",
    rodtep: true,
    packagingNote: "Most perfumes and sprays are DG Class 3 (flammable liquids) or Class 2.1 (aerosols). UN-certified packaging mandatory.",
    category: "Chemicals",
  },
  {
    chapter: "Ch 85 (batteries)",
    product: "Lithium Batteries (standalone, in devices, in vehicles)",
    hsn: "8507",
    exportPolicy: "Free",
    additionalDocs: ["UN 3480/3481/3090/3091 declaration", "Safety Data Sheet", "State of charge documentation (max 30% for cargo aircraft)", "IATA DG Declaration"],
    dg: "Yes — Class 9 (Miscellaneous DG)",
    rodtep: true,
    packagingNote: "Section II (small) or Section I (large) packing instructions per IATA. State of charge MUST be ≤30% for cargo aircraft. Strict labelling requirements.",
    category: "Machinery",
  },
  {
    chapter: "Ch 93",
    product: "Arms, Ammunition, Weapons",
    hsn: "9301–9307",
    exportPolicy: "Prohibited",
    policyNote: "Cannot be exported without explicit Ministry of Defence licence and DGFT export licence. End-User Certificate from importing country mandatory.",
    additionalDocs: ["DGFT Licence (mandatory)", "Ministry of Defence NOC", "End-User Certificate", "Import permit from destination country"],
    dg: true,
    rodtep: false,
    packagingNote: "Specialist handling only. Ambeza does not handle this category.",
    category: "Restricted",
  },
];

const categories = ["All", "Agriculture", "Pharma", "Chemicals", "Textiles", "Machinery", "Gems", "Food", "Restricted"];

function PolicyBadge({ policy }: { policy: HSNEntry["exportPolicy"] }) {
  const styles = {
    Free: "bg-green-100 text-green-800 border-green-200",
    Restricted: "bg-amber-100 text-amber-800 border-amber-200",
    Prohibited: "bg-red-100 text-red-800 border-red-200",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${styles[policy]}`}>
      {policy}
    </span>
  );
}

export default function HSNCheckerPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = hsnData.filter((item) => {
    const matchSearch =
      !search ||
      item.product.toLowerCase().includes(search.toLowerCase()) ||
      item.hsn.includes(search) ||
      item.chapter.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || item.category === category;
    return matchSearch && matchCat;
  });

  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Export Intelligence</p>
            <h1 className="text-4xl font-bold mb-4">HSN Document Checker</h1>
            <p className="text-slate-300 text-lg">Enter your HSN code or product name. See exactly what documents you need, whether your product is a Dangerous Good, and if you qualify for RoDTEP.</p>
          </div>
        </div>
      </section>

      {/* What is HSN */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-blue-900">
            <strong>What is an HSN code?</strong> Harmonised System of Nomenclature (HSN) is an internationally standardised 8-digit code that classifies your product. It appears on your invoice, Shipping Bill, and all customs documents. You can find your HSN code on the GST portal, your GST invoice, or by searching on the CBIC website.
          </p>
        </div>
      </div>

      <SectionWrapper>
        {/* Search & Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#475569]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search product name or HSN code — e.g. "rice", "8471", "pharma"'
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5] bg-white"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  category === cat
                    ? "bg-[#185FA5] border-[#185FA5] text-white"
                    : "bg-white border-[#E2E8F0] text-[#475569] hover:border-[#185FA5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="text-center py-12 text-[#475569]">
              <p className="text-lg font-semibold mb-2">No results found</p>
              <p className="text-sm">Try a different search term or category. You can also WhatsApp us with your HSN code for a direct answer.</p>
            </div>
          )}

          {filtered.map((item) => (
            <div
              key={item.hsn}
              className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden"
            >
              {/* Header row */}
              <div
                className="flex items-start justify-between p-5 cursor-pointer hover:bg-[#F8FAFC] transition-colors"
                onClick={() => setExpanded(expanded === item.hsn ? null : item.hsn)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 rounded">
                      {item.chapter}
                    </span>
                    <span className="text-xs font-mono text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 rounded">
                      HSN {item.hsn}
                    </span>
                    <PolicyBadge policy={item.exportPolicy} />
                    {item.dg && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200">
                        <AlertTriangle className="h-3 w-3" /> DG
                      </span>
                    )}
                    {item.rodtep && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
                        <CheckCircle className="h-3 w-3" /> RoDTEP eligible
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-[#0A1628]">{item.product}</h3>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {expanded === item.hsn ? (
                    <ChevronUp className="h-5 w-5 text-[#475569]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#475569]" />
                  )}
                </div>
              </div>

              {/* Expanded content */}
              {expanded === item.hsn && (
                <div className="border-t border-[#E2E8F0] p-5 bg-[#F8FAFC] space-y-5">
                  {item.policyNote && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
                      <strong>Policy note:</strong> {item.policyNote}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-xs font-bold text-[#475569] uppercase tracking-wider mb-3">
                        Additional documents required
                      </p>
                      <ul className="space-y-2">
                        {item.additionalDocs.map((doc) => (
                          <li key={doc} className="flex items-start gap-2 text-sm text-[#0F172A]">
                            <span className="text-[#185FA5] mt-0.5">•</span> {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-bold text-[#475569] uppercase tracking-wider mb-2">
                          Dangerous Good (DG)?
                        </p>
                        {item.dg === false ? (
                          <p className="text-sm text-[#10B981] font-medium flex items-center gap-1">
                            <CheckCircle className="h-4 w-4" /> Not a Dangerous Good
                          </p>
                        ) : (
                          <p className="text-sm text-red-700 font-medium flex items-center gap-1">
                            <AlertTriangle className="h-4 w-4" /> {typeof item.dg === "string" ? item.dg : "Yes — DG handling required"}
                          </p>
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#475569] uppercase tracking-wider mb-2">
                          Packaging note
                        </p>
                        <p className="text-sm text-[#475569]">{item.packagingNote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#185FA5]/5 border border-[#185FA5]/20 rounded-2xl p-7 text-center">
          <p className="text-[#0A1628] font-semibold mb-2">
            Not sure about your product? We will tell you in 2 hours.
          </p>
          <p className="text-sm text-[#475569] mb-4">
            Send us your HSN code on WhatsApp. Our team will tell you exactly what documents you need and if there are any restrictions.
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi, I need help with HSN code document requirements. My HSN is:"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#128C7E] transition-colors"
          >
            📱 WhatsApp us your HSN code
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
