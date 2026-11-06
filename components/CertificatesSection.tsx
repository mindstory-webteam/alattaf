"use client";

import React from "react";
import Image from "next/image";

interface Certificate {
  id: string;
  title: string;
  image: string;
  code: string;
  standard: string;
  aspectClass: string;
}

const certificates: Certificate[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    standard: "Quality Management System",
    code: "SISTEMA-KSA/ADC-Q11795",
    image: "/certificates/3.jpeg",
    aspectClass: "aspect-[210/297]",
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015",
    standard: "Environmental Management System",
    code: "SISTEMA-KSA/ADC-E11796",
    image: "/certificates/4.jpeg",
    aspectClass: "aspect-[210/297]",
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018",
    standard: "Occupational Health & Safety System",
    code: "SISTEMA-KSA/ADC-O11797",
    image: "/certificates/5.jpeg",
    aspectClass: "aspect-[210/297]",
  },
  {
    id: "commercial-registration",
    title: "Commercial Registration Certificate",
    standard: "Ministry of Commerce Company Registration",
    code: "CR No: 2059000287",
    image: "/certificates/2.jpeg",
    aspectClass: "aspect-[297/210]",
  },
  {
    id: "asharqia-chamber",
    title: "Asharqia Chamber Membership",
    standard: "Chamber of Commerce & Industry Membership",
    code: "Membership No: 4133",
    image: "/certificates/1.jpeg",
    aspectClass: "aspect-[297/210]",
  },
];

export default function CertificatesSection() {
  return (
    <section className="w-full bg-[#1c1d20] relative overflow-hidden py-10 sm:py-12 lg:py-14 xl:py-16 font-sans border-y border-white/10">
      <div className="relative z-10 w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        {/* Main Split Grid: Left 5 Certificates + Right Vision 2030 Emblem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT SIDE: 5 Certificate Images without border radius */}
          <div className="lg:col-span-7 xl:col-span-7 w-full flex items-center justify-center lg:justify-start">
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5 sm:gap-3.5 w-full max-w-2xl">
              {certificates.map((cert, index) => {
                // Top row: 3 ISO certificates (col-span-2 each out of 6 cols on sm+)
                // Bottom row: 2 Official Saudi registrations (col-span-3 each out of 6 cols on sm+)
                // Mobile: index 0,1 each col-span-1; index 2 col-span-2; index 3,4 each col-span-2
                const spanClass =
                  index < 2
                    ? "col-span-1 sm:col-span-2"
                    : index === 2
                      ? "col-span-2 sm:col-span-2 max-w-[200px] sm:max-w-none mx-auto w-full"
                      : "col-span-2 sm:col-span-3";

                return (
                  <div
                    key={cert.id}
                    className={`${spanClass} relative ${cert.aspectClass} flex items-center justify-center bg-white rounded-none overflow-hidden shadow-sm`}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain rounded-none"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      priority={index < 3}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Saudi Map Border + Saudi Vision 2030 Logo (Matching Reference UI) */}
          <div className="lg:col-span-5 xl:col-span-5 relative w-full flex items-center justify-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
            {/* Background Map: Clean High-Resolution SVG Vector Outline with top gap, right padding, and allowed bottom bleed */}
            <div
              className="absolute top-1/2 left-1/2 -translate-y-[36%] sm:-translate-y-[35%] lg:-translate-y-[34%] -translate-x-[42%] sm:-translate-x-[40%] lg:-translate-x-[38%] xl:-translate-x-[36%] w-[720px] sm:w-[820px] lg:w-[920px] xl:w-[1020px] aspect-[1000/824] pointer-events-none select-none z-0 pt-10 sm:pt-14 lg:pt-20 xl:pt-24 pr-10 sm:pr-16 lg:pr-24 xl:pr-32"
              aria-hidden="true"
            >
              <Image
                src="/saudi-map-outline.svg"
                alt="Kingdom of Saudi Arabia Map Outline"
                fill
                unoptimized
                className="object-contain object-center opacity-30 pt-4 sm:pt-6 lg:pt-8"
                priority
              />
            </div>

            {/* Overlaid Saudi Vision 2030 Logo (in white) */}
            <div className="relative z-10 flex flex-col items-center justify-center p-4">
              <div className="relative w-48 sm:w-56 lg:w-64 aspect-[360/240] transition-transform duration-500 hover:scale-105">
                <Image
                  src="/Saudi_Vision_2030_logo.svg.webp"
                  alt="Saudi Vision 2030 Official Emblem"
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                  className="object-contain object-center [filter:brightness(0)_invert(1)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
