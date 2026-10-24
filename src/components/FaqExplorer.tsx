"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  ALL_FAQS,
  FAQ_CATEGORIES,
  type FAQCategoryId,
} from "@/data/faqs";

export default function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FAQCategoryId | "all">(
    "all"
  );

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const visibleCount = useMemo(
    () =>
      ALL_FAQS.filter((faq) => {
        const matchesCategory =
          activeCategory === "all" || faq.category === activeCategory;
        const matchesQuery =
          !normalizedQuery ||
          `${faq.question} ${faq.answer} ${faq.categoryLabel}`
            .toLocaleLowerCase()
            .includes(normalizedQuery);

        return matchesCategory && matchesQuery;
      }).length,
    [activeCategory, normalizedQuery]
  );

  return (
    <div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <label
          htmlFor="faq-search"
          className="mb-2 block text-sm font-semibold text-slate-800"
        >
          Search all exporter questions
        </label>
        <div className="relative">
          <Search
            aria-hidden="true"
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          />
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “AD Code”, “volumetric weight” or “RoDTEP”"
            className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-[#185FA5] focus:ring-2 focus:ring-[#185FA5]/20"
          />
        </div>
        <div
          className="mt-4 flex gap-2 overflow-x-auto pb-2"
          aria-label="Filter questions by category"
        >
          <button
            type="button"
            aria-pressed={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeCategory === "all"
                ? "border-[#185FA5] bg-[#185FA5] text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-[#185FA5]"
            }`}
          >
            All topics
          </button>
          {FAQ_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category.id
                  ? "border-[#185FA5] bg-[#185FA5] text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-[#185FA5]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm text-slate-600" aria-live="polite">
          Showing {visibleCount} of {ALL_FAQS.length} answers
        </p>
      </div>

      <div className="mt-8 space-y-10">
        {FAQ_CATEGORIES.map((category) => {
          const categoryVisible =
            activeCategory === "all" || activeCategory === category.id;
          const categoryFaqs = ALL_FAQS.filter(
            (faq) => faq.category === category.id
          );

          return (
            <section
              key={category.id}
              aria-labelledby={`faq-category-${category.id}`}
              hidden={!categoryVisible}
            >
              <div className="mb-4 border-b border-slate-200 pb-3">
                <h2
                  id={`faq-category-${category.id}`}
                  className="text-xl font-bold text-[#0A1628] sm:text-2xl"
                >
                  {category.label}
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  {category.description}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {categoryFaqs.map((faq) => {
                  const matchesQuery =
                    !normalizedQuery ||
                    `${faq.question} ${faq.answer} ${faq.categoryLabel}`
                      .toLocaleLowerCase()
                      .includes(normalizedQuery);

                  return (
                    <article
                      key={faq.id}
                      className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
                      hidden={!matchesQuery}
                    >
                      <h3 className="font-semibold leading-snug text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        {faq.answer}
                      </p>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {visibleCount === 0 && (
        <p className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-700">
          No matching answers. Try a different keyword or choose “All topics”.
        </p>
      )}
    </div>
  );
}
