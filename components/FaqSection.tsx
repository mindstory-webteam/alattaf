"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LiquidButton from "@/components/LiquidButton";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Item 2 open by default

  const faqs = [
    {
      id: "faq-1",
      question: "What specialized contracting services does AAAC provide?",
      answer:
        "Al Attaf Advanced Contracting delivers turnkey Civil Works, Mechanical & Industrial Piping, Electrical & Instrumentation, Structural Steel Erection, and Plant Maintenance (T&I) across industrial facilities in Saudi Arabia.",
    },
    {
      id: "faq-2",
      question: "Is AAAC officially approved by Saudi Aramco and industrial partners?",
      answer:
        "Yes. AAAC is officially recognized as an approved contractor under Saudi Aramco Vendor # 10005728 (Dhahran), SABIC affiliates, and registered with the Saudi Ministry of Commerce (CR # 2059000287).",
    },
    {
      id: "faq-3",
      question: "What safety, HSE, and quality inspection benchmarks do you enforce?",
      answer:
        "We maintain uncompromising safety protocols aligned strictly with Saudi Aramco Safety Management Systems (SMS), ISO quality standards, and rigorous Non-Destructive Testing (NDT) inspection procedures.",
    },
    {
      id: "faq-4",
      question: "Can AAAC mobilize heavy equipment and skilled workforce Kingdom-wide?",
      answer:
        "Yes. With our centralized headquarters in Abqaiq and dedicated logistics fleet, we rapidly deploy over 1,770+ certified technicians, heavy machinery, and portable site units across all industrial cities.",
    },
    {
      id: "faq-5",
      question: "How do we request a project estimate, site survey, or tender partnership?",
      answer:
        "You can reach out directly to our contracts and engineering team via our contact form, email at info@alattafcompany.com, or phone at 00966 13 566 0243 for prompt RFQ review and consultations.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-20 lg:py-28 font-sans overflow-hidden">
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight">
                Frequently Asked <br className="hidden sm:inline" /> Questions
              </h2>
            </div>

            {/* Bottom Callout: Still have a question? */}
            <div className="pt-6 lg:pt-16 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Still have a question?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
                Don&apos;t worry, we&apos;re free for consultations and technical RFQ reviews.
              </p>
              <div className="pt-2">
                <LiquidButton
                  text="Contact Us"
                  href="#contact"
                  btnColor="#1d4ed8"
                  hoverBgColor="#ffffff"
                  textColor="#ffffff"
                  hoverTextColor="#1d4ed8"
                  className="px-6 py-2.5 text-xs sm:text-sm font-semibold rounded shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Accordion List (Without numbers) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? "bg-slate-50/90 border-slate-200 shadow-xs"
                      : "bg-slate-50/50 hover:bg-slate-50 border-slate-200/60"
                  } p-5 sm:p-6 cursor-pointer`}
                  onClick={() => toggleFaq(index)}
                >
                  {/* Accordion Header */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
                      {faq.question}
                    </h3>
                    <div className="shrink-0 text-slate-700">
                      {isOpen ? (
                        <Minus className="w-4 h-4 transition-transform duration-200" />
                      ) : (
                        <Plus className="w-4 h-4 transition-transform duration-200" />
                      )}
                    </div>
                  </div>

                  {/* Accordion Expandable Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 pr-2">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
