"use client";

import React from "react";
import ScrollRevealText from "@/components/ScrollRevealText";

export default function HomeVisionMission() {
  const headingText =
    "Guiding principles driving turnkey excellence, safety, and sustainable industrial growth across the Kingdom.";

  const cards = [
    {
      id: "vision",
      title: "Our Vision",
      description:
        "To be the Kingdom's foremost multidisciplinary contracting partner, recognized for pioneering engineering benchmarks, sustainable infrastructure, and pivotal contributions to Saudi Vision 2030.",
      bgColor: "bg-[#f4f4f5]",
      foldColor: "bg-[#dcdcdc]",
    },
    {
      id: "mission",
      title: "Our Mission",
      description:
        "To deliver turnkey civil, mechanical, electromechanical, and plant maintenance solutions with uncompromised safety, technological agility, and enduring value for Saudi Aramco and industrial partners.",
      bgColor: "bg-[#e0f2fe]", // Light blue
      foldColor: "bg-[#bae6fd]",
    },
    {
      id: "values",
      title: "Our Core Values",
      description:
        "Upholding unwavering integrity, certified HSE vigilance, operational transparency, and collaborative synergy across every project phase from engineering to final handover.",
      bgColor: "bg-[#ebebeb]",
      foldColor: "bg-[#d1d5db]",
    },
  ];

  return (
    <section
      id="vision-mission"
      className="w-full bg-white py-16 sm:py-20 lg:py-28 font-sans border-b border-slate-100 overflow-hidden"
    >
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          {/* Left Column: Section Tag & Heading */}
          <div className="xl:col-span-4 space-y-4 max-w-3xl xl:max-w-none">
            <span className="text-sm font-semibold tracking-wider text-slate-800 uppercase block">
              Our Vision & Values
            </span>

            <ScrollRevealText
              text={headingText}
              as="h2"
              className="text-[16px] sm:text-xl lg:text-[25px] font-bold leading-relaxed sm:leading-snug tracking-normal sm:tracking-tight text-slate-900 text-justify [text-align:justify] [text-justify:inter-word] [text-align-last:left] hyphens-auto [hyphens:auto]"
            />

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              Our core values guide everything we do shaping our engineering
              decisions, empowering our workforce, and ensuring dependable
              project outcomes throughout Saudi Arabia.
            </p>
          </div>

          {/* Right Column: 3 Cards Grid with Paper Fold Corner in Top Right */}
          <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
                }}
                className={`${card.bgColor} relative p-7 sm:p-8 flex flex-col justify-start min-h-[280px] sm:min-h-[320px] transition-all duration-300 hover:shadow-md hover:-translate-y-1 group`}
              >
                {/* Paper Folded Flap in Top-Right */}
                <div
                  className={`absolute top-0 right-0 w-[30px] h-[30px] ${card.foldColor} pointer-events-none transition-all duration-300`}
                  style={{
                    clipPath: "polygon(0 0, 0 100%, 100% 100%)",
                    filter: "drop-shadow(-2px 2px 3px rgba(0, 0, 0, 0.12))",
                  }}
                />

                {/* Content: Title & Narrative aligned at identical start position */}
                <div className="space-y-3 sm:space-y-4 pr-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
