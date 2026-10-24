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
    <section id={id} className={cn("w-full max-w-full py-8 sm:py-12 lg:py-16", className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
