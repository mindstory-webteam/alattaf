"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  X, 
  Phone,
  ChevronDown
} from "lucide-react";
import LiquidButton from "@/components/LiquidButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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
        { name: "Manpower Supply", href: "#services" },
        { name: "T&I Work On A/C Cooling Towers", href: "#services" },
        { name: "Computer It Works & Maintenance", href: "#services" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // When mobile menu is open, don't hide
      if (isMobileMenuOpen) return;

      // If scrolling down past threshold, hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // If scrolling up (reverse scroll), show navbar
        setIsVisible(true);
      }

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-sidebar-open", "true");
    } else {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-sidebar-open");
    }
    return () => {
      document.body.removeAttribute("data-sidebar-open");
    };
  }, [isMobileMenuOpen]);

  // Close mobile sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out font-sans ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      {/* Top Bar - Contact, Location & Social Information (Desktop Only - Hidden on sm/tablet screens) */}
      <div className="hidden lg:block w-full bg-slate-900 text-slate-300 text-xs border-b border-slate-800 transition-all duration-300">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-2 flex items-center justify-between">
          {/* Left Side: Phone, Email & Location (Text Only) */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a 
              href="tel:+966135660243" 
              className="hover:text-sky-400 transition-colors"
            >
              00966 13 566 0243
            </a>

            <a 
              href="mailto:info@alattafcompany.com" 
              className="hover:text-sky-400 transition-colors"
            >
              info@alattafcompany.com
            </a>

            <span className="hidden md:inline text-slate-400">
              6584-Abqaiq 33261-Taif street-Al madiynah
            </span>
          </div>

          {/* Right Side: Social Icons with Colors */}
          <div className="flex items-center space-x-3.5">
            {/* Twitter / X */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-200 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Twitter / X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#E4405F] hover:text-pink-400 transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#1877F2] hover:text-blue-400 transition-all duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

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
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setActiveItem("Home")}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                  activeItem === "Home"
                    ? "text-sky-600 font-bold"
                    : "text-slate-800 hover:text-slate-950"
                }`}
              >
                Home
              </Link>

              {/* About us */}
              <Link
                href="#about"
                onClick={() => setActiveItem("About us")}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                  activeItem === "About us"
                    ? "text-sky-600 font-bold"
                    : "text-slate-800 hover:text-slate-950"
                }`}
              >
                About us
              </Link>

              {/* Services Dropdown */}
              <div className="relative group py-2">
                <button
                  type="button"
                  onClick={() => setActiveItem("Services")}
                  className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg ${
                    activeItem === "Services"
                      ? "text-sky-600 font-bold"
                      : "text-slate-800 hover:text-slate-950"
                  }`}
                >
                  <span>Services</span>
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
                                  onClick={() => setActiveItem("Services")}
                                  className="block px-2.5 py-2 rounded-none text-xs font-medium text-slate-700 hover:text-slate-950 transition-colors leading-snug"
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

              {/* Careers */}
              <Link
                href="#careers"
                onClick={() => setActiveItem("Careers")}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                  activeItem === "Careers"
                    ? "text-sky-600 font-bold"
                    : "text-slate-800 hover:text-slate-950"
                }`}
              >
                Careers
              </Link>

              {/* Gallery */}
              <Link
                href="#gallery"
                onClick={() => setActiveItem("Gallery")}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                  activeItem === "Gallery"
                    ? "text-sky-600 font-bold"
                    : "text-slate-800 hover:text-slate-950"
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
                    : "text-slate-800 hover:text-slate-950"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right Action CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <LiquidButton
                text="Get a Quote"
                href="#contact"
                btnColor="#1d4ed8"
                hoverBgColor="#ffffff"
                textColor="#ffffff"
                hoverTextColor="#1d4ed8"
                className="px-5 py-2.5 text-sm"
              />
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
    </header>

    {/* Mobile Navigation Sidebar Drawer (Slides in from Right to Left) */}
    <div className="lg:hidden">
      {/* Dark backdrop overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-over Sidebar Panel from Right */}
      <aside
        className={`fixed inset-y-0 right-0 z-[100] w-[85vw] max-w-xs sm:max-w-sm bg-white dark:bg-slate-900 shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-in-out border-l border-slate-100 dark:border-slate-800 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header with Brand & Close Button */}
        <div className="flex items-center justify-between px-5 pt-8 pb-4 border-b border-slate-100 dark:border-slate-800">
          <Link
            href="/"
            onClick={() => {
              setActiveItem("Home");
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center group"
          >
            <Image
              src="/alattaf-logo.png"
              alt="Al Attaf Logo"
              width={160}
              height={50}
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-4 pt-5 pb-3 space-y-1.5 scrollbar-thin">
          {/* Home */}
          <Link
            href="/"
            onClick={() => {
              setActiveItem("Home");
              setIsMobileMenuOpen(false);
            }}
            className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeItem === "Home"
                ? "text-sky-600 dark:text-sky-400 font-bold"
                : "text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white"
            }`}
          >
            Home
          </Link>

          {/* About us */}
          <Link
            href="#about"
            onClick={() => {
              setActiveItem("About us");
              setIsMobileMenuOpen(false);
            }}
            className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeItem === "About us"
                ? "text-sky-600 dark:text-sky-400 font-bold"
                : "text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white"
            }`}
          >
            About us
          </Link>

          {/* Services Accordion */}
          <div className="overflow-hidden rounded-xl">
            <button
              type="button"
              onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeItem === "Services"
                  ? "text-sky-600 dark:text-sky-400 font-bold"
                  : "text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  isServicesOpenMobile ? "rotate-180 text-sky-600" : ""
                }`}
              />
            </button>

            {isServicesOpenMobile && (
              <div className="pl-4 pr-1 py-1.5 space-y-3 mt-1">
                {servicesSections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="text-[11px] font-bold text-sky-600 uppercase tracking-wider px-2 py-1">
                      {section.title}
                    </div>
                    <div className="space-y-0.5">
                      {section.items.map((item, iIdx) => (
                        <a
                          key={iIdx}
                          href={item.href}
                          onClick={() => {
                            setActiveItem("Services");
                            setIsMobileMenuOpen(false);
                          }}
                          className="block px-2 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors leading-snug"
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

          {/* Careers */}
          <Link
            href="#careers"
            onClick={() => {
              setActiveItem("Careers");
              setIsMobileMenuOpen(false);
            }}
            className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeItem === "Careers"
                ? "text-sky-600 dark:text-sky-400 font-bold"
                : "text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white"
            }`}
          >
            Careers
          </Link>

          {/* Gallery */}
          <Link
            href="#gallery"
            onClick={() => {
              setActiveItem("Gallery");
              setIsMobileMenuOpen(false);
            }}
            className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeItem === "Gallery"
                ? "text-sky-600 dark:text-sky-400 font-bold"
                : "text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white"
            }`}
          >
            Gallery
          </Link>

          {/* Contact */}
          <Link
            href="#contact"
            onClick={() => {
              setActiveItem("Contact");
              setIsMobileMenuOpen(false);
            }}
            className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeItem === "Contact"
                ? "text-sky-600 dark:text-sky-400 font-bold"
                : "text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shrink-0">
          {/* Contact & Location Info (Text Only + Same Social Icons as lg Screen Top Bar) */}
          <div className="px-1 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            <div>
              <a 
                href="tel:+966135660243" 
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                00966 13 566 0243
              </a>
            </div>

            <div>
              <a 
                href="mailto:info@alattafcompany.com" 
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                info@alattafcompany.com
              </a>
            </div>

            <div className="text-slate-500 dark:text-slate-400 leading-snug">
              6584-Abqaiq 33261-Taif street-Al madiynah
            </div>

            {/* Same Social Icons as used in lg screen top bar */}
            <div className="flex items-center space-x-3.5 pt-1">
              {/* Twitter / X */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#E4405F] hover:text-pink-500 transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#1877F2] hover:text-blue-500 transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full [&>a]:block [&>a]:w-full [&>a>div]:w-full pt-1">
            <LiquidButton
              text="Get a Quote"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              btnColor="#1d4ed8"
              hoverBgColor="#ffffff"
              textColor="#ffffff"
              hoverTextColor="#1d4ed8"
              className="w-full py-3 text-sm font-semibold justify-center"
            />
          </div>
        </div>
      </aside>
    </div>
  </>
);
}
