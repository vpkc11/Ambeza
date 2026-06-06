import type { Metadata } from "next";
import CertificateOfOriginClient from "./CertificateOfOriginClient";
export const metadata: Metadata = {
  title: "Certificate of Origin for Indian Exports — What It Is and When You Need It | Ambeza",
  description: "Everything about Certificate of Origin (CoO) for exports from India — types (preferential vs non-preferential), where to get it, documents required, and which countries need it.",
  keywords: ["certificate of origin India","CoO export India","preferential certificate of origin India","non-preferential certificate of origin","DGFT certificate of origin","chamber of commerce CoO India","GSP certificate of origin India","Form A India","who issues certificate of origin India","certificate of origin export documents"],
};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a Certificate of Origin and why is it needed?","acceptedAnswer":{"@type":"Answer","text":"A Certificate of Origin (CoO) is an official document certifying that your exported goods were manufactured or produced in India. It is required by importing countries to verify the origin of goods, apply preferential duty rates under trade agreements, and for certain Letter of Credit (LC) payment terms."}},{"@type":"Question","name":"Where can I get a Certificate of Origin in India?","acceptedAnswer":{"@type":"Answer","text":"Preferential CoOs (Form A, SAFTA, ASEAN, etc.) are issued by DGFT offices. Non-preferential CoOs are issued by authorised Chambers of Commerce — FICCI, CII, ASSOCHAM, and local chambers. Ambeza can arrange both as part of the export documentation process."}}]};
export default function CertificateOfOriginPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/><CertificateOfOriginClient/></>);
}
