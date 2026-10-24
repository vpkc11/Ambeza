import type { MetadataRoute } from "next";

const baseUrl = "https://ambeza.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/air-freight`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/ocean-freight`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/customs-clearance`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/warehousing`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/inland-transport`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tools/volumetric-calculator`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tools/shipping-estimator`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tools/transit-time`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/new-exporter`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/icegate-guide`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/documents-guide`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
