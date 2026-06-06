/**
 * ─────────────────────────────────────────────────────────────────────
 * SCHEMA SNIPPETS FOR src/app/layout.tsx
 *
 * Add these two const objects BEFORE the RootLayout function,
 * then render both <script> tags inside the <head> (or at the top
 * of the <body>) in your layout's return statement.
 *
 * Example placement:
 *
 *   export default function RootLayout({ children }) {
 *     return (
 *       <html lang="en">
 *         <head>
 *           <script type="application/ld+json" ... organizationSchema />
 *           <script type="application/ld+json" ... localBusinessSchema />
 *         </head>
 *         <body>...</body>
 *       </html>
 *     )
 *   }
 * ─────────────────────────────────────────────────────────────────────
 */

// ── 1. Organization schema ──────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ambeza",
  url: "https://www.ambeza.com",
  logo: "https://www.ambeza.com/logo.png",           // update to actual logo URL
  description:
    "Ambeza is a pan-India freight forwarding company offering air freight, ocean freight, and customs clearance services with in-house CHA. Headquartered in Hyderabad.",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Telugu"],
      url: "https://www.ambeza.com/contact",
    },
  ],
  sameAs: [
    // Add your verified social profiles here once created:
    // "https://www.linkedin.com/company/ambeza",
    // "https://www.facebook.com/ambezalogistics",
    // "https://twitter.com/ambeza_in",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Freight & Logistics Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Air Freight from India",
          url: "https://www.ambeza.com/services/air-freight",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ocean Freight from India",
          url: "https://www.ambeza.com/services/ocean-freight",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Customs Clearance",
          url: "https://www.ambeza.com/services/customs-clearance",
        },
      },
    ],
  },
};

// ── 2. LocalBusiness schema ─────────────────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.ambeza.com/#localbusiness",
  name: "Ambeza",
  image: "https://www.ambeza.com/logo.png",           // update to actual logo URL
  url: "https://www.ambeza.com",
  telephone: "",                                       // add phone number when available
  email: "",                                           // add contact email when available
  priceRange: "₹₹",
  description:
    "Freight forwarding, air freight, ocean freight (FCL & LCL), and customs clearance (in-house CHA) for Indian exporters. Pan-India operations. Fixed quotes, no hidden charges.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",                                 // add full address
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "",                                    // add PIN code
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.385044,                               // Hyderabad approximate — update with exact coordinates
    longitude: 78.486671,
  },
  areaServed: [
    { "@type": "Country", name: "India" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=Ambeza+Hyderabad", // update with Google Maps link after GBP is set up
};

/**
 * ── HOW TO USE IN layout.tsx ──────────────────────────────────────────
 *
 * Import or paste these objects into layout.tsx, then render:
 *
 *   <script
 *     type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
 *   />
 *   <script
 *     type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
 *   />
 *
 * Place these inside <head> for best results — Next.js App Router
 * allows custom head elements via the layout's <html>/<head> structure.
 * ─────────────────────────────────────────────────────────────────────
 */
