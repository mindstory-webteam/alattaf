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
import ScrollRevealText from "@/components/ScrollRevealText";

export interface GalleryItem {
  id: number;
  title: string;
  category: "civil" | "machinery" | "industrial" | "logistics";
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
}

const galleryData: GalleryItem[] = [
  // Page 1 Items (1 - 12)
  {
    id: 1,
    title: "Aramco Gas Plant Site Expansion",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Abqaiq, Eastern Province",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Deep foundation excavation, reinforced concrete slabs, and utility corridors.",
  },
  {
    id: 2,
    title: "Heavy Hydraulic Excavator Operations",
    category: "machinery",
    categoryLabel: "Heavy Equipment",
    location: "Dammam Industrial Area",
    image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Tier-1 crawler excavators deploying for high-volume rock breaking and site grading.",
  },
  {
    id: 3,
    title: "Petrochemical Pipe Rack Assembly",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Jubail Industrial City",
    image: "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Precision alignment and welding of high-pressure process pipelines.",
  },
  {
    id: 4,
    title: "Turnkey Heavy Cargo Logistics Fleet",
    category: "logistics",
    categoryLabel: "Logistics & Transport",
    location: "Ras Tanura Port",
    image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Multi-axle lowbed transport for out-of-gauge oilfield structures.",
  },
  {
    id: 5,
    title: "Structural Steel Framework Erection",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Khobar Commercial Hub",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "High-elevation crane lifting and bolting of heavy industrial steel trusses.",
  },
  {
    id: 6,
    title: "Crawler Crane Tandem Lifting",
    category: "machinery",
    categoryLabel: "Heavy Equipment",
    location: "Yanbu Industrial Complex",
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Synchronized dual-crane lift for pre-assembled modular reactor vessels.",
  },
  {
    id: 7,
    title: "Substation Electromechanical Systems",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Dhahran Central Hub",
    image: "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Installation of high-voltage transformers, switchgears, and SCADA cabling.",
  },
  {
    id: 8,
    title: "Bulk Cement & Dry Material Hauling",
    category: "logistics",
    categoryLabel: "Logistics & Transport",
    location: "Riyadh Logistics Corridor",
    image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Continuous supply line of bulk transport tankers for infrastructure mega-projects.",
  },
  {
    id: 9,
    title: "High-Load Concrete Pouring Works",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Jeddah South Development",
    image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Monolithic foundation slab casting using twin boom concrete pumps.",
  },
  {
    id: 10,
    title: "Earthmoving Bull-Dozer Fleet",
    category: "machinery",
    categoryLabel: "Heavy Equipment",
    location: "NEOM Logistics Sector",
    image: "https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Heavy-duty CAT D9 dozers performing rough desert terrain leveling.",
  },
  {
    id: 11,
    title: "Industrial Storage Tank Fabrication",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Ras Al Khair Industrial Port",
    image: "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Automated arc submerged welding for vertical crude oil storage tanks.",
  },
  {
    id: 12,
    title: "Port Logistics Container Handling",
    category: "logistics",
    categoryLabel: "Logistics & Transport",
    location: "King Abdulaziz Port, Dammam",
    image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Intermodal freight transfer and containerized equipment transit handling.",
  },

  // Page 2 Items (13 - 24)
  {
    id: 13,
    title: "Expressway Asphalting & Road Cutting",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Eastern Province Highway",
    image: "https://images.pexels.com/photos/2209529/pexels-photo-2209529.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Hot-mix asphalt paving, vibratory soil compaction, and shoulder grading.",
  },
  {
    id: 14,
    title: "Wheel Loader Quarry Operations",
    category: "machinery",
    categoryLabel: "Heavy Equipment",
    location: "Al Ahsa Crushing Plant",
    image: "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Aggregate loading and raw materials transfer with high-capacity front loaders.",
  },
  {
    id: 15,
    title: "Process Plant Cooling Towers Overhaul",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Jubail Phase 2",
    image: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Turnaround & inspection (T&I) servicing of industrial evaporative towers.",
  },
  {
    id: 16,
    title: "Multi-Trailer Rig Mobilization",
    category: "logistics",
    categoryLabel: "Logistics & Transport",
    location: "Ghawar Field Outpost",
    image: "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Desert convoys shifting drilling components across remote oil concession sites.",
  },
  {
    id: 17,
    title: "Flyover & Overpass Girder Placement",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Riyadh Metro Intersection",
    image: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Installation of pre-stressed concrete bridge girders with precision rigging.",
  },
  {
    id: 18,
    title: "Telescopic Mobile Cranes Onsite",
    category: "machinery",
    categoryLabel: "Heavy Equipment",
    location: "Dammam Port Terminal",
    image: "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "150-ton all-terrain Liebherr crane providing quick turnaround staging.",
  },
  {
    id: 19,
    title: "Cross-Country Pipeline Welding",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Haradh Desert Sector",
    image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "NDT inspected girth weld joints across 48-inch steel transmission pipeline.",
  },
  {
    id: 20,
    title: "Central Logistics Staging Depot",
    category: "logistics",
    categoryLabel: "Logistics & Transport",
    location: "Al Khobar Logistics Park",
    image: "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Secure, paved 50,000 m² open yard staging and dispatch command center.",
  },
  {
    id: 21,
    title: "Commercial High-Rise Core Pour",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Khobar Corniche",
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Slipform climbing system executing vertical lift for skyscraper elevator shafts.",
  },
  {
    id: 22,
    title: "Asphalt Finishing & Compactor Units",
    category: "machinery",
    categoryLabel: "Heavy Equipment",
    location: "Qatif Urban Renewal",
    image: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Vögele track pavers paired with Hamm dual steel drum rollers for flawless road finishes.",
  },
  {
    id: 23,
    title: "Refinery Flare Stack Maintenance",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Safaniya Onshore Plant",
    image: "https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-162568.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Critical replacement of flare tips and ignition lines during scheduled turnaround.",
  },
  {
    id: 24,
    title: "Overnight Project Cargo Delivery",
    category: "logistics",
    categoryLabel: "Logistics & Transport",
    location: "Jafurah Basin",
    image: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Dedicated GPS-tracked transport convoys delivering urgent parts to site on schedule.",
  },

  // Page 3 Items (25 - 36)
  {
    id: 25,
    title: "Steel Warehouse Structure Fabrication",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Dammam 2nd Industrial City",
    image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Pre-engineered metal building frames with insulated sandwich panel envelopes.",
  },
  {
    id: 26,
    title: "Trench Digging & Deep Shoring",
    category: "machinery",
    categoryLabel: "Heavy Equipment",
    location: "Jubail Desalination Route",
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Long-reach excavator excavating stable underground conduits through sandy soil.",
  },
  {
    id: 27,
    title: "Water Treatment Valve Manifold",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Al Khobar Desalination",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Stainless steel piping and pneumatic actuator valve array for potable water network.",
  },
  {
    id: 28,
    title: "Heavy Equipment Low-Bed Convoy",
    category: "logistics",
    categoryLabel: "Logistics & Transport",
    location: "Route 613 Expressway",
    image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Transport of drilling rigs and heavy crawlers with escort vehicle coordination.",
  },
  {
    id: 29,
    title: "Precast Concrete Culvert Placement",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Hofuf Drainage Project",
    image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Stormwater box culvert installation and sealed interlocking joint assembly.",
  },
  {
    id: 30,
    title: "High-Reach Boom Lift Installation",
    category: "machinery",
    categoryLabel: "Heavy Equipment",
    location: "Al Ula Cultural Center",
    image: "https://images.pexels.com/photos/1647903/pexels-photo-1647903.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Articulated boom lifts providing safe aerial access for high-elevation cladding works.",
  },
  {
    id: 31,
    title: "High-Voltage Solar Utility Array",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Sudair Solar Project",
    image: "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Inverter station installation and medium-voltage grid interconnect civil works.",
  },
  {
    id: 32,
    title: "Site Supply & Portable Office Mobilization",
    category: "logistics",
    categoryLabel: "Logistics & Transport",
    location: "Tanajib Coastal Zone",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Rapid delivery and assembly of turnkey modular site offices and ablution units.",
  },
  {
    id: 33,
    title: "Heavy Foundation Piling Rig",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "King Salman Maritime Yard",
    image: "https://images.pexels.com/photos/280014/pexels-photo-280014.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Rotary drilling rigs creating deep cast-in-situ concrete piles for marine wharfs.",
  },
  {
    id: 34,
    title: "Telecommunication Tower Erection",
    category: "industrial",
    categoryLabel: "Mechanical & Industrial",
    location: "Eastern Region Desert",
    image: "https://images.pexels.com/photos/4488636/pexels-photo-4488636.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Guyed lattice mast assembly, grounding arrays, and microwave antenna rigging.",
  },
  {
    id: 35,
    title: "Site Survey & Engineering Coordination",
    category: "civil",
    categoryLabel: "Civil & Infrastructure",
    location: "Dhahran Aramco Compound",
    image: "https://images.pexels.com/photos/2219035/pexels-photo-2219035.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Total station laser topography and geotechnical survey for civil site preparation.",
  },
  {
    id: 36,
    title: "Fleet Maintenance Facility Yard",
    category: "logistics",
    categoryLabel: "Logistics & Transport",
    location: "Al Attaf Central Workshops",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Preventative diagnostics, hydraulic testing, and certified safety recertifications.",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "civil", label: "Civil & Infrastructure" },
  { id: "machinery", label: "Heavy Equipment" },
  { id: "industrial", label: "Mechanical & Industrial" },
  { id: "logistics", label: "Logistics & Transport" },
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
            <ScrollRevealText
              text="High-resolution snapshots from our civil contracting sites, heavy machinery fleet, process fabrication facilities, and nationwide logistics convoys."
              as="p"
              className="mt-2 text-xs sm:text-sm md:text-base font-medium max-w-2xl leading-relaxed"
            />
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

        {/* Category Filter Pills: Horizontally scrollable on mobile, wrapping on sm+ */}
        <div className="-mx-4 sm:mx-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 py-4 sm:py-6 md:py-8 sm:flex-wrap px-4 sm:px-0">
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
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 sm:shrink cursor-pointer ${
                    isActive
                      ? "bg-blue-700 text-white shadow-md shadow-blue-600/25 scale-[1.02]"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
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
                className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[4/3] w-full"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
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
