"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";
import LiquidButton from "@/components/LiquidButton";
import ScrollRevealText from "@/components/ScrollRevealText";

function AnimatedCounter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1], // smooth exponential ease-out
      });
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest.toLocaleString()}${suffix}`;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function CoverageSection() {
  const headingText = "We deliver comprehensive contracting, logistics, and industrial solutions throughout the Kingdom.";

  const stats = [
    {
      value: 2000,
      suffix: "+",
      label: "Total Projects & Operations Completed",
    },
    {
      value: 580,
      suffix: "+",
      label: "Corporate Partners & Enterprise Clients",
    },
    {
      value: 1770,
      suffix: "+",
      label: "Certified Workforce & Skilled Operators",
    },
    {
      value: 300,
      suffix: "+",
      label: "Modern Logistics Fleet & Heavy Equipment",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28 font-sans border-b border-slate-200/60">
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-12 lg:pb-14">
          <ScrollRevealText
            text={headingText}
            as="h2"
            className="text-xl sm:text-2xl lg:text-[25px] font-bold leading-snug tracking-tight max-w-3xl"
          />

          <div className="shrink-0 pt-1">
            <LiquidButton
              text="View all services"
              href="#services"
              btnColor="#1d4ed8"
              hoverBgColor="#ffffff"
              textColor="#ffffff"
              hoverTextColor="#1d4ed8"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold"
            />
          </div>
        </div>

        {/* Main Grid: Left Map + Right Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Saudi Arabia Map (Clean with No Pins) */}
          <div className="lg:col-span-6 relative flex items-center justify-center p-4 sm:p-6">
            <div className="relative w-full aspect-[4/3] max-w-[500px]">
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

          {/* Right Column: 2x2 Stats Grid + Location Info at Bottom */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 lg:space-y-10 pl-0 lg:pl-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-10 lg:gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Location block under stats on right side bottom */}
            <div className="pt-6 border-t border-slate-200/80 flex items-start gap-3 text-slate-700">
            
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase block">
                  Headquarters & Central Operations Base
                </span>
                <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                  6584-Abqaiq 33261-Taif street-Al madiynah, Saudi Arabia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
