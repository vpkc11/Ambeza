"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  Plane,
  Ship,
  FileText,
  Warehouse,
  Truck,
  Calculator,
  Clock,
  Search,
  BookOpen,
  AlertTriangle,
  Package,
  DollarSign,
  GraduationCap,
  Anchor,
  Shield,
  Banknote,
  ArrowRight,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const servicesLinks = [
  { href: "/services/air-freight", label: "Air Freight", icon: Plane },
  { href: "/services/ocean-freight", label: "Ocean Freight", icon: Ship },
  { href: "/services/customs-clearance", label: "Customs Clearance", icon: FileText },
  { href: "/services/warehousing", label: "Warehousing & 3PL", icon: Warehouse },
  { href: "/services/inland-transport", label: "Inland Transport", icon: Truck },
];

const toolsLinks = [
  { href: "/tools/volumetric-calculator", label: "Volumetric Calculator", icon: Calculator },
  { href: "/tools/shipping-estimator", label: "Shipping Estimator", icon: DollarSign },
  { href: "/tools/transit-time", label: "Transit Time Tool", icon: Clock },
];

const guidesColumns = [
  {
    heading: "Get Started",
    links: [
      { href: "/how-it-works", label: "How It Works", icon: Info },
      { href: "/new-exporter", label: "New Exporter Guide", icon: GraduationCap },
      { href: "/icegate-guide", label: "ICEGATE & AD Code", icon: Shield },
    ],
  },
  {
    heading: "Documents & Cargo",
    links: [
      { href: "/documents-guide", label: "Documents Guide", icon: BookOpen },
      { href: "/documents-guide/originals", label: "Originals Guide", icon: FileText },
      { href: "/hsn-checker", label: "HSN Checker", icon: Search },
      { href: "/dg-guide", label: "DG Guide", icon: AlertTriangle },
      { href: "/fumigation-packing", label: "Fumigation & Packing", icon: Package },
    ],
  },
  {
    heading: "Ship & Port",
    links: [
      { href: "/port-selector", label: "Port Selector", icon: Anchor },
      { href: "/port-handover", label: "Port Handover Flow", icon: Package },
    ],
  },
  {
    heading: "After Export",
    links: [
      { href: "/rodtep-drawback", label: "RoDTEP & Duty Drawback", icon: DollarSign },
      { href: "/post-remittance", label: "Post-Remittance Closure", icon: Banknote },
    ],
  },
];

// All guides flattened for mobile
const allGuideLinks = guidesColumns.flatMap((col) =>
  col.links.map((l) => ({ ...l, group: col.heading }))
);

function DropdownMenu({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string; icon: React.ElementType }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-[#0F172A] hover:text-[#185FA5] font-medium text-sm transition-colors py-2"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-1 z-50">
          <div className="bg-white rounded-xl shadow-lg border border-[#E2E8F0] py-2 min-w-[220px]">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#185FA5] transition-colors"
                onClick={() => setOpen(false)}
              >
                <Icon className="h-4 w-4 text-[#185FA5]" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function GuidesMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-[#0F172A] hover:text-[#185FA5] font-medium text-sm transition-colors py-2"
        onClick={() => setOpen(!open)}
      >
        Guides
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-[#E2E8F0] p-6 w-[720px]">
            <div className="grid grid-cols-4 gap-6">
              {guidesColumns.map((col) => (
                <div key={col.heading}>
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-3 pb-1.5 border-b border-[#F1F5F9]">
                    {col.heading}
                  </p>
                  <div className="space-y-0.5">
                    {col.links.map(({ href, label, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        className="flex items-center gap-2 px-2 py-1.5 text-sm text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#185FA5] rounded-lg transition-colors group"
                        onClick={() => setOpen(false)}
                      >
                        <Icon className="h-3.5 w-3.5 text-[#94A3B8] group-hover:text-[#185FA5] flex-shrink-0" />
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer row */}
            <div className="mt-5 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
              <p className="text-xs text-[#94A3B8]">
                Export guides for every stage — from first shipment to incentive claims
              </p>
              <Link
                href="/new-exporter"
                className="flex items-center gap-1 text-xs font-semibold text-[#185FA5] hover:underline"
                onClick={() => setOpen(false)}
              >
                New to exporting? Start here
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const mobileSections = [
    { label: "Services", links: servicesLinks },
    { label: "Tools", links: toolsLinks },
    ...guidesColumns.map((col) => ({ label: col.heading, links: col.links })),
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#185FA5] text-white text-xs py-1.5 text-center">
        <a
          href="https://wa.me/919999999999?text=Hi, I want to enquire about export shipping"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          📞 WhatsApp us for a free quote — we reply within 2 hours
        </a>
      </div>

      {/* Main navbar */}
      <nav
        className={cn(
          "sticky top-0 z-40 bg-white transition-shadow",
          scrolled && "shadow-md"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Globe className="h-6 w-6 text-[#185FA5]" />
              <span className="text-xl font-bold text-[#0A1628]">Ambeza</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-5">
              <DropdownMenu label="Services" links={servicesLinks} />
              <DropdownMenu label="Tools" links={toolsLinks} />
              <GuidesMenu />
              <Link
                href="/industries"
                className="text-sm font-medium text-[#0F172A] hover:text-[#185FA5] transition-colors"
              >
                Industries
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-[#0F172A] hover:text-[#185FA5] transition-colors"
              >
                About
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="bg-[#185FA5] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#14508a] transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-[#0F172A]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#E2E8F0] max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {mobileSections.map((section) => (
                <div key={section.label}>
                  <button
                    className="flex items-center justify-between w-full py-2 text-sm font-semibold text-[#0F172A]"
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === section.label ? null : section.label
                      )
                    }
                  >
                    {section.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        mobileExpanded === section.label && "rotate-180"
                      )}
                    />
                  </button>
                  {mobileExpanded === section.label && (
                    <div className="pl-4 space-y-1 pb-2">
                      {section.links.map(({ href, label, icon: Icon }) => (
                        <Link
                          key={href}
                          href={href}
                          className="flex items-center gap-3 py-2 text-sm text-[#475569] hover:text-[#185FA5]"
                        >
                          <Icon className="h-4 w-4" />
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link href="/industries" className="block py-2 text-sm font-medium text-[#0F172A]">
                Industries
              </Link>
              <Link href="/about" className="block py-2 text-sm font-medium text-[#0F172A]">
                About
              </Link>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-[#185FA5] text-white text-sm font-semibold px-5 py-3 rounded-full"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
