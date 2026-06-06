import type { Metadata } from "next";
import FCLvsLCLClient from "./FCLvsLCLClient";

export const metadata: Metadata = {
  title: "FCL vs LCL Shipping — Which Container Option Is Right for You? | Ambeza",
  description:
    "Understand the difference between FCL (Full Container Load) and LCL (Less than Container Load) shipping from India. Cost comparison, transit times, when to use each, and how to decide.",
  keywords: [
    "FCL vs LCL",
    "FCL shipping India",
    "LCL shipping India",
    "full container load India",
    "less than container load India",
    "FCL LCL difference",
    "ocean freight container types India",
    "LCL consolidation India",
    "when to use FCL LCL",
    "container shipping India",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between FCL and LCL shipping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FCL (Full Container Load) means your cargo occupies an entire container — 20ft or 40ft. You pay for the full container regardless of how much space you use. LCL (Less than Container Load) means your cargo shares a container with other exporters' shipments. You pay only for the space your cargo occupies, measured in CBM.",
      },
    },
    {
      "@type": "Question",
      name: "When should I choose FCL over LCL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose FCL when your cargo exceeds 15 CBM or 10,000 kg, when you need faster transit (FCL is 2–5 days faster than LCL), when your cargo is fragile or sensitive (less handling), or when you ship regularly to the same destination and can negotiate container rates.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum CBM for LCL shipment from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is technically no minimum CBM for LCL, but shipments below 0.5 CBM are usually better handled as courier or express freight. LCL is most cost-effective between 1 CBM and 12–15 CBM.",
      },
    },
    {
      "@type": "Question",
      name: "Is LCL cheaper than FCL for small shipments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for shipments under 12–15 CBM, LCL is almost always cheaper than booking a full container. The breakeven point varies by route — on India-to-USA lanes, LCL typically becomes more expensive than FCL beyond 15–17 CBM.",
      },
    },
  ],
};

export default function FCLvsLCLPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FCLvsLCLClient />
    </>
  );
}
