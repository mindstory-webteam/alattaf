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
      "Industrial firefighting, HVAC climate control, plant turnaround maintenance, and HCIS-compliant security systems for critical infrastructure.",
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
      "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
      "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
  /* 5. Firefighting                                                    */
  /* ------------------------------------------------------------------ */
  {
    slug: "firefighting",
    title: "Firefighting",
    navTitle: "Firefighting",
    category: "industrial",
    excerpt:
      "Industrial fire suppression networks, deluge systems, foam proportioning skids, hydrants, fire pumps, and Civil Defense certified life safety.",
    intro:
      "Al Attaf designs, supplies, installs, and commissions comprehensive industrial fire protection and firefighting systems in strict accordance with NFPA standards, Saudi Civil Defense requirements, and Saudi Aramco safety regulations. We protect industrial complexes, refineries, and personnel with certified rapid-response systems.",
    image:
      "https://images.pexels.com/photos/280014/pexels-photo-280014.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/280014/pexels-photo-280014.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Underground and above-ground firewater distribution mains & hydrants",
      "High & low expansion foam skids for hydrocarbon storage tank protection",
      "Automated deluge spray systems, fire monitors & sprinkler networks",
      "UL/FM certified fire pump packages (diesel, electric & jockey) testing",
    ],
    sections: [
      {
        heading: "Complete Fire Suppression Infrastructure",
        body: "We construct robust fire protection networks, including buried HDPE / coated carbon steel firewater ring mains, sectional post indicator valves (PIVs), outdoor fire hydrants, monitor towers, and rapid deluge systems designed to cool critical process equipment during emergency events.",
      },
      {
        heading: "Specialized Foam & Clean Agent Gas Systems",
        body: "For flammable liquid tank farms and electrical control rooms, water is insufficient. We install bladder tank foam proportioners, foam chambers, and gaseous clean-agent fire extinguishing systems (FM-200, Novec 1230, CO2) that extinguish fires within seconds without damaging delicate electronics.",
      },
      {
        heading: "Civil Defense Certification & Commissioning",
        body: "We handle complete hydraulic calculations, flow testing, fire pump performance curve tests, and hydrostatic pressure testing. We prepare official documentation and coordinate directly with Saudi Civil Defense inspectors for official facility approval.",
      },
    ],
    capabilities: [
      "Firewater underground ring mains, sectional valves, hydrants & hose reels",
      "Automatic wet, dry, and pre-action sprinkler systems for buildings & warehouses",
      "Deluge water spray cooling systems for transformers, vessels & process skids",
      "Low, medium, and high-expansion foam systems for storage tank terminals",
      "Clean agent gaseous fire suppression (FM-200, Novec 1230) for server rooms",
      "UL/FM certified fire pump package installation, testing, and alignment",
    ],
    faqs: [
      {
        question: "Are your firefighting installations approved by Saudi Civil Defense?",
        answer:
          "Yes. All our designs, materials, and installations comply fully with Saudi Civil Defense (Salamah) standards and international NFPA codes.",
      },
      {
        question: "What tests are performed on fire pumps?",
        answer:
          "We perform full churn pressure, 100% rated flow, and 150% overload capacity curve testing in accordance with NFPA 20, verifying engine/motor performance.",
      },
      {
        question: "Can you service existing industrial fire protection networks?",
        answer:
          "Yes. We provide preventive maintenance, flow-rate testing of hydrants, sprinkler head replacement, valve exercising, and foam quality laboratory testing.",
      },
      {
        question: "What suppression system is recommended for electrical switchgear rooms?",
        answer:
          "We install clean agent systems like Novec 1230 or FM-200, which rapidly extinguish electrical fires without leaving residue or conducting electricity.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 6. HVAC system                                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "hvac-system",
    title: "HVAC system",
    navTitle: "HVAC system",
    category: "industrial",
    excerpt:
      "Industrial HVAC engineering, chiller plants, air handling units, duct fabrication, substation positive pressurization, and climate control.",
    intro:
      "Engineered to withstand extreme Middle Eastern ambient temperatures exceeding 50°C, Al Attaf delivers turnkey industrial and commercial HVAC solutions. From substation positive pressurization units to heavy air-cooled chillers, cleanrooms, and automated ductwork, our systems maintain optimal climate and air purity.",
    image:
      "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Industrial chillers, air handling units (AHUs) & rooftop package units",
      "GI & PIR automated ductwork fabrication, thermal insulation & cladding",
      "Substation & control room positive pressurization units (PPU)",
      "Testing, Adjusting, and Balancing (TAB) and indoor air quality certification",
    ],
    sections: [
      {
        heading: "Industrial & Heavy Commercial Climate Control",
        body: "We install and commission high-capacity chilled water systems, cooling towers, DX split systems, and packaged rooftop units. Our piping crews install insulated chilled water piping, balancing valves, and variable-speed circulation pumps for maximum energy efficiency.",
      },
      {
        heading: "Substation Pressurization & Corrosive Filtration",
        body: "In dusty and sulfur-rich plant environments, electrical switchgear requires clean air and positive pressure to prevent corrosive gas ingress. We install specialized positive pressurization units (PPUs) with deep-bed chemical filtration to protect sensitive copper busbars and electronics.",
      },
      {
        heading: "Testing, Adjusting & Balancing (TAB)",
        body: "Every HVAC installation undergoes rigorous air and hydronic balancing. We measure air velocities, static pressures, temperature differentials, and sound levels, issuing comprehensive TAB reports that verify system performance against design specifications.",
      },
    ],
    capabilities: [
      "Water-cooled and air-cooled industrial chiller installation and piping",
      "High-speed CNC automated galvanized sheet metal and PIR duct fabrication",
      "Positive pressurization and chemical carbon filtration for substations",
      "Cleanroom environmental control, HEPA filtration & laminar flow units",
      "Certified hydronic and airflow Testing, Adjusting & Balancing (TAB)",
      "Preventive maintenance, chiller descaling, and compressor overhauls",
    ],
    faqs: [
      {
        question: "Can your HVAC systems withstand 50°C+ ambient temperatures?",
        answer:
          "Yes. Our industrial equipment selections are specifically de-rated and engineered for Gulf ambient conditions of 50°C to 55°C, ensuring continuous cooling without thermal tripping.",
      },
      {
        question: "Why is positive pressurization needed in plant substations?",
        answer:
          "Positive pressurization prevents toxic and corrosive gases (like H2S and SO2) and fine desert dust from entering control rooms, preventing electrical shorts and contact degradation.",
      },
      {
        question: "Do you manufacture ductwork locally?",
        answer:
          "Yes. We operate automated CNC sheet metal plasma cutting and lock-forming lines for GI ductwork built strictly to SMACNA and DW144 standards.",
      },
      {
        question: "What maintenance contracts do you offer for HVAC systems?",
        answer:
          "We offer 24/7 annual maintenance contracts covering regular coil washing, filter replacements, refrigerant checks, motor belt tensioning, and emergency repairs.",
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
      "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
      "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1200",
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