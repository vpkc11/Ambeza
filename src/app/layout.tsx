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
