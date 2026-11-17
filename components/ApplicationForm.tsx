"use client";

import React, { useState, useRef } from "react";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import LiquidButton from "@/components/LiquidButton";

const inputClass =
  "w-full px-3.5 py-2 rounded-lg border border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white transition-all shadow-2xs";
const labelClass =
  "block text-xs font-semibold text-slate-700 mb-1";

interface ApplicationFormProps {
  /** Optional job title shown in the header. Leave empty for a general application. */
  jobTitle?: string;
  /** Optional department / location meta shown under the title */
  jobMeta?: string;
}

export default function ApplicationForm({
  jobTitle,
  jobMeta,
}: ApplicationFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setFormError("File size exceeds 10 MB. Please upload a smaller file.");
        return;
      }
      setResumeFile(file);
      setFormError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim()
    ) {
      setFormError("Please fill in all required fields.");
      return;
    }
    if (!resumeFile) {
      setFormError("Please upload your resume (PDF or DOCX).");
      return;
    }
    setFormError("");
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({ fullName: "", email: "", mobile: "", message: "" });
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setIsSubmitted(false);
    setFormError("");
  };

  /* ── Success screen ───────────────────────────────────────────── */
  if (isSubmitted) {
    return (
      <div className="py-12 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h4 className="text-xl font-bold text-slate-900">
          Application Submitted!
        </h4>
        <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
          Thank you, <strong className="text-slate-900">{formData.fullName}</strong>.
          {jobTitle ? (
            <>
              {" "}Your application for{" "}
              <strong className="text-blue-700">{jobTitle}</strong> has been received.
            </>
          ) : (
            " Your application has been received."
          )}{" "}
          Our recruitment team will review your credentials and contact you shortly.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors cursor-pointer"
        >
          Submit Another
        </button>
      </div>
    );
  }

  /* ── Form ─────────────────────────────────────────────────────── */
  return (
    <form onSubmit={handleSubmit} className="space-y-3 font-sans">
      {/* Optional header */}
      {jobTitle && (
        <div className="pb-2.5 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Apply for Position
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            <span className="text-blue-700 font-semibold">{jobTitle}</span>
            {jobMeta && (
              <>
                <span className="mx-1.5 text-slate-300">•</span>
                {jobMeta}
              </>
            )}
          </p>
        </div>
      )}

      {/* Error banner */}
      {formError && (
        <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{formError}</span>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className={labelClass}>
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="e.g. Abdullah Al-Ghamdi"
          className={inputClass}
        />
      </div>

      {/* Email & Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. name@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            Mobile <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            placeholder="e.g. +966 5X XXX XXXX"
            className={inputClass}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>
          Message{" "}
          <span className="text-slate-400 text-[11px] normal-case font-normal">
            (Optional)
          </span>
        </label>
        <textarea
          rows={2}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Key Aramco/SCE approvals, notice period, or remarks..."
          className={inputClass + " resize-none"}
        />
      </div>

      {/* Resume Upload */}
      <div>
        <label className={labelClass}>
          Resume <span className="text-red-500">*</span>
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />

        {resumeFile ? (
          <div className="flex items-center justify-between p-2.5 rounded-lg border border-blue-200 bg-blue-50/60">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded bg-blue-600 text-white flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-900 truncate">
                  {resumeFile.name}
                </p>
                <p className="text-[10px] text-slate-500">
                  {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setResumeFile(null);
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
              className="text-xs text-red-600 hover:text-red-700 font-semibold px-2 py-0.5 rounded hover:bg-red-50 cursor-pointer transition-colors"
            >
              Remove
            </button>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border border-dashed border-slate-300 hover:border-blue-500 rounded-lg py-2.5 px-3.5 flex items-center justify-center gap-2 cursor-pointer transition-colors bg-slate-50/60 hover:bg-blue-50/30 group"
          >
            <UploadCloud className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
            <span className="text-xs font-medium text-slate-700 group-hover:text-blue-700">
              Click to attach Resume <span className="text-slate-400 font-normal">(PDF or DOCX, max 10MB)</span>
            </span>
          </div>
        )}
      </div>

      {/* Submit */}
      <div className="pt-1 [&>button]:w-full">
        <LiquidButton
          text={isSubmitting ? "Submitting Application..." : "Submit Application"}
          type="submit"
          btnColor="#1d4ed8"
          hoverBgColor="#1e40af"
          textColor="#ffffff"
          hoverTextColor="#ffffff"
          className="w-full py-2.5 text-xs sm:text-sm rounded-lg font-bold shadow-xs cursor-pointer justify-center"
        />
      </div>
    </form>
  );
}

