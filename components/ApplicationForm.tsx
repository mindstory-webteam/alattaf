"use client";

import React, { useState, useRef } from "react";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
  User,
  Mail,
  Phone,
  X,
} from "lucide-react";
import LiquidButton from "@/components/LiquidButton";

const inputClass =
  "w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white transition-all";
const labelClass = "block text-xs font-semibold text-slate-700 mb-1.5";
const iconClass =
  "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none";

const ALLOWED_EXT = [".pdf", ".doc", ".docx"];
const MAX_SIZE = 10 * 1024 * 1024;

interface ApplicationFormProps {
  /** Optional job title shown in the header. Leave empty for a general application. */
  jobTitle?: string;
  /** Optional department / location meta shown under the title */
  jobMeta?: string;
  /** Show the "Apply for Position" header when a jobTitle is given (default: true) */
  showHeader?: boolean;
  /** If provided, the success screen shows a "Done & Close" button that calls this */
  onDone?: () => void;
}

export default function ApplicationForm({
  jobTitle,
  jobMeta,
  showHeader = true,
  onDone,
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
  const [isDragging, setIsDragging] = useState(false);

  const acceptFile = (file: File) => {
    const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) {
      setFormError("Please upload a PDF, DOC or DOCX file.");
      return;
    }
    if (file.size > MAX_SIZE) {
      setFormError("File size exceeds 10 MB. Please upload a smaller file.");
      return;
    }
    setResumeFile(file);
    setFormError("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) acceptFile(e.target.files[0]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) acceptFile(e.dataTransfer.files[0]);
  };

  const removeFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.mobile.trim()) {
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
    removeFile();
    setIsSubmitted(false);
    setFormError("");
  };

  /* ── Success screen ───────────────────────────────────────────── */
  if (isSubmitted) {
    return (
      <div className="py-10 text-center">
        <div className="relative w-16 h-16 mx-auto">
          <span className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-40" />
          <div className="relative w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>
        </div>
        <h4 className="mt-5 text-xl font-bold text-slate-900">Application Submitted!</h4>
        <p className="mt-2 text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
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
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          {onDone && (
            <button
              type="button"
              onClick={onDone}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              Done &amp; Close
            </button>
          )}
          <button
            type="button"
            onClick={handleReset}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors cursor-pointer ${
              onDone
                ? "border border-slate-200 text-slate-700 hover:bg-slate-50"
                : "bg-slate-900 hover:bg-slate-800 text-white"
            }`}
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  /* ── Form ─────────────────────────────────────────────────────── */
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 font-sans">
      {/* Optional header */}
      {jobTitle && showHeader && (
        <div className="pb-3 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">Apply for Position</h3>
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

      {!showHeader && (
        <div>
          <h3 className="text-lg font-bold text-slate-900">Your Details</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Fields marked <span className="text-red-500">*</span> are required.
          </p>
        </div>
      )}

      {/* Error banner */}
      {formError && (
        <div
          role="alert"
          className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{formError}</span>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="af-fullName" className={labelClass}>
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <User className={iconClass} />
          <input
            id="af-fullName"
            type="text"
            required
            autoComplete="name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Abdullah Al-Ghamdi"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email & Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="af-email" className={labelClass}>
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className={iconClass} />
            <input
              id="af-email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="af-mobile" className={labelClass}>
            Mobile <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className={iconClass} />
            <input
              id="af-mobile"
              type="tel"
              required
              autoComplete="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              placeholder="+966 5X XXX XXXX"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="af-message" className={labelClass}>
          Message{" "}
          <span className="text-slate-400 text-[11px] font-normal">(Optional)</span>
        </label>
        <textarea
          id="af-message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Key Aramco/SCE approvals, notice period, or remarks..."
          className={inputClass.replace("pl-10", "pl-3.5") + " resize-none"}
        />
      </div>

      {/* Resume Upload */}
      <div>
        <span className={labelClass}>
          Resume <span className="text-red-500">*</span>
        </span>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />

        {resumeFile ? (
          <div className="flex items-center justify-between gap-3 p-3 rounded-lg border border-blue-200 bg-blue-50/60">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                <FileText className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-900 truncate">{resumeFile.name}</p>
                <p className="text-[11px] text-slate-500">
                  {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              aria-label="Remove file"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div
            role="button"
            tabIndex={0}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`group rounded-lg border-2 border-dashed px-4 py-5 text-center cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600/20 ${
              isDragging
                ? "border-blue-500 bg-blue-50/60"
                : "border-slate-200 bg-slate-50/60 hover:border-blue-400 hover:bg-blue-50/30"
            }`}
          >
            <div className="w-10 h-10 mx-auto rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:border-blue-200 transition-colors">
              <UploadCloud className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <p className="mt-2 text-xs font-semibold text-slate-700">
              <span className="text-blue-700">Click to upload</span> or drag &amp; drop
            </p>
            <p className="mt-0.5 text-[11px] text-slate-400">PDF, DOC or DOCX — max 10 MB</p>
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
          className="w-full py-3 text-sm rounded-lg font-bold shadow-sm cursor-pointer justify-center"
        />
      </div>

      <p className="text-[11px] text-slate-400 text-center leading-relaxed">
        Your information is used only for recruitment purposes.
      </p>
    </form>
  );
}