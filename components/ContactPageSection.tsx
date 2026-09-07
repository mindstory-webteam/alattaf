"use client";

import React, {useState} from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {Check, MapPin, Phone, Mail} from "lucide-react";
import LiquidButton from "@/components/LiquidButton";
import ScrollRevealText from "@/components/ScrollRevealText";

// Dynamically import Leaflet map with OpenStreetMap (client-side only to avoid SSR issues)
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[360px] flex items-center justify-center bg-slate-100 text-slate-400 text-xs font-medium">
      Loading OpenStreetMap...
    </div>
  ),
});

export default function ContactPageSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    project: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const footerAddress = "6584-Abqaiq 33261-Taif St, Al Madiynah, Saudi Arabia";
  const footerPhone = "00966 13 566 0243";
  const footerEmail = "info@alattafcompany.com";
  const gmapsUrl =
    "https://www.google.com/maps/search/?api=1&query=6584-Abqaiq+33261-Taif+St+Al+Madiynah+Saudi+Arabia";

  const introText =
    "Al Attaf Advanced Contracting conveniently located in Abqaiq, Eastern Province. You can contact us via e-mail, phone or simply visit our headquarters.";

  return (
    <div className="w-full bg-[#fbfaf6] text-slate-900 font-sans">
      {/* Top Section: CONTACT US */}
      <section className="w-full pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-14 lg:pb-16">
        <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-14 xl:gap-16 items-stretch">
            {/* Left Column: Description with ScrollRevealText, Contact Details & Socials */}
            <div className="lg:col-span-6 flex flex-col justify-start lg:justify-between w-full max-w-full md:max-w-2xl lg:max-w-xl h-auto lg:h-full">
              {/* Dynamic Scroll-Driven Word-by-Word Reveal Text */}
              <ScrollRevealText
                text={introText}
                as="p"
                className="text-[16px] sm:text-xl lg:text-[25px] font-bold leading-relaxed sm:leading-snug tracking-normal sm:tracking-tight text-slate-900 text-justify [text-align:justify] [text-justify:inter-word] [text-align-last:left] hyphens-auto [hyphens:auto]"
              />

              {/* Contact Info & Socials Section with Corner SVGs (no border line) */}
              <div className="relative p-5 sm:p-7 space-y-5 sm:space-y-6 mt-8 sm:mt-10 lg:mt-auto">
                {/* 4 Outer Corner SVGs from Footer */}
                {/* Top-Left Corner */}
                <div className="absolute top-0 left-0 w-[16px] h-[16px] z-30 pointer-events-none">
                  <Image
                    src="/joints/top-left-corner.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="block w-full h-full"
                    unoptimized
                  />
                </div>

                {/* Top-Right Corner */}
                <div className="absolute top-0 right-0 w-[16px] h-[16px] z-30 pointer-events-none">
                  <Image
                    src="/joints/top-right-corner.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="block w-full h-full"
                    unoptimized
                  />
                </div>

                {/* Bottom-Left Corner */}
                <div className="absolute bottom-0 left-0 w-[16px] h-[16px] z-30 pointer-events-none">
                  <Image
                    src="/joints/bottom-left-corner.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="block w-full h-full"
                    unoptimized
                  />
                </div>

                {/* Bottom-Right Corner */}
                <div className="absolute bottom-0 right-0 w-[16px] h-[16px] z-30 pointer-events-none">
                  <Image
                    src="/joints/bottom-right-corner.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="block w-full h-full"
                    unoptimized
                  />
                </div>

                {/* Address - with blue icon, exact location as used in footer */}
                <div className="flex items-start gap-3 min-w-0">
                  <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <a
                      href={gmapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm sm:text-base lg:text-lg font-bold text-slate-900 hover:text-blue-700 transition-colors leading-snug break-words"
                    >
                      {footerAddress}
                    </a>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                      Sunday – Friday | 8:00 am - 5:00 pm
                    </p>
                  </div>
                </div>

                {/* Phone - with blue icon, exact phone as used in footer */}
                <div className="flex items-center gap-3 min-w-0">
                  <Phone className="w-5 h-5 text-blue-700 shrink-0" />
                  <a
                    href={`tel:${footerPhone.replace(/\s+/g, "")}`}
                    className="inline-block text-sm sm:text-base lg:text-lg font-bold text-slate-900 hover:text-blue-700 transition-colors break-words"
                  >
                    {footerPhone}
                  </a>
                </div>

                {/* Email - with blue icon, exact email as used in footer */}
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-5 h-5 text-blue-700 shrink-0" />
                  <a
                    href={`mailto:${footerEmail}`}
                    className="inline-block text-sm sm:text-base lg:text-lg font-bold text-slate-900 hover:text-blue-700 transition-colors break-all sm:break-words"
                  >
                    {footerEmail}
                  </a>
                </div>

                {/* Social Media Links from Footer.tsx */}
                <div className="flex items-center space-x-2 pt-1">
                  {/* Twitter / X */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="w-7 h-7 rounded-md bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-900 hover:scale-105 transition-all duration-200"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-7 h-7 rounded-md bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#E4405F] hover:scale-105 transition-all duration-200"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-7 h-7 rounded-md bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#1877F2] hover:scale-105 transition-all duration-200"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form Box */}
            <div className="lg:col-span-6 w-full max-w-full md:max-w-2xl lg:max-w-lg lg:ml-auto">
              <div className="border border-[#e5e2d8] p-5 sm:p-7 lg:p-8 bg-transparent min-h-fit md:min-h-[480px] lg:min-h-[540px] flex flex-col justify-between">
                <div className="mb-5 sm:mb-6">
                  <h1 className="text-[16px] sm:text-xl lg:text-[25px] font-bold leading-relaxed sm:leading-snug tracking-normal sm:tracking-tight text-slate-900 uppercase">
                    CONTACT US
                  </h1>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    Chat with us or fill out this form:
                  </p>
                </div>

                {submitted ? (
                  <div className="py-8 sm:py-10 my-auto text-center space-y-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                      Thank you for contacting us. We will get back to you shortly.
                    </p>
                    <div className="pt-3">
                      <LiquidButton
                        text="Send another message"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            subject: "",
                            project: "",
                          });
                        }}
                        btnColor="#1d4ed8"
                        hoverBgColor="#ffffff"
                        textColor="#ffffff"
                        hoverTextColor="#1d4ed8"
                        className="px-6 py-2 text-xs sm:text-sm font-semibold rounded-md"
                      />
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex-1 flex flex-col justify-between space-y-4 sm:space-y-5 lg:space-y-6"
                  >
                    {/* 2 Rows, 2 Columns Field Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-5 lg:gap-y-6">
                      {/* Row 1, Col 1: Name */}
                      <div className="border-b border-[#e5e2d8] pb-1">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Name"
                          className="w-full py-2 sm:py-2.5 lg:py-3 bg-transparent text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                        />
                      </div>

                      {/* Row 1, Col 2: Email */}
                      <div className="border-b border-[#e5e2d8] pb-1">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="Email"
                          className="w-full py-2 sm:py-2.5 lg:py-3 bg-transparent text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                        />
                      </div>

                      {/* Row 2, Col 1: Number */}
                      <div className="border-b border-[#e5e2d8] pb-1">
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Number"
                          className="w-full py-2 sm:py-2.5 lg:py-3 bg-transparent text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                        />
                      </div>

                      {/* Row 2, Col 2: Subject */}
                      <div className="border-b border-[#e5e2d8] pb-1">
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          placeholder="Subject"
                          className="w-full py-2 sm:py-2.5 lg:py-3 bg-transparent text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Bottom: Describe your project */}
                    <div className="border-b border-[#e5e2d8] flex-1 min-h-[90px] sm:min-h-[110px] lg:min-h-[130px] flex flex-col pb-1">
                      <textarea
                        rows={4}
                        required
                        value={formData.project}
                        onChange={(e) =>
                          setFormData({ ...formData, project: e.target.value })
                        }
                        placeholder="Describe your project"
                        className="w-full h-full min-h-[80px] sm:min-h-[90px] lg:min-h-[110px] py-2 sm:py-2.5 lg:py-3 bg-transparent text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none resize-none"
                      />
                    </div>

                    {/* Submit Button using LiquidButton */}
                    <div className="pt-2 sm:pt-3">
                      <LiquidButton
                        text={loading ? "Submitting..." : "Submit"}
                        type="submit"
                        btnColor="#1d4ed8"
                        hoverBgColor="#ffffff"
                        textColor="#ffffff"
                        hoverTextColor="#1d4ed8"
                        className="w-36 sm:w-40 py-2.5 sm:py-3 text-xs font-semibold uppercase tracking-wider rounded-md cursor-pointer"
                      />
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: HOW TO FIND US */}
      <section className="w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 space-y-6">
          {/* Heading - matching CONTACT US font styles */}
          <h2 className="text-[16px] sm:text-xl lg:text-[25px] font-bold leading-relaxed sm:leading-snug tracking-normal sm:tracking-tight text-slate-900 uppercase text-justify [text-align:justify] [text-justify:inter-word] [text-align-last:left] hyphens-auto [hyphens:auto]">
            HOW TO FIND US
          </h2>

          {/* Interactive OpenStreetMap container rendered with Leaflet */}
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] border border-[#e5e2d8] overflow-hidden bg-slate-100">
            <LeafletMap
              lat={25.9377}
              lng={49.6738}
              zoom={15}
              locationName="Al Attaf Advanced Contracting Headquarters"
              address={footerAddress}
            />

            {/* "Open in google maps" button in Bottom Left using LiquidButton */}
            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-[500]">
              <LiquidButton
                text="Open in google maps"
                href={gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                btnColor="#1d4ed8"
                hoverBgColor="#ffffff"
                textColor="#ffffff"
                hoverTextColor="#1d4ed8"
                className="px-3.5 py-1.5 text-xs font-semibold rounded-md shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
