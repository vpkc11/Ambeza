import type { Metadata } from "next";
import ThreePLFourPLClient from "./ThreePLFourPLClient";

export const metadata: Metadata = {
  title: "1PL, 2PL, 3PL, 4PL, 5PL Explained for Indian Exporters | Ambeza",
  description: "Plain-English explanation of logistics provider levels — what 3PL and 4PL mean, how they differ, what Indian exporters actually need, and how to choose the right logistics partner.",
  keywords: [
    "3PL India",
    "4PL India",
    "what is 3PL logistics",
    "3PL vs 4PL India",
    "third party logistics India",
    "3PL for exporters India",
    "freight forwarder vs 3PL India",
    "logistics provider India export",
    "5PL logistics",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between a 3PL and a freight forwarder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In practice, they are often the same thing. A freight forwarder is the traditional term for a company that arranges international shipments. '3PL' is a broader term that includes warehousing, fulfilment, and value-added services. Many companies use the terms interchangeably in the Indian export context.",
      },
    },
    {
      "@type": "Question",
      name: "What is a 3PL in logistics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3PL (Third-Party Logistics) provider manages multiple logistics functions on your behalf — warehousing, transportation, customs clearance, documentation, and freight booking. They coordinate everything without owning the ships or planes, and give you a single point of contact for your export supply chain.",
      },
    },
    {
      "@type": "Question",
      name: "What is a 4PL in logistics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 4PL (Fourth-Party Logistics), also called a Lead Logistics Provider (LLP), manages and coordinates multiple 3PLs on your behalf. They design supply chain strategy, select and manage your logistics providers, and provide a single view across your entire supply chain. Best suited for large companies shipping to many countries with complex multi-3PL setups.",
      },
    },
    {
      "@type": "Question",
      name: "Do Indian exporters need a 3PL or a 4PL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The vast majority of Indian SME and mid-size exporters need a good 3PL, not a 4PL. A 4PL adds value when you are managing multiple logistics partners across 10+ countries. For most Indian exporters shipping to 1–10 countries, getting the right 3PL with an in-house CHA delivers the most value.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between 3PL and 4PL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3PL executes logistics services directly — they pick up your cargo, book freight, clear customs, and deliver. A 4PL manages other logistics providers on your behalf without directly executing — they coordinate 3PLs, design supply chain strategy, and provide visibility across all providers. 3PL = doing it. 4PL = managing who does it.",
      },
    },
  ],
};

export default function ThreePLFourPLPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ThreePLFourPLClient />
    </>
  );
}
