"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";
import LiquidButton from "@/components/LiquidButton";

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
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const headingText = "We deliver comprehensive contracting, logistics, and industrial solutions throughout the Kingdom.";
  const words = headingText.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;
      const rect = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start transition when top of heading enters 90% of viewport, complete at 35% of viewport
      const start = windowHeight * 0.90;
      const end = windowHeight * 0.35;
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <section className="w-full bg-[#fafafa] py-16 sm:py-20 lg:py-28 font-sans border-b border-slate-200/60">
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-12 lg:pb-14">
          <h2
            ref={headingRef}
            className="text-xl sm:text-2xl lg:text-[25px] font-bold leading-snug tracking-tight max-w-3xl"
          >
            {words.map((word, i) => {
              const totalWords = words.length;
              const startThreshold = i / totalWords;
              const endThreshold = (i + 1) / totalWords;
              const wordProgress = Math.min(
                Math.max((scrollProgress - startThreshold) / (endThreshold - startThreshold), 0),
                1
              );

              // Interpolate from Ash Gray rgb(161, 161, 170) to Black rgb(15, 23, 42)
              const r = Math.round(161 - wordProgress * (161 - 15));
              const g = Math.round(161 - wordProgress * (161 - 23));
              const b = Math.round(170 - wordProgress * (170 - 42));

              return (
                <span
                  key={i}
                  style={{ color: `rgb(${r}, ${g}, ${b})` }}
                  className="inline-block mr-[0.28em] transition-colors duration-150 ease-out"
                >
                  {word}
                </span>
              );
            })}
          </h2>

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

          {/* Right Column: 2x2 Stats Grid with Animated Framer Motion Counter */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-10 lg:gap-12 pl-0 lg:pl-4">
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
        </div>
      </div>
    </section>
  );
}
