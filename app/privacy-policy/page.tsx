import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

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

      <main className="w-full py-16 sm:py-20 lg:py-24 bg-white">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 space-y-10">
          {/* Header Info */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">Last updated: {lastUpdated}</p>
          </div>

          {/* Introduction */}
          <section className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              <strong>Al Attaf Advanced Contracting Company</strong> (&quot;AAAC&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), registered under Saudi Ministry of Commerce Commercial Registration <strong>CR # 2059000287</strong> and recognized under <strong>Saudi Aramco Vendor # 10005728</strong>, is committed to upholding the highest standards of data security, privacy, and confidentiality.
            </p>
            <p>
              This Privacy Policy outlines our practices concerning the collection, storage, processing, and protection of information obtained through our website (<a href="https://alattafcompany.com" className="text-blue-700 hover:underline">alattafcompany.com</a>) and our corporate contracting communications, complying with the <strong>Personal Data Protection Law (PDPL)</strong> of the Kingdom of Saudi Arabia.
            </p>
          </section>

          {/* Section 1: Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              1. Information We Collect
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We collect information directly from you when you submit technical RFQs, request quotations, submit vendor inquiries, apply for open employment opportunities, or communicate with our operations offices:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 pl-2">
              <li><strong>Contact Particulars:</strong> Full name, corporate email address, contact phone number, and physical office/site location.</li>
              <li><strong>Commercial &amp; Project Inquiries:</strong> Scope of work, technical specifications, bill of quantities (BOQ), and facility operational parameters.</li>
              <li><strong>Career Submissions:</strong> Curriculum vitae (CV), educational credentials, Aramco/SABIC safety accreditations, and work experience histories.</li>
              <li><strong>Digital Usage Logs:</strong> IP address, device operating system, browser type, and navigation paths collected solely for performance optimization.</li>
            </ul>
          </section>

          {/* Section 2: Purpose of Processing */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. How We Utilize Collected Information
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              All gathered data is utilized exclusively for legitimate corporate, technical, and regulatory requirements:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 pl-2">
              <li>Preparing industrial bids, technical commercial proposals, and cost estimates.</li>
              <li>Coordinating with clients (including Saudi Aramco and industrial partners) for project mobilization and gate passes.</li>
              <li>Evaluating candidate suitability for engineering, technical, and certified field roles.</li>
              <li>Ensuring compliance with Saudi labor, commercial, and HSE statutory requirements.</li>
            </ul>
          </section>

          {/* Section 3: Data Protection & Non-Disclosure */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              3. Information Security &amp; Non-Disclosure
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We implement stringent physical, electronic, and managerial safeguards to protect personal and engineering data against unauthorized access, destruction, or disclosure. Al Attaf Advanced Contracting Company <strong>never sells, leases, or monetizes client or applicant information</strong> to third parties under any circumstances.
            </p>
          </section>

          {/* Section 4: Your Rights */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. Your Rights Under Saudi PDPL
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Under the Saudi Personal Data Protection Law, individuals residing in the Kingdom have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 pl-2">
              <li>Request access to personal data held by Al Attaf Advanced Contracting Company.</li>
              <li>Request the rectification, updating, or deletion of personal information.</li>
              <li>Withdraw consent for optional non-essential corporate communications.</li>
            </ul>
          </section>

          {/* Section 5: Contact Corporate Compliance */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              5. Inquiries &amp; Privacy Contact
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              If you have questions regarding this Privacy Policy or wish to exercise your statutory data rights, please contact our legal and compliance department:
            </p>
            <div className="space-y-2 text-sm sm:text-base text-slate-700">
              <p>
                Email: <a href="mailto:info@alattafcompany.com" className="text-blue-700 hover:underline font-medium">info@alattafcompany.com</a>
              </p>
              <p>
                Phone: <a href="tel:+966135660243" className="text-blue-700 hover:underline font-medium">00966 13 566 0243</a>
              </p>
              <p>
                Headquarters: 6584-Abqaiq 33261-Taif street-Al madiynah, Kingdom of Saudi Arabia
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
