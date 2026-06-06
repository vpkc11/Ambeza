import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  FileText,
  ShieldCheck,
  Truck,
  ChevronRight,
  Calculator,
  DollarSign,
  Clock,
  CheckCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import QuoteForm from "@/components/QuoteForm";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Export from India to 150+ Countries | Ambeza",
  description:
    "End-to-end export logistics from India. Air freight, ocean freight, customs clearance, CHA services, all documents — one company. Get a free quote in 24 hours.",
};

const services = [
  {
    icon: Plane,
    title: "We book your flight or ship",
    desc: "Air or sea — we find the best route and price for your cargo and handle all carrier bookings.",
    href: "/services/air-freight",
  },
  {
    icon: FileText,
    title: "We prepare all your documents",
    desc: "Shipping Bill, Certificate of Origin, customs forms — we handle every piece of paper, filed correctly.",
    href: "/documents-guide",
  },
  {
    icon: ShieldCheck,
    title: "We clear Indian customs",
    desc: "Our licensed CHA team files your Shipping Bill on ICEGATE and obtains your Let Export Order.",
    href: "/services/customs-clearance",
  },
  {
    icon: Truck,
    title: "We deliver door to door",
    desc: "From your warehouse anywhere in India, all the way to your buyer's door abroad.",
    href: "/services",
  },
];

const journey = [
  { num: "01", title: "Contact us", desc: "Tell us your product, weight, and destination." },
  { num: "02", title: "Get a quote", desc: "Fixed price, itemised, no hidden charges." },
  { num: "03", title: "Pickup", desc: "We collect cargo from your premises." },
  { num: "04", title: "Documents", desc: "We prepare all export paperwork." },
  { num: "05", title: "Customs", desc: "CHA clears cargo through Indian customs." },
  { num: "06", title: "Departs", desc: "Cargo flies or sails. You get tracking." },
  { num: "07", title: "Delivered", desc: "Buyer receives goods. Payment & FIRC follow." },
];

const industries = [
  { label: "Agriculture", emoji: "🌾", slug: "agriculture" },
  { label: "Pharma", emoji: "💊", slug: "pharma" },
  { label: "Auto Parts", emoji: "🚗", slug: "auto-parts" },
  { label: "Textiles", emoji: "🧵", slug: "textiles" },
  { label: "Machinery", emoji: "⚙️", slug: "machinery" },
  { label: "Electronics", emoji: "💻", slug: "electronics" },
  { label: "Gems & Jewellery", emoji: "💎", slug: "gems-jewellery" },
  { label: "Chemicals", emoji: "🌿", slug: "chemicals" },
  { label: "Bulk Commodities", emoji: "🛢️", slug: "bulk-commodities" },
  { label: "Renewable Energy", emoji: "🏗️", slug: "renewable-energy" },
];

const tools = [
  {
    icon: Calculator,
    title: "Volumetric Weight Calculator",
    desc: "Know your chargeable weight before you call anyone. Air, sea, courier — all modes.",
    href: "/tools/volumetric-calculator",
  },
  {
    icon: DollarSign,
    title: "Shipping Cost Estimator",
    desc: "Get a ballpark cost for your export shipment in 2 minutes. No signup needed.",
    href: "/tools/shipping-estimator",
  },
  {
    icon: Clock,
    title: "Transit Time Tool",
    desc: "See exactly how long your shipment will take, end to end — not just sailing time.",
    href: "/tools/transit-time",
  },
];

const faqs = [
  {
    q: "I have never exported before. Can you help me?",
    a: "Yes. We handle everything from scratch. You need your product and a buyer abroad — we manage all paperwork, customs, and shipping. Start with our New Exporter Guide.",
  },
  {
    q: "How much does it cost to ship to the USA / UK / UAE?",
    a: "Costs depend on weight, size, mode (air/sea), and destination. Use our free Shipping Estimator for a ballpark, or contact us for a fixed quote within 24 hours.",
  },
  {
    q: "Do I need an IEC code to export?",
    a: "Yes — an Importer Exporter Code (IEC) is mandatory for all commercial exports from India. If you don't have one, we guide you through getting it online in 1–2 days for just ₹500.",
  },
  {
    q: "What documents do I need to give you?",
    a: "Mainly your IEC code, GST certificate, commercial invoice, and packing list. We prepare everything else — Shipping Bill, Certificate of Origin, customs clearances, and product-specific certificates.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundColor: "#0A1628",
        }}
      >
        {/* Dark overlay — heavy on left for text, fades right to reveal image */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.85) 40%, rgba(10,22,40,0.35) 65%, rgba(10,22,40,0.0) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              You make it in India.
              <br />
              <span className="text-[#F59E0B]">We ship it to the world.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              End-to-end export logistics from India to 150+ countries.
              Air freight, ocean freight, customs clearance, all paperwork — one company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="bg-[#F59E0B] text-white font-semibold px-8 py-4 rounded-full text-center hover:bg-[#d97706] transition-colors text-lg"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/how-it-works"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-center hover:bg-white hover:text-[#0A1628] transition-colors text-lg"
              >
                See How It Works
              </Link>
            </div>
            <div className="text-slate-400 text-sm">
              <span className="text-slate-500">Operating from: </span>
              {[
                "Mumbai", "Chennai", "Delhi", "Hyderabad", "Kolkata", "Mundra", "Bangalore",
              ].map((city, i) => (
                <span key={city}>
                  <span className="text-slate-300">{city}</span>
                  {i < 6 && <span className="mx-2 text-slate-600">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E2E8F0]">
            {[
              { stat: "150+", label: "Countries we ship to" },
              { stat: "Air + Sea", label: "Both modes covered" },
              { stat: "In-house CHA", label: "Licensed customs agents" },
              { stat: "Zero", label: "Hidden charges" },
            ].map(({ stat, label }) => (
              <div key={label} className="py-8 px-6 text-center">
                <div className="text-2xl font-bold text-[#185FA5] mb-1">{stat}</div>
                <div className="text-sm text-[#475569]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Everything you need to export — handled by one company
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Most exporters deal with 4–5 different vendors. With Ambeza, it is just us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, desc, href }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#E2E8F0]"
            >
              <div className="w-12 h-12 bg-[#185FA5]/10 rounded-xl flex items-center justify-center mb-5">
                <Icon className="h-6 w-6 text-[#185FA5]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">{title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed mb-4">{desc}</p>
              <Link
                href={href}
                className="inline-flex items-center gap-1 text-[#185FA5] text-sm font-medium hover:underline"
              >
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Journey Preview ── */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Your cargo&apos;s journey — from your factory to their door
          </h2>
          <p className="text-[#475569]">Seven steps. We handle all of them.</p>
        </div>

        <div className="hidden lg:flex items-start justify-between relative mb-10">
          <div className="absolute top-6 left-0 right-0 h-px bg-[#E2E8F0] z-0" />
          {journey.map(({ num, title, desc }) => (
            <div key={num} className="flex flex-col items-center text-center w-[13%] relative z-10">
              <div className="w-12 h-12 bg-[#185FA5] text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">
                {num}
              </div>
              <p className="text-sm font-semibold text-[#0A1628] mb-1">{title}</p>
              <p className="text-xs text-[#475569] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="lg:hidden space-y-4 mb-8">
          {journey.map(({ num, title, desc }) => (
            <div key={num} className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#185FA5] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                {num}
              </div>
              <div>
                <p className="font-semibold text-[#0A1628] text-sm">{title}</p>
                <p className="text-xs text-[#475569] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 bg-[#185FA5] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#14508a] transition-colors"
          >
            See every step in detail <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* ── Industries ── */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-3">
            We ship for every kind of Indian business
          </h2>
          <p className="text-[#475569]">
            From agriculture to advanced electronics — if it can be exported, we have done it.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map(({ label, emoji, slug }) => (
            <Link
              key={slug}
              href={`/industries/${slug}`}
              className="inline-flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-full px-5 py-2.5 text-sm font-medium text-[#0F172A] hover:bg-[#185FA5] hover:text-white hover:border-[#185FA5] transition-colors shadow-sm"
            >
              <span>{emoji}</span> {label}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Tools Promo ── */}
      <SectionWrapper className="bg-[#185FA5]">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Free tools for Indian exporters
          </h2>
          <p className="text-blue-100 text-lg">
            Calculate costs, check documents, plan timelines — before you even call us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map(({ icon: Icon, title, desc, href }) => (
            <div key={title} className="bg-white rounded-2xl p-7 flex flex-col">
              <div className="w-10 h-10 bg-[#185FA5]/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-[#185FA5]" />
              </div>
              <h3 className="font-bold text-[#0A1628] mb-2">{title}</h3>
              <p className="text-sm text-[#475569] mb-5 flex-1">{desc}</p>
              <Link
                href={href}
                className="inline-flex items-center gap-1 text-[#185FA5] font-semibold text-sm hover:underline"
              >
                Use Free Tool <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── FAQ ── */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-3">
              Questions every first-time exporter asks
            </h2>
            <p className="text-[#475569]">Straight answers, no jargon.</p>
          </div>
          <Accordion multiple={false} className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-[#E2E8F0] rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-[#0A1628] hover:no-underline py-5 text-sm">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-[#475569] text-sm leading-relaxed pb-5">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Link
              href="/new-exporter"
              className="text-[#185FA5] font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              Read the complete New Exporter Guide <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to ship your first export?
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Get a free quote in 24 hours. No commitment needed. Fixed price, zero hidden charges.
              </p>
              <div className="space-y-3">
                {[
                  "In-house licensed CHA — we file your Shipping Bill",
                  "Fixed quotes — what we quote is what you pay",
                  "We track your RoDTEP & Duty Drawback refunds",
                  "One point of contact from pickup to delivery",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#0A1628] mb-6">
                Get a free quote — we reply within 24 hours
              </h3>
              <QuoteForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
