"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryItem {
  id: number;
  title: string;
  category: "civil" | "machinery" | "industrial" | "logistics";
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
  imageFit?: "cover" | "contain";
}

const galleryData: GalleryItem[] = [
  // ── Al Attaf Flagship Projects (From Projects Portfolio) ──
  {
    id: 1,
    title: "KACWC 8483 Ithra (Saudi Aramco Project)",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Dhahran, Eastern Province",
    image: "/projects/27f70787-a80d-4ddb-8c96-81185af1ada4.png",
    description: "Electrical, instrumentation, and cabling systems executed for the prestigious King Abdulaziz Center for World Culture (Ithra).",
    imageFit: "cover",
  },
  {
    id: 2,
    title: "SUPIC Project 3rd Industrial City Abqaiq",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "3rd Industrial City, Abqaiq",
    image: "/projects/135a2d16-4117-426b-9bbb-73aae8e5f03e.png",
    description: "Mechanical fabrication, structural steel erection, and industrial plant facility construction for SUPIC petrochemical complex.",
    imageFit: "cover",
  },
  {
    id: 3,
    title: "Project of KFUPM Villas Facility Dhahran",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Dhahran, Saudi Arabia",
    image: "/projects/5faaf71c-da88-46cd-bb72-65e271c3a3d6.png",
    description: "Comprehensive civil contracting, reinforced foundations, structural earthworks, and infrastructure utility networks.",
    imageFit: "cover",
  },
  {
    id: 4,
    title: "Demolishing Of SO2 Solution Tank At Qswp",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Qurayyah, Eastern Province",
    image: "/projects/e196c40e-cb3b-49a6-833c-5fa389d8b948.png",
    description: "Precision industrial demolishing and safe decommissioning of SO2 chemical solution storage tanks adhering to Aramco HSE protocols.",
    imageFit: "cover",
  },
  {
    id: 5,
    title: "Saudi Universal Petrochemical Company Project",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Eastern Province Industrial Zone",
    image: "/projects/02c105b7-d005-497a-84b1-c88d98b18a1b (1).png",
    description: "Process plant expansion, heavy structural assemblies, and piping interconnects for petrochemical processing operations.",
    imageFit: "cover",
  },
  {
    id: 6,
    title: "Modular Industrial Piping & Valve Skid Assembly",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Jubail Industrial City",
    image: "/projects/Industrial Piping Valve Skid Assembly.png",
    description: "Offsite fabrication, spool fit-up, high-pressure valve testing, and modular skid assembly for SABIC industrial affiliates.",
    imageFit: "contain",
  },
  {
    id: 7,
    title: "Heavy-Gauge Industrial Pipeline & Pressure Vessel Supply",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Abqaiq, Eastern Province",
    image: "/projects/382603b9-ac73-4880-9869-128436ab1586 - Copy.png",
    description: "High-spec carbon steel industrial pipeline, pressure vessel rigging, and hydrotested interconnect spools for Aramco vendor projects.",
    imageFit: "cover",
  },
  {
    id: 8,
    title: "Industrial Piping Spool Hydrostatic Testing & Assembly",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Ras Tanura & Dhahran",
    image: "/projects/c97457d0-631e-42ba-b93b-4dce3779d1c6 - Copy.png",
    description: "Rigorous hydrostatic pressure testing, weld QA/QC non-destructive examination, and spool pre-commissioning handovers.",
    imageFit: "cover",
  },
  {
    id: 9,
    title: "High-Pressure Industrial Flanged Valve Supply & Installation",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Yanbu Industrial City",
    image: "/projects/5afe43a1-d4b9-4a93-895d-7b8927c99f75.png",
    description: "Heavy-duty forged flanged valves and automated actuators installation for critical industrial flow regulation in YASREF facilities.",
    imageFit: "contain",
  },
  {
    id: 10,
    title: "Highway Solar Street Lighting Infrastructure Installation",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Eastern Province Highway Corridor",
    image: "/projects/8a99c8ad-1256-4536-bca1-6c71b03480a5.png",
    description: "Turnkey solar pole foundations, structural anchor bolts, and renewable street illumination for Saudi Electricity Company (SEC).",
    imageFit: "cover",
  },
  {
    id: 11,
    title: "Turnkey Solar Street Lighting & Highway Electrification",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Dammam - Al Ahsa Highway",
    image: "/projects/14cb7a62-a510-4a99-9a71-4c16f097cff6 - Copy (1).png",
    description: "Extensive highway electrification and dual-arm solar luminaire pole installations across major Eastern Province transport links.",
    imageFit: "cover",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "civil", label: "Civil & Infrastructure" },
  { id: "industrial", label: "Mechanical & Industrial" },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Exact configuration: 3 items in a row, 4 rows = 12 items per page
  const itemsPerPage = 12;

  // Filter gallery items based on active category
  const filteredItems =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));

  // Current page items slice
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
      setCurrentPage(newPage);
      if (containerRef.current) {
        const scrollY = typeof window !== "undefined" ? (window.scrollY ?? window.pageYOffset ?? 0) : 0;
        const topPos = containerRef.current.getBoundingClientRect().top + scrollY - 100;
        window.scrollTo({ top: topPos, behavior: "smooth" });
      }
    }
  };

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const handleLightboxNav = (direction: "prev" | "next") => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    if (direction === "prev") {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedItem(filteredItems[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedItem(filteredItems[nextIndex]);
    }
  };

  return (
    <section ref={containerRef} className="w-full bg-slate-50/60 py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 md:pb-10 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-[25px] font-bold text-slate-900 tracking-tight leading-snug">
              Executing Precision Across Saudi Arabia
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-slate-600 max-w-2xl leading-relaxed">
              High-resolution snapshots from our civil contracting sites, heavy machinery fleet, process fabrication facilities, and nationwide logistics convoys.
            </p>
          </div>

          {/* Results Summary */}
          <div className="text-xs sm:text-sm font-medium text-slate-500 shrink-0">
            Showing{" "}
            <span className="font-bold text-slate-800">
              {filteredItems.length === 0 ? 0 : startIndex + 1} -{" "}
              {Math.min(startIndex + itemsPerPage, filteredItems.length)}
            </span>{" "}
            of <span className="font-bold text-slate-800">{filteredItems.length}</span>{" "}
            projects
          </div>
        </div>

        {/* Category Filter Pills */}
      </div>

      {/* Full-width scroll wrapper outside padded container so pills are never clipped */}
      <div className="overflow-x-auto no-scrollbar w-full">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 py-4 sm:py-6 md:py-8 sm:flex-wrap px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? galleryData.length
                : galleryData.filter((i) => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 sm:shrink cursor-pointer border ${
                  isActive
                    ? "bg-blue-700 text-white border-blue-700"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span className="whitespace-nowrap">{cat.label}</span>
                <span
                  className={`px-1.5 py-0.5 text-[10px] sm:text-[11px] rounded-full font-bold ${
                    isActive
                      ? "bg-blue-800 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Gallery Grid: 1 col on phones (<480px), 2 cols on small/phablet (480px-767px), 3 cols on mid/tablets/desktop (768px+) */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5 md:gap-6 lg:gap-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                onClick={() => openLightbox(item)}
                className="group relative cursor-pointer overflow-hidden rounded sm:rounded bg-slate-100 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[4/3] w-full"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className={`${
                    item.imageFit === "contain"
                      ? "object-contain p-3 bg-slate-900"
                      : "object-cover object-center"
                  } transition-transform duration-500 ease-out group-hover:scale-105`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {currentItems.length === 0 && (
          <div className="py-16 sm:py-20 text-center bg-white rounded-xl sm:rounded-2xl border border-slate-200 px-4">
            <p className="text-slate-500 text-sm sm:text-base font-medium">
              No photos found in this category.
            </p>
            <button
              onClick={() => handleCategoryChange("all")}
              className="mt-4 px-4 py-2 rounded-lg bg-blue-700 text-white text-xs sm:text-sm font-semibold hover:bg-blue-800 transition-colors cursor-pointer"
            >
              Reset to All Photos
            </button>
          </div>
        )}

        {/* Pagination Controls at Bottom (Numbers & Side Buttons) */}
        {totalPages > 1 && (
          <div className="mt-10 md:mt-14 flex items-center justify-center gap-1">
            {/* Previous */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                currentPage === 1
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-500 hover:text-slate-900 cursor-pointer"
              }`}
            >
              Prev
            </button>

            {/* Number Buttons */}
            <div className="flex items-center gap-0.5 mx-1">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNum = index + 1;
                const isCurrent = pageNum === currentPage;

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`w-9 h-9 text-sm font-medium transition-colors duration-150 cursor-pointer ${
                      isCurrent
                        ? "text-slate-900 font-bold underline underline-offset-4 decoration-2 decoration-blue-600"
                        : "text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Next */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                currentPage === totalPages
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-500 hover:text-slate-900 cursor-pointer"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Lightbox / Modal View */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-2 sm:p-4 md:p-6"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative w-full max-w-4xl lg:max-w-5xl overflow-hidden rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-800/90 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition-colors flex items-center justify-center cursor-pointer shadow-lg"
                aria-label="Close Preview"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Modal Image Area */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[55vh] sm:max-h-[65vh] md:max-h-[70vh] bg-black">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 85vw"
                  className="object-contain"
                />

                {/* Left/Right Lightbox Arrows */}
                <button
                  onClick={() => handleLightboxNav("prev")}
                  aria-label="Previous image"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 text-white hover:bg-white hover:text-slate-900 transition-colors flex items-center justify-center cursor-pointer shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={() => handleLightboxNav("next")}
                  aria-label="Next image"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 text-white hover:bg-white hover:text-slate-900 transition-colors flex items-center justify-center cursor-pointer shadow-lg"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Modal Details Footer */}
              <div className="p-3.5 sm:p-5 md:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-t border-slate-800 overflow-y-auto">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                    <span className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded-md bg-blue-600/80 text-blue-100">
                      {selectedItem.categoryLabel}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400 shrink-0" />
                      <span className="truncate">{selectedItem.location}</span>
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white truncate">
                    {selectedItem.title}
                  </h3>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-300 line-clamp-2">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="text-[10px] sm:text-xs text-slate-400 shrink-0 self-end sm:self-auto">
                  Item #{selectedItem.id} of {filteredItems.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
