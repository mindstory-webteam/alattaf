// src/data/services.ts  (or app/data/services.ts — keep the import path consistent)

export type ServiceCategoryId = "construction" | "industrial";

export interface ServiceSection {
  heading: string;
  body: string;
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
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  label: string;
  description: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "construction",
    label: "Construction & Engineering Works",
    description:
      "Civil, structural, mechanical and electrical execution delivered to plant and municipal standards across the Eastern Province.",
  },
  {
    id: "industrial",
    label: "Industrial Supply & Specialized Services",
    description:
      "Approved material supply, manpower mobilisation and specialised plant services for continuous industrial operations.",
  },
];

export const services: Service[] = [
  {
    slug: "civil-works-building-construction-maintenance",
    title: "Civil Works, Building Construction & Maintenance",
    navTitle: "Civil Works & Building Construction",
    category: "construction",
    excerpt:
      "Foundations, structures, finishing and long-term building maintenance for industrial, commercial and residential facilities.",
    intro:
      "Al Attaf executes civil packages end to end — from excavation and shoring through concrete works, blockwork, finishing and handover. Our crews work equally well on greenfield builds and on live facilities where access, permits and plant safety rules govern every hour of the shift.",
    image:
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Reinforced concrete foundations, slabs and structures",
      "Site preparation, excavation, backfilling and compaction",
      "Building finishing, blockwork, plastering and painting",
      "Planned and reactive maintenance contracts",
    ],
    sections: [
      {
        heading: "Scope of work",
        body: "We handle setting out and survey, excavation and shoring, formwork and rebar fixing, concrete pouring and curing, blockwork, plastering, waterproofing, tiling, joinery, painting and external works including kerbs, drainage and hardscaping. Each package is planned around inspection and test plans agreed with the client before mobilisation.",
      },
      {
        heading: "Working in live facilities",
        body: "A large share of our civil work happens inside operating plants and occupied buildings. We plan around permit-to-work systems, isolation requirements and shutdown windows, and we phase the work so that access routes, utilities and business operations stay available throughout.",
      },
      {
        heading: "Quality and handover",
        body: "Materials are submitted for approval before delivery, concrete is tested to the specified grade, and every stage is signed off against the ITP. Handover includes as-built drawings, test certificates, material data sheets and a defects liability period backed by our maintenance crews.",
      },
    ],
    capabilities: [
      "Concrete works and structural repairs",
      "Foundations, pedestals and equipment plinths",
      "Blockwork, plastering and finishing",
      "Waterproofing and coating systems",
      "Renovation and fit-out works",
      "Annual maintenance contracts",
    ],
  },
  {
    slug: "road-cutting-asphalting",
    title: "Road Cutting & Asphalting",
    navTitle: "Road Cutting & Asphalting",
    category: "construction",
    excerpt:
      "Controlled road cutting, trenching, reinstatement and asphalt paving for utility crossings, plant roads and access ways.",
    intro:
      "Cutting a road is the easy part; restoring it so it lasts is the work. We handle saw cutting, excavation, backfill in controlled layers, base course, prime and tack coats, and asphalt laying and compaction to the density the specification calls for.",
    image:
      "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Saw cutting and controlled trench excavation",
      "Layered backfill with compaction testing",
      "Asphalt paving, patching and overlay",
      "Traffic management and safe diversions",
    ],
    sections: [
      {
        heading: "Utility crossings and reinstatement",
        body: "Most of our road cutting supports cable, pipeline and drainage crossings. We locate existing services before breaking ground, cut clean edges, protect the exposed utility, then reinstate in compacted layers with field density testing before the surface course goes down.",
      },
      {
        heading: "Paving and surfacing",
        body: "We lay base course and wearing course asphalt with pavers and rollers sized to the job, handle prime and tack coat application, and finish with line marking and signage where required. Smaller works — patches, speed humps, parking areas — are handled by the same crews.",
      },
      {
        heading: "Traffic and safety control",
        body: "Every road opening is planned with a traffic management scheme: barricades, cones, warning signs, night lighting and flagmen where needed. Diversions are agreed with the facility or municipality in advance so plant traffic keeps moving.",
      },
    ],
    capabilities: [
      "Asphalt cutting and removal",
      "Trenching for cables and pipelines",
      "Sub-base and base course laying",
      "Hot mix asphalt paving and compaction",
      "Pothole repair and resurfacing",
      "Road marking and signage",
    ],
  },
  {
    slug: "fabrication-erection-of-structures",
    title: "Fabrication & Erection Of Structures",
    navTitle: "Fabrication & Erection",
    category: "construction",
    excerpt:
      "Workshop and on-site fabrication of steel structures, platforms, pipe racks and shelters, with certified welding and erection.",
    intro:
      "We fabricate to drawing and erect to line and level. Steel is cut, fitted and welded by qualified welders working to approved procedures, then blasted, coated and erected on site with the right lifting plan behind it.",
    image:
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Structural steel fabrication to approved drawings",
      "Certified welders and qualified procedures",
      "Surface preparation and protective coating",
      "Rigging, lifting and site erection",
    ],
    sections: [
      {
        heading: "Fabrication",
        body: "Cutting, drilling, rolling, fit-up and welding of beams, columns, gratings, handrails, ladders, platforms, pipe supports, shelters and skid frames. Weld procedures and welder qualifications are submitted and approved before production starts.",
      },
      {
        heading: "Inspection and coating",
        body: "Welds are checked visually and by NDT where the specification requires it. Steel is blast cleaned to the specified profile and coated with the approved paint system, with dry film thickness recorded before dispatch to site.",
      },
      {
        heading: "Erection",
        body: "Erection is planned with lift studies, certified crews and inspected rigging gear. We set anchor bolts, align and plumb the structure, complete bolting or site welds, then touch up coatings and hand over with dimensional and torque records.",
      },
    ],
    capabilities: [
      "Structural steel buildings and shelters",
      "Pipe racks and cable trays supports",
      "Access platforms, stairs and handrails",
      "Tanks, hoppers and plate work",
      "Site welding and structural modification",
      "Blasting and painting to spec",
    ],
  },
  {
    slug: "electrical-instrumentation",
    title: "Electrical Instrumentation",
    navTitle: "Electrical Instrumentation",
    category: "construction",
    excerpt:
      "Installation, termination, testing and commissioning of electrical and instrumentation systems for plants and facilities.",
    intro:
      "From cable pulling and glanding to loop checks and commissioning support, our E&I teams install and prove systems that have to work the first time and keep working in a hot, dusty, corrosive environment.",
    image:
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "LV/MV cable laying, glanding and termination",
      "Panel, MCC and distribution board installation",
      "Field instrument installation and calibration",
      "Loop checking and commissioning support",
    ],
    sections: [
      {
        heading: "Electrical installation",
        body: "Cable trays and conduits, cable pulling and dressing, terminations, earthing and lightning protection, lighting and small power, motor connections, and the installation of panels, transformers and distribution boards — all installed to drawing and to the area classification.",
      },
      {
        heading: "Instrumentation",
        body: "Mounting and hook-up of transmitters, gauges, switches, control valves and analysers; impulse and pneumatic tubing; junction box wiring; and calibration with certified test equipment. Hazardous-area installations follow the applicable Ex requirements.",
      },
      {
        heading: "Testing and handover",
        body: "Continuity, insulation resistance, earth resistance and functional testing, followed by loop checks against the loop diagrams. Punch lists are closed out and the system is handed over with test records and marked-up drawings.",
      },
    ],
    capabilities: [
      "Cable tray and conduit systems",
      "Cable pulling, glanding and termination",
      "Earthing and lightning protection",
      "Instrument hook-up and tubing",
      "Calibration and loop testing",
      "Pre-commissioning and commissioning support",
    ],
  },
  {
    slug: "mechanical-engineering-works",
    title: "Mechanical Engineering Works",
    navTitle: "Mechanical Engineering",
    category: "construction",
    excerpt:
      "Equipment installation, piping, alignment and mechanical maintenance for rotating and static plant equipment.",
    intro:
      "Our mechanical teams set, align and connect equipment, run and test piping, and keep rotating machinery in service through planned maintenance and turnaround work.",
    image:
      "https://images.pexels.com/photos/162568/oil-industry-pump-jack-sunset-clouds-162568.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/162568/oil-industry-pump-jack-sunset-clouds-162568.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Static and rotating equipment installation",
      "Piping fabrication, erection and testing",
      "Precision alignment and grouting",
      "Overhaul and preventive maintenance",
    ],
    sections: [
      {
        heading: "Equipment installation",
        body: "Setting pumps, compressors, blowers, vessels, heat exchangers and packaged units on their foundations; shimming, levelling, epoxy grouting and precision laser alignment; coupling installation and no-load runs before handover.",
      },
      {
        heading: "Piping works",
        body: "Spool fabrication, site erection, welding by qualified welders, bolt torquing, flange management, hydrotesting and flushing, with NDT and test packs prepared for the client's inspection team.",
      },
      {
        heading: "Maintenance and overhaul",
        body: "Planned and breakdown maintenance covering bearing and seal replacement, valve overhaul, gearbox service, vibration checks and shutdown scopes executed on tight turnaround schedules.",
      },
    ],
    capabilities: [
      "Pump, compressor and blower installation",
      "Vessel and exchanger erection",
      "Carbon and stainless steel piping",
      "Hydrotesting and flushing",
      "Laser shaft alignment",
      "Turnaround and shutdown support",
    ],
  },
  {
    slug: "general-maintenance-works",
    title: "General Maintenance Works",
    navTitle: "General Maintenance",
    category: "construction",
    excerpt:
      "Multi-discipline maintenance contracts that keep buildings, utilities and plant assets running without disruption.",
    intro:
      "One call-off contract, one point of contact, and crews that cover civil, mechanical, electrical and finishing trades. We take on both scheduled preventive maintenance and the unplanned work that has to be fixed today.",
    image:
      "https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Preventive and corrective maintenance programmes",
      "Multi-trade crews under one contract",
      "Rapid response to breakdown calls",
      "Documented job history and reporting",
    ],
    sections: [
      {
        heading: "Planned maintenance",
        body: "We build the schedule around your asset register: inspection frequencies, checklists, consumables and spares, with each visit recorded and reported so you can see what was done and what needs attention next.",
      },
      {
        heading: "Reactive and call-out work",
        body: "Leaks, failures, damage and defects handled by crews already familiar with your site. Because the same team covers civil, electrical and mechanical trades, most issues are closed out in a single visit.",
      },
      {
        heading: "Facilities support",
        body: "Painting and refurbishment, door and window repairs, plumbing and drainage, lighting replacement, HVAC servicing, housekeeping of technical areas, and small modification works handled as part of the contract.",
      },
    ],
    capabilities: [
      "Building and fabric maintenance",
      "Plumbing and drainage works",
      "Electrical repairs and lighting",
      "HVAC servicing support",
      "Painting and refurbishment",
      "24/7 call-out arrangements",
    ],
  },
  {
    slug: "material-supply-saudi-aramco",
    title: "Material Supply To Saudi Aramco",
    navTitle: "Material Supply To Saudi Aramco",
    category: "industrial",
    excerpt:
      "Sourcing and delivery of approved materials against Saudi Aramco specifications, standards and inspection requirements.",
    intro:
      "Supplying an operator like Saudi Aramco is a documentation exercise as much as a logistics one. We source from approved manufacturers, compile the certification package, and deliver on the schedule the project actually needs.",
    image:
      "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Sourcing from approved manufacturers",
      "Full certification and traceability packages",
      "Inspection and expediting support",
      "Scheduled delivery to site or warehouse",
    ],
    sections: [
      {
        heading: "Sourcing and compliance",
        body: "Material is quoted against the applicable specification and sourced from vendors on the approved list. We handle technical clarifications, deviation requests and substitutions before the order is placed, so nothing is rejected at the gate.",
      },
      {
        heading: "Inspection and documentation",
        body: "Mill test certificates, material traceability records, inspection release notes and packing lists are compiled into a submittal package. Third-party inspection is arranged where the purchase order calls for it.",
      },
      {
        heading: "Logistics and delivery",
        body: "Consolidation, preservation, marking and delivery to the nominated site or warehouse, with progress reporting on long-lead items so procurement teams are never guessing about dates.",
      },
    ],
    capabilities: [
      "Piping, fittings, valves and flanges",
      "Structural steel and fasteners",
      "Electrical and instrumentation materials",
      "Civil and construction consumables",
      "Safety and PPE supply",
      "Expediting and inspection coordination",
    ],
  },
  {
    slug: "equipment-portable-office-supply",
    title: "Supply Of Equipment & Portable Offices",
    navTitle: "Equipment & Portable Offices",
    category: "industrial",
    excerpt:
      "Rental and supply of construction equipment, portable cabins, site offices and temporary facilities, ready to use.",
    intro:
      "Site setups shouldn't hold up the schedule. We supply, deliver, position and connect portable offices, accommodation and welfare units, along with the plant and equipment the works need.",
    image:
      "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Portable offices, cabins and welfare units",
      "Delivery, positioning and hook-up included",
      "Short and long-term equipment rental",
      "Maintained, inspected and certified plant",
    ],
    sections: [
      {
        heading: "Portable facilities",
        body: "Site offices, meeting rooms, guard cabins, stores, toilets and rest areas — supplied furnished or bare, positioned on prepared foundations, and connected to power, water and drainage.",
      },
      {
        heading: "Equipment supply",
        body: "Excavators, loaders, cranes, forklifts, manlifts, compressors, generators, welding machines, pumps and light towers, all supplied with valid third-party certification and, where required, licensed operators.",
      },
      {
        heading: "Support during the hire",
        body: "Scheduled servicing, breakdown response and replacement units keep the equipment available. Off-hire includes collection, site clean-up and reinstatement of the area.",
      },
    ],
    capabilities: [
      "Site offices and accommodation units",
      "Generators and power distribution",
      "Earthmoving and lifting equipment",
      "Compressors and welding machines",
      "Temporary power, water and lighting",
      "Operators and maintenance included",
    ],
  },
  {
    slug: "manpower-supply",
    title: "Manpower Supply",
    navTitle: "Manpower Supply",
    category: "industrial",
    excerpt:
      "Skilled, semi-skilled and supervisory manpower mobilised quickly, with valid certification and full sponsorship compliance.",
    intro:
      "Whether you need two welders for a week or a hundred hands for a turnaround, we mobilise trade-tested people with the documentation, training and PPE already in place.",
    image:
      "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Trade-tested and certified personnel",
      "Fast mobilisation for shutdowns and peaks",
      "Full sponsorship and iqama compliance",
      "Transport, accommodation and PPE arranged",
    ],
    sections: [
      {
        heading: "Trades we supply",
        body: "Welders, fitters, riggers, scaffolders, electricians, instrument technicians, masons, carpenters, steel fixers, painters, heavy equipment operators, drivers, helpers, plus supervisors, foremen, safety officers, QC inspectors and engineers.",
      },
      {
        heading: "Screening and certification",
        body: "Candidates are trade-tested before deployment. Welder qualifications, rigger and operator licences, safety training and medical fitness records are verified and kept current for the duration of the assignment.",
      },
      {
        heading: "Administration",
        body: "We handle visas, iqama processing, payroll, GOSI, insurance, transport and accommodation, so your team manages the work while we manage the people.",
      },
    ],
    capabilities: [
      "Long-term and short-term deployment",
      "Shutdown and turnaround manpower",
      "Supervisory and engineering staff",
      "Safety officers and QC inspectors",
      "Transport and camp accommodation",
      "Timesheet and payroll administration",
    ],
  },
  {
    slug: "ti-work-ac-cooling-towers",
    title: "T&I Work On A/C Cooling Towers",
    navTitle: "T&I Work On Cooling Towers",
    category: "industrial",
    excerpt:
      "Testing and inspection, cleaning, repair and refurbishment of air conditioning cooling towers and their support systems.",
    intro:
      "Cooling tower performance drops long before it fails. Our T&I scope finds the fill fouling, basin corrosion, drift losses and fan or gearbox wear that quietly cost you capacity, then repairs them within the shutdown window.",
    image:
      "https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Full inspection of structure, fill and basin",
      "High-pressure cleaning and descaling",
      "Fill, drift eliminator and nozzle replacement",
      "Fan, gearbox and motor overhaul",
    ],
    sections: [
      {
        heading: "Inspection",
        body: "Structural and mechanical inspection covering casing, louvres, fill packs, drift eliminators, distribution headers and nozzles, basin condition, fan blades, gearbox, drive shaft, motor and vibration levels — reported with photographs and a prioritised recommendation list.",
      },
      {
        heading: "Cleaning and repair",
        body: "Basin draining and desludging, high-pressure cleaning, scale and biofilm removal, corrosion treatment and recoating, replacement of fill and eliminators, nozzle and header repairs, and structural repair of the tower frame.",
      },
      {
        heading: "Restart and verification",
        body: "Mechanical alignment, fan balancing, water distribution checks and performance verification before the unit goes back into service, with a record of parts replaced and readings taken.",
      },
    ],
    capabilities: [
      "Cooling tower condition surveys",
      "Chemical and mechanical cleaning",
      "Fill and drift eliminator replacement",
      "Basin lining and corrosion repair",
      "Fan balancing and gearbox service",
      "Water treatment system support",
    ],
  },
  {
    slug: "computer-it-works-maintenance",
    title: "Computer IT Works & Maintenance",
    navTitle: "Computer IT Works & Maintenance",
    category: "industrial",
    excerpt:
      "Structured cabling, network setup, hardware supply and ongoing IT support for offices, site cabins and control rooms.",
    intro:
      "Site IT has to survive dust, heat and constant moves. We install structured cabling and networks, supply and set up hardware, and keep it all running with support that answers when a site cabin goes offline.",
    image:
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroImage:
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: [
      "Structured cabling and network installation",
      "Hardware supply, setup and configuration",
      "CCTV and access control systems",
      "Ongoing support and maintenance contracts",
    ],
    sections: [
      {
        heading: "Infrastructure",
        body: "Cat6 and fibre cabling, patch panels and racks, switches, routers and wireless access points, server room fit-out with UPS and cooling, and network configuration for site offices and control rooms.",
      },
      {
        heading: "Hardware and software",
        body: "Supply and setup of desktops, laptops, printers, scanners and peripherals, operating system and application installation, licensing, user account setup, and data migration during office moves.",
      },
      {
        heading: "Support and security",
        body: "Preventive maintenance visits, remote and on-site troubleshooting, backup configuration, antivirus and patching, plus CCTV, access control and intercom installation where the facility requires it.",
      },
    ],
    capabilities: [
      "Cat6 and fibre optic cabling",
      "Network design and configuration",
      "Server and rack installation",
      "PC, laptop and printer supply",
      "CCTV and access control",
      "Annual IT support contracts",
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