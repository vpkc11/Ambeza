import type { Metadata } from "next";
import ShipIndiaToUSAClient from "./ShipIndiaToUSAClient";

export const metadata: Metadata = {
  title: "How to Ship Cargo from India to the USA — Complete Guide | Ambeza",
  description:
    "Step-by-step guide to shipping cargo from India to the USA. Air freight vs ocean freight, documents required, customs process, transit times, costs, and common mistakes to avoid.",
  keywords: [
    "how to ship from India to USA",
    "shipping cargo India to USA",
    "export India to America",
    "freight from India to United States",
    "air freight India to USA",
    "ocean freight India to USA",
    "shipping cost India to USA",
    "export documents India to USA",
    "customs clearance India to USA",
    "freight forwarder India to USA",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does shipping from India to the USA take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Air freight from India to the USA takes 3–7 days. Ocean freight (FCL or LCL) takes 18–28 days depending on the origin port and US destination port. Express air courier takes 2–4 days.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to ship from India to the USA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Air freight to the USA costs approximately ₹350–₹600 per kg for general cargo. Ocean freight (LCL) runs ₹5,000–₹9,000 per CBM. FCL (20ft container) to the US West Coast is typically $1,500–$2,500 depending on the season and port.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are needed to export from India to the USA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core documents: Commercial Invoice, Packing List, Shipping Bill (filed on ICEGATE), Bill of Lading or Airway Bill, Certificate of Origin, IEC code, and any product-specific certificates (FDA registration for food/pharma, FSSAI, phytosanitary for agriculture, etc.).",
      },
    },
    {
      "@type": "Question",
      name: "Do I need FDA registration to export food or pharma to the USA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Food, dietary supplements, cosmetics, and pharmaceutical products exported to the USA require FDA facility registration. The importer in the USA also needs to file a Prior Notice with the FDA before the shipment arrives.",
      },
    },
    {
      "@type": "Question",
      name: "Which Indian port is best for shipping to the USA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For sea freight: JNPT (Mumbai) and Mundra (Gujarat) have the most direct services to US East and West Coast ports. For air freight: Mumbai (BOM), Delhi (DEL), and Hyderabad (HYD) have regular direct or one-stop flights to major US cities.",
      },
    },
  ],
};

export default function ShipIndiaToUSAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ShipIndiaToUSAClient />
    </>
  );
}
