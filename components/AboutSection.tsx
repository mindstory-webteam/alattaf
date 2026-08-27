"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const dummyList = Array.from({ length: 12 }, (_, i) => i + 1);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const headingText = "We take this opportunity to introduce Al Attaf Advanced Contracting Company (AAAC), a 100% Saudi-owned enterprise headquartered in Abqaiq, Kingdom of Saudi Arabia.";
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

  return (
    <section id="about" className="w-full bg-white py-20 lg:py-28 font-sans border-b border-slate-100 overflow-hidden">
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        {/* Top Row: Matched Height Image on Left + Concise Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-stretch pb-16 lg:pb-20">
          {/* Left Side: Heavy Industrial Contracting Image Matching Content Height (Sharp Corners, No Hover) */}
          <div className="lg:col-span-4 xl:col-span-4 flex">
            <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] lg:min-h-full rounded-none overflow-hidden shadow-sm border border-slate-200/80 bg-slate-100">
              <Image
                src="https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Al Attaf Advanced Contracting Heavy Industrial Infrastructure Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right Side: Detailed Company Profile Narrative */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-center space-y-4 lg:pl-2 text-justify">
            {/* Dynamic Scroll-Driven Word-by-Word Ash to Black Heading */}
            <h2
              ref={headingRef}
              className="text-xl sm:text-2xl lg:text-[25px] font-bold leading-snug tracking-tight text-justify"
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

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
              Formed in 1978 (1398H), AAAC commenced operations in direct partnership with Saudi Aramco. Over more than 45 years of continuous operational growth, we have built a stable financial base and proven expertise executing turnkey Civil, Mechanical, Electrical, and Instrumentation projects for Saudi Aramco and prominent private enterprise clients across the Eastern Province and nationwide.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
              Al Attaf Advanced Contracting Company is officially registered under Commercial Registration Number <strong className="text-slate-900 font-semibold"># 2059000287</strong> at the Saudi Arabian Ministry of Commerce in Abqaiq, and under Contracting Vendor Number <strong className="text-slate-900 font-semibold"># 10005728</strong> at Saudi Aramco in Dhahran. AAAC is also an active member of the Eastern Province Chamber of Commerce and maintains valid Zakat and tax compliance certification.
            </p>
          </div>
        </div>

        {/* Bottom Row: Infinite Auto-Scrolling Brand Logos Marquee using dummy-logo.png */}
        <div className="pt-8 border-t border-slate-100">
          <div className="relative w-full overflow-hidden">
            {/* Left & Right subtle gradient shadows */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center space-x-8 sm:space-x-12 py-3">
              {dummyList.concat(dummyList).map((_, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center px-10 py-5 sm:px-12 sm:py-6 rounded-xl bg-slate-50 border border-slate-200/70 shrink-0 hover:bg-white hover:border-slate-300 transition-all duration-200 opacity-80 hover:opacity-100"
                >
                  <Image
                    src="/alattaf-logo.png"
                    alt="Al Attaf Brand Logo"
                    width={220}
                    height={80}
                    className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
