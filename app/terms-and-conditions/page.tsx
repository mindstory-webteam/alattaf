import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | Al Attaf Advanced Contracting Company",
  description:
    "Review the commercial, technical, and regulatory terms governing engineering contracting, industrial services, and website usage with Al Attaf Advanced Contracting Company.",
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "September 2024";

  return (
    <div className="flex flex-col flex-1 w-full bg-white font-sans">
      <Breadcrumb
        title="Terms & Conditions"
        description="General terms governing technical contracting agreements, engineering proposals, and digital communications across Saudi Arabia."
        image="https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1920"
        items={[{ label: "Terms & Conditions" }]}
        showVisionLogo
      />

      <main className="w-full py-16 sm:py-20 lg:py-24 bg-white">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 space-y-10">
          {/* Header Info */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">Last updated: {lastUpdated}</p>
          </div>

          {/* Introduction */}
          <section className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              Welcome to <strong>Al Attaf Advanced Contracting Company</strong> (&quot;AAAC&quot;). By accessing our website (<a href="https://alattafcompany.com" className="text-blue-700 hover:underline">alattafcompany.com</a>) or engaging with our engineering, procurement, construction, and plant maintenance operations, you agree to comply with and be bound by the following Terms &amp; Conditions.
            </p>
            <p>
              AAAC operates under commercial registration <strong>CR # 2059000287</strong>, holds approved <strong>Saudi Aramco Vendor # 10005728</strong>, and delivers specialized contracting solutions in accordance with the regulatory framework of the Kingdom of Saudi Arabia.
            </p>
          </section>

          {/* Section 1: Scope of Services */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              1. Scope of Contracting Services
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Al Attaf Advanced Contracting Company specializes in industrial engineering, maintenance, and facility services across eight core disciplines:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 pl-2">
              <li>Civil Engineering &amp; Foundations</li>
              <li>Electrical Substation &amp; Power Networks</li>
              <li>Mechanical Piping &amp; Steel Structures</li>
              <li>Industrial Instrumentation &amp; Control</li>
              <li>Firefighting &amp; Fire Suppression Networks</li>
              <li>Industrial HVAC Systems &amp; Ductwork</li>
              <li>Plant Maintenance &amp; Turnaround (T&amp;I)</li>
              <li>Integrated Security &amp; Surveillance Systems</li>
            </ul>
          </section>

          {/* Section 2: Quotations & Contracts */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. Quotations, RFQs &amp; Commercial Agreements
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              All budgetary estimates, preliminary proposals, and online inquiries generated via this platform are indicative and non-binding until formalized into an executed Master Services Agreement (MSA), Purchase Order (PO), or formal Contract signed by an authorized signatory of AAAC.
            </p>
          </section>

          {/* Section 3: HSE & Quality Standards */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              3. Health, Safety &amp; Environmental (HSE) Compliance
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Field personnel, project managers, and subcontractors operating on AAAC sites must maintain unwavering compliance with our corporate Safety Management System (SMS), Saudi Aramco Construction Safety Manual (CSM), and local civil defense regulations. Zero tolerance is enforced for safety breaches or uncertified operations.
            </p>
          </section>

          {/* Section 4: Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. Intellectual Property &amp; Technical Documentation
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              All website content, engineering schematics, project photography, brand logos, technical data sheets, and company collateral are the exclusive intellectual property of Al Attaf Advanced Contracting Company. Reproduction, modification, or unauthorized distribution without explicit written authorization is strictly prohibited.
            </p>
          </section>

          {/* Section 5: Governing Law & Jurisdiction */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              5. Governing Law &amp; Judicial Jurisdiction
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              These Terms &amp; Conditions and any contractual disputes arising out of the performance of services shall be governed by, interpreted, and enforced in accordance with the laws, royal decrees, and commercial regulations of the Kingdom of Saudi Arabia. The competent courts in the Eastern Province, KSA, shall hold exclusive judicial jurisdiction.
            </p>
          </section>

          {/* Section 6: Inquiries & Contracts Department */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              6. Contracts &amp; Legal Inquiries
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              For contract inquiries, Master Service Agreements (MSA), or clarification regarding our terms of operation, please contact our contracts office:
            </p>
            <div className="space-y-2 text-sm sm:text-base text-slate-700">
              <p>
                Email: <a href="mailto:info@alattafcompany.com" className="text-blue-700 hover:underline font-medium">info@alattafcompany.com</a>
              </p>
              <p>
                Phone: <a href="tel:+966135660243" className="text-blue-700 hover:underline font-medium">00966 13 566 0243</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
