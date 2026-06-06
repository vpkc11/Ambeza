"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Info } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

type Step = 1 | 2 | 3 | 4;
type ShipMode = "air" | "lcl" | "fcl20" | "fcl40" | "fcl40hc";

const COUNTRIES = [
  "UAE", "UK", "USA", "Singapore", "Australia", "Germany", "France",
  "Canada", "Japan", "Saudi Arabia", "South Africa", "Kenya",
  "Netherlands", "Malaysia", "New Zealand", "Italy", "Spain",
  "Thailand", "South Korea", "Brazil", "Bangladesh", "Sri Lanka",
];

const ORIGINS = [
  "Mumbai (JNPT)", "Chennai", "Delhi (ICD)", "Hyderabad", "Kolkata",
  "Mundra", "Bangalore", "Other",
];

const rateMatrix: Record<string, Record<string, { min: number; max: number }>> = {
  air: {
    UAE: { min: 180, max: 280 },
    UK: { min: 250, max: 380 },
    USA: { min: 280, max: 420 },
    Singapore: { min: 160, max: 240 },
    Australia: { min: 260, max: 380 },
    Germany: { min: 260, max: 390 },
    default: { min: 220, max: 350 },
  },
  lcl: {
    UAE: { min: 8000, max: 12000 },
    UK: { min: 12000, max: 18000 },
    USA: { min: 14000, max: 20000 },
    Singapore: { min: 7000, max: 10000 },
    Australia: { min: 12000, max: 17000 },
    Germany: { min: 12000, max: 18000 },
    default: { min: 10000, max: 16000 },
  },
  fcl20: {
    UAE: { min: 45000, max: 65000 },
    UK: { min: 85000, max: 120000 },
    USA: { min: 95000, max: 140000 },
    Singapore: { min: 38000, max: 55000 },
    Australia: { min: 80000, max: 110000 },
    Germany: { min: 85000, max: 120000 },
    default: { min: 70000, max: 110000 },
  },
  fcl40: {
    UAE: { min: 65000, max: 90000 },
    UK: { min: 120000, max: 170000 },
    USA: { min: 135000, max: 195000 },
    Singapore: { min: 55000, max: 80000 },
    Australia: { min: 110000, max: 160000 },
    Germany: { min: 120000, max: 170000 },
    default: { min: 95000, max: 150000 },
  },
  fcl40hc: {
    UAE: { min: 68000, max: 95000 },
    UK: { min: 125000, max: 178000 },
    USA: { min: 142000, max: 205000 },
    default: { min: 100000, max: 160000 },
  },
};

const transitDays: Record<string, Record<string, Record<ShipMode, [number, number]>>> = {
  "Mumbai (JNPT)": {
    UAE: { air: [2, 3], lcl: [8, 10], fcl20: [8, 10], fcl40: [8, 10], fcl40hc: [8, 10] },
    UK: { air: [5, 7], lcl: [22, 28], fcl20: [22, 28], fcl40: [22, 28], fcl40hc: [22, 28] },
    USA: { air: [6, 8], lcl: [28, 35], fcl20: [28, 35], fcl40: [28, 35], fcl40hc: [28, 35] },
    Singapore: { air: [3, 4], lcl: [10, 15], fcl20: [10, 15], fcl40: [10, 15], fcl40hc: [10, 15] },
    Australia: { air: [4, 6], lcl: [18, 22], fcl20: [18, 22], fcl40: [18, 22], fcl40hc: [18, 22] },
    Germany: { air: [5, 7], lcl: [22, 26], fcl20: [22, 26], fcl40: [22, 26], fcl40hc: [22, 26] },
    default: { air: [5, 8], lcl: [20, 35], fcl20: [20, 35], fcl40: [20, 35], fcl40hc: [20, 35] },
  },
};

function getRate(mode: ShipMode, country: string) {
  const matrix = rateMatrix[mode] || rateMatrix.air;
  return matrix[country] || matrix.default || { min: 0, max: 0 };
}

function getTransit(origin: string, country: string, mode: ShipMode): [number, number] {
  const originKey = origin.includes("Mumbai") ? "Mumbai (JNPT)" : "Mumbai (JNPT)";
  const originData = transitDays[originKey] || transitDays["Mumbai (JNPT)"];
  const countryData = originData[country] || originData.default;
  return countryData[mode];
}

function fmt(n: number) {
  return new Intl.NumberFormat("en-IN").format(Math.round(n));
}

export default function ShippingEstimatorPage() {
  const [step, setStep] = useState<Step>(1);
  const [origin, setOrigin] = useState("");
  const [weight, setWeight] = useState<number>(0);
  const [cbm, setCbm] = useState<number>(0);
  const [cargoType, setCargoType] = useState("general");
  const [destination, setDestination] = useState("");
  const [incoterm, setIncoterm] = useState("FOB");
  const [shipMode, setShipMode] = useState<ShipMode>("air");
  const [cargoValue, setCargoValue] = useState<number>(0);

  const freightRate = getRate(shipMode, destination);
  const transit = destination ? getTransit(origin, destination, shipMode) : [0, 0];

  let freightMin = 0, freightMax = 0;
  if (shipMode === "air") {
    freightMin = freightRate.min * weight;
    freightMax = freightRate.max * weight;
  } else if (shipMode === "lcl") {
    freightMin = freightRate.min * Math.max(cbm, 0.5);
    freightMax = freightRate.max * Math.max(cbm, 0.5);
  } else {
    freightMin = freightRate.min;
    freightMax = freightRate.max;
  }

  const dgSurcharge = cargoType === "dg" ? freightMin * 0.25 : 0;
  const thcMin = 5000, thcMax = 8000;
  const cfsMin = 3000, cfsMax = 6000;
  const chaFee = 8500;
  const docFee = 3500;
  const pickupMin = 4000, pickupMax = 10000;
  const insuranceMin = cargoValue * 0.003, insuranceMax = cargoValue * 0.005;

  const totalMin = freightMin + dgSurcharge + thcMin + cfsMin + chaFee + docFee + pickupMin + insuranceMin;
  const totalMax = freightMax + dgSurcharge + thcMax + cfsMax + chaFee + docFee + pickupMax + insuranceMax;

  const lineItems = [
    { label: `${shipMode === "air" ? "Air" : "Ocean"} Freight`, min: freightMin, max: freightMax },
    ...(dgSurcharge > 0 ? [{ label: "DG Surcharge", min: dgSurcharge, max: dgSurcharge * 1.1 }] : []),
    { label: "Origin Terminal Handling (THC)", min: thcMin, max: thcMax },
    { label: "CFS / Stuffing charges", min: cfsMin, max: cfsMax },
    { label: "Customs CHA fees (Ambeza)", min: chaFee, max: chaFee },
    { label: "Documentation (BL/AWB/CoO)", min: docFee, max: docFee },
    { label: "Inland transport (pickup)", min: pickupMin, max: pickupMax },
    ...(cargoValue > 0 ? [{ label: "Cargo insurance (0.3–0.5%)", min: insuranceMin, max: insuranceMax }] : []),
  ];

  const modeLabels: Record<ShipMode, string> = {
    air: "Air Freight (3–7 days)",
    lcl: "Sea LCL — shared container",
    fcl20: "Sea FCL — 20ft container",
    fcl40: "Sea FCL — 40ft container",
    fcl40hc: "Sea FCL — 40ft High Cube",
  };

  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Free Tool</p>
            <h1 className="text-4xl font-bold mb-4">Shipping Cost Estimator</h1>
            <p className="text-slate-300 text-lg">Get a ballpark cost for your export shipment in 2 minutes. No signup, no commitment.</p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-8">
            {([1, 2, 3, 4] as Step[]).map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    s <= step ? "bg-[#185FA5] text-white" : "bg-[#E2E8F0] text-[#475569]"
                  }`}
                >
                  {s}
                </div>
                {s < 4 && (
                  <div className={`h-px flex-1 ${s < step ? "bg-[#185FA5]" : "bg-[#E2E8F0]"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8">
              <h2 className="text-xl font-bold text-[#0A1628] mb-6">Step 1 — Your cargo</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0A1628] mb-2">Origin (shipping from)</label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
                  >
                    <option value="">Select city / port</option>
                    {ORIGINS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                      Chargeable weight (kg)
                    </label>
                    <input
                      type="number"
                      value={weight || ""}
                      onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                      placeholder="e.g. 250"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
                    />
                    <p className="text-xs text-[#475569] mt-1">
                      Not sure?{" "}
                      <Link href="/tools/volumetric-calculator" className="text-[#185FA5] underline">
                        Calculate first
                      </Link>
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                      CBM (for sea shipments)
                    </label>
                    <input
                      type="number"
                      value={cbm || ""}
                      onChange={(e) => setCbm(parseFloat(e.target.value) || 0)}
                      placeholder="e.g. 2.5"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0A1628] mb-2">Cargo type</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { val: "general", label: "General Goods" },
                      { val: "dg", label: "DG Cargo" },
                      { val: "perishable", label: "Perishable" },
                      { val: "odc", label: "Oversized/ODC" },
                    ].map(({ val, label }) => (
                      <button
                        key={val}
                        onClick={() => setCargoType(val)}
                        className={`py-2.5 rounded-xl text-sm font-medium border-2 transition-colors ${
                          cargoType === val
                            ? "bg-[#185FA5] border-[#185FA5] text-white"
                            : "bg-white border-[#E2E8F0] text-[#475569]"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                    Approximate cargo value (₹) — for insurance estimate
                  </label>
                  <input
                    type="number"
                    value={cargoValue || ""}
                    onChange={(e) => setCargoValue(parseFloat(e.target.value) || 0)}
                    placeholder="e.g. 500000"
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setStep(2)}
                  disabled={!origin || !weight}
                  className="bg-[#185FA5] text-white font-semibold px-8 py-3 rounded-full disabled:opacity-50 hover:bg-[#14508a] transition-colors inline-flex items-center gap-2"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8">
              <h2 className="text-xl font-bold text-[#0A1628] mb-6">Step 2 — Destination</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0A1628] mb-2">Destination country</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0A1628] mb-2">Preferred Incoterm</label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {["EXW", "FOB", "CIF", "DDP", "Not sure"].map((term) => (
                      <button
                        key={term}
                        onClick={() => setIncoterm(term)}
                        className={`py-2.5 rounded-xl text-sm font-medium border-2 transition-colors ${
                          incoterm === term
                            ? "bg-[#185FA5] border-[#185FA5] text-white"
                            : "bg-white border-[#E2E8F0] text-[#475569]"
                        }`}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
                    {[
                      { term: "FOB", desc: "You pay until the cargo is on the ship. Buyer pays onward." },
                      { term: "CIF", desc: "You pay freight + insurance to destination port." },
                      { term: "DDP", desc: "You pay everything including destination customs and delivery." },
                    ].map(({ term, desc }) => (
                      <div key={term} className="bg-[#F8FAFC] rounded-lg p-3">
                        <p className="text-xs font-bold text-[#0A1628] mb-1">{term}</p>
                        <p className="text-xs text-[#475569]">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="text-[#475569] font-medium text-sm inline-flex items-center gap-1 hover:text-[#0A1628]"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!destination}
                  className="bg-[#185FA5] text-white font-semibold px-8 py-3 rounded-full disabled:opacity-50 hover:bg-[#14508a] transition-colors inline-flex items-center gap-2"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8">
              <h2 className="text-xl font-bold text-[#0A1628] mb-6">Step 3 — Shipping mode</h2>
              <div className="space-y-3">
                {(Object.entries(modeLabels) as [ShipMode, string][]).map(([mode, label]) => (
                  <button
                    key={mode}
                    onClick={() => setShipMode(mode)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 text-left transition-colors ${
                      shipMode === mode
                        ? "bg-[#185FA5]/5 border-[#185FA5]"
                        : "bg-white border-[#E2E8F0] hover:border-[#185FA5]/50"
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-sm text-[#0A1628]">{label}</p>
                    </div>
                    {destination && (
                      <span className="text-xs text-[#475569] bg-[#F8FAFC] px-3 py-1 rounded-full">
                        {getTransit(origin, destination, mode)[0]}–{getTransit(origin, destination, mode)[1]} days transit
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setStep(2)}
                  className="text-[#475569] font-medium text-sm inline-flex items-center gap-1 hover:text-[#0A1628]"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="bg-[#185FA5] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#14508a] transition-colors inline-flex items-center gap-2"
                >
                  See Estimate <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4 — Results */}
          {step === 4 && (
            <div className="space-y-5">
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#0A1628]">Estimated Cost Breakdown</h2>
                  <button
                    onClick={() => setStep(1)}
                    className="text-[#185FA5] text-sm font-medium hover:underline"
                  >
                    Recalculate
                  </button>
                </div>

                <div className="text-xs text-[#475569] bg-[#F8FAFC] rounded-lg px-4 py-2 mb-5">
                  {origin} → {destination} · {modeLabels[shipMode]} · {incoterm}
                </div>

                <div className="space-y-3 mb-6">
                  {lineItems.map(({ label, min, max }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-[#E2E8F0]">
                      <span className="text-sm text-[#475569]">{label}</span>
                      <span className="text-sm font-semibold text-[#0A1628]">
                        ₹{fmt(min)} – ₹{fmt(max)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#185FA5] text-white rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">Total Estimated Cost</span>
                    <span className="text-2xl font-bold">₹{fmt(totalMin)} – ₹{fmt(totalMax)}</span>
                  </div>
                  <div className="flex items-center justify-between text-blue-100 text-sm">
                    <span>Estimated door-to-door time</span>
                    <span className="font-semibold">
                      {transit[0] + 5}–{transit[1] + 10} days total
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 mt-4 text-xs text-[#475569]">
                  <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <p>This is an indicative estimate ±20%. Live carrier rates change daily. Destination charges, duties, and buyer-side costs are not included.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/contact"
                  className="block text-center bg-[#185FA5] text-white font-semibold py-4 rounded-full hover:bg-[#14508a] transition-colors"
                >
                  Get a Firm Quote — Free, within 24 hours
                </Link>
                <a
                  href={`https://wa.me/919999999999?text=Hi, I used the estimator: ${origin} to ${destination}, ${shipMode}, ~${weight}kg. Can you give me a firm quote?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#25D366] text-white font-semibold py-4 rounded-full hover:bg-[#128C7E] transition-colors"
                >
                  📱 Discuss on WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
