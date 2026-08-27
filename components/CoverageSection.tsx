"use client";

import React from "react";
import Image from "next/image";
import LiquidButton from "@/components/LiquidButton";

export default function CoverageSection() {
  const stats = [
    {
      number: "2000+",
      label: "Total Projects & Operations Completed",
    },
    {
      number: "580+",
      label: "Corporate Partners & Enterprise Clients",
    },
    {
      number: "1770+",
      label: "Certified Workforce & Skilled Operators",
    },
    {
      number: "300+",
      label: "Modern Logistics Fleet & Heavy Equipment",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28 font-sans border-b border-slate-100">
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-12 lg:pb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.25] max-w-3xl">
            We deliver comprehensive contracting, logistics, and industrial solutions throughout the Kingdom.
          </h2>

          <div className="shrink-0 pt-2">
            <LiquidButton
              text="View all services"
              href="#services"
              btnColor="#1d4ed8"
              hoverBgColor="#ffffff"
              textColor="#ffffff"
              hoverTextColor="#1d4ed8"
              className="px-6 py-3 text-sm font-semibold"
            />
          </div>
        </div>

        {/* Main Grid: Left Map + Right Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Saudi Arabia Map (Clean with No Pins) */}
          <div className="lg:col-span-6 relative flex items-center justify-center p-4 sm:p-8">
            <div className="relative w-full aspect-[4/3] max-w-[560px]">
              <Image
                src="/sa-map.svg"
                alt="Saudi Arabia Map"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

          {/* Right Column: 2x2 Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-14 pl-0 lg:pl-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                  {stat.number}
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
