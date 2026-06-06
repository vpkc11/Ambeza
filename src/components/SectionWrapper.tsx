"use client";

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className,
  innerClassName,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 lg:py-24", className)}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
