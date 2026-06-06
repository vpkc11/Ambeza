"use client";

import Link from "next/link";
import { ChevronRight, Clock, Calendar } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

interface BlogLayoutProps {
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  category: string;
  children: React.ReactNode;
  relatedLinks?: { href: string; label: string }[];
  ctaText?: string;
}

export default function BlogLayout({
  title,
  description,
  publishDate,
  readTime,
  category,
  children,
  relatedLinks = [],
  ctaText = "Get a Free Quote",
}: BlogLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-4">
            <Link href="/blog" className="hover:underline">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span>{category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            {title}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-6">{description}</p>
          <div className="flex items-center gap-5 text-white/50 text-sm">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{publishDate}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{readTime}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose-ambeza">
            {children}
          </div>

          {/* Related links */}
          {relatedLinks.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#185FA5] mb-4">Related guides</p>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#185FA5] border border-[#185FA5]/30 rounded-full px-4 py-1.5 hover:bg-[#185FA5] hover:text-white transition-colors"
                  >
                    {link.label} <ChevronRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[#185FA5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to ship your export?</h2>
          <p className="text-white/80 text-lg mb-8">In-house CHA. Fixed quotes. Zero hidden charges. One company for everything.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#F59E0B] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#d97706] transition-colors">
              {ctaText}
            </Link>
            <Link href="/how-it-works" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#185FA5] transition-colors inline-flex items-center gap-2">
              See How It Works <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
