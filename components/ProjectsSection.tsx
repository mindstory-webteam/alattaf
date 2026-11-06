"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import LiquidButton from "@/components/LiquidButton";
import ScrollRevealText from "@/components/ScrollRevealText";
import Reveal from "@/components/Reveal";

import "swiper/css";

interface ProjectItem {
  id: number;
  title: string;
  client: string;
  status: "completed" | "ongoing";
  statusLabel: string;
  location: string;
  category: string;
  image: string;
  imageFit?: "cover" | "contain";
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "ongoing" | "completed">("all");

  const headingText =
    "Crafting the Future, Honoring the Past. Our portfolio is a testament to our exceptional skills and proficiency in handling complex challenges, consistently delivering outstanding turnkey results across Saudi Arabia.";

  const allProjects: ProjectItem[] = [
    {
      id: 1,
      title: "KACWC 8483 Ithra (Saudi Aramco Project)",
      client: "Saudi Aramco",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Dhahran, Eastern Province",
      category: "Electrical & Instrumentation",
      image: "/projects/27f70787-a80d-4ddb-8c96-81185af1ada4.png",
      imageFit: "cover",
    },
    {
      id: 2,
      title: "Jubail Petrochemical Piping & Erection",
      client: "SABIC Affiliates",
      status: "ongoing",
      statusLabel: "Under Construction",
      location: "Jubail Industrial City",
      category: "Mechanical & Piping EPC",
      image: "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "SUPIC Project 3rd Industrial City Abqaiq (2016-17)",
      client: "Saudi Universal Petrochemical Company (SUPIC)",
      status: "completed",
      statusLabel: "Completed Project",
      location: "3rd Industrial City, Abqaiq",
      category: "Mechanical & Structural Steel EPC",
      image: "/projects/135a2d16-4117-426b-9bbb-73aae8e5f03e.png",
      imageFit: "cover",
    },
    {
      id: 4,
      title: "Industrial Logistics & Heavy Fleet Mobilization",
      client: "Saudi Aramco Vendor Operations",
      status: "ongoing",
      statusLabel: "Under Execution",
      location: "Kingdom-wide Delivery",
      category: "Logistics & Fleet Transport",
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      title: "Project of KFUPM Villas Facility Dhahran",
      client: "King Fahd University of Petroleum & Minerals (KFUPM)",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Dhahran, Saudi Arabia",
      category: "Civil & Infrastructure Works",
      image: "/projects/5faaf71c-da88-46cd-bb72-65e271c3a3d6.png",
      imageFit: "cover",
    },
    {
      id: 6,
      title: "Demolishing Of SO2 Solution Tank At Qswp",
      client: "Saudi Aramco / Qurayyah Seawater Plant",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Qurayyah, Eastern Province",
      category: "Civil & Plant Demolition",
      image: "/projects/e196c40e-cb3b-49a6-833c-5fa389d8b948.png",
      imageFit: "cover",
    },
    {
      id: 7,
      title: "Saudi Universal Petrochemical Company Project",
      client: "Saudi Universal Petrochemical Company (SUPIC)",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Eastern Province Industrial Zone",
      category: "Petrochemical & Process Plants",
      image: "/projects/02c105b7-d005-497a-84b1-c88d98b18a1b (1).png",
      imageFit: "cover",
    },
    {
      id: 8,
      title: "Modular Industrial Piping & Valve Skid Assembly",
      client: "SABIC & Industrial Affiliates",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Jubail Industrial City",
      category: "Mechanical & Piping EPC",
      image: "/projects/Industrial Piping Valve Skid Assembly.png",
      imageFit: "contain",
    },
    {
      id: 9,
      title: "Heavy-Gauge Industrial Pipeline & Pressure Vessel Supply",
      client: "Saudi Aramco",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Abqaiq, Eastern Province",
      category: "Civil & Mechanical Works",
      image: "/projects/382603b9-ac73-4880-9869-128436ab1586 - Copy.png",
      imageFit: "cover",
    },
    {
      id: 10,
      title: "Industrial Piping Spool Hydrostatic Testing & Assembly",
      client: "Saudi Aramco Project Services",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Ras Tanura & Dhahran",
      category: "Plant Maintenance & T&I",
      image: "/projects/c97457d0-631e-42ba-b93b-4dce3779d1c6 - Copy.png",
      imageFit: "cover",
    },
    {
      id: 11,
      title: "High-Pressure Industrial Flanged Valve Supply & Installation",
      client: "YASREF / Petrochemical Facilities",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Yanbu Industrial City",
      category: "Fire & Safety Engineering",
      image: "/projects/5afe43a1-d4b9-4a93-895d-7b8927c99f75.png",
      imageFit: "contain",
    },
    {
      id: 12,
      title: "Highway Solar Street Lighting Infrastructure Installation",
      client: "Saudi Electricity Company (SEC)",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Eastern Province Highway Corridor",
      category: "Electrical & Instrumentation",
      image: "/projects/8a99c8ad-1256-4536-bca1-6c71b03480a5.png",
      imageFit: "cover",
    },
    {
      id: 13,
      title: "Turnkey Solar Street Lighting & Highway Electrification",
      client: "Eastern Province Municipalities",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Dammam - Al Ahsa Highway",
      category: "Electrical Systems & Renewable Energy",
      image: "/projects/14cb7a62-a510-4a99-9a71-4c16f097cff6 - Copy (1).png",
      imageFit: "cover",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.status === activeFilter);

  return (
    <section id="projects" className="w-full bg-[#fafafa] py-20 lg:py-28 font-sans border-b border-slate-200/60 overflow-hidden">
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        {/* Header Row: Title on Left + Description and Filters on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-14 lg:pb-16">
          {/* Left Column: Title & Action Button */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-[25px] font-bold text-slate-900 tracking-tight leading-snug">
              Our Projects
            </h2>
            <LiquidButton
              text="Download Brochure (PDF)"
              href="/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              btnColor="#1d4ed8"
              hoverBgColor="#ffffff"
              textColor="#ffffff"
              hoverTextColor="#1d4ed8"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold"
            />
          </div>

          {/* Right Column: Narrative with Word-by-Word Scroll Reveal + Action Filters */}
          <div className="lg:col-span-8 space-y-5">
            <ScrollRevealText
              text={headingText}
              as="h3"
              className="text-[16px] sm:text-xl lg:text-[25px] font-bold leading-relaxed sm:leading-snug tracking-normal sm:tracking-tight"
            />

            {/* Filter Navigation */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm font-semibold">
              <button
                onClick={() => setActiveFilter("all")}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeFilter === "all"
                    ? "text-blue-700 font-bold underline underline-offset-4"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span>All Projects</span>
                <ChevronRight className="w-4 h-4 text-blue-700" />
              </button>

              <button
                onClick={() => setActiveFilter("ongoing")}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeFilter === "ongoing"
                    ? "text-blue-700 font-bold underline underline-offset-4"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span>Ongoing Projects</span>
                <ChevronRight className="w-4 h-4 text-blue-700" />
              </button>

              <button
                onClick={() => setActiveFilter("completed")}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeFilter === "completed"
                    ? "text-blue-700 font-bold underline underline-offset-4"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span>Completed Projects</span>
                <ChevronRight className="w-4 h-4 text-blue-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Auto-scrolling Project Cards Carousel */}
        <Reveal className="relative w-full" y={28} duration={750}>
          <Swiper
            key={activeFilter}
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={filteredProjects.length > 3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="w-full"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id} className="!h-auto flex">
                <div className="group relative flex flex-col justify-between w-full bg-white border border-slate-200/80 rounded-none overflow-hidden shadow-sm h-full">
                  {/* Image Container */}
                  <div
                    className={`relative w-full aspect-[16/10] shrink-0 overflow-hidden ${
                      project.imageFit === "contain" ? "bg-white p-4" : "bg-slate-100"
                    } rounded-none flex items-center justify-center`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`${
                        project.imageFit === "contain"
                          ? "object-contain p-2"
                          : "object-cover object-center"
                      } transition-transform duration-500 group-hover:scale-105`}
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2 flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        {project.category}
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-2 min-h-[48px] sm:min-h-[56px] flex items-start">
                        {project.title}
                      </h4>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-auto">
                      <div>
                        <span className="font-semibold text-slate-700 block">Client:</span>
                        <span>{project.client}</span>
                      </div>

                      <div className="text-right">
                        <span className="font-semibold text-slate-700 block">Location:</span>
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
