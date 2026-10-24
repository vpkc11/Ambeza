export type FAQCategoryId =
  | "setup"
  | "pricing"
  | "customs"
  | "terminal"
  | "incentives";

export interface FAQItem {
  id: string;
  category: FAQCategoryId;
  categoryLabel: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: FAQCategoryId;
  label: string;
  description: string;
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: "setup",
    label: "First-Time Exporter Setup",
    description: "IEC, AD Code, GST, LUT, and getting your export operation ready.",
  },
  {
    id: "pricing",
    label: "Air Cargo Pricing & Charges",
    description: "Chargeable weight, airline and terminal costs, and agency fees.",
  },
  {
    id: "customs",
    label: "Customs Clearance & ICEGATE",
    description: "Shipping Bills, classification, documents, examination, and LEO.",
  },
  {
    id: "terminal",
    label: "Airport Terminal & Packing",
    description: "Cargo acceptance, security, airway bills, packaging, and handling.",
  },
  {
    id: "incentives",
    label: "Export Incentives & Foreign Exchange",
    description: "RoDTEP, Drawback, GST refunds, export proceeds, and Incoterms.",
  },
];

type FAQDraft = Pick<FAQItem, "question" | "answer">;

const faqDrafts: Record<FAQCategoryId, FAQDraft[]> = {
  setup: [
    {
      question: "What registrations are commonly needed before my first commercial export from India?",
      answer: "Most businesses need an Importer Exporter Code (IEC), a bank account and the export documentation required for their product. GST registration, an LUT, AD Code registration and product-specific approvals may also apply depending on your business, transaction and goods. Confirm the current requirements with DGFT, GST and Customs before shipping.",
    },
    {
      question: "Do I need to form a Private Limited company to export?",
      answer: "No. Eligible proprietorships, partnerships, LLPs and companies can export. The exporter must use the correct legal identity and PAN, obtain an IEC where required, and meet applicable tax, banking and product-compliance requirements.",
    },
    {
      question: "What is an Importer Exporter Code (IEC)?",
      answer: "An IEC is the import-export identification issued by DGFT and is generally required for commercial import and export activity, subject to applicable exemptions. Keep the IEC details and linked business information current on the DGFT portal.",
    },
    {
      question: "How do I apply for an IEC?",
      answer: "Apply through the DGFT online portal using the required PAN, identity, address, bank and contact details. Check DGFT's current application instructions and fee, and make sure the information matches your business and bank records.",
    },
    {
      question: "Does every exporter need GST registration?",
      answer: "GST obligations depend on the business and transaction; do not assume every exporter has identical registration requirements. A GST-registered exporter must follow the applicable export procedures, return reporting and documentation. Ask a GST professional to assess your circumstances.",
    },
    {
      question: "What is an LUT, and when is it used for exports?",
      answer: "A Letter of Undertaking is a GST procedure that eligible registered exporters may use to export qualifying zero-rated supplies without paying IGST upfront, subject to current rules and conditions. It is generally furnished for the relevant financial year through the GST portal.",
    },
    {
      question: "Can I export without an LUT?",
      answer: "An LUT is not the only possible route for a GST-registered exporter. Depending on eligibility and current GST rules, an exporter may pay applicable IGST and seek a refund instead. Confirm the appropriate route before filing export documents.",
    },
    {
      question: "What is an AD Code?",
      answer: "An Authorised Dealer (AD) Code identifies the bank branch authorised to handle foreign-exchange transactions for an exporter. Customs and banking processes may require the bank details or code to be registered against the relevant port or location.",
    },
    {
      question: "Is AD Code registration port-specific?",
      answer: "Customs location and bank-account registrations are governed by the current ICEGATE process and may need to be set up for each relevant customs location. Check the current portal workflow for the airport or port you plan to use before dispatching cargo.",
    },
    {
      question: "What should I obtain from my bank for AD Code registration?",
      answer: "Ask your authorised dealer bank for the current AD Code or bank-authorisation documentation required by ICEGATE. Names, account details, IEC and port information should be consistent across the bank letter and customs records.",
    },
    {
      question: "How do I update my IEC or business details?",
      answer: "Submit the applicable update through DGFT and update related records with your bank, GST portal and ICEGATE where required. Resolve mismatches before a shipment is filed, as inconsistent names, addresses or bank details can delay processing.",
    },
    {
      question: "Can a merchant exporter ship goods made by another company?",
      answer: "Yes. A merchant exporter can export goods sourced from a manufacturer, provided the commercial, tax, product-compliance and customs documents accurately describe the parties and transaction. Agree in advance which party supplies certificates and supports any inspection.",
    },
    {
      question: "Can I send samples before I have completed all export registrations?",
      answer: "Rules depend on the value, purpose, goods and shipping channel. A sample sent as a commercial export may still require an IEC, customs declaration or product-specific approvals; courier and non-commercial exemptions are limited and conditional. Verify the exact route before sending.",
    },
    {
      question: "Do gifts and samples have a special export exemption?",
      answer: "Some exemptions or simplified procedures may apply to specified goods, values or channels, but there is no single exemption covering every gift or sample. Confirm the current Customs, DGFT and courier rules for the specific consignment.",
    },
    {
      question: "What is an RCMC, and does every exporter need one?",
      answer: "A Registration-Cum-Membership Certificate is issued by the relevant Export Promotion Council or authority. Whether it is needed depends on the product, scheme, council and benefit being pursued; it is not a universal prerequisite for every customs export.",
    },
    {
      question: "Do I need a Digital Signature Certificate (DSC)?",
      answer: "A DSC or other approved authentication method may be needed for particular DGFT, ICEGATE or customs services, depending on the portal process and the user's role. Check the current service requirements and ensure the authorised signatory is correctly registered.",
    },
    {
      question: "Is an e-Way Bill needed to move export cargo to an airport?",
      answer: "An e-Way Bill may be required for movement of goods under GST rules, subject to current value limits, exemptions and state or movement-specific provisions. Your supplier, transporter or tax adviser should confirm whether one is required for the shipment.",
    },
    {
      question: "What should I prepare before requesting an export freight quote?",
      answer: "Share the product description, destination, number of packages, package dimensions, gross weight, ready date, pickup and delivery requirements, and any special handling or dangerous-goods details. Add invoice value, HS classification and available certificates when relevant to compliance and insurance review.",
    },
    {
      question: "Why must my IEC, GST, bank and invoice details match?",
      answer: "Customs, GST and bank systems compare information across filings. Mismatched legal names, PANs, account information or addresses can trigger queries, delay refunds or complicate export-proceeds reconciliation. Correct source records before filing rather than relying on manual workarounds.",
    },
    {
      question: "Where should a first-time exporter verify the latest rules?",
      answer: "Use official DGFT, CBIC/ICEGATE, GST and RBI sources for current requirements, and consult the relevant product regulator or Export Promotion Council. A customs broker or tax adviser can help apply those rules to your shipment but cannot replace the official notification.",
    },
  ],
  pricing: [
    {
      question: "How is chargeable weight calculated for air cargo?",
      answer: "The airline generally compares gross weight with volumetric weight and charges using the higher figure, subject to its tariff and shipment terms. A commonly used air-freight volumetric divisor is 6,000 cubic centimetres per kilogram, but the carrier, service or route may use a different divisor.",
    },
    {
      question: "What is volumetric weight?",
      answer: "Volumetric weight represents the space a package occupies. A common formula is length × width × height in centimetres divided by 6,000 to estimate kilograms; confirm the divisor and rounding method with the carrier before booking.",
    },
    {
      question: "What is the difference between gross and chargeable weight?",
      answer: "Gross weight is the actual package weight, including its packaging. Chargeable weight is the billing weight determined under the carrier's rules, commonly the higher of gross and volumetric weight after any rounding or minimum-charge provisions.",
    },
    {
      question: "Why can the final chargeable weight differ from my estimate?",
      answer: "The terminal or carrier may reweigh and remeasure the shipment, round dimensions or weight under its tariff, or apply a different volumetric divisor. Accurate outer-package measurements and a carrier-confirmed quote reduce surprises.",
    },
    {
      question: "How can I reduce volumetric weight?",
      answer: "Use packaging that protects the goods without unnecessary empty space, consolidate compatible cartons and avoid oversized outer boxes. Do not compress or remove protection if that could damage the product or breach handling requirements.",
    },
    {
      question: "What are pass-through charges?",
      answer: "Pass-through charges are third-party costs paid to an airline, terminal, screening provider, transporter or authority and shown separately from the forwarder's own service fee. Ask for a written breakdown and supporting receipts or settlement records where available.",
    },
    {
      question: "What does 'at actuals' mean on a freight quote?",
      answer: "It means the charge is intended to reflect the amount assessed by the relevant third party, rather than a pre-set estimate. Confirm what evidence will be provided, whether taxes or service charges are included, and how any difference from the estimate will be settled.",
    },
    {
      question: "How is Ambeza's agency or CHA fee charged?",
      answer: "Ambeza presents its clearance and file-management fee separately from pass-through carrier and terminal costs. The indicative flat fee shown on this site is ₹5,000–₹10,000; the applicable amount and inclusions should be confirmed in your written shipment quote.",
    },
    {
      question: "Is the agency fee a percentage of my commercial invoice value?",
      answer: "The fee is presented as a flat agency/clearance charge rather than a percentage of the goods' invoice value. Ask for the written quote to specify the fee, covered work and any services that would be charged separately.",
    },
    {
      question: "What is a fuel surcharge in air freight?",
      answer: "A fuel surcharge is a carrier charge that may be applied under the airline's tariff or rate agreement. Its basis, amount and adjustment frequency vary, so check whether it is included in the quoted rate or itemised separately.",
    },
    {
      question: "What is a security surcharge?",
      answer: "A security surcharge may cover carrier or handling costs related to cargo security processes. Whether it applies and how it is calculated depends on the carrier, route, service and quote terms.",
    },
    {
      question: "What are airport terminal or handling charges?",
      answer: "These are charges assessed for services at the cargo terminal, such as acceptance, handling, storage or documentation, depending on the facility's tariff. The terminal operator and applicable services vary by airport and shipment.",
    },
    {
      question: "Are X-ray and screening charges included in air freight?",
      answer: "Not always. Security screening may be itemised separately or included in a service rate, depending on the terminal, route and provider. Ask the quote to state whether screening and any repeat-screening cost are included.",
    },
    {
      question: "What is an AWB processing fee?",
      answer: "An Air Waybill processing fee may cover documentation or booking administration charged by a carrier or service provider. The fee and whether it is separate from freight depend on the quote and the party issuing the AWB.",
    },
    {
      question: "Why do air freight rates change?",
      answer: "Rates can change with available capacity, route demand, season, fuel-related surcharges, cargo characteristics and the time of booking. A quote should state its validity period and the assumptions on weight, dimensions and routing.",
    },
    {
      question: "What does a rate 'weight break' mean?",
      answer: "Air cargo tariffs may offer different per-kilogram rates at chargeable-weight thresholds. The applicable break is determined by the carrier's tariff and chargeable weight; compare the total cost, not just the displayed per-kilogram rate.",
    },
    {
      question: "Can airport storage or demurrage be charged on export air cargo?",
      answer: "Storage may be charged when cargo remains at a facility beyond its free-time terms or when special storage is required. Free time and tariffs vary by terminal and situation, so confirm the applicable schedule instead of assuming a universal window.",
    },
    {
      question: "Can freight be paid by the consignee at destination?",
      answer: "Some air waybills and routes permit freight collect, subject to carrier acceptance and the consignee or destination agent's arrangements. Confirm collect eligibility and destination charges before dispatch; it is not available on every shipment.",
    },
    {
      question: "How does commercial air cargo differ from an express courier?",
      answer: "Commercial air cargo is typically booked through airline cargo services and may require separate pickup, export clearance, terminal handling and destination delivery arrangements. Express courier products bundle more door-to-door services; compare transit time, included services, chargeable weight and total landed cost.",
    },
    {
      question: "How can I compare two air freight quotes fairly?",
      answer: "Compare the same origin and destination, chargeable weight, service level, routing, quote validity, pickup/delivery scope, screening and terminal charges, documentation, taxes and exclusions. Request a line-item breakdown so estimates and third-party costs are not confused with agency fees.",
    },
  ],
  customs: [
    {
      question: "What is a Shipping Bill?",
      answer: "A Shipping Bill is the export declaration filed with Indian Customs for goods leaving India. It records key shipment, exporter, goods, value and scheme information and is processed through the customs electronic system.",
    },
    {
      question: "What is ICEGATE?",
      answer: "ICEGATE is the Indian Customs electronic gateway used for customs-related filing, messaging and services. Exporters and their authorised representatives use the applicable ICEGATE processes for Shipping Bills and supporting documents.",
    },
    {
      question: "What is a Let Export Order (LEO)?",
      answer: "LEO is the Customs permission for export after the applicable assessment and examination requirements are completed. Cargo must also meet carrier and terminal acceptance and flight-loading cut-offs.",
    },
    {
      question: "What documents are commonly needed to file an export Shipping Bill?",
      answer: "Common documents include a commercial invoice, packing list, IEC and bank details, plus product- or scheme-specific documents. The exact set depends on the goods, declaration, port and regulatory requirements; provide accurate final details to your customs broker.",
    },
    {
      question: "What is an HS or HSN code for exports?",
      answer: "An HS classification identifies the goods under the customs tariff nomenclature. The required code length and treatment depend on the applicable Indian tariff and declaration. Classify based on the product's material, composition, function and specifications, not only its trade name.",
    },
    {
      question: "Who is responsible for selecting the correct HS classification?",
      answer: "The exporter is responsible for the accuracy of the goods declaration, even when a customs broker assists with classification and filing. Give the broker complete product specifications and obtain professional classification advice for ambiguous or high-risk goods.",
    },
    {
      question: "What is e-Sanchit?",
      answer: "e-Sanchit is a Customs electronic document-submission facility for uploading supporting documents linked to customs declarations. Follow current ICEGATE requirements for document type, reference number, legibility and any applicable authentication.",
    },
    {
      question: "What is customs assessment?",
      answer: "Assessment is Customs' review of the declaration and supporting information, including classification, valuation and applicable controls. Customs may accept the declaration, seek clarification, or require further action under the applicable process.",
    },
    {
      question: "What does a customs query on ICEGATE mean?",
      answer: "A query means Customs needs clarification or supporting evidence before processing can continue. Respond promptly with accurate documents or explanations through the prescribed channel, and avoid changing declared facts without supporting records.",
    },
    {
      question: "Can export cargo be physically examined by Customs?",
      answer: "Yes. Examination or other verification may be directed under risk-management and customs procedures. The extent and timing depend on the declaration, goods, route and instructions from Customs; no channel guarantees that examination will be skipped.",
    },
    {
      question: "What happens if the cargo differs from the invoice or packing list?",
      answer: "Differences in description, quantity, marks, weight or value may lead to a query, examination, delay or enforcement action depending on the facts. Reconcile documents with the final packed cargo before filing and report genuine discrepancies to your broker.",
    },
    {
      question: "Can a Shipping Bill be amended after filing?",
      answer: "Amendments are subject to Customs law, the stage of processing and approval by the proper officer. The process and evidence differ before and after LEO, so review the draft carefully and report errors as soon as they are found.",
    },
    {
      question: "What is an export declaration's FOB value?",
      answer: "FOB value is the value of goods at the point and basis prescribed for the export declaration, excluding certain freight and insurance components as applicable. Valuation treatment depends on the transaction and rules; coordinate your invoice, Incoterm and Shipping Bill values.",
    },
    {
      question: "Do all chemicals, liquids or powders need an MSDS?",
      answer: "A Safety Data Sheet (SDS, formerly MSDS) is often requested by carriers to assess chemical hazards, but requirements depend on the product and transport classification. Provide a current manufacturer-issued SDS early; an SDS does not by itself determine whether cargo is dangerous goods.",
    },
    {
      question: "What is a dangerous-goods declaration?",
      answer: "It is transport documentation required for shipments classified as dangerous goods under applicable air regulations. The shipper must provide correct classification, packing, marks, labels and declarations; a trained dangerous-goods professional and carrier must confirm acceptance.",
    },
    {
      question: "Are pharmaceuticals subject to additional export controls?",
      answer: "They may be. Requirements depend on the product, active ingredients, destination, intended use and current Indian and destination-country rules. Check applicable CDSCO, drug-control, export-policy and buyer-country requirements before booking.",
    },
    {
      question: "When is a Certificate of Origin needed?",
      answer: "A buyer, bank, customs authority or trade agreement may require a Certificate of Origin to establish origin. The issuing authority and format depend on whether the certificate is preferential or non-preferential and on the relevant agreement.",
    },
    {
      question: "How long does export customs clearance take?",
      answer: "There is no guaranteed fixed time. Processing depends on complete and consistent documents, cargo arrival, examination or query instructions, product approvals and terminal cut-offs. Build time for these steps into the flight plan.",
    },
    {
      question: "What does a Customs Broker (formerly commonly called CHA) do?",
      answer: "A licensed Customs Broker can prepare and file customs declarations on the exporter's instructions, coordinate document submission and assist with Customs queries. The exporter remains responsible for providing accurate information and required product approvals.",
    },
    {
      question: "Does LEO mean the shipment has departed India?",
      answer: "No. LEO is Customs' permission for export; the cargo still needs terminal acceptance and loading on a flight. The carrier's manifest and departure records provide the subsequent shipment status.",
    },
  ],
  terminal: [
    {
      question: "What happens when export cargo reaches an airport terminal?",
      answer: "The cargo is presented for acceptance, document and security checks, and weighing or measurement under the facility's process. Customs examination, storage, build-up and loading follow as applicable to the shipment and flight.",
    },
    {
      question: "Is AAICLAS the cargo terminal operator at every Indian airport?",
      answer: "No. Cargo handling is provided by the operator appointed for the particular airport or facility. Confirm the current terminal operator and its tariff for the origin airport in your quote.",
    },
    {
      question: "What is a Master Air Waybill (MAWB)?",
      answer: "A MAWB is the air-carriage document issued by the airline or its authorised agent for a shipment or consolidation. It identifies the carrier movement and is used with the applicable house-level documents when cargo is consolidated.",
    },
    {
      question: "What is a House Air Waybill (HAWB)?",
      answer: "A HAWB is generally issued by a freight forwarder to its customer for an individual consignment within a consolidation. The MAWB and HAWB serve different levels of the forwarding and airline documentation chain.",
    },
    {
      question: "What is the difference between an air waybill and a bill of lading?",
      answer: "An air waybill documents carriage by air; a bill of lading documents carriage by sea and may have different title and negotiability characteristics. Use the transport document appropriate to the booked mode and payment terms.",
    },
    {
      question: "How are dimensions and weight checked at the terminal?",
      answer: "The terminal or carrier may weigh and measure each piece using its own equipment and rounding rules. The verified figures can change chargeable weight, so label packages consistently and keep a record of each piece's outer dimensions.",
    },
    {
      question: "What is cargo security screening?",
      answer: "Screening is a security process required for air cargo under applicable aviation rules and facility procedures. Methods and acceptance conditions depend on the cargo and airport; some items may need additional screening or may not be accepted.",
    },
    {
      question: "What are airport cut-off times?",
      answer: "Cut-offs are deadlines for cargo, documents and customs status to be ready for a particular flight. They vary by carrier, airport, route and cargo type; obtain the actual booking cut-off rather than relying on a general rule of thumb.",
    },
    {
      question: "What is a Unit Load Device (ULD)?",
      answer: "A ULD is an aircraft pallet or container used to group cargo for loading. Its dimensions, contour, maximum gross weight and compatibility depend on the aircraft and carrier, which can affect acceptance of large pieces.",
    },
    {
      question: "How should I mark export cartons?",
      answer: "Use durable, legible package marks that match the packing list and shipping documents, including piece identification and handling instructions where appropriate. Avoid markings that conflict with the product, destination rules or dangerous-goods requirements.",
    },
    {
      question: "What is ISPM 15, and does it apply to wooden packing?",
      answer: "ISPM 15 is an international phytosanitary standard for wood packaging material used in international trade. Destination and transit rules determine whether treatment and an approved mark are required; confirm before using solid-wood pallets or crates.",
    },
    {
      question: "Can I ship lithium batteries by air?",
      answer: "Some lithium-battery shipments can travel by air, but classification, battery configuration, watt-hour rating, packaging, labels, documentation and carrier acceptance rules apply. Requirements change and vary by shipment type; have a qualified dangerous-goods specialist review the details before booking.",
    },
    {
      question: "Can liquids be shipped as air cargo?",
      answer: "Some liquids are acceptable, while others are restricted or regulated as dangerous goods. Leak-proof packaging alone is not enough: provide the product details and SDS so the carrier can determine classification, packaging and documentation requirements.",
    },
    {
      question: "How should temperature-sensitive cargo be handled?",
      answer: "Agree a required temperature range, packaging solution, monitoring method, handling time and contingency plan before booking. Availability of cold rooms or temperature-controlled handling varies by airport and carrier and should be confirmed in writing.",
    },
    {
      question: "Can dry ice be used in an air shipment?",
      answer: "Dry ice is regulated for air transport because it releases carbon dioxide. Quantity limits, marks, declarations, ventilation and carrier acceptance requirements apply; confirm them with a dangerous-goods professional and airline.",
    },
    {
      question: "When should I use a wooden crate instead of a carton?",
      answer: "Crating may be suitable for heavy, fragile, valuable or irregularly shaped goods that need structural protection. Design the crate for handling and restraint, account for its added dimensions and weight, and address ISPM 15 if solid wood is used.",
    },
    {
      question: "What is cargo offloading or a missed connection?",
      answer: "Cargo may not travel on the planned flight because of capacity, operational changes, security, documentation or aircraft limitations. The airline or handling agent should advise the revised routing and status; confirm any additional storage or rebooking costs.",
    },
    {
      question: "How can I track an air cargo shipment?",
      answer: "Use the airline or forwarder's tracking service with the relevant MAWB or shipment reference. Tracking milestones may update only after acceptance, departure, arrival or other scans and should not be assumed to provide continuous GPS location.",
    },
    {
      question: "What should I do if cargo is damaged at the terminal?",
      answer: "Notify the terminal, airline and forwarder immediately, request a written damage or exception report, and preserve photographs, packaging and delivery records. Follow the carrier and insurance policy notice deadlines before cargo is altered or discarded.",
    },
    {
      question: "What information is needed to assess oversized cargo?",
      answer: "Provide each piece's length, width, height, gross weight, centre of gravity, lifting points, stackability and packaging details. The airline must confirm aircraft-door, floor-load, contour and handling compatibility before accepting the booking.",
    },
  ],
  incentives: [
    {
      question: "What is RoDTEP?",
      answer: "RoDTEP is an export remission scheme intended to refund specified embedded duties and taxes for eligible goods at notified rates and conditions. Eligibility, rates, caps and active dates depend on the current government notifications and tariff item.",
    },
    {
      question: "How do I indicate a RoDTEP claim?",
      answer: "The exporter must make the required claim declaration in the Shipping Bill at the appropriate stage and meet scheme conditions. Confirm the correct tariff item, declaration and current rate before filing; a later amendment may not always be available.",
    },
    {
      question: "Is RoDTEP available for every exported product?",
      answer: "No. Coverage and rates depend on the current notified tariff schedule and scheme conditions. Verify the exact HS classification and effective notification rather than assuming eligibility from a similar product.",
    },
    {
      question: "What is Duty Drawback?",
      answer: "Customs Duty Drawback is a rebate of eligible duties under the applicable drawback provisions and rates. Eligibility and calculation depend on the goods, export declaration, rate schedule and whether any special brand-rate process applies.",
    },
    {
      question: "Can I claim RoDTEP and Duty Drawback on the same export?",
      answer: "Whether benefits can be combined depends on the current scheme rules, the specific drawback component and applicable exclusions. Check the latest notifications and declarations for the tariff item before claiming; do not assume all combinations are allowed.",
    },
    {
      question: "What is the difference between RoDTEP and Duty Drawback?",
      answer: "They are separate schemes with different legal bases, eligible components, rates and claim procedures. The correct benefit depends on the product and current notifications; a customs broker can help identify declarations but cannot guarantee eligibility.",
    },
    {
      question: "What is an eBRC?",
      answer: "An electronic Bank Realisation Certificate records export proceeds realised through an authorised banking channel and reported under the applicable DGFT process. It helps document foreign-exchange realisation and may be needed for certain export-benefit or compliance workflows.",
    },
    {
      question: "Is an eBRC issued automatically for every payment?",
      answer: "The process depends on how funds are received, bank reporting and the current DGFT workflow. Reconcile remittance advice, bank realisation records and Shipping Bill references with your bank and check the eBRC portal for any pending action.",
    },
    {
      question: "What is EDPMS?",
      answer: "The RBI Export Data Processing and Monitoring System supports banks' monitoring of export transactions and realisation of export proceeds. Contact your authorised dealer bank to reconcile outstanding entries or submit evidence for closure.",
    },
    {
      question: "How long do I have to realise export proceeds?",
      answer: "The applicable realisation period is set by current RBI rules and may be changed or extended by RBI. Check the latest RBI directions and speak with your authorised dealer bank for the period and extension process that applies to your transaction.",
    },
    {
      question: "What should I do if an export payment is delayed?",
      answer: "Contact your bank before the applicable realisation deadline, keep buyer communications and contract records, and ask whether an extension or other RBI-compliant action is needed. If payment is at risk, review your credit-insurance or recovery options promptly.",
    },
    {
      question: "What is the GST treatment of exports?",
      answer: "Exports are generally treated as zero-rated supplies under India's GST framework, subject to the law and transaction facts. The exporter must follow the applicable LUT or tax-payment route, return reporting and refund procedure with current professional guidance.",
    },
    {
      question: "How do I seek a refund of input tax credit on exports?",
      answer: "A GST-registered exporter may be able to claim a refund of eligible unutilised input tax credit for zero-rated supplies, subject to statutory conditions and reconciled returns and export records. Follow the current GST portal procedure and resolve data mismatches.",
    },
    {
      question: "How does an export made under LUT differ from one made on payment of IGST?",
      answer: "Under the LUT route, an eligible exporter generally exports without paying IGST upfront and may claim eligible input-tax-credit refunds separately. Under the tax-payment route, the exporter pays IGST and may claim a refund subject to the applicable process. Confirm eligibility and cash-flow impact with a GST adviser.",
    },
    {
      question: "What is an Advance Authorisation?",
      answer: "Advance Authorisation is a DGFT scheme that may permit duty-free import of inputs used in export production, subject to authorisation conditions and export obligations. Check the current Foreign Trade Policy, input-output norms and authorisation terms before relying on it.",
    },
    {
      question: "What is the EPCG scheme?",
      answer: "The Export Promotion Capital Goods scheme provides a conditional route for importing or sourcing capital goods with a specified export obligation, subject to DGFT rules and authorisation terms. Obligations, timelines and eligible goods must be verified for the particular authorisation.",
    },
    {
      question: "What are Incoterms?",
      answer: "Incoterms are ICC rules that allocate certain delivery tasks, costs and risks between seller and buyer. They do not by themselves determine payment terms, ownership transfer or every customs obligation; specify the chosen rule and named place or port clearly.",
    },
    {
      question: "Which Incoterms are used for air freight?",
      answer: "For air or multimodal transport, FCA, CPT and CIP are commonly relevant depending on the agreed delivery and risk allocation. FOB, CFR and CIF are intended for sea and inland-waterway transport, so select a rule that matches the actual mode and named place.",
    },
    {
      question: "What is a Letter of Credit (LC)?",
      answer: "An LC is a bank undertaking to pay against presentation of documents that comply with its terms. It does not guarantee payment if documents are discrepant, so align the invoice, transport document, dates, descriptions and certificates with the LC before shipment.",
    },
    {
      question: "What is an EEFC account?",
      answer: "An Exchange Earners' Foreign Currency account may allow eligible residents to hold specified foreign-currency export earnings, subject to RBI rules and bank terms. Ask your authorised dealer bank about permitted currencies, balances, use and any conversion requirements.",
    },
  ],
};

export const ALL_FAQS: FAQItem[] = FAQ_CATEGORIES.flatMap((category) =>
  faqDrafts[category.id].map(({ question, answer }, index) => ({
    id: `${category.id}-${index + 1}`,
    category: category.id,
    categoryLabel: category.label,
    question,
    answer,
  }))
);
