import type { Metadata } from "next";
import FaqExplorer from "@/components/FaqExplorer";
import { ALL_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Commercial Air Export FAQ Hub",
  description:
    "Find clear answers to 100 questions about exporting from India, commercial air cargo pricing, customs clearance, ICEGATE, airport handling and export incentives.",
  keywords: [
    "air cargo export FAQ India",
    "export customs clearance questions",
    "ICEGATE exporter FAQ",
    "AD Code export India",
    "air freight charges India",
    "RoDTEP exporter questions",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Commercial Air Export Knowledge Base | Ambeza",
    description:
      "100 clear answers on customs, ICEGATE, air cargo charges, airport handling and export incentives.",
    url: "https://ambeza.com/faq",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FAQPage() {
  const safeFaqSchema = JSON.stringify(faqSchema).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeFaqSchema }}
      />
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-amber-300 sm:text-sm">
            Ambeza exporter resources
          </p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Commercial Air Export Knowledge Base
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base lg:text-lg">
            100+ clear, no-jargon answers on Customs, ICEGATE, Airport Terminal
            Handling, Airfreight Billing &amp; Export Incentives.
          </p>
          <p className="mt-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            {ALL_FAQS.length} practical answers across 5 topics
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <FaqExplorer />
          <p className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-950">
            Export, customs, tax and foreign-exchange requirements can change
            and vary by product, route and transaction. These general answers
            are educational, not legal or tax advice. Verify current
            requirements with the relevant authority, your bank and qualified
            advisers before shipping or claiming a benefit.
          </p>
        </div>
      </section>
    </>
  );
}
