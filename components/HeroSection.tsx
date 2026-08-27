"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Empowering Supply Chains\n& Mega Infrastructure",
      description: "Delivering advanced logistics fleet operations, turnkey contracting, and dependable industrial project support with uncompromised quality standards.",
      primaryBtn: { text: "Our Logistics Services", href: "#services" },
      secondaryBtn: { text: "Request a Quote", href: "#contact" },
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Efficient Cargo Transport\n& Material Handling",
      description: "Delivering dependable supply chain logistics, on-time material transport, and end-to-end heavy equipment mobility with certified safety standards.",
      primaryBtn: { text: "Explore Fleet Capabilities", href: "#services" },
      secondaryBtn: { text: "Contact Support", href: "#contact" },
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Advanced Heavy Equipment\n& Fleet Logistics",
      description: "Providing modern heavy freight haulage, certified equipment operators, and round-the-clock nationwide transportation across the Kingdom.",
      primaryBtn: { text: "Get in Touch", href: "#contact" },
      secondaryBtn: { text: "Learn About Us", href: "#about" },
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 font-sans">
      <Swiper
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
            <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-2 sm:px-3 lg:px-4">
              <div className="w-full max-w-4xl xl:max-w-5xl space-y-6">
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] whitespace-pre-line min-h-[72px] sm:min-h-[110px] lg:min-h-[140px] flex items-center">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl lg:max-w-3xl min-h-[56px] sm:min-h-[64px] flex items-center">
                  {slide.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <a
                    href={slide.primaryBtn.href}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded text-sm sm:text-base font-semibold text-white bg-blue-700 transition-all duration-200 transform"
                  >
                    <span>{slide.primaryBtn.text}</span>
                  </a>

                  <a
                    href={slide.secondaryBtn.href}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200"
                  >
                    <span>{slide.secondaryBtn.text}</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute right-10 sm:right-20 lg:right-20 xl:right-25 bottom-6 z-20 pointer-events-none">
        <Image
          src="/Saudi_Vision_2030_logo.svg.webp"
          alt="Saudi Vision 2030 Logo"
          width={220}
          height={150}
          className="h-16 sm:h-20 lg:h-24 w-auto object-contain drop-shadow-lg brightness-0 invert opacity-90"
        />
      </div>
    </section>
  );
}
