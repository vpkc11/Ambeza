"use client";

import BlogLayout from "../BlogLayout";

const steps = [
  { num: "01", title: "Go to dgft.gov.in", detail: "Visit the DGFT portal. Click on 'Services' → 'IEC' → 'Apply for IEC'. You will be prompted to create a login with your PAN number and mobile number." },
  { num: "02", title: "Complete the online application form", detail: "Fill in your business details: entity type (proprietorship, partnership, company, LLP), business name, registered address, and contact details." },
  { num: "03", title: "Upload documents", detail: "Upload scanned copies of your PAN card, Aadhaar (for proprietorship), cancelled cheque or bank certificate, and a digital photograph. Company applicants upload Certificate of Incorporation and board resolution." },
  { num: "04", title: "Pay the ₹500 fee", detail: "Pay online via net banking, UPI, or debit/credit card. Keep the payment receipt. The fee is non-refundable." },
  { num: "05", title: "Digital signature or Aadhaar OTP verification", detail: "Verify your application using either a Digital Signature Certificate (DSC) or Aadhaar OTP. The Aadhaar OTP method is simpler and most applicants use it." },
  { num: "06", title: "IEC issued", detail: "Your IEC is generated immediately or within 1–2 working days. Download the e-IEC certificate from the DGFT portal. It is valid for the lifetime of the entity — no renewal needed." },
];

const docs = [
  {
    entity: "Proprietorship",
    docs: ["PAN card of proprietor", "Aadhaar card of proprietor", "Cancelled cheque or bank certificate (showing name and account number)", "Digital photograph of proprietor", "Registered business address proof"],
  },
  {
    entity: "Private Limited / LLP",
    docs: ["PAN card of the company", "Certificate of Incorporation from MCA", "PAN and Aadhaar of authorised signatory", "Cancelled cheque or bank certificate in company name", "Digital photograph of authorised signatory"],
  },
  {
    entity: "Partnership Firm",
    docs: ["PAN card of the firm", "Partnership Deed", "PAN and Aadhaar of managing partner", "Cancelled cheque or bank certificate in firm name", "Registered address proof"],
  },
];

const rejections = [
  { reason: "Bank account not linked to PAN", fix: "Ensure the bank account in your application is the same account linked to your PAN in the income tax system." },
  { reason: "Name mismatch between PAN and bank account", fix: "The name on the PAN and the bank account must match exactly — including middle names and suffixes." },
  { reason: "Aadhaar OTP verification failure", fix: "Ensure your Aadhaar is linked to your current mobile number. Use the DSC option if Aadhaar OTP keeps failing." },
  { reason: "Address not matching official records", fix: "Use the address as it appears on your PAN or Aadhaar — not your current mailing address if different." },
  { reason: "Document quality too low", fix: "Upload clear, colour scans (not photos taken on phone at an angle). Minimum 200 DPI." },
];

export default function IECCodeClient() {
  return (
    <BlogLayout
      title="How to Get an IEC Code in India — Step-by-Step 2025"
      description="Everything you need to know about applying for an IEC (Importer Exporter Code) from DGFT — required documents, the exact online process, fee, processing time, and how to fix common rejection reasons."
      publishDate="June 2025"
      readTime="8 min read"
      category="Export Setup"
      relatedLinks={[
        { href: "/new-exporter", label: "New Exporter Guide" },
        { href: "/icegate-guide", label: "ICEGATE & AD Code Guide" },
        { href: "/blog/customs-clearance-process", label: "Customs Clearance Process" },
        { href: "/hsn-checker", label: "HSN Code Checker" },
      ]}
    >
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
        <p className="text-[#0F172A] text-base leading-relaxed">
          IEC is the very first thing you need before exporting from India. Without it, your CHA cannot file a Shipping Bill,
          your bank cannot receive foreign currency against an export, and you cannot claim RoDTEP or Duty Drawback. The good news:
          the application takes under 30 minutes and the code is typically issued the same day.
        </p>
      </div>

      {/* What is IEC */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">What is an IEC code?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { label: "Full form", value: "Importer Exporter Code" },
          { label: "Issued by", value: "DGFT (Directorate General of Foreign Trade)" },
          { label: "Length", value: "10 digits, same as your PAN number" },
          { label: "Fee", value: "₹500 (one-time, government fee)" },
          { label: "Valid for", value: "Lifetime of the entity — no renewal" },
          { label: "Processing time", value: "1–2 working days" },
        ].map((item) => (
          <div key={item.label} className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-center">
            <p className="text-xs text-[#475569] mb-1">{item.label}</p>
            <p className="font-bold text-[#0A1628] text-sm">{item.value}</p>
          </div>
        ))}
      </div>

      {/* When do you need it */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">When is IEC mandatory?</h2>
      <div className="space-y-3 mb-12">
        {[
          { situation: "Filing a Shipping Bill on ICEGATE", detail: "Your CHA cannot file the export declaration without your IEC number. It appears on every Shipping Bill." },
          { situation: "Receiving foreign currency payments", detail: "Your bank's AD department requires your IEC to process incoming SWIFT payments from overseas buyers." },
          { situation: "Claiming RoDTEP and Duty Drawback", detail: "All government export incentive claims are linked to the IEC on the Shipping Bill." },
          { situation: "Importing goods for your business", detail: "IEC is mandatory for imports too — whether raw materials, machinery, or trade goods." },
          { situation: "Registering with export promotion councils (RCMC)", detail: "Your RCMC application requires a valid IEC as the primary identifier." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 bg-white border border-[#E2E8F0] rounded-xl p-4">
            <span className="text-[#10B981] mt-0.5">✓</span>
            <div>
              <p className="font-bold text-[#0A1628] text-sm">{item.situation}</p>
              <p className="text-sm text-[#475569]">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Application steps */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">How to apply — step by step</h2>
      <div className="space-y-4 mb-12">
        {steps.map((s) => (
          <div key={s.num} className="flex gap-4 bg-white border border-[#E2E8F0] rounded-xl p-5">
            <span className="text-3xl font-extrabold text-[#185FA5]/20 flex-shrink-0 leading-none">{s.num}</span>
            <div>
              <p className="font-bold text-[#0A1628] mb-1">{s.title}</p>
              <p className="text-sm text-[#475569] leading-relaxed">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Documents by entity */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Documents required — by entity type</h2>
      <div className="grid grid-cols-1 gap-5 mb-12">
        {docs.map((d) => (
          <div key={d.entity} className="bg-white border border-[#E2E8F0] rounded-xl p-5">
            <p className="font-bold text-[#185FA5] mb-3">{d.entity}</p>
            <ul className="space-y-2">
              {d.docs.map((doc) => (
                <li key={doc} className="flex items-start gap-2 text-sm text-[#475569]">
                  <span className="text-[#185FA5] mt-0.5">•</span>{doc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Common rejections */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Common rejection reasons and how to fix them</h2>
      <div className="space-y-4 mb-12">
        {rejections.map((r) => (
          <div key={r.reason} className="bg-white border-l-4 border-l-amber-500 border border-amber-100 rounded-xl p-5">
            <p className="font-bold text-[#0A1628] text-sm mb-2">Problem: {r.reason}</p>
            <p className="text-sm text-[#475569]"><strong>Fix:</strong> {r.fix}</p>
          </div>
        ))}
      </div>

      {/* After IEC */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">What to do immediately after getting your IEC</h2>
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-12 space-y-4">
        {[
          { step: "Register for GST and file your LUT", detail: "GST registration is required for exports. File your Letter of Undertaking (LUT) before your first export to avoid paying IGST upfront." },
          { step: "Register your AD Code at the export port", detail: "Your bank (authorised dealer) gives you an AD Code. Register it at every port from which you plan to export — one-time per port." },
          { step: "Check your product's export policy on DGFT", detail: "Verify whether your product is Free, Restricted, or Prohibited. Some products require RCMC, SCOMET licence, or DGFT permissions." },
          { step: "Contact Ambeza", detail: "Once IEC, GST, and AD Code are in place, we handle everything else — Shipping Bill, Certificate of Origin, freight booking, customs clearance, and delivery." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#185FA5] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
            <div>
              <p className="font-bold text-[#0A1628] text-sm mb-1">{item.step}</p>
              <p className="text-sm text-[#475569]">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6 mt-10">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: "Is IEC the same as PAN?", a: "IEC is based on your PAN — the 10-digit IEC number is the same as your PAN number. But they are different documents from different government bodies. PAN is issued by Income Tax. IEC is issued by DGFT and is specifically for trade." },
          { q: "Does IEC need to be renewed every year?", a: "No. IEC is valid for the lifetime of the entity. However, you must update your IEC on the DGFT portal annually — even if nothing has changed — to keep it active. This update is free." },
          { q: "Can an individual (not a company) get an IEC?", a: "Yes. Individuals can apply for IEC as a proprietorship. Your IEC number will be your personal PAN." },
          { q: "Is IEC needed for small or gift exports?", a: "IEC is mandatory for all commercial exports. Some exemptions exist for gifts and personal effects below a certain value, but any regular commercial export — however small — requires IEC." },
          { q: "Can I export without IEC if my CHA files on my behalf?", a: "No. Your IEC must appear on the Shipping Bill regardless of who files it. Your CHA files it, but it is your IEC that appears on the document." },
        ].map((item, i) => (
          <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5">
            <p className="font-bold text-[#0A1628] mb-2 text-sm">Q: {item.q}</p>
            <p className="text-sm text-[#475569] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </BlogLayout>
  );
}
