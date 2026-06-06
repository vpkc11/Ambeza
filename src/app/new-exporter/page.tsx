import type { Metadata } from "next";
import NewExporterClient from "./NewExporterClient";

export const metadata: Metadata = {
  title: "First Time Exporter Guide — IEC, LUT, Documents, Payments | Ambeza",
  description: "Complete guide for first-time exporters from India. Step-by-step: IEC code, GST LUT filing, AD Code, documents, payment terms, common mistakes, and realistic timeline. Free guide by Ambeza.",
  keywords: [
    "first time exporter India",
    "how to start exporting from India",
    "IEC code guide",
    "export documents India",
    "LUT filing GST",
    "how to export from India to USA",
    "new exporter guide India",
  ],
};

const newExporterFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is IEC code and how do I get it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IEC (Importer Exporter Code) is your 10-digit export licence issued by DGFT. It is mandatory for all commercial exports from India. Apply at dgft.gov.in with your PAN, Aadhaar, and bank details. Fee is ₹500 and it is issued within 1–2 working days.",
      },
    },
    {
      "@type": "Question",
      name: "What is an LUT in GST for exporters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LUT (Letter of Undertaking) is filed on the GST portal to allow you to export without paying IGST upfront. Without LUT, you must pay 18% IGST and claim a refund later — which takes months. File your LUT before your first export to protect your cash flow.",
      },
    },
    {
      "@type": "Question",
      name: "What is AD Code and why do I need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AD Code (Authorised Dealer Code) is your bank's code registered at the customs port. It links your bank account to the port and is mandatory before your Shipping Bill can be filed. It is a one-time registration per port.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are needed for first export from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core documents: Commercial Invoice, Packing List, Shipping Bill (filed by your CHA on ICEGATE), Bill of Lading or Airway Bill, IEC code, GST certificate, and any product-specific certificates (Phytosanitary, FSSAI, CoA, etc.).",
      },
    },
    {
      "@type": "Question",
      name: "How long does the first export take to set up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a well-prepared first-time exporter: Week 1 to get IEC, LUT, and AD Code. Week 2 to prepare documents. Week 3 to clear customs and book freight. Week 4+ for departure and delivery. Total: typically 4–6 weeks from zero to first export.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Export from India for the First Time",
  description: "Step-by-step guide to start exporting commercially from India — IEC, GST LUT, AD Code, documents, customs clearance.",
  totalTime: "P4W",
  step: [
    { "@type": "HowToStep", name: "Get IEC Code", text: "Apply for Importer Exporter Code at dgft.gov.in. You need PAN, Aadhaar, and bank account details. Fee ₹500, issued in 1–2 days.", position: 1 },
    { "@type": "HowToStep", name: "Register GST and file LUT", text: "Register for GST if not already done, then file a Letter of Undertaking (LUT) on the GST portal to export without paying IGST upfront.", position: 2 },
    { "@type": "HowToStep", name: "Open current account and register AD Code", text: "Open a current account with an authorised dealer bank. Register your AD Code at every port from which you will export.", position: 3 },
    { "@type": "HowToStep", name: "Check export policy for your product", text: "Verify your product's export status on DGFT website — whether it is Free, Restricted, or Prohibited. Check if RCMC from an export promotion council is required.", position: 4 },
    { "@type": "HowToStep", name: "Get product certifications", text: "Obtain required certifications such as Phytosanitary Certificate, FSSAI, Certificate of Analysis, GMP, or BIS based on your product category.", position: 5 },
    { "@type": "HowToStep", name: "Contact Ambeza to handle the rest", text: "Once IEC, GST, AD Code, and product certifications are ready, contact Ambeza. We prepare the Shipping Bill, Certificate of Origin, book freight, clear customs, and deliver door-to-door.", position: 6 },
  ],
};

export default function NewExporterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newExporterFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <NewExporterClient />
    </>
  );
}
