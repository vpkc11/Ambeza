import type { Metadata } from "next";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "Export & Freight Guides for Indian Exporters | Ambeza Blog",
  description:
    "Practical guides on exporting from India — air freight, ocean freight, customs clearance, IEC code, RoDTEP, documents, and destination-specific shipping guides. Written by the Ambeza team.",
  keywords: [
    "export guides India",
    "freight forwarder blog India",
    "how to export from India",
    "customs clearance guide India",
    "air freight India guide",
    "ocean freight India guide",
    "IEC code guide",
    "RoDTEP guide India",
    "shipping from India blog",
    "export documentation India",
  ],
};

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Ambeza Export & Freight Guides",
  description:
    "Practical export and freight guides for Indian exporters — covering air freight, ocean freight, customs clearance, documentation, and destination guides.",
  url: "https://www.ambeza.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Ambeza",
    url: "https://www.ambeza.com",
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <BlogIndexClient />
    </>
  );
}
