export const SERVICES = [
  "Certified Translations",
  "Interpreting",
  "Subtitling Services",
] as const;

export const INDUSTRIES = [
  "Pharmaceutical & Life Sciences",
  "Maritime",
  "Academic Books",
  "Legal & Financial",
  "Websites",
  "Agriculture & Agroforestry",
  "Something else",
] as const;

export const PERSONAL_DOC_TYPES = [
  "Birth / Marriage / Death Certificate",
  "Academic Diplomas & Transcripts",
  "Medical Reports & Records",
  "Passport / ID Documents",
  "Driver's License",
  "Court & Legal Documents",
  "Immigration & Visa Documents",
  "Financial Statements & Tax Returns",
  "Something else",
] as const;

export const LANGUAGES = [
  "English",
  "Greek",
  "German",
  "French",
  "Spanish",
  "Italian",
  "Swedish",
  "Portuguese",
  "Finnish",
] as const;

export const COMMON_LANGUAGE_PAIRS: { source: string; target: string }[] = [
  { source: "English", target: "Greek" },
  { source: "Greek", target: "English" },
  { source: "German", target: "Greek" },
  { source: "French", target: "Greek" },
  { source: "English", target: "German" },
  { source: "English", target: "French" },
];

// ─── Service-aware volume presets ─────────────────────────────────────────

export const VOLUME_PRESETS_TRANSLATION = [
  "1–5 pages",
  "5–20 pages",
  "20–50 pages",
  "50–100 pages",
  "100+ pages",
] as const;

export const VOLUME_PRESETS_SUBTITLING = [
  "Under 10 minutes",
  "10–30 minutes",
  "30–60 minutes",
  "1–2 hours",
  "2+ hours / full series",
] as const;

export const VOLUME_PRESETS_INTERPRETING = [
  "1–2 hour meeting",
  "Half-day event",
  "Full-day event",
  "Multi-day conference",
] as const;

// ─── Service × project-type requirement presets ──────────────────────────

export const REQUIREMENT_PRESETS: Record<
  string,
  { personal: string[]; business: string[] }
> = {
  "Certified Translations": {
    personal: [
      "Apostille / legalisation needed",
      "Embassy submission",
      "Sworn translation required",
      "Multiple certified copies",
    ],
    business: [
      "NDA / confidentiality required",
      "Terminology glossary provided",
      "Specific formatting (e.g. patent layout)",
      "Notarisation needed",
    ],
  },
  "Subtitling Services": {
    personal: [
      "Timecoded subtitles (SRT / VTT)",
      "Burn-in (hardcoded) subtitles",
      "Closed captions / SDH",
      "Speaker identification needed",
    ],
    business: [
      "Timecoded subtitles (SRT / VTT)",
      "Burn-in (hardcoded) subtitles",
      "Closed captions / SDH",
      "Speaker identification needed",
    ],
  },
  Interpreting: {
    personal: [
      "Simultaneous interpreting",
      "Consecutive interpreting",
      "Equipment needed",
      "Remote / hybrid setup",
    ],
    business: [
      "Simultaneous interpreting",
      "Consecutive interpreting",
      "Equipment needed",
      "Remote / hybrid setup",
    ],
  },
};

export const TIMELINES = [
  {
    value: "no-rush",
    label: "No rush",
    description: "Standard pricing",
    priceHint: "",
  },
  {
    value: "within-month",
    label: "Within a month",
    description: "Standard pricing",
    priceHint: "",
  },
  {
    value: "within-week",
    label: "Within a week",
    description: "May incur a small surcharge",
    priceHint: "~10–20% surcharge",
  },
  {
    value: "urgent",
    label: "Urgent (< 3 days)",
    description: "Rush fee applies",
    priceHint: "~30–50% surcharge",
  },
] as const;

export const STEP_LABELS = [
  "Services & type",
  "Context",
  "Languages",
  "Volume & timeline",
  "Requirements",
  "Contact",
] as const;

export const TOTAL_STEPS = STEP_LABELS.length;
