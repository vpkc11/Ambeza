import type { Metadata } from "next";
import PortSelectorClient from "./PortSelectorClient";
export const metadata: Metadata = {
  title: "Which Indian Port Should You Use for Export? — Port Selector Guide | Ambeza",
  description: "Compare Indian export ports — JNPT Mumbai, Mundra, Chennai, Vizag, Kolkata, Nhava Sheva. Which port is best for your destination, cargo type, and location in India.",
  keywords: ["best port for export from India","JNPT vs Mundra vs Chennai","Indian port comparison","export port India","JNPT freight forwarder","Mundra port export","Chennai port export","which port to use India export","sea port India export","container port India"],
};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which is the best port for exporting to the USA from India?","acceptedAnswer":{"@type":"Answer","text":"JNPT (Nhava Sheva, Mumbai) has the most direct services to US East and West Coast ports and typically offers the best rates and frequency. Mundra (Gujarat) is a strong alternative with growing carrier services and competitive pricing."}},{"@type":"Question","name":"Which Indian port is best for exporting to Europe?","acceptedAnswer":{"@type":"Answer","text":"JNPT and Mundra both have good direct services to North European ports (Hamburg, Rotterdam, Felixstowe). Chennai is better for South European ports (Barcelona, Genoa). JNPT has the highest frequency of sailings."}}]};
export default function PortSelectorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/><PortSelectorClient/></>);
}
