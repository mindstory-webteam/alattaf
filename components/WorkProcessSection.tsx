"use client";

import React from "react";
import { Search, Box, BadgeCheck } from "lucide-react";
import LiquidButton from "@/components/LiquidButton";
import ScrollRevealText from "@/components/ScrollRevealText";

export default function WorkProcessSection() {
  const headingText = "Engineering Excellence: Our Methodical Journey from Planning to Commissioning";

  const steps = [
    {
      id: 1,
      icon: Search,
      title: "RESEARCH & PLANNING",
      description:
        "Empowering industrial delivery through knowledge and precision. Our specialized engineering teams explore site technicalities, front-end designs, feasibility studies, and rigorous Saudi Aramco compliance standards.",
    },
    {
      id: 2,
      icon: Box,
      title: "PRODUCTION & EXECUTION",
      description:
        "We deploy state-of-the-art machinery and certified technical teams in civil fabrication, structural erection, electromechanical installation, and heavy equipment mobilization to maximize project quality and efficiency.",
    },
    {
      id: 3,
      icon: BadgeCheck,
      title: "QUALITY & HSE ASSURANCE",
      description:
        "We strive to exceed international safety and quality inspection benchmarks for our clients, performing non-destructive testing, stringent QA/QC audits, and certified pre-commissioning handovers across the Kingdom.",
    },
  ];

  return (
    <section id="process" className="w-full bg-[#fafafa] py-16 sm:py-20 lg:py-28 font-sans border-b border-slate-200/60 overflow-hidden">
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        {/* Top Header Row: Main Heading on Left + Button on Right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 sm:pb-8">
          {/* Dynamic Scroll-Driven Word-by-Word Heading */}
          <ScrollRevealText
            text={headingText}
            as="h2"
            className="text-xl sm:text-2xl lg:text-[25px] font-bold leading-snug tracking-tight max-w-3xl"
          />

          {/* Right-Aligned Button */}
          <div className="shrink-0 pt-1">
            <LiquidButton
              text="Discover our process"
              href="#services"
              btnColor="#1d4ed8"
              hoverBgColor="#ffffff"
              textColor="#ffffff"
              hoverTextColor="#1d4ed8"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold"
            />
          </div>
        </div>

        {/* Subtitle Paragraph */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl pb-12 sm:pb-16 lg:pb-20">
          Our systematic engineering and execution model ensures reliable industrial delivery across Saudi Arabia, where every stage is a testament to our steadfast commitment to environmental responsibility, safety, and turnkey excellence.
        </p>

        {/* 3 Columns Process Grid matching exact image UI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="group flex flex-col items-start transition-all duration-300"
              >
                {/* Top Rounded Squircle Icon Badge with constant soft background */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-900 shadow-xs mb-8 sm:mb-10 transition-transform duration-200 group-hover:scale-105">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" strokeWidth={2.1} />
                </div>

                {/* Card Content with subtle top divider */}
                <div className="w-full pt-6 border-t border-slate-200/80">
                  {/* Step Title (Uppercase, Bold) */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-wider uppercase mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
