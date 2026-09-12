"use client";

import React from "react";
import Image from "next/image";
import ScrollRevealText from "@/components/ScrollRevealText";
import Reveal from "@/components/Reveal";

const brandLogos = [
  { name: "Saudi Aramco", src: "/brands/aramco.png" },
  { name: "SABIC", src: "/brands/sabic.png" },
  { name: "Saipem", src: "/brands/saipem.png" },
  { name: "YASREF", src: "/brands/yasref.png" },
  { name: "MASCO", src: "/brands/masco.png" },
  { name: "SRACO", src: "/brands/sraco.png" },
];

export default function AboutSection() {
  const marqueeLogos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];
  const headingText = "We take this opportunity to introduce Al Attaf Advanced Contracting Company, a 100% Saudi-owned enterprise headquartered in Abqaiq, Kingdom of Saudi Arabia.";

  return (
    <section id="about" className="w-full bg-white py-20 lg:py-28 font-sans border-b border-slate-100 overflow-hidden">
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        {/* Top Row: Matched Height Image on Left + Concise Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-stretch pb-16 lg:pb-20">
          {/* Left Side: Heavy Industrial Contracting Image Matching Content Height (Sharp Corners, No Hover) */}
          <Reveal className="lg:col-span-4 xl:col-span-4 flex" y={32} duration={800}>
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
          </Reveal>

          {/* Right Side: Detailed Company Profile Narrative */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-center space-y-4 lg:pl-2 text-justify">
            {/* Dynamic Scroll-Driven Word-by-Word Ash to Black Heading */}
            <ScrollRevealText
              text={headingText}
              as="h2"
              className="text-[16px] sm:text-xl lg:text-[25px] font-bold leading-relaxed sm:leading-snug tracking-normal sm:tracking-tight text-justify [text-align:justify] [text-justify:inter-word] [text-align-last:left] hyphens-auto [hyphens:auto]"
            />

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
              Formed in 1978 (1398H), AAAC carries out specialized subcontract works for <span className="text-blue-700 font-semibold">Saudi Aramco</span> projects and major industrial developments across the Kingdom. Over more than 45 years of continuous operational growth, we have built a trusted track record executing subcontract packages across Civil, Mechanical, Electrical, Instrumentation, and Plant Maintenance (T&amp;I) for Aramco facilities and industrial hubs throughout Saudi Arabia.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
              Headquartered in Abqaiq, Al Attaf Advanced Contracting is officially registered with the Saudi Ministry of Commerce (<span className="text-blue-700 font-semibold">CR # 2059000287</span>) and recognized under <span className="text-blue-700 font-semibold">Saudi Aramco Vendor # 10005728</span> (Dhahran), upholding top-tier Saudi engineering governance, certified HSE standards, and dependable Kingdom-wide subcontract delivery.
            </p>
          </div>
        </div>

        {/* Bottom Row: Infinite Auto-Scrolling Brand Logos Marquee */}
        <div className="pt-8 border-t border-slate-100">
          <div className="relative w-full overflow-hidden">
            {/* Left & Right subtle gradient shadows */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center space-x-6 sm:space-x-8 py-3">
              {marqueeLogos.map((brand, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center w-[170px] sm:w-[200px] h-[75px] sm:h-[85px] px-6 py-4 rounded-xl bg-slate-50 border border-slate-200/70 shrink-0 hover:bg-white hover:border-slate-300 transition-all duration-200 shadow-2xs hover:shadow-xs group"
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={160}
                    height={60}
                    className="max-h-9 sm:max-h-11 max-w-[130px] sm:max-w-[150px] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105"
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
