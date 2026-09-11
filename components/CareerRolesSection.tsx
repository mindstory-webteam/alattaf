"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  ChevronDown,
  MapPin,
  Clock,
  Check,
  X,
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LiquidButton from "@/components/LiquidButton";
import Reveal from "@/components/Reveal";

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
    id: "civil-site-sup",
    title: "Civil Site Works Supervisor",
    department: "Civil",
    deptSlug: "civil",
    location: "Jubail Industrial City",
    type: "Full-Time",
    experience: "4 - 7 Years",
    overview:
      "Supervise daily civil excavation teams, formwork erection, rebar tying crews, and structural concrete pouring operations.",
    responsibilities: [
      "Conduct morning toolbox talks and enforce trench shoring and excavation barricades.",
      "Inspect rebar tie-ups and embedments prior to official QA/QC witness inspection.",
      "Track machinery hours, materials consumption, and maintain daily site logs.",
      "Resolve on-site logistical and constructability bottlenecks.",
    ],
    requirements: [
      "Diploma in Civil Engineering or 6+ years hands-on supervision background.",
      "Strong understanding of construction safety standards (GI standards).",
      "Valid Saudi driving license.",
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
    id: "civil-surveyor",
    title: "Chief Land Surveyor (Total Station & GPS)",
    department: "Civil",
    deptSlug: "civil",
    location: "Dammam & Khobar",
    type: "Full-Time",
    experience: "5 - 8 Years",
    overview:
      "Perform precision topography, site benchmarks, elevation control, and coordinate setting-out for industrial building frames and infrastructure routes.",
    responsibilities: [
      "Operate Leica / Trimble Total Stations, Digital Levels, and RTK GPS receivers.",
      "Verify pipeline alignments, road cut/fill volumes, and building foundation centerlines.",
      "Export raw survey data into AutoCAD Civil 3D for as-built drawing verification.",
    ],
    requirements: [
      "Degree or Diploma in Geodetic Surveying or Civil Engineering.",
      "Proficient in AutoCAD Civil 3D and survey data post-processing.",
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
    id: "mech-hvac-eng",
    title: "Industrial HVAC & Cooling Systems Engineer",
    department: "Mechanical",
    deptSlug: "mechanical",
    location: "Eastern Province",
    type: "Full-Time",
    experience: "4 - 7 Years",
    overview:
      "Oversee cooling tower overhauls, industrial chiller maintenance, ductwork fabrication, and air handling unit (AHU) installations across enterprise sites.",
    responsibilities: [
      "Execute Turnaround & Inspection (T&I) overhauls on cooling towers and central chillers.",
      "Perform air balancing, refrigerant leak checks, and motor vibration diagnostics.",
      "Procure OEM spare parts and monitor scheduled preventative maintenance.",
    ],
    requirements: [
      "B.Sc. in Mechanical Engineering with HVAC & refrigeration specialization.",
      "Hands-on background with industrial water-cooled chillers (Carrier, Trane, York).",
    ],
  },
  {
    id: "fleet-maint-sup",
    title: "Heavy Machinery Maintenance Supervisor",
    department: "Fleet & Ops",
    deptSlug: "fleet",
    location: "Dammam & Khobar",
    type: "Full-Time",
    experience: "5 - 8 Years",
    overview:
      "Manage preventative maintenance, diagnostics, and repairs across our heavy plant inventory including CAT excavators, bulldozers, wheel loaders, and mobile cranes.",
    responsibilities: [
      "Direct mechanical and auto-electrical technicians in shop floor and remote field repairs.",
      "Diagnose hydraulic pressures, hydrostatic transmissions, and CAT/Cummins diesel engines.",
      "Oversee third-party safety inspections (TPI) and Saudi Aramco equipment sticker validations.",
    ],
    requirements: [
      "Degree or Diploma in Mechanical / Automotive Engineering.",
      "Deep experience troubleshooting Caterpillar, Komatsu, and Liebherr equipment.",
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
    id: "qhse-env-eng",
    title: "Environmental Monitoring & Waste Management Officer",
    department: "QHSE & Safety",
    deptSlug: "qhse",
    location: "Jubail Industrial City",
    type: "Full-Time",
    experience: "4 - 7 Years",
    overview:
      "Monitor site emissions, soil contamination controls, hazardous chemical storage, and industrial wastewater disposal compliance.",
    responsibilities: [
      "Implement site Environmental Management Plans (EMP) aligned with National Environmental standards.",
      "Conduct regular audits on chemical secondary containments, dust suppression, and spill response kits.",
      "Interface with Royal Commission / EPA inspectors during routine environmental audits.",
    ],
    requirements: [
      "Bachelor's Degree in Environmental Science / Chemical Engineering.",
      "Experience with industrial waste disposal procedures and environmental permits in KSA.",
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
  {
    id: "logistics-proc-spec",
    title: "Project Procurement & Materials Specialist",
    department: "Logistics",
    deptSlug: "logistics",
    location: "Riyadh",
    type: "Full-Time",
    experience: "5 - 8 Years",
    overview:
      "Source structural steel, concrete additives, heavy machinery spares, and industrial equipment from approved Saudi Aramco vendor lists.",
    responsibilities: [
      "Negotiate commercial terms, volume discounts, and payment milestones with local suppliers.",
      "Issue Purchase Orders, monitor expedited deliveries, and verify material test reports (MTR).",
      "Liaise with site stores for inventory receipts and reconciliation.",
    ],
    requirements: [
      "Bachelor's degree in Business, Supply Chain, or Engineering.",
      "Extensive knowledge of vendor procurement ecosystems in Saudi Arabia.",
    ],
  },
];

export default function CareerRolesSection() {
  const [activeDept, setActiveDept] = useState("all");
  const [activeLocation, setActiveLocation] = useState("All Locations");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>(null);

  // Modal Application Form State
  const [selectedJobForModal, setSelectedJobForModal] = useState<JobListing | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedJobForModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedJobForModal]);

  const handleOpenApplyModal = (job: JobListing, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedJobForModal(job);
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      message: "",
    });
    setResumeFile(null);
    setIsSubmitting(false);
    setIsSubmitted(false);
    setFormError("");
  };

  const handleCloseModal = () => {
    setSelectedJobForModal(null);
    setIsSubmitted(false);
    setFormError("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setFormError("File size exceeds 10MB limit. Please upload a smaller file.");
        return;
      }
      setResumeFile(file);
      setFormError("");
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.mobile.trim()) {
      setFormError("Please fill in all required fields.");
      return;
    }
    if (!resumeFile) {
      setFormError("Please upload your resume (PDF or DOCX).");
      return;
    }

    setFormError("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };



  // Department counts
  const deptCounts = useMemo(() => {
    const counts: Record<string, number> = { all: jobsData.length };
    departmentsList.forEach((d) => {
      if (d.slug !== "all") {
        counts[d.slug] = jobsData.filter((j) => j.deptSlug === d.slug).length;
      }
    });
    return counts;
  }, []);

  // Filtered Roles
  const filteredRoles = useMemo(() => {
    return jobsData.filter((job) => {
      const matchDept = activeDept === "all" || job.deptSlug === activeDept;
      const matchLoc =
        activeLocation === "All Locations" ||
        job.location.toLowerCase().includes(activeLocation.toLowerCase()) ||
        (activeLocation === "Eastern Province" &&
          (job.location === "Abqaiq" ||
            job.location === "Jubail Industrial City" ||
            job.location === "Dammam & Khobar" ||
            job.location === "Ras Tanura" ||
            job.location === "Eastern Province"));
      return matchDept && matchLoc;
    });
  }, [activeDept, activeLocation]);



  return (
    <div className="w-full mt-10">
      {/* 1. Sleek Tab Bar & Location Dropdown (Matching Screenshot Design) */}
      <div className="w-full border-b border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Left: Department Tabs with Counts & Active Underline */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {departmentsList.map((dept) => {
              const isActive = activeDept === dept.slug;
              const count = deptCounts[dept.slug] ?? 0;

              return (
                <button
                  key={dept.slug}
                  onClick={() => setActiveDept(dept.slug)}
                  className={`relative py-3.5 text-sm sm:text-base font-semibold flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer ${
                    isActive
                      ? "text-slate-900 font-bold"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <span>{dept.label}</span>
                  <span
                    className={`text-xs font-normal transition-colors ${
                      isActive ? "text-slate-600 font-semibold" : "text-slate-400"
                    }`}
                  >
                    {count}
                  </span>

                  {/* Active Tab Underline Indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-900 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: All Locations Pill Dropdown */}
          <div className="relative shrink-0 pb-3 sm:pb-0">
            <button
              onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
              className="flex items-center justify-between gap-2.5 px-4 py-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm text-slate-700 font-medium transition-all shadow-2xs cursor-pointer min-w-[140px]"
            >
              <span>{activeLocation}</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                  isLocationDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isLocationDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl py-1.5 z-30">
                {locationsList.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setActiveLocation(loc);
                      setIsLocationDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs sm:text-sm transition-colors flex items-center justify-between cursor-pointer ${
                      activeLocation === loc
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{loc}</span>
                    {activeLocation === loc && <Check className="w-3.5 h-3.5 text-blue-700" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Department-Wise Career Details & Roles List */}
      <div className="py-8 sm:py-10 space-y-4">
        {filteredRoles.map((job, idx) => {
          const isExpanded = expandedRoleId === job.id;

          return (
            <Reveal key={job.id} delay={Math.min(idx, 4) * 60}>
              <div
                className={`rounded border transition-all duration-300 bg-white overflow-hidden ${
                  isExpanded
                    ? "border-blue-300 shadow-md ring-1 ring-blue-100/80"
                    : "border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-sm"
                }`}
              >
              {/* Role Header Row */}
              <div
                onClick={() => setExpandedRoleId(isExpanded ? null : job.id)}
                className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      {job.experience}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <span className="w-1 h-1 rounded-full bg-slate-400" />
                      <span>{job.type}</span>
                    </span>
                  </div>
                </div>

                {/* Apply Button & Expand Arrow */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-3 self-start md:self-center shrink-0"
                >
                  <LiquidButton
                    text="Apply Now"
                    onClick={() => setExpandedRoleId(isExpanded ? null : job.id)}
                    btnColor="#1d4ed8"
                    hoverBgColor="#ffffff"
                    textColor="#ffffff"
                    hoverTextColor="#1d4ed8"
                    className="px-4 py-2 text-xs sm:text-sm rounded font-semibold border border-blue-700 shadow-sm"
                  />

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedRoleId(isExpanded ? null : job.id);
                    }}
                    aria-label="Toggle details"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Accordion Details: Role Overview, Responsibilities, Requirements */}
              {isExpanded && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-slate-100 bg-slate-50/40 space-y-5">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Position Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {job.overview}
                    </p>
                  </div>

                  {/* 2 Column Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-1">
                    <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2.5">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        Core Responsibilities
                      </h5>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2.5">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        Candidate Requirements
                      </h5>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Direct Apply Button inside card */}
                  <div className="pt-2 flex justify-end">
                    <LiquidButton
                      text={`Apply for ${job.title}`}
                      onClick={() => handleOpenApplyModal(job)}
                      btnColor="#1d4ed8"
                      hoverBgColor="#ffffff"
                      textColor="#ffffff"
                      hoverTextColor="#1d4ed8"
                      className="px-5 py-2 text-xs sm:text-sm rounded font-semibold border border-blue-700 shadow-sm"
                    />
                  </div>
                </div>
              )}
            </div>
            </Reveal>
          );
        })}

        {filteredRoles.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-600 text-sm font-medium">
              No open roles found for {activeDept !== "all" ? activeDept : ""} in{" "}
              {activeLocation}.
            </p>
            <button
              onClick={() => {
                setActiveDept("all");
                setActiveLocation("All Locations");
              }}
              className="mt-3 px-4 py-2 rounded-xl bg-blue-700 text-white text-xs font-semibold hover:bg-blue-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Pop-up Modal Form */}
      <AnimatePresence>
        {selectedJobForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto"
            >
              {/* Modal Header */}
              <div className="px-6 pt-6 pb-4 sm:px-8 sm:pt-7 border-b border-slate-100 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Apply for Position
                  </h3>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium flex flex-wrap items-center gap-x-2">
                    <span className="text-blue-700 font-semibold">{selectedJobForModal.title}</span>
                    <span>•</span>
                    <span>{selectedJobForModal.department}</span>
                    <span>•</span>
                    <span>{selectedJobForModal.location}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  aria-label="Close modal"
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="px-6 py-6 sm:px-8 max-h-[calc(85vh-140px)] overflow-y-auto">
                {isSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-xl font-bold text-slate-900">Application Submitted!</h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your application for{" "}
                        <strong className="text-blue-700">{selectedJobForModal.title}</strong> has been received. Our recruitment committee will review your credentials and contact you shortly.
                      </p>
                    </div>
                    <div className="pt-4 flex justify-center">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors cursor-pointer"
                      >
                        Done & Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitApplication} className="space-y-4 sm:space-y-5">
                    {formError && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{formError}</span>
                      </div>
                    )}

                    {/* Full Name * */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Abdullah Al-Ghamdi"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Email Address * & Mobile * */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email Address * */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white transition-all"
                        />
                      </div>

                      {/* Mobile * */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Mobile <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          placeholder="e.g. +966 5X XXX XXXX"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Message <span className="text-slate-400 text-xs normal-case font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Key Aramco/SCE approvals, notice period, or remarks..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white transition-all resize-none"
                      />
                    </div>

                    {/* Resume * */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Resume <span className="text-red-500">*</span>
                      </label>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />

                      {resumeFile ? (
                        <div className="flex items-center justify-between p-3.5 rounded-xl border border-blue-200 bg-blue-50/60">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-slate-900 truncate">
                                {resumeFile.name}
                              </p>
                              <p className="text-[11px] text-slate-500">
                                {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setResumeFile(null);
                              if (fileInputRef.current) fileInputRef.current.value = "";
                            }}
                            className="text-xs text-red-600 hover:text-red-700 font-semibold px-2 py-1 rounded-md hover:bg-red-50 cursor-pointer transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-2xl p-5 text-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-blue-50/30 group"
                        >
                          <UploadCloud className="w-7 h-7 text-slate-400 group-hover:text-blue-600 mx-auto mb-1.5 transition-colors" />
                          <p className="text-xs font-bold text-slate-700 group-hover:text-blue-700 transition-colors">
                            Click to attach your Resume (PDF or DOCX)
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Maximum size: 10MB
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 [&>button]:w-full">
                      <LiquidButton
                        text={isSubmitting ? "Submitting Application..." : "Submit Application"}
                        type="submit"
                        btnColor="#1d4ed8"
                        hoverBgColor="#1e40af"
                        textColor="#ffffff"
                        hoverTextColor="#ffffff"
                        className="w-full py-3 text-xs sm:text-sm rounded-xl font-bold shadow-md cursor-pointer justify-center"
                      />
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
