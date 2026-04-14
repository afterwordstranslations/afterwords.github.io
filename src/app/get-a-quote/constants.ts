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

// ─── Service-aware requirement presets ────────────────────────────────────

export const REQUIREMENT_PRESETS_TRANSLATION = [
  "Apostille / notarisation needed",
  "Specific terminology glossary",
  "Preserve original formatting",
  "NDA / confidentiality required",
  "Certified / sworn translation",
] as const;

export const REQUIREMENT_PRESETS_SUBTITLING = [
  "Timecoded subtitles (SRT / VTT)",
  "Burn-in (hardcoded) subtitles",
  "Closed captions (incl. sound effects)",
  "Specific style guide / font",
  "NDA / confidentiality required",
] as const;

export const REQUIREMENT_PRESETS_INTERPRETING = [
  "Simultaneous interpreting",
  "Consecutive interpreting",
  "Interpreting equipment needed",
  "Remote / online event",
  "NDA / confidentiality required",
] as const;

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
  "Services",
  "Project type",
  "Context",
  "Languages",
  "Volume",
  "Timeline",
  "Requirements",
  "Review",
  "Contact",
] as const;

export const TOTAL_STEPS = STEP_LABELS.length;
