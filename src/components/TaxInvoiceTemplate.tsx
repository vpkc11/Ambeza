import type { CSSProperties } from "react";

const border = "1px solid #000";

const cellStyle: CSSProperties = {
  border,
  padding: "3px 4px",
  textAlign: "left",
  verticalAlign: "top",
  lineHeight: 1.1,
};

const mutedLabelStyle: CSSProperties = {
  display: "block",
  marginBottom: 1,
  color: "#64748b",
  fontSize: 8,
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  lineHeight: 1.1,
};

const details = [
  ["GMR / AAICLAS TERMINAL WAREHOUSE CHARGES", "Pass-through · at actuals"],
  ["CARGO X-RAY & IT FACILITATION CHARGES", "Pass-through · at actuals"],
  ["COMMERCIAL AIRFREIGHT CHARGES", "Pass-through · at actuals"],
  ["AIRWAY BILL (AWB) PROCESSING CHARGES", "Pass-through · at actuals"],
  ["CUSTOMS EDI & ICEGATE STATUTORY TRANSMISSION", "Pass-through · at actuals"],
  ["LOCAL HUB TRANSPORTATION & PICKUP CHARGES", "Pass-through · at actuals"],
];

function PlaceholderField({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ minWidth: 0 }}>
      <span style={mutedLabelStyle}>{label}</span>
      <span style={{ color: "#111827", fontWeight: 600 }}>{value}</span>
    </div>
  );
}

export default function TaxInvoiceTemplate() {
  return (
    <section
      aria-labelledby="freight-cost-template-title"
      className="bg-slate-50 py-8 sm:py-10"
    >
      <style>{`
        @media print {
          .freight-invoice-template {
            break-inside: avoid;
            box-shadow: none !important;
          }
          .freight-invoice-table {
            min-width: 0 !important;
          }
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#185FA5]">
            Transparent air cargo pricing
          </p>
          <h2
            id="freight-cost-template-title"
            className="text-2xl font-bold text-[#0A1628] sm:text-3xl"
          >
            See exactly where your shipment charges go
          </h2>
        </div>

        <div className="relative grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="freight-invoice-scale lg:h-[520px] lg:max-h-[520px] lg:overflow-hidden lg:pt-[15px]">
          <div
            className="freight-invoice-template overflow-hidden rounded-lg bg-white text-[10px] leading-tight shadow-md lg:w-[111.111%] lg:origin-top-left lg:scale-[0.9]"
            style={{ border, color: "#111827" }}
          >
          <div className="border-b border-black p-2 sm:p-2.5">
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
              <div>
                <p className="text-sm font-extrabold tracking-tight text-slate-900">
                  AMBEZA
                </p>
                <p className="text-[10px] font-semibold leading-tight">
                  Ambeza Private Limited
                </p>
                <p className="text-[9px] leading-tight text-slate-600">
                  Licensed Customs Broker &amp; International Freight Forwarder
                </p>
                <p className="text-[9px] leading-tight text-slate-600">
                  Begumpet Commercial Complex, Hyderabad, Telangana, India
                </p>
              </div>
              <div className="sm:text-right">
                <span className="inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-900">
                  Illustrative template
                </span>
                <h3 className="mt-0.5 text-sm font-extrabold tracking-wide leading-tight">
                  TAX INVOICE
                </h3>
                <p className="text-[9px] leading-tight text-slate-600">
                  Draft layout · Complete verified particulars before issue
                </p>
              </div>
            </div>

            <div
              className="mt-1.5 grid grid-cols-1 gap-1.5 bg-slate-50 p-1.5 sm:grid-cols-2 lg:grid-cols-4"
              style={{ border }}
            >
              <PlaceholderField label="GSTIN" value="[ISSUER GSTIN]" />
              <PlaceholderField label="Invoice number" value="[INVOICE NO]" />
              <PlaceholderField label="Invoice date" value="[DD / MM / YYYY]" />
              <PlaceholderField label="Place of supply" value="[STATE / CODE]" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
            <div className="p-2" style={{ borderBottom: border }}>
              <h4 className="mb-1 text-[9px] font-bold uppercase tracking-wider text-slate-700">
                Bill to
              </h4>
              <div className="space-y-1">
                <PlaceholderField label="Customer / exporter" value="[LEGAL NAME]" />
                <PlaceholderField label="Billing address" value="[REGISTERED ADDRESS]" />
                <PlaceholderField label="GSTIN (if applicable)" value="[CUSTOMER GSTIN]" />
              </div>
            </div>
            <div
              className="p-2"
              style={{ borderBottom: border }}
            >
              <h4 className="mb-1 text-[9px] font-bold uppercase tracking-wider text-slate-700">
                Shipment details
              </h4>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                <PlaceholderField label="MAWB number" value="[MAWB NO]" />
                <PlaceholderField label="Shipping Bill" value="[SHIPPING BILL NO]" />
                <PlaceholderField
                  label="Chargeable weight"
                  value="[ACTUAL / CHARGEABLE WGT]"
                />
                <PlaceholderField label="Route" value="[ORIGIN → DESTINATION]" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table
              className="freight-invoice-table w-full min-w-[600px] border-collapse text-[10px] leading-tight"
              style={{ border, borderLeft: 0, borderRight: 0 }}
            >
              <thead>
                <tr style={{ background: "#e2e8f0" }}>
                  <th scope="col" style={{ ...cellStyle, width: "5%" }}>#</th>
                  <th scope="col" style={{ ...cellStyle, width: "45%" }}>
                    Description of service
                  </th>
                  <th scope="col" style={{ ...cellStyle, width: "20%" }}>
                    Charge basis
                  </th>
                  <th scope="col" style={{ ...cellStyle, width: "15%" }}>
                    SAC / HSN
                  </th>
                  <th scope="col" style={{ ...cellStyle, width: "15%" }}>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {details.map(([description, basis], index) => (
                  <tr key={description}>
                    <td style={cellStyle}>{index + 1}</td>
                    <td style={cellStyle}>{description}</td>
                    <td style={cellStyle}>{basis}</td>
                    <td style={cellStyle}>[SAC / HSN]</td>
                    <td style={{ ...cellStyle, fontWeight: 700 }}>AT ACTUALS</td>
                  </tr>
                ))}
                <tr className="bg-amber-100 font-bold text-amber-950 dark:bg-amber-500/20 dark:text-amber-400">
                  <td className="border-2 border-amber-500" style={{ ...cellStyle, border: "2px solid #f59e0b" }}>7</td>
                  <td className="border-2 border-amber-500" style={{ ...cellStyle, border: "2px solid #f59e0b" }}>
                    <strong className="text-amber-950 dark:text-amber-400">
                      AGENCY CHARGES (AMBEZA CAPPED CLEARANCE &amp; CHA FEE)
                    </strong>
                    <span
                      style={{
                        display: "block",
                        marginTop: 2,
                        color: "inherit",
                        fontSize: 8,
                        lineHeight: 1.1,
                      }}
                    >
                      Indicative fixed handling fee; confirm in written quote.
                    </span>
                  </td>
                  <td className="border-2 border-amber-500" style={{ ...cellStyle, border: "2px solid #f59e0b" }}>Fixed handling fee</td>
                  <td className="border-2 border-amber-500" style={{ ...cellStyle, border: "2px solid #f59e0b" }}>[SAC / HSN]</td>
                  <td className="border-2 border-amber-500" style={{ ...cellStyle, border: "2px solid #f59e0b" }}>
                    <span className="whitespace-nowrap font-extrabold text-amber-950 dark:text-amber-400">
                      FIXED ₹5,000 - ₹10,000
                    </span>
                    <span className="ml-1.5 inline-flex animate-pulse whitespace-nowrap rounded-full bg-amber-200 px-1.5 py-0.5 align-middle text-[7px] font-extrabold tracking-wide text-amber-950 dark:bg-amber-500/30 dark:text-amber-400">
                      OUR ONLY EARNING
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2">
            <div>
              <h4 className="mb-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-700">
                Bank details
              </h4>
              <div className="grid grid-cols-1 gap-1 bg-slate-50 p-1.5 sm:grid-cols-2" style={{ border }}>
                <PlaceholderField label="Bank and branch" value="[BANK / BRANCH]" />
                <PlaceholderField label="Account name" value="[ACCOUNT NAME]" />
                <PlaceholderField label="Account number" value="[ACCOUNT NO]" />
                <PlaceholderField label="IFSC" value="[IFSC CODE]" />
              </div>
            </div>
            <div>
              <h4 className="mb-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-700">
                Tax summary
              </h4>
              <table className="w-full border-collapse text-[10px] leading-tight" style={{ border }}>
                <tbody>
                  {[
                    ["Taxable value", "[AMOUNT]"],
                    ["CGST / SGST or IGST", "[RATE] · [AMOUNT]"],
                    ["Total invoice value", "[TOTAL AMOUNT]"],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <th scope="row" style={{ ...cellStyle, fontWeight: 600 }}>
                        {label}
                      </th>
                      <td style={cellStyle}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-1 text-[8px] leading-tight text-slate-600">
                Tax classification, rates, and amounts must be verified for the
                specific supply before issuing an invoice.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 border-t border-black p-2 sm:grid-cols-2">
            <div>
              <h4 className="mb-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-700">
                Declaration
              </h4>
              <p className="text-[8px] leading-tight text-slate-600">
                [INSERT APPLICABLE DECLARATION AND TERMS AFTER REVIEW BY YOUR
                TAX ADVISER.]
              </p>
            </div>
            <div className="flex min-h-12 flex-col justify-between sm:items-end sm:text-right">
              <p className="text-[10px] font-semibold">For Ambeza Private Limited</p>
              <div className="mt-2 w-36 border-t border-slate-500 pt-0.5 text-left text-[8px] text-slate-600">
                Authorised signatory
              </div>
            </div>
          </div>
        </div>

        <p className="mt-1 text-[8px] leading-tight text-slate-500">
          This is a non-issuable illustrative layout, not a tax invoice or tax
          advice. Replace placeholders and verify issuer details, tax treatment,
          statutory fields, and charges with the company&apos;s tax professional
          before using any invoice.
        </p>
            </div>
          </div>

          <aside className="relative lg:col-span-4">
            <svg
              aria-label="Arrow pointing from the explanation to the highlighted agency charges row"
              role="img"
              viewBox="0 0 56 24"
              className="absolute left-[-3.25rem] top-[20.7rem] hidden h-6 w-14 text-amber-600 lg:block"
              fill="none"
            >
              <path
                d="M54 12H7m0 0 11-10M7 12l11 10"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </svg>
            <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 shadow-sm lg:absolute lg:inset-x-0 lg:top-1/2 lg:-translate-y-1/2">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                OUR PRICING, MADE CLEAR
              </p>
              <h3 className="mt-2 text-xl font-extrabold leading-tight text-slate-900">
                This Flat Agency Fee Is Our Only Earnings.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                We don&apos;t take a percentage cut just because your cargo
                invoice is high. All airline freight, terminal handling, and
                customs EDI charges are passed through at net actual costs with
                official receipts. Our earnings are capped at a flat ₹5,000 –
                ₹10,000 agency fee for complete clearance &amp; file management.
              </p>
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold leading-relaxed text-emerald-900 lg:absolute lg:inset-x-0 lg:bottom-8">
              <span aria-hidden="true" className="text-lg">✓</span>
              <p>100% Net Receipt Transparency Provided Upon Settlement.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
