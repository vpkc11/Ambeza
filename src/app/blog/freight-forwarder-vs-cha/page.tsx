import type { Metadata } from "next";
import FreightForwarderVsCHAClient from "./FreightForwarderVsCHAClient";
export const metadata: Metadata = {
  title: "Freight Forwarder vs CHA — What Is the Difference? | Ambeza",
  description: "Clear explanation of the difference between a freight forwarder and a CHA (Customs House Agent) in India. Who does what, why most companies use both, and why Ambeza combines both in-house.",
  keywords: ["freight forwarder vs CHA","customs house agent India","CHA vs freight forwarder India","what is CHA India","freight forwarder India","difference CHA freight forwarder","CBLR licence India","licensed customs agent India","who files shipping bill India"],
};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does a freight forwarder do?","acceptedAnswer":{"@type":"Answer","text":"A freight forwarder books cargo space with airlines and shipping lines, coordinates pickup and delivery, manages documentation, and acts as the overall logistics coordinator for your shipment. They do not file customs declarations — that requires a CHA licence."}},{"@type":"Question","name":"What does a CHA (Customs House Agent) do?","acceptedAnswer":{"@type":"Answer","text":"A CHA (Customs House Agent), also called a customs broker, is licensed by CBIC under CBLR 2018 to file Shipping Bills on ICEGATE, interact with customs officers, handle examination channels, and obtain the Let Export Order (LEO). Only a licensed CHA can do this."}},{"@type":"Question","name":"Do I need both a freight forwarder and a CHA?","acceptedAnswer":{"@type":"Answer","text":"For a complete export shipment, you need both — someone to manage the freight and someone to handle customs. Most exporters either use two separate companies (with coordination gaps) or one company that provides both services in-house, like Ambeza."}}]};
export default function FreightForwarderVsCHAPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/><FreightForwarderVsCHAClient/></>);
}
