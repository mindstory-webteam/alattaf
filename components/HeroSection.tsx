"use client";

import React from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation, EffectFade} from "swiper/modules";
import LiquidButton from "@/components/LiquidButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Empowering Supply Chains\n& Mega Infrastructure",
      description:
        "Delivering advanced logistics fleet operations, turnkey contracting, and dependable industrial project support with uncompromised quality standards.",
      primaryBtn: {text: "Our Logistics Services", href: "#services"},
      secondaryBtn: {text: "Request a Quote", href: "#contact"},
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Efficient Cargo Transport\n& Material Handling",
      description:
        "Delivering dependable supply chain logistics, on-time material transport, and end-to-end heavy equipment mobility with certified safety standards.",
      primaryBtn: {text: "Explore Fleet Capabilities", href: "#services"},
      secondaryBtn: {text: "Contact Us", href: "#contact"},
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Advanced Heavy Equipment\n& Fleet Logistics",
      description:
        "Providing modern heavy freight haulage, certified equipment operators, and round-the-clock nationwide transportation across the Kingdom.",
      primaryBtn: {text: "Get in Touch", href: "#contact"},
      secondaryBtn: {text: "Learn About Us", href: "#about"},
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 font-sans">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{crossFade: true}}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[500px] sm:h-[540px] lg:h-[620px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image with Next Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                sizes="100vw"
                className="object-cover object-center"
              />
              {/* Dark Gradient Overlay for Maximum Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/35 to-black/15" />
            </div>

            {/* Slide Content - Positioned in the exact same place across all slides */}
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

                {/* Action Buttons - Kept on the exact same row across all screen sizes */}
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
          width={220}
          height={150}
          className="h-10 sm:h-14 md:h-18 lg:h-22 w-auto object-contain drop-shadow-lg brightness-0 invert opacity-90"
        />
      </div>
    </section>
  );
}
