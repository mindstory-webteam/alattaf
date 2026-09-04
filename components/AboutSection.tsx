"use client";

import React from "react";
import Image from "next/image";
import ScrollRevealText from "@/components/ScrollRevealText";

export default function AboutSection() {
  const dummyList = Array.from({ length: 12 }, (_, i) => i + 1);
  const headingText = "We take this opportunity to introduce Al Attaf Advanced Contracting Company (AAAC), a 100% Saudi-owned enterprise headquartered in Abqaiq, Kingdom of Saudi Arabia.";

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
            <ScrollRevealText
              text={headingText}
              as="h2"
              className="text-[16px] sm:text-xl lg:text-[25px] font-bold leading-relaxed sm:leading-snug tracking-normal sm:tracking-tight text-justify [text-align:justify] [text-justify:inter-word] [text-align-last:left] hyphens-auto [hyphens:auto]"
            />

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
              Formed in 1978 (1398H), AAAC commenced operations in direct partnership with <span className="text-blue-700 font-semibold">Saudi Aramco</span>, the Kingdom&apos;s premier global energy and industrial enterprise. Over more than 45 years of continuous operational growth, we have built a trusted legacy executing turnkey Civil, Mechanical, Electrical, Instrumentation, and Plant Maintenance (T&amp;I) projects across Aramco facilities and major industrial hubs throughout Saudi Arabia.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
              Headquartered in Abqaiq, Al Attaf Advanced Contracting is officially registered with the Saudi Ministry of Commerce (<span className="text-blue-700 font-semibold">CR # 2059000287</span>) and recognized as an approved contractor under <span className="text-blue-700 font-semibold">Saudi Aramco Vendor # 10005728</span> (Dhahran), upholding top-tier Saudi engineering governance, certified HSE standards, and dependable Kingdom-wide project delivery.
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
