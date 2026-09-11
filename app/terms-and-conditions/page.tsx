import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { Scale, CheckCircle2, ShieldAlert, Award, FileCheck, Building2, Mail, Phone } from "lucide-react";

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

      <main className="w-full py-16 sm:py-20 lg:py-24 bg-[#fafafa]">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm space-y-10">
            {/* Header Info */}
            <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Contractual Governance
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Terms &amp; Conditions
                </h1>
              </div>
              <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>
            </div>

            {/* Introduction */}
            <section className="space-y-3.5 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                Welcome to <strong>Al Attaf Advanced Contracting Company</strong> (&quot;AAAC&quot;). By accessing our website (<a href="https://alattafcompany.com" className="text-blue-700 hover:underline">alattafcompany.com</a>) or engaging with our engineering, procurement, construction, and plant maintenance operations, you agree to comply with and be bound by the following Terms &amp; Conditions.
              </p>
              <p>
                AAAC operates under commercial registration <strong>CR # 2059000287</strong>, holds approved <strong>Saudi Aramco Vendor # 10005728</strong>, and delivers specialized contracting solutions in accordance with the regulatory framework of the Kingdom of Saudi Arabia.
              </p>
            </section>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Scale className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Saudi Arabian Law</h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Governed under the commercial codes of the Eastern Province, KSA.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Award className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Aramco HSE Governance</h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Stringent compliance with certified safety and operational protocols.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: Scope of Services */}
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-blue-700" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  1. Scope of Contracting Services
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Al Attaf Advanced Contracting Company specializes in turnkey industrial engineering, maintenance, and facility services across eight core disciplines:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Civil Engineering &amp; Foundations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Electrical Substation &amp; Power Networks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Mechanical Piping &amp; Steel Structures</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Industrial Instrumentation &amp; Control</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Firefighting &amp; Fire Suppression Networks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Industrial HVAC Systems &amp; Ductwork</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Plant Maintenance &amp; Turnaround (T&amp;I)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Integrated Security &amp; Surveillance Systems</span>
                </li>
              </ul>
            </section>

            {/* Section 2: Quotations & Contracts */}
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-blue-700" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  2. Quotations, RFQs &amp; Commercial Agreements
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                All budgetary estimates, preliminary proposals, and online inquiries generated via this platform are indicative and non-binding until formalized into an executed Master Services Agreement (MSA), Purchase Order (PO), or formal Contract signed by an authorized signatory of AAAC.
              </p>
            </section>

            {/* Section 3: HSE & Quality Standards */}
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-5 h-5 text-blue-700" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  3. Health, Safety &amp; Environmental (HSE) Compliance
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Field personnel, project managers, and subcontractors operating on AAAC sites must maintain unwavering compliance with our corporate Safety Management System (SMS), Saudi Aramco Construction Safety Manual (CSM), and local civil defense regulations. Zero tolerance is enforced for safety breaches or uncertified operations.
              </p>
            </section>

            {/* Section 4: Intellectual Property */}
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-blue-700" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  4. Intellectual Property &amp; Technical Documentation
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                All website content, engineering schematics, project photography, brand logos, technical data sheets, and company collateral are the exclusive intellectual property of Al Attaf Advanced Contracting Company. Reproduction, modification, or unauthorized distribution without explicit written authorization is strictly prohibited.
              </p>
            </section>

            {/* Section 5: Governing Law & Jurisdiction */}
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <Scale className="w-5 h-5 text-blue-700" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  5. Governing Law &amp; Judicial Jurisdiction
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These Terms &amp; Conditions and any contractual disputes arising out of the performance of services shall be governed by, interpreted, and enforced in accordance with the laws, royal decrees, and commercial regulations of the Kingdom of Saudi Arabia. The competent courts in the Eastern Province, KSA, shall hold exclusive judicial jurisdiction.
              </p>
            </section>

            {/* Section 6: Inquiries & Contracts Department */}
            <section className="pt-6 border-t border-slate-100 bg-slate-50 p-6 rounded-xl space-y-3">
              <h2 className="text-base font-bold text-slate-900">
                Contracts &amp; Legal Inquiries
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                For contract inquiries, Master Service Agreements (MSA), or clarification regarding our terms of operation, please contact our contracts office:
              </p>
              <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-700" />
                  <a href="mailto:info@alattafcompany.com" className="hover:text-blue-700 font-medium">
                    info@alattafcompany.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-700" />
                  <a href="tel:+966135660243" className="hover:text-blue-700 font-medium">
                    00966 13 566 0243
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
