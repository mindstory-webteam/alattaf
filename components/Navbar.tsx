"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  X, 
  Phone, 
  ChevronRight,
  ChevronDown
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const servicesSections = [
    {
      title: "Construction & Engineering Works",
      items: [
        { name: "Civil Works, Building Construction & Maintenance", href: "#services" },
        { name: "Road Cutting & Asphalting", href: "#services" },
        { name: "Fabrication & Erection Of Structures", href: "#services" },
        { name: "Electrical Instrumentation", href: "#services" },
        { name: "Mechanical Engineer", href: "#services" },
        { name: "General Maintenance Works", href: "#services" },
      ],
    },
    {
      title: "Industrial Supply & Specialized Services",
      items: [
        { name: "Material Supply To Saudi Aramco", href: "#services" },
        { name: "Supply of Equipment & Portable office", href: "#services" },
        { name: "Manpower Supply", href: "#human-resources" },
        { name: "T&I Work On A/C Cooling Towers", href: "#services" },
        { name: "Computer It Works & Maintenance", href: "#services" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      {/* Main Navigation Bar */}
      <nav 
        className={`w-full bg-white transition-all duration-300 border-b border-slate-100 shadow-sm ${
          isScrolled ? "py-3 shadow-md" : "py-4"
        }`}
      >
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <Link 
              href="/" 
              className="flex items-center group focus:outline-none"
              onClick={() => setActiveItem("Home")}
            >
              <div className="relative flex items-center">
                <Image
                  src="/alattaf-logo.png"
                  alt="Al Attaf Advanced Contracting Company Logo"
                  width={200}
                  height={65}
                  className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links (Centered) */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setActiveItem("Home")}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                  activeItem === "Home"
                    ? "text-sky-600 font-bold"
                    : "text-slate-800 hover:text-sky-600"
                }`}
              >
                Home
              </Link>

              {/* About Us */}
              <Link
                href="#about"
                onClick={() => setActiveItem("About Us")}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                  activeItem === "About Us"
                    ? "text-sky-600 font-bold"
                    : "text-slate-800 hover:text-sky-600"
                }`}
              >
                About Us
              </Link>

              {/* Core Services Dropdown */}
              <div className="relative group py-2">
                <button
                  type="button"
                  onClick={() => setActiveItem("Core Services")}
                  className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg ${
                    activeItem === "Core Services"
                      ? "text-sky-600 font-bold"
                      : "text-slate-800 hover:text-sky-600"
                  }`}
                >
                  <span>Core Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu Container without border radius, only text */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[720px] max-w-[90vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto z-50">
                  <div className="bg-white text-slate-800 rounded-none shadow-2xl border border-slate-200 p-6 overflow-hidden">
                    <div className="grid grid-cols-2 gap-6">
                      {servicesSections.map((section, sIdx) => (
                        <div key={sIdx} className="space-y-3">
                          <div className="pb-2 border-b border-slate-100 text-xs font-bold text-sky-600 uppercase tracking-wider">
                            {section.title}
                          </div>
                          <ul className="space-y-1">
                            {section.items.map((item, iIdx) => (
                              <li key={iIdx}>
                                <a
                                  href={item.href}
                                  onClick={() => setActiveItem("Core Services")}
                                  className="block px-2.5 py-2 rounded-none text-xs font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors leading-snug"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Human Resources */}
              <Link
                href="#human-resources"
                onClick={() => setActiveItem("Human Resources")}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                  activeItem === "Human Resources"
                    ? "text-sky-600 font-bold"
                    : "text-slate-800 hover:text-sky-600"
                }`}
              >
                Human Resources
              </Link>

              {/* Gallery */}
              <Link
                href="#gallery"
                onClick={() => setActiveItem("Gallery")}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                  activeItem === "Gallery"
                    ? "text-sky-600 font-bold"
                    : "text-slate-800 hover:text-sky-600"
                }`}
              >
                Gallery
              </Link>

              {/* Contact */}
              <Link
                href="#contact"
                onClick={() => setActiveItem("Contact")}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                  activeItem === "Contact"
                    ? "text-sky-600 font-bold"
                    : "text-slate-800 hover:text-sky-600"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right Action CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded text-sm font-semibold text-white bg-blue-700  shadow-md transition-all duration-200 transform active:translate-y-0"
              >
                <span>Get a Quote</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center p-2 rounded-lg text-sky-600 bg-sky-50 text-sm font-medium hover:bg-sky-100 transition-colors"
                aria-label="Contact"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-x-0 top-[65px] sm:top-[73px] bottom-0 bg-slate-900/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-6 max-h-[85vh] overflow-y-auto transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => {
                setActiveItem("Home");
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                activeItem === "Home"
                  ? "bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400"
                  : "text-slate-750 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/60"
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="#about"
              onClick={() => {
                setActiveItem("About Us");
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                activeItem === "About Us"
                  ? "bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400"
                  : "text-slate-750 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/60"
              }`}
            >
              <span>About Us</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            {/* Core Services Mobile Accordion */}
            <div className="overflow-hidden">
              <button
                type="button"
                onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
                className={`flex items-center justify-between w-full px-4 py-3 text-base font-semibold transition-all ${
                  activeItem === "Core Services"
                    ? "bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400"
                    : "text-slate-750 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/60"
                }`}
              >
                <span>Core Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpenMobile ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpenMobile && (
                <div className="pl-4 pr-2 py-2 space-y-4 bg-slate-50 dark:bg-slate-800/50 rounded-none mt-1">
                  {servicesSections.map((section, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="text-xs font-bold text-sky-600 uppercase tracking-wider px-2">
                        {section.title}
                      </div>
                      <div className="space-y-1">
                        {section.items.map((item, iIdx) => (
                          <a
                            key={iIdx}
                            href={item.href}
                            onClick={() => {
                              setActiveItem("Core Services");
                              setIsMobileMenuOpen(false);
                            }}
                            className="block px-2.5 py-1.5 rounded-none text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-sky-600 hover:bg-white dark:hover:bg-slate-800"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#human-resources"
              onClick={() => {
                setActiveItem("Human Resources");
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                activeItem === "Human Resources"
                  ? "bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400"
                  : "text-slate-750 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/60"
              }`}
            >
              <span>Human Resources</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="#gallery"
              onClick={() => {
                setActiveItem("Gallery");
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                activeItem === "Gallery"
                  ? "bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400"
                  : "text-slate-750 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/60"
              }`}
            >
              <span>Gallery</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="#contact"
              onClick={() => {
                setActiveItem("Contact");
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                activeItem === "Contact"
                  ? "bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400"
                  : "text-slate-750 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/60"
              }`}
            >
              <span>Contact</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-blue-700 transition-colors"
            >
              <span>Get a Quote</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
