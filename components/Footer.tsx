"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Careers", href: "#careers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const capabilities = [
    "Civil & Structural Works",
    "Mechanical & Industrial Piping",
    "Electrical & Instrumentation",
    "Plant Maintenance & T&I Services",
    "Heavy Equipment Mobilization",
    "Material Supply to Saudi Aramco",
  ];

  return (
    <footer className="w-full bg-[#0b0f19] text-slate-400 font-sans border-t border-slate-800/80">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Column 1: Brand & Overview (5 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="bg-white/95 px-3 py-2 rounded-xl inline-block shadow-sm">
                <Image
                  src="/alattaf-logo.png"
                  alt="Al Attaf Advanced Contracting Company"
                  width={180}
                  height={50}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify max-w-sm">
              Al Attaf Advanced Contracting Company (AAAC) is a 100% Saudi-owned contractor in Abqaiq delivering turnkey engineering, industrial maintenance, certified workforce, and heavy logistics solutions across the Kingdom since 1978.
            </p>

            {/* Social Media Links (Matching Navbar Top Bar) */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-600 hover:bg-blue-600/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6Z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500 hover:bg-sky-500/10 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-500 hover:bg-pink-500/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Our Capabilities
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {capabilities.map((item, idx) => (
                <li key={idx} className="text-slate-400 hover:text-slate-300 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Headquarters & Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Headquarters
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  6584-Abqaiq 33261-Taif street-Al madiynah, Saudi Arabia
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="tel:+966135660243"
                  className="text-slate-400 hover:text-white transition-colors font-medium"
                >
                  00966 13 566 0243
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:info@alattafcompany.com"
                  className="text-slate-400 hover:text-white transition-colors font-medium"
                >
                  info@alattafcompany.com
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 font-mono space-y-1">
                <div>CR: #2059000287 (Abqaiq)</div>
                <div>Aramco Vendor: #10005728</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Minimal Copyright Bar */}
      <div className="border-t border-slate-900 bg-[#070a11] py-6">
        <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Al Attaf Advanced Contracting Company (AAAC). All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-slate-400 transition-colors">About Us</a>
            <a href="#services" className="hover:text-slate-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
