// app/data/services.ts

export type ServiceCategoryId = "construction" | "industrial";

export interface ServiceSection {
  heading: string;
  body: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  /** Short label used in menus / sidebars */
  navTitle: string;
  category: ServiceCategoryId;
  excerpt: string;
  intro: string;
  image: string;
  /** Wide banner image used by the Breadcrumb hero */
  heroImage: string;
  highlights: string[];
  sections: ServiceSection[];
  capabilities: string[];
  faqs: ServiceFaq[];
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  label: string;
  description: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "construction",
    label: "Engineering & Construction",
    description:
      "Turnkey civil, electrical, mechanical, and instrumentation contracting engineered to strict Saudi Aramco and industrial standards.",
  },
  {
    id: "industrial",
    label: "Specialized & Maintenance Systems",
    description:
      "Industrial fire & safety engineering, HVAC climate control, plant turnaround maintenance, and HCIS-compliant security systems for critical infrastructure.",
  },
];

/** Shared delivery process shown on every service page */
export const serviceProcess = [
  {
    step: "01",
    title: "Enquiry & site visit",
    body: "We review your scope, drawings and specifications, then walk the site to understand access, constraints and the working window.",
  },
  {
    step: "02",
    title: "Proposal & method statement",
    body: "You receive a priced proposal with a schedule, resource plan, method statement and the QA and safety documents the job requires.",
  },
  {
    step: "03",
    title: "Mobilisation",
    body: "Permits, gate passes, manpower, equipment and approved materials are arranged so work starts on the agreed date, not weeks after it.",
  },
  {
    step: "04",
    title: "Execution & handover",
    body: "Work is executed against the inspection plan, punch items are closed out, and handover includes test records and as-built documentation.",
  },
];

export const services: Service[] = [
  /* ------------------------------------------------------------------ */
  /* 1. Civil                                                           */
  /* ------------------------------------------------------------------ */
  {
    slug: "civil",
    title: "Civil",
    navTitle: "Civil",
    category: "construction",
    excerpt:
      "Earthworks, reinforced concrete foundations, structural framing, containment paving, and turnkey civil building construction for industrial facilities.",
    intro:
      "Al Attaf executes civil contracting packages end-to-end across Saudi Arabia—from mass excavation, dewatering, and shoring through heavy industrial equipment foundations, reinforced concrete framing, asphalt road paving, and structural maintenance. Executed under stringent Saudi Aramco and Royal Commission safety protocols.",
    image:
      "/civil/civil.png",
    heroImage:
      "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Reinforced concrete foundations, equipment pedestals & heavy slabs",
      "Site preparation, deep excavation, dewatering & precision compaction",
      "Road cutting, trenching, containment paving & asphalt reinstatement",
      "Industrial building construction, structural repairs & waterproofing",
    ],
    sections: [
      {
        heading: "Turnkey Scope of Work",
        body: "We handle setting out, topographic survey, shoring, formwork, rebar fabrication, mass concrete pouring, curing, blockwork, structural steel coordination, industrial finishes, and drainage infrastructure. Every package is delivered against agreed Inspection and Test Plans (ITPs) with full traceability.",
      },
      {
        heading: "Working in Live Industrial Facilities",
        body: "A major share of our civil work occurs inside operational refineries, chemical complexes, and substations. We operate under strict permit-to-work systems, cold and hot work permits, physical barricading, and phased execution so client production routes and utilities remain completely undisturbed.",
      },
      {
        heading: "Quality Assurance & Handover",
        body: "All concrete batches undergo slump and temperature checks on delivery, followed by third-party 7-day and 28-day cube strength testing. Handover packages contain certified material test reports, mill certificates, red-line as-built drawings, and warranty documentation backed by our maintenance teams.",
      },
    ],
    capabilities: [
      "Heavy equipment plinths, transformer foundations & bund walls",
      "Deep trenching and underground utility corridor installation",
      "Substation civil construction and blast-rated control rooms",
      "Structural concrete repair, crack injection & protective coatings",
      "Road cutting, base course preparation and heavy asphalt paving",
      "Industrial building finishing, waterproofing & drainage works",
    ],
    faqs: [
      {
        question: "Can civil work proceed inside operational plants without shutdowns?",
        answer:
          "Yes. Our teams specialize in working inside live facilities using barricades, continuous gas monitoring, spark containment, and phased excavation under client permit-to-work systems.",
      },
      {
        question: "What QA/QC documentation is provided with civil packages?",
        answer:
          "We provide comprehensive ITP sign-offs, soil compaction test results, third-party concrete cube strength tests (7 and 28-day), rebar mill test certificates, and complete as-built redlines.",
      },
      {
        question: "Do you supply both materials and equipment for civil packages?",
        answer:
          "Yes. We offer complete turnkey execution covering approved batch-plant concrete, certified steel rebar, backfill materials, and our own fleet of excavators, rollers, and cranes.",
      },
      {
        question: "How do you ensure compliance with Aramco and Royal Commission standards?",
        answer:
          "Our project managers and QA/QC inspectors are Aramco-approved and adhere strictly to SAES (Saudi Aramco Engineering Standards) and RC Jubail/Yanbu construction specifications.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 2. Electrical                                                      */
  /* ------------------------------------------------------------------ */
  {
    slug: "electrical",
    title: "Electrical",
    navTitle: "Electrical",
    category: "construction",
    excerpt:
      "High, medium, and low voltage electrical installations, substation construction, switchgear, cabling, and industrial power distribution systems.",
    intro:
      "From primary MV/LV substations and heavy industrial cable routing to motor control centers, standby power generation, and switchgear assembly, Al Attaf provides certified electrical contracting solutions engineered for continuous, uninterrupted industrial performance.",
    image:
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Substation engineering, transformer erection & switchgear assembly",
      "HV, MV & LV cable laying, tray fabrication, splicing & terminations",
      "Motor Control Centers (MCC), busducts & industrial distribution boards",
      "Plant earthing networks, lightning protection & UPS emergency power",
    ],
    sections: [
      {
        heading: "Industrial Power Infrastructure",
        body: "We construct and equip complete electrical substations, install step-down power transformers, assemble medium and low voltage switchgear panels, and run heavy feeder cables on galvanized steel cable ladder systems engineered for harsh climatic conditions.",
      },
      {
        heading: "Hazardous Area & Classified Zone Execution",
        body: "Our electrical crews hold verified certifications for hazardous area installations (Class 1 Div 1 / Div 2 and ATEX/IECEx). We execute explosion-proof conduit, junction boxes, glanding, and seal-off fittings that maintain integrity in combustible gas and dust environments.",
      },
      {
        heading: "Testing, Commissioning & Safe Energization",
        body: "Before energization, all circuits undergo rigorous testing: high-potential (Hi-Pot) insulation testing, conductor resistance, transformer oil dielectric checks, relay coordination, and thermal imaging audits to guarantee safety and compliance with SEC and Aramco standards.",
      },
    ],
    capabilities: [
      "HV, MV, and LV power cable pulling, jointing, and cold-shrink terminations",
      "Dry-type and oil-immersed transformer installation and oil testing",
      "Switchgear panel erection, busbar torquing, and interlocking tests",
      "Motor Control Center (MCC) installation and variable frequency drives (VFDs)",
      "Plant-wide grounding grid copper welding and lightning protection systems",
      "Industrial LED high-bay lighting, emergency battery units & UPS systems",
    ],
    faqs: [
      {
        question: "Do your electricians hold Saudi Aramco and SEC certifications?",
        answer:
          "Yes. Our electrical engineers, supervisors, and cable jointers are certified and tested to work on high-voltage and classified zone industrial networks.",
      },
      {
        question: "What pre-commissioning testing do you perform?",
        answer:
          "We perform Megger insulation resistance testing, Hi-Pot tests, micro-ohm contact resistance, secondary injection relay testing, and phase rotation verification.",
      },
      {
        question: "Can you upgrade live electrical distribution panels during turnarounds?",
        answer:
          "Yes. We coordinate locked-out/tagged-out (LOTO) procedures and work within tightly scheduled shutdown windows to replace old switchgear and energize upgraded panels safely.",
      },
      {
        question: "Do you supply explosion-proof electrical equipment?",
        answer:
          "Yes. We supply and install certified explosion-proof (Ex-d, Ex-e, Ex-i) lighting fixtures, junction boxes, disconnect switches, and cable glands from approved manufacturers.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 3. Mechanical                                                      */
  /* ------------------------------------------------------------------ */
  {
    slug: "mechanical",
    title: "Mechanical",
    navTitle: "Mechanical",
    category: "construction",
    excerpt:
      "Precision piping fabrication, ASME process spools, rotating equipment erection, pump laser alignment, and static equipment installation.",
    intro:
      "Al Attaf's mechanical division delivers precision industrial piping fabrication, heavy structural erection, rotating machinery installation, and high-pressure system testing. Our welders and fitters operate under ASME Section IX and Aramco standards for onshore and offshore facilities.",
    image:
      "/mechanical/mechanical.jpg",
    heroImage:
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Carbon steel, stainless steel & alloy process piping spool fabrication",
      "Precision laser alignment for industrial pumps, turbines & compressors",
      "Structural steel pipe racks, access platforms, bridges & heavy skids",
      "Hydrostatic testing, pneumatic testing, NDT inspection & flange management",
    ],
    sections: [
      {
        heading: "Piping Fabrication & Field Erection",
        body: "From our dedicated fabrication facilities and on-site containerized shops, we cut, bevel, weld, and assemble process pipe spools ranging from 0.5-inch up to 48-inch diameters in carbon steel, stainless steel (304/316/duplex), and low-temperature alloys.",
      },
      {
        heading: "Rotating & Static Equipment Installation",
        body: "We erect heavy pressure vessels, heat exchangers, skid-mounted equipment, and storage tanks. For rotating assets such as multi-stage pumps, gearboxes, and blowers, we carry out precise baseplate grouting, soft-foot correction, and laser-guided shaft alignment.",
      },
      {
        heading: "Pressure Testing, NDT & Handover",
        body: "Every welded joint is verified through non-destructive testing (RT, UT, PT, MT) according to project design codes. Spools undergo hydro-testing with calibrated test gauges, followed by internal drying, nitrogen purging, and controlled bolt torque tensioning.",
      },
    ],
    capabilities: [
      "ASME B31.3 / B31.1 process and utility piping fabrication and erection",
      "Certified 6G SMAW, GTAW, and FCAW welding procedures (WPS/PQR)",
      "Pump, motor, turbine, and compressor laser shaft alignment",
      "Controlled hydraulic bolt torquing and tensioning with flange logs",
      "Hydrostatic and pneumatic pressure testing up to 10,000 PSI",
      "Structural steel modular skid fabrication, pipe supports, and walkways",
    ],
    faqs: [
      {
        question: "What pipe materials do you fabricate and weld?",
        answer:
          "We fabricate carbon steel (A106, A53), low-temperature carbon steel (A333), stainless steel (304L, 316L, 321), Duplex/Super Duplex, and Chrome-Moly alloys.",
      },
      {
        question: "What welding certifications do your technicians hold?",
        answer:
          "All our welders are certified to ASME Section IX and Aramco WQT (Welder Qualification Test) cards, verified by accredited third-party inspection agencies.",
      },
      {
        question: "How do you manage flange tightening quality?",
        answer:
          "We utilize calibrated hydraulic torque wrenches with documented flange tagging, sequence logs, and gasket verification sheets for zero-leak startups.",
      },
      {
        question: "Can you mobilize mobile fabrication workshops to remote sites?",
        answer:
          "Yes. We deploy fully equipped mobile welding and pipe-prep containers complete with beveling machines, diesel generators, and pre-heat units across the Kingdom.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 4. Instrumentation                                                 */
  /* ------------------------------------------------------------------ */
  {
    slug: "instrumentation",
    title: "Instrumentation",
    navTitle: "Instrumentation",
    category: "construction",
    excerpt:
      "Process calibration, DCS/PLC loop testing, smart transmitters, control valves, impulse tubing, and industrial automation integration.",
    intro:
      "We provide turnkey instrumentation and process control services across the energy, petrochemical, and industrial manufacturing sectors. From precision sensor installation and Swagelok stainless impulse tubing to DCS loop checks and automated control valve tuning, our certified technicians ensure total process reliability.",
    image:
      "/instrumentation/instrumentation.png",
    heroImage:
      "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Field transmitter calibration for pressure, level, flow & temperature",
      "Control valve overhaul, smart positioner tuning & stroke testing",
      "SS316 instrument tubing, manifolds & impulse line fabrication",
      "DCS, ESD, and PLC cold/hot loop checks, verification & commissioning",
    ],
    sections: [
      {
        heading: "Precision Sensor & Transmitter Installation",
        body: "We mount and connect primary process sensors, smart differential pressure cells, radar level transmitters, Coriolis flowmeters, and RTD/thermocouple assemblies, following hazardous zone intrinsic safety (Ex-i) and explosion-proof wiring practices.",
      },
      {
        heading: "Impulse Tubing & Control Valve Automation",
        body: "Our certified tubing technicians bend, route, and pressure-test stainless steel 316 and exotic alloy impulse lines using certified compression fittings. We calibrate pneumatic control valves, verify fail-safe positions, and configure smart digital valve controllers.",
      },
      {
        heading: "DCS/ESD Loop Checks & Commissioning",
        body: "We perform end-to-end loop checks from the field element to marshalling cabinets, I/O modules, and control room operator consoles. Every loop is simulated, documented with calibration sheets, and signed off prior to plant start-up.",
      },
    ],
    capabilities: [
      "NIST-traceable benchmark calibration for primary process instruments",
      "SS316 / alloy Swagelok instrument tubing installation and pressure testing",
      "Pneumatic & motorized control valve overhaul, seat leakage testing & tuning",
      "End-to-end loop checks connecting field transmitters to DCS/PLC consoles",
      "Analyzer shelter sample conditioning lines and hazardous gas detection",
      "Emergency Shutdown (ESD) valve testing and partial-stroke verification",
    ],
    faqs: [
      {
        question: "What calibration equipment do you use?",
        answer:
          "We use calibrated Fluke multi-function calibrators, Beamex integrated calibrators, and hydraulic deadweight testers with current certificates traceable to international standards.",
      },
      {
        question: "Can you support DCS migration and loop checking during plant turnarounds?",
        answer:
          "Yes. Our loop-check teams work alongside DCS engineers (Yokogawa, Emerson, Honeywell, Siemens) to complete hundreds of loops within compressed shutdown windows.",
      },
      {
        question: "Are your tubing fitters certified?",
        answer:
          "Yes. All our instrumentation fitters are certified in Swagelok / Parker fitting assembly, tube bending, and pressure testing up to 10,000 PSI.",
      },
      {
        question: "Do you supply and install gas and flame detection systems?",
        answer:
          "Yes. We install and calibrate toxic gas (H2S, CO), combustible hydrocarbon LEL detectors, and optical flame detectors integrated with ESD systems.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 5. Fire & Safety Engineering                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "firefighting",
    title: "Fire & Safety Engineering",
    navTitle: "Fire & Safety Engineering",
    category: "industrial",
    excerpt:
      "Installation, inspection, testing, commissioning and maintenance of fire and life safety systems, P.E. certification, and GAP analysis to SBC, NFPA, and IBC codes.",
    intro:
      "AAAC provides installation, inspection, testing, commissioning and maintenance of fire and life safety systems including fire water systems network, hydrants, fire water pumps, fire water sprinkler systems, fire extinguishers etc. for industrial, commercial and infrastructure projects across the kingdom. We provide fire protection design and construction P.E. certification services. We provide GAP analysis of the existing fire and safety systems in conjunction with SBC, IBC, NFPA, IFC and other international standards and codes.",
    image:
      "/fire&saftey/fireandsaftey.png",
    heroImage:
      "https://images.pexels.com/photos/280014/pexels-photo-280014.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Fire water systems network, hydrants, pumps & sprinkler systems",
      "Fire protection design and construction P.E. certification services",
      "GAP analysis of existing systems with SBC, IBC, NFPA & IFC codes",
      "Installation, inspection, testing, commissioning & maintenance",
    ],
    sections: [
      {
        heading: "Fire & Life Safety Systems Installation & Maintenance",
        body: "AAAC provides comprehensive installation, inspection, testing, commissioning, and maintenance of fire and life safety systems including fire water systems network, hydrants, fire water pumps, fire water sprinkler systems, fire extinguishers etc. for industrial, commercial and infrastructure projects across the kingdom.",
      },
      {
        heading: "Fire Protection Design & P.E. Certification",
        body: "We provide fire protection design and construction P.E. (Professional Engineer) certification services, ensuring strict compliance with local authorities, Saudi Civil Defense requirements, and international safety mandates.",
      },
      {
        heading: "GAP Analysis & International Code Compliance",
        body: "We provide GAP analysis of the existing fire and safety systems in conjunction with SBC, IBC, NFPA, IFC and other international standards and codes, delivering actionable roadmaps to resolve non-conformances and ensure full protection.",
      },
    ],
    capabilities: [
      "Fire water systems network, hydrants, underground mains & distribution piping",
      "UL/FM fire water pumps installation, testing, commissioning & maintenance",
      "Fire water sprinkler systems (wet, dry, deluge, and pre-action)",
      "Fire protection design and construction P.E. certification services",
      "GAP analysis of existing fire and safety systems (SBC, IBC, NFPA, IFC)",
      "Inspection, testing, refilling, and maintenance of fire extinguishers",
      "Foam suppression systems for hydrocarbon storage tanks and process units",
      "Clean agent gaseous fire suppression (FM-200, Novec 1230) for control rooms & substations",
    ],
    faqs: [
      {
        question: "Do you provide P.E. certification for fire protection designs?",
        answer:
          "Yes. We provide certified fire protection design and construction P.E. (Professional Engineer) certification services ensuring complete compliance with Saudi Civil Defense and international standards.",
      },
      {
        question: "What standards are used during your fire & safety GAP analysis?",
        answer:
          "Our GAP analyses are conducted in strict conjunction with the Saudi Building Code (SBC), International Building Code (IBC), NFPA, International Fire Code (IFC), and other international standards and codes.",
      },
      {
        question: "What fire and life safety systems do you install and maintain?",
        answer:
          "We provide installation, inspection, testing, commissioning, and maintenance of fire and life safety systems including fire water systems network, hydrants, fire water pumps, fire water sprinkler systems, fire extinguishers, and deluge systems across the Kingdom.",
      },
      {
        question: "Can you evaluate and upgrade existing facility fire systems?",
        answer:
          "Yes. We perform GAP analysis on existing facilities to identify deficiencies against SBC, IBC, and NFPA codes, followed by turnkey retrofit and maintenance services.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 6. HVAC Systems Installation, Testing and Commissioning            */
  /* ------------------------------------------------------------------ */
  {
    slug: "hvac-system",
    title: "HVAC Systems Installation, Testing and Commissioning",
    navTitle: "HVAC Systems",
    category: "industrial",
    excerpt:
      "Professional HVAC installation, testing, and commissioning for centrifugal & air-cooled chillers, cooling towers, AHUs, chilled water piping, ductwork, DDC, and BMS controls.",
    intro:
      "Al Attaf Advanced Contracting Company (AACC) provides professional HVAC installation testing and commissioning services for industrial, commercial, and infrastructure projects. Our capabilities include design validation, value engineering, installation, testing, commissioning, and maintenance of HVAC systems, including centrifugal chillers, air cooled chillers, cooling towers, air handling units, fan coil units, packaged air conditioning units, chilled water piping systems, chilled water pumps and associated system auxiliaries, ductwork, ventilation, and associated controls including DDC controls, BMS systems etc. With extensive experience in demanding project environments, AACC is committed to delivering reliable, energy-efficient, and high-quality HVAC solutions while maintaining the highest standards of safety, quality, and project execution.",
    image:
      "/Hvac/hvac-system.jpg",
    heroImage:
      "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Centrifugal & air-cooled chillers, cooling towers, AHUs & FCUs",
      "Chilled water piping systems, pumps & associated auxiliaries",
      "Ductwork, ventilation, and industrial air distribution networks",
      "DDC controls, BMS automation, testing and commissioning",
    ],
    sections: [
      {
        heading: "HVAC Systems Installation, Testing & Commissioning",
        body: "Al Attaf Advanced Contracting Company (AACC) provides professional HVAC installation, testing, and commissioning services for industrial, commercial, and infrastructure projects across the Kingdom. Our capabilities span end-to-end execution—from design validation and value engineering to turnkey installation, Testing, Adjusting & Balancing (TAB), and lifecycle maintenance.",
      },
      {
        heading: "Chillers, Cooling Towers & Chilled Water Infrastructure",
        body: "We install, test, and commission heavy-duty central cooling equipment including centrifugal chillers, air-cooled chillers, cooling towers, packaged air conditioning units, insulated chilled water piping systems, variable-flow chilled water pumps, and associated system auxiliaries engineered for reliable operation in demanding project environments.",
      },
      {
        heading: "Air Distribution, DDC & Building Management Systems (BMS)",
        body: "Our HVAC specialists deliver complete air-side systems including air handling units (AHUs), fan coil units (FCUs), precision-fabricated ductwork, and ventilation systems. We integrate modern Direct Digital Control (DDC) systems and Building Management Systems (BMS) to achieve optimal energy efficiency, indoor air quality, and centralized facility management.",
      },
    ],
    capabilities: [
      "Design validation, value engineering, and turnkey HVAC installation",
      "Centrifugal chillers, air-cooled chillers, and industrial cooling towers",
      "Air handling units (AHUs), fan coil units (FCUs) & packaged AC units",
      "Chilled water piping networks, chilled water pumps, and auxiliaries",
      "Ductwork fabrication, thermal insulation, and ventilation networks",
      "Direct Digital Control (DDC) and Building Management Systems (BMS)",
      "Testing, Adjusting, and Balancing (TAB) and indoor air quality certification",
      "Substation positive pressurization units (PPU) and chemical filtration",
    ],
    faqs: [
      {
        question: "What HVAC equipment does AACC install, test, and commission?",
        answer:
          "AACC handles centrifugal chillers, air-cooled chillers, cooling towers, air handling units (AHUs), fan coil units (FCUs), packaged air conditioning units, chilled water piping systems, chilled water pumps, auxiliaries, ductwork, ventilation, and DDC/BMS control systems.",
      },
      {
        question: "Do you provide design validation and value engineering for HVAC?",
        answer:
          "Yes. Our engineering team provides comprehensive design validation and value engineering to optimize equipment sizing, energy consumption, and lifecycle cost before procurement and installation.",
      },
      {
        question: "Do you install and commission DDC controls and BMS systems?",
        answer:
          "Yes. We configure and commission Direct Digital Controls (DDC) and integrate complete Building Management Systems (BMS) for real-time monitoring and energy-efficient automation.",
      },
      {
        question: "What project sectors does AACC serve with HVAC solutions?",
        answer:
          "We provide professional HVAC services for industrial plants, oil & gas facilities, commercial developments, and infrastructure projects across the Kingdom, adhering to the highest safety and quality standards.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 7. Plant maintenance                                               */
  /* ------------------------------------------------------------------ */
  {
    slug: "plant-maintenance",
    title: "Plant maintenance",
    navTitle: "Plant maintenance",
    category: "industrial",
    excerpt:
      "Turnaround management, static equipment overhauls, heat exchanger bundle extraction, re-tubing, and 24/7 industrial asset reliability.",
    intro:
      "Al Attaf is a premier contractor for industrial plant turnarounds, planned shutdowns (T&I), and long-term routine maintenance across Saudi Arabia. Our multi-discipline crews work around the clock during shutdown windows to overhaul critical static and rotating assets with zero compromise on safety.",
    image:
      "/plant-maintenance/plantmaintenance.jpg",
    heroImage:
      "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Planned turnaround (T&I), shutdown execution & emergency outage mobilization",
      "Heat exchanger bundle pulling, hydro-jetting, re-tubing & torque tensioning",
      "Pressure vessels, columns, distillation towers & storage tank refurbishment",
      "Multi-craft resident maintenance crews (mechanical, civil, electrical, HSE)",
    ],
    sections: [
      {
        heading: "Turnaround Planning & Shutdown Execution",
        body: "Plant shutdowns demand absolute scheduling precision. We prepare detailed work packs, job safety analyses (JSAs), mobilization schedules, and resource matrices months prior to turnaround start, ensuring tasks run around the clock to meet plant restart milestones.",
      },
      {
        heading: "Static Equipment Overhaul & Re-tubing",
        body: "We deploy specialized hydraulic bundle pullers, high-pressure hydro-blasting rigs up to 20,000 PSI, and tube rolling/re-tubing equipment for shell-and-tube heat exchangers, fin-fan air coolers, condensers, and reactor vessels.",
      },
      {
        heading: "Tower Internals, Tray Replacement & Valve Servicing",
        body: "Our technicians enter confined spaces under strict safety oversight to inspect and replace distillation column trays, structured packing, demister pads, and internal nozzles. We overhaul safety relief valves and perform online leak-sealing repairs.",
      },
    ],
    capabilities: [
      "Turnaround management, critical path scheduling, and daily progress reporting",
      "Heat exchanger bundle pulling, high-pressure washing, re-tubing, and testing",
      "Distillation column tray replacement, internal inspection, and vessel repairs",
      "Storage tank floor plate replacement, hydro-testing, and external sandblasting",
      "Specialized cooling tower refurbishment, fill media replacement & basin coating",
      "24/7 emergency response crews for unscheduled plant shutdowns and leaks",
    ],
    faqs: [
      {
        question: "How quickly can you mobilize crews for an emergency plant shutdown?",
        answer:
          "We maintain on-call, badge-cleared supervisory and craft personnel capable of mobilizing within 24 to 48 hours for emergency outages across the Eastern Province.",
      },
      {
        question: "What safety track record do you maintain during turnarounds?",
        answer:
          "We operate with an exemplary safety record, surpassing millions of safe man-hours without Lost Time Incidents (LTI) through strict compliance with permit systems and daily toolbox talks.",
      },
      {
        question: "Can you perform bundle pulling and re-tubing on-site?",
        answer:
          "Yes. We operate mobile hydraulic bundle pullers and field re-tubing gear, allowing on-site extraction, cleaning, inspection, tube replacement, and hydro-testing.",
      },
      {
        question: "Do you supply resident maintenance crews under annual contracts?",
        answer:
          "Yes. We provide dedicated resident maintenance teams with tools, supervision, and logistics integrated directly into our clients' daily plant maintenance workflows.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 8. Security systems                                                */
  /* ------------------------------------------------------------------ */
  {
    slug: "security-systems",
    title: "Security systems",
    navTitle: "Security systems",
    category: "industrial",
    excerpt:
      "HCIS-compliant perimeter security, anti-crash barriers, industrial IP CCTV surveillance, biometric access control, and central command monitoring.",
    intro:
      "Protecting vital industrial assets, petrochemical plants, and national infrastructure requires rigorous physical and electronic security. Al Attaf engineers, installs, and integrates turnkey security systems adhering strictly to High Commission for Industrial Security (HCIS) directives and Saudi standards.",
    image:
      "/security-systems/security-systems.png",
    heroImage:
      "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "HCIS Directive SEC-02 & SEC-03 compliant perimeter barriers & fences",
      "Explosion-proof IP CCTV, long-range thermal cameras & video analytics",
      "Biometric access control, motorized turnstiles & automated ANPR gate barriers",
      "Perimeter Intrusion Detection Systems (PIDS) & central security control rooms",
    ],
    sections: [
      {
        heading: "HCIS-Compliant Perimeter Protection",
        body: "We construct certified physical security barriers including crash-rated anti-ram bollards (ASTM M50/K12), hydraulic wedge barriers, security turnstiles, and anti-cut/anti-climb perimeter fence lines equipped with fiber-optic vibration intrusion detection.",
      },
      {
        heading: "Industrial Video Surveillance & Access Control",
        body: "We install industrial-grade, explosion-proof, and corrosion-resistant IP cameras with thermal imaging and AI-driven video analytics for perimeter breach detection. We integrate multi-factor biometric readers, RFID badge systems, and automated license plate recognition (ANPR).",
      },
      {
        heading: "Security Command Center & Authority Approvals",
        body: "We design and equip ergonomic Security Operations Centers (SOC) featuring video display walls, redundant power systems, and unified Physical Security Information Management (PSIM) software, coordinating testing and sign-off with industrial security authorities.",
      },
    ],
    capabilities: [
      "Crash-rated hydraulic wedge barriers, shallow-mount bollards, and gates",
      "Explosion-proof ATEX CCTV cameras for hazardous oil and gas refinery zones",
      "Fiber-optic fence-mounted Perimeter Intrusion Detection Systems (PIDS)",
      "Automated Number Plate Recognition (ANPR) and under-vehicle scanners (UVSS)",
      "Biometric access control turnstiles, speed gates, and automated card readers",
      "Security Operations Center (SOC) video wall integration, VMS & storage servers",
    ],
    faqs: [
      {
        question: "Are your security installations compliant with HCIS regulations?",
        answer:
          "Yes. Our designs and installations adhere strictly to High Commission for Industrial Security (HCIS) Directives SEC-01 through SEC-11 for industrial facilities.",
      },
      {
        question: "What crash ratings do your vehicle barriers provide?",
        answer:
          "We install ASTM F2656 / PAS 68 M50/K12 rated wedge barriers and bollards capable of stopping a 7.5-ton vehicle traveling at 80 km/h with zero penetration.",
      },
      {
        question: "Can existing perimeter fencing be upgraded with intrusion sensors?",
        answer:
          "Yes. We retrofit existing chain-link or weld-mesh fences with fiber-optic or microphonic vibration sensors that detect climbing or cutting attempts in real time.",
      },
      {
        question: "Do you supply explosion-proof cameras for refinery zones?",
        answer:
          "Yes. We supply and install heavy-duty 316L stainless steel explosion-proof camera housings certified for Zone 1 and Zone 2 hazardous refinery atmospheres.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export const serviceSlugs = services.map((service) => service.slug);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategoryId): Service[] {
  return services.filter((service) => service.category === category);
}

/** Previous / next service for the detail page footer navigation */
export function getAdjacentServices(slug: string) {
  const index = services.findIndex((service) => service.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };

  return {
    previous: index > 0 ? services[index - 1] : services[services.length - 1],
    next: index < services.length - 1 ? services[index + 1] : services[0],
  };
}

/**
 * Related services: same category first, topped up from the other
 * category if that category doesn't have enough entries.
 */
export function getRelatedServices(slug: string, limit = 3): Service[] {
  const current = getServiceBySlug(slug);
  if (!current) return services.slice(0, limit);

  const sameCategory = services.filter(
    (service) => service.category === current.category && service.slug !== slug
  );
  const others = services.filter(
    (service) => service.category !== current.category && service.slug !== slug
  );

  return [...sameCategory, ...others].slice(0, limit);
}