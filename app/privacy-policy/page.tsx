import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, FileText, UserCheck, HelpCircle, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Al Attaf Advanced Contracting Company",
  description:
    "Review the privacy policy and data governance practices of Al Attaf Advanced Contracting Company in accordance with Saudi Arabian regulations and data protection standards.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 2024";

  return (
    <div className="flex flex-col flex-1 w-full bg-white font-sans">
      <Breadcrumb
        title="Privacy Policy"
        description="Our commitment to safeguarding personal, technical, and commercial data in strict adherence with Saudi Arabian data protection standards."
        image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
        items={[{ label: "Privacy Policy" }]}
        showVisionLogo
      />

      <main className="w-full py-16 sm:py-20 lg:py-24 bg-[#fafafa]">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm space-y-10">
            {/* Header Info */}
            <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Corporate Governance
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Privacy Policy
                </h1>
              </div>
              <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>
            </div>

            {/* Introduction */}
            <section className="space-y-3.5 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                <strong>Al Attaf Advanced Contracting Company</strong> (&quot;AAAC&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), registered under Saudi Ministry of Commerce Commercial Registration <strong>CR # 2059000287</strong> and recognized under <strong>Saudi Aramco Vendor # 10005728</strong>, is committed to upholding the highest standards of data security, privacy, and confidentiality.
              </p>
              <p>
                This Privacy Policy outlines our practices concerning the collection, storage, processing, and protection of information obtained through our website (<a href="https://alattafcompany.com" className="text-blue-700 hover:underline">alattafcompany.com</a>) and our corporate contracting communications, complying with the <strong>Personal Data Protection Law (PDPL)</strong> of the Kingdom of Saudi Arabia.
              </p>
            </section>

            {/* Key Policy Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Saudi PDPL Compliant</h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Strict adherence to Kingdom of Saudi Arabia data protection mandates.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Lock className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Industrial Confidentiality</h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Engineering, procurement, and technical tender records remain strictly non-disclosed.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: Information We Collect */}
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-blue-700" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  1. Information We Collect
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We collect information directly from you when you submit technical RFQs, request quotations, submit vendor inquiries, apply for open employment opportunities, or communicate with our operations offices:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 pl-2">
                <li><strong>Contact Particulars:</strong> Full name, corporate email address, contact phone number, and physical office/site location.</li>
                <li><strong>Commercial &amp; Project Inquiries:</strong> Scope of work, technical specifications, bill of quantities (BOQ), and facility operational parameters.</li>
                <li><strong>Career Submissions:</strong> Curriculum vitae (CV), educational credentials, Aramco/SABIC safety accreditations, and work experience histories.</li>
                <li><strong>Digital Usage Logs:</strong> IP address, device operating system, browser type, and navigation paths collected solely for performance optimization.</li>
              </ul>
            </section>

            {/* Section 2: Purpose of Processing */}
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <UserCheck className="w-5 h-5 text-blue-700" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  2. How We Utilize Collected Information
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                All gathered data is utilized exclusively for legitimate corporate, technical, and regulatory requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 pl-2">
                <li>Preparing industrial bids, technical commercial proposals, and cost estimates.</li>
                <li>Coordinating with clients (including Saudi Aramco and industrial partners) for project mobilization and gate passes.</li>
                <li>Evaluating candidate suitability for engineering, technical, and certified field roles.</li>
                <li>Ensuring compliance with Saudi labor, commercial, and HSE statutory requirements.</li>
              </ul>
            </section>

            {/* Section 3: Data Protection & Non-Disclosure */}
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-blue-700" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  3. Information Security &amp; Non-Disclosure
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We implement stringent physical, electronic, and managerial safeguards to protect personal and engineering data against unauthorized access, destruction, or disclosure. Al Attaf Advanced Contracting Company <strong>never sells, leases, or monetizes client or applicant information</strong> to third parties under any circumstances.
              </p>
            </section>

            {/* Section 4: Your Rights */}
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-5 h-5 text-blue-700" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  4. Your Rights Under Saudi PDPL
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Saudi Personal Data Protection Law, individuals residing in the Kingdom have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 pl-2">
                <li>Request access to personal data held by Al Attaf Advanced Contracting Company.</li>
                <li>Request the rectification, updating, or deletion of personal information.</li>
                <li>Withdraw consent for optional non-essential corporate communications.</li>
              </ul>
            </section>

            {/* Section 5: Contact Corporate Compliance */}
            <section className="pt-6 border-t border-slate-100 bg-slate-50 p-6 rounded-xl space-y-3">
              <h2 className="text-base font-bold text-slate-900">
                Inquiries &amp; Privacy Contact
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                If you have questions regarding this Privacy Policy or wish to exercise your statutory data rights, please contact our legal and compliance department:
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
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-700 mt-0.5" />
                  <span>Headquarters: 6584-Abqaiq 33261-Taif street-Al madiynah, Kingdom of Saudi Arabia</span>
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
