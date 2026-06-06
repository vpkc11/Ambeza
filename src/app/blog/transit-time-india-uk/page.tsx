import type { Metadata } from "next";
import TransitTimeUKClient from "./TransitTimeUKClient";
export const metadata: Metadata = {
  title: "How Long Does Shipping from India to the UK Take? — Transit Times 2025 | Ambeza",
  description: "Real transit times for shipping from India to the UK by air and ocean freight. Route-by-route breakdown, what adds days to your delivery, and how to choose the fastest option.",
  keywords: ["shipping time India to UK","transit time India to UK","how long does shipping from India to UK take","air freight India to UK days","ocean freight India to UK weeks","sea freight India to UK transit","cargo India to UK","freight India to United Kingdom","shipping India to London","India UK freight time"],
};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does sea freight from India to the UK take?","acceptedAnswer":{"@type":"Answer","text":"Ocean freight from India to UK ports (Felixstowe, Southampton, London Gateway) takes 20–28 days from JNPT Mumbai or Mundra. From Chennai, add 2–3 days. LCL shipments add 3–5 days for consolidation and deconsolidation at both ends."}},{"@type":"Question","name":"How long does air freight from India to the UK take?","acceptedAnswer":{"@type":"Answer","text":"Air freight from India to the UK takes 3–5 days door-to-door. Direct flights from Mumbai and Delhi to Heathrow take approximately 9–10 hours. Add 1–2 days for export clearance in India and UK customs clearance at the destination."}},{"@type":"Question","name":"What is the fastest way to ship from India to the UK?","acceptedAnswer":{"@type":"Answer","text":"Express courier (DHL, FedEx, UPS) is the fastest — 2–4 days for small parcels under 30 kg. For larger cargo, air freight is 3–5 days. Ocean freight is 20–28 days but significantly cheaper for heavy or bulky shipments."}}]};
export default function TransitTimeUKPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/><TransitTimeUKClient/></>);
}
