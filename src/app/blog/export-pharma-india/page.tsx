import type { Metadata } from "next";
import ExportPharmaClient from "./ExportPharmaClient";

export const metadata: Metadata = {
  title: "How to Export Pharmaceuticals from India — Complete Compliance Guide | Ambeza",
  description:
    "Full guide to exporting pharmaceutical products from India. CDSCO, drug licence, Schedule M, WHO-GMP, FDA registration, FSSAI, MEIS, documentation, and restricted markets.",
  keywords: [
    "export pharma from India",
    "pharmaceutical export India",
    "drug export India",
    "WHO GMP certificate India",
    "CDSCO export India",
    "pharmaceutical export documentation India",
    "FDA registration India pharma",
    "how to export medicines from India",
    "pharma freight India",
    "temperature controlled pharma export India",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What licences are required to export pharmaceuticals from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need: a Manufacturing Licence under the Drugs and Cosmetics Act, a CDSCO No Objection Certificate (NOC) for export, WHO-GMP certification for regulated markets, and a valid IEC code. For the USA, FDA facility registration is also mandatory.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export medicine samples from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but pharmaceutical samples for export still require a Shipping Bill, drug export permission, and proper documentation. The quantity must be clearly declared as samples. Your CHA files the Shipping Bill and your CDSCO NOC covers sample exports.",
      },
    },
    {
      "@type": "Question",
      name: "What is the temperature requirement for pharma air freight from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most pharmaceutical products are shipped at 2–8°C (cold chain) or 15–25°C (controlled room temperature). Airlines operating from India offer GDP-compliant cool chain facilities at BOM, DEL, HYD, and BLR airports. Always specify your temperature range when booking.",
      },
    },
  ],
};

export default function ExportPharmaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ExportPharmaClient />
    </>
  );
}
