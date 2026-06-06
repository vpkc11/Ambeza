"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

type ShipMode = "air" | "sea";

const ORIGINS = [
  "Mumbai (JNPT)", "Chennai", "Delhi (ICD Tughlakabad)",
  "Hyderabad (RGIA)", "Kolkata", "Mundra", "Bangalore",
];

const COUNTRIES = [
  "UAE", "UK", "USA (East Coast)", "USA (West Coast)", "Singapore",
  "Australia", "Germany", "Kenya", "South Africa", "Japan",
  "Canada", "Saudi Arabia", "Netherlands", "Malaysia", "Bangladesh",
];

interface TransitData {
  preShip: [number, number];
  inland: [number, number];
  cfs: [number, number];
  customs: [number, number];
  transit: [number, number];
  destPort: [number, number];
  destCustoms: [number, number];
  lastMile: [number, number];
}

const transitDB: Record<string, Record<string, Record<ShipMode, TransitData>>> = {
  "Mumbai (JNPT)": {
    UAE: {
      air: { preShip: [2, 4], inland: [0, 1], cfs: [1, 2], customs: [1, 2], transit: [2, 3], destPort: [1, 2], destCustoms: [1, 2], lastMile: [1, 2] },
      sea: { preShip: [3, 5], inland: [1, 2], cfs: [2, 3], customs: [1, 3], transit: [8, 10], destPort: [2, 4], destCustoms: [1, 3], lastMile: [1, 2] },
    },
    UK: {
      air: { preShip: [2, 4], inland: [0, 1], cfs: [1, 2], customs: [1, 2], transit: [5, 7], destPort: [1, 2], destCustoms: [1, 3], lastMile: [1, 2] },
      sea: { preShip: [3, 5], inland: [1, 2], cfs: [2, 3], customs: [1, 3], transit: [22, 28], destPort: [2, 4], destCustoms: [2, 5], lastMile: [1, 3] },
    },
    "USA (East Coast)": {
      air: { preShip: [2, 4], inland: [0, 1], cfs: [1, 2], customs: [1, 2], transit: [6, 8], destPort: [1, 2], destCustoms: [2, 5], lastMile: [1, 3] },
      sea: { preShip: [3, 5], inland: [1, 2], cfs: [2, 3], customs: [1, 3], transit: [28, 35], destPort: [3, 5], destCustoms: [2, 5], lastMile: [1, 3] },
    },
    "USA (West Coast)": {
      air: { preShip: [2, 4], inland: [0, 1], cfs: [1, 2], customs: [1, 2], transit: [5, 7], destPort: [1, 2], destCustoms: [2, 5], lastMile: [1, 3] },
      sea: { preShip: [3, 5], inland: [1, 2], cfs: [2, 3], customs: [1, 3], transit: [22, 28], destPort: [3, 5], destCustoms: [2, 5], lastMile: [1, 3] },
    },
    Singapore: {
      air: { preShip: [2, 4], inland: [0, 1], cfs: [1, 2], customs: [1, 2], transit: [3, 4], destPort: [1, 2], destCustoms: [1, 2], lastMile: [1, 2] },
      sea: { preShip: [3, 5], inland: [1, 2], cfs: [2, 3], customs: [1, 3], transit: [10, 15], destPort: [2, 3], destCustoms: [1, 2], lastMile: [1, 2] },
    },
    Australia: {
      air: { preShip: [2, 4], inland: [0, 1], cfs: [1, 2], customs: [1, 2], transit: [4, 6], destPort: [1, 2], destCustoms: [2, 4], lastMile: [1, 3] },
      sea: { preShip: [3, 5], inland: [1, 2], cfs: [2, 3], customs: [1, 3], transit: [18, 22], destPort: [2, 4], destCustoms: [2, 5], lastMile: [1, 3] },
    },
    Germany: {
      air: { preShip: [2, 4], inland: [0, 1], cfs: [1, 2], customs: [1, 2], transit: [5, 7], destPort: [1, 2], destCustoms: [1, 3], lastMile: [1, 2] },
      sea: { preShip: [3, 5], inland: [1, 2], cfs: [2, 3], customs: [1, 3], transit: [22, 26], destPort: [2, 4], destCustoms: [1, 4], lastMile: [1, 2] },
    },
  },
};

const defaultData: Record<ShipMode, TransitData> = {
  air: { preShip: [2, 5], inland: [0, 1], cfs: [1, 2], customs: [1, 3], transit: [5, 8], destPort: [1, 3], destCustoms: [1, 5], lastMile: [1, 3] },
  sea: { preShip: [3, 5], inland: [1, 3], cfs: [2, 3], customs: [1, 3], transit: [20, 35], destPort: [2, 5], destCustoms: [2, 5], lastMile: [1, 3] },
};

function getTransitData(origin: string, country: string, mode: ShipMode): TransitData {
  return transitDB[origin]?.[country]?.[mode] || defaultData[mode];
}

function totalDays(d: TransitData): { min: number; max: number } {
  const stages = Object.values(d) as [number, number][];
  return {
    min: stages.reduce((s, [min]) => s + min, 0),
    max: stages.reduce((s, [, max]) => s + max, 0),
  };
}

function cumulative(d: TransitData) {
  const stages = [
    d.preShip, d.inland, d.cfs, d.customs, d.transit, d.destPort, d.destCustoms, d.lastMile,
  ] as [number, number][];
  let cumMin = 0, cumMax = 0;
  return stages.map(([min, max]) => {
    cumMin += min;
    cumMax += max;
    return { min: cumMin, max: cumMax };
  });
}

const stageLabels = [
  "Pre-shipment & documents",
  "Inland transport to port",
  "CFS / Port handling",
  "Indian customs clearance",
  "Ocean / Air transit",
  "Destination port handling",
  "Destination customs",
  "Last mile delivery",
];

export default function TransitTimePage() {
  const [origin, setOrigin] = useState("");
  const [country, setCountry] = useState("");
  const [mode, setMode] = useState<ShipMode>("sea");

  const hasResult = origin && country;
  const data = hasResult ? getTransitData(origin, country, mode) : null;
  const total = data ? totalDays(data) : null;
  const cum = data ? cumulative(data) : null;
  const stageValues = data
    ? [data.preShip, data.inland, data.cfs, data.customs, data.transit, data.destPort, data.destCustoms, data.lastMile]
    : null;

  const maxDay = total ? total.max : 50;

  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Free Tool</p>
            <h1 className="text-4xl font-bold mb-4">Transit Time Tool</h1>
            <p className="text-slate-300 text-lg">How long does shipping from India to your destination take — including every stage, not just sailing time.</p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          {/* Inputs */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#0A1628] mb-2">Origin port / city</label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
                >
                  <option value="">Select origin</option>
                  {ORIGINS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0A1628] mb-2">Destination country</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
                >
                  <option value="">Select country</option>
                  {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0A1628] mb-2">Shipping mode</label>
                <div className="flex gap-2">
                  {(["air", "sea"] as ShipMode[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`flex-1 py-3 rounded-xl text-sm font-semibold border-2 transition-colors capitalize ${
                        mode === m
                          ? "bg-[#185FA5] border-[#185FA5] text-white"
                          : "bg-white border-[#E2E8F0] text-[#475569]"
                      }`}
                    >
                      {m === "air" ? "✈️ Air" : "🚢 Sea"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          {hasResult && data && cum && stageValues && total && (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#0A1628]">
                  {origin} → {country} ({mode === "air" ? "Air" : "Sea"})
                </h2>
                <span className="bg-[#185FA5] text-white text-sm font-bold px-4 py-2 rounded-full">
                  {total.min}–{total.max} days total
                </span>
              </div>

              <div className="space-y-3 mb-6">
                {stageLabels.map((label, i) => {
                  const [min, max] = stageValues[i];
                  const cumEnd = cum[i];
                  const isTransit = i === 4;
                  const barWidth = (max / maxDay) * 100;

                  return (
                    <div key={label} className="grid grid-cols-12 items-center gap-3">
                      <div className="col-span-5 text-sm text-[#475569]">{label}</div>
                      <div className="col-span-4">
                        <div className="h-6 bg-[#F8FAFC] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              isTransit ? "bg-[#185FA5]" : "bg-[#E2E8F0]"
                            }`}
                            style={{ width: `${Math.max(barWidth, 5)}%` }}
                          />
                        </div>
                      </div>
                      <div className={`col-span-1 text-xs font-semibold ${isTransit ? "text-[#185FA5]" : "text-[#475569]"}`}>
                        {min}–{max}d
                      </div>
                      <div className="col-span-2 text-xs text-[#475569] text-right">
                        by day {cumEnd.min}–{cumEnd.max}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
                <strong>Note:</strong> Green channel customs clearance assumed. Red channel can add 1–3 days. Destination customs can vary significantly by country and commodity.
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/tools/shipping-estimator"
                  className="flex-1 text-center bg-[#185FA5] text-white font-semibold py-3 rounded-full hover:bg-[#14508a] transition-colors text-sm"
                >
                  Estimate shipping cost
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 text-center border-2 border-[#185FA5] text-[#185FA5] font-semibold py-3 rounded-full hover:bg-[#185FA5] hover:text-white transition-colors text-sm"
                >
                  Get a firm quote
                </Link>
              </div>
            </div>
          )}

          {!hasResult && (
            <div className="bg-[#F8FAFC] rounded-2xl p-10 text-center text-[#475569]">
              Select your origin and destination above to see the full timeline.
            </div>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
