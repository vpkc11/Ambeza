import type { Metadata } from "next";
import IECCodeClient from "./IECCodeClient";

export const metadata: Metadata = {
  title: "How to Get an IEC Code in India — Step-by-Step Guide 2025 | Ambeza",
  description:
    "Complete guide to applying for an IEC (Importer Exporter Code) in India. Documents required, step-by-step DGFT application process, cost, processing time, and common rejection reasons.",
  keywords: [
    "IEC code India",
    "how to get IEC code",
    "IEC code application India",
    "importer exporter code India",
    "DGFT IEC application",
    "IEC code documents required",
    "IEC code registration India",
    "IEC code fee India",
    "what is IEC code",
    "IEC code for export India",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an IEC code and why is it needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IEC (Importer Exporter Code) is a 10-digit code issued by DGFT that is mandatory for all commercial export and import transactions in India. Without an IEC, no Shipping Bill can be filed, no foreign currency payment can be received, and no export benefits (RoDTEP, Drawback) can be claimed.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get an IEC code in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IEC is typically issued within 1–2 working days of completing the online application on the DGFT portal (dgft.gov.in), provided all documents are correct and the bank account is properly verified.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee for IEC code in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The government fee for IEC registration is ₹500, paid online during the DGFT application. There is no annual renewal fee — IEC is valid for the lifetime of the entity.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for IEC code application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a proprietorship: PAN card, Aadhaar, cancelled cheque or bank certificate, and a digital photograph. For a company: Company PAN, Certificate of Incorporation, and the authorised signatory's PAN and Aadhaar. All documents are submitted digitally on the DGFT portal.",
      },
    },
  ],
};

export default function IECCodePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <IECCodeClient />
    </>
  );
}
