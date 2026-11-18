"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  ChevronDown,
  MapPin,
  Clock,
  Check,
  X,
  Briefcase,
  SlidersHorizontal,
  RotateCcw,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LiquidButton from "@/components/LiquidButton";
import Reveal from "@/components/Reveal";
import ApplicationForm from "@/components/ApplicationForm";

export interface JobListing {
  id: string;
  title: string;
  department: string;
  deptSlug: string;
  location: string;
  type: string;
  experience: string;
  aramcoApproved?: boolean;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

const departmentsList = [
  { slug: "all", label: "All" },
  { slug: "civil", label: "Civil" },
  { slug: "mechanical", label: "Mechanical" },
  { slug: "fleet", label: "Fleet & Ops" },
  { slug: "qhse", label: "QHSE & Safety" },
  { slug: "logistics", label: "Logistics" },
];

const locationsList = [
  "All Locations",
  "Eastern Province",
  "Abqaiq",
  "Jubail Industrial City",
  "Dammam & Khobar",
  "Ras Tanura",
  "Riyadh",
];

const jobsData: JobListing[] = [
  {
    id: "civil-sr-eng",
    title: "Senior Civil Project Engineer",
    department: "Civil",
    deptSlug: "civil",
    location: "Abqaiq",
    type: "Full-Time",
    experience: "7 - 10 Years",
    aramcoApproved: true,
    overview:
      "Direct heavy civil construction packages including foundation works, reinforced slabs, substation trenches, and structural earthworks across Saudi Aramco vendor projects.",
    responsibilities: [
      "Review structural IFC drawings and bar-bending schedules in compliance with Aramco / SCE standards.",
      "Liaise with client site inspectors for pre-pour witness points and soil compaction sign-offs.",
      "Coordinate concrete batching plant schedules and supervise structural pour sequences.",
      "Monitor daily subcontractor production and enforce site execution milestones.",
    ],
    requirements: [
      "B.Sc. in Civil Engineering with active Saudi Council of Engineers (SCE) accreditation.",
      "Minimum 7 years of industrial civil contracting experience in Saudi Arabia.",
      "Transferable Iqama (expatriates) or Saudi National.",
    ],
  },
  {
    id: "civil-qaqc-insp",
    title: "Civil QA/QC Inspector",
    department: "Civil",
    deptSlug: "civil",
    location: "Eastern Province",
    type: "Full-Time",
    experience: "5 - 8 Years",
    aramcoApproved: true,
    overview:
      "Inspect civil materials, pre-pour alignments, soil compaction tests, and concrete slump test reports in strict accordance with project specifications.",
    responsibilities: [
      "Witness in-situ field density tests (FDT), concrete core tests, and cylinder compressive testing.",
      "Issue, track, and close Non-Conformance Reports (NCR) with subcontractors.",
      "Prepare final inspection dossiers and handover test packages.",
    ],
    requirements: [
      "Certified Civil QA/QC Inspector with valid Aramco SAP approval card.",
      "Strong knowledge of ASTM, ACI, and Saudi building codes.",
    ],
  },
  {
    id: "mech-pipe-eng",
    title: "Mechanical Piping & Erection Engineer",
    department: "Mechanical",
    deptSlug: "mechanical",
    location: "Jubail Industrial City",
    type: "Full-Time",
    experience: "6 - 9 Years",
    aramcoApproved: true,
    overview:
      "Lead industrial piping fabrication, spool fit-up, NDT examination, hydrotesting, and heavy structural steel erection for petrochemical process units.",
    responsibilities: [
      "Supervise carbon steel and stainless steel process piping spools per ASME B31.3.",
      "Coordinate non-destructive examinations (RT, UT, MPI, DPI) with certified third-party testing labs.",
      "Design and execute line flushing, test manifold setup, and hydrotest punch-lists.",
      "Verify isometric drawings and sign off on test packages with client QC.",
    ],
    requirements: [
      "B.Sc. in Mechanical Engineering with SCE membership.",
      "Solid experience in oil/gas, refinery, or petrochemical piping execution in KSA.",
      "Proficient in reading P&IDs and isometric drawings.",
    ],
  },
  {
    id: "mech-welding-qc",
    title: "Welding & Piping QC Inspector (CSWIP / AWS)",
    department: "Mechanical",
    deptSlug: "mechanical",
    location: "Ras Tanura",
    type: "Full-Time",
    experience: "5 - 8 Years",
    aramcoApproved: true,
    overview:
      "Verify welder qualifications, supervise fit-up, root pass inspections, preheat/PWHT temperatures, and oversee radiographic film interpretation.",
    responsibilities: [
      "Ensure welding conforms strictly to approved Welding Procedure Specifications (WPS/PQR).",
      "Inspect fit-up gaps, bevel angles, root passes, and final weld capping.",
      "Review radiographic films and compile weekly weld rejection rate metrics.",
    ],
    requirements: [
      "CSWIP 3.1 or AWS CWI certification.",
      "Saudi Aramco approved inspector status is strongly preferred.",
    ],
  },
  {
    id: "fleet-crane-sup",
    title: "Heavy Rigging & Crane Operations Supervisor",
    department: "Fleet & Ops",
    deptSlug: "fleet",
    location: "Abqaiq",
    type: "Full-Time",
    experience: "6 - 10 Years",
    aramcoApproved: true,
    overview:
      "Plan and oversee heavy tandem crane lifts, crane ground bearing pressure verifications, rigging gear inspection, and lift safety plans.",
    responsibilities: [
      "Calculate crane capacity deductions, ground matting, and authored critical lift plans.",
      "Inspect wire rope slings, shackles, spreader beams, and load charts before any lift.",
      "Direct certified crane operators and riggers during high-risk installation jobs.",
    ],
    requirements: [
      "Saudi Aramco Rigger Level I / Level II certified.",
      "Minimum 6 years supervising mobile telescopic and crawler crane operations in KSA.",
    ],
  },
  {
    id: "qhse-safety-off",
    title: "QHSE Safety & Compliance Officer",
    department: "QHSE & Safety",
    deptSlug: "qhse",
    location: "Abqaiq",
    type: "Full-Time",
    experience: "3 - 6 Years",
    aramcoApproved: true,
    overview:
      "Enforce Zero Incident safety culture, issue Hot/Cold Work Permits, monitor environmental compliance, and conduct risk assessments on site.",
    responsibilities: [
      "Conduct daily safety walks, monitor air quality in confined spaces, and audit scaffolding tags.",
      "Lead toolbox talks, hazard identification drills, and near-miss investigation reports.",
      "Ensure all project activities comply with ISO 45001 / ISO 14001 guidelines.",
    ],
    requirements: [
      "NEBOSH IGC or OSHA 30 certification.",
      "Saudi Aramco Work Permit Receiver (WPR) or approved safety officer credentials.",
    ],
  },
  {
    id: "logistics-coord",
    title: "Heavy Transport & Dispatch Coordinator",
    department: "Logistics",
    deptSlug: "logistics",
    location: "Dammam & Khobar",
    type: "Full-Time",
    experience: "4 - 7 Years",
    overview:
      "Manage lowbed trailers, flatbeds, and heavy haulage convoys, obtaining highway route permits and coordinating time-sensitive deliveries across KSA.",
    responsibilities: [
      "Schedule daily multi-axle trailer dispatches and coordinate police escort permits for oversize cargo.",
      "Track live GPS status of cargo fleets and optimize transit delivery turnaround times.",
      "Maintain vehicle inspection logs and drivers' commercial licensing documentation.",
    ],
    requirements: [
      "Degree in Logistics / Supply Chain Management or relevant commercial field.",
      "Bilingual in Arabic and English is preferred for liaising with transport authorities.",
    ],
  },
];

const EASTERN_PROVINCE_CITIES = [
  "Abqaiq",
  "Jubail Industrial City",
  "Dammam & Khobar",
  "Ras Tanura",
  "Eastern Province",
];

export default function CareerRolesSection() {
  const [activeDept, setActiveDept] = useState("all");
  const [activeLocation, setActiveLocation] = useState("All Locations");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>(null);
  const [selectedJobForModal, setSelectedJobForModal] = useState<JobListing | null>(null);
  const locationRef = useRef<HTMLDivElement | null>(null);

  /* Lock background scroll + close on Escape while modal is open */
  useEffect(() => {
    if (!selectedJobForModal) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedJobForModal(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedJobForModal]);

  /* Close location dropdown on outside click */
  useEffect(() => {
    if (!isLocationDropdownOpen) return;
    const onClick = (e: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) {
        setIsLocationDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isLocationDropdownOpen]);

  const handleOpenApplyModal = (job: JobListing) => setSelectedJobForModal(job);
  const handleCloseModal = () => setSelectedJobForModal(null);

  const resetFilters = () => {
    setActiveDept("all");
    setActiveLocation("All Locations");
  };

  /* Department counts */
  const deptCounts = useMemo(() => {
    const counts: Record<string, number> = { all: jobsData.length };
    departmentsList.forEach((d) => {
      if (d.slug !== "all") {
        counts[d.slug] = jobsData.filter((j) => j.deptSlug === d.slug).length;
      }
    });
    return counts;
  }, []);

  /* Filtered roles */
  const filteredRoles = useMemo(() => {
    return jobsData.filter((job) => {
      const matchDept = activeDept === "all" || job.deptSlug === activeDept;
      const matchLoc =
        activeLocation === "All Locations" ||
        job.location.toLowerCase().includes(activeLocation.toLowerCase()) ||
        (activeLocation === "Eastern Province" &&
          EASTERN_PROVINCE_CITIES.includes(job.location));
      return matchDept && matchLoc;
    });
  }, [activeDept, activeLocation]);

  const activeDeptLabel =
    departmentsList.find((d) => d.slug === activeDept)?.label ?? "All";
  const hasActiveFilters = activeDept !== "all" || activeLocation !== "All Locations";

  return (
    <div className="w-full mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      {/* ───────────── LEFT: Filter Sidebar ───────────── */}
      <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24 space-y-4">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <SlidersHorizontal className="w-4 h-4 text-blue-700" />
              Filter Roles
            </div>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
          </div>

          <div className="p-5 space-y-5">
            {/* Department */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Department
              </p>
              <div className="flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto no-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0">
                {departmentsList.map((dept) => {
                  const isActive = activeDept === dept.slug;
                  const count = deptCounts[dept.slug] ?? 0;
                  return (
                    <button
                      key={dept.slug}
                      type="button"
                      onClick={() => setActiveDept(dept.slug)}
                      className={`shrink-0 flex items-center justify-between gap-3 rounded-lg px-3.5 py-2 lg:py-2.5 text-sm font-semibold transition-all cursor-pointer border lg:border-0 ${
                        isActive
                          ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                          : "bg-white lg:bg-transparent text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span className="whitespace-nowrap">{dept.label}</span>
                      <span
                        className={`min-w-[22px] h-[22px] px-1.5 rounded-md text-[11px] font-bold flex items-center justify-center ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Location
              </p>
              <div ref={locationRef} className="relative">
                <button
                  type="button"
                  onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                  aria-expanded={isLocationDropdownOpen}
                  className={`w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg border bg-white text-sm text-slate-700 font-medium transition-all cursor-pointer ${
                    isLocationDropdownOpen
                      ? "border-blue-600 ring-2 ring-blue-600/15"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="truncate">{activeLocation}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isLocationDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isLocationDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 z-30"
                    >
                      {locationsList.map((loc) => (
                        <button
                          key={loc}
                          type="button"
                          onClick={() => {
                            setActiveLocation(loc);
                            setIsLocationDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2 text-sm transition-colors flex items-center justify-between cursor-pointer ${
                            activeLocation === loc
                              ? "bg-blue-50 text-blue-700 font-semibold"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <span>{loc}</span>
                          {activeLocation === loc && <Check className="w-3.5 h-3.5 text-blue-700" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

      </aside>

      {/* ───────────── RIGHT: Roles List ───────────── */}
      <div className="lg:col-span-8 xl:col-span-9 min-w-0">
        {/* Results bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <p className="text-sm text-slate-600">
            Showing <span className="font-bold text-slate-900">{filteredRoles.length}</span>{" "}
            {filteredRoles.length === 1 ? "role" : "roles"}
            {activeDept !== "all" && (
              <>
                {" "}in <span className="font-semibold text-slate-900">{activeDeptLabel}</span>
              </>
            )}
            {activeLocation !== "All Locations" && (
              <>
                {" "}at <span className="font-semibold text-slate-900">{activeLocation}</span>
              </>
            )}
          </p>

          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2">
              {activeDept !== "all" && (
                <button
                  type="button"
                  onClick={() => setActiveDept("all")}
                  className="flex items-center gap-1.5 pl-3 pr-2 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  {activeDeptLabel}
                  <X className="w-3 h-3" />
                </button>
              )}
              {activeLocation !== "All Locations" && (
                <button
                  type="button"
                  onClick={() => setActiveLocation("All Locations")}
                  className="flex items-center gap-1.5 pl-3 pr-2 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  {activeLocation}
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          )}
        </div>

        <div className="space-y-3 sm:space-y-4">
          {filteredRoles.map((job, idx) => {
            const isExpanded = expandedRoleId === job.id;
            const toggle = () => setExpandedRoleId(isExpanded ? null : job.id);

            return (
              <Reveal key={job.id} delay={Math.min(idx, 4) * 60}>
                <article
                  className={`relative rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
                    isExpanded
                      ? "border-slate-200/90 shadow-lg shadow-slate-900/5"
                      : "border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* Header row */}
                  <div
                    onClick={toggle}
                    className="p-5 sm:p-6 cursor-pointer select-none flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
                  >
                    <div className="flex-1 min-w-0 space-y-2.5">
                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          <Building2 className="w-3 h-3" />
                          {job.department}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs sm:text-[13px] text-slate-500 font-medium">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          {job.type}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2.5 shrink-0"
                    >
                      <LiquidButton
                        text="Apply Now"
                        onClick={() => handleOpenApplyModal(job)}
                        btnColor="#1d4ed8"
                        hoverBgColor="#ffffff"
                        textColor="#ffffff"
                        hoverTextColor="#1d4ed8"
                        className="px-5 py-2.5 text-xs sm:text-sm rounded-lg font-semibold border border-blue-700 shadow-sm"
                      />
                      <button
                        type="button"
                        onClick={toggle}
                        aria-label={isExpanded ? "Hide details" : "View details"}
                        aria-expanded={isExpanded}
                        className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                          isExpanded
                            ? "border-blue-200 bg-blue-50 text-blue-700"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-5 border-t border-slate-100 bg-slate-50/50 space-y-5">
                          <div>
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                              Position Overview
                            </h4>
                            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
                              {job.overview}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
                              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
                                Core Responsibilities
                              </h5>
                              <ul className="space-y-2.5">
                                {job.responsibilities.map((resp, i) => (
                                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
                                    <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                                      <Check className="w-2.5 h-2.5" strokeWidth={3} />
                                    </span>
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
                              <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                                Candidate Requirements
                              </h5>
                              <ul className="space-y-2.5">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
                                    <span className="mt-0.5 w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                                      <Check className="w-2.5 h-2.5" strokeWidth={3} />
                                    </span>
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                            <p className="text-xs text-slate-500">
                              Ready to apply? It takes less than 2 minutes.
                            </p>
                            <LiquidButton
                              text={`Apply for ${job.title}`}
                              onClick={() => handleOpenApplyModal(job)}
                              btnColor="#1d4ed8"
                              hoverBgColor="#1e40af"
                              textColor="#ffffff"
                              hoverTextColor="#ffffff"
                              className="px-5 py-2.5 text-xs sm:text-sm rounded-lg font-semibold border border-blue-700 shadow-sm cursor-pointer"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}

          {/* Empty state */}
          {filteredRoles.length === 0 && (
            <div className="px-6 py-14 text-center bg-white rounded-2xl border border-dashed border-slate-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
                <Briefcase className="w-6 h-6" />
              </div>
              <p className="text-slate-900 text-sm font-bold">No open roles found</p>
              <p className="text-slate-500 text-sm mt-1">
                Nothing in {activeDept !== "all" ? activeDeptLabel : "any department"} at{" "}
                {activeLocation} right now.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-700 text-white text-xs font-semibold hover:bg-blue-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ───────────── Application Modal ───────────── */}
      <AnimatePresence>
        {selectedJobForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal card */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Apply for ${selectedJobForModal.title}`}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-5"
            >
              {/* Close */}
              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl flex items-center justify-center text-white/80 md:text-slate-400 hover:text-white md:hover:text-slate-700 bg-white/10 md:bg-transparent hover:bg-white/20 md:hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left: Job summary */}
              <div className="md:col-span-2 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white p-6 sm:p-8 md:overflow-y-auto">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200">
                  Apply for Position
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold leading-tight pr-10 md:pr-0">
                  {selectedJobForModal.title}
                </h3>

                <div className="mt-5 grid grid-cols-2 md:grid-cols-1 gap-2.5 text-sm">
                  {[
                    { icon: Building2, value: selectedJobForModal.department },
                    { icon: MapPin, value: selectedJobForModal.location },
                    { icon: Briefcase, value: selectedJobForModal.experience },
                    { icon: Clock, value: selectedJobForModal.type },
                  ].map(({ icon: Icon, value }) => (
                    <div key={value} className="flex items-center gap-2.5 text-blue-50">
                      <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-medium truncate">{value}</span>
                    </div>
                  ))}
                </div>


                <div className="hidden md:block mt-7 pt-6 border-t border-white/15">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-blue-200 mb-3">
                    Key Requirements
                  </p>
                  <ul className="space-y-2.5">
                    {selectedJobForModal.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-blue-50/90 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-200 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Form */}
              <div className="md:col-span-3 p-6 sm:p-8 overflow-y-auto max-h-[60vh] md:max-h-[92vh]">
                <ApplicationForm
                  key={selectedJobForModal.id}
                  jobTitle={selectedJobForModal.title}
                  showHeader={false}
                  onDone={handleCloseModal}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}