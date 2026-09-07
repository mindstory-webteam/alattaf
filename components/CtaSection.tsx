"use client";

import React from "react";
import LiquidButton from "@/components/LiquidButton";
import ScrollRevealText from "@/components/ScrollRevealText";

/* ------------------------------------------------------------------
   Placeholder poster. Swap for a local still in /public when going live:
     poster: "/videos/video-cta-2.jpg"
   ------------------------------------------------------------------ */
const media = {
  video: {
    src: "/videos/video-cta-1.mp4",
    poster: "https://picsum.photos/seed/aaac-cta/1920/1080",
  },
};

export default function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white font-sans">
      {/* Background video */}
      <div className="absolute inset-0">
        {/* Still fallback: shown when motion is reduced or the video cannot load */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={media.video.poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <video
          className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
          src={media.video.src}
          poster={media.video.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />

        {/* Flat white base keeps every part of the frame light enough for dark text */}
        <div className="absolute inset-0 bg-white/30" />
        {/* Extra weight on the left, where the copy sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white/40" />
      </div>

      <div className="relative w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-end">
          <div className="lg:col-span-7">
            <div aria-hidden="true" className="h-[3px] w-12 bg-blue-700" />

            <ScrollRevealText
              text="Bring us the scope. We will tell you how it gets built."
              className="mt-7 text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight leading-tight"
            />

            <p className="mt-5 max-w-xl text-sm sm:text-base text-slate-800 leading-relaxed">
              Send drawings, a shutdown window, or a maintenance requirement. Our team in Abqaiq
              returns a method, a crew plan, and a schedule you can hold us to — civil,
              mechanical, electrical, instrumentation, and T&amp;I under one contractor.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center lg:justify-end gap-4 sm:gap-8">
            <LiquidButton
              text="Request a quotation"
              href="/contact"
              btnColor="#1d4ed8"
              hoverBgColor="#0f172a"
              textColor="#ffffff"
              hoverTextColor="#ffffff"
              className="px-7 py-3.5 text-sm sm:text-base font-semibold"
            />

            
            <a  href="/services"
              className="text-sm sm:text-base font-semibold text-slate-900 underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
            >
              See our capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}