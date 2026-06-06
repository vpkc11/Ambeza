import type { Metadata } from "next";
import RoDTEPClient from "./RoDTEPClient";

export const metadata: Metadata = {
  title: "RoDTEP and Duty Drawback — Government Refunds Every Exporter Is Entitled To | Ambeza",
  description:
    "RoDTEP and Duty Drawback explained for Indian exporters. What they are, how much you get, how to claim them, and why most first-time exporters leave this money unclaimed.",
  keywords: [
    "RoDTEP scheme India",
    "duty drawback India",
    "RoDTEP rates India",
    "how to claim RoDTEP",
    "duty drawback for exporters India",
    "export incentives India",
    "RoDTEP scrip India",
    "IGST refund exporters",
    "export refunds India",
    "government schemes for exporters India",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is RoDTEP and who is eligible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RoDTEP (Remission of Duties and Taxes on Exported Products) is a government scheme that refunds taxes embedded in the cost of production that are not otherwise refunded — such as electricity duty, mandi tax, and fuel used in transport. All exporters of eligible products are entitled to RoDTEP based on their HSN code.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between RoDTEP and Duty Drawback?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Duty Drawback refunds customs duties paid on imported inputs used in your export product. RoDTEP refunds other embedded domestic taxes (state levies, fuel duties, etc.) not covered by Drawback. Both are separate claims and both can be claimed on the same shipment.",
      },
    },
    {
      "@type": "Question",
      name: "How is RoDTEP credited to the exporter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RoDTEP credits are issued as transferable scrips on ICEGATE after the Export General Manifest (EGM) is filed. These scrips can be used to pay basic customs duty on your imports, or sold to other importers at a small discount in the open market.",
      },
    },
  ],
};

export default function RoDTEPPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RoDTEPClient />
    </>
  );
}
