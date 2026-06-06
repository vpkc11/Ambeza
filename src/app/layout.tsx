import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ambeza — Export Logistics from India to the World",
    template: "%s | Ambeza",
  },
  description:
    "End-to-end export logistics from India to 150+ countries. Air freight, ocean freight, customs clearance, CHA services, all paperwork — one company.",
  keywords: [
    "export from India",
    "freight forwarder India",
    "customs clearance India",
    "CHA services India",
    "shipping from India",
    "export logistics India",
  ],
  openGraph: {
    siteName: "Ambeza",
    locale: "en_IN",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ambeza.com/#organization",
      name: "Ambeza",
      url: "https://ambeza.com",
      logo: "https://ambeza.com/logo.png",
      description: "End-to-end export logistics from India to 150+ countries. Air freight, ocean freight, customs clearance, CHA services, all paperwork — one company.",
      telephone: "+918179688632",
      foundingDate: "2019",
      areaServed: "Worldwide",
      serviceType: ["Air Freight", "Ocean Freight", "Customs Clearance", "Export Logistics", "CHA Services"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://ambeza.com/#localbusiness",
      name: "Ambeza",
      url: "https://ambeza.com",
      telephone: "+918179688632",
      description: "Licensed freight forwarder and CHA for export logistics from India.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.406498,
        longitude: 78.47724,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
