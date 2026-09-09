"use client";

import React, {useState} from "react";
import {Plus, Minus} from "lucide-react";
import type {ServiceFaq} from "@/app/data/services";

interface ServiceFaqAccordionProps {
  faqs: ServiceFaq[];
}

export default function ServiceFaqAccordion({faqs}: ServiceFaqAccordionProps) {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                className="flex w-full items-start justify-between gap-6 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span
                  className={`text-base sm:text-lg font-semibold leading-snug transition-colors ${
                    isOpen
                      ? "text-sky-600"
                      : "text-slate-900 group-hover:text-sky-600"
                  }`}
                >
                  {faq.question}
                </span>

                <span
                  className={`mt-0.5 shrink-0 flex h-7 w-7 items-center justify-center border transition-colors ${
                    isOpen
                      ? "border-sky-600 bg-sky-600 text-white"
                      : "border-slate-300 text-slate-500 group-hover:border-sky-600 group-hover:text-sky-600"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>
            </h3>

            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-12 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}