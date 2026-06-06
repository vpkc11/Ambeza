import type { Metadata } from "next";
import CustomsClearanceClient from "./CustomsClearanceClient";

export const metadata: Metadata = {
  title: "Export Customs Clearance in India — How the Process Works | Ambeza",
  description:
    "Step-by-step guide to export customs clearance in India. Shipping Bill filing on ICEGATE, Green/Yellow/Red examination channels, Let Export Order, RoDTEP, and how long it takes.",
  keywords: [
    "export customs clearance India",
    "customs clearance process India",
    "shipping bill filing ICEGATE",
    "let export order India",
    "CHA customs clearance India",
    "green channel yellow channel red channel customs",
    "how long does customs clearance take India",
    "export customs agent India",
    "ICEGATE shipping bill",
    "customs examination India export",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does export customs clearance take in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Green channel (no examination): 30 minutes to 2 hours after Shipping Bill filing. Yellow channel (document check): 2–6 hours. Red channel (physical examination): 1–3 days depending on the examination officer's availability and findings.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Let Export Order (LEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Let Export Order (LEO) is customs approval to load your cargo onto the aircraft or vessel. It is endorsed on the Shipping Bill after customs clearance. Cargo cannot be loaded without LEO. Your CHA monitors this in real time on ICEGATE.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a CHA and a freight forwarder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CHA (Customs House Agent) is a licensed professional authorised by CBIC to file Shipping Bills and interact with Indian customs on your behalf. A freight forwarder handles the logistics — booking carrier space, documentation, and delivery. Ambeza provides both services in-house through one team.",
      },
    },
    {
      "@type": "Question",
      name: "What is ICEGATE and what is it used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ICEGATE (India Customs EDI Gateway) is the government portal at icegate.gov.in where all export Shipping Bills, import Bills of Entry, and customs declarations are filed electronically. Your CHA files on ICEGATE. You can track the status of your Shipping Bill and RoDTEP credits on ICEGATE.",
      },
    },
  ],
};

export default function CustomsClearancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CustomsClearanceClient />
    </>
  );
}
