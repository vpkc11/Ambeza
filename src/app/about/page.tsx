import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MapPin } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "About Ambeza — End-to-End Export Logistics from India",
  description: "We built Ambeza because exporting from India should not be this hard. In-house CHA, fixed quotes, RoDTEP tracking — one company for everything.",
};

const differentiators = [
  {
    title: "One point of contact",
    desc: "One person manages your shipment from pickup to delivery. No passing around. No 'let me check with the CHA team'.",
  },
  {
    title: "In-house licensed CHA",
    desc: "We file your Shipping Bill ourselves — not a subcontractor. Direct accountability. Faster clearance.",
  },
  {
    title: "Fixed quotes, zero hidden charges",
    desc: "What we quote is what you pay. We itemise every cost upfront. No surprises at the port.",
  },
  {
    title: "We track your refunds",
    desc: "RoDTEP and Duty Drawback are tracked and followed up for every shipment. Most exporters leave this money unclaimed.",
  },
];

const locations = [
  { port: "Hyderabad", detail: "RGIA Air Cargo Complex" },
  { port: "Mumbai", detail: "JNPT Sea Port + BOM Air Cargo" },
  { port: "Chennai", detail: "Chennai Port + MAA Airport" },
  { port: "Delhi NCR", detail: "ICD Tughlakabad + DEL Airport" },
  { port: "Mundra", detail: "Gujarat — ADANI Port" },
  { port: "Bangalore", detail: "BLR Airport Cargo" },
  { port: "Kolkata", detail: "Kolkata Port + CCU Airport" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">We built Ambeza because exporting from India should not be this hard.</h1>
            <p className="text-slate-300 text-lg">Too many great Indian products never reach global buyers because the export process is fragmented, opaque, and managed by a chain of vendors who don&apos;t talk to each other.</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-6">Our story</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              Every Indian exporter we spoke to had the same experience: a freight broker who quoted low and then added charges, a CHA who subcontracted to another CHA, documents filed wrong the first time, and no one person who owned the outcome.
            </p>
            <p>
              Ambeza was built to solve this. One company. One invoice. One person responsible. We bring air freight, ocean freight, customs clearance, documentation, and inland transport under one roof — and we do the CHA work ourselves, not through a subcontractor.
            </p>
            <p>
              We also believe Indian exporters are entitled to every rupee the government offers — RoDTEP credits, Duty Drawback, IGST refunds. We track all of these for every shipment, because most of our customers were either not claiming them or claiming them wrong.
            </p>
            <p>
              Ambeza operates from Hyderabad, Mumbai, Chennai, Delhi, Mundra, Bangalore, and Kolkata. If your product can be exported, we can ship it.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Differentiators */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">Why exporters choose Ambeza</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differentiators.map(({ title, desc }) => (
            <div key={title} className="bg-white border border-[#E2E8F0] rounded-2xl p-7">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0A1628] mb-2">{title}</h3>
                  <p className="text-sm text-[#475569]">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Locations */}
      <SectionWrapper>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">Where we operate</h2>
          <p className="text-[#475569]">Pan-India coverage — major ports, airports, and ICDs.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
          {locations.map(({ port, detail }) => (
            <div key={port} className="text-center">
              <div className="w-14 h-14 bg-[#185FA5]/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <MapPin className="h-6 w-6 text-[#185FA5]" />
              </div>
              <p className="font-bold text-[#0A1628] text-sm">{port}</p>
              <p className="text-xs text-[#475569] mt-0.5">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="bg-[#185FA5] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#14508a] transition-colors inline-block mr-4"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/how-it-works"
            className="border-2 border-[#185FA5] text-[#185FA5] font-semibold px-8 py-4 rounded-full hover:bg-[#185FA5] hover:text-white transition-colors inline-block"
          >
            See How We Work
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
