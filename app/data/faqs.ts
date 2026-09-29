// app/data/faqs.ts

export interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

export const defaultFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What specialized contracting services does AAAC provide?",
    answer:
      "Al Attaf Advanced Contracting delivers turnkey Civil Works, Mechanical & Industrial Piping, Electrical & Instrumentation, Structural Steel Erection, and Plant Maintenance (T&I) across industrial facilities in Saudi Arabia.",
  },
  {
    id: "faq-2",
    question: "Is AAAC officially approved by Saudi Aramco and industrial partners?",
    answer:
      "Yes. AAAC is officially recognized as an approved vendor under Saudi Aramco Vendor # 10005728 (Dhahran), SABIC affiliates, and registered with the Saudi Ministry of Commerce (CR # 2059000287) to execute specialized subcontract scopes.",
  },
  {
    id: "faq-3",
    question: "What safety, HSE, and quality inspection benchmarks do you enforce?",
    answer:
      "We maintain uncompromising safety protocols aligned strictly with Saudi Aramco Safety Management Systems (SMS), ISO quality standards, and rigorous Non-Destructive Testing (NDT) inspection procedures.",
  },
  {
    id: "faq-4",
    question: "Can AAAC mobilize heavy equipment and skilled workforce Kingdom-wide?",
    answer:
      "Yes. With our centralized headquarters in Abqaiq and dedicated logistics fleet, we rapidly deploy over 1,770+ certified technicians, heavy machinery, and portable site units across all industrial cities.",
  },
  {
    id: "faq-5",
    question: "How do we request a project estimate, site survey, or tender partnership?",
    answer:
      "You can reach out directly to our contracts and engineering team via our contact form, email at info@alattafcompany.com, or phone at 00966 13 566 0243 for prompt RFQ review and consultations.",
  },
];
