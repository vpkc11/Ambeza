import type { Metadata } from "next";
import AutoPartsClient from "./AutoPartsClient";
export const metadata: Metadata = {
  title: "How to Export Auto Parts from India — Compliance, Documents & Logistics | Ambeza",
  description: "Complete guide to exporting automotive parts and components from India to the UAE, USA, UK, and Africa. HSN codes, quality certifications, packaging requirements, and freight options.",
  keywords: ["export auto parts India","automobile parts export India","auto components export India","export car parts India to UAE","auto parts freight India","HSN code auto parts India","automotive export India","ACMA export India","quality certification auto parts India"],
};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What certifications are needed to export auto parts from India?","acceptedAnswer":{"@type":"Answer","text":"Key certifications: IATF 16949 (automotive quality management), ISO 9001, and product-specific approvals from OEM buyers. For the EU, ECE (UNECE) type approvals may be required for safety-critical parts. ACMA membership adds credibility."}},{"@type":"Question","name":"What is the best shipping mode for auto parts from India?","acceptedAnswer":{"@type":"Answer","text":"Ocean freight (FCL or LCL) is standard for most auto parts. Air freight is used for urgent OEM supply orders and high-value precision components. Heavy components and machinery ship as break bulk or on flat rack containers."}}]};
export default function AutoPartsPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/><AutoPartsClient/></>);
}
