"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import LiquidButton from "@/components/LiquidButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface SlideItem {
  id: number;
  type: "video" | "image";
  src: string;
  duration?: number;
  title: string;
  description: string;
  primaryBtn: { text: string; href: string };
  secondaryBtn: { text: string; href: string };
}

export default function HeroSection() {
  const swiperRef = useRef<SwiperClass | null>(null);

  const slides: SlideItem[] = [
    {
      id: 1,
      type: "image",
      src: "/banner/banner-2.webp",
      duration: 5000,
      title: "Keeping Industries Running\nat Their Best",
      description:
        "Providing dependable industrial maintenance, technical support, and operational solutions to ensure safety, efficiency, and uninterrupted performance.",
      primaryBtn: { text: "Our Services", href: "#services" },
      secondaryBtn: { text: "Request a Quote", href: "#contact" },
    },
    {
      id: 2,
      type: "image",
      src: "/banner/banner-3.png",
      duration: 5000,
      title: "Delivering Excellence in\nIndustrial Contracting",
      description:
        "From complex industrial installations to specialized contracting projects, we provide reliable solutions backed by technical expertise and a commitment to quality.",
      primaryBtn: { text: "Explore Capabilities", href: "#services" },
      secondaryBtn: { text: "Learn About Us", href: "#about" },
    },
    {
      id: 3,
      type: "video",
      src: "/banner/banner-1.mp4",
      duration: 19500,
      title: "Powering Industrial Excellence\nThrough Engineering & Infrastructure",
      description:
        "Delivering comprehensive engineering, turnkey contracting, industrial maintenance, and heavy logistics solutions across Saudi Arabia with over 45 years of experience.",
      primaryBtn: { text: "Get in Touch", href: "#contact" },
      secondaryBtn: { text: "Our Projects", href: "#projects" },
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 font-sans">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          swiper.slides.forEach((slideEl, idx) => {
            const vid = slideEl.querySelector("video");
            if (vid) {
              if (idx === swiper.activeIndex) {
                vid.currentTime = 0;
                vid.play().catch(() => {});
              } else {
                vid.pause();
              }
            }
          });
        }}
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[500px] sm:h-[540px] lg:h-[620px]"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            data-swiper-autoplay={slide.duration}
            className="relative w-full h-full"
          >
            {/* Background Media */}
            <div className="absolute inset-0 w-full h-full bg-slate-950">
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onEnded={() => {
                    swiperRef.current?.slideNext();
                  }}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  priority={slide.id === 1}
                  quality={70}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              )}
              {/* Dark Gradient Overlay for Maximum Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/40 to-black/20" />
            </div>

            {/* Slide Content */}
            <div className="relative z-10 w-full max-w-[1475px] mx-auto h-full flex items-center px-6 sm:px-12 lg:px-16 xl:px-24">
              <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl space-y-3.5 sm:space-y-4 md:space-y-5 lg:space-y-6">
                {/* Main Heading */}
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight lg:leading-[1.15] whitespace-pre-line">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-lg md:max-w-2xl lg:max-w-3xl">
                  {slide.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-row items-center flex-nowrap gap-2.5 sm:gap-3.5 md:gap-4 pt-1 sm:pt-2">
                  <LiquidButton
                    text={slide.primaryBtn.text}
                    href={slide.primaryBtn.href}
                    btnColor="#1d4ed8"
                    hoverBgColor="#ffffff"
                    textColor="#ffffff"
                    hoverTextColor="#1d4ed8"
                    className="px-3.5 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3.5 text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap shrink-0"
                  />

                  <LiquidButton
                    text={slide.secondaryBtn.text}
                    href={slide.secondaryBtn.href}
                    btnColor="rgba(255, 255, 255, 0.1)"
                    hoverBgColor="#ffffff"
                    textColor="#ffffff"
                    hoverTextColor="#1d4ed8"
                    className="px-3.5 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3.5 text-xs sm:text-sm md:text-base font-semibold border border-white/20 backdrop-blur-md whitespace-nowrap shrink-0"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute right-6 sm:right-12 lg:right-16 xl:right-24 bottom-4 sm:bottom-6 z-20 pointer-events-none">
        <Image
          src="/Saudi_Vision_2030_logo.svg.webp"
          alt="Saudi Vision 2030 Logo"
          width={120}
          height={80}
          sizes="(max-width: 640px) 105px, (max-width: 1024px) 150px, 200px"
          quality={70}
          className="h-10 sm:h-14 md:h-18 lg:h-22 w-auto object-contain drop-shadow-lg brightness-0 invert opacity-90"
        />
      </div>
    </section>
  );
}
