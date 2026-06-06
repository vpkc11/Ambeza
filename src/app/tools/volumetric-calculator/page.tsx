"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Trash2, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

type Mode = "air" | "lcl" | "courier";

interface Package {
  id: number;
  length: number;
  width: number;
  height: number;
  weight: number;
  quantity: number;
}

function calcVolumetric(pkg: Package, mode: Mode) {
  const divisor = mode === "courier" ? 5000 : mode === "lcl" ? 1000000 : 6000;
  const volWeight = (pkg.length * pkg.width * pkg.height) / divisor;
  return volWeight;
}

function calcCBM(pkg: Package) {
  return (pkg.length * pkg.width * pkg.height) / 1000000;
}

export default function VolumetricCalculatorPage() {
  const [mode, setMode] = useState<Mode>("air");
  const [packages, setPackages] = useState<Package[]>([
    { id: 1, length: 0, width: 0, height: 0, weight: 0, quantity: 1 },
  ]);

  const addPackage = () => {
    if (packages.length < 5) {
      setPackages([
        ...packages,
        { id: Date.now(), length: 0, width: 0, height: 0, weight: 0, quantity: 1 },
      ]);
    }
  };

  const removePackage = (id: number) => {
    if (packages.length > 1) {
      setPackages(packages.filter((p) => p.id !== id));
    }
  };

  const updatePackage = (id: number, field: keyof Package, value: number) => {
    setPackages(packages.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const totalActual = packages.reduce((sum, p) => sum + p.weight * p.quantity, 0);
  const totalVolumetric = packages.reduce(
    (sum, p) => sum + calcVolumetric(p, mode) * p.quantity,
    0
  );
  const totalCBM = packages.reduce((sum, p) => sum + calcCBM(p) * p.quantity, 0);
  const chargeableWeight = Math.max(totalActual, totalVolumetric);
  const payForVolumetric = totalVolumetric > totalActual;

  const modeLabel = { air: "Air Freight", lcl: "Sea LCL", courier: "International Courier" };
  const divisor = { air: 6000, lcl: "1,000,000 (→ CBM)", courier: 5000 };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#185FA5] font-semibold text-sm mb-3 uppercase tracking-wider">Free Tool</p>
            <h1 className="text-4xl font-bold mb-4">Volumetric Weight Calculator</h1>
            <p className="text-slate-300 text-lg">You pay for whichever is higher — actual weight or volumetric (dimensional) weight. Calculate it here before you get a quote.</p>
          </div>
        </div>
      </section>

      {/* Explainer */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-amber-900">
            <strong>Why does this matter?</strong> A large box of pillows weighing 10 kg but filling 40 kg of cargo space? You pay for 40 kg. Airlines and shipping companies charge based on the <em>greater</em> of actual weight or volumetric weight.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Input panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mode selector */}
            <div>
              <h2 className="text-lg font-bold text-[#0A1628] mb-3">Shipping mode</h2>
              <div className="flex gap-2 flex-wrap">
                {(["air", "lcl", "courier"] as Mode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-colors ${
                      mode === m
                        ? "bg-[#185FA5] border-[#185FA5] text-white"
                        : "bg-white border-[#E2E8F0] text-[#475569] hover:border-[#185FA5]"
                    }`}
                  >
                    {modeLabel[m]}
                  </button>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div>
              <h2 className="text-lg font-bold text-[#0A1628] mb-3">Package dimensions</h2>
              <div className="space-y-4">
                {packages.map((pkg, i) => (
                  <div
                    key={pkg.id}
                    className="bg-white border border-[#E2E8F0] rounded-xl p-5"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-[#0A1628]">
                        Package {i + 1}
                      </span>
                      {packages.length > 1 && (
                        <button
                          onClick={() => removePackage(pkg.id)}
                          className="text-[#EF4444] hover:text-red-700 p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {[
                        { field: "length" as const, label: "Length (cm)" },
                        { field: "width" as const, label: "Width (cm)" },
                        { field: "height" as const, label: "Height (cm)" },
                        { field: "weight" as const, label: "Weight (kg)" },
                        { field: "quantity" as const, label: "Qty" },
                      ].map(({ field, label }) => (
                        <div key={field}>
                          <label className="block text-xs text-[#475569] mb-1">{label}</label>
                          <input
                            type="number"
                            min={0}
                            value={pkg[field] || ""}
                            onChange={(e) =>
                              updatePackage(pkg.id, field, parseFloat(e.target.value) || 0)
                            }
                            placeholder="0"
                            className="w-full px-3 py-2 rounded-lg border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {packages.length < 5 && (
                <button
                  onClick={addPackage}
                  className="mt-3 flex items-center gap-2 text-[#185FA5] text-sm font-semibold hover:underline"
                >
                  <Plus className="h-4 w-4" /> Add another package type
                </button>
              )}
            </div>
          </div>

          {/* Results panel */}
          <div className="lg:col-span-1">
            <div className="bg-[#0A1628] text-white rounded-2xl p-7 sticky top-24">
              <h2 className="text-lg font-bold mb-5">Results</h2>

              <div className="space-y-4 mb-5">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Total actual weight</span>
                  <span className="font-semibold">{totalActual.toFixed(2)} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Total volumetric weight</span>
                  <span className="font-semibold">{totalVolumetric.toFixed(2)} kg</span>
                </div>
                {mode === "lcl" && (
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">Total CBM</span>
                    <span className="font-semibold">{totalCBM.toFixed(4)} m³</span>
                  </div>
                )}
              </div>

              <div className={`rounded-xl p-5 mb-5 ${payForVolumetric ? "bg-[#185FA5]" : "bg-[#10B981]/20"}`}>
                <p className="text-xs text-white/70 mb-1">Chargeable weight</p>
                <p className="text-3xl font-bold">{chargeableWeight.toFixed(2)} kg</p>
                <p className="text-sm mt-2 text-white/80">
                  {payForVolumetric
                    ? "Paying for VOLUMETRIC weight (box is large relative to its weight)"
                    : "Paying for ACTUAL weight (cargo is dense)"}
                </p>
              </div>

              <p className="text-xs text-slate-500 mb-5">
                Formula ({modeLabel[mode]}): L × W × H ÷ {divisor[mode]}
              </p>

              <Link
                href="/tools/shipping-estimator"
                className="block w-full text-center bg-[#F59E0B] text-white font-semibold py-3 rounded-full hover:bg-[#d97706] transition-colors text-sm"
              >
                Now estimate shipping cost <ChevronRight className="h-4 w-4 inline" />
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Formula reference */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-5">Formula reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl border border-[#E2E8F0]">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  <th className="text-left px-5 py-3 font-semibold text-[#475569]">Mode</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#475569]">Divisor</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#475569]">Formula</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#E2E8F0]">
                  <td className="px-5 py-3 font-medium">Air Freight</td>
                  <td className="px-5 py-3 text-[#475569]">6,000</td>
                  <td className="px-5 py-3 text-[#475569] font-mono text-xs">L×W×H (cm) ÷ 6000</td>
                </tr>
                <tr className="border-t border-[#E2E8F0]">
                  <td className="px-5 py-3 font-medium">Courier (DHL/FedEx)</td>
                  <td className="px-5 py-3 text-[#475569]">5,000</td>
                  <td className="px-5 py-3 text-[#475569] font-mono text-xs">L×W×H (cm) ÷ 5000</td>
                </tr>
                <tr className="border-t border-[#E2E8F0]">
                  <td className="px-5 py-3 font-medium">Sea LCL</td>
                  <td className="px-5 py-3 text-[#475569]">per CBM</td>
                  <td className="px-5 py-3 text-[#475569] font-mono text-xs">L×W×H (cm) ÷ 1,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#475569] mt-4">
            For Sea LCL, you are charged per cubic metre (CBM). The rate is per m³, not per kg.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
