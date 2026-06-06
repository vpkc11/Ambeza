import type { Metadata } from "next";
import AirFreightCostClient from "./AirFreightCostClient";

export const metadata: Metadata = {
  title: "Air Freight Cost from India — What You Actually Pay Per Kg | Ambeza",
  description:
    "Real air freight rates from India to USA, UK, UAE, Singapore, and Australia. How charges are calculated, what volumetric weight means, fuel surcharges explained, and how to reduce your air freight cost.",
  keywords: [
    "air freight cost from India",
    "air freight rate per kg India",
    "air cargo charges India",
    "air freight India to USA cost",
    "air freight India to UK cost",
    "air freight India to UAE cost",
    "volumetric weight air freight",
    "air freight surcharges India",
    "how to reduce air freight cost",
    "air cargo rate India 2025",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the air freight cost from India to the USA per kg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "General cargo air freight from India to the USA costs approximately ₹350–₹600 per kg as of 2025. High-value cargo like pharma or electronics may attract premium rates. The actual charge is based on whichever is higher — actual weight or volumetric weight.",
      },
    },
    {
      "@type": "Question",
      name: "How is air freight charged — actual weight or volumetric weight?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Air freight is charged on the higher of actual weight or volumetric weight. Volumetric weight is calculated as: (Length cm × Width cm × Height cm) / 6000. If your 10 kg box is large and light, you may be charged for 15 kg volumetric weight instead of the actual 10 kg.",
      },
    },
    {
      "@type": "Question",
      name: "What surcharges are added to air freight from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard surcharges include: Fuel Surcharge (FSC), Security Surcharge (SSC), Terminal Handling Charges (THC), Customs Examination fee, and Airway Bill (AWB) fee. These are standard industry charges and should be itemised in your quote.",
      },
    },
    {
      "@type": "Question",
      name: "Is air freight from India more expensive than ocean freight?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — air freight typically costs 4–6 times more than ocean freight per kg. However, for high-value goods, urgent shipments, or cargo under 150 kg, the total landed cost (including inventory holding cost, insurance, and speed to market) can make air freight the better choice.",
      },
    },
  ],
};

export default function AirFreightCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AirFreightCostClient />
    </>
  );
}
