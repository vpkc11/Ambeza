"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  { href: "/services/air-freight/airline-partners", label: "Airline Partners", icon: Globe },
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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

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
          href="https://wa.me/918179688632?text=Hi, I want to enquire about export shipping"
          className="block px-3 leading-relaxed hover:underline"
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
          mobileOpen && "z-[60]",
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
              <Link
                href="/blog"
                className="text-sm font-medium text-[#0F172A] hover:text-[#185FA5] transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="rounded-full bg-amber-100 px-3 py-2 text-sm font-bold text-amber-900 transition-colors hover:bg-amber-200"
              >
                FAQ Hub
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
              className="rounded-lg p-2 text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#185FA5] lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-out navigation */}
        <div
          className={cn(
            "fixed inset-0 z-[60] bg-slate-950/40 transition-opacity duration-300 lg:hidden",
            mobileOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
          )}
          aria-hidden={!mobileOpen}
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
          />
          <aside
            id="mobile-navigation"
            className={cn(
              "absolute inset-y-0 right-0 flex h-full w-[min(88vw,24rem)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
              mobileOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex items-center justify-between border-b border-[#E2E8F0] px-5 py-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-bold text-[#0A1628]"
                onClick={() => setMobileOpen(false)}
              >
                <Globe className="h-5 w-5 text-[#185FA5]" />
                Ambeza
              </Link>
              <button
                type="button"
                className="rounded-lg p-2 text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#185FA5]"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="space-y-1">
              {mobileSections.map((section) => (
                <div key={section.label}>
                  <button
                    className="flex min-h-11 w-full items-center justify-between py-2 text-left text-sm font-semibold text-[#0F172A]"
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
                    <div className="space-y-1 border-l border-[#E2E8F0] pb-2 pl-4">
                      {section.links.map(({ href, label, icon: Icon }) => (
                        <Link
                          key={href}
                          href={href}
                          className="flex min-h-10 items-center gap-3 py-2 text-sm text-[#475569] hover:text-[#185FA5]"
                        >
                          <Icon className="h-4 w-4" />
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link href="/industries" onClick={() => setMobileOpen(false)} className="block min-h-11 py-3 text-sm font-medium text-[#0F172A]">
                Industries
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block min-h-11 py-3 text-sm font-medium text-[#0F172A]">
                About
              </Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="block min-h-11 py-3 text-sm font-medium text-[#0F172A]">
                Blog
              </Link>
              <Link href="/faq" onClick={() => setMobileOpen(false)} className="block min-h-11 rounded-lg bg-amber-50 px-3 py-3 text-sm font-bold text-amber-900">
                FAQ Hub · 100+ Exporter Answers
              </Link>
              </div>
            </div>
            <div className="border-t border-[#E2E8F0] p-5">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-full bg-[#185FA5] px-5 py-3.5 text-center text-sm font-semibold text-white"
                >
                  Get a Free Quote
                </Link>
            </div>
          </aside>
        </div>
      </nav>
    </>
  );
}
