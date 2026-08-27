"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  Building2, 
  Users 
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Careers", href: "#careers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "General Contracting & Civil Works",
    "Logistics & Heavy Haulage Transport",
    "Electromechanical & MEP Systems",
    "Human Resources & Manpower Solutions",
    "Infrastructure & Earthmoving",
    "Site Logistics & Material Handling",
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Company Profile & Logo */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="bg-white/95 p-2.5 rounded-xl inline-block shadow-sm">
                <Image
                  src="/alattaf-logo.png"
                  alt="Al Attaf Advanced Contracting Company"
                  width={200}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Al Attaf Advanced Contracting Company is a premier contractor delivering heavy construction, comprehensive logistics supply chain solutions, and certified workforce management throughout the Kingdom of Saudi Arabia.
            </p>

            <div className="flex items-center space-x-3 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>HSE Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <Truck className="w-4 h-4 text-sky-400" />
                <span>Logistics Fleet</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((item, index) => (
                <li key={index} className="text-slate-400 hover:text-slate-200 transition-colors flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Headquarters
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <span className="text-slate-400 leading-relaxed">
                  6584-Abqaiq 33261-Taif street-Al madiynah, Kingdom of Saudi Arabia
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a 
                  href="tel:+966135660243" 
                  className="text-slate-400 hover:text-sky-400 transition-colors font-medium"
                >
                  00966 13 566 0243
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a 
                  href="mailto:info@alattafcompany.com" 
                  className="text-slate-400 hover:text-sky-400 transition-colors font-medium"
                >
                  info@alattafcompany.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <div className="text-slate-400 text-xs leading-relaxed">
                  Sunday – Thursday: 8:00 AM – 5:00 PM<br />
                  Friday – Saturday: Closed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Al Attaf Advanced Contracting Company. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#services" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
