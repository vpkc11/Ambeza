"use client";

import BlogLayout from "../BlogLayout";

const types = [
  {
    type: "Non-Preferential CoO",
    purpose: "Certifies country of origin without preferential duty benefit",
    issuedBy: "Authorised Chambers of Commerce (FICCI, CII, ASSOCHAM, local chambers)",
    when: "Required by the buyer or importing country when preferential treatment is not applicable. Also required for LC terms that mandate a CoO.",
    form: "No standard form — issued on chamber letterhead",
  },
  {
    type: "Preferential CoO — Form A (GSP)",
    purpose: "Gives Indian exports preferential (lower) import duty in GSP-beneficiary countries",
    issuedBy: "DGFT Regional Offices",
    when: "Exporting to USA, EU, Japan, Canada, Australia and other countries that grant GSP to India. Note: USA withdrew GSP benefits for India in 2019 — verify current status.",
    form: "Form A (Generalised System of Preferences)",
  },
  {
    type: "SAFTA CoO",
    purpose: "Preferential duty under South Asian Free Trade Area",
    issuedBy: "DGFT",
    when: "Exporting to Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, Maldives, Afghanistan",
    form: "SAFTA Certificate of Origin",
  },
  {
    type: "ASEAN-India FTA CoO",
    purpose: "Preferential duty under ASEAN-India Free Trade Agreement",
    issuedBy: "DGFT",
    when: "Exporting to Indonesia, Malaysia, Thailand, Singapore, Philippines, Vietnam, Myanmar, Cambodia, Laos, Brunei",
    form: "Form AI",
  },
  {
    type: "India-UAE CEPA CoO",
    purpose: "Preferential duty under India-UAE Comprehensive Economic Partnership Agreement",
    issuedBy: "DGFT",
    when: "Exporting to UAE. India-UAE CEPA came into force in May 2022 — significant duty reductions on many product categories.",
    form: "CEPA Certificate of Origin",
  },
  {
    type: "India-Australia ECTA CoO",
    purpose: "Preferential duty under India-Australia Economic Cooperation and Trade Agreement",
    issuedBy: "DGFT",
    when: "Exporting to Australia. ECTA came into force in December 2022.",
    form: "ECTA Certificate of Origin",
  },
];

export default function CertificateOfOriginClient() {
  return (
    <BlogLayout
      title="Certificate of Origin for Indian Exports — What It Is and When You Need It"
      description="A complete guide to Certificates of Origin (CoO) for exports from India — types of CoO, preferential vs non-preferential, which trade agreements apply, where to get them, and what documents you need."
      publishDate="June 2025"
      readTime="8 min read"
      category="Customs & Documentation"
      relatedLinks={[
        { href: "/documents-guide", label: "Export Documents Guide" },
        { href: "/new-exporter", label: "New Exporter Guide" },
        { href: "/blog/customs-clearance-process", label: "Customs Clearance Process" },
        { href: "/services/customs-clearance", label: "CHA Services" },
      ]}
    >
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          A Certificate of Origin is one of the most misunderstood export documents. Many exporters think it is always required
          — it is not. Many others skip it when it would have saved their buyer significant import duties under a free trade agreement.
          This guide explains exactly when you need a CoO, which type to apply for, and where to get it.
        </p>
      </div>

      {/* What is CoO */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">What is a Certificate of Origin?</h2>
      <div className="bg-[#0A1628] text-white rounded-2xl p-6 mb-12">
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          A Certificate of Origin (CoO) is an official document certifying that your exported goods were manufactured, produced,
          or substantially transformed in India. It is used by the importing country&apos;s customs authority to:
        </p>
        <ul className="space-y-2 text-sm text-white/80">
          {[
            "Verify the country of origin of imported goods",
            "Apply preferential (lower) import duty rates under applicable trade agreements",
            "Determine eligibility for tariff quotas",
            "Satisfy Letter of Credit document requirements where the LC specifies a CoO",
            "Comply with trade policy (sanctions, anti-dumping measures, etc.)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2"><span className="text-[#F59E0B]">•</span>{item}</li>
          ))}
        </ul>
      </div>

      {/* When is it needed */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">When is a Certificate of Origin required?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <div className="bg-[#10B981]/5 border border-[#10B981]/20 rounded-xl p-5">
          <p className="font-bold text-[#10B981] mb-3">✓ CoO is required when:</p>
          <ul className="space-y-2 text-sm text-[#475569]">
            {[
              "Buyer's country offers preferential duty under an FTA with India",
              "LC terms explicitly require a Certificate of Origin",
              "Importing country has mandatory origin declaration rules",
              "Product category has anti-dumping duties in destination — CoO exempts India",
              "Buyer specifically requests it for their import documentation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-[#10B981]">•</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
          <p className="font-bold text-red-600 mb-3">✗ CoO is not required when:</p>
          <ul className="space-y-2 text-sm text-[#475569]">
            {[
              "No FTA exists between India and the destination country",
              "LC terms do not specify a CoO",
              "Importing country doesn't require it for your product category",
              "Shipment is a sample or personal effect below de minimis threshold",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-red-400]">•</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Types */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Types of Certificate of Origin from India</h2>
      <div className="space-y-4 mb-12">
        {types.map((t) => (
          <div key={t.type} className="bg-white border border-[#E2E8F0] rounded-xl p-5">
            <div className="flex items-start justify-between mb-2">
              <p className="font-bold text-[#0A1628]">{t.type}</p>
              <span className="text-xs bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded flex-shrink-0 ml-2">{t.form}</span>
            </div>
            <p className="text-sm text-[#475569] mb-2">{t.purpose}</p>
            <p className="text-xs text-[#475569] mb-1"><strong className="text-[#0A1628]">Issued by:</strong> {t.issuedBy}</p>
            <p className="text-xs text-[#475569]"><strong className="text-[#0A1628]">When to use:</strong> {t.when}</p>
          </div>
        ))}
      </div>

      {/* How to apply */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">How to apply for a Certificate of Origin</h2>
      <div className="space-y-4 mb-12">
        {[
          { heading: "Non-Preferential CoO (Chamber of Commerce)", steps: ["Contact your authorised Chamber of Commerce (FICCI, CII, ASSOCHAM, or local chamber)", "Submit Commercial Invoice, Packing List, and Shipping Bill copy", "Fill in the CoO application form with product details and country of origin declaration", "Pay the chamber fee (typically ₹500–₹2,000 per certificate)", "CoO issued within 1–2 working days"] },
          { heading: "Preferential CoO (DGFT)", steps: ["Apply online at dgft.gov.in under 'Certificate of Origin' section", "Submit Commercial Invoice, Packing List, and proof of origin (manufacturing process, BOM)", "DGFT verifies origin criteria under the applicable FTA", "Form A / Form AI / SAFTA CoO issued — digital or physical", "Timeline: 2–5 working days. Ambeza handles this as part of the documentation package"] },
        ].map((section) => (
          <div key={section.heading} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5">
            <p className="font-bold text-[#0A1628] mb-3">{section.heading}</p>
            <ol className="space-y-2">
              {section.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#475569]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#185FA5]/10 text-[#185FA5] text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: "What is the difference between preferential and non-preferential CoO?", a: "A preferential CoO gives your buyer reduced import duty under a specific FTA (like India-UAE CEPA or ASEAN-India FTA). A non-preferential CoO just certifies origin — useful for LC compliance and country-of-origin declarations but doesn't provide a duty benefit." },
          { q: "Where do I get a Certificate of Origin in India?", a: "Non-preferential CoOs: authorised Chambers of Commerce (FICCI, CII, ASSOCHAM, local chambers). Preferential CoOs (Form A, SAFTA, ASEAN, UAE CEPA, etc.): DGFT Regional Offices or online at dgft.gov.in. Ambeza arranges both as part of the export documentation package." },
          { q: "Does India have an FTA with the USA?", a: "No — India and the USA do not have a bilateral Free Trade Agreement as of 2025. The USA's GSP (Generalised System of Preferences) benefits for India were suspended in 2019. Indian exports to the USA attract MFN (Most Favoured Nation) duty rates." },
          { q: "Can I get a backdated Certificate of Origin?", a: "No. A CoO must be issued on or after the date of export. Backdating a CoO is document fraud and can result in serious legal consequences in both India and the importing country." },
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
